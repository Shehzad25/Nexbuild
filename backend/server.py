# from fastapi import FastAPI, APIRouter, HTTPException
# from dotenv import load_dotenv
# from starlette.middleware.cors import CORSMiddleware
# from motor.motor_asyncio import AsyncIOMotorClient
# import os
# import re
# import ipaddress
# import logging
# from pathlib import Path
# from pydantic import BaseModel, Field
# from typing import List
# import uuid
# import httpx
# from html import escape
# from html.parser import HTMLParser
# from urllib.parse import urlparse
# from datetime import datetime, timezone


# logging.basicConfig(
#     level=logging.INFO,
#     format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
# )

# logger = logging.getLogger(__name__)


# ROOT_DIR = Path(__file__).parent
# load_dotenv(ROOT_DIR / '.env')

# mongo_url = os.environ['MONGO_URL']
# client = AsyncIOMotorClient(mongo_url)
# db = client[os.environ['DB_NAME']]

# app = FastAPI()


# @app.get("/health")
# async def health():
#     try:
#         await client.admin.command("ping")

#         return {
#             "status": "ok",
#             "mongodb": "connected"
#         }

#     except Exception as e:
#         logger.exception(f"MongoDB connection failed: {e}")

#         return {
#             "status": "error",
#             "mongodb": "disconnected",
#             "error": str(e)
#         }


# api_router = APIRouter(prefix="/api")


# class EnquiryCreate(BaseModel):
#     name: str = Field(min_length=2, max_length=100)
#     business_name: str = Field(default="", max_length=150)
#     email: str = Field(pattern=r"^[^@\s]+@[^@\s]+\.[^@\s]+$")
#     phone: str = Field(pattern=r"^[+]?[\d\s\-]{8,16}$")
#     service: str = Field(min_length=2, max_length=100)
#     budget: str = Field(default="", max_length=100)
#     message: str = Field(min_length=10, max_length=2000)


# class Enquiry(EnquiryCreate):
#     id: str = Field(default_factory=lambda: str(uuid.uuid4()))
#     created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


# EMAIL_BASE_URL = "https://integrations.emergentagent.com"
# EMAIL_KEY = os.environ["EMERGENT_EMAIL_KEY"]
# EMAIL_FROM_NAME = os.environ["EMAIL_FROM_NAME"]
# CONTACT_EMAIL = os.environ["CONTACT_EMAIL"]
# CONTACT_EMAIL_CC = os.environ.get("CONTACT_EMAIL_CC")

# _SHORTENERS = ("bit.ly", "tinyurl.com", "t.co", "is.gd", "cutt.ly", "goo.gl", "rebrand.ly")
# _CRED_ASK = ("reply with your password", "reply with the code", "send your password", "cvv",
#              "send us your password", "enter your password below", "confirm your card number",
#              "your full card number", "seed phrase", "recovery phrase", "verify your card",
#              "social security number", "confirm your bank details")
# _HOSTISH = re.compile(r"\b(?:https?://)?((?:[a-z0-9-]+\.)+[a-z]{2,})", re.I)


# def _host_ok(host: str) -> bool:
#     if not host or "xn--" in host:
#         return False
#     try:
#         ipaddress.ip_address(host)
#         return False
#     except ValueError:
#         pass
#     return not any(host == s or host.endswith("." + s) for s in _SHORTENERS)


# def _same_site(shown: str, real: str) -> bool:
#     return shown == real or real.endswith("." + shown) or shown.endswith("." + real)


# class _EmailScan(HTMLParser):
#     def __init__(self):
#         super().__init__()
#         self.tags, self.urls, self.anchors = set(), [], []
#         self._href, self._text = None, []
#     def handle_starttag(self, tag, attrs):
#         self.tags.add(tag.lower())
#         self.urls += [v for k, v in attrs if k.lower() in ("href", "src") and v]
#         if tag.lower() == "a":
#             self._href = dict((k.lower(), v) for k, v in attrs).get("href")
#             self._text = []
#     def handle_data(self, data):
#         if self._href is not None:
#             self._text.append(data)
#     def handle_endtag(self, tag):
#         if tag.lower() == "a" and self._href is not None:
#             self.anchors.append((self._href, "".join(self._text)))
#             self._href, self._text = None, []


# def _assert_safe_email(subject: str, html: str) -> None:
#     scan = _EmailScan(); scan.feed(html)
#     if scan.tags & {"form", "input", "textarea", "select"}:
#         raise ValueError("No forms or input fields in email (G2)")
#     body = f"{subject}\n{html}".lower()
#     for p in _CRED_ASK:
#         if p in body:
#             raise ValueError(f"Email asks the recipient for credentials: {p!r} (G2)")
#     for url in scan.urls:
#         low = url.strip().lower()
#         if low.startswith(("mailto:", "tel:", "cid:", "#")):
#             continue
#         if not low.startswith("https://"):
#             raise ValueError(f"Email links/assets must be absolute https: {url!r} (G3)")
#         host = urlparse(low).hostname or ""
#         if not _host_ok(host) or urlparse(low).username is not None:
#             raise ValueError(f"Shortened, numeric-host or credential-bearing URL: {url!r} (G3)")
#     for href, text in scan.anchors:
#         real = urlparse(href.strip().lower()).hostname or ""
#         if not real:
#             continue
#         for m in _HOSTISH.finditer(text):
#             if not _same_site(m.group(1).lower(), real):
#                 raise ValueError(f"Anchor text {m.group(1)!r} != real link host {real!r} (G3)")


# async def send_email(
#     *,
#     to: list,
#     subject: str,
#     html: str,
#     reply_to: str | None = None
# ) -> str | None:

#     try:
#         # Validate email HTML inside try block
#         _assert_safe_email(subject, html)

#         payload = {
#             "to": to,
#             "subject": subject,
#             "html": html,
#             "from_name": EMAIL_FROM_NAME,
#         }

#         if reply_to:
#             payload["contact_email"] = reply_to

#         async with httpx.AsyncClient(timeout=30) as client:
#             resp = await client.post(
#                 f"{EMAIL_BASE_URL}/api/v1/email/send",
#                 headers={"X-Email-Key": EMAIL_KEY},
#                 json=payload,
#             )

#         resp.raise_for_status()

#         return resp.json().get("id")

#     except httpx.HTTPStatusError as e:
#         logger.error(
#             f"Email API failed: {e.response.status_code} "
#             f"{e.response.text}"
#         )
#         raise HTTPException(
#             status_code=502,
#             detail="Failed to send enquiry email"
#         )

#     except Exception as e:
#         logger.exception(f"Email send failed: {e}")
#         raise HTTPException(
#             status_code=500,
#             detail="Failed to send enquiry email"
#         )

# def _enquiry_email_html(e: "Enquiry") -> str:
#     def row(label: str, value: str) -> str:
#         return (
#             f'<tr><td style="padding:10px 14px;font-size:13px;color:#64748b;width:130px;vertical-align:top">{label}</td>'
#             f'<td style="padding:10px 14px;font-size:14px;color:#0f172a;font-weight:600">{value}</td></tr>'
#         )
#     rows = (
#         row("Name", escape(e.name))
#         + row("Business", escape(e.business_name) or "—")
#         + row("Email", escape(e.email))
#         + row("Phone", escape(e.phone))
#         + row("Service", escape(e.service))
#         + row("Budget", escape(e.budget) or "—")
#     )
#     return (
#         '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f0f6ff;padding:32px 16px">'
#         '<tr><td align="center">'
#         '<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;font-family:Arial,sans-serif;border:1px solid #dbe7fb">'
#         '<tr><td style="background:#1D6FF2;padding:20px 28px">'
#         '<p style="margin:0;color:#ffffff;font-size:18px;font-weight:bold">New Website / Project Enquiry</p>'
#         '<p style="margin:4px 0 0;color:#dbeafe;font-size:12px">NexBuild Tech &amp; Services</p>'
#         '</td></tr>'
#         f'<tr><td style="padding:12px 14px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0">{rows}</table></td></tr>'
#         '<tr><td style="padding:6px 14px 22px">'
#         '<p style="margin:0 0 6px;font-size:13px;color:#64748b">Project Details:</p>'
#         f'<p style="margin:0;font-size:14px;color:#0f172a;line-height:1.6;white-space:pre-wrap">{escape(e.message)}</p>'
#         '</td></tr>'
#         '<tr><td style="padding:16px 28px;background:#f8fafc;border-top:1px solid #e2e8f0">'
#         '<p style="margin:0;font-size:12px;color:#94a3b8">Submitted through the NexBuild Tech &amp; Services website. '
#         'Hit Reply to respond directly to the customer.</p>'
#         '</td></tr></table></td></tr></table>'
#     )


# @api_router.get("/")
# async def root():
#     return {"message": "NexBuild Tech & Services API"}


# @api_router.post("/enquiries", status_code=201)
# async def create_enquiry(input: EnquiryCreate):
#     try:
#         enquiry = Enquiry(**input.model_dump())

#         # Save enquiry to MongoDB
#         await db.enquiries.insert_one(enquiry.model_dump())

#         logger.info(
#             f"Enquiry saved successfully: {enquiry.id}"
#         )

#         recipients = [CONTACT_EMAIL]

#         if CONTACT_EMAIL_CC:
#             recipients.append(CONTACT_EMAIL_CC)

#         email_id = await send_email(
#             to=recipients,
#             subject="New Project Enquiry — NexBuild Tech & Services",
#             html=_enquiry_email_html(enquiry),
#             reply_to=enquiry.email,
#         )

#         logger.info(
#             f"Enquiry email sent successfully: {email_id}"
#         )

#         return {
#             "success": True,
#             "message": "Enquiry sent successfully. Our team will contact you soon.",
#             "id": enquiry.id,
#             "email_id": email_id,
#         }

#     except HTTPException:
#         raise

#     except Exception as e:
#         logger.exception(
#             f"CREATE ENQUIRY FAILED: {e}"
#         )

#         raise HTTPException(
#             status_code=500,
#             detail="Failed to process enquiry"
#         )

# @api_router.get("/enquiries")
# async def list_enquiries():
#     items = await db.enquiries.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
#     return {"count": len(items), "enquiries": items}


# app.include_router(api_router)

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=[
#         "https://nexbuild-bice.vercel.app",
#     ],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# logging.basicConfig(
#     level=logging.INFO,
#     format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
# )
# logger = logging.getLogger(__name__)


# @app.on_event("shutdown")
# async def shutdown_db_client():
#     client.close()
from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import re
import ipaddress
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List
import uuid
import httpx
from html import escape
from html.parser import HTMLParser
from urllib.parse import urlparse
from datetime import datetime, timezone


logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)

logger = logging.getLogger(__name__)


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()


@app.get("/health")
async def health():
    try:
        await client.admin.command("ping")

        return {
            "status": "ok",
            "mongodb": "connected"
        }

    except Exception as e:
        logger.exception(f"MongoDB connection failed: {e}")

        return {
            "status": "error",
            "mongodb": "disconnected",
            "error": str(e)
        }


api_router = APIRouter(prefix="/api")


class EnquiryCreate(BaseModel):
    name: str = Field(min_length=2, max_length=100)
    business_name: str = Field(default="", max_length=150)
    email: str = Field(pattern=r"^[^@\s]+@[^@\s]+\.[^@\s]+$")
    phone: str = Field(pattern=r"^[+]?[\d\s\-]{8,16}$")
    service: str = Field(min_length=2, max_length=100)
    budget: str = Field(default="", max_length=100)
    message: str = Field(min_length=10, max_length=2000)


class Enquiry(EnquiryCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


# ---------------------------------------------------------------------------
# Email config — Resend (https://resend.com)
# ---------------------------------------------------------------------------
RESEND_API_URL = "https://api.resend.com/emails"
EMAIL_API_KEY = os.environ["RESEND_API_KEY"]
# Use your verified domain once set up, e.g. "NexBuild <enquiries@nexbuild.com>"
# Until then, Resend's shared test sender works without domain verification.
EMAIL_FROM_NAME = os.environ.get("EMAIL_FROM_NAME", "NexBuild Tech & Services")
EMAIL_FROM_ADDRESS = os.environ.get("EMAIL_FROM_ADDRESS", "onboarding@resend.dev")
CONTACT_EMAIL = os.environ["CONTACT_EMAIL"]
CONTACT_EMAIL_CC = os.environ.get("CONTACT_EMAIL_CC")

_SHORTENERS = ("bit.ly", "tinyurl.com", "t.co", "is.gd", "cutt.ly", "goo.gl", "rebrand.ly")
_CRED_ASK = ("reply with your password", "reply with the code", "send your password", "cvv",
             "send us your password", "enter your password below", "confirm your card number",
             "your full card number", "seed phrase", "recovery phrase", "verify your card",
             "social security number", "confirm your bank details")
_HOSTISH = re.compile(r"\b(?:https?://)?((?:[a-z0-9-]+\.)+[a-z]{2,})", re.I)


def _host_ok(host: str) -> bool:
    if not host or "xn--" in host:
        return False
    try:
        ipaddress.ip_address(host)
        return False
    except ValueError:
        pass
    return not any(host == s or host.endswith("." + s) for s in _SHORTENERS)


def _same_site(shown: str, real: str) -> bool:
    return shown == real or real.endswith("." + shown) or shown.endswith("." + real)


class _EmailScan(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags, self.urls, self.anchors = set(), [], []
        self._href, self._text = None, []
    def handle_starttag(self, tag, attrs):
        self.tags.add(tag.lower())
        self.urls += [v for k, v in attrs if k.lower() in ("href", "src") and v]
        if tag.lower() == "a":
            self._href = dict((k.lower(), v) for k, v in attrs).get("href")
            self._text = []
    def handle_data(self, data):
        if self._href is not None:
            self._text.append(data)
    def handle_endtag(self, tag):
        if tag.lower() == "a" and self._href is not None:
            self.anchors.append((self._href, "".join(self._text)))
            self._href, self._text = None, []


def _assert_safe_email(subject: str, html: str) -> None:
    scan = _EmailScan(); scan.feed(html)
    if scan.tags & {"form", "input", "textarea", "select"}:
        raise ValueError("No forms or input fields in email (G2)")
    body = f"{subject}\n{html}".lower()
    for p in _CRED_ASK:
        if p in body:
            raise ValueError(f"Email asks the recipient for credentials: {p!r} (G2)")
    for url in scan.urls:
        low = url.strip().lower()
        if low.startswith(("mailto:", "tel:", "cid:", "#")):
            continue
        if not low.startswith("https://"):
            raise ValueError(f"Email links/assets must be absolute https: {url!r} (G3)")
        host = urlparse(low).hostname or ""
        if not _host_ok(host) or urlparse(low).username is not None:
            raise ValueError(f"Shortened, numeric-host or credential-bearing URL: {url!r} (G3)")
    for href, text in scan.anchors:
        real = urlparse(href.strip().lower()).hostname or ""
        if not real:
            continue
        for m in _HOSTISH.finditer(text):
            if not _same_site(m.group(1).lower(), real):
                raise ValueError(f"Anchor text {m.group(1)!r} != real link host {real!r} (G3)")


async def send_email(
    *,
    to: list,
    subject: str,
    html: str,
    reply_to: str | None = None
) -> str | None:
    """
    Sends an email via Resend. Raises HTTPException on failure so callers
    can decide whether to treat it as fatal (see create_enquiry, which
    treats email failure as non-fatal since the enquiry is already saved).
    """
    try:
        _assert_safe_email(subject, html)

        payload = {
            "from": f"{EMAIL_FROM_NAME} <{EMAIL_FROM_ADDRESS}>",
            "to": to,
            "subject": subject,
            "html": html,
        }
        if reply_to:
            payload["reply_to"] = reply_to

        async with httpx.AsyncClient(timeout=30) as http_client:
            resp = await http_client.post(
                RESEND_API_URL,
                headers={
                    "Authorization": f"Bearer {EMAIL_API_KEY}",
                    "Content-Type": "application/json",
                },
                json=payload,
            )

        resp.raise_for_status()
        return resp.json().get("id")

    except httpx.HTTPStatusError as e:
        logger.error(
            f"Email API failed: {e.response.status_code} "
            f"{e.response.text}"
        )
        raise HTTPException(
            status_code=502,
            detail="Failed to send enquiry email"
        )

    except Exception as e:
        logger.exception(f"Email send failed: {e}")
        raise HTTPException(
            status_code=500,
            detail="Failed to send enquiry email"
        )


def _enquiry_email_html(e: "Enquiry") -> str:
    def row(label: str, value: str) -> str:
        return (
            f'<tr><td style="padding:10px 14px;font-size:13px;color:#64748b;width:130px;vertical-align:top">{label}</td>'
            f'<td style="padding:10px 14px;font-size:14px;color:#0f172a;font-weight:600">{value}</td></tr>'
        )
    rows = (
        row("Name", escape(e.name))
        + row("Business", escape(e.business_name) or "—")
        + row("Email", escape(e.email))
        + row("Phone", escape(e.phone))
        + row("Service", escape(e.service))
        + row("Budget", escape(e.budget) or "—")
    )
    return (
        '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f0f6ff;padding:32px 16px">'
        '<tr><td align="center">'
        '<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;font-family:Arial,sans-serif;border:1px solid #dbe7fb">'
        '<tr><td style="background:#1D6FF2;padding:20px 28px">'
        '<p style="margin:0;color:#ffffff;font-size:18px;font-weight:bold">New Website / Project Enquiry</p>'
        '<p style="margin:4px 0 0;color:#dbeafe;font-size:12px">NexBuild Tech &amp; Services</p>'
        '</td></tr>'
        f'<tr><td style="padding:12px 14px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0">{rows}</table></td></tr>'
        '<tr><td style="padding:6px 14px 22px">'
        '<p style="margin:0 0 6px;font-size:13px;color:#64748b">Project Details:</p>'
        f'<p style="margin:0;font-size:14px;color:#0f172a;line-height:1.6;white-space:pre-wrap">{escape(e.message)}</p>'
        '</td></tr>'
        '<tr><td style="padding:16px 28px;background:#f8fafc;border-top:1px solid #e2e8f0">'
        '<p style="margin:0;font-size:12px;color:#94a3b8">Submitted through the NexBuild Tech &amp; Services website. '
        'Hit Reply to respond directly to the customer.</p>'
        '</td></tr></table></td></tr></table>'
    )


@api_router.get("/")
async def root():
    return {"message": "NexBuild Tech & Services API"}


@api_router.post("/enquiries", status_code=201)
async def create_enquiry(input: EnquiryCreate):
    try:
        enquiry = Enquiry(**input.model_dump())

        # Save enquiry to MongoDB — this is the source of truth.
        await db.enquiries.insert_one(enquiry.model_dump())

        logger.info(
            f"Enquiry saved successfully: {enquiry.id}"
        )

        recipients = [CONTACT_EMAIL]

        if CONTACT_EMAIL_CC:
            recipients.append(CONTACT_EMAIL_CC)

        # Email is a "nice to have" notification, not the source of truth.
        # If it fails, log it but still return success to the user —
        # the enquiry is already safely stored in MongoDB.
        email_id = None
        try:
            email_id = await send_email(
                to=recipients,
                subject="New Project Enquiry — NexBuild Tech & Services",
                html=_enquiry_email_html(enquiry),
                reply_to=enquiry.email,
            )
            logger.info(
                f"Enquiry email sent successfully: {email_id}"
            )
        except HTTPException as email_err:
            logger.error(
                f"Enquiry {enquiry.id} saved, but notification email failed: {email_err.detail}"
            )

        return {
            "success": True,
            "message": "Enquiry sent successfully. Our team will contact you soon.",
            "id": enquiry.id,
            "email_id": email_id,
        }

    except Exception as e:
        logger.exception(
            f"CREATE ENQUIRY FAILED: {e}"
        )

        raise HTTPException(
            status_code=500,
            detail="Failed to process enquiry"
        )

@api_router.get("/enquiries")
async def list_enquiries():
    items = await db.enquiries.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return {"count": len(items), "enquiries": items}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://nexbuild-bice.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
# NexBuild Tech & Services — PRD

## Original Problem Statement
Build a modern, premium, professional, fully responsive business website for NexBuild Tech & Services ("Building Solutions. Empowering Growth." — Innovate • Automate • Elevate). Light, clean, blue-focused premium palette (white/off-white, light blue sections, NexBuild blue #1D6FF2 accent, navy headings, subtle cyan glow). Use the uploaded NexBuild logo as-is. Sections: sticky navbar, hero with device mockups + floating cards, stats, about, 8 services, 8 solutions-by-business-type, filterable portfolio, why-us, 7-step process timeline, AI & automation section, SEO section, testimonial carousel, FAQ accordion, enquiry form with validation, 3 team contact cards (tel/mailto), WhatsApp floating button, scroll-to-top, multi-column footer. SEO foundations, Framer Motion animations, mobile-first responsive, no dead buttons.

## User Personas
- Small business / shop owners looking for a website + local visibility
- Schools & educational institutions needing websites, admission & communication systems
- Startups needing MVPs, landing pages, branding
- Professionals & service businesses needing portfolios, booking, lead generation
- Growing companies needing dashboards, AI automation, long-term support

## Architecture
- Frontend: React 19 + Tailwind CSS + Framer Motion 11 (single-page, anchor navigation), components in `src/components/`, content centralized in `src/data/site.js`
- Backend: FastAPI (`/api` prefix) — POST `/api/enquiries` (validated via pydantic), GET `/api/enquiries`, GET `/api/` health
- Database: MongoDB via MONGO_URL, `enquiries` collection
- Logo: uploaded brand asset processed (circular alpha mask) → `/public/assets/logo.png` + favicon

## Implemented (2026-08-15)
- Sticky glassmorphism navbar (compacts + shadows on scroll), animated mobile hamburger menu
- Hero: staggered text reveal, CSS-built laptop + phone mockups showing NexBuild mini-UI, 4 floating glass cards, grid + glow background
- Stats strip with animated counters (15+, 6+, 100%, 24/7)
- About section with team image + floating "Your Vision. Our Expertise." badge
- 8 service cards with icons, tags, hover lift, Learn More → prefills contact form service
- 8 solutions-by-business cards
- Portfolio: 7 projects, filter tabs (All/Websites/Apps/AI/Branding) with AnimatePresence, project detail modal
- Why Choose NexBuild (6 cards), Process timeline (7 steps, alternating, scroll-animated)
- AI & Automation dark navy section with animated glow + 6 features
- SEO section with CSS-built Google search-result mockup
- Testimonial carousel (auto-advance, prev/next, dots) — sample testimonials, structured in data file for easy replacement
- FAQ accordion (10 questions)
- Contact form: full client + server validation, success state, toast, persists enquiries to MongoDB
- Team contact cards (call/email buttons, tel:/mailto:), WhatsApp floating button (wa.me/919730525070 prefilled), scroll-to-top
- Footer: 4 columns, team contacts, © 2026, brand keywords
- SEO: meta title/description, Open Graph, JSON-LD, semantic HTML, alt text, descriptive data-testids

## Revision 2 (2026-08-15) — Restructure + real email delivery
- Hero floating cards (Web Development, AI Solutions, Mobile Apps, Digital Growth) now render on mobile/tablet too — compact, staggered, positioned inside viewport
- REMOVED: stats strip (15+/6+/100%/24/7) and entire "Our Work" portfolio section
- ADDED: "Why Build With NexBuild?" (4 benefit cards) right after hero
- ADDED: "What Can We Build For You?" (6 cards, after Solutions)
- ADDED: light-gradient CTA section "Have an Idea? Let's Build It." (Start Your Project → #contact, Talk to Us → tel:9730525070) before Contact
- REMOVED fake testimonials → replaced with "The NexBuild Promise" honest commitment carousel (nav link now "Promise", anchor #testimonials kept); SEO mockup reworded as clearly illustrative
- Enquiry form: relabeled fields (Full Name, Business / Organization Name, Email Address, Phone Number, Service Required, Budget Range, Project Details), "Sending Enquiry..." loading state, exact success message, friendly error toast, duplicate-submit prevention, larger mobile inputs (text-base)
- Backend now SENDS A REAL EMAIL per enquiry via Emergent managed Resend proxy (EMERGENT_EMAIL_KEY in backend/.env): To khanshehzad2698@gmail.com + r.suryarao07@gmail.com, subject "New Project Enquiry — NexBuild Tech & Services", branded HTML template, Reply-To = customer email. Delivery confirmed via provider email_id (e.g. 0a05eaf7-...)
- Phone links now literal tel:9730525070 / tel:8793280415 / tel:8856841644
- Fixed mobile horizontal overflow (overflow-x on html) and mobile nav anchor scrolls (JS scrollIntoView after menu closes); floating buttons slimmed on mobile
- New page flow: Navbar → Hero → Why Build → About → Services → Solutions → What Can We Build → AI & Automation → SEO → Why Choose → Process → Promise → FAQ → CTA → Contact → Footer
- Verified: 320/390/414/768/1440/1920 no horizontal scroll, mobile nav + Get Started scroll correctly, form validation/loading/success, enquiries persisted (5 in DB), email accepted by provider

## Revision 3 (2026-08-15) — Multi-page React Router site
- Converted single-page site into 9 real routes: / /about /services /solutions /why-us /process /promise /faq /contact (BrowserRouter + AnimatePresence page transitions + ScrollToTop)
- Navbar: exactly 9 items (Home, About, Services, Solutions, Why Us, Process, Promise, FAQ, Contact), NavLink active highlighting (brand blue + underline), logo → /, Get Started → /contact; mobile menu navigates + auto-closes + lands at top
- Home (/): hero + short previews only (About, Services, Solutions, WhyBuild→/why-us, Process chips, Promise carousel, AI highlight, CTA, team contact strip)
- New pages: AboutPage (About + Vision/Mission + 6 Values + Why We Started + CTA), ServicesPage (8 detailed cards w/ features + business benefits + Get a Quote → /contact?service=…, plus SEO section), SolutionsPage, WhyUsPage (updated copy per spec), ProcessPage, PromisePage (7 promise cards + "Your Vision. Our Expertise." + CTA), FAQPage (+Contact CTA), ContactPage
- Contact prefill now via query param (?service=) instead of window event
- Footer links converted to router Links matching the 9-page structure
- Rushikesh's email updated to r.suryarao007@gmail.com everywhere (TEAM data)
- IMPORTANT: email CC to r.suryarao007@gmail.com was REMOVED — the email provider rejected it as "undeliverable recipient" (422), which broke enquiry sending (502). Enquiries now go only to CONTACT_EMAIL=khanshehzad2698@gmail.com. Verify that Gmail address exists before re-adding any CC
- Deleted Services.jsx (superseded by ServicesPage + HomePage preview); Solutions.jsx/Process.jsx/FAQ.jsx/Contact.jsx/WhyUs.jsx reused as page content
- Verified: all 9 routes direct-load OK, active nav state, service prefill, browser back/forward, mobile menu nav + close + top-scroll, form submit success + email 202 Accepted

## Verification Done
- curl: POST /api/enquiries valid → 201 stored; invalid payload → 422; GET list confirms entries
- Browser: form fill → success screen + toast; project filter; project modal; FAQ toggle; mobile 390px (no horizontal overflow, hamburger works)
- Not checked: real WhatsApp send (external link only), actual email delivery (not configured — enquiries stored in DB only)

## Backlog (P0/P1/P2)
- P0: None blocking
- P1: Email notifications on new enquiry (Resend), admin view/login for enquiries, replace sample testimonials with real ones, replace example projects with real client work
- P2: Blog/insights section, Google Maps embed, analytics events, multi-language (EN/HI/MR), live chat widget, per-service detail pages for SEO

## Next Tasks
1. Ask user for real testimonials/projects to replace samples
2. Add enquiry email notification (Resend playbook via integration_expert)
3. Simple admin page to view enquiries

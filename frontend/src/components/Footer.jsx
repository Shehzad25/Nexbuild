import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import { TEAM } from "../data/site";

const COMPANY_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Why Us", to: "/why-us" },
  { label: "Promise", to: "/promise" },
];

const SERVICE_LINKS = [
  { label: "Services", to: "/services" },
  { label: "Solutions", to: "/solutions" },
  { label: "Process", to: "/process" },
  { label: "FAQ", to: "/faq" },
];

const Footer = () => (
  <footer data-testid="footer" className="bg-navy text-slate-300">
    <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
      <div>
        <Link to="/" className="flex items-center gap-3" data-testid="footer-logo">
          <img src="/assets/logo.png" alt="NexBuild Tech & Services logo" className="h-12 w-12 rounded-full" loading="lazy" />
          <span className="leading-tight">
            <span className="block font-heading font-bold text-white text-lg">NexBuild</span>
            <span className="block text-[10px] font-semibold tracking-[0.18em] uppercase text-cyan-300">Tech &amp; Services</span>
          </span>
        </Link>
        <p className="mt-5 text-sm leading-relaxed text-slate-400">
          Building Solutions. Empowering Growth.
        </p>
        <p className="mt-3 text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
          Innovate <span className="text-brand-400">•</span> Automate <span className="text-brand-400">•</span> Elevate
        </p>
      </div>

      <nav aria-label="Company links">
        <h3 className="font-heading font-bold text-white text-sm tracking-wide uppercase">Company</h3>
        <ul className="mt-5 space-y-3">
          {COMPANY_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                data-testid={`footer-company-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm text-slate-400 hover:text-cyan-300 transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav aria-label="Services links">
        <h3 className="font-heading font-bold text-white text-sm tracking-wide uppercase">Services</h3>
        <ul className="mt-5 space-y-3">
          {SERVICE_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                data-testid={`footer-service-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm text-slate-400 hover:text-cyan-300 transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <h3 className="font-heading font-bold text-white text-sm tracking-wide uppercase">Contact</h3>
        <Link
          to="/contact"
          data-testid="footer-contact-link"
          className="mt-5 inline-block text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition-colors duration-200"
        >
          Contact Us →
        </Link>
        <ul className="mt-4 space-y-5">
          {TEAM.map((member) => (
            <li key={member.email}>
              <p className="text-sm font-semibold text-white">{member.name}</p>
              <a
                href={`tel:${member.phoneIntl}`}
                data-testid={`footer-phone-${member.initials.toLowerCase()}`}
                className="mt-1 flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-300 transition-colors duration-200"
              >
                <Phone className="h-3.5 w-3.5 text-brand-400" /> {member.phone}
              </a>
              <a
                href={`mailto:${member.email}`}
                data-testid={`footer-email-${member.initials.toLowerCase()}`}
                className="mt-1 flex items-center gap-2 text-xs text-slate-400 hover:text-cyan-300 transition-colors duration-200 break-all"
              >
                <Mail className="h-3.5 w-3.5 shrink-0 text-brand-400" /> {member.email}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-slate-500" data-testid="footer-copyright">
          © 2026 NexBuild Tech &amp; Services. All Rights Reserved.
        </p>
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-500">
          Innovate • Automate • Elevate
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

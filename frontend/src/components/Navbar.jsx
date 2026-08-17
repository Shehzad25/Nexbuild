import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "../data/site";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkTestId = (label) => label.toLowerCase().replace(/\s+/g, "-");

  return (
    <header
      data-testid="navbar"
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl shadow-[0_4px_24px_rgba(15,23,42,0.08)]"
          : "bg-white/60 backdrop-blur-md"
      }`}
    >
      <nav
        className={`max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between transition-[padding] duration-300 ${
          scrolled ? "py-2.5" : "py-4"
        }`}
        aria-label="Main navigation"
      >
        <Link to="/" className="flex items-center gap-3 shrink-0" data-testid="navbar-logo-link">
          <img
            src="/assets/logo.png"
            alt="NexBuild Tech & Services logo"
            className={`rounded-full transition-[width,height] duration-300 ${scrolled ? "h-9 w-9" : "h-11 w-11"}`}
            width="44"
            height="44"
          />
          <span className="leading-tight">
            <span className={`block font-heading font-bold text-navy transition-[font-size] duration-300 ${scrolled ? "text-base" : "text-lg"}`}>
              NexBuild
            </span>
            <span className="block text-[10px] font-semibold tracking-[0.18em] uppercase text-brand-600">
              Tech &amp; Services
            </span>
          </span>
        </Link>

        <ul className="hidden xl:flex items-center gap-6" data-testid="navbar-desktop-menu">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                data-testid={`nav-link-${linkTestId(link.label)}`}
                className={({ isActive }) =>
                  `relative inline-block pb-1 text-sm font-medium transition-colors duration-200 ${
                    isActive ? "text-brand-600" : "text-slate-600 hover:text-brand-600"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute left-0 -bottom-0.5 h-0.5 rounded-full bg-brand-500 transition-[width] duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            data-testid="navbar-get-started-btn"
            className="hidden md:inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold rounded-full px-6 py-2.5 transition-colors duration-200 shadow-[0_8px_20px_rgba(29,111,242,0.3)]"
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            data-testid="navbar-hamburger-btn"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="xl:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white text-navy"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-slate-100"
            data-testid="navbar-mobile-menu"
          >
            <ul className="px-6 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    onClick={() => setOpen(false)}
                    data-testid={`mobile-nav-link-${linkTestId(link.label)}`}
                    className={({ isActive }) =>
                      `block py-2.5 px-3 rounded-xl text-base font-medium transition-colors duration-200 ${
                        isActive ? "bg-brand-50 text-brand-600" : "text-slate-700 hover:bg-brand-50 hover:text-brand-600"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
              <li className="pt-2">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  data-testid="mobile-get-started-btn"
                  className="flex items-center justify-center gap-2 bg-brand-500 text-white font-semibold rounded-full px-6 py-3"
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

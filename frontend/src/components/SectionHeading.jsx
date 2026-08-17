import { motion } from "framer-motion";

export const SectionHeading = ({ badge, title, subtitle, dark = false, align = "center" }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6 }}
    className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} mb-12 md:mb-16`}
    data-testid="section-heading"
  >
    {badge && (
      <span
        className={`inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 ${
          dark ? "bg-white/10 text-cyan-300" : "bg-brand-50 text-brand-600"
        }`}
        data-testid="section-badge"
      >
        {badge}
      </span>
    )}
    <h2
      className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${dark ? "text-white" : "text-navy"}`}
      data-testid="section-title"
    >
      {title}
    </h2>
    {subtitle && (
      <p className={`mt-4 text-base md:text-lg leading-relaxed ${dark ? "text-slate-300" : "text-slate-600"}`} data-testid="section-subtitle">
        {subtitle}
      </p>
    )}
  </motion.div>
);

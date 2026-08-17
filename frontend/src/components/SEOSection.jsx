import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Search, Star } from "lucide-react";
import { SEO_POINTS } from "../data/site";

const SearchMockup = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7 }}
    className="relative"
  >
    <div className="absolute -inset-4 bg-gradient-to-tr from-brand-100/70 to-cyan-50/70 blur-2xl rounded-3xl" aria-hidden="true" />
    <div className="relative rounded-3xl border border-slate-100 bg-white p-6 sm:p-8 card-shadow">
      <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-sm">
        <Search className="h-4 w-4 text-slate-400 shrink-0" />
        <span className="text-sm text-slate-500 truncate">best digital solutions company near me</span>
        <span className="ml-auto h-4 w-4 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-5 rounded-2xl border border-brand-100 bg-brand-50/60 p-5"
      >
        <p className="text-xs text-emerald-600 font-medium">nexbuild.tech</p>
        <p className="mt-1 font-heading font-bold text-brand-700 text-base sm:text-lg leading-snug">
          NexBuild Tech &amp; Services | Websites, Apps &amp; AI
        </p>
        <div className="mt-1.5 flex items-center gap-1" aria-label="Example search result">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          ))}
          <span className="ml-1 text-xs text-slate-500">This could be your business</span>
        </div>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
          With the right SEO, your website appears exactly where your customers are already searching.
        </p>
        <span className="mt-3 inline-block rounded-full bg-brand-100 px-3 py-1 text-[11px] font-semibold text-brand-700">
          Example search result
        </span>
      </motion.div>
    </div>
  </motion.div>
);

const SEOSection = () => (
  <section id="seo" data-testid="seo-section" className="py-24 md:py-32 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase bg-brand-50 text-brand-600 mb-4">
          SEO &amp; Visibility
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight" data-testid="seo-title">
          Get Found. Get Noticed. <span className="text-gradient">Grow.</span>
        </h2>
        <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed">
          A beautiful website should also be discoverable. We build every project with search engines in mind,
          so the customers already looking for you can actually find you on Google.
        </p>
        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5" data-testid="seo-points">
          {SEO_POINTS.map((point, i) => (
            <motion.li
              key={point}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="flex items-center gap-2.5 text-sm md:text-base font-medium text-slate-700"
            >
              <CheckCircle2 className="h-5 w-5 text-brand-500 shrink-0" />
              {point}
            </motion.li>
          ))}
        </ul>
        <Link
          to="/contact"
          data-testid="seo-cta-btn"
          className="mt-9 inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-full px-8 py-3.5 transition-colors duration-200 shadow-[0_12px_30px_rgba(29,111,242,0.3)]"
        >
          Improve My Online Presence <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
      <SearchMockup />
    </div>
  </section>
);

export default SEOSection;

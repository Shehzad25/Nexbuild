import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { AI_FEATURES } from "../data/site";

const AISection = () => (
  <section id="ai-automation" data-testid="ai-section" className="relative py-24 md:py-32 overflow-hidden bg-navy">
    <img
      src="https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&w=1600&q=80"
      alt=""
      aria-hidden="true"
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover opacity-20"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-brand-900/80" aria-hidden="true" />
    <motion.div
      animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
      transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"
      aria-hidden="true"
    />
    <motion.div
      animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.35, 0.2] }}
      transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
      className="absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-brand-500/25 blur-3xl"
      aria-hidden="true"
    />

    <div className="relative max-w-7xl mx-auto px-5 md:px-8">
      <SectionHeading
        dark
        badge="AI & Automation"
        title="Work Smarter With AI & Automation"
        subtitle="Turn repetitive processes into intelligent workflows and give your business more time to focus on growth."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {AI_FEATURES.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-5 hover:bg-white/10 hover:border-cyan-400/30 transition-[background-color,border-color] duration-300"
            data-testid={`ai-feature-${i}`}
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-cyan-400 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]">
              <feature.icon className="h-5 w-5" />
            </span>
            <p className="text-sm md:text-base font-semibold text-white">{feature.title}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12 text-center"
      >
        <Link
          to="/contact"
          data-testid="ai-explore-btn"
          className="inline-flex items-center gap-2 rounded-full bg-white text-navy font-semibold px-8 py-3.5 hover:bg-cyan-50 transition-colors duration-200 shadow-[0_12px_30px_rgba(6,182,212,0.25)]"
        >
          Explore AI Solutions <ArrowRight className="h-4 w-4 text-brand-600" />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default AISection;

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => (
  <section
    data-testid="cta-section"
    className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-brand-50 via-brand-100/70 to-cyan-50"
  >
    <motion.div
      animate={{ y: [-14, 14, -14], x: [-8, 8, -8] }}
      transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
      className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-brand-200/50 blur-3xl"
      aria-hidden="true"
    />
    <motion.div
      animate={{ y: [12, -12, 12], x: [10, -10, 10] }}
      transition={{ repeat: Infinity, duration: 11, ease: "easeInOut" }}
      className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-cyan-200/40 blur-3xl"
      aria-hidden="true"
    />
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      className="absolute top-10 right-[12%] hidden md:block h-28 w-28 rounded-full border-2 border-dashed border-brand-300/50"
      aria-hidden="true"
    />
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ repeat: Infinity, duration: 55, ease: "linear" }}
      className="absolute bottom-8 left-[8%] hidden md:block h-20 w-20 rounded-full border-2 border-dashed border-cyan-300/50"
      aria-hidden="true"
    />

    <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight" data-testid="cta-title">
          Have an Idea? <span className="text-gradient">Let's Build It.</span>
        </h2>
        <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" data-testid="cta-subtitle">
          Whether you need a website, mobile app, AI solution or business automation, let's turn your idea into something real.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            data-testid="cta-start-project-btn"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-full px-8 py-3.5 transition-colors duration-200 shadow-[0_12px_30px_rgba(29,111,242,0.35)]"
          >
            Start Your Project <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="tel:9730525070"
            data-testid="cta-talk-to-us-btn"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-white text-navy border border-slate-200 hover:border-brand-500 hover:text-brand-600 font-semibold rounded-full px-8 py-3.5 transition-colors duration-200"
          >
            <Phone className="h-4 w-4" /> Talk to Us
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SOLUTIONS } from "../data/site";

const Solutions = () => (
  <section id="solutions" data-testid="solutions-section" className="py-24 md:py-32 bg-brand-50/60">
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <SectionHeading
        badge="Who We Help"
        title="Solutions Built For Your Business"
        subtitle="Whatever you do, we shape the right digital solution around your goals."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SOLUTIONS.map((solution, i) => (
          <motion.article
            key={solution.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
            className="group bg-white rounded-2xl border border-slate-100 p-7 card-shadow hover:card-shadow-hover hover:-translate-y-2 hover:border-brand-100 transition-[box-shadow,transform,border-color] duration-300 flex flex-col"
            data-testid={`solution-card-${i}`}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
              <solution.icon className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-lg font-heading font-bold text-navy leading-snug">{solution.title}</h3>
            <p className="mt-2.5 text-sm text-slate-600 leading-relaxed flex-1">{solution.desc}</p>
            <Link
              to="/contact"
              data-testid={`solution-cta-${i}`}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors duration-200"
            >
              Build My Solution
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Solutions;

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Puzzle, Cpu, MonitorSmartphone, Headset } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const REASONS = [
  { icon: Puzzle, title: "Custom Solutions", desc: "Solutions designed around your actual business requirements." },
  { icon: Cpu, title: "Modern Technology", desc: "Modern web, mobile, AI and automation technologies." },
  { icon: MonitorSmartphone, title: "Responsive Experiences", desc: "Beautiful and functional experiences across desktop, tablet and mobile." },
  { icon: Headset, title: "Dedicated Support", desc: "Support, improvements and technical assistance even after launch." },
];

const WhyBuild = () => (
  <section data-testid="why-build-section" className="py-20 md:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <SectionHeading
        badge="Why NexBuild"
        title="Why Build With NexBuild?"
        subtitle="Real benefits, not numbers — here's what every project includes."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {REASONS.map((reason, i) => (
          <motion.article
            key={reason.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
            className="group bg-white rounded-2xl border border-slate-100 p-7 card-shadow hover:card-shadow-hover hover:-translate-y-2 hover:border-brand-100 transition-[box-shadow,transform,border-color] duration-300"
            data-testid={`why-build-card-${i}`}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-cyan-500 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <reason.icon className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-lg font-heading font-bold text-navy">{reason.title}</h3>
            <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">{reason.desc}</p>
          </motion.article>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          to="/why-us"
          data-testid="why-build-link"
          className="inline-flex items-center gap-2 bg-white text-navy border border-slate-200 hover:border-brand-500 hover:text-brand-600 font-semibold rounded-full px-8 py-3.5 transition-colors duration-200"
        >
          Why Us <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default WhyBuild;

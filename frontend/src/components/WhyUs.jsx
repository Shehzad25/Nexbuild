import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { WHY_US } from "../data/site";

const WhyUs = () => (
  <section id="why-us" data-testid="why-us-section" className="py-24 md:py-32 bg-gradient-to-b from-white via-brand-50/50 to-white">
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <SectionHeading
        badge="Why NexBuild"
        title="Why Choose NexBuild?"
        subtitle="We combine modern technology with honest, business-first thinking."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {WHY_US.map((item, i) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
            className="group relative bg-white rounded-2xl border border-slate-100 p-8 card-shadow hover:card-shadow-hover hover:-translate-y-2 transition-[box-shadow,transform] duration-300 overflow-hidden"
            data-testid={`why-card-${i}`}
          >
            <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-brand-50 transition-transform duration-500 group-hover:scale-[1.8]" aria-hidden="true" />
            <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-cyan-500 text-white">
              <item.icon className="h-6 w-6" />
            </span>
            <h3 className="relative mt-5 text-lg font-heading font-bold text-navy">{item.title}</h3>
            <p className="relative mt-2.5 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;

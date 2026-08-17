import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { PROCESS_STEPS } from "../data/site";

const Process = () => (
  <section id="process" data-testid="process-section" className="py-24 md:py-32 bg-white">
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <SectionHeading
        badge="How We Work"
        title="From Idea to Launch"
        subtitle="A clear, structured process — so you always know what happens next."
      />
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-6 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-brand-200 via-brand-400 to-cyan-300 md:-translate-x-1/2" aria-hidden="true" />
        <ol className="space-y-10 md:space-y-14">
          {PROCESS_STEPS.map((step, i) => {
            const left = i % 2 === 0;
            return (
              <motion.li
                key={step.num}
                initial={{ opacity: 0, y: 30, x: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55 }}
                className={`relative flex items-start gap-6 md:gap-0 ${left ? "md:flex-row" : "md:flex-row-reverse"}`}
                data-testid={`process-step-${step.num}`}
              >
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-cyan-500 text-white font-heading font-bold text-sm shadow-[0_8px_20px_rgba(29,111,242,0.35)] md:absolute md:left-1/2 md:-translate-x-1/2">
                  {step.num}
                </div>
                <div className={`md:w-1/2 ${left ? "md:pr-16" : "md:pl-16"}`}>
                  <div className="bg-white rounded-2xl border border-slate-100 p-6 card-shadow hover:card-shadow-hover transition-shadow duration-300">
                    <h3 className="text-lg font-heading font-bold text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" aria-hidden="true" />
              </motion.li>
            );
          })}
        </ol>
      </div>
    </div>
  </section>
);

export default Process;

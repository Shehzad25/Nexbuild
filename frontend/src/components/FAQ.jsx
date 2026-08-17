import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { FAQS } from "../data/site";

const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" data-testid="faq-section" className="py-24 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Simple answers, no technical jargon."
        />
        <div className="space-y-3.5" data-testid="faq-list">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                className={`rounded-2xl border transition-colors duration-300 ${
                  isOpen ? "border-brand-200 bg-brand-50/50" : "border-slate-100 bg-white"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  data-testid={`faq-question-${i}`}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm md:text-base font-heading font-semibold text-navy">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-brand-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm md:text-base text-slate-600 leading-relaxed" data-testid={`faq-answer-${i}`}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

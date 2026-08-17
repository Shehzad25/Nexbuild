import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, MessagesSquare, ReceiptText, CalendarCheck, Headset } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const PROMISES = [
  {
    icon: MessagesSquare,
    title: "Clear Communication",
    text: "We discuss everything in simple language — no jargon, no surprises. You always know exactly what is happening with your project.",
  },
  {
    icon: ReceiptText,
    title: "Honest Pricing",
    text: "A straightforward quote before we start. What we agree on is what you pay — no hidden charges appearing later.",
  },
  {
    icon: CalendarCheck,
    title: "On-Time Delivery",
    text: "Every project follows a structured plan with a clear timeline, so your solution is delivered when promised.",
  },
  {
    icon: Headset,
    title: "Support After Launch",
    text: "Launch day is not the end. We stay available for updates, improvements and technical help as your business grows.",
  },
];

const PromiseSection = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % PROMISES.length), 6000);
    return () => clearInterval(id);
  }, [paused]);

  const prev = () => setIndex((i) => (i - 1 + PROMISES.length) % PROMISES.length);
  const next = () => setIndex((i) => (i + 1) % PROMISES.length);
  const current = PROMISES[index];

  return (
    <section id="testimonials" data-testid="promise-section" className="py-24 md:py-32 bg-gradient-to-b from-brand-50/60 via-white to-white">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <SectionHeading
          badge="The NexBuild Promise"
          title="What You Can Expect From Us"
          subtitle="We're building our reputation one project at a time — this is what every client gets."
        />
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          data-testid="promise-carousel"
        >
          <div className="rounded-3xl border border-slate-100 bg-white px-6 py-12 sm:px-12 card-shadow min-h-[260px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="w-full text-center"
                data-testid="promise-card"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-cyan-500 text-white shadow-[0_10px_25px_rgba(29,111,242,0.35)]">
                  <current.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-xl md:text-2xl font-heading font-bold text-navy" data-testid="promise-title">
                  {current.title}
                </h3>
                <p className="mt-3.5 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" data-testid="promise-text">
                  {current.text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-7 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous promise"
              data-testid="promise-prev-btn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-navy hover:border-brand-500 hover:text-brand-600 transition-colors duration-200"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {PROMISES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to promise ${i + 1}`}
                  data-testid={`promise-dot-${i}`}
                  className={`h-2.5 rounded-full transition-[width,background-color] duration-300 ${
                    i === index ? "w-7 bg-brand-500" : "w-2.5 bg-slate-200 hover:bg-brand-200"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next promise"
              data-testid="promise-next-btn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-navy hover:border-brand-500 hover:text-brand-600 transition-colors duration-200"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-9 text-center">
            <Link
              to="/promise"
              data-testid="promise-preview-btn"
              className="inline-flex items-center gap-2 bg-white text-navy border border-slate-200 hover:border-brand-500 hover:text-brand-600 font-semibold rounded-full px-8 py-3.5 transition-colors duration-200"
            >
              Our Promise <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;

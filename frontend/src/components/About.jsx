import { motion } from "framer-motion";
import { CheckCircle2, BadgeCheck } from "lucide-react";

const POINTS = [
  "Modern technology",
  "Business-focused solutions",
  "User-friendly experiences",
  "Scalable solutions",
  "Transparent communication",
  "Long-term support",
];

const About = () => (
  <section id="about" data-testid="about-section" className="py-24 md:py-32 bg-white">
    <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        <div className="absolute -inset-4 bg-gradient-to-tr from-brand-100/60 to-cyan-50/60 blur-2xl rounded-3xl" aria-hidden="true" />
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80"
          alt="NexBuild team collaborating on digital products"
          loading="lazy"
          className="relative rounded-3xl card-shadow w-full object-cover aspect-[4/3]"
          data-testid="about-image"
        />
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
          className="absolute -bottom-6 left-6 glass-card rounded-2xl px-5 py-4 flex items-center gap-3"
          data-testid="about-badge"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-cyan-500 text-white">
            <BadgeCheck className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-heading font-bold text-navy">Your Vision.</p>
            <p className="text-sm font-heading font-bold text-gradient">Our Expertise.</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase bg-brand-50 text-brand-600 mb-4">
          About NexBuild
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight" data-testid="about-title">
          Building Digital Solutions <span className="text-gradient">With Purpose</span>
        </h2>
        <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed" data-testid="about-description">
          NexBuild Tech &amp; Services helps businesses establish, improve and grow their digital presence through
          websites, applications, AI, automation, design and digital marketing. Whether you are a school, a startup,
          a shop or a growing company — we turn your ideas into reliable, beautiful digital products.
        </p>
        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5" data-testid="about-points">
          {POINTS.map((point, i) => (
            <motion.li
              key={point}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="flex items-center gap-2.5 text-sm md:text-base font-medium text-slate-700"
            >
              <CheckCircle2 className="h-5 w-5 text-brand-500 shrink-0" />
              {point}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default About;

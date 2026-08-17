import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Globe, Bot, Smartphone, TrendingUp } from "lucide-react";

const floatTransition = (duration, delay = 0) => ({
  repeat: Infinity,
  duration,
  delay,
  ease: "easeInOut",
});

const FloatingCard = ({ icon: Icon, label, className, duration = 4, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.6, y: 14 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ delay: 0.9 + delay, duration: 0.5, ease: "easeOut" }}
    className={`absolute z-20 ${className}`}
  >
    <motion.div
      animate={{ y: [-6, 6, -6] }}
      transition={floatTransition(duration, delay)}
      className="glass-card rounded-xl md:rounded-2xl px-2.5 py-2 md:px-4 md:py-3 flex items-center gap-1.5 md:gap-2.5"
    >
      <span className="flex h-6 w-6 md:h-9 md:w-9 shrink-0 items-center justify-center rounded-lg md:rounded-xl bg-gradient-to-br from-brand-500 to-cyan-500 text-white">
        <Icon className="h-3.5 w-3.5 md:h-5 md:w-5" />
      </span>
      <span className="text-[10px] md:text-sm font-semibold text-navy whitespace-nowrap">{label}</span>
    </motion.div>
  </motion.div>
);

const LaptopMockup = () => (
  <div className="relative">
    <div className="relative rounded-t-2xl border border-slate-200 bg-white shadow-[0_30px_60px_rgba(10,27,51,0.15)] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border-b border-slate-100">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="ml-3 flex-1 rounded-full bg-white border border-slate-200 px-3 py-1 text-[10px] text-slate-400 font-medium">
          nexbuild.tech
        </span>
      </div>
      <div className="p-5 sm:p-7 bg-gradient-to-br from-white via-brand-50/50 to-cyan-50/40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/assets/logo.png" alt="NexBuild" className="h-6 w-6 rounded-full" />
            <span className="text-[11px] font-heading font-bold text-navy tracking-wide">NEXBUILD</span>
          </div>
          <div className="flex gap-1.5">
            <span className="h-4 w-10 rounded-full bg-slate-100" />
            <span className="h-4 w-10 rounded-full bg-slate-100 hidden sm:block" />
            <span className="h-4 w-12 rounded-full bg-brand-500" />
          </div>
        </div>
        <div className="mt-6 max-w-[75%]">
          <p className="font-heading font-bold text-navy text-lg sm:text-2xl leading-snug">
            Building Digital Experiences That <span className="text-gradient">Drive Results</span>
          </p>
          <p className="mt-2 text-[10px] sm:text-xs text-slate-500 leading-relaxed">
            Innovative solutions that help your business grow, scale and lead in the digital world.
          </p>
          <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-brand-500 px-4 py-1.5 text-[10px] sm:text-xs font-semibold text-white">
            GET STARTED <ArrowRight className="h-3 w-3" />
          </span>
        </div>
        <div className="mt-6 flex items-end justify-between gap-4">
          <div className="flex gap-2 sm:gap-3 flex-1">
            {["Projects", "Clients", "Growth"].map((label, i) => (
              <div key={label} className="flex-1 rounded-xl bg-white/80 border border-slate-100 p-2.5">
                <p className="text-xs sm:text-sm font-heading font-bold text-navy">{["15+", "100%", "3x"][i]}</p>
                <p className="text-[9px] text-slate-400 font-medium">{label}</p>
              </div>
            ))}
          </div>
          <div className="hidden sm:flex items-end gap-1.5 h-16">
            {[35, 55, 45, 70, 60, 90].map((h, i) => (
              <motion.span
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 1 + i * 0.12, duration: 0.5 }}
                className={`w-3 rounded-t-md ${i === 5 ? "bg-cyan-400" : "bg-brand-500/80"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="relative mx-auto h-3.5 w-[104%] -ml-[2%] rounded-b-2xl bg-gradient-to-b from-slate-200 to-slate-300 shadow-md" />
  </div>
);

const PhoneMockup = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.7, duration: 0.6 }}
    className="absolute -right-2 sm:-right-8 -bottom-10 w-24 sm:w-32 z-10"
  >
    <motion.div
      animate={{ y: [-6, 6, -6] }}
      transition={floatTransition(5, 0.5)}
      className="rounded-[1.8rem] border border-slate-200 bg-white p-1.5 shadow-[0_20px_45px_rgba(10,27,51,0.2)]"
    >
      <div className="rounded-[1.4rem] bg-gradient-to-b from-brand-50 to-white overflow-hidden">
        <div className="mx-auto mt-1.5 h-3.5 w-12 rounded-full bg-navy" />
        <div className="p-3 text-center">
          <img src="/assets/logo.png" alt="NexBuild mobile" className="mx-auto h-8 w-8 rounded-full" />
          <p className="mt-2 text-[9px] font-heading font-bold text-navy leading-tight">
            INNOVATE
            <br />
            AUTOMATE
            <br />
            <span className="text-brand-500">ELEVATE</span>
          </p>
          <div className="mt-2 flex justify-center gap-1.5">
            {[Globe, Bot, TrendingUp].map((Icon, i) => (
              <span key={i} className="flex h-5 w-5 items-center justify-center rounded-md bg-white border border-slate-100 text-brand-500">
                <Icon className="h-3 w-3" />
              </span>
            ))}
          </div>
          <span className="mt-2.5 block rounded-full bg-brand-500 py-1 text-[8px] font-semibold text-white">GET STARTED</span>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const Hero = () => {
  return (
    <section id="home" data-testid="hero-section" className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-slate-50 pt-28 md:pt-36 pb-16 md:pb-24">
      <div className="absolute inset-0 bg-grid-blue [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" aria-hidden="true" />
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/2 -left-32 h-80 w-80 rounded-full bg-cyan-100/50 blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 backdrop-blur px-4 py-1.5 shadow-sm"
            data-testid="hero-trust-badge"
          >
            <Sparkles className="h-4 w-4 text-brand-500" />
            <span className="text-xs sm:text-sm font-semibold text-navy">Smart Solutions for a Better Tomorrow</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.1]"
            data-testid="hero-headline"
          >
            We Build Solutions That{" "}
            <span className="text-gradient">Build Your Business.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-xl"
            data-testid="hero-subtext"
          >
            From powerful websites to intelligent AI solutions, we help businesses grow, automate and stand out in the digital world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/contact"
              data-testid="hero-start-project-btn"
              className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-full px-8 py-3.5 transition-colors duration-200 shadow-[0_12px_30px_rgba(29,111,242,0.35)]"
            >
              Start Your Project <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              data-testid="hero-explore-services-btn"
              className="inline-flex items-center justify-center gap-2 bg-white text-navy border border-slate-200 hover:border-brand-500 hover:text-brand-600 font-semibold rounded-full px-8 py-3.5 transition-colors duration-200"
            >
              Explore Our Services
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 text-sm font-semibold tracking-[0.2em] uppercase text-slate-400"
            data-testid="hero-keywords"
          >
            Innovate <span className="text-brand-400">•</span> Automate <span className="text-brand-400">•</span> Elevate
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative px-4 sm:px-10 lg:px-0"
          data-testid="hero-visual"
        >
          <div className="absolute -inset-8 bg-gradient-to-tr from-brand-200/50 via-cyan-100/40 to-transparent blur-3xl rounded-full" aria-hidden="true" />
          <div className="relative">
            <LaptopMockup />
            <PhoneMockup />
            <FloatingCard icon={Globe} label="Web Development" className="left-0 lg:-left-12 top-3 lg:top-6" duration={4} />
            <FloatingCard icon={Bot} label="AI Solutions" className="right-0 lg:-right-10 top-[24%] lg:top-1/4" duration={4.6} delay={0.6} />
            <FloatingCard icon={Smartphone} label="Mobile Apps" className="left-0 lg:-left-10 bottom-10 lg:bottom-16" duration={5} delay={0.3} />
            <FloatingCard icon={TrendingUp} label="Digital Growth" className="right-0 lg:right-14 -bottom-3 lg:-bottom-14" duration={4.3} delay={0.9} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

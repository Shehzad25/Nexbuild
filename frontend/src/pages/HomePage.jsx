import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Hero from "../components/Hero";
import WhyBuild from "../components/WhyBuild";
import PromiseSection from "../components/PromiseSection";
import AISection from "../components/AISection";
import CTASection from "../components/CTASection";
import { SectionHeading } from "../components/SectionHeading";
import { SERVICES, SOLUTIONS, PROCESS_STEPS, TEAM, WHATSAPP_URL } from "../data/site";

const AboutPreview = () => (
  <section data-testid="about-preview" className="py-24 md:py-32 bg-white">
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
        />
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
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
          Building Digital Solutions <span className="text-gradient">With Purpose</span>
        </h2>
        <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed">
          NexBuild Tech &amp; Services helps businesses establish, improve and grow their digital presence through
          websites, applications, AI, automation, design and digital marketing.
        </p>
        <Link
          to="/about"
          data-testid="about-preview-btn"
          className="mt-8 inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-full px-8 py-3.5 transition-colors duration-200 shadow-[0_12px_30px_rgba(29,111,242,0.3)]"
        >
          Learn More <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </div>
  </section>
);

const ServicesPreview = () => (
  <section data-testid="services-preview" className="py-24 md:py-32 bg-gradient-to-b from-brand-50/70 via-white to-white">
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <SectionHeading badge="What We Do" title="Our Services" subtitle="Everything you need to build, launch and grow digitally." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.slice(0, 4).map((service, i) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
            className="group bg-white rounded-2xl border border-slate-100 p-7 card-shadow hover:card-shadow-hover hover:-translate-y-2 hover:border-brand-100 transition-[box-shadow,transform,border-color] duration-300"
            data-testid={`services-preview-card-${i}`}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-cyan-500 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <service.icon className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-lg font-heading font-bold text-navy leading-snug">{service.title}</h3>
            <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">{service.desc}</p>
          </motion.article>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          to="/services"
          data-testid="services-preview-btn"
          className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-full px-8 py-3.5 transition-colors duration-200 shadow-[0_12px_30px_rgba(29,111,242,0.3)]"
        >
          Explore Services <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </section>
);

const SolutionsPreview = () => (
  <section data-testid="solutions-preview" className="py-24 md:py-32 bg-white">
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <SectionHeading badge="Who We Help" title="Solutions Built For Your Business" subtitle="Whatever you do, we shape the right digital solution around your goals." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SOLUTIONS.slice(0, 4).map((solution, i) => (
          <motion.article
            key={solution.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
            className="group bg-white rounded-2xl border border-slate-100 p-7 card-shadow hover:card-shadow-hover hover:-translate-y-2 hover:border-brand-100 transition-[box-shadow,transform,border-color] duration-300"
            data-testid={`solutions-preview-card-${i}`}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
              <solution.icon className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-lg font-heading font-bold text-navy leading-snug">{solution.title}</h3>
            <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">{solution.desc}</p>
          </motion.article>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          to="/solutions"
          data-testid="solutions-preview-btn"
          className="inline-flex items-center gap-2 bg-white text-navy border border-slate-200 hover:border-brand-500 hover:text-brand-600 font-semibold rounded-full px-8 py-3.5 transition-colors duration-200"
        >
          View Solutions <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </section>
);

const ProcessPreview = () => (
  <section data-testid="process-preview" className="py-24 md:py-32 bg-brand-50/60">
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <SectionHeading badge="How We Work" title="From Idea to Launch" subtitle="A clear, structured process — so you always know what happens next." />
      <ol className="flex flex-wrap justify-center gap-3.5 max-w-4xl mx-auto">
        {PROCESS_STEPS.map((step, i) => (
          <motion.li
            key={step.num}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.06, duration: 0.45 }}
            className="flex items-center gap-3 rounded-2xl bg-white border border-slate-100 px-5 py-4 card-shadow"
            data-testid={`process-preview-step-${i}`}
          >
            <span className="font-heading font-bold text-sm text-transparent bg-clip-text bg-gradient-to-br from-brand-500 to-cyan-500">
              {step.num}
            </span>
            <span className="text-sm font-heading font-semibold text-navy">{step.title}</span>
          </motion.li>
        ))}
      </ol>
      <div className="mt-12 text-center">
        <Link
          to="/process"
          data-testid="process-preview-btn"
          className="inline-flex items-center gap-2 bg-white text-navy border border-slate-200 hover:border-brand-500 hover:text-brand-600 font-semibold rounded-full px-8 py-3.5 transition-colors duration-200"
        >
          See Our Process <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </section>
);

const TeamStrip = () => (
  <section data-testid="contact-cta" className="py-20 md:py-24 bg-white">
    <div className="max-w-5xl mx-auto px-5 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-slate-100 bg-gradient-to-br from-brand-50/80 via-white to-cyan-50/50 p-8 md:p-12 card-shadow text-center"
      >
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy">Talk Directly With Our Team</h2>
        <p className="mt-3 text-sm md:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
          Have a question or an idea? Reach out — we usually reply within a few hours.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-8">
          {TEAM.map((member) => (
            <div key={member.email} className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-cyan-500 text-white font-heading font-bold text-xs">
                {member.initials}
              </span>
              <span className="text-left">
                <span className="block text-sm font-heading font-bold text-navy">{member.name}</span>
                <a href={`tel:${member.phoneIntl}`} className="block text-xs text-slate-500 hover:text-brand-600 transition-colors duration-200">
                  {member.phone}
                </a>
              </span>
            </div>
          ))}
        </div>
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            data-testid="contact-cta-btn"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-full px-8 py-3.5 transition-colors duration-200 shadow-[0_12px_30px_rgba(29,111,242,0.3)]"
          >
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-cta-whatsapp"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-white text-navy border border-slate-200 hover:border-[#25D366] hover:text-[#1da851] font-semibold rounded-full px-8 py-3.5 transition-colors duration-200"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp Us
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const HomePage = () => (
  <main data-testid="home-page">
    <Hero />
    <AboutPreview />
    <ServicesPreview />
    <SolutionsPreview />
    <WhyBuild />
    <ProcessPreview />
    <PromiseSection />
    <AISection />
    <CTASection />
    <TeamStrip />
  </main>
);

export default HomePage;

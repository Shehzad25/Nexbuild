import { motion } from "framer-motion";
import { Eye, Target, Briefcase, MessagesSquare, BadgeCheck, Headset, Handshake, Cpu } from "lucide-react";
import About from "../components/About";
import CTASection from "../components/CTASection";
import { SectionHeading } from "../components/SectionHeading";

const VALUES = [
  { icon: Briefcase, title: "Business-Focused", desc: "Every decision starts with your business goals, not with technology for its own sake." },
  { icon: Cpu, title: "Technology-Driven", desc: "We stay current with modern web, mobile, AI and automation technologies." },
  { icon: MessagesSquare, title: "Transparency", desc: "Clear discussions, honest timelines and straightforward pricing." },
  { icon: BadgeCheck, title: "Quality", desc: "Polished, reliable and user-friendly work — nothing half-finished." },
  { icon: Handshake, title: "Honesty", desc: "No fake claims or inflated promises. We say what we can deliver, then deliver it." },
  { icon: Headset, title: "Long-Term Support", desc: "We build relationships, not just projects. Support continues after launch." },
];

const AboutPage = () => (
  <main data-testid="about-page">
    <div className="pt-2 md:pt-4">
      <About />
    </div>

    <section className="py-20 md:py-28 bg-brand-50/60" data-testid="vision-mission">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading badge="What Drives Us" title="Our Vision & Mission" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="bg-white rounded-2xl border border-slate-100 p-8 md:p-10 card-shadow"
            data-testid="vision-card"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-cyan-500 text-white">
              <Eye className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-xl font-heading font-bold text-navy">Our Vision</h3>
            <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
              A digital world where every business — from local shops and schools to growing companies — can use
              modern technology to grow, compete and serve people better.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="bg-white rounded-2xl border border-slate-100 p-8 md:p-10 card-shadow"
            data-testid="mission-card"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-cyan-500 text-white">
              <Target className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-xl font-heading font-bold text-navy">Our Mission</h3>
            <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
              To build practical, beautiful and reliable digital solutions that solve real business problems and
              create measurable value for the people who use them.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-white" data-testid="values-section">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading badge="How We Work" title="Our Values" subtitle="The principles behind every NexBuild project." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 3) * 0.09, duration: 0.5 }}
              className="group bg-white rounded-2xl border border-slate-100 p-7 card-shadow hover:card-shadow-hover hover:-translate-y-2 hover:border-brand-100 transition-[box-shadow,transform,border-color] duration-300"
              data-testid={`value-card-${i}`}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                <value.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-heading font-bold text-navy">{value.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-gradient-to-b from-brand-50/60 to-white" data-testid="why-started">
      <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase bg-brand-50 text-brand-600 mb-4">
            Why We Started
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
            Built to Close the <span className="text-gradient">Digital Gap</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed">
            NexBuild was created because too many small businesses, schools and professionals were left choosing
            between expensive agencies and low-quality templates. We believed modern websites, apps, AI and
            automation should be accessible, honest and genuinely useful — so we built a team that delivers exactly
            that. Today, we help businesses grow digitally with solutions that fit their real needs and budgets.
          </p>
        </motion.div>
      </div>
    </section>

    <CTASection />
  </main>
);

export default AboutPage;

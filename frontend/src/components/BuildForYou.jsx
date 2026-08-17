import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe, GraduationCap, LayoutDashboard, Smartphone, Bot, Zap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const OFFERS = [
  { icon: Globe, title: "Business Websites", desc: "Professional websites that build credibility and generate enquiries." },
  { icon: GraduationCap, title: "School Websites", desc: "Modern school websites with admissions, enquiries, galleries, announcements and important information." },
  { icon: LayoutDashboard, title: "Web Applications", desc: "Custom dashboards, management systems, portals and business applications." },
  { icon: Smartphone, title: "Mobile Applications", desc: "Android and iOS applications designed around your customers and business workflow." },
  { icon: Bot, title: "AI & Chatbots", desc: "AI assistants, customer support bots and intelligent business solutions." },
  { icon: Zap, title: "Automation", desc: "Automate repetitive tasks and improve business efficiency." },
];

const BuildForYou = () => (
  <section id="build" data-testid="build-for-you-section" className="py-24 md:py-32 bg-white">
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <SectionHeading
        badge="Possibilities"
        title="What Can We Build For You?"
        subtitle="From your first idea to a complete digital solution, we turn business requirements into practical technology."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {OFFERS.map((offer, i) => (
          <motion.article
            key={offer.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: (i % 3) * 0.09, duration: 0.5 }}
            className="group bg-gradient-to-b from-white to-brand-50/40 rounded-2xl border border-slate-100 p-6 card-shadow hover:card-shadow-hover hover:-translate-y-1.5 hover:border-brand-200 transition-[box-shadow,transform,border-color] duration-300"
            data-testid={`build-card-${i}`}
          >
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                <offer.icon className="h-5 w-5" />
              </span>
              <h3 className="text-base md:text-lg font-heading font-bold text-navy leading-snug">{offer.title}</h3>
            </div>
            <p className="mt-3.5 text-sm text-slate-600 leading-relaxed">{offer.desc}</p>
            <Link
              to="/contact"
              data-testid={`build-cta-${i}`}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors duration-200"
            >
              Let's Discuss
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default BuildForYou;

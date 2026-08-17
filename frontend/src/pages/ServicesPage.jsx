import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import SEOSection from "../components/SEOSection";
import CTASection from "../components/CTASection";
import { SERVICES } from "../data/site";

const BENEFITS = {
  "Website Development": "Build credibility online and turn visitors into genuine enquiries.",
  "Web Application Development": "Bring your operations online and save hours of manual work every week.",
  "Mobile App Development": "Stay in your customer's pocket with a smooth, always-available app experience.",
  "AI & Chatbot Solutions": "Respond to customers instantly and capture leads — even while you sleep.",
  "Digital Marketing & SEO": "Get discovered by customers who are already searching for what you offer.",
  "UI/UX Design & Branding": "Look professional, consistent and memorable everywhere your brand appears.",
  "Automation Solutions": "Eliminate repetitive manual work, reduce errors and free up your team's time.",
  "Maintenance & Support": "Stay secure, fast and up to date — without ever worrying about the technical side.",
};

const ServicesPage = () => (
  <main data-testid="services-page">
    <section className="pt-32 md:pt-40 pb-20 md:pb-28 bg-gradient-to-br from-brand-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading
          badge="What We Do"
          title="Our Services"
          subtitle="Everything you need to build, launch and grow digitally — explained in plain language."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {SERVICES.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 2) * 0.09, duration: 0.5 }}
              className="group bg-white rounded-2xl border border-slate-100 p-7 md:p-9 card-shadow hover:card-shadow-hover hover:border-brand-100 transition-[box-shadow,border-color] duration-300 flex flex-col"
              data-testid={`service-detail-${i}`}
            >
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-cyan-500 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </span>
                <h3 className="text-xl font-heading font-bold text-navy leading-snug">{service.title}</h3>
              </div>
              <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed">{service.desc}</p>
              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.tags.map((tag) => (
                  <li key={tag} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-brand-500 shrink-0" />
                    {tag}
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-xl bg-brand-50 px-4 py-3 text-sm font-medium text-brand-800 leading-relaxed">
                {BENEFITS[service.title]}
              </p>
              <Link
                to={`/contact?service=${encodeURIComponent(service.title)}`}
                data-testid={`service-quote-${i}`}
                className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors duration-200"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
    <SEOSection />
    <CTASection />
  </main>
);

export default ServicesPage;

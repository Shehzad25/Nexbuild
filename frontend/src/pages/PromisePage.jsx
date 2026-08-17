import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, MessagesSquare, Target, Cpu, MonitorSmartphone, Headset, Handshake } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";

const PROMISE_ITEMS = [
  { icon: BadgeCheck, title: "Quality First", desc: "We focus on creating reliable, polished and user-friendly digital solutions." },
  { icon: MessagesSquare, title: "Clear Communication", desc: "You should always know what is happening with your project." },
  { icon: Target, title: "Business Value", desc: "Technology should solve a real problem and provide practical value." },
  { icon: Cpu, title: "Modern Solutions", desc: "We continuously use modern technologies and approaches." },
  { icon: MonitorSmartphone, title: "Responsive Design", desc: "Your digital experience should work properly across devices." },
  { icon: Headset, title: "Long-Term Support", desc: "We don't simply disappear after delivering the project." },
  { icon: Handshake, title: "Honest Approach", desc: "No fake claims, fake statistics or unnecessary promises." },
];

const PromisePage = () => (
  <main data-testid="promise-page">
    <section className="pt-32 md:pt-40 pb-20 md:pb-28 bg-gradient-to-br from-brand-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading
          badge="The NexBuild Promise"
          title="Our Promise"
          subtitle="This is what every client can hold us accountable to — on every project, big or small."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROMISE_ITEMS.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 3) * 0.09, duration: 0.5 }}
              className="group bg-white rounded-2xl border border-slate-100 p-7 card-shadow hover:card-shadow-hover hover:-translate-y-2 hover:border-brand-100 transition-[box-shadow,transform,border-color] duration-300"
              data-testid={`promise-item-${i}`}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-cyan-500 text-white transition-transform duration-300 group-hover:scale-110">
                <item.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-heading font-bold text-navy">{item.title}</h3>
              <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 md:mt-20 text-center"
          data-testid="promise-closing"
        >
          <p className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy">
            Your Vision. <span className="text-gradient">Our Expertise.</span>
          </p>
          <Link
            to="/contact"
            data-testid="promise-cta-btn"
            className="mt-9 inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-full px-9 py-4 transition-colors duration-200 shadow-[0_12px_30px_rgba(29,111,242,0.35)]"
          >
            Let's Build Something Together <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  </main>
);

export default PromisePage;

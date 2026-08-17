import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FAQ from "../components/FAQ";

const FAQPage = () => (
  <main data-testid="faq-page">
    <div className="pt-2 md:pt-4">
      <FAQ />
    </div>
    <section className="pb-24 -mt-6 text-center" data-testid="faq-cta">
      <p className="text-base md:text-lg text-slate-600">Still have questions?</p>
      <Link
        to="/contact"
        data-testid="faq-contact-btn"
        className="mt-5 inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-full px-8 py-3.5 transition-colors duration-200 shadow-[0_12px_30px_rgba(29,111,242,0.3)]"
      >
        Contact Us <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  </main>
);

export default FAQPage;

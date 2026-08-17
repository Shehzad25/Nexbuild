import WhyUs from "../components/WhyUs";
import CTASection from "../components/CTASection";

const WhyUsPage = () => (
  <main data-testid="why-us-page">
    <div className="pt-2 md:pt-4">
      <WhyUs />
    </div>
    <CTASection />
  </main>
);

export default WhyUsPage;

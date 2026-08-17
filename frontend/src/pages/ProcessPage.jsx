import Process from "../components/Process";
import CTASection from "../components/CTASection";

const ProcessPage = () => (
  <main data-testid="process-page">
    <div className="pt-2 md:pt-4">
      <Process />
    </div>
    <CTASection />
  </main>
);

export default ProcessPage;

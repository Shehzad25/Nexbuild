import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageWrapper from "./PageWrapper";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ServicesPage from "../pages/ServicesPage";
import SolutionsPage from "../pages/SolutionsPage";
import WhyUsPage from "../pages/WhyUsPage";
import ProcessPage from "../pages/ProcessPage";
import PromisePage from "../pages/PromisePage";
import FAQPage from "../pages/FAQPage";
import ContactPage from "../pages/ContactPage";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><ServicesPage /></PageWrapper>} />
        <Route path="/solutions" element={<PageWrapper><SolutionsPage /></PageWrapper>} />
        <Route path="/why-us" element={<PageWrapper><WhyUsPage /></PageWrapper>} />
        <Route path="/process" element={<PageWrapper><ProcessPage /></PageWrapper>} />
        <Route path="/promise" element={<PageWrapper><PromisePage /></PageWrapper>} />
        <Route path="/faq" element={<PageWrapper><FAQPage /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><HomePage /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;

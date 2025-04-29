import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import AboutHero from "../components/AboutHeroSection";
import OurMission from "../components/OurMissionSection";
import HowItWorks from "../components/HowItWorksSection";
import StatsSection from "../components/StatsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CompanyValues from "../components/CompanyValues";
import CallToAction from "../components/CallToActionSection";
import Footer from "../components/Footer";

const AboutUs = () => {
  const howItWorksRef = useRef<HTMLDivElement>(null);
  // Smooth scroll effect for page navigation
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const scrollToHowItWorks = () => {
    howItWorksRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="overflow-hidden bg-white">
      <Navbar />
      <AboutHero scrollToHowItWorks={scrollToHowItWorks} />

      {/* Subtle pattern divider */}
      <div className="w-full h-24 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmMGYwZjAiPjwvcmVjdD4KPC9zdmc+')] opacity-20"></div>

      <OurMission />

      {/* Wave divider */}
      <div className="w-full overflow-hidden leading-none rotate-180 -mt-1">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1200 100"
          className="relative block w-full h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 C600,100 600,0 1200,100 L1200,0 L0,0 Z"
            className="fill-green-100"
          ></path>
        </svg>
      </div>

      <div ref={howItWorksRef}>
        <HowItWorks />
      </div>
      <CompanyValues />
      <StatsSection />
      <TestimonialsSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default AboutUs;

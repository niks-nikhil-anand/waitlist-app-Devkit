import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SocialProofSection from "@/components/SocialProofSection";
import PreviewSection from "@/components/PreviewSection";
import IncentiveSection from "@/components/IncentiveSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <>
      <div className="bg-grid" />
      <div className="bg-glow" />
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <HowItWorksSection />
      <SocialProofSection />
      <PreviewSection />
      <IncentiveSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <StickyCTA />
    </>
  );
}

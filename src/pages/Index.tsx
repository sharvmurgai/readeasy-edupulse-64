import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/landing/Hero";
import FeatureGrid from "@/components/landing/FeatureGrid";
import HowItWorks from "@/components/landing/HowItWorks";
import SocialProof from "@/components/landing/SocialProof";
import Testimonials from "@/components/landing/Testimonials";
import CTASection from "@/components/landing/CTASection";
import WhyBetterThanChatGPT from "@/components/landing/WhyBetterThanChatGPT";
import InteractiveBackground from "@/components/ui/InteractiveBackground";
import FloatingShapes from "@/components/ui/FloatingShapes";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <InteractiveBackground />
      <FloatingShapes />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <FeatureGrid />
          <WhyBetterThanChatGPT />
          <HowItWorks />
          <SocialProof />
          <Testimonials />
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;

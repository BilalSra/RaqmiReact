import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import PortfolioSection from "@/components/portfolio-section";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="font-inter bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed top-20 right-10 w-64 h-64 dot-pattern-sparse opacity-5 pointer-events-none z-0"></div>
      <div className="fixed bottom-20 left-10 w-48 h-48 dot-pattern-sparse opacity-5 pointer-events-none z-0"></div>
      
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <CtaSection />
        <Footer />
      </div>
    </div>
  );
}

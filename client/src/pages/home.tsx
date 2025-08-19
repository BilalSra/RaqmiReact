import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import ClientsSection from "@/components/clients-section";
import NewsletterSection from "@/components/newsletter-section";
import PortfolioSection from "@/components/portfolio-section";
import TestimonialsSection from "@/components/testimonials-section";
import InsightsSection from "@/components/insights-section";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="font-inter bg-gray-50">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ClientsSection />
      <NewsletterSection />
      <PortfolioSection />
      <TestimonialsSection />
      <InsightsSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

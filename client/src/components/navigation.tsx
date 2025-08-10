import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`bg-white border-b border-gray-100 sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center" data-testid="logo-container">
            <div className="bg-primary w-8 h-8 cropped-corner flex items-center justify-center mr-3">
              <i className="fas fa-chart-line text-white text-lg"></i>
            </div>
            <span className="text-xl font-bold text-gray-900">Raqmi</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200"
                data-testid="nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200"
                data-testid="nav-services"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200"
                data-testid="nav-portfolio"
              >
                Portfolio
              </button>
              <button 
                className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200"
                data-testid="nav-pricing"
              >
                Pricing
              </button>
              <div className="relative">
                <button 
                  className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                  data-testid="nav-pages"
                >
                  Pages <i className="fas fa-chevron-down ml-1 text-xs"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Search and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              data-testid="button-search"
            >
              <i className="fas fa-search text-lg"></i>
            </button>
            <Button 
              className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-600 transition-colors duration-200"
              data-testid="button-get-quote"
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="text-gray-600 hover:text-primary" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              <i className="fas fa-bars text-lg"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
              data-testid="mobile-nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-600 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
              data-testid="mobile-nav-services"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-600 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
              data-testid="mobile-nav-portfolio"
            >
              Portfolio
            </button>
            <button 
              className="text-gray-600 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
              data-testid="mobile-nav-pricing"
            >
              Pricing
            </button>
            <button 
              className="text-gray-600 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
              data-testid="mobile-nav-pages"
            >
              Pages
            </button>
            <div className="pt-4 pb-3 border-t">
              <Button 
                className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium w-full"
                data-testid="mobile-button-get-quote"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

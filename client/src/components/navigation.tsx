import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link, useLocation } from "wouter";
import Logo from "@/components/logo";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
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

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // For other pages, navigate to home and scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className={`bg-white border-b border-gray-100 sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0" data-testid="logo-container">
            <Link href="/" onClick={handleLogoClick}>
              <Logo text="Raqmi" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/about">
                <button 
                  className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200"
                  data-testid="nav-about"
                >
                  About
                </button>
              </Link>
              <Link href="/solutions">
                <button 
                  className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200"
                  data-testid="nav-solutions"
                >
                  Solutions
                </button>
              </Link>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200"
                data-testid="nav-portfolio"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('insights')}
                className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200"
                data-testid="nav-insights"
              >
                Insights
              </button>
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
            <Link href="/about">
              <button 
                className="text-gray-600 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
                data-testid="mobile-nav-about"
              >
                About
              </button>
            </Link>
            <Link href="/solutions">
              <button 
                className="text-gray-600 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
                data-testid="mobile-nav-solutions"
              >
                Solutions
              </button>
            </Link>
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

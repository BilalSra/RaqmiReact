export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4" data-testid="footer-company-info">
            <div className="flex items-center">
              <div className="bg-primary w-8 h-8 cropped-corner flex items-center justify-center mr-3">
                <i className="fas fa-bolt text-white text-lg"></i>
              </div>
              <span className="text-xl font-bold">Agency</span>
            </div>
            <p className="text-gray-400" data-testid="footer-company-description">
              Creating exceptional digital experiences that drive growth and success for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-primary transition-colors duration-200"
                data-testid="footer-social-facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-primary transition-colors duration-200"
                data-testid="footer-social-twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-primary transition-colors duration-200"
                data-testid="footer-social-linkedin"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-primary transition-colors duration-200"
                data-testid="footer-social-instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4" data-testid="footer-quick-links">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <a 
                href="#about" 
                className="block text-gray-400 hover:text-white transition-colors duration-200"
                data-testid="footer-link-about"
              >
                About Us
              </a>
              <a 
                href="#services" 
                className="block text-gray-400 hover:text-white transition-colors duration-200"
                data-testid="footer-link-services"
              >
                Services
              </a>
              <a 
                href="#portfolio" 
                className="block text-gray-400 hover:text-white transition-colors duration-200"
                data-testid="footer-link-portfolio"
              >
                Portfolio
              </a>
              <a 
                href="#contact" 
                className="block text-gray-400 hover:text-white transition-colors duration-200"
                data-testid="footer-link-contact"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4" data-testid="footer-services">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-2">
              <a 
                href="#" 
                className="block text-gray-400 hover:text-white transition-colors duration-200"
                data-testid="footer-service-web-dev"
              >
                Web Development
              </a>
              <a 
                href="#" 
                className="block text-gray-400 hover:text-white transition-colors duration-200"
                data-testid="footer-service-ui-ux"
              >
                UI/UX Design
              </a>
              <a 
                href="#" 
                className="block text-gray-400 hover:text-white transition-colors duration-200"
                data-testid="footer-service-marketing"
              >
                Digital Marketing
              </a>
              <a 
                href="#" 
                className="block text-gray-400 hover:text-white transition-colors duration-200"
                data-testid="footer-service-branding"
              >
                Brand Strategy
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4" data-testid="footer-contact-info">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-2">
              <p className="text-gray-400 flex items-center" data-testid="footer-address">
                <i className="fas fa-map-marker-alt mr-2"></i>
                123 Business Street, City, State 12345
              </p>
              <p className="text-gray-400 flex items-center" data-testid="footer-phone">
                <i className="fas fa-phone mr-2"></i>
                (555) 123-4567
              </p>
              <p className="text-gray-400 flex items-center" data-testid="footer-email">
                <i className="fas fa-envelope mr-2"></i>
                hello@agency.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400" data-testid="footer-copyright">
            © 2024 Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

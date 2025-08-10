export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4" data-testid="footer-company-info">
            <div className="flex items-center">
              <div className="bg-primary w-8 h-8 cropped-corner flex items-center justify-center mr-3">
                <i className="fas fa-chart-line text-white text-lg"></i>
              </div>
              <span className="text-xl font-bold">Raqmi</span>
            </div>
            <p className="text-gray-400" data-testid="footer-company-description">
              Empowering MENA businesses with data-driven growth strategies. Transforming brands through innovation-driven strategic mindset.
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

          {/* Products */}
          <div className="space-y-4" data-testid="footer-products">
            <h3 className="text-lg font-semibold">Our Products</h3>
            <div className="space-y-2">
              <a 
                href="#" 
                className="block text-gray-400 hover:text-white transition-colors duration-200"
                data-testid="footer-product-seomena"
              >
                SEOMENA
              </a>
              <a 
                href="#" 
                className="block text-gray-400 hover:text-white transition-colors duration-200"
                data-testid="footer-product-executex"
              >
                ExecuteX
              </a>
              <a 
                href="#" 
                className="block text-gray-400 hover:text-white transition-colors duration-200"
                data-testid="footer-product-innovation-lab"
              >
                Innovation Lab
              </a>
              <a 
                href="#" 
                className="block text-gray-400 hover:text-white transition-colors duration-200"
                data-testid="footer-blog"
              >
                Blog & Insights
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4" data-testid="footer-solutions">
            <h3 className="text-lg font-semibold">Solutions</h3>
            <div className="space-y-2">
              <a 
                href="#" 
                className="block text-gray-400 hover:text-white transition-colors duration-200"
                data-testid="footer-solution-growth"
              >
                Growth Strategies
              </a>
              <a 
                href="#" 
                className="block text-gray-400 hover:text-white transition-colors duration-200"
                data-testid="footer-solution-roi"
              >
                ROI-Focused Marketing
              </a>
              <a 
                href="#" 
                className="block text-gray-400 hover:text-white transition-colors duration-200"
                data-testid="footer-solution-gso"
              >
                Generative Search Optimization
              </a>
              <a 
                href="#" 
                className="block text-gray-400 hover:text-white transition-colors duration-200"
                data-testid="footer-solution-ai"
              >
                AI-Powered Solutions
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400" data-testid="footer-copyright">
            © 2024 Raqmi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

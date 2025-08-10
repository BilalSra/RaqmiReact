export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-primary font-semibold text-sm uppercase tracking-wide" data-testid="about-label">
                ABOUT US
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight" data-testid="about-title">
                Better design,<br />
                better experience
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed" data-testid="about-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ligula, 
                malesuada vel convallis in, tincidunt ut mi. Vestibulum sit amet.
              </p>
            </div>
          </div>

          {/* Right Content - Connect Section */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" data-testid="connect-title">
                Connect With Us
              </h3>
              <p className="text-gray-600 mb-6" data-testid="connect-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque 
                dui ligula, malesuada vel convallis in, tincidunt ut mi. Vestibulum sit 
                amet urna placerat, tempor arcu eget risus quis, elit lorem 
                vitae semper tempor.
              </p>
              
              {/* Social Media Links */}
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-200"
                  data-testid="social-facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-200"
                  data-testid="social-twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-200"
                  data-testid="social-youtube"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-200"
                  data-testid="social-linkedin"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

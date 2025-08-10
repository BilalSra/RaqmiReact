export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-primary font-semibold text-sm uppercase tracking-wide" data-testid="about-label">
                OUR APPROACH
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight" data-testid="about-title">
                Data That Drives<br />
                Results
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed" data-testid="about-description">
                See how our data-driven approach can transform your key business metrics. 
                We help bridge the gap between your current performance and untapped potential.
              </p>
            </div>
          </div>

          {/* Right Content - Performance Metrics */}
          <div className="space-y-6">
            <div className="bg-white p-8 cropped-corner shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" data-testid="connect-title">
                Performance Growth
              </h3>
              <p className="text-gray-600 mb-6" data-testid="connect-description">
                Track your growth journey with our proven methodology that delivers 
                measurable results across key performance indicators.
              </p>
              
              {/* Performance Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">+45%</div>
                  <div className="text-sm text-gray-600">Initial Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">+68%</div>
                  <div className="text-sm text-gray-600">Final Growth</div>
                </div>
              </div>
              
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

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight" data-testid="hero-title">
                Next.js Site Template For Agency and Portfolio
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed" data-testid="hero-description">
                Elevate your online presence and impress clients effortlessly! 
                — featuring essential integrations, pre-built pages, and 
                customizable components. Modern, responsive design with 
                fast loading and SEO optimization.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-600 transition-colors duration-200 flex items-center justify-center"
                data-testid="button-explore-portfolio"
              >
                Explore Portfolio
              </Button>
              <Button 
                variant="outline"
                className="text-primary bg-primary-light border border-primary/20 px-6 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors duration-200 flex items-center justify-center"
                data-testid="button-download-brochure"
              >
                <i className="fas fa-download mr-2"></i>
                Download Brochure
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-6" data-testid="trust-text">Trusted by the best</p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="flex items-center space-x-2" data-testid="trust-indicator-lineicons">
                  <i className="fas fa-layer-group text-primary text-xl"></i>
                  <span className="text-gray-700 font-medium">Lineicons</span>
                </div>
                <div className="flex items-center space-x-2" data-testid="trust-indicator-formbold">
                  <i className="fas fa-cube text-primary text-xl"></i>
                  <span className="text-gray-700 font-medium">FormBold</span>
                </div>
                <div className="flex items-center space-x-2" data-testid="trust-indicator-uideck">
                  <i className="fas fa-puzzle-piece text-primary text-xl"></i>
                  <span className="text-gray-700 font-medium">UIdeck</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Background dot pattern */}
            <div className="absolute -top-8 -right-8 w-32 h-32 dot-pattern-sparse opacity-20"></div>
            
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Professional man working on laptop" 
                className="cropped-corner-lg shadow-2xl w-full h-auto object-cover" 
                data-testid="hero-image"
              />
            </div>
            
            {/* Decorative dots - left side pattern */}
            <div className="absolute bottom-8 -left-8 flex flex-col space-y-2" data-testid="decorative-dots-left">
              {Array.from({ length: 4 }, (_, row) => (
                <div key={row} className="flex space-x-2">
                  {Array.from({ length: row + 2 }, (_, col) => (
                    <div key={col} className="w-2 h-2 bg-primary rounded-full opacity-60"></div>
                  ))}
                </div>
              ))}
            </div>

            {/* Decorative dots - bottom pattern */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2" data-testid="decorative-dots-bottom">
              {Array.from({ length: 8 }, (_, i) => (
                <div key={i} className="w-2 h-2 bg-primary rounded-full opacity-40"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

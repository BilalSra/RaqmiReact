import { Button } from "@/components/ui/button";
import businessGrowthImage from "@assets/Business growth_1754822270274.jpg";

export default function HeroSection() {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight" data-testid="hero-title">
                Scaling Businesses, Redefining Growth
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed" data-testid="hero-description">
                Raqmi empowers MENA businesses with data-driven growth strategies. 
                Transforming brands through innovation-driven strategic mindset.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-600 transition-colors duration-200 flex items-center justify-center"
                data-testid="button-grow-with-raqmi"
              >
                Grow with Raqmi
              </Button>
              <Button 
                variant="outline"
                className="text-primary bg-primary-light border border-primary/20 px-6 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors duration-200 flex items-center justify-center"
                data-testid="button-explore-solutions"
              >
                Explore Solutions
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-6" data-testid="trust-text">Trusted by the best</p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="flex items-center space-x-2" data-testid="trust-indicator-seomena">
                  <i className="fas fa-search text-primary text-xl"></i>
                  <span className="text-gray-700 font-medium">SEOMENA</span>
                </div>
                <div className="flex items-center space-x-2" data-testid="trust-indicator-executex">
                  <i className="fas fa-rocket text-primary text-xl"></i>
                  <span className="text-gray-700 font-medium">ExecuteX</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-20">
              <img 
                src={businessGrowthImage} 
                alt="Business growth chart with upward trending arrow" 
                className="cropped-corner-lg shadow-2xl w-full h-auto object-cover" 
                data-testid="hero-image"
              />
            </div>
            
            {/* Decorative dots - positioned behind image at bottom */}
            <div className="absolute -bottom-8 -left-6 z-10 flex flex-col space-y-2" data-testid="decorative-dots-pattern">
              {/* First row - 2 dots */}
              <div className="flex space-x-2">
                <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
              </div>
              {/* Second row - 2 dots */}
              <div className="flex space-x-2">
                <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
              </div>
              {/* Third row - 2 dots */}
              <div className="flex space-x-2">
                <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
              </div>
              {/* Fourth row - 2 dots */}
              <div className="flex space-x-2">
                <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
              </div>
              {/* Bottom rows - extending pattern outside image */}
              <div className="flex space-x-2">
                <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
              </div>
              <div className="flex space-x-2">
                <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

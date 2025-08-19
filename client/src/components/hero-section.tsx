import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import businessGrowthImage from "@assets/Business growth_1754822270274.jpg";
import { SiGoogle, SiMeta, SiMailchimp, SiLinkedin, SiOpenai } from "react-icons/si";

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
                Raqmi empowers businesses with data-driven growth strategies. 
                Transforming brands through results-driven strategic mindset.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button 
                  className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
                  data-testid="button-grow-with-raqmi"
                >
                  Grow with Raqmi
                </Button>
              </Link>
              <Link href="/solutions">
                <Button 
                  variant="outline"
                  className="text-primary bg-primary-light border border-primary/20 px-6 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors duration-200 flex items-center justify-center"
                  data-testid="button-explore-solutions"
                >
                  Explore Solutions
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8">
              <div className="flex items-center mb-6" data-testid="trust-text">
                <p className="text-sm text-gray-500 mr-3">Delivering results where it matters</p>
                <div className="flex-1 h-px bg-gray-300 max-w-[36px]"></div>
              </div>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="flex items-center space-x-2" data-testid="trust-indicator-google" aria-label="Google logo">
                  <SiGoogle className="text-gray-500" size={22} />
                </div>
                <div className="flex items-center space-x-2" data-testid="trust-indicator-openai" aria-label="OpenAI logo">
                  <SiOpenai className="text-gray-500" size={22} />
                </div>
                <div className="flex items-center space-x-2" data-testid="trust-indicator-meta" aria-label="Meta logo">
                  <SiMeta className="text-gray-500" size={22} />
                </div>
                <div className="flex items-center space-x-2" data-testid="trust-indicator-mailchimp" aria-label="Mailchimp logo">
                  <SiMailchimp className="text-gray-500" size={22} />
                </div>
                <div className="flex items-center space-x-2" data-testid="trust-indicator-linkedin" aria-label="LinkedIn logo">
                  <SiLinkedin className="text-gray-500" size={22} />
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
            <div className="absolute -bottom-8 -left-8 z-10 flex flex-col space-y-2" data-testid="decorative-dots-pattern">
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

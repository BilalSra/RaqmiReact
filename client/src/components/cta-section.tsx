import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="bg-primary py-16 lg:py-24 relative overflow-hidden">
      {/* Background dot patterns */}
      <div className="absolute top-8 left-8 w-32 h-32 dot-pattern-sparse opacity-10"></div>
      <div className="absolute bottom-8 right-8 w-24 h-24 dot-pattern-sparse opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white" data-testid="cta-title">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-indigo-100" data-testid="cta-description">
            Let's work together to bring your vision to life. Our team is ready to help you create something amazing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-primary px-8 py-3 cropped-corner font-medium hover:bg-gray-50 transition-colors duration-200"
              data-testid="button-get-started"
            >
              Get Started Today
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-white text-white px-8 py-3 cropped-corner font-medium hover:bg-white hover:text-primary transition-colors duration-200"
              data-testid="button-view-portfolio"
            >
              View Our Work
            </Button>
          </div>
        </div>
        
        {/* Decorative corner dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2" data-testid="cta-decorative-dots">
          {Array.from({ length: 7 }, (_, i) => (
            <div key={i} className="w-2 h-2 bg-white rounded-full opacity-30"></div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="bg-primary py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white" data-testid="cta-title">
            Ready to revolutionize your business?
          </h2>
          <p className="text-xl text-indigo-100" data-testid="cta-description">
            Join leading companies who trust Raqmi to drive their digital transformation and stay ahead in the rapidly evolving tech landscape.
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
              data-testid="button-schedule-consultation"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";

export default function PortfolioSection() {
  const portfolioItems = [
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Modern office workspace",
      title: "E-commerce Platform",
      description: "Complete online store solution with modern design and seamless user experience."
    },
    {
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Business team collaboration",
      title: "Corporate Website",
      description: "Professional corporate presence with advanced functionality and sleek design."
    },
    {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Professional working on laptop",
      title: "Mobile App",
      description: "Cross-platform mobile application with intuitive interface and powerful features."
    }
  ];

  return (
    <section id="portfolio" className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide" data-testid="portfolio-label">
            PORTFOLIO
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900" data-testid="portfolio-title">
            Our Recent Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="portfolio-description">
            Take a look at some of our recent projects and see how we've helped businesses achieve their goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
              data-testid={`portfolio-item-${index}`}
            >
              <div className="relative overflow-hidden cropped-corner-lg mb-6">
                <img 
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                  data-testid={`portfolio-image-${index}`}
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2" data-testid={`portfolio-title-${index}`}>
                {item.title}
              </h3>
              <p className="text-gray-600" data-testid={`portfolio-description-${index}`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-600 transition-colors duration-200"
            data-testid="button-view-all-work"
          >
            View All Work
          </Button>
        </div>
      </div>
    </section>
  );
}

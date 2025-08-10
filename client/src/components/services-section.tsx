export default function ServicesSection() {
  const services = [
    {
      icon: "fas fa-chart-line",
      title: "Growth Strategies",
      description: "Tailored, data-driven strategies to accelerate your business growth in the MENA region with measurable outcomes."
    },
    {
      icon: "fas fa-bullseye",
      title: "ROI-Focused Digital Marketing",
      description: "Maximize your marketing investments with campaigns designed to deliver measurable returns and sustainable growth."
    },
    {
      icon: "fas fa-robot",
      title: "Generative Search Optimization",
      description: "Optimize your content for AI-powered search engines and generative AI platforms to capture emerging search behaviors."
    },
    {
      icon: "fas fa-search",
      title: "SEO Strategies",
      description: "Boost your online visibility and drive targeted traffic with our expert search engine optimization and content strategies."
    },
    {
      icon: "fas fa-cogs",
      title: "Technology Integration",
      description: "Seamlessly integrate cutting-edge marketing technologies to enhance your digital presence and operational efficiency."
    },
    {
      icon: "fas fa-lightbulb",
      title: "AI-Powered Solution Development",
      description: "Leverage cutting-edge artificial intelligence to create custom solutions that automate processes and deliver intelligent insights."
    }
  ];

  return (
    <section id="services" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide" data-testid="services-label">
            OUR SERVICES
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900" data-testid="services-title">
            Growth-Focused Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="services-description">
            Transform your business performance with Raqmi's data-driven marketing expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 cropped-corner hover:shadow-lg transition-shadow duration-300"
              data-testid={`service-card-${index}`}
            >
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                <i className={`${service.icon} text-white text-xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" data-testid={`service-title-${index}`}>
                {service.title}
              </h3>
              <p className="text-gray-600" data-testid={`service-description-${index}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

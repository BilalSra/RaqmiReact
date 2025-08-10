export default function ServicesSection() {
  const services = [
    {
      icon: "fas fa-code",
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices for optimal performance."
    },
    {
      icon: "fas fa-palette",
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that provide exceptional user experiences across all devices."
    },
    {
      icon: "fas fa-chart-line",
      title: "Digital Marketing",
      description: "Strategic marketing campaigns that drive growth and increase your online visibility."
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
            What We Do Best
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="services-description">
            We provide comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 cropped-corner hover:shadow-lg transition-shadow duration-300 relative"
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
              
              {/* Decorative dots for middle service */}
              {index === 1 && (
                <div className="absolute -top-4 -right-4 grid grid-cols-3 gap-1" data-testid={`service-dots-${index}`}>
                  {Array.from({ length: 9 }, (_, i) => (
                    <div key={i} className="w-1 h-1 bg-primary rounded-full opacity-40"></div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

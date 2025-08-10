export default function TestimonialsSection() {
  const testimonials = [
    {
      company: "HTU",
      logo: "fas fa-graduation-cap",
      testimonial: "Raqmi's data-driven approach transformed our student enrollment strategy. Their targeted campaigns and conversion optimization helped us achieve an 80% increase in enrollments within just 6 months.",
      author: "Ahmad Khalil",
      position: "Marketing Director @ HTU",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      company: "Lisan",
      logo: "fas fa-language",
      testimonial: "Working with Raqmi was a game-changer for our market expansion. They delivered a 200% increase in website traffic and 90% user growth, helping us reach new markets across the MENA region.",
      author: "Sara Al-Rashid",
      position: "CEO @ Lisan",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide" data-testid="testimonials-label">
            TESTIMONIALS
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900" data-testid="testimonials-title">
            Hear From Our Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="testimonials-description">
            Discover how Raqmi has helped businesses across the MENA region achieve remarkable growth and transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 cropped-corner shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
              data-testid={`testimonial-card-${index}`}
            >
              {/* Company Logo/Icon */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <i className={`${testimonial.logo} text-primary text-lg`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900" data-testid={`testimonial-company-${index}`}>
                  {testimonial.company}
                </h3>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 text-lg leading-relaxed mb-8" data-testid={`testimonial-text-${index}`}>
                "{testimonial.testimonial}"
              </p>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                  data-testid={`testimonial-avatar-${index}`}
                />
                <div>
                  <h4 className="font-semibold text-gray-900" data-testid={`testimonial-author-${index}`}>
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-gray-500" data-testid={`testimonial-position-${index}`}>
                    {testimonial.position}
                  </p>
                </div>
              </div>

              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <i className="fas fa-quote-right text-4xl text-primary"></i>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Client Logos */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 mb-8">Trusted by leading companies across the MENA region</p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="flex items-center space-x-2">
              <i className="fas fa-rocket text-primary text-2xl"></i>
              <span className="text-gray-700 font-medium">ExecuteX</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-search text-primary text-2xl"></i>
              <span className="text-gray-700 font-medium">SEOMENA</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-star text-primary text-2xl"></i>
              <span className="text-gray-700 font-medium">Trustpilot</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
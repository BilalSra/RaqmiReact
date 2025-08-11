import { Button } from "@/components/ui/button";
import { FiTrendingUp, FiUsers, FiClock } from "react-icons/fi";
import htuxImage from "@assets/htux image.png";

export default function PortfolioSection() {
  const parseMetric = (metric: string) => {
    const [value, ...rest] = metric.split(" ");
    return { value, label: rest.join(" ") };
  };
  const portfolioItems = [
    {
      image: htuxImage,
      alt: "HTUx Growth Acceleration",
      title: "HTUx Growth Acceleration",
      description: "Boosted student enrollment by 80% through targeted digital campaigns and optimized conversion funnels.",
      metrics: ["+80% Enrollment", "+58% Conversion", "6 months"]
    },
    {
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Lisan Market Expansion",
      title: "Lisan Market Expansion",
      description: "Facilitated Lisan's growth strategy, resulting in a 90% increase in user base and significant boost in website traffic.",
      metrics: ["+200% Traffic", "+90% Users", "6 months"]
    },
    {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "ExecuteX Product Development",
      title: "ExecuteX Product Development",
      description: "Developed within Raqmi Innovation Lab, ExecuteX empowers businesses to bridge the gap between strategy and execution.",
      metrics: ["+38% Success", "+45% Engagement", "-67% Gap"]
    }
  ];

  return (
    <section id="portfolio" className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide" data-testid="portfolio-label">
            CLIENT PORTFOLIO
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900" data-testid="portfolio-title">
            Client Growth Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="portfolio-description">
            Explore the transformative journeys of our clients as we've helped them achieve remarkable growth and success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`group relative cursor-pointer rounded-xl bg-white shadow-sm hover:shadow-md transition overflow-hidden ${(index === 0 || index === 1 || index === 2) ? 'border border-primary/30' : ''}`}
              data-testid={`portfolio-item-${index}`}
            >
              {index === 0 ? (
                // Modern results header for the first card
                <div className="relative w-full h-56 overflow-hidden">
                  {/* Solid secondary header area for two-tone card */}
                  <div className="absolute inset-0 bg-secondary" />
                  {/* Glass effect panel */}
                  <div className="relative h-full flex items-center">
                    <div className="w-full px-6">
                      {/* Badge - pinned to top-left near border */}
                      <div className="absolute top-2 left-4">
                        <span className="text-[10px] font-semibold uppercase tracking-wide bg-white/20 text-white border border-white/40 backdrop-blur-sm px-2 py-[2px] rounded-full shadow-sm">Growth Marketing Engagement</span>
                      </div>
                      {/* Metrics with icons and dividers */}
                      <div className="mt-8 grid grid-cols-3">
                        {item.metrics.slice(0, 3).map((m, mi) => {
                          const { value, label } = parseMetric(m);
                          const Icon = [FiTrendingUp, FiUsers, FiClock][mi] || FiTrendingUp;
                          return (
                            <div key={mi} className="flex flex-col items-center relative text-secondary-foreground">
                              <div className="flex items-center gap-2">
                                <Icon className="opacity-80" size={16} />
                                <span className="text-2xl font-extrabold leading-none">{value}</span>
                              </div>
                              <span className="mt-1 text-[11px] opacity-80">{label}</span>
                              {/* Vertical divider */}
                              {mi < 2 && <span className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-white/50" />}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  {/* Bottom separator */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-secondary/30" />
                </div>
              ) : index === 1 ? (
                // Apply same modern results header for the second card (Lisan Market Expansion)
                <div className="relative w-full h-56 overflow-hidden">
                  {/* Solid secondary header area for two-tone card */}
                  <div className="absolute inset-0 bg-secondary" />
                  {/* Glass effect panel */}
                  <div className="relative h-full flex items-center">
                    <div className="w-full px-6">
                      {/* Badge - pinned to top-left near border */}
                      <div className="absolute top-2 left-4">
                        <span className="text-[10px] font-semibold uppercase tracking-wide bg-white/20 text-white border border-white/40 backdrop-blur-sm px-2 py-[2px] rounded-full shadow-sm">Market Expansion Strategy</span>
                      </div>
                      {/* Metrics with icons and dividers */}
                      <div className="mt-8 grid grid-cols-3">
                        {item.metrics.slice(0, 3).map((m, mi) => {
                          const { value, label } = parseMetric(m);
                          const Icon = [FiTrendingUp, FiUsers, FiClock][mi] || FiTrendingUp;
                          return (
                            <div key={mi} className="flex flex-col items-center relative text-secondary-foreground">
                              <div className="flex items-center gap-2">
                                <Icon className="opacity-80" size={16} />
                                <span className="text-2xl font-extrabold leading-none">{value}</span>
                              </div>
                              <span className="mt-1 text-[11px] opacity-80">{label}</span>
                              {/* Vertical divider */}
                              {mi < 2 && <span className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-secondary/30" />}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  {/* Bottom separator */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-secondary/30" />
                </div>
              ) : index === 1 ? (
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    data-testid={`portfolio-image-${index}`}
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                </div>
              ) : index === 2 ? (
                // Apply similar header for the third card with light red top and metrics
                <div className="relative w-full h-56 overflow-hidden">
                  {/* True red header area */}
                  <div className="absolute inset-0 bg-red-500" />
                  <div className="relative h-full flex items-center">
                    <div className="w-full px-6">
                      {/* Badge */}
                      <div className="absolute top-2 left-4">
                        <span className="text-[10px] font-semibold uppercase tracking-wide bg-white/20 text-white border border-white/40 backdrop-blur-sm px-2 py-[2px] rounded-full shadow-sm">Product Development</span>
                      </div>
                      {/* Metrics */}
                      <div className="mt-8 grid grid-cols-3">
                        {item.metrics.slice(0, 3).map((m, mi) => {
                          const { value, label } = parseMetric(m);
                          const Icon = [FiTrendingUp, FiUsers, FiClock][mi] || FiTrendingUp;
                          return (
                            <div key={mi} className="flex flex-col items-center relative text-white">
                              <div className="flex items-center gap-2">
                                <Icon className="opacity-90" size={16} />
                                <span className="text-2xl font-extrabold leading-none">{value}</span>
                              </div>
                              <span className="mt-1 text-[11px] opacity-90">{label}</span>
                              {mi < 2 && <span className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-white/50" />}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  {/* Bottom separator */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-white/50" />
                </div>
              ) : (
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    data-testid={`portfolio-image-${index}`}
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                </div>
              )}
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2" data-testid={`portfolio-title-${index}`}>
                  {item.title}
                </h3>
                <p className="text-gray-600" data-testid={`portfolio-description-${index}`}>
                  {item.description}
                </p>
              </div>
              {/* Integrated metrics footer within card (skip for first card since metrics are in header) */}
              {index > 2 && (
                <div className="px-5 pb-5 pt-4 border-t bg-gray-50">
                  <div className="flex flex-wrap gap-2">
                    {item.metrics.map((metric, metricIndex) => (
                      <span
                        key={metricIndex}
                        className="text-xs bg-white text-gray-700 px-2.5 py-1 rounded-md font-medium border border-gray-200"
                        data-testid={`portfolio-metric-${index}-${metricIndex}`}
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Decorative dot theme at bottom-right for first two cards */}
              {/* Decorative dots removed for all cards per request */}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-600 transition-colors duration-200"
            data-testid="button-growth-solutions"
          >
            Growth Solutions
          </Button>
        </div>
      </div>
    </section>
  );
}

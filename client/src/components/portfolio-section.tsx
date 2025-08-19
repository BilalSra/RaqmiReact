import { Button } from "@/components/ui/button";
import { FiTrendingUp, FiUsers, FiClock, FiArrowUpRight, FiSearch } from "react-icons/fi";
import htuxImage from "@assets/htux image.png";
import htuxMockupImage from "@assets/HTUx Mockup.png";
import elearningImage from "@assets/elearning.jpg";
import seoImage from "@assets/seo vv.png";
import htuxLogo from "@assets/HTUx Logo.png";
import lisanLogo from "@assets/Lisan-Logo.png";
import lisanGImage from "@assets/lisan g.jpg";

export default function PortfolioSection() {
  const parseMetric = (metric: string) => {
    const [value, ...rest] = metric.split(" ");
    return { value, label: rest.join(" ") };
  };
  const portfolioItems = [
    {
      image: htuxImage,
      alt: "HTUx Growth Acceleration",
      title: "Securing Enrollment and Skyrocketing Organic Traffic for a Cutting-Edge STEM School",
      description: "Boosted student enrollment by 80% through targeted digital campaigns and optimized conversion funnels.",
      metrics: ["+80% Enrollment", "+58% Conversion", "+20% Domain Authority"]
    },
    {
      image: lisanGImage,
      alt: "Lisan MENA Expansion",
      title: "Expanding Into MENA Countries and Securing New B2B Partnerships Through Digital Marketing Strategies",
      description: "Facilitated Lisan's growth strategy, resulting in a 90% increase in user base and significant boost in website traffic.",
      metrics: ["+200% Traffic", "+90% Users", "+2 Countries"]
    },
    {
      image: seoImage,
      alt: "AI-Powered SEO Analysis Tool",
      title: "Developed AI-Powered SEO Analysis Platform with Advanced NLP Technology",
      description: "Engineered a comprehensive SEO optimization platform leveraging artificial intelligence and natural language processing to deliver actionable insights and automated implementation strategies.",
      metrics: ["+200% Ranking", "+100 Top Five Results", "+30% Domain Authority"]
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
              className="group relative cursor-pointer rounded-xl bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-700"
              data-testid={`portfolio-item-${index}`}
            >
              {/* Image/Visual Section */}
              <div className="relative w-full h-48 overflow-hidden">
                {index === 0 ? (
                  <img
                    src={htuxMockupImage}
                    alt="HTUx Mockup"
                    className="w-full h-full object-cover"
                  />
                ) : index === 1 ? (
                  <img
                    src={lisanGImage}
                    alt="Lisan MENA Expansion"
                    className="w-full h-full object-cover"
                  />
                ) : index === 2 ? (
                  <img
                    src={seoImage}
                    alt="AI-Powered SEO Analysis Tool"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/60 to-transparent" />
              </div>

              {/* Content Section */}
              <div className="p-6 text-white">
                {/* HTUx Logo for first card */}
                {index === 0 && (
                  <div className="mb-4">
                    <img
                      src={htuxLogo}
                      alt="HTUx Logo"
                      className="h-8 w-auto brightness-0 invert"
                    />
                  </div>
                )}

                {/* Lisan Logo for second card */}
                {index === 1 && (
                  <div className="mb-4">
                    <img
                      src={lisanLogo}
                      alt="Lisan Logo"
                      className="h-8 w-auto brightness-0 invert"
                    />
                  </div>
                )}

                {/* Search Icon for third card */}
                {index === 2 && (
                  <div className="mb-4">
                    <FiSearch className="h-8 w-8 text-white" />
                  </div>
                )}

                {/* Category Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {index === 0 && (
                    <>
                      <span className="text-xs px-2 py-1 bg-white/10 text-white rounded-full border border-white/20">Growth Strategy</span>
                      <span className="text-xs px-2 py-1 bg-white/10 text-white rounded-full border border-white/20">Digital Marketing</span>
                      <span className="text-xs px-2 py-1 bg-white/10 text-white rounded-full border border-white/20">Search Engine Optimization</span>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <span className="text-xs px-2 py-1 bg-white/10 text-white rounded-full border border-white/20">Market Expansion Strategy</span>
                      <span className="text-xs px-2 py-1 bg-white/10 text-white rounded-full border border-white/20">Google Ads</span>
                      <span className="text-xs px-2 py-1 bg-white/10 text-white rounded-full border border-white/20">Search Engine Optimization</span>
                      <span className="text-xs px-2 py-1 bg-white/10 text-white rounded-full border border-white/20">Technology Integration</span>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <span className="text-xs px-2 py-1 bg-white/10 text-white rounded-full border border-white/20">Product Development</span>
                      <span className="text-xs px-2 py-1 bg-white/10 text-white rounded-full border border-white/20">Natural Language Processing</span>
                      <span className="text-xs px-2 py-1 bg-white/10 text-white rounded-full border border-white/20">AI Integration</span>
                    </>
                  )}
                </div>

                {/* Reading Time */}
                <div className="text-xs text-gray-400 mb-4 flex items-center gap-1">
                  <FiClock size={12} />
                  <span>4 min read</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                  {item.title}
                </h3>

                {/* Key Metrics */}
                {item.metrics && item.metrics.length > 0 && (
                  <div className="space-y-3 mb-4">
                    {item.metrics.slice(0, 3).map((metric, metricIndex) => {
                      const { value, label } = parseMetric(metric);
                      return (
                        <div key={metricIndex} className="flex items-center gap-2">
                          <FiArrowUpRight className="text-green-400" size={16} />
                          <span className="text-xl font-bold text-green-400">{value}</span>
                          <span className="text-sm text-gray-300">{label}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
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

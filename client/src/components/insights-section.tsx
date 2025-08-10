import { Button } from "@/components/ui/button";

export default function InsightsSection() {
  const insights = [
    {
      category: "AI Search",
      title: "Generative Search Optimization (GSO): The Future of SEO in the AI Era",
      date: "January 8, 2025",
      readTime: "12 min read",
      description: "Discover how Generative Search Optimization is revolutionizing SEO for AI-powered search engines like ChatGPT, Bard, and voice assistants. Essential strategies for 2025.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "MENA Region",
      title: "Data-Driven Growth in MENA: How Leading Companies Are Transforming the Region's Business Landscape",
      date: "April 15, 2025",
      readTime: "10 min read",
      description: "The Middle East and North Africa (MENA) region is experiencing a profound transformation driven by data, reshaping how companies compete, innovate, and grow.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "Growth Marketing",
      title: "What is a Growth Marketing Company and How Can it Transform Your Business?",
      date: "April 15, 2025",
      readTime: "8 min read",
      description: "A growth marketing company is a specialized agency that focuses on driving sustainable business growth through data-driven, experimental marketing strategies.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide" data-testid="insights-label">
            OUR INSIGHTS
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900" data-testid="insights-title">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="insights-description">
            Stay updated with the latest trends and insights in growth marketing for the MENA region.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <article 
              key={index}
              className="group cursor-pointer"
              data-testid={`insight-item-${index}`}
            >
              <div className="relative overflow-hidden cropped-corner-lg mb-6">
                <img 
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                  data-testid={`insight-image-${index}`}
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium" data-testid={`insight-category-${index}`}>
                    {insight.category}
                  </span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <span data-testid={`insight-date-${index}`}>{insight.date}</span>
                  <span data-testid={`insight-read-time-${index}`}>{insight.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-200" data-testid={`insight-title-${index}`}>
                  {insight.title}
                </h3>
                
                <p className="text-gray-600 line-clamp-3" data-testid={`insight-description-${index}`}>
                  {insight.description}
                </p>
                
                <div className="pt-2">
                  <span className="text-primary font-medium text-sm group-hover:underline" data-testid={`insight-read-more-${index}`}>
                    Read More →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-600 transition-colors duration-200"
            data-testid="button-view-all-articles"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}
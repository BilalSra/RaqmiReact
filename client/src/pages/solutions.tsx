import React from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Solutions() {
  const solutions = [
    {
      id: "growth-strategies",
      title: "Growth Strategies",
      subtitle: "Tailored Business Acceleration",
      description: "Tailored, data-driven strategies to accelerate your business growth in the MENA region with measurable outcomes. Our comprehensive approach combines market analysis, competitive intelligence, and performance optimization to deliver sustainable growth.",
      features: [
        "Market Analysis & Opportunity Identification",
        "Competitive Intelligence & Positioning",
        "Growth Roadmap Development",
        "Performance Tracking & KPI Management",
        "Strategic Partnership Development",
        "Revenue Optimization Strategies"
      ],
      metrics: { clients: "50+", growth: "250%", strategies: "100+" },
      icon: "fas fa-chart-line"
    },
    {
      id: "roi-digital-marketing",
      title: "ROI-Focused Digital Marketing",
      subtitle: "Measurable Marketing Returns",
      description: "Maximize your marketing investments with campaigns designed to deliver measurable returns and sustainable growth. Every campaign is optimized for performance, tracked meticulously, and refined continuously.",
      features: [
        "Performance Marketing & PPC Management",
        "Social Media Advertising Optimization",
        "Email Marketing Automation",
        "Conversion Rate Optimization",
        "Marketing Attribution & Analytics",
        "Budget Allocation & ROI Tracking"
      ],
      metrics: { roi: "400%", campaigns: "200+", conversions: "15K+" },
      icon: "fas fa-bullseye"
    },
    {
      id: "generative-search",
      title: "Generative Search Optimization",
      subtitle: "AI-Powered Visibility",
      description: "Optimize your content for AI-powered search engines and generative AI platforms to capture emerging search behaviors. Stay ahead of the curve with next-generation search optimization strategies.",
      features: [
        "AI Search Engine Optimization",
        "Content Optimization for LLMs",
        "Voice Search & Conversational AI",
        "Featured Snippet Optimization",
        "Entity-Based SEO Strategies",
        "Generative AI Content Creation"
      ],
      metrics: { visibility: "300%", queries: "50K+", rankings: "1000+" },
      icon: "fas fa-robot"
    },
    {
      id: "seo-strategies",
      title: "SEO Strategies",
      subtitle: "Organic Growth Excellence",
      description: "Boost your online visibility and drive targeted traffic with our expert search engine optimization and content strategies. Our holistic approach ensures long-term organic growth and sustainable rankings.",
      features: [
        "Technical SEO Audits & Optimization",
        "Content Strategy & Creation",
        "Link Building & Authority Development",
        "Local SEO & Geographic Targeting",
        "Mobile & Core Web Vitals Optimization",
        "SEO Analytics & Reporting"
      ],
      metrics: { traffic: "500%", keywords: "2000+", rankings: "Top 3" },
      icon: "fas fa-search"
    },
    {
      id: "technology-integration",
      title: "Technology Integration",
      subtitle: "Seamless Digital Transformation",
      description: "Seamlessly integrate cutting-edge marketing technologies to enhance your digital presence and operational efficiency. Our integration solutions streamline workflows and maximize technology ROI.",
      features: [
        "Marketing Automation Platforms",
        "CRM & Customer Data Integration",
        "Analytics & Tracking Implementation",
        "API Development & Integrations",
        "Workflow Automation & Optimization",
        "Technology Stack Optimization"
      ],
      metrics: { integrations: "100+", efficiency: "80%", systems: "25+" },
      icon: "fas fa-cogs"
    },
    {
      id: "ai-solutions",
      title: "AI-Powered Solution Development",
      subtitle: "Intelligent Business Solutions",
      description: "Leverage cutting-edge artificial intelligence to create custom solutions that automate processes and deliver intelligent insights. Transform your business operations with AI-driven innovation.",
      features: [
        "Custom AI Model Development",
        "Process Automation & Optimization",
        "Predictive Analytics & Forecasting",
        "Natural Language Processing",
        "Computer Vision Applications",
        "AI Strategy & Implementation"
      ],
      metrics: { accuracy: "95%", automation: "70%", insights: "1000+" },
      icon: "fas fa-lightbulb"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-purple-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Our Solutions
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Comprehensive Growth<br />
              <span className="text-primary">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              From AI-powered analytics to regional market expansion, we provide end-to-end solutions 
              that drive measurable business growth across the MENA region.
            </p>
            <div className="flex justify-center">
              <Link href="/contact">
                <Button 
                  variant="outline"
                  className="text-primary bg-white border border-primary/20 px-8 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors duration-200"
                >
                  Get Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 opacity-30">
          <div className="grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-2.5 h-2.5 bg-primary rounded-full"></div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-10 left-10 opacity-30">
          <div className="grid grid-cols-2 gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-purple-500 rounded-full"></div>
            ))}
          </div>
        </div>
        
        {/* Additional Decorative Rings */}
        <div className="absolute top-1/2 left-8 -translate-y-1/2 pointer-events-none opacity-10">
          <div className="w-32 h-32 border-4 border-primary/20 rounded-full"></div>
          <div className="absolute top-2 left-2 w-28 h-28 border-4 border-primary/30 rounded-full"></div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section id="solutions-overview" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <div key={solution.id} className={`relative ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'} lg:flex lg:items-center lg:gap-16`}>
                {/* Content Side */}
                <div className="lg:w-1/2 mb-12 lg:mb-0">
                  {/* Number Badge */}
                  <div className="flex items-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                      <span className="text-white font-black text-3xl">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-primary/40 to-transparent"></div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mb-6">
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                    <p className="text-xl text-primary font-medium">{solution.subtitle}</p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">{solution.description}</p>

                  {/* Metrics Row */}
                  <div className="flex flex-wrap gap-8 mb-8">
                    {Object.entries(solution.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-primary">{value}</div>
                        <div className="text-sm text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>


                </div>

                {/* Visual Side - Feature List */}
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <h4 className="text-lg font-bold text-gray-900 mb-6">Key Features & Services</h4>
                    <div className="grid gap-4">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div className="text-gray-700 text-sm leading-relaxed">{feature}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Background Decoration */}
                <div className={`absolute inset-0 -z-10 ${index % 2 === 0 ? 'bg-gradient-to-r from-primary/5 to-transparent' : 'bg-gradient-to-l from-purple-500/5 to-transparent'} rounded-3xl`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach that ensures consistent results and measurable growth for every client.
            </p>
          </div>
          
          {/* Decorative Elements for Process Section */}
          <div className="absolute top-10 right-10 opacity-20">
            <div className="grid grid-cols-4 gap-2">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-10 left-10 opacity-20">
            <div className="grid grid-cols-3 gap-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-purple-500 rounded-full"></div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Deep dive into your business, market, and objectives" },
              { step: "02", title: "Strategy", desc: "Develop customized growth strategies and roadmaps" },
              { step: "03", title: "Execution", desc: "Implement solutions with precision and agility" },
              { step: "04", title: "Optimization", desc: "Continuous monitoring and performance enhancement" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-300 -translate-y-0.5"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-20 bg-primary overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Decorative Elements for CTA Section */}
          <div className="absolute top-8 right-8 opacity-20">
            <div className="grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-8 left-8 opacity-20">
            <div className="grid grid-cols-2 gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-3 h-3 bg-white/60 rounded-full"></div>
              ))}
            </div>
          </div>
          
          {/* Decorative Rings */}
          <div className="absolute top-1/2 right-12 -translate-y-1/2 pointer-events-none opacity-10">
            <div className="w-40 h-40 border-4 border-white/30 rounded-full"></div>
            <div className="absolute top-3 left-3 w-34 h-34 border-4 border-white/20 rounded-full"></div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl text-primary-light mb-8">
            Let's discuss how our solutions can transform your business and drive measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                Schedule Consultation
              </Button>
            </Link>
            <Button 
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

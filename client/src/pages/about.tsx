import React, { useState, useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import bilalFounderImage from "@/assets/bilal-founder.jpeg";

// Count-up animation hook
function useCountUp(target: number, durationMs = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / durationMs, 1);
      
      setCount(Math.floor(progress * target));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [target, durationMs, start]);

  return count;
}

// Animated stat component
function StatItem({ target, label, caption }: { target: number, label: string, caption: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const count = useCountUp(target, 2000, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`stat-${label.toLowerCase()}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [label]);

  return (
    <div id={`stat-${label.toLowerCase()}`} className="text-center group">
      <div className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 mb-2">
        {count}{target >= 1000 ? (target >= 10000 ? ',000+' : '+') : '+'}
      </div>
      <div className="text-lg font-bold text-gray-900 mb-1">
        {label}
      </div>
      <div className="text-sm text-gray-600">
        {caption}
      </div>
    </div>
  );
}

export default function About() {
  const stats = [
    { number: 85, label: "Client Retention", caption: "long-term partnerships" },
    { number: 3, label: "Average ROI", caption: "return on investment" },
    { number: 50, label: "Active Clients", caption: "across MENA region" },
    { number: 100, label: "Projects Delivered", caption: "successful campaigns" }
  ];

  const values = [
    {
      title: "Data-Driven Excellence",
      description: "Every growth marketing strategy we develop is backed by comprehensive data analysis and market intelligence, ensuring measurable ROI and sustainable business growth for our MENA clients.",
      icon: "fas fa-chart-line",
      gradient: "from-primary to-primary/80"
    },
    {
      title: "MENA Market Expertise",
      description: "Deep understanding of Middle East and North Africa market dynamics, cultural nuances, and regional business practices that drive successful digital marketing campaigns.",
      icon: "fas fa-globe",
      gradient: "from-primary to-primary/80"
    },
    {
      title: "AI-Powered Innovation",
      description: "We leverage cutting-edge artificial intelligence, machine learning, and generative search optimization to deliver competitive advantages in digital marketing and business growth.",
      icon: "fas fa-lightbulb",
      gradient: "from-primary to-primary/80"
    },
    {
      title: "Strategic Partnerships",
      description: "We build long-term growth marketing partnerships, working closely with businesses to understand their unique challenges and deliver customized digital marketing solutions.",
      icon: "fas fa-handshake",
      gradient: "from-primary to-primary/80"
    }
  ];

  const milestones = [
    { year: "2023", title: "Foundation", description: "Raqmi was founded with a vision to transform MENA business growth through data-driven marketing strategies" },
    { year: "2023", title: "First Clients", description: "Onboarded our first 10 clients and established our proven digital marketing methodology" },
    { year: "2024", title: "Regional Expansion", description: "Expanded growth marketing services across 5 MENA countries with 50+ successful projects" },
    { year: "2024", title: "AI Integration", description: "Launched AI-powered analytics and generative search optimization for enhanced marketing performance" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Modern Design */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-primary/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Left Content */}
            <div className="mb-12 lg:mb-0">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                About Raqmi
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                Driven by 
                <span className="text-primary"> Data</span>
                <br />
                Powered by
                <span className="text-primary"> Results</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Raqmi is a leading growth marketing consultancy specializing in data-driven digital marketing strategies for MENA businesses. We deliver measurable ROI through AI-powered analytics, regional market expertise, and proven growth marketing methodologies.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="text-2xl font-bold text-primary">85%</div>
                  <div className="text-sm text-gray-600">Client Retention</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="text-2xl font-bold text-primary">3x ROI</div>
                  <div className="text-sm text-gray-600">Average Return</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-primary text-white px-8 py-3 rounded-xl font-medium hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </Button>
                </Link>
                <Link href="/solutions">
                  <Button variant="outline" className="border-2 border-primary text-primary px-8 py-3 rounded-xl font-medium hover:bg-primary hover:text-white transition-all duration-300">
                    Our Solutions
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            {/* Founder Card - Vertical Refined */}
            <div className="relative">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                <div className="text-center">
                  {/* Avatar with gradient ring */}
                  <div className="inline-flex items-center justify-center mb-6">
                    <div className="p-[3px] rounded-full bg-gradient-to-tr from-primary via-primary/60 to-primary/30">
                      <div className="rounded-full overflow-hidden bg-white">
                        <img
                          src={bilalFounderImage}
                          alt="Bilal Sridi - Founder & CEO"
                          className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900">Bilal Sridi</h3>
                  <p className="text-primary font-semibold mt-1">Founder & CEO</p>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <blockquote className="text-gray-600 italic text-base sm:text-lg leading-relaxed">
                      "At Raqmi, we don't just create strategies – we build partnerships. Every client's success is our success, and we're committed to delivering results that make a real difference to their business."
                    </blockquote>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <a
                      href="mailto:bilal.sridi@raqmi.io"
                      aria-label="Email Bilal Sridi"
                      className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
                    >
                      <i className="fas fa-envelope mr-2"></i>
                      Contact
                    </a>
                    <a
                      href="https://linkedin.com/in/bilalsridi"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Visit Bilal's LinkedIn"
                      className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                    >
                      <i className="fab fa-linkedin-in mr-2"></i>
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Background decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
        
        {/* Modern decorative elements */}
        <div className="absolute top-1/4 right-10 opacity-20">
          <div className="w-2 h-20 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
        </div>
        <div className="absolute bottom-1/4 left-10 opacity-20">
          <div className="w-20 h-2 bg-gradient-to-r from-purple-500 to-transparent rounded-full"></div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-gray-600">
              Measurable results that speak for themselves
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatItem 
                key={index}
                target={stat.number}
                label={stat.label}
                caption={stat.caption}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From vision to reality - the milestones that shaped Raqmi into the growth partner businesses trust today.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-purple-600 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary to-purple-600 rounded-xl flex items-center justify-center text-white font-bold mr-4">
                          {milestone.year.slice(-2)}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                          <p className="text-sm text-gray-500">{milestone.year}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10 w-6 h-6 bg-white border-4 border-primary rounded-full shadow-lg"></div>
                  
                  <div className="lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section - Modern */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-lg text-gray-600">
              The vision behind Raqmi and what drives us every day
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Beginning</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Founded in 2023 with a vision to transform how businesses approach digital marketing and growth, 
                  Raqmi emerged from the recognition that traditional marketing approaches often fail to deliver 
                  measurable ROI in today's competitive digital landscape.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We believe every growth marketing decision should be backed by solid data analysis and deep market 
                  understanding. Our approach combines cutting-edge AI analytics, generative search optimization, and 
                  proven digital marketing expertise built over years of experience.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  Today, we're proud to partner with 50+ businesses globally, helping them 
                  navigate complex digital marketing landscapes and achieve sustainable business growth through proven, 
                  data-driven marketing methodologies that deliver 3x average ROI and 85% client retention rates.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-primary p-8 rounded-3xl text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Raqmi for Growth Marketing?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <i className="fas fa-check-circle mr-3"></i>
                    Data-driven digital marketing strategies
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle mr-3"></i>
                    MENA market expertise & cultural insights
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle mr-3"></i>
                    AI-powered analytics & optimization
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle mr-3"></i>
                    Measurable ROI & business growth results
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 text-center">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section - Modern Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape how we work with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group relative bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-6">
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                      <i className={`${value.icon} text-white text-2xl`}></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative element */}
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Landing Page Style */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Accelerate Your MENA Business Growth?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with Raqmi's growth marketing experts to achieve 3x ROI and sustainable business growth 
            through data-driven digital marketing strategies tailored for the MENA market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                variant="outline"
                className="bg-white text-primary border-white px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
              >
                Get Free Consultation
              </Button>
            </Link>
            <Link href="/solutions">
              <Button 
                variant="outline"
                className="text-white bg-transparent border-white/30 px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors duration-200"
              >
                View Growth Solutions
              </Button>
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-8">
            <p className="text-white/80 text-sm">
              Join 50+ successful MENA businesses • 85% client retention rate • 3x average ROI
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
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
      </section>

      <Footer />
    </div>
  );
}

"use client"

import React, { useState, useEffect } from 'react';

function DigitalMarketing() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    services: false,
    process: false,
    channels: false,
    results: false
  });
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'process', 'channels', 'results'];
      
      sections.forEach(section => {
        const element = document.getElementById(`marketing-${section}-section`);
        if (!element) return;
        
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(prev => ({ ...prev, [section]: true }));
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const services = [
    {
      title: "Search Engine Optimization",
      description: "Boost your organic visibility and rank higher on Google with data-driven SEO strategies that drive targeted traffic.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
      ),
      features: ["Keyword Research", "On-Page SEO", "Link Building", "Technical SEO"]
    },
    {
      title: "Pay-Per-Click Advertising",
      description: "Maximize ROI with targeted PPC campaigns on Google Ads, Facebook, and LinkedIn that convert clicks into customers.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
        </svg>
      ),
      features: ["Google Ads", "Facebook Ads", "Display Campaigns", "Retargeting"]
    },
    {
      title: "Social Media Marketing",
      description: "Build engaged communities and amplify your brand across Instagram, Facebook, Twitter, LinkedIn, and TikTok.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
        </svg>
      ),
      features: ["Content Strategy", "Community Management", "Influencer Marketing", "Social Analytics"]
    },
    {
      title: "Content Marketing",
      description: "Create compelling content that tells your story, educates your audience, and drives conversions across all channels.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
          <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
        </svg>
      ),
      features: ["Blog Writing", "Video Production", "Infographics", "Email Campaigns"]
    },
    {
      title: "Email Marketing",
      description: "Nurture leads and retain customers with personalized email campaigns that deliver results and maximize lifetime value.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
      features: ["Automation", "Segmentation", "A/B Testing", "Drip Campaigns"]
    },
    {
      title: "Analytics & Reporting",
      description: "Track performance, measure ROI, and optimize campaigns with comprehensive analytics and actionable insights.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      ),
      features: ["Google Analytics", "Custom Dashboards", "Conversion Tracking", "Performance Reports"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Strategy & Research",
      description: "We analyze your business goals, competitors, and target audience to create a data-driven marketing strategy tailored to your needs."
    },
    {
      step: "02",
      title: "Campaign Creation",
      description: "Our team develops compelling campaigns with engaging content, eye-catching visuals, and persuasive copy across all channels."
    },
    {
      step: "03",
      title: "Launch & Optimize",
      description: "We launch your campaigns, monitor performance in real-time, and continuously optimize based on data and insights."
    },
    {
      step: "04",
      title: "Scale & Report",
      description: "Track results with detailed analytics, scale what works, and receive comprehensive reports showing ROI and growth metrics."
    }
  ];

  const channels = [
    { name: "Google Ads", icon: "🔍", metric: "Search" },
    { name: "Facebook", icon: "📘", metric: "Social" },
    { name: "Instagram", icon: "📸", metric: "Social" },
    { name: "LinkedIn", icon: "💼", metric: "B2B" },
    { name: "YouTube", icon: "🎥", metric: "Video" },
    { name: "Twitter", icon: "🐦", metric: "Social" },
    { name: "Pinterest", icon: "📌", metric: "Visual" },
    { name: "Email", icon: "✉️", metric: "Direct" },
    { name: "SEO", icon: "🎯", metric: "Organic" },
    { name: "Display Ads", icon: "🖼️", metric: "Awareness" },
    { name: "Affiliate", icon: "🤝", metric: "Partnership" }
  ];

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Hero Section */}
      <section id="marketing-hero-section" className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className={`transition-all duration-1000 ${isVisible.hero ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-6">
              <span className="bg-blue-400/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
                Digital Marketing Services
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Grow Your Brand With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Data-Driven Marketing
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mb-8 rounded-full"></div>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mb-12">
              Drive traffic, generate leads, and increase revenue with comprehensive digital marketing strategies. From SEO to paid ads, we deliver measurable results that scale your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/30">
                Get Free Strategy Session
              </button>
              <button className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400/10 transition-all duration-300">
                View Success Stories
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </section>

      {/* Services Grid */}
      <section id="marketing-services-section" className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.services ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold mb-4">Our Marketing Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Full-spectrum digital marketing solutions to amplify your online presence and drive growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 group ${
                  isVisible.services ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-6 text-blue-400 group-hover:from-blue-400 group-hover:to-purple-500 group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-400">
                      <svg className="w-4 h-4 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Process */}
      <section id="marketing-process-section" className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.process ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold mb-4">Our Marketing Process</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              A proven methodology to transform your marketing goals into measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {process.map((item, index) => (
              <div
                key={item.step}
                className={`relative bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-blue-400/50 transition-all duration-500 ${
                  isVisible.process ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                  {item.step}
                </div>
                <div className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Channels */}
      <section id="marketing-channels-section" className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.channels ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold mb-4">Marketing Channels We Master</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Multi-channel strategies to reach your audience wherever they are
            </p>
          </div>

          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-1000 ${isVisible.channels ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            {channels.map((channel, index) => (
              <div
                key={channel.name}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 group"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{channel.icon}</div>
                <h4 className="font-bold text-lg mb-1">{channel.name}</h4>
                <p className="text-sm text-gray-400">{channel.metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Stats */}
      <section id="marketing-results-section" className="py-20 px-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.results ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold mb-4">Results That Matter</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Real metrics from real campaigns that drive business growth
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 transition-all duration-1000 ${isVisible.results ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">350%</div>
              <p className="text-gray-300 text-lg">Average ROI</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">2.5M+</div>
              <p className="text-gray-300 text-lg">Leads Generated</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">500+</div>
              <p className="text-gray-300 text-lg">Campaigns Launched</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">98%</div>
              <p className="text-gray-300 text-lg">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Dominate Your Market?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Let's create a winning marketing strategy that drives real results. Schedule your free consultation today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/30">
              Start Growing Today
            </button>
            <button className="border-2 border-blue-400 text-blue-400 px-10 py-4 rounded-lg font-semibold hover:bg-blue-400/10 transition-all duration-300">
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DigitalMarketing;
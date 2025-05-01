"use client"

import React, { useState, useEffect } from 'react';
import { Search, BarChart2, Globe, TrendingUp, Target, Award } from 'lucide-react';

function SeoExpertise() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const seoServices = [
    {
      title: "Keyword Research & Strategy",
      icon: Search, // Store the component, not JSX
      description: "We identify high-value keywords that your target audience is actively searching for, then build a comprehensive strategy to rank for those terms.",
      stats: [
        { value: "500+", label: "Keywords Analyzed" },
        { value: "85%", label: "Success Rate" }
      ]
    },
    {
      title: "On-Page Optimization",
      icon: Globe, // Store the component, not JSX
      description: "We optimize your content, meta tags, headers, and site structure to ensure search engines can easily crawl and understand your website.",
      stats: [
        { value: "40%", label: "Avg. Visibility Increase" },
        { value: "3x", label: "Faster Indexing" }
      ]
    },
    {
      title: "Technical SEO",
      icon: BarChart2, // Store the component, not JSX
      description: "We resolve technical issues that impact search visibility, like site speed, mobile-friendliness, structured data, and crawl errors.",
      stats: [
        { value: "99%", label: "Mobile Optimization" },
        { value: "2.5s", label: "Avg. Load Time" }
      ]
    },
    {
      title: "Content Optimization",
      icon: TrendingUp, // Store the component, not JSX
      description: "We create and optimize high-quality, relevant content that satisfies user intent and establishes your site as an authority.",
      stats: [
        { value: "65%", label: "More Engagement" },
        { value: "4x", label: "Higher CTR" }
      ]
    },
    {
      title: "Competitor Analysis",
      icon: Target, // Store the component, not JSX
      description: "We analyze your competitors' strategies to identify opportunities and develop tactics to outperform them in search results.",
      stats: [
        { value: "Top 10", label: "Competitor Insights" },
        { value: "2x", label: "Growth Strategy" }
      ]
    },
    {
      title: "Performance Tracking",
      icon: Award, // Store the component, not JSX
      description: "We continuously monitor your SEO performance with comprehensive analytics and reporting to refine strategies and maximize results.",
      stats: [
        { value: "24/7", label: "Rank Monitoring" },
        { value: "Monthly", label: "Detailed Reports" }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('seo-section');
      if (!element) return;

      const position = element.getBoundingClientRect();
      if (position.top < window.innerHeight - 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % seoServices.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [seoServices.length]);

  return (
    <section id="seo-section" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center bg-amber-900/30 px-4 py-2 rounded-full mb-4">
            <Search size={18} className="text-amber-400 mr-2" />
            <span className="text-amber-300 text-sm font-medium">SEO Expertise</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Search Engine Optimization That Drives Results</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-300 to-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our proven SEO strategies drive organic traffic, increase conversion rates, and grow your business with sustainable results.
          </p>
        </div>

        {/* SEO Services Tabs */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
          <div className="flex overflow-x-auto scrollbar-hide space-x-2 pb-4 mb-6">
            {seoServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${activeTab === index ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30' : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-300'}`}
                  onClick={() => setActiveTab(index)}
                >
                  <div className="flex items-center">
                    <span className="mr-2"><Icon size={18} /></span>
                    <span>{service.title}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Content for active tab */}
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            {seoServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`transition-all duration-500 ${activeTab === index ? 'opacity-100 block' : 'opacity-0 hidden'}`}
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                    <div className="mb-6 md:mb-0 md:max-w-xl">
                      <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                        <span className="bg-amber-400/20 p-2 rounded-lg mr-3"><Icon size={24} /></span>
                        {service.title}
                      </h3>
                      <p className="text-gray-300">{service.description}</p>
                    </div>

                    <div className="flex space-x-6">
                      {service.stats.map((stat, i) => (
                        <div key={i} className="text-center">
                          <div className="text-2xl font-bold text-amber-300">{stat.value}</div>
                          <div className="text-sm text-gray-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="mt-8 pt-6 border-t border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Award size={20} className="text-amber-400 mr-2" />
                  <span className="text-white">Our approach is data-driven and results-oriented</span>
                </div>
                <div className="hidden md:flex space-x-1">
                  {seoServices.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${activeTab === index ? 'bg-amber-400 w-6' : 'bg-gray-600'}`}
                      onClick={() => setActiveTab(index)}
                      aria-label={`View service ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Results Box */}
        <div
          className={`bg-gradient-to-r from-amber-900/30 to-gray-800 rounded-lg p-8 border border-amber-700/20 transition-all duration-1000 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '300ms' }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-semibold text-white mb-2">Ready to improve your search rankings?</h3>
              <p className="text-gray-300">Our SEO strategies deliver measurable results that grow your business.</p>
            </div>
            <div className="flex space-x-4">
              <div className="bg-black/30 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-amber-300">90%</div>
                <div className="text-sm text-gray-400">Higher Organic Traffic</div>
              </div>
              <div className="bg-black/30 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-amber-300">70%</div>
                <div className="text-sm text-gray-400">Lower Acquisition Cost</div>
              </div>
              <div className="bg-black/30 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-amber-300">45%</div>
                <div className="text-sm text-gray-400">Conversion Increase</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SeoExpertise;

"use client"

import React, { useState, useEffect } from 'react';

function WebServices() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    services: false,
    process: false,
    tech: false,
    results: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'process', 'tech', 'results'];

      sections.forEach(section => {
        const element = document.getElementById(`web-${section}-section`);
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
      title: "Custom Website Development",
      description: "Bespoke, hand-crafted websites built to your exact specifications — blazing-fast, pixel-perfect, and built to convert visitors into customers.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
        </svg>
      ),
      features: ["Next.js / React", "Responsive Design", "Performance Optimised", "SEO-Ready Structure"]
    },
    {
      title: "E-Commerce Development",
      description: "Full-featured online stores with seamless checkout, inventory management, and integrations that drive sales around the clock.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
      ),
      features: ["Shopify / WooCommerce", "Payment Gateways", "Order Management", "Product Catalogues"]
    },
    {
      title: "Landing Page Design",
      description: "High-converting, CRO-focused landing pages built specifically for ad campaigns, product launches, and lead generation funnels.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
        </svg>
      ),
      features: ["CRO Optimised", "A/B Test Ready", "Fast Load Times", "Lead Capture Forms"]
    },
    {
      title: "UI/UX Design",
      description: "Intuitive, research-backed interfaces that delight users and guide them effortlessly through your product with beautiful design systems.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
      ),
      features: ["Wireframing", "Prototyping", "Design Systems", "User Testing"]
    },
    {
      title: "Web App Development",
      description: "Complex SaaS platforms, dashboards, and internal tools built with modern full-stack technologies that scale as your business grows.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
      features: ["SaaS Platforms", "Admin Dashboards", "API Integration", "Real-time Features"]
    },
    {
      title: "Website Maintenance & SEO",
      description: "Keep your site fast, secure, and ranking. Ongoing technical SEO, speed optimisation, security patches, and content updates handled for you.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
      ),
      features: ["Technical SEO", "Speed Optimisation", "Security Updates", "Monthly Reports"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We deep-dive into your business goals, audience, and competitors to define a clear website strategy, sitemap, and conversion architecture before a single line of code is written."
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our designers craft stunning wireframes and high-fidelity prototypes in Figma, ensuring every interaction is intuitive and every pixel serves a purpose — approved by you before development starts."
    },
    {
      step: "03",
      title: "Development & Integration",
      description: "We build with Next.js, React, and your chosen CMS or backend, integrating third-party APIs, payment systems, and analytics tools with clean, maintainable code."
    },
    {
      step: "04",
      title: "Launch & Optimise",
      description: "After rigorous QA across devices and browsers, we deploy your site, configure SEO fundamentals, set up monitoring, and provide a smooth handover with full documentation."
    }
  ];

  const technologies = [
    { name: "Next.js", icon: "▲", category: "Framework" },
    { name: "React", icon: "⚛️", category: "Library" },
    { name: "TypeScript", icon: "📘", category: "Language" },
    { name: "Tailwind CSS", icon: "🎨", category: "Styling" },
    { name: "Node.js", icon: "🟢", category: "Backend" },
    { name: "Supabase", icon: "⚡", category: "Database" },
    { name: "PostgreSQL", icon: "🐘", category: "Database" },
    { name: "Shopify", icon: "🛒", category: "E-Commerce" },
    { name: "WordPress", icon: "📝", category: "CMS" },
    { name: "Figma", icon: "🎯", category: "Design" },
    { name: "Vercel", icon: "☁️", category: "Hosting" },
    { name: "AWS", icon: "🌐", category: "Cloud" },
  ];

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white">

      {/* Hero Section */}
      <section id="web-hero-section" className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-cyan-500/10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className={`transition-all duration-1000 ${isVisible.hero ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-6">
              <span className="bg-teal-400/20 text-teal-300 px-4 py-2 rounded-full text-sm font-semibold">
                Web Development Services
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Websites That Work <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
                As Hard As You Do
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mb-8 rounded-full"></div>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mb-12">
              From stunning landing pages to full-scale web apps, we build fast, beautiful, and conversion-focused websites using Next.js, React, and modern tech stacks that scale with your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-teal-500/30">
                Start Your Project
              </button>
              <button className="border-2 border-teal-400 text-teal-400 px-8 py-4 rounded-lg font-semibold hover:bg-teal-400/10 transition-all duration-300">
                View Our Work
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </section>

      {/* Services Grid */}
      <section id="web-services-section" className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.services ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold mb-4">Our Web Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              End-to-end web development solutions — from design to deployment and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-teal-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10 group ${
                  isVisible.services ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400/20 to-cyan-500/20 rounded-lg flex items-center justify-center mb-6 text-teal-400 group-hover:from-teal-400 group-hover:to-cyan-500 group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-400">
                      <svg className="w-4 h-4 mr-2 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
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

      {/* Development Process */}
      <section id="web-process-section" className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.process ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold mb-4">Our Development Process</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              A proven, structured approach that delivers quality websites on time and within budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {process.map((item, index) => (
              <div
                key={item.step}
                className={`relative bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-teal-400/50 transition-all duration-500 ${
                  isVisible.process ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                  {item.step}
                </div>
                <div className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section id="web-tech-section" className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.tech ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold mb-4">Technologies We Use</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Modern, battle-tested tech stacks chosen for performance, scalability, and developer experience
            </p>
          </div>

          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-1000 ${isVisible.tech ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-teal-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20 group"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
                <h4 className="font-bold text-lg mb-1">{tech.name}</h4>
                <p className="text-sm text-gray-400">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Stats */}
      <section id="web-results-section" className="py-20 px-6 bg-gradient-to-r from-teal-500/10 to-cyan-500/10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.results ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold mb-4">Results That Speak</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Real numbers from websites we've built and scaled for clients across industries
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 transition-all duration-1000 ${isVisible.results ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 mb-2">200+</div>
              <p className="text-gray-300 text-lg">Websites Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 mb-2">&lt;2s</div>
              <p className="text-gray-300 text-lg">Average Load Time</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 mb-2">3.2×</div>
              <p className="text-gray-300 text-lg">Avg. Conversion Lift</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 mb-2">98%</div>
              <p className="text-gray-300 text-lg">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Something Great?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Let's turn your vision into a high-performing website that drives real business results. Get a free consultation today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-10 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-teal-500/30">
              Get a Free Quote
            </button>
            <button className="border-2 border-teal-400 text-teal-400 px-10 py-4 rounded-lg font-semibold hover:bg-teal-400/10 transition-all duration-300">
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default WebServices;

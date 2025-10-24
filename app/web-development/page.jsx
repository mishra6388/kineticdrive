"use client"

import React, { useState, useEffect } from 'react';

function WebDevelopment() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    services: false,
    process: false,
    tech: false,
    projects: false
  });
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'process', 'tech', 'projects'];
      
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
      title: "Custom Web Applications",
      description: "Tailored web solutions built from scratch to meet your unique business requirements with scalable architecture.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
        </svg>
      ),
      features: ["Custom CMS", "Database Design", "API Integration", "Cloud Deployment"]
    },
    {
      title: "E-Commerce Solutions",
      description: "Full-featured online stores with secure payment integration, inventory management, and seamless user experiences.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
      ),
      features: ["Payment Gateway", "Order Management", "Product Catalog", "Analytics Dashboard"]
    },
    {
      title: "Progressive Web Apps",
      description: "Modern PWAs that combine the best of web and mobile apps with offline functionality and app-like experiences.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
          <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
        </svg>
      ),
      features: ["Offline Support", "Push Notifications", "Fast Loading", "App Install Prompt"]
    },
    {
      title: "API Development",
      description: "Robust RESTful and GraphQL APIs designed for performance, security, and seamless third-party integrations.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      ),
      features: ["RESTful APIs", "GraphQL", "OAuth Integration", "API Documentation"]
    },
    {
      title: "Website Redesign",
      description: "Transform your existing website with modern design, improved UX, and enhanced performance for better results.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
        </svg>
      ),
      features: ["UI/UX Redesign", "Performance Optimization", "Mobile Responsive", "SEO Enhancement"]
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing support, updates, security patches, and performance monitoring to keep your web presence running smoothly.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
      features: ["24/7 Monitoring", "Security Updates", "Bug Fixes", "Performance Tuning"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We dive deep into understanding your business goals, target audience, and technical requirements to create a comprehensive project roadmap."
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our designers create intuitive wireframes and interactive prototypes, ensuring the user experience is perfect before development begins."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Using agile methodologies, we build your solution with clean code, conduct rigorous testing, and ensure cross-browser compatibility."
    },
    {
      step: "04",
      title: "Launch & Optimization",
      description: "We deploy your application with zero downtime, monitor performance, and continuously optimize based on real-world usage data."
    }
  ];

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Framework" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "Firebase", category: "Backend" },
    { name: "Vercel", category: "Deployment" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "TypeScript", category: "Language" },
    { name: "JavaScript", category: "Language" },
    { name: "GraphQL", category: "API" },
    { name: "Tailwind", category: "Styling" },
    { name: "Redis", category: "Cache" }
  ];

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Hero Section */}
      <section id="web-hero-section" className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-amber-300/5"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className={`transition-all duration-1000 ${isVisible.hero ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-6">
              <span className="bg-amber-400/20 text-amber-300 px-4 py-2 rounded-full text-sm font-semibold">
                Web Development Services
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Build Powerful Web <br />
              <span className="text-amber-400">Experiences</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-300 to-amber-500 mb-8 rounded-full"></div>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mb-12">
              From concept to deployment, we craft scalable, high-performance web applications that drive business growth and deliver exceptional user experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-amber-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-amber-300 transition-all duration-300 hover:scale-105">
                Start Your Project
              </button>
              <button className="border-2 border-amber-400 text-amber-400 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400/10 transition-all duration-300">
                View Portfolio
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
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-300 to-amber-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Comprehensive web development solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-amber-300/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-400/10 group ${
                  isVisible.services ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-amber-400/20 rounded-lg flex items-center justify-center mb-6 text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-400">
                      <svg className="w-4 h-4 mr-2 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
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
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-300 to-amber-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              A proven methodology that ensures quality, transparency, and timely delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {process.map((item, index) => (
              <div
                key={item.step}
                className={`relative bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-amber-300/50 transition-all duration-500 ${
                  isVisible.process ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg flex items-center justify-center text-2xl font-bold text-black shadow-lg">
                  {item.step}
                </div>
                <div className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-amber-400">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      {/* <section className="py-20 px-6 bg-gradient-to-r from-amber-500/10 to-amber-300/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Let's discuss your project and turn your vision into reality with our expert web development services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-amber-400 text-black px-10 py-4 rounded-lg font-semibold hover:bg-amber-300 transition-all duration-300 hover:scale-105">
              Get Free Consultation
            </button>
            <button className="border-2 border-amber-400 text-amber-400 px-10 py-4 rounded-lg font-semibold hover:bg-amber-400/10 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default WebDevelopment;
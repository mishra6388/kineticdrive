"use client"

import React, { useState, useEffect } from 'react';

function MobileAppDevelopment() {
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
        const element = document.getElementById(`app-${section}-section`);
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
      title: "Native iOS & Android Apps",
      description: "Build high-performance native applications using React Native and Flutter for seamless cross-platform experiences.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      features: ["iOS Development", "Android Development", "Cross-Platform", "Native Performance"]
    },
    {
      title: "Custom Mobile UI/UX",
      description: "Stunning, intuitive mobile interfaces designed with user experience at the forefront, ensuring engagement and satisfaction.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
      ),
      features: ["User Research", "Wireframing", "Prototype Testing", "Pixel Perfect Design"]
    },
    {
      title: "E-Commerce Mobile Apps",
      description: "Feature-rich shopping apps with secure payments, push notifications, and seamless checkout experiences.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
      ),
      features: ["Shopping Cart", "Payment Gateway", "Order Tracking", "Product Catalog"]
    },
    {
      title: "Social & Community Apps",
      description: "Engaging social platforms with real-time messaging, feeds, profiles, and community features.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      ),
      features: ["Real-time Chat", "User Profiles", "News Feed", "Social Sharing"]
    },
    {
      title: "Enterprise Mobile Solutions",
      description: "Secure, scalable enterprise apps for workforce management, CRM, and business process automation.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
        </svg>
      ),
      features: ["Employee Management", "CRM Integration", "Data Security", "Offline Mode"]
    },
    {
      title: "App Maintenance & Updates",
      description: "Continuous support, bug fixes, OS updates, and feature enhancements to keep your app running smoothly.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
      features: ["OS Compatibility", "Bug Fixes", "Feature Updates", "Performance Optimization"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Strategy & Wireframing",
      description: "We analyze your business needs, define user personas, and create detailed wireframes to map out the app's functionality and user flow."
    },
    {
      step: "02",
      title: "UI/UX Design",
      description: "Our designers craft beautiful, intuitive interfaces following platform guidelines, creating pixel-perfect mockups and interactive prototypes."
    },
    {
      step: "03",
      title: "Development & Integration",
      description: "Using React Native, Flutter, or AppSheet, we build your app with clean code, integrate APIs, and implement all features with rigorous testing."
    },
    {
      step: "04",
      title: "Testing & Deployment",
      description: "Comprehensive QA testing across devices, App Store and Play Store submission, and ongoing monitoring to ensure smooth performance."
    }
  ];

  const technologies = [
    { name: "React Native", icon: "⚛️", category: "Framework" },
    { name: "Flutter", icon: "🎯", category: "Framework" },
    { name: "FlutterFlow", icon: "🌊", category: "Low-Code" },
    { name: "AppSheet", icon: "📱", category: "No-Code" },
    { name: "Firebase", icon: "🔥", category: "Backend" },
    { name: "Redux", icon: "🔄", category: "State Mgmt" },
    { name: "GraphQL", icon: "📊", category: "API" },
    { name: "TypeScript", icon: "📘", category: "Language" },
    { name: "Dart", icon: "🎲", category: "Language" },
    { name: "AWS", icon: "☁️", category: "Cloud" },
    { name: "Google Cloud", icon: "🌐", category: "Cloud" },
    { name: "MongoDB", icon: "🍃", category: "Database" },
    { name: "PostgreSQL", icon: "🐘", category: "Database" },
    { name: "Supabase", icon: "⚡", category: "Backend" }
  ];

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Hero Section */}
      <section id="app-hero-section" className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-amber-300/5"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className={`transition-all duration-1000 ${isVisible.hero ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-6">
              <span className="bg-amber-400/20 text-amber-300 px-4 py-2 rounded-full text-sm font-semibold">
                Mobile App Development
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Transform Ideas Into <br />
              <span className="text-amber-400">Mobile Apps</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-300 to-amber-500 mb-8 rounded-full"></div>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mb-12">
              Create stunning iOS and Android applications with React Native, Flutter, FlutterFlow, and AppSheet. From concept to app store, we deliver mobile experiences that users love.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-amber-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-amber-300 transition-all duration-300 hover:scale-105">
                Start Your App
              </button>
              <button className="border-2 border-amber-400 text-amber-400 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400/10 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </section>

      {/* Services Grid */}
      <section id="app-services-section" className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.services ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold mb-4">Our Mobile Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-300 to-amber-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              End-to-end mobile app development solutions for iOS, Android, and cross-platform
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
      <section id="app-process-section" className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.process ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold mb-4">Development Process</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-300 to-amber-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              A streamlined approach to bring your mobile app from idea to reality
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

      {/* Technology Stack */}
      <section id="app-tech-section" className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.tech ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold mb-4">Technology Stack</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-300 to-amber-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Cutting-edge technologies for powerful mobile applications
            </p>
          </div>

          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-1000 ${isVisible.tech ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-amber-300/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-400/20 group"
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

      {/* Platforms Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Platforms We Specialize In</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-300 to-amber-500 mx-auto mb-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-amber-300/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-400/10">
              <div className="text-5xl mb-4">⚛️</div>
              <h3 className="text-2xl font-bold mb-4">React Native</h3>
              <p className="text-gray-300 mb-4">Build cross-platform apps with JavaScript and React. Share code between iOS and Android while maintaining native performance.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>90% code reusability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Hot reload for faster development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Large community support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Native modules integration</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-amber-300/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-400/10">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">Flutter</h3>
              <p className="text-gray-300 mb-4">Google's UI toolkit for crafting beautiful, natively compiled applications with expressive and flexible design.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Beautiful material design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Fast performance with Dart</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Custom widgets library</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Single codebase for all platforms</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-amber-300/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-400/10">
              <div className="text-5xl mb-4">🌊</div>
              <h3 className="text-2xl font-bold mb-4">FlutterFlow</h3>
              <p className="text-gray-300 mb-4">Low-code platform built on Flutter. Design and build apps visually with drag-and-drop interface and custom code integration.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Visual app builder</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Flutter code export</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Custom code support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Faster development time</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-amber-300/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-400/10">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-2xl font-bold mb-4">AppSheet</h3>
              <p className="text-gray-300 mb-4">No-code platform for rapid mobile app development. Perfect for business apps and internal tools without coding.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>No coding required</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Quick deployment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Spreadsheet integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Ideal for business apps</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-amber-500/10 to-amber-300/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Launch Your Mobile App?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Let's transform your vision into a powerful mobile application that users will love. Get started today!
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
      </section>
    </div>
  );
}

export default MobileAppDevelopment;
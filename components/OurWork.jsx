'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ExternalLink, Globe, Tag } from 'lucide-react';

const projects = [
  {
    id: 1,
    businessName: "Chardham Yatraa",
    category: "Travel & Tourism",
    url: "https://chardhamyatraa.com",
    image: "/website/chardham.jpeg",
    description: "Complete pilgrimage tour booking platform for Chardham Yatra"
  },
  {
    id: 2,
    businessName: "KCAB Car Rental",
    category: "Car Rental Service",
    url: "https://kcabcarrental.com",
    image: "/website/kcab.jpeg",
    description: "Premium car rental services with door-to-door delivery"
  },
  {
    id: 3,
    businessName: "Sai Home Decor",
    category: "Home Decoration Products",
    url: "https://saihomedecor.in",
    image: "/website/saihome.jpeg",
    description: "Premium home decoration products and interior design solutions"
  },
  {
    id: 4,
    businessName: "Shiny Vagon",
    category: "Car Wash Service",
    url: "https://shinyvagon.in",
    image: "/website/shinywagon.jpeg",
    description: "Professional car wash and detailing services at your doorstep"
  },
  {
    id: 5,
    businessName: "Sharanji",
    category: "CA & Financial Services",
    url: "https://sharanji.com",
    image: "/website/sharanji.jpeg",
    description: "Chartered Accountant services for taxation and financial consultation"
  },
  {
    id: 6,
    businessName: "Cab Booking App",
    category: "Mobile Application",
    url: "https://play.google.com/store/apps/datasafety?id=com.mycompany.kcab&amp%3Bhl=en_US",
    image: "/website/app.jpeg",
    description: "On-demand cab booking mobile application for Android platform"
  },
  {
    id: 7,
    businessName: "Raghav Automobiles",
    category: "Second Hand Car Dealer",
    url: "https://raghavautomobiles.com/",
    image: "/website/raghav.jpeg",
    description: "Trusted second-hand car dealer with quality pre-owned vehicles"
  },
  {
    id: 8,
    businessName: "Real Estate Portal",
    category: "Real Estate",
    url: "https://sangamvasudhaa.in",
    image: "/website/realstate.jpeg",
    description: "Comprehensive real estate platform for buying and selling properties"
  }
];

export default function OurWork() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('our-work-section');
      if (!element) return;

      const position = element.getBoundingClientRect();
      if (position.top < window.innerHeight - 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCardClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="our-work-section" className="py-24 px-6 bg-gray-900 mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Our Work</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-300 to-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our portfolio of successful projects across various industries and technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-gray-800 border border-gray-700 rounded-lg overflow-hidden cursor-pointer transition-all duration-500 hover:border-amber-300/30 hover:shadow-lg hover:shadow-amber-300/10 transform hover:-translate-y-1 ${
                isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => handleCardClick(project.url)}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Section */}
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.businessName}
                  width={400}
                  height={192}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  unoptimized
                />

                {/* External Link Icon */}
                <div
                  className={`absolute top-4 right-4 bg-amber-400 text-black p-2 rounded-full transition-all duration-300 ${
                    hoveredCard === project.id ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                >
                  <ExternalLink size={16} />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-amber-300 transition-colors duration-300">
                  {project.businessName}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Tag size={14} className="mr-2 text-amber-400" />
                    <span>{project.category}</span>
                  </div>

                  <div className="flex items-center text-gray-400 text-sm">
                    <Globe size={14} className="mr-2 text-amber-400" />
                    <span className="truncate">{project.url}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-amber-400 font-medium text-sm group-hover:text-amber-300 transition-colors duration-300">
                    View Project
                  </span>
                  <div className="transform group-hover:translate-x-1 transition-transform duration-300">
                    <ExternalLink size={16} className="text-amber-400" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <p className="text-gray-300 mb-6">
            Ready to bring your vision to life? Let's create something amazing together.
          </p>
          <button className="bg-gradient-to-r from-amber-300 to-amber-500 text-black px-8 py-3 rounded-lg font-semibold hover:from-amber-400 hover:to-amber-600 transition-all duration-300 transform hover:scale-105">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}

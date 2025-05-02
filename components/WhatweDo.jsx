"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Code, Globe, Search } from 'lucide-react';

function Services() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('services-section');
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
  
  const services = [
    {
      icon: <Code size={48} />,
      title: "App Development",
      description: "We build intuitive and powerful mobile applications for iOS and Android platforms that drive engagement and deliver exceptional user experiences.",
      features: ["Native & Cross-Platform", "Responsive UIs", "API Integration", "Offline Functionality"]
    },
    {
      icon: <Globe size={48} />,
      title: "Web Development",
      description: "Our expert team creates scalable, high-performance websites and web applications tailored to your business needs and optimized for growth.",
      features: ["Full-Stack Development", "E-commerce Solutions", "Custom CMS", "Progressive Web Apps"]
    },
    {
      icon: <Search size={48} />,
      title: "SEO Services",
      description: "Boost your online visibility with our comprehensive SEO strategies that improve rankings, increase organic traffic, and maximize conversion rates.",
      features: ["Keyword Optimization", "Content Strategy", "Technical SEO", "Analytics & Reporting"]
    }
  ];
  
  return (
    <section id="services-section" className="py-12 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-white mb-4">What We Do</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-300 to-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We deliver cutting-edge digital solutions to help businesses thrive in the modern digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title}
              service={service}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Service Card component with 3D hover effect
function ServiceCard({ service, index, isVisible }) {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to card center
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Calculate rotation (limited to +/- 10 degrees)
    const rotateX = mouseY * -0.05;
    const rotateY = mouseX * 0.05;
    
    setRotation({
      x: Math.max(-10, Math.min(10, rotateX)),
      y: Math.max(-10, Math.min(10, rotateY))
    });
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };
  
  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`bg-gray-800 border border-gray-700 rounded-lg overflow-hidden transition-all duration-1000 
        ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}
        ${isHovered ? 'shadow-xl shadow-amber-300/20 border-amber-300/70 z-10' : 'hover:border-amber-300/50 hover:shadow-lg hover:shadow-amber-300/10'}`}
      style={{ 
        transitionDelay: `${index * 200}ms`,
        transform: isHovered ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.05)` : 'perspective(1000px) rotateX(0) rotateY(0) scale(1)',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="p-8 relative">
        {/* Glowing background effect when hovered */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent rounded-lg transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        ></div>
        
        {/* Icon with float animation on hover */}
        <div 
          className={`text-amber-400 mb-5 flex justify-center transition-all duration-500 ${isHovered ? 'transform -translate-y-2' : ''}`}
        >
          {service.icon}
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-3 relative z-10">{service.title}</h3>
        <p className="text-gray-400 mb-6 relative z-10">{service.description}</p>
        
        <ul className="space-y-2 relative z-10">
          {service.features.map((feature, i) => (
            <li 
              key={i} 
              className={`flex items-center text-gray-300 transition-all duration-300 ${isHovered ? 'translate-x-1' : ''}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span className={`mr-2 text-amber-400 transition-all duration-300 ${isHovered ? 'scale-125' : ''}`}>•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Services;
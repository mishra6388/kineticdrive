"use client";
import React, { useState, useEffect } from "react";
import { Shield, Clock, Users, Zap, Code, Award } from "lucide-react";
// import { MacbookScroll } from "./macbook";

const features = [
  {
    icon: <Shield size={28} />,
    title: "Proven Track Record",
    description:
      "With over 50+ successful projects delivered, our team has demonstrated excellence across various industries and technologies.",
  },
  {
    icon: <Clock size={28} />,
    title: "Rapid Development",
    description:
      "Our streamlined process and agile methodology ensure timely delivery without compromising on quality or performance.",
  },
  {
    icon: <Users size={28} />,
    title: "Dedicated Support",
    description:
      "We provide ongoing maintenance and 24/7 support to ensure your digital solutions continue to perform flawlessly.",
  },
  {
    icon: <Zap size={28} />,
    title: "Performance Optimized",
    description:
      "Every solution we build is optimized for speed, reliability, and exceptional user experience across all devices.",
  },
  {
    icon: <Code size={28} />,
    title: "Clean, Modern Code",
    description:
      "We follow industry best practices and write maintainable, scalable code that grows with your business needs.",
  },
  {
    icon: <Award size={28} />,
    title: "Quality Assurance",
    description:
      "Rigorous testing protocols ensure your applications are bug-free and ready for real-world deployment.",
  },
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Ensure code only runs on client
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      const element = document.getElementById("features-section");
      if (!element) return;

      const position = element.getBoundingClientRect();
      if (position.top < window.innerHeight - 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger once on load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isClient]);

  if (!isClient) return null; // Prevent hydration mismatch

  return (
    <section id="features-section" className="py-24 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* <MacbookScroll/> */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-300 to-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We combine technical expertise with creative innovation to deliver solutions that exceed expectations.
          </p>
        </div>
        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Animated Feature Showcase */}
          <div
            className={`relative h-96 border border-gray-800 rounded-lg overflow-hidden bg-black transition-all duration-1000 ${
              isVisible ? "opacity-100 transform-none" : "opacity-0 -translate-x-10"
            }`}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex flex-col justify-center items-center text-center p-10 transition-all duration-500 ${
                  activeFeature === index
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-5 pointer-events-none"
                }`}
              >
                <div className="bg-gradient-to-br from-amber-300 to-amber-600 p-4 rounded-full text-black mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}

            {/* Feature Indicators */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeFeature === index ? "bg-amber-400 w-6" : "bg-gray-600"
                  }`}
                  onClick={() => setActiveFeature(index)}
                  aria-label={`View feature ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Static Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-gray-800 border border-gray-700 p-6 rounded-lg transition-all duration-1000 hover:border-amber-300/30 ${
                  isVisible ? "opacity-100 transform-none" : "opacity-0 translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="flex items-start">
                  <div className="text-amber-400 mr-4 mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

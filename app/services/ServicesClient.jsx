"use client";

import OurWork from "@/components/OurWork";
import React, { useEffect, useState } from "react";

const services = [
  {
    title: "Web Development",
    description: "Fast, scalable, and SEO-friendly websites using modern tech.",
    icon: "🌐",
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform mobile apps with a great user experience.",
    icon: "📱",
  },
  {
    title: "UI/UX Design",
    description: "Clean, modern, and intuitive designs users love.",
    icon: "🎨",
  },
  {
    title: "SEO & Digital Marketing",
    description: "Improve visibility and drive traffic with expert SEO & ads.",
    icon: "🚀",
  },
  {
    title: "Custom Software",
    description: "Tailor-made software to automate your business operations.",
    icon: "🛠️",
  },
  {
    title: "Technology Consulting",
    description: "Tech advice & strategies that align with your business goals.",
    icon: "💡",
  },
];

export default function ServicesClient() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("services-grid");
      if (!element) return;
      const position = element.getBoundingClientRect();
      if (position.top < window.innerHeight - 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our <span className="text-amber-400">Services</span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-14">
          We offer reliable and scalable digital solutions designed to empower your business in a digital-first world.
        </p>
      </div>

      <div
        id="services-grid"
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 border border-gray-700 hover:border-amber-400 rounded-2xl p-6 text-center shadow-lg hover:shadow-amber-400/20 transition"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
      <><OurWork/></>
      

      {/* Why Choose Us Section */}
      <section className="mt-28 max-w-6xl mx-auto px-2 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Why <span className="text-amber-400">Choose Us?</span>
        </h2>
        <div className="w-20 h-1 bg-amber-400 mx-auto mb-10 rounded-full"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
          <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl hover:border-amber-400 transition">
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p>Professionals with hands-on experience in design, development, and strategy.</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl hover:border-amber-400 transition">
            <h3 className="text-xl font-semibold mb-2">Client First</h3>
            <p>We tailor each solution to meet the exact business goals of our clients.</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl hover:border-amber-400 transition">
            <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
            <p>Premium services at pricing that works for startups & enterprises alike.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

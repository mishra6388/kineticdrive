"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText =
    "We specialize in building reliable, scalable, and user-friendly web and mobile applications tailored to your unique needs. Whether you're a startup or an enterprise, our expert team turns your ideas into impactful digital products that drive real results.";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const typing = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, 30);
      return () => clearTimeout(typing);
    }
  }, [typedText]);

  return (
    <div className="relative flex flex-col justify-center items-center h-screen bg-black text-white text-center px-6 overflow-hidden">
     

      {/* Decorative background shape */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      {/* Intro Line */}
      <p
        className={`text-l uppercase tracking-widest mb-1 transition-opacity duration-1000 text-amber-400 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        Welcome to KINETICDRIVE PVT.LTD.
      </p>

      {/* Main Heading */}
      <h1
        className={`text-4xl font-bold mb-20 sm:text-5xl md:text-6xl transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        Building Scalable Web & Mobile Apps
        <span className="block mt-2 text-blue-400">for the Modern World</span>
      </h1>

      {/* Paragraph Box */}
      <div
        className={`max-w-xl bg-gray-900 p-6 rounded-lg shadow-lg transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
        style={{ transitionDelay: "300ms" }}
      >
        <p className="text-lg">
          {typedText}
          <span className="inline-block w-1 h-5 bg-blue-400 ml-1 animate-pulse"></span>
        </p>
      </div>

      {/* Call to Action */}
      <button
        className={`mt-10 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-lg transition-transform duration-300 ${
          isVisible ? "scale-100" : "scale-90 opacity-0"
        }`}
      >
        Get in Touch
      </button>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 animate-bounce text-blue-400 text-sm">
        ↓ Scroll down to explore more
      </div>
    </div>
  );
}

export default Hero;

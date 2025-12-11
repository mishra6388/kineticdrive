'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function KineticDriveHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-500/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-yellow-400/15 to-amber-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
               linear-gradient(rgba(255, 193, 7, 1) 1px, transparent 1px),
               linear-gradient(90deg, rgba(255, 193, 7, 1) 1px, transparent 1px)
             `,
          backgroundSize: '40px 40px'
        }}>
      </div>

      {/* Main Hero Content */}
      <main className="relative z-10 px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-5xl mx-auto">

            {/* Badge */}
            <div className={`inline-flex items-center bg-gradient-to-r from-yellow-400/10 to-amber-500/10 border border-yellow-400/20 rounded-full px-3 sm:px-4 py-2 mb-6 sm:mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-yellow-400 text-xs sm:text-sm font-medium">Powering Innovation</span>
            </div>

            {/* Main Headline */}
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <span className="block">Build the future with</span>
              <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
                KineticDrive
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-gray-400 mt-2">
                Tech Solutions
              </span>
            </h1>

            {/* Subheadline */}
            <p className={`text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              Empowering businesses worldwide with cutting-edge technology solutions that drive innovation, accelerate growth, and transform digital experiences.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 sm:mb-20 px-4 sm:px-0 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <button className="group w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Stats Section */}
      <div className="relative z-10 mt-16 sm:mt-24 px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 text-center border-t border-gray-800 pt-12 sm:pt-16 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="group">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-gray-400 text-sm sm:text-base">Enterprise Clients</div>
            </div>
            <div className="group">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                99.9%
              </div>
              <div className="text-gray-400 text-sm sm:text-base">Uptime Guarantee</div>
            </div>
            <div className="group">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-gray-400 text-sm sm:text-base">Global Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full mx-auto relative">
          <div className="w-1 h-3 bg-yellow-400 rounded-full mx-auto mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}
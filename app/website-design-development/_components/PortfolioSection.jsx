'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const portfolioItems = [
  { src: 'apoorva-agha-portfolio.png', alt: 'Portfolio Website', rotate: '-rotate-2', yOffset: 'translate-y-4' },
  { src: 'astroogler.png', alt: 'Astrology Website', rotate: 'rotate-3', yOffset: '-translate-y-6' },
  { src: 'easy-go-cabs.png', alt: 'Cab Booking Website', rotate: '-rotate-1', yOffset: 'translate-y-8' },
  { src: 'samarth-hospital-website.png', alt: 'Hospital Website', rotate: 'rotate-2', yOffset: '-translate-y-2' },
  { src: 'ngo-website.png', alt: 'NGO Website', rotate: '-rotate-3', yOffset: 'translate-y-6' },
  { src: 'iert-college-website.png', alt: 'College Website', rotate: 'rotate-1', yOffset: '-translate-y-8' },
  { src: 'infocare-camera-cctv.png', alt: 'CCTV Website', rotate: '-rotate-2', yOffset: 'translate-y-2' },
  { src: 'dream-to-ceo-landingpage.png', alt: 'Course Landing Page', rotate: 'rotate-3', yOffset: '-translate-y-4' },
  { src: 'easy-home-stay-website.png', alt: 'Home Stay Website', rotate: '-rotate-1', yOffset: 'translate-y-5' }
];

const PortfolioCard = ({ item, idx }) => {
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e) => {
    const { top, height } = e.currentTarget.getBoundingClientRect();
    // Calculate progress from 0 to 1 based on mouse Y position within the card
    let yProgress = (e.clientY - top) / height;
    yProgress = Math.max(0, Math.min(1, yProgress)); // Clamp between 0 and 1
    setMouseY(yProgress);
  };

  const handleMouseLeave = () => {
    setMouseY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: idx * 0.1, duration: 0.6 }}
      className={`relative group h-80 rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 bg-white ${item.rotate} ${item.yOffset} hover:z-10`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 w-full h-full p-2">
        <div className="w-full h-full rounded-2xl overflow-hidden relative border border-gray-100 bg-gray-100">
         <motion.img 
  src={`/portfolio/${item.src}`}
  alt={item.alt}
  animate={{ objectPosition: `50% ${mouseY * 100}%` }}
  transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
  className="absolute inset-0 w-full h-full object-cover"
/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 pointer-events-none">
            <span className="text-white font-bold text-lg">{item.alt}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function PortfolioSection() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden" id="portfolio">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Recent Projects</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Real websites developed by KineticDrive. Move your cursor over any project to scroll through the full page.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative">
        {/* Floating Collage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {portfolioItems.map((item, idx) => (
            <PortfolioCard key={idx} item={item} idx={idx} />
          ))}
        </div>

        <div className="mt-24 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-900 font-bold px-8 py-4 rounded-xl shadow-sm transition-all hover:shadow-md">
            Explore More Projects
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

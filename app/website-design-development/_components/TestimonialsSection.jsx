'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Rajat Sharma",
    company: "Easy Go Cabs",
    rating: 5,
    text: "KineticDrive transformed our online cab booking business. The website is blazing fast and the UI is incredibly intuitive. Our conversion rate doubled within a month of launch!"
  },
  {
    name: "Dr. Ananya Singh",
    company: "Samarth Hospital",
    rating: 5,
    text: "Very professional team. They built a highly secure and patient-friendly hospital portal for us. The WhatsApp integration they provided made appointment bookings seamless."
  },
  {
    name: "Vikram Gupta",
    company: "Infocare CCTV",
    rating: 5,
    text: "The ecommerce platform they built for our security systems is robust and scalable. The admin dashboard is super easy to use. Highly recommend their services!"
  }
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-[#050508] overflow-hidden relative" id="testimonials">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] opacity-60 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-amber-500 uppercase tracking-widest">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">What Our Clients Say</h2>
          <div className="w-24 h-1.5 bg-amber-500 mx-auto mt-6 rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="flex justify-center mb-8 text-white/10">
            <Quote className="w-16 h-16" />
          </div>

          <div className="h-[250px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex flex-col items-center text-center"
              >
                <div className="flex items-center justify-center gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed mb-8">
                  "{testimonials[current].text}"
                </p>
                
                <div>
                  <h4 className="text-lg font-bold text-white">{testimonials[current].name}</h4>
                  <p className="text-sm text-gray-400">{testimonials[current].company}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prevSlide} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${current === idx ? 'bg-amber-500 w-8' : 'bg-white/20'}`}
                />
              ))}
            </div>
            <button onClick={nextSlide} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

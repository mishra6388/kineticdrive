'use client';
import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FinalCtaSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#050508]">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="absolute top-0 left-0 w-1/2 h-full bg-amber-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-orange-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Ready to Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Website?</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let's discuss your project today and get a custom quote. Our team is ready to turn your vision into reality.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:7388100850"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-bold px-8 py-4 rounded-xl transition-all shadow-xl shadow-amber-500/20 hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a 
              href="https://wa.me/7388100850?text=Hi,%20I%20am%20interested%20in%20your%20website%20development%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd58] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-xl shadow-[#25D366]/20 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

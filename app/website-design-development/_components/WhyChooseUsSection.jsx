'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Search, Globe, Smartphone, Code2, Rocket, HeartHandshake, IndianRupee } from 'lucide-react';

const reasons = [
  { icon: <Zap />, title: "Lightning Fast", desc: "Optimized for speed to ensure zero bounce rates." },
  { icon: <Search />, title: "SEO Optimized", desc: "Built with best practices to rank higher on Google." },
  { icon: <Globe />, title: "Google Friendly", desc: "Follows all Google Webmaster Guidelines perfectly." },
  { icon: <Smartphone />, title: "Mobile First", desc: "Flawless experience across all mobile devices." },
  { icon: <Code2 />, title: "Clean Code", desc: "Maintainable, secure, and modern codebase." },
  { icon: <Rocket />, title: "Fast Delivery", desc: "Strict adherence to project timelines and deadlines." },
  { icon: <HeartHandshake />, title: "Lifetime Support", desc: "We stand by our code forever. Zero maintenance headaches." },
  { icon: <IndianRupee />, title: "Affordable Pricing", desc: "Premium quality at highly competitive Indian rates." }
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden" id="why-choose-us">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100 rounded-full blur-[120px] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">Why KineticDrive</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2">The Premium Choice</h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white/60 backdrop-blur-lg border border-white p-6 rounded-3xl shadow-xl shadow-gray-200/50 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-600/30">
                {React.cloneElement(reason.icon, { className: "w-6 h-6" })}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

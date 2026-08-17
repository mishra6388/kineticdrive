'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, PenTool, Code, CheckSquare, Rocket, Headset } from 'lucide-react';

const steps = [
  { num: 1, icon: <ClipboardList />, title: "Requirement", desc: "Understanding your business goals and audience." },
  { num: 2, icon: <PenTool />, title: "Design", desc: "Crafting a premium, conversion-focused UI/UX." },
  { num: 3, icon: <Code />, title: "Development", desc: "Writing clean, fast, and SEO-friendly code." },
  { num: 4, icon: <CheckSquare />, title: "Testing", desc: "Rigorous quality assurance across all devices." },
  { num: 5, icon: <Rocket />, title: "Launch", desc: "Deploying your website to high-speed servers." },
  { num: 6, icon: <Headset />, title: "Support", desc: "Ongoing maintenance and lifetime technical support." }
];

export default function OurProcessSection() {
  return (
    <section className="py-24 bg-[#050508] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-sm font-bold text-amber-500 uppercase tracking-widest">How We Work</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">Our 6-Step Process</h2>
          <div className="w-24 h-1.5 bg-amber-500 mx-auto mt-6 rounded-full" />
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 rounded-full" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -right-2 w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 text-black rounded-full flex items-center justify-center font-bold text-sm shadow-lg z-20">
                  {step.num}
                </div>
                
                {/* Icon Circle */}
                <div className="w-20 h-20 bg-[#0F0F18] border-4 border-[#13131F] rounded-full flex items-center justify-center text-amber-500 mb-6 shadow-xl shadow-amber-500/5 group-hover:border-amber-500/30 group-hover:scale-110 transition-all duration-300 relative z-10">
                  {React.cloneElement(step.icon, { className: "w-8 h-8" })}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed px-4">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

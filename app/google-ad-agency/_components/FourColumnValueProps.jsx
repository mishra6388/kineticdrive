import React from 'react';
import { Target, TrendingUp, Layers, Zap } from 'lucide-react';

export default function FourColumnValueProps() {
  return (
    <section className="py-20 px-6 bg-[#050508] border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Target className="w-8 h-8" />,
              title: "Dominate Your Industry",
              desc: "Establish clear market leadership with a robust keyword strategy and high-performing ads."
            },
            {
              icon: <TrendingUp className="w-8 h-8" />,
              title: "Be One Step Ahead",
              desc: "Continuously outpace competitor movements with advanced analytical tools and intelligence."
            },
            {
              icon: <Layers className="w-8 h-8" />,
              title: "Cultivate Online Experiences",
              desc: "Engaging ad copywriting and landing page designs that turn interest into conversions."
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Success You Can Measure",
              desc: "Full transparency with detailed performance dashboards and clear KPIs."
            }
          ].map((prop, idx) => (
            <div key={idx} className="bg-[#0F0F18] border border-white/5 hover:border-amber-500/30 p-6 rounded-2xl space-y-4 transition-all duration-300 hover:y-[-4px]">
              <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-xl flex items-center justify-center">
                {prop.icon}
              </div>
              <h4 className="text-lg font-bold text-white">{prop.title}</h4>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{prop.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

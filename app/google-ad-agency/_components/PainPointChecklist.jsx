import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function PainPointChecklist({ handleWhatsAppChat }) {
  return (
    <section className="py-20 px-6 bg-[#0F0F18]/30 border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">Identify The Issues</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Struggling with Your Current Ad Performance?</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Checklist */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl font-bold mb-6 text-gray-300">Are you facing any of these bottlenecks?</h3>
            {[
              "Losing money daily on expensive, irrelevant clicks?",
              "Tired of low-quality leads that never convert into sales?",
              "Experiencing poor ROI and no clear performance reporting?",
              "Ads getting disapproved repeatedly by Google without reason?",
              "Competitors dominating the top positions and stealing your market share?",
              "No time to research negative keywords or optimize bid strategies?"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 bg-[#0F0F18] border border-white/5 rounded-xl">
                <ArrowRight className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>

          {/* Premium CTA Box */}
          <div className="lg:col-span-5">
            <div className="bg-[#0F0F18]/90 border border-amber-500/30 rounded-2xl p-8 text-white flex flex-col justify-between h-full relative overflow-hidden shadow-2xl shadow-amber-500/5 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 opacity-50 blur-xl pointer-events-none" />
              
              <div className="space-y-4 relative z-10">
                <span className="bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg inline-block">
                  Free Consultation
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold leading-tight text-white">
                  If your answer is <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 font-black">YES</span> to any of the above, let's fix it.
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Consult with our Google Ads audit specialist to isolate campaign mistakes and build a roadmap to profitability.
                </p>
              </div>
              
              <button 
                onClick={() => handleWhatsAppChat('Pain Point CTA')}
                className="mt-8 relative z-10 w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-bold py-4 rounded-xl text-sm transition-all duration-300 shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

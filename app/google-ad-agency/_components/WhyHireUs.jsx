import React from 'react';
import { Check } from 'lucide-react';

export default function WhyHireUs({ handleWhatsAppChat }) {
  return (
    <section className="py-20 px-6 bg-[#0F0F18]/20 border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">Proven Edge</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Why Hire KineticDrive for Google Ads?</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* List */}
          <div className="lg:col-span-7 space-y-4">
            {[
              "Get a steady stream of highly qualified, intent-based leads.",
              "Acquire customers actively looking for your specific services.",
              "Advanced competitor tracking & intelligence strategies.",
              "Prevent budget wastage on low-value/irrelevant terms.",
              "Expand business scope to national and international markets.",
              "Experienced, dedicated Google Ads campaign professionals.",
              "Transparent monthly KPIs and comprehensive reporting.",
              "Continuous feedback on landing page optimization metrics.",
              "Custom visual pages build to improve conversions.",
              "Confidence to scale budgets with proven ad structures."
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-gray-300 text-sm md:text-base">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Callout */}
          <div className="lg:col-span-5 bg-[#0F0F18] border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between">
            <div className="p-1">
              <img
                src="/google-ads/improve-your-Google-ads-score.webp"
                alt="Improve Google Ads Quality Score"
                className="w-full h-auto rounded-t-xl opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="p-8 text-center space-y-6">
              <h3 className="text-2xl font-bold">Ready to Start?</h3>
              <p className="text-xs text-gray-400 leading-relaxed max-w-xs mx-auto">
                Request a custom campaign outline and budget proposal designed specifically for your industry.
              </p>
              <button 
                onClick={() => handleWhatsAppChat('Why Hire Us CTA')}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-bold py-3.5 rounded-xl text-sm transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                Request a Proposal
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

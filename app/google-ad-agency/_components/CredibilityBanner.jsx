import React from 'react';

export default function CredibilityBanner({ handleWhatsAppChat }) {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-b border-white/5 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2">
          <h3 className="text-2xl md:text-3xl font-extrabold">
            Increase Traffic & Leads with Experienced Experts
          </h3>
          <p className="text-gray-400 text-sm md:text-base">
            Over 9+ years of experience managing campaigns for B2B, real estate, e-commerce, and healthcare.
          </p>
        </div>
        <button 
          onClick={() => handleWhatsAppChat('Credibility Banner CTA')}
          className="shrink-0 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-500/20 cursor-pointer"
        >
          Talk to us today
        </button>
      </div>
    </section>
  );
}

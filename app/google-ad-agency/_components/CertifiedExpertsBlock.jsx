import React from 'react';

export default function CertifiedExpertsBlock() {
  return (
    <section className="py-20 px-6 bg-[#050508] border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-last lg:order-first bg-[#0F0F18] border border-white/10 rounded-2xl overflow-hidden relative group">
            <img
              src="/google-ads/different-types-of-google-ads.png"
              alt="Different types of Google Ads"
              className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">Trust & Authority</span>
            <h2 className="text-3xl md:text-4xl font-extrabold">Google Ads Management Experts: KineticDrive</h2>
            <div className="w-20 h-1 bg-amber-500 rounded-full" />
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              As experienced Google Ads managers, KineticDrive has a proven track record of running high-performance campaigns with maximum budget efficiency. We design ad structures tailored to your specific industry to maximize conversion rates and minimize ad spend leakage.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              We stay updated with the latest Google Ads updates, advanced smart bidding strategies, and search trend analysis reports to give your business a strong competitive advantage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

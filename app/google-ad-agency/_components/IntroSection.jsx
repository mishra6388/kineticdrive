import React from 'react';

export default function IntroSection() {
  return (
    <section className="py-20 px-6 bg-[#0F0F18]/40 border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Work With a Google Ads Agency That <span className="text-amber-500">Delivers Results</span>
            </h2>
            <div className="w-20 h-1 bg-amber-500 rounded-full" />
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              We maximize your Google Ads Return On Investment (ROI) by performing regular testing, intensive campaign optimization, and transparent campaign reports. We don't just run ads; we continuously restructure your campaign logic, craft persuasive ad copy, and optimize destination landing pages to make sure you pay less per lead.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              By focusing on performance and data-driven insights rather than hit-and-trial methods, our experienced team ensures your ad spend yields the maximum volume of high-quality business leads.
            </p>
          </div>
          
          <div className="lg:col-span-5 bg-[#13131F] border border-white/5 rounded-2xl overflow-hidden relative group">
            <img
              src="/google-ads/sponsoredclicks.jpg"
              alt="Google Sponsored Clicks"
              className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Search, Globe, RefreshCw, ShoppingBag, Smartphone, FileText } from 'lucide-react';

export default function ServicesGrid() {
  return (
    <section className="py-20 px-6 bg-[#050508] border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">What We Provide</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Comprehensive Google Ads Services</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Search className="w-6 h-6 text-amber-500" />,
              title: "Search Ads",
              desc: "Promote your services directly to users search-ready keywords. Get maximum visibility on Google search results."
            },
            {
              icon: <Globe className="w-6 h-6 text-amber-500" />,
              title: "Display Ads",
              desc: "Promote your business across millions of Google partner sites, YouTube, and Gmail with engaging visual banners."
            },
            {
              icon: <RefreshCw className="w-6 h-6 text-amber-500" />,
              title: "Re-Marketing",
              desc: "Re-engage target users who visited your website before but didn't convert, boosting sales volume."
            },
            {
              icon: <ShoppingBag className="w-6 h-6 text-amber-500" />,
              title: "Shopping Ads",
              desc: "Display product images, price details, and store ratings at the top of Google search results to scale e-commerce sales."
            },
            {
              icon: <Smartphone className="w-6 h-6 text-amber-500" />,
              title: "App Promotions",
              desc: "Boost your iOS and Android mobile app installations with highly targeted mobile campaigns."
            },
            {
              icon: <FileText className="w-6 h-6 text-amber-500" />,
              title: "Google Ads Audit",
              desc: "Get an in-depth audit of your existing Google Ads campaigns to locate budget leaks and optimize structure."
            }
          ].map((srv, idx) => (
            <div key={idx} className="bg-[#0F0F18] border border-white/5 hover:border-amber-500/30 p-8 rounded-2xl space-y-4 transition-all duration-300 group">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-colors duration-300">
                {React.cloneElement(srv.icon, { className: "w-6 h-6 text-amber-500 group-hover:text-black transition-colors" })}
              </div>
              <h3 className="text-xl font-bold text-white">{srv.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

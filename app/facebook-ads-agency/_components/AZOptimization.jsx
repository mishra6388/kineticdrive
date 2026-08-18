"use client";

import { CheckCircle2 } from "lucide-react";

const STRATEGY = [
  "Account audit & growth roadmap",
  "Full-funnel audience segmentation",
  "Ad creative A/B testing",
  "Retargeting & lookalike audience strategy",
  "Landing page design & conversion rate optimization",
  "Custom audience segmentation",
];

const PAID_MEDIA = [
  "PPC account audit & setup",
  "AI-powered bidding & budget management",
  "TikTok / Taboola offer development",
  "Retargeting campaigns & exclusions",
  "Performance analytics & reporting",
  "Geographic bid adjustments",
];

export default function AZOptimization() {
  return (
    <section className="py-24 px-6 bg-[#0F0F18]/20 border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">
            Full-Service Coverage
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">
            A–Z Facebook Ads Optimization
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            We don't just run ads — we own every lever that affects your campaign's
            efficiency, from first-click to final conversion.
          </p>
        </div>

        {/* Two-column grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Strategy Column */}
          <div className="bg-[#0F0F18] border border-amber-500/20 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/5 blur-3xl rounded-full pointer-events-none" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center">
                <span className="text-amber-500 text-lg font-black">S</span>
              </div>
              <h3 className="text-white font-bold text-lg">Strategy</h3>
            </div>
            <ul className="space-y-3.5">
              {STRATEGY.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Paid Media Column */}
          <div className="bg-[#0F0F18] border border-orange-500/20 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/5 blur-3xl rounded-full pointer-events-none" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center">
                <span className="text-orange-400 text-lg font-black">P</span>
              </div>
              <h3 className="text-white font-bold text-lg">Paid Media Optimization</h3>
            </div>
            <ul className="space-y-3.5">
              {PAID_MEDIA.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

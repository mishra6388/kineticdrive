"use client";

import { CheckCircle2 } from "lucide-react";

const CONTENT_STRATEGY = [
  "Brand identity & voice guidelines",
  "Full-funnel content calendar (30/60/90 days)",
  "Platform-specific content pillars",
  "Competitor & trend research",
  "Story, Reel & carousel planning",
  "Hashtag strategy & SEO optimisation",
];

const GROWTH_EXECUTION = [
  "Daily/weekly scheduling & publishing",
  "AI-assisted caption & copy writing",
  "High-quality graphic & video design",
  "Community management & DM replies",
  "Influencer outreach coordination",
  "Monthly analytics & performance reports",
];

export default function AZOptimization() {
  return (
    <section className="py-24 px-6 bg-[#0F0F18]/20 border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">
            Full-Service Coverage
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">
            A–Z Social Media Management
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            We handle every moving part of your social presence — strategy, content,
            design, publishing, and reporting — so nothing falls through the cracks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Content Strategy */}
          <div className="bg-[#0F0F18] border border-amber-500/20 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/5 blur-3xl rounded-full pointer-events-none" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center">
                <span className="text-amber-500 text-lg font-black">S</span>
              </div>
              <h3 className="text-white font-bold text-lg">Content Strategy</h3>
            </div>
            <ul className="space-y-3.5">
              {CONTENT_STRATEGY.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Growth Execution */}
          <div className="bg-[#0F0F18] border border-orange-500/20 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/5 blur-3xl rounded-full pointer-events-none" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center">
                <span className="text-orange-400 text-lg font-black">G</span>
              </div>
              <h3 className="text-white font-bold text-lg">Growth & Execution</h3>
            </div>
            <ul className="space-y-3.5">
              {GROWTH_EXECUTION.map((item) => (
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

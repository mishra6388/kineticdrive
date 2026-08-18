"use client";

import { CheckCircle2, XCircle } from "lucide-react";

const KINETIC = [
  "Dedicated strategist, not a rotating account manager",
  "Weekly optimization cycle with a written change log",
  "Creative, copy & landing page included — not billed separately",
  "Transparent pricing shown before the first call",
  "Audience research grounded in your actual buyer data",
];

const TYPICAL = [
  "Junior account manager handling 20+ clients",
  "\"We'll check in monthly\" reporting",
  "Creative and copywriting billed as add-ons",
  "Pricing revealed only after a sales call",
  "Generic interest-based targeting templates",
];

export default function ComparisonSection() {
  return (
    <section className="bg-[#0F0F18]/20 py-24 border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">
            The difference
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mt-2">
            What "managing your ads" actually means
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* KineticDrive column */}
          <div className="bg-[#0F0F18] border border-amber-500/30 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 pointer-events-none" />
            <h3 className="text-white font-bold mb-6 flex items-center gap-2 relative z-10">
              <span className="w-2 h-2 rounded-full bg-amber-500" /> KineticDrive
            </h3>
            <ul className="space-y-4 relative z-10">
              {KINETIC.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Typical agencies column */}
          <div className="bg-[#0F0F18]/50 border border-white/5 rounded-2xl p-8">
            <h3 className="text-gray-400 font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gray-500" /> Typical agencies
            </h3>
            <ul className="space-y-4">
              {TYPICAL.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-400">
                  <XCircle className="w-4 h-4 text-gray-600 mt-0.5 shrink-0" />
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

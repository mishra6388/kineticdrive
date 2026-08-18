"use client";

import { Search, Users, Megaphone, Zap, BarChart2 } from "lucide-react";

const STEPS = [
  {
    icon: <Search className="w-6 h-6" />,
    number: "01",
    title: "Deep Research & Strategy",
    body: "We analyse your market, map competitor ad angles, and build a full-funnel content strategy before a single rupee is spent. You get a written growth roadmap — not a verbal handshake.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    number: "02",
    title: "Audience Targeting",
    body: "We translate your best-buyer data into Meta targeting signals: custom audiences, lookalikes, interest stacks, and retargeting pools — layered so your budget reaches people already predisposed to buy.",
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    number: "03",
    title: "Ad Creative & Copywriting",
    body: "We write scroll-stopping hooks, headlines, and body copy, then design static and video creatives in 3–5 variants. Data picks the winner — not opinion.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    number: "04",
    title: "Lead-Flow Automation",
    body: "We connect your ads to your CRM, WhatsApp, and email sequences so leads are captured, notified, and nurtured instantly. No lead goes cold while you sleep.",
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    number: "05",
    title: "Advanced Reporting & Analysis",
    body: "Every week you get a plain-language report: what changed, what improved, what was cut, and what's next. No jargon — just clear decisions backed by real data.",
  },
];

export default function SeeOurProcess() {
  return (
    <section className="py-24 px-6 bg-[#050508] border-b border-white/5">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">
            Our Workflow
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">
            See Our Process
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            A methodical, repeatable system for building high-performance Facebook
            Ads campaigns that drive qualified leads — start to finish.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-amber-500/60 via-amber-500/20 to-transparent hidden md:block" />

          <div className="space-y-8">
            {STEPS.map((step, idx) => (
              <div
                key={step.number}
                className="relative flex gap-6 md:gap-10 items-start group"
              >
                {/* Icon bubble */}
                <div className="shrink-0 relative z-10 w-16 h-16 bg-[#0F0F18] border-2 border-amber-500/40 group-hover:border-amber-500 rounded-2xl flex items-center justify-center text-amber-500 transition-all duration-300 shadow-lg shadow-amber-500/5 group-hover:shadow-amber-500/20">
                  {step.icon}
                </div>

                {/* Content card */}
                <div className="flex-1 bg-[#0F0F18] border border-white/5 group-hover:border-amber-500/20 rounded-2xl p-6 md:p-8 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-amber-500 tracking-widest uppercase">
                      Step {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-amber-500/5 to-orange-500/5 border border-amber-500/20 rounded-2xl p-10">
          <p className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-3">
            Let's Build Your Perfect Facebook Ads Marketing Plan
          </p>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
            Ready to scale with a proven system?
          </h3>
          <p className="text-gray-400 text-sm mb-8 max-w-lg mx-auto">
            Deliver on every aspect of your campaign to help boost awareness, attract
            high-intent leads, and drive revenue growth.
          </p>
          <a
            href={`https://wa.me/917388100850?text=${encodeURIComponent("Hi KineticDrive! I'd like to book a free Facebook Ads strategy call. Please share your availability.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-500/20"
          >
            Book a Free Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
}

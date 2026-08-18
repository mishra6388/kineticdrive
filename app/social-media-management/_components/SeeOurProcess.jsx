"use client";

import { Search, Layers, PenTool, Share2, BarChart2 } from "lucide-react";

const STEPS = [
  {
    icon: <Search className="w-6 h-6" />,
    number: "01",
    title: "Brand Discovery & Strategy",
    body: "We deep-dive into your brand, audience, competitors, and goals. You leave with a written content strategy — channel selection, posting frequency, tone of voice, and a 90-day roadmap.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    number: "02",
    title: "Content Calendar Planning",
    body: "We map out every post for the month — Reels, carousels, stories, and static posts — before a single pixel is designed. No last-minute scrambles.",
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    number: "03",
    title: "Design & Copywriting",
    body: "Our designers and writers craft scroll-stopping visuals and captions built around your brand identity. Every post is reviewed and approved by you before publishing.",
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    number: "04",
    title: "Publishing & Community Management",
    body: "We schedule and publish at peak engagement times, then manage comments, DMs, and brand mentions — keeping your audience warm and your response time fast.",
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    number: "05",
    title: "Reporting & Optimisation",
    body: "Every month you receive a plain-language performance report: reach, engagement, follower growth, and top-performing content. We use the data to improve next month's strategy.",
  },
];

export default function SeeOurProcess() {
  return (
    <section className="py-24 px-6 bg-[#050508] border-b border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">
            Our Workflow
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">
            See Our Process
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            A repeatable system for building social media presence that drives real
            engagement and measurable business growth — every single month.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-amber-500/60 via-amber-500/20 to-transparent hidden md:block" />

          <div className="space-y-8">
            {STEPS.map((step) => (
              <div key={step.number} className="relative flex gap-6 md:gap-10 items-start group">
                <div className="shrink-0 relative z-10 w-16 h-16 bg-[#0F0F18] border-2 border-amber-500/40 group-hover:border-amber-500 rounded-2xl flex items-center justify-center text-amber-500 transition-all duration-300 shadow-lg shadow-amber-500/5 group-hover:shadow-amber-500/20">
                  {step.icon}
                </div>
                <div className="flex-1 bg-[#0F0F18] border border-white/5 group-hover:border-amber-500/20 rounded-2xl p-6 md:p-8 transition-all duration-300">
                  <span className="text-xs font-bold text-amber-500 tracking-widest uppercase">
                    Step {step.number}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2 mt-1 group-hover:text-amber-400 transition-colors">
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
            Let's Build Your Perfect Social Media Strategy
          </p>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
            Ready to grow with a proven system?
          </h3>
          <p className="text-gray-400 text-sm mb-8 max-w-lg mx-auto">
            Deliver consistent, high-quality content across every platform to build brand
            awareness and drive real business results.
          </p>
          <a
            href={`https://wa.me/917388100850?text=${encodeURIComponent("Hi KineticDrive! I'd like to book a free Social Media Management strategy call. Please share your availability.")}`}
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

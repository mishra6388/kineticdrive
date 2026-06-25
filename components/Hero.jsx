'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const STATS = [
  { value: '500+', label: 'Projects delivered' },
  { value: '99.9%', label: 'Client satisfaction' },
  { value: '24/7', label: 'Dedicated support' },
];

const TAGS = ['Website Development', 'SEO & Growth', 'Brand Marketing', 'Mobile Apps'];

export default function KineticDriveHero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050508]">

      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(5,5,8,0.92), rgba(5,5,8,0.75), rgba(5,5,8,0.55)), url('/Hero.png')",
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.10),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.07),transparent_14%)]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(251,191,36,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(251,191,36,0.07) 1px,transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Accent glow blobs */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute -left-16 top-1/3 h-64 w-64 rounded-full bg-yellow-400/5 blur-3xl" />

      {/* ── Content ── */}
      <main className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen flex-col items-center justify-center pb-24 pt-28 text-center lg:items-start lg:text-left lg:pt-36">

          {/* Eyebrow pill */}
          <div
            className={`inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/5 px-4 py-2 backdrop-blur-sm transition-all duration-1000 ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-sm font-medium text-amber-200">India's Digital Growth Partner</span>
          </div>

          {/* Headline */}
          <h1
            className={`mt-6 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl transition-all duration-1000 delay-200 ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <span className="block">Digital solutions</span>
            <span className="mt-2 block bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              built for India's next growth wave.
            </span>
          </h1>

          {/* Sub-copy */}
          <p
            className={`mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg transition-all duration-1000 delay-400 ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            We help Indian startups, SMEs, and growing brands build powerful websites, mobile apps, and
            digital marketing systems that turn attention into real business results.
          </p>

          {/* CTA buttons */}
          <div
            className={`mt-10 flex flex-col gap-3 sm:flex-row transition-all duration-1000 delay-600 ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 px-8 py-4 text-base font-semibold text-slate-950 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/25"
            >
              Talk to Our Experts
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-amber-400/40 hover:bg-amber-400/5"
            >
              <Play className="mr-2 h-4 w-4 text-amber-300" />
              Explore Our Work
            </a>
          </div>

          {/* Tag pills */}
          <div
            className={`mt-8 flex flex-wrap justify-center gap-2 lg:justify-start transition-all duration-1000 delay-800 ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </main>

      {/* Stats strip */}
      <div className="relative z-10 border-t border-white/5 bg-black/30 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 divide-y divide-white/5 px-6 py-8 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:text-left lg:px-8">
          {STATS.map((s) => (
            <div key={s.label} className="py-4 text-center sm:px-8 sm:py-0 first:pl-0">
              <p className="text-3xl font-bold text-amber-300">{s.value}</p>
              <p className="mt-1 text-sm text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
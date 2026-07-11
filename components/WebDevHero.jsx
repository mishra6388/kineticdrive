'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const STATS = [
  { value: '250+', label: 'Websites Launched' },
  { value: '99.9%', label: 'Uptime Guaranteed' },
  { value: '2.5x', label: 'Avg. Conversion Boost' },
];

const TAGS = ['Next.js', 'React', 'E-commerce', 'Custom Web Apps', 'High Performance'];

export default function WebDevHero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050508]">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(5,5,8,0.92), rgba(5,5,8,0.75), rgba(5,5,8,0.55)), url('/images/webdevelopement.png')",
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.10),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.07),transparent_14%)]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(56,189,248,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,0.07) 1px,transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Accent glow blobs */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute -left-16 top-1/3 h-64 w-64 rounded-full bg-blue-400/5 blur-3xl" />

      {/* ── Content ── */}
      <main className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen flex-col items-center justify-center pb-24 pt-28 text-center lg:items-start lg:text-left lg:pt-36">
          {/* Eyebrow pill */}
          <div
            className={`inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/5 px-4 py-2 backdrop-blur-sm transition-all duration-1000 ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-sm font-medium text-sky-200">Expert Web Development Agency</span>
          </div>

          {/* Headline */}
          <h1
            className={`mt-6 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl transition-all duration-1000 delay-200 ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <span className="block">High-Performance</span>
            <span className="mt-2 block bg-gradient-to-r from-sky-300 via-blue-400 to-sky-500 bg-clip-text text-transparent">
              Websites that Convert.
            </span>
          </h1>

          {/* Sub-copy */}
          <p
            className={`mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg transition-all duration-1000 delay-400 ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Turn your ad clicks into loyal customers with fast, beautifully designed, and SEO-optimized websites tailored for your business growth.
          </p>

          {/* CTA buttons */}
          <div
            className={`mt-10 flex flex-col gap-3 sm:flex-row transition-all duration-1000 delay-600 ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-sky-400 to-blue-500 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-sky-500/25"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-sky-400/40 hover:bg-sky-400/5"
            >
              <Play className="mr-2 h-4 w-4 text-sky-300" />
              View Our Work
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
              <p className="text-3xl font-bold text-sky-300">{s.value}</p>
              <p className="mt-1 text-sm text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

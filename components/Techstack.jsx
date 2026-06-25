'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ExternalLink } from 'lucide-react';

const services = [
  {
    title: 'WordPress Development',
    description: 'Create dynamic websites and blogs with customizable WordPress solutions.',
    logoUrl: '/technology/wordpress.png',
    accent: '#21759B',
  },
  {
    title: 'Next.js Development',
    description: 'Build fast, scalable, and SEO-optimized web apps with Next.js.',
    logoUrl: '/technology/next.js.png',
    accent: '#FFFFFF',
  },
  {
    title: 'React Native Apps',
    description: 'Develop native mobile apps for iOS and Android using React Native.',
    logoUrl: '/technology/react.png',
    accent: '#61DAFB',
  },
  {
    title: 'AppSheet Solutions',
    description: 'Build business apps fast without writing code using AppSheet.',
    logoUrl: '/technology/appsheet (2).png',
    accent: '#FBBF24',
  },
  {
    title: 'Flutter Development',
    description: 'Build cross-platform, high-performance apps with Flutter and Dart.',
    logoUrl: '/flutter.png',
    accent: '#02569B',
  },
];

const techBubbles = [
  { name: 'React',      color: '#61DAFB' },
  { name: 'Next.js',   color: '#FFFFFF' },
  { name: 'Flutter',   color: '#54C5F8' },
  { name: 'Node.js',   color: '#339933' },
  { name: 'WordPress', color: '#21759B' },
  { name: 'AppSheet',  color: '#FBBF24' },
];

export default function KineticDriveServices() {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden bg-[#050508] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      {/* Ambient blob */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-96 -translate-x-1/2 rounded-full bg-amber-500/5 blur-3xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl">

        {/* ── Header ── */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block mb-4 rounded-full border border-amber-400/25 bg-amber-400/8 px-4 py-1 text-xs font-bold uppercase tracking-widest text-amber-400">
            Tech Stack
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Our Technologies{' '}
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              & Services
            </span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
            We empower businesses with modern tools and technologies for stunning apps and websites.
          </p>
        </div>

        {/* ── Tech bubbles ── */}
        <div className="mb-16">
          <h3 className="mb-6 text-center text-lg font-semibold text-gray-300">Our Technology Stack</h3>
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
            {techBubbles.map((tech) => (
              <div key={tech.name}
                className="flex flex-col items-center gap-2 rounded-2xl border border-white/7 bg-white/3 p-4 transition-all duration-300 hover:border-amber-400/25 hover:bg-white/5 hover:-translate-y-0.5">
                <div
                  className="h-11 w-11 rounded-full flex items-center justify-center border-2"
                  style={{ borderColor: tech.color + '50', backgroundColor: tech.color + '18' }}
                >
                  <span className="text-sm font-bold text-white">{tech.name[0]}</span>
                </div>
                <span className="text-xs font-medium text-gray-400">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Services grid ── */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, i) => (
            <div key={i}
              className="group flex flex-col rounded-2xl border border-white/7 bg-[#0F0F18] p-6 transition-all duration-300 hover:border-amber-400/25 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5"
            >
              <div className="mb-4 h-12 w-12 overflow-hidden rounded-xl flex items-center justify-center"
                style={{ background: svc.accent + '18', border: `1px solid ${svc.accent}30` }}>
                <img
                  src={svc.logoUrl}
                  alt={`${svc.title} logo`}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-amber-300 transition-colors duration-200">
                {svc.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed flex-1">{svc.description}</p>
            </div>
          ))}
        </div>

        {/* ── CTA Banner ── */}
        <div className="mt-14 rounded-2xl border border-white/7 p-8 sm:p-10"
          style={{ background: 'linear-gradient(135deg, #13131F 0%, #0F0F18 100%)' }}>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Let's Build Something{' '}
                <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                  Extraordinary
                </span>{' '}
                Together
              </h3>
              <p className="mt-2 text-base text-gray-400 max-w-lg">
                Partner with Kinetic Drive to turn your ideas into impactful digital products.
              </p>
            </div>
            <button
              className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-7 py-3.5 font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-500/25"
              onClick={() => router.push('/contact')}
            >
              Contact Us
              <ExternalLink className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

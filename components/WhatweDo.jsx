'use client';
import React from 'react';

const services = [
  {
    title: 'App Development',
    description: 'Native & cross-platform mobile apps for iOS and Android — built to delight users and scale with your business.',
    img: '/images/mobileapp.png',
    alt: 'Mobile App Development',
    accent: '#F59E0B',
    label: 'Mobile First',
  },
  {
    title: 'Web Development',
    description: 'Fast, SEO-optimised, and beautifully designed websites that convert visitors into customers.',
    img: '/images/webdevelopement.png',
    alt: 'Web Development',
    accent: '#38BDF8',
    label: 'High Performance',
  },
  {
    title: 'SEO Services',
    description: 'Data-driven search strategies that put your brand at the top of Google and keep it there.',
    img: '/images/seo.png',
    alt: 'SEO Services',
    accent: '#34D399',
    label: 'Rank & Grow',
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#050508] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      {/* Ambient blob */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-amber-500/6 blur-3xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block mb-4 rounded-full border border-amber-400/25 bg-amber-400/8 px-4 py-1 text-xs font-bold uppercase tracking-widest text-amber-400">
            What We Do
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Our{' '}
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              Core Services
            </span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
            End-to-end digital solutions designed to grow your brand, drive traffic, and generate real revenue.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc) => (
            <article
              key={svc.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/7 bg-[#0F0F18] transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${svc.accent}, transparent)` }}
              />

              {/* Image area */}
              <div
                className="relative flex h-56 items-center justify-center overflow-hidden sm:h-64"
                style={{ background: `radial-gradient(circle at 50% 50%, ${svc.accent}12 0%, transparent 70%)` }}
              >
                <img
                  src={svc.img}
                  alt={svc.alt}
                  className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6 pt-4">
                {/* Label pill */}
                <span
                  className="mb-3 inline-block self-start rounded-full px-3 py-0.5 text-xs font-semibold uppercase tracking-wider"
                  style={{ color: svc.accent, background: `${svc.accent}18`, border: `1px solid ${svc.accent}30` }}
                >
                  {svc.label}
                </span>

                <h3 className="text-xl font-bold text-white mb-2">{svc.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400 flex-1">{svc.description}</p>

                {/* Divider */}
                <div className="my-4 h-px bg-white/6" />

                <a
                  href="/services"
                  className="inline-flex items-center text-sm font-semibold transition-colors duration-200"
                  style={{ color: svc.accent }}
                >
                  Learn more
                  <svg className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';
import React from 'react';

const services = [
  {
    title: 'Custom Web Apps',
    description: 'High-performance React & Next.js applications tailored specifically to your complex business requirements.',
    img: '/images/webdevelopement.png', // Reusing existing image, we can update if better ones exist
    alt: 'Custom Web Apps',
    accent: '#38BDF8',
    label: 'Scalable Solutions',
  },
  {
    title: 'E-Commerce Platforms',
    description: 'Beautiful, conversion-focused online stores that provide seamless shopping experiences for your customers.',
    img: '/images/mobileapp.png',
    alt: 'E-Commerce Platforms',
    accent: '#F59E0B',
    label: 'Sell More',
  },
  {
    title: 'High-Converting Landing Pages',
    description: 'Fast-loading, optimized landing pages designed specifically to capture leads from your Google Ad campaigns.',
    img: '/images/seo.png',
    alt: 'Landing Pages',
    accent: '#34D399',
    label: 'Maximize ROI',
  },
];

export default function WebDevServices() {
  return (
    <section className="relative overflow-hidden bg-[#050508] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      {/* Ambient blob */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-500/6 blur-3xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block mb-4 rounded-full border border-sky-400/25 bg-sky-400/8 px-4 py-1 text-xs font-bold uppercase tracking-widest text-sky-400">
            Specialized Services
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Our Web{' '}
            <span className="bg-gradient-to-r from-sky-300 to-sky-500 bg-clip-text text-transparent">
              Development Expertise
            </span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
            We build robust, visually stunning web experiences designed to turn your traffic into tangible revenue.
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
                  href="#contact"
                  className="inline-flex items-center text-sm font-semibold transition-colors duration-200"
                  style={{ color: svc.accent }}
                >
                  Request a Quote
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

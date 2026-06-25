'use client';
import React from 'react';

/**
 * IndustryGrowthSection
 * Responsive 1 → 2 → 3 col grid with a full-width "closer" card on the last item.
 * Per-card accent colors. CSS-only hover treatments via group classes.
 */

const industries = [
  {
    title: 'Manufacturing & B2B Services',
    points: 'Built digital presence from the ground up for industrial clients.',
    stat: '3× more',
    statPeriod: 'B2B leads in 6 months',
    accent: '#F59E0B',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
        <path d="M8 50h48v6H8z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M12 50V30l8-6v8l8-7v8l8-7v8l8-7v20" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
        <circle cx="46" cy="16" r="7" stroke="currentColor" strokeWidth="2.5" />
        <path d="M46 11v-2.5M46 23v-2.5M51.2 18.2l1.8 1.8M40 18.2l1.8 1.8M51.2 13.8l1.8-1.8M40 13.8l1.8-1.8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Doctors & Hospitals',
    points: 'Patient-friendly websites & appointment funnels for clinics and hospitals.',
    stat: '40% more',
    statPeriod: 'patient bookings',
    accent: '#34D399',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
        <path d="M24 10h16v10h10v16H40v10H24V36H14V20h10z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M32 24v8M28 28h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M18 48c0-4 3-6 6-6s5 2 8-2 6 2 6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Real Estate & Construction',
    points: 'Hyper-local SEO + high-converting landing pages built to close.',
    stat: '150% surge',
    statPeriod: 'in qualified inquiries',
    accent: '#818CF8',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
        <path d="M14 30 32 16l18 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 28v20h28V28" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <rect x="27" y="36" width="10" height="12" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="46" cy="22" r="6" stroke="currentColor" strokeWidth="2.2" />
      </svg>
    ),
  },
  {
    title: 'E-Commerce & Retail',
    points: 'Scalable ad creatives + sales funnel optimization that converts.',
    stat: '7-figure',
    statPeriod: 'monthly revenue achieved',
    accent: '#F472B6',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
        <rect x="10" y="12" width="34" height="24" rx="2" stroke="currentColor" strokeWidth="2.5" />
        <path d="M10 30h34" stroke="currentColor" strokeWidth="2.2" />
        <path d="M40 44h12l-3-10H38" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="42" cy="50" r="3" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="52" cy="50" r="3" stroke="currentColor" strokeWidth="2.2" />
        <path d="M21 21v6M27 18v9M33 23v4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Professional Services',
    points: 'Doctors, lawyers, consultants, coaches — we help you get booked.',
    stat: '2× pipeline',
    statPeriod: 'more leads, more bookings',
    accent: '#38BDF8',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
        <circle cx="26" cy="20" r="8" stroke="currentColor" strokeWidth="2.5" />
        <path d="M12 46c0-8 6-13 14-13s14 5 14 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="46" cy="38" r="7" stroke="currentColor" strokeWidth="2.2" />
        <path d="M46 34v4l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Astrologers & Spiritual Healers',
    points: 'SEO + emotional ad targeting = trusted online presence that resonates.',
    stat: '200% growth',
    statPeriod: 'in consultations',
    accent: '#C084FC',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
        <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2.5" />
        <path d="M32 14 44 38H20z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M32 50 20 26h24z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="32" cy="32" r="3" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Startups & D2C Brands',
    points: 'Full-funnel growth systems — from brand identity to paid acquisition — built to scale fast.',
    stat: '5× ROAS',
    statPeriod: 'average across paid campaigns',
    accent: '#FB7185',
    featured: true,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
        <path d="M32 8c8 6 12 14 12 22 0 8-5 14-12 18-7-4-12-10-12-18 0-8 4-16 12-22z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="32" cy="28" r="4" stroke="currentColor" strokeWidth="2.2" />
        <path d="M24 44l-6 10M40 44l6 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function IndustryGrowthSection() {
  return (
    <section className="relative overflow-hidden bg-[#050508] px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      {/* Ambient blobs */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(circle, #F59E0B 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #818CF8 0%, transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center sm:mb-16">
          <span className="mb-4 inline-block rounded-full border border-amber-400/25 bg-amber-400/8 px-4 py-1 text-xs font-bold uppercase tracking-widest text-amber-400">
            Industry Expertise
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Industry-Specific{' '}
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              Digital Growth
            </span>
          </h2>
          <p className="mt-3 text-sm font-bold uppercase tracking-widest text-amber-400/60">
            Trusted by 200+ leading brands across sectors
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
            We don't believe in one-size-fits-all marketing. We craft laser-focused digital strategies
            tailored to your industry — delivering growth you can measure and results you can feel.
          </p>
        </div>

        {/* Card grid — 1 → 2 → 3 cols, last card spans full width as a "closer" */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => (
            <article
              key={item.title}
              className={`group relative flex flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                item.featured ? 'sm:col-span-2 lg:col-span-3 lg:flex-row lg:items-center lg:gap-8 lg:p-8' : ''
              }`}
              style={{
                background: 'linear-gradient(145deg,#13131F,#0F0F18)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${item.accent}45`;
                e.currentTarget.style.boxShadow = `0 20px 40px -20px ${item.accent}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Hover glow */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: `radial-gradient(circle at 50% 0%, ${item.accent}18 0%, transparent 70%)` }}
              />

              {/* Top accent line */}
              <div
                className="absolute inset-x-6 top-0 h-px opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                style={{ background: `linear-gradient(90deg, transparent, ${item.accent}80, transparent)` }}
              />

              {/* Icon */}
              <div
                aria-hidden="true"
                className={`mb-5 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${
                  item.featured ? 'lg:mb-0' : ''
                }`}
                style={{
                  background: `${item.accent}18`,
                  border: `1px solid ${item.accent}35`,
                  color: item.accent,
                }}
              >
                {item.icon}
              </div>

              <div className={item.featured ? 'flex-1' : 'flex flex-1 flex-col'}>
                {/* Title */}
                <h3 className="mb-3 text-lg font-bold leading-snug text-white">
                  {item.title}
                  {item.featured && (
                    <span
                      className="ml-3 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest"
                      style={{ background: `${item.accent}20`, color: item.accent }}
                    >
                      Fastest Growing
                    </span>
                  )}
                </h3>

                {/* Description */}
                <p className="flex-1 text-sm leading-relaxed text-gray-400">{item.points}</p>

                {!item.featured && (
                  <>
                    <div className="my-5 h-px bg-white/6" />
                    <StatBadge item={item} />
                  </>
                )}
              </div>

              {item.featured && (
                <div className="mt-5 lg:mt-0 lg:w-56 lg:flex-shrink-0">
                  <StatBadge item={item} />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatBadge({ item }) {
  return (
    <div
      className="flex items-start gap-3 rounded-xl p-3"
      style={{ background: `${item.accent}10`, border: `1px solid ${item.accent}20` }}
    >
      <div
        aria-hidden="true"
        className="mt-1 h-2 w-2 flex-shrink-0 rounded-full"
        style={{ background: item.accent, boxShadow: `0 0 6px ${item.accent}` }}
      />
      <div>
        <p className="text-sm font-bold leading-tight" style={{ color: item.accent }}>
          {item.stat}
        </p>
        <p className="mt-0.5 text-xs text-gray-500">{item.statPeriod}</p>
      </div>
    </div>
  );
}
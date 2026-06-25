'use client';
import React from 'react';
import { motion } from 'framer-motion';

/**
 * GoogleReviewsCarousel
 * - Images shown at full natural height (object-contain, no cropping)
 * - Dark card frames that match the site design system
 * - Two-row marquee scrolling in opposite directions
 * - Google branding badge + star rating header
 * - Left/right fade masks
 */

const ROW_ONE = [
  '/googleReviews/image1.png',
  '/googleReviews/image7.png',
  '/googleReviews/image3.png',
];

const ROW_TWO = [
  '/googleReviews/image2.png',
  '/googleReviews/image4.png',
  '/googleReviews/image6.png',
];

function MarqueeRow({ images, direction = 'left', speed = 30 }) {
  const doubled = [...images, ...images, ...images, ...images]; // enough copies for seamless loop
  const animateX = direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'];

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-5"
        style={{ width: 'max-content' }}
        animate={{ x: animateX }}
        transition={{ repeat: Infinity, duration: speed, ease: 'linear' }}
      >
        {doubled.map((src, i) => (
          <ReviewCard key={i} src={src} index={i} />
        ))}
      </motion.div>
    </div>
  );
}

function ReviewCard({ src, index }) {
  return (
    <div
      className="group relative flex-shrink-0 w-[300px] sm:w-[340px] overflow-hidden rounded-2xl border border-white/8 bg-white transition-all duration-300 hover:border-amber-400/40 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-0.5"
    >
      {/* Subtle top accent on hover */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Google review image — full natural dimensions, no crop */}
      <img
        src={src}
        alt={`Google review ${index + 1}`}
        className="w-full h-auto block"
        loading="lazy"
        draggable={false}
      />

      {/* Bottom Google branding strip */}
      <div className="flex items-center gap-1.5 border-t border-black/6 bg-gray-50 px-4 py-2">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 flex-shrink-0" aria-label="Google">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        <span className="text-[10px] font-semibold text-gray-400 tracking-wide">Google Review</span>
      </div>
    </div>
  );
}

export default function GoogleReviewsCarousel() {
  return (
    <section className="relative overflow-hidden bg-[#050508] py-16 sm:py-24">
      {/* Section dividers */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/5 blur-3xl" />

      {/* ── Header ── */}
      <div className="relative z-10 text-center px-4 mb-12">
        {/* Google rating badge */}
        <div className="inline-flex items-center gap-3 rounded-2xl border border-white/8 bg-white/4 px-5 py-3 backdrop-blur-sm mb-6">
          {/* Google G */}
          <svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          {/* Stars */}
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="h-4 w-4" viewBox="0 0 20 20" fill="#FBBF24">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm font-bold text-white">5.0</span>
          <span className="text-xs text-gray-500">· 200+ reviews</span>
        </div>

        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          What Our{' '}
          <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
            Clients Say
          </span>
        </h2>
        <p className="mt-3 text-base text-gray-500 sm:text-lg">
          Real results. Real reviews. From businesses just like yours across India.
        </p>
      </div>

      {/* ── Marquee rows ── */}
      <div className="relative space-y-5">
        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-[#050508] to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-[#050508] to-transparent sm:w-40" />

        {/* Row 1 — scrolls left */}
        <MarqueeRow images={ROW_ONE} direction="left" speed={35} />

        {/* Row 2 — scrolls right */}
        <MarqueeRow images={ROW_TWO} direction="right" speed={40} />
      </div>

      {/* ── CTA ── */}
      <div className="relative z-10 mt-12 text-center px-4">
        <a
          href="https://www.google.com/maps/place/Kinetic+Drive+Tech+Solutions/@25.4621341,81.8246664,17z/data=!3m1!4b1!4m6!3m5!1s0x399acb380a029203:0x37e5b323d7306967!8m2!3d25.4621341!4d81.8246664!16s%2Fg%2F11xmnts4qf?entry=ttu&g_ep=EgoyMDI2MDYyMi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white/8 bg-white/4 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-amber-400/30 hover:bg-amber-400/6 hover:text-amber-300"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 flex-shrink-0">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          View all reviews on Google
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </section>
  );
}

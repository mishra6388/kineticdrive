'use client';
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function InfluencerHero() {
  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden" style={{ background: 'var(--bg-base)' }}>
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 w-[300px] h-[200px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column — Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-7"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border" style={{ background: 'rgba(245,158,11,0.1)', borderColor: 'rgba(245,158,11,0.2)', color: '#FBBF24' }}>
              <Sparkles className="w-4 h-4" />
              CREATOR PARTNERSHIP PROGRAM
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight" style={{ color: 'var(--text-primary)' }}>
              Grow Your Influence.{' '}
              <br className="hidden md:block" />
              <span className="gradient-text">Build Your Brand.</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg leading-relaxed max-w-xl" style={{ color: 'var(--text-secondary)' }}>
              KineticDrive helps creators, influencers, and personal brands grow their digital presence, manage their pages, and connect with meaningful brand collaboration opportunities.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#register"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:scale-105"
                style={{ background: 'linear-gradient(to right, #F59E0B, #F97316)', color: '#000', boxShadow: '0 10px 30px -5px rgba(245,158,11,0.2)' }}
              >
                Join KineticDrive
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all hover:bg-amber-500/10"
                style={{ border: '1px solid rgba(245,158,11,0.3)', color: '#FBBF24' }}
              >
                See How It Works
              </a>
            </div>
          </motion.div>

          {/* Right Column — Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="rounded-3xl overflow-hidden border shadow-2xl" style={{ borderColor: 'var(--border)' }}>
              <img
                src="/hero-influencers.png"
                alt="KineticDrive Creator Partnership — Grow Your Influence"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Smartphone,
  Globe,
  Clock,
} from 'lucide-react';

const trustBadges = [
  { icon: CheckCircle2, label: 'High Performance' },
  { icon: Smartphone, label: 'iOS & Android' },
  { icon: Zap, label: 'Fast Loading' },
  { icon: Shield, label: 'Secure' },
  { icon: Clock, label: '24/7 Support' },
];

/* ─── Floating orb ──────────────────────────────────────────── */
function Orb({ className, delay = 0 }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      animate={{ y: [0, -24, 0], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 7 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050508] pt-24 pb-20 px-4 sm:px-6 lg:px-8"
    >
      {/* ── Animated background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <Orb className="w-[500px] h-[500px] bg-amber-500/10 -top-40 -left-40" delay={0} />
        <Orb className="w-[600px] h-[600px] bg-amber-400/6 top-1/2 -right-60" delay={2} />
        <Orb className="w-[400px] h-[400px] bg-orange-400/8 bottom-0 left-1/3" delay={4} />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(245,158,11,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.06),transparent)]" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2.5 rounded-full border border-amber-400/20 bg-amber-400/8 px-5 py-2 mb-8 backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-sm font-semibold text-amber-300 tracking-wider uppercase">
            Professional Mobile App Development Company
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6"
        >
          Professional{' '}
          <span className="relative">
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400 bg-clip-text text-transparent">
              Mobile App Development
            </span>
            {/* Underline glow */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-1 left-0 right-0 h-0.5 origin-left bg-gradient-to-r from-amber-400/80 to-orange-400/40"
            />
          </span>{' '}
          Company
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
          className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          We build scalable, high-performance Android, iOS and cross-platform mobile applications that help businesses grow, automate operations and engage customers.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#contact"
            id="hero-cta-primary"
            className="group relative inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 px-8 py-4 text-base font-bold text-black shadow-lg shadow-amber-500/25 transition-all duration-300 hover:scale-[1.04] hover:shadow-amber-500/40 hover:shadow-xl"
          >
            Get Free Consultation
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#projects"
            id="hero-cta-secondary"
            className="group inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-amber-400/30 hover:bg-amber-400/8 hover:text-amber-300"
          >
            View Portfolio
            <ArrowRight className="h-4 w-4 text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-amber-300" />
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-5"
        >
          {trustBadges.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.55 + i * 0.07 }}
              className="flex items-center gap-2 rounded-full border border-white/8 bg-white/4 px-4 py-2 backdrop-blur-sm"
            >
              <Icon className="h-4 w-4 text-amber-400 flex-shrink-0" />
              <span className="text-sm font-medium text-gray-300">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050508] to-transparent pointer-events-none" />
    </section>
  );
}

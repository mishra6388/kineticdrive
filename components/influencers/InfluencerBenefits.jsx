'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Monitor,
  UserCheck,
  BarChart3,
  Handshake,
  ClipboardList,
  Globe,
  Palette,
  TrendingUp,
} from 'lucide-react';

const benefits = [
  { icon: Monitor, title: 'Social Media Page Management', desc: 'Professional management and maintenance of your social media profiles.' },
  { icon: UserCheck, title: 'Creator Profile Optimization', desc: 'Optimize your profiles so brands can quickly discover and evaluate you.' },
  { icon: BarChart3, title: 'Content & Growth Strategy', desc: 'Strategic direction around content, engagement, and digital growth.' },
  { icon: Handshake, title: 'Brand Collaboration Opportunities', desc: 'Access to relevant paid campaigns when suitable opportunities are available.' },
  { icon: ClipboardList, title: 'Campaign Coordination', desc: 'End-to-end support around deliverables, timelines, and communication.' },
  { icon: Globe, title: 'Professional Digital Presence', desc: 'Build a credible and professional online identity across platforms.' },
  { icon: Palette, title: 'Creator Branding Support', desc: 'Strengthen your visual identity, bio, and content aesthetic.' },
  { icon: TrendingUp, title: 'Growth Insights & Performance Guidance', desc: 'Data-informed guidance to improve your reach and engagement metrics.' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function InfluencerBenefits() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden border-t" style={{ background: 'var(--bg-base)', borderColor: 'var(--border)' }}>
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#FBBF24' }}>
            Creator Benefits
          </p>
          <h2 className="text-3xl md:text-4xl font-black leading-tight" style={{ color: 'var(--text-primary)' }}>
            What You Get With{' '}
            <span className="gradient-text">KineticDrive</span>
          </h2>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {benefits.map((b) => (
            <motion.div
              key={b.title}
              variants={cardVariants}
              className="group rounded-2xl p-6 border text-center transition-all duration-300 hover:border-amber-500/20"
              style={{ background: 'var(--bg-surface)', borderColor: 'var(--border)' }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 transition-colors group-hover:bg-amber-500/15"
                style={{ background: 'rgba(245,158,11,0.08)' }}
              >
                <b.icon className="w-7 h-7" style={{ color: '#FBBF24' }} />
              </div>
              <h3 className="text-sm font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                {b.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {b.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

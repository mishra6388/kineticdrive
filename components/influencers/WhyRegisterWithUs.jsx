'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Monitor,
  TrendingUp,
  Handshake,
  Award,
  FileText,
  HeadphonesIcon,
  UserCheck,
  Heart,
} from 'lucide-react';

const benefits = [
  {
    icon: Monitor,
    title: 'Page Management',
    desc: 'We help maintain and manage your social media presence with consistent content, optimization, and audience-focused strategy.',
  },
  {
    icon: TrendingUp,
    title: 'Creator Growth',
    desc: 'Get guidance on improving your online presence, content positioning, discoverability, and overall digital growth.',
  },
  {
    icon: Handshake,
    title: 'Paid Brand Collaborations',
    desc: 'We help connect suitable creators with relevant paid collaboration opportunities when campaigns match their niche and audience.',
  },
  {
    icon: Award,
    title: 'Brand Positioning',
    desc: 'Build a stronger and more professional creator identity that makes your profile more attractive to potential brands.',
  },
  {
    icon: FileText,
    title: 'Content Strategy',
    desc: 'Get strategic guidance around content direction, posting consistency, audience engagement, and growth opportunities.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Campaign Support',
    desc: 'Get support around campaign coordination, communication, deliverables, and professional brand collaboration workflows.',
  },
  {
    icon: UserCheck,
    title: 'Profile Optimization',
    desc: 'Improve your social profiles so brands can quickly understand your niche, audience, content style, and creator value.',
  },
  {
    icon: Heart,
    title: 'Long-Term Partnership',
    desc: 'KineticDrive is your growth partner — not just another platform asking creators to register.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function WhyRegisterWithUs() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: 'var(--bg-base)' }}>
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#FBBF24' }}>
            Why Join Us
          </p>
          <h2 className="text-3xl md:text-4xl font-black leading-tight" style={{ color: 'var(--text-primary)' }}>
            Why Creators Choose{' '}
            <span className="gradient-text">KineticDrive</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            We help creators professionally manage and grow their digital presence — with eligible opportunities based on creator profile and campaign requirements.
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {benefits.map((b) => (
            <motion.div
              key={b.title}
              variants={cardVariants}
              className="group rounded-2xl p-6 border transition-all duration-300 hover:border-amber-500/20"
              style={{ background: 'var(--bg-surface)', borderColor: 'var(--border)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors group-hover:bg-amber-500/15"
                style={{ background: 'rgba(245,158,11,0.08)' }}
              >
                <b.icon className="w-6 h-6" style={{ color: '#FBBF24' }} />
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                {b.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {b.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

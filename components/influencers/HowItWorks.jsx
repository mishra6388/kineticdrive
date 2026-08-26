'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, SearchCheck, Rocket, Handshake } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: UserPlus,
    title: 'Register',
    desc: 'Submit your creator/influencer details through our quick registration form.',
  },
  {
    num: '02',
    icon: SearchCheck,
    title: 'Profile Review',
    desc: 'Our team reviews your niche, platforms, content, and digital presence.',
  },
  {
    num: '03',
    icon: Rocket,
    title: 'Growth & Collaboration',
    desc: 'If there is a suitable fit, we can discuss management, growth support, or relevant brand opportunities.',
  },
  {
    num: '04',
    icon: Handshake,
    title: 'Grow Together',
    desc: 'Build your creator brand with professional digital support and potential collaboration opportunities.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-20 lg:py-28 overflow-hidden border-t"
      style={{ background: 'var(--bg-base)', borderColor: 'var(--border)' }}
    >
      <div className="absolute top-0 left-1/2 w-[500px] h-[300px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#FBBF24' }}>
            Simple Process
          </p>
          <h2 className="text-3xl md:text-4xl font-black leading-tight" style={{ color: 'var(--text-primary)' }}>
            How It <span className="gradient-text">Works</span>
          </h2>
        </div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {/* Connecting line (desktop only) */}
          <div
            className="hidden lg:block absolute top-[72px] left-[12%] right-[12%] h-px"
            style={{ background: 'linear-gradient(to right, transparent, rgba(245,158,11,0.25), rgba(245,158,11,0.25), transparent)' }}
          />

          {steps.map((step) => (
            <motion.div
              key={step.num}
              variants={cardVariants}
              className="relative rounded-2xl p-7 border text-center transition-all duration-300 hover:border-amber-500/20"
              style={{ background: 'var(--bg-surface)', borderColor: 'var(--border)' }}
            >
              {/* Step number */}
              <div className="text-xs font-black tracking-widest mb-4" style={{ color: 'rgba(245,158,11,0.5)' }}>
                STEP {step.num}
              </div>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5"
                style={{ background: 'rgba(245,158,11,0.08)' }}
              >
                <step.icon className="w-7 h-7" style={{ color: '#FBBF24' }} />
              </div>

              <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

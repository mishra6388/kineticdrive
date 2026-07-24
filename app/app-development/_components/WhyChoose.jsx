'use client';
import {
  Code,
  Repeat,
  Gauge,
  Palette,
  ArrowUpCircle,
  HeartHandshake,
} from 'lucide-react';
import { motion } from 'framer-motion';
import MotionWrapper, { StaggerWrapper, StaggerItem } from './MotionWrapper';

const features = [
  {
    icon: Code,
    title: 'Expert iOS & Android Developers',
    desc: 'Our team of experienced mobile developers creates native and cross-platform apps using the latest technologies and best practices.',
    color: 'from-amber-400 to-orange-400',
    glow: 'rgba(245,158,11,0.12)',
  },
  {
    icon: Repeat,
    title: 'Agile Development Process',
    desc: 'We use agile methodologies to ensure transparent, iterative, and flexible development that adapts to your evolving business needs.',
    color: 'from-violet-400 to-purple-500',
    glow: 'rgba(139,92,246,0.12)',
  },
  {
    icon: Gauge,
    title: 'High-Performance & Secure',
    desc: 'We optimize for speed and battery life while implementing robust security protocols to protect user data and transactions.',
    color: 'from-emerald-400 to-teal-500',
    glow: 'rgba(52,211,153,0.12)',
  },
  {
    icon: Palette,
    title: 'Seamless UI/UX Design',
    desc: 'We design intuitive, engaging, and beautiful user interfaces that provide a flawless user experience across all devices and screen sizes.',
    color: 'from-sky-400 to-blue-500',
    glow: 'rgba(56,189,248,0.12)',
  },
  {
    icon: ArrowUpCircle,
    title: 'App Store Optimization',
    desc: 'We help you launch successfully by optimizing your app store listings with the right keywords, descriptions, and assets to maximize visibility.',
    color: 'from-rose-400 to-pink-500',
    glow: 'rgba(251,113,133,0.12)',
  },
  {
    icon: HeartHandshake,
    title: 'Post-Launch Support',
    desc: "Our partnership doesn't end at launch. We provide ongoing maintenance, updates, and scaling support to ensure your app's long-term success.",
    color: 'from-amber-400 to-yellow-300',
    glow: 'rgba(245,158,11,0.12)',
  },
];

export default function WhyChoose() {
  return (
    <section
      id="why-choose"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0F0F18] overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-amber-500/4 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-violet-500/4 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <MotionWrapper className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-3">
            Why KineticDrive
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              KineticDrive
            </span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            We build apps that users love and businesses rely on. Discover the KineticDrive difference.
          </p>
        </MotionWrapper>

        {/* Cards grid */}
        <StaggerWrapper className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, desc, color, glow }) => (
            <StaggerItem key={title}>
              <motion.div
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="group relative h-full rounded-2xl border border-white/6 bg-white/[0.03] p-7 backdrop-blur-sm overflow-hidden cursor-default"
              >
                {/* Hover glow overlay */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: `radial-gradient(circle at 30% 30%, ${glow}, transparent 70%)` }}
                />
                {/* Top border accent on hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div
                  className={`relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color} mb-5 shadow-lg`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="relative text-lg font-bold text-white mb-3">{title}</h3>
                <p className="relative text-sm text-gray-400 leading-relaxed">{desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerWrapper>
      </div>
    </section>
  );
}

'use client';
import {
  Zap,
  Palette,
  Search,
  LayoutGrid,
  Smartphone,
  ShieldCheck,
  HeartHandshake,
  Layers,
} from 'lucide-react';
import { motion } from 'framer-motion';
import MotionWrapper, { StaggerWrapper, StaggerItem } from './MotionWrapper';

const features = [
  {
    icon: Zap,
    title: 'Fast Delivery',
    desc: 'We deliver production-ready websites within agreed timelines — no delays, no excuses. Speed is built into our workflow.',
    color: 'from-amber-400 to-orange-400',
    glow: 'rgba(245,158,11,0.12)',
  },
  {
    icon: Search,
    title: 'SEO Ready',
    desc: 'Built with technical SEO best practices from day one — semantic HTML, Core Web Vitals, structured data, and meta optimization.',
    color: 'from-emerald-400 to-teal-500',
    glow: 'rgba(52,211,153,0.12)',
  },
  {
    icon: Palette,
    title: 'Modern UI',
    desc: 'Every pixel is crafted with purpose. Our designs feel premium, intuitive, and perfectly aligned with your brand identity.',
    color: 'from-violet-400 to-purple-500',
    glow: 'rgba(139,92,246,0.12)',
  },
  {
    icon: LayoutGrid,
    title: 'Admin Panel',
    desc: 'Easy-to-use custom content management backend, allowing you to update copy, images, and track leads dynamically.',
    color: 'from-blue-400 to-indigo-500',
    glow: 'rgba(59,130,246,0.12)',
  },
  {
    icon: Smartphone,
    title: 'Mobile Responsive',
    desc: 'Fully optimized layouts ensuring pixel-perfect viewing experiences on smartphones, tablets, laptops, and desktops.',
    color: 'from-rose-400 to-pink-505',
    glow: 'rgba(244,63,94,0.12)',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Development',
    desc: 'HTTPS implementation, input validation, sanitization, and state-of-the-art protections to secure customer records.',
    color: 'from-amber-400 to-yellow-300',
    glow: 'rgba(245,158,11,0.12)',
  },
  {
    icon: HeartHandshake,
    title: 'Lifetime Support',
    desc: 'We offer continued tech support, performance maintenance, hosting setup help, and updates as your business scales.',
    color: 'from-teal-400 to-emerald-500',
    glow: 'rgba(20,184,166,0.12)',
  },
  {
    icon: Layers,
    title: 'Scalable Architecture',
    desc: 'Using frameworks like Next.js and Supabase database architecture designed to handle thousands of requests seamlessly.',
    color: 'from-orange-400 to-red-500',
    glow: 'rgba(249,115,22,0.12)',
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
            We're not just developers — we're digital partners who care about your
            business outcomes as much as you do.
          </p>
        </MotionWrapper>

        {/* Cards grid */}
        <StaggerWrapper className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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

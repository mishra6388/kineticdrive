'use client';
import { motion } from 'framer-motion';
import MotionWrapper, { StaggerWrapper, StaggerItem } from '../../app-development/_components/MotionWrapper';

const tools = [
  { name: 'Google Ads', category: 'Advertising', icon: 'G', color: 'from-blue-400 to-sky-500' },
  { name: 'Meta Ads', category: 'Advertising', icon: 'M', color: 'from-indigo-400 to-blue-600' },
  { name: 'Google Analytics', category: 'Analytics', icon: 'GA', color: 'from-amber-400 to-orange-500' },
  { name: 'SEMrush', category: 'SEO', icon: 'S', color: 'from-orange-400 to-red-500' },
  { name: 'Ahrefs', category: 'SEO', icon: 'a', color: 'from-blue-500 to-indigo-500' },
  { name: 'Looker Studio', category: 'Reporting', icon: 'L', color: 'from-sky-400 to-cyan-500' },
  { name: 'Tag Manager', category: 'Tracking', icon: 'TM', color: 'from-emerald-400 to-teal-500' },
  { name: 'LinkedIn Ads', category: 'Advertising', icon: 'in', color: 'from-blue-400 to-sky-600' },
  { name: 'Mailchimp', category: 'Email', icon: 'MC', color: 'from-yellow-400 to-amber-500' },
  { name: 'Hotjar', category: 'CRO', icon: '🔥', color: 'from-red-400 to-rose-500' },
];

const categoryColors = {
  Advertising: 'text-sky-400 border-sky-400/20 bg-sky-400/8',
  Analytics: 'text-amber-400 border-amber-400/20 bg-amber-400/8',
  SEO: 'text-orange-400 border-orange-400/20 bg-orange-400/8',
  Reporting: 'text-cyan-400 border-cyan-400/20 bg-cyan-400/8',
  Tracking: 'text-emerald-400 border-emerald-400/20 bg-emerald-400/8',
  Email: 'text-yellow-400 border-yellow-400/20 bg-yellow-400/8',
  CRO: 'text-red-400 border-red-400/20 bg-red-400/8',
};

export default function ToolsWeUse() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050508] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/15 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(245,158,11,0.03),transparent)]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <MotionWrapper className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-3">
            Marketing Stack
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Tools We{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Use
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            We leverage industry-leading platforms to track, optimize, and scale your marketing campaigns.
          </p>
        </MotionWrapper>

        {/* Tech Cards */}
        <StaggerWrapper className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {tools.map(({ name, category, icon, color }) => (
            <StaggerItem key={name}>
              <motion.div
                whileHover={{ y: -8, scale: 1.04 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="group relative flex flex-col items-center gap-3 rounded-2xl border border-white/6 bg-white/[0.03] p-5 text-center cursor-default overflow-hidden"
              >
                {/* Hover background */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.08),transparent_70%)]" />

                {/* Icon */}
                <div className={`text-3xl font-extrabold bg-gradient-to-br ${color} bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-110`}>
                  {icon}
                </div>

                {/* Name */}
                <span className="relative text-sm font-bold text-white">{name}</span>

                {/* Category badge */}
                <span
                  className={`relative text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${categoryColors[category]}`}
                >
                  {category}
                </span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerWrapper>
      </div>
    </section>
  );
}

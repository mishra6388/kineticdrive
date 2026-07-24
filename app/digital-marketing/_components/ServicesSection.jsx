'use client';
import { motion } from 'framer-motion';
import { Search, Megaphone, Target, MousePointerClick, BarChart3, PenTool } from 'lucide-react';
import MotionWrapper, { StaggerWrapper, StaggerItem } from '../../app-development/_components/MotionWrapper';

const services = [
  {
    title: 'Google Ads Management',
    desc: 'Capture high-intent search traffic with highly optimized Google Ads campaigns that maximize your ROI and lower your cost per acquisition.',
    icon: MousePointerClick,
    color: 'from-amber-400 to-orange-400',
  },
  {
    title: 'Search Engine Optimization',
    desc: 'Dominate organic search results. We use data-driven on-page, off-page, and technical SEO strategies to increase your visibility.',
    icon: Search,
    color: 'from-blue-400 to-indigo-400',
  },
  {
    title: 'Meta Ads (FB/IG)',
    desc: 'Engage your target demographic with compelling creative and precision targeting on Facebook and Instagram.',
    icon: Megaphone,
    color: 'from-rose-400 to-pink-500',
  },
  {
    title: 'Performance Marketing',
    desc: 'A full-funnel approach focusing purely on conversions and revenue generation across all digital channels.',
    icon: Target,
    color: 'from-emerald-400 to-teal-500',
  },
  {
    title: 'Content Marketing',
    desc: 'Create valuable, relevant content that attracts and retains a clearly defined audience to drive profitable customer action.',
    icon: PenTool,
    color: 'from-cyan-400 to-blue-500',
  },
  {
    title: 'Analytics & CRO',
    desc: 'Conversion Rate Optimization and deep analytics tracking to squeeze the most value out of every website visitor.',
    icon: BarChart3,
    color: 'from-violet-400 to-purple-500',
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050508] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.05),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <MotionWrapper className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-3">
            Our Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Comprehensive{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Marketing Services
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            We provide end-to-end digital marketing solutions designed to scale your brand and maximize revenue.
          </p>
        </MotionWrapper>

        <StaggerWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="group relative flex flex-col h-full rounded-2xl bg-[#0F0F18] border border-white/5 p-8 overflow-hidden"
                >
                  {/* Hover background */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${service.color}`} />
                  
                  <div className="relative z-10">
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.03] border border-white/10 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed flex-1">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerWrapper>
      </div>
    </section>
  );
}

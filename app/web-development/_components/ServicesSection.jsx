'use client';
import {
  Building2,
  Briefcase,
  User,
  LayoutTemplate,
  Stethoscope,
  GraduationCap,
  ShoppingCart,
  Code2,
} from 'lucide-react';
import { motion } from 'framer-motion';
import MotionWrapper, { StaggerWrapper, StaggerItem } from './MotionWrapper';

const services = [
  {
    icon: Building2,
    title: 'Business Website',
    desc: 'A powerful online presence for your business. Showcase your services, build credibility, and convert visitors into customers.',
    tag: 'Most Popular',
    color: 'from-amber-400 to-orange-400',
  },
  {
    icon: Briefcase,
    title: 'Corporate Website',
    desc: 'Enterprise-grade corporate websites with team profiles, investor relations, and multi-department architecture.',
    tag: null,
    color: 'from-sky-400 to-blue-500',
  },
  {
    icon: User,
    title: 'Portfolio Website',
    desc: 'Stunning personal portfolios that highlight your work, skills, and achievements with jaw-dropping visuals.',
    tag: null,
    color: 'from-violet-400 to-purple-500',
  },
  {
    icon: LayoutTemplate,
    title: 'Landing Page',
    desc: 'High-converting landing pages built for Google Ads, product launches, and marketing campaigns with A/B testing ready structure.',
    tag: 'High Converting',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    icon: Stethoscope,
    title: 'Hospital Website',
    desc: 'HIPAA-aligned medical websites with appointment booking, doctor profiles, and patient portals for healthcare providers.',
    tag: null,
    color: 'from-rose-400 to-pink-500',
  },
  {
    icon: GraduationCap,
    title: 'School ERP',
    desc: 'Complete school management portals — admissions, fees, timetable, attendance, and parent-teacher communication in one platform.',
    tag: 'Full ERP',
    color: 'from-orange-400 to-red-400',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Website',
    desc: 'Feature-rich online stores with payment gateways, inventory management, and a seamless shopping experience that drives revenue.',
    tag: 'Revenue Ready',
    color: 'from-lime-400 to-green-500',
  },
  {
    icon: Code2,
    title: 'Custom Web Application',
    desc: 'Bespoke web applications built to solve complex business problems — from SaaS platforms to internal tools and dashboards.',
    tag: 'Enterprise',
    color: 'from-cyan-400 to-sky-500',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050508] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/15 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(245,158,11,0.04),transparent)]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <MotionWrapper className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-3">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Web Development{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            From simple business websites to complex enterprise applications — we've got it covered.
          </p>
        </MotionWrapper>

        {/* Cards */}
        <StaggerWrapper className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, desc, tag, color }) => (
            <StaggerItem key={title}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="group relative flex flex-col rounded-2xl border border-white/6 bg-[#0F0F18] p-6 h-full overflow-hidden"
              >
                {/* Hover glow — kept subtle so it never fights text contrast */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-gradient-to-br ${color.replace(/from-(\S+)/, 'from-$1/10').replace(/to-(\S+)/, 'to-$1/10')}`}
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-[radial-gradient(circle_at_0%_0%,rgba(245,158,11,0.06),transparent_60%)]" />

                {/* Tag */}
                {tag && (
                  <span className={`absolute top-4 right-4 z-10 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gradient-to-r ${color} text-black`}>
                    {tag}
                  </span>
                )}

                {/* Icon */}
                <div
                  className={`relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${color} mb-5 shadow-md`}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>

                <h3 className="relative z-10 text-base font-bold text-white mb-2.5">{title}</h3>
                <p className="relative z-10 text-sm text-gray-300 leading-relaxed flex-1">{desc}</p>

                {/* Arrow on hover */}
                <div className="relative z-10 mt-5 flex items-center gap-1.5 text-xs font-semibold text-gray-400 group-hover:text-amber-400 transition-colors duration-300">
                  Learn More
                  <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerWrapper>

        {/* CTA */}
        <MotionWrapper className="text-center mt-12" delay={0.2}>
          <a
            href="#hero-form"
            className="inline-flex items-center gap-2 rounded-xl border border-amber-400/30 bg-amber-400/8 px-7 py-3.5 text-sm font-bold text-amber-300 transition-all duration-300 hover:bg-amber-400/15 hover:border-amber-400/50 hover:text-amber-200"
          >
            Discuss Your Project →
          </a>
        </MotionWrapper>
      </div>
    </section>
  );
}
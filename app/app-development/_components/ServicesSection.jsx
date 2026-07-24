'use client';
import {
  Smartphone,
  Apple,
  Atom,
  Layers,
  Building2,
  ShoppingCart,
  Stethoscope,
  Code2,
} from 'lucide-react';
import { motion } from 'framer-motion';
import MotionWrapper, { StaggerWrapper, StaggerItem } from './MotionWrapper';

const services = [
  {
    icon: Smartphone,
    title: 'Android App Development',
    desc: 'High-performance native Android applications built with Kotlin and Java, optimized for thousands of devices.',
    tag: 'Popular',
    color: 'from-amber-400 to-orange-400',
    glowRgb: '245,158,11',
  },
  {
    icon: Apple,
    title: 'iOS App Development',
    desc: 'Premium native iOS apps built with Swift, ensuring a seamless user experience across iPhones and iPads.',
    tag: null,
    color: 'from-sky-400 to-blue-500',
    glowRgb: '56,189,248',
  },
  {
    icon: Atom,
    title: 'React Native Development',
    desc: 'Cross-platform applications that deliver native-like performance and UI on both iOS and Android from a single codebase.',
    tag: 'Cost Effective',
    color: 'from-violet-400 to-purple-500',
    glowRgb: '167,139,250',
  },
  {
    icon: Layers,
    title: 'Flutter App Development',
    desc: 'Beautiful, natively compiled applications for mobile, web, and desktop from a single codebase using Flutter.',
    tag: 'Fastest',
    color: 'from-emerald-400 to-teal-500',
    glowRgb: '52,211,153',
  },
  {
    icon: Building2,
    title: 'Enterprise Applications',
    desc: 'Secure, scalable, and complex mobile solutions designed to streamline enterprise workflows and internal operations.',
    tag: null,
    color: 'from-rose-400 to-pink-500',
    glowRgb: '251,113,133',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Apps',
    desc: 'Feature-rich mobile storefronts with secure payments, inventory tracking, and seamless checkout experiences.',
    tag: 'Revenue Ready',
    color: 'from-orange-400 to-red-400',
    glowRgb: '251,146,60',
  },
  {
    icon: Stethoscope,
    title: 'Healthcare Apps',
    desc: 'HIPAA-compliant medical applications for telemedicine, patient portals, and health tracking.',
    tag: null,
    color: 'from-lime-400 to-green-500',
    glowRgb: '132,204,22',
  },
  {
    icon: Code2,
    title: 'Custom Mobile Applications',
    desc: 'Bespoke mobile solutions tailored entirely to your unique business requirements and target audience.',
    tag: 'Custom',
    color: 'from-cyan-400 to-sky-500',
    glowRgb: '34,211,238',
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
            App Development{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            From native iOS and Android apps to cross-platform solutions — we build it all.
          </p>
        </MotionWrapper>

        {/* Cards */}
        <StaggerWrapper className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, desc, tag, color, glowRgb }) => (
            <StaggerItem key={title}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="group relative flex flex-col rounded-2xl border border-white/6 bg-[#0F0F18] p-6 h-full overflow-hidden"
              >
                {/* Hover glow — inline style guarantees the opacity always applies, no Tailwind JIT dependency */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 20% 15%, rgba(${glowRgb},0.12), transparent 65%)`,
                  }}
                />

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
            Discuss Your App Idea →
          </a>
        </MotionWrapper>
      </div>
    </section>
  );
}
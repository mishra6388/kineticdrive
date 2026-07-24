'use client';
import { motion } from 'framer-motion';
import { HeartPulse, GraduationCap, Building2, Utensils, HandHeart, Coins, Factory, Rocket } from 'lucide-react';
import MotionWrapper, { StaggerWrapper, StaggerItem } from './MotionWrapper';

const industries = [
  { name: 'Healthcare', icon: HeartPulse, desc: 'Hospitals, Clinics, & Healthcare Providers' },
  { name: 'Education', icon: GraduationCap, desc: 'Schools, Colleges, & E-Learning Platforms' },
  { name: 'Real Estate', icon: Building2, desc: 'Builders, Agencies, & Property Managers' },
  { name: 'Restaurant', icon: Utensils, desc: 'Diners, Cafes, & Food Delivery Brands' },
  { name: 'NGO', icon: HandHeart, desc: 'Non-Profits, Foundations, & Social Ventures' },
  { name: 'Finance', icon: Coins, desc: 'Investment Firms, FinTech, & Advisors' },
  { name: 'Manufacturing', icon: Factory, desc: 'Factories, OEM, & Industrial Brands' },
  { name: 'Startup', icon: Rocket, desc: 'Disruptive Tech, SaaS, & Agencies' },
];

export default function SocialProof() {
  return (
    <section
      id="industries"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050508] overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-amber-500/4 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <MotionWrapper className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-3">
            Industries We Serve
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Trusted by Businesses Across{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Multiple Industries
            </span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto mt-4">
            We deliver highly targeted, high-performance website architectures custom-built for your business landscape.
          </p>
        </MotionWrapper>

        <StaggerWrapper className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {industries.map(({ name, icon: Icon, desc }) => (
            <StaggerItem key={name}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="group relative flex flex-col h-full rounded-2xl border border-white/6 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-amber-400/25 hover:bg-amber-400/[0.04]"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.08),transparent_70%)]" />

                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.03] border border-white/10 text-gray-400 transition-transform duration-300 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-black group-hover:border-amber-400">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="text-lg font-bold text-white mb-1.5">{name}</div>
                <div className="text-xs text-gray-500 leading-relaxed">{desc}</div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerWrapper>
      </div>
    </section>
  );
}

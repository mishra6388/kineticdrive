'use client';
import { motion } from 'framer-motion';
import { LineChart, Target, Zap, ShieldCheck, Users, Search } from 'lucide-react';
import MotionWrapper, { StaggerWrapper, StaggerItem } from '../../app-development/_components/MotionWrapper';

const features = [
  {
    title: 'Data-Driven Strategies',
    desc: 'We rely on analytics and real-time data to optimize your campaigns and ensure maximum return on investment.',
    icon: LineChart,
  },
  {
    title: 'Targeted Traffic',
    desc: 'Reach the right audience at the right time. We build funnels that convert visitors into paying customers.',
    icon: Target,
  },
  {
    title: 'Rapid Scaling',
    desc: 'Our agile marketing approaches allow you to scale winning campaigns quickly and effectively.',
    icon: Zap,
  },
  {
    title: 'Transparent Reporting',
    desc: 'Full transparency with live dashboards and regular reports. Know exactly where your budget is going.',
    icon: Search,
  },
  {
    title: 'Expert Team',
    desc: 'Work with certified professionals who have managed millions in ad spend across various industries.',
    icon: Users,
  },
  {
    title: 'Brand Authority',
    desc: 'We build sustainable long-term brand equity while capturing short-term leads and sales.',
    icon: ShieldCheck,
  },
];

export default function WhyChoose() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0F0F18] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Sticky Content */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
            <MotionWrapper>
              <p className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-3">
                Why Choose KineticDrive?
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                We Deliver{' '}
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Measurable Results
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Marketing isn't just about clicks and impressions; it's about generating revenue. We engineer custom digital marketing campaigns that drive qualified leads, increase sales, and aggressively grow your business.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 px-6 py-3 text-sm font-bold text-black shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
                >
                  Start Scaling Now
                </a>
              </div>
            </MotionWrapper>
          </div>

          {/* Right: Grid */}
          <div className="lg:col-span-7">
            <StaggerWrapper className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <StaggerItem key={i}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="group relative flex flex-col h-full rounded-2xl bg-white/[0.02] border border-white/5 p-6 sm:p-8 backdrop-blur-sm transition-colors hover:bg-white/[0.04] hover:border-amber-400/20"
                    >
                      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400 transition-colors group-hover:bg-amber-400 group-hover:text-black">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerWrapper>
          </div>

        </div>
      </div>
    </section>
  );
}

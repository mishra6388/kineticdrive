'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Search, BrainCircuit, Rocket, Activity } from 'lucide-react';
import MotionWrapper from '../../app-development/_components/MotionWrapper';

const steps = [
  {
    title: 'Discovery & Audit',
    desc: 'We analyze your current digital footprint, audit your existing campaigns, and identify the biggest opportunities for growth.',
    icon: Search,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/20',
  },
  {
    title: 'Strategy Development',
    desc: 'Based on our research, we craft a comprehensive, data-driven marketing strategy tailored to your specific business goals.',
    icon: BrainCircuit,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20',
  },
  {
    title: 'Campaign Launch',
    desc: 'We build high-converting landing pages, write compelling ad copy, and deploy campaigns across Google, Meta, and other platforms.',
    icon: Rocket,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/20',
  },
  {
    title: 'Optimization & Scaling',
    desc: 'We constantly monitor performance, run A/B tests, and optimize bids to maximize ROI and scale your most profitable campaigns.',
    icon: Activity,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/20',
  },
];

export default function ProcessTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={containerRef} className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0F0F18]">
      <div className="relative max-w-4xl mx-auto">
        <MotionWrapper className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-3">
            How We Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Our Proven{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Growth Process
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A systematic approach to digital marketing that ensures every dollar spent delivers maximum return.
          </p>
        </MotionWrapper>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 md:translate-x-0 hidden sm:block">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-amber-400 via-orange-400 to-amber-500 origin-top"
            />
          </div>

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center justify-between group">
                  
                  {/* Content Left */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right md:pr-12' : 'md:order-3 md:pl-12'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="rounded-2xl bg-white/[0.02] border border-white/5 p-6 backdrop-blur-sm transition-colors group-hover:bg-white/[0.04] group-hover:border-white/10"
                    >
                      <span className={`text-xs font-bold uppercase tracking-wider mb-2 block ${step.color}`}>
                        Step 0{index + 1}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                    </motion.div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#0F0F18] bg-[#13131F] shadow-xl z-10 hidden sm:flex transition-transform duration-300 group-hover:scale-110">
                    <div className={`w-full h-full rounded-full border ${step.border} ${step.bg} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${step.color}`} />
                    </div>
                  </div>

                  {/* Empty space for alignment */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:order-3' : 'md:order-1'}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

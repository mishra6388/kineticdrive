'use client';
import {
  MessageSquare,
  PenTool,
  Figma,
  Code2,
  TestTube,
  Rocket,
  Settings,
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import MotionWrapper from './MotionWrapper';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Requirement Gathering',
    desc: 'We start by understanding your app idea, target audience, business goals, and technical requirements to define the scope.',
    color: 'from-amber-400 to-orange-400',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Wireframing & Prototyping',
    desc: 'We map out the user journey and create interactive wireframes, giving you a clear visual structure of the app before design begins.',
    color: 'from-violet-400 to-purple-500',
  },
  {
    number: '03',
    icon: Figma,
    title: 'UI/UX Design',
    desc: 'Our designers craft stunning, intuitive interfaces aligned with your brand identity, ensuring a frictionless user experience.',
    color: 'from-sky-400 to-blue-500',
  },
  {
    number: '04',
    icon: Code2,
    title: 'App Development',
    desc: 'Our engineering team writes clean, scalable code to bring the designs to life, integrating frontend UI with robust backend systems.',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    number: '05',
    icon: TestTube,
    title: 'Quality Assurance (QA)',
    desc: 'Rigorous testing across multiple devices, screen sizes, and OS versions to ensure the app is bug-free, secure, and performant.',
    color: 'from-rose-400 to-pink-500',
  },
  {
    number: '06',
    icon: Rocket,
    title: 'App Store Launch',
    desc: 'We handle the entire submission process for Apple App Store and Google Play Store, ensuring compliance with all guidelines.',
    color: 'from-orange-400 to-red-400',
  },
  {
    number: '07',
    icon: Settings,
    title: 'Maintenance & Support',
    desc: 'Post-launch support includes bug fixes, OS updates compatibility, performance monitoring, and feature enhancements.',
    color: 'from-cyan-400 to-sky-500',
  },
];

function TimelineStep({ step, index, total }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const isLast = index === total - 1;
  const { icon: Icon, number, title, desc, color } = step;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex gap-6 pb-10"
    >
      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-[27px] top-14 bottom-0 w-px bg-gradient-to-b from-white/10 to-transparent" />
      )}

      {/* Step icon */}
      <div className="flex-shrink-0">
        <div
          className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${color} shadow-lg`}
        >
          <Icon className="h-6 w-6 text-white" />
          {/* Step number badge */}
          <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#050508] border border-white/10 text-[10px] font-bold text-gray-300">
            {number}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pt-2 pb-4">
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

export default function ProcessTimeline() {
  return (
    <section
      id="process"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0F0F18] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[400px] h-[600px] rounded-full bg-amber-500/4 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <MotionWrapper className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-3">
            How We Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Our Development{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            A proven, transparent process that takes your app idea from concept to the App Store — stress-free.
          </p>
        </MotionWrapper>

        {/* Two-column timeline on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
          {/* Left column: steps 1-4 */}
          <div>
            {steps.slice(0, 4).map((step, i) => (
              <TimelineStep key={step.number} step={step} index={i} total={4} />
            ))}
          </div>
          {/* Right column: steps 5-7 */}
          <div className="lg:pt-24">
            {steps.slice(4).map((step, i) => (
              <TimelineStep key={step.number} step={step} index={i} total={3} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <MotionWrapper className="text-center mt-4" delay={0.2}>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 px-8 py-3.5 text-sm font-bold text-black shadow-lg shadow-amber-500/20 transition-all duration-300 hover:scale-[1.04] hover:shadow-amber-500/35"
          >
            Start Your Project
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </MotionWrapper>
      </div>
    </section>
  );
}

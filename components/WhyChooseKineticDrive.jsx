'use client';
import { useEffect, useRef, useState } from 'react';
import {
  Target,
  MessageSquareText,
  Scaling,
  Layers,
  BadgeDollarSign,
  CalendarCheck,
} from 'lucide-react';

/* ── Stat counters ── */
const stats = [
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 50, suffix: '+', label: 'Happy Clients' },
  { value: 24, suffix: '/7', label: 'Support Available' },
];

/* ── Differentiator cards ── */
const differentiators = [
  {
    icon: Target,
    title: 'Result-Driven Approach',
    description:
      'Every strategy is crafted with measurable outcomes in mind. We focus on KPIs that matter to your business growth.',
    accent: '#F59E0B',
  },
  {
    icon: MessageSquareText,
    title: 'Transparent Communication',
    description:
      'Regular updates, clear timelines, and honest feedback. You\'re always in the loop — no surprises, ever.',
    accent: '#34D399',
  },
  {
    icon: Scaling,
    title: 'Scalable Solutions',
    description:
      'We architect systems that grow with you — from startup MVP to enterprise-grade infrastructure.',
    accent: '#38BDF8',
  },
  {
    icon: Layers,
    title: 'End-to-End Service',
    description:
      'From ideation and design to deployment and maintenance — one team handles everything seamlessly.',
    accent: '#F472B6',
  },
  {
    icon: BadgeDollarSign,
    title: 'Cost-Effective Pricing',
    description:
      'Premium quality doesn\'t have to break the bank. We deliver enterprise value at competitive rates.',
    accent: '#818CF8',
  },
  {
    icon: CalendarCheck,
    title: 'On-Time Delivery',
    description:
      'We respect deadlines like they\'re promises — because they are. 95% of our projects ship on schedule.',
    accent: '#C084FC',
  },
];

/* ── Animated counter hook ── */
function useCountUp(target, shouldStart, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [shouldStart, target, duration]);

  return count;
}

function StatItem({ value, suffix, label, shouldStart, delay }) {
  const count = useCountUp(value, shouldStart);

  return (
    <div
      className="relative text-center group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
        {count}
        <span className="text-amber-400">{suffix}</span>
      </div>
      <p className="mt-2 text-sm sm:text-base text-gray-500 font-medium">
        {label}
      </p>
    </div>
  );
}

export default function WhyChooseKineticDrive() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-kineticdrive"
      className="relative overflow-hidden bg-[#050508] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute top-20 right-0 h-96 w-96 rounded-full bg-amber-500/4 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-20 left-0 h-96 w-96 rounded-full bg-purple-500/4 blur-[120px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/15 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div
          className={`text-center mb-14 sm:mb-20 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block mb-4 rounded-full border border-amber-400/25 bg-amber-400/8 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-400">
            The KineticDrive Advantage
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              KineticDrive
            </span>
            ?
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
            We don't just build products — we build partnerships. Here's what
            sets us apart from the rest.
          </p>
        </div>

        {/* Stats row */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20 transition-all duration-1000 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="col-span-2 sm:col-span-4">
            <div className="rounded-2xl border border-white/7 bg-[#0F0F18]/80 backdrop-blur-sm p-8 sm:p-10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-4">
                {stats.map((s, i) => (
                  <StatItem
                    key={i}
                    value={s.value}
                    suffix={s.suffix}
                    label={s.label}
                    shouldStart={visible}
                    delay={i * 150}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {differentiators.map((d, i) => {
            const Icon = d.icon;
            return (
              <div
                key={i}
                className={`group relative rounded-2xl border border-white/7 bg-[#0F0F18] p-6 sm:p-7 transition-all duration-700 hover:border-amber-400/20 ${
                  visible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${d.accent}08, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${d.accent}12`,
                    border: `1px solid ${d.accent}20`,
                  }}
                >
                  <Icon
                    size={22}
                    style={{ color: d.accent }}
                    className="transition-transform duration-300 group-hover:rotate-6"
                  />
                </div>

                {/* Content */}
                <h3 className="relative text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors duration-300">
                  {d.title}
                </h3>
                <p className="relative text-sm leading-relaxed text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                  {d.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${d.accent}40, transparent)`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

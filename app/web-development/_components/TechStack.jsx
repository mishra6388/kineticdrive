'use client';
import { motion } from 'framer-motion';
import MotionWrapper, { StaggerWrapper, StaggerItem } from './MotionWrapper';

const technologies = [
  { name: 'Next.js', category: 'Frontend', icon: '▲', color: 'from-white/80 to-gray-300', bg: '#000' },
  { name: 'React', category: 'Frontend', icon: '⚛', color: 'from-cyan-300 to-blue-400', bg: '#0d1117' },
  { name: 'Node.js', category: 'Backend', icon: '⬡', color: 'from-green-400 to-emerald-500', bg: '#0d1117' },
  { name: 'Express', category: 'Backend', icon: '⚡', color: 'from-gray-300 to-gray-400', bg: '#0d1117' },
  { name: 'Supabase', category: 'Database', icon: '◈', color: 'from-emerald-400 to-green-500', bg: '#0d1117' },
  { name: 'MongoDB', category: 'Database', icon: '🍃', color: 'from-green-400 to-lime-500', bg: '#0d1117' },
  { name: 'PostgreSQL', category: 'Database', icon: '🐘', color: 'from-blue-400 to-indigo-500', bg: '#0d1117' },
  { name: 'Tailwind CSS', category: 'Styling', icon: '✦', color: 'from-sky-400 to-cyan-400', bg: '#0d1117' },
  { name: 'Docker', category: 'DevOps', icon: '🐋', color: 'from-blue-400 to-sky-500', bg: '#0d1117' },
  { name: 'AWS', category: 'Cloud', icon: '☁', color: 'from-orange-400 to-amber-400', bg: '#0d1117' },
];

const categoryColors = {
  Frontend: 'text-sky-400 border-sky-400/20 bg-sky-400/8',
  Backend: 'text-emerald-400 border-emerald-400/20 bg-emerald-400/8',
  Database: 'text-violet-400 border-violet-400/20 bg-violet-400/8',
  Styling: 'text-cyan-400 border-cyan-400/20 bg-cyan-400/8',
  DevOps: 'text-blue-400 border-blue-400/20 bg-blue-400/8',
  Cloud: 'text-orange-400 border-orange-400/20 bg-orange-400/8',
};

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050508] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/15 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(245,158,11,0.03),transparent)]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <MotionWrapper className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-3">
            Technology Stack
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Built With{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Modern Tech
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            We use the latest, battle-tested technologies to build fast, scalable, and
            maintainable web solutions.
          </p>
        </MotionWrapper>

        {/* Tech Cards */}
        <StaggerWrapper className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {technologies.map(({ name, category, icon, color }) => (
            <StaggerItem key={name}>
              <motion.div
                whileHover={{ y: -8, scale: 1.04 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="group relative flex flex-col items-center gap-3 rounded-2xl border border-white/6 bg-white/[0.03] p-5 text-center cursor-default overflow-hidden"
              >
                {/* Hover background */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.08),transparent_70%)]" />

                {/* Icon */}
                <div className={`text-3xl bg-gradient-to-br ${color} bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-110`}>
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

        {/* Disclaimer */}
        <MotionWrapper className="text-center mt-10" delay={0.2}>
          <p className="text-sm text-gray-600">
            Not sure which tech is right for you?{' '}
            <a href="#contact" className="text-amber-400 hover:text-amber-300 transition-colors font-semibold">
              Ask our experts →
            </a>
          </p>
        </MotionWrapper>
      </div>
    </section>
  );
}

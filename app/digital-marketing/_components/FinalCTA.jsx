'use client';
import { motion } from 'framer-motion';
import MotionWrapper from '../../app-development/_components/MotionWrapper';

export default function FinalCTA() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0F0F18] overflow-hidden flex items-center justify-center">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.15),transparent_60%)] blur-3xl" />
        <div className="absolute inset-0 bg-[#050508]/40" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto rounded-[2rem] sm:rounded-[3rem] border border-amber-500/20 bg-[#0F0F18]/80 p-10 sm:p-16 lg:p-20 text-center backdrop-blur-xl shadow-2xl overflow-hidden">
        {/* Glow inside the card */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-amber-500/20 blur-[80px] rounded-full pointer-events-none" />

        <MotionWrapper>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
            Ready to Scale Your{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Business?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop guessing with your marketing budget. Get a data-driven strategy and watch your revenue grow.
          </p>
          
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 px-10 py-5 text-lg font-bold text-black shadow-lg shadow-amber-500/25 transition-all duration-300 hover:scale-[1.04] hover:shadow-amber-500/40"
          >
            Get a Free Marketing Audit
          </button>
        </MotionWrapper>
      </div>
    </section>
  );
}

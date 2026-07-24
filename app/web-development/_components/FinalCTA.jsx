'use client';
import { motion } from 'framer-motion';
import MotionWrapper from './MotionWrapper';

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050508] overflow-hidden"
    >
      <div className="relative max-w-5xl mx-auto">
        {/* Banner Card */}
        <div className="relative rounded-3xl border border-amber-400/20 bg-gradient-to-br from-[#0F0F18] via-[#13131F] to-[#050508] p-8 sm:p-14 text-center overflow-hidden">
          {/* Accent glow effect */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
          
          <MotionWrapper>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
              Ready to Build Your Website?
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
              Let's discuss your project today. Get premium development, unmatched support, and a high-converting digital experience.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#hero-form"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 px-8 py-4 text-base font-bold text-black shadow-lg shadow-amber-500/20 transition-all duration-300 hover:scale-[1.03]"
              >
                Book Free Consultation
              </a>
              <a
                href="tel:+917388100750"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-amber-400/8 hover:text-amber-300 hover:border-amber-400/30"
              >
                Call Now
              </a>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}

'use client';
import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowLeft, Phone, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThankYouPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-[#050508] text-white px-4 py-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="absolute -top-40 -left-40 w-[400px] h-[400px] rounded-full bg-orange-500/5 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(245,158,11,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-xl w-full text-center space-y-8">
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
          className="mx-auto w-20 h-20 bg-amber-400/10 rounded-3xl border border-amber-400/20 flex items-center justify-center shadow-lg shadow-amber-500/5"
        >
          <CheckCircle2 className="h-10 w-10 text-amber-400" />
        </motion.div>

        {/* Headline */}
        <div className="space-y-3">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent"
          >
            Thank You!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-gray-400 leading-relaxed max-w-md mx-auto"
          >
            Your project enquiry has been received successfully. Our technical team is reviewing your requirements and will reach out to you within the next 24 hours.
          </motion.p>
        </div>

        {/* Action Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-3xl border border-white/6 bg-white/[0.02] p-6 text-left space-y-4 backdrop-blur-sm"
        >
          <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400">Need Immediate Assistance?</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/917388100750"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 px-5 py-3 text-sm font-bold text-black shadow-md hover:scale-[1.02] transition-transform duration-200"
            >
              Chat on WhatsApp
            </a>
            <a
              href="tel:+917388100750"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-white/8 bg-white/4 px-5 py-3 text-sm font-semibold text-white hover:bg-white/8 hover:border-amber-400/20 transition-all duration-200"
            >
              <Phone className="h-4 w-4" />
              Call Support
            </a>
          </div>
        </motion.div>

        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Return to Homepage
          </Link>
        </motion.div>
      </div>
    </main>
  );
}

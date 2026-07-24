'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import MotionWrapper, { StaggerWrapper, StaggerItem } from '../../app-development/_components/MotionWrapper';

const faqs = [
  {
    question: 'How long does SEO take to show results?',
    answer: 'SEO is a long-term strategy. While technical fixes can show immediate improvements, it generally takes 3 to 6 months to see significant movement in organic rankings and traffic.',
  },
  {
    question: 'What is a good starting budget for Google Ads?',
    answer: 'We recommend starting with a minimum ad spend of ₹20,000 - ₹50,000 per month depending on your industry and competition. This gives the algorithms enough data to optimize your campaigns effectively.',
  },
  {
    question: 'How do you measure marketing success?',
    answer: 'We focus on metrics that impact your bottom line: Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), Lead Quality, and overall Revenue Growth. We provide transparent reports tracking these KPIs.',
  },
  {
    question: 'Do you guarantee leads or sales?',
    answer: 'While no agency can guarantee specific sales numbers due to market variables, we do guarantee a data-driven process, complete transparency, and relentless optimization to achieve the highest possible ROI.',
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border border-white/10 bg-white/[0.02] rounded-2xl overflow-hidden backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.04]">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 p-6 text-left"
      >
        <span className="text-base sm:text-lg font-bold text-white pr-8">
          {faq.question}
        </span>
        <div
          className={`flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300 ${
            isOpen ? 'bg-amber-400 text-black' : 'bg-white/10 text-gray-400'
          }`}
        >
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6 pt-0 text-sm sm:text-base text-gray-400 leading-relaxed border-t border-white/5 mt-2">
              <div className="pt-4">{faq.answer}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050508] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/15 to-transparent" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <MotionWrapper className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-3">
            Got Questions?
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
        </MotionWrapper>

        <StaggerWrapper className="space-y-4">
          {faqs.map((faq, index) => (
            <StaggerItem key={index}>
              <FAQItem
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            </StaggerItem>
          ))}
        </StaggerWrapper>
      </div>
    </section>
  );
}

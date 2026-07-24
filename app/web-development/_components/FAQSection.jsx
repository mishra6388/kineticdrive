'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import MotionWrapper, { StaggerWrapper, StaggerItem } from './MotionWrapper';

const faqs = [
  {
    q: 'How much does a website cost?',
    a: 'Website costs vary based on complexity, features, and design requirements. A standard business website starts from ₹15,000, an e-commerce store from ₹40,000, and custom web applications from ₹80,000+. We provide a detailed, transparent quote after understanding your specific requirements — no hidden charges.',
  },
  {
    q: 'How long does it take to build a website?',
    a: 'Timelines depend on the project scope. A landing page takes 3–5 business days, a business website takes 1–2 weeks, an e-commerce site takes 3–5 weeks, and a full custom web application takes 6–12 weeks. We always agree on a timeline upfront and stick to it.',
  },
  {
    q: 'Do you provide website maintenance after launch?',
    a: "Yes! We offer flexible monthly maintenance plans that include security updates, content changes, performance monitoring, bug fixes, and technical support. You can also opt for one-time maintenance tasks. We're here long after launch day.",
  },
  {
    q: 'What hosting platform do you recommend?',
    a: 'We recommend Vercel or Netlify for Next.js/React apps (extremely fast, globally distributed), AWS or DigitalOcean for backend-heavy applications, and cPanel hosting for simple websites. We handle the entire hosting setup, domain configuration, and SSL installation for you.',
  },
  {
    q: 'Will my website be SEO-friendly?',
    a: 'Absolutely. Every website we build is technically SEO-optimized from the ground up — semantic HTML, structured data (JSON-LD), meta tags, Open Graph, Core Web Vitals optimization, image compression, and sitemap generation. We also offer ongoing SEO services if you need them.',
  },
  {
    q: 'What kind of support do you offer post-launch?',
    a: 'We provide 30 days of free post-launch support to fix any bugs or issues. After that, we offer maintenance packages or hourly support as needed. You can reach us via WhatsApp, email, or phone — we typically respond within 2 hours during business hours.',
  },
  {
    q: 'Can you redesign my existing website?',
    a: 'Yes, website redesign is one of our core services. We\'ll audit your current site, identify UX issues, performance bottlenecks, and design problems, then rebuild it as a modern, fast, and high-converting website while preserving your SEO rankings where possible.',
  },
  {
    q: 'Do you work with businesses outside India?',
    a: 'Yes, we work with clients globally. We\'ve delivered projects for businesses in the US, UK, UAE, and Australia. Our team is comfortable with remote collaboration using tools like Slack, Notion, and Figma for seamless communication across time zones.',
  },
];

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        open
          ? 'border-amber-400/25 bg-amber-400/[0.03]'
          : 'border-white/6 bg-white/[0.02] hover:border-white/10'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
        id={`faq-${index}`}
      >
        <span className="text-base font-semibold text-white leading-snug">{q}</span>
        <span className={`flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 ${
          open ? 'bg-amber-400 text-black' : 'bg-white/8 text-gray-400'
        }`}>
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-sm text-gray-400 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0F0F18] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-amber-500/4 blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Header */}
        <MotionWrapper className="text-center mb-14">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know before starting your project.
          </p>
        </MotionWrapper>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>

        {/* Still have questions */}
        <MotionWrapper className="mt-12 text-center" delay={0.2}>
          <div className="rounded-2xl border border-white/6 bg-white/[0.02] px-8 py-7">
            <p className="text-base font-semibold text-white mb-1">Still have questions?</p>
            <p className="text-sm text-gray-400 mb-5">
              Our team is happy to answer any specific questions about your project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 px-6 py-3 text-sm font-bold text-black transition-all duration-300 hover:scale-[1.03]"
              >
                Ask Us Anything
              </a>
              <a
                href="https://wa.me/917388100750"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[#25D366]/30 bg-[#25D366]/8 px-6 py-3 text-sm font-semibold text-[#25D366] transition-all duration-300 hover:bg-[#25D366]/15"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}

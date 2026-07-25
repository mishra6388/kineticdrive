'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  { q: "How long does it take to build a website?", a: "A standard business website typically takes 2-4 weeks from design to launch. Complex ecommerce or custom portals may take 4-8 weeks depending on requirements." },
  { q: "Do you provide domain and hosting?", a: "Yes! We can manage domain registration and set up blazing-fast, secure cloud hosting for your website." },
  { q: "Will my website be mobile-friendly?", a: "Absolutely. We follow a Mobile-First approach. Your website will look and perform flawlessly on smartphones, tablets, and desktops." },
  { q: "Is SEO included in the website development?", a: "Yes, all our websites come with foundational On-Page SEO (meta tags, schema, fast load times, alt texts) to ensure you rank well on Google." },
  { q: "What technologies do you use?", a: "We use modern, scalable tech stacks including React, Next.js, Tailwind CSS, Node.js, and WordPress depending on your specific project needs." },
  { q: "Can I update the website content myself?", a: "Yes. For CMS-based websites (like WordPress) or custom Admin Panels, we provide a very easy-to-use backend so you can update text and images anytime." },
  { q: "Do you provide ecommerce solutions?", a: "Yes, we build robust, highly secure online stores with integrated payment gateways (Razorpay, Stripe) and inventory management." },
  { q: "What is the cost of a custom website?", a: "Our pricing starts at ₹14,999 for basic business sites. The final cost depends on the complexity, number of pages, and features required." },
  { q: "Do you offer ongoing support and maintenance?", a: "Yes, we offer lifetime support. We handle security updates, backups, and minor tweaks so you can focus on your business." },
  { q: "How do we get started?", a: "Simply fill out the contact form or call us directly. We'll discuss your requirements, provide a free quote, and start the design process." }
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-24 bg-gray-50" id="faqs">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2">Frequently Asked Questions</h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white border-blue-200 shadow-lg shadow-blue-900/5' : 'bg-white border-gray-200 hover:border-blue-300'}`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`font-bold pr-4 ${isOpen ? 'text-blue-600' : 'text-gray-900'}`}>
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                  )}
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed text-sm md:text-base border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Phone } from 'lucide-react';

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "₹14,999",
      desc: "Perfect for small businesses getting started online.",
      features: ["Responsive Design", "Basic SEO", "WhatsApp Integration", "Contact Form", "Standard Support"],
      isPopular: false
    },
    {
      name: "Professional",
      price: "₹29,999",
      desc: "Ideal for growing businesses needing more power.",
      features: ["Everything in Starter", "Advanced SEO Setup", "Admin Panel / CMS", "Performance Optimized", "Priority Support", "Google Ads Ready"],
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "For large scale applications and custom portals.",
      features: ["Full Custom Development", "ERP/CRM Integrations", "Advanced Security", "Dedicated Server Setup", "24/7 Premium Support"],
      isPopular: false
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">Transparent Pricing</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2">Simple, Fixed Pricing</h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative bg-white rounded-3xl p-8 flex flex-col h-full ${
                plan.isPopular 
                  ? 'border-2 border-blue-600 shadow-2xl shadow-blue-900/10 scale-105 z-10' 
                  : 'border border-gray-100 shadow-xl shadow-gray-200/50'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-md">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-500">{plan.desc}</p>
              </div>
              
              <div className="mb-8">
                <span className="text-4xl font-black text-gray-900">{plan.price}</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feat, fidx) => (
                  <li key={fidx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.isPopular ? 'text-blue-600' : 'text-gray-400'}`} />
                    <span className="text-sm text-gray-700 font-medium">{feat}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="https://wa.me/7388100850?text=Hi,%20I%20am%20looking%20for%20website%20development%20services."
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all ${
                  plan.isPopular 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20' 
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-900 border border-gray-200'
                }`}
              >
                <Phone className="w-4 h-4" />
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

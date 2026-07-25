'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function TrustSection() {
  const stats = [
    { label: "Projects Completed", value: "100+" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "Support", value: "24/7" },
    { label: "Years Experience", value: "5+" }
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="w-full md:w-1/3">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Trusted By</p>
            <h3 className="text-2xl font-bold text-gray-900">
              Startups, Businesses & Local Brands
            </h3>
          </div>

          <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="text-center md:text-left"
              >
                <div className="text-3xl md:text-4xl font-black text-blue-600 mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

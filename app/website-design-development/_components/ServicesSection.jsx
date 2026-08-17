'use client';
import React from 'react';
import { LayoutTemplate, MonitorSmartphone, Activity, Building2, GraduationCap, HeartHandshake, Sparkles, Database, ShieldCheck, ShoppingCart, CalendarCheck, MousePointerClick } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  { icon: <MonitorSmartphone />, title: 'Business Websites', desc: 'Professional corporate websites to establish authority.' },
  { icon: <ShoppingCart />, title: 'Ecommerce Website', desc: 'High-converting online stores with secure payments.' },
  { icon: <LayoutTemplate />, title: 'Landing Pages', desc: 'Fast, focused pages designed specifically for lead generation.' },
  { icon: <Activity />, title: 'Hospital Website', desc: 'Compliant, easy-to-navigate portals for healthcare.' },
  { icon: <GraduationCap />, title: 'School Website', desc: 'Informative platforms for educational institutions.' },
  { icon: <HeartHandshake />, title: 'NGO Website', desc: 'Trust-building sites to drive donations and awareness.' },
  { icon: <Sparkles />, title: 'Astrology Website', desc: 'Specialized portals with booking and consultation features.' },
  { icon: <Database />, title: 'ERP Dashboard', desc: 'Custom enterprise resource planning web applications.' },
  { icon: <ShieldCheck />, title: 'Admin Panel', desc: 'Secure backend dashboards to manage your business.' },
  { icon: <CalendarCheck />, title: 'Booking Website', desc: 'Automated appointment and reservation systems.' },
  { icon: <MousePointerClick />, title: 'Google Ads Landing Pages', desc: 'Ultra-fast pages synced perfectly with your ad copy.' }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-[#050508]" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-amber-500 uppercase tracking-widest">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">Website Development Services</h2>
          <div className="w-24 h-1.5 bg-amber-500 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="bg-[#0F0F18] border border-white/10 hover:border-amber-500/50 p-6 rounded-2xl group transition-all hover:bg-[#13131F] hover:shadow-xl hover:shadow-amber-500/5 cursor-default"
            >
              <div className="w-12 h-12 bg-[#13131F] rounded-xl shadow-sm border border-white/10 flex items-center justify-center text-amber-500 mb-4 group-hover:scale-110 transition-transform group-hover:bg-amber-500 group-hover:text-black">
                {React.cloneElement(srv.icon, { className: "w-6 h-6" })}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{srv.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

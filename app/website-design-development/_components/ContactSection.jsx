'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Phone, Mail, MapPin, Clock, Loader2, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: 'Website Development',
    website_type: 'Business Website',
    budget: 'Under ₹25,000',
    requirements: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const payload = {
        ...formData,
        source: 'Website Development Contact Form',
        status: 'New',
        utm_source: searchParams.get('utm_source') || null,
        utm_medium: searchParams.get('utm_medium') || null,
        utm_campaign: searchParams.get('utm_campaign') || searchParams.get('campaign') || null,
        utm_term: searchParams.get('utm_term') || null,
        utm_content: searchParams.get('utm_content') || null,
        gclid: searchParams.get('gclid') || null,
      };

      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to submit form');
      }

      // Record submission and redirect
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('kd_lead_submitted', 'true');
      }
      router.push('/thank-you');
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-[#050508] relative overflow-hidden" id="contact">
      {/* Background Decor */}
      <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none opacity-70" />
      <div className="absolute -bottom-[20%] -right-[10%] w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none opacity-70" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="text-sm font-bold text-amber-500 uppercase tracking-widest">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mt-2 leading-tight">
                Let's Build Your Dream Website
              </h2>
              <div className="w-20 h-1.5 bg-amber-500 mt-6 rounded-full" />
              <p className="text-gray-400 text-lg mt-6 leading-relaxed max-w-md">
                Whether you need a simple business website or a complex ecommerce platform, our experts are ready to assist you.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0F0F18] rounded-2xl flex items-center justify-center text-amber-500 shrink-0 shadow-sm border border-white/10">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Call Us</p>
                  <a href="tel:7388100850" className="text-xl font-bold text-white hover:text-amber-500 transition-colors">
                    +91 73881 00850
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0F0F18] rounded-2xl flex items-center justify-center text-amber-500 shrink-0 shadow-sm border border-white/10">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Email Us</p>
                  <a href="mailto:info@kineticdrive.in" className="text-xl font-bold text-white hover:text-amber-500 transition-colors">
                    info@kineticdrive.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0F0F18] rounded-2xl flex items-center justify-center text-amber-500 shrink-0 shadow-sm border border-white/10">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Office Address</p>
                  <p className="text-lg font-semibold text-white">
                    15/12A, First floor, Thornhill Road Dayanand Marg, Ashok Nagar, Prayagraj, India-211001
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0F0F18] rounded-2xl flex items-center justify-center text-amber-500 shrink-0 shadow-sm border border-white/10">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Business Hours</p>
                  <p className="text-lg font-semibold text-white">
                   Mon–Sat: 10 AM – 6 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Glassmorphism Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[#0F0F18]/90 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden">
              {/* Form decor */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-transparent opacity-50 blur-2xl" />
              
              <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Request a Free Quote</h3>

              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Name *</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-[#13131F] border border-white/10 px-4 py-3.5 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Phone *</label>
                    <input 
                      required
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-[#13131F] border border-white/10 px-4 py-3.5 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Email</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-[#13131F] border border-white/10 px-4 py-3.5 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Company</label>
                    <input 
                      type="text" 
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full bg-[#13131F] border border-white/10 px-4 py-3.5 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Website Type</label>
                    <select
                      value={formData.website_type}
                      onChange={(e) => setFormData({...formData, website_type: e.target.value})}
                      className="w-full bg-[#13131F] border border-white/10 px-4 py-3.5 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all appearance-none text-white"
                    >
                      <option>Business Website</option>
                      <option>Ecommerce Website</option>
                      <option>Hospital/Clinic Website</option>
                      <option>School/College Website</option>
                      <option>Landing Page</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Budget</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      className="w-full bg-[#13131F] border border-white/10 px-4 py-3.5 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all appearance-none text-white"
                    >
                      <option>Under ₹25,000</option>
                      <option>₹25,000 - ₹50,000</option>
                      <option>₹50,000 - ₹1,00,000</option>
                      <option>Above ₹1,00,000</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Project Requirements</label>
                  <textarea 
                    rows={3}
                    value={formData.requirements}
                    onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                    className="w-full bg-[#13131F] border border-white/10 px-4 py-3.5 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all resize-none text-white placeholder-gray-500"
                    placeholder="Briefly describe what you need..."
                  />
                </div>

                {error && <p className="text-red-400 text-sm font-medium">{error}</p>}

                <button 
                  disabled={loading}
                  type="submit" 
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-amber-500/20 hover:-translate-y-1 mt-2 flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Submit Request'}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

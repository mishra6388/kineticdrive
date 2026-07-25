'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Check, ArrowRight, ShieldCheck, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    service: 'Business Website'
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
        source: 'Website Development Landing Page',
        status: 'New'
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative pt-20 pb-16 lg:pt-24 lg:pb-24 overflow-hidden bg-gray-50">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-100 rounded-bl-[100px] opacity-50 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-50 rounded-tr-[100px] opacity-50 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
              <ShieldCheck className="w-4 h-4" />
              Professional Website Development Company
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight">
              Build High-Converting <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Websites
              </span> That Grow Your Business
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Create stunning, responsive, SEO-friendly business websites that convert visitors into customers.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 hover:scale-105 flex items-center gap-2">
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#portfolio" className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-4 rounded-xl font-bold transition-all shadow-sm hover:shadow">
                View Portfolio
              </a>
            </div>

            <div className="pt-6 grid grid-cols-2 gap-4">
              {['Responsive Design', 'SEO Friendly', 'Fast Loading', 'Mobile Optimized', 'Lifetime Support'].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="bg-green-100 rounded-full p-1 shrink-0">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column (Form) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
            id="contact"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 transform rotate-3 rounded-3xl opacity-20 blur-lg" />
            <div className="bg-white/80 backdrop-blur-xl border border-white p-8 rounded-3xl shadow-2xl relative">
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Request a Free Quote</h3>
                <p className="text-gray-500 mt-2 text-sm">Fill out the form and our expert will contact you shortly.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number *</label>
                    <input 
                      required
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      placeholder="+91 9876543210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Business Name (Optional)</label>
                    <input 
                      type="text" 
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      placeholder="Your Company Pvt Ltd"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Website Type *</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    >
                      <option value="Business Website">Business Website</option>
                      <option value="Ecommerce Website">Ecommerce Website</option>
                      <option value="Landing Page">Landing Page</option>
                      <option value="Hospital/Clinic Website">Hospital/Clinic Website</option>
                      <option value="School/College Website">School/College Website</option>
                      <option value="NGO Website">NGO Website</option>
                      <option value="Other">Other Custom Requirement</option>
                    </select>
                  </div>

                  {error && <p className="text-red-500 text-sm">{error}</p>}

                  <button 
                    disabled={loading}
                    type="submit" 
                    className="w-full bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-gray-900/20 hover:scale-[1.02] mt-4 flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100"
                  >
                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Request Free Quote'}
                  </button>
                </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

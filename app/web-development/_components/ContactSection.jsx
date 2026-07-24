'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import { Phone, ArrowRight } from 'lucide-react';
import MotionWrapper from './MotionWrapper';

import { useRouter } from 'next/navigation';

export default function ContactSection() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website_type: 'Business Website',
    budget: 'Below ₹25,000',
    requirements: '',
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const validatePhone = (v) => {
    return /^[6-9]\d{9}$/.test(v.trim());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim()) {
      setErrorMsg('Full Name is required.');
      return;
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setErrorMsg('A valid Email is required.');
      return;
    }
    if (!validatePhone(formData.phone)) {
      setErrorMsg('A valid 10-digit Phone number is required.');
      return;
    }

    setStatus('submitting');

    try {
      if (!supabase) {
        throw new Error('Supabase client is not initialized.');
      }

      const { error } = await supabase.from('leads').insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: 'Web Development',
          website_type: formData.website_type,
          budget: formData.budget,
          requirements: formData.requirements,
          source: 'Website',
          status: 'New',
        },
      ]);

      if (error) throw error;

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        website_type: 'Business Website',
        budget: 'Below ₹25,000',
        requirements: '',
      });
      router.push('/thank-you');
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050508] overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/15 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-amber-500/5 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column Info */}
          <div className="lg:col-span-5 space-y-6">
            <MotionWrapper>
              <p className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-3">
                Let's Partner Up
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
                Ready to Build Your{' '}
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Digital Future?
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Fill out the form to request a consultation. Our team will analyze your requirements and get back to you with a tailor-made proposal.
              </p>

              <div className="space-y-4">
                <a
                  href="https://wa.me/917388100750"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center sm:justify-start gap-3 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/5 px-6 py-4 text-[#25D366] transition-all duration-300 hover:bg-[#25D366]/10 w-full"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span className="font-bold">Chat on WhatsApp</span>
                </a>
              </div>
            </MotionWrapper>
          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-7 w-full">
            <div className="rounded-3xl border border-white/8 bg-[#0F0F18] p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-400" />
              
              <h3 className="text-2xl font-bold text-white mb-6">Let's Discuss Your Project</h3>

              {status === 'success' ? (
                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center space-y-4">
                  <div className="mx-auto w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center">
                    <svg className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-white">Enquiry Submitted!</h4>
                  <p className="text-sm text-gray-400">Thank you! Our team will contact you shortly.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    Submit another response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5" htmlFor="name">
                        Full Name <span className="text-amber-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-white/6 bg-white/[0.03] px-4 py-3.5 text-white placeholder-gray-600 outline-none focus:border-amber-400/40 focus:ring-1 focus:ring-amber-400/40 transition"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5" htmlFor="email">
                        Email Address <span className="text-amber-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-white/6 bg-white/[0.03] px-4 py-3.5 text-white placeholder-gray-600 outline-none focus:border-amber-400/40 focus:ring-1 focus:ring-amber-400/40 transition"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5" htmlFor="phone">
                        Phone <span className="text-amber-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                        className="w-full rounded-xl border border-white/6 bg-white/[0.03] px-4 py-3.5 text-white placeholder-gray-600 outline-none focus:border-amber-400/40 focus:ring-1 focus:ring-amber-400/40 transition"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5" htmlFor="company">
                        Company Name
                      </label>
                      <input
                        id="company"
                        type="text"
                        placeholder="e.g. Acme Corp"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full rounded-xl border border-white/6 bg-white/[0.03] px-4 py-3.5 text-white placeholder-gray-600 outline-none focus:border-amber-400/40 focus:ring-1 focus:ring-amber-400/40 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5" htmlFor="website_type">
                        Website Type
                      </label>
                      <select
                        id="website_type"
                        value={formData.website_type}
                        onChange={(e) => setFormData({ ...formData, website_type: e.target.value })}
                        className="w-full rounded-xl border border-white/6 bg-[#13131F] px-4 py-3.5 text-white outline-none focus:border-amber-400/40 focus:ring-1 focus:ring-amber-400/40 transition appearance-none"
                      >
                        <option value="Business Website">Business Website</option>
                        <option value="Corporate Website">Corporate Website</option>
                        <option value="Portfolio Website">Portfolio Website</option>
                        <option value="Hospital Website">Hospital Website</option>
                        <option value="School ERP">School ERP</option>
                        <option value="E-Commerce Website">E-Commerce Website</option>
                        <option value="Landing Page">Landing Page</option>
                        <option value="Custom Web Application">Custom Web Application</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5" htmlFor="budget">
                        Budget
                      </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full rounded-xl border border-white/6 bg-[#13131F] px-4 py-3.5 text-white outline-none focus:border-amber-400/40 focus:ring-1 focus:ring-amber-400/40 transition appearance-none"
                      >
                        <option value="Below ₹25,000">Below ₹25,000</option>
                        <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000</option>
                        <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000</option>
                        <option value="Above ₹1,00,000">Above ₹1,00,000</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5" htmlFor="requirements">
                      Project Requirements
                    </label>
                    <textarea
                      id="requirements"
                      rows={3}
                      placeholder="Briefly describe what you are looking for..."
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      className="w-full rounded-xl border border-white/6 bg-white/[0.03] px-4 py-3.5 text-white placeholder-gray-600 outline-none focus:border-amber-400/40 focus:ring-1 focus:ring-amber-400/40 transition resize-none"
                    />
                  </div>

                  {errorMsg && (
                    <p className="text-sm font-semibold text-rose-500 text-center" role="alert">
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full mt-2 group relative flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 px-6 py-4 text-base font-bold text-black transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-500/25 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Get Free Consultation'}
                    {status !== 'submitting' && (
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

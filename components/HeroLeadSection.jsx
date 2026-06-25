'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HeroLeadSection() {
  const [formData, setFormData] = useState({
    phone: '',
    website: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong. Please try again.');
      }

      setFormData({ phone: '', website: '' });
      setSubmitted(true);
    } catch (error) {
      setErrorMessage(error.message || 'Unable to send your enquiry right now.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#0b1020] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.08),transparent_18%)]" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
          {/* Left content */}
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center rounded-full border border-amber-400/20 bg-amber-400/5 px-4 py-2 text-sm font-medium text-amber-200">
              Let’s grow together
            </span>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Ready to build something <span className="text-amber-300">remarkable?</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              Share your goals and we’ll get back with the right strategy, timeline, and pricing for your business.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="h-5 w-5 text-amber-300" />
                <span>kcabdigital@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <PhoneCall className="h-5 w-5 text-amber-300" />
                <span>+91 9355520030</span>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-6 sm:p-8">
            {submitted ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-14 w-14 text-emerald-400" />
                <h3 className="mt-4 text-2xl font-semibold text-white">Thank you for reaching out!</h3>
                <p className="mt-2 text-slate-300">Your details are ready to be sent to our team.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-slate-300">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-slate-300">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">Service Needed</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20"
                  >
                    <option value="">Select a service</option>
                    {services.map((item) => (
                      <option key={item} value={item} className="bg-slate-950">
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">Project Details</label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20"
                    placeholder="Tell us about your project, timeline, and goals..."
                  />
                </div>

                {errorMessage && (
                  <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 px-6 py-3.5 text-base font-semibold text-slate-950 transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:shadow-amber-500/20 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitting ? 'Sending...' : 'Send Inquiry'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

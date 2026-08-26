'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const NICHES = [
  'Fashion', 'Beauty', 'Fitness', 'Travel', 'Food', 'Technology',
  'Education', 'Finance', 'Lifestyle', 'Gaming', 'Entertainment', 'Business', 'Other',
];

const initialForm = {
  name: '',
  phone: '',
  address: '',
  niche: '',
  facebook_url: '',
  instagram_url: '',
  youtube_url: '',
  youtube_followers: '',
};

function isValidUrl(str) {
  try {
    const url = new URL(str);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

function isValidPhone(str) {
  return /^[+]?[\d\s\-()]{7,15}$/.test(str.trim());
}

export default function InfluencerRegistrationForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [apiError, setApiError] = useState('');

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.phone.trim()) errs.phone = 'Phone number is required';
    else if (!isValidPhone(form.phone)) errs.phone = 'Enter a valid phone number';
    if (!form.address.trim()) errs.address = 'Address is required';
    if (!form.niche) errs.niche = 'Please select a niche';
    if (!form.facebook_url.trim()) errs.facebook_url = 'Facebook link is required';
    else if (!isValidUrl(form.facebook_url)) errs.facebook_url = 'Enter a valid URL';
    if (!form.instagram_url.trim()) errs.instagram_url = 'Instagram link is required';
    else if (!isValidUrl(form.instagram_url)) errs.instagram_url = 'Enter a valid URL';
    if (!form.youtube_url.trim()) errs.youtube_url = 'YouTube link is required';
    else if (!isValidUrl(form.youtube_url)) errs.youtube_url = 'Enter a valid URL';
    if (!form.youtube_followers.trim()) errs.youtube_followers = 'YouTube followers count is required';
    return errs;
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => { const n = { ...prev }; delete n[field]; return n; });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/influencers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Registration failed');
      setSuccess(true);
    } catch (err) {
      setApiError(err.message);
    } finally {
      setLoading(false);
    }
  };

  /* ───── Success State ───── */
  if (success) {
    return (
      <section
        id="register"
        className="relative py-20 lg:py-28 overflow-hidden border-t"
        style={{ background: 'var(--bg-base)', borderColor: 'var(--border)' }}
      >
        <div className="max-w-xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl p-10 border"
            style={{ background: 'var(--bg-surface)', borderColor: 'var(--border)' }}
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(34,197,94,0.1)' }}>
              <CheckCircle2 className="w-8 h-8 text-green-500" />
            </div>
            <h2 className="text-2xl font-black mb-3" style={{ color: 'var(--text-primary)' }}>
              You're Registered!
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
              Thank you for registering with KineticDrive. Our team will review your profile and contact you if there is a suitable next step or collaboration opportunity.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold transition-all hover:scale-105"
              style={{ background: 'linear-gradient(to right, #F59E0B, #F97316)', color: '#000' }}
            >
              Back to KineticDrive
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }

  /* ───── Form ───── */
  const inputCls = (field) =>
    `w-full rounded-xl px-4 py-3 text-sm outline-none transition-all placeholder-gray-600 ${
      errors[field]
        ? 'border-red-500/60 focus:border-red-500'
        : 'border-white/7 focus:border-amber-500/50'
    }`;

  const inputStyle = { background: 'var(--bg-card)', color: 'var(--text-primary)', border: '1px solid' };

  return (
    <section
      id="register"
      className="relative py-20 lg:py-28 overflow-hidden border-t"
      style={{ background: 'var(--bg-base)', borderColor: 'var(--border)' }}
    >
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — Image + Trust */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#FBBF24' }}>
                Creator Registration
              </p>
              <h2 className="text-3xl md:text-4xl font-black leading-tight" style={{ color: 'var(--text-primary)' }}>
                Join the KineticDrive{' '}
                <span className="gradient-text">Creator Network</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Tell us about yourself and your creator presence. Our team will review your profile and get in touch if there is a suitable opportunity or next step.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden border" style={{ borderColor: 'var(--border)' }}>
              <img
                src="/footer-influencers.png"
                alt="Join the KineticDrive Creator Network"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl border" style={{ background: 'var(--bg-surface)', borderColor: 'var(--border)' }}>
              <ShieldCheck className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#FBBF24' }} />
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Your information is used only to review your creator profile and communicate relevant KineticDrive opportunities.
              </p>
            </div>
          </div>

          {/* Right — Form */}
          <div className="rounded-3xl p-7 sm:p-9 border" style={{ background: 'var(--bg-surface)', borderColor: 'var(--border)' }}>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={inputCls('name')}
                  style={{ ...inputStyle, borderColor: errors.name ? 'rgba(239,68,68,0.6)' : 'var(--border)' }}
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className={inputCls('phone')}
                  style={{ ...inputStyle, borderColor: errors.phone ? 'rgba(239,68,68,0.6)' : 'var(--border)' }}
                  placeholder="+91 9876543210"
                />
                {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                  Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={2}
                  value={form.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                  className={`${inputCls('address')} resize-none`}
                  style={{ ...inputStyle, borderColor: errors.address ? 'rgba(239,68,68,0.6)' : 'var(--border)' }}
                  placeholder="City, state and address"
                />
                {errors.address && <p className="text-xs text-red-400 mt-1">{errors.address}</p>}
              </div>

              {/* Niche */}
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                  Niche <span className="text-red-500">*</span>
                </label>
                <select
                  value={form.niche}
                  onChange={(e) => handleChange('niche', e.target.value)}
                  className={inputCls('niche')}
                  style={{ ...inputStyle, borderColor: errors.niche ? 'rgba(239,68,68,0.6)' : 'var(--border)' }}
                >
                  <option value="" disabled>Select your niche</option>
                  {NICHES.map((n) => (
                    <option key={n} value={n} className="bg-[#13131F] text-white">{n}</option>
                  ))}
                </select>
                {errors.niche && <p className="text-xs text-red-400 mt-1">{errors.niche}</p>}
              </div>

              {/* Facebook */}
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                  Facebook Link <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  value={form.facebook_url}
                  onChange={(e) => handleChange('facebook_url', e.target.value)}
                  className={inputCls('facebook_url')}
                  style={{ ...inputStyle, borderColor: errors.facebook_url ? 'rgba(239,68,68,0.6)' : 'var(--border)' }}
                  placeholder="https://facebook.com/yourpage"
                />
                {errors.facebook_url && <p className="text-xs text-red-400 mt-1">{errors.facebook_url}</p>}
              </div>

              {/* Instagram */}
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                  Instagram Link <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  value={form.instagram_url}
                  onChange={(e) => handleChange('instagram_url', e.target.value)}
                  className={inputCls('instagram_url')}
                  style={{ ...inputStyle, borderColor: errors.instagram_url ? 'rgba(239,68,68,0.6)' : 'var(--border)' }}
                  placeholder="https://instagram.com/yourprofile"
                />
                {errors.instagram_url && <p className="text-xs text-red-400 mt-1">{errors.instagram_url}</p>}
              </div>

              {/* YouTube */}
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                  YouTube Link <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  value={form.youtube_url}
                  onChange={(e) => handleChange('youtube_url', e.target.value)}
                  className={inputCls('youtube_url')}
                  style={{ ...inputStyle, borderColor: errors.youtube_url ? 'rgba(239,68,68,0.6)' : 'var(--border)' }}
                  placeholder="https://youtube.com/@yourchannel"
                />
                {errors.youtube_url && <p className="text-xs text-red-400 mt-1">{errors.youtube_url}</p>}
              </div>

              {/* YouTube Followers */}
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                  YouTube Followers / Subscribers <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={form.youtube_followers}
                  onChange={(e) => handleChange('youtube_followers', e.target.value)}
                  className={inputCls('youtube_followers')}
                  style={{ ...inputStyle, borderColor: errors.youtube_followers ? 'rgba(239,68,68,0.6)' : 'var(--border)' }}
                  placeholder="e.g. 10.5K, 1M, 500"
                />
                {errors.youtube_followers && <p className="text-xs text-red-400 mt-1">{errors.youtube_followers}</p>}
              </div>

              {/* API error */}
              {apiError && (
                <div className="p-3 rounded-xl text-sm text-red-400" style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
                  {apiError}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
                style={{ background: 'linear-gradient(to right, #F59E0B, #F97316)', color: '#000', boxShadow: '0 10px 30px -5px rgba(245,158,11,0.2)' }}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Register With KineticDrive
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

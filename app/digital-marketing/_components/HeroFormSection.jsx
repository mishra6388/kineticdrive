'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Check, TrendingUp, Search, Megaphone, BarChart3, Phone } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const highlights = [
  { icon: Search,     text: 'Google & Meta Ads' },
  { icon: TrendingUp, text: 'Qualified Leads' },
  { icon: Megaphone,  text: 'Brand Visibility' },
  { icon: BarChart3,  text: 'Measurable ROI' },
];

export default function HeroFormSection() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    marketing_service: 'Complete Digital Marketing',
    budget: 'Below ₹20,000',
    business_goals: '',
  });
  const [status, setStatus]  = useState('idle');
  const [errorMsg, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!formData.name.trim())                         { setError('Full Name is required.'); return; }
    if (!/^\S+@\S+\.\S+$/.test(formData.email))        { setError('A valid Email is required.'); return; }
    if (!/^[6-9]\d{9}$/.test(formData.phone.trim()))   { setError('Enter a valid 10-digit Indian mobile number.'); return; }

    setStatus('submitting');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name, email: formData.email, phone: formData.phone,
          company: formData.company, service: 'Digital Marketing',
          website_type: formData.marketing_service, budget: formData.budget,
          requirements: formData.website
            ? `Website: ${formData.website}\n\nGoals: ${formData.business_goals}`
            : formData.business_goals,
          source: 'Website', status: 'New',
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit.');
      router.push('/thank-you');
    } catch (err) {
      setStatus('error');
      setError(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section className="relative min-h-screen bg-[#050508] overflow-hidden flex flex-col">

      {/* ── Identity strip ── */}
      <div className="relative z-20 w-full border-b border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="KineticDrive" width={32} height={32} priority className="h-8 w-auto object-contain" />
            <span className="text-sm font-bold text-white tracking-tight">
              Kinetic<span className="text-amber-400">Drive</span>
            </span>
          </div>
          <a href="tel:+917388100750"
            className="flex items-center gap-1.5 rounded-full border border-amber-400/25 bg-amber-400/8 px-3 py-1.5 text-xs font-semibold text-amber-300 transition-colors hover:bg-amber-400/15"
          >
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Call Now</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </div>

      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.022]" style={{
          backgroundImage: 'linear-gradient(rgba(245,158,11,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }} />
        <motion.div className="absolute -top-56 -left-32 w-[700px] h-[700px] rounded-full bg-amber-500/[0.09] blur-3xl"
          animate={{ scale: [1,1.12,1], opacity:[0.6,1,0.6] }} transition={{ duration:9, repeat:Infinity, ease:'easeInOut' }} />
        <motion.div className="absolute -bottom-40 right-0 w-[600px] h-[600px] rounded-full bg-orange-400/[0.06] blur-3xl"
          animate={{ scale: [1,1.15,1], opacity:[0.4,0.8,0.4] }} transition={{ duration:11, repeat:Infinity, ease:'easeInOut', delay:3 }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(245,158,11,0.08),transparent)]" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-0 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_520px] gap-8 xl:gap-20 items-center w-full lg:py-16">

          {/* ════ LEFT ════ */}
          <div className="text-left order-2 lg:order-1">

            <motion.div initial={{ opacity:0, y:-14 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-gradient-to-r from-amber-400/10 to-orange-400/5 px-4 py-2 mb-6 backdrop-blur-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400" />
              </span>
              <span className="text-xs font-bold text-amber-300 tracking-widest uppercase">
                🏆 #1 Digital Marketing Agency
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.75, delay:0.08, ease:[0.22,1,0.36,1] }}
              className="text-4xl sm:text-5xl xl:text-[3.6rem] font-black tracking-tight text-white leading-[1.08] mb-5"
            >
              Grow Your Business<br />
              <span className="relative inline-block mt-1">
                <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
                  with Digital Marketing
                </span>
                <motion.span
                  initial={{ scaleX:0 }} animate={{ scaleX:1 }} transition={{ duration:0.8, delay:0.75 }}
                  className="absolute -bottom-1 left-0 right-0 h-[3px] origin-left rounded-full bg-gradient-to-r from-amber-400 to-orange-500 opacity-50"
                />
              </span>
            </motion.h1>

            <motion.p initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.65, delay:0.2 }}
              className="text-base sm:text-lg text-gray-400 leading-relaxed mb-7 max-w-[520px]"
            >
              We help businesses generate qualified leads, increase brand visibility and maximize
              ROI using Google Ads, Meta Ads, SEO and Performance Marketing.
            </motion.p>

            <motion.div initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.28 }}
              className="grid grid-cols-2 gap-3 mb-8 max-w-[440px]"
            >
              {highlights.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 rounded-xl border border-white/6 bg-white/[0.03] px-4 py-3 backdrop-blur-sm transition-colors hover:border-amber-400/20">
                  <div className="h-8 w-8 rounded-lg bg-amber-400/12 flex items-center justify-center flex-shrink-0 ring-1 ring-amber-400/20">
                    <Icon className="h-4 w-4 text-amber-400" />
                  </div>
                  <span className="text-sm font-semibold text-gray-300 leading-tight">{text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.5, delay:0.38 }}
              className="flex flex-wrap items-center gap-4"
            >
              <div className="flex -space-x-2">
                {['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop',
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop',
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop',
                ].map((src, i) => (
                  <img key={i} src={src} alt="" className="h-9 w-9 rounded-full border-2 border-[#050508] object-cover" />
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_,i) => <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-xs text-gray-500 font-medium">
                  <span className="text-white font-bold">50+ Businesses</span> scaled with KineticDrive
                </p>
              </div>
            </motion.div>
          </div>

          {/* ════ RIGHT: Form ════ */}
          <motion.div
            initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:0.2 }}
            className="order-1 lg:order-2 w-full"
            id="hero-form"
          >
            <div className="relative">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-amber-400/30 via-transparent to-orange-500/20 blur-sm opacity-60" />

              <div className="relative rounded-2xl border border-white/10 bg-[#0C0C15]/95 backdrop-blur-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
                <div className="h-1 w-full bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-500" />

                <div className="p-6 sm:p-7">
                  {/* Mobile trust row */}
                  <div className="flex lg:hidden items-center gap-2 mb-4 pb-4 border-b border-white/5">
                    <div className="flex -space-x-1.5">
                      {['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop',
                        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop',
                      ].map((src, i) => (
                        <img key={i} src={src} alt="" className="h-6 w-6 rounded-full border-2 border-[#0C0C15] object-cover" />
                      ))}
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_,i) => <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />)}
                    </div>
                    <span className="text-[11px] text-gray-500 font-medium">
                      <span className="text-white font-bold">50+ Clients</span> across India
                    </span>
                  </div>

                  <div className="mb-5">
                    <h2 className="text-[1.35rem] font-bold text-white">Get a Free Marketing Audit</h2>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      Fill in your details — our experts will call you within <span className="text-amber-400 font-semibold">24 hours</span>.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    {/* Name + Email */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5" htmlFor="dm-name">
                          Full Name <span className="text-amber-500">*</span>
                        </label>
                        <input id="dm-name" type="text" placeholder="John Doe"
                          value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                          className="w-full rounded-lg border border-white/8 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white placeholder-gray-700 outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/25 transition-all duration-200"
                          required />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5" htmlFor="dm-email">
                          Email <span className="text-amber-500">*</span>
                        </label>
                        <input id="dm-email" type="email" placeholder="you@example.com"
                          value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                          className="w-full rounded-lg border border-white/8 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white placeholder-gray-700 outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/25 transition-all duration-200"
                          required />
                      </div>
                    </div>

                    {/* Phone + Company */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5" htmlFor="dm-phone">
                          Phone <span className="text-amber-500">*</span>
                        </label>
                        <input id="dm-phone" type="tel" placeholder="9876543210"
                          value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value.replace(/\D/g,'').slice(0,10)})}
                          className="w-full rounded-lg border border-white/8 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white placeholder-gray-700 outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/25 transition-all duration-200"
                          required />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5" htmlFor="dm-company">
                          Company
                        </label>
                        <input id="dm-company" type="text" placeholder="Acme Corp"
                          value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})}
                          className="w-full rounded-lg border border-white/8 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white placeholder-gray-700 outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/25 transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Website + Service */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5" htmlFor="dm-website">
                          Website URL
                        </label>
                        <input id="dm-website" type="url" placeholder="https://yoursite.com"
                          value={formData.website} onChange={e => setFormData({...formData, website: e.target.value})}
                          className="w-full rounded-lg border border-white/8 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white placeholder-gray-700 outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/25 transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5" htmlFor="dm-service">
                          Service Needed
                        </label>
                        <select id="dm-service" value={formData.marketing_service} onChange={e => setFormData({...formData, marketing_service: e.target.value})}
                          className="w-full rounded-lg border border-white/8 bg-[#111120] px-3.5 py-2.5 text-sm text-white outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/25 transition-all appearance-none cursor-pointer">
                          <option>Complete Digital Marketing</option>
                          <option>Google Ads</option>
                          <option>Meta Ads</option>
                          <option>SEO</option>
                          <option>Local SEO</option>
                          <option>Social Media Marketing</option>
                          <option>Performance Marketing</option>
                          <option>Content Marketing</option>
                        </select>
                      </div>
                    </div>

                    {/* Budget + Goals */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5" htmlFor="dm-budget">
                          Monthly Budget
                        </label>
                        <select id="dm-budget" value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})}
                          className="w-full rounded-lg border border-white/8 bg-[#111120] px-3.5 py-2.5 text-sm text-white outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/25 transition-all appearance-none cursor-pointer">
                          <option>Below ₹20,000</option>
                          <option>₹20,000 – ₹50,000</option>
                          <option>₹50,000 – ₹1,00,000</option>
                          <option>Above ₹1,00,000</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5" htmlFor="dm-goals">
                          Business Goals
                        </label>
                        <input id="dm-goals" type="text" placeholder="e.g. More leads, brand awareness"
                          value={formData.business_goals} onChange={e => setFormData({...formData, business_goals: e.target.value})}
                          className="w-full rounded-lg border border-white/8 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white placeholder-gray-700 outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/25 transition-all duration-200"
                        />
                      </div>
                    </div>

                    {errorMsg && (
                      <p className="text-xs font-semibold text-rose-400 text-center bg-rose-500/8 border border-rose-500/20 rounded-lg py-2 px-3" role="alert">
                        ⚠️ {errorMsg}
                      </p>
                    )}

                    <button type="submit" disabled={status === 'submitting'}
                      className="relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3.5 text-[15px] font-black text-black transition-all duration-300 hover:shadow-[0_8px_32px_rgba(245,158,11,0.4)] hover:scale-[1.02] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed group"
                    >
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                      <span className="relative flex items-center justify-center gap-2">
                        {status === 'submitting' ? (
                          <>
                            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                            </svg>
                            Submitting...
                          </>
                        ) : (
                          <>🚀 Get Free Marketing Audit <ArrowRight className="h-4 w-4 ml-0.5 transition-transform duration-200 group-hover:translate-x-1" /></>
                        )}
                      </span>
                    </button>

                    <div className="flex items-center justify-center gap-5 pt-0.5 text-[11px] font-medium text-gray-600">
                      <span className="flex items-center gap-1.5"><Check className="h-3 w-3 text-amber-500/80 flex-shrink-0"/>Free Audit</span>
                      <span className="flex items-center gap-1.5"><Check className="h-3 w-3 text-amber-500/80 flex-shrink-0"/>No Spam</span>
                      <span className="flex items-center gap-1.5"><Check className="h-3 w-3 text-amber-500/80 flex-shrink-0"/>Reply in 24h</span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#050508] to-transparent pointer-events-none" />
    </section>
  );
}

'use client';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import SeoHead from "@/components/SeoHead";
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const WEB3FORMS_ACCESS_KEY = '35d6fdcb-1081-4543-9a81-dcbdf45689ff';
const EMAILJS_SERVICE_ID = '';
const EMAILJS_TEMPLATE_ID = 'template_e8ymace'; 
const EMAILJS_PUBLIC_KEY = 'xrDHTXT268lYPjo97'; 
const NOTIFY_EMAIL = 'mishra.pm443@gmail.com';

export default function WebDevelopmentLandingPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [mobile, setMobile] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  function validateMobile(v) {
    return /^[6-9]\d{9}$/.test(v.trim());
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg('');
    if (!name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!validateMobile(mobile)) {
      setErrorMsg('Enter a valid 10-digit mobile number.');
      return;
    }
    if (!website.trim()) {
      setErrorMsg('Please enter your website URL for the audit.');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: 'New Lead: Free Business Audit Report',
          from_name: name,
          email: email,
          phone: mobile,
          website: website,
          message: `Request for Free Business Audit Report\nName: ${name}\nEmail: ${email}\nMobile: ${mobile}\nWebsite: ${website}`,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        setName('');
        setEmail('');
        setWebsite('');
        setMobile('');
        // Send notification email via EmailJS (if configured)
        if(EMAILJS_SERVICE_ID) {
           emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
              to_email: NOTIFY_EMAIL,
              subject: 'New Free Audit Request',
              message: `New Audit Request\nName: ${name}\nEmail: ${email}\nMobile: ${mobile}\nWebsite: ${website}`,
           }, EMAILJS_PUBLIC_KEY).catch(console.error);
        }
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  }

  return (
    <>
      <SeoHead
        title="Get Your Free Business Audit Report | Kinetic Drive"
        description="Claim your free, comprehensive business and website audit report today."
      />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050508] py-20 px-4 sm:px-6 lg:px-8">
        
        {/* Background Effects */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: "url('/images/webdevelopement.png')",
            filter: "grayscale(100%) brightness(0.4)"
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.1),transparent_30%)]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-[100px]" />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Copy & Value Prop */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 backdrop-blur-md mb-6">
              <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-sm font-semibold text-sky-200 tracking-wide uppercase">Limited Time Offer</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
              Get Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">Free Business Audit Report</span>
            </h1>
            
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Find out exactly why your website isn't converting and discover the untapped opportunities in your digital strategy. We'll analyze your site's performance, SEO, and design—100% free.
            </p>

            <ul className="text-left space-y-4 text-slate-300 max-w-md mx-auto lg:mx-0">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-sky-400 h-6 w-6 flex-shrink-0" />
                <span>Comprehensive SEO & Performance Check</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-sky-400 h-6 w-6 flex-shrink-0" />
                <span>Actionable Conversion Rate Tips</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-sky-400 h-6 w-6 flex-shrink-0" />
                <span>Competitor Analysis Insights</span>
              </li>
            </ul>
          </div>

          {/* Right Column: Lead Form */}
          <div className="w-full max-w-md">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              {/* Form header accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-blue-500" />
              
              <h3 className="text-2xl font-bold text-white mb-2 text-center">Where should we send your report?</h3>
              <p className="text-sm text-slate-400 text-center mb-8">Enter your details below to request your comprehensive audit.</p>

              {status === 'success' ? (
                <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-6 text-center">
                  <div className="mx-auto w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="text-emerald-400 h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Request Received!</h4>
                  <p className="text-sm text-slate-300">Our experts are analyzing your website. We'll contact you shortly at the provided number.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="name">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-slate-500 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="email">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-slate-500 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="website">
                      Website URL <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="website"
                      type="url"
                      placeholder="e.g. www.yourcompany.com"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-slate-500 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="mobile">
                      Mobile Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="mobile"
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-slate-500 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition"
                      required
                    />
                  </div>

                  {errorMsg && (
                    <p className="text-sm font-medium text-red-400 text-center" role="alert">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full mt-2 group relative flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 px-6 py-4 text-base font-bold text-white transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-sky-500/30 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === 'sending' ? 'Processing...' : 'Get My Free Audit Report'}
                    {status !== 'sending' && <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />}
                  </button>
                  
                  <p className="text-center text-xs text-slate-500 mt-4">
                    100% Free. No commitment required.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
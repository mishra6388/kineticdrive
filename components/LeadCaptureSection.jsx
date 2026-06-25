'use client';
import { useState, useRef, useEffect } from 'react';
// EmailJS for sending notification emails
import emailjs from '@emailjs/browser';
import gsap from 'gsap';

const WEB3FORMS_ACCESS_KEY = '35d6fdcb-1081-4543-9a81-dcbdf45689ff';

// EmailJS configuration
// TODO: add your EmailJS Service ID here
const EMAILJS_SERVICE_ID = '';
const EMAILJS_TEMPLATE_ID = 'template_e8ymace'; // user-provided template ID
const EMAILJS_PUBLIC_KEY = 'xrDHTXT268lYPjo97'; // user-provided public key
const NOTIFY_EMAIL = 'mishra.pm443@gmail.com';

export default function LeadCaptureSection() {
  const [website, setWebsite] = useState('');
  const [mobile, setMobile] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const counterRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obj = { val: 0 };
    gsap.to(obj, {
      val: 742,
      duration: 1.8,
      ease: 'power2.out',
      onUpdate: () => {
        if (counterRef.current)
          counterRef.current.textContent = Math.floor(obj.val).toLocaleString('en-IN');
      },
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }
    );
  }, []);

  function validateMobile(v) {
    return /^[6-9]\d{9}$/.test(v.trim());
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg('');
    if (!validateMobile(mobile)) {
      setErrorMsg('Enter a valid 10-digit mobile number.');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: 'Website: Free consultation / lead',
          from_name: 'Homepage Lead Form',
          phone: mobile,
          website: website || 'Not provided',
          message: `New lead\nMobile: ${mobile}\nWebsite: ${website || 'Not provided'}`,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
          setStatus('success');
          setWebsite('');
          setMobile('');
          // Send notification email via EmailJS
          emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
            to_email: NOTIFY_EMAIL,
            subject: 'New Lead Submission',
            message: `New lead\nMobile: ${mobile}\nWebsite: ${website || 'Not provided'}`,
          }, EMAILJS_PUBLIC_KEY)
          .then(() => {
            console.log('Notification email sent');
          })
          .catch(err => {
            console.error('EmailJS error:', err);
          });
        } else {
        setStatus('error');
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  }

  function handleFocus(e) {
    gsap.to(e.target, { boxShadow: '0 0 0 3px rgba(251,191,36,0.25)', duration: 0.25 });
  }
  function handleBlur(e) {
    gsap.to(e.target, { boxShadow: '0 0 0 0px rgba(251,191,36,0)', duration: 0.25 });
  }

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#050508] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[400px] w-[600px] rounded-full bg-amber-500/6 blur-3xl" />
      </div>

      {/* Top border accent */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative mx-auto max-w-3xl text-center">
        {/* Live counter pill */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
            <span ref={counterRef} className="font-bold text-white">0</span>
            {' '}leads generated this month
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Want more leads,{' '}
          <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
            more customers?
          </span>
        </h2>

        <p className="mt-3 text-xl font-extrabold uppercase tracking-tight text-amber-400 sm:text-2xl">
          Get a free strategy now!
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
          Join{' '}
          <strong className="text-white">700+ businesses</strong>{' '}
          across India that have grown their traffic, leads, and revenue with expert{' '}
          <strong className="text-white">SEO, Google Ads, and social media</strong>{' '}
          strategies. Claim your free strategy today.
        </p>

        {/* Form / success state */}
        {status === 'success' ? (
          <div className="mx-auto mt-10 max-w-md rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-6 py-5">
            <p className="font-semibold text-white">Got it — we'll call you shortly.</p>
            <p className="mt-1 text-sm text-gray-400">A strategist will reach out on your mobile number.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex flex-col gap-3 sm:flex-row"
            noValidate
          >
            <input
              type="text"
              inputMode="url"
              placeholder="Your website (optional)"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-gray-500 outline-none transition sm:flex-1"
            />
            <input
              type="tel"
              inputMode="numeric"
              placeholder="Mobile number *"
              value={mobile}
              onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-gray-500 outline-none transition sm:flex-1"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="whitespace-nowrap rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-7 py-3.5 font-bold uppercase tracking-wide text-black shadow-[0_4px_20px_rgba(245,158,11,0.35)] transition hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Get free strategy'}
            </button>
          </form>
        )}

        {errorMsg && (
          <p className="mt-3 text-sm font-medium text-red-400" role="alert">{errorMsg}</p>
        )}

        <p className="mt-4 text-xs text-gray-600">
          No spam. We'll only use this to call you about your free strategy.
        </p>
      </div>
    </section>
  );
}
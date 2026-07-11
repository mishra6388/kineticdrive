'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowUpRight, CheckCircle2, BarChart, Code2, Rocket, Globe } from 'lucide-react';
import SeoHead from '@/components/SeoHead';

export default function FreeAuditLandingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
  });
  const [sent, setSent] = useState(false);
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const response = await fetch('/api/free-audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form.');
      }

      setSent(true);
      setFormData({ name: '', email: '', phone: '', website: '' });
      // Redirect to the home page after a short delay
      setTimeout(() => {
        router.push('/');
      }, 2500);
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <SeoHead
        title="Free Web Development Business Audit | Kinetic Drive"
        description="Get a comprehensive, free web development business audit. Uncover opportunities to scale, improve conversions, and dominate your niche."
      />

      <main className="min-h-screen bg-[#050508] relative overflow-hidden flex flex-col justify-center">
        {/* Ambient background glows */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute top-1/2 right-0 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/2 rounded-full bg-emerald-500/5 blur-[120px]" />
        
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Logo / Brand Name (since there's no header, we need a small branding element) */}
          <div className="mb-12 flex justify-center lg:justify-start">
            <span className="text-2xl font-black tracking-tighter text-white">
              Kinetic<span className="text-amber-500">Drive</span>
            </span>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            
            {/* Left Column: Copy & Value Proposition */}
            <div className="text-center lg:text-left">
              <span className="inline-block mb-4 rounded-full border border-amber-400/25 bg-amber-400/8 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-400">
                Limited Time Offer
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                Get Your Free{' '}
                <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                  Website Audit
                </span>{' '}
                or Build Strategy.
              </h1>
              <p className="mb-10 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0">
                Whether you have an outdated site losing customers or you're starting from scratch, claim your free consultation. Discover exactly how to increase conversions and dominate your digital presence.
              </p>

              <div className="space-y-5 text-left mb-10 mx-auto max-w-md lg:mx-0">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-400/10 border border-amber-400/20">
                    <Code2 size={20} className="text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Code & Performance Review</h4>
                    <p className="text-gray-400 text-sm mt-1">We analyze your site's speed, architecture, and overall technical health.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 border border-emerald-400/20">
                    <BarChart size={20} className="text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">UX/UI & Conversion Analysis</h4>
                    <p className="text-gray-400 text-sm mt-1">Find out where users are dropping off and how to optimize your funnel.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-400/10 border border-blue-400/20">
                    <Globe size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">SEO & Visibility Check</h4>
                    <p className="text-gray-400 text-sm mt-1">Discover technical SEO gaps preventing you from ranking on Google.</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 border-t border-white/10">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-[#050508] bg-gray-800"
                      src={`https://i.pravatar.cc/150?img=${i + 10}`}
                      alt="User avatar"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex items-center gap-1 text-amber-400 mb-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-300 font-medium">Trusted by 200+ Businesses</span>
                </div>
              </div>
            </div>

            {/* Right Column: The Form */}
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-amber-400/20 to-transparent blur-lg opacity-50" />
              <div className="relative rounded-2xl border border-white/10 bg-[#0F0F18] p-6 sm:p-10 shadow-2xl">
                
                <div className="mb-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Claim Your Free Audit / Strategy</h3>
                  <p className="text-gray-400 text-sm">Fill out the form below to get started instantly.</p>
                </div>

                {sent ? (
                  <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-emerald-400/20 blur-xl animate-pulse" />
                      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-500/30">
                        <CheckCircle2 className="h-10 w-10 text-emerald-400" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mt-4">Audit Requested!</h3>
                    <p className="text-gray-400 max-w-xs mx-auto">
                      Thanks for reaching out! Our web experts will review your site and be in touch within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {errorMsg && (
                      <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                        {errorMsg}
                      </div>
                    )}
                    
                    <div className="group">
                      <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-300 group-focus-within:text-amber-400 transition-colors">
                        Full Name <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Rahul Sharma"
                        required
                        disabled={loading}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-amber-400/50 focus:bg-white/10 focus:ring-2 focus:ring-amber-400/20 disabled:opacity-50"
                      />
                    </div>
                    
                    <div className="group">
                      <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-300 group-focus-within:text-amber-400 transition-colors">
                        Work Email <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="rahul@company.com"
                        required
                        disabled={loading}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-amber-400/50 focus:bg-white/10 focus:ring-2 focus:ring-amber-400/20 disabled:opacity-50"
                      />
                    </div>

                    <div className="group">
                      <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-gray-300 group-focus-within:text-amber-400 transition-colors">
                        Phone Number <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                        disabled={loading}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-amber-400/50 focus:bg-white/10 focus:ring-2 focus:ring-amber-400/20 disabled:opacity-50"
                      />
                    </div>

                    <div className="group">
                      <label htmlFor="website" className="mb-2 block text-sm font-semibold text-gray-300 group-focus-within:text-amber-400 transition-colors">
                        Website URL <span className="text-gray-500 font-normal text-xs ml-1">(Optional)</span>
                      </label>
                      <input
                        type="url"
                        id="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="Leave blank if you don't have one"
                        disabled={loading}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-amber-400/50 focus:bg-white/10 focus:ring-2 focus:ring-amber-400/20 disabled:opacity-50"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="group/btn relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 py-4 font-bold text-black transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/20 active:scale-[0.99] mt-2 disabled:opacity-70 disabled:pointer-events-none"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {loading ? 'Submitting...' : 'Get My Free Audit / Strategy'}
                        {!loading && <Rocket size={18} className="transition-transform duration-300 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />}
                      </span>
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
                    </button>

                    
                    <p className="text-center text-xs text-gray-500 mt-4">
                      By submitting this form, you agree to our privacy policy. No spam, ever.
                    </p>
                  </form>
                )}
              </div>
            </div>
            
          </div>
        </div>
      </main>
    </>
  );
}

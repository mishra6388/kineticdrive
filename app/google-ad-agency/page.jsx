
"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { 
  Check, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Target, 
  TrendingUp, 
  Users, 
  Award, 
  Search, 
  Layers, 
  RefreshCw, 
  ShoppingBag, 
  Smartphone, 
  FileText,
  AlertCircle,
  Loader2,
  Clock,
  ThumbsUp,
  Globe,
  Zap,
  ShieldCheck,
  Send
} from 'lucide-react';
import IntroSection from './_components/IntroSection';
import CredibilityBanner from './_components/CredibilityBanner';
import CertifiedExpertsBlock from './_components/CertifiedExpertsBlock';
import PainPointChecklist from './_components/PainPointChecklist';
import FourColumnValueProps from './_components/FourColumnValueProps';
import ServicesGrid from './_components/ServicesGrid';
import WhyHireUs from './_components/WhyHireUs';
import MethodologyAccordion from './_components/MethodologyAccordion';
import FaqAccordion from './_components/FaqAccordion';
function GoogleAdAgencyContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // UTM & GCLID state
  const [utmParams, setUtmParams] = useState({
    utm_source: null,
    utm_medium: null,
    utm_campaign: null,
    utm_term: null,
    utm_content: null,
    gclid: null,
  });

  // Load UTM/GCLID parameters from searchParams
  useEffect(() => {
    const params = {
      utm_source: searchParams.get('utm_source') || null,
      utm_medium: searchParams.get('utm_medium') || null,
      utm_campaign: searchParams.get('utm_campaign') || searchParams.get('campaign') || null,
      utm_term: searchParams.get('utm_term') || null,
      utm_content: searchParams.get('utm_content') || null,
      gclid: searchParams.get('gclid') || null,
    };
    setUtmParams(params);
  }, [searchParams]);

  // Lead Submission Checks
  const isAlreadySubmitted = () => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('kd_lead_submitted') === 'true';
    }
    return false;
  };

  // Helper to open WhatsApp chat with pre-filled message
  const handleWhatsAppChat = (source = 'Website CTA') => {
    const phoneNumber = '7388100850';
    const message = `Hello KineticDrive, I am interested in Google Ads management services for my business. I came from your Google Ads Agency page. Please share details.`;
    const url = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(message)}`;
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  };

  // Form states for Hero Quick Form
  const [heroName, setHeroName] = useState('');
  const [heroPhone, setHeroPhone] = useState('');
  const [heroService, setHeroService] = useState('Google Ads');
  const [heroLoading, setHeroLoading] = useState(false);
  const [heroSuccess, setHeroSuccess] = useState(false);
  const [heroError, setHeroError] = useState('');


const handleHeroSubmit = async (e) => {
    e.preventDefault();
    if (!heroName.trim() || !heroPhone.trim()) {
      setHeroError('All fields are required.');
      return;
    }
    setHeroLoading(true);
    setHeroError('');

    try {
      const payload = {
        name: heroName.trim(),
        phone: heroPhone.trim(),
        service: heroService,
        source: 'Hero Form',
        utm_source: utmParams.utm_source,
        utm_medium: utmParams.utm_medium,
        utm_campaign: utmParams.utm_campaign,
        utm_term: utmParams.utm_term,
        utm_content: utmParams.utm_content,
        gclid: utmParams.gclid,
      };

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit lead.');
      }

      sessionStorage.setItem('kd_lead_submitted', 'true');
      router.push('/thank-you');
    } catch (err) {
      console.error(err);
      setHeroError(err.message || 'Error submitting lead. Please try again.');
    } finally {
      setHeroLoading(false);
    }
  };

  // URL checker CTA pre-fill
  const [urlCheckerVal, setUrlCheckerVal] = useState('');
  const handleUrlCheckerSubmit = (e) => {
    e.preventDefault();
    handleWhatsAppChat(`URL Checker CTA - URL: ${urlCheckerVal}`);
  };

  // Accordion data moved to components

  // Form states for Full Bottom Contact Form
  const [fullName, setFullName] = useState('');
  const [fullEmail, setFullEmail] = useState('');
  const [fullPhone, setFullPhone] = useState('');
  const [fullCompany, setFullCompany] = useState('');
  const [fullService, setFullService] = useState('Google Ads');
  const [fullWebsiteType, setFullWebsiteType] = useState('Business Website');
  const [fullBudget, setFullBudget] = useState('Below ₹25,000');
  const [fullRequirements, setFullRequirements] = useState('');
  const [fullLoading, setFullLoading] = useState(false);
  const [fullError, setFullError] = useState('');

  const handleFullSubmit = async (e) => {
    e.preventDefault();
    if (!fullName.trim() || !fullEmail.trim() || !fullPhone.trim()) {
      setFullError('Name, Email and Phone fields are required.');
      return;
    }
    setFullLoading(true);
    setFullError('');

    try {
      const payload = {
        name: fullName.trim(),
        email: fullEmail.trim(),
        phone: fullPhone.trim(),
        company: fullCompany.trim() || null,
        service: fullService,
        website_type: fullWebsiteType,
        budget: fullBudget,
        requirements: fullRequirements.trim() || null,
        source: 'Bottom Full Form',
        utm_source: utmParams.utm_source,
        utm_medium: utmParams.utm_medium,
        utm_campaign: utmParams.utm_campaign,
        utm_term: utmParams.utm_term,
        utm_content: utmParams.utm_content,
        gclid: utmParams.gclid,
      };

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form.');
      }

      sessionStorage.setItem('kd_lead_submitted', 'true');
      router.push('/thank-you');
    } catch (err) {
      console.error(err);
      setFullError(err.message || 'Error submitting form. Please try again.');
    } finally {
      setFullLoading(false);
    }
  };

  return (
    <div className="bg-[#050508] text-white min-h-screen font-sans selection:bg-amber-500 selection:text-black">
      
      {/* Local Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-gray-800/50">
        <div className="max-w-6xl mx-auto px-6 h-16 sm:h-20 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg p-1">
              <img
                src="/logo.png"
                alt="kineticDrive Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-white">
              kineticDrive
            </span>
          </div>
          
          <a
            href="tel:+917388100850"
            className="hidden sm:inline-flex items-center gap-2 border border-amber-500/30 hover:border-amber-500 bg-amber-500/5 hover:bg-amber-500/10 text-amber-400 font-bold px-4 py-2 rounded-xl text-sm transition-colors cursor-pointer"
          >
            Call Us: +91 7388100850
          </a>
        </div>
      </header>

      {/* 1. HERO SECTION WITH COMPACT FORM */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-12 right-12 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Headline and Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3.5">
                <img
                  src="/google-ads/google-ads-logo.png"
                  alt="Google Ads Logo"
                  className="h-16 md:h-20 object-contain bg-white/5 px-3 py-1.5 rounded-lg border border-white/10"
                />
                <span className="inline-block bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  Professional Google Ads Management
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Scale Your ROI with Our <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500">
                  Google Ads Expertise
                </span>
              </h1>
              <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed">
                Stop wasting budget on clicks that don't convert. KineticDrive builds, manages, and optimizes high-performance Google Ads campaigns that target qualified buyer intent and drive real revenue.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-amber-500 shrink-0" />
                  <span>Expert Google Ads Managers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-amber-500 shrink-0" />
                  <span>Real-Time ROI Tracking</span>
                </div>
              </div>
            </div>

            {/* Embedded Quick Form */}
            <div className="lg:col-span-5">
              <div className="bg-[#0F0F18]/90 border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl shadow-amber-500/5 relative overflow-hidden backdrop-blur-sm">
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-xl pointer-events-none" />
                
                <h3 className="text-xl font-bold text-white mb-2">Claim Your Free Consultation</h3>
                <p className="text-xs text-gray-400 mb-6">Fill in details and our Google Ads specialist will get in touch.</p>

                {heroSuccess ? (
                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6 text-center space-y-3">
                    <ThumbsUp className="w-10 h-10 text-amber-500 mx-auto" />
                    <h4 className="font-bold text-white text-lg">Submission Successful!</h4>
                    <p className="text-sm text-gray-300">Thanks! We'll call you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleHeroSubmit} className="space-y-4">
                    {heroError && (
                      <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-lg">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{heroError}</span>
                      </div>
                    )}
                    <div>
                      <input 
                        type="text" 
                        required
                        value={heroName}
                        onChange={(e) => setHeroName(e.target.value)}
                        placeholder="Your Name" 
                        className="w-full bg-[#13131F] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50"
                      />
                    </div>
                    <div>
                      <input 
                        type="tel" 
                        required
                        value={heroPhone}
                        onChange={(e) => setHeroPhone(e.target.value)}
                        placeholder="Your Phone Number" 
                        className="w-full bg-[#13131F] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50"
                      />
                    </div>
                    <div>
                      <select 
                        value={heroService}
                        onChange={(e) => setHeroService(e.target.value)}
                        className="w-full bg-[#13131F] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500/50"
                      >
                        <option value="Google Ads">Google Ads</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="App Development">App Development</option>
                      </select>
                    </div>
                    <button 
                      type="submit" 
                      disabled={heroLoading}
                      className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-bold py-3 rounded-lg text-sm transition-transform active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {heroLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <span>Request Free Audit</span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <IntroSection />

      {/* 3. CREDIBILITY BANNER */}
      <CredibilityBanner handleWhatsAppChat={handleWhatsAppChat} />

      {/* 4. CERTIFIED EXPERTS BLOCK */}
      <CertifiedExpertsBlock />

      {/* 5. PAIN-POINT CHECKLIST + CTA */}
      <PainPointChecklist handleWhatsAppChat={handleWhatsAppChat} />

      {/* 6. 4-COLUMN VALUE PROPS */}
      <FourColumnValueProps />

      {/* 7. URL CHECKER CTA BAND */}
      <section className="py-12 px-6 bg-gradient-to-r from-amber-500/5 to-orange-500/5 border-y border-white/5 relative">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-1 text-center lg:text-left">
            <h4 className="text-xl font-bold text-white">Ready to Boost Your Business Leads?</h4>
            <p className="text-xs text-gray-400">Provide your website link below for a fast, automated performance check.</p>
          </div>
          
          <form onSubmit={handleUrlCheckerSubmit} className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <input 
              type="url" 
              required
              placeholder="https://yourwebsite.com" 
              value={urlCheckerVal}
              onChange={(e) => setUrlCheckerVal(e.target.value)}
              className="w-full sm:w-80 bg-[#13131F] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50"
            />
            <button 
              type="submit" 
              className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-bold px-6 py-3 rounded-xl text-sm transition-transform active:scale-[0.98] cursor-pointer whitespace-nowrap"
            >
              Next Step
            </button>
          </form>
        </div>
      </section>

      {/* 8. SERVICES GRID (6 CARDS) */}
      <ServicesGrid />

      {/* 9. WHY HIRE US */}
      <WhyHireUs handleWhatsAppChat={handleWhatsAppChat} />

      {/* 10. HOW WE DO IT (ACCORDION) */}
      <MethodologyAccordion />

      {/* 11. FAQ ACCORDION */}
      <FaqAccordion />

      {/* 12. FULL CONTACT FORM + INFO PANEL */}
      <section id="contact-section" className="py-20 px-6 bg-[#050508]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Info Panel */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-[#0F0F18] border border-white/5 p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-extrabold">Discover how we can help your business grow.</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Ready to speak with a campaign optimization specialist? Reach out now and we'll evaluate your requirements.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-500">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">5000+ Accounts</h5>
                    <p className="text-xs text-gray-400">Successfully Optimized</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-500">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">98% Client Retention</h5>
                    <p className="text-xs text-gray-400">Long-term Client Partnerships</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#0F0F18]/90 border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                <h3 className="text-2xl font-bold text-white mb-6">Detailed Lead Form</h3>
                
                {fullError && (
                  <div className="flex items-center gap-2 p-3.5 mb-6 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{fullError}</span>
                  </div>
                )}

                <form onSubmit={handleFullSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="full-name" className="block text-sm font-medium text-gray-300 mb-1.5">
                        Name <span className="text-amber-500">*</span>
                      </label>
                      <input 
                        id="full-name"
                        type="text" 
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Your Name" 
                        className="w-full bg-[#13131F] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="full-email" className="block text-sm font-medium text-gray-300 mb-1.5">
                        Email Address <span className="text-amber-500">*</span>
                      </label>
                      <input 
                        id="full-email"
                        type="email" 
                        required
                        value={fullEmail}
                        onChange={(e) => setFullEmail(e.target.value)}
                        placeholder="yourname@email.com" 
                        className="w-full bg-[#13131F] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="full-phone" className="block text-sm font-medium text-gray-300 mb-1.5">
                        Phone Number <span className="text-amber-500">*</span>
                      </label>
                      <input 
                        id="full-phone"
                        type="tel" 
                        required
                        value={fullPhone}
                        onChange={(e) => setFullPhone(e.target.value)}
                        placeholder="Your phone number" 
                        className="w-full bg-[#13131F] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="full-company" className="block text-sm font-medium text-gray-300 mb-1.5">
                        Company Name
                      </label>
                      <input 
                        id="full-company"
                        type="text" 
                        value={fullCompany}
                        onChange={(e) => setFullCompany(e.target.value)}
                        placeholder="Your Company Name (Optional)" 
                        className="w-full bg-[#13131F] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="full-service" className="block text-sm font-medium text-gray-300 mb-1.5">
                        Service
                      </label>
                      <select 
                        id="full-service"
                        value={fullService}
                        onChange={(e) => setFullService(e.target.value)}
                        className="w-full bg-[#13131F] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-amber-500/50"
                      >
                        <option value="Google Ads">Google Ads</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="App Development">App Development</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="full-website-type" className="block text-sm font-medium text-gray-300 mb-1.5">
                        Website Type
                      </label>
                      <select 
                        id="full-website-type"
                        value={fullWebsiteType}
                        onChange={(e) => setFullWebsiteType(e.target.value)}
                        className="w-full bg-[#13131F] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-amber-500/50"
                      >
                        <option value="Business Website">Business Website</option>
                        <option value="E-Commerce App">E-Commerce App</option>
                        <option value="Complete Digital Marketing">Complete Digital Marketing</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="full-budget" className="block text-sm font-medium text-gray-300 mb-1.5">
                        Monthly Budget
                      </label>
                      <select 
                        id="full-budget"
                        value={fullBudget}
                        onChange={(e) => setFullBudget(e.target.value)}
                        className="w-full bg-[#13131F] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-amber-500/50"
                      >
                        <option value="Below ₹25,000">Below ₹25,000</option>
                        <option value="Below ₹20,000">Below ₹20,000</option>
                        <option value="Below $5k">Below $5k</option>
                        <option value="Custom">Custom</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="full-requirements" className="block text-sm font-medium text-gray-300 mb-1.5">
                      Requirements
                    </label>
                    <textarea 
                      id="full-requirements"
                      rows="4" 
                      value={fullRequirements}
                      onChange={(e) => setFullRequirements(e.target.value)}
                      placeholder="Tell us about your campaign goals..." 
                      className="w-full bg-[#13131F] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={fullLoading}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    {fullLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Details</span>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY FOOTER BAR (Mobile) */}
      <div className="fixed bottom-0 left-0 w-full z-40 block md:hidden">
        <div className="bg-[#0F0F18]/95 border-t border-white/10 backdrop-blur-md px-4 py-3 shadow-2xl">
          <div className="grid grid-cols-2 gap-3">
            <a 
              href="tel:+917388100850"
              className="bg-amber-500 hover:bg-amber-600 text-black font-extrabold py-3 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.122-4.1-6.924-6.924l1.293-.97a1.125 1.125 0 00.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span>Call Us</span>
            </a>
            <button 
              onClick={() => handleWhatsAppChat('Sticky Mobile Bar')}
              className="bg-green-600 hover:bg-green-700 text-white font-extrabold py-3 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-md"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.638 1.97 14.162.945 11.536.945c-5.438 0-9.863 4.37-9.866 9.801-.001 1.749.467 3.456 1.354 4.975l-.947 3.464 3.57-.931zm11.367-6.793c-.302-.152-1.791-.883-2.073-.984-.282-.102-.487-.152-.691.152-.204.304-.791.984-.969 1.186-.178.203-.356.228-.658.076-.302-.152-1.275-.469-2.429-1.498-.898-.801-1.503-1.792-1.68-2.096-.177-.304-.019-.468.132-.619.136-.136.302-.352.453-.528.151-.176.201-.302.302-.503.101-.201.05-.378-.025-.53-.075-.152-.691-1.667-.947-2.28-.249-.597-.502-.516-.691-.525l-.59-.009c-.204 0-.537.076-.819.379-.282.304-1.077 1.052-1.077 2.566s1.1 2.985 1.253 3.187c.152.203 2.164 3.298 5.24 4.629.731.317 1.302.507 1.748.649.736.233 1.4.2 1.927.122.587-.087 1.791-.733 2.043-1.442.252-.708.252-1.314.177-1.442-.075-.128-.282-.203-.585-.355z"/>
              </svg>
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      {/* FLOATING WHATSAPP BUTTON (Desktop) */}
      <button 
        onClick={() => handleWhatsAppChat('Desktop Floating Button')}
        className="hidden md:flex fixed bottom-6 right-6 z-50 items-center justify-center bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer group"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.638 1.97 14.162.945 11.536.945c-5.438 0-9.863 4.37-9.866 9.801-.001 1.749.467 3.456 1.354 4.975l-.947 3.464 3.57-.931zm11.367-6.793c-.302-.152-1.791-.883-2.073-.984-.282-.102-.487-.152-.691.152-.204.304-.791.984-.969 1.186-.178.203-.356.228-.658.076-.302-.152-1.275-.469-2.429-1.498-.898-.801-1.503-1.792-1.68-2.096-.177-.304-.019-.468.132-.619.136-.136.302-.352.453-.528.151-.176.201-.302.302-.503.101-.201.05-.378-.025-.53-.075-.152-.691-1.667-.947-2.28-.249-.597-.502-.516-.691-.525l-.59-.009c-.204 0-.537.076-.819.379-.282.304-1.077 1.052-1.077 2.566s1.1 2.985 1.253 3.187c.152.203 2.164 3.298 5.24 4.629.731.317 1.302.507 1.748.649.736.233 1.4.2 1.927.122.587-.087 1.791-.733 2.043-1.442.252-.708.252-1.314.177-1.442-.075-.128-.282-.203-.585-.355z"/>
        </svg>
        <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl border border-gray-800 pointer-events-none">
          Chat on WhatsApp
        </span>
      </button>
    </div>
  );
}

export default function GoogleAdAgency() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#050508] text-white flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-amber-500" />
      </div>
    }>
      <GoogleAdAgencyContent />
    </Suspense>
  );
}

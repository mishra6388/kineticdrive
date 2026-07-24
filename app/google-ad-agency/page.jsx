
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
import { supabase } from '@/lib/supabase';
import QuickLeadModal from '@/components/QuickLeadModal';

// Separate content logic from Suspense block so search params can be loaded safely
function GoogleAdAgencyContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Modal Control States
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('Sticky Tab Modal');
  const [initialUrl, setInitialUrl] = useState('');

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

  // Exit intent trigger (Desktop)
  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY < 50 && !isAlreadySubmitted() && !modalOpen) {
        setModalSource('Exit Intent Modal');
        setModalOpen(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [modalOpen]);

  // Scroll up trigger (Mobile, scroll to bottom and then up)
  useEffect(() => {
    let lastScrollTop = 0;
    let maxScrollDepth = 0;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentDepth = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

      if (currentDepth > maxScrollDepth) {
        maxScrollDepth = currentDepth;
      }

      // If user scrolled past 80% and is now scrolling up
      if (maxScrollDepth > 0.8 && scrollTop < lastScrollTop && !isAlreadySubmitted() && !modalOpen) {
        // Trigger only once
        maxScrollDepth = 0; // reset to prevent spamming
        setModalSource('Scroll Up Modal');
        setModalOpen(true);
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [modalOpen]);

  // Reusable function to trigger modal
  const triggerQuickModal = (source, prefillUrl = '') => {
    setModalSource(source);
    setInitialUrl(prefillUrl);
    setModalOpen(true);
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
    triggerQuickModal('URL Checker CTA', urlCheckerVal);
  };

  // How We Do It accordion state
  const [expandedHow, setExpandedHow] = useState(0);
  const howWeDoItItems = [
    {
      title: "Research & Keyword Selection",
      content: "It's the most crucial and important step to choose the perfect keyword which delivers better results. We perform intensive research for every individual campaign to choose the best performing keywords which give higher ROI. Even one wrong keyword can spoil your campaign's performance. It is noticed that most of your competition wastes 3/4th of their ad budget just because of poor keyword selection. That's why we make it a habit of researching and choosing the right keyword for every specific campaign at the very initial stage."
    },
    {
      title: "Creating Ad Copy",
      content: "Writing & Creating an eye-catching ad is another important factor of successful ad campaigns. Once you choose a set of perfect keywords for your ad campaign, the next step is to attract and prompt your potential customers to click your ads. Whether it's a text ad or an image ad, we create the best for your business to bring your target audience to your landing page or app, focusing on obtaining higher Click-Through Rates (CTR)."
    },
    {
      title: "Landing Page Optimization",
      content: "A landing page is where your target audience will be directed after clicking on your ad. So optimizing your landing page is another crucial step in the success of your PPC campaign. We create and design landing pages that sync perfectly with your target keywords and ad copy to engage your audience and drive massive conversions."
    },
    {
      title: "Location Targeting Optimization",
      content: "Location targeting allows advertisers to run ads by targeting an audience of specific locations or regions. We show your ads to an audience who is in that specific location and restrict it on other locations, saving ad-spend by preventing click from restricted locations."
    },
    {
      title: "Campaign Management",
      content: "We manage your ad campaigns with complete transparency. You will get weekly attention and reports on how your campaigns are improving and what steps are taken to improve further. We have years of experience delivering result-driven ad campaigns with higher returns on investments."
    },
    {
      title: "Analyzing The Competitor",
      content: "Competitor Analysis is a very important aspect of the PPC campaign strategy. By analyzing your competitors, we understand their strengths and weaknesses to capitalize on areas where we can take advantage. We track impression share, overlap rate, top of page rate, and outranking share."
    },
    {
      title: "Conversion Tracking",
      content: "Conversion tracking helps you to know how many actual conversions you are getting from PPC Ads, and which keywords and ads are performing or wasting your money. This is done by installing robust tracking codes on your landing pages or websites."
    },
    {
      title: "ROI Tracking",
      content: "Tracking ROI lets you know exactly how much you have spent on ad campaigns and the revenue you have earned. We use 12 data metrics for not just calculating ROI but continuously enhancing it for your business."
    },
    {
      title: "A/B Testing",
      content: "One of the best ways to optimize the performance of your PPC campaign is through A/B Testing. We perform A/B Testing at 4 different levels: Headlines, PPC Ad Copy, Landing Pages, and Keywords."
    }
  ];

  // FAQ accordion state
  const [expandedFaq, setExpandedFaq] = useState(null);
  const faqItems = [
    {
      q: "What are Google Ads?",
      a: "Google Ads is a paid online advertising platform offered by Google. It allows businesses to run ads across Google's massive network, including Google Search (showing ads on search results for specific keywords), Google Display Network (millions of partner websites, blogs, and portals), YouTube, Gmail, and Mobile Apps."
    },
    {
      q: "How can I start using Google Ads?",
      a: "Anyone can register and start promoting their products on Google Ads. However, it is a highly complex web application with many variables. To avoid wasting money, expert-level knowledge and professional management are highly recommended."
    },
    {
      q: "Is there any minimum budget to start Google Ads?",
      a: "There is no minimum or maximum budget for starting your Google Ads campaigns. You can start with any budget. We can help you estimate required budgets using keyword research and competitor analysis."
    },
    {
      q: "How much does Google Ads cost?",
      a: "You only pay when people click on your ads (Pay-Per-Click) or call your business. You control your daily budget cap and can start or pause campaigns at any time."
    },
    {
      q: "What payment methods are available for Google Ads?",
      a: "Depending on your country, Google support Automatic (post-paid) and Prepay billing. You can pay via Credit/Debit Cards, Money Transfers, Net Banking, and Payment Wallets."
    },
    {
      q: "What are Google Ads Management Services?",
      a: "It is the professional management of your Google Ads account by certified experts to optimize keywords, ad copy, landing pages, and budgets, guaranteeing higher conversion rates and maximum ROI."
    },
    {
      q: "What are the different types of Google Ads Campaigns?",
      a: "Google offers several key campaign types: Search Ads, Display Ads, Shopping Ads (Product Listing Ads), Video Ads (YouTube), App Promotions, and Smart/Local Campaigns."
    },
    {
      q: "How much do I need to invest in Google Ads?",
      a: "The investment varies depending on your business goals, target audience, and industry competitiveness. We perform an in-depth keyword analysis to suggest a budget that yields a positive return."
    },
    {
      q: "Do you guarantee the #1 ranking for my ads in Google?",
      a: "No trustworthy agency can guarantee a permanent #1 ad rank. Google Ad rankings depend on dynamic auction factors like Quality Score, bid amount, search intent, location, and competitor actions."
    },
    {
      q: "How long will it take to see the desired results with Google Ads?",
      a: "You will start seeing impressions and clicks almost immediately after the ads go live. However, gathering enough data to analyze and optimize for conversions and ROI typically takes from a few days to a few weeks."
    },
    {
      q: "Do you offer custom Google Ads Packages?",
      a: "Yes, we build tailor-made Google Ads management packages based on your specific requirements, business scale, and digital goals."
    },
    {
      q: "Can I switch between PPC Packages?",
      a: "Absolutely. You can switch between different service levels or customized packages as your business requirements scale."
    }
  ];

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
          <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => router.push('/')}>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg p-1 group-hover:scale-110 transition-transform duration-300">
              <img
                src="/logo.png"
                alt="kineticDrive Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
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
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => router.push('/')}>Home</span>
            <span>/</span>
            <span className="text-amber-500 font-medium">Google Ads Agency</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Headline and Copy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                Certified Google Partner Agency
              </span>
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
                  <span>Google Ads Certified Team</span>
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
      <section className="py-20 px-6 bg-[#0F0F18]/40 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Work With a Google Ads Agency That <span className="text-amber-500">Delivers Results</span>
              </h2>
              <div className="w-20 h-1 bg-amber-500 rounded-full" />
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                We maximize your Google Ads Return On Investment (ROI) by performing regular testing, intensive campaign optimization, and transparent campaign reports. We don't just run ads; we continuously restructure your campaign logic, craft persuasive ad copy, and optimize destination landing pages to make sure you pay less per lead.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                By focusing on performance and data-driven insights rather than hit-and-trial methods, our certified specialists ensure your ad spend yields the maximum volume of high-quality business leads.
              </p>
            </div>
            
            <div className="lg:col-span-5 flex flex-col items-center justify-center bg-[#13131F] border border-white/5 rounded-2xl p-8 text-center space-y-4">
              <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 border border-amber-500/20">
                <Award className="w-10 h-10" />
              </div>
              <h4 className="text-lg font-bold text-white">Google Partner Certified</h4>
              <p className="text-xs text-gray-400">
                Recognized for managing campaigns under strict standards to deliver optimal ROI and client satisfaction.
              </p>
              <div className="border border-amber-500/20 bg-amber-500/5 px-4 py-2 rounded-lg text-xs font-semibold text-amber-400 tracking-wide">
                GOOGLE ADS PARTNER
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CREDIBILITY BANNER */}
      <section className="py-16 px-6 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-b border-white/5 relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl font-extrabold">
              Increase Traffic & Leads with Experienced Partners
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              Over 9+ years of experience managing campaigns for B2B, real estate, e-commerce, and healthcare.
            </p>
          </div>
          <button 
            onClick={() => triggerQuickModal('Credibility Banner CTA')}
            className="shrink-0 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-500/20 cursor-pointer"
          >
            Talk to us today
          </button>
        </div>
      </section>

      {/* 4. CERTIFIED PARTNER BLOCK */}
      <section className="py-20 px-6 bg-[#050508] border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-last lg:order-first bg-[#0F0F18] border border-white/10 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-amber-500/5 rounded-full blur-xl pointer-events-none" />
              <div className="text-center space-y-6">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest block">Accreditation</span>
                <div className="inline-block p-4 bg-white/5 rounded-xl border border-white/10">
                  <Award className="w-16 h-16 text-amber-500 mx-auto" />
                </div>
                <h4 className="text-lg font-bold text-white">KineticDrive Certified Partner</h4>
                <p className="text-xs text-gray-400 max-w-xs mx-auto">
                  Our professionals undergo rigorous training and hold active Google Ads certifications in Search, Display, Video, and Shopping Ads.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">Trust & Authority</span>
              <h2 className="text-3xl md:text-4xl font-extrabold">Certified Google Partner: KineticDrive</h2>
              <div className="w-20 h-1 bg-amber-500 rounded-full" />
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                As a Google certified partner, KineticDrive has a track record of running ads with maximum budget efficiency. While many agencies run Google Ads, few maintain the strict performance criteria, ad spend minimums, and continuous optimization metrics required to hold the partner badge.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                We work directly with Google's dedicated agency team to gain early access to beta features, advanced bidding algorithms, and market intelligence reports, giving our clients a strong competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PAIN-POINT CHECKLIST + CTA */}
      <section className="py-20 px-6 bg-[#0F0F18]/30 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">Identify The Issues</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Struggling with Your Current Ad Performance?</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Checklist */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl font-bold mb-6 text-gray-300">Are you facing any of these bottlenecks?</h3>
              {[
                "Losing money daily on expensive, irrelevant clicks?",
                "Tired of low-quality leads that never convert into sales?",
                "Experiencing poor ROI and no clear performance reporting?",
                "Ads getting disapproved repeatedly by Google without reason?",
                "Competitors dominating the top positions and stealing your market share?",
                "No time to research negative keywords or optimize bid strategies?"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 bg-[#0F0F18] border border-white/5 rounded-xl">
                  <ArrowRight className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>

            {/* Orange CTA Box */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 text-black flex flex-col justify-between h-full relative overflow-hidden shadow-xl shadow-amber-500/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
                
                <div className="space-y-4">
                  <span className="bg-white/20 border border-white/30 text-black text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-md inline-block">
                    Free Consultation
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold leading-tight">
                    If your answer is YES to any of the above, let's fix it.
                  </h3>
                  <p className="text-black/80 text-sm leading-relaxed">
                    Consult with our Google Ads audit specialist to isolate campaign mistakes and build a roadmap to profitability.
                  </p>
                </div>
                
                <button 
                  onClick={() => triggerQuickModal('Pain Point CTA')}
                  className="mt-8 w-full bg-black text-white hover:bg-black/90 font-bold py-4 rounded-xl text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 4-COLUMN VALUE PROPS */}
      <section className="py-20 px-6 bg-[#050508] border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Dominate Your Industry",
                desc: "Establish clear market leadership with a robust keyword strategy and high-performing ads."
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Be One Step Ahead",
                desc: "Continuously outpace competitor movements with advanced analytical tools and intelligence."
              },
              {
                icon: <Layers className="w-8 h-8" />,
                title: "Cultivate Online Experiences",
                desc: "Engaging ad copywriting and landing page designs that turn interest into conversions."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Success You Can Measure",
                desc: "Full transparency with detailed performance dashboards and clear KPIs."
              }
            ].map((prop, idx) => (
              <div key={idx} className="bg-[#0F0F18] border border-white/5 hover:border-amber-500/30 p-6 rounded-2xl space-y-4 transition-all duration-300 hover:y-[-4px]">
                <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-xl flex items-center justify-center">
                  {prop.icon}
                </div>
                <h4 className="text-lg font-bold text-white">{prop.title}</h4>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
      <section className="py-20 px-6 bg-[#050508] border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">What We Provide</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Comprehensive Google Ads Services</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="w-6 h-6 text-amber-500" />,
                title: "Search Ads",
                desc: "Promote your services directly to users search-ready keywords. Get maximum visibility on Google search results."
              },
              {
                icon: <Globe className="w-6 h-6 text-amber-500" />,
                title: "Display Ads",
                desc: "Promote your business across millions of Google partner sites, YouTube, and Gmail with engaging visual banners."
              },
              {
                icon: <RefreshCw className="w-6 h-6 text-amber-500" />,
                title: "Re-Marketing",
                desc: "Re-engage target users who visited your website before but didn't convert, boosting sales volume."
              },
              {
                icon: <ShoppingBag className="w-6 h-6 text-amber-500" />,
                title: "Shopping Ads",
                desc: "Display product images, price details, and store ratings at the top of Google search results to scale e-commerce sales."
              },
              {
                icon: <Smartphone className="w-6 h-6 text-amber-500" />,
                title: "App Promotions",
                desc: "Boost your iOS and Android mobile app installations with highly targeted mobile campaigns."
              },
              {
                icon: <FileText className="w-6 h-6 text-amber-500" />,
                title: "Google Ads Audit",
                desc: "Get an in-depth audit of your existing Google Ads campaigns to locate budget leaks and optimize structure."
              }
            ].map((srv, idx) => (
              <div key={idx} className="bg-[#0F0F18] border border-white/5 hover:border-amber-500/30 p-8 rounded-2xl space-y-4 transition-all duration-300 group">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-colors duration-300">
                  {React.cloneElement(srv.icon, { className: "w-6 h-6 text-amber-500 group-hover:text-black transition-colors" })}
                </div>
                <h3 className="text-xl font-bold text-white">{srv.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. WHY HIRE US */}
      <section className="py-20 px-6 bg-[#0F0F18]/20 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">Proven Edge</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Why Hire KineticDrive for Google Ads?</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* List */}
            <div className="lg:col-span-7 space-y-4">
              {[
                "Get a steady stream of highly qualified, intent-based leads.",
                "Acquire customers actively looking for your specific services.",
                "Advanced competitor tracking & intelligence strategies.",
                "Prevent budget wastage on low-value/irrelevant terms.",
                "Expand business scope to national and international markets.",
                "Certified, dedicated Google Partner support professionals.",
                "Transparent monthly KPIs and comprehensive reporting.",
                "Continuous feedback on landing page optimization metrics.",
                "Custom visual pages build to improve conversions.",
                "Confidence to scale budgets with proven ad structures."
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-gray-300 text-sm md:text-base">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Callout */}
            <div className="lg:col-span-5 bg-[#0F0F18] border border-white/10 p-8 rounded-2xl text-center space-y-6">
              <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mx-auto border border-amber-500/20">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Ready to Start?</h3>
              <p className="text-xs text-gray-400 leading-relaxed max-w-xs mx-auto">
                Request a custom campaign outline and budget proposal designed specifically for your industry.
              </p>
              <button 
                onClick={() => triggerQuickModal('Why Hire Us CTA')}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-bold py-3.5 rounded-xl text-sm transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                Request a Proposal
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 10. HOW WE DO IT (ACCORDION) */}
      <section className="py-20 px-6 bg-[#050508] border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">Methodology</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">How We Deliver Higher ROI</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
            <p className="text-gray-400 text-xs md:text-sm mt-4">
              It is a precise blend of years of experience and regular testing. Here is a brief look at our process.
            </p>
          </div>

          <div className="space-y-4">
            {howWeDoItItems.map((item, idx) => {
              const isExpanded = expandedHow === idx;
              return (
                <div key={idx} className="bg-[#0F0F18] border border-white/5 rounded-xl overflow-hidden transition-all duration-300">
                  <button 
                    onClick={() => setExpandedHow(isExpanded ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left text-white hover:text-amber-400 font-bold transition-colors cursor-pointer"
                  >
                    <span>{item.title}</span>
                    {isExpanded ? <ChevronUp className="w-5 h-5 text-amber-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                  </button>
                  
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 text-gray-300 text-sm md:text-base leading-relaxed border-t border-white/5">
                      {item.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. FAQ ACCORDION */}
      <section className="py-20 px-6 bg-[#0F0F18]/20 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Common Questions Answered</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, idx) => {
              const isExpanded = expandedFaq === idx;
              return (
                <div key={idx} className="bg-[#0F0F18] border border-white/5 rounded-xl overflow-hidden transition-all duration-300">
                  <button 
                    onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left text-white hover:text-amber-400 font-bold transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isExpanded ? <ChevronUp className="w-5 h-5 text-amber-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                  </button>
                  
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 text-gray-300 text-sm md:text-base leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

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

      {/* STICKY ENQUIRY TAB (Desktop) / BAR (Mobile) */}
      <div className="fixed bottom-0 left-0 w-full md:w-auto md:bottom-1/2 md:translate-y-1/2 md:left-auto md:right-0 z-40">
        {/* Mobile sticky bar */}
        <div className="block md:hidden bg-[#0F0F18]/90 border-t border-white/10 backdrop-blur-md px-6 py-4 flex items-center justify-between shadow-2xl">
          <span className="text-sm font-bold text-amber-500">Need Immediate Help?</span>
          <button 
            onClick={() => triggerQuickModal('Sticky Tab Modal')}
            className="bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold px-4 py-2 rounded-lg text-xs cursor-pointer"
          >
            Enquiry Now
          </button>
        </div>

        {/* Desktop vertical tab */}
        <button 
          onClick={() => triggerQuickModal('Sticky Tab Modal')}
          className="hidden md:flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-extrabold px-6 py-3 rounded-t-xl origin-bottom-right rotate-270 translate-x-[45px] hover:translate-x-[25px] transition-transform duration-300 shadow-2xl cursor-pointer"
          style={{ transform: "rotate(-90deg) translateY(-50%)" }}
        >
          <span>Enquiry Now</span>
        </button>
      </div>

      {/* Lead capture modal */}
      <QuickLeadModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        source={modalSource}
        utmParams={utmParams}
        initialWebsiteUrl={initialUrl}
      />
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

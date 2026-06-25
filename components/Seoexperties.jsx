"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Search, BarChart2, Globe, TrendingUp, Target, Award } from 'lucide-react';

const seoServices = [
  {
    title: "Keyword Research & Strategy",
    icon: Search,
    description: "We identify high-value keywords your target audience is actively searching for, then build a comprehensive strategy to rank for those terms.",
    stats: [{ value: "500+", label: "Keywords Analyzed" }, { value: "85%", label: "Success Rate" }],
  },
  {
    title: "On-Page Optimization",
    icon: Globe,
    description: "We optimize your content, meta tags, headers, and site structure so search engines can easily crawl and understand your website.",
    stats: [{ value: "40%", label: "Avg. Visibility Increase" }, { value: "3×", label: "Faster Indexing" }],
  },
  {
    title: "Technical SEO",
    icon: BarChart2,
    description: "We resolve technical issues that impact search visibility — site speed, mobile-friendliness, structured data, and crawl errors.",
    stats: [{ value: "99%", label: "Mobile Optimization" }, { value: "2.5s", label: "Avg. Load Time" }],
  },
  {
    title: "Content Optimization",
    icon: TrendingUp,
    description: "We create and optimize high-quality, relevant content that satisfies user intent and establishes your site as an authority.",
    stats: [{ value: "65%", label: "More Engagement" }, { value: "4×", label: "Higher CTR" }],
  },
  {
    title: "Competitor Analysis",
    icon: Target,
    description: "We analyze your competitors' strategies to identify opportunities and develop tactics to outperform them in search results.",
    stats: [{ value: "Top 10", label: "Competitor Insights" }, { value: "2×", label: "Growth Strategy" }],
  },
  {
    title: "Performance Tracking",
    icon: Award,
    description: "We continuously monitor your SEO performance with comprehensive analytics and reporting to refine strategies and maximise results.",
    stats: [{ value: "24/7", label: "Rank Monitoring" }, { value: "Monthly", label: "Detailed Reports" }],
  },
];

const resultCards = [
  { value: "90%", label: "Higher Organic Traffic" },
  { value: "70%", label: "Lower Acquisition Cost" },
  { value: "45%", label: "Conversion Increase" },
];

export default function SeoExpertise() {
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);

  /* IntersectionObserver scroll-reveal */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* Auto-cycle tabs */
  useEffect(() => {
    const id = setInterval(() => setActiveTab((p) => (p + 1) % seoServices.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="seo-section"
      className="relative overflow-hidden bg-[#050508] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-amber-500/6 blur-3xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/8 px-4 py-1.5 mb-4">
            <Search size={14} className="text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">SEO Expertise</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Search Engine Optimization{' '}
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              That Drives Results
            </span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
            Our proven SEO strategies drive organic traffic, increase conversion rates, and grow your business with sustainable results.
          </p>
        </div>

        {/* Tab section */}
        <div className={`mb-10 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Scrollable tab bar */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-3 mb-6">
            {seoServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`inline-flex flex-shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    activeTab === i
                      ? 'bg-amber-400/15 text-amber-300 border border-amber-400/30'
                      : 'bg-white/5 text-gray-400 border border-white/7 hover:bg-white/8 hover:text-gray-300'
                  }`}
                >
                  <Icon size={14} />
                  <span className="whitespace-nowrap">{svc.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active tab content panel */}
          <div className="rounded-2xl border border-white/7 bg-[#0F0F18] p-6 sm:p-8">
            {seoServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div key={i} className={`transition-all duration-500 ${activeTab === i ? 'block opacity-100' : 'hidden opacity-0'}`}>
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    {/* Text */}
                    <div className="flex-1">
                      <h3 className="flex items-center gap-3 text-xl font-bold text-white mb-3 sm:text-2xl">
                        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-amber-400/15 text-amber-400">
                          <Icon size={20} />
                        </span>
                        {svc.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">{svc.description}</p>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-4 flex-shrink-0 flex-wrap sm:flex-nowrap">
                      {svc.stats.map((s, j) => (
                        <div key={j} className="rounded-xl border border-white/7 bg-white/3 p-4 text-center min-w-[100px]">
                          <div className="text-2xl font-bold text-amber-300">{s.value}</div>
                          <div className="mt-1 text-xs text-gray-500">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom dots */}
                  <div className="mt-6 flex items-center justify-between border-t border-white/6 pt-5">
                    <div className="flex items-center gap-2 text-sm text-white">
                      <Award size={16} className="text-amber-400" />
                      Our approach is data-driven and results-oriented
                    </div>
                    <div className="hidden gap-1.5 sm:flex">
                      {seoServices.map((_, j) => (
                        <button key={j}
                          className={`h-1.5 rounded-full transition-all duration-300 ${activeTab === j ? 'w-6 bg-amber-400' : 'w-1.5 bg-white/20'}`}
                          onClick={() => setActiveTab(j)}
                          aria-label={`Service ${j + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Results banner */}
        <div
          className={`rounded-2xl border border-amber-400/15 p-6 sm:p-8 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.08) 0%, #0F0F18 100%)', transitionDelay: '300ms' }}
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                Ready to improve your search rankings?
              </h3>
              <p className="mt-1 text-gray-400">Our SEO strategies deliver measurable results that grow your business.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {resultCards.map((r) => (
                <div key={r.label} className="rounded-xl border border-white/7 bg-black/30 p-4 text-center min-w-[110px]">
                  <div className="text-2xl font-bold text-amber-300">{r.value}</div>
                  <div className="mt-1 text-xs text-gray-500">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  MousePointerClick,
  Share2,
  FileText,
  Code2,
  Mail,
  ShieldCheck,
  Video,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";

/* ── Service data ── */
const SERVICES = [
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description:
      "Rank your website at the top of Google with our proven SEO strategies. As a trusted SEO company, we focus on organic growth, traffic, and long‑term brand visibility.",
    tags: ["Local SEO", "E‑commerce SEO", "Technical SEO"],
    cta: "Claim Your Free SEO Audit",
    color: "#f59e0b",
  },
  {
    icon: MousePointerClick,
    title: "Pay‑Per‑Click (PPC) Advertising",
    description:
      "Maximize ROI with well‑crafted PPC campaigns. Our Google Ads specialists create high‑converting ad campaigns to deliver instant leads and sales.",
    tags: ["Google Ads", "Meta Ads", "Retargeting Campaigns"],
    cta: "Boost Your Business with Paid Ads",
    color: "#3b82f6",
  },
  {
    icon: Share2,
    title: "Social Media Marketing (SMM)",
    description:
      "Boost engagement, followers, and brand awareness. We create viral campaigns that connect with your audience across all major platforms.",
    tags: ["Instagram", "Facebook", "LinkedIn", "Twitter"],
    cta: "Grow Your Social Presence",
    color: "#8b5cf6",
  },
  {
    icon: FileText,
    title: "Content Marketing Services",
    description:
      "Build authority with SEO‑friendly blogs, articles, and website content. Our content strategies boost search rankings and conversions.",
    tags: ["Storytelling", "Blog Writing", "Video Content"],
    cta: "Get High‑Quality Content",
    color: "#10b981",
  },
  {
    icon: Code2,
    title: "Web Design & Development",
    description:
      "Get responsive, SEO‑ready, and high‑performing websites. We help brands build strong online presence with modern web technologies.",
    tags: ["Mobile‑optimized", "Fast‑loading", "SEO‑friendly"],
    cta: "Get Your Website Now",
    color: "#f59e0b",
  },
  {
    icon: Mail,
    title: "Email Marketing Services",
    description:
      "Nurture leads with targeted and automated email campaigns. Our email marketing experts design strategies that improve open rates and conversions.",
    tags: ["Drip Campaigns", "Newsletters", "A/B Testing"],
    cta: "Launch Your Email Strategy",
    color: "#ef4444",
  },
  {
    icon: ShieldCheck,
    title: "Online Reputation Management (ORM)",
    description:
      "Protect and enhance your brand image. We monitor, manage, and improve your online reputation across review sites and social platforms.",
    tags: ["Press Releases", "Media Outreach", "Brand Awareness"],
    cta: "Get Featured in the Media",
    color: "#06b6d4",
  },
  {
    icon: Video,
    title: "Video Marketing Services",
    description:
      "Engage your audience with powerful video ads and campaigns. Our video marketing team produces content that drives more reach and conversions.",
    tags: ["Social Media Influencers", "Niche Industry", "YouTube"],
    cta: "Get Started with Video Marketing",
    color: "#ec4899",
  },
  {
    icon: ShoppingCart,
    title: "E‑Commerce Marketing Services",
    description:
      "Scale your online store with our specialised e‑commerce marketing strategies. From SEO to paid ads, we drive sales and revenue growth.",
    tags: ["Shopify", "WooCommerce", "Custom Solutions"],
    cta: "Launch Your E‑commerce Store",
    color: "#f97316",
  },
];

/* ── Animated card ── */
function ServiceCard({ service, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // stagger by index
          setTimeout(() => setIsVisible(true), index * 100);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  const IconComp = service.icon;

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-md transition-all duration-500"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.6s cubic-bezier(.22,1,.36,1), transform 0.6s cubic-bezier(.22,1,.36,1)",
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl transition-all duration-500"
        style={{
          background: isHovered
            ? `linear-gradient(90deg, transparent, ${service.color}, transparent)`
            : "transparent",
        }}
      />

      {/* Hover glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${service.color}12, transparent 50%)`,
        }}
      />

      <div className="relative flex flex-1 flex-col p-6 sm:p-7">
        {/* Icon */}
        <div
          className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
          style={{
            background: `${service.color}15`,
            boxShadow: isHovered ? `0 8px 30px ${service.color}25` : "none",
          }}
        >
          <IconComp
            className="h-7 w-7 transition-colors duration-300"
            style={{ color: service.color }}
          />
        </div>

        {/* Title */}
        <h3 className="mb-3 text-lg font-bold leading-snug text-white group-hover:text-amber-100 transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
          {service.description}
        </p>

        {/* Tags */}
        <div className="mb-5 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300 transition-all duration-300 group-hover:border-amber-400/20 group-hover:bg-amber-400/[0.06] group-hover:text-amber-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-300"
          style={{ color: service.color }}
        >
          {service.cta}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}

/* ── Main section ── */
export default function DigitalMarketingServices() {
  return (
    <section className="relative overflow-hidden bg-[#050508] py-20 sm:py-28">
      {/* Background texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Glow blobs */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-amber-500/[0.06] blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-500/[0.04] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
            Our Services
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Grow Faster with Our{" "}
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Digital Marketing Services
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
            From SEO and PPC to social media and web development — we deliver
            end‑to‑end digital solutions that drive real business growth for
            startups, SMEs, and enterprise brands.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, idx) => (
            <ServiceCard key={service.title} service={service} index={idx} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 px-8 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-amber-500/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-amber-500/30"
          >
            Get a Free Strategy Session
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

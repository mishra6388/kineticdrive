"use client";
import React, { useState, useEffect, useRef } from "react";
import { Shield, Clock, Users, Zap, Code, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Proven Track Record",
    description: "With 500+ successful projects delivered, our team has demonstrated excellence across various industries and technologies.",
  },
  {
    icon: Clock,
    title: "Rapid Development",
    description: "Our streamlined agile process ensures timely delivery without compromising on quality or performance.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "We provide ongoing maintenance and 24/7 support so your digital solutions continue to perform flawlessly.",
  },
  {
    icon: Zap,
    title: "Performance Optimized",
    description: "Every solution we build is optimized for speed, reliability, and exceptional user experience across all devices.",
  },
  {
    icon: Code,
    title: "Clean, Modern Code",
    description: "We follow industry best practices and write maintainable, scalable code that grows with your business needs.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Rigorous testing protocols ensure your applications are bug-free and ready for real-world deployment.",
  },
];

export default function WhyChoose() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  /* Auto-cycle showcase */
  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % features.length), 3000);
    return () => clearInterval(id);
  }, []);

  /* Scroll-reveal */
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

  const ActiveIcon = features[active].icon;

  return (
    <section
      ref={sectionRef}
      id="features-section"
      className="relative overflow-hidden bg-[#050508] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/5 blur-3xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block mb-4 rounded-full border border-amber-400/25 bg-amber-400/8 px-4 py-1 text-xs font-bold uppercase tracking-widest text-amber-400">
            Why Choose Us
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Built to{" "}
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              Deliver Results
            </span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
            We combine technical expertise with creative innovation to deliver solutions that exceed expectations.
          </p>
        </div>

        {/* 2-col layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">

          {/* ── Animated showcase panel ── */}
          <div className={`relative overflow-hidden rounded-2xl transition-all duration-1000 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            style={{ background: "linear-gradient(145deg, #0F0F18, #13131F)", border: "1px solid rgba(255,255,255,0.07)" }}>

            {/* Inner glow matching active card */}
            <div className="absolute inset-0 opacity-20 transition-all duration-700"
              style={{ background: `radial-gradient(circle at 50% 30%, ${["#F59E0B","#34D399","#38BDF8","#F472B6","#818CF8","#C084FC"][active]}40, transparent 70%)` }} />

            <div className="relative flex flex-col items-center justify-center px-8 py-14 text-center min-h-[320px] sm:min-h-[360px]">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i}
                    className={`absolute inset-0 flex flex-col items-center justify-center px-8 text-center transition-all duration-500 ${active === i ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}`}>
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600">
                      <Icon size={28} className="text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{f.title}</h3>
                    <p className="text-gray-400 leading-relaxed max-w-xs">{f.description}</p>
                  </div>
                );
              })}

              {/* Dot indicators */}
              <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
                {features.map((_, i) => (
                  <button key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${active === i ? "w-6 bg-amber-400" : "w-1.5 bg-white/20"}`}
                    onClick={() => setActive(i)}
                    aria-label={`Feature ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ── Feature grid ── */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((f, i) => {
              const Icon = f.icon;
              const isActive = active === i;
              return (
                <div key={i}
                  onMouseEnter={() => setActive(i)}
                  className={`group cursor-pointer rounded-2xl p-5 transition-all duration-300 ${
                    visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                  } ${isActive
                    ? "border-amber-400/30 bg-amber-400/5"
                    : "border-white/7 bg-white/3 hover:border-amber-400/20 hover:bg-white/5"
                  }`}
                  style={{
                    border: isActive ? "1px solid rgba(251,191,36,0.30)" : "1px solid rgba(255,255,255,0.07)",
                    transitionDelay: `${i * 60}ms`,
                  }}
                >
                  <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300 ${isActive ? "bg-amber-400/20 text-amber-400" : "bg-white/5 text-gray-400 group-hover:text-amber-400"}`}>
                    <Icon size={19} />
                  </div>
                  <h3 className={`text-base font-semibold mb-1.5 transition-colors duration-200 ${isActive ? "text-amber-300" : "text-white"}`}>
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

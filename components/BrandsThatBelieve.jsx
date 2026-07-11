'use client';
import { useEffect, useRef, useState } from 'react';

const brands = [
  { name: 'Google', color: '#4285F4' },
  { name: 'Microsoft', color: '#00A4EF' },
  { name: 'Amazon', color: '#FF9900' },
  { name: 'Meta', color: '#0668E1' },
  { name: 'Apple', color: '#A2AAAD' },
  { name: 'Netflix', color: '#E50914' },
  { name: 'Spotify', color: '#1DB954' },
  { name: 'Adobe', color: '#FF0000' },
  { name: 'Slack', color: '#4A154B' },
  { name: 'Stripe', color: '#635BFF' },
];

function BrandCard({ name, color }) {
  return (
    <div className="brand-card group">
      <div
        className="brand-card-glow"
        style={{ background: `${color}15` }}
      />
      <span
        className="brand-card-name"
        style={{
          background: `linear-gradient(135deg, ${color}, ${color}CC)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {name}
      </span>
    </div>
  );
}

export default function BrandsThatBelieve() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

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

  // Double the array for seamless loop
  const row1 = [...brands, ...brands];
  const row2 = [...brands.slice().reverse(), ...brands.slice().reverse()];

  return (
    <section
      ref={sectionRef}
      id="brands-trust"
      className="relative overflow-hidden bg-[#050508] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-amber-500/5 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-1/4 -right-32 h-80 w-80 rounded-full bg-purple-500/5 blur-[100px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div
          className={`text-center mb-14 sm:mb-20 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block mb-4 rounded-full border border-amber-400/25 bg-amber-400/8 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-400">
            Trusted Partners
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Brands That{' '}
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              Believe in Us
            </span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
            We're proud to collaborate with industry leaders who trust us to deliver exceptional digital experiences.
          </p>
        </div>

        {/* Marquee Container */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Edge fades */}
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 sm:w-32 bg-gradient-to-r from-[#050508] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 sm:w-32 bg-gradient-to-l from-[#050508] to-transparent" />

            {/* Row 1 — scrolls left */}
            <div className="marquee-row mb-4">
              <div className="marquee-track marquee-left">
                {row1.map((b, i) => (
                  <BrandCard key={`r1-${i}`} name={b.name} color={b.color} />
                ))}
              </div>
            </div>

            {/* Row 2 — scrolls right */}
            <div className="marquee-row">
              <div className="marquee-track marquee-right">
                {row2.map((b, i) => (
                  <BrandCard key={`r2-${i}`} name={b.name} color={b.color} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee CSS */}
      <style jsx>{`
        .marquee-row {
          overflow: hidden;
          width: 100%;
        }

        .marquee-track {
          display: flex;
          gap: 1rem;
          width: max-content;
        }

        .marquee-left {
          animation: scrollLeft 35s linear infinite;
        }

        .marquee-right {
          animation: scrollRight 35s linear infinite;
        }

        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .brand-card {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 160px;
          height: 72px;
          padding: 0 2rem;
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba(15, 15, 24, 0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: default;
          overflow: hidden;
          flex-shrink: 0;
        }

        .brand-card:hover {
          border-color: rgba(251, 191, 36, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 8px 30px -10px rgba(251, 191, 36, 0.1);
        }

        .brand-card-glow {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.4s ease;
          border-radius: inherit;
        }

        .brand-card:hover .brand-card-glow {
          opacity: 1;
        }

        .brand-card-name {
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          white-space: nowrap;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 640px) {
          .brand-card {
            min-width: 130px;
            height: 60px;
            padding: 0 1.5rem;
          }
          .brand-card-name {
            font-size: 1rem;
          }
        }

        /* Pause on hover */
        .marquee-row:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

"use client";

import { useState } from "react";
import {
  Instagram,
  ArrowRight,
  Loader2,
  CheckCircle2,
  TrendingUp,
  Users,
  Zap,
  Shield,
} from "lucide-react";
import { useRouter } from "next/navigation";

const TRUST_BADGES = [
  { icon: <TrendingUp className="w-4 h-4" />, text: "4.2× Avg. Engagement" },
  { icon: <Users className="w-4 h-4" />, text: "800+ Brands Managed" },
  { icon: <Zap className="w-4 h-4" />, text: "48-hr Onboarding" },
  { icon: <Shield className="w-4 h-4" />, text: "97% Retention" },
];

const CHECKS = [
  "No lock-in contracts",
  "Dedicated content strategist",
  "Design & copy included",
];

export default function HeroSection() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.name.trim() || !form.phone.trim()) {
      setError("Name and phone number are required.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          service: "Social Media Management",
          source: "social-media-management-hero",
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      router.push("/thank-you");
    } catch (err) {
      setError(err.message || "Could not submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative bg-[#050508] overflow-hidden pt-16 pb-28">
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[55%] h-[70%] bg-amber-500/8 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top badge */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wide">
            <Instagram className="w-3.5 h-3.5" />
            FULL-SERVICE SOCIAL MEDIA MANAGEMENT FOR GROWING BRANDS
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left copy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
                Social Media that
                <br />
                actually{" "}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500">
                    grows you.
                  </span>
                  <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
                </span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
                KineticDrive handles your entire social media presence — content strategy,
                design, copywriting, scheduling, and growth. You focus on the business,
                we make your brand impossible to ignore.
              </p>
            </div>

            {/* Checklist */}
            <div className="flex flex-wrap gap-5">
              {CHECKS.map((c) => (
                <div key={c} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  {c}
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {TRUST_BADGES.map((b) => (
                <div
                  key={b.text}
                  className="flex items-center gap-2 px-3 py-2.5 bg-[#0F0F18] border border-white/5 rounded-xl"
                >
                  <span className="text-amber-500">{b.icon}</span>
                  <span className="text-xs font-semibold text-gray-300">{b.text}</span>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2.5">
                {["bg-amber-500", "bg-orange-500", "bg-amber-600", "bg-yellow-500"].map(
                  (color, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full border-2 border-[#050508] ${color} flex items-center justify-center text-xs font-bold text-black`}
                    >
                      {["A", "B", "C", "D"][i]}
                    </div>
                  )
                )}
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Trusted by 200+ brands</div>
                <div className="text-[10px] text-gray-500">D2C, SaaS, EdTech, Real Estate &amp; more</div>
              </div>
            </div>
          </div>

          {/* Right: lead card */}
          <div className="lg:col-span-5">
            <div className="bg-[#0F0F18]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl shadow-amber-500/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
              <div className="absolute top-0 right-0 w-28 h-28 bg-amber-500/10 blur-2xl rounded-full pointer-events-none" />

              <div className="mb-6">
                <span className="inline-block text-xs font-bold text-amber-500 uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-lg mb-3">
                  Free · No obligation
                </span>
                <h2 className="text-white font-extrabold text-2xl">
                  Get a Free Social Media Audit
                </h2>
                <p className="text-gray-400 text-sm mt-1.5">
                  We'll review your profiles and send a written action plan within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full bg-[#13131F] border border-white/10 rounded-xl py-3.5 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all text-sm"
                />
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone / WhatsApp number"
                  className="w-full bg-[#13131F] border border-white/10 rounded-xl py-3.5 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all text-sm"
                />

                {error && (
                  <p className="text-red-400 text-xs bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-bold py-4 rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer text-sm shadow-lg shadow-amber-500/25"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      Request Free Audit <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              <div className="flex items-center justify-center gap-2 mt-5 text-gray-500 text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500/70" />
                No spam. No obligation. Just a straight answer.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Send, AlertCircle } from "lucide-react";

const BUDGETS = ["Below ₹25,000", "₹25,000 – ₹50,000", "₹50,000 – ₹1,00,000", "Above ₹1,00,000"];
const WEBSITE_TYPES = ["Business Website", "E-commerce Store", "Landing Page Only", "No Website Yet"];
const SERVICES = ["Facebook Ads", "Instagram Ads", "Facebook + Instagram Ads", "Google Ads", "Complete Digital Marketing"];

const inputCls =
  "w-full bg-[#13131F] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all text-sm";

export default function DetailedLeadForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: SERVICES[0],
    website_type: WEBSITE_TYPES[0],
    budget: BUDGETS[0],
    requirements: "",
  });
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
          ...form,
          source: "facebook-ads-agency-detailed-form",
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
    <section id="contact-section" className="py-20 px-6 bg-[#050508]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* Info Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-[#0F0F18] border border-white/5 p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6">
              <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">
                Let's talk specifics
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                Tell us about your business
              </h2>
              <div className="w-16 h-1 bg-amber-500 rounded-full" />
              <p className="text-gray-400 text-sm leading-relaxed">
                The more we know upfront, the more useful your free audit will be. Our
                Facebook Ads specialists will review your setup and build a tailored strategy.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/5">
              {[
                { label: "5,000+ Accounts", sub: "Successfully Optimized" },
                { label: "98% Client Retention", sub: "Long-term Partnerships" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/20 rounded-lg flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">{stat.label}</h5>
                    <p className="text-xs text-gray-400">{stat.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0F0F18]/90 border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
              <h3 className="text-2xl font-bold text-white mb-6">Detailed Lead Form</h3>

              {error && (
                <div className="flex items-center gap-2 p-3.5 mb-6 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Field label="Name *">
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" className={inputCls} />
                  </Field>
                  <Field label="Email address">
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@company.com" className={inputCls} />
                  </Field>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Field label="Phone number *">
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="Your phone number" className={inputCls} />
                  </Field>
                  <Field label="Company name">
                    <input name="company" value={form.company} onChange={handleChange} placeholder="Optional" className={inputCls} />
                  </Field>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <Field label="Service">
                    <select name="service" value={form.service} onChange={handleChange} className={inputCls}>
                      {SERVICES.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </Field>
                  <Field label="Website type">
                    <select name="website_type" value={form.website_type} onChange={handleChange} className={inputCls}>
                      {WEBSITE_TYPES.map((w) => <option key={w}>{w}</option>)}
                    </select>
                  </Field>
                  <Field label="Monthly ad budget">
                    <select name="budget" value={form.budget} onChange={handleChange} className={inputCls}>
                      {BUDGETS.map((b) => <option key={b}>{b}</option>)}
                    </select>
                  </Field>
                </div>

                <Field label="What are you trying to achieve?">
                  <textarea
                    name="requirements"
                    value={form.requirements}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your campaign goals..."
                    className={`${inputCls} resize-none`}
                  />
                </Field>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-60"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
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
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest ml-0.5 mb-2 block">
        {label}
      </label>
      {children}
    </div>
  );
}

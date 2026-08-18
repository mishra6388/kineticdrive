"use client";

const STATS = [
  { value: "800+", label: "Brands managed" },
  { value: "4.2×", label: "Avg. engagement lift" },
  { value: "48 hrs", label: "Onboarding time" },
  { value: "97%", label: "Client retention" },
];

export default function TrustStrip() {
  return (
    <section className="bg-[#050508] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map((s) => (
          <div key={s.label} className="text-center lg:text-left">
            <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              {s.value}
            </p>
            <p className="text-gray-400 text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

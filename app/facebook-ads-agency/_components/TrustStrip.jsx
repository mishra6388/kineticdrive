"use client";

const STATS = [
  { value: "5,000+", label: "Ad accounts managed" },
  { value: "3.1x", label: "Avg. ROAS improvement" },
  { value: "24 hrs", label: "Audit turnaround" },
  { value: "98%", label: "Client retention" },
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

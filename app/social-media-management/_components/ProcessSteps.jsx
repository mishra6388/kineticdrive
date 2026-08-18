"use client";

const STEPS = [
  {
    n: "01",
    title: "Onboarding & brand audit",
    body: "We review your existing profiles, content, competitors, and analytics to identify exactly what's working and what's wasting effort.",
  },
  {
    n: "02",
    title: "Strategy & calendar sign-off",
    body: "You approve a full monthly content calendar — topics, formats, captions, and visuals — before we publish a single post.",
  },
  {
    n: "03",
    title: "Design, write & schedule",
    body: "Our creative team produces all content. We schedule at peak times for your specific audience on each platform.",
  },
  {
    n: "04",
    title: "Engage & report",
    body: "We manage comments and DMs daily, then send you a plain-language monthly report — growth, reach, top posts, and next steps.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="bg-[#050508] py-24 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">
            How we work
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mt-2">
            The same four steps, every account, every month.
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {STEPS.map((step) => (
            <div
              key={step.n}
              className="bg-[#050508] p-8 lg:p-10 hover:bg-[#0F0F18] transition-colors duration-300 group"
            >
              <span className="text-sm font-bold text-amber-500 tracking-widest">
                {step.n}
              </span>
              <h3 className="text-white font-bold text-xl mt-3 mb-2 group-hover:text-amber-400 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

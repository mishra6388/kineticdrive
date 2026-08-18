"use client";

const STEPS = [
  {
    n: "01",
    title: "Audience mapping",
    body: "We build your Ideal Customer Profile from your existing buyers, not guesswork — then translate it into Meta's targeting signals: interests, lookalikes, and retargeting pools.",
  },
  {
    n: "02",
    title: "Creative & copy testing",
    body: "Every campaign launches with 3–5 creative variants. We let the data pick the winner instead of relying on one 'best guess' ad.",
  },
  {
    n: "03",
    title: "Launch & optimize",
    body: "Daily bid and budget checks in week one, then a structured weekly optimization cycle — cutting what underperforms, scaling what works.",
  },
  {
    n: "04",
    title: "Scale & report",
    body: "Once a campaign proves ROAS, we scale spend in controlled steps and hand you a plain-language report — no jargon, just what changed and why.",
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
            The same four steps, every account, every time.
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {STEPS.map((step, i) => (
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

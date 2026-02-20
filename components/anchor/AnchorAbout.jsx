export default function AnchorAbout({ anchor }) {
  if (!anchor.about) return null;

  return (
    <section className="bg-[#050505] py-24 px-6 border-b border-white/5">
      <div className="max-w-4xl mx-auto space-y-10 group">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center text-yellow-500 font-bold transition-all group-hover:scale-110">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-black text-white uppercase tracking-widest">Professional Bio</h2>
            <p className="text-[10px] text-gray-600 uppercase font-black tracking-[0.2em] mt-1">Background & Expertise</p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-0 bottom-0 w-1 bg-yellow-500/20 rounded-full" />
          <p className="text-gray-400 text-lg md:text-xl leading-[1.8] font-medium tracking-tight">
            {anchor.about}
          </p>
        </div>
      </div>
    </section>
  );
}

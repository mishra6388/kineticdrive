export default function AnchorHero({ anchor }) {
  return (
    <div className="relative h-[60vh] md:h-[75vh] min-h-[500px] overflow-hidden flex items-center justify-center">

      {/* Background Cinematic Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={anchor.image_url}
          alt={`Anchor ${anchor.anchor_code}`}
          className="w-full h-full object-cover grayscale-[0.3] scale-105"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[20px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-[#050505]" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center space-y-8 px-6 animate-in fade-in zoom-in duration-1000">
        <div className="flex items-center justify-center gap-2 text-yellow-500 uppercase tracking-[0.4em] font-black text-[10px]">
          <div className="w-12 h-0.5 bg-yellow-500" />
          Elite Talent
          <div className="w-12 h-0.5 bg-yellow-500" />
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase italic">
            Anchor <span className="text-yellow-500">{anchor.anchor_code}</span>
          </h1>
          <p className="text-gray-400 font-medium tracking-[0.5em] text-[10px] md:text-xs">
            PROFESSIONAL EVENT HOST & EMCEE
          </p>
        </div>

        <div className="pt-8 flex justify-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Available</span>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="flex flex-col items-center gap-2">
            <span className="text-white font-bold text-xs uppercase tracking-tight">Verified</span>
            <span className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Status</span>
          </div>
        </div>
      </div>

      {/* Top Floating Badge */}
      <div className="absolute top-10 right-10 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl hidden md:block animate-in slide-in-from-right-10 duration-700">
        <p className="text-[10px] font-black uppercase text-gray-500 tracking-widest mb-1">Portfolio Code</p>
        <p className="text-white font-black tracking-tight">{anchor.anchor_code}</p>
      </div>
    </div>
  );
}

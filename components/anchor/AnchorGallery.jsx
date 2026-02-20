export default function AnchorGallery({ photos }) {
  if (!photos.length) return null;

  return (
    <section className="bg-[#050505] py-24 px-6 border-b border-white/5">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center text-yellow-500">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-black text-white uppercase tracking-widest">Visual Portfolio</h2>
              <p className="text-[10px] text-gray-600 uppercase font-black tracking-[0.2em] mt-1">Stills from the field</p>
            </div>
          </div>
          <div className="text-[10px] font-black uppercase tracking-widest text-gray-700">
            {photos.length} Captured Moments
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#0a0a0a] border border-white/5 animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={photo.image_url}
                alt="Professional Anchor Asset"
                className="w-full h-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <p className="text-[10px] font-black uppercase text-yellow-500 tracking-widest mb-1 italic">Event Snapshot</p>
                <div className="w-8 h-px bg-yellow-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

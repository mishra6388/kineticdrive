export default function AnchorVideo({ videos }) {
  if (!videos || videos.length === 0) return null;

  const getEmbedUrl = (url) => {
    try {
      if (url.includes("youtu.be")) {
        return `https://www.youtube.com/embed/${url.split("youtu.be/")[1]}`;
      }
      const videoId = url.split("v=")[1]?.split("&")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    } catch (e) {
      return url;
    }
  };

  return (
    <section className="bg-[#050505] py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center text-yellow-500">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m22 8-6 4 6 4V8Z" /><rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-black text-white uppercase tracking-widest">Performance Reels</h2>
              <p className="text-[10px] text-gray-600 uppercase font-black tracking-[0.2em] mt-1">Live Action & Showreels</p>
            </div>
          </div>
          <div className="text-[10px] font-black uppercase tracking-widest text-gray-700">
            {videos.length} Featured Clips
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="group relative bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-video relative overflow-hidden bg-black">
                <iframe
                  src={getEmbedUrl(video.youtube_url)}
                  className="w-full h-full border-none opacity-90 group-hover:opacity-100 transition-opacity"
                  allowFullScreen
                />
              </div>
              <div className="p-6 border-t border-white/5 bg-gradient-to-r from-yellow-500/5 to-transparent">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-[10px] font-black text-yellow-500">▶</div>
                  <div>
                    <h3 className="text-xs font-black text-white uppercase tracking-wider italic">Featured Performance</h3>
                    <p className="text-[10px] text-gray-600 uppercase font-black tracking-widest mt-0.5">Showcase Reel</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

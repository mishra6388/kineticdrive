"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function AnchorsPage() {
  const [anchors, setAnchors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnchors();
  }, []);

  const fetchAnchors = async () => {
    const { data, error } = await supabase
      .from("anchors")
      .select("id, anchor_code, anchor_name, image_url")
      .eq("is_active", true)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching anchors:", error.message);
    } else {
      setAnchors(data || []);
    }

    setLoading(false);
  };

  /* ---------------- Loading State ---------------- */
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-yellow-500 text-xl font-semibold">
        Loading Anchors...
      </div>
    );
  }

  /* ---------------- Empty State ---------------- */
  if (!anchors.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-gray-400 text-xl">
        No anchors available
      </div>
    );
  }

  return (
    <div className="bg-[#050505] min-h-screen text-white pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-16 space-y-4 animate-in fade-in slide-in-from-top-6 duration-700">
          <div className="flex items-center justify-center gap-2 text-yellow-500 uppercase tracking-[0.3em] font-black text-[10px]">
            <div className="w-8 h-px bg-yellow-500" />
            Discover Talent
            <div className="w-8 h-px bg-yellow-500" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            Our Professional <span className="text-yellow-500">Anchors</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base font-medium">
            Representing the finest event hosts in the industry. Professional, charismatic, and ready to elevate your next experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {anchors.map((anchor, index) => (
            <div
              key={anchor.id}
              className="group relative bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-yellow-500/30 hover:shadow-2xl hover:shadow-yellow-500/5 animate-in fade-in slide-in-from-bottom-6 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden">
                {anchor.image_url ? (
                  <img
                    src={anchor.image_url}
                    alt={`Anchor ${anchor.anchor_code}`}
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                ) : (
                  <div className="w-full h-full bg-[#111] flex items-center justify-center text-4xl">⚓</div>
                )}

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />

                {/* Badge */}
                <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full">
                  <span className="text-yellow-500 text-[10px] font-black uppercase tracking-widest">
                    ID: {anchor.anchor_code}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 -mt-12 relative z-10 space-y-6">
                <div className="space-y-1">
                  <h2 className="text-2xl font-black tracking-tight text-white group-hover:text-yellow-500 transition-colors">
                    Anchor {anchor.anchor_code}
                  </h2>
                  <p className="text-[10px] text-gray-500 uppercase font-black tracking-[0.2em]">Verified Professional</p>
                </div>

                <div className="flex flex-col gap-3">
                  <Link
                    href={`/anchors/${anchor.anchor_code}`}
                    className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black py-4 rounded-2xl text-[10px] uppercase tracking-widest transition-all text-center active:scale-[0.98] shadow-lg shadow-yellow-500/10"
                  >
                    View Full Profile
                  </Link>
                  <Link
                    href={`/anchors/${anchor.anchor_code}#book`}
                    className="w-full bg-white/5 hover:bg-white/10 text-white font-black py-4 rounded-2xl text-[10px] uppercase tracking-widest transition-all text-center border border-white/5"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

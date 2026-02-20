"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

import AnchorHero from "@/components/anchor/AnchorHero";
import AnchorAbout from "@/components/anchor/AnchorAbout";
import AnchorGallery from "@/components/anchor/AnchorGallery";
import AnchorVideo from "@/components/anchor/AnchorVideo";

export default function AnchorDetailPage() {
  const { anchor_code } = useParams();

  const [anchor, setAnchor] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (anchor_code) {
      fetchData();
    }
  }, [anchor_code]);

  const fetchData = async () => {
    try {
      // 1️⃣ Get Anchor
      const { data: anchorData, error: anchorError } = await supabase
        .from("anchors")
        .select("*")
        .eq("anchor_code", anchor_code)
        .single();

      if (anchorError || !anchorData) {
        setLoading(false);
        return;
      }

      setAnchor(anchorData);

      // 2️⃣ Get Gallery Photos
      const { data: photoData } = await supabase
        .from("anchor_photos")
        .select("*")
        .eq("anchor_id", anchorData.id)
        .order("created_at", { ascending: false });

      setPhotos(photoData || []);

      // 3️⃣ Get Videos
      const { data: videoData } = await supabase
        .from("anchor_videos")
        .select("*")
        .eq("anchor_id", anchorData.id)
        .order("created_at", { ascending: false });

      setVideos(videoData || []);

    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-yellow-500 text-xl">
        Loading...
      </div>
    );
  }

  if (!anchor) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-gray-400 text-xl">
        Anchor not found
      </div>
    );
  }

  return (
    <div className="bg-[#050505] text-white min-h-screen pt-20">
      <AnchorHero anchor={anchor} />
      <AnchorAbout anchor={anchor} />
      <AnchorGallery photos={photos} />
      <AnchorVideo videos={videos} />
      <BookingSection anchor={anchor} />
    </div>
  );
}

/* ========================================
   BOOKING SECTION COMPONENT
   ======================================== */

function BookingSection({ anchor }) {
  const [formData, setFormData] = useState({
    date: "",
    name: "",
    type: "Wedding",
    address: "",
    phone: ""
  });
  const [loading, setLoading] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);

  const checkAvailability = async (date) => {
    if (!date) return;
    const { data } = await supabase
      .from("anchor_bookings")
      .select("id")
      .eq("anchor_id", anchor.id)
      .eq("booking_date", date)
      .single();

    setIsBlocked(!!data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isBlocked) return;

    setLoading(true);

    const { error } = await supabase.from("anchor_bookings").insert([
      {
        anchor_id: anchor.id,
        booking_date: formData.date,
        client_name: formData.name,
        event_type: formData.type,
        address: formData.address,
        contact_number: formData.phone,
        status: "pending"
      }
    ]);

    if (error) {
      alert("Failed to submit booking. Please try again.");
      setLoading(false);
      return;
    }

    // Redirect to WhatsApp - ANONYMIZED
    const message = `Kinetic Drive Booking Request\n\n` +
      `*Talent ID:* ${anchor.anchor_code}\n` +
      `*Event Date:* ${formData.date}\n` +
      `*Client Name:* ${formData.name}\n` +
      `*Event Type:* ${formData.type}\n` +
      `*Location:* ${formData.address}\n` +
      `*Contact:* ${formData.phone}`;

    const adminPhone = "+919250430578";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${adminPhone}?text=${encodedMessage}`, "_blank");

    setLoading(false);
  };

  return (
    <section id="book" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#0a0a0a] border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl relative">

          {/* Subtle Background Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 blur-[100px] rounded-full -mr-32 -mt-32" />

          <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
            {/* Left: Branding & Info */}
            <div className="p-10 lg:p-16 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-yellow-500 uppercase tracking-[0.3em] font-black text-[10px] mb-8">
                  <div className="w-6 h-0.5 bg-yellow-500" />
                  Reservation
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
                  Secure Your <br /><span className="text-yellow-500">Event Date</span>
                </h2>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm mb-10 font-medium">
                  Connect with professional talent ID <span className="text-white font-bold">{anchor.anchor_code}</span> for a world-class hosting experience.
                </p>

                <div className="space-y-6">
                  {[
                    { icon: "✨", label: "Professional Hosting", desc: "Industry-leading standards" },
                    { icon: "⚡", label: "Instant Sync", desc: "Automated WhatsApp routing" },
                    { icon: "🔒", label: "Privacy Guaranteed", desc: "Safe handling of details" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-xl transition-all group-hover:bg-yellow-500 group-hover:text-black">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white tracking-tight">{item.label}</p>
                        <p className="text-[10px] text-gray-600 uppercase font-black tracking-widest">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Booking Form */}
            <div className="p-10 lg:p-16 border-t lg:border-t-0 lg:border-l border-white/5 bg-[#0a0a0a]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-2">Target Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      className={`w-full bg-[#050505] border ${isBlocked ? 'border-red-500/40 text-red-500' : 'border-white/10 text-white'} rounded-2xl p-5 text-sm outline-none focus:border-yellow-500/50 transition-all inverted-scheme`}
                      value={formData.date}
                      onChange={(e) => {
                        setFormData({ ...formData, date: e.target.value });
                        checkAvailability(e.target.value);
                      }}
                    />
                    {isBlocked && (
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-red-600 text-[10px] font-black uppercase px-3 py-1 rounded-full animate-pulse shadow-lg shadow-red-600/20">
                        Already Booked
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 block">Contact Person</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      className="w-full bg-[#050505] border border-white/10 rounded-2xl p-5 text-sm text-white placeholder:text-gray-700 outline-none focus:border-yellow-500/50 transition-all font-medium"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 block">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 00000 00000"
                      className="w-full bg-[#050505] border border-white/10 rounded-2xl p-5 text-sm text-white placeholder:text-gray-700 outline-none focus:border-yellow-500/50 transition-all font-medium"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 block">Event Description</label>
                  <select
                    className="w-full bg-[#050505] border border-white/10 rounded-2xl p-5 text-sm text-white outline-none focus:border-yellow-500/50 transition-all font-medium"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  >
                    <option>Wedding Ceremony</option>
                    <option>Corporate Gala</option>
                    <option>Birthday Party</option>
                    <option>Music Concert</option>
                    <option>Private Event</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 block">Event Venue</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full venue address"
                    className="w-full bg-[#050505] border border-white/10 rounded-2xl p-5 text-sm text-white placeholder:text-gray-700 outline-none focus:border-yellow-500/50 transition-all font-medium"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || isBlocked || !formData.date}
                  className="w-full bg-yellow-500 hover:bg-yellow-400 disabled:opacity-20 disabled:hover:bg-yellow-500 text-black font-black py-6 rounded-2xl text-[10px] uppercase tracking-widest transition-all active:scale-[0.98] shadow-xl shadow-yellow-500/10 mt-6"
                >
                  {loading ? "Syncing..." : "Confirm Booking via WhatsApp"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

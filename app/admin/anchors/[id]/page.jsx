"use client";

import { useEffect, useState, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function AdminAnchorEditPage() {
  const { id } = useParams();
  const router = useRouter();

  const [anchor, setAnchor] = useState(null);
  const [activeTab, setActiveTab] = useState("about");
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  useEffect(() => {
    fetchAnchor();
  }, []);

  const fetchAnchor = async () => {
    const { data } = await supabase
      .from("anchors")
      .select("*")
      .eq("id", id)
      .single();

    setAnchor(data);
    setLoading(false);
  };

  const updateAnchor = async (field, value) => {
    const { error } = await supabase
      .from("anchors")
      .update({ [field]: value })
      .eq("id", id);

    if (error) {
      showToast("Update failed", "error");
    } else {
      showToast("Changes saved successfully");
      fetchAnchor();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white">
        <div className="w-12 h-12 border-4 border-yellow-500/10 border-t-yellow-500 rounded-full animate-spin mb-4" />
        <p className="text-gray-500 font-black uppercase tracking-widest text-[10px]">Preparing Workspace...</p>
      </div>
    );
  }

  if (!anchor) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white">
        <div className="text-4xl mb-4">🚫</div>
        <p className="text-gray-500 font-bold uppercase tracking-tight">Talent Profile Not Found</p>
        <Link href="/admin/anchors" className="mt-6 text-yellow-500 font-bold hover:underline">Return to Talent List</Link>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-10 space-y-10 bg-[#050505] min-h-screen text-white">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/5">
        <div>
          <div className="flex items-center gap-2 text-yellow-500 mb-2 uppercase tracking-widest font-black text-[10px]">
            <Link href="/admin/anchors" className="hover:underline">Talent Management</Link>
            <div className="w-1 h-1 bg-gray-700 rounded-full mx-1" />
            Profile Editor
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight flex items-center gap-3">
            {anchor.anchor_name}
            <span className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-gray-500 font-mono tracking-normal">{anchor.anchor_code}</span>
          </h1>
        </div>
        <Link
          href="/admin/anchors"
          className="bg-white/5 hover:bg-white/10 border border-white/5 text-gray-400 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Talent List
        </Link>
      </div>

      {/* Tabs Navigation */}
      <div className="flex gap-2 p-1 bg-[#0a0a0a] border border-white/5 rounded-2xl w-fit overflow-x-auto max-w-full no-scrollbar">
        {["about", "gallery", "videos", "bookings", "settings"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === tab
              ? "bg-yellow-500 text-black shadow-lg shadow-yellow-500/10"
              : "text-gray-500 hover:text-white hover:bg-white/5"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ABOUT TAB */}
      {activeTab === "about" && (
        <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 lg:p-8 space-y-6 max-w-4xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight mb-1">Professional Bio</h2>
            <p className="text-sm text-gray-500">This content appears on the public profile page.</p>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Bio Text (English)</label>
            <textarea
              value={anchor.about_text || ""}
              onChange={(e) => setAnchor({ ...anchor, about_text: e.target.value })}
              rows={12}
              placeholder="Write the professional bio here..."
              className="w-full bg-[#050505] border border-white/10 rounded-xl p-6 text-sm leading-relaxed text-gray-300 outline-none focus:border-yellow-500/50 transition-all font-sans custom-scrollbar"
            />
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-white/5">
            <button
              onClick={() => updateAnchor("about_text", anchor.about_text)}
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-black px-8 py-3.5 rounded-xl text-xs uppercase tracking-widest transition-all shadow-lg shadow-yellow-500/10 active:scale-95"
            >
              Update Bio
            </button>
            <span className="text-[10px] text-gray-600 font-black uppercase tracking-widest leading-none">
              Last auto-save: Just now
            </span>
          </div>
        </div>
      )}

      {/* GALLERY TAB */}
      {activeTab === "gallery" && (
        <GalleryTab anchorId={id} showToast={showToast} />
      )}

      {/* VIDEOS TAB */}
      {activeTab === "videos" && (
        <VideosTab anchorId={id} showToast={showToast} />
      )}

      {/* BOOKINGS TAB */}
      {activeTab === "bookings" && (
        <BookingsTab anchorId={id} showToast={showToast} />
      )}

      {/* SETTINGS TAB */}
      {activeTab === "settings" && (
        <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 lg:p-8 space-y-8 max-w-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">Profile Settings</h2>
              <p className="text-sm text-gray-500">Manage basic identity and public information.</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Public Stage Name</label>
              <input
                type="text"
                value={anchor.anchor_name}
                onChange={(e) => setAnchor({ ...anchor, anchor_name: e.target.value })}
                className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-blue-500/50 outline-none transition-all"
              />
            </div>

            <button
              onClick={() => updateAnchor("anchor_name", anchor.anchor_name)}
              className="w-full bg-white/5 hover:bg-white/10 border border-white/5 text-white font-black py-3.5 rounded-xl text-xs uppercase tracking-widest transition-all active:scale-[0.98]"
            >
              Update Information
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ========================================
   GALLERY TAB COMPONENT
======================================== */

function GalleryTab({ anchorId, showToast }) {
  const [photos, setPhotos] = useState([]);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    const { data } = await supabase
      .from("anchor_photos")
      .select("*")
      .eq("anchor_id", anchorId)
      .order("created_at", { ascending: false });

    setPhotos(data || []);
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const fileName = `${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from("anchors")
      .upload(fileName, file);

    if (error) {
      showToast("Upload failed", "error");
      setUploading(false);
      return;
    }

    const { data } = supabase.storage
      .from("anchors")
      .getPublicUrl(fileName);

    await supabase.from("anchor_photos").insert([
      {
        anchor_id: anchorId,
        image_url: data.publicUrl,
      },
    ]);

    showToast("Photo added to gallery");
    fetchPhotos();
    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const deletePhoto = async (photoId) => {
    try {
      const { data: photo } = await supabase
        .from("anchor_photos")
        .select("image_url")
        .eq("id", photoId)
        .single();

      if (photo?.image_url) {
        const fileName = photo.image_url.split("/").pop();
        await supabase.storage.from("anchors").remove([fileName]);
      }

      await supabase.from("anchor_photos").delete().eq("id", photoId);
      showToast("Photo removed");
      fetchPhotos();
    } catch (error) {
      console.error("Delete photo error:", error);
      showToast("Delete failed", "error");
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-300">
      {/* Upload Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight mb-1">Photo Gallery</h2>
          <p className="text-sm text-gray-500">Manage high-resolution portfolio images.</p>
        </div>

        <div className="flex items-center gap-4">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleUpload}
            className="hidden"
            accept="image/*"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-black px-6 py-3 rounded-xl text-xs uppercase tracking-widest transition-all flex items-center gap-2 disabled:opacity-50"
          >
            {uploading ? (
              <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            )}
            Upload Photo
          </button>
        </div>
      </div>

      {/* Grid */}
      {photos.length === 0 ? (
        <div className="py-20 text-center bg-[#0a0a0a] border border-white/5 border-dashed rounded-3xl">
          <p className="text-gray-500 font-medium">No gallery images uploaded yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {photos.map((photo) => (
            <div key={photo.id} className="group relative aspect-square bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/5">
              <img
                src={photo.image_url}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Gallery"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                  onClick={() => deletePhoto(photo.id)}
                  className="bg-red-600 hover:bg-red-500 text-white p-2.5 rounded-xl transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ========================================
   VIDEOS TAB COMPONENT
   ======================================== */

function VideosTab({ anchorId, showToast }) {
  const [videos, setVideos] = useState([]);
  const [newVideoUrl, setNewVideoUrl] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const { data } = await supabase
      .from("anchor_videos")
      .select("*")
      .eq("anchor_id", anchorId)
      .order("created_at", { ascending: false });

    setVideos(data || []);
  };

  const addVideo = async (e) => {
    e.preventDefault();
    if (!newVideoUrl.trim()) return;

    setIsAdding(true);
    const { error } = await supabase.from("anchor_videos").insert([
      {
        anchor_id: anchorId,
        youtube_url: newVideoUrl,
      },
    ]);

    if (error) {
      showToast("Failed to add video", "error");
    } else {
      showToast("Video added to profile");
      setNewVideoUrl("");
      fetchVideos();
    }
    setIsAdding(false);
  };

  const deleteVideo = async (videoId) => {
    const { error } = await supabase.from("anchor_videos").delete().eq("id", videoId);
    if (error) {
      showToast("Delete failed", "error");
    } else {
      showToast("Video removed");
      fetchVideos();
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-300">
      {/* Add Video Section */}
      <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 lg:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center text-red-500 font-bold">▶</div>
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">Showreel & Videos</h2>
            <p className="text-sm text-gray-500">Add YouTube links to display on the profile.</p>
          </div>
        </div>

        <form onSubmit={addVideo} className="flex flex-col sm:flex-row gap-3">
          <input
            type="url"
            placeholder="https://www.youtube.com/watch?v=..."
            value={newVideoUrl}
            onChange={(e) => setNewVideoUrl(e.target.value)}
            className="flex-1 bg-[#050505] border border-white/10 rounded-xl px-4 py-3.5 text-sm focus:border-red-500/50 outline-none transition-all font-mono"
            required
          />
          <button
            type="submit"
            disabled={isAdding || !newVideoUrl.trim()}
            className="bg-red-600 hover:bg-red-500 text-white font-black px-8 py-3.5 rounded-xl text-xs uppercase tracking-widest transition-all disabled:opacity-50 whitespace-nowrap"
          >
            {isAdding ? "Adding..." : "Add Video"}
          </button>
        </form>
      </div>

      {/* Video Grid */}
      {videos.length === 0 ? (
        <div className="py-20 text-center bg-[#0a0a0a] border border-white/5 border-dashed rounded-3xl">
          <p className="text-gray-500 font-medium">No videos added yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="group bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-red-500/30 transition-all duration-300">
              <div className="aspect-video bg-black relative">
                <iframe
                  src={getEmbedUrl(video.youtube_url)}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
              <div className="p-4 flex items-center justify-between gap-4 border-t border-white/5">
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] text-gray-600 uppercase font-black tracking-widest truncate">{video.youtube_url}</p>
                </div>
                <button
                  onClick={() => deleteVideo(video.id)}
                  className="text-red-500 hover:bg-red-500/10 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap uppercase tracking-widest"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function getEmbedUrl(url) {
  if (!url) return "";
  let videoId = "";
  if (url.includes("youtu.be")) {
    videoId = url.split("youtu.be/")[1]?.split("?")[0];
  } else if (url.includes("v=")) {
    videoId = url.split("v=")[1]?.split("&")[0];
  } else if (url.includes("embed/")) {
    videoId = url.split("embed/")[1]?.split("?")[0];
  }
  return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
}

/* ========================================
   BOOKINGS TAB COMPONENT
   ======================================== */

function BookingsTab({ anchorId, showToast }) {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lockDate, setLockDate] = useState("");
  const [isLocking, setIsLocking] = useState(false);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    const { data } = await supabase
      .from("anchor_bookings")
      .select("*")
      .eq("anchor_id", anchorId)
      .order("booking_date", { ascending: false });

    setBookings(data || []);
    setLoading(false);
  };

  const handleLockDate = async (e) => {
    e.preventDefault();
    if (!lockDate) return;

    setIsLocking(true);
    const { error } = await supabase.from("anchor_bookings").insert([
      {
        anchor_id: anchorId,
        booking_date: lockDate,
        client_name: "ADMIN_BLOCKED",
        status: "blocked"
      },
    ]);

    if (error) {
      showToast("Failed to lock date", "error");
    } else {
      showToast("Date blocked on calendar");
      setLockDate("");
      fetchBookings();
    }
    setIsLocking(false);
  };

  const deleteBooking = async (id) => {
    const { error } = await supabase.from("anchor_bookings").delete().eq("id", id);
    if (error) {
      showToast("Failed to remove record", "error");
    } else {
      showToast("Booking record removed");
      fetchBookings();
    }
  };

  if (loading) return <div className="py-20 text-center text-gray-500 font-medium">Synced with Calendar...</div>;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 animate-in fade-in slide-in-from-top-4 duration-300">

      {/* Left Column: Management */}
      <div className="space-y-6">
        <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center text-red-500">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">Block Schedule</h2>
              <p className="text-sm text-gray-500">Manually lock dates for this talent.</p>
            </div>
          </div>

          <form onSubmit={handleLockDate} className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Select Date</label>
              <input
                type="date"
                value={lockDate}
                onChange={(e) => setLockDate(e.target.value)}
                className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-red-500/50 outline-none transition-all text-white inverted-scheme"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLocking || !lockDate}
              className="w-full bg-red-600 hover:bg-red-500 text-white font-black py-4 rounded-xl text-xs uppercase tracking-widest transition-all shadow-lg shadow-red-600/10 active:scale-[0.98] disabled:opacity-50"
            >
              {isLocking ? "Locking..." : "Lock Full Day"}
            </button>
          </form>
        </div>

        <div className="bg-blue-500/5 border border-blue-500/10 rounded-2xl p-6">
          <h4 className="text-blue-400 font-bold text-sm mb-2">Availability Notice</h4>
          <p className="text-xs text-blue-400/60 leading-relaxed">Blocked dates will be hidden from the public booking form automatically.</p>
        </div>
      </div>

      {/* Right Column: List */}
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white tracking-tight">Booking History</h2>
          <div className="text-[10px] font-black uppercase tracking-widest text-gray-600">{bookings.length} Records</div>
        </div>

        {bookings.length === 0 ? (
          <div className="py-20 text-center bg-[#0a0a0a] border border-white/5 border-dashed rounded-3xl">
            <p className="text-gray-500 font-medium">No active bookings found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col ${booking.status === 'blocked'
                  ? 'bg-red-950/10 border-red-900/20'
                  : 'bg-[#0a0a0a] border-white/5'
                  }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-lg font-bold text-white tracking-tight">
                      {new Date(booking.booking_date).toLocaleDateString('en-US', {
                        month: 'short', day: 'numeric', year: 'numeric'
                      })}
                    </div>
                    <div className="text-[10px] text-gray-600 font-black uppercase tracking-widest mt-1">
                      {new Date(booking.booking_date).toLocaleDateString('en-US', { weekday: 'long' })}
                    </div>
                  </div>
                  <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg border ${booking.status === 'blocked'
                    ? 'bg-red-600/10 border-red-600/20 text-red-500'
                    : 'bg-green-600/10 border-green-600/20 text-green-500'
                    }`}>
                    {booking.status}
                  </span>
                </div>

                {booking.status !== 'blocked' && (
                  <div className="space-y-3 mb-6 flex-1">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
                      <span className="text-xs font-bold text-gray-300">{booking.client_name}</span>
                    </div>
                    {booking.contact_number && (
                      <div className="text-[11px] text-gray-500 font-medium flex items-center gap-2">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        {booking.contact_number}
                      </div>
                    )}
                  </div>
                )}

                <button
                  onClick={() => deleteBooking(booking.id)}
                  className="mt-auto pt-4 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-gray-700 hover:text-red-500 transition-colors text-left"
                >
                  Clear Record
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

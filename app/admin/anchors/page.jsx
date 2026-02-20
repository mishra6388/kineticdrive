"use client";
import { useEffect, useState, useRef } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function AdminAnchors() {
  const [anchors, setAnchors] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [driveLink, setDriveLink] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [toast, setToast] = useState(null);
  const fileInputRef = useRef(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchAnchors = async () => {
    const { data } = await supabase
      .from("anchors")
      .select("*")
      .order("created_at", { ascending: false });
    setAnchors(data || []);
  };

  useEffect(() => {
    fetchAnchors();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const addAnchor = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    let imageUrl = null;

    if (image) {
      const fileName = `${Date.now()}-${image.name}`;
      const { error: uploadError } = await supabase.storage
        .from("anchors")
        .upload(fileName, image);

      if (uploadError) {
        showToast("Image upload failed", "error");
        setIsSubmitting(false);
        return;
      }

      const { data } = supabase.storage
        .from("anchors")
        .getPublicUrl(fileName);
      imageUrl = data.publicUrl;
    }

    const { data: insertedAnchor, error } = await supabase
      .from("anchors")
      .insert([
        {
          anchor_name: name,
          image_url: imageUrl,
          drive_link: driveLink || null,
          phone_number: phoneNumber || null,
          anchor_code: "TEMP",
        },
      ])
      .select()
      .single();

    if (error) {
      showToast("Insert failed", "error");
      setIsSubmitting(false);
      return;
    }

    const generatedCode = `A${100 + insertedAnchor.serial_number}`;

    await supabase
      .from("anchors")
      .update({ anchor_code: generatedCode })
      .eq("id", insertedAnchor.id);

    setName("");
    setImage(null);
    setImagePreview(null);
    setDriveLink("");
    setPhoneNumber("");
    if (fileInputRef.current) fileInputRef.current.value = "";

    setIsSubmitting(false);
    showToast("Anchor added successfully");
    fetchAnchors();
  };
  const deleteAnchor = async (id) => {
    try {
      // 1. Get anchor details for image cleanup
      const { data: anchor } = await supabase
        .from("anchors")
        .select("image_url")
        .eq("id", id)
        .single();

      // 2. Delete main image from storage
      if (anchor?.image_url) {
        const fileName = anchor.image_url.split("/").pop();
        await supabase.storage.from("anchors").remove([fileName]);
      }

      // 3. Delete related gallery photos (records and storage)
      const { data: photos } = await supabase
        .from("anchor_photos")
        .select("image_url")
        .eq("anchor_id", id);

      if (photos?.length > 0) {
        const fileNames = photos.map(p => p.image_url.split("/").pop());
        await supabase.storage.from("anchors").remove(fileNames);
        await supabase.from("anchor_photos").delete().eq("anchor_id", id);
      }

      // 4. Delete related videos
      await supabase.from("anchor_videos").delete().eq("anchor_id", id);

      // 5. Delete the anchor itself
      await supabase.from("anchors").delete().eq("id", id);

      setDeleteConfirmId(null);
      showToast("Anchor and all related data deleted");
      fetchAnchors();
    } catch (error) {
      console.error("Delete error:", error);
      showToast("Delete failed", "error");
    }
  };

  return (
    <div className="p-6 lg:p-10 space-y-10 bg-[#050505] min-h-screen text-white">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/5">
        <div>
          <div className="flex items-center gap-2 text-yellow-500 mb-2 uppercase tracking-widest font-black text-[10px]">
            <div className="w-4 h-0.5 bg-yellow-500" />
            Admin Panel
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">Manage Talent</h1>
        </div>
        <div className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
          {anchors.length} Total Anchors
        </div>
      </div>

      {/* Registration Form */}
      <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 lg:p-8 max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center text-yellow-500 font-bold">✦</div>
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">Register New Talent</h2>
            <p className="text-sm text-gray-500">Fill in the details to add a new anchor to the platform.</p>
          </div>
        </div>

        <form onSubmit={addAnchor} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2 text-left">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Full Name *</label>
              <input
                type="text"
                placeholder="e.g. Rahul Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-yellow-500/50 outline-none transition-all"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2 text-left">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Contact Number</label>
              <input
                type="tel"
                placeholder="+91 92504 30578"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-yellow-500/50 outline-none transition-all"
              />
            </div>

            {/* Drive Link */}
            <div className="md:col-span-2 space-y-2 text-left">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Work Portfolio (Drive URL)</label>
              <input
                type="url"
                placeholder="https://drive.google.com/..."
                value={driveLink}
                onChange={(e) => setDriveLink(e.target.value)}
                className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-yellow-500/50 outline-none transition-all font-mono"
              />
            </div>

            {/* Image Preview / Upload */}
            <div className="md:col-span-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-2">Profile Image</label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              <div
                onClick={() => fileInputRef.current?.click()}
                className="group cursor-pointer border-2 border-dashed border-white/5 hover:border-yellow-500/20 bg-[#050505] rounded-2xl p-8 flex flex-col items-center justify-center transition-all text-center"
              >
                {imagePreview ? (
                  <div className="flex items-center gap-6 text-left">
                    <img src={imagePreview} className="w-20 h-20 rounded-xl object-cover border border-white/10" alt="Preview" />
                    <div>
                      <div className="text-yellow-500 font-bold text-sm">{image?.name}</div>
                      <div className="text-[10px] text-gray-600 uppercase font-black tracking-widest mt-1">Ready to upload</div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="M21 15l-5-5L5 21" />
                      </svg>
                    </div>
                    <div className="text-sm text-gray-400 font-medium">Click to select anchor photo</div>
                    <div className="text-[10px] text-gray-600 mt-1 uppercase font-black tracking-widest">Supports JPG, PNG, WEBP</div>
                  </>
                )}
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !name.trim()}
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black py-4 rounded-2xl transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:grayscale uppercase tracking-widest text-xs"
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
            ) : (
              <>Register Anchor</>
            )}
          </button>
        </form>
      </div>

      {/* talent Grid Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 pt-10">
          <h2 className="text-xl font-bold text-white tracking-tight">Registered Talent</h2>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        {anchors.length === 0 ? (
          <div className="py-20 text-center bg-[#0a0a0a] border border-white/5 rounded-3xl">
            <div className="text-4xl mb-4">⚓</div>
            <div className="text-gray-500 font-medium tracking-tight">No talent registered yet.</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {anchors.map((anchor) => (
              <div
                key={anchor.id}
                className="group bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden hover:border-yellow-500/30 transition-all duration-300 flex flex-col relative"
              >
                {/* Image Section */}
                <div className="aspect-[4/5] bg-[#050505] relative overflow-hidden">
                  {anchor.image_url ? (
                    <img
                      src={anchor.image_url}
                      alt={anchor.anchor_name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl opacity-10">⚓</div>
                  )}
                  {anchor.anchor_code && (
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-xl px-2.5 py-1 rounded-lg border border-white/10 text-[10px] font-black text-yellow-500 uppercase tracking-widest shadow-xl">
                      {anchor.anchor_code}
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col gap-5">
                  <div>
                    <h3 className="text-white font-bold tracking-tight text-xl mb-1 truncate">{anchor.anchor_name}</h3>
                    {anchor.phone_number && (
                      <div className="flex items-center gap-2 text-gray-500 text-xs font-medium">
                        <div className="w-1.5 h-1.5 bg-green-500/50 rounded-full" />
                        {anchor.phone_number}
                      </div>
                    )}
                  </div>

                  <div className="mt-auto space-y-3">
                    <div className="flex gap-2">
                      <Link
                        href={`/admin/anchors/${anchor.id}`}
                        className="flex-1 bg-white/5 hover:bg-yellow-500 hover:text-black border border-white/5 hover:border-yellow-500 text-gray-400 font-bold py-3 rounded-2xl transition-all text-xs text-center flex items-center justify-center gap-2 group/btn shadow-sm"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover/btn:scale-110 transition-transform">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                        Manage
                      </Link>
                      {anchor.drive_link && (
                        <a
                          href={anchor.drive_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/5 rounded-2xl text-gray-500 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/30 transition-all shadow-sm"
                          title="View Portfolio"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                          </svg>
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => setDeleteConfirmId(anchor.id)}
                      className="w-full py-2 text-gray-700 hover:text-red-500 transition-colors text-[10px] font-black uppercase tracking-widest"
                    >
                      Remove Profile
                    </button>
                  </div>
                </div>

                {/* Confirm Delete Overlay */}
                {deleteConfirmId === anchor.id && (
                  <div className="absolute inset-0 bg-black/95 backdrop-blur-md z-20 flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in-95 duration-300">
                    <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center text-red-500 mb-6 border border-red-500/20">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6" />
                      </svg>
                    </div>
                    <h4 className="text-white font-black text-xl mb-2 tracking-tight">Confirm Deletion</h4>
                    <p className="text-xs text-gray-500 mb-8 leading-relaxed max-w-[200px]">This action is permanent and will clear all media associated with this talent.</p>
                    <div className="flex flex-col gap-2 w-full">
                      <button
                        onClick={() => deleteAnchor(anchor.id)}
                        className="w-full py-4 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-black text-xs uppercase tracking-widest transition-all"
                      >
                        Yes, Delete Permanently
                      </button>
                      <button
                        onClick={() => setDeleteConfirmId(null)}
                        className="w-full py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-gray-400 font-bold text-xs transition-all"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Toast Feedback */}
      {toast && (
        <div className={`fixed bottom-8 right-8 px-6 py-4 rounded-2xl shadow-2xl z-[9999] flex items-center gap-4 animate-in slide-in-from-bottom-6 transition-all duration-300 border border-white/5 backdrop-blur-xl ${toast.type === "success"
            ? "bg-green-600/90 text-white"
            : "bg-red-600/90 text-white"
          }`}>
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-lg">
            {toast.type === "success" ? "✓" : "✕"}
          </div>
          <span className="font-bold tracking-tight text-sm pr-2">{toast.message}</span>
        </div>
      )}
    </div>
  );
}

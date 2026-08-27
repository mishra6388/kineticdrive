'use client';
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import {
  UsersRound,
  Search,
  Eye,
  Trash2,
  X,
  Loader2,
  Sparkles,
  UserCheck,
  PhoneCall,
  Clock,
  ExternalLink,
  XCircle,
} from 'lucide-react';

const statusConfig = {
  new:        { label: 'New',        cls: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' },
  contacted:  { label: 'Contacted',  cls: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
  in_review:  { label: 'In Review',  cls: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
  onboarded:  { label: 'Onboarded',  cls: 'bg-green-500/10 text-green-400 border-green-500/20' },
  rejected:   { label: 'Rejected',   cls: 'bg-red-500/10 text-red-400 border-red-500/20' },
};

const statusOptions = ['new', 'contacted', 'in_review', 'onboarded', 'rejected'];

export default function AdminInfluencersPage() {
  const [influencers, setInfluencers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Detail drawer
  const [selected, setSelected] = useState(null);
  const [drawerStatus, setDrawerStatus] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchInfluencers();
  }, []);

  const fetchInfluencers = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('influencers')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      setInfluencers(data || []);
    } catch (err) {
      console.error('Error fetching influencers:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = (inf) => {
    setSelected(inf);
    setDrawerStatus(inf.status || 'new');
  };

  const handleUpdateStatus = async () => {
    if (!selected) return;
    setSaving(true);
    try {
      const { error } = await supabase
        .from('influencers')
        .update({ status: drawerStatus, updated_at: new Date().toISOString() })
        .eq('id', selected.id);
      if (error) throw error;
      setInfluencers((prev) =>
        prev.map((i) => (i.id === selected.id ? { ...i, status: drawerStatus } : i))
      );
      setSelected({ ...selected, status: drawerStatus });
      alert('Status updated successfully!');
    } catch (err) {
      alert('Error: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this influencer registration? This action cannot be undone.')) return;
    try {
      const { error } = await supabase.from('influencers').delete().eq('id', id);
      if (error) throw error;
      setInfluencers((prev) => prev.filter((i) => i.id !== id));
      if (selected?.id === id) setSelected(null);
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  // KPIs
  const total = influencers.length;
  const newCount = influencers.filter((i) => i.status === 'new').length;
  const inReviewCount = influencers.filter((i) => i.status === 'in_review').length;
  const contactedCount = influencers.filter((i) => i.status === 'contacted').length;
  const onboardedCount = influencers.filter((i) => i.status === 'onboarded').length;

  // Filter
  const filtered = influencers.filter((inf) => {
    const q = searchTerm.toLowerCase();
    const matchSearch =
      (inf.name || '').toLowerCase().includes(q) ||
      (inf.phone || '').toLowerCase().includes(q) ||
      (inf.niche || '').toLowerCase().includes(q);
    const matchStatus = statusFilter === 'All' || inf.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="p-6 sm:p-10 space-y-8 bg-[#050505] min-h-screen text-white">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white flex items-center gap-3">
            <UsersRound className="h-8 w-8 text-yellow-500" />
            Influencer Registrations
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Manage creators who have registered with KineticDrive.
          </p>
        </div>
        <button
          onClick={fetchInfluencers}
          className="px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl border border-white/10 hover:border-yellow-500 hover:text-yellow-500 transition"
        >
          Refresh
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {[
          { title: 'Total', val: total, icon: UsersRound, col: 'text-blue-400' },
          { title: 'New', val: newCount, icon: Sparkles, col: 'text-yellow-400' },
          { title: 'In Review', val: inReviewCount, icon: Clock, col: 'text-purple-400' },
          { title: 'Contacted', val: contactedCount, icon: PhoneCall, col: 'text-blue-400' },
          { title: 'Onboarded', val: onboardedCount, icon: UserCheck, col: 'text-green-400' },
        ].map((c) => (
          <div key={c.title} className="rounded-2xl border border-white/5 bg-[#0a0a0a] p-5 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{c.title}</p>
              <h3 className="text-2xl font-extrabold mt-1 text-white">{c.val}</h3>
            </div>
            <div className={`p-2.5 rounded-xl bg-white/5 ${c.col}`}>
              <c.icon className="h-5 w-5" />
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between bg-[#0a0a0a] border border-white/5 p-4 rounded-2xl">
        <div className="relative w-full lg:max-w-xs">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search by name, phone, niche..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#121212] border border-white/5 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none focus:border-yellow-500/50"
          />
        </div>
        <div className="flex items-center gap-2 bg-[#121212] border border-white/5 px-3 py-1.5 rounded-xl w-full sm:w-auto">
          <span className="text-xs font-semibold text-gray-500">Status:</span>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-transparent text-sm text-white outline-none border-none cursor-pointer"
          >
            <option className="bg-[#121212] text-white" value="All">All</option>
            {statusOptions.map((s) => (
              <option key={s} className="bg-[#121212] text-white" value={s}>
                {statusConfig[s].label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="py-20 flex flex-col items-center justify-center space-y-3">
            <Loader2 className="h-8 w-8 animate-spin text-yellow-500" />
            <p className="text-gray-500 text-sm">Loading influencer data...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-20 text-center">
            <UsersRound className="h-12 w-12 text-gray-700 mx-auto mb-4" />
            <p className="text-gray-400 font-semibold">No influencer registrations yet</p>
            <p className="text-gray-600 text-sm mt-1">
              New creator registrations will appear here once influencers join the KineticDrive network.
            </p>
          </div>
        ) : (
          <div className="w-full">
            {/* Desktop Table Layout */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/5 text-xs font-bold uppercase tracking-widest text-gray-400 bg-white/[0.01]">
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Phone</th>
                    <th className="px-6 py-4">Niche</th>
                    <th className="px-6 py-4">Instagram</th>
                    <th className="px-6 py-4">YouTube</th>
                    <th className="px-6 py-4">YT Subs</th>
                    <th className="px-6 py-4">Facebook</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Registered</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm text-gray-300">
                  {filtered.map((inf) => {
                    const st = statusConfig[inf.status] || statusConfig.new;
                    const formatNiche = Array.isArray(inf.niche) ? inf.niche.join(', ') : inf.niche;
                    return (
                      <tr key={inf.id} className="hover:bg-white/[0.02] transition">
                        <td className="px-6 py-4 font-bold text-white">{inf.name}</td>
                        <td className="px-6 py-4 text-xs">{inf.phone}</td>
                        <td className="px-6 py-4">
                          <span className="inline-block px-2.5 py-0.5 text-xs font-bold rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px]">
                            {formatNiche}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <a href={inf.instagram_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-pink-400 hover:underline">
                            Instagram <ExternalLink className="w-3 h-3" />
                          </a>
                        </td>
                        <td className="px-6 py-4">
                          <a href={inf.youtube_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-red-400 hover:underline">
                            YouTube <ExternalLink className="w-3 h-3" />
                          </a>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-block px-2.5 py-0.5 text-xs font-bold rounded-full bg-red-500/10 text-red-300 border border-red-500/20">
                            {inf.youtube_followers || '—'}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <a href={inf.facebook_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-400 hover:underline">
                            Facebook <ExternalLink className="w-3 h-3" />
                          </a>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-block px-2.5 py-0.5 text-xs font-bold rounded-full border ${st.cls}`}>
                            {st.label}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-xs text-gray-500">
                          {new Date(inf.created_at).toLocaleDateString('en-IN', {
                            day: '2-digit', month: 'short', year: 'numeric',
                          })}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="inline-flex gap-2">
                            <button
                              onClick={() => handleOpen(inf)}
                              className="p-2 bg-white/5 border border-white/5 rounded-lg hover:border-yellow-500/50 hover:text-yellow-500 transition"
                              title="View Details"
                            >
                              <Eye className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleDelete(inf.id)}
                              className="p-2 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg hover:bg-red-500 hover:text-white transition"
                              title="Delete"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile Card Layout */}
            <div className="lg:hidden flex flex-col gap-4 p-4">
              {filtered.map((inf) => {
                const st = statusConfig[inf.status] || statusConfig.new;
                const formatNiche = Array.isArray(inf.niche) ? inf.niche.join(', ') : inf.niche;
                return (
                  <div key={inf.id} className="bg-[#121212] border border-white/5 rounded-xl p-5 flex flex-col gap-4 relative">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-white text-lg">{inf.name}</h3>
                        <p className="text-xs text-gray-400 mt-1">{inf.phone}</p>
                      </div>
                      <span className={`inline-block px-2.5 py-0.5 text-xs font-bold rounded-full border ${st.cls}`}>
                        {st.label}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-block px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-bold rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        {formatNiche}
                      </span>
                      {inf.youtube_followers && (
                        <span className="inline-block px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-bold rounded-full bg-red-500/10 text-red-300 border border-red-500/20">
                          {inf.youtube_followers} Subs
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <a href={inf.instagram_url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1 text-xs text-pink-400 hover:bg-pink-400/10 py-2 rounded-lg border border-white/5">
                        Instagram <ExternalLink className="w-3 h-3" />
                      </a>
                      <a href={inf.youtube_url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1 text-xs text-red-400 hover:bg-red-400/10 py-2 rounded-lg border border-white/5">
                        YouTube <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-1">
                      <p className="text-xs text-gray-500">
                        {new Date(inf.created_at).toLocaleDateString('en-IN', {
                          day: '2-digit', month: 'short', year: 'numeric',
                        })}
                      </p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleOpen(inf)}
                          className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg hover:border-yellow-500/50 hover:text-yellow-500 transition text-xs font-bold"
                        >
                          Details
                        </button>
                        <button
                          onClick={() => handleDelete(inf.id)}
                          className="p-1.5 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg hover:bg-red-500 hover:text-white transition"
                          title="Delete"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Detail Drawer */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-lg bg-[#0a0a0a] border-l border-white/5 h-full p-6 sm:p-8 flex flex-col justify-between overflow-y-auto"
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                  <div>
                    <h3 className="text-xl font-bold text-white">{selected.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">Influencer ID: {selected.id?.slice(0, 8)}...</p>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="p-2 bg-white/5 rounded-xl hover:bg-white/10 transition text-gray-400"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Creator Info */}
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Creator Information</p>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <p className="text-gray-500 font-bold uppercase tracking-wider">Name</p>
                      <p className="text-sm font-medium text-white mt-0.5">{selected.name}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 font-bold uppercase tracking-wider">Phone</p>
                      <p className="text-sm font-medium text-white mt-0.5">{selected.phone}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-gray-500 font-bold uppercase tracking-wider">Address</p>
                      <p className="text-sm font-medium text-white mt-0.5">{selected.address}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 font-bold uppercase tracking-wider">Niche</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {(() => {
                          let sn = [];
                          if (Array.isArray(selected.niche)) sn = selected.niche;
                          else if (typeof selected.niche === 'string') {
                            try { sn = selected.niche.startsWith('[') ? JSON.parse(selected.niche) : [selected.niche]; }
                            catch { sn = [selected.niche]; }
                          }
                          return sn.map((n, i) => (
                            <span key={i} className="inline-block px-2 py-0.5 text-[10px] font-bold rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                              {n}
                            </span>
                          ));
                        })()}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Profiles */}
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Social Profiles</p>
                  <div className="space-y-2">
                    {[
                      { label: 'Facebook', url: selected.facebook_url, color: 'text-blue-400' },
                      { label: 'Instagram', url: selected.instagram_url, color: 'text-pink-400' },
                      { label: 'YouTube', url: selected.youtube_url, color: 'text-red-400' },
                    ].map((s) => (
                      <a
                        key={s.label}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 text-sm ${s.color} hover:underline bg-white/[0.03] border border-white/5 rounded-xl px-4 py-3`}
                      >
                        {s.label}
                        <ExternalLink className="w-3.5 h-3.5 ml-auto" />
                      </a>
                    ))}
                  </div>
                  {selected.youtube_followers && (
                    <div className="mt-3 flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">YT Subscribers:</span>
                      <span className="text-sm font-bold text-red-300">{selected.youtube_followers}</span>
                    </div>
                  )}
                </div>

                {/* Registration Info */}
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Registration Information</p>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <p className="text-gray-500 font-bold uppercase tracking-wider">Registered</p>
                      <p className="text-sm font-medium text-white mt-0.5">
                        {new Date(selected.created_at).toLocaleString('en-IN')}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500 font-bold uppercase tracking-wider">Current Status</p>
                      <span className={`inline-block px-2 py-0.5 text-[10px] font-bold rounded-full border mt-1 ${(statusConfig[selected.status] || statusConfig.new).cls}`}>
                        {(statusConfig[selected.status] || statusConfig.new).label}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Update Status */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Update Status</label>
                  <select
                    value={drawerStatus}
                    onChange={(e) => setDrawerStatus(e.target.value)}
                    className="w-full rounded-xl border border-white/6 bg-[#13131F] px-4 py-3 text-white outline-none focus:border-yellow-500/50"
                  >
                    {statusOptions.map((s) => (
                      <option key={s} className="bg-[#13131F] text-white" value={s}>
                        {statusConfig[s].label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="pt-6 border-t border-white/5 flex gap-3 mt-8">
                <button
                  onClick={() => setSelected(null)}
                  className="flex-1 px-4 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition text-sm font-semibold text-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdateStatus}
                  disabled={saving}
                  className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-3 rounded-xl bg-yellow-500 text-black font-bold hover:scale-[1.02] transition disabled:opacity-50"
                >
                  {saving ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

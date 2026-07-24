'use client';
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Inbox,
  Search,
  Filter,
  Eye,
  Trash2,
  X,
  Loader2,
  DollarSign,
  TrendingUp,
  UserCheck,
  Calendar,
  Sparkles,
} from 'lucide-react';

const serviceBadgeColors = {
  'Web Development': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'App Development': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'Digital Marketing': 'bg-green-500/10 text-green-400 border-green-500/20',
};

const statusBadgeColors = {
  'New': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  'Contacted': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Qualified': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'Proposal Sent': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  'Won': 'bg-green-500/10 text-green-400 border-green-500/20',
  'Lost': 'bg-red-500/10 text-red-400 border-red-500/20',
};

export default function LeadsPage() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [serviceFilter, setServiceFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  // Drawer / Modal states
  const [selectedLead, setSelectedLead] = useState(null);
  const [notes, setNotes] = useState('');
  const [status, setStatus] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setLeads(data || []);
    } catch (err) {
      console.error('Error fetching leads:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenLead = (lead) => {
    setSelectedLead(lead);
    setNotes(lead.notes || '');
    setStatus(lead.status || 'New');
  };

  const handleUpdateLead = async () => {
    if (!selectedLead) return;
    setSaving(true);
    try {
      const { error } = await supabase
        .from('leads')
        .update({ status, notes })
        .eq('id', selectedLead.id);

      if (error) throw error;

      // Update local state
      setLeads(leads.map((l) => (l.id === selectedLead.id ? { ...l, status, notes } : l)));
      setSelectedLead({ ...selectedLead, status, notes });
      alert('Lead updated successfully!');
    } catch (err) {
      console.error(err);
      alert('Error updating lead: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteLead = async (leadId) => {
    if (!confirm('Are you sure you want to delete this lead? This action cannot be undone.')) {
      return;
    }
    try {
      const { error } = await supabase.from('leads').delete().eq('id', leadId);
      if (error) throw error;

      setLeads(leads.filter((l) => l.id !== leadId));
      if (selectedLead?.id === leadId) {
        setSelectedLead(null);
      }
      alert('Lead deleted successfully.');
    } catch (err) {
      console.error(err);
      alert('Error deleting lead: ' + err.message);
    }
  };

  // KPI Calculations
  const totalLeads = leads.length;
  const todayLeads = leads.filter((l) => {
    const todayStr = new Date().toISOString().split('T')[0];
    const createdStr = new Date(l.created_at).toISOString().split('T')[0];
    return todayStr === createdStr;
  }).length;
  const newLeads = leads.filter((l) => l.status === 'New').length;
  const qualifiedLeads = leads.filter((l) => l.status === 'Qualified').length;

  // Filter & Search Logic
  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      (lead.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (lead.email || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (lead.phone || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (lead.company || '').toLowerCase().includes(searchTerm.toLowerCase());

    const matchesService = serviceFilter === 'All' || lead.service === serviceFilter;
    const matchesStatus = statusFilter === 'All' || lead.status === statusFilter;

    return matchesSearch && matchesService && matchesStatus;
  });

  return (
    <div className="p-6 sm:p-10 space-y-8 bg-[#050505] min-h-screen text-white">
      {/* ── Header ── */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white flex items-center gap-3">
            <Inbox className="h-8 w-8 text-yellow-500" />
            Lead Management
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Manage all enquiries submitted from KineticDrive landing pages.
          </p>
        </div>
        <button
          onClick={fetchLeads}
          className="px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl border border-white/10 hover:border-yellow-500 hover:text-yellow-500 transition"
        >
          Refresh Leads
        </button>
      </div>

      {/* ── KPI Cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { title: 'Total Leads', val: totalLeads, desc: 'All campaigns combined', icon: Inbox, col: 'text-blue-400' },
          { title: "Today's Leads", val: todayLeads, desc: 'Registered today', icon: Calendar, col: 'text-amber-400' },
          { title: 'New Leads', val: newLeads, desc: 'Awaiting first contact', icon: Sparkles, col: 'text-yellow-400' },
          { title: 'Qualified Leads', val: qualifiedLeads, desc: 'Marked as high interest', icon: UserCheck, col: 'text-purple-400' },
        ].map((card) => (
          <div key={card.title} className="rounded-2xl border border-white/5 bg-[#0a0a0a] p-6 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{card.title}</p>
              <h3 className="text-3xl font-extrabold mt-1 text-white">{card.val}</h3>
              <p className="text-xs text-gray-400 mt-1">{card.desc}</p>
            </div>
            <div className={`p-3 rounded-xl bg-white/5 ${card.col}`}>
              <card.icon className="h-6 w-6" />
            </div>
          </div>
        ))}
      </div>

      {/* ── Filters Bar ── */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between bg-[#0a0a0a] border border-white/5 p-4 rounded-2xl">
        {/* Search */}
        <div className="relative w-full lg:max-w-xs">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search leads..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#121212] border border-white/5 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none focus:border-yellow-500/50"
          />
        </div>

        {/* Dropdown Filters */}
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          {/* Service filter */}
          <div className="flex items-center gap-2 bg-[#121212] border border-white/5 px-3 py-1.5 rounded-xl w-full sm:w-auto">
            <span className="text-xs font-semibold text-gray-500">Service:</span>
            <select
              value={serviceFilter}
              onChange={(e) => setServiceFilter(e.target.value)}
              className="bg-transparent text-sm text-white outline-none border-none cursor-pointer"
            >
              <option className="bg-[#121212] text-white" value="All">All</option>
              <option className="bg-[#121212] text-white" value="Web Development">Web Development</option>
              <option className="bg-[#121212] text-white" value="App Development">App Development</option>
              <option className="bg-[#121212] text-white" value="Digital Marketing">Digital Marketing</option>
            </select>
          </div>

          {/* Status filter */}
          <div className="flex items-center gap-2 bg-[#121212] border border-white/5 px-3 py-1.5 rounded-xl w-full sm:w-auto">
            <span className="text-xs font-semibold text-gray-500">Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-transparent text-sm text-white outline-none border-none cursor-pointer"
            >
              <option className="bg-[#121212] text-white" value="All">All</option>
              <option className="bg-[#121212] text-white" value="New">New</option>
              <option className="bg-[#121212] text-white" value="Contacted">Contacted</option>
              <option className="bg-[#121212] text-white" value="Qualified">Qualified</option>
              <option className="bg-[#121212] text-white" value="Proposal Sent">Proposal Sent</option>
              <option className="bg-[#121212] text-white" value="Won">Won</option>
              <option className="bg-[#121212] text-white" value="Lost">Lost</option>
            </select>
          </div>
        </div>
      </div>

      {/* ── Table view ── */}
      <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="py-20 flex flex-col items-center justify-center space-y-3">
            <Loader2 className="h-8 w-8 animate-spin text-yellow-500" />
            <p className="text-gray-500 text-sm">Loading leads database...</p>
          </div>
        ) : filteredLeads.length === 0 ? (
          <div className="py-20 text-center text-gray-500">No leads found matching current criteria.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5 text-xs font-bold uppercase tracking-widest text-gray-400 bg-white/[0.01]">
                  <th className="px-6 py-4.5">Name</th>
                  <th className="px-6 py-4.5">Contact Info</th>
                  <th className="px-6 py-4.5">Company</th>
                  <th className="px-6 py-4.5">Service</th>
                  <th className="px-6 py-4.5">Website Type</th>
                  <th className="px-6 py-4.5">Budget</th>
                  <th className="px-6 py-4.5">Status</th>
                  <th className="px-6 py-4.5">Date</th>
                  <th className="px-6 py-4.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm text-gray-300">
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-white/[0.02] transition">
                    <td className="px-6 py-4 font-bold text-white">{lead.name}</td>
                    <td className="px-6 py-4">
                      <div className="text-xs space-y-0.5">
                        <p>{lead.email}</p>
                        <p className="text-gray-500">{lead.phone}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">{lead.company || '-'}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-2.5 py-0.5 text-xs font-bold rounded-full border ${serviceBadgeColors[lead.service] || 'bg-white/10 text-white border-white/20'}`}>
                        {lead.service}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xs font-medium">{lead.website_type || '-'}</td>
                    <td className="px-6 py-4 text-xs font-semibold text-amber-400">{lead.budget || '-'}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-2.5 py-0.5 text-xs font-bold rounded-full border ${statusBadgeColors[lead.status] || 'bg-white/10 text-white border-white/20'}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xs text-gray-500">
                      {new Date(lead.created_at).toLocaleDateString('en-IN', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="inline-flex gap-2">
                        <button
                          onClick={() => handleOpenLead(lead)}
                          className="p-2 bg-white/5 border border-white/5 rounded-lg hover:border-yellow-500/50 hover:text-yellow-500 transition"
                          title="View Details"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteLead(lead.id)}
                          className="p-2 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg hover:bg-red-500 hover:text-white transition"
                          title="Delete Lead"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ── Detail Drawer / Modal ── */}
      <AnimatePresence>
        {selectedLead && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLead(null)}
              className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-lg bg-[#0a0a0a] border-l border-white/5 h-full p-6 sm:p-8 flex flex-col justify-between overflow-y-auto"
            >
              <div className="space-y-6">
                {/* Drawer Header */}
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                  <div>
                    <h3 className="text-xl font-bold text-white">{selectedLead.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">Lead ID: {selectedLead.id}</p>
                  </div>
                  <button
                    onClick={() => setSelectedLead(null)}
                    className="p-2 bg-white/5 rounded-xl hover:bg-white/10 transition text-gray-400"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Details grid */}
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <p className="text-gray-500 font-bold uppercase tracking-wider">Email</p>
                    <p className="text-sm font-medium text-white mt-0.5">{selectedLead.email}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-bold uppercase tracking-wider">Phone</p>
                    <p className="text-sm font-medium text-white mt-0.5">{selectedLead.phone}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-bold uppercase tracking-wider">Company</p>
                    <p className="text-sm font-medium text-white mt-0.5">{selectedLead.company || '-'}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-bold uppercase tracking-wider">Service Campaign</p>
                    <span className={`inline-block px-2 py-0.5 text-[10px] font-bold rounded-full border mt-1 ${serviceBadgeColors[selectedLead.service] || 'bg-white/10 text-white'}`}>
                      {selectedLead.service}
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-500 font-bold uppercase tracking-wider">Website Type</p>
                    <p className="text-sm font-medium text-white mt-0.5">{selectedLead.website_type || '-'}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-bold uppercase tracking-wider">Budget</p>
                    <p className="text-sm font-medium text-amber-400 mt-0.5">{selectedLead.budget || '-'}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-bold uppercase tracking-wider">Enquiry Source</p>
                    <p className="text-sm font-medium text-white mt-0.5">{selectedLead.source || '-'}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-bold uppercase tracking-wider">Created At</p>
                    <p className="text-sm font-medium text-white mt-0.5">
                      {new Date(selectedLead.created_at).toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>

                {/* Requirements */}
                <div className="space-y-1.5">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Requirements / Message</p>
                  <div className="bg-[#121212] border border-white/5 rounded-xl p-4 text-sm text-gray-300 leading-relaxed whitespace-pre-wrap">
                    {selectedLead.requirements || 'No specific requirements provided.'}
                  </div>
                </div>

                {/* Status Dropdown */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Lead Status</label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full rounded-xl border border-white/6 bg-[#13131F] px-4 py-3 text-white outline-none focus:border-yellow-500/50"
                  >
                    <option className="bg-[#13131F] text-white" value="New">New</option>
                    <option className="bg-[#13131F] text-white" value="Contacted">Contacted</option>
                    <option className="bg-[#13131F] text-white" value="Qualified">Qualified</option>
                    <option className="bg-[#13131F] text-white" value="Proposal Sent">Proposal Sent</option>
                    <option className="bg-[#13131F] text-white" value="Won">Won</option>
                    <option className="bg-[#13131F] text-white" value="Lost">Lost</option>
                  </select>
                </div>

                {/* Notes Textarea */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Admin Notes</label>
                  <textarea
                    rows={4}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Add internal remarks about follow-ups, requirements, or conversation summaries..."
                    className="w-full rounded-xl border border-white/6 bg-white/[0.03] px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-yellow-500/50 resize-none text-sm"
                  />
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-6 border-t border-white/5 flex gap-3 mt-8">
                <button
                  onClick={() => setSelectedLead(null)}
                  className="flex-1 px-4 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition text-sm font-semibold text-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdateLead}
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

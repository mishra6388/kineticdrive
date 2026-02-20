"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  Users,
  CalendarCheck,
  TrendingUp,
  Clock,
  ChevronRight,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";

export default function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalAnchors: 0,
    activeAnchors: 0,
    totalBookings: 0,
    pendingBookings: 0,
  });
  const [recentBookings, setRecentBookings] = useState([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    // 1. Fetch Stats
    const { count: anchorCount } = await supabase.from("anchors").select("*", { count: "exact", head: true });
    const { count: activeCount } = await supabase.from("anchors").select("*", { count: "exact", head: true }).eq("is_active", true);
    const { count: bookingCount } = await supabase.from("anchor_bookings").select("*", { count: "exact", head: true });
    const { count: pendingCount } = await supabase.from("anchor_bookings").select("*", { count: "exact", head: true }).eq("status", "pending");

    // 2. Fetch Recent Bookings
    const { data: bData } = await supabase
      .from("anchor_bookings")
      .select("*, anchors(anchor_name)")
      .order("created_at", { ascending: false })
      .limit(5);

    setStats({
      totalAnchors: anchorCount || 0,
      activeAnchors: activeCount || 0,
      totalBookings: bookingCount || 0,
      pendingBookings: pendingCount || 0,
    });
    setRecentBookings(bData || []);
    setLoading(false);
  };

  if (loading) return (
    <div className="p-8 flex items-center justify-center min-h-[50vh]">
      <div className="animate-pulse text-gray-500 font-medium">Loading metrics...</div>
    </div>
  );

  const statCards = [
    { label: "Total Anchors", value: stats.totalAnchors, icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "Active Now", value: stats.activeAnchors, icon: TrendingUp, color: "text-green-500", bg: "bg-green-500/10" },
    { label: "Total Bookings", value: stats.totalBookings, icon: CalendarCheck, color: "text-yellow-500", bg: "bg-yellow-500/10" },
    { label: "Pending Requests", value: stats.pendingBookings, icon: Clock, color: "text-red-500", bg: "bg-red-500/10" },
  ];

  return (
    <div className="p-6 lg:p-10 space-y-10">
      {/* Welcome Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Workspace Overview</h1>
        <p className="text-gray-500">Welcome back, Admin. Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card) => (
          <div key={card.label} className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 hover:border-yellow-500/20 transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl ${card.bg} ${card.color}`}>
                <card.icon className="w-6 h-6" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-gray-700 group-hover:text-yellow-500 transition-colors" />
            </div>
            <div className="text-2xl font-black text-white mb-1">{card.value}</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider font-bold">{card.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Recent Activity */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Recent Booking Requests</h2>
            <Link href="/admin/anchors" className="text-xs text-yellow-500 hover:text-yellow-400 font-bold uppercase tracking-widest">View All</Link>
          </div>

          <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden">
            {recentBookings.length === 0 ? (
              <div className="p-10 text-center text-gray-600">No recent activity detected.</div>
            ) : (
              <div className="divide-y divide-white/5">
                {recentBookings.map((booking) => (
                  <div key={booking.id} className="p-5 flex items-center gap-4 hover:bg-white/[0.02] transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-500 group-hover:bg-yellow-500 group-hover:text-black transition-all">
                      <CalendarCheck className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-bold truncate">
                        {booking.client_name === 'ADMIN_BLOCKED' ? 'Blocked Date' : booking.client_name}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        For {booking.anchors?.anchor_name || "Unknown Anchor"} • {new Date(booking.booking_date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`text-[10px] px-2 py-0.5 rounded font-black uppercase ${booking.status === 'blocked' ? 'bg-red-900/40 text-red-500' : 'bg-green-900/40 text-green-500'
                        }`}>
                        {booking.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-white">Quick Actions</h2>
          <div className="grid grid-cols-1 gap-4">
            <Link href="/admin/anchors" className="bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 p-6 rounded-2xl hover:border-yellow-500/50 transition-all group">
              <h3 className="text-white font-bold mb-2 flex items-center justify-between">
                Add New Anchor
                <ChevronRight className="w-4 h-4 text-yellow-500 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-gray-500">Register a new talent to the platform and start bookings.</p>
            </Link>

            <div className="bg-[#0a0a0a] border border-white/5 p-6 rounded-2xl">
              <h3 className="text-gray-400 font-bold mb-4 text-xs uppercase tracking-widest">Platform Status</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Database</span>
                  <span className="text-green-500 font-bold">Operational</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Storage</span>
                  <span className="text-green-500 font-bold">94% Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">WhatsApp API</span>
                  <span className="text-green-500 font-bold">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

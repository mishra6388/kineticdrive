"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    LayoutDashboard,
    Users,
    CalendarCheck,
    LogOut,
    Menu,
    X,
    ChevronRight,
    Settings
} from "lucide-react";
import { supabase } from "@/lib/supabase";

const navigation = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Anchors", href: "/admin/anchors", icon: Users },
    { name: "Bookings", href: "/admin/anchors", icon: CalendarCheck, note: "Managed via Anchors" }, // For now using the existing flow
    { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminSidebar({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/login");
    };

    return (
        <div className="min-h-screen bg-[#050505] flex">
            {/* Mobile Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-[#0a0a0a] border-r border-white/5 
        transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
                <div className="flex flex-col h-full p-6">
                    {/* Logo Section */}
                    <div className="flex items-center gap-3 mb-10 px-2">
                        <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center font-black text-black text-xl">
                            K
                        </div>
                        <div>
                            <h1 className="text-white font-bold tracking-tight">kineticDrive</h1>
                            <p className="text-[10px] text-yellow-500 uppercase font-black tracking-widest">Admin Panel</p>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-1 space-y-1.5">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`
                    flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 group
                    ${isActive
                                            ? "bg-yellow-500 text-black font-bold shadow-lg shadow-yellow-500/10"
                                            : "text-gray-400 hover:text-white hover:bg-white/5"}
                  `}
                                >
                                    <item.icon className={`w-5 h-5 ${isActive ? "text-black" : "text-gray-500 group-hover:text-yellow-500"}`} />
                                    <span className="flex-1">{item.name}</span>
                                    {isActive && <ChevronRight className="w-4 h-4" />}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Bottom Section */}
                    <div className="mt-auto pt-6 border-t border-white/5">
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-3 px-4 py-3.5 text-red-500 hover:bg-red-500/10 rounded-xl transition-all font-medium"
                        >
                            <LogOut className="w-5 h-5" />
                            <span>Sign Out</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content Viewport */}
            <main className="flex-1 flex flex-col min-w-0 bg-[#050505] overflow-hidden">
                {/* Mobile Header */}
                <header className="lg:hidden flex items-center justify-between p-4 border-b border-white/5 bg-[#0a0a0a]">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center font-black text-black">
                            K
                        </div>
                        <span className="text-white font-bold text-sm">Dashboard</span>
                    </div>
                    <button
                        onClick={() => setIsOpen(true)}
                        className="p-2 text-gray-400 hover:text-white"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </header>

                {/* Page Content Holder */}
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    {children}
                </div>
            </main>

            <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #222;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #333;
        }
      `}</style>
        </div>
    );
}

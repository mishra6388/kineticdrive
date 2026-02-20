"use client";

import React, { useState } from "react";
import {
    Settings,
    User,
    Bell,
    Shield,
    Database,
    Globe,
    Save,
    CheckCircle2,
    AlertCircle
} from "lucide-react";

export default function AdminSettingsPage() {
    const [saving, setSaving] = useState(false);
    const [showSaved, setShowSaved] = useState(false);

    const handleSave = () => {
        setSaving(true);
        // Mock save delay
        setTimeout(() => {
            setSaving(false);
            setShowSaved(true);
            setTimeout(() => setShowSaved(false), 3000);
        }, 1000);
    };

    const sections = [
        {
            title: "Platform Configuration",
            description: "Manage global settings for the Kinetic Drive platform.",
            icon: Settings,
            fields: [
                { label: "Platform Name", value: "Kinetic Drive Admin", type: "text" },
                { label: "Admin Email", value: "admin@kineticdrive.in", type: "email" },
                { label: "Currency", value: "INR (₹)", type: "select", options: ["INR (₹)", "USD ($)"] },
            ]
        },
        {
            title: "Notifications",
            description: "Configure how you receive alerts and updates.",
            icon: Bell,
            fields: [
                { label: "Email Notifications", value: true, type: "toggle", description: "Receive booking alerts via email" },
                { label: "WhatsApp Updates", value: true, type: "toggle", description: "Get real-time booking info on WhatsApp" },
            ]
        },
        {
            title: "Security",
            description: "Manage your account authentication settings.",
            icon: Shield,
            fields: [
                { label: "Two-Factor Auth", value: false, type: "toggle", description: "Add an extra layer of security" },
                { label: "Password", value: "********", type: "password", description: "Last updated 2 months ago" },
            ]
        }
    ];

    return (
        <div className="p-6 lg:p-10 space-y-10 max-w-5xl">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Workspace Settings</h1>
                    <p className="text-gray-500">Configure your administrative workspace and platform preferences.</p>
                </div>

                <button
                    onClick={handleSave}
                    disabled={saving}
                    className="bg-yellow-500 hover:bg-yellow-400 text-black font-black px-8 py-3.5 rounded-xl text-xs uppercase tracking-widest transition-all flex items-center gap-2 shadow-lg shadow-yellow-500/10 active:scale-95"
                >
                    {saving ? (
                        <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                    ) : (
                        <Save size={16} />
                    )}
                    {saving ? "Saving..." : "Save Changes"}
                </button>
            </div>

            {/* Success Toast (Inline Mock) */}
            {showSaved && (
                <div className="bg-green-600/10 border border-green-600/20 rounded-2xl p-4 flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
                    <CheckCircle2 className="text-green-500" size={20} />
                    <p className="text-sm font-bold text-green-500 uppercase tracking-tight">Configuration Synchronized Successfully</p>
                </div>
            )}

            {/* Settings Sections */}
            <div className="grid grid-cols-1 gap-8">
                {sections.map((section) => (
                    <div key={section.title} className="bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden">
                        <div className="p-6 lg:p-8 border-b border-white/5 flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-2xl text-yellow-500">
                                <section.icon size={24} />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-white tracking-tight">{section.title}</h2>
                                <p className="text-sm text-gray-500">{section.description}</p>
                            </div>
                        </div>

                        <div className="p-6 lg:p-8 space-y-8">
                            {section.fields.map((field) => (
                                <div key={field.label} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:items-center">
                                    <div>
                                        <label className="text-xs font-black uppercase tracking-widest text-gray-500">{field.label}</label>
                                        {field.description && (
                                            <p className="text-[10px] text-gray-700 mt-1 uppercase font-bold tracking-tight">{field.description}</p>
                                        )}
                                    </div>

                                    <div className="md:col-span-2">
                                        {field.type === "toggle" ? (
                                            <button className={`w-12 h-6 rounded-full p-1 transition-all ${field.value ? "bg-yellow-500" : "bg-white/10"}`}>
                                                <div className={`w-4 h-4 bg-white rounded-full transition-all ${field.value ? "translate-x-6" : "translate-x-0"}`} />
                                            </button>
                                        ) : field.type === "select" ? (
                                            <select className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-yellow-500/50 outline-none transition-all text-white">
                                                {field.options.map(opt => <option key={opt}>{opt}</option>)}
                                            </select>
                                        ) : (
                                            <input
                                                type={field.type}
                                                defaultValue={field.value}
                                                className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-yellow-500/50 outline-none transition-all text-white"
                                            />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* System Info */}
                <div className="bg-red-500/5 border border-red-500/10 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4 text-center md:text-left">
                        <div className="p-3 bg-red-500/10 rounded-2xl text-red-500">
                            <Database size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white tracking-tight">System Maintenance</h3>
                            <p className="text-sm text-red-500/60 font-medium">Rebuild search index and clear platform cache.</p>
                        </div>
                    </div>
                    <button className="bg-red-600/10 hover:bg-red-600/20 border border-red-600/20 text-red-500 font-black px-6 py-3 rounded-xl text-[10px] uppercase tracking-widest transition-all">
                        Execute Maintenance
                    </button>
                </div>
            </div>
        </div>
    );
}

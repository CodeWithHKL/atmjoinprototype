"use client";

import React, { useState } from "react";
import { 
  Search, 
  Plus, 
  Archive, 
  Trash2, 
  Inbox, 
  Send, 
  Shield, 
  Clock,
  ArrowUpRight,
  X,
  User
} from "lucide-react";

const transmissions = [
  {
    id: "TX-9021",
    sender: "Medical Division",
    subject: "Batch 2026-A: Health Screening Discrepancies",
    preview: "Manual review required for 12 candidates regarding respiratory clearance documentation.",
    priority: "New",
    date: "14:20",
    isRead: false
  },
  {
    id: "TX-8944",
    sender: "HQ Administration",
    subject: "Protocol Update: Phase 3 Interview Scoring",
    preview: "Revised weighted averages for technical evaluations are now active in the system.",
    priority: "Standard",
    date: "11:05",
    isRead: true
  },
  {
    id: "TX-8812",
    sender: "System Monitor",
    subject: "Automated Verification: Weekly Report",
    preview: "98.2% of current intake documents have cleared primary OCR verification.",
    priority: "Low",
    date: "Yesterday",
    isRead: true
  }
];

export default function CommCenter() {
  const [activeTab, setActiveTab] = useState("all");
  const [isComposeOpen, setIsComposeOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto space-y-8 p-6">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/5 pb-8 gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Comm <span className="text-emerald-500">Center</span>
          </h1>
          <p className="text-zinc-500 text-xs font-medium mt-1 uppercase tracking-wider">
            Secure Communications Hub (TDM-Net)
          </p>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-right pr-6 border-r border-white/10 hidden sm:block font-mono">
            <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Active Channels</p>
            <p className="text-sm font-bold text-white tracking-tight">04 ONLINE</p>
          </div>
          <button 
            onClick={() => setIsComposeOpen(true)}
            className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all shadow-lg"
          >
            <Plus size={16} /> Compose
          </button>
        </div>
      </div>

      {/* FILTER & SEARCH BAR */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="flex bg-zinc-950 p-1.5 rounded-2xl border border-white/5 w-full lg:w-auto">
          {["all", "unread", "important", "archived"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all ${
                activeTab === tab ? "bg-zinc-800 text-white shadow-md" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="relative w-full lg:w-80 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-emerald-500 transition-colors" size={14} />
          <input 
            type="text" 
            placeholder="SEARCH TRANSMISSIONS..." 
            className="w-full bg-zinc-900 border border-white/5 rounded-xl h-11 pl-11 pr-4 text-[10px] font-medium tracking-widest outline-none focus:border-emerald-500/30 transition-all text-white placeholder:text-zinc-700"
          />
        </div>
      </div>

      {/* DATA GRID */}
      <div className="border border-white/5 rounded-2xl bg-zinc-900/40 overflow-hidden shadow-2xl">
        {/* Table Head */}
        <div className="grid grid-cols-12 gap-4 px-8 py-4 bg-zinc-950/50 border-b border-white/5">
          <div className="col-span-3 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Origin</div>
          <div className="col-span-6 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Signal Subject</div>
          <div className="col-span-3 text-right text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Metadata</div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-white/5">
          {transmissions.map((tx) => (
            <div 
              key={tx.id} 
              className={`grid grid-cols-12 gap-4 px-8 py-6 items-center hover:bg-white/[0.02] cursor-pointer transition-all group ${!tx.isRead ? "bg-emerald-500/[0.02]" : ""}`}
            >
              <div className="col-span-3 flex flex-col gap-1">
                <span className={`text-sm font-bold tracking-tight ${!tx.isRead ? "text-white" : "text-zinc-400"}`}>
                  {tx.sender}
                </span>
                <span className="text-[10px] font-mono text-emerald-500/60 font-bold uppercase tracking-tight">{tx.id}</span>
              </div>

              <div className="col-span-6 pr-10">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className={`text-sm font-bold tracking-tight ${!tx.isRead ? "text-white" : "text-zinc-400 opacity-80"}`}>
                    {tx.subject}
                  </h3>
                  {tx.priority === "New" && (
                    <span className="text-[8px] px-2 py-0.5 bg-emerald-500/10 text-emerald-500 font-bold rounded uppercase tracking-widest border border-emerald-500/20">New</span>
                  )}
                </div>
                <p className="text-[11px] text-zinc-500 font-medium line-clamp-1 tracking-normal">
                  {tx.preview}
                </p>
              </div>

              <div className="col-span-3 flex items-center justify-end gap-6">
                <div className="text-right flex flex-col group-hover:opacity-0 transition-opacity">
                  <span className="text-[11px] font-mono font-bold text-zinc-500">{tx.date}</span>
                </div>
                <div className="absolute right-8 hidden group-hover:flex items-center gap-2 animate-in slide-in-from-right-2">
                  {[Archive, Trash2, ArrowUpRight].map((Icon, i) => (
                    <button key={i} className="h-9 w-9 flex items-center justify-center rounded-xl border border-white/10 text-zinc-500 hover:text-emerald-500 hover:bg-zinc-800 hover:border-emerald-500/30 transition-all">
                      <Icon size={14} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER STATS */}
      <div className="flex items-center justify-between px-2 pt-4 border-t border-white/5">
        <div className="flex gap-10">
          <div className="flex items-center gap-3">
            <Inbox size={14} className="text-emerald-500" />
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Storage: <span className="text-zinc-300">12% Capacity</span></span>
          </div>
          <div className="flex items-center gap-3">
            <Shield size={14} className="text-emerald-500" />
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">AES-256 <span className="text-zinc-300">ACTIVE</span></span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-zinc-600 font-mono">
          <Clock size={12} />
          <span className="text-[9px] font-bold uppercase tracking-widest">Last Sync: 04:59:13</span>
        </div>
      </div>

      {/* COMPOSE MODAL */}
      {isComposeOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-950/90 backdrop-blur-md">
          <div className="w-full max-w-2xl bg-zinc-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden shadow-emerald-500/5">
            {/* Modal Header */}
            <div className="px-8 py-6 border-b border-white/5 flex justify-between items-center bg-zinc-950/30">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-white">New <span className="text-emerald-500">Transmission</span></h2>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-1">Classification: Level-4 Restricted</p>
              </div>
              <button 
                onClick={() => setIsComposeOpen(false)}
                className="h-10 w-10 flex items-center justify-center rounded-xl border border-white/10 text-zinc-500 hover:text-white hover:bg-white/5 transition-all"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8 space-y-6">
              <div className="space-y-2 group">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 group-focus-within:text-emerald-500 transition-colors">Recipient Address</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700" size={14} />
                  <input 
                    type="text" 
                    placeholder="ENTER PERSONNEL ID OR DIVISION..."
                    className="w-full h-12 bg-zinc-950 border border-white/5 rounded-xl pl-11 pr-4 text-[11px] font-mono text-white outline-none focus:border-emerald-500/30 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2 group">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 group-focus-within:text-emerald-500 transition-colors">Subject Header</label>
                <input 
                  type="text" 
                  placeholder="CLASSIFICATION TITLE"
                  className="w-full h-12 bg-zinc-950 border border-white/5 rounded-xl px-4 text-[11px] font-bold text-white outline-none focus:border-emerald-500/30 transition-all uppercase tracking-tight"
                />
              </div>

              <div className="space-y-2 group">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 group-focus-within:text-emerald-500 transition-colors">Transmission Draft</label>
                <textarea 
                  rows={6}
                  placeholder="BEGIN SIGNAL ENCODING..."
                  className="w-full bg-zinc-950 border border-white/5 rounded-xl p-4 text-sm font-medium text-zinc-200 outline-none focus:border-emerald-500/30 transition-all resize-none placeholder:text-zinc-800"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-8 py-6 border-t border-white/5 bg-zinc-950/30 flex justify-end gap-6 items-center">
              <button 
                onClick={() => setIsComposeOpen(false)}
                className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-zinc-200 transition-colors"
              >
                Abort
              </button>
              <button className="flex items-center gap-3 bg-white text-black px-10 py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all shadow-xl">
                <Send size={14} /> Dispatch Signal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
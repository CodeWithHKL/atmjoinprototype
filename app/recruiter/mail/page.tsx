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
  User,
  Reply,
  CheckCircle2
} from "lucide-react";

// 1. Define the interface for your transmission data
interface Transmission {
  id: string;
  sender: string;
  subject: string;
  preview: string;
  content: string;
  priority: "New" | "Standard" | "Low";
  date: string;
  isRead: boolean;
}

const transmissions: Transmission[] = [
  {
    id: "TX-9021",
    sender: "TUDM Recruiter (Maj. Zack)",
    subject: "Batch 2026-A: Health Screening Discrepancies",
    preview: "I am writing to propose a meeting at your convenience to discuss recruitment strategies and explore opportunities for collaboration between our respective branches. Given the dynamic nature of recruiting...",
    content: "I am writing to propose a meeting at your convenience to discuss recruitment strategies and explore opportunities for collaboration between our respective branches. Given the dynamic nature of recruiting efforts, I believe an exchange of perspectives and best practices would be mutually beneficial.",
    priority: "New",
    date: "14:20",
    isRead: false
  },
  {
    id: "TX-8944",
    sender: "Super Admin",
    subject: "Protocol Update: Phase 3 Interview Scoring",
    preview: "Attention all personnel: The system has updated the weighting for the Phase 3...",
    content: "Attention all personnel: The system has updated the weighting for the Phase 3 technical evaluations. Logic puzzles now account for 40% of the total score.",
    priority: "Standard",
    date: "11:05",
    isRead: true
  },
  {
    id: "TX-8812",
    sender: "System Monitor",
    subject: "Automated Verification: Weekly Report",
    preview: "98.2% of current intake documents have cleared primary OCR verification.",
    content: "Weekly automated system health check complete. OCR accuracy remains within the 98th percentile. System uptime: 99.998%.",
    priority: "Low",
    date: "Yesterday",
    isRead: true
  }
];

export default function CommCenter() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [isComposeOpen, setIsComposeOpen] = useState<boolean>(false);
  // 2. Type the state to allow either a Transmission object or null
  const [selectedTx, setSelectedTx] = useState<Transmission | null>(null);

  // 3. Explicitly type the parameter 'tx'
  const handleOpenMessage = (tx: Transmission): void => {
    setSelectedTx(tx);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 p-6 min-h-screen">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/5 pb-8 gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Mail <span className="text-emerald-500">Center</span>
          </h1>
          <p className="text-zinc-500 text-xs font-medium mt-1 uppercase tracking-wider">
            INTERNAL ATM JOIN COMMUNICATION CENTER
          </p>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-right pr-6 border-r border-white/10 hidden sm:block font-mono">
            <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Messages</p>
            <p className="text-sm font-bold text-white tracking-tight">04</p>
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
            placeholder="SEARCH MESSAGES..." 
            className="w-full bg-zinc-900 border border-white/5 rounded-xl h-11 pl-11 pr-4 text-[10px] font-medium tracking-widest outline-none focus:border-emerald-500/30 transition-all text-white placeholder:text-zinc-700"
          />
        </div>
      </div>

      {/* DATA GRID */}
      <div className="border border-white/5 rounded-2xl bg-zinc-900/40 overflow-hidden shadow-2xl">
        <div className="grid grid-cols-12 gap-4 px-8 py-4 bg-zinc-950/50 border-b border-white/5">
          <div className="col-span-3 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Origin</div>
          <div className="col-span-6 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Messages</div>
          <div className="col-span-3 text-right text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Metadata</div>
        </div>

        <div className="divide-y divide-white/5">
          {transmissions.map((tx) => (
            <div 
              key={tx.id} 
              onClick={() => handleOpenMessage(tx)}
              className={`grid grid-cols-12 gap-4 px-8 py-6 items-center hover:bg-white/[0.04] cursor-pointer transition-all group ${!tx.isRead ? "bg-emerald-500/[0.02]" : ""}`}
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

              <div className="col-span-3 flex items-center justify-end">
                <span className="text-[11px] font-mono font-bold text-zinc-500">{tx.date}</span>
                <ArrowUpRight size={14} className="ml-4 text-zinc-700 group-hover:text-emerald-500 transition-colors" />
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
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Storage: <span className="text-zinc-300">12% used of 1TB</span></span>
          </div>
          <div className="flex items-center gap-3">
            <Shield size={14} className="text-emerald-500" />
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">AES-256 <span className="text-zinc-300">ENCRYPTED</span></span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-zinc-600 font-mono">
          <Clock size={12} />
          <span className="text-[9px] font-bold uppercase tracking-widest">Last Sync: 04:59:13</span>
        </div>
      </div>

      {/* MESSAGE VIEW MODAL */}
      {selectedTx && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-950/90 backdrop-blur-md">
          <div className="w-full max-w-2xl bg-zinc-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
            <div className="px-8 py-6 border-b border-white/5 flex justify-between items-center bg-zinc-950/30">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <User size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-bold tracking-tight text-white">{selectedTx.sender}</h2>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{selectedTx.id} • MAIL ID</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                 <button className="h-10 w-10 flex items-center justify-center rounded-xl border border-white/10 text-zinc-500 hover:text-emerald-500 transition-all">
                  <Archive size={18} />
                </button>
                <button className="h-10 w-10 flex items-center justify-center rounded-xl border border-white/10 text-zinc-500 hover:text-red-500 transition-all">
                  <Trash2 size={18} />
                </button>
                <button 
                  onClick={() => setSelectedTx(null)}
                  className="h-10 w-10 flex items-center justify-center rounded-xl border border-white/10 text-zinc-500 hover:text-white hover:bg-white/5 transition-all ml-2"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="p-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{selectedTx.subject}</h3>
                <div className="flex items-center gap-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                  <span>Received: {selectedTx.date}</span>
                  <span className="text-emerald-500/50">•</span>
                  <span>Encryption: AES-256-GCM</span>
                </div>
              </div>

              <div className="bg-zinc-950/50 border border-white/5 rounded-2xl p-6 min-h-[200px]">
                <p className="text-zinc-300 text-sm leading-relaxed whitespace-pre-wrap">
                  {selectedTx.content}
                </p>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Quick Reply</label>
                <textarea 
                  rows={3}
                  placeholder="Write reply.."
                  className="w-full bg-zinc-950 border border-white/5 rounded-xl p-4 text-sm font-medium text-zinc-200 outline-none focus:border-emerald-500/30 transition-all resize-none"
                />
              </div>
            </div>

            <div className="px-8 py-6 border-t border-white/5 bg-zinc-950/30 flex justify-between items-center">
              <div className="flex items-center gap-2 text-zinc-500">
                <CheckCircle2 size={14} className="text-emerald-500" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Marked as Read</span>
              </div>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all">
                  <Reply size={14} /> Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* COMPOSE MODAL */}
      {isComposeOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-950/90 backdrop-blur-md">
          <div className="w-full max-w-2xl bg-zinc-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
            <div className="px-8 py-6 border-b border-white/5 flex justify-between items-center bg-zinc-950/30">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-white">New <span className="text-emerald-500">Message</span></h2>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-1">SENT VIA ATM JOIN SYSTEM</p>
              </div>
              <button 
                onClick={() => setIsComposeOpen(false)}
                className="h-10 w-10 flex items-center justify-center rounded-xl border border-white/10 text-zinc-500 hover:text-white hover:bg-white/5 transition-all"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-8 space-y-6">
              <div className="space-y-2 group">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 group-focus-within:text-emerald-500 transition-colors">Recipient Address</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700" size={14} />
                  <input 
                    type="text" 
                    placeholder="ENTER PERSONNEL ID OR NAME..."
                    className="w-full h-12 bg-zinc-950 border border-white/5 rounded-xl pl-11 pr-4 text-[11px] font-mono text-white outline-none focus:border-emerald-500/30 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2 group">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 group-focus-within:text-emerald-500 transition-colors">Subject Header</label>
                <input 
                  type="text" 
                  placeholder="Write your title..."
                  className="w-full h-12 bg-zinc-950 border border-white/5 rounded-xl px-4 text-[11px] font-bold text-white outline-none focus:border-emerald-500/30 transition-all uppercase tracking-tight"
                />
              </div>

              <div className="space-y-2 group">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 group-focus-within:text-emerald-500 transition-colors">Message</label>
                <textarea 
                  rows={6}
                  placeholder="Write your mail..."
                  className="w-full bg-zinc-950 border border-white/5 rounded-xl p-4 text-sm font-medium text-zinc-200 outline-none focus:border-emerald-500/30 transition-all resize-none"
                />
              </div>
            </div>

            <div className="px-8 py-6 border-t border-white/5 bg-zinc-950/30 flex justify-end gap-6 items-center">
              <button 
                onClick={() => setIsComposeOpen(false)}
                className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-zinc-200 transition-colors"
              >
                Abort
              </button>
              <button className="flex items-center gap-3 bg-white text-black px-10 py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all shadow-xl">
                <Send size={14} /> Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
"use client";

import React, { useState } from "react";
import { 
  Bell, 
  MailOpen, 
  Trash2, 
  AlertTriangle, 
  Info, 
  CheckCircle2, 
  MoreVertical,
  Search,
  Filter
} from "lucide-react";

const mockNotifications = [
  {
    id: 1,
    type: "priority",
    title: "Document Verification Success",
    desc: "Your SPM Certificate (Ref: 2026-X8) has been successfully verified by the Ministry of Education division.",
    time: "2 HOURS AGO",
    isRead: false,
    icon: CheckCircle2,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    id: 2,
    type: "warning",
    title: "Action Required: Digital Signature",
    desc: "Please complete the Form 104-B digital signature to move your application to the Medical Screening phase.",
    time: "1 DAY AGO",
    isRead: false,
    icon: AlertTriangle,
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  {
    id: 3,
    type: "info",
    title: "System Update: New Intake Dates",
    desc: "The second intake for the 2026 session has been announced. Review the new deadlines in the Enlistment Guide.",
    time: "3 DAYS AGO",
    isRead: true,
    icon: Info,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
];

export default function NotificationsPage() {
  const [filter, setFilter] = useState("all");

  return (
    <div className="relative min-h-screen selection:bg-emerald-500/30">
      
      {/* GLOBAL FIXED BACKGROUND (Camo Overlay) */}
      <div 
        className="fixed inset-0 z-0 bg-[url('/Camo.jpg')] bg-cover bg-center bg-fixed opacity-10" 
        aria-hidden="true"
      />

      {/* MAIN CONTENT WRAPPER */}
      <div className="relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pt-8">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500 block">
              messages sent via atm join system
            </span>
            <h1 className="mt-2 text-3xl font-black uppercase tracking-tight text-white">
              MAIL & <span className="text-zinc-500">Notifications</span>
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={14} />
              <input 
                type="text" 
                placeholder="Search logs..." 
                className="h-10 w-48 bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 text-[10px] font-black uppercase tracking-widest outline-none focus:ring-1 focus:ring-emerald-500/40 text-white"
              />
            </div>
            <button className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-zinc-500 hover:text-white transition-all backdrop-blur-sm">
              <Filter size={16} />
            </button>
          </div>
        </div>

        {/* FILTER TABS */}
        <div className="flex gap-2 mb-8 border-b border-white/5 pb-6">
          {["all", "unread", "priority", "archived"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                filter === tab 
                ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]" 
                : "text-zinc-500 hover:text-white hover:bg-white/5"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* NOTIFICATIONS LIST */}
        <div className="space-y-3">
          {mockNotifications.map((note) => (
            <div 
              key={note.id}
              className={`group relative p-6 rounded-[2rem] border transition-all duration-300 flex flex-col md:flex-row gap-6 backdrop-blur-md ${
                note.isRead 
                ? "bg-zinc-950/40 border-white/5 opacity-60" 
                : "bg-zinc-900/80 border-white/10 hover:border-emerald-500/30"
              }`}
            >
              {/* Status Indicator Bar */}
              {!note.isRead && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-1 bg-emerald-500 rounded-r-full shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
              )}

              {/* Icon Block */}
              <div className={`h-12 w-12 shrink-0 rounded-2xl flex items-center justify-center border border-white/5 ${note.bg} ${note.color}`}>
                <note.icon size={22} />
              </div>

              {/* Content Block */}
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className={`text-sm font-bold uppercase tracking-tight ${note.isRead ? "text-zinc-400" : "text-white"}`}>
                    {note.title}
                  </h3>
                  <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">{note.time}</span>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed max-w-2xl">
                  {note.desc}
                </p>
              </div>

              {/* Actions Block */}
              <div className="flex items-center gap-2 md:opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="h-9 w-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-zinc-500 hover:text-white transition-all">
                  <MailOpen size={14} />
                </button>
                <button className="h-9 w-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-zinc-500 hover:text-red-400 transition-all">
                  <Trash2 size={14} />
                </button>
                <button className="h-9 w-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-zinc-500 hover:text-white transition-all">
                  <MoreVertical size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER ACTION */}
        <div className="mt-10 text-center">
          <button className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 hover:text-zinc-400 transition-colors py-4 px-8">
            Clear All Transmissions
          </button>
        </div>
      </div>
    </div>
  );
}
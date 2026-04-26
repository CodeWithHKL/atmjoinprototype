"use client";

import React from "react";
import Link from "next/link";
import { 
  Clock, 
  Calendar, 
  Plus,
  Shield,
  Activity,
  ArrowUpRight,
  FileText,
  Search
} from "lucide-react";

export default function EmptyDashboard() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white font-sans selection:bg-emerald-500/30">
      {/* GLOBAL FIXED BACKGROUND */}
      <div 
        className="fixed inset-0 z-0 bg-[url('/Camo.jpg')] bg-cover bg-center bg-fixed opacity-10" 
        aria-hidden="true"
      />

      <div className="relative z-10 p-4 lg:p-8 max-w-7xl mx-auto">
        {/* WELCOME HEADER */}
        <header className="mb-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-500">your dashboard</span>
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tighter mt-2">
            Welcome, <span className="text-zinc-500">Ahmad Zaki.</span>
          </h1>
          <p className="text-zinc-500 text-sm mt-2 max-w-md"></p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* LEFT & MIDDLE: EMPTY STATE / CTA */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 text-zinc-300">
                <Activity size={16} className="text-zinc-600" /> 
                Active Applications <span className="text-zinc-600">(0/2)</span>
              </h2>
            </div>

            {/* MAIN EMPTY STATE CARD */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-black/40 backdrop-blur-xl border border-white/5 p-8 lg:p-16 flex flex-col items-center text-center shadow-2xl">
              {/* Decorative background element */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-emerald-500/5 blur-[120px] pointer-events-none" />
              
              <div className="relative mb-8">
                <div className="h-24 w-24 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center">
                  <Shield size={40} className="text-zinc-700" />
                </div>
                <div className="absolute -bottom-2 -right-2 h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center border-4 border-zinc-950">
                  <Plus size={20} className="text-black" />
                </div>
              </div>

              <h3 className="text-2xl font-bold tracking-tight mb-3">No Active Applications</h3>
              <p className="text-zinc-500 text-sm max-w-xs mb-10 leading-relaxed">
                Start your journey by selecting a branch and role. You have 2 available application slots.
              </p>

              <Link 
                href="/loggedin/profile/edit" 
                className="group relative flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-emerald-500 transition-all active:scale-95"
              >
                Update Profile
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>

              <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-lg border-t border-white/5 pt-10">
                <div className="flex flex-col items-center gap-2">
                   <Search size={18} className="text-zinc-600" />
                   <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-tighter">Browse Roles</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                   <FileText size={18} className="text-zinc-600" />
                   <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-tighter">Submit Documents</span>
                </div>
                <div className="hidden md:flex flex-col items-center gap-2">
                   <Clock size={18} className="text-zinc-600" />
                   <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-tighter">Track Progress</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: QUICK INTEL */}
          <div className="space-y-6">
            {/* OPEN INTAKES PREVIEW */}
            <div className="p-8 rounded-[2rem] bg-black/40 backdrop-blur-xl border border-white/10 shadow-xl">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2 text-zinc-300">
                <Calendar size={16} className="text-zinc-500" /> Open Intakes
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Air Force (TUDM) Officer", date: "Closing Jul 15", color: "text-cyan-400" },
                  { label: "Army (TDM) Enlisted", date: "Closing Aug 02", color: "text-emerald-400" },
                  { label: "Navy (TLDM) Specialist", date: "Closing Aug 20", color: "text-blue-400" },
                ].map((intake, i) => (
                  <div key={i} className="flex items-center justify-between group cursor-pointer border-b border-white/5 pb-4 last:border-0 last:pb-0">
                    <div>
                      <p className={`text-[12px] font-bold tracking-tight ${intake.color}`}>{intake.label}</p>
                      <p className="text-[10px] font-medium text-zinc-500">{intake.date}</p>
                    </div>
                    <ArrowUpRight size={14} className="text-zinc-700 group-hover:text-white transition-colors" />
                  </div>
                ))}
              </div>
              <Link href="/loggedin/recruitment" className="mt-8 flex items-center justify-center w-full py-4 rounded-xl border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-all text-zinc-300 bg-white/5">
                Browse all
              </Link>
            </div>

            {/* SYSTEM MESSAGES */}
            <div className="p-6 rounded-[2rem] bg-red-500/5 backdrop-blur-md border border-emerald-500/20 shadow-lg">
              <div className="flex gap-4">
                <Shield size={20} className="text-red-400 shrink-0" />
                <div>
                  <p className="text-[11px] font-bold text-red-400 uppercase tracking-widest mb-1">Important note</p>
                  <p className="text-[11px] font-medium text-red-100/70 leading-relaxed">
                    Each recruitment has its own intake period, and applicants can apply to up to two at the same time. They may withdraw or change applications while the intake is still open, but no changes are allowed once it closes. Each application goes through five phases: verification, aptitude test, medical test, physical test, and interview, and applicants can attend both processes simultaneously. If successful, they will receive an offer, but accepting one will automatically withdraw the other, as only one offer can be accepted.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
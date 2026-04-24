"use client";

import React from "react";
import Link from "next/link";
import { 
  Trophy, 
  Clock, 
  Calendar, 
  ChevronRight, 
  AlertCircle,
  CheckCircle2,
  Activity,
  ArrowUpRight,
  MapPin
} from "lucide-react";

// Mock data for the 2 application slots
const myApplications = [
  {
    id: "APP-8829",
    branch: "Navy (TLDM)",
    role: "Officer Cadet",
    phase: 2, // Altitude Test
    status: "Action Required",
    date: "12 May 2026",
    location: "KD Sultan Idris, Lumut",
    progress: 40,
  },
  {
    id: "APP-9012",
    branch: "Army (TDM)",
    role: "Enlisted Personnel",
    phase: 1, // System Verification
    status: "In Progress",
    date: "Processing",
    location: "Pending Approval",
    progress: 20,
  }
];

const phases = [
  "Eligibility", "Altitude", "Medical", "Physical", "Interview"
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-4 lg:p-8">
      {/* WELCOME HEADER */}
      <header className="mb-10">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500">Personnel Command</span>
        <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter mt-2">
          Welcome back, <span className="text-zinc-500">Applicant.</span>
        </h1>
      </header>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* LEFT & MIDDLE: ACTIVE APPLICATIONS */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
              <Activity size={16} className="text-emerald-500" /> 
              Active Operations <span className="text-zinc-600">({myApplications.length}/2)</span>
            </h2>
            <Link href="/loggedin/applications/myapply" className="text-[10px] font-bold uppercase text-zinc-500 hover:text-white transition-colors">
              View Details
            </Link>
          </div>

          <div className="grid gap-4">
            {myApplications.map((app, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-[2rem] bg-zinc-900 border border-white/5 p-6 lg:p-8 hover:border-emerald-500/30 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[9px] font-black uppercase tracking-widest">
                        {app.id}
                      </span>
                      <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                        <MapPin size={10} /> {app.location}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tight">{app.branch}</h3>
                    <p className="text-zinc-400 text-sm font-medium">{app.role}</p>
                  </div>

                  <div className="text-right">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest mb-2 ${
                      app.status === "Action Required" ? "bg-amber-500 text-black animate-pulse" : "bg-white/5 text-zinc-400"
                    }`}>
                      {app.status === "Action Required" && <AlertCircle size={12} />}
                      {app.status}
                    </div>
                    <p className="text-[10px] font-bold text-zinc-500 uppercase block tracking-tighter">Next Milestone: {app.date}</p>
                  </div>
                </div>

                {/* STEPPER UI */}
                <div className="relative">
                  <div className="flex justify-between mb-4">
                    {phases.map((p, i) => (
                      <div key={i} className="flex flex-col items-center gap-2 z-10">
                        <div className={`h-8 w-8 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                          i < app.phase ? "bg-emerald-500 border-emerald-500 text-black" : 
                          i === app.phase ? "bg-zinc-900 border-emerald-500 text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]" :
                          "bg-zinc-900 border-white/10 text-zinc-700"
                        }`}>
                          {i < app.phase ? <CheckCircle2 size={16} /> : <span className="text-[10px] font-black">{i + 1}</span>}
                        </div>
                        <span className={`text-[8px] font-black uppercase tracking-tighter ${i === app.phase ? "text-white" : "text-zinc-600"}`}>
                          {p}
                        </span>
                      </div>
                    ))}
                  </div>
                  {/* Progress Line Background */}
                  <div className="absolute top-4 left-0 w-full h-[2px] bg-white/5 -z-0" />
                  {/* Progress Line Active */}
                  <div 
                    className="absolute top-4 left-0 h-[2px] bg-emerald-500 transition-all duration-1000 shadow-[0_0_10px_rgba(16,185,129,0.5)]" 
                    style={{ width: `${(app.phase / (phases.length - 1)) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: QUICK INTEL */}
        <div className="space-y-6">
          {/* STATS PREVIEW */}
          <div className="p-8 rounded-[2rem] bg-gradient-to-br from-emerald-500 to-emerald-700 text-black">
            <Trophy size={32} className="mb-4" />
            <h3 className="text-xl font-black uppercase tracking-tighter leading-tight mb-1">Elite Potential</h3>
            <p className="text-black/70 text-xs font-bold uppercase tracking-widest mb-6">Physical Merit Score: 88%</p>
            <div className="h-2 w-full bg-black/10 rounded-full overflow-hidden">
              <div className="h-full bg-black w-[88%]" />
            </div>
          </div>

          {/* OPEN INTAKES PREVIEW */}
          <div className="p-8 rounded-[2rem] bg-zinc-900 border border-white/5">
            <h3 className="text-sm font-black uppercase tracking-widest mb-6 flex items-center gap-2">
              <Calendar size={16} className="text-zinc-500" /> Open Intakes
            </h3>
            <div className="space-y-4">
              {[
                { label: "Air Force (TUDM) Officer", date: "Closing Jul 15", color: "text-cyan-400" },
                { label: "Army (TDM) Enlisted", date: "Closing Aug 02", color: "text-emerald-400" },
              ].map((intake, i) => (
                <div key={i} className="flex items-center justify-between group cursor-pointer">
                  <div>
                    <p className={`text-[11px] font-black uppercase tracking-tight ${intake.color}`}>{intake.label}</p>
                    <p className="text-[9px] font-bold text-zinc-500 uppercase">{intake.date}</p>
                  </div>
                  <ArrowUpRight size={14} className="text-zinc-800 group-hover:text-white transition-colors" />
                </div>
              ))}
            </div>
            <Link href="/loggedin/recruitment" className="mt-8 flex items-center justify-center w-full py-4 rounded-xl border border-white/5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white/5 transition-all">
              Browse All
            </Link>
          </div>

          {/* SYSTEM MESSAGES */}
          <div className="p-6 rounded-[2rem] bg-blue-500/5 border border-blue-500/10">
            <div className="flex gap-4">
              <Clock size={20} className="text-blue-400 shrink-0" />
              <div>
                <p className="text-[10px] font-bold text-blue-100/60 uppercase tracking-wide leading-relaxed">
                  The Air Force (TUDM) Specialist recruitment window opens in 14 days. Prepare your technical certifications.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
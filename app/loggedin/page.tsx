"use client";

import React from "react";
import Link from "next/link";
import { 
  Clock, 
  Calendar, 
  AlertCircle,
  CheckCircle2,
  Activity,
  ArrowUpRight,
  MapPin
} from "lucide-react";

// Mock data for the 2 application slots
const myApplications = [
  {
    id: "APP-4412",
    branch: "Army (TDM)",
    branchLogo: "/TDM_Logo.png",
    role: "Regular Officer",
    phase: 2, // Altitude Test (or equivalent screening)
    status: "Action Required",
    date: "12 May 2026",
    time: "0800 HRS",
    location: "Kem Perdana Sungai Besi, KL",
    progress: 40,
  },
  {
    id: "APP-5590",
    branch: "Navy (TLDM)",
    branchLogo: "/TLDM_Logo.png",
    role: "Enlisted Personnel",
    phase: 0, // System Verification
    status: "In Progress",
    date: "Processing",
    time: "TBD",
    location: "KD Sultan Idris, Lumut",
    progress: 20,
  }
];

const phases = [
  "Eligibility", "Altitude", "Medical", "Physical", "Interview"
];

export default function Dashboard() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white font-sans selection:bg-emerald-500/30">
      {/* GLOBAL FIXED BACKGROUND */}
      <div 
        className="fixed inset-0 z-0 bg-[url('/Camo.jpg')] bg-cover bg-center bg-fixed opacity-10" 
        aria-hidden="true"
      />

      <div className="relative z-10 p-4 lg:p-8">
        {/* WELCOME HEADER */}
        <header className="mb-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-500">Personnel Command</span>
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tighter mt-2">
            Welcome back, <span className="text-zinc-500">Applicant.</span>
          </h1>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* LEFT & MIDDLE: ACTIVE APPLICATIONS */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 text-zinc-300">
                <Activity size={16} className="text-emerald-500" /> 
                Active Operations <span className="text-zinc-600">({myApplications.length}/2)</span>
              </h2>
              <Link href="/loggedin/applications/myapply" className="text-[11px] font-medium text-zinc-500 hover:text-white transition-colors">
                View details
              </Link>
            </div>

            <div className="grid gap-4">
              {myApplications.map((app, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-[2rem] bg-black/40 backdrop-blur-xl border border-white/10 p-6 lg:p-8 hover:border-emerald-500/30 transition-all shadow-2xl">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div className="flex items-center gap-5">
                      {/* BRANCH LOGO */}
                      <div className="h-16 w-16 rounded-2xl bg-white/5 border border-white/10 p-3 flex items-center justify-center shrink-0">
                        <img 
                          src={app.branchLogo} 
                          alt={`${app.branch} Logo`} 
                          className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                      </div>

                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[9px] font-bold tracking-widest">
                            {app.id}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight">{app.branch}</h3>
                        <p className="text-zinc-400 text-sm font-medium">{app.role}</p>
                      </div>
                    </div>

                    <div className="md:text-right">
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest mb-2 ${
                        app.status === "Action Required" ? "bg-amber-500 text-black animate-pulse" : "bg-white/5 text-zinc-400 border border-white/5"
                      }`}>
                        {app.status === "Action Required" && <AlertCircle size={12} />}
                        {app.status}
                      </div>
                      <p className="text-[11px] font-medium text-zinc-500 block">
                        Phase {app.phase + 1}: <span className="text-zinc-300">{phases[app.phase]}</span>
                      </p>
                    </div>
                  </div>

                  {/* LOGISTICS ROW */}
                  <div className="flex flex-wrap gap-6 mb-8 border-t border-white/10 pt-6">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-white/5 text-zinc-500">
                        <MapPin size={14} />
                      </div>
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-wider text-zinc-500">Reporting Center</p>
                        <p className="text-[11px] font-semibold text-zinc-200">{app.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-white/5 text-zinc-500">
                        <Calendar size={14} />
                      </div>
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-wider text-zinc-500">Reporting Date</p>
                        <p className="text-[11px] font-semibold text-zinc-200">{app.date} • {app.time}</p>
                      </div>
                    </div>
                  </div>

                  {/* STEPPER UI */}
                  <div className="relative px-2">
                    <div className="flex justify-between mb-4">
                      {phases.map((p, i) => (
                        <div key={i} className="flex flex-col items-center gap-2 z-10">
                          <div className={`h-8 w-8 rounded-full flex items-center justify-center border-2 transition-all duration-500 backdrop-blur-md ${
                            i < app.phase ? "bg-emerald-500 border-emerald-500 text-black" : 
                            i === app.phase ? "bg-black border-emerald-500 text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]" :
                            "bg-black/50 border-white/10 text-zinc-700"
                          }`}>
                            {i < app.phase ? <CheckCircle2 size={16} /> : <span className="text-[10px] font-bold">{i + 1}</span>}
                          </div>
                          <span className={`text-[9px] font-bold tracking-tight ${i === app.phase ? "text-white" : "text-zinc-600"}`}>
                            {p}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="absolute top-4 left-0 w-full h-[2px] bg-white/5 -z-0" />
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
            {/* OPEN INTAKES PREVIEW */}
            <div className="p-8 rounded-[2rem] bg-black/40 backdrop-blur-xl border border-white/10 shadow-xl">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2 text-zinc-300">
                <Calendar size={16} className="text-zinc-500" /> Open Intakes
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Air Force (TUDM) Officer", date: "Closing Jul 15", color: "text-cyan-400" },
                  { label: "Army (TDM) Enlisted", date: "Closing Aug 02", color: "text-emerald-400" },
                ].map((intake, i) => (
                  <div key={i} className="flex items-center justify-between group cursor-pointer">
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
            <div className="p-6 rounded-[2rem] bg-blue-500/5 backdrop-blur-md border border-blue-500/20 shadow-lg">
              <div className="flex gap-4">
                <Clock size={20} className="text-blue-400 shrink-0" />
                <div>
                  <p className="text-[11px] font-medium text-blue-100/70 leading-relaxed">
                    The Air Force (TUDM) Specialist recruitment window opens in 14 days. Please prepare your technical certifications.
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
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight,
  GraduationCap,
  UserCheck,
  Search,
  ChevronRight,
  Info,
  ChevronLeft
} from "lucide-react";

// --- Static Data ---
const generalCriteria = [
  "Malaysian Citizen (Blue MyKad)",
  "Clean Criminal & Disciplinary Record",
  "Willingness to be stationed nationwide",
  "Pass Physical Fitness Test (UKJK)"
];

const enlistedStats = [
  { label: "Min. Height (Male)", army: "1.57m", navy: "1.62m", airforce: "1.62m" },
  { label: "Min. Height (Female)", army: "1.57m", navy: "1.57m", airforce: "1.57m" },
  { label: "Max. Age", army: "30 yrs (M) / 25 (F)", navy: "25 yrs", airforce: "25 yrs" },
  { label: "BMI Range", army: "18.0 – 27.9", navy: "18.0 – 25.0", airforce: "18.0 – 25.0" },
  { label: "Min. Education", army: "SPM (Pass)", navy: "SPM (6 Credits)", airforce: "SPM (6 Credits)" },
];

const officerStats = [
  { label: "Min. Height (Male)", army: "1.62m", navy: "1.62m", airforce: "1.62m" },
  { label: "Min. Height (Female)", army: "1.57m", navy: "1.57m", airforce: "1.57m" },
  { label: "Max. Age", army: "27 yrs", navy: "27 yrs", airforce: "27 yrs" },
  { label: "CGPA Req.", army: "2.70+", navy: "2.70+", airforce: "3.00+ (Pilot)" },
  { label: "Min. Education", army: "Degree (Hons)", navy: "Degree (Hons)", airforce: "Degree (Hons)" },
];

export default function EligibilityPage() {
  const [track, setTrack] = useState<"enlisted" | "officer">("enlisted");

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white font-sans selection:bg-emerald-500/30">
      
      {/* GLOBAL FIXED BACKGROUND (Camo Overlay) */}
      <div 
        className="fixed inset-0 z-0 bg-[url('/Camo.jpg')] bg-cover bg-center bg-fixed opacity-10" 
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* HEADER SECTION */}
        <header className="relative pt-32 pb-16 px-6 overflow-hidden">
          {/* Gradient overlay to ensure text readability against the camo */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-zinc-950" />
          
          <div className="relative z-20 mx-auto max-w-7xl">
            <Link href="/loggedin/dashboard" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors mb-8">
              <ChevronLeft size={14} /> Back to Dashboard
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Entry <span className="text-emerald-500">Standards.</span>
            </h1>
            
            <p className="mt-4 max-w-xl text-zinc-400">
              Ensure you meet the physical and academic benchmarks required for service. 
              The ATM maintains rigorous standards to ensure operational readiness across all branches.
            </p>
          </div>
        </header>

        <main className="relative z-20 mx-auto max-w-7xl px-6 pb-24">
          {/* 1. GENERAL REQUIREMENTS */}
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {generalCriteria.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-5 rounded-2xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm">
                <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                  <CheckCircle2 size={16} />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-tight text-zinc-300">{item}</span>
              </div>
            ))}
          </div>

          {/* 2. TRACK TOGGLE */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex p-1.5 bg-zinc-900/80 backdrop-blur-xl rounded-3xl border border-white/5 shadow-2xl">
              <button
                onClick={() => setTrack("enlisted")}
                className={`flex items-center gap-3 px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${
                  track === "enlisted" ? "bg-white text-black" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <Search size={16} /> Enlisted Personnel
              </button>
              <button
                onClick={() => setTrack("officer")}
                className={`flex items-center gap-3 px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${
                  track === "officer" ? "bg-emerald-500 text-black" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <GraduationCap size={16} /> Officer Cadet
              </button>
            </div>
          </div>

          {/* 3. MAIN CONTENT GRID */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {/* Left/Middle: Requirements Table */}
            <div className="lg:col-span-2 space-y-6">
              <div className="p-8 md:p-10 rounded-[2.5rem] bg-zinc-900/60 border border-white/5 backdrop-blur-md">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <h3 className="text-xl font-bold uppercase tracking-tight">
                    {track === "enlisted" ? "Enlisted" : "Officer"} Benchmarks
                  </h3>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-[9px] font-black uppercase text-zinc-600 border-b border-white/5">
                        <th className="pb-4 px-2">Core Criteria</th>
                        <th className="pb-4 px-2 text-emerald-400">Army (TDM)</th>
                        <th className="pb-4 px-2 text-blue-400">Navy (TLDM)</th>
                        <th className="pb-4 px-2 text-cyan-400">Air Force (TUDM)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {(track === "enlisted" ? enlistedStats : officerStats).map((row, i) => (
                        <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                          <td className="py-6 px-2 text-xs font-bold text-zinc-400">{row.label}</td>
                          <td className="py-6 px-2 text-sm font-black tracking-tight">{row.army}</td>
                          <td className="py-6 px-2 text-sm font-black tracking-tight">{row.navy}</td>
                          <td className="py-6 px-2 text-sm font-black tracking-tight">{row.airforce}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Note Section */}
              <div className="p-6 rounded-3xl bg-blue-500/5 border border-blue-500/10 flex items-center gap-4 backdrop-blur-md">
                <span className="text-blue-400 shrink-0"><Info size={20} /></span>
                <p className="text-[11px] font-medium text-blue-100/60 leading-relaxed uppercase tracking-wide">
                  Physical standards are measured at the first selection stage. Failure to meet these metrics 
                  results in immediate disqualification from the current intake.
                </p>
              </div>
            </div>

            {/* Right: Interactive Matcher Card */}
            <div className="lg:col-span-1">
              <div className="h-full p-10 rounded-[2.5rem] bg-zinc-900/80 backdrop-blur-md border border-white/5 flex flex-col justify-center text-center">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 text-emerald-400">
                  <UserCheck size={32} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4 leading-tight">Identify Your <br/> Calling.</h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-10">
                  Not sure which branch suits your skill set? Our 1-minute matcher uses branch-specific roles to find your fit.
                </p>
                
                <Link 
                  href="/loggedin/carebility/assessment" 
                  className="group flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] hover:bg-emerald-400 transition-all"
                >
                  Start Applying <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
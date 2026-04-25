"use client";

import React from "react";
import { 
  Users, 
  Target, 
  ShieldAlert, 
  CheckCircle2,
  CalendarDays
} from "lucide-react";

const phases = ["Eligibility", "Altitude", "Medical", "Physical", "Interview"];

const activeIntakes = [
  {
    id: "INTK-TDM-O-26-01",
    title: "Army Officer Cadet (Z-Grade)",
    totalApplicants: 1240, 
    currentPool: 840,      
    male: 868,
    female: 372,
    slots: 200,
    closingDate: "15 Jun 2026",
    currentPhase: 2, 
  },
  {
    id: "INTK-TDM-E-26-04",
    title: "Enlisted Personnel Intake 194",
    totalApplicants: 4502,
    currentPool: 3120,
    male: 3827,
    female: 675,
    slots: 1500,
    closingDate: "20 May 2026",
    currentPhase: 3, 
  }
];

export default function CommandDashboard() {
  return (
    <div className="space-y-8 p-6 max-w-7xl mx-auto">
      
      {/* HUD HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/5 pb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Command <span className="text-emerald-500">Analytics</span>
          </h1>
          <p className="text-zinc-500 text-xs font-medium mt-1 uppercase tracking-wider">
            Recruitment Command HQ (TDM)
          </p>
        </div>
        <div className="flex gap-8 text-right font-mono">
          <div>
            <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Active Streams</p>
            <p className="text-xl font-bold text-white">02 LIVE</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-1">System Status</p>
            <p className="text-xl font-bold text-emerald-500 tracking-tight">NOMINAL</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        
        {/* LEFT: MAIN CONTENT */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* TOTAL CANDIDATES SUMMARY */}
          <div className="bg-zinc-900 border border-white/5 p-8 rounded-3xl flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-6">
               <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <Users size={24} />
               </div>
               <div>
                  <p className="text-3xl font-bold text-white tracking-tight">5,742</p>
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Total Candidates Under Command</p>
               </div>
            </div>
          </div>

          <div className="flex items-center justify-between px-2 pt-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
              <Target size={14} className="text-emerald-500" /> Operational Pipeline
            </h3>
          </div>

          {/* ACTIVE INTAKE HUD */}
          <div className="flex flex-col gap-6">
            {activeIntakes.map((intake) => {
              const malePercent = Math.round((intake.male / intake.totalApplicants) * 100);
              const femalePercent = 100 - malePercent;

              return (
                <div key={intake.id} className="bg-zinc-900 border border-white/5 rounded-3xl p-8 hover:border-emerald-500/30 transition-all group shadow-xl">
                  <div className="flex justify-between items-start mb-8">
                    <div className="space-y-1">
                      <p className="text-[10px] font-mono text-emerald-500/70 font-bold uppercase tracking-widest">{intake.id}</p>
                      <h2 className="text-2xl font-bold text-white leading-tight group-hover:text-emerald-500 transition-colors mb-2">
                        {intake.title}
                      </h2>
                      <div className="flex items-center gap-2 text-zinc-500">
                        <CalendarDays size={14} className="text-zinc-500" />
                        <span className="text-[11px] font-medium tracking-wide">Closing: {intake.closingDate}</span>
                      </div>
                    </div>
                    
                    {/* STATS LABELS & PIE CHART */}
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Gender Distribution</p>
                        <p className="text-xs font-bold text-white font-mono">
                          <span className="text-blue-400">M: {malePercent}%</span> / <span className="text-pink-400">F: {femalePercent}%</span>
                        </p>
                      </div>

                      <div className="relative h-20 w-20">
                        <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
                          {/* Background/Female (Pink) */}
                          <circle 
                            cx="18" cy="18" r="16" fill="none" 
                            className="stroke-pink-500" 
                            strokeWidth="4" 
                          />
                          {/* Male (Blue) */}
                          <circle 
                            cx="18" cy="18" r="16" fill="none" 
                            className="stroke-blue-500 transition-all duration-1000" 
                            strokeWidth="4" 
                            strokeDasharray={`${malePercent} 100`}
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center font-mono">
                          <span className="text-[10px] font-bold text-white">{intake.totalApplicants}</span>
                          <span className="text-[7px] font-bold text-zinc-500 uppercase">Total</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* PHASE STEPPER */}
                  <div className="relative mb-10 px-2 bg-zinc-950/50 p-6 rounded-2xl border border-white/5">
                    <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-6">Current Operational Phase</p>
                    
                    <div className="relative">
                      {/* THE PHASE LINE - Centered horizontally and vertically relative to circles */}
                      <div className="absolute top-[15px] left-[4%] right-[4%] h-[2px] bg-white/10 z-0" />
                      <div 
                        className="absolute top-[15px] left-[4%] h-[2px] bg-emerald-500 transition-all duration-1000 shadow-[0_0_10px_rgba(16,185,129,0.5)] z-0" 
                        style={{ width: `${(intake.currentPhase / (phases.length - 1)) * 92}%` }}
                      />

                      <div className="flex justify-between relative z-10">
                        {phases.map((p, i) => (
                          <div key={i} className="flex flex-col items-center gap-3">
                            <div className={`h-8 w-8 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                              i < intake.currentPhase ? "bg-emerald-500 border-emerald-500 text-black" : 
                              i === intake.currentPhase ? "bg-zinc-900 border-emerald-500 text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]" :
                              "bg-zinc-900 border-white/10 text-zinc-700"
                            }`}>
                              {i < intake.currentPhase ? <CheckCircle2 size={16} /> : <span className="text-[10px] font-bold">{i + 1}</span>}
                            </div>
                            <span className={`text-[9px] font-bold tracking-tight uppercase ${i === intake.currentPhase ? "text-white" : "text-zinc-600"}`}>
                              {p}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-zinc-950/80 border border-white/5 rounded-2xl p-6">
                      <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-wider mb-2">Current Pool</p>
                      <p className="text-2xl font-bold text-white font-mono">{intake.currentPool.toLocaleString()}</p>
                    </div>
                    <div className="bg-zinc-950/80 border border-white/5 rounded-2xl p-6">
                      <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-wider mb-2">Target Quota</p>
                      <p className="text-2xl font-bold text-emerald-500 font-mono">{intake.slots}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT: ACTIVITY LOG */}
        <div className="lg:col-span-4 bg-zinc-900 border border-white/5 rounded-3xl p-8 flex flex-col shadow-2xl h-fit">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-2">
              <ShieldAlert size={14} className="text-emerald-500" /> Command Log
            </h3>
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          
          <div className="space-y-6">
            {[
              { type: "System", msg: "Batch 2026-A automated verification complete.", time: "2m ago" },
              { type: "Alert", msg: "Medical discrepancy flagged: Intake 194.", time: "14m ago" },
              { type: "User", msg: "Recruiter-04 archived transmission TX-8812.", time: "1h ago" },
              { type: "Intake", msg: "Enlisted Intake 194 reached 60% capacity.", time: "3h ago" },
              { type: "Security", msg: "Settings update: 2FA enabled for Admin.", time: "5h ago" },
            ].map((log, i) => (
              <div key={i} className="flex gap-4 border-l border-white/5 pl-4 relative group">
                <div className="absolute -left-[3px] top-1 h-1.5 w-1.5 rounded-full bg-zinc-800 border border-zinc-900 group-hover:bg-emerald-500 transition-colors" />
                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-tighter ${
                      log.type === 'Alert' ? 'bg-red-500/10 text-red-500' : 'bg-zinc-800 text-zinc-500'
                    }`}>
                      {log.type}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-600 font-bold uppercase">{log.time}</span>
                  </div>
                  <p className="text-sm font-medium text-zinc-400 leading-relaxed group-hover:text-zinc-200 transition-colors">
                    {log.msg}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
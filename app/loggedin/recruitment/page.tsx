"use client";

import React from "react";
import Link from "next/link";
import { 
  Calendar, 
  ShieldCheck, 
  ArrowRight,
  Info,
  Timer,
  CheckCircle2,
  Lock
} from "lucide-react";

const recruitments = [
  {
    id: "INTK-TDM-E-26",
    branch: "Army (TDM)",
    type: "Enlistment",
    logo: "/TDM_Logo.png",
    closingDate: "2026-05-15",
    daysLeft: 12,
    hoursLeft: 8,
    status: "Applied",
    color: "bg-emerald-950/40 border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.1)]",
    glow: "bg-emerald-500",
    buttonColor: "bg-emerald-500 text-black cursor-default"
  },
  {
    id: "INTK-TLDM-E-26",
    branch: "Navy (TLDM)",
    type: "Enlistment",
    logo: "/TLDM_Logo.png",
    closingDate: "2026-06-20",
    daysLeft: 48,
    hoursLeft: 14,
    status: "Apply Now",
    color: "bg-blue-950/40 border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.1)]",
    glow: "bg-blue-500",
    buttonColor: "bg-white text-black hover:bg-blue-400"
  },
  {
    id: "INTK-TUDM-E-26",
    branch: "Air Force (TUDM)",
    type: "Enlistment",
    logo: "/TUDM_Logo.png",
    closingDate: "2026-05-30",
    daysLeft: 27,
    hoursLeft: 3,
    status: "Apply Now",
    color: "bg-cyan-950/40 border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.1)]",
    glow: "bg-cyan-500",
    buttonColor: "bg-white text-black hover:bg-cyan-400"
  },
  {
    id: "INTK-TDM-O-26",
    branch: "Army (TDM)",
    type: "Officer",
    logo: "/TDM_Logo.png",
    closingDate: "2026-04-10",
    daysLeft: 0,
    hoursLeft: 0,
    status: "Expired",
    color: "bg-zinc-900 border-white/5 opacity-60",
    glow: "bg-zinc-700",
    buttonColor: "bg-zinc-800 text-zinc-500 cursor-not-allowed"
  },
  {
    id: "INTK-TLDM-O-26",
    branch: "Navy (TLDM)",
    type: "Officer",
    logo: "/TLDM_Logo.png",
    closingDate: "2026-07-05",
    daysLeft: 63,
    hoursLeft: 2,
    status: "Apply Now",
    color: "bg-blue-950/40 border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.1)]",
    glow: "bg-blue-500",
    buttonColor: "bg-white text-black hover:bg-blue-400"
  },
  {
    id: "INTK-TUDM-O-26",
    branch: "Air Force (TUDM)",
    type: "Officer",
    logo: "/TUDM_Logo.png",
    closingDate: "2026-05-25",
    daysLeft: 22,
    hoursLeft: 5,
    status: "Apply Now",
    color: "bg-cyan-950/40 border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.1)]",
    glow: "bg-cyan-500",
    buttonColor: "bg-white text-black hover:bg-cyan-400"
  }
];

export default function RecruitmentPage() {
  const appliedCount = recruitments.filter(r => r.status === "Applied").length;

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-4 lg:p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck size={16} className="text-emerald-500" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">Service Selection Portal</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter">Current <span className="text-emerald-500">Intakes.</span></h1>
            <p className="text-zinc-500 text-sm mt-4 font-medium max-w-xl leading-relaxed tracking-tight">
              Select your track. Remember: withdrawals are only permitted while the intake remains open.
            </p>
          </div>

          {/* APPLICATION COUNTER */}
          <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl flex items-center gap-4">
            <div>
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">Active Submissions</span>
              <span className="text-2xl font-bold">{appliedCount}/2</span>
            </div>
            <div className="flex gap-1">
              {[1, 2].map(i => (
                <div key={i} className={`h-8 w-2 rounded-full ${i <= appliedCount ? "bg-emerald-500" : "bg-zinc-800"}`} />
              ))}
            </div>
          </div>
        </header>

        {/* RECRUITMENT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recruitments.map((item) => (
            <div 
              key={item.id} 
              className={`group relative overflow-hidden rounded-[2.5rem] border p-8 flex flex-col transition-all duration-500 ${item.color}`}
            >
              <div className="flex justify-between items-start mb-8">
                <div className="h-12 w-12 flex items-center justify-center bg-white/5 rounded-xl">
                   <img src={item.logo} alt={item.branch} className="h-10 w-10 object-contain" />
                </div>
                {item.status === "Applied" && (
                  <div className="bg-emerald-500/20 text-emerald-500 px-3 py-1 rounded-lg flex items-center gap-2">
                    <CheckCircle2 size={12} />
                    <span className="text-[9px] font-bold uppercase tracking-widest">Recorded</span>
                  </div>
                )}
              </div>

              <div className="mb-8">
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{item.id}</span>
                <h3 className="text-2xl font-bold tracking-tight mt-1">{item.branch}</h3>
                <p className="text-zinc-400 text-sm font-semibold">{item.type} Track</p>
              </div>

              <div className="space-y-4 mt-auto">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-black/20 border border-white/5">
                  <Calendar size={16} className="text-zinc-500" />
                  <div>
                    <span className="text-[9px] font-bold text-zinc-600 uppercase block mb-1">Closing on</span>
                    <span className="text-xs font-bold text-zinc-300">{item.closingDate}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-black/20 border border-white/5">
                  <Timer size={16} className="text-zinc-500" />
                  <div>
                    <span className="text-[9px] font-bold text-zinc-600 uppercase block mb-1">Time remaining</span>
                    <span className="text-xs font-bold text-zinc-200">
                      {item.status === "Expired" ? "0d 0h" : `${item.daysLeft}d ${item.hoursLeft}h`}
                    </span>
                  </div>
                </div>
              </div>

              {item.status === "Apply Now" ? (
                <Link href="/loggedin/recruitment/apply" className="block w-full">
                  <button 
                    className={`mt-8 w-full py-5 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all active:scale-95 ${item.buttonColor}`}
                  >
                    Apply Now <ArrowRight size={14} />
                  </button>
                </Link>
              ) : (
                <button 
                  disabled
                  className={`mt-8 w-full py-5 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all active:scale-95 ${item.buttonColor}`}
                >
                  {item.status === "Applied" ? (
                    <>Application Sent <CheckCircle2 size={14} /></>
                  ) : (
                    <>Closed <Lock size={14} /></>
                  )}
                </button>
              )}
              
              {/* PERMANENT AMBIENT GLOW */}
              <div className={`absolute -bottom-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-20 bg-gradient-to-br ${item.glow}`} />
            </div>
          ))}
        </div>

        {/* BOTTOM GUIDANCE */}
        <div className="mt-12 p-8 rounded-[2.5rem] bg-zinc-900 border border-white/5 flex flex-col md:flex-row items-center gap-8">
           <div className="h-16 w-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
              <Info size={32} />
           </div>
           <div>
             <h4 className="text-sm font-bold uppercase tracking-widest mb-1 text-white">Selection Protocol</h4>
             <p className="text-[11px] font-medium text-zinc-500 leading-relaxed max-w-3xl">
               The <span className="text-emerald-500 font-bold">1/2</span> counter indicates your current commitment. If you have already applied to two branches, you must withdraw from one to open a new slot.
             </p>
           </div>
        </div>
      </div>
    </div>
  );
}
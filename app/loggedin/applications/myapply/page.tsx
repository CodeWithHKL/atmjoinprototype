"use client";

import React from "react";
import Link from "next/link";
import { 
  ChevronLeft, 
  MapPin, 
  Calendar, 
  Clock,
  History,
  Download,
  Trash2,
  CheckCircle2,
  Target
} from "lucide-react";

const applications = [
  {
    id: "APP-8829",
    branch: "Navy (TLDM)",
    branchLogo: "/TLDM_Logo.png",
    role: "Officer Cadet",
    status: "Assessment",
    currentTask: "Aptitude Test",
    location: "KD Sultan Idris, Lumut, Perak",
    date: "22 May 2026",
    time: "0800 HRS",
    phases: [
      { name: "Eligibility", status: "completed", date: "02 May" },
      { name: "Aptitude Test", status: "current", date: "22 May" },
      { name: "Medical Exam", status: "pending", date: "TBA" },
      { name: "Physical Test", status: "pending", date: "TBA" },
      { name: "Final Interview", status: "pending", date: "TBA" },
    ]
  },
  {
    id: "APP-9012",
    branch: "Army (TDM)",
    branchLogo: "/TDM_Logo.png",
    role: "Enlisted Personnel",
    status: "Verification",
    currentTask: "Eligibility Check",
    location: "Pusat Latihan Tentera Darat (PULADA)",
    date: "Pending Verification",
    time: "TBA",
    phases: [
      { name: "Eligibility", status: "current", date: "Processing" },
      { name: "Aptitude Test", status: "pending", date: "TBA" },
      { name: "Medical Exam", status: "pending", date: "TBA" },
      { name: "Physical Test", status: "pending", date: "TBA" },
      { name: "Final Interview", status: "pending", date: "TBA" },
    ]
  }
];

export default function MyApplications() {
  const activeCount = applications.length;

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white font-sans selection:bg-emerald-500/30">
      
      {/* GLOBAL FIXED BACKGROUND */}
      <div 
        className="fixed inset-0 z-0 bg-[url('/Camo.jpg')] bg-cover bg-center bg-fixed opacity-10" 
        aria-hidden="true"
      />

      <div className="relative z-10 p-4 lg:p-8">
        {/* HEADER */}
        <div className="max-w-5xl mx-auto mb-10">
          <Link href="/loggedin" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors mb-6">
            <ChevronLeft size={14} /> Back to dashboard
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-4xl font-black uppercase tracking-tighter">My <span className="text-emerald-500">Applications.</span></h1>
              <p className="text-zinc-500 text-[11px] mt-2 font-bold uppercase tracking-wider">Active Service Tracks: {activeCount}/2 Slots</p>
            </div>
            
            <div className="px-6 py-4 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 flex items-center gap-4 shadow-xl">
              <div className="flex gap-1.5">
                <div className={`h-2.5 w-2.5 rounded-full transition-colors duration-500 ${activeCount >= 1 ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-zinc-800"}`} />
                <div className={`h-2.5 w-2.5 rounded-full transition-colors duration-500 ${activeCount >= 2 ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-zinc-800"}`} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Authorization Limit</span>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {applications.map((app, idx) => (
            <div key={idx} className="rounded-[2.5rem] bg-black/40 backdrop-blur-2xl border border-white/10 overflow-hidden transition-all hover:border-emerald-500/20 shadow-2xl">
              {/* Top Bar */}
              <div className="px-8 py-6 bg-white/[0.03] border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 p-2 shadow-inner">
                      <img 
                        src={app.branchLogo} 
                        alt={`${app.branch} Logo`} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-black tracking-tight leading-none uppercase">{app.branch}</h2>
                      <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1.5">{app.id} • {app.role}</p>
                    </div>
                  </div>

                  <div className="hidden md:block h-10 w-px bg-white/10 mx-2" />
                  
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest mb-1 flex items-center gap-1.5">
                      <Target size={10} /> Active Objective
                    </span>
                    <span className="text-[13px] font-bold uppercase text-white tracking-tight">
                      {app.currentTask}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <button className="h-11 px-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-300 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 transition-all">
                    <Download size={14} /> Slips
                  </button>
                  <button className="h-11 px-5 rounded-xl bg-red-500/5 border border-red-500/20 hover:bg-red-500 hover:text-white text-red-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 transition-all group">
                    <Trash2 size={14} /> Withdraw
                  </button>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8 grid lg:grid-cols-3 gap-12">
                
                {/* PHASES LIST */}
                <div className="lg:col-span-2">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-8 flex items-center gap-2">
                     Enlistment Pipeline
                  </h3>
                  <div className="space-y-0 relative">
                    <div className="absolute left-4 top-2 bottom-2 w-px bg-white/10" />
                    
                    {app.phases.map((phase, pIdx) => (
                      <div key={pIdx} className={`relative pl-12 pb-8 last:pb-0 group`}>
                        <div className={`absolute left-4 -translate-x-1/2 top-1 h-3.5 w-3.5 rounded-full border-2 z-10 transition-all ${
                          phase.status === 'completed' ? "bg-emerald-500 border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]" :
                          phase.status === 'current' ? "bg-black border-emerald-500 animate-pulse" :
                          "bg-zinc-900 border-zinc-800"
                        }`} />
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className={`text-[13px] font-bold tracking-tight uppercase ${
                              phase.status === 'pending' ? "text-zinc-700" : "text-zinc-200"
                            }`}>
                              Phase 0{pIdx + 1}: {phase.name}
                            </p>
                            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-tighter mt-1 font-mono">{phase.date}</p>
                          </div>
                          {phase.status === 'completed' && <CheckCircle2 size={14} className="text-emerald-500 shadow-emerald-500/50" />}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* REPORTING INSTRUCTIONS */}
                <div className="lg:col-span-1">
                  <div className="p-8 rounded-[2rem] bg-black/40 border border-white/5 h-full shadow-inner relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Target size={120} className="text-white" />
                    </div>
                    
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 mb-8 flex items-center gap-2 relative z-10">
                      <Calendar size={14} /> Next Directive
                    </h3>
                    
                    <div className="space-y-8 relative z-10">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest block mb-2">Schedule Date</span>
                          <div className="flex items-center gap-2 text-zinc-200">
                            <Calendar size={14} className="text-zinc-500" />
                            <p className="text-[12px] font-bold uppercase">{app.date}</p>
                          </div>
                        </div>
                        <div>
                          <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest block mb-2">Reporting Time</span>
                          <div className="flex items-center gap-2 text-zinc-200">
                            <Clock size={14} className="text-zinc-500" />
                            <p className="text-[12px] font-bold uppercase">{app.time}</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest block mb-2">Assigned Center</span>
                        <div className="flex items-start gap-2">
                          <MapPin size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                          <p className="text-[12px] font-bold text-zinc-300 leading-tight uppercase">{app.location}</p>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-white/10">
                        <p className="text-[10px] font-medium text-zinc-500 leading-relaxed italic">
                          Present your identification and application slip upon arrival at the security checkpoint.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}

          {/* EMPTY SLOT / CTA */}
          {activeCount < 2 && (
            <Link href="/loggedin/recruitment" className="flex flex-col items-center justify-center p-12 rounded-[2.5rem] border-2 border-dashed border-white/10 bg-black/20 backdrop-blur-sm hover:border-emerald-500/40 hover:bg-emerald-500/[0.03] transition-all group">
              <div className="h-16 w-16 rounded-[1.5rem] bg-white/5 flex items-center justify-center text-zinc-600 group-hover:text-emerald-500 group-hover:scale-110 transition-all mb-4 border border-white/5">
                <History size={28} />
              </div>
              <h3 className="text-xl font-black uppercase tracking-tighter text-zinc-500 group-hover:text-white transition-colors">Initialize New Application</h3>
              <p className="text-[10px] text-zinc-700 mt-2 font-black uppercase tracking-[0.2em]">Deployment Slot 02 Available</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
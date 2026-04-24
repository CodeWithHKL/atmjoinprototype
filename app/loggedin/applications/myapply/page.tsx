"use client";

import React from "react";
import Link from "next/link";
import { 
  ChevronLeft, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  AlertTriangle, 
  ExternalLink,
  History,
  Download,
  Trash2,
  CheckCircle2
} from "lucide-react";

// Mock data representing the state of the 2-application logic
const applications = [
  {
    id: "APP-8829",
    branch: "Navy (TLDM)",
    role: "Officer Cadet",
    intakeOpen: true, // Application can be withdrawn
    status: "Assessment",
    currentPhase: 2, // Altitude Test
    location: "KD Sultan Idris, Lumut, Perak",
    schedule: "22 May 2026 @ 0800 HRS",
    offerReady: false,
    phases: [
      { name: "Eligibility", status: "completed", date: "02 May" },
      { name: "Altitude Test", status: "current", date: "22 May" },
      { name: "Medical Exam", status: "pending", date: "TBA" },
      { name: "Physical Test", status: "pending", date: "TBA" },
      { name: "Final Interview", status: "pending", date: "TBA" },
    ]
  },
  {
    id: "APP-9012",
    branch: "Army (TDM)",
    role: "Enlisted Personnel",
    intakeOpen: false, // Intake closed - withdrawal disabled
    status: "Verification",
    currentPhase: 0,
    location: "Pusat Latihan Tentera Darat (PULADA)",
    schedule: "Pending System Verification",
    offerReady: false,
    phases: [
      { name: "Eligibility", status: "current", date: "Processing" },
      { name: "Altitude Test", status: "pending", date: "TBA" },
      { name: "Medical Exam", status: "pending", date: "TBA" },
      { name: "Physical Test", status: "pending", date: "TBA" },
      { name: "Final Interview", status: "pending", date: "TBA" },
    ]
  }
];

export default function MyApplications() {
  const activeCount = applications.length;

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-4 lg:p-8">
      {/* HEADER */}
      <div className="max-w-5xl mx-auto mb-10">
        <Link href="/loggedin" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-white transition-colors mb-6">
          <ChevronLeft size={14} /> Back to Dashboard
        </Link>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tighter">My <span className="text-emerald-500">Applications.</span></h1>
            <p className="text-zinc-500 text-sm mt-2 font-medium">Manage your active service tracks and enlistment progress.</p>
          </div>
          <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block mb-1">Slots Utilized</span>
            <div className="flex items-center gap-2">
              <div className={`h-2 w-2 rounded-full ${activeCount >= 1 ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-zinc-800"}`} />
              <div className={`h-2 w-2 rounded-full ${activeCount >= 2 ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-zinc-800"}`} />
              <span className="text-sm font-black ml-2">{activeCount}/2</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        {applications.map((app, idx) => (
          <div key={idx} className="rounded-[2.5rem] bg-zinc-900 border border-white/5 overflow-hidden transition-all hover:border-white/10">
            {/* Top Bar */}
            <div className="px-8 py-6 bg-white/[0.02] border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-black uppercase tracking-tight leading-none">{app.branch}</h2>
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{app.id} • {app.role}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <button className="h-10 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 transition-all">
                  <Download size={14} /> Slips
                </button>
                {app.intakeOpen && (
                  <button className="h-10 px-4 rounded-xl bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 transition-all group">
                    <Trash2 size={14} /> Withdraw
                  </button>
                )}
              </div>
            </div>

            {/* Content Body */}
            <div className="p-8 grid lg:grid-cols-3 gap-12">
              
              {/* PHASES LIST */}
              <div className="lg:col-span-2">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-8">Enlistment Pipeline</h3>
                <div className="space-y-0 relative">
                  {/* Vertical Line */}
                  <div className="absolute left-4 top-2 bottom-2 w-px bg-zinc-800" />
                  
                  {app.phases.map((phase, pIdx) => (
                    <div key={pIdx} className={`relative pl-12 pb-8 last:pb-0 group`}>
                      {/* Marker */}
                      <div className={`absolute left-2.5 -translate-x-1/2 top-1 h-3 w-3 rounded-full border-2 z-10 transition-all ${
                        phase.status === 'completed' ? "bg-emerald-500 border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]" :
                        phase.status === 'current' ? "bg-zinc-950 border-emerald-500 animate-pulse" :
                        "bg-zinc-900 border-zinc-700"
                      }`} />
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className={`text-xs font-black uppercase tracking-widest ${
                            phase.status === 'pending' ? "text-zinc-600" : "text-white"
                          }`}>
                            Phase 0{pIdx + 1}: {phase.name}
                          </p>
                          <p className="text-[10px] font-medium text-zinc-500 uppercase mt-0.5">{phase.date}</p>
                        </div>
                        {phase.status === 'completed' && <CheckCircle2 size={14} className="text-emerald-500" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* REPORTING INSTRUCTIONS */}
              <div className="lg:col-span-1">
                <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/5">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-6 flex items-center gap-2">
                    <Calendar size={14} /> Next Directive
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <span className="text-[9px] font-black text-emerald-500 uppercase block mb-1">Instruction</span>
                      <p className="text-sm font-bold text-zinc-200 uppercase tracking-tight">{app.schedule}</p>
                    </div>

                    <div>
                      <span className="text-[9px] font-black text-zinc-500 uppercase block mb-1">Reporting Center</span>
                      <div className="flex items-start gap-2">
                        <MapPin size={14} className="text-zinc-500 mt-0.5 shrink-0" />
                        <p className="text-xs font-bold text-zinc-400 leading-relaxed uppercase">{app.location}</p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button className="w-full py-4 rounded-xl bg-emerald-500 text-black text-[10px] font-black uppercase tracking-widest hover:bg-emerald-400 transition-all flex items-center justify-center gap-2">
                        View Instructions <ExternalLink size={14} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* WARNING BOX FOR CLOSED INTAKE */}
                {!app.intakeOpen && (
                  <div className="mt-4 p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10 flex gap-3">
                    <AlertTriangle size={16} className="text-amber-500 shrink-0" />
                    <p className="text-[9px] font-bold text-amber-200/60 uppercase leading-relaxed">
                      This intake is currently closed for new entries or modifications. Withdrawal is disabled.
                    </p>
                  </div>
                )}
              </div>

            </div>
          </div>
        ))}

        {/* EMPTY SLOT / CTA */}
        {activeCount < 2 && (
          <Link href="/loggedin/recruitment" className="flex flex-col items-center justify-center p-12 rounded-[2.5rem] border-2 border-dashed border-white/5 hover:border-emerald-500/20 hover:bg-emerald-500/[0.02] transition-all group">
            <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center text-zinc-500 group-hover:text-emerald-500 transition-colors mb-4">
              <History size={24} />
            </div>
            <h3 className="text-lg font-black uppercase tracking-tight">Initialize Second Application</h3>
            <p className="text-xs text-zinc-500 mt-1 uppercase font-bold tracking-widest">You have 1 of 2 slots remaining</p>
          </Link>
        )}
      </div>
    </div>
  );
}
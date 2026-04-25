"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { 
  Clock, 
  Calendar, 
  ChevronLeft, 
  AlertCircle,
  CheckCircle2,
  Activity,
  MapPin,
  Shield,
  FileText
} from "lucide-react";

const applicationHistory = [
  {
    id: "INTK-TDM-O-26-01",
    branch: "Army (TDM)",
    role: "Pegawai Kadet Graduan",
    phase: 2, 
    status: "In Progress",
    date: "12 May 2026",
    time: "0800 HRS",
    location: "Hospital Angkatan Tentera, Wangsa Maju",
    progress: 60,
  },
  {
    id: "INTK-TDM-O-25-02",
    branch: "Army (TDM)",
    role: "Pegawai Kadet Graduan",
    phase: 4, 
    status: "Rejected",
    date: "05 Aug 2025",
    time: "1400 HRS",
    location: "Kem Perdana Sungai Besi",
    progress: 100,
  }
];

const phases = ["Eligibility", "Altitude", "Medical", "Physical", "Interview"];

export default function IntakeHistoryPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6 lg:p-10 font-sans">
      
      {/* HEADER NAVIGATION */}
      <header className="mb-12">
        <button 
          onClick={() => router.back()} 
          className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-emerald-500 transition-colors mb-8"
        >
          <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
          Return to Command
        </button>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/5 pb-10">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Intake <span className="text-emerald-500">History</span>
            </h1>
            <p className="text-zinc-500 text-[10px] font-bold mt-1 uppercase tracking-widest">
              Personnel Deployment Record <span className="text-zinc-700 ml-2">//</span> <span className="text-zinc-400">RC-HQ</span>
            </p>
          </div>
          
          <div className="bg-zinc-900/50 border border-white/5 rounded-2xl px-6 py-4 backdrop-blur-sm">
             <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Subject Identifier</p>
             <p className="text-sm font-bold tracking-tight text-zinc-200">AHMAD ZAKI BIN OSMAN</p>
          </div>
        </div>
      </header>

      <div className="grid lg:grid-cols-12 gap-10">
        
        {/* MAIN TIMELINE */}
        <div className="lg:col-span-8 space-y-8">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 flex items-center gap-2">
              <Activity size={14} className="text-emerald-500" /> 
              Deployment Tracking <span className="text-zinc-700">[{applicationHistory.length}]</span>
            </h2>
          </div>

          <div className="space-y-6">
            {applicationHistory.map((app, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-3xl bg-zinc-900/40 border border-white/5 p-8 hover:border-white/10 transition-all shadow-2xl">
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
                  <div className="flex items-center gap-6">
                    <div className="h-14 w-14 rounded-2xl bg-zinc-950 border border-white/5 flex items-center justify-center shrink-0">
                      <Shield size={24} className="text-zinc-600 group-hover:text-emerald-500/50 transition-colors" />
                    </div>

                    <div>
                      <p className="text-[10px] font-mono text-emerald-500/70 font-bold uppercase tracking-widest mb-1">{app.id}</p>
                      <h3 className="text-2xl font-bold text-white tracking-tight leading-none">{app.branch}</h3>
                      <p className="text-zinc-500 text-xs font-medium mt-1">{app.role}</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-start md:items-end gap-2">
                    <div className={`px-3 py-1 rounded-lg text-[9px] font-bold uppercase tracking-widest border ${
                      app.status === "In Progress" 
                        ? "bg-emerald-500/5 border-emerald-500/20 text-emerald-500" 
                        : "bg-red-500/5 border-red-500/20 text-red-500"
                    }`}>
                      {app.status}
                    </div>
                    <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-tighter">
                      Standing: <span className="text-zinc-300 ml-1">{phases[app.phase]}</span>
                    </p>
                  </div>
                </div>

                {/* LOGISTICS CARD */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  <div className="bg-zinc-950/50 border border-white/5 p-4 rounded-2xl flex items-center gap-4">
                    <MapPin size={16} className="text-zinc-600" />
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-600">Location</p>
                      <p className="text-[11px] font-medium text-zinc-300">{app.location}</p>
                    </div>
                  </div>
                  <div className="bg-zinc-950/50 border border-white/5 p-4 rounded-2xl flex items-center gap-4">
                    <Calendar size={16} className="text-zinc-600" />
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-600">Scheduled</p>
                      <p className="text-[11px] font-medium text-zinc-300 font-mono">{app.date} // {app.time}</p>
                    </div>
                  </div>
                </div>

                {/* PHASE STEPPER */}
                <div className="relative px-2">
                  <div className="flex justify-between mb-4 relative z-10">
                    {phases.map((p, i) => {
                      const isCompleted = i < app.phase;
                      const isCurrent = i === app.phase;
                      const isFailed = app.status === "Rejected" && i === app.phase;

                      return (
                        <div key={i} className="flex flex-col items-center gap-3">
                          <div className={`h-8 w-8 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                            isCompleted ? "bg-emerald-500 border-emerald-500 text-black" : 
                            isCurrent ? (isFailed ? "bg-red-500 border-red-500 text-white shadow-[0_0_15px_rgba(239,68,68,0.4)]" : "bg-zinc-900 border-emerald-500 text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]") :
                            "bg-zinc-900 border-white/10 text-zinc-700"
                          }`}>
                            {isCompleted ? <CheckCircle2 size={16} /> : 
                             isFailed ? <AlertCircle size={16} /> :
                             <span className="text-[10px] font-bold">{i + 1}</span>}
                          </div>
                          <span className={`text-[9px] font-bold uppercase tracking-tight ${isCurrent ? "text-white" : "text-zinc-600"}`}>
                            {p}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="absolute top-4 left-0 w-full h-[1px] bg-white/5 -z-0" />
                  <div 
                    className={`absolute top-4 left-0 h-[1px] transition-all duration-1000 ${
                      app.status === "Rejected" ? "bg-red-500/50" : "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                    }`}
                    style={{ width: `${(app.phase / (phases.length - 1)) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5 shadow-2xl">
            <h3 className="text-[10px] font-bold uppercase tracking-widest mb-8 flex items-center gap-2 text-zinc-400">
              <FileText size={14} className="text-emerald-500" /> Dossier Actions
            </h3>
            <div className="space-y-3">
              <button className="w-full py-4 rounded-xl bg-emerald-500 text-black text-[10px] font-bold uppercase tracking-widest hover:bg-emerald-400 transition-all">
                Generate Full Record
              </button>
              <button className="w-full py-4 rounded-xl border border-white/10 text-zinc-400 text-[10px] font-bold uppercase tracking-widest hover:bg-white/5 hover:text-white transition-all">
                View Audit Log
              </button>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 opacity-10">
              <Clock size={40} className="text-emerald-500" />
            </div>
            <p className="text-[11px] font-medium text-emerald-100/60 leading-relaxed relative z-10">
              Subject is currently in the <span className="text-emerald-400 font-bold">Medical Phase</span> for the 2026 Intake. 
              Status updated by <span className="text-zinc-300 font-mono">Officer-7721</span>.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
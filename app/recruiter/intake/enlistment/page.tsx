"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ChevronLeft, Search, Filter, CheckCircle2, XCircle, 
  Clock, ShieldCheck, Brain, Stethoscope, Activity, Users
} from "lucide-react";

type Phase = 'Verification' | 'Aptitude' | 'Medical' | 'Physical' | 'Interview';

const phaseConfig = {
  Verification: { label: "System Verification", icon: ShieldCheck, color: "bg-blue-600" },
  Aptitude: { label: "Aptitude Test", icon: Brain, color: "bg-purple-600" },
  Medical: { label: "Medical Test", icon: Stethoscope, color: "bg-rose-600" },
  Physical: { label: "Physical Test", icon: Activity, color: "bg-amber-600" },
  Interview: { label: "Final Interview", icon: Users, color: "bg-emerald-600" },
};

// Mock Data for Applicants
const applicantData: Record<Phase, any[]> = {
  Verification: [
    { name: "Ahmad Zaki", id: "APP-001", status: "Passed", metric: "CGPA 3.8", date: "12 APR" },
    { name: "Sarah Connor", id: "APP-002", status: "Passed", metric: "CGPA 3.5", date: "12 APR" },
    { name: "M. Izzat", id: "APP-003", status: "Flagged", metric: "Incomplete Doc", date: "13 APR" },
  ],
  Aptitude: [
    { name: "Ahmad Zaki", id: "APP-001", status: "Passed", metric: "Score: 92%", date: "15 APR" },
    { name: "Sarah Connor", id: "APP-002", status: "Failed", metric: "Score: 45%", date: "15 APR" },
  ],
  Medical: [
    { name: "Ahmad Zaki", id: "APP-001", status: "Pending", metric: "Bloodwork", date: "18 APR" },
  ],
  Physical: [
    { name: "Ahmad Zaki", id: "APP-001", status: "Passed", metric: "BMI 22.1", date: "20 APR" },
  ],
  Interview: [
    { name: "Ahmad Zaki", id: "APP-001", status: "Awaiting", metric: "Board A", date: "25 APR" },
  ],
};

export default function IntakeDetailPage({ params }: { params: { id: string } }) {
  const [activePhase, setActivePhase] = useState<Phase>('Verification');

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans flex flex-col p-8">
      
      {/* NAVIGATION & HEADER */}
      <header className="mb-12">
        <Link href="/recruiter/intake" className="group inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-white mb-6 transition-colors">
          <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
          Back to Intakes
        </Link>
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tighter leading-none">
              Applicant <span className="text-emerald-500">Pipeline.</span>
            </h1>
            <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-2">
              Intake ID: <span className="text-zinc-300 font-mono">{params.id || "INTK-TDM-O-26-01"}</span>
            </p>
          </div>
          
          <div className="flex gap-4">
             <div className="text-right">
                <p className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Total Candidates</p>
                <p className="text-xl font-black italic">1,240</p>
             </div>
             <div className="w-[1px] h-10 bg-white/10" />
             <div className="text-right">
                <p className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">In Current Phase</p>
                <p className="text-xl font-black italic text-emerald-500">{applicantData[activePhase].length}</p>
             </div>
          </div>
        </div>
      </header>

      {/* PHASE TOGGLE (Tabs) */}
      <div className="flex justify-center mb-10">
        <div className="bg-zinc-900/50 p-1.5 rounded-3xl border border-white/5 flex gap-1 backdrop-blur-xl shadow-2xl">
          {(Object.keys(phaseConfig) as Phase[]).map((phase) => {
            const Icon = phaseConfig[phase].icon;
            const isActive = activePhase === phase;
            return (
              <button
                key={phase}
                onClick={() => setActivePhase(phase)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  isActive 
                  ? `${phaseConfig[phase].color} text-white shadow-[0_0_20px_rgba(0,0,0,0.4)] scale-105` 
                  : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
                }`}
              >
                <Icon size={16} strokeWidth={3} />
                <span className={isActive ? "block" : "hidden md:block"}>{phase}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* APPLICANT TABLE */}
      <section className="bg-zinc-900/30 border border-white/5 rounded-[2.5rem] overflow-hidden backdrop-blur-md">
        <div className="p-6 border-b border-white/5 flex flex-col md:flex-row justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={16} />
            <input 
              type="text" 
              placeholder="Search by Name or IC Number..." 
              className="w-full bg-zinc-950/50 border border-white/5 rounded-xl py-3 pl-12 pr-4 text-[10px] font-bold uppercase tracking-widest outline-none focus:border-emerald-500/50 transition-all"
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-950/50 border border-white/5 text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-900 transition-colors">
            <Filter size={14} /> Filter Results
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/[0.02]">
                <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">Applicant Info</th>
                <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">Phase Result</th>
                <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">Criteria/Metric</th>
                <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">Process Date</th>
                <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {applicantData[activePhase].map((applicant, idx) => (
                <tr key={idx} className="hover:bg-white/[0.01] transition-colors group">
                  <td className="p-6">
                    <div className="flex flex-col">
                      <span className="text-sm font-black uppercase tracking-tight group-hover:text-emerald-400 transition-colors">
                        {applicant.name}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-600">{applicant.id}</span>
                    </div>
                  </td>
                  <td className="p-6">
                    <StatusBadge status={applicant.status} />
                  </td>
                  <td className="p-6">
                    <span className="text-xs font-bold text-zinc-300 uppercase italic">
                      {applicant.metric}
                    </span>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center gap-2 text-zinc-500">
                      <Clock size={12} />
                      <span className="text-[10px] font-bold uppercase">{applicant.date}</span>
                    </div>
                  </td>
                  <td className="p-6 text-right">
                    <button className="text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-lg border border-white/5 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all">
                      View Profile
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* PAGINATION / FOOTER */}
        <div className="p-6 bg-white/[0.02] flex justify-between items-center text-[9px] font-black uppercase tracking-[0.2em] text-zinc-600">
          <span>Showing {applicantData[activePhase].length} of 1,240 Candidates</span>
          <div className="flex gap-4">
            <button className="hover:text-white transition-colors">Previous</button>
            <button className="text-white bg-emerald-500/20 px-2 rounded">1</button>
            <button className="hover:text-white transition-colors">2</button>
            <button className="hover:text-white transition-colors">Next</button>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Passed: "border-emerald-500/20 text-emerald-500 bg-emerald-500/5",
    Failed: "border-rose-500/20 text-rose-500 bg-rose-500/5",
    Flagged: "border-amber-500/20 text-amber-500 bg-amber-500/5",
    Pending: "border-blue-500/20 text-blue-500 bg-blue-500/5",
    Awaiting: "border-zinc-700 text-zinc-500 bg-zinc-900",
  };

  const Icons: Record<string, any> = {
    Passed: CheckCircle2,
    Failed: XCircle,
    Flagged: ShieldCheck,
    Pending: Clock,
    Awaiting: Users,
  };

  const Icon = Icons[status] || Clock;

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[8px] font-black uppercase tracking-widest ${styles[status]}`}>
      <Icon size={10} />
      {status}
    </span>
  );
}
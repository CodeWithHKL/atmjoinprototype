"use client";

import React from "react";
import Link from "next/link";
import {
  ChevronLeft, Award, BarChart3, PieChart, ShieldCheck,
  User, Hash, CalendarDays, ExternalLink, Zap,
  Brain, MessageSquare, Target, Trophy
} from "lucide-react";

const applicant = {
  name: "Ahmad Zaki",
  id: "APP-001",
  ic: "020312-14-5871",
  intake: "INTK-TDM-O-26-01",
  phase: "Final Selection Summary",
};

const overallResult = {
  scores: [
    { label: "Academic (20%)", value: 18.5, max: 20, icon: Award, color: "text-blue-500", bg: "bg-blue-500" },
    { label: "Aptitude (30%)", value: 27.6, max: 30, icon: Brain, color: "text-purple-500", bg: "bg-purple-500" },
    { label: "Physical (30%)", value: 24.4, max: 30, icon: Zap, color: "text-amber-500", bg: "bg-amber-500" },
    { label: "Interview (20%)", value: 18.0, max: 20, icon: MessageSquare, color: "text-emerald-500", bg: "bg-emerald-500" },
  ],
  final_score: 88.5,
  ranking: "04 / 1,240",
  status: "Selected",
  decision_date: "25 APR 2024",
  verdict_note: "Candidate demonstrates an exceptional balance of cognitive ability and physical endurance. Interview performance confirms high leadership potential. Recommended for immediate officer cadet commissioning.",
};

function ScoreCard({ label, value, max, icon: Icon, color, bg }: { label: string; value: number; max: number; icon: any; color: string; bg: string }) {
  const percentage = (value / max) * 100;
  return (
    <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-6 backdrop-blur-sm group hover:border-white/10 transition-all">
      <div className="flex justify-between items-center mb-6">
        <div className={`p-2.5 rounded-xl bg-white/5 ${color}`}>
          <Icon size={16} />
        </div>
        <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">{label}</span>
      </div>
      <div>
        <div className="flex items-baseline gap-1">
          <p className="text-2xl font-bold text-white tracking-tight">{value}</p>
          <p className="text-[10px] font-bold text-zinc-600 uppercase">/ {max}</p>
        </div>
        <div className="h-1 w-full bg-zinc-950 rounded-full mt-4 overflow-hidden">
          <div className={`h-full ${bg} opacity-60 rounded-full`} style={{ width: `${percentage}%` }} />
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center py-3.5 border-b border-white/5 last:border-0">
      <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">{label}</span>
      <span className="text-[10px] font-bold text-zinc-200 font-mono tracking-tight">{value}</span>
    </div>
  );
}

export default function ZakiOverallPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans p-6 lg:p-10 relative">

      {/* HEADER NAVIGATION */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
        <Link
          href={`/recruiter/intake/id`}
          className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-emerald-500 transition-colors"
        >
          <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Return to Pipeline
        </Link>

        <Link
          href="/recruiter/applicants/APP-001"
          className="flex items-center gap-2 px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.15)]"
        >
          <User size={14} />
          Full Dossier
          <ExternalLink size={12} className="ml-1 opacity-50" />
        </Link>
      </div>

      {/* MAIN HEADER */}
      <header className="mb-12 border-b border-white/5 pb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)] animate-pulse" />
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-500">Executive Summary · Final Verdict</span>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white uppercase leading-none">
              {applicant.name.split(" ")[0]} <span className="text-emerald-500">{applicant.name.split(" ").slice(1).join(" ")}</span>
            </h1>
            <p className="text-zinc-500 text-[10px] font-bold tracking-widest mt-2 uppercase">
              ID: <span className="text-zinc-300 font-mono tracking-normal">{applicant.id}</span>
              <span className="text-zinc-800 mx-2">//</span>
              IC: <span className="text-zinc-300 font-mono tracking-normal">{applicant.ic}</span>
            </p>
          </div>

          <div className="flex items-center gap-3 px-5 py-3 bg-zinc-900/50 border border-white/5 rounded-2xl">
            <Trophy size={16} className="text-amber-500" />
            <div>
              <p className="text-[8px] font-bold text-zinc-600 uppercase tracking-widest">Cohort Ranking</p>
              <p className="text-[11px] font-bold text-white uppercase tracking-tighter">{overallResult.ranking}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="grid md:grid-cols-12 gap-8">

        {/* LEFT — PERFORMANCE AGGREGATE */}
        <div className="md:col-span-4 space-y-6">
          
          <div className="bg-gradient-to-br from-emerald-600/20 to-zinc-900 border border-emerald-500/20 rounded-[2.5rem] p-10 flex flex-col items-center text-center shadow-2xl relative overflow-hidden backdrop-blur-sm">
            <div className="relative z-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-500/60 mb-2">Composite Score</p>
              <p className="text-7xl font-bold text-white tracking-tighter">{overallResult.final_score}</p>
              
              <div className="mt-8 px-6 py-2 bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md rounded-full inline-flex items-center gap-2">
                <ShieldCheck size={14} className="text-emerald-400" />
                <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">{overallResult.status}</p>
              </div>
            </div>
            <BarChart3 size={160} className="absolute -bottom-8 -right-8 text-white/[0.02] -rotate-12" />
          </div>

          <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-6 backdrop-blur-sm shadow-2xl">
              <div className="flex items-center gap-2 mb-4 opacity-50">
                <CalendarDays size={12} />
                <span className="text-[9px] font-bold uppercase tracking-widest">Decision Metadata</span>
              </div>
              <div className="space-y-1">
                <InfoRow label="Decision Date" value={overallResult.decision_date} />
                <InfoRow label="Intake ID" value={applicant.intake} />
                <InfoRow label="Security" value="LVL 1 / CLEARED" />
              </div>
          </div>
        </div>

        {/* RIGHT — BREAKDOWN & BOARD VERDICT */}
        <div className="md:col-span-8 space-y-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {overallResult.scores.map((score) => (
              <ScoreCard key={score.label} {...score} />
            ))}
          </div>

          <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm shadow-2xl relative overflow-hidden">
            <div className="flex items-center gap-2 mb-8">
              <PieChart size={14} className="text-emerald-500" />
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Board Selection Verdict</h2>
            </div>
            
            <div className="relative mb-10">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-emerald-500/30" />
              <p className="text-[13px] text-zinc-400 leading-relaxed font-medium pl-8 italic">
                "{overallResult.verdict_note}"
              </p>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center">
                    <ShieldCheck size={18} className="text-zinc-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white uppercase tracking-tight">Board Approval</p>
                    <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Selection Committee Alpha</p>
                  </div>
                </div>
                <div className="px-5 py-2 bg-emerald-500/5 border border-emerald-500/10 rounded-xl">
                  <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-[0.2em]">Confirmed</p>
                </div>
            </div>
          </div>

          {/* Quick Context Action */}
          <div className="bg-zinc-900/20 border border-white/5 rounded-3xl p-6 flex items-center justify-between border-dashed">
            <div className="flex gap-10">
              <div>
                <p className="text-[8px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Academic Wt.</p>
                <p className="text-xs font-bold text-zinc-400 font-mono">20%</p>
              </div>
              <div className="w-[1px] h-8 bg-white/5" />
              <div>
                <p className="text-[8px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Physical Wt.</p>
                <p className="text-xs font-bold text-zinc-400 font-mono">30%</p>
              </div>
              <div className="w-[1px] h-8 bg-white/5" />
              <div>
                <p className="text-[8px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Board Rec.</p>
                <p className="text-[10px] font-bold text-emerald-500 uppercase italic tracking-tighter">High Priority</p>
              </div>
            </div>
            <Target size={24} className="text-zinc-900" />
          </div>
        </div>

      </div>
    </div>
  );
}
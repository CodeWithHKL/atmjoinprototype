"use client";

import React from "react";
import Link from "next/link";
import {
  ChevronLeft, Mic2, Users, Star, Award,
  Hash, CalendarDays, MessageSquare, 
  ShieldCheck, Terminal, BarChart, Quote
} from "lucide-react";

const applicant = {
  name: "Ahmad Zaki",
  id: "APP-001",
  ic: "020312-14-5871",
  intake: "INTK-TDM-O-26-01",
  phase: "Officer Selection Board",
};

const interviewResult = {
  session_id: "INT-2209",
  date: "22 APR 2024",
  score: 88,
  max_score: 100,
  recommendation: "Highly Recommended",
  panel_lead: "Col. Adnan Bin Hassan",
  competencies: [
    { label: "Leadership & Initiative", score: 90, color: "bg-emerald-500" },
    { label: "Communication Clarity", score: 85, color: "bg-emerald-400" },
    { label: "Crisis Problem Solving", score: 92, color: "bg-emerald-600" },
    { label: "Military Bearing", score: 85, color: "bg-emerald-300" },
  ],
  panel_comments: [
    { officer: "Col. Adnan", comment: "Exceptional maturity. Understands the strategic responsibilities of a junior officer.", rating: 5 },
    { officer: "Lt. Col. Sarah", comment: "Strong command of language and presence. Handled stress-testing questions with composure.", rating: 4.5 },
  ],
  key_notes: "Candidate demonstrates high psychological resilience. His background in student leadership translates well to command potential. Strong alignment with core military values.",
};

function CompetencyRow({ label, score, color }: { label: string; score: number; color: string }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-end">
        <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-[0.2em]">{label}</span>
        <span className="text-[10px] font-bold font-mono text-zinc-200">{score}%</span>
      </div>
      <div className="h-1 bg-zinc-900 rounded-full overflow-hidden">
        <div 
          className={`h-full ${color} rounded-full transition-all duration-1000 opacity-80`} 
          style={{ width: `${score}%` }} 
        />
      </div>
    </div>
  );
}

function InfoRow({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-3.5 border-b border-white/5 last:border-0">
      <div className="flex items-center gap-3">
        <Icon size={13} className="text-zinc-600" />
        <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">{label}</span>
      </div>
      <span className="text-[10px] font-bold text-zinc-300 font-mono">{value}</span>
    </div>
  );
}

export default function ZakiInterviewPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans p-6 lg:p-10 relative">

      {/* BACK NAV */}
      <Link
        href={`/recruiter/intake/id`}
        className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-emerald-500 mb-10 transition-colors"
      >
        <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        Return to Command
      </Link>

      {/* HEADER */}
      <header className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/5 pb-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-500 opacity-80">Officer Selection Board // Interview Result</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white uppercase">
            {applicant.name.split(" ")[0]} <span className="text-emerald-500">{applicant.name.split(" ").slice(1).join(" ")}</span>
          </h1>
          <p className="text-zinc-500 text-[10px] font-bold tracking-widest mt-1 uppercase">
            ID: <span className="text-zinc-300 font-mono tracking-normal">{applicant.id}</span>
            <span className="text-zinc-800 mx-2">//</span>
            IC: <span className="text-zinc-300 font-mono tracking-normal">{applicant.ic}</span>
          </p>
        </div>

        {/* RECOMMENDATION BADGE */}
        <div className="flex items-center gap-5 px-6 py-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-md">
          <Star size={20} className="text-emerald-500 fill-emerald-500/20" />
          <div>
            <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest mb-0.5">Board Verdict</p>
            <p className="text-lg font-bold text-emerald-500 uppercase tracking-[0.1em] leading-none">
              {interviewResult.recommendation}
            </p>
          </div>
        </div>
      </header>

      <div className="grid md:grid-cols-12 gap-8">

        {/* LEFT — SESSION META & OVERALL */}
        <div className="md:col-span-4 space-y-6">
          
          <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-10 flex flex-col items-center text-center backdrop-blur-sm relative overflow-hidden shadow-2xl">
              <div className="relative z-10 w-full">
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em] mb-4">Aggregate Assessment</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-7xl font-bold text-white tracking-tighter">{interviewResult.score}</span>
                  <span className="text-zinc-700 font-bold text-2xl font-mono">/100</span>
                </div>
                <div className="mt-6 inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                  <p className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest">Grade: Alpha Class</p>
                </div>
              </div>
              <Mic2 size={120} className="absolute -bottom-10 -right-10 text-emerald-500/[0.03] rotate-12" />
          </div>

          <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-6 backdrop-blur-sm shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <Terminal size={13} className="text-zinc-600" />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500">Board Logistics</span>
            </div>
            <div className="space-y-1">
              <InfoRow icon={Hash} label="Session ID" value={interviewResult.session_id} />
              <InfoRow icon={CalendarDays} label="Log Date" value={interviewResult.date} />
              <InfoRow icon={Users} label="Lead Officer" value={interviewResult.panel_lead} />
              <InfoRow icon={ShieldCheck} label="Verification" value="Authenticated" />
            </div>
          </div>
        </div>

        {/* RIGHT — COMPETENCIES & FEEDBACK */}
        <div className="md:col-span-8 space-y-6">
          
          <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm shadow-2xl">
            <div className="flex items-center gap-2 mb-10">
              <BarChart size={14} className="text-emerald-500" />
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Soft Skill Proficiency Matrix</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
              {interviewResult.competencies.map((c) => (
                <CompetencyRow key={c.label} {...c} />
              ))}
            </div>
          </div>

          <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm shadow-2xl">
            <div className="flex items-center gap-2 mb-8">
              <MessageSquare size={14} className="text-emerald-500" />
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Board Member Remarks</h2>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {interviewResult.panel_comments.map((pc, idx) => (
                <div key={idx} className="relative p-6 bg-zinc-950/40 rounded-2xl border border-white/5 group hover:border-emerald-500/20 transition-all">
                  <Quote size={20} className="absolute top-4 right-4 text-zinc-800 group-hover:text-emerald-500/10 transition-colors" />
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-[10px] font-bold text-emerald-500/80 uppercase tracking-widest">{pc.officer}</p>
                    <div className="flex gap-1.5">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`h-1 w-3 rounded-full ${i < Math.floor(pc.rating) ? 'bg-emerald-500/60' : 'bg-zinc-800'}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-[13px] text-zinc-400 leading-relaxed italic pr-8">"{pc.comment}"</p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/5">
              <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-[0.2em] mb-4">Executive Summary</p>
              <div className="relative pl-6">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-emerald-500/30" />
                <p className="text-[13px] text-zinc-300 leading-relaxed font-medium">
                  {interviewResult.key_notes}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/20 border border-white/5 border-dashed rounded-3xl p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                <Award size={18} className="text-emerald-500" />
              </div>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-widest text-emerald-500/60">Final Standings</p>
                <p className="text-[11px] font-bold text-zinc-200 uppercase tracking-widest">Candidate Priority: Tier-1 (Immediate Command)</p>
              </div>
            </div>
            <p className="text-[10px] font-mono text-zinc-600 uppercase">{applicant.intake}</p>
          </div>
        </div>

      </div>
    </div>
  );
}
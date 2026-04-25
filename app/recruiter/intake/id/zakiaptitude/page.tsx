"use client";

import React from "react";
import Link from "next/link";
import {
  ChevronLeft, CheckCircle2, Clock,
  BarChart2, Target, User, Hash, CalendarDays,
  FileText, ShieldCheck, Layers
} from "lucide-react";

const applicant = {
  name: "Ahmad Zaki",
  id: "APP-001",
  ic: "020312-14-5871",
  intake: "INTK-TDM-O-26-01",
  phase: "Aptitude Test",
};

const aptitudeResult = {
  aptitude_id: "APT-7701",
  test_date: "15 APR 2024",
  test_score: 92,
  max_score: 100,
  percentile: "98th",
  pass_fail: "Pass",
  pass_threshold: 65,
  duration_taken: "47 min",
  total_duration: "60 min",
  sections: [
    { label: "Verbal Reasoning", score: 88, max: 100, color: "bg-purple-500" },
    { label: "Numerical Reasoning", score: 95, max: 100, color: "bg-emerald-500" },
    { label: "Logical Thinking", score: 91, max: 100, color: "bg-blue-500" },
    { label: "Spatial Awareness", score: 89, max: 100, color: "bg-amber-500" },
  ],
  remarks: "Exceptional performance across all domains. Candidate demonstrates strong analytical and quantitative aptitude well above the cohort average.",
  assessed_by: "System (Auto-Graded)",
};

function ScoreRing({ score, max }: { score: number; max: number }) {
  const pct = (score / max) * 100;
  const r = 52;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;

  return (
    <div className="relative w-36 h-36 flex items-center justify-center">
      <svg className="absolute inset-0 -rotate-90" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r={r} strokeWidth="6" stroke="#18181b" fill="none" />
        <circle
          cx="60" cy="60" r={r}
          strokeWidth="6"
          stroke="#10b981"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${circ}`}
          style={{ transition: "stroke-dasharray 1s ease" }}
        />
      </svg>
      <div className="text-center z-10">
        <p className="text-4xl font-bold tracking-tighter text-white">{score}</p>
        <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">/ {max}</p>
      </div>
    </div>
  );
}

function SectionBar({ label, score, max, color }: { label: string; score: number; max: number; color: string }) {
  const pct = (score / max) * 100;
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-[0.2em]">{label}</span>
        <span className="text-[10px] font-bold font-mono text-zinc-300">{score}<span className="text-zinc-700 mx-1">/</span>{max}</span>
      </div>
      <div className="h-1 bg-zinc-900 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full opacity-80`}
          style={{ width: `${pct}%`, transition: "width 1.5s ease" }}
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
      <span className="text-[10px] font-bold text-zinc-200 font-mono">{value}</span>
    </div>
  );
}

export default function ZakiAptitudePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans p-6 lg:p-10 relative">

      {/* BACK NAV */}
      <Link
        href={`/recruiter/intake/id`}
        className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-purple-500 mb-10 transition-colors"
      >
        <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        Return to Directory
      </Link>

      {/* HEADER */}
      <header className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/5 pb-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white uppercase">
            {applicant.name.split(" ")[0]} <span className="text-purple-500">{applicant.name.split(" ").slice(1).join(" ")}</span>
          </h1>
          <p className="text-zinc-500 text-[10px] font-bold tracking-widest mt-1 uppercase">
            ID: <span className="text-zinc-300 font-mono tracking-normal">{applicant.id}</span>
            <span className="text-zinc-800 mx-2">//</span>
            IC: <span className="text-zinc-300 font-mono tracking-normal">{applicant.ic}</span>
          </p>
        </div>

        {/* PASS BADGE */}
        <div className={`flex items-center gap-4 px-6 py-4 rounded-2xl border backdrop-blur-sm ${
          aptitudeResult.pass_fail === "Pass"
            ? "border-emerald-500/20 bg-emerald-500/5"
            : "border-rose-500/20 bg-rose-500/5"
        }`}>
          <CheckCircle2 size={20} className={aptitudeResult.pass_fail === "Pass" ? "text-emerald-500" : "text-rose-500"} />
          <div>
            <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest mb-0.5">Assessment Status</p>
            <p className={`text-sm font-bold uppercase tracking-[0.2em] ${aptitudeResult.pass_fail === "Pass" ? "text-emerald-500" : "text-rose-500"}`}>
              {aptitudeResult.pass_fail}ed
            </p>
          </div>
        </div>
      </header>

      <div className="grid md:grid-cols-12 gap-8">

        {/* LEFT — SCORE RING + META */}
        <div className="md:col-span-4 space-y-6">

          {/* Score Ring Card */}
          <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 flex flex-col items-center gap-8 backdrop-blur-sm shadow-2xl">
            <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-1">Aggregate Score</p>
              <p className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest">Benchmark: {aptitudeResult.pass_threshold}%</p>
            </div>
            
            <ScoreRing score={aptitudeResult.test_score} max={aptitudeResult.max_score} />
            
            <div className="flex w-full border-t border-white/5 pt-6">
              <div className="flex-1 text-center border-r border-white/5">
                <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Percentile</p>
                <p className="text-xl font-bold text-purple-400 font-mono">{aptitudeResult.percentile}</p>
              </div>
              <div className="flex-1 text-center">
                <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Completion</p>
                <p className="text-xl font-bold text-zinc-200 font-mono">{aptitudeResult.duration_taken}</p>
              </div>
            </div>
          </div>

          {/* Meta Info */}
          <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-6 backdrop-blur-sm shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <FileText size={13} className="text-zinc-600" />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500">Telemetry Data</span>
            </div>
            <div className="space-y-1">
              <InfoRow icon={Hash} label="Aptitude ID" value={aptitudeResult.aptitude_id} />
              <InfoRow icon={CalendarDays} label="Test Date" value={aptitudeResult.test_date} />
              <InfoRow icon={Clock} label="Timer Limit" value={aptitudeResult.total_duration} />
              <InfoRow icon={ShieldCheck} label="Grading Mode" value={aptitudeResult.assessed_by} />
            </div>
          </div>
        </div>

        {/* RIGHT — SECTION BREAKDOWN + REMARKS */}
        <div className="md:col-span-8 space-y-6">

          {/* Section Breakdown */}
          <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm shadow-2xl">
            <div className="flex items-center gap-2 mb-10">
              <BarChart2 size={14} className="text-purple-500" />
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Domain Performance Analysis</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {aptitudeResult.sections.map((s) => (
                <div key={s.label} className="bg-zinc-950/50 rounded-2xl p-6 border border-white/5 hover:border-zinc-700 transition-colors">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-600 mb-4">{s.label}</p>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-white tracking-tighter">{s.score}</span>
                    <span className="text-zinc-700 font-bold text-sm">/ {s.max}</span>
                  </div>
                  <div className="h-1 bg-zinc-900 rounded-full overflow-hidden">
                    <div className={`h-full ${s.color} rounded-full opacity-60`} style={{ width: `${(s.score / s.max) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Comparative View */}
            <div className="space-y-5 pt-8 border-t border-white/5">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-700">Detailed Comparative Metrics</p>
              {aptitudeResult.sections.map((s) => (
                <SectionBar key={s.label} {...s} />
              ))}
            </div>
          </div>

          {/* Remarks */}
          <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <Layers size={14} className="text-zinc-500" />
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Assessor Narrative</h2>
            </div>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-purple-500/30" />
              <p className="text-[13px] text-zinc-400 leading-relaxed font-medium pl-6 italic">
                "{aptitudeResult.remarks}"
              </p>
            </div>
          </div>

          {/* Context Footer */}
          <div className="bg-zinc-900/20 border border-white/5 rounded-3xl p-6 flex items-center justify-between border-dashed">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-600 mb-1">Batch Assignment</p>
              <p className="text-[11px] font-bold font-mono text-zinc-400 uppercase tracking-widest">{applicant.intake}</p>
            </div>
            <div className="px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-lg flex items-center gap-3">
              <Target size={12} className="text-purple-500" />
              <p className="text-[9px] font-bold text-purple-500 uppercase tracking-widest">Phase: {applicant.phase}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
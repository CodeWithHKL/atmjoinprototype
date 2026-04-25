"use client";

import React from "react";
import Link from "next/link";
import {
  ChevronLeft, SwatchBook, TrendingUp, Flame,
  User, Hash, CalendarDays, Target,
  Dumbbell, Footprints, HeartPulse,
  Zap, Trophy
} from "lucide-react";

const applicant = {
  name: "Ahmad Zaki",
  id: "APP-001",
  ic: "020312-14-5871",
  intake: "INTK-TDM-O-26-01",
  phase: "Physical Fitness Test (PFT)",
};

const physicalResult = {
  pft_id: "PFT-4402",
  test_date: "20 APR 2024",
  overall_rating: "Elite",
  total_points: 95,
  max_points: 100,
  events: [
    { label: "2.4KM Run", score: "09:45", unit: "min", pct: 98, color: "bg-amber-500", icon: Footprints },
    { label: "Push-Ups (1 min)", score: "58", unit: "reps", pct: 92, color: "bg-orange-500", icon: Dumbbell },
    { label: "Sit-Ups (1 min)", score: "62", unit: "reps", pct: 95, color: "bg-yellow-500", icon: Zap },
    { label: "Standing Broad Jump", score: "255", unit: "cm", pct: 88, color: "bg-amber-600", icon: Target },
  ],
  remarks: "Exceptional cardiovascular endurance. Candidate finished the 2.4km run in the top 2% of the intake. Upper body strength is well above the required threshold for officer cadet entry.",
  conducting_officer: "Sjn. Bakri",
};

function EventCard({ event }: { event: typeof physicalResult.events[0] }) {
  const Icon = event.icon;
  return (
    <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-6 backdrop-blur-sm group hover:border-amber-500/20 transition-all">
      <div className="flex justify-between items-start mb-6">
        <div className="p-2.5 bg-amber-500/10 rounded-xl border border-amber-500/20">
          <Icon size={16} className="text-amber-500" />
        </div>
        <div className="text-right">
          <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Percentile</p>
          <p className="text-sm font-bold text-amber-500 font-mono">{event.pct}%</p>
        </div>
      </div>
      
      <div>
        <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-1">{event.label}</p>
        <div className="flex items-baseline gap-1.5">
          <span className="text-3xl font-bold text-white tracking-tighter">{event.score}</span>
          <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">{event.unit}</span>
        </div>
      </div>

      <div className="mt-6 h-1 bg-zinc-900 rounded-full overflow-hidden">
        <div 
          className={`h-full ${event.color} rounded-full opacity-60`} 
          style={{ width: `${event.pct}%`, transition: "width 1.5s ease" }}
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

export default function ZakiPhysicalPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans p-6 lg:p-10 relative">

      {/* BACK NAV */}
      <Link
        href={`/recruiter/intake/id`}
        className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-amber-500 mb-10 transition-colors"
      >
        <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        Return to Directory
      </Link>

      {/* HEADER */}
      <header className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/5 pb-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white uppercase">
            {applicant.name.split(" ")[0]} <span className="text-amber-500">{applicant.name.split(" ").slice(1).join(" ")}</span>
          </h1>
          <p className="text-zinc-500 text-[10px] font-bold tracking-widest mt-1 uppercase">
            ID: <span className="text-zinc-300 font-mono tracking-normal">{applicant.id}</span>
            <span className="text-zinc-800 mx-2">//</span>
            IC: <span className="text-zinc-300 font-mono tracking-normal">{applicant.ic}</span>
          </p>
        </div>

        {/* PERFORMANCE BADGE */}
        <div className="flex items-center gap-4 px-6 py-4 rounded-2xl border border-amber-500/20 bg-amber-500/5 backdrop-blur-sm">
          <Trophy size={20} className="text-amber-500" />
          <div className="border-r border-white/10 pr-4 mr-2">
            <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest mb-0.5">Overall Rating</p>
            <p className="text-sm font-bold text-amber-500 uppercase tracking-[0.2em]">{physicalResult.overall_rating}</p>
          </div>
          <div>
             <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest mb-0.5">Total Points</p>
             <p className="text-sm font-bold text-white font-mono">{physicalResult.total_points}<span className="text-zinc-700 ml-1">/100</span></p>
          </div>
        </div>
      </header>

      <div className="grid md:grid-cols-12 gap-8">

        {/* LEFT — PERFORMANCE SUMMARY */}
        <div className="md:col-span-4 space-y-6">
          
          {/* Recovery Grade Card */}
          <div className="bg-gradient-to-br from-amber-600/10 to-zinc-900 border border-amber-500/20 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <HeartPulse size={14} className="text-amber-500" />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500">Endurance Metrics</span>
            </div>
            <div className="flex items-baseline gap-2 mb-4">
              <p className="text-6xl font-bold tracking-tighter text-white italic">A+</p>
              <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Recovery Grade</p>
            </div>
            <p className="text-[11px] text-zinc-500 leading-relaxed uppercase tracking-tight">
              Rapid heart rate recovery recorded post-2.4KM, indicating elite aerobic conditioning and lung capacity.
            </p>
            <Flame size={80} className="absolute -bottom-6 -right-6 text-white/[0.03] -rotate-12" />
          </div>

          {/* Logistics Audit */}
          <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-6 backdrop-blur-sm shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <SwatchBook size={13} className="text-zinc-600" />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500">Session Logistics</span>
            </div>
            <div className="space-y-1">
              <InfoRow icon={Hash} label="PFT ID" value={physicalResult.pft_id} />
              <InfoRow icon={CalendarDays} label="Test Date" value={physicalResult.test_date} />
              <InfoRow icon={User} label="Conducting SNCO" value={physicalResult.conducting_officer} />
              <InfoRow icon={Target} label="Venue" value="TDM Training Center" />
            </div>
          </div>
        </div>

        {/* RIGHT — EVENT GRID & REMARKS */}
        <div className="md:col-span-8 space-y-6">
          
          {/* Events Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {physicalResult.events.map((event) => (
              <EventCard key={event.label} event={event} />
            ))}
          </div>

          {/* Instructor Evaluation */}
          <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp size={14} className="text-amber-500" />
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Evaluator Observations</h2>
            </div>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-amber-500/30" />
              <p className="text-[13px] text-zinc-400 leading-relaxed font-medium pl-6 italic">
                "{physicalResult.remarks}"
              </p>
            </div>
          </div>

          {/* Footer Context */}
          <div className="bg-zinc-900/20 border border-white/5 rounded-3xl p-6 flex items-center justify-between border-dashed">
            <div className="flex items-center gap-8">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-600 mb-1">Standard Reference</p>
                <p className="text-[11px] font-bold font-mono text-zinc-400 uppercase tracking-widest">TDM-OFFICER-2026</p>
              </div>
              <div className="w-[1px] h-8 bg-white/5" />
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-600 mb-1">Batch ID</p>
                <p className="text-[11px] font-bold font-mono text-zinc-400 uppercase tracking-widest">{applicant.intake}</p>
              </div>
            </div>
            <div className="px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-lg">
              <p className="text-[9px] font-bold text-amber-500 uppercase tracking-widest">Top 5% Cohort</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  ChevronLeft, Search, Filter, CheckCircle2, XCircle, 
  Clock, ShieldCheck, Brain, Stethoscope, Activity, Users,
  Target, GraduationCap, ClipboardCheck, Award, ArrowUpDown, ChevronUp, ChevronDown,
  Zap, AlertTriangle
} from "lucide-react";

type Phase = 'Verification' | 'Aptitude' | 'Medical' | 'Physical' | 'Interview' | 'Overall';

const phaseConfig = {
  Verification: { label: "System Verification", icon: ShieldCheck, color: "bg-blue-600" },
  Aptitude: { label: "Aptitude Test", icon: Brain, color: "bg-purple-600" },
  Medical: { label: "Medical Test", icon: Stethoscope, color: "bg-rose-600" },
  Physical: { label: "Physical Test", icon: Activity, color: "bg-amber-600" },
  Interview: { label: "Final Interview", icon: Users, color: "bg-emerald-600" },
  Overall: { label: "Final Selection", icon: Award, color: "bg-indigo-600" },
};

// Map each phase to its respective detail route (View button)
const phaseRoutes: Record<Phase, string> = {
  Verification: "/recruiter/intake/id/zakiverification",
  Aptitude: "/recruiter/intake/id/zakiaptitude",
  Medical: "/recruiter/intake/id/zakimedical",
  Physical: "/recruiter/intake/id/zakiphysical",
  Interview: "/recruiter/intake/id/zakiinterview",
  Overall: "/recruiter/intake/id/zakioverall",
};

// Map each phase to its respective finalize route (Finalize button)
const finalizeRoutes: Record<Phase, string | null> = {
  Verification: null, // locked
  Aptitude: "/recruiter/intake/id/aptitude",
  Medical: null, // blocked — requires all applicants completed
  Physical: null, // locked — previous phase incomplete
  Interview: null, // locked — previous phase incomplete
  Overall: "/recruiter/intake/id/overall",
};

type LockReason = 'verification' | 'medical' | 'previous' | null;
const lockReasons: Record<Phase, LockReason> = {
  Verification: 'verification',
  Aptitude: null,
  Medical: 'medical',
  Physical: 'previous',
  Interview: 'previous',
  Overall: null,
};

const applicantData: Record<Phase, any[]> = {
  Verification: [
    { name: "Ahmad Zaki", id: "APP-001", status: "Passed", metric: "CGPA 3.8", date: "12 APR", verification_id: "VER-9901", document_status: "valid", background_check_status: "Cleared", remarks: "All docs verified", verified_by: "Kapt.Zulkifli", date_verified: "12 APR 2024" },
    { name: "Sarah Connor", id: "APP-002", status: "Passed", metric: "CGPA 3.5", date: "12 APR", verification_id: "VER-9902", document_status: "valid", background_check_status: "Cleared", remarks: "N/A", verified_by: "Kapt.Zulkifli", date_verified: "12 APR 2024" },
    { name: "M. Izzat", id: "APP-003", status: "Flagged", metric: "Incomplete Doc", date: "13 APR", verification_id: "VER-9903", document_status: "invalid", background_check_status: "Pending", remarks: "Missing IC Copy", verified_by: "Kapt.Zulkifli", date_verified: "13 APR 2024" },
  ],
  Aptitude: [
    { name: "Ahmad Zaki", id: "APP-001", status: "Passed", metric: "Score: 92%", date: "15 APR", aptitude_id: "APT-7701", applicant_id: "APP-001", test_score: "92/100", percentile: "98th", pass_fail: "Pass", test_date: "15 APR 2024" },
    { name: "Sarah Connor", id: "APP-002", status: "Failed", metric: "Score: 45%", date: "15 APR", aptitude_id: "APT-7702", applicant_id: "APP-002", test_score: "45/100", percentile: "32nd", pass_fail: "Fail", test_date: "15 APR 2024" },
  ],
  Medical: [
    { name: "Ahmad Zaki", id: "APP-001", status: "Pending", date: "18 APR", medical_id: "MED-5501", applicant_id: "APP-001", bmi: "-", doctor_notes: "Awaiting Bloodwork Results" },
  ],
  Physical: [
    { name: "Ahmad Zaki", id: "APP-001", status: "Passed", metric: "BMI 22.1", date: "20 APR", physical_id: "PHY-4401", applicant_id: "APP-001", run_time: "12:45m", pushups_count: "42", situps_count: "38" },
  ],
  Interview: [
    { name: "Ahmad Zaki", id: "APP-001", status: "Awaiting", metric: "Board A", date: "25 APR", interview_id: "INT-3301", applicant_id: "APP-001", communication_score: "8/10", confidence_score: "9/10", leadership_score: "7/10", panel_comments: "Strong presence, technical depth good." },
  ],
  Overall: [
    { name: "Ahmad Zaki", id: "APP-001", status: "Passed", metric: "Final Score: 88.5", date: "28 APR", academic_score: "18.5%", aptitude_score: "27.6%", physical_score: "24.4%", interview_score: "18.0%", overall_score: "88.5%", application_result: "Selected" },
    { name: "Sarah Connor", id: "APP-002", status: "Failed", metric: "Disqualified", date: "28 APR", academic_score: "14.0%", aptitude_score: "13.5%", physical_score: "0.0%", interview_score: "0.0%", overall_score: "27.5%", application_result: "Rejected" },
  ],
};

export default function IntakeDetailPage({ params }: { params: { id: string } }) {
  const [activePhase, setActivePhase] = useState<Phase>('Verification');
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' | null }>({ key: '', direction: null });
  const router = useRouter();

  const intakeId = params.id || "INTK-TDM-O-26-01";

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedApplicants = useMemo(() => {
    const items = [...applicantData[activePhase]];
    if (sortConfig.direction !== null) {
      items.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];
        
        if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }
    return items;
  }, [activePhase, sortConfig]);

  const SortButton = ({ column, label }: { column: string; label: string }) => (
    <button 
      onClick={() => handleSort(column)}
      className="flex items-center gap-1.5 hover:text-white transition-colors group"
    >
      {label}
      <span className="text-zinc-600 group-hover:text-emerald-500 transition-colors">
        {sortConfig.key === column ? (
          sortConfig.direction === 'asc' ? <ChevronUp size={10} /> : <ChevronDown size={10} />
        ) : (
          <ArrowUpDown size={10} />
        )}
      </span>
    </button>
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans flex flex-col p-8">
      
      {/* NAVIGATION & HEADER */}
      <header className="mb-12">
        <Link href="/recruiter/intake" className="group inline-flex items-center gap-2 text-[10px] font-bold tracking-widest text-zinc-500 hover:text-white mb-6 transition-colors">
          <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
          BACK TO INTAKES
        </Link>
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Applicant <span className="text-emerald-500">Pipeline</span>
            </h1>
            <p className="text-zinc-500 text-[10px] font-bold mt-1 uppercase tracking-widest flex items-center gap-2">
              Intake ID: <span className="text-zinc-300 font-mono tracking-normal">{intakeId}</span>
            </p>
          </div>
          
          <div className="flex gap-4">
              <div className="text-right">
                <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Total Candidates</p>
                <p className="text-xl font-black italic">1,240</p>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div className="text-right">
                <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">In Current Phase</p>
                <p className="text-xl font-black italic text-emerald-500">{applicantData[activePhase].length}</p>
              </div>
          </div>
        </div>
      </header>

      {/* INTAKE PARAMETER CARD */}
      <section className="mb-10 bg-zinc-900/40 border border-white/5 rounded-[2rem] overflow-hidden backdrop-blur-sm shadow-xl">
        <div className="px-8 py-4 border-b border-white/5 flex items-center gap-2 bg-white/[0.02]">
          <Target size={14} className="text-emerald-500" />
          <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Intake Parameters & Standards</h2>
        </div>
        <div className="p-8 grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-zinc-500">
              <GraduationCap size={14} />
              <span className="text-[9px] font-black uppercase tracking-widest">Academic Baseline</span>
            </div>
            <div className="bg-zinc-950/50 rounded-xl p-4 border border-white/5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] text-zinc-500 font-bold">Weightage</span>
                <span className="text-xs font-mono font-black text-emerald-500">20%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-zinc-500 font-bold">Min. CGPA</span>
                <span className="text-xs font-bold">2.75</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-zinc-500 font-bold">Min. Education Level</span>
                <span className="text-xs font-bold">Degree</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-zinc-500 font-bold">Priority</span>
                <span className="text-xs font-bold">Engineering</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-zinc-500">
              <Brain size={14} />
              <span className="text-[9px] font-black uppercase tracking-widest">Aptitude Standards</span>
            </div>
            <div className="bg-zinc-950/50 rounded-xl p-4 border border-white/5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] text-zinc-500 font-bold">Weightage</span>
                <span className="text-xs font-mono font-black text-emerald-500">30%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-zinc-500 font-bold">Pass Score</span>
                <span className="text-xs font-bold italic">65/100</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-zinc-500">
              <Activity size={14} />
              <span className="text-[9px] font-black uppercase tracking-widest">Male Physical Benchmarks</span>
            </div>
            <div className="bg-zinc-950/50 rounded-xl p-4 border border-white/5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] text-zinc-500 font-bold">Weightage</span>
                <span className="text-xs font-mono font-black text-emerald-500">30%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-zinc-500 font-bold">2.4km Run</span>
                <span className="text-xs font-bold">Under 14:00m</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-zinc-500 font-bold">Push Ups</span>
                <span className="text-xs font-bold">30</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-zinc-500 font-bold">Sit Ups</span>
                <span className="text-xs font-bold">30</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-zinc-500">
              <Brain size={14} />
              <span className="text-[9px] font-black uppercase tracking-widest">Interview</span>
            </div>
            <div className="bg-zinc-950/50 rounded-xl p-4 border border-white/5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] text-zinc-500 font-bold">Weightage</span>
                <span className="text-xs font-mono font-black text-emerald-500 uppercase">20%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-zinc-500 font-bold">Pass Score</span>
                <span className="text-xs font-bold italic">PASS</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-zinc-500">
              <Brain size={14} />
              <span className="text-[9px] font-black uppercase tracking-widest">Medical</span>
            </div>
            <div className="bg-zinc-950/50 rounded-xl p-4 border border-white/5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] text-zinc-500 font-bold">Weightage</span>
                <span className="text-xs font-mono font-black text-emerald-500 uppercase">Compulsory</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-zinc-500 font-bold">Pass Score</span>
                <span className="text-xs font-bold italic">PASS</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-zinc-500 font-bold">Min. Height</span>
                <span className="text-xs font-bold italic">156cm</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-zinc-500 font-bold">BMI Range</span>
                <span className="text-xs font-bold italic">18.5 - 26.9</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-zinc-500">
              <Activity size={14} />
              <span className="text-[9px] font-black uppercase tracking-widest">Female Physical Benchmarks</span>
            </div>
            <div className="bg-zinc-950/50 rounded-xl p-4 border border-white/5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] text-zinc-500 font-bold">Weightage</span>
                <span className="text-xs font-mono font-black text-emerald-500">30%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-zinc-500 font-bold">2.4km Run</span>
                <span className="text-xs font-bold">Under 14:00m</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-zinc-500 font-bold">Push Ups</span>
                <span className="text-xs font-bold">30</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-zinc-500 font-bold">Sit Ups</span>
                <span className="text-xs font-bold">30</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHASE CONTROL HEADER */}
      <div className="mb-6 flex flex-col md:flex-row justify-between items-center gap-6 px-4">
        <div className="flex items-center gap-4">
          <div className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
          <h3 className="text-sm font-black uppercase tracking-[0.3em]">
            Current Phase : <span className="text-rose-500">Medical</span>
          </h3>
        </div>
        
        {/* FINALIZE BUTTON */}
        {(() => {
          const reason = lockReasons[activePhase];
          if (reason === 'medical') {
            return (
              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-3 px-6 py-3 bg-zinc-900 border border-amber-500/20 rounded-full cursor-not-allowed">
                  <AlertTriangle size={14} className="text-amber-400 shrink-0" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-amber-400/70">
                    Finalize Locked
                  </span>
                </div>
                <p className="text-[9px] font-bold text-amber-500/60 uppercase tracking-widest text-right max-w-xs leading-relaxed">
                  All applicants must be completed before this phase can be finalized.
                </p>
              </div>
            );
          }
          if (reason === 'previous') {
            return (
              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-3 px-6 py-3 bg-zinc-900 border border-zinc-700 rounded-full cursor-not-allowed">
                  <AlertTriangle size={14} className="text-zinc-500 shrink-0" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600">
                    Finalize Locked
                  </span>
                </div>
                <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest text-right max-w-xs leading-relaxed">
                  Previous phase has not been completed yet.
                </p>
              </div>
            );
          }
          if (reason === 'verification') {
            return (
              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-3 px-6 py-3 bg-zinc-900 border border-zinc-700 rounded-full cursor-not-allowed">
                  <AlertTriangle size={14} className="text-zinc-500 shrink-0" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600">
                    Finalize Locked
                  </span>
                </div>
                <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest text-right max-w-xs leading-relaxed">
                  Verification phase cannot be manually finalized.
                </p>
              </div>
            );
          }
          return (
            <button
              onClick={() => {
                const route = finalizeRoutes[activePhase];
                if (route) router.push(route);
              }}
              className="group relative flex items-center gap-3 px-8 py-3 bg-white text-black rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <Zap size={14} className="relative z-10 group-hover:fill-black" />
              <span className="relative z-10 text-[10px] font-black uppercase tracking-widest group-hover:text-white transition-colors">
                Finalize Current Phase
              </span>
            </button>
          );
        })()}
      </div>

      {/* PHASE TOGGLE (Tabs) */}
      <div className="flex justify-center mb-10">
        <div className="bg-zinc-900/50 p-1.5 rounded-3xl border border-white/5 flex gap-1 backdrop-blur-xl shadow-2xl">
          {(Object.keys(phaseConfig) as Phase[]).map((phase) => {
            const Icon = phaseConfig[phase].icon;
            const isActive = activePhase === phase;
            return (
              <button
                key={phase}
                onClick={() => {
                  setActivePhase(phase);
                  setSortConfig({ key: '', direction: null });
                }}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl text-[10px] font-black tracking-widest transition-all ${
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
              placeholder="Search by Name, applicant ID or IC Number..." 
              className="w-full bg-zinc-950/50 border border-white/5 rounded-xl py-3 pl-12 pr-4 text-[10px] font-bold tracking-widest outline-none focus:border-emerald-500/50 transition-all"
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-950/50 border border-white/5 text-[10px] font-bold tracking-widest hover:bg-zinc-900 transition-colors">
            <Filter size={14} /> Filter Results
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/[0.02]">
                <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">
                  <SortButton column="name" label="Applicant Name" />
                </th>
                
                {/* VERIFICATION COLUMNS */}
                {activePhase === 'Verification' && (
                  <>
                    <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500"><SortButton column="verification_id" label="Ver. ID" /></th>
                    <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500"><SortButton column="id" label="Application ID" /></th>
                    <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500"><SortButton column="background_check_status" label="BG Check" /></th>
                    <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">Remarks</th>
                    <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">Assigned To</th>
                    <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500"><SortButton column="date_verified" label="Date Verified" /></th>
                  </>
                )}

                {/* APTITUDE COLUMNS */}
                {activePhase === 'Aptitude' && (
                  <>
                    <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500"><SortButton column="aptitude_id" label="Aptitude ID" /></th>
                    <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500"><SortButton column="applicant_id" label="Appl. ID" /></th>
                    <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500"><SortButton column="test_score" label="Score" /></th>
                    <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500"><SortButton column="pass_fail" label="Result" /></th>
                    <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">Test Date</th>
                  </>
                )}

                {/* MEDICAL COLUMNS */}
                {activePhase === 'Medical' && (
                  <>
                    <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">Medical ID</th>
                    <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">Appl. ID</th>
                    <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500"><SortButton column="bmi" label="BMI" /></th>
                    <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">Doctor Notes</th>
                  </>
                )}

                {/* PHYSICAL COLUMNS */}
                {activePhase === 'Physical' && (
                  <>
                    <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">Physical ID</th>
                    <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">Appl. ID</th>
                    <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500"><SortButton column="run_time" label="2.4km Run" /></th>
                    <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500"><SortButton column="pushups_count" label="Pushups" /></th>
                    <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500"><SortButton column="situps_count" label="Situps" /></th>
                  </>
                )}

                {/* INTERVIEW COLUMNS */}
                {activePhase === 'Interview' && (
                  <>
                    <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">Interview ID</th>
                    <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">Appl. ID</th>
                    <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500"><SortButton column="communication_score" label="Communication" /></th>
                    <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500"><SortButton column="confidence_score" label="Confidence" /></th>
                    <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500"><SortButton column="leadership_score" label="Leadership" /></th>
                    <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">Panel Comments</th>
                  </>
                )}

                {/* OVERALL COLUMNS */}
                {activePhase === 'Overall' && (
                  <>
                    <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">Academic (20%)</th>
                    <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">Aptitude (30%)</th>
                    <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">Physical (30%)</th>
                    <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">Interview (20%)</th>
                    <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500"><SortButton column="overall_score" label="Overall (100%)" /></th>
                    <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500"><SortButton column="application_result" label="Appl. Result" /></th>
                  </>
                )}

                <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">
                  <SortButton column="status" label="Phase Status" />
                </th>
                
                {activePhase !== 'Verification' && activePhase !== 'Aptitude' && activePhase !== 'Medical' && activePhase !== 'Physical' && activePhase !== 'Interview' && activePhase !== 'Overall' && (
                  <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">Criteria/Metric</th>
                )}

                <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">
                  <SortButton column="date" label="Process Date" />
                </th>
                <th className="p-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {sortedApplicants.map((applicant, idx) => (
                <tr key={idx} className="hover:bg-white/[0.01] transition-colors group">
                  <td className="p-6">
                    <div className="flex flex-col">
                      <span className="text-sm font-black tracking-tight group-hover:text-emerald-400 transition-colors uppercase">
                        {applicant.name}
                      </span>
                    </div>
                  </td>

                  {/* VERIFICATION CELLS */}
                  {activePhase === 'Verification' && (
                    <>
                      <td className="p-6 text-[10px] font-mono text-zinc-400">{applicant.verification_id}</td>
                      <td className="p-6 text-[10px] font-mono text-zinc-400">{applicant.id}</td>
                      <td className="p-6 text-[10px] font-bold text-zinc-300">{applicant.background_check_status}</td>
                      <td className="p-6 text-[10px] text-zinc-500 italic max-w-[150px] truncate">{applicant.remarks}</td>
                      <td className="p-6 text-[10px] font-bold text-zinc-300">{applicant.verified_by}</td>
                      <td className="p-6 text-[10px] font-mono text-zinc-400">{applicant.date_verified}</td>
                    </>
                  )}

                  {/* APTITUDE CELLS */}
                  {activePhase === 'Aptitude' && (
                    <>
                      <td className="p-6 text-[10px] font-mono text-zinc-400">{applicant.aptitude_id}</td>
                      <td className="p-6 text-[10px] font-mono text-zinc-400">{applicant.applicant_id}</td>
                      <td className="p-6 text-[10px] font-bold text-zinc-300">{applicant.test_score}</td>
                      <td className="p-6">
                        <span className={`text-[9px] font-black uppercase ${applicant.pass_fail === 'Pass' ? 'text-emerald-500' : 'text-rose-500'}`}>
                          {applicant.pass_fail}
                        </span>
                      </td>
                      <td className="p-6 text-[10px] font-mono text-zinc-400">{applicant.test_date}</td>
                    </>
                  )}

                  {/* MEDICAL CELLS */}
                  {activePhase === 'Medical' && (
                    <>
                      <td className="p-6 text-[10px] font-mono text-zinc-400">{applicant.medical_id}</td>
                      <td className="p-6 text-[10px] font-mono text-zinc-400">{applicant.applicant_id}</td>
                      <td className="p-6 text-[10px] font-bold text-zinc-300">{applicant.bmi}</td>
                      <td className="p-6 text-[10px] text-zinc-500 italic max-w-[200px] truncate">{applicant.doctor_notes}</td>
                    </>
                  )}

                  {/* PHYSICAL CELLS */}
                  {activePhase === 'Physical' && (
                    <>
                      <td className="p-6 text-[10px] font-mono text-zinc-400">{applicant.physical_id}</td>
                      <td className="p-6 text-[10px] font-mono text-zinc-400">{applicant.applicant_id}</td>
                      <td className="p-6 text-[10px] font-bold text-zinc-300">{applicant.run_time}</td>
                      <td className="p-6 text-[10px] font-bold text-zinc-300">{applicant.pushups_count}</td>
                      <td className="p-6 text-[10px] font-bold text-zinc-300">{applicant.situps_count}</td>
                    </>
                  )}

                  {/* INTERVIEW CELLS */}
                  {activePhase === 'Interview' && (
                    <>
                      <td className="p-6 text-[10px] font-mono text-zinc-400">{applicant.interview_id}</td>
                      <td className="p-6 text-[10px] font-mono text-zinc-400">{applicant.applicant_id}</td>
                      <td className="p-6 text-[10px] font-bold text-zinc-300">{applicant.communication_score}</td>
                      <td className="p-6 text-[10px] font-bold text-zinc-300">{applicant.confidence_score}</td>
                      <td className="p-6 text-[10px] font-bold text-zinc-300">{applicant.leadership_score}</td>
                      <td className="p-6 text-[10px] text-zinc-500 italic max-w-[200px] truncate">{applicant.panel_comments}</td>
                    </>
                  )}

                  {/* OVERALL CELLS */}
                  {activePhase === 'Overall' && (
                    <>
                      <td className="p-6 text-[10px] font-mono text-zinc-300">{applicant.academic_score}</td>
                      <td className="p-6 text-[10px] font-mono text-zinc-300">{applicant.aptitude_score}</td>
                      <td className="p-6 text-[10px] font-mono text-zinc-300">{applicant.physical_score}</td>
                      <td className="p-6 text-[10px] font-mono text-zinc-300">{applicant.interview_score}</td>
                      <td className="p-6 text-[10px] font-black text-emerald-500">{applicant.overall_score}</td>
                      <td className="p-6">
                        <span className={`text-[9px] font-black uppercase ${applicant.application_result === 'Selected' ? 'text-emerald-500' : 'text-rose-500'}`}>
                          {applicant.application_result}
                        </span>
                      </td>
                    </>
                  )}

                  <td className="p-6">
                    <StatusBadge status={applicant.status} />
                  </td>

                  {activePhase !== 'Verification' && activePhase !== 'Aptitude' && activePhase !== 'Medical' && activePhase !== 'Physical' && activePhase !== 'Interview' && activePhase !== 'Overall' && (
                    <td className="p-6">
                      <span className="text-xs font-bold text-zinc-300 italic">
                        {applicant.metric}
                      </span>
                    </td>
                  )}

                  <td className="p-6">
                    <div className="flex items-center gap-2 text-zinc-500">
                      <Clock size={12} />
                      <span className="text-[10px] font-bold uppercase">{applicant.date}</span>
                    </div>
                  </td>

                  {/* VIEW BUTTON — routes to the phase-specific detail page */}
                  <td className="p-6 text-right">
                    <Link
                      href={phaseRoutes[activePhase]}
                      className="text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-lg border border-white/5 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* PAGINATION / FOOTER */}
        <div className="p-6 bg-white/[0.02] flex justify-between items-center text-[9px] font-black uppercase tracking-[0.2em] text-zinc-600">
          <span className="normal-case">Showing {applicantData[activePhase].length} of 1,240 Candidates</span>
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

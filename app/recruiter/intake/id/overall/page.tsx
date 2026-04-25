"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft, Award, CheckCircle2, XCircle, Clock,
  Users, BarChart3, CalendarDays, Bell, AlertTriangle, Lock,
  Send, TrendingUp, Medal, ShieldCheck
} from "lucide-react";

const phaseSummary = {
  intake: "INTK-TDM-O-26-01",
  phase: "Final Selection",
  phase_id: "OVR-PHASE-06",
  total_evaluated: 2,
  selected: 1,
  rejected: 1,
  selection_rate: "50%",
  evaluated_on: "28 APR 2024",
  intake_closes: "30 APR 2024",
};

const applicants = [
  {
    name: "Ahmad Zaki",
    id: "APP-001",
    academic: "18.5%",
    aptitude: "27.6%",
    physical: "24.4%",
    interview: "18.0%",
    overall: "88.5%",
    result: "Selected",
  },
  {
    name: "Sarah Connor",
    id: "APP-002",
    academic: "14.0%",
    aptitude: "13.5%",
    physical: "0.0%",
    interview: "0.0%",
    overall: "27.5%",
    result: "Rejected",
  },
];

const notificationChannels = ["Email", "SMS", "Portal"];

function StatCard({ label, value, accent }: { label: string; value: string; accent?: string }) {
  return (
    <div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 backdrop-blur-sm">
      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-600 mb-2">{label}</p>
      <p className={`text-2xl font-bold tracking-tight ${accent ?? "text-white"}`}>{value}</p>
    </div>
  );
}

function ScoreBar({ label, value, color }: { label: string, value: string; color: string }) {
  const numeric = parseFloat(value);
  return (
    <div className="flex items-center gap-3">
      <span className="text-[8px] font-bold text-zinc-600 uppercase tracking-widest w-14 shrink-0">
        {label}
      </span>
      <div className="flex-1 h-1 bg-zinc-800/50 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${(numeric / 30) * 100}%` }}
        />
      </div>
      <span className="text-[9px] font-bold font-mono text-zinc-400 w-10 text-right">
        {value}
      </span>
    </div>
  );
}

export default function OverallFinalizePage({ params }: { params: { id: string } }) {
  const intakeId = params.id || "INTK-TDM-O-26-01";

  const [notifDate, setNotifDate] = useState("");
  const [notifTime, setNotifTime] = useState("09:00");
  const [channels, setChannels] = useState<string[]>(["Email", "Portal"]);
  const [authorName, setAuthorName] = useState("");
  const [authorPin, setAuthorPin] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleChannel = (ch: string) => {
    setChannels((prev) =>
      prev.includes(ch) ? prev.filter((c) => c !== ch) : [...prev, ch]
    );
  };

  const canSubmit = notifDate && channels.length > 0 && authorName.trim() && authorPin.length >= 4 && confirmed;

  if (submitted) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white font-sans flex items-center justify-center p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)]" />
        <div className="text-center space-y-8 max-w-md relative z-10">
          <div className="relative mx-auto w-24 h-24">
            <div className="w-24 h-24 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shadow-[0_0_50px_rgba(99,102,241,0.1)]">
              <Medal size={40} className="text-indigo-400" />
            </div>
            <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center border-4 border-zinc-950">
              <CheckCircle2 size={16} className="text-black" strokeWidth={3} />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight uppercase">Intake <span className="text-indigo-400">Concluded.</span></h1>
            <p className="text-zinc-500 text-[11px] font-medium leading-relaxed mt-4 uppercase tracking-wide px-4">
              Final selection for <span className="text-white font-mono">{intakeId}</span> is sealed. Notifications are queued for <span className="text-indigo-400 font-mono">{notifDate} @ {notifTime}</span>.
            </p>
          </div>
          <div className="flex flex-col gap-3 pt-4">
            <Link href={`/recruiter/intake/id`} className="px-8 py-4 bg-indigo-500 text-white font-bold text-[10px] uppercase tracking-widest rounded-xl hover:bg-indigo-400 transition-all active:scale-95">
              Return to Pipeline
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans p-6 lg:p-10">
      {/* BACK NAV */}
      <Link href={`/recruiter/intake/id`} className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white mb-10 transition-colors">
        <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        Back to Pipeline
      </Link>

      {/* HEADER */}
      <header className="mb-10 border-b border-white/5 pb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.4)] animate-pulse" />
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-500">Final Authorization Level Required</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-white uppercase leading-none mb-3">
          Finalize <span className="text-indigo-400">Overall</span> Selection
        </h1>
        <p className="text-zinc-500 text-[10px] font-bold tracking-widest uppercase">
          Intake: <span className="text-zinc-300 font-mono tracking-normal">{intakeId}</span>
          <span className="text-zinc-800 mx-3">//</span>
          Phase: <span className="text-zinc-300 font-mono tracking-normal">{phaseSummary.phase_id}</span>
        </p>
      </header>

      {/* WARNING BANNER */}
      <div className="mb-10 flex items-start gap-4 px-6 py-5 bg-indigo-500/5 border border-indigo-500/20 rounded-2xl border-dashed">
        <AlertTriangle size={16} className="text-indigo-400 shrink-0 mt-0.5" />
        <p className="text-[10px] font-bold text-indigo-300/70 leading-relaxed uppercase tracking-wide">
          <span className="text-indigo-400">Security Warning:</span> This action is terminal. Final selection locks all evaluation modules for <span className="text-white font-mono">{intakeId}</span>. All offer and rejection dispatch protocols will initiate immediately upon the scheduled timestamp.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-8">
        {/* LEFT — SUMMARY */}
        <div className="md:col-span-5 space-y-6">
          <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm shadow-xl">
            <div className="flex items-center gap-2 mb-8">
              <Award size={14} className="text-indigo-400" />
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Selection Metrics</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <StatCard label="Total Evaluated" value={String(phaseSummary.total_evaluated)} />
              <StatCard label="Success Rate" value={phaseSummary.selection_rate} accent="text-indigo-400" />
              <StatCard label="Selected" value={String(phaseSummary.selected)} accent="text-emerald-500" />
              <StatCard label="Rejected" value={String(phaseSummary.rejected)} accent="text-rose-500" />
            </div>
            <div className="space-y-2">
              <div className="bg-zinc-950/50 border border-white/5 rounded-2xl p-4 flex justify-between items-center">
                <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Audit Conducted</span>
                <span className="text-[10px] font-bold font-mono text-zinc-400 uppercase tracking-tight">{phaseSummary.evaluated_on}</span>
              </div>
              <div className="bg-zinc-950/50 border border-white/5 rounded-2xl p-4 flex justify-between items-center">
                <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Pipeline Expiry</span>
                <span className="text-[10px] font-bold font-mono text-indigo-400 uppercase tracking-tight">{phaseSummary.intake_closes}</span>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm shadow-xl">
            <div className="flex items-center gap-2 mb-8">
              <BarChart3 size={14} className="text-zinc-600" />
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Performance Log</h2>
            </div>
            <div className="space-y-4">
              {applicants.map((a) => (
                <div key={a.id} className="p-5 bg-zinc-950/40 border border-white/5 rounded-2xl group hover:border-white/10 transition-all">
                  <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/5">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-tight text-zinc-200">{a.name}</p>
                      <p className="text-[9px] font-mono text-zinc-600 mt-1 uppercase tracking-tighter">{a.id}</p>
                    </div>
                    <div className="text-right">
                      <p className={`text-xl font-bold tracking-tighter ${a.result === "Selected" ? "text-indigo-400" : "text-zinc-600"}`}>
                        {a.overall}
                      </p>
                      <span className={`text-[8px] font-bold uppercase tracking-widest ${a.result === "Selected" ? "text-emerald-500" : "text-rose-500"}`}>
                        {a.result}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <ScoreBar label="Academic" value={a.academic} color="bg-blue-500/60" />
                    <ScoreBar label="Aptitude" value={a.aptitude} color="bg-purple-500/60" />
                    <ScoreBar label="Physical" value={a.physical} color="bg-amber-500/60" />
                    <ScoreBar label="Interview" value={a.interview} color="bg-emerald-500/60" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — AUTHORIZATION FORM */}
        <div className="md:col-span-7 space-y-6">
          <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm shadow-xl">
            <div className="flex items-center gap-2 mb-8">
              <Bell size={14} className="text-indigo-400" />
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Dispatch Configuration</h2>
            </div>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="space-y-3">
                <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-600 flex items-center gap-2">
                  <CalendarDays size={12} /> Dispatch Date
                </label>
                <input
                  type="date"
                  value={notifDate}
                  onChange={(e) => setNotifDate(e.target.value)}
                  className="w-full bg-zinc-950/60 border border-white/5 rounded-xl px-4 py-3 text-[11px] font-bold text-zinc-200 font-mono outline-none focus:border-indigo-500/40 transition-all [color-scheme:dark]"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-600 flex items-center gap-2">
                  <Clock size={12} /> Dispatch Time
                </label>
                <input
                  type="time"
                  value={notifTime}
                  onChange={(e) => setNotifTime(e.target.value)}
                  className="w-full bg-zinc-950/60 border border-white/5 rounded-xl px-4 py-3 text-[11px] font-bold text-zinc-200 font-mono outline-none focus:border-indigo-500/40 transition-all [color-scheme:dark]"
                />
              </div>
            </div>
            <div className="space-y-4">
              <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-600 flex items-center gap-2 uppercase tracking-widest">
                <Send size={12} /> Communication Channels
              </label>
              <div className="flex gap-3">
                {notificationChannels.map((ch) => {
                  const active = channels.includes(ch);
                  return (
                    <button
                      key={ch}
                      onClick={() => toggleChannel(ch)}
                      className={`px-6 py-2.5 rounded-xl text-[9px] font-bold uppercase tracking-widest border transition-all ${
                        active ? "bg-indigo-500/10 border-indigo-500/30 text-indigo-400" : "border-white/5 text-zinc-600 hover:border-white/10 hover:text-zinc-400"
                      }`}
                    >
                      {ch}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm shadow-xl">
            <div className="flex items-center gap-2 mb-8">
              <TrendingUp size={14} className="text-zinc-600" />
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Weightage Audit</h2>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[
                { label: "Academic", weight: "20%", color: "text-blue-400 border-blue-500/10 bg-blue-500/5" },
                { label: "Aptitude", weight: "30%", color: "text-purple-400 border-purple-500/10 bg-purple-500/5" },
                { label: "Physical", weight: "30%", color: "text-amber-400 border-amber-500/10 bg-amber-500/5" },
                { label: "Interview", weight: "20%", color: "text-emerald-400 border-emerald-500/10 bg-emerald-500/5" },
              ].map((item) => (
                <div key={item.label} className={`border rounded-xl p-4 text-center ${item.color}`}>
                  <p className="text-[8px] font-bold uppercase tracking-widest opacity-60 mb-1">{item.label}</p>
                  <p className="text-lg font-bold tracking-tight">{item.weight}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm shadow-xl">
            <div className="flex items-center gap-2 mb-8">
              <Lock size={14} className="text-zinc-600" />
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Command Authorization</h2>
            </div>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="space-y-3">
                <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-600">Officer Name</label>
                <input
                  type="text"
                  placeholder="FULL NAME"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full bg-zinc-950/60 border border-white/5 rounded-xl px-4 py-3 text-[10px] font-bold text-white placeholder:text-zinc-800 outline-none focus:border-white/20 transition-all uppercase"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-600">Secure PIN</label>
                <input
                  type="password"
                  placeholder="••••"
                  value={authorPin}
                  onChange={(e) => setAuthorPin(e.target.value)}
                  maxLength={8}
                  className="w-full bg-zinc-950/60 border border-white/5 rounded-xl px-4 py-3 text-[11px] font-bold text-white placeholder:text-zinc-800 outline-none focus:border-white/20 transition-all tracking-[0.5em]"
                />
              </div>
            </div>
            <label className="flex items-start gap-4 cursor-pointer group">
              <div
                onClick={() => setConfirmed(!confirmed)}
                className={`mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-all ${confirmed ? "bg-indigo-500 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.3)]" : "border-white/10 group-hover:border-white/20"}`}
              >
                {confirmed && <CheckCircle2 size={12} className="text-white" strokeWidth={3} />}
              </div>
              <p className="text-[10px] font-bold text-zinc-500 leading-relaxed uppercase tracking-tight">
                I hereby certify that all evaluations for <span className="text-zinc-200">Intake {intakeId}</span> are complete. I authorize the final locking of these results and the formal closure of this recruitment cycle.
              </p>
            </label>
          </div>

          <div className="space-y-4">
            <button
              disabled={!canSubmit}
              onClick={() => setSubmitted(true)}
              className={`w-full flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-bold text-[10px] uppercase tracking-widest transition-all ${canSubmit ? "bg-white text-black hover:bg-indigo-500 hover:text-white shadow-lg active:scale-95" : "bg-zinc-900 text-zinc-700 cursor-not-allowed opacity-50"}`}
            >
              <ShieldCheck size={16} />
              Confirm & Finalize Intake
            </button>
            {!canSubmit && (
              <div className="flex justify-center items-center gap-2 opacity-40">
                <Clock size={10} className="text-zinc-600" />
                <p className="text-[8px] font-bold text-zinc-600 uppercase tracking-widest">Signature & PIN Required to Proceed</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
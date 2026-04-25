"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft, ShieldCheck, CheckCircle2, XCircle, Clock,
  Users, Brain, CalendarDays, Bell, AlertTriangle, Lock,
  ChevronRight, FileCheck, Send
} from "lucide-react";

const phaseSummary = {
  intake: "INTK-TDM-O-26-01",
  phase: "Aptitude Test",
  phase_id: "APT-PHASE-02",
  total_sat: 2,
  passed: 1,
  failed: 1,
  pending: 0,
  pass_rate: "50%",
  conducted_on: "15 APR 2024",
  next_phase: "Medical Test",
};

const applicants = [
  { name: "Ahmad Zaki", id: "APP-001", score: "92/100", result: "Pass" },
  { name: "Sarah Connor", id: "APP-002", score: "45/100", result: "Fail" },
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

export default function AptitudeFinalizePage() {
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

  const handleSubmit = () => {
    if (!canSubmit) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white font-sans flex items-center justify-center p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)]" />
        <div className="text-center space-y-8 max-w-md relative z-10">
          <div className="w-24 h-24 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(16,185,129,0.1)]">
            <FileCheck size={40} className="text-emerald-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight uppercase">Phase <span className="text-emerald-500">Authorized.</span></h1>
            <p className="text-zinc-500 text-[11px] font-medium leading-relaxed mt-4 uppercase tracking-wide">
              The Aptitude Phase for <span className="text-white font-mono">{phaseSummary.intake}</span> has been sealed. Notifications are queued for <span className="text-emerald-500 font-mono tracking-tighter">{notifDate} @ {notifTime}</span>.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              href={`/recruiter/intake/id`}
              className="px-8 py-4 bg-emerald-500 text-black font-bold text-[10px] uppercase tracking-widest rounded-xl hover:bg-emerald-400 transition-all active:scale-95"
            >
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
      <Link
        href={`/recruiter/intake/id`}
        className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white mb-10 transition-colors"
      >
        <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        Back to Pipeline
      </Link>

      {/* HEADER */}
      <header className="mb-10 border-b border-white/5 pb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.4)] animate-pulse" />
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-500">High-Level Authorization Required</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-white uppercase leading-none mb-3">
          Finalize <span className="text-amber-500">Aptitude</span> Phase
        </h1>
        <p className="text-zinc-500 text-[10px] font-bold tracking-widest uppercase">
          Intake: <span className="text-zinc-300 font-mono tracking-normal">{phaseSummary.intake}</span>
          <span className="text-zinc-800 mx-3">//</span>
          ID: <span className="text-zinc-300 font-mono tracking-normal">{phaseSummary.phase_id}</span>
        </p>
      </header>

      {/* WARNING BANNER */}
      <div className="mb-10 flex items-start gap-4 px-6 py-5 bg-amber-500/5 border border-amber-500/20 rounded-2xl border-dashed">
        <AlertTriangle size={16} className="text-amber-500 shrink-0 mt-0.5" />
        <p className="text-[10px] font-bold text-amber-500/70 leading-relaxed uppercase tracking-wide">
          <span className="text-amber-500">Notice:</span> Finalizing is an irreversible administrative action. Data persistence will be locked, and candidates will transition to the <span className="text-white underline underline-offset-4 decoration-amber-500/30">{phaseSummary.next_phase}</span> module.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-8">

        {/* LEFT — PHASE SUMMARY */}
        <div className="md:col-span-5 space-y-6">

          {/* Stats Breakdown */}
          <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm shadow-xl">
            <div className="flex items-center gap-2 mb-8">
              <Brain size={14} className="text-purple-500" />
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Phase Analytics</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <StatCard label="Total Candidates" value={String(phaseSummary.total_sat)} />
              <StatCard label="Phase Pass Rate" value={phaseSummary.pass_rate} accent="text-emerald-500" />
              <StatCard label="Qualifiers" value={String(phaseSummary.passed)} accent="text-emerald-500" />
              <StatCard label="Disqualified" value={String(phaseSummary.failed)} accent="text-rose-500" />
            </div>
            <div className="bg-zinc-950/50 border border-white/5 rounded-2xl p-4 flex justify-between items-center">
              <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Audit Date</span>
              <span className="text-[10px] font-bold font-mono text-zinc-400 uppercase tracking-tight">{phaseSummary.conducted_on}</span>
            </div>
          </div>

          {/* Applicant Result List */}
          <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm shadow-xl">
            <div className="flex items-center gap-2 mb-6">
              <Users size={14} className="text-zinc-600" />
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Entry Logs</h2>
            </div>
            <div className="space-y-3">
              {applicants.map((a) => (
                <div key={a.id} className="flex items-center justify-between p-4 bg-zinc-950/40 border border-white/5 rounded-xl group hover:border-white/10 transition-all">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-tight text-zinc-200">{a.name}</p>
                    <p className="text-[9px] font-mono text-zinc-600 mt-1 uppercase tracking-tighter">{a.id} <span className="mx-1 opacity-20">|</span> Result: {a.score}</p>
                  </div>
                  <span className={`flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg border ${
                    a.result === "Pass"
                      ? "border-emerald-500/20 bg-emerald-500/5 text-emerald-500"
                      : "border-rose-500/20 bg-rose-500/5 text-rose-500"
                  }`}>
                    {a.result === "Pass" ? <CheckCircle2 size={10} /> : <XCircle size={10} />}
                    {a.result}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — AUTHORIZATION FORM */}
        <div className="md:col-span-7 space-y-6">

          {/* Notification Scheduling */}
          <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm shadow-xl">
            <div className="flex items-center gap-2 mb-8">
              <Bell size={14} className="text-amber-500" />
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
                  className="w-full bg-zinc-950/60 border border-white/5 rounded-xl px-4 py-3 text-[11px] font-bold text-zinc-200 font-mono outline-none focus:border-amber-500/40 transition-all [color-scheme:dark]"
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
                  className="w-full bg-zinc-950/60 border border-white/5 rounded-xl px-4 py-3 text-[11px] font-bold text-zinc-200 font-mono outline-none focus:border-amber-500/40 transition-all [color-scheme:dark]"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-600 flex items-center gap-2 uppercase tracking-widest">
                <Send size={12} /> Active Channels
              </label>
              <div className="flex gap-3">
                {notificationChannels.map((ch) => {
                  const active = channels.includes(ch);
                  return (
                    <button
                      key={ch}
                      onClick={() => toggleChannel(ch)}
                      className={`px-6 py-2.5 rounded-xl text-[9px] font-bold uppercase tracking-widest border transition-all ${
                        active
                          ? "bg-amber-500/10 border-amber-500/30 text-amber-500"
                          : "border-white/5 text-zinc-600 hover:border-white/10 hover:text-zinc-400"
                      }`}
                    >
                      {ch}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Authorization PIN Section */}
          <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm shadow-xl">
            <div className="flex items-center gap-2 mb-8">
              <Lock size={14} className="text-zinc-600" />
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Security Clearance</h2>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="space-y-3">
                <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-600">Officer Name</label>
                <input
                  type="text"
                  placeholder="AUTHORIZING OFFICER"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full bg-zinc-950/60 border border-white/5 rounded-xl px-4 py-3 text-[10px] font-bold text-white placeholder:text-zinc-800 outline-none focus:border-white/20 transition-all uppercase"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-600">Auth PIN</label>
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
                className={`mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-all ${
                  confirmed
                    ? "bg-emerald-500 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                    : "border-white/10 group-hover:border-white/20"
                }`}
              >
                {confirmed && <CheckCircle2 size={12} className="text-black" strokeWidth={3} />}
              </div>
              <p className="text-[10px] font-bold text-zinc-500 leading-relaxed uppercase tracking-tight">
                I certify that the results for <span className="text-zinc-200">Aptitude Phase</span> are verified. I authorize the immediate locking of candidate data and the initiation of the <span className="text-zinc-200 underline underline-offset-4">{phaseSummary.next_phase}</span> dispatch protocols.
              </p>
            </label>
          </div>

          {/* Final Action */}
          <div className="space-y-4">
            <button
              disabled={!canSubmit}
              onClick={handleSubmit}
              className={`w-full flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-bold text-[10px] uppercase tracking-widest transition-all ${
                canSubmit
                  ? "bg-white text-black hover:bg-emerald-500 hover:text-white shadow-lg active:scale-95"
                  : "bg-zinc-900 text-zinc-700 cursor-not-allowed opacity-50"
              }`}
            >
              <ShieldCheck size={16} />
              Commit Phase Authorization
            </button>
            
            {!canSubmit && (
              <div className="flex justify-center items-center gap-2 opacity-40">
                <Clock size={10} className="text-zinc-600" />
                <p className="text-[8px] font-bold text-zinc-600 uppercase tracking-widest">
                  Validation pending completion of required fields
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
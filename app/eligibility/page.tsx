"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { 
  CheckCircle2, 
  ArrowRight,
  Shield,
  Anchor,
  Plane,
  GraduationCap,
  UserCheck,
  Search,
  ChevronRight,
  RefreshCcw
} from "lucide-react";

// --- Data ---
const enlistedStats = [
  { label: "Min. Height (Male)", army: "1.57m", navy: "1.62m", airforce: "1.62m" },
  { label: "Min. Height (Female)", army: "1.57m", navy: "1.57m", airforce: "1.57m" },
  { label: "Max. Age", army: "30 yrs (M) / 25 (F)", navy: "25 yrs", airforce: "25 yrs" },
  { label: "BMI Range", army: "18.0 – 27.9", navy: "18.0 – 25.0", airforce: "18.0 – 25.0" },
  { label: "Education", army: "SPM (Pass)", navy: "SPM (Credits)", airforce: "SPM (Credits)" },
];

const officerStats = [
  { label: "Min. Height (Male)", army: "1.62m", navy: "1.62m", airforce: "1.62m" },
  { label: "Min. Height (Female)", army: "1.57m", navy: "1.57m", airforce: "1.57m" },
  { label: "Max. Age", army: "27 yrs", navy: "27 yrs", airforce: "27 yrs" },
  { label: "CGPA Req.", army: "2.70+", navy: "2.70+", airforce: "3.00+" },
  { label: "Education", army: "Degree (Hons)", navy: "Degree (Hons)", airforce: "Degree (Hons)" },
];

export default function EligibilityPage() {
  const [track, setTrack] = useState<"enlisted" | "officer">("enlisted");
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizResult, setQuizResult] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      <Navbar />

      <main className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
        {/* Track Selection Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
            Entry <span className="text-emerald-500">Requirements</span>
          </h1>
          
          <div className="inline-flex p-1.5 bg-zinc-900 rounded-3xl border border-white/5 shadow-2xl">
            <button
              onClick={() => {setTrack("enlisted"); setShowQuiz(false);}}
              className={`flex items-center gap-3 px-10 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${
                track === "enlisted" ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.1)]" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              <Search size={16} /> Enlisted Personnel
            </button>
            <button
              onClick={() => {setTrack("officer"); setShowQuiz(false);}}
              className={`flex items-center gap-3 px-10 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${
                track === "officer" ? "bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.2)]" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              <GraduationCap size={16} /> Officer Cadet
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left/Middle: Requirements Table */}
          <div className="lg:col-span-2 space-y-6 animate-in fade-in slide-in-from-left-4 duration-700">
            <div className="p-8 rounded-[2.5rem] bg-zinc-900/50 border border-white/5 backdrop-blur-sm overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold uppercase tracking-tight">Physical & Academic Benchmarks</h3>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold text-zinc-500 uppercase tracking-widest">
                  Updated 2026
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-[10px] font-black uppercase text-zinc-600 border-b border-white/5">
                      <th className="pb-4 px-2">Criteria</th>
                      <th className="pb-4 px-2 text-emerald-400">Army</th>
                      <th className="pb-4 px-2 text-blue-400">Navy</th>
                      <th className="pb-4 px-2 text-cyan-400">Air Force</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {(track === "enlisted" ? enlistedStats : officerStats).map((row, i) => (
                      <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                        <td className="py-5 px-2 text-xs font-bold text-zinc-400">{row.label}</td>
                        <td className="py-5 px-2 text-sm font-black">{row.army}</td>
                        <td className="py-5 px-2 text-sm font-black">{row.navy}</td>
                        <td className="py-5 px-2 text-sm font-black">{row.airforce}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* General Disclaimer */}
            <div className="flex items-start gap-4 p-6 rounded-3xl bg-emerald-500/5 border border-emerald-500/10">
              <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
              <p className="text-xs text-emerald-100/60 leading-relaxed">
                Applicants must be Malaysian citizens with a clean criminal record. Passing the 
                <strong> Physical Fitness Test (UKJK)</strong> and <strong>Medical Board</strong> is mandatory 
                for all {track === "enlisted" ? "enlisted" : "officer"} roles.
              </p>
            </div>
          </div>

          {/* Right: Interactive Matcher Card */}
          <div className="lg:col-span-1">
            {!showQuiz ? (
              <div className="h-full p-10 rounded-[2.5rem] bg-gradient-to-br from-zinc-900 to-black border border-white/5 flex flex-col justify-center text-center animate-in fade-in slide-in-from-right-4 duration-700">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 text-emerald-400">
                  <UserCheck size={32} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Unsure of your branch?</h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-8">
                  Answer a few questions to see if your profile fits the {track === "enlisted" ? "Tactical" : "Leadership"} needs of the Army, Navy, or Air Force.
                </p>
                <button 
                  onClick={() => setShowQuiz(true)}
                  className="group flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-emerald-400 transition-all"
                >
                  Start Branch Matcher <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ) : (
              <div className="h-full p-8 rounded-[2.5rem] bg-zinc-900 border border-emerald-500/30 flex flex-col items-center justify-center text-center animate-in zoom-in-95">
                {!quizResult ? (
                  <div className="w-full">
                    <p className="text-[9px] font-black text-emerald-500 uppercase tracking-widest mb-4">Assessment in progress</p>
                    <h4 className="text-lg font-bold mb-8">Which role excites you more in the {track === "enlisted" ? "Field" : "Command Center"}?</h4>
                    <div className="space-y-3">
                      {["Leading ground operations", "Navigating maritime assets", "Managing aerospace defense"].map((ans, idx) => (
                        <button 
                          key={idx}
                          onClick={() => setQuizResult(idx === 0 ? "Army" : idx === 1 ? "Navy" : "Air Force")}
                          className="w-full p-4 rounded-xl border border-white/5 bg-white/5 text-[10px] font-bold uppercase hover:bg-white hover:text-black transition-all"
                        >
                          {ans}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="animate-in fade-in">
                    <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-2">Recommended Branch</p>
                    <h3 className="text-4xl font-black uppercase tracking-tighter mb-6 text-emerald-400">{quizResult}</h3>
                    <Link href="/assessment" className="flex items-center justify-center gap-2 w-full py-4 px-6 rounded-xl bg-emerald-500 text-black text-[10px] font-black uppercase tracking-widest mb-4">
                      Start Full Aptitude Test <ArrowRight size={14}/>
                    </Link>
                    <button onClick={() => setQuizResult(null)} className="text-[10px] font-bold text-zinc-600 uppercase flex items-center gap-2 mx-auto hover:text-white transition-colors">
                      <RefreshCcw size={12}/> Reset Matcher
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ChevronLeft, 
  ShieldCheck, 
  FileText, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight,
  Info,
  Lock
} from "lucide-react";

export default function ApplicationReviewPage() {
  const [declared, setDeclared] = useState(false);

  // Mock data for the branch being applied to
  const selectedIntake = {
    id: "INTK-TLDM-O-26",
    branch: "Navy (TLDM)",
    role: "Officer Cadet",
    requirements: [
      { label: "Minimum CGPA 3.00", met: true },
      { label: "Height > 165cm", met: true },
      { label: "BMI 18.5 - 26.9", met: true },
      { label: "Citizenship: Malaysian", met: true },
    ]
  };

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white font-sans selection:bg-emerald-500/30">
      
      {/* GLOBAL FIXED BACKGROUND */}
      <div 
        className="fixed inset-0 z-0 bg-[url('/Camo.jpg')] bg-cover bg-center bg-fixed opacity-10" 
        aria-hidden="true"
      />

      <div className="relative z-10 p-4 lg:p-8">
        <div className="max-w-4xl mx-auto">
          
          {/* BREADCRUMB */}
          <Link 
            href="/loggedin/recruitment" 
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-500/60 hover:text-emerald-400 transition-all mb-12 group"
          >
            <div className="p-2 rounded-lg bg-emerald-500/5 border border-emerald-500/10 group-hover:border-emerald-500/30 transition-colors">
              <ChevronLeft size={14} />
            </div>
            Back to available intakes
          </Link>

          {/* HEADER */}
          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck size={16} className="text-emerald-500" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">Form ID: {selectedIntake.id}</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter">
              Final <span className="text-emerald-500">Review.</span>
            </h1>
            <p className="text-zinc-500 text-sm mt-4 font-medium max-w-xl leading-relaxed tracking-tight">
              Review your eligibility and provide statutory declaration for <span className="text-zinc-200 font-bold">{selectedIntake.branch} — {selectedIntake.role}</span> track.
            </p>
          </header>

          <div className="space-y-6">
            
            {/* 1. AUTO-CHECK ELIGIBILITY */}
            <section className="relative overflow-hidden rounded-[2.5rem] bg-black/40 backdrop-blur-xl border border-white/10 p-8 lg:p-10 shadow-2xl">
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <ShieldCheck className="text-emerald-500" size={20} />
                <h3 className="text-[11px] font-bold uppercase tracking-[0.3em]">System Eligibility Cross-Check</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 relative z-10">
                {selectedIntake.requirements.map((req, i) => (
                  <div key={i} className="flex items-center justify-between p-5 rounded-2xl bg-white/[0.02] border border-white/5 transition-colors hover:bg-white/[0.04]">
                    <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-tight">{req.label}</span>
                    {req.met ? (
                      <div className="flex items-center gap-2 text-emerald-500">
                        <span className="text-[9px] font-black uppercase tracking-widest">Met</span>
                        <CheckCircle2 size={16} />
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-red-500">
                        <span className="text-[9px] font-black uppercase tracking-widest">Failed</span>
                        <AlertCircle size={16} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-start gap-3 p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 relative z-10">
                <Info size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <p className="text-[10px] font-medium text-zinc-500 leading-relaxed">
                  Data pulled from <Link href="/loggedin/profile" className="text-emerald-500 underline underline-offset-4 font-bold hover:text-emerald-400 transition-colors">Personnel File</Link>. Ensure all physical metrics are current before final submission.
                </p>
              </div>

              {/* AMBIENT GLOW */}
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-[60px] opacity-10 bg-emerald-500" />
            </section>

            {/* 2. STATUTORY DECLARATION */}
            <section className="relative overflow-hidden rounded-[2.5rem] bg-black/40 backdrop-blur-xl border border-white/10 p-8 lg:p-10 shadow-2xl">
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <FileText className="text-emerald-500" size={20} />
                <h3 className="text-[11px] font-bold uppercase tracking-[0.3em]">Candidate Declaration</h3>
              </div>
              
              <div className="space-y-3 relative z-10">
                {[
                  "I hereby declare that all information provided in my Personnel File is true and accurate.",
                  "I understand that any false declaration will lead to immediate disqualification and legal action.",
                  "I am willing to undergo physical and mental assessments as required by the Armed Forces.",
                  "I am prepared to be stationed at any location as determined by the Service Command."
                ].map((text, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 items-center">
                    <div className="h-6 w-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={12} className="text-emerald-500" />
                    </div>
                    <p className="text-[11px] font-medium text-zinc-400 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 relative z-10">
                <label className="flex items-center gap-5 cursor-pointer group w-fit">
                  <input 
                    type="checkbox" 
                    checked={declared}
                    onChange={() => setDeclared(!declared)}
                    className="hidden" 
                  />
                  <div className={`h-8 w-8 rounded-xl border-2 flex items-center justify-center transition-all duration-300 ${declared ? "bg-emerald-500 border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.4)] scale-110" : "border-white/10 group-hover:border-white/30"}`}>
                    {declared && <CheckCircle2 size={18} className="text-black stroke-[3]" />}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white">Accept Protocol</span>
                    <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Binding digital signature</span>
                  </div>
                </label>
              </div>
            </section>

            {/* 3. SUBMISSION BOX */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-emerald-500 p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_0_50px_rgba(16,185,129,0.2)]">
              <div className="flex items-center gap-6 relative z-10">
                <div className="h-16 w-16 bg-black/10 backdrop-blur-md rounded-[1.5rem] flex items-center justify-center text-black">
                  <Lock size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-black tracking-tighter leading-none uppercase text-black">Confirm Enlistment</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-950 mt-2 opacity-80">
                    Slot usage: <span className="font-black underline">2 of 2</span> will be occupied
                  </p>
                </div>
              </div>
              
              <button 
                disabled={!declared}
                className={`w-full md:w-auto px-12 py-6 rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all relative z-10 shadow-2xl ${
                  declared 
                  ? "bg-black text-white hover:scale-105 active:scale-95 cursor-pointer" 
                  : "bg-black/20 text-black/40 cursor-not-allowed"
                }`}
              >
                Submit Application <ArrowRight size={18} />
              </button>

              {/* MESH BACKGROUND FOR BUTTON SECTION */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)] opacity-50" />
            </div>

            {/* FOOTER SPACING */}
            <div className="flex items-center justify-center gap-3 py-8 text-zinc-600">
               <div className="h-px w-8 bg-zinc-800" />
               <span className="text-[9px] font-black uppercase tracking-[0.4em]">End of Application Protocol</span>
               <div className="h-px w-8 bg-zinc-800" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
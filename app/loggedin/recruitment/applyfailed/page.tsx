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
  XCircle,
  Lock
} from "lucide-react";

export default function ApplicationFailedReviewPage() {
  // Even if they check this, the button should ideally remain locked or lead to a warning
  const [declared, setDeclared] = useState(false);

  // Updated Mock data with failed requirements
  const selectedIntake = {
    id: "INTK-TLDM-O-26",
    branch: "Navy (TLDM)",
    role: "Officer Cadet",
    requirements: [
      { label: "Minimum CGPA 3.00", met: false }, // FAILED
      { label: "Height > 165cm", met: true },
      { label: "BMI 18.5 - 26.9", met: false }, // FAILED
      { label: "Citizenship: Malaysian", met: true },
    ]
  };

  const hasFailedRequirements = selectedIntake.requirements.some(req => !req.met);

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white font-sans selection:bg-red-500/30">
      
      {/* GLOBAL FIXED BACKGROUND */}
      <div 
        className="fixed inset-0 z-0 bg-[url('/Camo.jpg')] bg-cover bg-center bg-fixed opacity-10 grayscale" 
        aria-hidden="true"
      />

      <div className="relative z-10 p-4 lg:p-8">
        <div className="max-w-4xl mx-auto">
          
          {/* BREADCRUMB */}
          <Link 
            href="/loggedin/recruitment" 
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-all mb-12 group"
          >
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-white/30 transition-colors">
              <ChevronLeft size={14} />
            </div>
            Back to available intakes
          </Link>

          {/* HEADER */}
          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle size={16} className="text-red-500" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">Form ID: {selectedIntake.id}</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter">
              Review <span className="text-red-500">Failed.</span>
            </h1>
            <p className="text-zinc-500 text-sm mt-4 font-medium max-w-xl leading-relaxed tracking-tight">
              Our system has identified discrepancies between your <span className="text-white font-bold">Personnel File</span> and the mandatory criteria for the <span className="text-zinc-200 font-bold">{selectedIntake.branch}</span> track.
            </p>
          </header>

          <div className="space-y-6">
            
            {/* 1. AUTO-CHECK ELIGIBILITY (FAILURE STATE) */}
            <section className="relative overflow-hidden rounded-[2.5rem] bg-black/40 backdrop-blur-xl border border-red-500/20 p-8 lg:p-10 shadow-2xl">
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <AlertCircle className="text-red-500" size={20} />
                <h3 className="text-[11px] font-bold uppercase tracking-[0.3em]">System Eligibility Cross-Check</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 relative z-10">
                {selectedIntake.requirements.map((req, i) => (
                  <div key={i} className={`flex items-center justify-between p-5 rounded-2xl border transition-colors ${req.met ? "bg-white/[0.02] border-white/5" : "bg-red-500/5 border-red-500/20"}`}>
                    <span className={`text-[11px] font-bold uppercase tracking-tight ${req.met ? "text-zinc-400" : "text-red-200"}`}>{req.label}</span>
                    {req.met ? (
                      <div className="flex items-center gap-2 text-emerald-500/50">
                        <span className="text-[9px] font-black uppercase tracking-widest">Met</span>
                        <CheckCircle2 size={16} />
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-red-500">
                        <span className="text-[9px] font-black uppercase tracking-widest font-black">Ineligible</span>
                        <XCircle size={16} />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-start gap-3 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 relative z-10">
                <Info size={16} className="text-red-500 shrink-0 mt-0.5" />
                <p className="text-[10px] font-medium text-red-200/60 leading-relaxed">
                  Your application cannot proceed. Please update your credentials in your <Link href="/loggedin/profile" className="text-red-400 underline underline-offset-4 font-bold hover:text-red-300 transition-colors">Personnel File</Link> if this is an error, or choose a different branch.
                </p>
              </div>

              {/* AMBIENT GLOW (RED) */}
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-[60px] opacity-10 bg-red-500" />
            </section>

            {/* 2. STATUTORY DECLARATION (DISABLED) */}
            <section className="relative overflow-hidden rounded-[2.5rem] bg-black/40 backdrop-blur-xl border border-white/5 p-8 lg:p-10 shadow-2xl opacity-50 grayscale">
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <FileText className="text-zinc-500" size={20} />
                <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-500">Candidate Declaration</h3>
              </div>
              
              <div className="space-y-3 relative z-10">
                {[
                  "I hereby declare that all information provided in my Personnel File is true and accurate.",
                  "I understand that any false declaration will lead to immediate disqualification and legal action.",
                ].map((text, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 items-center">
                    <div className="h-6 w-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <div className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
                    </div>
                    <p className="text-[11px] font-medium text-zinc-600 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 relative z-10 cursor-not-allowed">
                <div className="flex items-center gap-5 w-fit opacity-50">
                  <div className="h-8 w-8 rounded-xl border-2 border-white/10 flex items-center justify-center transition-all duration-300">
                    <Lock size={14} className="text-zinc-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500">Protocol Locked</span>
                    <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Requirements not met</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. SUBMISSION BOX (FAILED STATE) */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-zinc-900 p-8 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/5">
              <div className="flex items-center gap-6 relative z-10">
                <div className="h-16 w-16 bg-red-500/10 backdrop-blur-md rounded-[1.5rem] flex items-center justify-center text-red-500 border border-red-500/20">
                  <XCircle size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-black tracking-tighter leading-none uppercase text-zinc-400">Submission Blocked</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-red-500 mt-2">
                    Criteria mismatch: <span className="font-black underline">2 requirements</span> failed
                  </p>
                </div>
              </div>
              
              <button 
                disabled={true}
                className="w-full md:w-auto px-12 py-6 rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all relative z-10 bg-white/5 text-zinc-600 cursor-not-allowed border border-white/5"
              >
                Cannot Submit <ArrowRight size={18} />
              </button>

              {/* MESH BACKGROUND */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.05),transparent)] opacity-50" />
            </div>

            {/* FOOTER SPACING */}
            <div className="flex items-center justify-center gap-3 py-8 text-zinc-700">
               <div className="h-px w-8 bg-zinc-900" />
               <span className="text-[9px] font-black uppercase tracking-[0.4em]">Ineligible for Current Protocol</span>
               <div className="h-px w-8 bg-zinc-900" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
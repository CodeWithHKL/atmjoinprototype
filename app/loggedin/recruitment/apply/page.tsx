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
    <div className="min-h-screen bg-zinc-950 text-white p-4 lg:p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* BREADCRUMB */}
        <Link href="/loggedin/recruitment" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors mb-8">
          <ChevronLeft size={14} /> Back to intakes
        </Link>

        {/* HEADER */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tighter uppercase">Final <span className="text-emerald-500">Review.</span></h1>
          <p className="text-zinc-500 text-sm mt-2 font-semibold">
            Submitting for: <span className="text-zinc-300">{selectedIntake.branch} — {selectedIntake.role}</span>
          </p>
        </div>

        <div className="space-y-6">
          
          {/* 1. AUTO-CHECK ELIGIBILITY */}
          <section className="rounded-[2.5rem] bg-zinc-900 border border-white/5 p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-8">
              <ShieldCheck className="text-emerald-500" size={20} />
              <h3 className="text-[11px] font-bold uppercase tracking-[0.3em]">System Eligibility Cross-Check</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {selectedIntake.requirements.map((req, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-zinc-950 border border-white/5">
                  <span className="text-[11px] font-medium text-zinc-400">{req.label}</span>
                  {req.met ? (
                    <CheckCircle2 size={16} className="text-emerald-500" />
                  ) : (
                    <AlertCircle size={16} className="text-red-500" />
                  )}
                </div>
              ))}
            </div>
            <p className="mt-6 text-[10px] font-medium text-zinc-500 leading-relaxed">
              * Based on your current <Link href="/loggedin/profile" className="text-emerald-500 underline underline-offset-4">Personnel File</Link>. If these are incorrect, please update your profile before proceeding.
            </p>
          </section>

          {/* 2. STATUTORY DECLARATION */}
          <section className="rounded-[2.5rem] bg-zinc-900 border border-white/5 p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="text-emerald-500" size={20} />
              <h3 className="text-[11px] font-bold uppercase tracking-[0.3em]">Candidate Declaration</h3>
            </div>
            
            <div className="space-y-4">
              {[
                "I hereby declare that all information provided in my Personnel File is true and accurate.",
                "I understand that any false declaration will lead to immediate disqualification and legal action.",
                "I am willing to undergo physical and mental assessments as required by the Armed Forces.",
                "I am prepared to be stationed at any location as determined by the Service Command."
              ].map((text, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="h-5 w-5 rounded bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={12} className="text-emerald-500" />
                  </div>
                  <p className="text-[11px] font-medium text-zinc-300 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            <label className="mt-8 flex items-center gap-4 cursor-pointer group">
              <input 
                type="checkbox" 
                checked={declared}
                onChange={() => setDeclared(!declared)}
                className="hidden" 
              />
              <div className={`h-6 w-6 rounded-lg border-2 flex items-center justify-center transition-all ${declared ? "bg-emerald-500 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]" : "border-white/10 group-hover:border-white/30"}`}>
                {declared && <CheckCircle2 size={14} className="text-black" />}
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-200">I agree to the terms of service</span>
            </label>
          </section>

          {/* 3. SUBMISSION BOX */}
          <div className="p-8 rounded-[2.5rem] bg-emerald-500 text-black flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-black/10 rounded-2xl">
                <Lock size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold tracking-tighter leading-none uppercase">Confirm Submission</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-70 mt-2">
                  Slot usage: 2 of 2 will be occupied.
                </p>
              </div>
            </div>
            
            <button 
              disabled={!declared}
              className={`px-10 py-5 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-3 transition-all shadow-xl ${declared ? "bg-black text-white hover:scale-105" : "bg-black/20 text-black/40 cursor-not-allowed"}`}
            >
              Submit application <ArrowRight size={16} />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-zinc-600">
             <Info size={14} />
             <span className="text-[9px] font-bold uppercase tracking-[0.2em]">End of application protocol</span>
          </div>

        </div>
      </div>
    </div>
  );
}
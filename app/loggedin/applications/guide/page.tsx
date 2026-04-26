"use client";

import React from "react";
import { 
  BookOpen, 
  MapPin, 
  UserCheck, 
  Stethoscope, 
  Dumbbell, 
  MessageSquare, 
  FileWarning, 
  Download,
  Info,
  CheckSquare
} from "lucide-react";

const guideSections = [
  {
    phase: "01",
    title: "System Verification",
    icon: UserCheck,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    description: "The automated screening of your digital credentials against service requirements.",
    details: [
      "Ensure all uploaded documents are high-resolution scans.",
      "Verification usually takes 3–5 business days.",
      "Check your eligibility status for BMI and academic prerequisites."
    ]
  },
  {
    phase: "02",
    title: "Altitude Test",
    icon: BookOpen,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    description: "A psychometric and cognitive assessment to determine mental aptitude.",
    details: [
      "Conducted at designated regional centers.",
      "Focuses on logic, spatial awareness, and situational judgment.",
      "No specific prior study is required, but rest is essential."
    ]
  },
  {
    phase: "03",
    title: "Medical Examination",
    icon: Stethoscope,
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    description: "A comprehensive health check to ensure you meet the physical standards of service.",
    details: [
      "Vision, hearing, and blood tests will be conducted.",
      "Bring any existing medical records or surgery history.",
      "Fast for at least 8 hours if instructed in your reporting slip."
    ]
  },
  {
    phase: "04",
    title: "Physical Fitness Test",
    icon: Dumbbell,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    description: "The 'Ujian Kecergasan Fizikal' (UKF) to test endurance and strength.",
    details: [
      "2.4km run (timed), push-ups (1 min), and sit-ups (1 min).",
      "Proper sports attire is mandatory.",
      "Hydrate well 24 hours prior to the test."
    ]
  },
  {
    phase: "05",
    title: "Final Interview",
    icon: MessageSquare,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    description: "A board interview with senior officers to assess character and commitment.",
    details: [
      "Formal attire (Baju Melayu/Lounge Suit) is required.",
      "Be prepared to discuss your motivation for joining the service.",
      "Bring original copies of all academic certificates."
    ]
  }
];

export default function GuidePage() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white font-sans selection:bg-emerald-500/30">
      
      {/* GLOBAL FIXED BACKGROUND */}
      <div 
        className="fixed inset-0 z-0 bg-[url('/Camo.jpg')] bg-cover bg-center bg-fixed opacity-[0.07]" 
        aria-hidden="true"
      />

      <div className="relative z-10 p-4 lg:p-8">
        <div className="max-w-4xl mx-auto">
          
          {/* HEADER */}
          <header className="mb-12 border-b border-white/10 pb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                <Info size={20} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">Recruitment Protocol v2.6</span>
            </div>
            <h1 className="text-5xl font-black uppercase tracking-tighter">Candidate <span className="text-emerald-500">Guide.</span></h1>
            <p className="text-zinc-500 text-sm mt-6 leading-relaxed max-w-2xl font-medium">
              Follow this comprehensive guide to navigate the recruitment pipeline. Failure to adhere to reporting instructions or missing documentation may result in immediate disqualification from the selection process.
            </p>
          </header>

          {/* GUIDELINES GRID */}
          <div className="space-y-6">
            {guideSections.map((section, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-[2.5rem] bg-black/40 backdrop-blur-2xl border border-white/10 p-8 transition-all hover:border-emerald-500/30 shadow-xl">
                <div className="flex flex-col md:flex-row gap-8 relative z-10">
                  {/* ICON & PHASE */}
                  <div className="shrink-0">
                    <div className={`h-20 w-20 rounded-3xl ${section.bg} ${section.color} border border-current/10 flex items-center justify-center mb-4 shadow-inner`}>
                      <section.icon size={36} />
                    </div>
                    <div className="flex items-center gap-2 px-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 font-mono">Phase {section.phase}</span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-black uppercase tracking-tight mb-3 text-white group-hover:text-emerald-400 transition-colors">
                      {section.title}
                    </h2>
                    <p className="text-[13px] text-zinc-400 mb-8 font-medium leading-relaxed max-w-xl">
                      {section.description}
                    </p>
                    
                    <ul className="grid md:grid-cols-2 gap-3">
                      {section.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 group-hover:border-white/10 transition-colors shadow-sm">
                          <CheckSquare size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                          <span className="text-[11px] font-bold text-zinc-300 leading-snug uppercase tracking-tight">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* SUBTLE GLOW OVERLAY */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] -mr-32 -mt-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            ))}
          </div>

          {/* DOCUMENT CHECKLIST SECTION */}
          <div className="mt-12 p-10 rounded-[3rem] bg-emerald-500 text-black shadow-[0_20px_50px_rgba(16,185,129,0.2)] relative overflow-hidden group">
            {/* DECORATIVE ELEMENT */}
            <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-1000">
              <Download size={300} />
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 relative z-10">
              <div className="max-w-md">
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-3 leading-none">Required Documentation</h3>
                <p className="text-black/80 text-[13px] font-bold leading-relaxed uppercase tracking-tight">
                  Download the official checklist. Ensure all original documents are kept in a transparent folder for manual verification at assessment centers.
                </p>
              </div>
              <button className="h-16 px-10 rounded-2xl bg-black text-white text-[11px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-zinc-900 transition-all shadow-2xl active:scale-95 whitespace-nowrap">
                <Download size={20} /> Download checklist (PDF)
              </button>
            </div>
          </div>

          {/* REPORTING WARNING */}
          <div className="mt-8 p-8 rounded-[2.5rem] bg-black/40 backdrop-blur-xl border border-red-500/20 flex flex-col md:flex-row gap-6 shadow-xl">
            <div className="h-12 w-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
              <FileWarning size={24} />
            </div>
            <div>
              <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-red-500 mb-2">Code of Conduct & Punctuality</h4>
              <p className="text-[11px] font-bold text-zinc-500 leading-relaxed uppercase tracking-tight max-w-3xl">
                Punctuality is a core military value. Arriving late to any assessment center or failing to adhere to the dress code will result in an automatic <span className="text-zinc-200">"Fail"</span> status for that track. No appeals will be entertained under any circumstances.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
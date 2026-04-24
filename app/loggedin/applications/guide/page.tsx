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
      "Verification usually takes 3-5 business days.",
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
    <div className="min-h-screen bg-zinc-950 text-white p-4 lg:p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* HEADER */}
        <header className="mb-12 border-b border-white/5 pb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <Info size={18} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Application Protocol</span>
          </div>
          <h1 className="text-4xl font-black uppercase tracking-tighter">Candidate <span className="text-emerald-500">Guide.</span></h1>
          <p className="text-zinc-500 text-sm mt-4 leading-relaxed max-w-2xl font-medium">
            Follow this comprehensive guide to navigate the recruitment pipeline. Failure to adhere to reporting instructions or missing documentation may result in immediate disqualification.
          </p>
        </header>

        {/* GUIDELINES GRID */}
        <div className="space-y-6">
          {guideSections.map((section, idx) => (
            <div key={idx} className="group rounded-[2rem] bg-zinc-900 border border-white/5 p-8 transition-all hover:bg-zinc-900/50">
              <div className="flex flex-col md:flex-row gap-8">
                {/* ICON & PHASE */}
                <div className="shrink-0">
                  <div className={`h-16 w-16 rounded-2xl ${section.bg} ${section.color} flex items-center justify-center mb-4`}>
                    <section.icon size={32} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Phase {section.phase}</span>
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  <h2 className="text-xl font-black uppercase tracking-tight mb-2 text-white group-hover:text-emerald-400 transition-colors">
                    {section.title}
                  </h2>
                  <p className="text-sm text-zinc-400 mb-6 font-medium leading-relaxed">
                    {section.description}
                  </p>
                  
                  <ul className="grid md:grid-cols-2 gap-3">
                    {section.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                        <CheckSquare size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                        <span className="text-[11px] font-bold text-zinc-300 uppercase tracking-tight leading-snug">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DOCUMENT CHECKLIST SECTION */}
        <div className="mt-12 p-8 rounded-[2.5rem] bg-emerald-500 text-black">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">Required Documentation</h3>
              <p className="text-black/70 text-xs font-bold uppercase tracking-widest leading-relaxed">
                Download the official checklist. Ensure all originals are kept in a transparent folder.
              </p>
            </div>
            <button className="h-14 px-8 rounded-2xl bg-black text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-3 hover:scale-105 transition-all">
              <Download size={18} /> Download Checklist (PDF)
            </button>
          </div>
        </div>

        {/* REPORTING WARNING */}
        <div className="mt-8 p-6 rounded-[2rem] bg-zinc-900 border border-red-500/20 flex gap-4">
          <FileWarning className="text-red-500 shrink-0" size={24} />
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-widest text-red-500 mb-1">Code of Conduct</h4>
            <p className="text-[10px] font-bold text-zinc-500 uppercase leading-relaxed">
              Punctuality is a core military value. Arriving late to any assessment center will result in an automatic "Fail" status for that application track. No appeals will be entertained.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
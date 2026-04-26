"use client";

import React from "react";
import Link from "next/link";
import { 
  ChevronLeft, ArrowRight, GraduationCap, 
  Shield, Star, Medal, Users, Briefcase 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const careerPaths = [
  {
    type: "Officer",
    rankTitle: "Commissioned Rank",
    icon: Star,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    description: "The leadership and management branch. Officers are responsible for strategic planning, command, and decision-making.",
    path: [
      { step: "Entry", detail: "Degree / Cadet Officer (MTD/UPNM)" },
      { step: "Training", detail: "Military Academy (9-12 Months)" },
      { step: "Commission", detail: "Second Lieutenant (Lt M)" },
      { step: "Growth", detail: "Command & Staff College" }
    ],
    cta: "Apply Now",
    link: "/login"
  },
  {
    type: "Enlisted",
    rankTitle: "Non-Commissioned Rank",
    icon: Shield,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    description: "The backbone of the force. Enlisted personnel specialize in technical, tactical, and operational expertise.",
    path: [
      { step: "Entry", detail: "SPM / Diploma / SKM" },
      { step: "Training", detail: "Recruit Training (6 Months)" },
      { step: "Service", detail: "Private (Pbt)" },
      { step: "Growth", detail: "Specialist & NCO Promotion" }
    ],
    cta: "Apply Now",
    link: "/login"
  }
];

export default function CareerHub() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white font-sans selection:bg-emerald-500/30 flex flex-col">
      {/* GLOBAL FIXED BACKGROUND */}
      <div 
        className="fixed inset-0 z-0 bg-[url('/Camo.jpg')] bg-cover bg-center bg-fixed opacity-10" 
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        {/* HEADER SECTION */}
        <header className="relative pt-48 pb-16 px-6 overflow-hidden">
          {/* Previous /military.png background removed */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-zinc-950" />
          
          <div className="relative z-20 mx-auto max-w-7xl">
            <Link href="/" className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white mb-8 transition-colors">
              <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
              Back to Home
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Career <span className="text-emerald-500">Architecture.</span>
            </h1>
            <p className="mt-4 max-w-xl text-zinc-400 font-medium leading-relaxed">
              Choose your entry point. Whether you lead as an Officer or excel as a technical Specialist, 
              your journey is defined by discipline and professional mastery.
            </p>
          </div>
        </header>

        <main className="relative z-10 flex-grow mx-auto max-w-7xl w-full px-6 pb-24">
          {/* PATH SELECTION GRID */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {careerPaths.map((path, idx) => (
              <div key={idx} className="group relative p-8 rounded-[2.5rem] bg-black/40 backdrop-blur-xl border border-white/10 hover:border-emerald-500/30 transition-all flex flex-col">
                <div className={`h-16 w-16 ${path.bg} ${path.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <path.icon size={32} />
                </div>
                
                <h2 className="text-3xl font-black uppercase tracking-tight mb-2">{path.type}</h2>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-6">{path.rankTitle}</span>
                
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
                  {path.description}
                </p>

                {/* LIFE PATH STEPS */}
                <div className="space-y-4 mb-10">
                  <span className="text-[9px] font-black uppercase tracking-widest text-emerald-500/50">Progression Roadmap</span>
                  {path.path.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-4 group/step">
                      <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase text-white/40 leading-none mb-1">{step.step}</span>
                        <span className="text-sm font-bold text-zinc-300">{step.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <Link 
                  href={path.link}
                  className="flex items-center justify-center gap-2 h-14 w-full rounded-2xl bg-white text-black text-[11px] font-black uppercase tracking-widest hover:bg-emerald-400 transition-all hover:scale-[1.02]"
                >
                  {path.cta} <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>

          {/* BOTTOM NAVIGATION SECTION */}
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/careers/role" className="p-8 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 hover:border-emerald-500/20 transition-all group">
              <div className="flex justify-between items-start mb-4">
                <Users className="text-zinc-500 group-hover:text-emerald-500 transition-colors" size={24} />
                <ArrowRight size={20} className="text-zinc-800 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold uppercase tracking-tight">Explore Roles</h3>
              <p className="text-xs text-zinc-500 mt-1">Search the full list of available technical and tactical positions.</p>
            </Link>

            <Link href="/careers/benefits" className="p-8 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 hover:border-emerald-500/20 transition-all group">
              <div className="flex justify-between items-start mb-4">
                <Medal className="text-zinc-500 group-hover:text-emerald-500 transition-colors" size={24} />
                <ArrowRight size={20} className="text-zinc-800 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold uppercase tracking-tight">Service Benefits</h3>
              <p className="text-xs text-zinc-500 mt-1">Learn about medical, housing, and educational incentives.</p>
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
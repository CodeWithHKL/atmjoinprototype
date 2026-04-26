"use client";

import React from "react";
import Link from "next/link";
import { 
  ChevronLeft, ClipboardCheck, UserCheck, 
  Stethoscope, ShieldAlert, GraduationCap, 
  ArrowRight 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const steps = [
  {
    phase: "01",
    title: "Registration & Profile",
    icon: UserCheck,
    desc: "Create your ATMJOIN account, verify your email, and complete your basic personal profile including education and IC details.",
    requirements: ["Valid Malaysian IC", "Academic Transcripts", "Passport Photo"],
  },
  {
    phase: "02",
    title: "Eligibility Screening",
    icon: ClipboardCheck,
    desc: "The system automatically evaluates your BMI, academic qualifications, and age against the current intake requirements.",
    requirements: ["BMI 18.5 - 26.9", "SPM/STPM/Degree", "Age 18 - 25"],
  },
  {
    phase: "03",
    title: "Physical & Medical Exam",
    icon: Stethoscope,
    desc: "Selected candidates will be called for a physical fitness test (BEAT) and a comprehensive medical screening.",
    requirements: ["2.4km Run", "Push-ups/Sit-ups", "Vision/Hearing Test"],
  },
  {
    phase: "04",
    title: "Selection Board",
    icon: ShieldAlert,
    desc: "An interview with the Military Selection Board to assess your leadership potential, psychological readiness, and patriotism.",
    requirements: ["Communication Skills", "Mental Agility", "Ethical Conduct"],
  },
  {
    phase: "05",
    title: "Basic Training (RECRUIT)",
    icon: GraduationCap,
    desc: "Upon passing all stages, you will be issued an Enlistment Order to report to the designated Training Centre (Pusat Latihan).",
    requirements: ["Loyalty", "Discipline", "Physical Endurance"],
  },
];

export default function GuidePage() {
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
              Enlistment <span className="text-emerald-500">Roadmap.</span>
            </h1>
            
            <p className="mt-4 max-w-xl text-zinc-400 font-medium">
              A comprehensive guide to the transition from civilian to military personnel. 
              Follow these phases to ensure a successful application through the official ATM protocol.
            </p>
          </div>
        </header>

        {/* TIMELINE SECTION */}
        <main className="relative z-10 mx-auto max-w-4xl px-6 pb-24 flex-grow w-full">
          <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-emerald-500 before:via-zinc-800 before:to-transparent">
            
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                
                {/* Icon / Marker */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-emerald-500 bg-zinc-950 text-emerald-500 font-bold text-xs shadow-[0_0_15px_rgba(16,185,129,0.3)] z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-transform group-hover:scale-110 duration-300">
                  <step.icon size={18} />
                </div>

                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/5 transition-all group-hover:border-emerald-500/30 group-hover:bg-zinc-900/60">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black text-emerald-500 tracking-[0.3em]">{step.phase}</span>
                    <div className="h-px flex-1 mx-4 bg-white/5" />
                  </div>
                  
                  <h3 className="text-xl font-bold uppercase mb-2 group-hover:text-emerald-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6 font-medium">
                    {step.desc}
                  </p>

                  {/* Sub-requirements list */}
                  <div className="bg-black/40 rounded-2xl p-4 border border-white/5">
                    <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500 block mb-3">Key Requirements</span>
                    <div className="flex flex-wrap gap-2">
                      {step.requirements.map((req, rIdx) => (
                        <span key={rIdx} className="text-[10px] font-bold px-2 py-1 bg-white/5 border border-white/5 rounded-md text-zinc-300 transition-colors group-hover:border-emerald-500/20">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM CTA */}
          <div className="mt-24 p-1 rounded-[3rem] bg-gradient-to-b from-white/10 to-transparent">
            <div className="bg-black/60 backdrop-blur-2xl rounded-[2.9rem] p-12 text-center border border-white/5 shadow-2xl">
              <h2 className="text-2xl font-bold uppercase mb-4">Ready to initialize?</h2>
              <p className="text-zinc-500 text-sm mb-8 max-w-sm mx-auto font-medium">
                Start your Phase 01 registration today. Your future career is one click away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/signup" 
                  className="flex items-center justify-center gap-2 h-12 px-8 rounded-xl bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-emerald-400 transition-all hover:scale-105 active:scale-95"
                >
                  Begin Registration <ArrowRight size={14} />
                </Link>
                <Link 
                  href="/faq" 
                  className="flex items-center justify-center h-12 px-8 rounded-xl border border-white/10 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white/10 backdrop-blur-sm transition-all"
                >
                  Read FAQ
                </Link>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
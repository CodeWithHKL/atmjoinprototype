"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronDown, MessageSquare } from "lucide-react";

const faqData = [
  {
    category: "Enlistment & Requirements",
    questions: [
      {
        q: "What is the age limit for enlistment?",
        a: "Candidates must be between 18 and 25 years of age on the date of enlistment. Exceptions may apply for specialist roles or officer-level entries."
      },
      {
        q: "Do I need perfect vision to join?",
        a: "Vision requirements vary by branch. While some roles allow corrective lenses, others (like Pilot or Special Forces) require 6/6 vision without surgery."
      },
      {
        q: "What academic qualifications are required?",
        a: "A minimum of SPM with a pass in Bahasa Melayu and History is required for general enlistment. Higher ranks require STPM, Diploma, or Degree qualifications."
      }
    ]
  },
  {
    category: "Physical & Medical",
    questions: [
      {
        q: "What does the Physical Fitness Test (BEAT) involve?",
        a: "The BEAT test consists of a 2.4km run, push-ups, and sit-ups, all performed within specific time limits based on age and gender."
      },
      {
        q: "Are tattoos allowed?",
        a: "Tattoos are generally discouraged. Any visible tattoos while in uniform or those deemed offensive may be grounds for disqualification."
      }
    ]
  },
  {
    category: "Technical Support",
    questions: [
      {
        q: "I haven't received my OTP code.",
        a: "Check your spam/junk folder. If it still hasn't arrived after 5 minutes, ensure your email address was entered correctly and click 'Resend Code'."
      }
    ]
  }
];

export default function LoggedInFAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>("0-0");

  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-emerald-500/30 flex flex-col">
      
      {/* HEADER SECTION */}
      <header className="relative pt-48 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 grayscale bg-[url('/military.png')] bg-cover bg-center" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-zinc-950" />
        
        <div className="relative z-20 mx-auto max-w-7xl">
          <Link href="/loggedin/dashboard" className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white mb-8 transition-colors">
            <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Dashboard
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Information <span className="text-emerald-500">Center.</span>
          </h1>
          
          <p className="mt-4 max-w-xl text-zinc-400 font-medium leading-relaxed">
            Commonly asked questions regarding the ATMJOIN enlistment process and service requirements. 
            Search through our intelligence database for protocol clarity.
          </p>
        </div>
      </header>

      {/* FAQ CONTENT */}
      <main className="relative z-10 flex-grow mx-auto max-w-3xl w-full px-6 pb-24">
        <div className="space-y-12">
          {faqData.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-white/10" />
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 whitespace-nowrap">
                  {section.category}
                </h2>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <div className="space-y-3">
                {section.questions.map((item, itemIdx) => {
                  const id = `${sectionIdx}-${itemIdx}`;
                  const isOpen = openIndex === id;

                  return (
                    <div 
                      key={id} 
                      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                        isOpen ? "border-emerald-500/30 bg-white/5 shadow-2xl" : "border-white/5 bg-zinc-900/50 hover:border-white/10"
                      }`}
                    >
                      <button 
                        onClick={() => toggleFAQ(id)}
                        className="flex w-full items-center justify-between p-5 text-left"
                      >
                        <span className={`text-sm font-bold uppercase tracking-wide transition-colors ${isOpen ? "text-emerald-400" : "text-zinc-300"}`}>
                          {item.q}
                        </span>
                        <ChevronDown 
                          size={18} 
                          className={`text-zinc-500 transition-transform duration-300 ${isOpen ? "rotate-180 text-emerald-400" : ""}`} 
                        />
                      </button>
                      
                      <div 
                        className={`transition-all duration-300 ease-in-out ${
                          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="p-5 pt-0 text-sm text-zinc-400 font-medium leading-relaxed border-t border-white/5">
                          {item.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* SUPPORT TICKET CTA */}
        <div className="mt-20 p-8 rounded-[2rem] bg-zinc-900 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 transition-all hover:border-emerald-500/20">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
              <MessageSquare size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase">Still have questions?</h3>
              <p className="text-xs text-zinc-500 font-medium">Our support command is available 24/7 to assist you.</p>
            </div>
          </div>
          <button className="h-11 px-8 rounded-xl bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-emerald-400 transition-all hover:scale-105 active:scale-95 whitespace-nowrap">
            Contact Support
          </button>
        </div>
      </main>
    </div>
  );
}
"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Shield, Target, Users, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar"; 

export default function VisitorLanding() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white font-sans selection:bg-emerald-500/30">
      
      <Navbar />

      {/* HERO SECTION */}
      {/* Changed to flex-col and removed justify-center to handle flow better on small heights */}
      <section className="relative flex min-h-screen flex-col items-center pt-32 pb-12 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: "url('/military.png')" }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-zinc-950/80 to-zinc-950" />

        {/* Main Content Area - flex-grow ensures it takes up space and pushes stats down */}
        <div className="relative z-20 mx-auto flex flex-grow flex-col items-center justify-center max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">Recruitment 2026 Now Open</span>
          </div>

          <h1 className="mb-6 text-5xl font-black uppercase tracking-tighter md:text-7xl lg:text-8xl">
            Defend the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Future.</span>
          </h1>
          
          <p className="mx-auto mb-10 max-w-2xl text-lg text-zinc-400 font-medium leading-relaxed">
            Join the elite ranks of the Unified Military Command. Explore specialized career paths, 
            test your eligibility, and start your journey toward serving the nation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup" className="group flex h-14 w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-white px-8 text-sm font-black uppercase tracking-widest text-black transition-all hover:bg-emerald-400 hover:scale-105 active:scale-95">
              Begin Enlistment
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/careers" className="flex h-14 w-full sm:w-auto items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 text-sm font-black uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white/10">
              View Careers
            </Link>
          </div>
        </div>

        {/* Stats Bar - Changed from absolute to relative flow with mt-auto */}
        <div className="relative z-20 w-full px-6 mt-12 hidden md:block">
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-black text-white">250+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mt-1">Specialized Roles</div>
              </div>
              <div className="border-x border-white/10">
                <div className="text-2xl font-black text-white">100%</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mt-1">Digital Processing</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">24/7</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mt-1">Command Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ACTIONS SECTION */}
      <section className="relative z-20 py-24 px-6 bg-zinc-950">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="group p-8 rounded-[2.5rem] bg-zinc-900 border border-white/5 hover:border-emerald-500/30 transition-all cursor-pointer">
              <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold uppercase mb-3">Find Your Fit</h3>
              <p className="text-zinc-500 text-sm mb-6">Take our personality and skills assessment to find the branch that matches your profile.</p>
              <ArrowRight className="text-emerald-500 group-hover:translate-x-2 transition-transform" />
            </div>

            <div className="group p-8 rounded-[2.5rem] bg-zinc-900 border border-white/5 hover:border-emerald-500/30 transition-all cursor-pointer">
              <div className="h-12 w-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold uppercase mb-3">Compare Branches</h3>
              <p className="text-zinc-500 text-sm mb-6">Analyze benefits, requirements, and life in the Army, Navy, Air Force, and more.</p>
              <ArrowRight className="text-blue-500 group-hover:translate-x-2 transition-transform" />
            </div>

            <div className="group p-8 rounded-[2.5rem] bg-zinc-900 border border-white/5 hover:border-emerald-500/30 transition-all cursor-pointer">
              <div className="h-12 w-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold uppercase mb-3">Enlistment Guide</h3>
              <p className="text-zinc-500 text-sm mb-6">Step-by-step instructions on the documentation and physical requirements needed.</p>
              <ArrowRight className="text-purple-500 group-hover:translate-x-2 transition-transform" />
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-20 py-12 px-6 border-t border-white/5">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/atmjoin-logo.png" alt="Logo" className="h-6 w-auto opacity-50" />
            <span className="text-xs font-bold text-zinc-600 uppercase tracking-widest">© 2026 ATMJOIN. All Rights Reserved.</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-bold uppercase text-zinc-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] font-bold uppercase text-zinc-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
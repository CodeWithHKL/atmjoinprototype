"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Shield, Target, Users, ArrowRight, ClipboardCheck, GraduationCap, HeartPulse, Building2 } from "lucide-react";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer"; // Imported Footer

export default function VisitorLanding() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white font-sans selection:bg-emerald-500/30">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative flex min-h-screen flex-col items-center pt-32 pb-12 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: "url('/military.png')" }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-zinc-950/60 to-zinc-950" />

        <div className="relative z-20 mx-auto flex flex-grow flex-col items-center justify-center max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">Recruitment 2026 Now Open</span>
          </div>

          <h1 className="mb-6 text-5xl font-black uppercase tracking-tighter md:text-7xl lg:text-8xl">
            Defend the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">Future.</span>
          </h1>
          
          <p className="mx-auto mb-10 max-w-2xl text-lg text-zinc-300 font-medium leading-relaxed">
            Join the elite ranks of the Malaysian Armed Forces. Explore specialized career paths, 
            test your eligibility, and start your journey toward serving the nation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup" className="group flex h-14 w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-white px-8 text-sm font-black uppercase tracking-widest text-black transition-all hover:bg-emerald-400 hover:scale-105 active:scale-95">
              Apply Now
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/branches" className="flex h-14 w-full sm:w-auto items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-8 text-sm font-black uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white/20">
              Explore Branches
            </Link>
          </div>
        </div>

        <div className="relative z-20 w-full px-6 mt-12 hidden md:block">
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-black/30 p-8 backdrop-blur-xl">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-black text-white">250+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-1">Specialized Roles</div>
              </div>
              <div className="border-x border-white/10">
                <div className="text-2xl font-black text-white">100%</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-1">Digital Processing</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">24/7</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-1">Command Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECRUITMENT JOURNEY SECTION WITH PICTURE */}
      <section className="relative py-32 px-6 bg-zinc-950 overflow-hidden">
        <div className="relative z-20 mx-auto max-w-7xl">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-emerald-400 mb-4 drop-shadow-md">The Pipeline</h2>
            <h3 className="text-4xl font-black uppercase tracking-tighter text-white drop-shadow-lg">Your Journey to <span className="text-emerald-500">Enlistment.</span></h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side: Image */}
            <div className="relative rounded-[3rem] overflow-hidden aspect-video lg:aspect-square bg-zinc-900 border border-white/10 shadow-2xl">
              <img src="/ATM_Rally.jpeg" alt="ATM Rally" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
            </div>

            {/* Right side: Pipeline Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { step: "01", label: "Apply", desc: "Submit digital application via portal", icon: <ClipboardCheck size={20}/> },
                { step: "02", label: "Verify", desc: "Documentation review & vetting", icon: <Shield size={20}/> },
                { step: "03", label: "Assess", desc: "Physical & mental evaluations", icon: <Target size={20}/> },
                { step: "04", label: "Enlist", desc: "Begin basic training upon selection", icon: <Users size={20}/> },
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 hover:border-emerald-400/30 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-3 text-white">
                    <div className="text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">{item.icon}</div>
                    <h4 className="font-bold uppercase tracking-widest text-xs">{item.label}</h4>
                    <span className="ml-auto text-zinc-600 font-mono text-xs">{item.step}</span>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ACTIONS SECTION */}
      <section className="relative z-20 py-24 px-6 bg-zinc-950/50">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/eligibility" className="group p-8 rounded-[2.5rem] bg-zinc-900 border border-white/5 hover:border-emerald-500/30 transition-all cursor-pointer">
              <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold uppercase mb-3">Find Your Fit</h3>
              <p className="text-zinc-400 text-sm mb-6">Take our assessment to find the branch that matches your profile.</p>
              <ArrowRight className="text-emerald-500 group-hover:translate-x-2 transition-transform" />
            </Link>

            <Link href="/careers" className="group p-8 rounded-[2.5rem] bg-zinc-900 border border-white/5 hover:border-blue-500/30 transition-all cursor-pointer">
              <div className="h-12 w-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold uppercase mb-3">View Careers</h3>
              <p className="text-zinc-400 text-sm mb-6">Analyze benefits, requirements, and life in the Armed Forces.</p>
              <ArrowRight className="text-blue-500 group-hover:translate-x-2 transition-transform" />
            </Link>

            <Link href="/guide" className="group p-8 rounded-[2.5rem] bg-zinc-900 border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer">
              <div className="h-12 w-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold uppercase mb-3">Application Guide</h3>
              <p className="text-zinc-400 text-sm mb-6">Step-by-step instructions on documentation and requirements.</p>
              <ArrowRight className="text-purple-500 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-24 px-6 bg-zinc-900/40 border-t border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-xs font-black uppercase tracking-[0.5em] text-emerald-500 mb-4">Incentives</h2>
              <h3 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-none text-white">Beyond the <span className="text-zinc-400">Uniform.</span></h3>
              <div className="space-y-6">
                {[
                  { title: "Education", desc: "Fully funded degree and diploma programs at military academies.", icon: <GraduationCap className="text-emerald-400"/> },
                  { title: "Medical", desc: "Comprehensive healthcare for you and your immediate family.", icon: <HeartPulse className="text-blue-400"/> },
                  { title: "Housing", desc: "Competitive allowances and priority housing across strategic bases.", icon: <Building2 className="text-purple-400"/> },
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm group hover:border-white/20 transition-all">
                    <div className="mt-1 transition-transform group-hover:scale-110">{benefit.icon}</div>
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-sm mb-1">{benefit.title}</h4>
                      <p className="text-zinc-400 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-[3rem] overflow-hidden aspect-square bg-zinc-800 shadow-2xl">
               <img src="/militaryfamily.png" alt="Military Training" className="w-full h-full object-cover opacity-80" />
               <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
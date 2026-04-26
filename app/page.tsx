"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Shield, Target, Users, ArrowRight, ClipboardCheck, GraduationCap, HeartPulse, Building2 } from "lucide-react";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";

export default function VisitorLanding() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white font-sans selection:bg-emerald-500/30">
      {/* GLOBAL FIXED CAMO BACKGROUND */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40" 
        style={{ 
          backgroundImage: "url('/Camo.jpg')",
          backgroundAttachment: "fixed" 
        }} 
      />
      {/* Dark overlay for readability */}
      <div className="fixed inset-0 z-0 bg-zinc-950/80" />

      <div className="relative z-10">
        <Navbar />

        {/* HERO SECTION - Keeps its own background */}
        <section className="relative flex min-h-screen flex-col items-center pt-32 pb-12 overflow-hidden bg-zinc-950">
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

          {/* BRANCH LOGOS SECTION */}
          <div className="relative z-20 w-full px-6 mt-12 block">
            <div className="mx-auto max-w-5xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {[
                  { id: "TDM", logo: "/TDM_Logo.png", name: "Tentera Darat", color: "border-emerald-500/20 bg-emerald-500/5 shadow-emerald-500/5" },
                  { id: "TLDM", logo: "/TLDM_Logo.png", name: "Tentera Laut", color: "border-blue-500/20 bg-blue-500/5 shadow-blue-500/5" },
                  { id: "TUDM", logo: "/TUDM_Logo.png", name: "Tentera Udara", color: "border-cyan-500/20 bg-cyan-500/5 shadow-cyan-500/5" }
                ].map((branch) => (
                  <div 
                    key={branch.id}
                    className={`group relative overflow-hidden rounded-2xl border p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/40 ${branch.color} hover:shadow-2xl`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="relative z-10">
                        <div className="text-2xl font-black tracking-tighter text-white">{branch.id}</div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300 group-hover:text-white transition-colors">
                          {branch.name}
                        </div>
                      </div>
                      <img 
                        src={branch.logo} 
                        alt={branch.id} 
                        className="h-12 md:h-14 w-auto object-contain transition-all duration-500 group-hover:scale-110 drop-shadow-md" 
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-white/5 blur-3xl transition-opacity group-hover:opacity-100" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT ATM SECTION - Background transparent to show Camo */}
        <section className="relative py-24 px-6 bg-transparent">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-xs font-black uppercase tracking-[0.5em] text-emerald-500 mb-4 text-center lg:text-left">The Guardian</h2>
                <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-tight text-white text-center lg:text-left">
                  Malaysian Armed Forces: <span className="text-zinc-400">Sovereignty and Pride.</span>
                </h3>
                <div className="space-y-6 text-zinc-300 text-lg leading-relaxed text-center lg:text-left">
                  <p>
                    The Malaysian Armed Forces (ATM) stand as the bedrock of national stability, protecting our borders and people across land, sea, and air. 
                  </p>
                  <p>
                    Built on a foundation of discipline, courage, and technological superiority, we offer more than just a career—we offer a lifetime of honor and a chance to shape the future of our nation.
                  </p>
                  <div className="pt-4 flex flex-col md:flex-row gap-8 items-center lg:items-start justify-center lg:justify-start">
                     <div className="flex flex-col items-center lg:items-start">
                        <span className="text-3xl font-black text-white tracking-tighter">1933</span>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-500">Legacy Established</span>
                     </div>
                     <div className="h-8 w-px bg-white/10 hidden md:block"></div>
                     <div className="flex flex-col items-center lg:items-start">
                        <span className="text-3xl font-black text-white tracking-tighter">3 Branches</span>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-500">Unified Defense</span>
                     </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-emerald-500/20 to-blue-500/20 opacity-75 blur-2xl transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl">
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    muted
                    playsInline
                    poster="/military.png"
                  >
                    <source src="/Promo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RECRUITMENT JOURNEY SECTION - Transparent bg */}
        <section className="relative py-32 px-6 bg-transparent overflow-hidden">
          <div className="relative z-20 mx-auto max-w-7xl">
            <div className="mb-16 text-center md:text-left">
              <h2 className="text-xs font-black uppercase tracking-[0.5em] text-emerald-400 mb-4 drop-shadow-md">The Pipeline</h2>
              <h3 className="text-4xl font-black uppercase tracking-tighter text-white drop-shadow-lg">Your Journey to <span className="text-emerald-500">Enlistment.</span></h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-[3rem] overflow-hidden aspect-video lg:aspect-square bg-zinc-900/50 border border-white/10 shadow-2xl backdrop-blur-sm">
                <img src="/ATM_Rally.jpeg" alt="ATM Rally" className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { step: "01", label: "Apply", desc: "Submit digital application via portal", icon: <ClipboardCheck size={20}/> },
                  { step: "02", label: "Verify", desc: "Documentation review & vetting", icon: <Shield size={20}/> },
                  { step: "03", label: "Assess", desc: "Physical & mental evaluations", icon: <Target size={20}/> },
                  { step: "04", label: "Enlist", desc: "Begin basic training upon selection", icon: <Users size={20}/> },
                ].map((item, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md group hover:bg-white/10 hover:border-emerald-400/30 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-3 text-white">
                      <div className="text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">{item.icon}</div>
                      <h4 className="font-bold uppercase tracking-widest text-xs">{item.label}</h4>
                      <span className="ml-auto text-zinc-500 font-mono text-xs">{item.step}</span>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION - Transparent bg with subtle top border */}
        <section className="py-24 px-6 bg-transparent border-t border-white/5">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="flex flex-col">
                <h2 className="text-xs font-black uppercase tracking-[0.5em] text-emerald-500 mb-4 text-center lg:text-left">Incentives</h2>
                <h3 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-none text-white text-center lg:text-left">Beyond the <span className="text-zinc-400">Uniform.</span></h3>
                
                <div className="relative mb-8 rounded-[2rem] overflow-hidden aspect-video bg-zinc-800/50 shadow-2xl block lg:hidden">
                   <img src="/militaryfamily.png" alt="Military Training" className="w-full h-full object-cover opacity-80" />
                   <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
                </div>

                <div className="space-y-6">
                  {[
                    { title: "Education", desc: "Fully funded degree and diploma programs at military academies.", icon: <GraduationCap className="text-emerald-400"/> },
                    { title: "Medical", desc: "Comprehensive healthcare for you and your immediate family.", icon: <HeartPulse className="text-blue-400"/> },
                    { title: "Housing", desc: "Competitive allowances and priority housing across strategic bases.", icon: <Building2 className="text-purple-400"/> },
                  ].map((benefit, i) => (
                    <div key={i} className="flex gap-4 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md group hover:border-white/20 transition-all">
                      <div className="mt-1 transition-transform group-hover:scale-110">{benefit.icon}</div>
                      <div>
                        <h4 className="font-bold uppercase tracking-widest text-sm mb-1">{benefit.title}</h4>
                        <p className="text-zinc-400 text-sm">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}

                  <Link 
                    href="/careers/benefits" 
                    className="flex items-center justify-center gap-3 w-full h-14 rounded-2xl border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-emerald-500 hover:text-black hover:border-emerald-500 transition-all group"
                  >
                    View Full Salary & Allowance
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="relative rounded-[3rem] overflow-hidden aspect-square bg-zinc-800/50 shadow-2xl hidden lg:block border border-white/10 backdrop-blur-sm">
                 <img src="/militaryfamily.png" alt="Military Training" className="w-full h-full object-cover opacity-80" />
                 <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* QUICK ACTIONS SECTION - Transparent bg */}
        <section className="relative z-20 py-24 px-6 bg-transparent">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center md:text-left">
              <h2 className="text-xs font-black uppercase tracking-[0.5em] text-emerald-500 mb-4">Explore</h2>
              <h3 className="text-5xl font-black uppercase tracking-tighter text-white">Explore <span className="text-zinc-400">More.</span></h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { href: "/eligibility", icon: <Target size={24} />, color: "emerald", title: "Find Your Fit", desc: "Take our assessment to find the branch that matches your profile." },
                { href: "/careers", icon: <Shield size={24} />, color: "blue", title: "View Careers", desc: "Analyze benefits, requirements, and life in the Armed Forces." },
                { href: "/guide", icon: <Users size={24} />, color: "purple", title: "Application Guide", desc: "Step-by-step instructions on documentation and requirements." }
              ].map((action, i) => (
                <Link key={i} href={action.href} className={`group p-8 rounded-[2.5rem] bg-zinc-900/60 border border-white/5 hover:border-${action.color}-500/30 transition-all backdrop-blur-md cursor-pointer`}>
                  <div className={`h-12 w-12 rounded-2xl bg-${action.color}-500/10 flex items-center justify-center text-${action.color}-400 mb-6`}>
                    {action.icon}
                  </div>
                  <h3 className="text-xl font-bold uppercase mb-3">{action.title}</h3>
                  <p className="text-zinc-400 text-sm mb-6">{action.desc}</p>
                  <ArrowRight className={`text-${action.color}-500 group-hover:translate-x-2 transition-transform`} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
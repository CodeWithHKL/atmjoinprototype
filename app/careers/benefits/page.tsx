"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ChevronLeft, Wallet, Stethoscope, Home, 
  GraduationCap, TrendingUp, Award, Anchor, Plane, Shield
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Branch = 'TDM' | 'TLDM' | 'TUDM';

const branchConfig = {
  TDM: { label: "Army", icon: Shield, color: "bg-emerald-600", logo: "/TDM_Logo.png" },
  TLDM: { label: "Navy", icon: Anchor, color: "bg-blue-600", logo: "/TLDM_Logo.png" },
  TUDM: { label: "Air Force", icon: Plane, color: "bg-sky-500", logo: "/TUDM_Logo.png" },
};

const salaryData: Record<Branch, { rank: string; level: string; base: string; allowance: string }[]> = {
  TDM: [
    { rank: "Colonel (KOL)", level: "Officer", base: "RM 7,116 - RM 13,383", allowance: "RM 2,500" },
    { rank: "Major (MEJ)", level: "Officer", base: "RM 4,874 - RM 11,273", allowance: "RM 2,000" },
    { rank: "Captain (KAPT)", level: "Officer", base: "RM 3,747 - RM 9,933", allowance: "RM 1,800" },
    { rank: "Lieutenant (LT)", level: "Officer", base: "RM 2,866 - RM 8,762", allowance: "RM 1,500" },
    { rank: "Warrant Officer I (PW I)", level: "Enlisted", base: "RM 3,694 - RM 7,204", allowance: "RM 1,200" },
    { rank: "Staff Sergeant (SJN SS)", level: "Enlisted", base: "RM 2,624 - RM 5,745", allowance: "RM 1,000" },
    { rank: "Corporal (KPL)", level: "Enlisted", base: "RM 1,947 - RM 4,834", allowance: "RM 800" },
    { rank: "Private (PBT)", level: "Enlisted", base: "RM 1,564 - RM 3,363", allowance: "RM 800" },
  ],
  TLDM: [
    { rank: "Captain (KPT)", level: "Officer", base: "RM 7,116 - RM 13,383", allowance: "RM 2,500" },
    { rank: "Commander (KDR)", level: "Officer", base: "RM 4,874 - RM 11,273", allowance: "RM 2,000" },
    { rank: "Lieutenant (LT)", level: "Officer", base: "RM 3,747 - RM 9,933", allowance: "RM 1,800" },
    { rank: "Sub-Lieutenant (LT M)", level: "Officer", base: "RM 2,866 - RM 8,762", allowance: "RM 1,500" },
    { rank: "Warrant Officer I (PW I)", level: "Enlisted", base: "RM 3,694 - RM 7,204", allowance: "RM 1,200" },
    { rank: "Chief Petty Officer (BINTARA KANAN)", level: "Enlisted", base: "RM 2,624 - RM 5,745", allowance: "RM 1,000" },
    { rank: "Leading Rate (LASKAR KANAN)", level: "Enlisted", base: "RM 1,947 - RM 4,834", allowance: "RM 800" },
    { rank: "Able Rate (LASKAR KELAS I)", level: "Enlisted", base: "RM 1,564 - RM 3,363", allowance: "RM 800" },
  ],
  TUDM: [
    { rank: "Colonel (KOL U)", level: "Officer", base: "RM 7,116 - RM 13,383", allowance: "RM 2,500" },
    { rank: "Major (MEJ U)", level: "Officer", base: "RM 4,874 - RM 11,273", allowance: "RM 2,000" },
    { rank: "Captain (KAPT U)", level: "Officer", base: "RM 3,747 - RM 9,933", allowance: "RM 1,800" },
    { rank: "Lieutenant (LT U)", level: "Officer", base: "RM 2,866 - RM 8,762", allowance: "RM 1,500" },
    { rank: "Warrant Officer I (PW U I)", level: "Enlisted", base: "RM 3,694 - RM 7,204", allowance: "RM 1,200" },
    { rank: "Flight Sergeant (FSJN)", level: "Enlisted", base: "RM 2,624 - RM 5,745", allowance: "RM 1,000" },
    { rank: "Corporal (KPL U)", level: "Enlisted", base: "RM 1,947 - RM 4,834", allowance: "RM 800" },
    { rank: "Aircraftman (LU KELAS I)", level: "Enlisted", base: "RM 1,564 - RM 3,363", allowance: "RM 800" },
  ]
};

export default function BenefitsPage() {
  const [activeBranch, setActiveBranch] = useState<Branch>('TDM');

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white font-sans selection:bg-emerald-500/30 flex flex-col">
      {/* GLOBAL FIXED BACKGROUND */}
      <div 
        className="fixed inset-0 z-0 bg-[url('/Camo.jpg')] bg-cover bg-center bg-fixed opacity-10" 
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <header className="relative pt-48 pb-16 px-6 overflow-hidden">
          {/* Previous /military.png background removed */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-zinc-950" />
          
          <div className="relative z-20 mx-auto max-w-7xl">
            <Link href="/careers" className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white mb-8 transition-colors">
              <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
              Back to Career Hub
            </Link>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Benefits & <span className="text-emerald-500">Incentives.</span>
            </h1>
          </div>
        </header>

        <main className="relative z-10 flex-grow mx-auto max-w-7xl w-full px-6 pb-24">
          
          {/* LOGO AND BRANCH TOGGLE SECTION */}
          <div className="flex flex-col items-center mb-12">
            <div className="mb-8 h-32 flex items-center justify-center animate-in fade-in zoom-in duration-500">
              <img 
                src={branchConfig[activeBranch].logo} 
                alt={`${activeBranch} Logo`} 
                className="h-full w-auto object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.1)]"
              />
            </div>

            <div className="bg-zinc-900/60 p-1.5 rounded-2xl border border-white/10 flex gap-1 backdrop-blur-2xl">
              {(Object.keys(branchConfig) as Branch[]).map((branch) => {
                const Icon = branchConfig[branch].icon;
                return (
                  <button
                    key={branch}
                    onClick={() => setActiveBranch(branch)}
                    className={`flex items-center gap-3 px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                      activeBranch === branch 
                      ? `${branchConfig[branch].color} text-white shadow-lg` 
                      : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
                    }`}
                  >
                    <Icon size={16} />
                    {branch}
                  </button>
                );
              })}
            </div>
          </div>

          {/* SALARY TABLE */}
          <section className="mb-20 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10">
                    <th className="p-6 text-[10px] font-black uppercase tracking-widest text-zinc-500">Rank ({activeBranch})</th>
                    <th className="p-6 text-[10px] font-black uppercase tracking-widest text-zinc-500">Tier</th>
                    <th className="p-6 text-[10px] font-black uppercase tracking-widest text-zinc-500">Base Salary</th>
                    <th className="p-6 text-[10px] font-black uppercase tracking-widest text-zinc-500">Fixed Allowances</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {salaryData[activeBranch].map((item, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="p-6">
                        <span className="text-sm font-bold group-hover:text-emerald-400 transition-colors">{item.rank}</span>
                      </td>
                      <td className="p-6">
                        <span className={`text-[9px] font-black px-2 py-1 rounded border ${
                          item.level === "Officer" ? "border-emerald-500/20 text-emerald-500" : "border-zinc-700 text-zinc-500"
                        } uppercase`}>
                          {item.level}
                        </span>
                      </td>
                      <td className="p-6 font-mono text-sm text-zinc-300">{item.base}</td>
                      <td className="p-6 font-mono text-sm text-zinc-300">{item.allowance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* PERKS GRID */}
          <section className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Stethoscope, title: "Medical", desc: "Full coverage for personnel and family." },
              { icon: Home, title: "Housing", desc: "Subsidized quarters or housing allowance." },
              { icon: GraduationCap, title: "Education", desc: "Sponsorship for further studies." },
              { icon: Award, title: "Pension", desc: "Lifetime retirement pension after service." },
            ].map((perk, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 transition-all hover:border-emerald-500/40">
                <div className="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6">
                  <perk.icon size={20} />
                </div>
                <h3 className="text-sm font-bold uppercase mb-2">{perk.title}</h3>
                <p className="text-[11px] text-zinc-500 leading-relaxed font-medium">{perk.desc}</p>
              </div>
            ))}
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, HardHat, Crosshair, Zap, ChevronLeft } from "lucide-react";

const branches = [
  {
    id: "tdm",
    name: "Army",
    path: "/branches/army",
    fullName: "Tentera Darat Malaysia",
    motto: "Gagah Setia",
    logo: "/TDM_Logo.png",
    image: "/army-bg.jpg", 
    accent: "emerald",
    gradient: "from-emerald-600/40 to-zinc-950",
    description: "The backbone of national defense, specializing in land warfare, counter-insurgency, and territorial sovereignty.",
    stats: { careers: "120+", bases: "14 Major", personnel: "80k+" },
    details: [
      { label: "Elite Unit", value: "Grup Gerak Khas (GGK)", icon: <Crosshair size={14}/> },
      { label: "Primary Role", value: "Land Combat", icon: <Zap size={14}/> },
      { label: "Tech Focus", value: "Ballistics & Logistics", icon: <HardHat size={14}/> }
    ]
  },
  {
    id: "tldm",
    name: "Navy",
    path: "/branches/navy",
    fullName: "Tentera Laut Diraja Malaysia",
    motto: "Sedia Berkorban",
    logo: "/TLDM_Logo.png",
    image: "/navy-bg.jpg",
    accent: "blue",
    gradient: "from-blue-600/40 to-zinc-950",
    description: "Guardians of the maritime realm, protecting Malaysia's Exclusive Economic Zone and strategic waterways.",
    stats: { careers: "85+", bases: "5 Strategic", personnel: "15k+" },
    details: [
      { label: "Elite Unit", value: "PASKAL", icon: <Crosshair size={14}/> },
      { label: "Primary Role", value: "Maritime Defense", icon: <Zap size={14}/> },
      { label: "Tech Focus", value: "Sonar & Navigation", icon: <HardHat size={14}/> }
    ]
  },
  {
    id: "tudm",
    name: "Air Force",
    path: "/branches/airforce",
    fullName: "Tentera Udara Diraja Malaysia",
    motto: "Sentiasa di Angkasa Raya",
    logo: "/TUDM_Logo.png",
    image: "/airforce-bg.jpg",
    accent: "cyan",
    gradient: "from-cyan-600/40 to-zinc-950",
    description: "The shield of the skies, utilizing advanced aerospace technology to ensure aerial superiority and rapid response.",
    stats: { careers: "60+", bases: "8 Regional", personnel: "12k+" },
    details: [
      { label: "Elite Unit", value: "PASKAU", icon: <Crosshair size={14}/> },
      { label: "Primary Role", value: "Air Superiority", icon: <Zap size={14}/> },
      { label: "Tech Focus", value: "Avionics & Radar", icon: <HardHat size={14}/> }
    ]
  }
];

export default function BranchesPage() {
  const [hoveredBranch, setHoveredBranch] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white font-sans selection:bg-emerald-500/30">
      {/* GLOBAL FIXED BACKGROUND */}
      <div 
        className="fixed inset-0 z-0 bg-[url('/Camo.jpg')] bg-cover bg-center bg-fixed opacity-10" 
        aria-hidden="true"
      />
      
      <div className="relative z-10">
        <Navbar />

        {/* HEADER SECTION */}
        <header className="relative pt-48 pb-16 px-6 overflow-hidden">
          {/* Previous /military.png background removed */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-zinc-950" />
          
          <div className="relative z-20 mx-auto max-w-7xl">
            <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors mb-8">
              <ChevronLeft size={14} /> Back to Home
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Choose Your <span className="text-emerald-500">Domain.</span>
            </h1>
            
            <p className="mt-4 max-w-xl text-zinc-400">
              The Malaysian Armed Forces operates across land, sea, and air. 
              Select a branch to explore specialized career paths and military domains.
            </p>
          </div>
        </header>

        <main className="flex flex-col">
          {/* 3-Column Grid */}
          <div className="flex-grow grid grid-cols-1 lg:grid-cols-3 w-full border-t border-white/5">
            {branches.map((branch) => (
              <div 
                key={branch.id}
                onMouseEnter={() => setHoveredBranch(branch.id)}
                onMouseLeave={() => setHoveredBranch(null)}
                className={`relative flex flex-col border-r border-white/5 group transition-all duration-700 overflow-hidden min-h-[600px] ${
                  hoveredBranch && hoveredBranch !== branch.id ? "opacity-30 grayscale scale-[0.98]" : "opacity-100"
                }`}
              >
                <div 
                  className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-20 group-hover:opacity-40"
                  style={{ backgroundImage: `url('${branch.image}')` }}
                />

                <div className={`absolute inset-0 bg-gradient-to-b ${branch.gradient} z-0 opacity-80 group-hover:opacity-90 transition-opacity duration-700`} />
                
                <div className="relative z-10 p-12 flex flex-col h-full">
                  <div className="mb-12">
                    <div className="mb-8 relative w-20 h-20">
                      <img 
                          src={branch.logo} 
                          alt={`${branch.name} Logo`} 
                          className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-500" 
                      />
                    </div>
                    <h2 className="text-5xl font-black uppercase tracking-tighter mb-1 group-hover:translate-x-2 transition-transform duration-500">{branch.name}</h2>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-6">{branch.fullName}</p>
                    <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-[9px] font-black uppercase tracking-widest italic text-white/80">
                      "{branch.motto}"
                    </div>
                  </div>

                  <div className="space-y-6 mb-12">
                    {branch.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-4 group/item">
                        <div className={`text-zinc-500 group-hover/item:text-${branch.accent}-400 transition-colors`}>{detail.icon}</div>
                        <div>
                          <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">{detail.label}</p>
                          <p className="text-xs font-black uppercase tracking-tight text-zinc-200">{detail.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-10 group-hover:text-white transition-colors duration-500">
                    {branch.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 py-8 border-y border-white/10 mb-10 bg-black/20 backdrop-blur-sm px-4 rounded-xl">
                    <div className="text-center">
                      <p className="text-xl font-black">{branch.stats.careers}</p>
                      <p className="text-[8px] font-black text-zinc-500 uppercase tracking-widest">Roles</p>
                    </div>
                    <div className="text-center border-x border-white/10">
                      <p className="text-xl font-black">{branch.stats.bases}</p>
                      <p className="text-[8px] font-black text-zinc-500 uppercase tracking-widest">Bases</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-black">{branch.stats.personnel}</p>
                      <p className="text-[8px] font-black text-zinc-500 uppercase tracking-widest">Active</p>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <Link 
                      href={branch.path} 
                      className="group/btn relative w-full flex items-center justify-between p-6 rounded-2xl bg-white text-black transition-all hover:bg-emerald-400 hover:scale-[1.02] active:scale-95 shadow-2xl"
                    >
                      <span className="text-[11px] font-black uppercase tracking-[0.2em]">Explore Branch</span>
                      <ArrowRight className="group-hover/btn:translate-x-2 transition-transform" size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* EXACT CAREERS PAGE THEME CTA */}
          <div className="mx-auto max-w-7xl px-6 w-full">
              <div className="mt-20 mb-24 p-12 rounded-[3rem] bg-black/40 backdrop-blur-xl border border-white/10 text-center">
                  <h2 className="text-2xl font-bold uppercase mb-4">Not sure which path to take?</h2>
                  <p className="text-zinc-400 mb-8 max-w-lg mx-auto text-sm">
                      Our career matching algorithm analyzes your education and physical profile to suggest the most suitable military roles.
                  </p>
                  <Link 
                      href="/eligibility/assessment"
                      className="inline-flex h-12 items-center px-8 rounded-xl bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-zinc-200 transition-all shadow-lg"
                  >
                      Take the Fit Quiz
                  </Link>
              </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
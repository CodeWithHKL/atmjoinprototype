"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";
import { Search, ArrowRight, ChevronLeft } from "lucide-react";

const categories = ["All", "TDM", "TLDM", "TUDM"];

const careers = [
  {
    id: 1,
    title: "Special Forces Operator",
    branch: "TDM",
    logo: "/TDM_Logo.png",
    color: "text-emerald-400",
    desc: "Elite tactical operations and unconventional warfare specialist.",
  },
  {
    id: 2,
    title: "Cyber Security Analyst",
    branch: "TUDM",
    logo: "/TUDM_Logo.png",
    color: "text-blue-400",
    desc: "Defend national digital infrastructure from global threats.",
  },
  {
    id: 3,
    title: "Marine Engineer",
    branch: "TLDM",
    logo: "/TLDM_Logo.png",
    color: "text-cyan-400",
    desc: "Maintain and operate complex propulsion systems on naval vessels.",
  },
  {
    id: 4,
    title: "Flight Surgeon",
    branch: "TUDM",
    logo: "/TUDM_Logo.png",
    color: "text-purple-400",
    desc: "Specialized medical support for pilots and aircrew operations.",
  },
  {
    id: 5,
    title: "Avionics Technician",
    branch: "TUDM",
    logo: "/TUDM_Logo.png",
    color: "text-orange-400",
    desc: "Precision maintenance of advanced aircraft electronic systems.",
  },
  {
    id: 6,
    title: "Navigation Officer",
    branch: "TLDM",
    logo: "/TLDM_Logo.png",
    color: "text-yellow-400",
    desc: "Strategic naval movement and fleet coordination at sea.",
  },
];

export default function CareersPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCareers = careers.filter((career) => {
    const matchesCategory = activeCategory === "All" || career.branch === activeCategory;
    const matchesSearch = career.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          career.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-zinc-950" />
          
          <div className="relative z-20 mx-auto max-w-7xl">
            <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors mb-8">
              <ChevronLeft size={14} /> Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Career <span className="text-emerald-500">Specialties</span>
            </h1>
            <p className="mt-4 max-w-xl text-zinc-400 font-medium">
              From frontline defense to high-tech cyber operations, discover where your skills are needed most in the ATM. 
            </p>
          </div>
        </header>

        {/* SEARCH & FILTER BAR */}
        <section className="sticky top-[88px] z-40 px-6 py-4 bg-black/60 backdrop-blur-2xl border-y border-white/10">
          <div className="mx-auto max-w-7xl flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
              <input 
                type="text" 
                placeholder="Search roles (e.g. Engineer)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 text-sm outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all placeholder:text-zinc-600"
              />
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap border ${
                    activeCategory === cat 
                    ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]" 
                    : "bg-black/40 text-zinc-400 border-white/10 hover:border-white/30 backdrop-blur-md"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* CAREERS GRID */}
        <main className="mx-auto max-w-7xl px-6 mt-12 mb-32 flex-grow w-full">
          {filteredCareers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCareers.map((career) => (
                <div 
                  key={career.id}
                  className="group relative p-8 rounded-[2rem] bg-black/40 backdrop-blur-xl border border-white/10 hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Dynamic Background Glow */}
                  <div className={`absolute -right-4 -top-4 h-24 w-24 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity ${career.color.replace('text', 'bg')}`} />

                  <div className="flex justify-between items-start mb-6">
                    <div className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-2 transition-transform group-hover:scale-110 duration-500">
                      <img 
                        src={career.logo} 
                        alt={career.branch} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-white/5 text-zinc-500 border border-white/5">
                      {career.branch}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold uppercase tracking-tight mb-2 group-hover:text-emerald-400 transition-colors">
                    {career.title}
                  </h3>
                  
                  <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                    {career.desc}
                  </p>

                  <button 
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white group-hover:gap-4 transition-all cursor-default"
                  >
                    View Information <ArrowRight size={14} className="text-emerald-500" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-zinc-600 uppercase tracking-widest text-xs font-bold">No roles found matching your search.</p>
            </div>
          )}

          {/* CALL TO ACTION */}
          <div className="mt-20 p-12 rounded-[3rem] bg-black/40 backdrop-blur-xl border border-white/10 text-center shadow-2xl">
            <h2 className="text-2xl font-bold uppercase mb-4">Not sure which path to take?</h2>
            <p className="text-zinc-500 mb-8 max-w-lg mx-auto text-sm font-medium">
              Our career matching algorithm analyzes your education and physical profile to suggest the most suitable military roles.
            </p>
            <Link 
              href="/eligibility/assessment"
              className="inline-flex h-12 items-center px-8 rounded-xl bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-emerald-400 transition-all hover:scale-105 active:scale-95 shadow-xl"
            >
              Take the Fit Quiz
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
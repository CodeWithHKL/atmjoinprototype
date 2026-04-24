"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { Anchor, Crosshair, Zap, Compass, ChevronRight, Droplets, Waves, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function NavyBranch() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-blue-500/30">
      <Navbar />

      <main className="pt-24">
        {/* HERO VISUAL SECTION */}
        <section className="relative h-[60vh] w-full overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-zinc-900">
            <img 
              src="/images/navy-hero.jpg" 
              alt="TLDM Frigate" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
          </div>

          <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 rounded-xl bg-blue-500 flex items-center justify-center text-black">
                <Anchor size={28} />
              </div>
              <span className="text-sm font-black uppercase tracking-[0.4em] text-blue-400">Maritime Domain</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4">Tentera <span className="text-blue-500">Laut</span></h1>
            <p className="text-zinc-400 max-w-2xl text-lg font-medium leading-relaxed">
              Guardians of the Strategic Waterways. TLDM secures Malaysia’s 600,000sq km maritime zone, protecting our economic future and national peace.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-zinc-500 mb-8">Fleet Command Dossier</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5">
                <Waves className="text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">PASKAL</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">The Naval Special Warfare Forces. Experts in maritime counter-terrorism and hostage rescue.</p>
              </div>
              <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5">
                <Compass className="text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Submarine Force</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">Advanced stealth capabilities operating deep beneath the surface to provide strategic deterrence.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="p-8 rounded-[2rem] bg-blue-600 text-white">
              <h4 className="font-black uppercase tracking-widest text-[10px] mb-6 opacity-70 text-blue-100">Naval Strength</h4>
              <div className="space-y-6">
                <div className="flex justify-between items-end border-b border-white/10 pb-2">
                  <span className="text-xs font-bold uppercase">Bases</span>
                  <span className="text-2xl font-black">5 Strategic</span>
                </div>
                <div className="flex justify-between items-end border-b border-white/10 pb-2">
                  <span className="text-xs font-bold uppercase">Roles</span>
                  <span className="text-2xl font-black">85+ Specializations</span>
                </div>
              </div>
              <Link href="/assessment" className="mt-10 w-full h-14 bg-white text-black rounded-xl flex items-center justify-center gap-2 font-black uppercase text-[11px] tracking-widest hover:bg-blue-100 transition-all">
                Join the Fleet <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
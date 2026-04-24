"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { Plane, Crosshair, Zap, Wind, ChevronRight, Radio, Cpu, CloudLightning } from "lucide-react";
import Link from "next/link";

export default function AirForceBranch() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-cyan-500/30">
      <Navbar />

      <main className="pt-24">
        {/* HERO VISUAL SECTION */}
        <section className="relative h-[60vh] w-full overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-zinc-900">
            <img 
              src="/images/airforce-hero.jpg" 
              alt="TUDM Sukhoi" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
          </div>

          <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 rounded-xl bg-cyan-500 flex items-center justify-center text-black">
                <Plane size={28} />
              </div>
              <span className="text-sm font-black uppercase tracking-[0.4em] text-cyan-400">Air Domain</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4">Tentera <span className="text-cyan-500">Udara</span></h1>
            <p className="text-zinc-400 max-w-2xl text-lg font-medium leading-relaxed">
              Air Superiority Secured. TUDM utilizes cutting-edge avionics and rapid response tactics to protect the Malaysian airspace 24/7.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-zinc-500 mb-8">Aerospace Command Dossier</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5">
                <CloudLightning className="text-cyan-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">PASKAU</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">Air Force Special Forces specializing in Combat Search and Rescue (CSAR) and Air Base Defense.</p>
              </div>
              <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5">
                <Cpu className="text-cyan-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">High-Tech Avionics</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">Engineering careers at the edge of possibility, maintaining Su-30MKM and F/A-18D Hornet platforms.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="p-8 rounded-[2rem] bg-cyan-500 text-black">
              <h4 className="font-black uppercase tracking-widest text-[10px] mb-6 opacity-70">Aerial Strength</h4>
              <div className="space-y-6">
                <div className="flex justify-between items-end border-b border-black/10 pb-2">
                  <span className="text-xs font-bold uppercase">Personnel</span>
                  <span className="text-2xl font-black">12,000+</span>
                </div>
                <div className="flex justify-between items-end border-b border-black/10 pb-2">
                  <span className="text-xs font-bold uppercase">Bases</span>
                  <span className="text-2xl font-black">8 Regional</span>
                </div>
              </div>
              <Link href="/assessment" className="mt-10 w-full h-14 bg-black text-white rounded-xl flex items-center justify-center gap-2 font-black uppercase text-[11px] tracking-widest hover:scale-105 transition-transform">
                Apply for Cadet <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
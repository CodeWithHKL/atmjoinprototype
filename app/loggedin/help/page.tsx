"use client";

import React from "react";
import Link from "next/link";
import { 
  ChevronLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ShieldAlert,
  Globe,
  FileText
} from "lucide-react";

export default function HelpPage() {
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
            Support <span className="text-emerald-500">Command.</span>
          </h1>
          
          <p className="mt-4 max-w-xl text-zinc-400 font-medium leading-relaxed">
            Direct communication channels for recruitment inquiries, technical assistance, and administrative support within the Malaysian Armed Forces (ATM).
          </p>
        </div>
      </header>

      <main className="relative z-10 flex-grow mx-auto max-w-7xl w-full px-6 pb-24">
        
        {/* CONTACT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* PRIMARY CONTACT */}
          <div className="p-8 rounded-[2.5rem] bg-zinc-900 border border-white/5 backdrop-blur-sm">
            <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6">
              <Phone size={24} />
            </div>
            <h3 className="text-lg font-bold uppercase mb-2">Recruitment Hotline</h3>
            <p className="text-xs text-zinc-500 mb-6 uppercase tracking-widest font-black">Voice Ops</p>
            <div className="space-y-4">
              <p className="text-2xl font-black text-white">+603-2071 2010</p>
              <p className="text-sm text-zinc-400">+603-2071 4254 (Fax)</p>
            </div>
          </div>

          {/* EMAIL CHANNELS */}
          <div className="p-8 rounded-[2.5rem] bg-zinc-900 border border-white/5 backdrop-blur-sm">
            <div className="h-12 w-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
              <Mail size={24} />
            </div>
            <h3 className="text-lg font-bold uppercase mb-2">Digital Inquiries</h3>
            <p className="text-xs text-zinc-500 mb-6 uppercase tracking-widest font-black">Data Comms</p>
            <div className="space-y-4">
              <a href="mailto:pengambilan@mod.gov.my" className="block text-lg font-bold text-white hover:text-emerald-400 transition-colors">pengambilan@mod.gov.my</a>
              <a href="mailto:admin.atmjoin@mod.gov.my" className="block text-sm text-zinc-400 hover:text-emerald-400 transition-colors">admin.atmjoin@mod.gov.my</a>
            </div>
          </div>

          {/* HOURS OF OPERATION */}
          <div className="p-8 rounded-[2.5rem] bg-zinc-900 border border-white/5 backdrop-blur-sm">
            <div className="h-12 w-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6">
              <Clock size={24} />
            </div>
            <h3 className="text-lg font-bold uppercase mb-2">Service Hours</h3>
            <p className="text-xs text-zinc-500 mb-6 uppercase tracking-widest font-black">Active Duty</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-zinc-500">Mon — Thu:</span>
                <span className="font-bold">08:00 - 17:00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-500">Friday:</span>
                <span className="font-bold">08:00 - 12:15 / 14:45 - 17:00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-500">Weekend:</span>
                <span className="text-red-500 font-bold uppercase">Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* PHYSICAL HEADQUARTERS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          <div className="p-10 rounded-[2.5rem] bg-zinc-900 border border-white/5 flex flex-col justify-between">
            <div>
              <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Strategic <br/>Headquarters.</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                Markas Angkatan Tentera Malaysia<br />
                Bahagian Perkhidmatan Anggota<br />
                Cawangan Tenaga Kerja<br />
                Kementerian Pertahanan, Jalan Padang Tembak<br />
                50634 Kuala Lumpur, Malaysia
              </p>
            </div>
            <div className="flex gap-4">
              <button className="flex-1 h-14 rounded-2xl bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-emerald-400 transition-all flex items-center justify-center gap-2">
                <Globe size={14} /> Open in Maps
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {/* QUICK ACTIONS */}
            <div className="p-8 rounded-[2rem] bg-zinc-900 border border-white/5 group hover:border-emerald-500/20 transition-all">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-zinc-800 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <ShieldAlert size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold uppercase">Report an Issue</h4>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-medium">Technical & Bug Reports</p>
                </div>
                <MessageSquare size={18} className="text-zinc-600" />
              </div>
            </div>

            <div className="p-8 rounded-[2rem] bg-zinc-900 border border-white/5 group hover:border-blue-500/20 transition-all">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-zinc-800 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <FileText size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold uppercase">Appeals Bureau</h4>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-medium">For Rejected Applications</p>
                </div>
                <MessageSquare size={18} className="text-zinc-600" />
              </div>
            </div>

            <div className="p-8 rounded-[2rem] bg-emerald-500/10 border border-emerald-500/20">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-emerald-500 mb-2">Live Status</h4>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <p className="text-sm font-bold">All recruitment servers operational.</p>
              </div>
            </div>
          </div>

        </div>

        {/* FOOTER NOTE */}
        <div className="mt-16 text-center">
            <p className="text-[10px] text-zinc-600 uppercase tracking-[0.5em] font-black">
                Official Help Desk of the Malaysian Armed Forces
            </p>
        </div>

      </main>
    </div>
  );
}
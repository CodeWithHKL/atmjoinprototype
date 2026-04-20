"use client";

import React from "react";
import { 
  FileText, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  ArrowRight, 
  TrendingUp,
  ShieldCheck,
  Calendar
} from "lucide-react";
import Link from "next/link";

export default function DashboardHome() {
  // Mock data for the prototype
  const userStatus = {
    name: "RECRUIT JOHN DOE",
    id: "ATM-880214-14-5521",
    overallProgress: 35,
    status: "In Review",
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      
      {/* WELCOME HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-8">
        <div>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500">
            System Online // Command Center
          </span>
          <h1 className="mt-2 text-4xl font-black uppercase tracking-tight text-white">
            Welcome back, <span className="text-zinc-400">{userStatus.name}</span>
          </h1>
          <p className="text-sm text-zinc-500 mt-1 uppercase tracking-widest font-bold">
            Service ID: {userStatus.id}
          </p>
        </div>
        <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4">
          <Calendar size={20} className="text-emerald-500" />
          <div className="text-right">
            <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Next Intake</p>
            <p className="text-sm font-bold text-white uppercase">15 JULY 2026</p>
          </div>
        </div>
      </div>

      {/* STATS OVERVIEW GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "App Status", value: "IN REVIEW", icon: Clock, color: "text-amber-400", bg: "bg-amber-400/10" },
          { label: "Eligibility", value: "92% MATCH", icon: TrendingUp, color: "text-emerald-400", bg: "bg-emerald-400/10" },
          { label: "Docs Verified", value: "4 / 6", icon: ShieldCheck, color: "text-blue-400", bg: "bg-blue-400/10" },
          { label: "Notifications", value: "2 NEW", icon: AlertCircle, color: "text-red-400", bg: "bg-red-400/10" },
        ].map((stat, i) => (
          <div key={i} className="p-6 rounded-[2rem] bg-zinc-900 border border-white/5 flex flex-col gap-4">
            <div className={`h-10 w-10 rounded-xl ${stat.bg} flex items-center justify-center ${stat.color}`}>
              <stat.icon size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{stat.label}</p>
              <p className="text-xl font-bold text-white mt-1 uppercase">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* ACTIVE APPLICATION PROGRESS */}
        <div className="lg:col-span-2 p-8 rounded-[2.5rem] bg-zinc-900 border border-white/5 relative overflow-hidden group">
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-xl font-bold uppercase tracking-tight">Current Application</h3>
                <p className="text-sm text-zinc-500 uppercase tracking-widest font-bold mt-1">General Enlistment - Army</p>
              </div>
              <Link href="/loggedin/applications/status" className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-all">
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Progress Bar */}
            <div className="space-y-4">
              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-zinc-400">
                <span>Phase 02: Verification</span>
                <span className="text-emerald-500">{userStatus.overallProgress}% Complete</span>
              </div>
              <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full transition-all duration-1000 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                  style={{ width: `${userStatus.overallProgress}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
               <div className="flex items-center gap-3 text-xs font-bold text-emerald-400">
                  <CheckCircle2 size={16} /> <span>Profile Created</span>
               </div>
               <div className="flex items-center gap-3 text-xs font-bold text-emerald-400">
                  <CheckCircle2 size={16} /> <span>OTP Verified</span>
               </div>
               <div className="flex items-center gap-3 text-xs font-bold text-zinc-600">
                  <Clock size={16} /> <span>Medical Review</span>
               </div>
            </div>
          </div>
          {/* Decorative Background Accent */}
          <div className="absolute right-[-10%] top-[-20%] h-64 w-64 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />
        </div>

        {/* QUICK ACTIONS */}
        <div className="p-8 rounded-[2.5rem] bg-zinc-900 border border-white/5 flex flex-col gap-4">
          <h3 className="text-lg font-bold uppercase tracking-tight mb-2">Required Actions</h3>
          
          <Link href="/loggedin/profile/documents" className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all group">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                <FileText size={16} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-300">Upload SPM Cert</span>
            </div>
            <ArrowRight size={14} className="text-zinc-600 group-hover:text-white transition-all" />
          </Link>

          <Link href="/loggedin/fit/quiz" className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all group">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                <TrendingUp size={16} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-300">Update Fitness Data</span>
            </div>
            <ArrowRight size={14} className="text-zinc-600 group-hover:text-white transition-all" />
          </Link>

          <div className="mt-auto pt-6 text-center">
            <p className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em]">
              Security Level: Clearance L1
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
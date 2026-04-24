"use client";

import React from "react";
import { 
  Users, 
  UserCheck, 
  Timer, 
  TrendingUp, 
  Map, 
  BarChart, 
  ArrowUpRight,
  Shield,
  FileBadge
} from "lucide-react";

export default function ArmyRecruiterDashboard() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans p-6 md:p-10">
      
      {/* HEADER: BRANCH SPECIFIC */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Shield size={16} className="text-emerald-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500/60">Tentera Darat Malaysia</span>
          </div>
          <h1 className="text-4xl font-black uppercase tracking-tighter">Recruitment <span className="text-emerald-500">Analytics.</span></h1>
          <p className="text-zinc-500 text-sm mt-2 max-w-lg">Monitoring real-time intake data for Enlistment and Officer programs across the Army branch.</p>
        </div>
        
        <div className="bg-zinc-900/50 border border-white/5 p-4 rounded-2xl flex items-center gap-4">
          <div className="text-right">
            <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Active Intake</p>
            <p className="text-sm font-bold">SIRI 202/2026</p>
          </div>
          <div className="h-10 w-px bg-white/10" />
          <div className="text-right">
            <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Cycle Status</p>
            <p className="text-sm font-bold text-emerald-500">PHASE: BEAT TEST</p>
          </div>
        </div>
      </div>

      {/* KEY METRICS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <AnalyticsCard title="Total Applied" value="1,842" sub="Army Total" icon={<Users size={20} />} trend="+14%" />
        <AnalyticsCard title="Qualified" value="956" sub="Passed Auto-Screen" icon={<UserCheck size={20} />} trend="+8.2%" />
        <AnalyticsCard title="Pending Review" value="124" sub="Requires Action" icon={<Timer size={20} />} trend="High Priority" warning />
        <AnalyticsCard title="Avg. Score" value="78%" sub="Assessment Mean" icon={<BarChart size={20} />} trend="+2.1%" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT COLUMN: VISUALIZATIONS */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* QUOTA UTILIZATION */}
          <div className="bg-zinc-900/40 border border-white/5 rounded-[2.5rem] p-8">
            <h3 className="text-sm font-black uppercase tracking-widest mb-10 flex items-center gap-2">
               <TrendingUp size={18} className="text-emerald-500" /> Intake Saturation
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="group">
                  <div className="flex justify-between text-[10px] font-black uppercase mb-2 tracking-widest text-zinc-500">
                    <span>Enlistment (Enlisted)</span>
                    <span className="text-white">1,450 / 2,000</span>
                  </div>
                  <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5">
                    <div className="h-full bg-emerald-500 rounded-full transition-all duration-1000" style={{ width: '72.5%' }} />
                  </div>
                </div>

                <div className="group">
                  <div className="flex justify-between text-[10px] font-black uppercase mb-2 tracking-widest text-zinc-500">
                    <span>Officer Cadets</span>
                    <span className="text-white">392 / 500</span>
                  </div>
                  <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5">
                    <div className="h-full bg-blue-500 rounded-full transition-all duration-1000" style={{ width: '78.4%' }} />
                  </div>
                </div>
              </div>

              <div className="bg-black/40 rounded-3xl p-6 border border-white/5 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Highest Engagement Source</p>
                  <ArrowUpRight size={16} className="text-zinc-700" />
                </div>
                <h4 className="text-3xl font-black text-white">Selangor Region</h4>
                <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">24% of Total Army Applicants</p>
              </div>
            </div>
          </div>

          {/* DEMOGRAPHIC SPREAD MOCKUP */}
          <div className="bg-zinc-900/40 border border-white/5 rounded-[2.5rem] p-8">
             <h3 className="text-sm font-black uppercase tracking-widest mb-6">Qualification Breakdown</h3>
             <div className="flex flex-wrap gap-4">
                {['SPM: 65%', 'Diploma: 18%', 'Degree: 12%', 'Others: 5%'].map((item, idx) => (
                  <div key={idx} className="px-4 py-2 rounded-xl bg-zinc-800/50 border border-white/5 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    {item}
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* RIGHT COLUMN: PRIORITY TASKS */}
        <div className="space-y-6">
          <div className="bg-zinc-900 border border-white/5 rounded-[2.5rem] p-8">
             <h3 className="text-sm font-black uppercase tracking-widest mb-6">Upcoming Milestones</h3>
             <div className="space-y-6">
                <Milestone date="28 APR" title="BEAT Test - Zone Central" time="0800 HRS" />
                <Milestone date="02 MAY" title="Officer Selection Board" time="0900 HRS" />
                <Milestone date="15 MAY" title="Medical Screening Phase II" time="ALL DAY" />
             </div>
             <button className="w-full mt-8 py-4 rounded-2xl bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 transition-all">
                Open Mission Calendar
             </button>
          </div>

          <div className="p-8 rounded-[2.5rem] bg-emerald-500/10 border border-emerald-500/20 relative overflow-hidden group">
            <div className="relative z-10">
              <FileBadge className="text-emerald-500 mb-4" size={32} />
              <h3 className="text-lg font-black uppercase leading-tight mb-2">Generate <br/>SIRI Report</h3>
              <p className="text-xs text-zinc-500 mb-6 font-medium">Export current intake data as PDF/XLS for Command HQ.</p>
              <button className="px-4 py-2 bg-emerald-500 text-black text-[10px] font-black uppercase tracking-widest rounded-lg">
                Download Now
              </button>
            </div>
            <TrendingUp className="absolute -bottom-4 -right-4 text-emerald-500/10 rotate-12 group-hover:scale-125 transition-transform" size={120} />
          </div>
        </div>

      </div>
    </div>
  );
}

// --- SUB COMPONENTS ---

function AnalyticsCard({ title, value, sub, icon, trend, warning }: any) {
  return (
    <div className="bg-zinc-900/40 border border-white/5 p-8 rounded-[2.5rem] hover:border-white/10 transition-all">
      <div className="flex justify-between items-start mb-6">
        <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-zinc-400">
          {icon}
        </div>
        <span className={`text-[9px] font-black uppercase tracking-widest ${warning ? 'text-orange-500 animate-pulse' : 'text-emerald-500'}`}>
          {trend}
        </span>
      </div>
      <h4 className="text-3xl font-black mb-1">{value}</h4>
      <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{title}</p>
      <p className="text-[9px] text-zinc-700 font-bold uppercase tracking-widest mt-4">{sub}</p>
    </div>
  );
}

function Milestone({ date, title, time }: any) {
  return (
    <div className="flex gap-4 items-center">
      <div className="flex flex-col items-center justify-center h-12 w-12 rounded-xl bg-zinc-800 border border-white/5 shrink-0">
        <span className="text-[10px] font-black text-emerald-500 leading-none">{date.split(' ')[1]}</span>
        <span className="text-[14px] font-black leading-none">{date.split(' ')[0]}</span>
      </div>
      <div>
        <h5 className="text-xs font-bold uppercase tracking-wide">{title}</h5>
        <p className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">{time}</p>
      </div>
    </div>
  );
}
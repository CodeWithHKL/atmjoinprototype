"use client";

import React from "react";
import Link from "next/link";
import { 
  Calendar, 
  ShieldCheck, 
  ArrowRight,
  Info,
  Timer,
  CheckCircle2,
  Lock,
  Medal,
  Users
} from "lucide-react";

const recruitments = [
  {
    id: "INTK-TDM-E-26",
    branch: "Army (TDM)",
    type: "Enlistment",
    logo: "/TDM_Logo.png",
    closingDate: "2026-05-15",
    daysLeft: 12,
    hoursLeft: 8,
    status: "Apply Now",
    color: "bg-emerald-950/30 border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.1)]",
    glow: "from-emerald-500 to-emerald-900",
    buttonColor: "bg-white text-black hover:bg-emerald-400"
  },
  {
    id: "INTK-TLDM-E-26",
    branch: "Navy (TLDM)",
    type: "Enlistment",
    logo: "/TLDM_Logo.png",
    closingDate: "2026-06-20",
    daysLeft: 48,
    hoursLeft: 14,
    status: "Applied",
    color: "bg-blue-950/30 border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.1)]",
    glow: "from-blue-500 to-blue-900",
    buttonColor: "bg-blue-500 text-black cursor-default"
  },
  {
    id: "INTK-TUDM-E-26",
    branch: "Air Force (TUDM)",
    type: "Enlistment",
    logo: "/TUDM_Logo.png",
    closingDate: "2026-05-30",
    daysLeft: 0,
    hoursLeft: 0,
    status: "Expired",
    color: "bg-black/40 border-white/5 opacity-60",
    glow: "from-zinc-700 to-zinc-900",
    buttonColor: "bg-zinc-800 text-zinc-500 cursor-not-allowed"
  },
  {
    id: "INTK-TDM-O-26",
    branch: "Army (TDM)",
    type: "Officer",
    logo: "/TDM_Logo.png",
    closingDate: "2026-06-10",
    daysLeft: 34,
    hoursLeft: 12,
    status: "Apply Now",
    // Premium Gold styling for Officers
    color: "bg-amber-950/20 border-amber-500/40 shadow-[0_0_40px_rgba(245,158,11,0.1)]",
    glow: "from-amber-500 to-yellow-900",
    buttonColor: "bg-amber-500 text-black hover:bg-amber-400"
  },
  {
    id: "INTK-TLDM-O-26",
    branch: "Navy (TLDM)",
    type: "Officer",
    logo: "/TLDM_Logo.png",
    closingDate: "2026-07-05",
    daysLeft: 63,
    hoursLeft: 2,
    status: "Apply Now",
    color: "bg-amber-950/20 border-amber-500/40 shadow-[0_0_40px_rgba(245,158,11,0.1)]",
    glow: "from-amber-500 to-yellow-900",
    buttonColor: "bg-amber-500 text-black hover:bg-amber-400"
  },
  {
    id: "INTK-TUDM-O-26",
    branch: "Air Force (TUDM)",
    type: "Officer",
    logo: "/TUDM_Logo.png",
    closingDate: "2026-08-15",
    daysLeft: 92,
    hoursLeft: 0,
    status: "Coming Soon",
    color: "bg-black/40 border-white/5 opacity-60",
    glow: "from-zinc-700 to-zinc-900",
    buttonColor: "bg-zinc-800 text-zinc-500 cursor-not-allowed"
  }
];

export default function RecruitmentPage() {
  const appliedCount = recruitments.filter(r => r.status === "Applied").length;
  const officerIntakes = recruitments.filter(r => r.type === "Officer");
  const enlistmentIntakes = recruitments.filter(r => r.type === "Enlistment");

  const RecruitmentCard = ({ item }: { item: typeof recruitments[0] }) => (
    <div className={`group relative overflow-hidden rounded-[2.5rem] border backdrop-blur-xl p-8 flex flex-col transition-all duration-500 hover:scale-[1.02] ${item.color}`}>
      <div className="flex justify-between items-start mb-8">
        <div className="flex flex-col gap-4">
          <div className="h-12 w-12 flex items-center justify-center bg-white/5 rounded-xl border border-white/10">
            <img src={item.logo} alt={item.branch} className="h-10 w-10 object-contain" />
          </div>
          <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-[9px] font-black uppercase tracking-wider ${item.type === 'Officer' ? 'border-amber-500/50 text-amber-500 bg-amber-500/10' : 'border-white/10 text-zinc-400 bg-white/5'}`}>
            {item.type === 'Officer' ? <Medal size={10} /> : <Users size={10} />}
            {item.type}
          </div>
        </div>
        {item.status === "Applied" && (
          <div className="bg-emerald-500 text-black px-3 py-1 rounded-lg flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            <CheckCircle2 size={12} />
            <span className="text-[9px] font-black uppercase tracking-widest">Recorded</span>
          </div>
        )}
      </div>

      <div className="mb-8">
        <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest font-mono">{item.id}</span>
        <h3 className="text-2xl font-bold tracking-tight mt-1">{item.branch}</h3>
      </div>

      <div className="space-y-3 mt-auto relative z-10">
        <div className="flex items-center gap-3 p-4 rounded-2xl bg-black/40 border border-white/5">
          <Calendar size={16} className="text-zinc-500" />
          <div>
            <span className="text-[9px] font-bold text-zinc-600 uppercase block mb-0.5">Closing on</span>
            <span className="text-xs font-bold text-zinc-300">{item.closingDate}</span>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 rounded-2xl bg-black/40 border border-white/5">
          <Timer size={16} className="text-zinc-500" />
          <div>
            <span className="text-[9px] font-bold text-zinc-600 uppercase block mb-0.5">Time remaining</span>
            <span className="text-xs font-bold text-zinc-200 font-mono">
              {(item.status === "Expired" || item.status === "Coming Soon") ? "0d 0h" : `${item.daysLeft}d ${item.hoursLeft}h`}
            </span>
          </div>
        </div>
      </div>

      {item.status === "Apply Now" ? (
        <Link href="/loggedin/recruitment/apply" className="block w-full relative z-10">
          <button className={`mt-8 w-full py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg ${item.buttonColor}`}>
            Apply Now <ArrowRight size={14} />
          </button>
        </Link>
      ) : (
        <button disabled className={`mt-8 w-full py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all relative z-10 ${item.buttonColor}`}>
          {item.status === "Applied" ? <>Application Sent <CheckCircle2 size={14} /></> : item.status === "Coming Soon" ? <>Coming Soon <Lock size={14} /></> : <>Closed <Lock size={14} /></>}
        </button>
      )}
      <div className={`absolute -bottom-12 -right-12 w-40 h-40 rounded-full blur-[60px] opacity-20 bg-gradient-to-br ${item.glow} group-hover:opacity-40 transition-opacity duration-700`} />
    </div>
  );

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white font-sans selection:bg-emerald-500/30">
      <div className="fixed inset-0 z-0 bg-[url('/Camo.jpg')] bg-cover bg-center bg-fixed opacity-10" aria-hidden="true" />

      <div className="relative z-10 p-4 lg:p-8">
        <div className="max-w-6xl mx-auto">
          
          <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck size={16} className="text-emerald-500" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">Service Selection Portal</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter">Current <span className="text-emerald-500">Intakes.</span></h1>
            </div>

            <div className="bg-black/40 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-2xl flex items-center gap-4 shadow-xl">
              <div>
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">Active Submissions</span>
                <span className="text-2xl font-bold">{appliedCount}/2</span>
              </div>
              <div className="flex gap-1.5">
                {[1, 2].map(i => (
                  <div key={i} className={`h-8 w-2.5 rounded-full transition-colors duration-500 ${i <= appliedCount ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" : "bg-zinc-800"}`} />
                ))}
              </div>
            </div>
          </header>

          {/* OFFICER SECTION */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-amber-500 flex items-center gap-2">
                <Medal size={14} /> Commissioned Officer Tracks
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {officerIntakes.map((item) => <RecruitmentCard key={item.id} item={item} />)}
            </div>
          </section>

          {/* ENLISTMENT SECTION */}
          <section className="mb-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-emerald-500 flex items-center gap-2">
                <Users size={14} /> Enlisted Personnel Tracks
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enlistmentIntakes.map((item) => <RecruitmentCard key={item.id} item={item} />)}
            </div>
          </section>

          <div className="mt-12 p-8 rounded-[2.5rem] bg-black/40 backdrop-blur-2xl border border-white/10 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
             <div className="h-16 w-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0">
                <Info size={32} />
             </div>
             <div>
               <h4 className="text-sm font-bold uppercase tracking-widest mb-1 text-white">Selection Protocol</h4>
               <p className="text-[11px] font-medium text-zinc-500 leading-relaxed max-w-3xl">
                 Officer tracks require a <span className="text-amber-500 font-bold">Degree/Professional qualification</span>. Enlistment tracks are open to <span className="text-emerald-500 font-bold">SPM/Diploma</span> holders. Ensure you select the track matching your academic credentials.
               </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
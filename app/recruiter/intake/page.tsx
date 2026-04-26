"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { 
  Search, 
  Filter, 
  Users, 
  Calendar, 
  MapPin, 
  ChevronRight,
  Eye,
  Activity,
  CheckCircle2,
  UserCheck,
  Plus
} from "lucide-react";

const phases = ["Eligibility", "Altitude", "Medical", "Physical", "Interview"];

const armyIntakes = [
  {
    id: "INTK-TDM-O-26-01",
    title: "Army Officer Cadet (Z-Grade)",
    type: "Officer",
    status: "Active",
    applicants: 1240,
    slots: 200,
    closingDate: "10 April 2026 - 15 Jun 2026",
    location: "MTD Sungai Besi",
    currentPhase: 2,
  },
  {
    id: "INTK-TDM-E-26-04",
    title: "Enlisted Personnel Intake 194",
    type: "Enlistment",
    status: "Active",
    applicants: 4502,
    slots: 1500,
    closingDate: "7 March 2026 - 20 May 2026",
    location: "PULADA, Johor",
    currentPhase: 0,
  },
  {
    id: "INTK-TDM-O-25-09",
    title: "Short Service Commission (Graduate)",
    type: "Officer",
    status: "Completed",
    applicants: 890,
    slots: 120,
    closingDate: "12 Dec 2025",
    location: "Pusat Latihan Tentera Darat",
    currentPhase: 4,
  },
  {
    id: "INTK-TDM-E-25-08",
    title: "Enlisted Personnel Intake 193",
    type: "Enlistment",
    status: "Completed",
    applicants: 5120,
    slots: 1500,
    closingDate: "10 Nov 2025",
    location: "PULADA, Johor",
    currentPhase: 4,
  },
  {
    id: "INTK-TDM-S-25-05",
    title: "Specialist Officer (Signals)",
    type: "Officer",
    status: "Completed",
    applicants: 215,
    slots: 40,
    closingDate: "15 Sep 2025",
    location: "Kem Perdana Sungai Besi",
    currentPhase: 4,
  },
  {
    id: "INTK-TDM-E-25-02",
    title: "Enlisted Personnel Intake 192",
    type: "Enlistment",
    status: "Completed",
    applicants: 4890,
    slots: 1200,
    closingDate: "01 Jul 2025",
    location: "PULADA, Johor",
    currentPhase: 4,
  },
  {
    id: "INTK-TDM-O-24-11",
    title: "Regular Service Officer (Combat)",
    type: "Officer",
    status: "Completed",
    applicants: 3400,
    slots: 250,
    closingDate: "15 Mar 2025",
    location: "MTD Sungai Besi",
    currentPhase: 4,
  },
  {
    id: "INTK-TDM-E-24-10",
    title: "Technical Enlistment (Engineers)",
    type: "Enlistment",
    status: "Completed",
    applicants: 670,
    slots: 100,
    closingDate: "20 Jan 2025",
    location: "Kem Mahkota, Kluang",
    currentPhase: 4,
  }
];

export default function IntakeManagement() {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState(armyIntakes[0].id);
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredIntakes = useMemo(() => {
    return armyIntakes
      .filter((intake) => {
        const matchesFilter = filter === "All" || intake.type === filter;
        const matchesSearch = 
          intake.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          intake.id.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
      })
      .sort((a, b) => {
        if (a.status === "Active" && b.status !== "Active") return -1;
        if (a.status !== "Active" && b.status === "Active") return 1;
        return b.id.localeCompare(a.id);
      });
  }, [filter, searchQuery]);

  const selectedIntake = armyIntakes.find(i => i.id === selectedId);

  const getCurrentPool = (total: number, phase: number) => {
    if (phase === 0) return total;
    const reductionFactor = 1 - (phase * 0.15);
    return Math.floor(total * reductionFactor);
  };

  return (
    <div className="space-y-8 p-6">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Intake <span className="text-emerald-500">Management</span>
          </h1>
          <p className="text-zinc-500 text-[10px] font-bold mt-1 tracking-widest">
            MANAGE INTAKES AND APPLICATIONS
          </p>
        </div>
        
        {/* CREATE BUTTON */}
        <button 
          onClick={() => router.push('/recruiter/intake/create')}
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-black px-6 py-3 rounded-xl font-bold text-xs transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
        >
          <Plus size={16} strokeWidth={3} />
          CREATE NEW INTAKE
        </button>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 h-[calc(100vh-200px)]">
        
        {/* LEFT: LIST */}
        <div className="lg:col-span-5 flex flex-col gap-4 overflow-hidden">
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={16} />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Intake ID or Title..." 
                className="w-full bg-zinc-900 border border-white/5 rounded-xl py-3 pl-12 pr-4 text-sm focus:border-emerald-500/50 outline-none transition-all text-white"
              />
            </div>
            <button className="px-4 rounded-xl bg-zinc-900 border border-white/5 hover:border-white/20 transition-all">
              <Filter size={18} className="text-zinc-500" />
            </button>
          </div>

          <div className="flex gap-2 mb-2">
            {["All", "Officer", "Enlistment"].map((t) => (
              <button 
                key={t}
                onClick={() => setFilter(t)}
                className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border transition-all ${filter === t ? 'bg-white text-black border-white' : 'bg-transparent text-zinc-500 border-white/5 hover:border-white/20'}`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-thin scrollbar-thumb-zinc-800">
            {filteredIntakes.map((intake) => (
              <div 
                key={intake.id}
                onClick={() => setSelectedId(intake.id)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all ${selectedId === intake.id ? 'bg-zinc-900 border-emerald-500/50 shadow-xl' : 'bg-zinc-900/40 border-white/5 hover:border-white/10'}`}
              >
                <div className="flex justify-between items-start mb-3">
                  <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest ${
                    intake.status === 'Active' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-zinc-800 text-zinc-500'
                  }`}>
                    {intake.status}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-600">{intake.id}</span>
                </div>
                <h3 className="text-sm font-semibold mb-4 text-zinc-200">{intake.title}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5">
                        <Users size={12} className="text-zinc-500" />
                        <span className="text-[11px] font-medium text-zinc-400">{intake.applicants.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={12} className="text-zinc-500" />
                        <span className="text-[11px] font-medium text-zinc-500">{intake.closingDate.split(' - ')[0]}</span>
                      </div>
                  </div>
                  <ChevronRight size={16} className={selectedId === intake.id ? "text-emerald-500" : "text-zinc-800"} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: DETAILS */}
        <div className="lg:col-span-7 bg-zinc-900 rounded-3xl border border-white/5 p-10 overflow-y-auto shadow-2xl relative scrollbar-thin scrollbar-thumb-zinc-800">
          {selectedIntake ? (
            <>
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h2 className="text-2xl font-bold leading-tight mb-2 text-white">{selectedIntake.title}</h2>
                  <p className="text-emerald-500 text-[10px] font-bold uppercase tracking-widest">{selectedIntake.type} Stream</p>
                </div>
                <button 
                  onClick={() => router.push(`/recruiter/intake/id`)}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-zinc-400 hover:text-emerald-500"
                >
                  <Eye size={20} />
                </button>
              </div>

              {/* STATS GRID */}
              <div className="grid grid-cols-3 gap-4 mb-12">
                <StatCard label="Total Applicants" value={selectedIntake.applicants.toLocaleString()} icon={Users} color="text-blue-500" />
                <StatCard label="Quota / Slots" value={selectedIntake.slots.toLocaleString()} icon={Activity} color="text-emerald-500" />
                <StatCard 
                  label={`Pool: ${phases[selectedIntake.currentPhase]}`} 
                  value={getCurrentPool(selectedIntake.applicants, selectedIntake.currentPhase).toLocaleString()} 
                  icon={UserCheck} 
                  color="text-amber-500" 
                />
              </div>

              {/* PHASE STEPPER */}
              <div className="mb-12 p-6 bg-zinc-950/50 rounded-2xl border border-white/5">
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-6">Current Operational Phase</p>
                <div className="relative">
                  <div className="flex justify-between mb-4 relative z-10">
                    {phases.map((p, i) => (
                      <div key={i} className="flex flex-col items-center gap-2">
                        <div className={`h-8 w-8 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                          i < selectedIntake.currentPhase ? "bg-emerald-500 border-emerald-500 text-black" : 
                          i === selectedIntake.currentPhase ? "bg-zinc-900 border-emerald-500 text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]" :
                          "bg-zinc-900 border-white/10 text-zinc-700"
                        }`}>
                          {i < selectedIntake.currentPhase ? <CheckCircle2 size={16} /> : <span className="text-[10px] font-bold">{i + 1}</span>}
                        </div>
                        <span className={`text-[9px] font-bold tracking-tight ${i === selectedIntake.currentPhase ? "text-white" : "text-zinc-600"}`}>
                          {p}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="absolute top-4 left-0 w-full h-[2px] bg-white/5 -z-0" />
                  <div 
                    className="absolute top-4 left-0 h-[2px] bg-emerald-500 transition-all duration-1000 shadow-[0_0_10px_rgba(16,185,129,0.5)]" 
                    style={{ width: `${(selectedIntake.currentPhase / (phases.length - 1)) * 100}%` }}
                  />
                </div>
              </div>

              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                  <DetailBlock label="System Intake ID" value={selectedIntake.id} isMono />
                  <DetailBlock label="Reporting Center" value={selectedIntake.location} icon={MapPin} />
                  <DetailBlock label="Intake Date" value={selectedIntake.closingDate} icon={Calendar} />
                  <DetailBlock label="Service Branch" value="Tentera Darat Malaysia (TDM)" />
                  <DetailBlock label="Selection Board" value="BPP - Markas Tentera Darat" />
                  <DetailBlock label="Operational Status" value={selectedIntake.status} />
                </div>
              </div>
            </>
          ) : (
            <div className="h-full flex items-center justify-center text-zinc-600 text-xs font-medium text-center italic">
              Select an intake from the list to view detailed operational metrics
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

function StatCard({ label, value, icon: Icon, color }: any) {
  return (
    <div className="bg-zinc-950 border border-white/5 p-6 rounded-2xl">
      <Icon size={16} className={`${color} mb-3`} />
      <p className="text-2xl font-bold tracking-tight mb-1 text-white">{value}</p>
      <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">{label}</p>
    </div>
  );
}

function DetailBlock({ label, value, icon: Icon, isMono = false }: any) {
  return (
    <div className="group">
      <label className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest block mb-2">
        {label}
      </label>
      <div className="flex items-center gap-3">
        {Icon && <Icon size={14} className="text-emerald-500" />}
        <p className={`text-sm font-medium text-zinc-200 ${isMono ? 'font-mono text-emerald-400' : ''}`}>
          {value}
        </p>
      </div>
    </div>
  );
}
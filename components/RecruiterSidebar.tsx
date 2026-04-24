"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Layers, 
  UserSquare2, 
  Users, 
  Shield, 
  Settings, 
  LogOut,
  ChevronRight,
  GraduationCap,
  TowerControl
} from "lucide-react";

const navItems = [
  { 
    label: "Dashboard", 
    href: "/recruiter/dashboard", 
    icon: LayoutDashboard,
    desc: "Analytics & Intel" 
  },
  { 
    label: "Intake Manager", 
    href: "/recruiter/intake", 
    icon: Layers,
    desc: "Cycle Control"
  },
  { 
    label: "Enlistment", 
    href: "/recruiter/intake/enlistment", 
    icon: UserSquare2,
    desc: "General Rank"
  },
  { 
    label: "Officer Cadets", 
    href: "/recruiter/intake/officer", 
    icon: GraduationCap,
    desc: "Commissioned"
  },
  { 
    label: "Branch Config", 
    href: "/recruiter/branch", 
    icon: Shield,
    desc: "Manage Profile"
  },
  { 
    label: "All Applicants", 
    href: "/recruiter/applicants", 
    icon: Users,
    desc: "Database"
  },
  { 
    label: "Settings", 
    href: "/recruiter/setting", 
    icon: Settings,
    desc: "Account Ops"
  },
];

export default function RecruiterSidebar() {
  const pathname = usePathname();

  // Mock data: This would usually come from your Auth context
  const recruiterBranch = "Army"; // Change to 'Navy' or 'Air Force'

  return (
    <aside className="w-72 h-screen sticky top-0 bg-zinc-950 border-r border-white/5 flex flex-col p-6 overflow-hidden">
      
      {/* BRAND & BRANCH IDENTIFIER */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6 px-2">
          <div className="h-8 w-8 bg-emerald-500 rounded-lg flex items-center justify-center">
            <TowerControl size={20} className="text-black" />
          </div>
          <span className="font-black uppercase tracking-tighter text-xl">ATM<span className="text-emerald-500">JOIN</span></span>
        </div>

        {/* ACTIVE BRANCH BADGE */}
        <div className="bg-zinc-900 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-zinc-800 flex items-center justify-center border border-white/5">
            <Shield size={20} className="text-emerald-400" />
          </div>
          <div>
            <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Active Branch</p>
            <p className="text-xs font-bold text-white uppercase">{recruiterBranch} Command</p>
          </div>
        </div>
      </div>

      {/* NAVIGATION ITEMS */}
      <nav className="flex-grow space-y-1 overflow-y-auto pr-2 custom-scrollbar">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex items-center justify-between p-3 rounded-2xl transition-all duration-300 ${
                isActive 
                ? "bg-white text-black" 
                : "text-zinc-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-xl transition-colors ${
                  isActive ? "bg-black text-white" : "bg-zinc-900 text-zinc-500 group-hover:text-emerald-400"
                }`}>
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-tight">{item.label}</p>
                  <p className={`text-[9px] font-medium uppercase tracking-widest opacity-60 ${
                    isActive ? "text-black" : "text-zinc-500"
                  }`}>
                    {item.desc}
                  </p>
                </div>
              </div>
              {isActive && <ChevronRight size={14} className="text-black/30" />}
            </Link>
          );
        })}
      </nav>

      {/* LOGOUT ACTION */}
      <div className="mt-6 pt-6 border-t border-white/5">
        <button className="w-full group flex items-center gap-4 p-3 rounded-2xl text-zinc-500 hover:bg-red-500/10 hover:text-red-500 transition-all duration-300">
          <div className="p-2 rounded-xl bg-zinc-900 group-hover:bg-red-500/20 transition-colors">
            <LogOut size={18} />
          </div>
          <div className="text-left">
            <p className="text-xs font-bold uppercase tracking-tight">Terminate</p>
            <p className="text-[9px] font-medium uppercase tracking-widest opacity-60">Logout Session</p>
          </div>
        </button>
      </div>
    </aside>
  );
}
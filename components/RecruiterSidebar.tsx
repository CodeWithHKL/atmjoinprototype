"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Layers, 
  Mail, 
  Users2, 
  Settings, 
  LogOut,
  ShieldAlert,
  FileText // Added for the Log icon
} from "lucide-react";

const navItems = [
  { name: "Analytics", href: "/recruiter", icon: LayoutDashboard },
  { name: "Intake Management", href: "/recruiter/intake", icon: Layers },
  { name: "Mail", href: "/recruiter/mail", icon: Mail },
  { name: "Applicant List", href: "/recruiter/applicants", icon: Users2 },
  { name: "Log", href: "/recruiter/log", icon: FileText }, // New Log option
  { name: "System Settings", href: "/recruiter/setting", icon: Settings },
];

export default function RecruiterSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-zinc-900 border-r border-white/5 flex flex-col sticky top-0">
      {/* BRANDING */}
      <div className="p-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-8 w-8 rounded-lg bg-emerald-500 flex items-center justify-center text-black">
            <ShieldAlert size={20} />
          </div>
          <span className="text-lg font-black tracking-tighter uppercase">Command</span>
        </div>
        <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-[0.3em]">Recruitment Division</p>
      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => {
          // LOGIC: 
          // 1. Dashboard exact match.
          // 2. Sub-routes use startsWith.
          const isActive = item.href === "/recruiter" 
            ? pathname === item.href 
            : pathname.startsWith(item.href);

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all group ${
                isActive 
                  ? "bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.2)]" 
                  : "text-zinc-500 hover:text-white hover:bg-white/5"
              }`}
            >
              <item.icon size={18} className={isActive ? "text-black" : "group-hover:text-emerald-500"} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* LOGOUT & USER STATUS */}
      <div className="p-4 mt-auto">
        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 mb-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-8 w-8 rounded-full bg-zinc-800 border border-emerald-500/30 flex items-center justify-center">
              <span className="text-[10px] font-bold">HQ</span>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-tight">Kapt. Zulkifli</p>
              <p className="text-[9px] text-emerald-500 font-bold uppercase">System Admin</p>
            </div>
          </div>
          <button className="w-full py-3 rounded-xl bg-red-500/5 border border-red-500/10 text-red-500 text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-red-500 hover:text-white transition-all">
            <LogOut size={14} /> Log Out
          </button>
        </div>
      </div>
    </aside>
  );
}
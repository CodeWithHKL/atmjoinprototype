"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Layers, 
  Mail, 
  Users2, 
  Settings, 
  LogOut,
  FileText,
  ChevronLeft,
  Menu
} from "lucide-react";

const navItems = [
  { name: "Analytics", href: "/recruiter", icon: LayoutDashboard },
  { name: "Intake Management", href: "/recruiter/intake", icon: Layers },
  { name: "Mail", href: "/recruiter/mail", icon: Mail },
  { name: "Applicant List", href: "/recruiter/applicants", icon: Users2 },
  { name: "Log", href: "/recruiter/log", icon: FileText },
  { name: "Settings", href: "/recruiter/setting", icon: Settings },
];

export default function RecruiterSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside 
      className={`relative h-screen bg-zinc-900 border-r border-white/5 flex flex-col sticky top-0 transition-all duration-300 ease-in-out z-[60] ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* COLLAPSE TOGGLE BUTTON */}
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-10 h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center text-black border-4 border-zinc-950 hover:scale-110 transition-transform z-50 shadow-lg"
      >
        {isCollapsed ? <Menu size={12} /> : <ChevronLeft size={12} />}
      </button>

      {/* BRANDING */}
      <div className={`p-6 mb-4 transition-all duration-300 ${isCollapsed ? "px-2" : "px-6"}`}>
        <div className={`flex items-center gap-3 mb-2 ${isCollapsed ? "justify-center" : ""}`}>
          {/* LOGO CONTAINER */}
          <div className="relative h-12 w-12 min-w-[48px] flex-shrink-0 flex items-center justify-center">
            <Image 
              src="/TDM_Logo.png" 
              alt="TDM Logo"
              width={48} // Matches the w-12 (48px) container
              height={48} // Matches the h-12 (48px) container
              className="object-contain"
              priority
            />
          </div>
          
          {!isCollapsed && (
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tighter uppercase leading-none text-white">
                TDM
              </span>
              <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-[0.2em] mt-1">
                Recruitment
              </p>
            </div>
          )}
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 px-3 space-y-2">
        {navItems.map((item) => {
          const isActive = item.href === "/recruiter" 
            ? pathname === item.href 
            : pathname.startsWith(item.href);

          return (
            <Link
              key={item.name}
              href={item.href}
              title={isCollapsed ? item.name : ""}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all group overflow-hidden ${
                isActive 
                  ? "bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.2)]" 
                  : "text-zinc-500 hover:text-white hover:bg-white/5"
              } ${isCollapsed ? "justify-center px-0 mx-1" : ""}`}
            >
              <item.icon 
                size={18} 
                className={`flex-shrink-0 transition-colors ${isActive ? "text-black" : "group-hover:text-emerald-500"}`} 
              />
              {!isCollapsed && <span className="whitespace-nowrap">{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      {/* USER STATUS */}
      <div className="p-3 mt-auto">
        <div className={`bg-white/[0.02] border border-white/5 rounded-2xl transition-all duration-300 ${isCollapsed ? "p-2" : "p-4 mb-4"}`}>
          {!isCollapsed && (
            <div className="flex items-center gap-3 mb-3">
              <div className="h-8 w-8 min-w-[32px] rounded-full bg-zinc-800 border border-emerald-500/30 flex items-center justify-center">
                <span className="text-[10px] font-bold text-white">Z</span>
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] font-bold uppercase tracking-tight whitespace-nowrap text-white">Kapt. Zulkifli</p>
                <p className="text-[9px] text-emerald-500 font-bold uppercase">Recruiter</p>
              </div>
            </div>
          )}
          <button className="w-full py-3 rounded-xl bg-red-500/5 border border-red-500/10 text-red-500 text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-red-500 hover:text-white transition-all">
            <LogOut size={14} className="flex-shrink-0" /> 
            {!isCollapsed && <span>Log Out</span>}
          </button>
        </div>
      </div>
    </aside>
  );
}
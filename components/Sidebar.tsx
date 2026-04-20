"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, FileText, User, Target, 
  Bell, LifeBuoy, Settings, LogOut, ChevronDown,
  PanelLeftClose, PanelLeftOpen 
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/loggedin" },
  { 
    name: "Applications", 
    icon: FileText,
    subItems: [
      { name: "New Application", href: "/loggedin/applications/new" },
      { name: "My Application", href: "/loggedin/applications/mine" },
      { name: "Status", href: "/loggedin/applications/status" },
    ]
  },
  { 
    name: "Profile", 
    icon: User,
    subItems: [
      { name: "View Profile", href: "/loggedin/profile" },
      { name: "Edit Profile", href: "/loggedin/profile/edit" },
    ]
  },
  { 
    name: "Fit & Eligibility", 
    icon: Target,
    subItems: [
      { name: "Fit Quiz", href: "/loggedin/fit/quiz" },
      { name: "Results", href: "/loggedin/fit/results" },
    ]
  },
  { name: "Notifications", icon: Bell, href: "/loggedin/notifications" },
  { name: "Help & Support", icon: LifeBuoy, href: "/loggedin/help" },
  { name: "Settings", icon: Settings, href: "/loggedin/settings" },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openMenus, setOpenMenus] = useState<string[]>([]);
  const pathname = usePathname();

  const toggleMenu = (name: string) => {
    if (isCollapsed) {
      setIsCollapsed(false);
      setOpenMenus([name]);
      return;
    }
    setOpenMenus(prev => 
      prev.includes(name) ? prev.filter(i => i !== name) : [...prev, name]
    );
  };

  return (
    <aside 
      className={`fixed left-4 top-4 bottom-4 z-50 transition-all duration-500 ease-in-out flex flex-col border border-white/10 bg-zinc-950/80 backdrop-blur-xl shadow-2xl rounded-[2.5rem] ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* TOGGLE BUTTON */}
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-10 h-6 w-6 rounded-full border border-white/10 bg-zinc-900 text-zinc-400 hover:text-white flex items-center justify-center transition-all"
      >
        {isCollapsed ? <PanelLeftOpen size={12} /> : <PanelLeftClose size={12} />}
      </button>

      {/* BRAND */}
      <div className={`flex items-center gap-3 px-6 mb-10 mt-8 overflow-hidden transition-all duration-500 ${isCollapsed ? "justify-center px-0" : ""}`}>
        <img src="/atmjoin-logo.png" alt="Logo" className="h-8 w-8 min-w-[32px] object-contain" />
        {!isCollapsed && (
          <span className="font-black text-white uppercase tracking-tighter text-lg animate-in fade-in duration-500">
            ATMJOIN
          </span>
        )}
      </div>

      {/* NAV ITEMS */}
      <nav className="flex-1 space-y-2 overflow-y-auto px-3 custom-scrollbar">
        {menuItems.map((item) => (
          <div key={item.name}>
            {item.subItems ? (
              <div>
                <button 
                  onClick={() => toggleMenu(item.name)}
                  className={`flex w-full items-center rounded-2xl px-3 py-3 text-zinc-400 hover:bg-white/5 hover:text-white transition-all group ${
                    isCollapsed ? "justify-center" : "justify-between"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <item.icon size={22} className={`${pathname.startsWith(item.href) ? "text-emerald-500" : "group-hover:text-emerald-400"}`} />
                    {!isCollapsed && (
                      <span className="text-[11px] font-bold uppercase tracking-widest animate-in fade-in slide-in-from-left-2">
                        {item.name}
                      </span>
                    )}
                  </div>
                  {!isCollapsed && (
                    <ChevronDown size={14} className={`transition-transform duration-300 ${openMenus.includes(item.name) ? "rotate-180" : ""}`} />
                  )}
                </button>
                
                {/* SUBMENU - Only show if not collapsed */}
                {!isCollapsed && openMenus.includes(item.name) && (
                  <div className="mt-1 ml-4 flex flex-col gap-1 border-l border-white/10 pl-6 animate-in slide-in-from-top-2 duration-300">
                    {item.subItems.map(sub => (
                      <Link 
                        key={sub.name} 
                        href={sub.href}
                        className={`py-2 text-[9px] font-black uppercase tracking-[0.2em] transition-colors ${
                          pathname === sub.href ? "text-emerald-400" : "text-zinc-500 hover:text-zinc-200"
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link 
                href={item.href}
                className={`flex items-center gap-4 rounded-2xl px-3 py-3 transition-all group ${
                  isCollapsed ? "justify-center" : ""
                } ${
                  pathname === item.href ? "bg-emerald-500/10 text-emerald-400" : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <item.icon size={22} />
                {!isCollapsed && (
                  <span className="text-[11px] font-bold uppercase tracking-widest animate-in fade-in slide-in-from-left-2">
                    {item.name}
                  </span>
                )}
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* LOGOUT */}
      <div className="p-3 mt-auto border-t border-white/5">
        <Link 
          href="/login"
          className={`flex items-center gap-4 rounded-2xl px-3 py-3 text-zinc-500 hover:bg-red-500/10 hover:text-red-400 transition-all ${
            isCollapsed ? "justify-center" : ""
          }`}
        >
          <LogOut size={22} />
          {!isCollapsed && (
            <span className="text-[11px] font-bold uppercase tracking-widest animate-in fade-in">
              Log Out
            </span>
          )}
        </Link>
      </div>
    </aside>
  );
}
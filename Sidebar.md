"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, FileText, User, Target, 
  Bell, LifeBuoy, Settings, LogOut, ChevronDown, MessageCircleQuestion,
  PanelLeftClose, PanelLeftOpen, Menu, X 
} from "lucide-react";

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/loggedin" },
  { 
    name: "Applications", 
    icon: FileText,
    rootPath: "/loggedin/applications",
    subItems: [
      { name: "New Application", href: "/loggedin/applications/new" },
      { name: "My Application", href: "/loggedin/applications/myapply" },
      { name: "Status", href: "/loggedin/applications/status" },
      { name: "Guide", href: "/loggedin/applications/guide" },
    ]
  },
  { 
    name: "Profile", 
    icon: User,
    href: "/loggedin/profile",
  },
  { 
    name: "Careers & Eligibility", 
    icon: Target,
    rootPath: "/loggedin/carebility",
    subItems: [
      { name: "Branches", href: "/loggedin/carebility/branches" },
      { name: "Eligibility", href: "/loggedin/carebility/eligibility" },
      { name: "Role", href: "/loggedin/carebility/role" },
      { name: "Benefits", href: "/loggedin/carebility/benefits" },
      { name: "Find Your Fit", href: "/loggedin/carebility/assessment" },
    ]
  },
  { name: "Notifications", icon: Bell, href: "/loggedin/notifications" },
  { name: "FAQ", icon: MessageCircleQuestion, href: "/loggedin/faq" },
  { name: "Help & Support", icon: LifeBuoy, href: "/loggedin/help" },
  { name: "Settings", icon: Settings, href: "/loggedin/settings" },
];

export default function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState<string[]>([]);
  const pathname = usePathname();

  // Close mobile sidebar on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  // Handle active menu expansion
  useEffect(() => {
    menuItems.forEach(item => {
      if (item.subItems && (pathname.startsWith(item.rootPath || '') || item.subItems.some(sub => sub.href === pathname))) {
        setOpenMenus(prev => prev.includes(item.name) ? prev : [...prev, item.name]);
      }
    });
  }, [pathname]);

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
    <>
      {/* MOBILE HEADER */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 h-16 bg-zinc-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-3">
          <img src="/atmjoin-logo.png" alt="Logo" className="h-6 w-6 object-contain" />
          <span className="font-black text-white uppercase tracking-tighter text-sm">ATMJOIN</span>
        </div>
        <button 
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 text-zinc-400 hover:text-white"
        >
          {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[40] lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside 
        className={`fixed z-50 transition-all duration-500 ease-in-out flex flex-col border border-white/10 bg-zinc-950/80 backdrop-blur-xl shadow-2xl 
          top-20 bottom-4 left-4 right-4 lg:right-auto 
          ${isMobileOpen ? "translate-x-0 opacity-100" : "-translate-x-[110%] lg:translate-x-0 opacity-0 lg:opacity-100"}
          lg:top-4 lg:bottom-4 lg:left-4 lg:rounded-[2.5rem]
          ${isCollapsed ? "lg:w-20" : "lg:w-64"}
          rounded-[2rem]
        `}
      >
        {/* DESKTOP COLLAPSE TOGGLE */}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden lg:flex absolute -right-3 top-10 h-6 w-6 rounded-full border border-white/10 bg-zinc-900 text-zinc-400 hover:text-white items-center justify-center transition-all z-[60]"
        >
          {isCollapsed ? <PanelLeftOpen size={12} /> : <PanelLeftClose size={12} />}
        </button>

        {/* BRAND AREA */}
        <div className={`hidden lg:flex items-center gap-3 px-6 mb-10 mt-8 overflow-hidden transition-all duration-500 ${isCollapsed ? "justify-center px-0" : ""}`}>
          <img src="/atmjoin-logo.png" alt="Logo" className="h-8 w-8 min-w-[32px] object-contain" />
          {!isCollapsed && (
            <span className="font-black text-white uppercase tracking-tighter text-lg animate-in fade-in duration-500">
              ATMJOIN
            </span>
          )}
        </div>

        {/* NAV ITEMS */}
        <nav className="flex-1 space-y-2 overflow-y-auto px-3 py-6 lg:py-0 no-scrollbar">
          {menuItems.map((item) => {
            const isActiveParent = item.subItems?.some(sub => pathname === sub.href) || 
                                   (item.rootPath && pathname.startsWith(item.rootPath));
            const isDirectActive = pathname === item.href;

            return (
              <div key={item.name}>
                {item.subItems ? (
                  <div>
                    <button 
                      onClick={() => toggleMenu(item.name)}
                      className={`flex w-full items-center rounded-2xl px-3 py-3 transition-all group 
                        ${isCollapsed ? "lg:justify-center" : "justify-between"} 
                        ${isActiveParent ? "bg-emerald-500/10 text-emerald-400" : "text-zinc-400 hover:bg-white/5 hover:text-white"}
                      `}
                    >
                      <div className="flex items-center gap-4">
                        <item.icon size={22} className={`${isActiveParent ? "text-emerald-500" : "group-hover:text-emerald-400"}`} />
                        <span className={`text-[11px] font-bold uppercase tracking-widest animate-in fade-in slide-in-from-left-2 ${isCollapsed ? "lg:hidden" : "block"}`}>
                          {item.name}
                        </span>
                      </div>
                      <ChevronDown size={14} className={`transition-transform duration-300 ${openMenus.includes(item.name) ? "rotate-180" : ""} ${isCollapsed ? "lg:hidden" : "block"}`} />
                    </button>
                    
                    {(!isCollapsed || isMobileOpen) && openMenus.includes(item.name) && (
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
                    href={item.href || '#'}
                    className={`flex items-center gap-4 rounded-2xl px-3 py-3 transition-all group 
                      ${isCollapsed ? "lg:justify-center" : ""} 
                      ${isDirectActive ? "bg-emerald-500/10 text-emerald-400" : "text-zinc-400 hover:bg-white/5 hover:text-white"}
                    `}
                  >
                    <item.icon size={22} />
                    <span className={`text-[11px] font-bold uppercase tracking-widest animate-in fade-in slide-in-from-left-2 ${isCollapsed ? "lg:hidden" : "block"}`}>
                      {item.name}
                    </span>
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        {/* LOGOUT */}
        <div className="p-3 mt-auto border-t border-white/5">
          <Link 
            href="/login"
            className={`flex items-center gap-4 rounded-2xl px-3 py-3 text-zinc-500 hover:bg-red-500/10 hover:text-red-400 transition-all ${isCollapsed ? "lg:justify-center" : ""}`}
          >
            <LogOut size={22} />
            <span className={`text-[11px] font-bold uppercase tracking-widest animate-in fade-in ${isCollapsed ? "lg:hidden" : "block"}`}>
              Log Out
            </span>
          </Link>
        </div>
      </aside>
    </>
  );
}
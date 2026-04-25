import React from "react";
import RecruiterSidebar from "@/components/RecruiterSidebar";

export default function RecruiterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-white font-sans">
      {/* PERSISTENT SIDEBAR */}
      <RecruiterSidebar />

      {/* COMMAND MAIN VIEW */}
      <main className="flex-1 h-screen overflow-y-auto">
        <header className="h-16 border-b border-white/5 px-8 flex items-center justify-between sticky top-0 bg-zinc-950/80 backdrop-blur-md z-50">
          <div className="flex items-center gap-4">
             <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
             <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Service Status: Operational</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="text-right">
              <span className="block text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Branch Authorization</span>
              <span className="block text-[11px] font-bold text-zinc-300 uppercase">Army (TDM) Headquarters</span>
            </div>
          </div>
        </header>

        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
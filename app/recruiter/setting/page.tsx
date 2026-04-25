"use client";

import React, { useState } from "react";
import { 
  KeyRound, 
  ShieldCheck, 
  Bell, 
  Monitor, 
  Power, 
  ShieldAlert,
  Smartphone
} from "lucide-react";

export default function SettingsPage() {
  const [emailNotif, setEmailNotif] = useState(true);
  const [twoFactor, setTwoFactor] = useState(true);

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20 p-6">
      {/* HEADER */}
      <header className="border-b border-white/5 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-1 w-8 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.3)]" />
          <span className="text-[9px] font-bold tracking-[0.3em] text-zinc-500 uppercase">System Configuration</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-white uppercase leading-none">Settings</h1>
      </header>

      <div className="grid gap-10">
        
        {/* SECURITY SECTION */}
        <section className="space-y-5">
          <h2 className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.3em] px-1">Security Authentication</h2>
          
          <div className="grid gap-4">
            {/* Change Password */}
            <div className="group bg-zinc-900/40 border border-white/5 p-6 rounded-3xl flex items-center justify-between hover:bg-zinc-900/60 transition-all backdrop-blur-sm shadow-xl">
              <div className="flex items-center gap-5">
                <div className="h-12 w-12 rounded-2xl bg-zinc-950 border border-white/5 flex items-center justify-center text-zinc-500 group-hover:text-emerald-500 group-hover:border-emerald-500/20 transition-all">
                  <KeyRound size={20} />
                </div>
                <div>
                  <h3 className="text-[13px] font-bold text-white uppercase tracking-wide">Change Password</h3>
                  <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-tight mt-1">
                    Last sync: <span className="text-zinc-400 font-mono tracking-tighter">32 DAYS AGO</span>
                  </p>
                </div>
              </div>
              <button className="px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:bg-white hover:text-black hover:border-white transition-all active:scale-95">
                Update
              </button>
            </div>

            {/* Two-Factor Auth */}
            <div className="bg-zinc-900/40 border border-white/5 p-6 rounded-3xl flex items-center justify-between backdrop-blur-sm shadow-xl">
              <div className="flex items-center gap-5">
                <div className={`h-12 w-12 rounded-2xl border flex items-center justify-center transition-all ${twoFactor ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.1)]' : 'bg-zinc-950 border-white/5 text-zinc-700'}`}>
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3 className="text-[13px] font-bold text-white uppercase tracking-wide">Two-Factor Auth (OTP)</h3>
                  <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-tight mt-1">Secure login via multi-channel dispatch</p>
                </div>
              </div>
              <button 
                onClick={() => setTwoFactor(!twoFactor)}
                className={`w-12 h-6 rounded-full transition-all relative ${twoFactor ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]' : 'bg-zinc-800'}`}
              >
                <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${twoFactor ? 'right-1' : 'left-1'}`} />
              </button>
            </div>
          </div>
        </section>

        {/* PREFERENCES */}
        <section className="space-y-5">
          <h2 className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.3em] px-1">Preferences</h2>
          <div className="bg-zinc-900/40 border border-white/5 p-6 rounded-3xl flex items-center justify-between backdrop-blur-sm shadow-xl">
            <div className="flex items-center gap-5">
              <div className="h-12 w-12 rounded-2xl bg-zinc-950 border border-white/5 flex items-center justify-center text-zinc-500">
                <Bell size={20} />
              </div>
              <div>
                <h3 className="text-[13px] font-bold text-white uppercase tracking-wide">Email Notifications</h3>
                <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-tight mt-1">Status updates and protocol alerts</p>
              </div>
            </div>
            <button 
              onClick={() => setEmailNotif(!emailNotif)}
              className={`w-12 h-6 rounded-full transition-all relative ${emailNotif ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]' : 'bg-zinc-800'}`}
            >
              <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${emailNotif ? 'right-1' : 'left-1'}`} />
            </button>
          </div>
        </section>

        {/* ACTIVE SESSIONS */}
        <section className="space-y-5">
          <h2 className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.3em] px-1">Active Sessions</h2>
          <div className="bg-zinc-900/40 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-sm shadow-xl">
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
               <div className="flex items-center gap-4">
                  <Monitor size={18} className="text-emerald-500" />
                  <div>
                    <p className="text-[11px] font-bold text-white uppercase tracking-wide">Chrome on Windows</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <p className="text-[9px] text-emerald-500 font-bold uppercase tracking-widest">Active Connection</p>
                    </div>
                  </div>
               </div>
               <span className="text-[10px] font-mono text-zinc-600 tracking-tight">192.168.1.1</span>
            </div>
            
            <div className="p-6 flex items-center justify-between bg-zinc-950/20 transition-all hover:bg-zinc-950/40 group">
               <div className="flex items-center gap-4">
                  <Smartphone size={18} className="text-zinc-600" />
                  <div>
                    <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-wide">Safari on iPhone 15</p>
                    <p className="text-[9px] text-zinc-600 font-bold uppercase tracking-tight mt-0.5">Kuala Lumpur, MY • <span className="font-mono text-[10px]">2H AGO</span></p>
                  </div>
               </div>
               <button className="text-[9px] font-bold text-zinc-500 hover:text-rose-500 uppercase tracking-widest transition-colors">Revoke Session</button>
            </div>
          </div>
        </section>

        {/* DANGER ZONE */}
        <section className="mt-4">
          <div className="bg-rose-500/5 border border-rose-500/10 p-8 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="h-14 w-14 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.1)]">
                <ShieldAlert size={26} />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg font-bold text-white uppercase tracking-tight">Terminate All Sessions</h3>
                <p className="text-[10px] text-rose-500/70 font-bold uppercase tracking-wide mt-2 max-w-xs leading-relaxed">
                  Purge all authentication tokens across all hardware platforms instantly.
                </p>
              </div>
            </div>
            <button className="w-full md:w-auto px-10 py-4 bg-rose-500 text-white rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-rose-600 transition-all shadow-lg shadow-rose-900/20 flex items-center justify-center gap-3 active:scale-95">
              <Power size={14} /> Execute Master Logout
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
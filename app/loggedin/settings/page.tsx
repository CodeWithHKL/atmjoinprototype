"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ChevronLeft, 
  KeyRound, 
  Bell, 
  Monitor, 
  LogOut, 
  ShieldCheck, 
  ChevronRight,
  Circle,
  Smartphone
} from "lucide-react";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [otpEnabled, setOtpEnabled] = useState(false);

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white font-sans selection:bg-emerald-500/30 flex flex-col">
      
      {/* GLOBAL FIXED BACKGROUND (Camo Overlay) */}
      <div 
        className="fixed inset-0 z-0 bg-[url('/Camo.jpg')] bg-cover bg-center bg-fixed opacity-10" 
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* HEADER */}
        <header className="relative pt-48 pb-16 px-6 overflow-hidden">
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-zinc-950" />
          
          <div className="relative z-20 mx-auto max-w-7xl">
            <Link href="/loggedin/dashboard" className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white mb-8 transition-colors">
              <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
              Back to Dashboard
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              User <span className="text-emerald-500">Settings.</span>
            </h1>
            <p className="mt-4 text-zinc-400 font-medium">Manage your security credentials and communication preferences.</p>
          </div>
        </header>

        <main className="relative z-10 flex-grow mx-auto max-w-3xl w-full px-6 pb-24">
          
          <div className="space-y-4">
            
            {/* CHANGE PASSWORD */}
            <button className="w-full p-6 rounded-[2rem] bg-zinc-900/60 backdrop-blur-md border border-white/5 hover:border-emerald-500/20 transition-all group flex items-center justify-between text-left">
              <div className="flex items-center gap-5">
                <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center text-zinc-400 group-hover:text-emerald-400 transition-colors border border-white/5">
                  <KeyRound size={22} />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide">Change Password</h3>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-black mt-1">
                    Last updated <span className="text-zinc-300">32 days ago</span>
                  </p>
                </div>
              </div>
              <ChevronRight size={18} className="text-zinc-700 group-hover:text-white transition-colors" />
            </button>

            {/* OTP / 2FA TOGGLE */}
            <div className={`w-full p-6 rounded-[2rem] border transition-all duration-300 backdrop-blur-md ${otpEnabled ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-zinc-900/60 border-white/5'}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <div className={`h-12 w-12 rounded-2xl flex items-center justify-center transition-colors border border-white/5 ${otpEnabled ? 'bg-emerald-500 text-white' : 'bg-white/5 text-zinc-400'}`}>
                    <Smartphone size={22} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wide">Two-Factor Auth (OTP)</h3>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-black mt-1">
                      Secure login via Email/SMS code
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setOtpEnabled(!otpEnabled)}
                  className={`relative w-14 h-7 rounded-full transition-colors duration-300 flex items-center px-1 ${otpEnabled ? 'bg-emerald-500' : 'bg-zinc-800'}`}
                >
                  <div className={`h-5 w-5 bg-white rounded-full transition-transform duration-300 ${otpEnabled ? 'translate-x-7' : 'translate-x-0'}`} />
                </button>
              </div>
            </div>

            {/* NOTIFICATION TOGGLE */}
            <div className="w-full p-6 rounded-[2rem] bg-zinc-900/60 backdrop-blur-md border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center text-zinc-400 border border-white/5">
                  <Bell size={22} />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide">Email Notifications</h3>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-black mt-1">
                    Receive updates on application status
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setNotifications(!notifications)}
                className={`relative w-14 h-7 rounded-full transition-colors duration-300 flex items-center px-1 ${notifications ? 'bg-emerald-500' : 'bg-zinc-800'}`}
              >
                <div className={`h-5 w-5 bg-white rounded-full transition-transform duration-300 ${notifications ? 'translate-x-7' : 'translate-x-0'}`} />
              </button>
            </div>

            {/* ACTIVE SESSIONS */}
            <div className="w-full p-6 rounded-[2rem] bg-zinc-900/60 backdrop-blur-md border border-white/5">
              <div className="flex items-center gap-5 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center text-zinc-400 border border-white/5">
                  <Monitor size={22} />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide">Active Sessions</h3>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-black mt-1">
                    Connected Devices
                  </p>
                </div>
              </div>
              
              <div className="ml-16 p-4 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold">Chrome on Windows</span>
                    <span className="text-[9px] text-emerald-500 font-black uppercase tracking-tighter flex items-center gap-1.5">
                      <Circle size={6} fill="currentColor" className="animate-pulse" /> Current Session
                    </span>
                  </div>
                </div>
                <ShieldCheck size={16} className="text-emerald-500/50" />
              </div>
            </div>

            {/* LOG OUT */}
            <button className="w-full p-6 rounded-[2rem] bg-red-500/5 backdrop-blur-md border border-red-500/10 hover:bg-red-500 hover:text-white transition-all group flex items-center gap-5 text-left mt-8 shadow-xl">
              <div className="h-12 w-12 rounded-2xl bg-red-500/10 group-hover:bg-white/20 flex items-center justify-center text-red-500 group-hover:text-white transition-colors border border-red-500/10">
                <LogOut size={22} />
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide">Terminate Session</h3>
                <p className="text-[10px] uppercase tracking-widest font-black opacity-60">Log out from all devices</p>
              </div>
            </button>

          </div>

          {/* SECURITY FOOTER */}
          <div className="mt-12 text-center p-8 border-t border-white/5">
            <p className="text-[9px] text-zinc-600 uppercase tracking-[0.4em] font-black">
              End-to-End Encryption Enabled | ATM Security Protocol v4.0
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
"use client";

import React, { useState } from "react";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for account creation goes here
    router.push("/signup/verify"); // Updated navigation
  };

  return (
    <div 
      className="relative flex min-h-screen flex-col items-center justify-center bg-zinc-900 font-sans text-zinc-900 dark:text-zinc-100 p-4 overflow-y-auto bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/signup-bg.png')" }}
    >
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Dynamic Background Accents */}
      <div className="absolute top-[-10%] left-[-5%] h-[50%] w-[50%] rounded-full bg-emerald-500/10 blur-[120px] z-0" />

      {/* Main Glass Container */}
      <main className="relative z-10 my-8 flex w-full max-w-[480px] flex-col gap-6 rounded-[2.5rem] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-black/50">
        
        {/* Header Section */}
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="flex h-24 w-24 items-center justify-center bg-transparent mb-2">
            <img 
              src="/atmjoin-logo.png" 
              alt="ATMJOIN Logo" 
              className="h-full w-full object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white uppercase">
            New Enlistment
          </h1>
          <p className="text-[10px] text-zinc-300 uppercase tracking-[0.3em] font-bold">
            Personal Record Initialization
          </p>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          
          {/* Full Name */}
          <div className="flex flex-col gap-1.5">
            <label className="ml-1 text-[10px] font-bold uppercase tracking-wider text-zinc-400">Full Name (As per IC)</label>
            <input 
              type="text" 
              required
              placeholder="JOHN BIN DOE"
              className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none focus:ring-2 focus:ring-emerald-500/40 transition-all placeholder:text-zinc-600"
            />
          </div>

          {/* IC Number */}
          <div className="flex flex-col gap-1.5">
            <label className="ml-1 text-[10px] font-bold uppercase tracking-wider text-zinc-400">IC Number</label>
            <input 
              type="text" 
              required
              placeholder="XXXXXX-XX-XXXX"
              className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none focus:ring-2 focus:ring-emerald-500/40 transition-all placeholder:text-zinc-600"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="ml-1 text-[10px] font-bold uppercase tracking-wider text-zinc-400">Email Address</label>
            <input 
              type="email" 
              required
              placeholder="johndoe@example.com"
              className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none focus:ring-2 focus:ring-emerald-500/40 transition-all placeholder:text-zinc-600"
            />
          </div>

          {/* Password Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="ml-1 text-[10px] font-bold uppercase tracking-wider text-zinc-400">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  required
                  className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none focus:ring-2 focus:ring-emerald-500/40 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="ml-1 text-[10px] font-bold uppercase tracking-wider text-zinc-400">Confirm</label>
              <div className="relative">
                <input 
                  type={showConfirmPassword ? "text" : "password"} 
                  required
                  className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none focus:ring-2 focus:ring-emerald-500/40 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                >
                  {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
          </div>

          <button 
            type="submit"
            className="mt-4 flex h-12 items-center justify-center rounded-xl bg-white text-xs font-black uppercase tracking-[0.2em] text-black shadow-xl transition-all hover:bg-emerald-50 hover:scale-[1.01] active:scale-[0.99]"
          >
            Create Account
          </button>
        </form>

        {/* Navigation Back */}
        <div className="flex flex-col items-center gap-4 border-t border-white/10 pt-6">
          <Link 
            href="/login" 
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            Login
          </Link>
        </div>
      </main>

      <footer className="relative z-10 mb-8 flex flex-col items-center gap-1 opacity-40">
        <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-zinc-400">
          ATMJOIN V1.0.0
        </span>
      </footer>
    </div>
  );
}
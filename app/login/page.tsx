"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link"; // Import Link for navigation
import { useRouter } from "next/navigation"; // Import useRouter for the button

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    // Add login logic here if needed
    router.push("/loggedin");
  };

  return (
    <div 
      className="relative flex min-h-screen flex-col items-center justify-center bg-zinc-900 font-sans text-zinc-900 dark:text-zinc-100 p-4 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/signup-bg.png')" }}
    >
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Dynamic Background Accents */}
      <div className="absolute top-[-5%] right-[-5%] h-[45%] w-[45%] rounded-full bg-white/5 blur-[100px] z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-blue-500/10 blur-[120px] z-0" />

      {/* Main Glass Container */}
      <main className="relative z-10 flex w-full max-w-[420px] flex-col gap-8 rounded-[2.5rem] border border-white/20 bg-white/10 p-10 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-black/40">
        
        {/* Header Section */}
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex h-24 w-24 items-center justify-center bg-transparent">
            <img 
              src="/atmjoin-logo.png" 
              alt="ATMJOIN Logo" 
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white uppercase leading-none">
              ATM JOIN
            </h1>
            <p className="mt-2 text-[10px] text-zinc-300 uppercase tracking-[0.3em] font-bold">
              Unified Military Branches<br />Recruitment Portal
            </p>
          </div>
        </div>

        {/* Login Form */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="ml-1 text-[11px] font-bold uppercase tracking-wider text-zinc-300">
              Email
            </label>
            <input 
              type="email" 
              placeholder="Enter your email"
              className="h-12 w-full rounded-2xl border border-white/10 bg-white/10 px-4 text-sm text-white outline-none focus:ring-2 focus:ring-white/20 transition-all placeholder:text-zinc-500"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="ml-1 text-[11px] font-bold uppercase tracking-wider text-zinc-300">
              Password
            </label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Enter your password"
                className="h-12 w-full rounded-2xl border border-white/10 bg-white/10 pl-4 pr-12 text-sm text-white outline-none focus:ring-2 focus:ring-white/20 transition-all placeholder:text-zinc-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <div className="flex justify-end">
              <a href="#" className="mr-1 mt-1 text-[10px] uppercase font-bold text-zinc-400 hover:text-white transition-colors tracking-tighter">
                Forgot Password?
              </a>
            </div>
          </div>

          {/* Navigates to app/page.tsx */}
          <button 
            onClick={handleLogin}
            className="mt-2 flex h-12 items-center justify-center rounded-2xl bg-white text-xs font-black uppercase tracking-[0.2em] text-black shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] hover:bg-zinc-200"
          >
            Log In
          </button>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col gap-5 border-t border-white/10 pt-6">
          <p className="text-center text-[10px] leading-relaxed text-zinc-400 font-medium">
            System access is monitored. Unauthorized entry is prohibited under military code.
          </p>
          <div className="flex justify-center gap-6">
            {/* Navigates to app/signup */}
            <Link href="/signup" className="text-[11px] font-bold uppercase tracking-wider text-white hover:opacity-70">
              Create Account
            </Link>
            {/* Navigates to app/help */}
            <Link href="/help" className="text-[11px] font-bold uppercase tracking-wider text-white hover:opacity-70">
              Helpdesk
            </Link>
          </div>
        </div>
      </main>

      <footer className="relative z-10 mt-8 flex flex-col items-center gap-1 opacity-60">
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-400">
          ATM JOIN V1.0.0
        </span>
      </footer>
    </div>
  );
}
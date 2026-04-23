"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="relative z-20 py-12 px-6 border-t border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6 text-center">
        <div className="flex items-center gap-3">
          <img src="/atmjoin-logo.png" alt="Logo" className="h-6 w-auto opacity-70" />
          <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
            © 2026 ATMJOIN. All Rights Reserved.
          </span>
        </div>
        <div className="flex gap-8">
          <a href="#" className="text-[10px] font-bold uppercase text-zinc-500 hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-[10px] font-bold uppercase text-zinc-500 hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
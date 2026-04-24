"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "ATM Branches", href: "/branches" },
  { name: "Careers", href: "/careers" },
  { name: "Eligibility", href: "/eligibility" },
  { name: "Guide", href: "/guide" },
  { name: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper function to determine if a link is active
  const checkActive = (href: string) => {
    // 1. Exact match for Home
    if (href === "/") return pathname === "/";
    
    // 2. Branch logic: Highlight if path starts with /branches
    if (href === "/branches") return pathname.startsWith("/branches");

    // 3. Careers logic: Highlight if path starts with /careers (includes roles, benefits, ranks)
    if (href === "/careers") return pathname.startsWith("/careers");
    
    // 4. Eligibility logic: Highlight if on /eligibility OR inside /eligibility/assessment
    if (href === "/eligibility") {
      return pathname === "/eligibility" || pathname.startsWith("/eligibility/assessment");
    }
    
    // 5. Default exact match for others
    return pathname === href;
  };

  return (
    <nav className="fixed top-0 z-50 w-full px-4 py-6 transition-all duration-300">
      <div className={`mx-auto max-w-7xl rounded-2xl border border-white/10 transition-all duration-300 ${
        scrolled ? "bg-black/60 backdrop-blur-md py-3 shadow-lg" : "bg-white/5 backdrop-blur-sm py-4"
      }`}>
        <div className="flex items-center justify-between px-6">
          
          <Link href="/" className="flex items-center gap-2">
            <img src="/atmjoin-logo.png" alt="Logo" className="h-8 w-auto" />
            <span className="text-sm font-black uppercase tracking-tighter text-white">ATMJOIN</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = checkActive(link.href);
              
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-[11px] font-bold uppercase tracking-widest transition-colors hover:text-white ${
                    isActive ? "text-emerald-400" : "text-zinc-400"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-emerald-400 animate-in fade-in zoom-in duration-300" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <Link 
              href="/login"
              className="rounded-xl bg-white px-6 py-2.5 text-[11px] font-black uppercase tracking-widest text-black transition-all hover:bg-zinc-200 hover:scale-105 active:scale-95"
            >
              Login
            </Link>
          </div>

          <button 
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 mt-2 w-full animate-in fade-in slide-in-from-top-4">
            <div className="mx-4 flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/95 p-6 backdrop-blur-xl">
              {navLinks.map((link) => {
                const isActive = checkActive(link.href);
                
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                      isActive ? "text-emerald-400" : "text-zinc-300"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <hr className="border-white/10" />
              <Link 
                href="/login"
                onClick={() => setIsOpen(false)}
                className="flex h-12 items-center justify-center rounded-xl bg-white text-xs font-black uppercase tracking-widest text-black"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
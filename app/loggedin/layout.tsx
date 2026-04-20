"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";

export default function LoggedInLayout({ children }: { children: React.ReactNode }) {
  return (
    /* Added 'font-sans' to ensure Geist Sans is the primary typeface */
    <div className="flex min-h-screen bg-zinc-950 text-white font-sans antialiased">
      <Sidebar />
      
      {/* Main Content Area: Responsive margin based on Sidebar */}
      <main className="flex-1 transition-all duration-500 ease-in-out pl-24 lg:pl-32 pr-8 py-8">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
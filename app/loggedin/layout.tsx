"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function LoggedInLayout({ children }: { children: React.ReactNode }) {
  // Ideally, you'd lift the 'isCollapsed' state here or use a Context/Zustand 
  // for a true production app. For this prototype, let's assume a static 
  // safe margin that accommodates both states.
  
  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">
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
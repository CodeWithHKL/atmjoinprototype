"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function LoggedInLayout({ children }: { children: React.ReactNode }) {
  // Shared state to sync Sidebar width with Main content margin
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-zinc-950 text-white font-sans antialiased overflow-x-hidden">
      {/* Sidebar now controlled by Layout state */}
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      
      {/* Main Content Area:
          - lg:pl-72: Expanded Sidebar (64 width + 8 spacing)
          - lg:pl-28: Collapsed Sidebar (20 width + 8 spacing)
          - pt-24: Space for mobile header
      */}
      <main 
        className={`
          flex-1 transition-all duration-500 ease-in-out 
          min-h-screen pt-24 lg:pt-8 pr-4 lg:pr-12 pb-8
          ${isCollapsed ? "lg:pl-28" : "lg:pl-72"} 
          pl-4
        `}
      >
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
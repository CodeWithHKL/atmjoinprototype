"use client";

import React, { useState, useMemo } from "react";
import { 
  Search, 
  Filter, 
  Download, 
  Terminal,
  Clock,
  ExternalLink,
  X,
  ChevronDown
} from "lucide-react";

// Mock Data
const logs = [
  { id: "LOG-9921", type: "System", user: "AUTO-VERIFY", msg: "Batch 2026-A automated verification complete.", time: "2026-04-26 14:02:11", status: "Success" },
  { id: "LOG-9920", type: "Alert", user: "SYS-ADMIN", msg: "Medical discrepancy flagged: Intake 194. Candidate ID: 8821. Detailed analysis shows heart rate variability outside standard military parameters.", time: "2026-04-26 13:50:04", status: "Flagged" },
  { id: "LOG-9919", type: "User", user: "Kapt. Zulkifli", msg: "Recruiter-04 archived transmission TX-8812.", time: "2026-04-26 12:44:22", status: "Complete" },
  { id: "LOG-9918", type: "Intake", user: "SYSTEM", msg: "Enlisted Intake 194 reached 60% capacity.", time: "2026-04-26 11:30:00", status: "Info" },
  { id: "LOG-9917", type: "Security", user: "Kapt. Zulkifli", msg: "Settings update: 2FA enabled for Admin.", time: "2026-04-26 09:12:55", status: "Success" },
  { id: "LOG-9916", type: "Auth", user: "Recruiter-09", msg: "Successful login from IP: 112.19.0.42", time: "2026-04-26 08:01:12", status: "Success" },
  { id: "LOG-9915", type: "Alert", user: "SYS-MONITOR", msg: "Database latency spike detected in Singapore-A1 node.", time: "2026-04-26 07:45:00", status: "Warning" },
];

export default function LogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrigin, setSelectedOrigin] = useState("All");
  const [selectedLog, setSelectedLog] = useState<typeof logs[0] | null>(null);

  const origins = ["All", ...Array.from(new Set(logs.map(log => log.type)))];

  const filteredLogs = useMemo(() => {
    return logs.filter((log) => {
      const matchesSearch = 
        log.msg.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.id.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesOrigin = selectedOrigin === "All" || log.type === selectedOrigin;

      return matchesSearch && matchesOrigin;
    });
  }, [searchTerm, selectedOrigin]);

  return (
    <div className="space-y-10 p-8 max-w-7xl mx-auto">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/5 pb-10">
        <div>
          <div className="flex items-center gap-3 mb-2">
             <Terminal size={20} className="text-emerald-500" />
             <h1 className="text-3xl font-bold tracking-tight text-white uppercase leading-none">
               Command <span className="text-emerald-500">Logs</span>
             </h1>
          </div>
          <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em]">
            SYSTEM STATUS & ACTIVITY LOGS
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 border border-white/10 rounded-xl text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white hover:border-emerald-500/50 hover:bg-zinc-800 transition-all active:scale-95">
            <Download size={14} /> Export CSV
          </button>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2 relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-emerald-500 transition-colors" size={16} />
          <input 
            type="text"
            placeholder="SEARCH REGISTRY..."
            value={searchTerm}
            className="w-full bg-zinc-950 border border-white/5 rounded-2xl py-3.5 pl-12 pr-4 text-[13px] font-mono text-emerald-500 focus:outline-none focus:border-emerald-500/50 transition-all placeholder:text-zinc-800 placeholder:tracking-widest"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="relative">
          <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={14} />
          <select 
            value={selectedOrigin}
            onChange={(e) => setSelectedOrigin(e.target.value)}
            className="w-full appearance-none bg-zinc-900/50 border border-white/5 rounded-2xl py-3.5 pl-10 pr-4 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:bg-zinc-800 transition-all focus:outline-none focus:border-emerald-500/50 cursor-pointer"
          >
            {origins.map(origin => (
              <option key={origin} value={origin} className="bg-zinc-900">{origin === "All" ? "Origin: ALL" : `Origin: ${origin.toUpperCase()}`}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 pointer-events-none" size={14} />
        </div>

        <button className="flex items-center justify-center gap-3 bg-zinc-900/50 border border-white/5 rounded-2xl py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:bg-zinc-800 transition-all active:scale-95">
          <Clock size={14} /> Time Range
        </button>
      </div>

      {/* LOG TABLE */}
      <div className="bg-zinc-900/40 border border-white/5 rounded-[2rem] overflow-hidden backdrop-blur-md shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-950/80 border-b border-white/5">
                <th className="px-6 py-5 text-[9px] font-bold text-zinc-500 uppercase tracking-[0.3em]">Event ID</th>
                <th className="px-6 py-5 text-[9px] font-bold text-zinc-500 uppercase tracking-[0.3em]">Origin</th>
                <th className="px-6 py-5 text-[9px] font-bold text-zinc-500 uppercase tracking-[0.3em]">Subject</th>
                <th className="px-6 py-5 text-[9px] font-bold text-zinc-500 uppercase tracking-[0.3em]">Message Payload</th>
                <th className="px-6 py-5 text-[9px] font-bold text-zinc-500 uppercase tracking-[0.3em]">Timestamp</th>
                <th className="px-6 py-5 text-[9px] font-bold text-zinc-500 uppercase tracking-[0.3em] text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredLogs.length > 0 ? (
                filteredLogs.map((log) => (
                  <tr key={log.id} className="group hover:bg-emerald-500/[0.02] transition-colors">
                    <td className="px-6 py-5">
                      <span className="text-[11px] font-mono text-zinc-500 group-hover:text-emerald-500 transition-colors">
                        {log.id}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <span className={`text-[8px] font-bold px-2 py-0.5 rounded-sm border uppercase tracking-widest ${
                        log.type === 'Alert' ? 'bg-rose-500/10 border-rose-500/20 text-rose-500' : 
                        log.type === 'Security' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' :
                        'bg-zinc-800/50 border-zinc-700/50 text-zinc-400'
                      }`}>
                        {log.type}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <p className="text-[11px] font-bold text-zinc-200 uppercase tracking-tight">{log.user}</p>
                    </td>
                    <td className="px-6 py-5 max-w-md">
                      <p className="text-[11px] text-zinc-400 font-medium leading-relaxed truncate group-hover:text-zinc-200 transition-colors">
                        {log.msg}
                      </p>
                    </td>
                    <td className="px-6 py-5">
                      <p className="text-[10px] font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors">
                        {log.time.split(' ').map((t, i) => i === 1 ? <span key={i} className="text-zinc-600 ml-1">{t}</span> : t)}
                      </p>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button 
                        onClick={() => setSelectedLog(log)}
                        className="p-2 rounded-xl bg-zinc-800/50 text-zinc-500 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all"
                      >
                        <ExternalLink size={14} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-24 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="h-px w-12 bg-zinc-800" />
                      <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.4em]">Zero transmissions matching criteria</p>
                      <div className="h-px w-12 bg-zinc-800" />
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        <div className="p-6 bg-zinc-950/40 border-t border-white/5 flex justify-between items-center">
          <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-[0.2em]">
            Registry Scan: <span className="text-zinc-400">{filteredLogs.length}</span> / <span className="text-zinc-400">{logs.length}</span> Entries
          </p>
          <div className="flex gap-2">
            <button className="px-5 py-2 bg-zinc-900 border border-white/5 rounded-xl text-[9px] font-bold text-zinc-500 uppercase tracking-widest hover:text-white hover:bg-zinc-800 transition-all">Prev</button>
            <button className="px-5 py-2 bg-zinc-900 border border-white/5 rounded-xl text-[9px] font-bold text-zinc-500 uppercase tracking-widest hover:text-white hover:bg-zinc-800 transition-all">Next</button>
          </div>
        </div>
      </div>

      {/* DETAIL MODAL CARD */}
      {selectedLog && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-zinc-900 border border-white/10 rounded-[2.5rem] w-full max-w-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="px-8 py-5 border-b border-white/5 bg-zinc-950/50 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse" />
                <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">Event Analysis Payload</h3>
              </div>
              <button onClick={() => setSelectedLog(null)} className="p-2 bg-white/5 rounded-full text-zinc-500 hover:text-white hover:bg-white/10 transition-all">
                <X size={16} />
              </button>
            </div>
            
            <div className="p-10 space-y-8">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <span className="block text-[9px] font-bold text-zinc-600 uppercase tracking-[0.2em] mb-2">Registry ID</span>
                  <p className="text-sm font-mono text-emerald-500 font-bold">{selectedLog.id}</p>
                </div>
                <div className="text-right">
                  <span className="block text-[9px] font-bold text-zinc-600 uppercase tracking-[0.2em] mb-2">Origin Class</span>
                  <p className="text-sm font-bold text-zinc-300 uppercase tracking-widest">{selectedLog.type}</p>
                </div>
              </div>

              <div className="bg-zinc-950/50 border border-white/5 rounded-2xl p-6">
                <span className="block text-[9px] font-bold text-zinc-600 uppercase tracking-[0.2em] mb-3">Target Subject</span>
                <p className="text-sm font-bold text-white uppercase tracking-tight">{selectedLog.user}</p>
                <div className="h-px w-full bg-white/5 my-4" />
                <span className="block text-[9px] font-bold text-zinc-600 uppercase tracking-[0.2em] mb-3">Log Message</span>
                <p className="text-[13px] text-zinc-300 leading-relaxed font-medium">
                  {selectedLog.msg}
                </p>
              </div>

              <div className="flex items-center justify-between">
                 <div>
                    <span className="block text-[9px] font-bold text-zinc-600 uppercase tracking-[0.2em] mb-1">Status</span>
                    <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-tighter">Verified_Secure</span>
                 </div>
                 <div className="text-right">
                    <span className="block text-[9px] font-bold text-zinc-600 uppercase tracking-[0.2em] mb-1">Dispatch Time</span>
                    <p className="text-[11px] font-mono text-zinc-500 uppercase">{selectedLog.time}</p>
                 </div>
              </div>
            </div>

            <div className="px-8 py-6 bg-zinc-950/50 border-t border-white/5 text-right">
              <button 
                onClick={() => setSelectedLog(null)} 
                className="px-8 py-3 bg-white text-black rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-emerald-500 hover:text-white transition-all active:scale-95"
              >
                Close Decryption
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
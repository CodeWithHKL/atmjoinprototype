"use client";

import React from "react";
import Link from "next/link";
import { 
  ChevronLeft, 
  Upload, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Trash2,
  Eye,
  FileCheck
} from "lucide-react";

const requiredDocs = [
  { id: "ic", name: "IC Copy (Front & Back)", status: "Verified", type: "Identification" },
  { id: "spm", name: "SPM Certificate", status: "Pending", type: "Academic" },
  { id: "birth", name: "Birth Certificate", status: "Missing", type: "Identification" },
  { id: "photo", name: "Passport Size Photo", status: "Verified", type: "Personal" },
];

export default function DocumentUpload() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      
      {/* HEADER */}
      <div className="mb-10">
        <Link 
          href="/loggedin/profile" 
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-white mb-4 transition-colors"
        >
          <ChevronLeft size={14} /> Back to Profile
        </Link>
        <h1 className="text-3xl font-black uppercase tracking-tight text-white">
          Document <span className="text-zinc-500">Vault</span>
        </h1>
        <p className="text-sm text-zinc-500 mt-2 uppercase tracking-widest font-bold">
          Required Credentials for Service Verification
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT: UPLOAD BOX */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 p-8 rounded-[2.5rem] bg-zinc-900 border border-white/5 border-dashed border-2 hover:border-emerald-500/50 transition-all group flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-2xl bg-white/5 flex items-center justify-center text-zinc-500 group-hover:text-emerald-400 group-hover:scale-110 transition-all mb-6">
              <Upload size={32} />
            </div>
            <h3 className="text-lg font-bold uppercase mb-2 text-white">Upload File</h3>
            <p className="text-xs text-zinc-500 mb-8 px-4">
              Drag and drop your digital copies here or click to browse.
            </p>
            
            <div className="w-full space-y-4">
              <div className="space-y-2 text-left">
                <label className="text-[9px] font-black uppercase tracking-widest text-zinc-600 ml-1">Document Category</label>
                <select 
                  defaultValue="academic"
                  className="w-full h-11 bg-white/5 border border-white/10 rounded-xl px-4 text-[10px] font-black uppercase tracking-widest focus:ring-2 focus:ring-emerald-500/40 outline-none transition-all appearance-none"
                >
                  <option value="identification">Identification</option>
                  <option value="academic">Academic Record</option>
                  <option value="medical">Medical Report</option>
                  <option value="other">Other Supporting</option>
                </select>
              </div>
              <button className="w-full h-12 rounded-xl bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-emerald-400 transition-all">
                Select Files
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT: DOCUMENT LIST */}
        <div className="lg:col-span-2 space-y-4">
          <div className="p-4 rounded-2xl bg-zinc-900/50 border border-white/5 flex items-center justify-between px-8">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Registry List</span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500">2 / 4 Uploaded</span>
          </div>

          {requiredDocs.map((doc) => (
            <div 
              key={doc.id}
              className="group p-6 rounded-[2rem] bg-zinc-900 border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.01] transition-all"
            >
              <div className="flex items-center gap-5">
                <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${
                  doc.status === 'Verified' ? 'bg-emerald-500/10 text-emerald-500' : 
                  doc.status === 'Pending' ? 'bg-amber-500/10 text-amber-500' : 'bg-zinc-800 text-zinc-600'
                }`}>
                  <FileText size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase text-white">{doc.name}</h4>
                  <p className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mt-1">{doc.type}</p>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 border-white/5 pt-4 md:pt-0">
                <div className="flex items-center gap-2">
                  {doc.status === 'Verified' && <CheckCircle2 size={14} className="text-emerald-500" />}
                  {doc.status === 'Pending' && <Clock size={14} className="text-amber-500 animate-pulse" />}
                  {doc.status === 'Missing' && <AlertCircle size={14} className="text-red-500" />}
                  <span className={`text-[9px] font-black uppercase tracking-widest ${
                    doc.status === 'Verified' ? 'text-emerald-500' : 
                    doc.status === 'Pending' ? 'text-amber-500' : 'text-red-500'
                  }`}>
                    {doc.status}
                  </span>
                </div>
                
                <div className="flex gap-2">
                  <button className="h-9 w-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-zinc-500 hover:text-white transition-all">
                    <Eye size={16} />
                  </button>
                  <button className="h-9 w-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-zinc-500 hover:text-red-400 transition-all">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* SECURITY FOOTNOTE */}
          <div className="mt-8 flex items-center gap-4 p-6 rounded-[2rem] bg-emerald-500/5 border border-emerald-500/10">
            <FileCheck size={24} className="text-emerald-500 shrink-0" />
            <p className="text-[10px] text-zinc-400 uppercase font-bold leading-relaxed tracking-wider">
              All documents are processed through <span className="text-white">Secure Encrypted Ingress</span>. Verified documents are locked and cannot be removed without Administrative Authorization.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

// Simple internal Clock component for the status icon
const Clock = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
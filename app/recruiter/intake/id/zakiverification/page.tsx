"use client";

import React from "react";
import Link from "next/link";
import {
  ChevronLeft, ShieldCheck, FileText,
  User, Hash, CalendarDays, Search, Fingerprint, Scale, 
  FileCheck, ShieldAlert, History, Landmark
} from "lucide-react";

const applicant = {
  name: "Ahmad Zaki",
  id: "APP-001",
  ic: "020312-14-5871",
  intake: "INTK-TDM-O-26-01",
  phase: "System Verification",
};

const verificationData = {
  verification_id: "VER-9901",
  date_verified: "12 APR 2024",
  document_status: "Valid",
  background_check: "Cleared",
  security_clearance: "Level 1",
  assigned_officer: "Kapt. Zulkifli",
  checklist: [
    { label: "Identification (IC/Passport)", status: "Verified", icon: User },
    { label: "Academic Certificates", status: "Verified", icon: FileCheck },
    { label: "Criminal Record Check", status: "Cleared", icon: Scale },
    { label: "Credit & Financial History", status: "Low Risk", icon: Landmark },
  ],
  academic_baseline: {
    cgpa: "3.80",
    min_required: "2.75",
    major: "B.Eng Mechanical",
    institution: "Universiti Malaya",
  },
  remarks: "All original documents cross-referenced with digital vault. No red flags found in criminal or financial background checks. Education background exceeds minimum requirements.",
};

function StatusBox({ label, value, subValue }: { label: string; value: string; subValue?: string }) {
  const isCleared = value === "Cleared" || value === "Valid" || value === "Verified";
  
  return (
    <div className="bg-zinc-900/40 rounded-2xl p-5 border border-white/5 flex flex-col justify-between h-32 backdrop-blur-sm">
      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-600">{label}</p>
      <div>
        <p className={`text-2xl font-bold tracking-tight ${isCleared ? "text-emerald-500" : "text-zinc-200"}`}>{value}</p>
        {subValue && <p className="text-[9px] font-bold text-zinc-500 mt-1 uppercase tracking-widest">{subValue}</p>}
      </div>
    </div>
  );
}

function VerificationItem({ label, status, icon: Icon }: { label: string; status: string; icon: any }) {
  return (
    <div className="flex items-center justify-between p-4 bg-zinc-950/50 rounded-xl border border-white/5 mb-2 last:mb-0 group hover:border-emerald-500/20 transition-all">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center border border-white/10">
          <Icon size={14} className="text-zinc-500 group-hover:text-emerald-500 transition-colors" />
        </div>
        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-1 w-1 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
        <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest font-mono">{status}</span>
      </div>
    </div>
  );
}

function InfoRow({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
      <div className="flex items-center gap-3">
        <Icon size={13} className="text-zinc-600" />
        <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">{label}</span>
      </div>
      <span className="text-[10px] font-bold text-zinc-300 font-mono">{value}</span>
    </div>
  );
}

export default function ZakiVerificationPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans p-6 lg:p-10 relative">
      
      {/* BACK NAV */}
      <Link
        href={`/recruiter/intake/id`}
        className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-emerald-500 mb-10 transition-colors"
      >
        <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        Return to Command
      </Link>

      {/* HEADER */}
      <header className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/5 pb-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white uppercase">
            {applicant.name.split(" ")[0]} <span className="text-emerald-500">{applicant.name.split(" ").slice(1).join(" ")}</span>
          </h1>
          <p className="text-zinc-500 text-[10px] font-bold tracking-widest mt-1 uppercase">
            ID: <span className="text-zinc-300 font-mono tracking-normal">{applicant.id}</span>
            <span className="text-zinc-800 mx-2">//</span>
            IC: <span className="text-zinc-300 font-mono tracking-normal">{applicant.ic}</span>
          </p>
        </div>

        {/* VERIFIED BADGE */}
        <div className="flex items-center gap-4 px-6 py-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm">
          <ShieldCheck size={20} className="text-emerald-500" />
          <div>
            <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest mb-0.5">System Status</p>
            <p className="text-sm font-bold text-emerald-500 uppercase tracking-[0.2em]">Authenticated</p>
          </div>
        </div>
      </header>

      <div className="grid md:grid-cols-12 gap-8">
        
        {/* LEFT — VERIFICATION METRICS */}
        <div className="md:col-span-4 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <StatusBox label="Document Status" value={verificationData.document_status} subValue="ID & ACADEMIC" />
            <StatusBox label="Background" value={verificationData.background_check} subValue="CRIMINAL & CIVIL" />
          </div>

          <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-6 backdrop-blur-sm shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <Search size={13} className="text-zinc-600" />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500">Processing Audit</span>
            </div>
            <div className="space-y-1">
              <InfoRow icon={Hash} label="Verification ID" value={verificationData.verification_id} />
              <InfoRow icon={CalendarDays} label="Audit Date" value={verificationData.date_verified} />
              <InfoRow icon={User} label="Officer" value={verificationData.assigned_officer} />
              <InfoRow icon={Fingerprint} label="Clearance" value={verificationData.security_clearance} />
            </div>
          </div>

          {/* Academic Profile */}
          <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-6 backdrop-blur-sm shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <FileText size={13} className="text-emerald-500" />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500">Education Baseline</span>
            </div>
            <div className="space-y-5">
              <div>
                <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Institution</p>
                <p className="text-xs font-bold text-zinc-200 uppercase tracking-tight">{verificationData.academic_baseline.institution}</p>
              </div>
              <div className="flex justify-between items-end pt-2 border-t border-white/5">
                <div>
                  <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Current CGPA</p>
                  <p className="text-3xl font-bold text-white tracking-tighter">{verificationData.academic_baseline.cgpa}</p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] font-bold text-zinc-700 uppercase tracking-widest mb-1">Threshold</p>
                  <p className="text-[10px] font-bold text-zinc-500 font-mono">MIN {verificationData.academic_baseline.min_required}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — CHECKLIST + REMARKS */}
        <div className="md:col-span-8 space-y-6">
          
          <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm shadow-2xl">
            <div className="flex items-center gap-2 mb-8">
              <ShieldAlert size={14} className="text-emerald-500" />
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Security & Document Checklist</h2>
            </div>
            <div className="grid gap-2">
              {verificationData.checklist.map((item) => (
                <VerificationItem key={item.label} {...item} />
              ))}
            </div>
          </div>

          <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <History size={14} className="text-zinc-500" />
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Officer Observations</h2>
            </div>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-emerald-500/30" />
              <p className="text-[13px] text-zinc-400 leading-relaxed font-medium pl-6 italic">
                "{verificationData.remarks}"
              </p>
            </div>
          </div>

          <div className="bg-zinc-900/20 border border-white/5 rounded-3xl p-6 flex items-center justify-between border-dashed">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-600 mb-1">Reference Number</p>
              <p className="text-[11px] font-bold font-mono text-zinc-400 uppercase tracking-widest">{applicant.intake}</p>
            </div>
            <div className="px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
              <p className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest">Phase: {applicant.phase}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
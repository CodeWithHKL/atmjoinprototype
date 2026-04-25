"use client";

import React from "react";
import Link from "next/link";
import { 
  User, MapPin, Fingerprint, 
  Edit3, GraduationCap, 
  FileText, Paperclip, Download
} from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-4 lg:p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* TOP HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tighter">Personnel <span className="text-emerald-500">File.</span></h1>
            <p className="text-zinc-500 text-[11px] mt-1 uppercase font-bold tracking-[0.2em]">Candidate ID: ATM-2026-99012</p>
          </div>
          
          <Link href="/loggedin/profile/edit">
            <button className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2">
              <Edit3 size={14} /> Update Information
            </button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN: PROFILE & DOCUMENTS */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* APPLICANT PROFILE CARD */}
            <div className="rounded-[2.5rem] bg-zinc-900 border border-white/5 p-8 text-center shadow-2xl">
              <div className="relative mx-auto w-32 h-32 mb-6">
                <div className="w-full h-full rounded-[2.5rem] bg-zinc-800 border border-zinc-950 overflow-hidden flex items-center justify-center">
                   <User size={60} className="text-zinc-700" />
                </div>
              </div>
              <h2 className="text-xl font-black uppercase tracking-tight leading-tight">Ahmad bin Mustaffa</h2>
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">Active Applicant Profile</p>
              
              <div className="mt-8 pt-8 border-t border-white/5">
                <p className="text-[11px] font-medium text-zinc-500 leading-relaxed italic">
                  Ensure all educational certificates uploaded match the original documents for phase 01 verification.
                </p>
              </div>
            </div>

            {/* DOCUMENTS CARD (DIGITAL DOSSIER) */}
            <div className="rounded-[2.5rem] bg-zinc-900 border border-white/5 p-8 shadow-2xl">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-6 flex items-center gap-2">
                <FileText size={14} className="text-emerald-500" /> Digital Dossier
              </h3>
              
              <div className="space-y-3">
                <DocumentItem label="Identification Card" filename="ic_front_back.pdf" />
                <DocumentItem label="Birth Certificate" filename="birth_cert_final.pdf" />
                <DocumentItem label="Degree Transcript" filename="official_transcript_um.pdf" />
                <DocumentItem label="SPM Certificate" filename="spm_results_2016.pdf" />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: DATA DOSSIER */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* PERSONAL INFO SECTION */}
            <section className="rounded-[2.5rem] bg-zinc-900 border border-white/5 p-8 lg:p-10 shadow-2xl">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-emerald-500 mb-8 flex items-center gap-2">
                <Fingerprint size={16} /> Personal Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                <DataField label="Full Name (As per IC)" value="Ahmad bin Mustaffa" />
                <DataField label="Identity Card Number" value="990102-14-XXXX" isMono />
                <DataField label="Date of Birth" value="02 JAN 1999" />
                <DataField label="Birth Certificate Number" value="AA 882012" isMono />
                <DataField label="Citizenship" value="Malaysian" />
                <DataField label="Gender" value="Male" />
                <DataField label="Race" value="Malay" />
                <DataField label="Ethnicity" value="Bumiputera" />
                <DataField label="Religion" value="Islam" />
                <DataField label="Marital Status" value="Single" />
                <DataField label="Country of Birth" value="Malaysia" />
                <DataField label="Place of Birth" value="Kuala Lumpur" />
              </div>
            </section>

            {/* EDUCATION BACKGROUND SECTION */}
            <section className="rounded-[2.5rem] bg-zinc-900 border border-white/5 p-8 lg:p-10 shadow-2xl">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-emerald-500 mb-8 flex items-center gap-2">
                <GraduationCap size={16} /> Education Background
              </h3>
              
              <div className="space-y-8">
                <div className="relative pl-8 border-l border-white/10">
                  <div className="absolute left-[-5px] top-0 h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                  <div className="grid md:grid-cols-2 gap-6">
                    <DataField label="Highest Qualification" value="Bachelor's Degree (Hons)" />
                    <DataField label="Institution Name" value="Universiti Malaya" />
                    <DataField label="Field of Study" value="Computer Science (Cybersecurity)" />
                    <DataField label="CGPA / Grade" value="3.85 / 4.00" isMono />
                    <DataField label="Graduation Year" value="2022" />
                  </div>
                </div>

                <div className="relative pl-8 border-l border-white/10">
                  <div className="absolute left-[-5px] top-0 h-2 w-2 rounded-full bg-zinc-700" />
                  <div className="grid md:grid-cols-2 gap-6">
                    <DataField label="Secondary Qualification" value="Sijil Pelajaran Malaysia (SPM)" />
                    <DataField label="School Name" value="SMK Victoria, Kuala Lumpur" />
                    <DataField label="Results" value="9A 1B" isMono />
                    <DataField label="Completion Year" value="2016" />
                  </div>
                </div>
              </div>
            </section>

            {/* ADDRESS INFO SECTION */}
            <section className="rounded-[2.5rem] bg-zinc-900 border border-white/5 p-8 lg:p-10 shadow-2xl">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-emerald-500 mb-8 flex items-center gap-2">
                <MapPin size={16} /> Address & Contact Details
              </h3>
              
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                <div className="md:col-span-2">
                  <DataField label="Current Address" value="No. 24, Jalan Wangsa Maju, Seksyen 2, Setapak" />
                </div>
                <DataField label="City / Town" value="Kuala Lumpur" />
                <DataField label="Postcode" value="53300" isMono />
                <DataField label="State" value="Wilayah Persekutuan" />
                <DataField label="Email Address" value="ahmad.m@email.com" />
                <DataField label="Mobile Phone Number" value="+60 12-345 6789" isMono />
                <DataField label="Home Phone Number" value="+60 3-4142 XXXX" isMono />
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}

function DocumentItem({ label, filename }: { label: string, filename: string }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors group">
      <div className="flex items-center gap-3 overflow-hidden">
        <Paperclip size={14} className="text-zinc-600 group-hover:text-emerald-500 transition-colors shrink-0" />
        <div className="overflow-hidden">
          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-tight leading-none mb-1">{label}</p>
          <p className="text-[11px] font-medium text-zinc-300 truncate">{filename}</p>
        </div>
      </div>
      <button className="p-2 rounded-lg hover:bg-emerald-500/10 text-zinc-500 hover:text-emerald-500 transition-all shrink-0">
        <Download size={14} />
      </button>
    </div>
  );
}

function DataField({ label, value, isMono = false }: { label: string, value: string, isMono?: boolean }) {
  return (
    <div className="border-b border-white/[0.03] pb-2 group">
      <label className="text-[9px] font-bold text-zinc-600 uppercase tracking-[0.15em] block mb-1 group-hover:text-zinc-500 transition-colors">
        {label}
      </label>
      <p className={`text-[13px] font-bold text-zinc-200 tracking-tight ${isMono ? "font-mono tracking-widest text-emerald-400/80" : "uppercase"}`}>
        {value}
      </p>
    </div>
  );
}
"use client";

import React from "react";
import Link from "next/link";
import { 
  ChevronLeft, 
  Save, 
  User, 
  MapPin, 
  GraduationCap, 
  AlertCircle,
  Camera,
  UploadCloud,
  FileText,
  Plus,
  Trash2,
  Paperclip
} from "lucide-react";

export default function EditProfile() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-4 lg:p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER ACTIONS */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <Link 
              href="/loggedin/profile" 
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors mb-4"
            >
              <ChevronLeft size={14} /> Discard Changes
            </Link>
            <h1 className="text-4xl font-black uppercase tracking-tighter">Edit <span className="text-emerald-500">Personnel Record.</span></h1>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <Link 
              href="/loggedin/profile"
              className="flex-1 md:flex-none px-6 py-4 rounded-xl border border-white/10 text-[10px] font-bold uppercase tracking-widest hover:bg-white/5 transition-all text-center"
            >
              Cancel
            </Link>
            <button className="flex-1 md:flex-none px-8 py-4 rounded-xl bg-emerald-500 text-black text-[10px] font-bold uppercase tracking-widest hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <Save size={16} /> Save Changes
            </button>
          </div>
        </div>

        {/* SECTION: IDENTITY PORTRAIT */}
        <section className="mb-8 rounded-[2.5rem] bg-zinc-900 border border-white/5 p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-10 border-b border-white/5 pb-6">
            <Camera size={18} className="text-emerald-500" />
            <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-white">Identity Portrait</h3>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="relative mx-auto md:mx-0 w-32 h-32 shrink-0">
                <div className="w-full h-full rounded-[2.5rem] bg-zinc-800 border-4 border-zinc-950 overflow-hidden flex items-center justify-center">
                   <User size={60} className="text-zinc-700" />
                </div>
            </div>

            <div className="flex-1 flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1 border-2 border-dashed border-white/10 rounded-2xl p-6 bg-zinc-950/50 hover:border-emerald-500/30 hover:bg-emerald-500/[0.02] cursor-pointer transition-all group text-center">
                    <UploadCloud size={24} className="mx-auto text-zinc-600 group-hover:text-emerald-500 mb-3 transition-colors" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">Choose New Image</span>
                    <p className="text-[9px] font-medium text-zinc-600 mt-1 uppercase tracking-tighter">JPEG, PNG • Max 500kb</p>
                </div>
                
                <div className="flex-1 space-y-3 rounded-2xl bg-white/[0.02] border border-white/5 p-6">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 block">Portrait protocol</span>
                   <p className="text-[11px] font-medium text-zinc-400 leading-relaxed">
                     Image must be a formal passport-style portrait. Ensure face is clear against a neutral background.
                   </p>
                </div>
            </div>
          </div>
        </section>

        {/* SECTION: DIGITAL DOSSIER (DOCUMENT UPLOADS) */}
        <FormSection 
          title="Digital Dossier Management" 
          icon={<FileText size={18} className="text-emerald-500" />}
        >
          <div className="space-y-4">
            <p className="text-[11px] font-medium text-zinc-500 mb-6 italic">Upload clear PDF scans of your original documents. Max 2MB per file.</p>
            
            <div className="grid gap-4">
              <DocumentUploadRow title="Identification Card" filename="ic_front_back.pdf" date="Uploaded 02 May 2026" />
              <DocumentUploadRow title="Birth Certificate" filename="birth_cert_final.pdf" date="Uploaded 02 May 2026" />
              <DocumentUploadRow title="Degree Transcript" filename="No file chosen" isMissing />
              <DocumentUploadRow title="Degree Transcript" filename="No file chosen" isMissing />
            </div>

            <button className="w-full mt-4 flex items-center justify-center gap-2 py-4 rounded-xl border border-dashed border-white/10 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-emerald-500 hover:border-emerald-500/50 hover:bg-emerald-500/[0.02] transition-all">
              <Plus size={14} /> Add Supplemental Document
            </button>
          </div>
        </FormSection>

        {/* SECTION: PERSONAL IDENTITY */}
        <div className="mt-8 space-y-8">
          <FormSection 
            title="Personal Identity" 
            icon={<User size={18} className="text-emerald-500" />}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <InputField label="Full Name (As per IC)" defaultValue="AHMAD BIN MUSTAFFA" />
              <InputField label="Identity Card Number" defaultValue="990102-14-XXXX" />
              <InputField label="Date of Birth" type="date" defaultValue="1999-01-02" />
              <InputField label="Birth Certificate Number" defaultValue="AA 882012" />
              
              <SelectField label="Citizenship" options={["Malaysian", "Non-Malaysian"]} defaultValue="Malaysian" />
              <SelectField label="Gender" options={["Male", "Female"]} defaultValue="Male" />
              <SelectField label="Religion" options={["Islam", "Christian", "Buddhist", "Hindu", "Sikh", "Other"]} defaultValue="Islam" />
              <SelectField label="Race" options={["Malay", "Chinese", "Indian", "Other"]} defaultValue="Malay" />
              <InputField label="Ethnicity" defaultValue="Bumiputera" />
              <SelectField label="Marital Status" options={["Single", "Married", "Divorced", "Widowed"]} defaultValue="Single" />
              <InputField label="Country of Birth" defaultValue="Malaysia" />
              <InputField label="Place of Birth" defaultValue="Kuala Lumpur" />
            </div>
          </FormSection>

          {/* SECTION: EDUCATION */}
          <FormSection 
            title="Education History" 
            icon={<GraduationCap size={18} className="text-emerald-500" />}
          >
            <div className="space-y-8">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <p className="text-[10px] font-bold uppercase text-zinc-500 mb-6 tracking-widest">Tertiary Level</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <SelectField label="Highest Qualification" options={["Bachelor's Degree (Hons)", "Diploma", "Master's Degree"]} defaultValue="Bachelor's Degree (Hons)" />
                  <InputField label="Institution Name" defaultValue="Universiti Malaya" />
                  <InputField label="Field of Study" defaultValue="Computer Science (Cybersecurity)" />
                  <InputField label="CGPA / Grade" defaultValue="3.85 / 4.00" />
                  <InputField label="Graduation Year" defaultValue="2022" />
                </div>
              </div>
            </div>
          </FormSection>

          {/* SECTION: CONTACT */}
          <FormSection 
            title="Contact & Location" 
            icon={<MapPin size={18} className="text-emerald-500" />}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <InputField label="Current Address" defaultValue="No. 24, Jalan Wangsa Maju, Seksyen 2, Setapak" />
              </div>
              <InputField label="Postcode" defaultValue="53300" />
              <InputField label="City / Town" defaultValue="Kuala Lumpur" />
              <SelectField label="State" options={["Kuala Lumpur", "Selangor", "Johor"]} defaultValue="Kuala Lumpur" />
              <InputField label="Email Address" type="email" defaultValue="ahmad.m@email.com" />
              <InputField label="Mobile Number" defaultValue="+60 12-345 6789" />
            </div>
          </FormSection>

          {/* WARNING FOOTER */}
          <div className="p-6 rounded-3xl bg-amber-500/5 border border-amber-500/10 flex items-start gap-4">
            <AlertCircle className="text-amber-500 shrink-0 mt-0.5" size={20} />
            <p className="text-[10px] font-bold text-amber-200/60 uppercase leading-relaxed tracking-wide">
              Discrepancies between this digital record and physical documents during verification will result in immediate disqualification.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// DOCUMENT UPLOAD ROW COMPONENT
function DocumentUploadRow({ title, filename, date, isMissing = false }: { title: string, filename: string, date?: string, isMissing?: boolean }) {
  return (
    <div className={`flex flex-col md:flex-row md:items-center justify-between p-4 rounded-2xl border transition-all ${isMissing ? 'bg-red-500/5 border-red-500/20' : 'bg-white/[0.02] border-white/5'}`}>
      <div className="flex items-center gap-4 mb-4 md:mb-0">
        <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${isMissing ? 'bg-red-500/10 text-red-500' : 'bg-emerald-500/10 text-emerald-500'}`}>
          <Paperclip size={18} />
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-tight text-zinc-500 mb-1">{title}</p>
          <p className={`text-[12px] font-bold ${isMissing ? 'text-red-400' : 'text-zinc-200'}`}>{filename}</p>
          {!isMissing && <p className="text-[9px] font-medium text-zinc-600 uppercase mt-0.5">{date}</p>}
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <button className="flex-1 md:flex-none px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-[10px] font-bold uppercase tracking-widest transition-all">
          {isMissing ? 'Upload' : 'Replace'}
        </button>
        {!isMissing && (
          <button className="p-2 rounded-lg hover:bg-red-500/10 text-zinc-600 hover:text-red-500 transition-all">
            <Trash2 size={16} />
          </button>
        )}
      </div>
    </div>
  );
}

function FormSection({ title, icon, children }: { title: string, icon: React.ReactNode, children: React.ReactNode }) {
  return (
    <section className="rounded-[2.5rem] bg-zinc-900 border border-white/5 p-8 lg:p-10 transition-all hover:border-white/10 shadow-2xl">
      <div className="flex items-center gap-3 mb-10">
        {icon}
        <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-white">{title}</h3>
      </div>
      {children}
    </section>
  );
}

function InputField({ label, placeholder, defaultValue, type = "text" }: { label: string, placeholder?: string, defaultValue?: string, type?: string }) {
  return (
    <div className="space-y-2 group">
      <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest ml-1 group-focus-within:text-emerald-500 transition-colors">
        {label}
      </label>
      <input 
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3.5 text-sm font-bold text-white placeholder:text-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
      />
    </div>
  );
}

function SelectField({ label, options, defaultValue }: { label: string, options: string[], defaultValue?: string }) {
  return (
    <div className="space-y-2 group">
      <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest ml-1 group-focus-within:text-emerald-500 transition-colors">
        {label}
      </label>
      <div className="relative">
        <select 
          defaultValue={defaultValue}
          className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3.5 text-sm font-bold text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all appearance-none cursor-pointer"
        >
          {options.map((opt) => (
            <option key={opt} value={opt} className="bg-zinc-900 text-white">{opt}</option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
          <Plus size={14} className="rotate-45" />
        </div>
      </div>
    </div>
  );
}
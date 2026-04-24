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
  FileCode
} from "lucide-react";

export default function EditProfile() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-4 lg:p-8">
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER ACTIONS */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <Link 
              href="/loggedin/profile" 
              className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-white transition-colors mb-4"
            >
              <ChevronLeft size={14} /> Discard Changes
            </Link>
            <h1 className="text-4xl font-black uppercase tracking-tighter">Edit <span className="text-emerald-500">Personnel Record.</span></h1>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <Link 
              href="/loggedin/profile"
              className="flex-1 md:flex-none px-6 py-4 rounded-xl border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all text-center"
            >
              Cancel
            </Link>
            <button className="flex-1 md:flex-none px-8 py-4 rounded-xl bg-emerald-500 text-black text-[10px] font-black uppercase tracking-widest hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <Save size={16} /> Save Changes
            </button>
          </div>
        </div>

        {/* PROFILE PICTURE UPLOAD AREA */}
        <section className="mb-10 rounded-[2.5rem] bg-zinc-900 border border-white/5 p-8 lg:p-10 hover:border-white/10 transition-all">
          <div className="flex items-center gap-3 mb-10 border-b border-white/5 pb-6">
            <Camera size={18} className="text-emerald-500" />
            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-white">Identity Portrait</h3>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            {/* Current View */}
            <div className="relative mx-auto md:mx-0 w-32 h-32 shrink-0">
                <div className="w-full h-full rounded-[2.5rem] bg-zinc-800 border-4 border-zinc-950 overflow-hidden flex items-center justify-center">
                   <User size={60} className="text-zinc-700" />
                </div>
            </div>

            {/* Upload Control */}
            <div className="flex-1 flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1 border-2 border-dashed border-white/10 rounded-2xl p-6 bg-zinc-950/50 hover:border-emerald-500/30 hover:bg-emerald-500/[0.02] cursor-pointer transition-all group">
                    <div className="flex flex-col items-center justify-center text-center">
                        <UploadCloud size={24} className="text-zinc-600 group-hover:text-emerald-500 mb-3 transition-colors" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-300">Choose New Image</span>
                        <span className="text-[9px] font-medium text-zinc-600 mt-1 uppercase">JPEG, PNG • Max 500kb</span>
                    </div>
                </div>
                
                <div className="flex-1 space-y-4 rounded-2xl bg-white/[0.02] border border-white/5 p-6">
                   <div className="flex items-center gap-3">
                       <FileCode size={16} className="text-emerald-500" />
                       <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Requirements</span>
                   </div>
                   <p className="text-[9px] font-bold text-zinc-300 uppercase leading-relaxed tracking-tight">
                       Image must be a formal portrait (Passport style). Face must be clear against a neutral background. Dimensions must be at least 300x300 pixels.
                   </p>
                </div>
            </div>
          </div>
        </section>

        {/* FORM BODY */}
        <div className="space-y-8">
          
          {/* SECTION: PERSONAL */}
          <FormSection 
            title="Personal Identity" 
            icon={<User size={18} className="text-emerald-500" />}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <InputField label="Full Name (As per IC)" placeholder="e.g. AHMAD BIN MUSTAFFA" defaultValue="AHMAD BIN MUSTAFFA" />
              <InputField label="Identity Card Number" placeholder="000000-00-0000" defaultValue="990102-14-XXXX" />
              <InputField label="Date of Birth" type="date" defaultValue="1999-01-02" />
              <InputField label="Birth Certificate Number" placeholder="e.g. AA 000000" defaultValue="AA 882012" />
              
              <SelectField label="Citizenship" options={["Malaysian", "Non-Malaysian"]} defaultValue="Malaysian" />
              <SelectField label="Gender" options={["Male", "Female"]} defaultValue="Male" />
              <SelectField label="Religion" options={["Islam", "Christian", "Buddhist", "Hindu", "Sikh", "Other"]} defaultValue="Islam" />
              <SelectField label="Race" options={["Malay", "Chinese", "Indian", "Other"]} defaultValue="Malay" />
              <InputField label="Ethnicity" placeholder="e.g. Bumiputera" defaultValue="Bumiputera" />
              <SelectField label="Marital Status" options={["Single", "Married", "Divorced", "Widowed"]} defaultValue="Single" />
              <InputField label="Country of Birth" defaultValue="Malaysia" />
              <InputField label="Place of Birth" placeholder="State/City" defaultValue="Kuala Lumpur" />
            </div>
          </FormSection>

          {/* SECTION: EDUCATION */}
          <FormSection 
            title="Education History" 
            icon={<GraduationCap size={18} className="text-emerald-500" />}
          >
            <div className="space-y-8">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <p className="text-[10px] font-black uppercase text-zinc-500 mb-6">Tertiary Level</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <SelectField label="Highest Qualification" options={["Bachelor's Degree (Hons)", "Diploma", "Master's Degree"]} defaultValue="Bachelor's Degree (Hons)" />
                  <InputField label="Institution Name" defaultValue="Universiti Malaya" />
                  <InputField label="Field of Study" defaultValue="Computer Science (Cybersecurity)" />
                  <InputField label="CGPA / Grade" defaultValue="3.85 / 4.00" />
                  <InputField label="Graduation Year" defaultValue="2022" />
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <p className="text-[10px] font-black uppercase text-zinc-500 mb-6">Secondary Level</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <InputField label="Secondary Qualification" defaultValue="Sijil Pelajaran Malaysia (SPM)" />
                  <InputField label="School Name" defaultValue="SMK Victoria, Kuala Lumpur" />
                  <InputField label="Results (e.g. 9A 1B)" defaultValue="9A 1B" />
                  <InputField label="Completion Year" defaultValue="2016" />
                </div>
              </div>
            </div>
          </FormSection>

          {/* SECTION: ADDRESS */}
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
              <SelectField label="State" options={["Kuala Lumpur", "Selangor", "Johor", "Penang", "Perak", "Pahang", "Negeri Sembilan", "Melaka", "Kedah", "Kelantan", "Terengganu", "Perlis", "Sabah", "Sarawak", "Labuan", "Putrajaya"]} defaultValue="Kuala Lumpur" />
              <InputField label="Email Address" type="email" defaultValue="ahmad.m@email.com" />
              <InputField label="Mobile Phone Number" defaultValue="+60 12-345 6789" />
              <InputField label="Home Phone Number" defaultValue="+60 3-4142 XXXX" />
            </div>
          </FormSection>

          {/* WARNING FOOTER */}
          <div className="p-6 rounded-3xl bg-amber-500/5 border border-amber-500/10 flex items-start gap-4">
            <AlertCircle className="text-amber-500 shrink-0 mt-0.5" size={20} />
            <p className="text-[10px] font-bold text-amber-200/60 uppercase leading-relaxed tracking-wide">
              Important: Any discrepancies between the information provided here and your physical documents discovered during Phase 03 or 05 will result in immediate termination of all active applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Layout Wrapper for Form Sections
function FormSection({ title, icon, children }: { title: string, icon: React.ReactNode, children: React.ReactNode }) {
  return (
    <section className="rounded-[2.5rem] bg-zinc-900 border border-white/5 p-8 lg:p-10 transition-all hover:border-white/10">
      <div className="flex items-center gap-3 mb-10">
        {icon}
        <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-white">{title}</h3>
      </div>
      {children}
    </section>
  );
}

// Interactive Input Field
function InputField({ label, placeholder, defaultValue, type = "text" }: { label: string, placeholder?: string, defaultValue?: string, type?: string }) {
  return (
    <div className="space-y-2 group">
      <label className="text-[9px] font-black text-zinc-500 uppercase tracking-widest ml-1 group-focus-within:text-emerald-500 transition-colors">
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

// Custom Select Field
function SelectField({ label, options, defaultValue }: { label: string, options: string[], defaultValue?: string }) {
  return (
    <div className="space-y-2 group">
      <label className="text-[9px] font-black text-zinc-500 uppercase tracking-widest ml-1 group-focus-within:text-emerald-500 transition-colors">
        {label}
      </label>
      <select 
        defaultValue={defaultValue}
        className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3.5 text-sm font-bold text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all appearance-none cursor-pointer"
      >
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-zinc-900 text-white">{opt}</option>
        ))}
      </select>
    </div>
  );
}
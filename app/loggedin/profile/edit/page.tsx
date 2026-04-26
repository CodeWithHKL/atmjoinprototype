"use client";

import React, { useState, ChangeEvent } from "react";
import Link from "next/link";
import { 
  User, MapPin, Fingerprint, 
  Save, X, GraduationCap, 
  Upload, ChevronLeft, FileText,
  Trash2, Plus, Paperclip
} from "lucide-react";

// 1. Define the interface for the Form State
interface FormData {
  fullName: string;
  icNumber: string;
  dob: string;
  birthCert: string;
  citizenship: string;
  gender: string;
  race: string;
  ethnicity: string;
  religion: string;
  maritalStatus: string;
  countryBirth: string;
  placeBirth: string;
  highestQual: string;
  uniName: string;
  fieldStudy: string;
  cgpa: string;
  gradYear: string;
  secondaryQual: string;
  schoolName: string;
  results: string;
  completionYear: string;
  address: string;
  city: string;
  postcode: string;
  state: string;
  email: string;
  mobile: string;
  homePhone: string;
}

// 2. Define Prop Interfaces for Helpers
interface InputFieldProps {
  label: string;
  name: keyof FormData;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  type?: string;
  isMono?: boolean;
}

interface SelectFieldProps {
  label: string;
  name: keyof FormData;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}

export default function ProfileEditPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "Ahmad Zaki Bin Osman",
    icNumber: "020412-02-0551",
    dob: "2002-04-12",
    birthCert: "BC-9988221",
    citizenship: "Malaysian",
    gender: "Male",
    race: "Malay",
    ethnicity: "Bumiputera",
    religion: "Islam",
    maritalStatus: "Single",
    countryBirth: "Malaysia",
    placeBirth: "Hospital Sultanah Bahiyah, Alor Setar",
    highestQual: "Bachelor's Degree (Hons)",
    uniName: "Universiti Malaya",
    fieldStudy: "Computer Science (Cybersecurity)",
    cgpa: "3.85 / 4.00",
    gradYear: "2022",
    secondaryQual: "Sijil Pelajaran Malaysia (SPM)",
    schoolName: "SMK Victoria, Kuala Lumpur",
    results: "9A 1B",
    completionYear: "2016",
    address: "No 14, Jalan Pahlawan 5/1, Taman Greenwood",
    city: "Alor Setar",
    postcode: "05000",
    state: "Kedah",
    email: "zaki.osman@email.com",
    mobile: "+60 12-445 6789",
    homePhone: "+60 4-733 1122"
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ 
      ...prev, 
      [name as keyof FormData]: value 
    }));
  };

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white font-sans selection:bg-emerald-500/30">
      <div className="fixed inset-0 z-0 bg-[url('/Camo.jpg')] bg-cover bg-center bg-fixed opacity-[0.08]" aria-hidden="true" />

      <div className="relative z-10 p-4 lg:p-8">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
            <div>
              <Link href="/loggedin/profile" className="flex items-center gap-2 text-zinc-500 hover:text-emerald-500 transition-colors mb-2 group">
                <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span className="text-[10px] font-black uppercase tracking-widest">Return to File</span>
              </Link>
              <h1 className="text-4xl font-black uppercase tracking-tighter">Edit <span className="text-emerald-500">Personnel Record.</span></h1>
            </div>
            
            <div className="flex gap-4">
              <Link href="/loggedin/profile">
                <button className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all">
                  Cancel
                </button>
              </Link>
              <button className="px-8 py-3 rounded-xl bg-emerald-500 text-black text-[10px] font-black uppercase tracking-widest hover:bg-emerald-400 transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20">
                <Save size={14} /> Save Changes
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 space-y-6">
              <div className="rounded-[2.5rem] bg-black/40 backdrop-blur-2xl border border-white/10 p-8 text-center shadow-2xl">
                <div className="relative mx-auto w-32 h-32 mb-6 group cursor-pointer">
                  <div className="w-full h-full rounded-[2.5rem] bg-zinc-900 border-2 border-dashed border-white/10 flex flex-col items-center justify-center group-hover:border-emerald-500/50 transition-all">
                    <User size={40} className="text-zinc-700 group-hover:text-emerald-500" />
                    <span className="text-[8px] font-black uppercase tracking-tighter text-zinc-500 mt-2">Update Photo</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 h-8 w-8 bg-emerald-500 rounded-lg flex items-center justify-center text-black shadow-lg">
                    <Upload size={14} />
                  </div>
                </div>
                <h2 className="text-lg font-black uppercase">{formData.fullName}</h2>
                <p className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Personnel ID: APP-001</p>
              </div>

              <div className="rounded-[2.5rem] bg-black/40 backdrop-blur-2xl border border-white/10 p-8 shadow-2xl">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-6 flex items-center justify-between">
                  <span className="flex items-center gap-2"><FileText size={14} className="text-emerald-500" /> Digital Dossier</span>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="text-emerald-500 hover:text-white transition-colors p-1"
                  >
                    <Plus size={18} />
                  </button>
                </h3>
                <div className="space-y-3">
                  <FileEditItem label="Identification Card" filename="ic_front_back.pdf" />
                  <FileEditItem label="Birth Certificate" filename="birth_cert_final.pdf" />
                  <FileEditItem label="Degree Transcript" filename="official_transcript_um.pdf" />
                  <FileEditItem label="SPM Certificate" filename="spm_results_2016.pdf" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-8">
              <section className="rounded-[2.5rem] bg-black/40 backdrop-blur-2xl border border-white/10 p-8 lg:p-10 shadow-2xl">
                <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-emerald-500 mb-8 flex items-center gap-2">
                  <Fingerprint size={16} /> Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <InputField label="Full Name (As per IC)" name="fullName" value={formData.fullName} onChange={handleChange} />
                  <InputField label="Identity Card Number" name="icNumber" value={formData.icNumber} onChange={handleChange} isMono />
                  <InputField label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleChange} isMono />
                  <InputField label="Birth Certificate Number" name="birthCert" value={formData.birthCert} onChange={handleChange} isMono />
                  <SelectField label="Citizenship" name="citizenship" value={formData.citizenship} onChange={handleChange} options={["Malaysian", "Permanent Resident", "Other"]} />
                  <SelectField label="Gender" name="gender" value={formData.gender} onChange={handleChange} options={["Male", "Female"]} />
                  <SelectField label="Race" name="race" value={formData.race} onChange={handleChange} options={["Malay", "Chinese", "Indian", "Other"]} />
                  <SelectField label="Ethnicity" name="ethnicity" value={formData.ethnicity} onChange={handleChange} options={["Malay", "Bugis","Boyan", "Banjar","Jawa", "Jawi Pekan","Minangkabau"]} />
                  <SelectField label="Religion" name="religion" value={formData.religion} onChange={handleChange} options={["Islam", "Christianity", "Buddhism", "Hinduism", "Sikhism", "Other"]} />
                  <SelectField label="Marital Status" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} options={["Single", "Married", "Divorced"]} />
                  <InputField label="Country of Birth" name="countryBirth" value={formData.countryBirth} onChange={handleChange} />
                  <InputField label="Place of Birth" name="placeBirth" value={formData.placeBirth} onChange={handleChange} />
                </div>
              </section>

              <section className="rounded-[2.5rem] bg-black/40 backdrop-blur-2xl border border-white/10 p-8 lg:p-10 shadow-2xl">
                <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-emerald-500 mb-8 flex items-center gap-2">
                  <GraduationCap size={16} /> Education Background
                </h3>
                <div className="space-y-6">
                  <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 space-y-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Primary Qualification</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <InputField label="Highest Qualification" name="highestQual" value={formData.highestQual} onChange={handleChange} />
                      <InputField label="Institution Name" name="uniName" value={formData.uniName} onChange={handleChange} />
                      <InputField label="Field of Study" name="fieldStudy" value={formData.fieldStudy} onChange={handleChange} />
                      <InputField label="CGPA / Grade" name="cgpa" value={formData.cgpa} onChange={handleChange} isMono />
                      <InputField label="Graduation Year" name="gradYear" value={formData.gradYear} onChange={handleChange} isMono />
                    </div>
                  </div>

                  <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 space-y-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-2 w-2 rounded-full bg-zinc-600" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Secondary Qualification</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <InputField label="Secondary Qualification" name="secondaryQual" value={formData.secondaryQual} onChange={handleChange} />
                      <InputField label="School Name" name="schoolName" value={formData.schoolName} onChange={handleChange} />
                      <InputField label="Results" name="results" value={formData.results} onChange={handleChange} isMono />
                      <InputField label="Completion Year" name="completionYear" value={formData.completionYear} onChange={handleChange} isMono />
                    </div>
                  </div>
                </div>
              </section>

              <section className="rounded-[2.5rem] bg-black/40 backdrop-blur-2xl border border-white/10 p-8 lg:p-10 shadow-2xl">
                <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-emerald-500 mb-8 flex items-center gap-2">
                  <MapPin size={16} /> Contact Details
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <InputField label="Current Address" name="address" value={formData.address} onChange={handleChange} />
                  </div>
                  <InputField label="City / Town" name="city" value={formData.city} onChange={handleChange} />
                  <InputField label="Postcode" name="postcode" value={formData.postcode} onChange={handleChange} isMono />
                  <SelectField label="State" name="state" value={formData.state} onChange={handleChange} options={["Kedah", "Wilayah Persekutuan", "Selangor", "Johor", "Penang", "Perak", "Sabah", "Sarawak"]} />
                  <InputField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} />
                  <InputField label="Mobile Number" name="mobile" value={formData.mobile} onChange={handleChange} isMono />
                  <InputField label="Home Number" name="homePhone" value={formData.homePhone} onChange={handleChange} isMono />
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="relative w-full max-w-lg bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-black uppercase tracking-tighter flex items-center gap-2">
                  <Paperclip className="text-emerald-500" size={20} />
                  Upload <span className="text-emerald-500">Document.</span>
                </h3>
                <button onClick={() => setIsModalOpen(false)} className="text-zinc-500 hover:text-white transition-colors">
                  <X size={24} />
                </button>
              </div>
              <div className="space-y-6">
                <div className="border-2 border-dashed border-white/10 rounded-3xl p-10 flex flex-col items-center justify-center bg-white/5 hover:bg-white/10 hover:border-emerald-500/50 transition-all cursor-pointer group">
                  <Upload size={40} className="text-zinc-600 group-hover:text-emerald-500 transition-colors mb-4" />
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-zinc-200">Click or drag to upload</p>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-emerald-500 uppercase tracking-widest block ml-1">Document Description</label>
                  <textarea placeholder="E.g. Signed medical report..." className="w-full bg-black/40 border border-white/10 rounded-2xl px-4 py-3 text-[12px] text-zinc-200 focus:outline-none focus:border-emerald-500/50 transition-all min-h-[100px] resize-none" />
                </div>
                <div className="flex gap-4 pt-4">
                  <button onClick={() => setIsModalOpen(false)} className="flex-1 px-6 py-4 rounded-2xl bg-white/5 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Cancel</button>
                  <button className="flex-1 px-6 py-4 rounded-2xl bg-emerald-500 text-black text-[10px] font-black uppercase tracking-widest hover:bg-emerald-400 transition-all shadow-lg">Initiate Upload</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function InputField({ label, name, value, onChange, type = "text", isMono = false }: InputFieldProps) {
  return (
    <div className="group">
      <label className="text-[9px] font-black text-zinc-500 uppercase tracking-widest block mb-1.5 ml-1 group-focus-within:text-emerald-500 transition-colors">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-[13px] font-bold text-zinc-200 transition-all focus:outline-none focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/50 ${isMono ? "font-mono text-emerald-400" : "uppercase"}`}
      />
    </div>
  );
}

function SelectField({ label, name, value, onChange, options }: SelectFieldProps) {
  return (
    <div className="group">
      <label className="text-[9px] font-black text-zinc-500 uppercase tracking-widest block mb-1.5 ml-1 group-focus-within:text-emerald-500 transition-colors">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-[13px] font-bold text-zinc-200 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 appearance-none uppercase"
      >
        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    </div>
  );
}

function FileEditItem({ label, filename }: { label: string; filename: string }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all group">
      <div className="overflow-hidden">
        <p className="text-[8px] font-black text-zinc-600 uppercase tracking-tighter mb-0.5">{label}</p>
        <p className="text-[10px] font-mono text-zinc-300 truncate">{filename}</p>
      </div>
      <button className="p-2 text-zinc-600 hover:text-red-500 transition-colors">
        <Trash2 size={14} />
      </button>
    </div>
  );
}
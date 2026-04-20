"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ChevronLeft, 
  Save, 
  User, 
  ShieldAlert, 
  Camera, 
  RotateCcw,
  Info
} from "lucide-react";

export default function EditProfile() {
  // Prototype State - Ideally handled via React Hook Form or similar
  const [formData, setFormData] = useState({
    fullName: "John Doe Bin Abdullah",
    email: "j.doe@example.com",
    phone: "+60 12-345 6789",
    location: "Kuala Lumpur, Malaysia",
    bloodType: "B+",
    height: "178",
    weight: "72",
  });

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      
      {/* HEADER NAVIGATION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <Link 
            href="/loggedin/profile" 
            className="group inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-white mb-2 transition-colors"
          >
            <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
            Cancel & Return to Dossier
          </Link>
          <h1 className="text-3xl font-black uppercase tracking-tight text-white">
            Update <span className="text-emerald-500">Personnel Record</span>
          </h1>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 h-12 px-6 rounded-xl border border-white/10 text-zinc-400 text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all">
            <RotateCcw size={14} /> Reset Changes
          </button>
          <button className="flex items-center gap-2 h-12 px-8 rounded-xl bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <Save size={14} /> Commit Changes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* LEFT COLUMN: IDENTITY VERIFICATION */}
        <div className="lg:col-span-1 space-y-6">
          <div className="p-8 rounded-[2.5rem] bg-zinc-900 border border-white/5 text-center">
            <div className="relative mx-auto h-32 w-32 mb-6">
              <div className="h-full w-full rounded-3xl bg-zinc-800 border-2 border-dashed border-white/10 flex items-center justify-center overflow-hidden">
                <User size={48} className="text-zinc-700" />
              </div>
              <button className="absolute -bottom-2 -right-2 h-10 w-10 rounded-xl bg-emerald-500 text-black flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                <Camera size={18} />
              </button>
            </div>
            <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Biometric Data</p>
            <p className="text-[9px] text-zinc-600 uppercase font-bold">Max Size: 2MB (JPG/PNG)</p>
          </div>

          <div className="p-6 rounded-[2rem] bg-amber-500/5 border border-amber-500/10">
            <div className="flex items-start gap-3">
              <ShieldAlert size={20} className="text-amber-500 shrink-0" />
              <div>
                <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-1">Restricted Access</p>
                <p className="text-[9px] text-amber-500/70 uppercase font-bold leading-relaxed">
                  Service ID and Rank cannot be modified manually. Contact the Command Center for identity corrections.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: EDITABLE FIELDS */}
        <div className="lg:col-span-3 space-y-8">
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-zinc-900/50 border border-white/5">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500 mb-10 flex items-center gap-2">
              <Info size={16} className="text-emerald-500" /> Personal Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {/* INPUT FIELD COMPONENT */}
              {[
                { label: "Full Name", value: formData.fullName, placeholder: "Enter legal name" },
                { label: "Official Email", value: formData.email, placeholder: "email@example.com" },
                { label: "Contact Number", value: formData.phone, placeholder: "+60..." },
                { label: "Home Address", value: formData.location, placeholder: "Full address" },
              ].map((field, i) => (
                <div key={i} className="space-y-2">
                  <label className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.2em] ml-1">
                    {field.label}
                  </label>
                  <input 
                    type="text"
                    defaultValue={field.value}
                    placeholder={field.placeholder}
                    className="w-full h-12 bg-zinc-950 border border-white/5 rounded-xl px-4 text-sm font-bold text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all placeholder:text-zinc-800"
                  />
                </div>
              ))}
            </div>

            <div className="h-px w-full bg-white/5 my-12" />

            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500 mb-10 flex items-center gap-2">
              <RotateCcw size={16} className="text-emerald-500" /> Physical Metrics
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: "Blood Type", value: formData.bloodType, suffix: "" },
                { label: "Height (cm)", value: formData.height, suffix: "CM" },
                { label: "Weight (kg)", value: formData.weight, suffix: "KG" },
              ].map((field, i) => (
                <div key={i} className="space-y-2">
                  <label className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.2em] ml-1">
                    {field.label}
                  </label>
                  <div className="relative">
                    <input 
                      type="text"
                      defaultValue={field.value}
                      className="w-full h-12 bg-zinc-950 border border-white/5 rounded-xl px-4 text-sm font-bold text-white focus:outline-none focus:border-emerald-500/50 transition-all"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[9px] font-black text-zinc-700">{field.suffix}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 rounded-2xl bg-zinc-950/50 border border-white/5">
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-relaxed text-center">
                Updating physical metrics will trigger a <span className="text-white">BMI Re-calculation</span> in your eligibility status.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
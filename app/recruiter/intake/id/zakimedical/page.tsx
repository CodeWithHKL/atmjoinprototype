"use client";

import React from "react";
import Link from "next/link";
import {
  ChevronLeft, Stethoscope, Heart, Activity,
  User, Hash, CalendarDays, Droplets, 
  Scale, Ruler, FileSearch,
  ClipboardList, Pill, AlertCircle
} from "lucide-react";

const applicant = {
  name: "Ahmad Zaki",
  id: "APP-001",
  ic: "020312-14-5871",
  intake: "INTK-TDM-O-26-01",
  phase: "Medical Examination",
};

const medicalResult = {
  medical_id: "MED-5501",
  test_date: "18 APR 2024",
  status: "Pending",
  blood_group: "O+",
  vitals: [
    { label: "Height", value: "175 cm", icon: Ruler },
    { label: "Weight", value: "68 kg", icon: Scale },
    { label: "BMI", value: "22.2", icon: Activity },
    { label: "BP", value: "120/80", icon: Heart },
  ],
  clinical_sections: [
    { label: "Vision/Ophthalmology", status: "Passed", detail: "6/6 Vision, No Color Blindness", color: "text-emerald-500" },
    { label: "Hearing/Audiometry", status: "Passed", detail: "Normal Range (0-25dB)", color: "text-emerald-500" },
    { label: "Bloodwork", status: "Pending", detail: "Awaiting Lab Results (Hepatitis/HIV)", color: "text-amber-500" },
    { label: "Respiratory", status: "Passed", detail: "Clear Lung Fields, No Asthma", color: "text-emerald-500" },
  ],
  doctor_notes: "Candidate physically fit. Initial screenings for vision and hearing are perfect. Final clearance pending bloodwork verification scheduled for 20 APR.",
  examining_officer: "Maj. (Dr.) Farhan",
};

function VitalCard({ label, value, icon: Icon }: { label: string; value: string; icon: any }) {
  return (
    <div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 backdrop-blur-sm group hover:border-rose-500/20 transition-all">
      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-600 mb-3">{label}</p>
      <div className="flex items-center gap-3">
        <Icon size={14} className="text-rose-500" />
        <p className="text-xl font-bold tracking-tight text-zinc-200">{value}</p>
      </div>
    </div>
  );
}

function InfoRow({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-3.5 border-b border-white/5 last:border-0">
      <div className="flex items-center gap-3">
        <Icon size={13} className="text-zinc-600" />
        <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">{label}</span>
      </div>
      <span className="text-[10px] font-bold text-zinc-200 font-mono">{value}</span>
    </div>
  );
}

export default function ZakiMedicalPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans p-6 lg:p-10 relative">

      {/* BACK NAV */}
      <Link
        href={`/recruiter/intake/id`}
        className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-rose-500 mb-10 transition-colors"
      >
        <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        Return to Directory
      </Link>

      {/* HEADER */}
      <header className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/5 pb-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white uppercase">
            {applicant.name.split(" ")[0]} <span className="text-rose-600">{applicant.name.split(" ").slice(1).join(" ")}</span>
          </h1>
          <p className="text-zinc-500 text-[10px] font-bold tracking-widest mt-1 uppercase">
            ID: <span className="text-zinc-300 font-mono tracking-normal">{applicant.id}</span>
            <span className="text-zinc-800 mx-2">//</span>
            IC: <span className="text-zinc-300 font-mono tracking-normal">{applicant.ic}</span>
          </p>
        </div>

        {/* STATUS BADGE */}
        <div className="flex items-center gap-4 px-6 py-4 rounded-2xl border border-rose-500/20 bg-rose-500/5 backdrop-blur-sm">
          <AlertCircle size={20} className="text-rose-500" />
          <div>
            <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest mb-0.5">Medical Status</p>
            <p className="text-sm font-bold text-rose-500 uppercase tracking-[0.2em]">{medicalResult.status}</p>
          </div>
        </div>
      </header>

      <div className="grid md:grid-cols-12 gap-8">

        {/* LEFT — VITALS & TELEMETRY */}
        <div className="md:col-span-4 space-y-6">
          
          {/* Blood Type Card */}
          <div className="bg-gradient-to-br from-rose-600/20 to-zinc-900 border border-rose-500/20 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-2xl backdrop-blur-sm">
            <Droplets size={24} className="text-rose-500 mb-4" />
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-1">Blood Group</p>
            <p className="text-5xl font-bold text-white tracking-tighter">{medicalResult.blood_group}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {medicalResult.vitals.map((v) => (
              <VitalCard key={v.label} {...v} />
            ))}
          </div>

          <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-6 backdrop-blur-sm shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <FileSearch size={13} className="text-zinc-600" />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500">Clinical Audit</span>
            </div>
            <div className="space-y-1">
              <InfoRow icon={Hash} label="Medical ID" value={medicalResult.medical_id} />
              <InfoRow icon={CalendarDays} label="Exam Date" value={medicalResult.test_date} />
              <InfoRow icon={Stethoscope} label="Officer" value={medicalResult.examining_officer} />
              <InfoRow icon={User} label="Facility" value="Military Hospital" />
            </div>
          </div>
        </div>

        {/* RIGHT — CLINICAL FINDINGS & REMARKS */}
        <div className="md:col-span-8 space-y-6">
          
          {/* Clinical Results Checklist */}
          <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm shadow-2xl">
            <div className="flex items-center gap-2 mb-8">
              <ClipboardList size={14} className="text-rose-500" />
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Systemic Examination Breakdown</h2>
            </div>
            
            <div className="grid gap-3">
              {medicalResult.clinical_sections.map((section) => (
                <div key={section.label} className="flex items-center justify-between p-5 bg-zinc-950/50 rounded-2xl border border-white/5 hover:border-rose-500/20 transition-all group">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-300 group-hover:text-white transition-colors">{section.label}</p>
                    <p className="text-[10px] text-zinc-600 mt-1 uppercase font-medium">{section.detail}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-[9px] font-bold uppercase tracking-widest ${section.color}`}>
                      {section.status}
                    </span>
                    <div className={`h-1 w-1 rounded-full ${section.color.replace('text', 'bg')} shadow-[0_0_8px_currentColor]`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Remarks */}
          <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <Pill size={14} className="text-zinc-500" />
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Medical Narrative</h2>
            </div>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-rose-500/30" />
              <p className="text-[13px] text-zinc-400 leading-relaxed font-medium pl-6 italic">
                "{medicalResult.doctor_notes}"
              </p>
            </div>
          </div>

          {/* Context Footer */}
          <div className="bg-zinc-900/20 border border-white/5 rounded-3xl p-6 flex items-center justify-between border-dashed">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-600 mb-1">Batch Assignment</p>
              <p className="text-[11px] font-bold font-mono text-zinc-400 uppercase tracking-widest">{applicant.intake}</p>
            </div>
            <div className="px-4 py-1.5 bg-rose-500/10 border border-rose-500/20 rounded-lg">
              <p className="text-[9px] font-bold text-rose-500 uppercase tracking-widest">Phase: {applicant.phase}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
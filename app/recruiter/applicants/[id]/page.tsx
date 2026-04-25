"use client";

import React, { use, useState } from "react";
import { useRouter } from "next/navigation";
import { 
  ChevronLeft, User, Mail, Phone, MapPin, 
  Calendar, Shield, Briefcase, 
  Fingerprint, Globe, Heart, Home,
  Eye, AlertTriangle, X
} from "lucide-react";

export default function ApplicantProfilePage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const router = useRouter();
  const resolvedParams = use(params);
  const applicantId = resolvedParams.id;

  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [reportCategory, setReportCategory] = useState("");
  const [reportContent, setReportContent] = useState("");

  const applicant = {
    personal: {
      fullName: "Ahmad Zaki Bin Osman",
      id: applicantId || "APP-001",
      icNumber: "020412-02-0551",
      dob: "12 APR 2002",
      citizenship: "Malaysian",
      birthCertNo: "BC-9988221",
      gender: "Male",
      religion: "Islam",
      race: "Malay",
      ethnicity: "Bumiputera",
      maritalStatus: "Single",
      countryOfBirth: "Malaysia",
      placeOfBirth: "Hospital Sultanah Bahiyah, Alor Setar"
    },
    address: {
      currentAddress: "No 14, Jalan Pahlawan 5/1, Taman Greenwood",
      postcode: "05000",
      state: "Kedah",
      city: "Alor Setar",
      email: "zaki.osman@email.com",
      mobilePhone: "+60 12-445 6789",
      homePhone: "+60 4-733 1122"
    },
    applications: [
      {
        intakeId: "INTK-TDM-O-26-01",
        title: "Pegawai Kadet Graduan (TDM)",
        status: "In Progress",
        currentPhase: "Medical",
        appliedDate: "12 MAR 2026",
        score: "88.5/100"
      },
      {
        intakeId: "INTK-TDM-O-25-02",
        title: "Pegawai Kadet Graduan (TDM)",
        status: "Rejected",
        currentPhase: "Final Selection",
        appliedDate: "05 AUG 2025",
        score: "82.1/100"
      }
    ]
  };

  const handleSubmitReport = () => {
    setIsReportModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6 lg:p-10 font-sans relative">
      
      {/* HEADER SECTION */}
      <header className="mb-12">
        <div className="flex justify-between items-start mb-8">
          <button 
            onClick={() => router.back()} 
            className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-emerald-500 transition-colors"
          >
            <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
            Return to Directory
          </button>
          
          <button 
            onClick={() => setIsReportModalOpen(true)}
            className="px-6 py-2 rounded-xl border border-red-500/20 bg-red-500/5 text-red-500 text-[10px] font-bold uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all flex items-center gap-2"
          >
            <AlertTriangle size={12} />
            Flag Incident
          </button>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/5 pb-10">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Applicant <span className="text-emerald-500">Profile</span>
            </h1>
            <p className="text-zinc-500 text-[10px] font-bold mt-1 uppercase tracking-widest flex items-center gap-2">
              Dossier ID: <span className="text-zinc-300 font-mono tracking-normal">{applicant.personal.id}</span>
              <span className="text-zinc-800">//</span>
              <span className="text-emerald-500/70">Verified Record</span>
            </p>
          </div>
          
          <div className="bg-zinc-900/50 border border-white/5 rounded-2xl px-6 py-4 backdrop-blur-sm">
             <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Last Transmission</p>
             <p className="text-sm font-bold tracking-tight text-zinc-200 font-mono">26 APR 2026 // 05:13 HRS</p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-10">
        
        {/* LEFT COLUMN: IDENTITY & BIOMETRICS */}
        <div className="col-span-12 lg:col-span-7 space-y-8">
          <section className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-500 mb-8 flex items-center gap-2">
              <Fingerprint size={14} /> Personal Identity Dossier
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
              <DataField label="Full Name (As per IC)" value={applicant.personal.fullName} />
              <DataField label="Identity Card Number" value={applicant.personal.icNumber} />
              <DataField label="Birth Certificate Number" value={applicant.personal.birthCertNo} />
              <DataField label="Date of Birth" value={applicant.personal.dob} icon={Calendar} />
              <DataField label="Gender" value={applicant.personal.gender} />
              <DataField label="Marital Status" value={applicant.personal.maritalStatus} icon={Heart} />
              <DataField label="Religion" value={applicant.personal.religion} />
              <DataField label="Race / Ethnicity" value={`${applicant.personal.race} (${applicant.personal.ethnicity})`} />
              <DataField label="Citizenship" value={applicant.personal.citizenship} icon={Shield} />
              <DataField label="Country of Birth" value={applicant.personal.countryOfBirth} icon={Globe} />
              <div className="md:col-span-2">
                <DataField label="Place of Birth" value={applicant.personal.placeOfBirth} />
              </div>
            </div>
          </section>

          {/* APPLICATION HISTORY */}
          <section className="bg-zinc-900/40 border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
            <div className="px-8 py-5 border-b border-white/5 bg-white/[0.02]">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 flex items-center gap-2">
                <Briefcase size={14} /> Applied Intakes (TDM)
              </h3>
            </div>
            <div className="p-4 space-y-2">
              {applicant.applications.map((app, idx) => (
                <div key={idx} className="flex items-center justify-between p-6 rounded-2xl bg-zinc-950/50 border border-white/5 group hover:border-emerald-500/30 transition-all">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-tight text-zinc-200">{app.title}</h4>
                    <span className="text-[10px] font-mono text-emerald-500/70">{app.intakeId}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-lg border ${
                      app.status === "In Progress" 
                        ? "border-emerald-500/20 bg-emerald-500/5 text-emerald-500" 
                        : "border-red-500/20 bg-red-500/5 text-red-500"
                    }`}>
                      {app.status}
                    </span>
                    <button 
                      onClick={() => router.push('/recruiter/applicants/intakehistory')}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-white/10 text-[9px] font-bold uppercase tracking-widest hover:bg-emerald-500 hover:text-black transition-all"
                    >
                      <Eye size={14} /> View Record
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: PHOTO & CONTACT */}
        <aside className="col-span-12 lg:col-span-5 space-y-8">
          <section className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Shield size={160} />
            </div>
            
            <div className="flex flex-col items-center relative z-10">
              <div className="w-40 h-48 bg-zinc-950 border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden mb-6 relative">
                <User size={80} className="text-zinc-900" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
              </div>
              
              <div className="text-center">
                <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-[0.4em] mb-2">Authenticated Subject</p>
                <h2 className="text-2xl font-bold uppercase tracking-tight mb-1 text-white">{applicant.personal.fullName}</h2>
                <p className="text-[11px] font-mono text-zinc-500 tracking-widest">{applicant.personal.id}</p>
              </div>
            </div>
          </section>

          <section className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-500 mb-8 flex items-center gap-2">
              <MapPin size={14} /> Contact Details
            </h3>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <DataField label="Mobile Phone" value={applicant.address.mobilePhone} icon={Phone} />
                <DataField label="Home Phone" value={applicant.address.homePhone} icon={Home} />
              </div>
              
              <DataField label="Email Address" value={applicant.address.email} icon={Mail} />
              
              <div className="pt-6 border-t border-white/5 space-y-4">
                <DataField label="Registered Residence" value={applicant.address.currentAddress} />
                <div className="grid grid-cols-2 gap-4">
                  <DataField label="City / Town" value={applicant.address.city} />
                  <DataField label="Postcode" value={applicant.address.postcode} />
                </div>
                <DataField label="State / Province" value={applicant.address.state} />
              </div>
            </div>
          </section>
        </aside>
      </div>

      {/* REPORT MODAL */}
      {isReportModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-zinc-950/90 backdrop-blur-md" onClick={() => setIsReportModalOpen(false)} />
          <div className="relative w-full max-w-lg bg-zinc-900 border border-white/10 rounded-3xl p-10 shadow-2xl">
            <button 
              onClick={() => setIsReportModalOpen(false)}
              className="absolute top-8 right-8 text-zinc-500 hover:text-white"
            >
              <X size={20} />
            </button>

            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-500 mb-8 flex items-center gap-2">
              <AlertTriangle size={14} /> Incident Reporting Module
            </h3>

            <div className="space-y-6">
              <div className="flex flex-col gap-3">
                <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Classification</label>
                <select 
                  className="bg-zinc-950 border border-white/10 rounded-xl px-4 py-4 text-sm font-bold text-white focus:outline-none focus:border-red-500/50 appearance-none cursor-pointer"
                  value={reportCategory}
                  onChange={(e) => setReportCategory(e.target.value)}
                >
                  <option value="" disabled>Select category...</option>
                  <option value="documentation">Documentation Discrepancy</option>
                  <option value="conduct">Conduct / Disciplinary</option>
                  <option value="medical">Medical Concern</option>
                  <option value="other">Other Incident</option>
                </select>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Incident Narrative</label>
                <textarea 
                  rows={5}
                  placeholder="Detail the grounds for this report..."
                  className="bg-zinc-950 border border-white/10 rounded-xl px-4 py-4 text-sm font-medium text-white focus:outline-none focus:border-red-500/50 resize-none"
                  value={reportContent}
                  onChange={(e) => setReportContent(e.target.value)}
                />
              </div>

              <button 
                onClick={handleSubmitReport}
                disabled={!reportCategory || !reportContent}
                className="w-full py-5 rounded-xl bg-red-600 text-black text-[10px] font-bold uppercase tracking-widest hover:bg-red-500 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
              >
                File Record Incident
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function DataField({ 
  label, 
  value, 
  icon: Icon, 
  highlight = false 
}: { 
  label: string, 
  value: string | number, 
  icon?: any,
  highlight?: boolean
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest leading-none">
        {label}
      </span>
      <div className="flex items-center gap-2">
        {Icon && <Icon size={12} className="text-emerald-500/40" />}
        <span className={`text-sm font-bold tracking-tight ${highlight ? 'text-emerald-400 font-bold' : 'text-zinc-300'}`}>
          {value || "—"}
        </span>
      </div>
    </div>
  );
}
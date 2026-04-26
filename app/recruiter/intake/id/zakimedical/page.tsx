"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft, Stethoscope, Heart, Activity,
  User, Hash, CalendarDays, Droplets,
  Scale, Ruler, FileSearch,
  ClipboardList, Pill, AlertCircle,
  Settings2, X, CheckCircle2, Clock,
  FlaskConical, Eye, Ear, Wind, Save,
  ChevronDown,
} from "lucide-react";

// ─── TYPES ────────────────────────────────────────────────────────────────────

type SectionStatus = "Passed" | "Failed" | "Pending";

interface ClinicalSection {
  label: string;
  status: SectionStatus;
  detail: string;
  color: string;
}

interface MedicalFormState {
  blood_group: string;
  height: string;
  weight: string;
  bmi: string;
  bp_systolic: string;
  bp_diastolic: string;
  vision_status: SectionStatus;
  vision_detail: string;
  hearing_status: SectionStatus;
  hearing_detail: string;
  bloodwork_status: SectionStatus;
  bloodwork_detail: string;
  respiratory_status: SectionStatus;
  respiratory_detail: string;
  doctor_notes: string;
  overall_status: SectionStatus;
}

// ─── STATIC DATA ──────────────────────────────────────────────────────────────

const applicant = {
  name: "Ahmad Zaki",
  id: "APP-001",
  ic: "020312-14-5871",
  intake: "INTK-TDM-O-26-01",
  phase: "Medical Examination",
};

const INITIAL_MEDICAL: MedicalFormState = {
  blood_group: "O+",
  height: "175",
  weight: "68",
  bmi: "22.2",
  bp_systolic: "120",
  bp_diastolic: "80",
  vision_status: "Passed",
  vision_detail: "6/6 Vision, No Color Blindness",
  hearing_status: "Passed",
  hearing_detail: "Normal Range (0-25dB)",
  bloodwork_status: "Pending",
  bloodwork_detail: "Awaiting Lab Results (Hepatitis/HIV)",
  respiratory_status: "Passed",
  respiratory_detail: "Clear Lung Fields, No Asthma",
  doctor_notes:
    "Candidate physically fit. Initial screenings for vision and hearing are perfect. Final clearance pending bloodwork verification scheduled for 20 APR.",
  overall_status: "Pending",
};

// ─── HELPERS ──────────────────────────────────────────────────────────────────

const statusColor: Record<SectionStatus, string> = {
  Passed: "text-emerald-500",
  Failed: "text-rose-500",
  Pending: "text-amber-500",
};

const statusBg: Record<SectionStatus, string> = {
  Passed: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
  Failed: "bg-rose-500/10 border-rose-500/30 text-rose-400",
  Pending: "bg-amber-500/10 border-amber-500/30 text-amber-400",
};

const statusDot: Record<SectionStatus, string> = {
  Passed: "bg-emerald-500",
  Failed: "bg-rose-500",
  Pending: "bg-amber-500",
};

const overallStatusIcon: Record<SectionStatus, React.ReactNode> = {
  Passed: <CheckCircle2 size={20} className="text-emerald-500" />,
  Failed: <X size={20} className="text-rose-500" />,
  Pending: <AlertCircle size={20} className="text-amber-500" />,
};

function calcBMI(h: string, w: string): string {
  const hNum = parseFloat(h);
  const wNum = parseFloat(w);
  if (!hNum || !wNum) return "";
  return ((wNum / ((hNum / 100) * (hNum / 100)))).toFixed(1);
}

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

function VitalCard({ label, value, icon: Icon }: { label: string; value: string; icon: any }) {
  return (
    <div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 backdrop-blur-sm group hover:border-rose-500/20 transition-all">
      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-600 mb-3">{label}</p>
      <div className="flex items-center gap-3">
        <Icon size={14} className="text-rose-500" />
        <p className="text-xl font-bold tracking-tight text-zinc-200">{value || "—"}</p>
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

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-1.5">
      {children}
    </label>
  );
}

function GlassInput({
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-700 outline-none focus:border-rose-500/50 focus:bg-white/8 transition-all font-mono font-bold"
    />
  );
}

function GlassSelect({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { label: string; value: SectionStatus }[];
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white outline-none focus:border-rose-500/50 transition-all font-bold appearance-none cursor-pointer pr-8"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value} className="bg-zinc-900">
            {o.label}
          </option>
        ))}
      </select>
      <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-600 pointer-events-none" />
    </div>
  );
}

function GlassTextarea({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={3}
      className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-700 outline-none focus:border-rose-500/50 transition-all font-medium resize-none leading-relaxed"
    />
  );
}

// ─── MANAGE MODAL ─────────────────────────────────────────────────────────────

function ManageModal({
  form,
  setForm,
  onClose,
  onSave,
}: {
  form: MedicalFormState;
  setForm: React.Dispatch<React.SetStateAction<MedicalFormState>>;
  onClose: () => void;
  onSave: () => void;
}) {
  const set = (key: keyof MedicalFormState) => (val: string) => {
    setForm((prev) => {
      const next = { ...prev, [key]: val };
      // Auto-calc BMI when height/weight change
      if (key === "height" || key === "weight") {
        next.bmi = calcBMI(
          key === "height" ? val : prev.height,
          key === "weight" ? val : prev.weight
        );
      }
      return next;
    });
  };

  const statusOptions = [
    { label: "Passed", value: "Passed" as SectionStatus },
    { label: "Failed", value: "Failed" as SectionStatus },
    { label: "Pending", value: "Pending" as SectionStatus },
  ];

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  return (
    <>
      {/* BACKDROP */}
      <div
        className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      />

      {/* MODAL PANEL */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="pointer-events-auto w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 shadow-[0_0_80px_rgba(225,29,72,0.08),0_32px_64px_rgba(0,0,0,0.6)]"
          style={{
            background: "rgba(15,15,18,0.85)",
            backdropFilter: "blur(32px) saturate(180%)",
            WebkitBackdropFilter: "blur(32px) saturate(180%)",
          }}
        >
          {/* MODAL HEADER */}
          <div className="sticky top-0 z-10 flex items-center justify-between px-8 py-5 border-b border-white/8"
            style={{ background: "rgba(15,15,18,0.92)", backdropFilter: "blur(16px)" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
                <Stethoscope size={15} className="text-rose-500" />
              </div>
              <div>
                <h3 className="text-sm font-black tracking-tight text-white">Manage Medical Record</h3>
                <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest mt-0.5">
                  {applicant.name} · {form.blood_group}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center hover:bg-rose-500/10 hover:border-rose-500/30 transition-all text-zinc-500 hover:text-rose-500"
            >
              <X size={14} />
            </button>
          </div>

          {/* MODAL BODY */}
          <div className="p-8 space-y-8">

            {/* VITALS */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Activity size={12} className="text-rose-500" />
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">Vital Statistics</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <FieldLabel>Blood Group</FieldLabel>
                  <div className="relative">
                    <select
                      value={form.blood_group}
                      onChange={(e) => set("blood_group")(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white outline-none focus:border-rose-500/50 transition-all font-bold appearance-none cursor-pointer pr-8"
                    >
                      {bloodGroups.map((bg) => (
                        <option key={bg} value={bg} className="bg-zinc-900">{bg}</option>
                      ))}
                    </select>
                    <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-600 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <FieldLabel>Blood Pressure (mmHg)</FieldLabel>
                  <div className="flex gap-2 items-center">
                    <GlassInput value={form.bp_systolic} onChange={set("bp_systolic")} placeholder="120" type="number" />
                    <span className="text-zinc-600 font-bold">/</span>
                    <GlassInput value={form.bp_diastolic} onChange={set("bp_diastolic")} placeholder="80" type="number" />
                  </div>
                </div>
                <div>
                  <FieldLabel>Height (cm)</FieldLabel>
                  <GlassInput value={form.height} onChange={set("height")} placeholder="175" type="number" />
                </div>
                <div>
                  <FieldLabel>Weight (kg)</FieldLabel>
                  <GlassInput value={form.weight} onChange={set("weight")} placeholder="68" type="number" />
                </div>
                <div className="col-span-2">
                  <FieldLabel>BMI (auto-calculated)</FieldLabel>
                  <div className="flex items-center gap-3 bg-white/3 border border-white/8 rounded-xl px-3.5 py-2.5">
                    <Scale size={13} className="text-zinc-600" />
                    <span className={`text-sm font-black font-mono ${
                      form.bmi
                        ? parseFloat(form.bmi) >= 18.5 && parseFloat(form.bmi) <= 26.9
                          ? "text-emerald-400"
                          : "text-rose-400"
                        : "text-zinc-700"
                    }`}>
                      {form.bmi || "—"}
                    </span>
                    {form.bmi && (
                      <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest ml-1">
                        {parseFloat(form.bmi) >= 18.5 && parseFloat(form.bmi) <= 26.9 ? "Within Range" : "Out of Range"}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* DIVIDER */}
            <div className="h-px bg-white/5" />

            {/* SYSTEMIC EXAMINATION */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ClipboardList size={12} className="text-rose-500" />
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">Systemic Examination</span>
              </div>
              <div className="space-y-4">
                {[
                  { key: "vision" as const, icon: Eye, label: "Vision / Ophthalmology" },
                  { key: "hearing" as const, icon: Ear, label: "Hearing / Audiometry" },
                  { key: "bloodwork" as const, icon: FlaskConical, label: "Bloodwork" },
                  { key: "respiratory" as const, icon: Wind, label: "Respiratory" },
                ].map(({ key, icon: Icon, label }) => (
                  <div
                    key={key}
                    className="bg-white/[0.03] border border-white/6 rounded-2xl p-4 space-y-3"
                  >
                    <div className="flex items-center gap-2">
                      <Icon size={12} className="text-zinc-500" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{label}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <FieldLabel>Status</FieldLabel>
                        <GlassSelect
                          value={form[`${key}_status`]}
                          onChange={set(`${key}_status`)}
                          options={statusOptions}
                        />
                      </div>
                      <div>
                        <FieldLabel>Detail / Note</FieldLabel>
                        <GlassInput
                          value={form[`${key}_detail`]}
                          onChange={set(`${key}_detail`)}
                          placeholder="e.g. 6/6 Vision..."
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DIVIDER */}
            <div className="h-px bg-white/5" />

            {/* DOCTOR NARRATIVE */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Pill size={12} className="text-rose-500" />
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">Medical Narrative</span>
              </div>
              <GlassTextarea
                value={form.doctor_notes}
                onChange={set("doctor_notes")}
                placeholder="Doctor's clinical remarks and observations..."
              />
            </div>

            {/* DIVIDER */}
            <div className="h-px bg-white/5" />

            {/* OVERALL VERDICT */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 size={12} className="text-rose-500" />
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">Overall Medical Verdict</span>
              </div>
              <GlassSelect
                value={form.overall_status}
                onChange={set("overall_status")}
                options={statusOptions}
              />
              <p className="text-[9px] font-bold text-zinc-700 uppercase tracking-widest mt-2">
                This determines the applicant's medical phase result.
              </p>
            </div>
          </div>

          {/* MODAL FOOTER */}
          <div className="sticky bottom-0 flex items-center justify-between px-8 py-5 border-t border-white/8"
            style={{ background: "rgba(15,15,18,0.92)", backdropFilter: "blur(16px)" }}
          >
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-white/8 text-[9px] font-black uppercase tracking-widest text-zinc-500 hover:text-white hover:border-white/20 transition-all"
            >
              Discard
            </button>
            <button
              onClick={onSave}
              className="group relative flex items-center gap-2.5 px-7 py-2.5 bg-white text-black rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-rose-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <Save size={13} className="relative z-10" />
              <span className="relative z-10 text-[9px] font-black uppercase tracking-widest group-hover:text-white transition-colors">
                Save Record
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function ZakiMedicalPage() {
  const [form, setForm] = useState<MedicalFormState>(INITIAL_MEDICAL);
  const [saved, setSaved] = useState<MedicalFormState>(INITIAL_MEDICAL);
  const [modalOpen, setModalOpen] = useState(false);
  const [justSaved, setJustSaved] = useState(false);

  // Derive display data from saved state
  const medicalResult = {
    medical_id: "MED-5501",
    test_date: "18 APR 2024",
    status: saved.overall_status,
    blood_group: saved.blood_group,
    vitals: [
      { label: "Height", value: `${saved.height} cm`, icon: Ruler },
      { label: "Weight", value: `${saved.weight} kg`, icon: Scale },
      { label: "BMI", value: saved.bmi, icon: Activity },
      { label: "BP", value: `${saved.bp_systolic}/${saved.bp_diastolic}`, icon: Heart },
    ],
    clinical_sections: [
      { label: "Vision/Ophthalmology", status: saved.vision_status, detail: saved.vision_detail, color: statusColor[saved.vision_status] },
      { label: "Hearing/Audiometry", status: saved.hearing_status, detail: saved.hearing_detail, color: statusColor[saved.hearing_status] },
      { label: "Bloodwork", status: saved.bloodwork_status, detail: saved.bloodwork_detail, color: statusColor[saved.bloodwork_status] },
      { label: "Respiratory", status: saved.respiratory_status, detail: saved.respiratory_detail, color: statusColor[saved.respiratory_status] },
    ],
    doctor_notes: saved.doctor_notes,
    examining_officer: "Maj. (Dr.) Farhan",
  };

  const handleSave = () => {
    setSaved({ ...form });
    setModalOpen(false);
    setJustSaved(true);
    setTimeout(() => setJustSaved(false), 3000);
  };

  const handleOpen = () => {
    setForm({ ...saved }); // reset form to last saved state
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans p-6 lg:p-10 relative">

      {/* MODAL */}
      {modalOpen && (
        <ManageModal
          form={form}
          setForm={setForm}
          onClose={() => setModalOpen(false)}
          onSave={handleSave}
        />
      )}

      {/* SAVED TOAST */}
      <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-xl shadow-2xl transition-all duration-500 ${
        justSaved ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}>
        <CheckCircle2 size={14} className="text-emerald-500" />
        <span className="text-[9px] font-black uppercase tracking-widest text-emerald-400">Medical record updated</span>
      </div>

      {/* BACK NAV */}
      <Link
        href="/recruiter/intake/id"
        className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-rose-500 mb-10 transition-colors"
      >
        <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        Return to Directory
      </Link>

      {/* HEADER */}
      <header className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/5 pb-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white uppercase">
            {applicant.name.split(" ")[0]}{" "}
            <span className="text-rose-600">{applicant.name.split(" ").slice(1).join(" ")}</span>
          </h1>
          <p className="text-zinc-500 text-[10px] font-bold tracking-widest mt-1 uppercase">
            ID: <span className="text-zinc-300 font-mono tracking-normal">{applicant.id}</span>
            <span className="text-zinc-800 mx-2">//</span>
            IC: <span className="text-zinc-300 font-mono tracking-normal">{applicant.ic}</span>
          </p>
        </div>

        {/* STATUS BADGE + MANAGE BUTTON */}
        <div className="flex items-center gap-3">
          <div className={`flex items-center gap-4 px-6 py-4 rounded-2xl border backdrop-blur-sm ${statusBg[medicalResult.status]}`}>
            {overallStatusIcon[medicalResult.status]}
            <div>
              <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest mb-0.5">Medical Status</p>
              <p className={`text-sm font-bold uppercase tracking-[0.2em] ${statusColor[medicalResult.status]}`}>
                {medicalResult.status}
              </p>
            </div>
          </div>

          {/* ── MANAGE BUTTON ── */}
          <button
            onClick={handleOpen}
            className="group flex items-center gap-2.5 px-5 py-4 rounded-2xl bg-zinc-900/80 border border-white/8 hover:border-rose-500/40 hover:bg-rose-500/5 transition-all backdrop-blur-sm"
          >
            <Settings2
              size={15}
              className="text-zinc-500 group-hover:text-rose-500 transition-colors group-hover:rotate-45 duration-300"
            />
            <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-rose-400 transition-colors">
              Manage
            </span>
          </button>
        </div>
      </header>

      <div className="grid md:grid-cols-12 gap-8">

        {/* LEFT — VITALS & TELEMETRY */}
        <div className="md:col-span-4 space-y-6">

          {/* Blood Type */}
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

          {/* Clinical Checklist */}
          <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm shadow-2xl">
            <div className="flex items-center gap-2 mb-8">
              <ClipboardList size={14} className="text-rose-500" />
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                Systemic Examination Breakdown
              </h2>
            </div>

            <div className="grid gap-3">
              {medicalResult.clinical_sections.map((section) => (
                <div
                  key={section.label}
                  className="flex items-center justify-between p-5 bg-zinc-950/50 rounded-2xl border border-white/5 hover:border-rose-500/20 transition-all group"
                >
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-300 group-hover:text-white transition-colors">
                      {section.label}
                    </p>
                    <p className="text-[10px] text-zinc-600 mt-1 uppercase font-medium">
                      {section.detail}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-[9px] font-bold uppercase tracking-widest ${section.color}`}>
                      {section.status}
                    </span>
                    <div className={`h-1.5 w-1.5 rounded-full ${statusDot[section.status as SectionStatus]}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Doctor Narrative */}
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

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Brain,
  Activity,
  Users,
  Stethoscope,
  Award,
  MapPin,
  Calendar,
  Hash,
  CheckCircle2,
  AlertCircle,
  Zap,
  Target,
  FileText,
  Building2,
  UserSquare2,
  Percent,
} from "lucide-react";

// ─── TYPES ────────────────────────────────────────────────────────────────────

type StreamType = "Officer" | "Enlistment" | "Specialist" | "";

interface FormData {
  // Step 1 — Basic Info
  intakeTitle: string;
  streamType: StreamType;
  location: string;
  reportingCenter: string;
  selectionBoard: string;
  slots: number | "";
  startDate: string;
  endDate: string;

  // Step 2 — Academic
  academicWeightage: number | "";
  minCGPA: number | "";
  minEducationLevel: string;
  fieldPriority: string;

  // Step 3 — Aptitude
  aptitudeWeightage: number | "";
  aptitudePassScore: number | "";

  // Step 4 — Medical
  minHeight: number | "";
  bmiMin: number | "";
  bmiMax: number | "";

  // Step 5 — Physical
  physicalWeightage: number | "";
  maleRunTime: string;
  malePushups: number | "";
  maleSitups: number | "";
  femaleRunTime: string;
  femalePushups: number | "";
  femaleSitups: number | "";

  // Step 6 — Interview
  interviewWeightage: number | "";
}

const INITIAL_FORM: FormData = {
  intakeTitle: "",
  streamType: "",
  location: "",
  reportingCenter: "",
  selectionBoard: "",
  slots: "",
  startDate: "",
  endDate: "",
  academicWeightage: 20,
  minCGPA: 2.75,
  minEducationLevel: "Degree",
  fieldPriority: "",
  aptitudeWeightage: 30,
  aptitudePassScore: 65,
  minHeight: 156,
  bmiMin: 18.5,
  bmiMax: 26.9,
  physicalWeightage: 30,
  maleRunTime: "14:00",
  malePushups: 30,
  maleSitups: 30,
  femaleRunTime: "14:00",
  femalePushups: 30,
  femaleSitups: 30,
  interviewWeightage: 20,
};

// ─── STEP CONFIG ──────────────────────────────────────────────────────────────

const steps = [
  { id: 1, label: "Basic Info",  icon: FileText,       color: "bg-blue-600",    accent: "text-blue-400",    border: "border-blue-500/40"   },
  { id: 2, label: "Academic",    icon: GraduationCap,  color: "bg-indigo-600",  accent: "text-indigo-400",  border: "border-indigo-500/40" },
  { id: 3, label: "Aptitude",    icon: Brain,          color: "bg-purple-600",  accent: "text-purple-400",  border: "border-purple-500/40" },
  { id: 4, label: "Medical",     icon: Stethoscope,    color: "bg-rose-600",    accent: "text-rose-400",    border: "border-rose-500/40"   },
  { id: 5, label: "Physical",    icon: Activity,       color: "bg-amber-600",   accent: "text-amber-400",   border: "border-amber-500/40"  },
  { id: 6, label: "Interview",   icon: Users,          color: "bg-emerald-600", accent: "text-emerald-400", border: "border-emerald-500/40"},
  { id: 7, label: "Review",      icon: Award,          color: "bg-zinc-600",    accent: "text-zinc-300",    border: "border-zinc-500/40"   },
];

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-2">
      {children}
    </label>
  );
}

function TextInput({
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  value: string | number;
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
      className="w-full bg-zinc-950/60 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-700 outline-none focus:border-emerald-500/60 focus:bg-zinc-950/80 transition-all font-medium"
    />
  );
}

function NumberInput({
  value,
  onChange,
  placeholder,
  min,
  max,
  step,
}: {
  value: number | string;
  onChange: (v: string) => void;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
}) {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      min={min}
      max={max}
      step={step}
      className="w-full bg-zinc-950/60 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-700 outline-none focus:border-emerald-500/60 transition-all font-mono font-bold"
    />
  );
}

function SelectInput({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-zinc-950/60 border border-white/8 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-emerald-500/60 transition-all font-medium appearance-none cursor-pointer"
    >
      {placeholder && <option value="" disabled>{placeholder}</option>}
      {options.map((o) => (
        <option key={o} value={o} className="bg-zinc-900">
          {o}
        </option>
      ))}
    </select>
  );
}

function SectionCard({
  title,
  icon: Icon,
  accent,
  children,
}: {
  title: string;
  icon: any;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-zinc-900/40 border border-white/5 rounded-2xl overflow-hidden">
      <div className="px-6 py-4 border-b border-white/5 bg-white/[0.02] flex items-center gap-2">
        <Icon size={14} className={accent} />
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">{title}</span>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}

function WeightageBar({ value }: { value: number | "" }) {
  const pct = typeof value === "number" ? Math.min(100, Math.max(0, value)) : 0;
  return (
    <div className="mt-3">
      <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-emerald-500 transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="flex justify-between mt-1">
        <span className="text-[8px] text-zinc-700 font-bold">0%</span>
        <span className="text-[8px] text-emerald-500 font-black font-mono">{pct}%</span>
        <span className="text-[8px] text-zinc-700 font-bold">100%</span>
      </div>
    </div>
  );
}

function ReviewRow({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{label}</span>
      <span className="text-[11px] font-bold text-zinc-200 font-mono">{value || "—"}</span>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function CreateIntakePage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof FormData) => (val: string) => {
    setForm((prev) => ({ ...prev, [key]: val }));
  };

  const setNum = (key: keyof FormData) => (val: string) => {
    setForm((prev) => ({ ...prev, [key]: val === "" ? "" : parseFloat(val) }));
  };

  const totalWeightage =
    (Number(form.academicWeightage) || 0) +
    (Number(form.aptitudeWeightage) || 0) +
    (Number(form.physicalWeightage) || 0) +
    (Number(form.interviewWeightage) || 0);

  const stepInfo = steps[currentStep - 1];
  const StepIcon = stepInfo.icon;

  const canProceed = () => {
    if (currentStep === 1) return form.intakeTitle && form.streamType && form.location && form.slots && form.startDate && form.endDate;
    return true;
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-8">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={36} className="text-emerald-500" />
          </div>
          <h2 className="text-2xl font-black tracking-tight mb-2">Intake Created</h2>
          <p className="text-zinc-500 text-sm mb-2">
            <span className="font-mono text-emerald-400">{form.intakeTitle}</span>
          </p>
          <p className="text-zinc-600 text-xs mb-8">
            The intake has been registered and is now visible in the management dashboard.
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => router.push("/recruiter/intake")}
              className="px-6 py-3 bg-emerald-500 text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-emerald-400 transition-colors"
            >
              Go to Dashboard
            </button>
            <button
              onClick={() => { setForm(INITIAL_FORM); setCurrentStep(1); setSubmitted(false); }}
              className="px-6 py-3 bg-zinc-900 border border-white/10 text-[10px] font-black uppercase tracking-widest rounded-full hover:border-white/30 transition-colors"
            >
              Create Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans flex flex-col p-8">

      {/* HEADER */}
      <header className="mb-10">
        <Link
          href="/recruiter/intake"
          className="group inline-flex items-center gap-2 text-[10px] font-bold tracking-widest text-zinc-500 hover:text-white mb-6 transition-colors"
        >
          <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          BACK TO INTAKES
        </Link>
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Create <span className="text-emerald-500">New Intake</span>
            </h1>
            <p className="text-zinc-500 text-[10px] font-bold mt-1 uppercase tracking-widest">
              Define parameters for a new selection intake
            </p>
          </div>
          {/* Weightage Health */}
          <div className="flex flex-col items-end gap-1">
            <span className="text-[9px] font-black uppercase tracking-widest text-zinc-600">Total Weightage</span>
            <span className={`text-xl font-black font-mono ${totalWeightage === 100 ? "text-emerald-500" : totalWeightage > 100 ? "text-rose-500" : "text-amber-500"}`}>
              {totalWeightage}%
              {totalWeightage === 100 && <span className="text-[10px] ml-1 normal-case font-bold">✓</span>}
            </span>
            {totalWeightage !== 100 && (
              <span className="text-[8px] text-amber-500/60 font-bold uppercase tracking-widest">Must equal 100%</span>
            )}
          </div>
        </div>
      </header>

      {/* STEP PROGRESS */}
      <div className="mb-10">
        <div className="flex items-center justify-between gap-2 px-2">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isCompleted = currentStep > step.id;
            const isActive = currentStep === step.id;
            return (
              <React.Fragment key={step.id}>
                <button
                  onClick={() => isCompleted && setCurrentStep(step.id)}
                  className={`flex flex-col items-center gap-2 ${isCompleted ? "cursor-pointer" : "cursor-default"}`}
                >
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    isCompleted
                      ? `${step.color} border-transparent text-white`
                      : isActive
                      ? `bg-zinc-900 ${step.border} ${step.accent} shadow-lg`
                      : "bg-zinc-900/50 border-zinc-800 text-zinc-700"
                  }`}>
                    {isCompleted ? <CheckCircle2 size={16} /> : <Icon size={16} strokeWidth={2.5} />}
                  </div>
                  <span className={`text-[9px] font-black uppercase tracking-widest hidden md:block ${
                    isActive ? "text-white" : isCompleted ? "text-zinc-400" : "text-zinc-700"
                  }`}>
                    {step.label}
                  </span>
                </button>
                {i < steps.length - 1 && (
                  <div className="flex-1 h-[1px] mb-5 bg-zinc-800">
                    <div
                      className="h-full bg-emerald-500/60 transition-all duration-500"
                      style={{ width: currentStep > step.id ? "100%" : "0%" }}
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* STEP CONTENT */}
      <div className="flex-1">

        {/* ── STEP 1: BASIC INFO ── */}
        {currentStep === 1 && (
          <div className="space-y-6 max-w-4xl mx-auto">
            <StepHeader icon={FileText} label="Basic Information" accent="text-blue-400" description="Define the core details of this intake cycle." />

            <SectionCard title="Intake Identity" icon={Hash} accent="text-blue-400">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <FieldLabel>Intake Title *</FieldLabel>
                  <TextInput value={form.intakeTitle} onChange={set("intakeTitle")} placeholder="e.g. Army Officer Cadet (Z-Grade)" />
                </div>
                <div>
                  <FieldLabel>Stream Type *</FieldLabel>
                  <SelectInput
                    value={form.streamType}
                    onChange={set("streamType")}
                    options={["Officer", "Enlistment", "Specialist"]}
                    placeholder="Select stream..."
                  />
                </div>
                <div>
                  <FieldLabel>Quota / Slots *</FieldLabel>
                  <NumberInput value={form.slots} onChange={setNum("slots")} placeholder="e.g. 200" min={1} />
                </div>
              </div>
            </SectionCard>

            <SectionCard title="Location & Administration" icon={Building2} accent="text-blue-400">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <FieldLabel>Location / Camp *</FieldLabel>
                  <TextInput value={form.location} onChange={set("location")} placeholder="e.g. MTD Sungai Besi" />
                </div>
                <div>
                  <FieldLabel>Reporting Center</FieldLabel>
                  <TextInput value={form.reportingCenter} onChange={set("reportingCenter")} placeholder="e.g. Pusat Latihan Tentera Darat" />
                </div>
                <div className="md:col-span-2">
                  <FieldLabel>Selection Board</FieldLabel>
                  <TextInput value={form.selectionBoard} onChange={set("selectionBoard")} placeholder="e.g. BPP - Markas Tentera Darat" />
                </div>
              </div>
            </SectionCard>

            <SectionCard title="Intake Period" icon={Calendar} accent="text-blue-400">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <FieldLabel>Start Date *</FieldLabel>
                  <TextInput value={form.startDate} onChange={set("startDate")} type="date" />
                </div>
                <div>
                  <FieldLabel>End Date *</FieldLabel>
                  <TextInput value={form.endDate} onChange={set("endDate")} type="date" />
                </div>
              </div>
            </SectionCard>
          </div>
        )}

        {/* ── STEP 2: ACADEMIC ── */}
        {currentStep === 2 && (
          <div className="space-y-6 max-w-4xl mx-auto">
            <StepHeader icon={GraduationCap} label="Academic Criteria" accent="text-indigo-400" description="Set the academic baseline and scoring weightage." />

            <SectionCard title="Academic Scoring" icon={Percent} accent="text-indigo-400">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <FieldLabel>Weightage (%)</FieldLabel>
                  <NumberInput value={form.academicWeightage} onChange={setNum("academicWeightage")} min={0} max={100} />
                  <WeightageBar value={form.academicWeightage} />
                </div>
                <div>
                  <FieldLabel>Minimum CGPA</FieldLabel>
                  <NumberInput value={form.minCGPA} onChange={setNum("minCGPA")} min={0} max={4} step={0.01} placeholder="e.g. 2.75" />
                </div>
                <div>
                  <FieldLabel>Minimum Education Level</FieldLabel>
                  <SelectInput
                    value={form.minEducationLevel}
                    onChange={set("minEducationLevel")}
                    options={["SPM", "Diploma", "Degree", "Master's", "PhD"]}
                  />
                </div>
                <div className="md:col-span-2">
                  <FieldLabel>Field Priority</FieldLabel>
                  <TextInput value={form.fieldPriority} onChange={set("fieldPriority")} placeholder="e.g. Engineering, Computer Science" />
                </div>
              </div>
            </SectionCard>
          </div>
        )}

        {/* ── STEP 3: APTITUDE ── */}
        {currentStep === 3 && (
          <div className="space-y-6 max-w-4xl mx-auto">
            <StepHeader icon={Brain} label="Aptitude Test" accent="text-purple-400" description="Configure the written aptitude assessment parameters." />

            <SectionCard title="Aptitude Scoring" icon={Percent} accent="text-purple-400">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <FieldLabel>Weightage (%)</FieldLabel>
                  <NumberInput value={form.aptitudeWeightage} onChange={setNum("aptitudeWeightage")} min={0} max={100} />
                  <WeightageBar value={form.aptitudeWeightage} />
                </div>
                <div>
                  <FieldLabel>Pass Score (out of 100)</FieldLabel>
                  <NumberInput value={form.aptitudePassScore} onChange={setNum("aptitudePassScore")} min={0} max={100} placeholder="e.g. 65" />
                </div>
              </div>
            </SectionCard>

            <InfoCard message="Aptitude tests are administered and scored by the system. Results are automatically recorded per applicant." />
          </div>
        )}

        {/* ── STEP 4: MEDICAL ── */}
        {currentStep === 4 && (
          <div className="space-y-6 max-w-4xl mx-auto">
            <StepHeader icon={Stethoscope} label="Medical Standards" accent="text-rose-400" description="Medical is compulsory and not weighted in the final score." />

            <SectionCard title="Medical Thresholds" icon={UserSquare2} accent="text-rose-400">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <FieldLabel>Minimum Height (cm)</FieldLabel>
                  <NumberInput value={form.minHeight} onChange={setNum("minHeight")} min={140} max={220} placeholder="156" />
                </div>
                <div>
                  <FieldLabel>BMI Minimum</FieldLabel>
                  <NumberInput value={form.bmiMin} onChange={setNum("bmiMin")} min={10} max={50} step={0.1} placeholder="18.5" />
                </div>
                <div>
                  <FieldLabel>BMI Maximum</FieldLabel>
                  <NumberInput value={form.bmiMax} onChange={setNum("bmiMax")} min={10} max={50} step={0.1} placeholder="26.9" />
                </div>
              </div>
            </SectionCard>

            <InfoCard message="Medical phase is compulsory. Any applicant who fails the medical assessment is automatically disqualified regardless of other scores." />
          </div>
        )}

        {/* ── STEP 5: PHYSICAL ── */}
        {currentStep === 5 && (
          <div className="space-y-6 max-w-4xl mx-auto">
            <StepHeader icon={Activity} label="Physical Benchmarks" accent="text-amber-400" description="Set the minimum physical performance standards by gender." />

            <SectionCard title="Physical Scoring" icon={Percent} accent="text-amber-400">
              <div className="mb-6">
                <FieldLabel>Weightage (%)</FieldLabel>
                <NumberInput value={form.physicalWeightage} onChange={setNum("physicalWeightage")} min={0} max={100} />
                <WeightageBar value={form.physicalWeightage} />
              </div>
            </SectionCard>

            <div className="grid md:grid-cols-2 gap-6">
              <SectionCard title="Male Benchmarks" icon={Activity} accent="text-amber-400">
                <div className="space-y-4">
                  <div>
                    <FieldLabel>2.4km Run (MM:SS)</FieldLabel>
                    <TextInput value={form.maleRunTime} onChange={set("maleRunTime")} placeholder="14:00" />
                  </div>
                  <div>
                    <FieldLabel>Push-ups (min count)</FieldLabel>
                    <NumberInput value={form.malePushups} onChange={setNum("malePushups")} min={0} placeholder="30" />
                  </div>
                  <div>
                    <FieldLabel>Sit-ups (min count)</FieldLabel>
                    <NumberInput value={form.maleSitups} onChange={setNum("maleSitups")} min={0} placeholder="30" />
                  </div>
                </div>
              </SectionCard>

              <SectionCard title="Female Benchmarks" icon={Activity} accent="text-amber-400">
                <div className="space-y-4">
                  <div>
                    <FieldLabel>2.4km Run (MM:SS)</FieldLabel>
                    <TextInput value={form.femaleRunTime} onChange={set("femaleRunTime")} placeholder="16:00" />
                  </div>
                  <div>
                    <FieldLabel>Push-ups (min count)</FieldLabel>
                    <NumberInput value={form.femalePushups} onChange={setNum("femalePushups")} min={0} placeholder="20" />
                  </div>
                  <div>
                    <FieldLabel>Sit-ups (min count)</FieldLabel>
                    <NumberInput value={form.femaleSitups} onChange={setNum("femaleSitups")} min={0} placeholder="20" />
                  </div>
                </div>
              </SectionCard>
            </div>
          </div>
        )}

        {/* ── STEP 6: INTERVIEW ── */}
        {currentStep === 6 && (
          <div className="space-y-6 max-w-4xl mx-auto">
            <StepHeader icon={Users} label="Final Interview" accent="text-emerald-400" description="The interview panel evaluates communication, confidence, and leadership." />

            <SectionCard title="Interview Scoring" icon={Percent} accent="text-emerald-400">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <FieldLabel>Weightage (%)</FieldLabel>
                  <NumberInput value={form.interviewWeightage} onChange={setNum("interviewWeightage")} min={0} max={100} />
                  <WeightageBar value={form.interviewWeightage} />
                </div>
              </div>
            </SectionCard>

            {/* Live Weightage Summary */}
            <div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-4">Scoring Breakdown</p>
              <div className="space-y-3">
                {[
                  { label: "Academic",  value: form.academicWeightage,  color: "bg-indigo-500"  },
                  { label: "Aptitude",  value: form.aptitudeWeightage,  color: "bg-purple-500"  },
                  { label: "Physical",  value: form.physicalWeightage,  color: "bg-amber-500"   },
                  { label: "Interview", value: form.interviewWeightage, color: "bg-emerald-500" },
                ].map(({ label, value, color }) => (
                  <div key={label} className="flex items-center gap-4">
                    <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest w-20">{label}</span>
                    <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div className={`h-full ${color} rounded-full transition-all duration-500`} style={{ width: `${Math.min(100, Number(value) || 0)}%` }} />
                    </div>
                    <span className="text-[10px] font-black font-mono text-zinc-300 w-10 text-right">{value || 0}%</span>
                  </div>
                ))}
                <div className="pt-3 border-t border-white/5 flex justify-between items-center">
                  <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Total</span>
                  <span className={`text-sm font-black font-mono ${totalWeightage === 100 ? "text-emerald-500" : "text-rose-500"}`}>
                    {totalWeightage}% {totalWeightage === 100 ? "✓ Valid" : "✗ Must be 100%"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── STEP 7: REVIEW ── */}
        {currentStep === 7 && (
          <div className="space-y-6 max-w-4xl mx-auto">
            <StepHeader icon={Award} label="Review & Confirm" accent="text-zinc-300" description="Review all parameters before creating the intake." />

            {totalWeightage !== 100 && (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-rose-500/5 border border-rose-500/20">
                <AlertCircle size={16} className="text-rose-500 shrink-0" />
                <p className="text-[10px] font-bold text-rose-400 uppercase tracking-widest">
                  Total weightage is {totalWeightage}% — must be exactly 100% before submitting.
                </p>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <SectionCard title="Basic Information" icon={FileText} accent="text-blue-400">
                <ReviewRow label="Title" value={form.intakeTitle} />
                <ReviewRow label="Stream" value={form.streamType} />
                <ReviewRow label="Slots" value={form.slots} />
                <ReviewRow label="Location" value={form.location} />
                <ReviewRow label="Reporting Center" value={form.reportingCenter} />
                <ReviewRow label="Selection Board" value={form.selectionBoard} />
                <ReviewRow label="Start Date" value={form.startDate} />
                <ReviewRow label="End Date" value={form.endDate} />
              </SectionCard>

              <SectionCard title="Academic Criteria" icon={GraduationCap} accent="text-indigo-400">
                <ReviewRow label="Weightage" value={`${form.academicWeightage}%`} />
                <ReviewRow label="Min. CGPA" value={form.minCGPA} />
                <ReviewRow label="Min. Education" value={form.minEducationLevel} />
                <ReviewRow label="Field Priority" value={form.fieldPriority || "None"} />
              </SectionCard>

              <SectionCard title="Aptitude Test" icon={Brain} accent="text-purple-400">
                <ReviewRow label="Weightage" value={`${form.aptitudeWeightage}%`} />
                <ReviewRow label="Pass Score" value={`${form.aptitudePassScore}/100`} />
              </SectionCard>

              <SectionCard title="Medical Standards" icon={Stethoscope} accent="text-rose-400">
                <ReviewRow label="Compulsory" value="Yes" />
                <ReviewRow label="Min. Height" value={`${form.minHeight} cm`} />
                <ReviewRow label="BMI Range" value={`${form.bmiMin} – ${form.bmiMax}`} />
              </SectionCard>

              <SectionCard title="Physical Benchmarks" icon={Activity} accent="text-amber-400">
                <ReviewRow label="Weightage" value={`${form.physicalWeightage}%`} />
                <ReviewRow label="Male Run" value={form.maleRunTime} />
                <ReviewRow label="Male Pushups" value={form.malePushups} />
                <ReviewRow label="Male Situps" value={form.maleSitups} />
                <ReviewRow label="Female Run" value={form.femaleRunTime} />
                <ReviewRow label="Female Pushups" value={form.femalePushups} />
                <ReviewRow label="Female Situps" value={form.femaleSitups} />
              </SectionCard>

              <SectionCard title="Interview" icon={Users} accent="text-emerald-400">
                <ReviewRow label="Weightage" value={`${form.interviewWeightage}%`} />
                <ReviewRow label="Total Weightage" value={`${totalWeightage}%`} />
              </SectionCard>
            </div>
          </div>
        )}
      </div>

      {/* NAVIGATION FOOTER */}
      <footer className="mt-12 flex justify-between items-center border-t border-white/5 pt-8">
        <button
          onClick={() => setCurrentStep((s) => Math.max(1, s - 1))}
          disabled={currentStep === 1}
          className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:border-white/30 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={14} /> Previous
        </button>

        <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">
          Step {currentStep} of {steps.length}
        </span>

        {currentStep < steps.length ? (
          <button
            onClick={() => setCurrentStep((s) => Math.min(steps.length, s + 1))}
            disabled={!canProceed()}
            className="group relative flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <div className="absolute inset-0 bg-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10 text-[10px] font-black uppercase tracking-widest group-hover:text-white transition-colors">
              Next
            </span>
            <ChevronRight size={14} className="relative z-10" />
          </button>
        ) : (
          <button
            onClick={() => totalWeightage === 100 && setSubmitted(true)}
            disabled={totalWeightage !== 100}
            className="group relative flex items-center gap-3 px-8 py-3 bg-white text-black rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <div className="absolute inset-0 bg-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <Zap size={14} className="relative z-10" />
            <span className="relative z-10 text-[10px] font-black uppercase tracking-widest group-hover:text-white transition-colors">
              Create Intake
            </span>
          </button>
        )}
      </footer>
    </div>
  );
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function StepHeader({
  icon: Icon,
  label,
  accent,
  description,
}: {
  icon: any;
  label: string;
  accent: string;
  description: string;
}) {
  return (
    <div className="mb-6 flex items-start gap-4">
      <div className={`w-10 h-10 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center shrink-0 ${accent}`}>
        <Icon size={18} strokeWidth={2} />
      </div>
      <div>
        <h2 className="text-lg font-black tracking-tight">{label}</h2>
        <p className="text-zinc-500 text-xs mt-0.5">{description}</p>
      </div>
    </div>
  );
}

function InfoCard({ message }: { message: string }) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-xl bg-zinc-900/40 border border-white/5">
      <AlertCircle size={14} className="text-zinc-500 mt-0.5 shrink-0" />
      <p className="text-[10px] font-bold text-zinc-500 leading-relaxed uppercase tracking-widest">{message}</p>
    </div>
  );
}

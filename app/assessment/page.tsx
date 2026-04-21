"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { 
  Target, Shield, Dna, Brain, Activity, 
  CheckCircle2, ChevronLeft, ChevronRight, Zap
} from "lucide-react";
import Navbar from "@/components/Navbar";
import questionsData from "../../data/questions.json";

// --- Types ---
type Branch = 'TDM' | 'TLDM' | 'TUDM';

interface Question {
  id: number;
  category: string;
  text: string;
  weight: Record<Branch, number>;
}

export default function FitQuiz() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({}); // Store index of selected option (0-4)
  const [isFinished, setIsFinished] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  // --- Logic: Initialize 20 Random Questions ---
  useEffect(() => {
    const shuffled = [...questionsData]
      .sort(() => 0.5 - Math.random())
      .slice(0, 20);
    setQuestions(shuffled as Question[]);
  }, []);

  // --- Logic: Calculation ---
  const calculateResults = () => {
    const scores: Record<Branch, number> = { TDM: 0, TLDM: 0, TUDM: 0 };
    const multiplierMap = [1.0, 0.7, 0.4, 0.2, 0.05]; // Mapping 5 options to weights

    questions.forEach((q, idx) => {
      const selectedOptionIdx = answers[idx];
      if (selectedOptionIdx !== undefined) {
        const mult = multiplierMap[selectedOptionIdx];
        scores.TDM += q.weight.TDM * mult;
        scores.TLDM += q.weight.TLDM * mult;
        scores.TUDM += q.weight.TUDM * mult;
      }
    });

    const totalPossible = questions.length * 5;
    return Object.entries(scores).map(([branch, score]) => ({
      branch: branch as Branch,
      percentage: Math.min(100, Math.round((score / totalPossible) * 100)),
    })).sort((a, b) => b.percentage - a.percentage);
  };

  const handleOptionSelect = (optionIdx: number) => {
    setAnswers({ ...answers, [currentStep]: optionIdx });
    // Auto-advance with slight delay for UX
    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 400);
    }
  };

  // --- UI: Category Icon Picker ---
  const getIcon = (category: string) => {
    switch (category) {
      case "Technical": return Activity;
      case "Operational": return Target;
      case "Support": return Shield;
      default: return Brain;
    }
  };

  // --- UI: Finish Screen ---
  if (isFinished) {
    const results = calculateResults();
    const topMatch = results[0];

    return (
      <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-6 text-center">
        <Navbar />
        <div className="h-24 w-24 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-8 shadow-[0_0_50px_rgba(16,185,129,0.2)]">
          <CheckCircle2 size={48} />
        </div>
        <h1 className="text-4xl font-black uppercase tracking-tight text-white mb-2">Analysis Complete</h1>
        <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em] mb-8">Branch Compatibility Synced</p>
        
        <div className="w-full max-w-md bg-zinc-900/50 border border-white/5 rounded-3xl p-8 mb-10">
          <div className="text-emerald-500 font-black text-5xl mb-2">{topMatch.percentage}%</div>
          <div className="text-white font-bold text-xl uppercase tracking-widest">{topMatch.branch}</div>
          <div className="mt-6 space-y-3">
            {results.slice(1).map(r => (
              <div key={r.branch} className="flex justify-between text-xs font-bold text-zinc-500 uppercase tracking-widest">
                <span>{r.branch}</span>
                <span>{r.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        <Link href="/signup" className="h-16 px-12 rounded-2xl bg-white text-black font-black uppercase tracking-widest hover:bg-emerald-400 transition-all flex items-center justify-center hover:scale-105 shadow-xl">
          Register to Finalize Application
        </Link>
      </div>
    );
  }

  const activeQ = questions[currentStep];
  if (!activeQ) return null;
  const ActiveIcon = getIcon(activeQ.category);

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      <Navbar />

      {/* PROGRESS DOCK */}
      <div className="fixed top-28 w-full px-6 z-40">
        <div className="mx-auto max-w-2xl flex items-center gap-4 bg-zinc-900/80 backdrop-blur-xl p-4 rounded-3xl border border-white/5 shadow-2xl">
          <div className="flex-1 flex gap-1.5">
            {questions.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                  idx === currentStep ? "bg-emerald-400 w-4 shadow-[0_0_15px_rgba(52,211,153,0.6)]" : 
                  idx < currentStep ? "bg-zinc-600" : "bg-white/5"
                }`} 
              />
            ))}
          </div>
          <span className="font-mono text-[10px] text-zinc-500 whitespace-nowrap">
            {String(currentStep + 1).padStart(2, '0')} / {questions.length}
          </span>
        </div>
      </div>

      <main className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-32 pb-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative z-10 w-full max-w-2xl">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="h-20 w-20 rounded-3xl bg-zinc-900 border border-white/10 flex items-center justify-center text-emerald-400 mb-8 shadow-2xl animate-in fade-in zoom-in duration-700">
              <ActiveIcon size={40} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500/60 mb-4 flex items-center gap-2">
              <Zap size={12} /> {activeQ.category} Division
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-[1.1] max-w-xl">
              {activeQ.text}
            </h2>
          </div>

          {/* OPTIONS */}
          <div className="grid grid-cols-1 gap-3 mb-10">
            {["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"].map((label, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionSelect(idx)}
                className={`group flex items-center justify-between p-6 rounded-2xl border-2 transition-all duration-300 active:scale-[0.98] ${
                  answers[currentStep] === idx 
                  ? "bg-white border-white scale-[1.02]" 
                  : "bg-zinc-900/50 border-white/5 hover:border-emerald-500/40 hover:bg-zinc-800/80"
                }`}
              >
                <span className={`font-black uppercase tracking-widest text-sm ${answers[currentStep] === idx ? "text-black" : "text-zinc-400"}`}>
                  {label}
                </span>
                <div className={`h-6 w-6 rounded-full border-2 flex items-center justify-center ${
                  answers[currentStep] === idx ? "bg-black border-black" : "border-white/10 group-hover:border-emerald-500/40"
                }`}>
                  {answers[currentStep] === idx && <div className="h-2 w-2 rounded-full bg-white" />}
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* NAVIGATION CONTROLS DOCK */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-6">
        <div className="bg-zinc-900/90 backdrop-blur-2xl border border-white/10 p-2 rounded-2xl flex justify-between shadow-3xl">
          <button 
            disabled={currentStep === 0}
            onClick={() => setCurrentStep(prev => prev - 1)}
            className="h-14 w-14 rounded-xl flex items-center justify-center hover:bg-white/5 disabled:opacity-20 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>

          {currentStep === questions.length - 1 ? (
             <button 
                onClick={() => setIsFinished(true)}
                disabled={answers[currentStep] === undefined}
                className="flex-1 mx-2 bg-emerald-500 text-black font-black uppercase tracking-tighter rounded-xl disabled:opacity-50"
             >
               Finalize Result
             </button>
          ) : (
            <button 
              disabled={answers[currentStep] === undefined}
              onClick={() => setCurrentStep(prev => prev + 1)}
              className="flex-1 mx-2 bg-white text-black font-black uppercase tracking-tighter rounded-xl hover:bg-emerald-400 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              Next Strategy <ChevronRight size={18} />
            </button>
          )}

          <div className="h-14 w-14 rounded-xl flex items-center justify-center text-zinc-500 font-mono text-xs">
            {Math.round(((currentStep + 1) / questions.length) * 100)}%
          </div>
        </div>
      </div>
    </div>
  );
}
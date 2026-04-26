"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Target, Shield, Dna, Brain, Activity, 
  CheckCircle2, ChevronLeft, ChevronRight, Zap
} from "lucide-react";
// Import your local JSON data - ensure the path matches your project structure
import questionsData from "@/data/questions.json";

// --- Types ---
type Branch = 'TDM' | 'TLDM' | 'TUDM';

interface Question {
  id: number;
  category: string;
  text: string;
  weight: Record<Branch, number>;
}

export default function AssessmentPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({}); 
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const shuffled = [...questionsData]
      .sort(() => 0.5 - Math.random())
      .slice(0, 20);
    setQuestions(shuffled as Question[]);
  }, []);

  const answeredCount = Object.keys(answers).length;
  const completionPercentage = Math.round((answeredCount / 20) * 100);

  const calculateResults = () => {
    const scores: Record<Branch, number> = { TDM: 0, TLDM: 0, TUDM: 0 };
    const multiplierMap = [1.0, 0.7, 0.4, 0.2, 0.05]; 

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
    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 400);
    }
  };

  const getIcon = (category: string) => {
    switch (category) {
      case "Technical": return Activity;
      case "Operational": return Target;
      case "Support": return Shield;
      default: return Brain;
    }
  };

  const branchFullNames: Record<Branch, string> = {
    TDM: "Tentera Darat Malaysia",
    TLDM: "Tentera Laut Diraja Malaysia",
    TUDM: "Tentera Udara Diraja Malaysia",
  };

  if (questions.length === 0) return null;

  const activeQ = questions[currentStep];
  const ActiveIcon = getIcon(activeQ?.category || "General");

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white font-sans flex flex-col selection:bg-emerald-500/30">
      
      {/* GLOBAL FIXED BACKGROUND (Camo Overlay) */}
      <div 
        className="fixed inset-0 z-0 bg-[url('/Camo.jpg')] bg-cover bg-center bg-fixed opacity-10" 
        aria-hidden="true"
      />

      <div className="relative z-10 flex-grow flex flex-col">
        {!isFinished ? (
          <>
            {/* FLOATING PROGRESS DOCK */}
            <div className="fixed top-8 w-full px-6 z-40 pointer-events-none">
              <div className="mx-auto max-w-2xl flex items-center gap-4 bg-zinc-900/90 backdrop-blur-xl p-4 rounded-3xl border border-white/5 shadow-2xl pointer-events-auto">
                <Link href="/loggedin/dashboard" className="h-10 w-10 flex items-center justify-center text-zinc-500 hover:text-white transition-colors">
                    <ChevronLeft size={20} />
                </Link>
                <div className="flex-1 flex gap-1.5">
                  {questions.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                        idx === currentStep ? "bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.6)]" : 
                        answers[idx] !== undefined ? "bg-zinc-500" : "bg-white/5"
                      }`} 
                    />
                  ))}
                </div>
                <div className="flex flex-col items-end min-w-[40px]">
                  <span className="font-mono text-[10px] text-emerald-400 leading-none mb-0.5">{completionPercentage}%</span>
                  <span className="font-mono text-[8px] text-zinc-500 leading-none">
                    {String(currentStep + 1).padStart(2, '0')}/{questions.length}
                  </span>
                </div>
              </div>
            </div>

            <main className="flex-grow flex flex-col items-center px-6 pt-52 pb-20">
              <div className="relative z-10 w-full max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="flex flex-col items-center text-center mb-12">
                  <div className="h-20 w-20 rounded-3xl bg-zinc-900/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-emerald-400 mb-8 shadow-2xl">
                    <ActiveIcon size={40} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500/60 mb-4 flex items-center gap-2">
                    <Zap size={12} /> {activeQ.category} Division
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-[1.1] max-w-xl">
                    {activeQ.text}
                  </h2>
                </div>

                {/* OPTIONS GRID */}
                <div className="grid grid-cols-1 gap-3 mb-10">
                  {["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"].map((label, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOptionSelect(idx)}
                      className={`group flex items-center justify-between p-6 rounded-2xl border-2 transition-all duration-300 active:scale-[0.98] ${
                        answers[currentStep] === idx 
                        ? "bg-white border-white scale-[1.01]" 
                        : "bg-zinc-900/60 backdrop-blur-md border-white/5 hover:border-emerald-500/40 hover:bg-zinc-800/80"
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

                {/* NAVIGATION */}
                <div className="mx-auto max-w-md w-full">
                  <div className="bg-zinc-900/90 backdrop-blur-2xl border border-white/10 p-2 rounded-2xl flex items-center gap-2 shadow-3xl">
                    <button 
                      disabled={currentStep === 0}
                      onClick={() => setCurrentStep(prev => prev - 1)}
                      className="h-14 w-14 rounded-xl flex items-center justify-center bg-white/5 hover:bg-white/10 disabled:opacity-20 transition-all"
                    >
                      <ChevronLeft size={24} />
                    </button>

                    {currentStep === questions.length - 1 ? (
                       <button 
                          onClick={() => setIsFinished(true)}
                          disabled={answers[currentStep] === undefined}
                          className="flex-1 h-14 bg-emerald-500 text-black font-black uppercase tracking-tighter rounded-xl disabled:opacity-50 hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] text-[11px]"
                       >
                          Analyze Results
                       </button>
                    ) : (
                      <button 
                        disabled={answers[currentStep] === undefined}
                        onClick={() => setCurrentStep(prev => prev + 1)}
                        className="flex-1 h-14 bg-white text-black font-black uppercase tracking-tighter rounded-xl hover:bg-emerald-400 transition-colors disabled:opacity-50 text-[11px]"
                      >
                        Continue
                      </button>
                    )}

                    <button 
                      disabled={currentStep === questions.length - 1}
                      onClick={() => setCurrentStep(prev => prev + 1)}
                      className="h-14 w-14 rounded-xl flex items-center justify-center bg-white/5 hover:bg-white/10 disabled:opacity-20 transition-all"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </>
        ) : (
          /* --- RESULTS VIEW --- */
          <main className="flex-grow flex flex-col items-center justify-center p-6 text-center animate-in zoom-in-95 duration-700 pt-32 pb-20">
            <div className="h-24 w-24 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-8 shadow-[0_0_50px_rgba(16,185,129,0.2)]">
              <CheckCircle2 size={48} />
            </div>
            <h1 className="text-4xl font-black uppercase tracking-tight text-white mb-2 leading-none">Analysis Complete</h1>
            <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em] mb-8">Branch Compatibility Synced</p>
            
            <div className="w-full max-w-md bg-zinc-900/70 border border-white/5 rounded-[2.5rem] p-10 mb-10 backdrop-blur-xl">
              {(() => {
                const results = calculateResults();
                const topMatch = results[0];
                return (
                  <>
                    <div className="text-emerald-500 font-black text-7xl mb-2 tracking-tighter">{topMatch.percentage}%</div>
                    <div className="text-white font-bold text-xl uppercase tracking-widest leading-tight mb-8">{branchFullNames[topMatch.branch]}</div>
                    
                    <div className="space-y-5 text-left">
                      {results.slice(1).map(r => (
                        <div key={r.branch} className="space-y-2">
                          <div className="flex justify-between text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">
                            <span>{r.branch} Compatibility</span>
                            <span>{r.percentage}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                              <div className="h-full bg-emerald-500/50 transition-all duration-1000" style={{ width: `${r.percentage}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>

            <Link href="/loggedin/recruitment" className="h-16 px-12 rounded-2xl bg-white text-black font-black uppercase tracking-widest hover:bg-emerald-400 transition-all flex items-center justify-center hover:scale-105 shadow-xl text-[11px]">
              Proceed to Recruitment Hub
            </Link>
          </main>
        )}
      </div>
    </div>
  );
}
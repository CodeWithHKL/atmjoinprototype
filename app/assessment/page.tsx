"use client";

import React, { useState, useEffect } from 'react';
// Assuming you saved the JSON provided previously in this path
import questionsData from '../../data/questions.json'; 

type Branch = 'TDM' | 'TLDM' | 'TUDM';

interface Question {
  id: number;
  category: string;
  text: string;
  weight: Record<Branch, number>;
}

export default function CareerAssessment() {
  // --- State ---
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<Record<Branch, number>>({ TDM: 0, TLDM: 0, TUDM: 0 });
  const [isFinished, setIsFinished] = useState(false);
  const [started, setStarted] = useState(false);

  // --- Logic: Shuffle and Pick 20 ---
  useEffect(() => {
    const shuffled = [...questionsData]
      .sort(() => 0.5 - Math.random())
      .slice(0, 20); // Change this number to adjust test length
    setQuestions(shuffled as Question[]);
  }, []);

  const handleAnswer = (multiplier: number) => {
    const q = questions[currentStep];
    
    setScores(prev => ({
      TDM: prev.TDM + (q.weight.TDM * multiplier),
      TLDM: prev.TLDM + (q.weight.TLDM * multiplier),
      TUDM: prev.TUDM + (q.weight.TUDM * multiplier),
    }));

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const getResults = () => {
    const totalPossiblePerBranch = questions.length * 5; 
    return Object.entries(scores).map(([branch, score]) => ({
      branch: branch as Branch,
      percentage: Math.min(100, Math.round((score / totalPossiblePerBranch) * 100)),
    })).sort((a, b) => b.percentage - a.percentage);
  };

  const branchNames: Record<Branch, string> = {
    TDM: "Tentera Darat Malaysia",
    TLDM: "Tentera Laut Diraja Malaysia",
    TUDM: "Tentera Udara Diraja Malaysia",
  };

  // --- UI: Start Screen ---
  if (!started) {
    return (
      <div className="max-w-2xl mx-auto mt-20 p-10 bg-white border border-slate-200 rounded-3xl shadow-2xl text-center">
        <div className="mb-6 inline-flex p-4 bg-blue-50 rounded-full text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04M12 21.355r-.015.015V21a11.955 11.955 0 01-8.618-3.04A12.02 12.02 0 013 9c0-5.591 3.824-10.29 9-11.622 5.176 1.332 9 6.03 9 11.622 0 3.31-1.343 6.31-3.518 8.441z" />
          </svg>
        </div>
        <h1 className="text-4xl font-black text-slate-900 mb-4">ATM Career Match</h1>
        <p className="text-slate-600 mb-8 leading-relaxed">
          Discover which branch of the Malaysian Armed Forces aligns with your interests, skills, and personality. 
          This assessment takes approximately 3 minutes.
        </p>
        <button 
          onClick={() => setStarted(true)}
          className="w-full py-4 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-200"
        >
          Start Assessment
        </button>
      </div>
    );
  }

  // --- UI: Result Screen ---
  if (isFinished) {
    const results = getResults();
    const winner = results[0];

    return (
      <div className="max-w-2xl mx-auto mt-10 p-8 bg-white shadow-2xl rounded-3xl border border-slate-100">
        <div className="text-center mb-8">
          <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">Analysis Complete</span>
          <h2 className="text-3xl font-bold text-slate-800 mt-4">Your Military Profile</h2>
        </div>

        <div className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl mb-8 text-center shadow-xl">
          <p className="text-blue-400 font-bold uppercase text-sm mb-2">Primary Recommendation</p>
          <h1 className="text-3xl font-black text-white">{branchNames[winner.branch]}</h1>
          <div className="mt-4 text-5xl font-black text-blue-500">{winner.percentage}%</div>
        </div>

        <div className="space-y-6 mb-10">
          <h3 className="font-bold text-slate-700 border-b pb-2">Branch Compatibility</h3>
          {results.map((res) => (
            <div key={res.branch} className="group">
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-slate-600">{branchNames[res.branch]}</span>
                <span className="text-slate-900 font-bold">{res.percentage}%</span>
              </div>
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                <div 
                  className="bg-blue-600 h-full transition-all duration-1000 ease-out" 
                  style={{ width: `${res.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button onClick={() => window.location.reload()} className="py-3 px-6 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 transition">
            Retake
          </button>
          <button className="py-3 px-6 bg-blue-700 text-white rounded-xl font-bold hover:bg-blue-800 transition shadow-lg shadow-blue-100">
            Apply to {winner.branch}
          </button>
        </div>
      </div>
    );
  }

  // --- UI: Question Screen ---
  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white shadow-2xl rounded-3xl border border-slate-100">
      <div className="flex justify-between items-center mb-10">
        <div>
          <p className="text-xs font-black text-blue-600 uppercase tracking-widest mb-1">Assessment in Progress</p>
          <h4 className="text-sm font-bold text-slate-400">Question {currentStep + 1} of {questions.length}</h4>
        </div>
        <div className="w-32 bg-slate-100 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-blue-500 h-full transition-all duration-500" 
            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="min-h-[120px] mb-10">
        <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-500 rounded-md uppercase mb-4 inline-block">
          {questions[currentStep]?.category}
        </span>
        <h2 className="text-2xl font-bold text-slate-800 leading-snug">
          {questions[currentStep]?.text}
        </h2>
      </div>

      <div className="space-y-3">
        {[
          { label: "Strongly Agree", val: 1.0, color: "hover:border-blue-500 hover:bg-blue-50" },
          { label: "Agree", val: 0.7, color: "hover:border-blue-400 hover:bg-blue-50" },
          { label: "Neutral", val: 0.4, color: "hover:border-slate-400 hover:bg-slate-50" },
          { label: "Disagree", val: 0.2, color: "hover:border-red-300 hover:bg-red-50" },
          { label: "Strongly Disagree", val: 0.05, color: "hover:border-red-500 hover:bg-red-50" },
        ].map((btn) => (
          <button
            key={btn.label}
            onClick={() => handleAnswer(btn.val)}
            className={`w-full text-left p-5 rounded-2xl border-2 border-slate-50 transition-all duration-200 group flex justify-between items-center ${btn.color}`}
          >
            <span className="font-bold text-slate-700 group-hover:text-blue-700">{btn.label}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-300 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}
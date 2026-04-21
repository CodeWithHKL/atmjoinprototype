"use client";

import React, { useState } from 'react';

// --- Types & Data ---
type Branch = 'TDM' | 'TLDM' | 'TUDM';

interface Question {
  id: number;
  text: string;
  weight: Record<Branch, number>; // Points assigned to each branch
}

const QUESTIONS: Question[] = [
  { id: 1, text: "I enjoy working in rugged, outdoor environments regardless of weather.", weight: { TDM: 5, TLDM: 1, TUDM: 1 } },
  { id: 2, text: "I am fascinated by advanced aviation and aerospace technology.", weight: { TDM: 1, TLDM: 2, TUDM: 5 } },
  { id: 3, text: "I feel comfortable working in tight-knit teams for long periods at sea.", weight: { TDM: 1, TLDM: 5, TUDM: 1 } },
  { id: 4, text: "I prefer roles that involve heavy machinery and land-based tactics.", weight: { TDM: 5, TLDM: 2, TUDM: 1 } },
  { id: 5, text: "I have a strong interest in high-tech navigation and marine engineering.", weight: { TDM: 1, TLDM: 5, TUDM: 3 } },
  { id: 6, text: "I thrive in environments requiring extreme precision and fast reflexes.", weight: { TDM: 2, TLDM: 1, TUDM: 5 } },
  { id: 7, text: "I am interested in disaster relief and jungle warfare operations.", weight: { TDM: 5, TLDM: 1, TUDM: 1 } },
  { id: 8, text: "I enjoy maintaining and troubleshooting complex electronic systems.", weight: { TDM: 2, TLDM: 3, TUDM: 5 } },
];

// --- Component ---
export default function CareerAssessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<Record<Branch, number>>({ TDM: 0, TLDM: 0, TUDM: 0 });
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (multiplier: number) => {
    const q = QUESTIONS[currentStep];
    
    // Update scores based on the weights and the 1-5 scale (multiplier)
    setScores(prev => ({
      TDM: prev.TDM + (q.weight.TDM * multiplier),
      TLDM: prev.TLDM + (q.weight.TLDM * multiplier),
      TUDM: prev.TUDM + (q.weight.TUDM * multiplier),
    }));

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const getWinner = () => {
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    return sorted[0][0] as Branch;
  };

  const branchNames: Record<Branch, string> = {
    TDM: "Tentera Darat Malaysia (Army)",
    TLDM: "Tentera Laut Diraja Malaysia (Navy)",
    TUDM: "Tentera Udara Diraja Malaysia (Air Force)",
  };

  if (isFinished) {
    const winner = getWinner();
    return (
      <div className="max-w-2xl mx-auto mt-10 p-8 bg-white shadow-xl rounded-2xl border border-slate-100 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Your Career Match</h2>
        <div className="p-6 bg-blue-50 rounded-xl mb-6">
          <p className="text-lg text-blue-600 font-semibold uppercase tracking-wider">Recommended Branch</p>
          <h1 className="text-4xl font-black text-slate-900 mt-2">{branchNames[winner]}</h1>
        </div>
        <div className="space-y-4 mb-8 text-left">
          {Object.entries(scores).map(([branch, score]) => (
            <div key={branch}>
              <div className="flex justify-between mb-1 text-sm font-medium">
                <span>{branchNames[branch as Branch]}</span>
                <span>{Math.round((score / (QUESTIONS.length * 5)) * 100)}% Match</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000" 
                  style={{ width: `${Math.min(100, (score / (QUESTIONS.length * 5)) * 100)}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <button 
          onClick={() => window.location.reload()}
          className="bg-slate-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition shadow-lg"
        >
          Retake Assessment
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white shadow-xl rounded-2xl border border-slate-100">
      {/* Progress Header */}
      <div className="flex justify-between items-center mb-8">
        <span className="text-sm font-bold text-blue-600 uppercase">Question {currentStep + 1} of {QUESTIONS.length}</span>
        <div className="w-1/2 bg-slate-100 h-2 rounded-full">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
            style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question Text */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 leading-tight">
          {QUESTIONS[currentStep].text}
        </h2>
      </div>

      {/* Answer Buttons */}
      <div className="grid grid-cols-1 gap-3">
        {[
          { label: "Strongly Agree", val: 1.0 },
          { label: "Agree", val: 0.75 },
          { label: "Neutral", val: 0.5 },
          { label: "Disagree", val: 0.25 },
          { label: "Strongly Disagree", val: 0.1 },
        ].map((btn) => (
          <button
            key={btn.label}
            onClick={() => handleAnswer(btn.val)}
            className="w-full text-left p-4 rounded-xl border-2 border-slate-100 hover:border-blue-500 hover:bg-blue-50 transition-all font-medium text-slate-700"
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}
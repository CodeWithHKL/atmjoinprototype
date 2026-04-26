"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { 
  LifeBuoy, 
  Mail, 
  Phone, 
  MessageSquare, 
  FileText, 
  ChevronRight, 
  ArrowLeft 
} from "lucide-react";

export default function HelpPage() {
  const router = useRouter();

  const supportCategories = [
    {
      title: "Technical Support",
      description: "Issues with login, account recovery, or portal errors.",
      icon: <LifeBuoy className="text-blue-400" size={24} />,
      contact: "tech.support@atmjoin.mil"
    },
    {
      title: "Recruitment Inquiry",
      description: "Questions regarding eligibility and branch requirements.",
      icon: <FileText className="text-emerald-400" size={24} />,
      contact: "recruitment@atmjoin.mil"
    },
    {
      title: "Emergency Liaison",
      description: "Immediate assistance for active application deadlines.",
      icon: <Phone className="text-red-400" size={24} />,
      contact: "+60 (3) 8000-1234"
    }
  ];

  const faqs = [
    "How do I reset my security clearance password?",
    "Which military branches are currently accepting applications?",
    "What documents are required for the initial screening?",
    "How long does the background verification take?"
  ];

  return (
    <div 
      className="relative flex min-h-screen flex-col items-center justify-start bg-zinc-900 font-sans text-zinc-100 p-6 overflow-x-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Camo.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Background Accents */}
      <div className="absolute top-[-10%] left-[-10%] h-[50%] w-[50%] rounded-full bg-blue-600/10 blur-[120px] z-0" />

      <main className="relative z-10 w-full max-w-4xl mt-10 flex flex-col gap-8">
        
        {/* Header and Back Button */}
        <div className="flex flex-col gap-4">
          <button 
            onClick={() => router.back()} 
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors w-fit"
          >
            <ArrowLeft size={14} /> Back
          </button>
          
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-black uppercase tracking-tight text-white">
              Support <span className="text-blue-500">Center</span>
            </h1>
            <p className="text-zinc-400 max-w-lg text-sm leading-relaxed">
              Access the ATM Join helpdesk. Select a department below or browse 
              frequently asked questions to expedite your inquiry.
            </p>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {supportCategories.map((cat, i) => (
            <div 
              key={i}
              className="group relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
                {cat.icon}
              </div>
              <div>
                <h3 className="font-bold text-white uppercase text-sm tracking-wide">{cat.title}</h3>
                <p className="mt-1 text-xs text-zinc-400 leading-normal">{cat.description}</p>
              </div>
              <div className="mt-2 pt-4 border-t border-white/5">
                <span className="text-[10px] font-black text-blue-400 uppercase tracking-tighter">
                  {cat.contact}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <section className="flex flex-col gap-4 rounded-[2.5rem] border border-white/10 bg-black/40 p-8 backdrop-blur-2xl">
          <div className="flex items-center gap-3">
            <MessageSquare className="text-zinc-400" size={20} />
            <h2 className="text-lg font-bold uppercase tracking-widest">Common Inquiries</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
            {faqs.map((faq, i) => (
              <button 
                key={i}
                className="flex items-center justify-between w-full rounded-2xl border border-white/5 bg-white/5 px-5 py-4 text-left text-xs font-medium text-zinc-300 transition-all hover:bg-white/10 hover:translate-x-1"
              >
                {faq}
                <ChevronRight size={14} className="text-zinc-500" />
              </button>
            ))}
          </div>
        </section>

      </main>

      <footer className="mt-16 mb-8 opacity-40">
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-400">
          ATM JOIN V1.0.0
        </span>
      </footer>
    </div>
  );
}
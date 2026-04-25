"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  Search, Eye, ChevronLeft, 
  ChevronUp, ChevronDown
} from "lucide-react";

type Applicant = {
  name: string;
  id: string;
  ic: string;
  address: string;
  gender: string;
  religion: string;
  race: string;
  ethnicity: string;
  age: number;
  phone: string;
};

const INITIAL_DATA: Applicant[] = [
  { name: "Ahmad Zaki Bin Osman", id: "APP-001", ic: "020412-02-0551", address: "Alor Setar, Kedah", gender: "Male", religion: "Islam", race: "Malay", ethnicity: "Bumiputera", age: 24, phone: "+60 12-445 6789" },
  { name: "Sarah Connor", id: "APP-002", ic: "030515-14-1102", address: "Cheras, Kuala Lumpur", gender: "Female", religion: "Christian", race: "Chinese", ethnicity: "Non-Bumi", age: 23, phone: "+60 17-223 4455" },
  { name: "Ravi Shankar", id: "APP-003", ic: "010120-08-0993", address: "Ipoh, Perak", gender: "Male", religion: "Hindu", race: "Indian", ethnicity: "Non-Bumi", age: 25, phone: "+60 19-887 2231" },
  { name: "M. Izzat Bin Rahim", id: "APP-004", ic: "001130-03-0441", address: "Kota Bharu, Kelantan", gender: "Male", religion: "Islam", race: "Malay", ethnicity: "Bumiputera", age: 26, phone: "+60 11-234 5678" },
  { name: "Lim Wei Teck", id: "APP-005", ic: "990808-01-5567", address: "Johor Bahru, Johor", gender: "Male", religion: "Buddhist", race: "Chinese", ethnicity: "Non-Bumi", age: 27, phone: "+60 14-998 0012" }
];

export default function ApplicantsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<{ key: keyof Applicant; direction: 'asc' | 'desc' } | null>(null);
  const [filterRace, setFilterRace] = useState<string>("All");
  const [filterReligion, setFilterReligion] = useState<string>("All");
  const [filterEthnicity, setFilterEthnicity] = useState<string>("All");
  const [filterGender, setFilterGender] = useState<string>("All");

  const processedData = useMemo(() => {
    let filtered = INITIAL_DATA.filter((item) => {
      const matchesSearch = Object.values(item).some(val => 
        val.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
      const matchesRace = filterRace === "All" || item.race === filterRace;
      const matchesReligion = filterReligion === "All" || item.religion === filterReligion;
      const matchesEthnicity = filterEthnicity === "All" || item.ethnicity === filterEthnicity;
      const matchesGender = filterGender === "All" || item.gender === filterGender;
      
      return matchesSearch && matchesRace && matchesReligion && matchesEthnicity && matchesGender;
    });

    if (sortConfig !== null) {
      filtered.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }
    return filtered;
  }, [searchTerm, sortConfig, filterRace, filterReligion, filterEthnicity, filterGender]);

  const requestSort = (key: keyof Applicant) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8 font-sans">
      <header className="mb-10">
        <Link href="/recruiter/dashboard" className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white mb-6 transition-colors">
          <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
          Back to Dashboard
        </Link>
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter leading-none">
              TDM <span className="text-emerald-500">Registry.</span>
            </h1>
          </div>
          <div className="bg-zinc-900/50 border border-white/5 px-6 py-3 rounded-2xl">
             <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest block mb-1">Results Found</span>
             <span className="text-2xl font-bold italic text-emerald-500">{processedData.length}</span>
          </div>
        </div>
      </header>

      <div className="mb-6 flex gap-4 flex-wrap">
        <div className="relative flex-1 min-w-[300px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={16} />
          <input 
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by Name, IC, ID, or Phone..." 
            className="w-full bg-zinc-900/40 border border-white/5 rounded-xl py-4 pl-12 pr-4 text-[11px] font-medium tracking-wide outline-none focus:border-emerald-500/50 transition-all"
          />
        </div>
        
        <select 
          onChange={(e) => setFilterRace(e.target.value)}
          className="bg-zinc-900/40 border border-white/5 rounded-xl px-4 text-[10px] font-bold uppercase tracking-widest outline-none focus:border-emerald-500/50"
        >
          <option value="All">All Races</option>
          <option value="Malay">Malay</option>
          <option value="Chinese">Chinese</option>
          <option value="Indian">Indian</option>
        </select>

        <select 
          onChange={(e) => setFilterReligion(e.target.value)}
          className="bg-zinc-900/40 border border-white/5 rounded-xl px-4 text-[10px] font-bold uppercase tracking-widest outline-none focus:border-emerald-500/50"
        >
          <option value="All">All Religions</option>
          <option value="Islam">Islam</option>
          <option value="Christian">Christian</option>
          <option value="Hindu">Hindu</option>
          <option value="Buddhist">Buddhist</option>
        </select>

        <select 
          onChange={(e) => setFilterEthnicity(e.target.value)}
          className="bg-zinc-900/40 border border-white/5 rounded-xl px-4 text-[10px] font-bold uppercase tracking-widest outline-none focus:border-emerald-500/50"
        >
          <option value="All">All Ethnicities</option>
          <option value="Bumiputera">Bumiputera</option>
          <option value="Non-Bumi">Non-Bumi</option>
        </select>

        <select 
          onChange={(e) => setFilterGender(e.target.value)}
          className="bg-zinc-900/40 border border-white/5 rounded-xl px-4 text-[10px] font-bold uppercase tracking-widest outline-none focus:border-emerald-500/50"
        >
          <option value="All">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>

      <section className="bg-zinc-900/20 border border-white/5 rounded-[2rem] overflow-hidden backdrop-blur-md">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/[0.02]">
                <SortHeader label="Applicant" k="name" current={sortConfig} onClick={requestSort} />
                <SortHeader label="IC Number" k="ic" current={sortConfig} onClick={requestSort} />
                <SortHeader label="Gender" k="gender" current={sortConfig} onClick={requestSort} />
                <SortHeader label="Religion" k="religion" current={sortConfig} onClick={requestSort} />
                <SortHeader label="Race" k="race" current={sortConfig} onClick={requestSort} />
                <SortHeader label="Ethnicity" k="ethnicity" current={sortConfig} onClick={requestSort} />
                <SortHeader label="Age" k="age" current={sortConfig} onClick={requestSort} />
                <th className="p-5 text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500">Phone</th>
                <th className="p-5 text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500 text-right">View</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {processedData.map((applicant) => (
                <tr key={applicant.id} className="hover:bg-white/[0.01] transition-colors group">
                  <td className="p-5 border-r border-white/5">
                    <div className="flex flex-col">
                      <span className={`text-xs font-bold ${sortConfig?.key === 'name' ? 'text-emerald-400' : 'group-hover:text-emerald-400'}`}>{applicant.name}</span>
                      <span className="text-[10px] font-mono text-zinc-600">{applicant.id}</span>
                    </div>
                  </td>
                  <td className={`p-5 text-[11px] font-mono ${sortConfig?.key === 'ic' ? 'text-emerald-400' : 'text-zinc-400'}`}>{applicant.ic}</td>
                  <td className={`p-5 text-[10px] font-medium ${sortConfig?.key === 'gender' ? 'text-emerald-400 font-bold' : 'text-zinc-500'}`}>{applicant.gender}</td>
                  <td className={`p-5 text-[10px] font-medium ${sortConfig?.key === 'religion' ? 'text-emerald-400 font-bold' : 'text-zinc-500'}`}>{applicant.religion}</td>
                  <td className={`p-5 text-[10px] font-medium ${sortConfig?.key === 'race' ? 'text-emerald-400 font-bold' : 'text-zinc-500'}`}>{applicant.race}</td>
                  <td className={`p-5 text-[10px] font-medium ${sortConfig?.key === 'ethnicity' ? 'text-emerald-400 font-bold' : 'text-zinc-500'}`}>{applicant.ethnicity}</td>
                  <td className={`p-5 text-center text-xs italic ${sortConfig?.key === 'age' ? 'text-emerald-400 font-bold' : 'text-zinc-400'}`}>{applicant.age}</td>
                  <td className="p-5 text-[10px] font-medium text-zinc-400">{applicant.phone}</td>
                  <td className="p-5 text-right">
                    <Link href={`/recruiter/applicants/${applicant.id}`} className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-zinc-950 border border-white/5 text-zinc-500 hover:text-emerald-500 transition-all">
                      <Eye size={16} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function SortHeader({ label, k, current, onClick }: { 
  label: string; 
  k: keyof Applicant; 
  current: { key: string; direction: string } | null;
  onClick: (k: keyof Applicant) => void;
}) {
  const isActive = current?.key === k;
  return (
    <th 
      onClick={() => onClick(k)}
      className="p-5 text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500 cursor-pointer hover:text-white transition-colors"
    >
      <div className="flex items-center gap-2">
        {label}
        <div className="flex flex-col">
          <ChevronUp size={10} className={`${isActive && current.direction === 'asc' ? 'text-emerald-500' : 'text-zinc-700'}`} />
          <ChevronDown size={10} className={`${isActive && current.direction === 'desc' ? 'text-emerald-500' : 'text-zinc-700'}`} />
        </div>
      </div>
    </th>
  );
}
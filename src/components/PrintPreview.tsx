import React from 'react';
import { Mail, Phone, Linkedin, MapPin, ExternalLink, Printer } from 'lucide-react';
import { PORTFOLIO_DATA } from '../types';

export default function PrintPreview({ onClose }: { onClose: () => void }) {
  const { name, roles, location, email, phone, linkedin, summary } = PORTFOLIO_DATA.personalInfo;
  const { skills, experience, featuredApps, education, certifications } = PORTFOLIO_DATA;

  const handlePrintTrigger = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-900 py-12 px-4 sm:px-6 relative z-50">
      {/* Absolute Header Controls */}
      <div className="max-w-[8.5in] mx-auto mb-6 flex items-center justify-between no-print">
        <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-emerald animate-pulse" />
          <span>FORMAL RESUME MODE (A4 PAPERS)</span>
        </div>
        
        <div className="flex gap-3">
          <button
            onClick={handlePrintTrigger}
            className="flex items-center gap-2 px-4 py-2 bg-brand-emerald text-slate-950 hover:bg-brand-emerald/90 transition-colors font-bold text-xs rounded-lg cursor-pointer"
          >
            <Printer size={14} />
            Print / Save as PDF
          </button>
          
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 border border-slate-750 text-slate-300 hover:bg-slate-750 hover:text-white transition-colors font-bold text-xs rounded-lg cursor-pointer"
          >
            Back to Interactive Port
          </button>
        </div>
      </div>

      {/* Actual Paper Printable Container */}
      {/* 8.5in width resembles standard US Letter / A4 width, padding mimics paper margins */}
      <div id="print-paper-page" className="mx-auto w-full max-w-[8.5in] bg-white text-slate-950 p-[0.6in] sm:p-[0.8in] shadow-2xl rounded-xl sm:rounded-2xl transition-all font-sans relative overflow-hidden" style={{ minHeight: '11in' }}>
        
        {/* TOP CONTACT BLOCK */}
        <div className="border-b-2 border-slate-900 pb-5 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-extrabold font-display tracking-tight text-slate-900 uppercase">
                {name}
              </h1>
              <p className="text-sm font-mono text-brand-emerald font-bold mt-1 uppercase tracking-wide">
                {roles.join(' \u2022 ')}
              </p>
            </div>
            {/* Contact chips */}
            <div className="space-y-1 text-xs text-slate-600">
              <p className="flex items-center gap-1.5 justify-start sm:justify-end">
                <MapPin size={12} className="text-slate-500" /> {location}, Indonesia
              </p>
              <p className="flex items-center gap-1.5 justify-start sm:justify-end">
                <Mail size={12} className="text-slate-500" /> {email}
              </p>
              <p className="flex items-center gap-1.5 justify-start sm:justify-end">
                <Phone size={12} className="text-slate-500" /> {phone}
              </p>
              <p className="flex items-center gap-1.5 justify-start sm:justify-end">
                <Linkedin size={12} className="text-slate-500" /> didikpram (linkedin)
              </p>
            </div>
          </div>
        </div>

        {/* PROFESSIONAL SUMMARY */}
        <div className="mb-6">
          <h2 className="text-xs uppercase font-mono font-black tracking-widest text-slate-900 border-b-1.5 border-slate-300 pb-1 mb-2.5">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-light font-sans">
            {summary}
          </p>
        </div>

        {/* TECHNICAL SKILLS */}
        <div className="mb-6">
          <h2 className="text-xs uppercase font-mono font-black tracking-widest text-slate-900 border-b-1.5 border-slate-300 pb-1 mb-3">
            TECHNICAL SKILLS
          </h2>
          <div className="space-y-2.5">
            {skills.map((section, idx) => (
              <div key={idx} className="grid grid-cols-1 sm:grid-cols-4 gap-1.5 text-xs sm:text-sm">
                <span className="font-bold text-slate-900 underline font-sans text-xs">{section.category}:</span>
                <span className="sm:col-span-3 text-slate-830 text-xs">
                  {section.items.join(', ')}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* PROFESSIONAL EXPERIENCE */}
        <div className="mb-6 print-avoid-break">
          <h2 className="text-xs uppercase font-mono font-black tracking-widest text-slate-900 border-b-1.5 border-slate-300 pb-1 mb-4">
            PROFESSIONAL EXPERIENCE
          </h2>
          
          <div className="space-y-6">
            <div className="relative">
              {/* Corporate Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Telkom Indonesia <span className="font-light text-slate-500 font-sans">| Jakarta, Indonesia</span>
                  </h3>
                  <span className="font-mono text-[11px] font-bold text-slate-600 uppercase">
                    Document Engineer or IT Business Analyst
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                  September 2019 – Present
                </span>
              </div>

              {/* Individual timelines bullet points */}
              <div className="pl-3.5 border-l-2 border-slate-200 space-y-4">
                {experience.map((item, id) => (
                  <div key={id} className="text-xs print-avoid-break">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-slate-900">{item.projectTitle} ({item.projectSubtitle})</span>
                      <span className="font-mono text-[10px] text-slate-500">{item.yearRange}</span>
                    </div>
                    <p className="text-slate-700 font-light leading-relaxed">
                      &bull; {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FEATURED APPLICATIONS */}
        <div className="mb-6 print-avoid-break">
          <h2 className="text-xs uppercase font-mono font-black tracking-widest text-slate-900 border-b-1.5 border-slate-300 pb-1 mb-3">
            FEATURED APPLICATIONS
          </h2>
          <div className="space-y-3.5">
            {featuredApps.map((app, idx) => (
              <div key={idx} className="text-xs print-avoid-break">
                <span className="font-bold text-slate-900">{app.title} ({app.subtitle})</span>
                <p className="text-slate-700 font-light mt-0.5 leading-relaxed">
                  &bull; {app.description}
                </p>
                {/* Hyperlinks for printed documents */}
                <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-[10px] font-mono text-blue-700">
                  {app.links.map((link, lIdx) => (
                    <span key={lIdx} className="flex items-center gap-1">
                      Link: <span className="underline select-all text-slate-800">{link.url}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* EDUCATION & CREDENTIALS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 print-avoid-break">
          <div>
            <h2 className="text-xs uppercase font-mono font-black tracking-widest text-slate-900 border-b-1.5 border-slate-300 pb-1 mb-2.5">
              EDUCATION
            </h2>
            <div className="text-xs font-light">
              <span className="font-bold text-slate-905">{education.institution}</span>
              <p className="text-slate-700 mt-1">{education.degree}</p>
              <p className="font-mono font-bold text-slate-900 mt-0.5">GPA: {education.gpa}</p>
            </div>
          </div>

          <div>
            <h2 className="text-xs uppercase font-mono font-black tracking-widest text-slate-900 border-b-1.5 border-slate-300 pb-1 mb-2.5">
              CERTIFICATIONS
            </h2>
            <ul className="text-xs font-light space-y-1 text-slate-800">
              {certifications.map((cert, id) => (
                <li key={id}>
                  &bull; <span className="font-semibold text-slate-950">{cert.title}</span> ({cert.date})
                </li>
              ))}
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, ShieldCheck, LineChart, FileCheck2, CalendarRange, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../types';

export default function Education() {
  const { education, certifications } = PORTFOLIO_DATA;

  // Additional detail parameters for Google Career certificates to demonstrate depth of competency
  const certificationDetails: Record<string, { skills: string[]; badgeColor: string; icon: React.ReactNode }> = {
    "Google Cybersecurity Professional Certificate": {
      skills: ["SIEM (Splunk)", "Linux Network Security", "Intrusion Detection", "Python Scripting", "OWASP Top 10"],
      badgeColor: "border-brand-emerald text-brand-emerald bg-brand-emerald/5",
      icon: <ShieldCheck size={26} className="text-brand-emerald" />
    },
    "Google Data Analytics Professional Certificate": {
      skills: ["Data Wrangling", "R Programming", "SQL Database queries", "Tableau visualizations", "Data-Driven decisions"],
      badgeColor: "border-brand-indigo text-brand-indigo bg-brand-indigo/5",
      icon: <LineChart size={26} className="text-brand-indigo" />
    }
  };

  return (
    <section id="education-section" className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Section Header */}
      <div className="text-center md:text-left mb-16">
        <h2 className="text-xs font-mono text-brand-emerald uppercase tracking-widest mb-2 font-semibold">05 / ACHIEVEMENTS</h2>
        <h3 className="text-3xl md:text-4xl font-extrabold font-display text-white">Education and Certification</h3>
        <div className="h-1 w-20 bg-brand-emerald mt-4 rounded-full mx-auto md:mx-0" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch font-sans">
        
        {/* Education Highlight Card */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <div className="glass-panel p-6 md:p-8 rounded-2xl h-full flex flex-col justify-between hover:border-brand-indigo/25 transition-all relative overflow-hidden bg-slate-950/45">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-indigo/5 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              {/* Category label */}
              <div className="flex items-center gap-2 mb-6 text-brand-indigo">
                <GraduationCap size={22} />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">ACADEMIC RECORD</span>
              </div>

              {/* Institution details */}
              <h4 className="text-2xl font-extrabold font-display text-white mb-2 leading-tight">
                {education.institution}
              </h4>
              <p className="text-xs font-mono text-slate-400 mb-6 font-semibold">
                Yogyakarta, Indonesia &bull; Informatics Department
              </p>

              {/* Degree definition */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-3 mb-6">
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">QUALIFICATION RECEIVED</span>
                  <span className="text-sm font-semibold text-slate-200">{education.degree}</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">CUMULATIVE PERFORMANCE GRADE</span>
                  <span className="text-sm font-bold font-mono text-brand-emerald">GPA: {education.gpa}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-900 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span className="flex items-center gap-1.5"><FileCheck2 size={12} /> Department Accredited</span>
              <span className="text-brand-emerald">A Grade</span>
            </div>
          </div>
        </motion.div>

        {/* Global Professional Certificates List */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="glass-panel p-6 md:p-8 rounded-2xl h-full flex flex-col justify-between bg-slate-950/45">
            <div>
              {/* Category label */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 text-brand-emerald">
                  <Award size={22} className="animate-spin-slow" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">CERTIFICATIONS</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">INDIVIDUAL RECOGNITIONS</span>
              </div>

              {/* Certification blocks */}
              <div className="space-y-6">
                {certifications.map((cert, idx) => {
                  const details = certificationDetails[cert.title] || { skills: [], badgeColor: "", icon: <Award /> };
                  
                  return (
                    <a 
                      key={idx} 
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-5 rounded-2xl border ${details.badgeColor || 'border-slate-800'} flex flex-col sm:flex-row items-start gap-4 transition-all hover:scale-[1.015] hover:border-brand-emerald/35 hover:bg-slate-900/40 block cursor-pointer group`}
                    >
                      {/* Certified custom logo display */}
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-850 h-fit">
                        {details.icon}
                      </div>

                      {/* Detail points */}
                      <div className="space-y-3 w-full">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <h5 className="font-bold text-base text-white font-display leading-tight flex items-center gap-1.5 group-hover:text-brand-emerald transition-colors">
                            {cert.title}
                            <ArrowUpRight size={14} className="opacity-40 group-hover:opacity-100 transition-opacity text-brand-emerald shrink-0" />
                          </h5>
                          <span className="text-[10px] font-mono font-bold text-slate-400 shrink-0 flex items-center gap-1">
                            <CalendarRange size={10} /> {cert.date}
                          </span>
                        </div>

                        {/* Issuer line */}
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                          <span>Verification Issuer:</span>
                          <span className="font-semibold text-slate-300 uppercase">{cert.issuer} Professional Network</span>
                        </div>

                        {/* Verified skills breakdown */}
                        <div className="flex flex-wrap gap-1">
                          {details.skills.map((skill, sIdx) => (
                            <span 
                              key={sIdx} 
                              className="px-2 py-0.5 rounded bg-slate-950 font-mono text-[9px] text-slate-400 border border-white/5"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-900 flex flex-wrap justify-between items-center gap-2">
              <span className="text-[10px] font-mono text-slate-500 uppercase">CREDENTIAL INTEGRATION METRICS</span>
              <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                Cryptographically Verifiable <SparklesDocIcon />
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function SparklesDocIcon() {
  return (
    <svg className="w-3 h-3 text-brand-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  );
}

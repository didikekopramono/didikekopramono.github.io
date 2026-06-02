import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, Milestone, CheckCircle2, FileText, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../types';

export default function Experience() {
  const { experience } = PORTFOLIO_DATA;

  // Additional technical context for each project to show high-end professional precision
  const projectTechMapping: Record<string, string[]> = {
    "MyPertamina": ["Kafka", "Redis Router", "Payment Gateways", "Voucher Synchronization", "High-Availability"],
    "Online Single Submission (OSS RBA)": ["BPMN 2.0", "National licensing", "Blueprints", "Inter-ministerial API Flows"],
    "Subsidi Tepat LPG": ["State-transition", "Quota Protection", "Map Engine", "Core Registry Tracking", "PostgreSQL"],
    "Subsidi Tepat LPG - Digital Identity": ["Active Liveness", "Biometric Facials", "Dukcapil API", "Digital Identity Verification"]
  };

  return (
    <section id="experience-section" className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative">
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-indigo/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Section Header */}
      <div className="text-center md:text-left mb-16">
        <h2 className="text-xs font-mono text-brand-emerald uppercase tracking-widest mb-2 font-semibold">03 / EXPERIENCE</h2>
        <h3 className="text-3xl md:text-4xl font-extrabold font-display text-white">Professional Timeline</h3>
        <div className="h-1 w-20 bg-brand-emerald mt-4 rounded-full mx-auto md:mx-0" />
      </div>

      <div className="relative">
        {/* Timeline Center/Left Line */}
        <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-brand-emerald via-brand-indigo to-slate-800" />

        {/* Company Header Card */}
        <div className="relative z-10 max-w-lg mx-auto md:mb-12 mb-8 text-center no-print">
          <div className="glass-panel p-5 rounded-2xl border border-brand-emerald/15 inline-block bg-slate-950/80">
            <div className="flex items-center justify-center gap-2.5 mb-1.5 label text-brand-emerald">
              <Briefcase size={18} />
              <span className="font-mono text-sm tracking-widest font-bold">CURRENT ENGAGEMENT</span>
            </div>
            <h4 className="text-xl font-extrabold font-display text-white">Telkom Indonesia</h4>
            <p className="text-xs text-slate-400 font-mono flex items-center justify-center gap-1.5 mt-1">
              <MapPin size={12} className="text-brand-indigo" /> Jakarta, Indonesia &bull; September 2019 – Present
            </p>
          </div>
        </div>

        {/* Timeline Items */}
        <div className="space-y-12 md:space-y-16">
          {experience.map((item, idx) => {
            const isEven = idx % 2 === 0;
            const techTags = projectTechMapping[item.projectSubtitle] || [];
            
            return (
              <div 
                key={idx}
                className={`relative flex flex-col md:flex-row items-stretch md:justify-between w-full ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node Ring */}
                <div className="absolute left-4 md:left-1/2 top-0 transform -translate-x-[7px] md:-translate-x-1/2 z-25 flex items-center justify-center">
                  <div className="w-4.5 h-4.5 rounded-full bg-slate-950 border-2 border-brand-emerald flex items-center justify-center shadow-lg shadow-brand-emerald/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse" />
                  </div>
                </div>

                {/* Main Card container */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full md:w-[46%] pl-10 md:pl-0"
                >
                  <div className="glass-panel p-6 md:p-8 rounded-2xl relative overflow-hidden hover:border-brand-indigo/30 hover:shadow-lg hover:shadow-brand-indigo/5 transition-all duration-300">
                    {/* Background faint card stamp */}
                    <div className="absolute -top-12 -left-12 w-28 h-28 bg-slate-800/10 rounded-full blur-2xl font-mono text-[80px] font-black text-slate-900 pointer-events-none select-none">
                      {idx + 1}
                    </div>

                    {/* Timeline Card Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4 pb-4 border-b border-slate-900">
                      <div>
                        {/* Project Subtitle */}
                        <span className="text-xs font-mono text-brand-emerald font-bold uppercase tracking-wider block">
                          {item.projectSubtitle}
                        </span>
                        {/* Project Title */}
                        <h4 className="text-lg font-bold font-display text-white mt-1 leading-snug">
                          {item.projectTitle}
                        </h4>
                      </div>
                      
                      {/* Year badge */}
                      <span className="px-3 py-1.5 h-fit text-xs font-mono font-bold bg-slate-900 border border-slate-800 text-brand-indigo rounded-lg flex items-center gap-1.5 shrink-0">
                        <Calendar size={12} />
                        {item.yearRange}
                      </span>
                    </div>

                    {/* Role Stamp */}
                    <div className="mb-4 flex items-center gap-2 text-xs text-slate-400 font-mono">
                      <span className="px-2 py-0.5 rounded bg-brand-indigo/10 text-brand-indigo border border-brand-indigo/10">
                        {item.role}
                      </span>
                    </div>

                    {/* Bullet description */}
                    <p className="text-sm text-slate-300 leading-relaxed font-sans font-light">
                      {item.description}
                    </p>
                  </div>
                </motion.div>

                {/* Dummy Space holding opposite column for desktop view */}
                <div className="hidden md:block w-[46%]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

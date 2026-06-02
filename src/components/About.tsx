import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Layers, FileSignature, Network, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../types';

export default function About() {
  const { summary } = PORTFOLIO_DATA.personalInfo;

  const corePillars = [
    {
      icon: <Layers size={20} className="text-brand-emerald" />,
      title: "System Orchestration",
      desc: "Mapping deterministic logic paths across distributed microservices."
    },
    {
      icon: <FileSignature size={20} className="text-brand-indigo" />,
      title: "Technical Documentation & BRD",
      desc: "Transforming high-level Business Requirements Documents (BRDs) into clear architectural plans, OpenAPI specifications, FSDs, and TRDs."
    },
    {
      icon: <Network size={20} className="text-brand-purple" />,
      title: "Ecosystem Integration",
      desc: "Aligning multi-channel payment networks & custom identity validation frameworks."
    }
  ];

  return (
    <section id="about-section" className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-indigo/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="text-center md:text-left mb-12">
        <h2 className="text-xs font-mono text-brand-emerald uppercase tracking-widest mb-2 font-semibold">01 / OVERVIEW</h2>
        <h3 className="text-3xl md:text-4xl font-extrabold font-display text-white">Professional Summary</h3>
        <div className="h-1 w-20 bg-brand-emerald mt-4 rounded-full mx-auto md:mx-0" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Core Info Block */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Main Summary Glass Card */}
          <div className="glass-panel-glow p-6 md:p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-emerald/5 rounded-full blur-2xl" />
            <p className="text-lg text-slate-200 leading-relaxed font-light">
              {summary}
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 text-center">
              <span className="text-3xl font-bold font-display text-brand-emerald">5+</span>
              <p className="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wide">Years Experience</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 text-center">
              <span className="text-3xl font-bold font-display text-brand-indigo">1M+</span>
              <p className="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wide">Core Ecosystem Users</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 text-center">
              <span className="text-3xl font-bold font-display text-brand-purple">100%</span>
              <p className="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wide">Spec Determinism</p>
            </div>
          </div>
        </motion.div>

        {/* Technical Blueprint Visual Element (Representing Document Engineering) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 h-full"
        >
          <div className="glass-panel p-6 md:p-8 rounded-2xl border border-slate-700/50 flex flex-col justify-between h-full bg-slate-950/60 hover:border-brand-emerald/30 transition-all">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-brand-emerald uppercase tracking-widest font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-emerald" />
                  Orchestrator Blueprint
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-slate-400 font-medium">Core Integration Pillars:</p>
              <div className="space-y-3">
                {corePillars.map((pillar, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="p-1.5 rounded-lg bg-slate-900/60 border border-white/5 h-fit text-sm">
                      {pillar.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-200">{pillar.title}</h4>
                      <p className="text-[11px] text-slate-400 leading-normal">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

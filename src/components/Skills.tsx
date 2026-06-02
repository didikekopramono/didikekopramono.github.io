import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, ShieldCheck, Database, FileText, GitPullRequest, Code, CheckSquare } from 'lucide-react';
import { PORTFOLIO_DATA } from '../types';

export default function Skills() {
  const { skills } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Map icon names to lucide react components
  const renderIcon = (name: string) => {
    switch(name) {
      case 'Cpu': return <Cpu size={24} className="text-brand-indigo" />;
      case 'ShieldAlert': return <ShieldCheck size={24} className="text-brand-emerald" />;
      case 'Database': return <Database size={24} className="text-brand-purple" />;
      case 'FileCode': return <FileText size={24} className="text-brand-emerald" />;
      case 'GitBranch': return <GitPullRequest size={24} className="text-brand-teal" />;
      default: return <Code size={24} className="text-slate-400" />;
    }
  };

  const categories = ['All', ...skills.map(s => s.category)];

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills-section" className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-brand-emerald/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Section Header */}
      <div className="text-center md:text-left mb-12">
        <h2 className="text-xs font-mono text-brand-emerald uppercase tracking-widest mb-2 font-semibold">02 / EXPERTISE</h2>
        <h3 className="text-3xl md:text-4xl font-extrabold font-display text-white">Technical Skills</h3>
        <div className="h-1 w-20 bg-brand-emerald mt-4 rounded-full mx-auto md:mx-0" />
      </div>

      {/* Tabs Filter Controls */}
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 mb-10 overflow-x-auto pb-2 no-print">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide border cursor-pointer select-none transition-all duration-300 ${
              activeCategory === cat 
                ? 'bg-brand-emerald text-slate-950 border-brand-emerald font-bold shadow-md shadow-brand-emerald/20' 
                : 'bg-slate-900/40 text-slate-400 border-white/5 hover:border-slate-700 hover:text-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredSkills.map((section, idx) => (
          <motion.div
            layout
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            key={section.category}
            className="glass-panel p-6 rounded-2xl relative overflow-hidden group hover:border-brand-emerald/40 hover:shadow-lg hover:shadow-brand-emerald/5 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Corner Decorative Glow */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-emerald/5 rounded-full blur-xl group-hover:bg-brand-emerald/15 transition-all duration-350" />
            
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl">
                  {renderIcon(section.icon)}
                </div>
                <h4 className="text-base font-bold font-display text-white group-hover:text-brand-emerald transition-colors">
                  {section.category}
                </h4>
              </div>

              {/* Tag Items with Custom Progress Bar Feel */}
              <div className="space-y-4">
                {section.items.map((skill, sIdx) => {
                  // Determine dummy score for styled indicators to represent deep expertise
                  const isTopSkill = ["OAuth 2.0", "RESTful APIs", "Microservices", "BPMN 2.0", "Technical Requirements (TRD)", "API Docs (OpenAPI/Swagger)"].includes(skill);
                  const skillLevel = isTopSkill ? 95 : 85;
                  
                  return (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-medium">
                        <span className="text-slate-300 font-sans">{skill}</span>
                        <span className="font-mono text-slate-500">{skillLevel}%</span>
                      </div>
                      
                      {/* Interactive Visual Bar */}
                      <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skillLevel}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: sIdx * 0.08 }}
                          className={`h-full rounded-full ${
                            isTopSkill 
                              ? 'bg-gradient-to-r from-brand-emerald to-brand-teal' 
                              : 'bg-gradient-to-r from-brand-indigo to-brand-purple'
                          }`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Micro details indicator */}
            <div className="mt-6 pt-4 border-t border-slate-900 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>Fidelity Spec System</span>
              <span className="text-brand-emerald uppercase">Deterministic</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

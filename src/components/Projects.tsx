import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Database, Globe, Smartphone, FileSpreadsheet, LayoutGrid } from 'lucide-react';
import { PORTFOLIO_DATA } from '../types';

export default function Projects() {
  const { featuredApps } = PORTFOLIO_DATA;

  // Icon chooser helper for the project cards
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'system':
        return <Globe size={20} className="text-brand-emerald" />;
      case 'mobile':
        return <Smartphone size={20} className="text-brand-indigo" />;
      default:
        return <LayoutGrid size={20} className="text-brand-purple" />;
    }
  };

  return (
    <section id="projects-section" className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative">
      <div className="absolute top-10 left-10 w-80 h-80 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Section Header */}
      <div className="text-center md:text-left mb-16">
        <h2 className="text-xs font-mono text-brand-emerald uppercase tracking-widest mb-2 font-semibold">04 / PRODUCTIONS</h2>
        <h3 className="text-3xl md:text-4xl font-extrabold font-display text-white">Featured Applications</h3>
        <div className="h-1 w-20 bg-brand-emerald mt-4 rounded-full mx-auto md:mx-0" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {featuredApps.map((app, idx) => (
          <motion.div
            key={app.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="glass-panel-glow p-6 md:p-8 rounded-2xl flex flex-col justify-between hover:scale-[1.01] hover:border-brand-emerald/30 active:scale-[0.99] transition-all duration-300 relative overflow-hidden group bg-slate-950/45"
          >
            {/* Ambient Background Gradient Glow on hover */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-brand-emerald/10 via-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <div>
              {/* Card Title & Icon Row */}
              <div className="flex items-center justify-between mb-5">
                <span className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono">
                  {getCategoryIcon(app.category)}
                  <span className="uppercase tracking-widest text-[9px] font-bold">
                    {app.category === 'system' ? 'National Enterprise Portal' : 'Mobile Platform'}
                  </span>
                </span>
                <span className="text-[10px] font-mono font-bold text-brand-emerald uppercase tracking-wide">
                  Prod-Released
                </span>
              </div>

              {/* Title Header */}
              <h4 className="text-2xl font-extrabold font-display text-white group-hover:text-brand-emerald transition-colors leading-tight mb-2">
                {app.title}
              </h4>
              <p className="text-xs font-mono font-semibold text-brand-indigo mb-5">
                {app.subtitle}
              </p>

              {/* Body summary */}
              <p className="text-sm text-slate-300 mb-6 leading-relaxed font-light">
                {app.description}
              </p>

              {/* Platform Tags details */}
              <div className="flex flex-wrap gap-1.5 mb-8">
                {app.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="px-2 py-1 bg-slate-900/60 border border-white/5 rounded text-[11px] font-mono text-slate-400 group-hover:text-slate-300 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Target endpoints actions */}
            <div className="pt-4 border-t border-slate-900 flex flex-wrap gap-3 items-center justify-between">
              <span className="text-[10px] font-mono text-slate-500 uppercase">Secure Redirects:</span>
              <div className="flex flex-wrap gap-2">
                {app.links.map((link, lIdx) => (
                  <a
                    key={lIdx}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono font-bold bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-brand-emerald hover:border-brand-emerald hover:text-slate-950 transition-all rounded-lg"
                  >
                    <ExternalLink size={12} />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Linkedin, Send, Terminal, ShieldAlert, CheckCircle, Smartphone } from 'lucide-react';
import { PORTFOLIO_DATA } from '../types';

export default function Contact({ onNotify }: { onNotify: (msg: string) => void }) {
  const { email, phone, linkedin } = PORTFOLIO_DATA.personalInfo;
  
  // Local form state
  const [formData, setFormData] = useState({ name: '', company: '', message: '' });
  const [formState, setFormState] = useState<'idle' | 'validating' | 'done'>('idle');
  const [validationLogs, setValidationLogs] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      onNotify("Error: Missing required fields (Name & Message)");
      return;
    }

    setFormState('validating');
    setValidationLogs([]);

    const logSteps = [
      "INIT: Intercepting client submission payload...",
      "COMPLIANCE: Checking input strings for XSS and SQLi vulnerabilities...",
      "IDENTITY: Synthesizing envelope fields for didactic-trace",
      `ROUTING: Mapping routing queue for target [didikeko1997@gmail.com]`,
      "STATUS: Form transmitted deterministically. Success!"
    ];

    let currentLogIndex = 0;
    const interval = setInterval(() => {
      if (currentLogIndex < logSteps.length) {
        setValidationLogs(prev => [...prev, logSteps[currentLogIndex]]);
        currentLogIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setFormState('done');
          onNotify(`Message from ${formData.name} processed successfully!`);
          setFormData({ name: '', company: '', message: '' });
        }, 600);
      }
    }, 450);
  };

  return (
    <section id="contact-section" className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative">
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Section Header */}
      <div className="text-center md:text-left mb-16">
        <h2 className="text-xs font-mono text-brand-emerald uppercase tracking-widest mb-2 font-semibold font-bold">06 / NETWORK</h2>
        <h3 className="text-3xl md:text-4xl font-extrabold font-display text-white">Secure Contact Connection</h3>
        <div className="h-1 w-20 bg-brand-emerald mt-4 rounded-full mx-auto md:mx-0" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Contact info channels */}
        <div className="lg:col-span-4 space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <p className="text-sm text-slate-400 font-light leading-relaxed mb-6">
              Establish a direct, low-latency communication line. Send an email, initiate a call, or connect on professional directories.
            </p>

            {/* Email Module */}
            <a 
              id="anchor-email"
              href={`mailto:${email}`} 
              className="flex items-center gap-4 p-5 rounded-2xl border border-white/5 bg-slate-950/40 hover:border-brand-emerald/30 hover:bg-slate-900/40 transition-all text-left block group"
            >
              <div className="p-3 rounded-xl bg-brand-emerald/10 text-brand-emerald group-hover:scale-110 transition-transform">
                <Mail size={20} />
              </div>
              <div className="truncate">
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">PRIMARY INBOX</p>
                <p className="text-base font-semibold text-slate-200 truncate">{email}</p>
              </div>
            </a>

            {/* Mobile Module */}
            <a 
              id="anchor-phone"
              href={`tel:${phone.replace(/-/g, '')}`} 
              className="flex items-center gap-4 p-5 rounded-2xl border border-white/5 bg-slate-950/40 hover:border-brand-indigo/30 hover:bg-slate-900/40 transition-all text-left block group"
            >
              <div className="p-3 rounded-xl bg-brand-indigo/10 text-brand-indigo group-hover:scale-110 transition-transform">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">MOBILE / WHATSAPP</p>
                <p className="text-base font-semibold text-slate-200">{phone}</p>
              </div>
            </a>

            {/* LinkedIn Module */}
            <a 
              id="anchor-linkedin"
              href={linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-4 p-5 rounded-2xl border border-white/5 bg-slate-950/40 hover:border-brand-purple/30 hover:bg-slate-900/40 transition-all text-left block group"
            >
              <div className="p-3 rounded-xl bg-brand-purple/10 text-brand-purple group-hover:scale-110 transition-transform">
                <Linkedin size={20} />
              </div>
              <div className="truncate">
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">LINKEDIN</p>
                <p className="text-base font-semibold text-slate-200 truncate">linkedin.com/in/didikpram</p>
              </div>
            </a>
          </div>

          <div className="pt-4 border-t border-slate-900/60 text-[10px] font-mono text-slate-500 flex justify-between items-center bg-slate-950/20 p-4 rounded-xl">
            <span>Jakarta UTC+7</span>
            <span>Active & Standby</span>
          </div>
        </div>

        {/* Interactive mock Inquiry parsing engine Form */}
        <div className="lg:col-span-8">
          <div className="glass-panel p-6 md:p-8 rounded-2xl h-full flex flex-col justify-between bg-slate-950/45 relative overflow-hidden">
            
            {/* Show Form when idle */}
            <AnimatePresence mode="wait">
              {formState === 'idle' && (
                <motion.form 
                  key="form-idle"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleFormSubmit}
                  className="space-y-4"
                >
                  <p className="text-sm font-semibold text-white mb-4">Transmit a Project Query or Technical Message:</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label id="input-label-name" className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block">Your Name / Organization *</label>
                      <input 
                        type="text" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Lead Engineer from Telkom"
                        className="w-full px-4 py-3 bg-slate-950 rounded-xl text-slate-200 text-sm border border-slate-800 focus:border-brand-emerald focus:outline-none transition-all placeholder:text-slate-600"
                      />
                    </div>
                    
                    <div className="space-y-1.5">
                      <label id="input-label-company" className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block">Company (Optional)</label>
                      <input 
                        type="text" 
                        name="company" 
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="e.g. Enterprise Partners Inc"
                        className="w-full px-4 py-3 bg-slate-950 rounded-xl text-slate-200 text-sm border border-slate-800 focus:border-brand-emerald focus:outline-none transition-all placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label id="input-label-message" className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block">Message Payload *</label>
                    <textarea 
                      name="message" 
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Outline system requirements, job positions, or consultation proposals..."
                      className="w-full px-4 py-3 bg-slate-950 rounded-xl text-slate-200 text-sm border border-slate-800 focus:border-brand-emerald focus:outline-none transition-all placeholder:text-slate-600 resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 border border-slate-800 text-brand-emerald hover:bg-brand-emerald hover:text-slate-950 hover:border-brand-emerald transition-all duration-300 font-semibold text-sm rounded-xl cursor-pointer ml-auto"
                  >
                    <Send size={14} />
                    Transmit Envelope
                  </button>
                </motion.form>
              )}

              {/* Show Parsing engine logs when validating */}
              {formState === 'validating' && (
                <motion.div 
                  key="form-logs"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4 h-full flex flex-col justify-between"
                >
                  <p className="text-xs font-mono text-slate-400 flex items-center gap-2">
                    <Terminal size={14} className="text-brand-emerald animate-pulse" />
                    MESSAGE TRANSMISSION PIPELINE ACTIVE
                  </p>
                  
                  <div className="bg-slate-950 border border-slate-850 p-5 rounded-2xl font-mono text-xs text-brand-emerald min-h-[160px] space-y-2 flex-grow overflow-y-auto">
                    {validationLogs.map((log, idx) => (
                      <motion.p 
                        key={idx}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="leading-relaxed"
                      >
                        <span className="text-slate-600 mr-2">[{new Date().toLocaleTimeString()}]</span>
                        {log}
                      </motion.p>
                    ))}
                    {validationLogs.length < 5 && (
                      <p className="text-slate-500 animate-pulse">Running checks...</p>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Success Screen */}
              {formState === 'done' && (
                <motion.div 
                  key="form-done"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-emerald/15 text-brand-emerald flex items-center justify-center mx-auto mb-4 border border-brand-emerald/30 shadow-lg shadow-brand-emerald/5">
                    <CheckCircle size={32} />
                  </div>
                  <div>
                    <h5 className="text-lg font-bold font-display text-white">Transmission Succeeded</h5>
                    <p className="text-sm text-slate-400 max-w-md mx-auto mt-2 leading-relaxed">
                      Thank you! Your inquiry message envelope has been compiled and routed securely. Didik Eko Pramono will trace your inquiry shortly.
                    </p>
                  </div>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="px-5 py-2 hover:bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400 hover:text-slate-200 transition-colors rounded-xl font-bold cursor-pointer"
                  >
                    Send Another Envelope
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}

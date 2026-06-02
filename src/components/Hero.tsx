import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Linkedin, ArrowRight, Download, FileText, MonitorDot } from 'lucide-react';
import { PORTFOLIO_DATA } from '../types';

export default function Hero({ onNotify, onToggleResumeView }: { onNotify: (msg: string) => void; onToggleResumeView: () => void }) {
  const { name, roles, location, email, phone, linkedin } = PORTFOLIO_DATA.personalInfo;
  
  // Custom typing animation mechanism
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    let timer: NodeJS.Timeout;
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(prev => prev.slice(0, -1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setTypedText(prev => fullText.slice(0, prev.length + 1));
      }, 100);
    }
    
    if (!isDeleting && typedText === fullText) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex(prev => (prev + 1) % roles.length);
    }
    
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentRoleIndex, roles]);

  const handleDownload = () => {
    onNotify("Downloading Executive CV PDF...");
  };

  const handleContactScroll = () => {
    const element = document.getElementById('contact-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero-section" className="relative min-h-[92vh] flex flex-col justify-center items-center px-4 md:px-8 py-20 text-center overflow-hidden">
      {/* Background lights */}
      <div className="radial-glow top-1/4 left-1/3 bg-brand-indigo/30 rounded-full" />
      <div className="radial-glow bottom-1/4 right-1/4 bg-brand-emerald/20 rounded-full" />
      
      {/* Border outline decoration */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-indigo/30 to-transparent" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl flex flex-col items-center"
      >
        {/* Available for projects sign */}
        <div className="mb-6 flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-emerald/20 bg-brand-emerald/5 text-brand-emerald text-sm font-medium tracking-wide">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-emerald"></span>
          </span>
          <span className="font-mono text-xs">SYSTEMS ORCHESTRATION & COMPLIANCE ENGINEER</span>
        </div>

        {/* Big Noble Typography Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tight text-white mb-2 uppercase">
          {name}
        </h1>
        
        {/* Typing Roles Container */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
          <p className="text-xl sm:text-2xl md:text-3xl font-mono text-brand-indigo font-semibold flex items-center">
            <span className="text-slate-300 mr-2">I am an expert</span>
            <span className="text-brand-emerald border-r-2 border-brand-emerald animate-pulse pr-1">
              {typedText}
            </span>
          </p>
        </div>

        {/* Location Display */}
        <div className="flex items-center gap-2 text-slate-400 mb-8 font-medium">
          <MapPin size={18} className="text-brand-emerald animate-bounce" />
          <span className="tracking-wide text-sm sm:text-base">{location}, Indonesia &bull; Digital & On-Site</span>
        </div>

        {/* Professional Summary highlight */}
        <p className="text-lg text-slate-300 max-w-2xl mb-10 leading-relaxed font-sans font-light">
          Translating complex business requirements into high-fidelity technical documentation comprehensive , and precise system blueprints.
        </p>

        {/* Interactive action controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a 
            id="btn-nav-download"
            href="/Resume_Didik_Eko_Pramono.pdf"
            download="Resume_Didik_Eko_Pramono.pdf"
            onClick={handleDownload}
            className="flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-brand-emerald to-brand-teal text-slate-950 shadow-lg shadow-brand-emerald/20 hover:shadow-brand-emerald/40 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer no-underline"
          >
            <Download size={18} strokeWidth={2.5} />
            Download Resume
          </a>
          
          <button 
            id="btn-nav-contact"
            onClick={handleContactScroll}
            className="flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold border border-slate-700 bg-slate-900/50 text-white hover:bg-slate-850 hover:border-brand-indigo/50 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
          >
            Contact Portfolio
            <ArrowRight size={18} className="text-brand-indigo" />
          </button>
        </div>

        {/* Quick Contact Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl">
          <a id="badge-email" href={`mailto:${email}`} className="flex items-center gap-3 p-3.5 rounded-xl border border-white/5 bg-slate-900/40 hover:border-brand-indigo/30 hover:bg-slate-900/60 transition-all text-left">
            <div className="p-2 rounded-lg bg-brand-indigo/10 text-brand-indigo">
              <Mail size={16} />
            </div>
            <div>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Email Address</p>
              <p className="text-sm font-medium text-slate-300 truncate">{email}</p>
            </div>
          </a>

          <a id="badge-phone" href={`tel:${phone.replace(/-/g, '')}`} className="flex items-center gap-3 p-3.5 rounded-xl border border-white/5 bg-slate-900/40 hover:border-brand-emerald/30 hover:bg-slate-900/60 transition-all text-left">
            <div className="p-2 rounded-lg bg-brand-emerald/10 text-brand-emerald">
              <Phone size={16} />
            </div>
            <div>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Phone number</p>
              <p className="text-sm font-medium text-slate-300">{phone}</p>
            </div>
          </a>

          <a id="badge-linkedin" href={linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3.5 rounded-xl border border-white/5 bg-slate-900/40 hover:border-brand-purple/30 hover:bg-slate-900/60 transition-all text-left">
            <div className="p-2 rounded-lg bg-brand-purple/10 text-brand-purple">
              <Linkedin size={16} />
            </div>
            <div>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">LinkedIn Network</p>
              <p className="text-sm font-medium text-slate-300 truncate">didikpram</p>
            </div>
          </a>
        </div>
      </motion.div>
      
      {/* Decorative Arrow indicating downwards jump */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-3 bg-brand-emerald rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}

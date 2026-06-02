import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, Menu, X, ArrowUpRight, Check, Eye, Code, ShieldCheck, Cpu, 
  Sparkles, Terminal, Bell, Moon, Sun, ArrowUp, Milestone
} from 'lucide-react';

// Import our custom modules
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import PrintPreview from './components/PrintPreview';

export default function App() {
  // Navigation active state
  const [activeTab, setActiveTab] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPrintMode, setShowPrintMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Custom interactive notification state
  const [toastText, setToastText] = useState<string | null>(null);

  // Trigger user operation feedback message
  const triggerNotification = (message: string) => {
    setToastText(message);
    setTimeout(() => {
      setToastText(null);
    }, 4500);
  };

  // Keep track of scroll positions to show back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Check current visible section to highlight the nav tabs
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(`${section}-section`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(`${id}-section`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveTab(id);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    triggerNotification("Copied portfolio link to clipboard! (Share with hiring managers)");
  };

  return (
    <div className="min-h-screen bg-dark-bg text-slate-100 flex flex-col font-sans selection:bg-brand-emerald selection:text-slate-950 relative">
      
      {/* Background static layers */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-dark-surface via-dark-bg to-dark-bg pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#0b0f19_1px,transparent_1px),linear-gradient(to_bottom,#0b0f19_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#030712_70%,transparent_100%)] opacity-35 pointer-events-none z-0" />

      {/* RENDER FORMAL A4 RESUME WRAPPER IF TOGGLED */}
      <AnimatePresence>
        {showPrintMode ? (
          <motion.div
            key="print-preview-modal"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="relative z-[90] bg-slate-900"
          >
            <PrintPreview onClose={() => setShowPrintMode(false)} />
          </motion.div>
        ) : (
          <div className="flex-grow flex flex-col relative z-10 w-full overflow-hidden">
            
            {/* GLOWING HEADER NAVIGATION RAIL */}
            <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-dark-bg/75 backdrop-blur-md no-print">
              <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
                
                {/* Brand Name Logo */}
                <div onClick={() => scrollToSection('hero')} className="flex items-center gap-2.5 cursor-pointer select-none group">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r from-brand-emerald to-brand-teal text-slate-950 font-bold font-mono tracking-tighter text-sm group-hover:scale-[1.05] transition-transform">
                    DEP
                  </div>
                  <div>
                    <span className="font-extrabold font-display text-white text-base tracking-tight block">
                      DIDIK E. PRAMONO
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 block tracking-wider uppercase group-hover:text-brand-emerald transition-colors leading-none">
                      Document Engineer &bull; System Analyst &bull; IT Business Analyst
                    </span>
                  </div>
                </div>

                {/* Desktop Tabs */}
                <nav className="hidden lg:flex items-center gap-1.5 bg-slate-950/40 p-1 rounded-xl border border-white/[0.04]">
                  {[
                    { id: 'about', label: 'Summary' },
                    { id: 'skills', label: 'Expertise' },
                    { id: 'experience', label: 'Timeline' },
                    { id: 'projects', label: 'Productions' },
                    { id: 'education', label: 'Education' },
                    { id: 'contact', label: 'Network' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => scrollToSection(tab.id)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-brand-emerald/15 to-brand-teal/15 text-brand-emerald border-b-2 border-brand-emerald'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>

                {/* Desktop Action Controls */}
                <div className="hidden lg:flex items-center gap-3">
                  <button
                    onClick={() => setShowPrintMode(true)}
                    className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-brand-indigo/40 transition-all rounded-xl font-bold text-xs cursor-pointer select-none"
                  >
                    <Eye size={13} className="text-brand-indigo" />
                    Formal CV Draft
                  </button>
                  
                  <button
                    onClick={handleCopyLink}
                    className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-brand-emerald to-brand-teal text-slate-950 font-extrabold text-xs rounded-xl shadow-lg shadow-brand-emerald/10 hover:shadow-brand-emerald/20 transition-all cursor-pointer select-none"
                  >
                    Share Port
                    <ArrowUpRight size={13} />
                  </button>
                </div>

                {/* Mobile Menu Toggle button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 lg:hidden text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-xl cursor-pointer"
                >
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>

              {/* Mobile Drawer Navigation Panel */}
              <AnimatePresence>
                {mobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="lg:hidden border-t border-slate-900 bg-slate-950 px-4 py-6 space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: 'about', label: 'Summary' },
                        { id: 'skills', label: 'Expertise' },
                        { id: 'experience', label: 'Timeline' },
                        { id: 'projects', label: 'Productions' },
                        { id: 'education', label: 'Credentials' },
                        { id: 'contact', label: 'Network' },
                      ].map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => scrollToSection(tab.id)}
                          className={`p-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-left border ${
                            activeTab === tab.id
                              ? 'bg-brand-emerald/10 text-brand-emerald border-brand-emerald/30'
                              : 'bg-slate-900/40 text-slate-400 border-white/5'
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>

                    <div className="flex flex-col gap-2.5 pt-4 border-t border-slate-900">
                      <button
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setShowPrintMode(true);
                        }}
                        className="w-full flex items-center justify-center gap-2 py-3 bg-slate-900 border border-slate-800 text-slate-300 rounded-xl font-bold text-xs cursor-pointer"
                      >
                        <Eye size={13} className="text-brand-indigo" />
                        Formal CV Draft (A4 PDF)
                      </button>
                      
                      <button
                        onClick={() => {
                          setMobileMenuOpen(false);
                          handleCopyLink();
                        }}
                        className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-brand-emerald to-brand-teal text-slate-950 font-bold text-xs rounded-xl cursor-pointer"
                      >
                        Share Portfolio URL
                        <ArrowUpRight size={13} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </header>

            {/* SECTIONS LIST */}
            <main className="flex-grow">
              <Hero onNotify={triggerNotification} onToggleResumeView={() => setShowPrintMode(true)} />
              
              <div id="about-section" className="relative">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
                <About />
              </div>

              <div id="skills-section" className="relative bg-slate-950/20">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
                <Skills />
              </div>

              <div id="experience-section" className="relative">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
                <Experience />
              </div>

              <div id="projects-section" className="relative bg-slate-950/20">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
                <Projects />
              </div>

              <div id="education-section" className="relative">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
                <Education />
              </div>

              <div id="contact-section" className="relative bg-slate-950/20 mb-12">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
                <Contact onNotify={triggerNotification} />
              </div>
            </main>

            {/* ELEGANT MINIMALIST FOOTER */}
            <footer className="bg-white border-t border-slate-100 py-12 mt-auto px-6 md:px-12 no-print">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
                  {/* Brand & Title Info */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white font-bold font-mono text-xs tracking-tighter">
                      DEP
                    </div>
                    <div>
                      <h4 className="font-bold font-display text-slate-900 text-sm tracking-tight">Didik Eko Pramono</h4>
                      <p className="text-[11px] text-slate-500 font-mono">
                        Document Engineer &bull; System Analyst
                      </p>
                    </div>
                  </div>

                  {/* Navigation Links */}
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-wider text-slate-600">
                    <span className="hover:text-brand-emerald transition-colors cursor-pointer" onClick={() => scrollToSection('hero')}>Top</span>
                    <span className="hover:text-brand-emerald transition-colors cursor-pointer" onClick={() => scrollToSection('skills')}>Capabilities</span>
                    <span className="hover:text-brand-emerald transition-colors cursor-pointer" onClick={() => scrollToSection('experience')}>Milestones</span>
                    <span className="hover:text-brand-emerald transition-colors cursor-pointer" onClick={() => scrollToSection('projects')}>Applications</span>
                    <a href="/Resume_Didik_Eko_Pramono.pdf" download="Resume_Didik_Eko_Pramono.pdf" className="hover:text-brand-emerald transition-colors cursor-pointer no-underline text-slate-600">Download CV</a>
                  </div>
                </div>

                {/* Copyright & Location metadata */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[11px] font-mono text-slate-400">
                  <p>&copy; {new Date().getFullYear()} DEP Spec System. All rights reserved.</p>
                  <p className="flex items-center gap-1.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse" />
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>
            </footer>

            {/* FLOATING ACTION STATS CONTROLS */}
            <AnimatePresence>
              {showScrollTop && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-brand-emerald/40 text-brand-emerald shadow-xl cursor-pointer hover:scale-105 active:scale-95 transition-all no-print select-none"
                >
                  <ArrowUp size={16} strokeWidth={2.5} />
                </motion.button>
              )}
            </AnimatePresence>

          </div>
        )}
      </AnimatePresence>

      {/* GLOBAL TOAST INTERACTIVE PANEL */}
      <AnimatePresence>
        {toastText && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-8 left-1/2 z-[100] px-5 py-3.5 bg-slate-950 border border-brand-emerald/30 text-slate-200 text-xs font-semibold rounded-xl flex items-center gap-2.5 shadow-2xl tracking-wide max-w-sm sm:max-w-md"
          >
            <div className="p-1 rounded-full bg-brand-emerald/10 text-brand-emerald shrink-0">
              <Check size={12} strokeWidth={3} />
            </div>
            <span>{toastText}</span>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

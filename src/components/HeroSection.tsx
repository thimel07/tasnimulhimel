import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Terminal, Sparkles, ChevronDown, FileDown } from 'lucide-react';

const roles = [
  'PROGRAMMER',
  'PROBLEM SOLVER',
  'TEAM LEADER',
  'CREATIVE DEVELOPER'
];

interface HeroSectionProps {
  onOpenCV: () => void;
}

export default function HeroSection({ onOpenCV }: HeroSectionProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = roles[roleIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(120);

        if (currentText === fullText) {
          // Pause at end of word
          timer = setTimeout(() => setIsDeleting(true), 1800);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(55);

        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 pt-20 overflow-hidden"
    >
      {/* HUD-inspired decorative boundary details - no logs but nice cosmetic tech corners */}
      <div className="absolute top-24 left-8 md:left-12 opacity-30 hidden sm:block">
        <div className="flex items-center gap-2 text-cyan-500 font-mono text-[10px] tracking-widest">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>PORTFOLIO_SYSTEM_OK</span>
        </div>
      </div>
      <div className="absolute bottom-16 right-8 md:right-12 opacity-30 hidden sm:block">
        <div className="flex items-center gap-2 text-purple-500 font-mono text-[10px] tracking-widest">
          <span>LATENCY: 5ms</span>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
        </div>
      </div>

      <div className="max-w-4xl w-full text-center space-y-8 z-10 relative">
        {/* Glowing badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-950/40 to-purple-950/40 border border-cyan-500/35 px-4 py-1.5 rounded-full text-cyan-400 font-mono text-[10px] tracking-widest shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:border-cyan-400 transition-all cursor-default"
        >
          <Sparkles className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
          <span>CSE STUDENT & LEAD CREATIVE</span>
        </motion.div>

        {/* Pulsing center circle background ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 border border-[#22d3ee]/10 rounded-full animate-pulse z-0 pointer-events-none" />

        {/* Title Name with holographic/neon stack effect */}
        <div className="space-y-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text select-none uppercase"
          >
            TASNIMUL HASAN<br />
            <span className="relative text-transparent bg-gradient-to-r from-cyan-400 via-purple-300 to-cyan-300 bg-clip-text">
              HIMEL
            </span>
          </motion.h1>

          {/* Scrolling Subtitles */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-cyan-400 font-mono text-xs sm:text-sm tracking-[0.25em] uppercase max-w-2xl mx-auto"
          >
            CSE Student <span className="text-[#a855f7]">•</span> Developer <span className="text-[#a855f7]">•</span> Tech Leader
          </motion.p>
        </div>

        {/* Typing CLI Console simulation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mx-auto max-w-lg bg-gray-950/80 border border-gray-800/80 p-4 rounded-lg shadow-2xl backdrop-blur-md relative overflow-hidden"
        >
          <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-cyan-500 to-purple-500" />
          <div className="flex items-center space-x-2 border-b border-gray-900 pb-2 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            <div className="text-[9px] font-mono text-gray-500 flex-1 text-center font-bold tracking-widest pl-2">
              HIMEL@GUB_CSE_CORE
            </div>
          </div>
          <div className="flex items-center justify-center font-mono text-sm sm:text-base text-[#f3f4f6] min-h-[1.5rem]">
            <span className="text-cyan-500 font-semibold mr-2.5">$ export ROLE=</span>
            <span className="text-purple-400 font-bold tracking-widest">{currentText}</span>
            <span className="w-2 h-4 ml-1 bg-cyan-400 animate-pulse inline-block" />
          </div>
        </motion.div>

        {/* Buttons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          {/* Explore Projects Button */}
          <button
            onClick={() => scrollToSection('#projects')}
            className="w-full sm:w-auto px-6 py-3 bg-[#22d3ee] hover:bg-white text-black font-mono text-xs font-bold uppercase tracking-widest rounded-sm transition-colors shadow-[0_0_15px_rgba(34,211,238,0.45)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] cursor-pointer flex items-center justify-center gap-2 group"
          >
            EXPLORE_PROJECTS
            <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Download CV Button */}
          <button
            onClick={onOpenCV}
            className="w-full sm:w-auto px-6 py-3 border border-purple-500/40 hover:border-purple-400 bg-purple-950/20 hover:bg-purple-900/40 text-purple-300 hover:text-white font-mono text-xs font-bold uppercase tracking-widest rounded-sm transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:shadow-[0_0_22px_rgba(168,85,247,0.35)]"
          >
            <FileDown className="w-4 h-4 text-[#a855f7]" />
            DOWNLOAD_CV
          </button>

          {/* Contact Me Button */}
          <button
            onClick={() => scrollToSection('#contact')}
            className="w-full sm:w-auto px-6 py-3 border border-slate-700 bg-transparent hover:bg-slate-800/60 text-slate-300 hover:text-white font-mono text-xs font-bold uppercase tracking-widest rounded-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
          >
            <Terminal className="w-4 h-4 text-[#22d3ee]" />
            CONTACT_ME
          </button>
        </motion.div>
      </div>

      {/* Floating Geometric accent elements */}
      <div className="absolute top-[25%] left-[5%] md:left-[12%] w-16 h-16 border border-cyan-500/10 rounded-full animate-pulse flex items-center justify-center pointer-events-none select-none">
        <div className="w-10 h-10 border border-purple-500/10 rounded-full animate-spin" style={{ animationDuration: '10s' }} />
      </div>
      <div className="absolute top-[60%] right-[5%] md:right-[12%] w-20 h-20 border border-purple-500/10 rotate-45 animate-pulse flex items-center justify-center pointer-events-none select-none">
        <div className="w-12 h-12 border border-cyan-500/10 animate-spin" style={{ animationDuration: '14s' }} />
      </div>

      {/* Scroll indicator */}
      <div 
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 cursor-pointer flex flex-col items-center gap-1.5 font-mono text-[9px] text-gray-500 hover:text-cyan-400 transition-colors z-10 active:scale-95 select-none"
      >
        <span>SCROLL_TO_DISCOVERY</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-4 h-4 text-cyan-500/60" />
        </motion.div>
      </div>
    </section>
  );
}

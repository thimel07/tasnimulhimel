import React from 'react';
import { Cpu, Terminal } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-850/60 bg-[#020617] py-12 px-6 overflow-hidden">
      {/* Absolute ambient light streak */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#22d3ee]/20 to-transparent" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 select-none">
        
        {/* Left Side: Brand alignment indicators */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-[#22d3ee]/10 border border-[#22d3ee]/30 flex items-center justify-center p-1 font-mono text-[9px] text-[#22d3ee] font-bold">
            THH
          </div>
          <span className="font-mono text-[10px] text-slate-400 tracking-widest uppercase">
            ©2026 THH-CORE.v4
          </span>
        </div>

        {/* Center Text */}
        <div className="text-center font-mono text-[10px] tracking-widest text-[#94a3b8] uppercase">
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mb-2">
            <span>AI+ Prompt Eng Cert</span>
            <span className="text-slate-700">|</span>
            <span>Cyber Hygiene Training</span>
          </div>
          <p className="font-sans text-xs text-slate-400 font-light italic flex items-center justify-center gap-1.5 normal-case">
            <Terminal className="w-3.5 h-3.5 text-[#a855f7]" />
            Built with code, creativity, and futuristic vision.
          </p>
        </div>

        {/* Right Side: Back to top system controller */}
        <button
          onClick={handleScrollToTop}
          className="font-mono text-[9px] text-slate-400 hover:text-[#22d3ee] tracking-widest uppercase border border-slate-800 hover:border-cyan-500/20 bg-slate-900/40 px-3.5 py-1.5 rounded transition-all cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.2)] hover:shadow-[0_0_12px_rgba(34,211,238,0.15)]"
        >
          SYS_REBOOT_TOP()
        </button>

      </div>
    </footer>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Terminal, Cpu, FileDown } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'EDUCATION', href: '#education' },
  { label: 'LEADERSHIP', href: '#leadership' },
  { label: 'CONTACT', href: '#contact' },
];

interface NavbarProps {
  onOpenCV: () => void;
}

export default function Navbar({ onOpenCV }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('#home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.querySelector(item.href);
        if (el) {
          const top = (el as HTMLElement).offsetTop;
          const height = el.getBoundingClientRect().height;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-45 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#020617]/90 backdrop-blur-md border-b border-[#22d3ee]/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-3">
          {/* Top HUD Bar from Professional Polish Theme */}
          <div className={`flex justify-between items-center transition-all duration-300 overflow-hidden ${
            isScrolled ? 'h-0 opacity-0 pointer-events-none mb-0' : 'h-6 opacity-100 border-b border-[#22d3ee]/15 pb-2 mb-1.5'
          }`}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_8px_#22d3ee]"></div>
              <span className="text-[10px] tracking-[0.2em] font-mono uppercase text-cyan-400">System.Status: Active</span>
            </div>
            <div className="hidden sm:flex items-center gap-6 text-[9px] font-mono tracking-widest text-[#94a3b8]">
              <span>COORD: 23.7771° N, 90.3994° E</span>
              <span className="text-purple-400 uppercase">Encrypted Connection</span>
              <span>PORTFOLIO_V4.02</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            {/* Logo Brand */}
            <a 
              href="#home"
              className="flex items-center gap-2.5 font-display font-bold text-lg tracking-widest text-white group"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
            >
              <div className="w-8 h-8 rounded bg-gradient-to-br from-[#22d3ee]/10 to-[#a855f7]/10 border border-[#22d3ee]/35 flex items-center justify-center p-1.5 shadow-[0_0_10px_rgba(34,211,238,0.15)] group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all">
                <Cpu className="w-full h-full text-cyan-400 group-hover:text-cyan-300" />
              </div>
              <span className="bg-gradient-to-r from-gray-50 via-gray-200 to-gray-300 bg-clip-text text-transparent uppercase tracking-wider">
                T. H. HIMEL
              </span>
            </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-1.5 bg-gray-950/40 border border-gray-800/60 p-1 rounded-full backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-4 py-1.5 rounded-full font-mono text-[11px] font-medium tracking-widest transition-all duration-200 ${
                    isActive 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-cyan-400'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBG"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-950/80 to-purple-950/80 border border-cyan-500/30 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.15)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Side action CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={onOpenCV}
              className="relative px-4 py-2 overflow-hidden group rounded border border-purple-500/40 bg-purple-950/20 text-white font-mono text-[11px] tracking-widest transition-all hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.25)] cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <FileDown className="w-3.5 h-3.5 text-purple-400 group-hover:animate-bounce" />
                GET_CV()
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 transition-all duration-300 ease-out" />
            </button>

            <button
              onClick={() => handleNavClick('#contact')}
              className="relative px-4 py-2 overflow-hidden group rounded border border-cyan-500/30 bg-cyan-950/20 text-white font-mono text-[11px] tracking-widest transition-all hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400 group-hover:animate-pulse" />
                INIT_TERMINAL
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 transition-all duration-300 ease-out" />
            </button>
          </div>

          {/* Mobile Hamburguer */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 border border-gray-800 bg-gray-950/60 rounded flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-purple-400" /> : <Menu className="w-5 h-5 text-cyan-400" />}
          </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-[#020617]/95 backdrop-blur-lg border-b border-[#22d3ee]/20 p-6 md:hidden shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`flex items-center justify-between py-2.5 px-4 rounded border font-mono text-xs tracking-wider transition-all ${
                      isActive 
                        ? 'bg-cyan-950/40 border-cyan-500/30 text-white shadow-[0_0_10px_rgba(6,182,212,0.1)]' 
                        : 'border-transparent text-gray-400 hover:bg-gray-900/40 hover:text-cyan-400'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" />}
                  </button>
                );
              })}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCV();
                }}
                className="w-full mt-2 py-3 border border-cyan-500/30 bg-cyan-950/25 hover:border-cyan-400 text-white font-mono text-xs tracking-widest text-center transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                ACCESS_SYSTEM_CV()
              </button>

              <button
                onClick={() => handleNavClick('#contact')}
                className="w-full py-3 border border-purple-500/30 bg-purple-950/20 hover:border-purple-400 text-white font-mono text-xs tracking-widest text-center transition-all cursor-pointer"
              >
                CONNECT_TERMINAL
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

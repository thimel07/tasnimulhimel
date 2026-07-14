import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ChevronLeft, ChevronRight, Binary, ShieldCheck, TerminalSquare } from 'lucide-react';
import { Certification } from '../types';

const certificationsData: Certification[] = [
  {
    id: 'ai-prompt',
    title: 'AI + Prompt Engineer',
    authority: 'Advanced AI Technology Academy',
    issueDate: '2025',
    badgeType: 'ai'
  },
  {
    id: 'cyber-hygiene',
    title: 'Cyber Hygiene Training',
    authority: 'Information Security Guild',
    issueDate: '2024',
    badgeType: 'security'
  },
  {
    id: 'office-app',
    title: 'Computer Office Application',
    authority: 'Bangladesh Technical Training Centre',
    issueDate: '2023',
    badgeType: 'office'
  }
];

export default function CertificationsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeCert = certificationsData[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % certificationsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + certificationsData.length) % certificationsData.length);
  };

  const getBadgeIcon = (type: string) => {
    switch (type) {
      case 'ai':
        return <Binary className="w-12 h-12 text-cyan-400" />;
      case 'security':
        return <ShieldCheck className="w-12 h-12 text-purple-400" />;
      case 'office':
        return <TerminalSquare className="w-12 h-12 text-blue-400" />;
      default:
        return <Award className="w-12 h-12 text-gray-400" />;
    }
  };

  const getBadgeGlow = (type: string) => {
    switch (type) {
      case 'ai':
        return 'shadow-[0_0_30px_rgba(6,182,212,0.25)] border-cyan-500/30';
      case 'security':
        return 'shadow-[0_0_30px_rgba(168,85,247,0.25)] border-purple-500/30';
      case 'office':
        return 'shadow-[0_0_30px_rgba(59,130,246,0.25)] border-blue-500/30';
      default:
        return 'shadow-none border-gray-800';
    }
  };

  return (
    <section id="certifications" className="py-24 px-6 max-w-7xl mx-auto relative content-section overflow-hidden">
      {/* Decorative Vector Orb */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-purple-950/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header Info */}
      <div className="space-y-4 mb-16 text-center">
        <div className="inline-flex items-center gap-2 font-mono text-purple-400 text-xs tracking-widest uppercase">
          <Award className="w-4 h-4" />
          <span>[06] VERIFIED_CREDENTIALS</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase">
          Certifications &{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Specialized Honors
          </span>
        </h2>
        <p className="font-sans text-xs sm:text-sm text-gray-400 max-w-xl mx-auto font-light">
          An interactive sliding vault presenting industry-recognized training credentials and verified technical skill suites.
        </p>
      </div>

      {/* Slider deck */}
      <div className="max-w-xl mx-auto relative">
        <div className="flex items-center justify-between gap-4">
          
          {/* Controls Prev */}
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded border border-gray-800 hover:border-cyan-500/40 bg-gray-950/65 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer select-none"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Active Sliding card */}
          <div className="flex-1 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCert.id}
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -20 }}
                transition={{ duration: 0.3 }}
                className={`border bg-gray-950/50 p-6 sm:p-8 rounded-xl backdrop-blur-md flex flex-col items-center text-center space-y-6 select-none ${getBadgeGlow(
                  activeCert.badgeType
                )}`}
              >
                {/* Simulated Holographic Hex Badge */}
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-950 rounded-full border border-gray-800" />
                  <div className="absolute inset-2 border border-dashed border-gray-850 rounded-full animate-spin" style={{ animationDuration: '30s' }} />
                  <div className="relative z-10">
                    {getBadgeIcon(activeCert.badgeType)}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-semibold text-base sm:text-lg text-white uppercase tracking-wider">
                    {activeCert.title}
                  </h3>
                  <p className="font-sans text-xs text-purple-400 font-medium">
                    {activeCert.authority}
                  </p>
                </div>

                <div className="border-t border-gray-900/60 w-full pt-4 flex justify-between items-center font-mono text-[10px] text-gray-500">
                  <span>VALID_YEAR: {activeCert.issueDate}</span>
                  <span className="text-cyan-400">CRED_VERIFIED: TRUE</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls Next */}
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded border border-gray-800 hover:border-cyan-500/40 bg-gray-950/65 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer select-none"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

        {/* Carousel indicator dots */}
        <div className="flex justify-center gap-2 mt-6">
          {certificationsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                idx === currentIndex ? 'w-6 bg-cyan-400 shadow-glowing-cyan' : 'w-2 bg-gray-800'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

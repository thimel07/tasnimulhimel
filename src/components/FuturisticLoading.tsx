import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function FuturisticLoading({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('SYS_INITIALIZE');

  useEffect(() => {
    const duration = 2200; // total 2.2s loading
    const intervalTime = 30;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    // Update phase label periodically
    const phaseTimer = setTimeout(() => {
      setPhase('COMPILING_PORTFOLIO');
    }, 700);
    const phaseTimer2 = setTimeout(() => {
      setPhase('ESTABLISHING_CYBER_BOUNDS');
    }, 1500);

    const doneTimer = setTimeout(() => {
      onComplete();
    }, duration + 300);

    return () => {
      clearInterval(timer);
      clearTimeout(phaseTimer);
      clearTimeout(phaseTimer2);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-[#02050e] flex flex-col items-center justify-center z-50 overflow-hidden"
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Absolute futuristic boundary graphic elements */}
      <div className="absolute top-10 left-10 w-24 h-24 border-t-2 border-l-2 border-cyan-500/30 font-mono text-[9px] text-cyan-500/50 p-2">
        EST. 2024
      </div>
      <div className="absolute top-10 right-10 w-24 h-24 border-t-2 border-r-2 border-purple-500/30 font-mono text-[9px] text-purple-500/50 p-2 text-right">
        [CSE_STUDENT]
      </div>
      <div className="absolute bottom-10 left-10 w-24 h-24 border-b-2 border-l-2 border-purple-500/30 font-mono text-[9px] text-purple-500/50 p-2 flex items-end">
        SYS.v4.0
      </div>
      <div className="absolute bottom-10 right-10 w-24 h-24 border-b-2 border-r-2 border-cyan-500/30 font-mono text-[9px] text-cyan-500/50 p-2 flex items-end justify-end">
        PORTFOLIO_CORE
      </div>

      <div className="max-w-md w-full px-8 flex flex-col items-center space-y-8 z-10">
        {/* Futuristic Minimal Cyber Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-20 h-20 flex items-center justify-center bg-radial-gradient from-cyan-950/40 to-transparent border border-cyan-500/40 rounded-full shadow-[0_0_30px_rgba(6,182,212,0.15)]"
        >
          {/* Animated rings */}
          <motion.div
            className="absolute inset-0 border-t border-r border-cyan-400 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
          />
          <motion.div
            className="absolute -inset-1.5 border-b border-l border-purple-400 rounded-full opacity-50"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
          />
          <span className="font-display font-medium text-2xl tracking-widest text-[#f3f4f6]">THH</span>
        </motion.div>

        {/* Text indicators */}
        <div className="text-center w-full">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-lg tracking-wider font-semibold text-gray-200 uppercase"
          >
            Tasnimul Hasan Himel
          </motion.h1>
          <motion.p
            className="font-mono text-xs text-cyan-400 font-medium tracking-widest mt-1 uppercase"
            key={phase}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {phase}...
          </motion.p>
        </div>

        {/* Progress bar container */}
        <div className="w-full relative">
          <div className="h-1 bg-gray-900/80 border border-gray-800/50 rounded-full overflow-hidden flex items-center">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 shadow-glowing-cyan"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Glitch percentage text */}
          <div className="flex justify-between mt-2 font-mono text-[10px] text-gray-400">
            <span>INTERFACE LOAD</span>
            <span className="text-cyan-400 font-semibold">{Math.round(progress)}%</span>
          </div>
        </div>
      </div>

      {/* Cyber ambient grid lines */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cyan-950/10 to-transparent opacity-20" />
    </motion.div>
  );
}

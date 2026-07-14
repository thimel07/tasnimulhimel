import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function BackgroundGrid() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Config springs for ultra-smooth follow glow effect
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Set relative to window
      mouseX.set(e.clientX - 250); // 250 is half the width of glow bubble
      mouseY.set(e.clientY - 250); // 250 is half the height of glow bubble
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 min-h-screen w-full overflow-hidden -z-50 bg-[#020617]">
      {/* Cinematic grid effect */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#0b1528_1px,transparent_1px),linear-gradient(to_bottom,#0b1528_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35 animate-grid-drift"
        style={{ animationDuration: '60s' }}
      />

      {/* Professional Polish Dot Matrix */}
      <div 
        className="absolute inset-0 opacity-[0.12] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, #22d3ee 1.5px, transparent 0)', 
          backgroundSize: '40px 40px' 
        }} 
      />

      {/* Cyber line gradients */}
      <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#06b6d4]/30 to-transparent pointer-events-none" />
      <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#a855f7]/30 to-transparent pointer-events-none" />

      {/* Futuristic Scanline or moving horizontal light beam */}
      <div className="absolute inset-0 w-full pointer-events-none overflow-hidden opacity-10">
        <div className="w-[200%] h-[1px] bg-gradient-to-r from-transparent via-[#06b6d4] to-transparent animate-scanline absolute top-0 left-[-50%]" />
      </div>

      {/* Cyber ambient glows: static or flowing lights */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full" />
      <div className="absolute top-[25%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyan-900/10 blur-[130px]" />
      <div className="absolute bottom-[25%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-purple-950/10 blur-[150px]" />

      {/* Dynamic Cursor Light Glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.12)_0%,rgba(168,85,247,0.05)_40%,transparent_70%)] blur-[40px] hidden md:block"
        style={{
          x: glowX,
          y: glowY,
        }}
      />

      {/* Cybernetic Tech Details: floating background vector lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none">
        <svg width="100%" height="100%">
          <line x1="10%" y1="0" x2="10%" y2="100%" stroke="#06b6d4" strokeWidth="1" strokeDasharray="5 5" />
          <line x1="90%" y1="0" x2="90%" y2="100%" stroke="#a855f7" strokeWidth="1" strokeDasharray="5 5" />
          <line x1="0" y1="20%" x2="100%" y2="20%" stroke="#06b6d4" strokeWidth="1" strokeDasharray="10 10" />
        </svg>
      </div>

      {/* Decorative HUD Corner elements */}
      <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-cyan-500/20 rounded-tl pointer-events-none hidden sm:block" />
      <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-cyan-500/20 rounded-tr pointer-events-none hidden sm:block" />
      <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-cyan-500/20 rounded-bl pointer-events-none hidden sm:block" />
      <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-cyan-500/20 rounded-br pointer-events-none hidden sm:block" />
    </div>
  );
}

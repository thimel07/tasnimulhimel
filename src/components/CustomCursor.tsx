import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.3 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device supports touch
    const checkTouch = () => {
      setIsTouchDevice(
        'ontouchstart' in window || navigator.maxTouchPoints > 0
      );
    };
    checkTouch();

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.closest('.interactive-card') !== null ||
        target.getAttribute('role') === 'button';

      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer crosshair chassis */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 rounded-full border border-cyan-400/40 mix-blend-screen flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        style={{
          x: springX,
          y: springY,
          scale: isHovered ? 1.6 : 1,
          borderColor: isHovered ? 'rgba(168, 85, 247, 0.6)' : 'rgba(6, 182, 212, 0.4)',
        }}
      >
        {/* Animated small scope bars inside crosshair */}
        <div className="absolute top-0 w-full h-[1px] bg-cyan-400/20" />
        <div className="absolute left-0 w-[1px] h-full bg-cyan-400/20" />
        <motion.div 
          className="absolute inset-0 border border-t-cyan-400 border-b-cyan-400 border-l-transparent border-r-transparent rounded-full"
          animate={{ rotate: isHovered ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Central tracking pixel */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white pointer-events-none z-50 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovered ? 0.6 : 1,
          backgroundColor: isHovered ? '#a855f7' : '#06b6d4',
        }}
      />
    </>
  );
}

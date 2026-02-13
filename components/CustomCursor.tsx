
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Paintbrush } from 'lucide-react';
import { Splash } from '../types';
import { COLORS } from '../constants';

const SplashEffect: React.FC<{ x: number, y: number, onComplete: () => void }> = ({ x, y, onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed pointer-events-none z-[9999]" style={{ left: x, top: y }}>
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
          animate={{
            scale: [0, 1.5, 0],
            x: Math.cos(i * 60 * (Math.PI / 180)) * 40,
            y: Math.sin(i * 60 * (Math.PI / 180)) * 40,
            opacity: 0
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute w-3 h-3 rounded-full"
          style={{ backgroundColor: i % 2 === 0 ? COLORS.gold : COLORS.primary }}
        />
      ))}
    </div>
  );
};

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [splashes, setSplashes] = useState<Splash[]>([]);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkDevice = () => {
      setIsEnabled(window.innerWidth > 768);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = (e: MouseEvent) => {
      if (window.innerWidth <= 768) return;
      setSplashes(prev => [...prev, { id: Date.now(), x: e.clientX, y: e.clientY }]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleClick);
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  if (!isEnabled) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[10000] mix-blend-difference"
        animate={{ x: position.x - 16, y: position.y - 16 }}
        transition={{ type: 'spring', damping: 25, stiffness: 400, mass: 0.5 }}
      >
        <Paintbrush className="w-full h-full text-white" />
      </motion.div>

      <AnimatePresence>
        {splashes.map(splash => (
          <SplashEffect
            key={splash.id}
            x={splash.x}
            y={splash.y}
            onComplete={() => setSplashes(prev => prev.filter(s => s.id !== splash.id))}
          />
        ))}
      </AnimatePresence>
    </>
  );
};

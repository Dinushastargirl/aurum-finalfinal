
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { HERO_BG, FRESHA_LINK } from '../constants';
import { Page } from '../types';

export const Hero: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  const title = "AURUM STUDIO";
  
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[15s] hover:scale-110"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <motion.div
          className="flex gap-2 md:gap-4 mb-8"
          initial="hidden"
          animate="visible"
        >
          {title.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.5 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`text-4xl md:text-8xl font-serif tracking-tighter ${char === " " ? "mr-4" : ""} text-white drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]`}
              style={{ color: i > 5 ? '#D4AF37' : 'white' }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-lg md:text-2xl text-white/90 max-w-3xl font-light tracking-[0.3em] uppercase mb-12"
        >
          Premium Beauty Care in Rajagiriya
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-6"
        >
          <a 
            href={FRESHA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-12 py-5 overflow-hidden rounded-sm"
          >
            <div className="absolute inset-0 bg-[#D4AF37] transition-transform duration-500 group-hover:scale-105" />
            <span className="relative text-[#2E2E2E] font-bold tracking-[0.2em] uppercase">Book Now</span>
          </a>
          
          <button 
            onClick={() => onNavigate('gallery')}
            className="px-12 py-5 border border-white/30 hover:border-[#D4AF37] hover:text-[#D4AF37] text-white font-medium tracking-[0.2em] uppercase transition-all duration-300 rounded-sm"
          >
            See Our Work
          </button>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 opacity-40"
      >
        <span className="text-[9px] uppercase tracking-[0.5em]">Scroll Down</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};

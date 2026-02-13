"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GALLERY } from '../constants';

export const Gallery: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % GALLERY.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + GALLERY.length) % GALLERY.length);
    }
  };

  return (
    <section id="gallery" className="py-24 px-6 bg-[#252525]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.4em] text-[#D4AF37] mb-4">Our Work</h2>
          <h3 className="text-4xl md:text-5xl font-serif">A Visual Journey</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelectedIdx(idx)}
              className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg shadow-lg bg-[#3A3A3A]"
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#1E7A8A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Maximize2 className="text-white w-8 h-8" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedIdx(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white hover:text-[#D4AF37] transition-colors"
              onClick={() => setSelectedIdx(null)}
            >
              <X size={32} />
            </button>

            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#D4AF37] transition-colors p-4"
              onClick={prevImage}
            >
              <ChevronLeft size={48} />
            </button>

            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#D4AF37] transition-colors p-4"
              onClick={nextImage}
            >
              <ChevronRight size={48} />
            </button>

            <motion.div 
              key={selectedIdx}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="max-w-5xl max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={GALLERY[selectedIdx].url} 
                alt={GALLERY[selectedIdx].alt} 
                className="max-w-full max-h-[75vh] object-contain shadow-2xl rounded-sm"
              />
              <div className="mt-4 text-center">
                <p className="text-[#D4AF37] text-sm uppercase tracking-widest">{GALLERY[selectedIdx].alt}</p>
                <p className="text-white/40 text-xs mt-1">{selectedIdx + 1} / {GALLERY.length}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
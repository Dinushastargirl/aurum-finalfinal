
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TEAM, COLORS } from '../constants';

const TeamCard: React.FC<{ member: typeof TEAM[0], index: number }> = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="bg-[#3A3A3A] rounded-2xl overflow-hidden shadow-xl border border-white/5 group"
    >
      <div className="relative h-96 overflow-hidden">
        <img 
          src={member.image} 
          alt={`${member.name} - ${member.role} at Aurum Studio`} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-8 text-center">
        <h3 className="text-2xl font-serif text-white mb-1">{member.name}</h3>
        <p className="text-[#D4AF37] text-sm uppercase tracking-widest">{member.role}</p>
        <div className="mt-4 w-12 h-[1px] bg-white/20 mx-auto group-hover:w-24 transition-all duration-500" />
      </div>
    </motion.div>
  );
};

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 px-6 bg-[#2E2E2E]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.4em] text-[#D4AF37] mb-4">The Masters</h2>
          <h3 className="text-4xl md:text-5xl font-serif">Our Artistry Team</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {TEAM.map((member, idx) => (
            <TeamCard key={member.name} member={member} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

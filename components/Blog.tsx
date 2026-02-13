
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BLOG_POSTS } from '../constants';
import { ArrowRight } from 'lucide-react';

export const Blog: React.FC = () => {
  return (
    <section className="pt-32 pb-24 px-6 bg-[#2E2E2E]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm uppercase tracking-[0.5em] text-[#D4AF37] mb-4">The Journal</h2>
          <h3 className="text-5xl md:text-7xl font-serif">Luxury Insights</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {BLOG_POSTS.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-6">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-6 left-6 px-4 py-1 bg-[#D4AF37] text-[#2E2E2E] text-[10px] uppercase font-bold tracking-widest">
                  {post.category}
                </div>
              </div>
              <div className="space-y-4">
                <span className="text-[10px] text-white/40 uppercase tracking-[0.3em]">{post.date}</span>
                <h4 className="text-2xl font-serif text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                  {post.title}
                </h4>
                <p className="text-white/60 text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-[#D4AF37] text-xs uppercase tracking-[0.2em] pt-2 font-semibold">
                  Read Article <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

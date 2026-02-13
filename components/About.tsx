
import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_IMAGES, COLORS } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-[#2E2E2E]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Images Grid */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative grid grid-cols-2 gap-4"
        >
          <div className="pt-12">
            <img 
              src={ABOUT_IMAGES[0]} 
              alt="Aurum Studio Service" 
              className="rounded-lg shadow-2xl hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
          <div>
            <img 
              src={ABOUT_IMAGES[1]} 
              alt="Aurum Studio Interior" 
              className="rounded-lg shadow-2xl hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm uppercase tracking-[0.4em] text-[#D4AF37] mb-4">Our Story</h2>
          <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">High Quality Beauty <br/>in Rajagiriya</h3>
          <p className="text-gray-300 text-lg mb-8 font-light leading-relaxed">
            Welcome to Aurum Studio. Located in the heart of Rajagiriya, we offer a relaxed space where we focus on making you look and feel your best. Our team is trained to give you great hair, skin, and makeup services using the best products available.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1E7A8A]/20 flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-[#1E7A8A]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#D4AF37]">Personalized Service</h4>
                <p className="text-sm text-gray-400">We talk with you to find the style that fits you perfectly.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#D4AF37]">Expert Team</h4>
                <p className="text-sm text-gray-400">Our stylists and beauticians are some of the best in Sri Lanka.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

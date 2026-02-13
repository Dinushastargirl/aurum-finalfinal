
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { CONTACT_INFO, FRESHA_LINK } from '../constants';

export const Contact: React.FC = () => {
  return (
    <section className="pt-32 pb-24 px-6 bg-[#2E2E2E]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-sm uppercase tracking-[0.5em] text-[#D4AF37] mb-6">Contact Us</h2>
            <h3 className="text-5xl md:text-7xl font-serif mb-12">How to Find Us</h3>
            
            <div className="space-y-12">
              <div className="flex gap-6">
                <MapPin className="text-[#D4AF37] shrink-0" size={28} />
                <div>
                  <h4 className="font-serif text-xl mb-2">Our Address</h4>
                  <p className="text-white/60 leading-relaxed uppercase tracking-widest text-sm">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <Phone className="text-[#D4AF37] shrink-0" size={28} />
                <div>
                  <h4 className="font-serif text-xl mb-2">Call Us</h4>
                  <p className="text-white/60 tracking-widest text-sm">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div className="flex gap-6">
                <Mail className="text-[#D4AF37] shrink-0" size={28} />
                <div>
                  <h4 className="font-serif text-xl mb-2">Email Us</h4>
                  <p className="text-white/60 tracking-widest text-sm">{CONTACT_INFO.email}</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-white/5 flex gap-8">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <Instagram className="text-white/40 hover:text-[#D4AF37] cursor-pointer transition-colors" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <Facebook className="text-white/40 hover:text-[#D4AF37] cursor-pointer transition-colors" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#3A3A3A] p-10 md:p-16 rounded-sm shadow-2xl border border-white/5"
          >
            <h4 className="text-2xl font-serif mb-8 text-center uppercase tracking-widest">Send a Message</h4>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] text-white/40">Full Name</label>
                <input type="text" className="w-full bg-[#2E2E2E] border border-white/5 p-4 focus:border-[#D4AF37] outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] text-white/40">Email Address</label>
                <input type="email" className="w-full bg-[#2E2E2E] border border-white/5 p-4 focus:border-[#D4AF37] outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] text-white/40">Message</label>
                <textarea rows={4} className="w-full bg-[#2E2E2E] border border-white/5 p-4 focus:border-[#D4AF37] outline-none transition-colors"></textarea>
              </div>
              <button className="w-full py-5 bg-[#D4AF37] text-[#2E2E2E] font-bold uppercase tracking-[0.3em] hover:bg-white transition-colors duration-500">
                Send Now
              </button>
              <div className="text-center pt-4">
                <a href={FRESHA_LINK} target="_blank" rel="noreferrer" className="text-[#D4AF37] text-xs uppercase tracking-widest border-b border-[#D4AF37]">Or Book Direct on Fresha</a>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

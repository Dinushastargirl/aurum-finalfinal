"use client";

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Team } from './components/Team';
import { Gallery } from './components/Gallery';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Chatbot } from './components/Chatbot';
import { CustomCursor } from './components/CustomCursor';
import { Page } from './types';
import { FRESHA_LINK, GALLERY, BLOG_POSTS, REVIEWS } from './constants';
import { Star, ArrowRight } from 'lucide-react';

const Navbar: React.FC<{ currentPage: Page, onNavigate: (page: Page) => void }> = ({ currentPage, onNavigate }) => {
  const navItems: { id: Page; label: string }[] = [
    { id: 'about', label: 'About Us' },
    { id: 'team', label: 'Our Team' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-[8000] px-6 md:px-12 py-6 md:py-8 flex justify-between items-center bg-black/60 backdrop-blur-xl border-b border-white/5"
    >
      <div 
        onClick={() => onNavigate('home')}
        className="cursor-pointer group"
      >
        <motion.span 
          whileHover={{ scale: 1.02 }}
          className="text-xl md:text-2xl font-serif tracking-[0.2em] text-[#D4AF37]"
        >
          AURUM <span className="text-white opacity-80 group-hover:opacity-100 transition-opacity">STUDIO</span>
        </motion.span>
      </div>

      <div className="hidden lg:flex gap-10 items-center">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`text-[10px] uppercase tracking-[0.4em] transition-all duration-300 relative group ${
              currentPage === item.id ? 'text-[#D4AF37]' : 'text-white/60 hover:text-white'
            }`}
          >
            {item.label}
            <span className={`absolute -bottom-2 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full ${currentPage === item.id ? 'w-full' : ''}`} />
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a 
          href={FRESHA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 border border-[#D4AF37] text-[#D4AF37] text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-[#D4AF37] hover:text-[#2E2E2E] transition-all duration-300 rounded-sm"
        >
          Book Now
        </a>
      </div>
    </motion.nav>
  );
};

const Footer: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => (
  <footer className="py-24 bg-black/95 text-center border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-serif text-[#D4AF37] mb-4 tracking-[0.2em]">AURUM STUDIO</h2>
      <p className="text-white/40 text-[10px] uppercase tracking-[0.5em] mb-12">1 Parliament Rd, Rajagiriya</p>
      <div className="flex flex-wrap justify-center gap-10 mb-12 text-[10px] uppercase tracking-[0.5em] text-white/40">
        {['about', 'team', 'gallery', 'blog', 'contact'].map(p => (
          <button key={p} onClick={() => onNavigate(p as Page)} className="hover:text-[#D4AF37] transition-colors">{p.replace('-', ' ')}</button>
        ))}
      </div>
      <p className="text-white/20 text-[9px] tracking-[0.4em] uppercase">
        © {new Date().getFullYear()} Aurum Studio. Luxury & Excellence.
      </p>
    </div>
  </footer>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      document.body.classList.add('custom-cursor-active');
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPage, mounted]);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#2E2E2E] flex items-center justify-center">
        <motion.div 
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-[#D4AF37] font-serif text-3xl tracking-widest"
        >
          AURUM
        </motion.div>
      </div>
    );
  }

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <Hero onNavigate={handleNavigate} />;
      case 'about': return <About />;
      case 'team': return <Team />;
      case 'gallery': return <Gallery />;
      case 'blog': return <Blog />;
      case 'contact': return <Contact />;
      default: return <Hero onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#2E2E2E] selection:bg-[#D4AF37] selection:text-[#2E2E2E]">
      <CustomCursor />
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {renderPage()}
          
          {currentPage === 'home' && (
            <>
              <div className="py-20 border-t border-white/5">
                <About />
              </div>

              <div className="py-24 bg-[#252525]">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="flex justify-between items-end mb-12">
                    <div>
                      <h2 className="text-sm uppercase tracking-[0.5em] text-[#D4AF37] mb-4">Portfolio</h2>
                      <h3 className="text-4xl font-serif">Featured Work</h3>
                    </div>
                    <button 
                      onClick={() => handleNavigate('gallery')}
                      className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] flex items-center gap-2 group border-b border-[#D4AF37]/30 pb-1"
                    >
                      View More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {GALLERY.slice(0, 4).map((img, idx) => (
                      <motion.div 
                        key={idx} 
                        whileHover={{ y: -10 }}
                        className="aspect-square rounded-lg overflow-hidden shadow-2xl bg-[#3A3A3A]"
                      >
                        <img 
                          src={img.url} 
                          alt={img.alt} 
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                          loading="lazy"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <Team />

              <div className="py-24 bg-black/20">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="text-center mb-16">
                    <h2 className="text-sm uppercase tracking-[0.5em] text-[#D4AF37] mb-4">Testimonials</h2>
                    <h3 className="text-4xl md:text-5xl font-serif mb-6">Client Experience</h3>
                    <div className="flex justify-center gap-1.5">
                      {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-[#D4AF37] text-[#D4AF37]" />)}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {REVIEWS.map((review, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#3A3A3A] p-10 rounded-lg border border-white/5 shadow-2xl relative"
                      >
                        <div className="flex gap-1 mb-6">
                          {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} className="fill-[#D4AF37] text-[#D4AF37]" />)}
                        </div>
                        <p className="text-white/80 italic mb-8 leading-relaxed font-light">"{review.text}"</p>
                        <div className="flex justify-between items-center border-t border-white/5 pt-6">
                          <span className="font-semibold text-sm tracking-widest uppercase">{review.name}</span>
                          <span className="text-white/20 text-[10px] uppercase tracking-widest">{review.date}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </AnimatePresence>

      <Footer onNavigate={handleNavigate} />
      <Chatbot />
    </div>
  );
};

export default App;
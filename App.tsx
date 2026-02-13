import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import CustomCursor from './components/CustomCursor';
import { Page } from './types';
import { FRESHA_LINK, GALLERY, BLOG_POSTS, REVIEWS, GOOGLE_REVIEWS_LINK } from './constants';
import { Star, ExternalLink, ArrowRight } from 'lucide-react';

const Navbar: React.FC<{ currentPage: Page; onNavigate: (page: Page) => void }> = ({ currentPage, onNavigate }) => {
  const navItems: { id: Page; label: string }[] = [
    { id: 'about', label: 'About Us' },
    { id: 'team', label: 'Our Team' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-[8000] px-6 md:px-12 py-6 md:py-8 flex justify-between items-center bg-black/60 backdrop-blur-xl border-b border-white/5"
    >
      <div onClick={() => onNavigate('home')} className="cursor-pointer group">
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
            className={`text-[10px] uppercase tracking-[0.4em] relative group ${
              currentPage === item.id ? 'text-[#D4AF37]' : 'text-white/60 hover:text-white'
            }`}
          >
            {item.label}
            <span
              className={`absolute -bottom-2 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full ${
                currentPage === item.id ? 'w-full' : ''
              }`}
            />
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
          <button key={p} onClick={() => onNavigate(p as Page)} className="hover:text-[#D4AF37] transition-colors">
            {p.replace('-', ' ')}
          </button>
        ))}
      </div>
      <p className="text-white/20 text-[9px] tracking-[0.4em] uppercase">
        © {new Date().getFullYear()} Aurum Studio. Developed for Premium Excellence.
      </p>
    </div>
  </footer>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: Page) => setCurrentPage(page);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'team':
        return <Team />;
      case 'gallery':
        return <Gallery />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#2E2E2E] selection:bg-[#D4AF37] selection:text-[#2E2E2E]">
      <CustomCursor />

      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      <Footer onNavigate={handleNavigate} />
      <Chatbot />
    </div>
  );
};

export default App;

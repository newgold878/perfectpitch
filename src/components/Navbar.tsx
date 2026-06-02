/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Dog, Cat } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'pocetna', Croatian: 'Početna' },
    { id: 'onama', Croatian: 'O nama' },
    { id: 'galerija', Croatian: 'Galerija proizvoda' },
    { id: 'kontakt', Croatian: 'Kontakt' }
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gradient-to-r from-[#faf8f5]/98 via-[#fefdfc]/98 to-[#f3ede2]/98 backdrop-blur-md border-b border-[#b88452]/15 py-3 shadow-md'
          : 'bg-gradient-to-b from-[#faf8f5]/90 via-[#faf8f5]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo and Brand */}
        <div
          id="brand-logo"
          onClick={() => onNavigate('pocetna')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="flex items-center group-hover:scale-105 transition-transform duration-300">
            {/* Dog and Cat overlapping icons for the perfect pet identity */}
            <div className="w-8 h-8 bg-gradient-to-br from-[#b88452] to-[#9c7048] rounded-xl flex items-center justify-center shadow-lg border border-white/20 relative z-10">
              <Dog className="w-4.5 h-4.5 text-white" id="logo-dog" />
            </div>
            <div className="w-8 h-8 bg-gradient-to-br from-[#6b4c2e] to-[#422e1c] rounded-xl flex items-center justify-center shadow-lg border border-white/20 -ml-2.5 relative z-0">
              <Cat className="w-4.5 h-4.5 text-white" id="logo-cat" />
            </div>
          </div>
          <div>
            <span className="font-serif text-xl font-bold tracking-wider text-[#1d1a16] block leading-none">
              PERFECT <span className="text-[#b88452]">FINISH</span>
            </span>
            <span className="text-[9px] font-mono tracking-[4px] text-[#8c7e6c] block mt-0.5 uppercase">
              Ljubimci i Dom
            </span>
          </div>
        </div>

        {/* Desktop Navbar Links */}
        <nav className="hidden md:flex items-center gap-10" id="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-link-${item.id}`}
              onClick={() => {
                onNavigate(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`relative py-2 text-sm font-semibold tracking-wide uppercase transition-colors duration-300 cursor-pointer ${
                activeSection === item.id ? 'text-[#b88452]' : 'text-[#4a433a] hover:text-[#1d1a16]'
              }`}
            >
              {item.Croatian}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#b88452]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Action Button - Get ballpark estimate */}
        <div className="hidden lg:block" id="nav-action-wrapper">
          <button
            id="nav-action-btn"
            onClick={() => onNavigate('kalkulator')}
            className="px-5 py-2 bg-transparent border-2 border-[#b88452] text-[#b88452] hover:bg-[#b88452] hover:text-white text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-md cursor-pointer"
          >
            Kalkulator cijene
          </button>
        </div>

        {/* Mobile Hamburger menu */}
        <button
          id="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-zinc-705 hover:text-[#1d1a16] transition-colors p-2"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-gradient-to-b from-[#faf8f5] to-[#f4f0ea] border-b border-[#b88452]/20 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`py-3 text-left text-base font-semibold tracking-wide uppercase border-b border-[#b88452]/10 transition-colors ${
                    activeSection === item.id ? 'text-[#b88452]' : 'text-zinc-650 hover:text-[#1d1a16]'
                  }`}
                >
                  {item.Croatian}
                </motion.button>
              ))}
              <motion.button
                id="mobile-nav-action-btn"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                onClick={() => {
                  onNavigate('kalkulator');
                  setIsMobileMenuOpen(false);
                }}
                className="mt-2 w-full text-center py-3 bg-[#b88452] hover:bg-[#a3744c] text-white font-semibold text-sm tracking-wider uppercase rounded-md transition-colors"
              >
                Kalkulator cijene
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

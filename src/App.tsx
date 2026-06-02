/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import InteractiveEstimator from './components/InteractiveEstimator';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { TESTIMONIALS } from './data';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, Heart, ArrowRight } from 'lucide-react';

import heroImg from './assets/images/hero_pet_furnitures_1780397231234.png';
import workshopImg from './assets/images/radionica_pet_craft_1780397209228.png';

export default function App() {
  const [activeSection, setActiveSection] = useState('pocetna');
  const [preloadedMessage, setPreloadedMessage] = useState('');

  // Auto-scroll to section function
  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  // When a user requests high-res details for a gallery item, select and scroll to contact
  const handleGalleryInquiry = (productName: string) => {
    setPreloadedMessage(`Zanima me izrada i ponuda za: ${productName}. Molio bih Vas procjenu i predloženi termin za besplatnu izmjeru.`);
    handleNavigate('kontakt');
  };

  // When a calculation is complete, load it and scroll
  const handleEstimateReady = (details: string, estimateVal: number) => {
    setPreloadedMessage(details);
    handleNavigate('kontakt');
  };

  // Intersection Observer to update active navigation tab based on viewport scroll position
  useEffect(() => {
    const sections = ['pocetna', 'onama', 'galerija', 'kalkulator', 'kontakt'];
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // check elements near mid-screen
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1d1a16] font-sans antialiased selection:bg-[#b88452]/20">
      
      {/* Dynamic Header & Menu Navigation */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Sections */}
      <main>
        {/* Hero Landing */}
        <Hero
          onNavigate={handleNavigate}
          heroImage={heroImg}
        />

        {/* Dynamic Client Testimonials Separator with motion support */}
        <section className="bg-gradient-to-br from-[#f3ede2] to-[#faf8f5] text-[#1d1a16] py-20 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 bg-[#b88452]/5 rounded-full filter blur-[100px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#b88452]">Zadovoljni Klijenti</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#1d1a16]">Izjave i Reference s Terena</h2>
              <div className="h-[2px] bg-[#b88452]/40 w-20 mx-auto mt-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="testimonials-grid">
              {TESTIMONIALS.map((t, index) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-[#dfd5c6]/60 rounded-2xl p-8 flex flex-col justify-between space-y-6 relative hover:border-[#b88452]/40 hover:shadow-xl transition-all duration-300 group"
                >
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-[#b88452]/10 group-hover:text-[#b88452]/20 transition-colors" />
                  
                  <div className="space-y-4">
                    {/* Stars */}
                    <div className="flex items-center gap-1">
                      {Array.from({ length: t.rating }).map((_, sIdx) => (
                        <Star key={sIdx} className="w-4 h-4 text-[#b88452] fill-[#b88452]" />
                      ))}
                    </div>
                    
                    <p className="text-zinc-650 text-xs sm:text-sm font-sans leading-relaxed italic">
                      "{t.comment}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-100 flex justify-between items-center text-xs">
                    <div>
                      <span className="text-[#1d1a16] font-serif font-bold block">{t.clientName}</span>
                      <span className="text-zinc-500 font-mono text-[10px] block mt-0.5">{t.location}</span>
                    </div>
                    <span className="bg-[#b88452]/10 text-[#b88452] border border-[#b88452]/15 px-2 py-0.5 rounded font-mono text-[10px]">
                      {t.projectType}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* "O nama" Segment with 5 steps of the woodworking process */}
        <About
          workshopImage={workshopImg}
        />

        {/* "Galerija proizvoda" Section with expandable custom overlays */}
        <Gallery
          onInquire={handleGalleryInquiry}
        />

        {/* Interactive Estimator / Material Properties Calculator */}
        <InteractiveEstimator
          onEstimateReady={handleEstimateReady}
        />

        {/* "Kontakt" form and maps contact data area */}
        <Contact
          preloadedMessage={preloadedMessage}
        />
      </main>

      {/* Structured Footer with links and copyrights */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, Trees, ShieldCheck, Award } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  heroImage: string;
}

export default function Hero({ onNavigate, heroImage }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  };

  return (
    <section
      id="pocetna"
      className="relative min-h-screen flex items-center bg-[#faf8f5] overflow-hidden pt-20"
    >
      {/* Background Hero Image with Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Perfect Finish - Drveni interijeri"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-105 opacity-80 group-hover:scale-100 transition-transform duration-10000"
          id="hero-bg-img"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f5] via-[#faf8f5]/85 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f5] via-transparent to-transparent z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-32 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Hero Left Content */}
        <motion.div
          id="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-8 space-y-8"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-[#b88452]/10 border border-[#b88452]/20 rounded-full">
            <span className="w-1.5 h-1.5 bg-[#b88452] rounded-full animate-pulse" />
            <span className="text-[11px] font-mono tracking-wider text-[#b88452] uppercase font-bold">
              Unikatni drveni proizvodi za ljubimce i dom
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold text-[#1d1a16] leading-tight"
            >
              Strast prema drvetu.<br />
              <span className="text-[#b88452] relative">
                Ljubav prema životinjama.
                <svg className="absolute -bottom-2 left-0 w-full h-1.5 text-[#b88452]/40" viewBox="0 0 300 10" preserveAspectRatio="none">
                  <path d="M1 5C50 2 150 8 300 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#4a433a] max-w-xl leading-relaxed font-sans"
            >
              Ručno izrađujemo unikatne i estetske drvene proizvode koji savršeno spajaju prirodnu ljepotu slavonskog drva, besprijekornu funkcionalnost i vrhunsku udobnost za vaše voljene kućne ljubimce.
            </motion.p>
          </div>

          {/* Action Call to Action */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center pt-2">
            <button
              id="hero-primary-btn"
              onClick={() => onNavigate('galerija')}
              className="px-8 py-4 bg-[#b88452] hover:bg-[#a3744c] text-white font-bold text-sm tracking-wider uppercase rounded shadow-lg shadow-[#b88452]/15 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              Saznaj više o proizvodima
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              id="hero-secondary-btn"
              onClick={() => onNavigate('kontakt')}
              className="px-8 py-4 bg-transparent hover:bg-[#b88452]/5 text-[#4a433a] hover:text-[#1d1a16] border border-zinc-350 font-bold text-sm tracking-wider uppercase rounded transition-all duration-300 cursor-pointer"
            >
              Zatraži mjere i narudžbu
            </button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-zinc-200"
          >
            <div className="flex items-center gap-3">
              <Trees className="w-8 h-8 text-[#b88452] shrink-0" />
              <div>
                <span className="text-[#1d1a16] font-bold text-sm block">100% Prirodno drvo</span>
                <span className="text-[#5e5445] text-xs font-sans">Slavonski hrast, jasen i gorski orah</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-[#b88452] shrink-0" />
              <div>
                <span className="text-[#1d1a16] font-bold text-sm block">Ručni rad s ljubavlju</span>
                <span className="text-[#5e5445] text-xs font-sans">Zaobljeni rubovi sigurni za njuškice</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-[#b88452] shrink-0" />
              <div>
                <span className="text-[#1d1a16] font-bold text-sm block">100% Netoksični materijali</span>
                <span className="text-[#5e5445] text-xs font-sans">Ekološki i certificirani Rubio premazi</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Right Decorative Panel / Mini Card */}
        <motion.div
          id="hero-badge"
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
          className="lg:col-span-4 hidden lg:block bg-white border border-[#b88452]/20 p-8 rounded-2xl shadow-xl relative overflow-hidden"
        >
          {/* Subtle wooden texture pattern simulator lines in background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute top-0 bottom-0 left-10 w-[1px] bg-[#b88452]" />
            <div className="absolute top-0 bottom-0 left-20 w-[1px] bg-[#b88452]" />
            <div className="absolute top-0 bottom-0 left-32 w-[1px] bg-[#b88452]" />
            <div className="absolute top-12 left-0 right-0 h-[1px] bg-[#b88452]" />
            <div className="absolute top-36 left-0 right-0 h-[1px] bg-[#b88452]" />
          </div>

          <div id="stat-card" className="relative z-10 space-y-6">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-mono uppercase text-[#85705a] tracking-widest bg-[#b88452]/10 px-2.5 py-1 rounded">
                Najnoviji Rad
              </span>
              <span className="text-[#b88452] font-mono font-bold text-xs">PET #221</span>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-[#1d1a16]">Hrastovo Postolje s Laser Gravurom</h3>
              <p className="text-[#5e5445] text-xs font-sans leading-relaxed">
                Povišeni ugođeni stalak od flamenog hrasta s motivom šapice i dvije inox zdjelice, izrađen po narudžbi za sretnog labradora.
              </p>
            </div>

            <div className="border-t border-[#b88452]/10 pt-4 grid grid-cols-2 gap-4">
              <div>
                <span className="text-zinc-400 text-[10px] uppercase font-mono block">Sretni Ljubimac</span>
                <span className="text-zinc-700 text-xs font-bold font-mono">Bono (Labrador)</span>
              </div>
              <div>
                <span className="text-zinc-400 text-[10px] uppercase font-mono block">Drveni Finiš</span>
                <span className="text-[#b88452] text-xs font-bold font-mono">Flame & Eko-Ulje</span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('galerija')}
              className="w-full py-2.5 bg-zinc-50 hover:bg-[#b88452]/10 text-zinc-650 hover:text-[#b88452] border border-zinc-200 hover:border-[#b88452]/30 text-xs font-bold tracking-wider uppercase transition-all duration-300 rounded block text-center cursor-pointer"
            >
              Pogledaj postolje u galeriji
            </button>
          </div>
        </motion.div>
      </div>

      {/* Elegant visual wave transition at bottom using dark background color instead of off-white to maintain look */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#faf8f5] pointer-events-none" style={{ clipPath: 'polygon(0 70%, 100% 100%, 0 100%)' }} />
    </section>
  );
}

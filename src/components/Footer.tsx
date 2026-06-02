/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Hammer, Heart, ChevronUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [subscribed, setSubscribed] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onNavigate('pocetna');
  };

  return (
    <footer className="bg-[#fcfbfa] text-[#1d1a16] border-t border-[#dfd5c6]/60">
      
      {/* Top Footer Banner */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-[#dfd5c6]/65" id="footer-top-columns">
        
        {/* Brand identity column */}
        <div className="space-y-4 md:col-span-1" id="footer-brand">
          <div className="flex items-center gap-3 cursor-pointer" onClick={scrollTop}>
            <div className="w-8 h-8 bg-[#b88452] rounded flex items-center justify-center">
              <Hammer className="w-4 h-4 text-white" />
            </div>
            <span className="font-serif text-lg font-extrabold tracking-wider text-[#1d1a16] block">
              PERFECT <span className="text-[#b88452]">FINISH</span>
            </span>
          </div>
          <p className="text-[#5e5445] text-xs leading-relaxed font-sans">
            Unikatni ručno rađeni drveni proizvodi za kućne ljubimce i dom, spajajući milimetarsku funkcionalnost, vrhunsku ekološku kvalitetu i trajnost.
          </p>
        </div>

        {/* Navigation Quicklinks column */}
        <div className="space-y-4" id="footer-links">
          <h4 className="font-mono text-xs font-bold text-[#b88452] uppercase tracking-widest">Brze Poveznice</h4>
          <ul className="space-y-2 text-xs text-[#5e5445]">
            <li>
              <button onClick={() => onNavigate('pocetna')} className="hover:text-[#b88452] hover:underline transition-all cursor-pointer">Početna</button>
            </li>
            <li>
              <button onClick={() => onNavigate('onama')} className="hover:text-[#b88452] hover:underline transition-all cursor-pointer">O nama i vrijednosti</button>
            </li>
            <li>
              <button onClick={() => onNavigate('galerija')} className="hover:text-[#b88452] hover:underline transition-all cursor-pointer">Galerija proizvoda</button>
            </li>
            <li>
              <button onClick={() => onNavigate('kalkulator')} className="hover:text-[#b88452] hover:underline transition-all cursor-pointer">Dizajner i kalkulator</button>
            </li>
            <li>
              <button onClick={() => onNavigate('kontakt')} className="hover:text-[#b88452] hover:underline transition-all cursor-pointer">Naruči po mjeri / Kontakt</button>
            </li>
          </ul>
        </div>

        {/* References column */}
        <div className="space-y-4" id="footer-references-menu">
          <h4 className="font-mono text-xs font-bold text-[#b88452] uppercase tracking-widest">Iskustva s terena</h4>
          <ul className="space-y-2 text-xs text-[#5e5445]">
            <li>• Povišena postolja Bono (Samobor)</li>
            <li>• Masivni ormarić & zdjelice (Zagreb)</li>
            <li>• Dizajnerski stabilni cat-tree (Varaždin)</li>
            <li>• Eko kućice Shou Sugi Ban (Karlovac)</li>
            <li>• Unikatni stolni pladnjevi (Split)</li>
          </ul>
        </div>

        {/* Outro Newsletter mock signup */}
        <div className="space-y-4" id="footer-newsletter">
          <h4 className="font-mono text-xs font-bold text-[#b88452] uppercase tracking-widest">Newsletter za njuškice</h4>
          <p className="text-[#5e5445] text-xs leading-relaxed font-sans">
            Pretplatite se na naš katalog i budite prvi koji će saznati za unikatne radove i prigodne novosti.
          </p>
          <div className="flex gap-2">
            {!subscribed ? (
              <>
                <input
                  type="email"
                  placeholder="Upišite vaš e-mail"
                  className="bg-white border border-[#dfd5c6] text-xs px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#b88452] text-[#1d1a16] w-full font-sans"
                />
                <button
                  onClick={() => setSubscribed(true)}
                  className="bg-[#b88452] hover:bg-[#a3744c] text-white text-xs font-bold px-3 py-2 rounded-lg shadow-md shadow-[#b88452]/10 transition-all cursor-pointer shrink-0"
                >
                  Prijavi
                </button>
              </>
            ) : (
              <span className="text-emerald-600 text-xs font-mono">Hvala na prijavi u newsletter!</span>
            )}
          </div>
        </div>

      </div>

      {/* Sub Footer Legal / Back to top */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7c7263] font-mono text-center sm:text-left" id="footer-bottom-bar">
        <div>
          © {new Date().getFullYear()} Perfect Finish d.o.o. Sva prava pridržana.
        </div>
        <div className="flex items-center gap-1.5 justify-center">
          <span>Stvoreno s pažnjom i</span>
          <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          <span>za vrhunski drveni dizajn</span>
        </div>
        <div>
          <button
            onClick={scrollTop}
            className="flex items-center gap-1.5 hover:text-[#b88452] bg-white px-3 py-1.5 rounded-lg border border-stone-250 hover:border-[#b88452] transition-all cursor-pointer"
          >
            Vrh stranice
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

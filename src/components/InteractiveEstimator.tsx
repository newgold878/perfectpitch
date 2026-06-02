/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { WOOD_MATERIALS } from '../data';
import { Ruler, ShieldCheck, Scale, Compass, ChevronRight } from 'lucide-react';

interface InteractiveEstimatorProps {
  onEstimateReady: (details: string, estimateVal: number) => void;
}

type WoodworkType = 'bowls' | 'scratchers' | 'houses';

export default function InteractiveEstimator({ onEstimateReady }: InteractiveEstimatorProps) {
  const [woodworkType, setWoodworkType] = useState<WoodworkType>('bowls');
  const [selectedWoodId, setSelectedWoodId] = useState<string>('oak');
  const [length, setLength] = useState<number>(2); // repurposed: bowls count (1-3) OR scratcher height (80-180) OR house depth (50-110)
  const [width, setWidth] = useState<number>(18); // repurposed: bowls height (10-40) OR platforms count (1-4) OR house width (40-90)
  const [customBespokeFinsih, setCustomBespokeFinish] = useState<boolean>(true);
  const [calculatedPrice, setCalculatedPrice] = useState<number>(0);
  const [calculatedWeight, setCalculatedWeight] = useState<number>(0);

  const selectedWood = WOOD_MATERIALS.find(w => w.id === selectedWoodId) || WOOD_MATERIALS[0];

  // Adjust parameters defaults when switching woodwork type
  useEffect(() => {
    if (woodworkType === 'bowls') {
      setLength(2); // default: 2 bowls
      setWidth(18); // default: 18cm height
    } else if (woodworkType === 'scratchers') {
      setLength(120); // default: 120cm height
      setWidth(2); // default: 2 platforms
    } else {
      setLength(75); // default: 75cm depth
      setWidth(60); // default: 60cm width
    }
  }, [woodworkType]);

  // Recalculate price and weight whenever parameters change
  useEffect(() => {
    let basePrice = 0;
    let baseWeight = 0; 

    if (woodworkType === 'bowls') {
      // length = number of bowls (1 to 3)
      // width = height of stand in cm (10 to 40)
      const bowlCount = length;
      const heightCm = width;
      
      baseWeight = 0.8 + (bowlCount * 0.6) + (heightCm * 0.04);
      basePrice = (20 + (bowlCount * 18) + (heightCm * 0.7)) * selectedWood.priceMultiplier;
      
      if (customBespokeFinsih) basePrice += 15; // Rubio coat surcharge
    } else if (woodworkType === 'scratchers') {
      // length = height of post in cm (80 to 180)
      // width = number of platforms (1 to 4)
      const heightCm = length;
      const platformsCount = width;

      baseWeight = 5 + (heightCm * 0.07) + (platformsCount * 1.8);
      basePrice = (45 + (heightCm * 0.45) + (platformsCount * 28)) * selectedWood.priceMultiplier;
      
      if (customBespokeFinsih) basePrice += 25; // premium Rubio finish on platforms
    } else {
      // length = house depth in cm (50 to 110)
      // width = house width in cm (40 to 90)
      const depthCm = length;
      const widthCm = width;

      baseWeight = (depthCm * widthCm * 0.004) + 4;
      basePrice = (70 + (depthCm * widthCm * 0.022)) * selectedWood.priceMultiplier;
      
      if (customBespokeFinsih) basePrice += 45; // premium weathering & charcoal fire treatment
    }

    setCalculatedPrice(Math.round(basePrice));
    setCalculatedWeight(Number(baseWeight.toFixed(1)));
  }, [woodworkType, selectedWoodId, length, width, customBespokeFinsih, selectedWood]);

  const handleApplyToContact = () => {
    let detailsString = '';
    if (woodworkType === 'bowls') {
      detailsString = `Informativna procjena: Drveno povišeno postolje za hranjenje (sadrži ${length} ugrađene zdjelice, visina postolja po mjeri: ${width} cm) od vrhunskog drva: ${selectedWood.nameCroatian}. Finiš: ${customBespokeFinsih ? 'Premium organsko Rubio® ulje' : 'Standardni mat premaz'}. Procijenjena cijena: cca ${calculatedPrice} €.`;
    } else if (woodworkType === 'scratchers') {
      detailsString = `Informativna procjena: Masivna drvena grebalica i penjalica (visina stupa: ${length} cm, s ukupno ${width} etaža/isturenih platformi) od drva: ${selectedWood.nameCroatian}. Finiš: ${customBespokeFinsih ? 'Organic Rubio® vosak' : 'Fino brušeno natur'}. Procijenjena cijena: cca ${calculatedPrice} €.`;
    } else {
      detailsString = `Informativna procjena: Ručno rađena premium kućica za pse/mačke (dubina: ${length} cm, širina: ${width} cm) od drva: ${selectedWood.nameCroatian}. Finiš klijent odabrao: ${customBespokeFinsih ? 'Japanska Shou Sugi Ban ugljena obrada plamenom + Rubio zaštita' : 'Natur premaz'}. Procijenjena cijena: cca ${calculatedPrice} €.`;
    }
    onEstimateReady(detailsString, calculatedPrice);
  };

  return (
    <section id="kalkulator" className="py-24 bg-[#fcfbfa] text-[#1d1a16] relative overflow-hidden">
      <div className="absolute left-[-20%] top-[-20%] w-[1000px] h-[1000px] bg-[#b88452]/4 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#b88452]">Prilagođena ručna izrada</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#1d1a16]">Konfiguracija i Planer Izrade Po Mjeri</h2>
          <p className="text-[#5e5445] text-sm font-sans">
            Kako bismo vam pomogli u vizualizaciji, kreirali smo ovaj jednostavan online planer. Odaberite željenu vrstu drveta, dimenzije i opremu te odmah pogledajte okvirnu procjenu vrijednosti vašeg budućeg unikata.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="estimator-interactive-board">
          {/* Left panel: Inputs controls */}
          <div className="lg:col-span-7 bg-white border border-[#dfd5c6]/60 p-8 rounded-2xl flex flex-col justify-between space-y-8 shadow-md">
            <div className="space-y-6">
              {/* Select Woodwork Category */}
              <div className="space-y-3">
                <label className="text-xs font-mono font-bold uppercase text-zinc-500 tracking-wider">
                  Koji unikat želite dizajnirati?
                </label>
                <div className="grid grid-cols-3 gap-3" id="estimator-type-selector">
                  <button
                    onClick={() => setWoodworkType('bowls')}
                    className={`p-4 rounded-xl border text-center transition-all cursor-pointer ${
                      woodworkType === 'bowls'
                        ? 'bg-[#faf8f5] border-[#b88452] text-[#1d1a16] shadow-md shadow-[#b88452]/5'
                        : 'bg-white border-stone-200 text-stone-500 hover:border-stone-300 hover:text-stone-800'
                    }`}
                  >
                    <span className="block text-xl mb-1">🥣</span>
                    <span className="text-xs font-serif font-bold block">Postolje Zdjelica</span>
                  </button>
                  <button
                    onClick={() => setWoodworkType('scratchers')}
                    className={`p-4 rounded-xl border text-center transition-all cursor-pointer ${
                      woodworkType === 'scratchers'
                        ? 'bg-[#faf8f5] border-[#b88452] text-[#1d1a16] shadow-md shadow-[#b88452]/5'
                        : 'bg-white border-stone-200 text-stone-500 hover:border-stone-300 hover:text-stone-800'
                    }`}
                  >
                    <span className="block text-xl mb-1">🐾</span>
                    <span className="text-xs font-serif font-bold block">Mačja Grebalica</span>
                  </button>
                  <button
                    onClick={() => setWoodworkType('houses')}
                    className={`p-4 rounded-xl border text-center transition-all cursor-pointer ${
                      woodworkType === 'houses'
                        ? 'bg-[#faf8f5] border-[#b88452] text-[#1d1a16] shadow-md shadow-[#b88452]/5'
                        : 'bg-white border-stone-200 text-stone-500 hover:border-stone-300 hover:text-stone-800'
                    }`}
                  >
                    <span className="block text-xl mb-1">🏠</span>
                    <span className="text-xs font-serif font-bold block">Eko Kućica</span>
                  </button>
                </div>
              </div>

              {/* Select Wood Material selection */}
              <div className="space-y-3">
                <label className="text-xs font-mono font-bold uppercase text-zinc-500 tracking-wider">
                  Odaberite vrstu drva
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3" id="estimator-wood-selector">
                  {WOOD_MATERIALS.map((wood) => (
                    <button
                      key={wood.id}
                      onClick={() => setSelectedWoodId(wood.id)}
                      className={`py-3 px-2 rounded-lg border text-center transition-all cursor-pointer ${
                        selectedWoodId === wood.id
                          ? 'bg-[#b88452] border-[#b88452] text-white font-bold shadow-md shadow-[#b88452]/20'
                          : 'bg-white border-stone-200 text-stone-600 hover:border-[#b88452]/30 hover:bg-[#faf8f5]/55'
                      }`}
                    >
                      <span className="text-xs tracking-wide block">{wood.nameCroatian}</span>
                      <span className={`text-[9px] block font-mono ${selectedWoodId === wood.id ? 'text-white/90' : 'text-[#b88452]'}`}>x {wood.priceMultiplier.toFixed(1)}</span>
                    </button>
                  ))}
                </div>
                
                {/* Wood Details Badge */}
                <motion.div
                  key={selectedWoodId}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[#faf8f5] border border-dashed border-[#dfd5c6]/80 p-4 rounded-xl text-xs leading-relaxed text-[#5e5445]"
                >
                  <p className="font-bold text-[#1d1a16]">
                    Svojstva drva {selectedWood.nameCroatian}:
                  </p>
                  <p className="mt-1 text-[#4a433a] font-sans">{selectedWood.colorDescription}</p>
                  <p className="mt-1 text-zinc-500 font-mono text-[10px]">
                    Gustoća: {selectedWood.density} | Idealno za: {selectedWood.bestFor}
                  </p>
                </motion.div>
              </div>

              {/* Sliders for Dimensions */}
              <div className="space-y-5">
                {/* Length Slider / Repurposed */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="uppercase text-zinc-500 font-bold">
                      {woodworkType === 'bowls' && 'Broj Ugrađenih Posuda'}
                      {woodworkType === 'scratchers' && 'Visina Grebalice (Trupca)'}
                      {woodworkType === 'houses' && 'Dubina Kućice (Vanjska)'}
                    </span>
                    <span className="text-[#1d1a16] font-bold">
                      {length} {woodworkType === 'bowls' ? 'posude' : 'cm'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={woodworkType === 'bowls' ? 1 : woodworkType === 'scratchers' ? 80 : 50}
                    max={woodworkType === 'bowls' ? 3 : woodworkType === 'scratchers' ? 180 : 110}
                    step={woodworkType === 'bowls' ? 1 : 5}
                    value={length}
                    onChange={(e) => setLength(Number(e.target.value))}
                    className="w-full accent-[#b88452] cursor-pointer bg-stone-100 h-1.5 rounded-lg appearance-none"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-stone-400">
                    <span>
                      {woodworkType === 'bowls' ? '1 zdjelica' : woodworkType === 'scratchers' ? 'Obična 80cm' : 'Mala 50cm'}
                    </span>
                    <span>
                      {woodworkType === 'bowls' ? 'Trostruka (3)' : woodworkType === 'scratchers' ? 'Visoka 180cm' : 'Velika 110cm'}
                    </span>
                  </div>
                </div>

                {/* Width Slider / Repurposed */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="uppercase text-zinc-500 font-bold">
                      {woodworkType === 'bowls' && 'Visina Postolja od Tla'}
                      {woodworkType === 'scratchers' && 'Broj Etaža s Jastučićima'}
                      {woodworkType === 'houses' && 'Širina Kućice (Vanjska)'}
                    </span>
                    <span className="text-[#1d1a16] font-bold">
                      {width} {woodworkType === 'scratchers' ? 'etaže' : 'cm'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={woodworkType === 'bowls' ? 10 : woodworkType === 'scratchers' ? 1 : 40}
                    max={woodworkType === 'bowls' ? 40 : woodworkType === 'scratchers' ? 4 : 90}
                    step={woodworkType === 'scratchers' ? 1 : 5}
                    value={width}
                    onChange={(e) => setWidth(Number(e.target.value))}
                    className="w-full accent-[#b88452] cursor-pointer bg-stone-100 h-1.5 rounded-lg appearance-none"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-stone-400">
                    <span>
                      {woodworkType === 'bowls' ? 'Nisko 10cm' : woodworkType === 'scratchers' ? '1 etaža' : 'Usko 40cm'}
                    </span>
                    <span>
                      {woodworkType === 'bowls' ? 'Čak 40cm povišeno' : woodworkType === 'scratchers' ? '4 etaže' : 'Široko 90cm'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Checklist Option with Toggle */}
              <div className="flex items-center justify-between p-4 bg-[#faf8f5] rounded-xl border border-[#dfd5c6]/60">
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-[#1d1a16] block">
                    {woodworkType === 'houses' ? 'Shou Sugi Ban® obrada plamenom' : 'Premium organski Rubio® vosak'}
                  </span>
                  <span className="text-[10px] text-[#5e5445] block">
                    {woodworkType === 'houses' 
                      ? 'Drevna japanska tehnika pougljenjivanja drveta za maksimalnu obranu od vlage i trajnost.' 
                      : 'Izrazito glatka vodoodbojna eko-zaštita dobivena miješanjem čistog pčelinjeg voska i ulja.'}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setCustomBespokeFinish(!customBespokeFinsih)}
                  className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors shrink-0 ${
                    customBespokeFinsih ? 'bg-[#b88452]' : 'bg-stone-200'
                  }`}
                >
                  <motion.div
                    layout
                    className="bg-white w-4 h-4 rounded-full shadow-md"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    style={{ x: customBespokeFinsih ? 24 : 0 }}
                  />
                </button>
              </div>
            </div>

            <div className="pt-4 text-stone-500 text-[10px] font-mono flex items-center gap-1.5 leading-relaxed">
              <ShieldCheck className="w-4 h-4 text-[#b88452] shrink-0" />
              <span>* Izračun cijena je orijentirnog karaktera radi izrade budžeta. Svaki komad prilagođava se točnim željama klijenta.</span>
            </div>
          </div>

          {/* Right panel: Live estimation score card with custom visuals */}
          <div className="lg:col-span-5 bg-white border border-[#dfd5c6]/60 text-[#1d1a16] p-8 rounded-2xl flex flex-col justify-between overflow-hidden relative shadow-md">
            
            {/* Visual simulation of block dimensions */}
            <div className="h-44 flex items-center justify-center bg-[#faf8f5] rounded-2xl border border-[#dfd5c6]/40 p-6 relative overflow-hidden shrink-0">
              {/* Graphic Title */}
              <span className="absolute top-3 left-3 text-[9px] font-mono tracking-widest text-[#b88452] uppercase">
                Interaktivni model
              </span>

              {/* Dynamic Design visualization */}
              <div className="relative w-full h-full flex items-center justify-center">
                {woodworkType === 'bowls' && (
                  <div className="flex flex-col items-center justify-center w-full">
                    {/* The wooden stand block */}
                    <motion.div
                      animate={{
                        height: 20 + (width * 0.8), // height proportional
                        width: 100 + (length * 40) // length proportional to bowl quantity
                      }}
                      className="bg-[#664b38] rounded-xl border border-[#b88452] relative flex items-center justify-center gap-3 px-3 shadow-md"
                    >
                      {/* Represent bowls based on count */}
                      {Array.from({ length: length }).map((_, bIdx) => (
                        <div 
                           key={bIdx}
                           className="w-8 h-8 rounded-full bg-zinc-150 border border-zinc-300 flex items-center justify-center text-[10px] shadow-inner"
                        >
                          💿
                        </div>
                      ))}
                      
                      {/* Mini legs underneath */}
                      <div className="absolute -bottom-6 left-3 w-2 h-6 bg-[#4c3525] rounded-b-md" />
                      <div className="absolute -bottom-6 right-3 w-2 h-6 bg-[#4c3525] rounded-b-md" />
                    </motion.div>
                  </div>
                )}

                {woodworkType === 'scratchers' && (
                  <div className="flex items-end justify-center h-full w-full relative">
                    {/* Basa */}
                    <div className="absolute bottom-0 w-24 h-2 bg-[#4c3525] border border-[#b88452]/40 rounded" />
                    
                    {/* Trunk */}
                    <motion.div 
                      animate={{
                        height: (length * 0.70) // post height
                      }}
                      className="w-4 bg-[#664b38] border-l border-r border-[#b88452] absolute bottom-1 flex flex-col justify-between"
                    >
                      {/* Jute wraps lines representation */}
                      <div className="h-px w-full bg-yellow-600/30 font-mono" />
                      <div className="h-px w-full bg-yellow-600/30" />
                      <div className="h-px w-full bg-yellow-600/30" />
                      <div className="h-px w-full bg-yellow-600/30" />
                      <div className="h-px w-full bg-yellow-600/30" />
                    </motion.div>

                    {/* Platforms representing width state (count 1 to 4) */}
                    <div className="absolute bottom-1 w-full h-full flex flex-col-reverse items-center justify-start pointer-events-none">
                      {Array.from({ length: width }).map((_, pIdx) => (
                        <motion.div
                          key={pIdx}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          style={{
                            marginBottom: 20 + (pIdx * 25),
                            width: 32 - (pIdx * 3)
                          }}
                          className="h-2.5 bg-[#4c3525] border-t border-[#b88452] rounded shadow-md flex items-center justify-center"
                        >
                          <div className="w-full h-1 bg-white/20 rounded" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {woodworkType === 'houses' && (
                  <motion.div
                    animate={{
                      scaleY: width / 65,
                      scaleX: length / 75
                    }}
                    className="flex flex-col items-center justify-center relative w-24 h-24"
                  >
                    {/* Gabled roof */}
                    <div className="w-0 h-0 border-l-[28px] border-l-transparent border-r-[28px] border-r-transparent border-b-[24px] border-b-[#b88452]" />
                    {/* Body container */}
                    <div className="w-12 h-14 bg-[#4c3525] border border-[#b88452] rounded-sm relative shadow-md">
                      {/* Dog door entry */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-8 bg-[#faf8f5] rounded-t-full border border-[#b88452]/25" />
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Calculations specs list */}
            <div className="my-8 space-y-5" id="estimator-calculations-box">
              <div className="flex justify-between items-end border-b border-stone-105 pb-3">
                <span className="text-stone-400 text-xs font-mono uppercase">PROIZVOD:</span>
                <span className="text-[#1d1a16] text-sm font-bold font-serif">
                  {woodworkType === 'bowls' && 'Ergonomsko Postolje Zdjelica'}
                  {woodworkType === 'scratchers' && 'Jedinstvena Mačja Grebalica'}
                  {woodworkType === 'houses' && 'Eko Drvena Kućica'}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="text-stone-400 text-[10px] font-mono tracking-wider block uppercase">
                    Procjenjena masa
                  </span>
                  <div className="flex items-center gap-1.5 text-stone-700">
                    <Scale className="w-4 h-4 text-[#b88452]" />
                    <span className="text-sm font-bold font-mono">cca {calculatedWeight} kg</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-stone-400 text-[10px] font-mono tracking-wider block uppercase">
                    Materijal izrade
                  </span>
                  <div className="flex items-center gap-1.5 text-stone-700">
                    <Compass className="w-4 h-4 text-[#b88452]" />
                    <span className="text-sm font-bold font-serif">{selectedWood.nameCroatian}</span>
                  </div>
                </div>
              </div>

              <div className="h-[1px] bg-stone-105" />

              {/* Price Tag Output */}
              <div className="space-y-1 text-center bg-[#faf8f5] py-4 px-2 rounded-xl border border-[#dfd5c6]/60">
                <span className="text-[#b88452] text-xs font-mono tracking-widest block uppercase font-bold">
                  Procijenjena Vrijednost unikatne izrade
                </span>
                <div className="text-3xl sm:text-4xl font-serif font-extrabold text-[#1d1a16] py-1">
                  ~ {calculatedPrice.toLocaleString('hr-HR')} €
                </div>
                <span className="text-[10px] text-stone-400 block font-mono">
                  Informativna vrijednost ručne izrade i materijala | Uključene vrhunske posude
                </span>
              </div>
            </div>

            <button
              id="calculator-submit-btn"
              onClick={handleApplyToContact}
              className="w-full py-4 bg-[#b88452] hover:bg-[#a3744c] text-white font-bold text-xs tracking-widest uppercase rounded-lg shadow-lg shadow-[#b88452]/20 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              Pošalji konfiguraciju u kontakt upit
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '../data';
import { Product } from '../types';
import { Clock, Hammer, DollarSign, X, ArrowRight, Star } from 'lucide-react';

interface GalleryProps {
  onInquire: (productName: string) => void;
}

type CategoryFilter = 'all' | 'bowls' | 'scratchers' | 'houses' | 'decorations';

export default function Gallery({ onInquire }: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = [
    { id: 'all', Croatian: 'Svi proizvodi' },
    { id: 'bowls', Croatian: 'Postolja za Zdjelice' },
    { id: 'scratchers', Croatian: 'Grebalice za Mačke' },
    { id: 'houses', Croatian: 'Kućice i Kreveti' },
    { id: 'decorations', Croatian: 'Dekoracije za Dom' }
  ];

  const filteredProducts = activeFilter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeFilter);

  return (
    <section id="galerija" className="py-24 bg-[#faf8f5] text-[#1d1a16] relative overflow-hidden">
      {/* Decorative ambient spots */}
      <div className="absolute top-[20%] left-[-10%] w-96 h-96 bg-[#b88452]/3 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-96 h-96 bg-[#b88452]/3 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#b88452]">Naša Djela i Reference</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#1d1a16]">Galerija Unikatnih Proizvoda</h2>
          <p className="text-[#5e5445] text-sm md:text-base font-sans">
            Pregledajte naše unikatne radove izrađene s dubokim poštovanjem prema drvu. Odaberite povišena ergonomska postolja za zdjelice, luksuzno oslikane kućica za pse ili raskošne prirodne grebalice za mačke.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" id="gallery-category-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`filter-btn-${cat.id}`}
              onClick={() => setActiveFilter(cat.id as CategoryFilter)}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-[#b88452] text-white shadow-lg shadow-[#b88452]/20'
                  : 'bg-white text-[#5e5445] hover:bg-stone-50 hover:text-[#1d1a16] border border-[#dfd5c6]/60 shadow-sm'
              }`}
            >
              {cat.Croatian}
            </button>
          ))}
        </div>

        {/* Products Grid with Layout Animations */}
        <motion.div
          id="gallery-products-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                id={`gallery-card-${product.id}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl overflow-hidden border border-[#dfd5c6]/60 hover:border-[#b88452]/40 hover:shadow-2xl transition-all duration-300 flex flex-col group cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                {/* Visual Thumbnail Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-50 shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-100"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-[#b88452]/15 text-[#b88452] px-3 py-1 rounded-lg text-[9px] font-mono font-bold tracking-wider uppercase shadow-sm">
                    {product.categoryCroatian}
                  </div>
                </div>

                {/* Info Area */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-bold text-[#1d1a16] leading-tight group-hover:text-[#b88452] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-[#5e5445] text-xs line-clamp-3 leading-relaxed font-sans">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-[#7c7263]">
                    <div className="flex items-center gap-1.5 bg-transparent">
                      <Clock className="w-3.5 h-3.5 text-[#b88452]" />
                      <span>{product.completionTime}</span>
                    </div>
                    <div className="text-[#b88452] font-bold">
                      Detaljnije &rarr;
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Overlay for Expanded Details */}
        <AnimatePresence>
          {selectedProduct && (
            <div
              id="gallery-modal"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
            >
              {/* Dark translucent backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProduct(null)}
                className="fixed inset-0 bg-stone-900/60 backdrop-blur-md cursor-pointer"
              />

              {/* Modal Body Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="relative bg-white border border-[#b88452]/20 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col md:flex-row z-10 text-[#1d1a16]"
              >
                {/* Close Button */}
                <button
                  id="modal-close-btn"
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 bg-white/95 hover:bg-stone-50 backdrop-blur-md rounded-full p-2 border border-stone-200 hover:border-[#b88452] text-stone-700 z-20 transition-all cursor-pointer"
                  aria-label="Zatvori"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Left Side: Photo panel */}
                <div className="md:w-1/2 bg-stone-50 relative h-64 md:h-auto min-h-[300px]">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    id="modal-detail-img"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent md:bg-none" />
                </div>

                {/* Right Side: Data specifications panel */}
                <div className="md:w-1/2 p-8 overflow-y-auto max-h-[90vh] md:max-h-none space-y-6" id="modal-specification-panel">
                  <div className="space-y-2">
                    <span className="text-[#b88452] text-[10px] font-mono font-bold tracking-widest uppercase bg-[#b88452]/10 border border-[#b88452]/25 px-2 py-0.5 rounded-lg">
                      Obiteljski unikat / {selectedProduct.categoryCroatian}
                    </span>
                    <h3 className="font-serif text-2xl font-bold tracking-tight">
                      {selectedProduct.name}
                    </h3>
                  </div>

                  <p className="text-[#5e5445] text-sm leading-relaxed font-sans">
                    {selectedProduct.description}
                  </p>

                  {/* Fact sheet properties */}
                  <div className="space-y-3 bg-[#fcfbfa] p-4 rounded-xl border border-[#dfd5c6]/60">
                    <div className="flex items-start justify-between text-xs font-mono">
                      <span className="text-zinc-400">KVALITETA MATERIJALA:</span>
                      <span className="text-[#1d1a16] text-right font-bold max-w-[180px]">{selectedProduct.materialUsed}</span>
                    </div>
                    <div className="h-[1px] bg-stone-100" />
                    <div className="flex items-start justify-between text-xs font-mono">
                      <span className="text-zinc-400">DIMENZIJE ILI PO MJERI:</span>
                      <span className="text-[#5e5445] text-right font-semibold">{selectedProduct.dimensionsInfo}</span>
                    </div>
                    <div className="h-[1px] bg-stone-100" />
                    <div className="flex items-start justify-between text-xs font-mono">
                      <span className="text-zinc-400">ROK IZRADE:</span>
                      <span className="text-[#5e5445] text-right font-semibold">{selectedProduct.completionTime}</span>
                    </div>
                    <div className="h-[1px] bg-stone-100" />
                    <div className="flex items-start justify-between text-xs font-mono">
                      <span className="text-zinc-400">PROCIJENJENA CIJENA:</span>
                      <span className="text-[#b88452] text-right font-extrabold">{selectedProduct.priceRange}</span>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2">
                    <h4 className="font-serif text-xs uppercase text-[#b88452] tracking-widest font-bold">Standardi kvalitete:</h4>
                    <ul className="text-xs space-y-1.5 text-[#5e5445]">
                      {selectedProduct.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 font-sans">
                          <span className="text-[#b88452] font-bold shrink-0">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Trigger Direct Inquire Action */}
                  <button
                    id="modal-inquire-btn"
                    onClick={() => {
                      onInquire(selectedProduct.name);
                      setSelectedProduct(null);
                    }}
                    className="w-full py-4 bg-[#b88452] hover:bg-[#a3744c] text-white font-bold text-xs tracking-widest uppercase rounded-lg shadow-lg shadow-[#b88452]/10 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Pošalji upit za ovaj proizvod
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

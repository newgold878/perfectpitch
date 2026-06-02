/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Hammer } from 'lucide-react';

interface ContactProps {
  preloadedMessage?: string;
}

export default function Contact({ preloadedMessage }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    woodworkType: 'Drugo / Više usluga',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Auto-fill form from preloaded messages when changed (e.g. from gallery or calculator)
  useEffect(() => {
    if (preloadedMessage) {
      setFormData((prev) => ({
        ...prev,
        message: preloadedMessage,
        woodworkType: preloadedMessage.toLowerCase().includes('zdjelic') || preloadedMessage.toLowerCase().includes('stalak') || preloadedMessage.toLowerCase().includes('postolj')
          ? 'Povišena postolja za zdjelice'
          : preloadedMessage.toLowerCase().includes('grebalic') || preloadedMessage.toLowerCase().includes('cat')
          ? 'Masivne mačje grebalice'
          : preloadedMessage.toLowerCase().includes('kućic') || preloadedMessage.toLowerCase().includes('krevet')
          ? 'Eko kućice i kreveti'
          : preloadedMessage.toLowerCase().includes('dekoracij') || preloadedMessage.toLowerCase().includes('pladn')
          ? 'Unikatne drvene dekoracije'
          : 'Drugo / Više kućnih projekata'
      }));
    }
  }, [preloadedMessage]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Ime i prezime je obavezno polje';
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail adresa je obavezna polje';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Unesite ispravnu e-mail adresu';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Broj telefona je obavezan polje';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Molimo opišite projekt s barem 10 znakova';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      // Simulates sending to server
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      woodworkType: 'Drugo / Više usluga',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="kontakt" className="py-24 bg-[#faf8f5] relative overflow-hidden">
      {/* Visual top angle decoration matching standard ivory line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-stone-100 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 pt-12">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#b88452]">Besplatna izmjera i projekt</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#1d1a16]">Kontaktirajte Nas</h2>
          <p className="text-[#5e5445] text-sm font-sans">
            Pošaljite nam opis vašeg projekta ili učitajte željene dimenzije iz kalkulatora. Javit ćemo vam se u roku od 24 sata kako bismo dogovorili termin izmjere.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start" id="contact-wrapper">
          
          {/* Left Block: Communication cards & location */}
          <div className="lg:col-span-5 space-y-8" id="contact-info-cards">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#1d1a16]">Perfect Finish</h3>
              <p className="text-sm text-[#5e5445] font-sans leading-relaxed">
                Ručna stolarija i obiteljski studio iz Samobora, specijaliziran za unikatne, ergonomski projektirane drvene proizvode za kućne ljubimce i vrhunske detalje za dom.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {/* Phone Card */}
              <div className="flex items-start gap-4 p-5 bg-white border border-[#dfd5c6]/60 rounded-2xl shadow-sm hover:border-[#b88452]/40 hover:shadow-xl transition-all duration-300">
                <div className="w-10 h-10 bg-[#b88452]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#b88452]" />
                </div>
                <div>
                  <span className="text-xs uppercase text-stone-400 font-mono tracking-wider block">Nazovite nas direktno</span>
                  <a href="tel:+385912345678" className="text-sm font-bold font-mono text-[#1d1a16] hover:text-[#b88452] transition-colors block mt-1">
                    +385 (0)91 234 5678
                  </a>
                  <span className="text-[11px] text-zinc-500 font-sans block mt-0.5">Tehnički savjeti i izmjere</span>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-start gap-4 p-5 bg-white border border-[#dfd5c6]/60 rounded-2xl shadow-sm hover:border-[#b88452]/40 hover:shadow-xl transition-all duration-300">
                <div className="w-10 h-10 bg-[#b88452]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#b88452]" />
                </div>
                <div>
                  <span className="text-xs uppercase text-stone-400 font-mono tracking-wider block">Pošaljite nacrte ili slike</span>
                  <a href="mailto:info@perfectfinish.hr" className="text-sm font-bold font-mono text-[#1d1a16] hover:text-[#b88452] transition-colors block mt-1">
                    info@perfectfinish.hr
                  </a>
                  <span className="text-[11px] text-zinc-500 font-sans block mt-0.5">Ponude i 3D skice u 24 sata</span>
                </div>
              </div>

              {/* Address Card */}
              <div className="flex items-start gap-4 p-5 bg-white border border-[#dfd5c6]/60 rounded-2xl shadow-sm hover:border-[#b88452]/40 hover:shadow-xl transition-all duration-300">
                <div className="w-10 h-10 bg-[#b88452]/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#b88452]" />
                </div>
                <div>
                  <span className="text-xs uppercase text-stone-400 font-mono tracking-wider block">Stolarska radionica i ured</span>
                  <span className="text-sm font-bold text-[#4a433a] block mt-1">
                    Ulica Hrastovog Goda 12, Samobor
                  </span>
                  <span className="text-[11px] text-zinc-500 font-sans block mt-0.5">Dolazak uz najavu telefonom</span>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="flex items-start gap-4 p-5 bg-white border border-[#dfd5c6]/60 rounded-2xl shadow-sm hover:border-[#b88452]/40 hover:shadow-xl transition-all duration-300">
                <div className="w-10 h-10 bg-[#b88452]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#b88452]" />
                </div>
                <div>
                  <span className="text-xs uppercase text-stone-400 font-mono tracking-wider block">Radno vrijeme</span>
                  <span className="text-sm font-bold text-[#4a433a] block mt-1">
                    Pon - Pet: 08:00 do 17:00 | Sub: 09:00 do 13:00
                  </span>
                  <span className="text-[11px] text-zinc-500 font-sans block mt-0.5">Nedjeljom i blagdanima zatvoreno</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Interactive Form Panel */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-[#dfd5c6]/60 rounded-2xl shadow-xl relative min-h-[450px]" id="contact-form-panel">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form-fields"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  noValidate
                >
                  <h4 className="font-serif text-xl font-bold text-[#1d1a16] border-b border-stone-100 pb-4">
                    Pošaljite izravni upit
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name-input" className="text-xs font-mono font-bold uppercase text-[#5e5445]">Ime i prezime *</label>
                      <input
                        id="name-input"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Npr. Marko Horvat"
                        className={`w-full px-4 py-3 bg-[#faf8f5] rounded-lg border text-sm font-sans focus:outline-none focus:ring-1 focus:ring-[#b88452] focus:bg-white focus:border-[#b88452]/40 transition-all ${
                          errors.name ? 'border-red-400 text-red-900 placeholder-red-900/30' : 'border-stone-200 text-[#1d1a16] placeholder-[#7c7263]/60'
                        }`}
                      />
                      {errors.name && <p className="text-xs text-red-500 font-sans">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email-input" className="text-xs font-mono font-bold uppercase text-[#5e5445]">E-mail adresa *</label>
                      <input
                        id="email-input"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="marko@email.com"
                        className={`w-full px-4 py-3 bg-[#faf8f5] rounded-lg border text-sm font-sans focus:outline-none focus:ring-1 focus:ring-[#b88452] focus:bg-white focus:border-[#b88452]/40 transition-all ${
                          errors.email ? 'border-red-400 text-red-900 placeholder-red-900/30' : 'border-stone-200 text-[#1d1a16] placeholder-[#7c7263]/60'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-red-500 font-sans">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="space-y-2">
                      <label htmlFor="phone-input" className="text-xs font-mono font-bold uppercase text-[#5e5445]">Broj mobitela/telefona *</label>
                      <input
                        id="phone-input"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Npr. +385 91 234 5678"
                        className={`w-full px-4 py-3 bg-[#faf8f5] rounded-lg border text-sm font-sans focus:outline-none focus:ring-1 focus:ring-[#b88452] focus:bg-white focus:border-[#b88452]/40 transition-all ${
                          errors.phone ? 'border-red-400 text-red-900 placeholder-red-900/30' : 'border-stone-200 text-[#1d1a16] placeholder-[#7c7263]/60'
                        }`}
                      />
                      {errors.phone && <p className="text-xs text-red-500 font-sans">{errors.phone}</p>}
                    </div>

                    {/* Category Dropdown */}
                    <div className="space-y-2">
                      <label htmlFor="category-select" className="text-xs font-mono font-bold uppercase text-[#5e5445]">Kategorija projekta</label>
                      <select
                        id="category-select"
                        value={formData.woodworkType}
                        onChange={(e) => setFormData({ ...formData, woodworkType: e.target.value })}
                        className="w-full px-4 py-3 bg-[#faf8f5] text-[#1d1a16] rounded-lg border border-stone-200 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-[#b88452] focus:bg-white focus:border-[#b88452]/40 transition-all cursor-pointer"
                      >
                        <option>Povišena postolja za zdjelice</option>
                        <option>Masivne mačje grebalice</option>
                        <option>Eko kućice i kreveti</option>
                        <option>Unikatne drvene dekoracije</option>
                        <option>Drugo / Više kućnih projekata</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Detail Box */}
                  <div className="space-y-2">
                    <label htmlFor="message-box" className="text-xs font-mono font-bold uppercase text-[#5e5445]">Opis željenog rada / Dimenzije i drvo *</label>
                    <textarea
                      id="message-box"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      placeholder="Molimo opišite ime vašeg ljubimca, pasminu (kako bismo izračunali idealnu ergonomsku visinu), željene dimenzije, vrstu drva, posebne natpise s imenom te premaz..."
                      className={`w-full px-4 py-3 bg-[#faf8f5] rounded-lg border text-sm font-sans focus:outline-none focus:ring-1 focus:ring-[#b88452] focus:bg-white focus:border-[#b88452]/40 transition-all ${
                        errors.message ? 'border-red-400 text-red-900 placeholder-red-900/30' : 'border-stone-200 text-[#1d1a16] placeholder-[#7c7263]/60'
                      }`}
                    />
                    {errors.message && <p className="text-xs text-red-500 font-sans">{errors.message}</p>}
                  </div>

                  <button
                    id="form-submit-button"
                    type="submit"
                    className="w-full py-4 bg-[#b88452] hover:bg-[#a3744c] text-white font-bold text-xs tracking-widest uppercase rounded-lg shadow-lg shadow-[#b88452]/10 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Uputite zahtjev obitelji Perfect Finish
                    <Send className="w-4 h-4" />
                  </button>
                </motion.form>
              ) : (
                // Beautiful confirmation card
                <motion.div
                  key="form-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center py-12 text-center space-y-6"
                >
                  <div className="w-16 h-16 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center border border-green-200/35">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-serif text-2xl font-bold text-[#1d1a16]">Uspješno poslano!</h4>
                    <p className="text-[#4a433a] text-sm max-w-md font-sans leading-relaxed">
                      Poštovani <strong>{formData.name}</strong>, zaprimili smo vaš upit za projekt u kategoriji <strong>{formData.woodworkType}</strong>.
                    </p>
                    <p className="text-[#7c7263] text-xs max-w-sm font-sans leading-relaxed">
                      Zabilježili smo vaše specifikacije. Naš glavni stolar će vas nazvati na broj <strong>{formData.phone}</strong> unutar 24 sata kako bismo besplatno dogovorili termin pregleda i izmjere na vašem objektu.
                    </p>
                  </div>

                  <button
                    id="form-reset-button"
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold uppercase tracking-wider rounded-lg border border-stone-200 transition-all cursor-pointer"
                  >
                    Uputi drugi zahtjev
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

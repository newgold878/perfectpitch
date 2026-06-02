/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data';
import { Hammer, Trees, Hand, CheckCircle2 } from 'lucide-react';

interface AboutProps {
  workshopImage: string;
}

export default function About({ workshopImage }: AboutProps) {
  const values = [
    {
      icon: <Trees className="w-6 h-6 text-[#b88452] group-hover:text-white transition-colors" />,
      title: 'Čisti Prirodni Materijali',
      text: 'Koristimo isključivo zdravo, održivo domaće drvo (hrast, orah, jasen) koje jamči stopostotnu čvrstoću i stabilnost.'
    },
    {
      icon: <Hammer className="w-6 h-6 text-[#b88452] group-hover:text-white transition-colors" />,
      title: 'Ergonomska Prilagodba',
      text: 'Svako postolje prilagođavamo visini njuškice vašeg ljubimca radi sprječavanja pritiska na kralježnicu i olakšanog gutanja.'
    },
    {
      icon: <Hand className="w-6 h-6 text-[#b88452] group-hover:text-white transition-colors" />,
      title: 'Netoksični Premazi',
      text: 'Naš finiš s organskim voskom i Rubio uljem bez VOC kemikalija dobio je europski certifikat sigurnosti hrane i igračaka.'
    }
  ];

  return (
    <section id="onama" className="py-24 bg-[#fcfbfa] relative overflow-hidden">
      {/* Absolute Decorative Graphic */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-[#b88452]/4 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#b88452]/4 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Intro Grid: Story & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Artisan Workshop Image */}
          <motion.div
            id="about-visual-group"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="p-3 border border-[#dfd5c6]/60 bg-white rounded-2xl shadow-xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              <img
                src={workshopImage}
                alt="Perfect Finish stolarska radionica"
                referrerPolicy="no-referrer"
                className="w-full h-auto aspect-[3/4] object-cover rounded-xl filter brightness-100 hover:brightness-105 transition-all duration-700"
                id="about-workshop-img"
              />
              <div className="absolute -bottom-6 -right-6 bg-white text-[#1d1a16] p-6 rounded-2xl border border-[#b88452]/20 shadow-2xl max-w-xs text-center">
                <span className="text-3xl font-serif font-extrabold text-[#b88452] block">20+</span>
                <span className="text-[10px] uppercase tracking-widest font-mono text-zinc-500">Godina obiteljske stolarske tradicije</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Text Story */}
          <div className="lg:col-span-7 space-y-8" id="about-story-text">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#b88452]">
                O nama
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#1d1a16] tracking-tight leading-tight">
                Spajamo strast prema drvetu i beskrajnu ljubav prema životinjama.
              </h2>
            </div>

            <div className="space-y-4 text-[#4a433a] text-sm md:text-base leading-relaxed font-sans">
              <p>
                <strong>Perfect Finish</strong> je mali hrvatski brend nastao iz iskrene ljubavi prema drvetu, pažljivo oblikovanim detaljima i našim četveronožnim suputnicima. Ručno izrađujemo unikatne, luksuzne proizvode za kućne ljubimce i dom, spajajući milimetarsku funkcionalnost, vrhunsku trajnost i prirodnu estetiku.
              </p>
              <p>
                Svaki pojedini komad drva prolazi kroz dugotrajan i pedantan proces ručne obrade - od pažljivog odabira sušenih godova slavonskog hrasta do preciznog plamenog paljenja. Zašto? Jer čvrsto vjerujemo da pravi, <span className="text-[#b88452] font-semibold">besprijekoran završni dodir ("perfect finish")</span> čini onu ključnu estetsku i kvalitativnu razliku koju ćete vidjeti i vi, a osjetiti vaši ljubimci.
              </p>
            </div>

            {/* Micro badges of values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#b88452]" />
                <span className="text-[#4a433a] text-sm font-medium">100% ručni rad iz Samobora</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#b88452]" />
                <span className="text-[#4a433a] text-sm font-medium">100% organska Rubio Monocoat ulja</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#b88452]" />
                <span className="text-[#4a433a] text-sm font-medium">Ergonomski kutovi po fizionomiji pasa</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#b88452]" />
                <span className="text-[#4a433a] text-sm font-medium">Čvrste konstrukcije otporne na prevrtanje</span>
              </div>
            </div>
          </div>

        </div>

        {/* Values Block */}
        <div className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-8" id="about-values">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-[#dfd5c6]/60 hover:shadow-xl hover:border-[#b88452]/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-[#b88452]/10 group-hover:bg-[#b88452] rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                {v.icon}
              </div>
              <h3 className="text-lg font-serif font-bold text-[#1d1a16] mb-2 group-hover:text-[#b88452] transition-colors">{v.title}</h3>
              <p className="text-[#5e5445] text-sm leading-relaxed">{v.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Animated Process Section */}
        <div id="working-process" className="mt-32 border-t border-zinc-200 pt-20">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#b88452]">Kako nastaje magija</span>
            <h2 className="text-3xl font-serif font-bold text-[#1d1a16]">Od Nacrta do Savršenog Završetka</h2>
            <p className="text-[#5e5445] text-sm font-sans">
              Pedantno isplanirani koraci jamče da će svaki proizvod, bilo to maleni stalak ili složena grebalica, savršeno odgovarati potrebama i anatomiji vašeg ljubimca.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8" id="process-steps-list">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Visual Line connector for desktop */}
                {idx < 4 && (
                  <div className="hidden md:block absolute top-7 left-1/2 right-[-1/2] w-full h-[1px] bg-gradient-to-r from-[#b88452]/30 to-transparent z-0 pointer-events-none" />
                )}
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-white border-2 border-[#b88452] text-[#b88452] rounded-full flex items-center justify-center font-serif font-extrabold text-base mb-6 shadow-md hover:scale-110 hover:bg-[#b88452] hover:text-white transition-all duration-300">
                    {step.step}
                  </div>
                  <h4 className="font-serif font-bold text-sm text-[#1d1a16] mb-2">{step.title}</h4>
                  <p className="text-[#5e5445] text-xs leading-relaxed max-w-[200px]">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

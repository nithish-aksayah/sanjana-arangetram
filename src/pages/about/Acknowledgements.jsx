import React from 'react';
import { motion } from 'framer-motion';
import DustParticles from '../../components/animations/DustParticles';

const fadeUp = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-30px" },
  transition: {
    duration: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.3 : 0.5,
    ease: "easeOut"
  },
};

const acknowledgementsData = [
  {
    category: 'Costumes',
    person: 'Shanti Tailors',
    location: 'Chennai, India'
  },
  {
    category: 'Makeup',
    person: 'Anjali Mohavir',
    location: 'Atlanta, Georgia'
  },
  {
    category: 'Invitations, Print Materials,\nWebsite & Slideshow',
    person: 'Sudhaan',
    location: 'Coimbatore, India'
  },
  {
    category: 'Event Décor',
    person: 'Anu\nAR Dazzle Events',
    location: 'Cumming, Georgia'
  },
  {
    category: 'Photography & Videography',
    person: 'Venkat Kattua',
    location: 'Alpharetta, Georgia'
  },
  {
    category: 'Theatre Event Manager',
    person: 'Alison Greer',
    location: 'Gas South Theatre'
  }
];

const Acknowledgements = () => {
  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] flex items-end pb-16 pt-32 overflow-hidden">
        <div className="absolute inset-0">
          <DustParticles />
          <img
            src="/images/sanjana-about.webp"
            alt="Acknowledgements Hero"
            className="w-full h-full object-cover opacity-60"
            style={{ objectPosition: 'center -170px' }}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        </div>
        <div className="container-luxury relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-[#D4AF37] leading-tight mb-6"
          >
            Acknowledgements
          </motion.h1>
          <motion.p
            {...fadeUp}
            className="text-white/80 text-base md:text-xl max-w-3xl mx-auto italic font-serif leading-relaxed px-2"
          >
            "With heartfelt gratitude to everyone whose encouragement, dedication, and support helped make this Arangetram possible."
          </motion.p>
        </div>
      </section>

      {/* ── PEOPLE GRID ── */}
      <section className="section-padding bg-[#0A0505]">
        <div className="container-luxury max-w-5xl">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
             <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
                People Behind the Celebration
             </h2>
             <div className="w-16 h-px bg-[#D4AF37] mx-auto opacity-50" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {acknowledgementsData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-[#D4AF37]/30 rounded-xl p-8 flex flex-col items-center text-center bg-black/40 hover:bg-[#D4AF37]/5 transition-colors duration-500"
              >
                <h3 className="text-[11px] uppercase tracking-[0.3em] text-[#D4AF37] font-bold mb-4 whitespace-pre-line">
                  {item.category}
                </h3>
                <p className="font-serif text-2xl text-white mb-2 whitespace-pre-line">
                  {item.person}
                </p>
                {item.location && (
                  <p className="text-white/60 text-sm tracking-wider uppercase font-sans">
                    {item.location}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIAL THANKS ── */}
      <section className="py-24 bg-black relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
        <div className="container-luxury max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-[#D4AF37] mb-12">
              Special Thanks
            </h2>
            <div className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed font-serif italic">
              <p>
                A heartfelt thank you to Payal Aunty, Rukmini Aunty, Uma Aunty, Sunitha Aunty, and Suchita Aunty for their invaluable backstage support, care, and dedication throughout this journey.
              </p>
              <p>
                Special appreciation also goes to all the Kruti Dance Academy volunteer girls for their enthusiastic assistance with the lobby, backstage coordination, and countless behind-the-scenes efforts that helped make this celebration run so smoothly.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Acknowledgements;

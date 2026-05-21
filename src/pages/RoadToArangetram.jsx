import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DustParticles from '../components/animations/DustParticles';

const timelineEvents = [
  {
    date: 'AUGUST 2025',
    title: 'Endless Repetition,\nQuiet Refinement',
    description: 'With the beginning of private arangetram rehearsals, training entered a far more demanding rhythm.',
    image: '/images/sanjana website - Road to arangetram/IMG_2621.jpg'
  },
  {
    date: 'AUGUST 2025 ⟶ DECEMBER 2025',
    title: 'A Journey Deepens',
    description: 'Rehearsals transformed into instinct — adavus practiced until tāla settled naturally into the body and every detail carried intention.',
    image: '/images/Sanjana Website - My journey so far/DSC_0417.webp'
  },
  {
    date: 'DECEMBER 2025',
    title: 'Details Taking Shape',
    description: 'As the arangetram moved closer to reality, costume fittings, temple jewelry, and stage decisions came together with growing clarity.',
    image: '/images/Sanjana Website/IMG_1210.JPG'
  },
  {
    date: 'JANUARY 2026',
    title: 'The Final Stretch',
    description: 'The final phase of preparation — polishing, perfecting, and preparing to share the art that has been lived every single day.',
    image: '/images/photoshoot-glimpses/Sanjana-318-Edit.webp',
    objectPosition: 'top'
  },
  {
    date: 'FEBRUARY 2026',
    title: 'Capturing the Artist',
    description: 'The photoshoot became more than preparation for an event; it became a way of preserving a moment suspended between student and performer.',
    image: '/images/photoshoot-glimpses/Sanjana-110-Edit.webp',
    objectPosition: 'top'
  },
  {
    date: 'MAY 2026',
    title: 'The First Invitation',
    description: 'Before reaching family and friends, the first invitation was offered to my gurus during a pooja — a quiet moment of gratitude and blessing.',
    image: '/images/Invitation.webp'
  },
  {
    date: 'JULY 1, 2026',
    title: 'First Steps onto the Stage',
    description: 'The first stage rehearsal transformed the performance from imagination into reality. Familiar movements suddenly carried a different weight.',
    image: '/images/sanjana website - Road to arangetram/IMG_2782.jpg'
  }
];

const RoadToArangetram = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Target Date in US Eastern Time (EDT): July 25, 2026 at 6:00 PM
    const targetDate = new Date('2026-07-25T18:00:00-04:00'); 
    
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="bg-black text-white selection:bg-gold/30 overflow-x-hidden font-serif">
      
      {/* 1. HERO BANNER — cinematic full-width */}
      <section className="relative min-h-[60vh] flex items-end pb-16 pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <DustParticles />
          <img 
            src="/images/sanjana website - Road to arangetram/IMG_2621.jpg"
            alt="Road to Arangetram"
            className="w-full h-full object-cover opacity-90"
            style={{ objectPosition: 'center 30%' }}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
          {/* Decorative Accents */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        </div>

        <div className="container-luxury relative z-10 text-left">
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-gold uppercase tracking-[0.5em] text-xs font-bold mb-4 drop-shadow-glow">A Dancer's Journal</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 text-white leading-tight">The Road to <span className="text-[#D4AF37]">Arangetram</span></h1>
            <p className="text-lg md:text-xl font-sans text-gray-300 max-w-3xl leading-relaxed mb-6">
              “A journey shaped through years of discipline, devotion, and quiet transformation.”
            </p>
            <div className="w-24 h-px bg-[#D4AF37]" />
          </motion.div>
        </div>
      </section>

      {/* 2. VERTICAL TIMELINE SECTION */}
      <section className="py-24 relative bg-black">
        <div className="container-luxury">
          
          <div className="text-center mb-24 relative">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/60" />
              <div className="w-2.5 h-2.5 rotate-45 bg-gold" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/60" />
            </div>
            <h2 className="font-serif italic text-4xl md:text-5xl text-white">The Journey Continues</h2>
          </div>

          <div className="relative max-w-5xl mx-auto pt-8">
            {/* Desktop Center Line */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/20 via-gold/50 to-gold/10" />

            {/* Mobile Left Line */}
            <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-gold/20 via-gold/50 to-gold/10" />

            <div className="flex flex-col gap-12 md:gap-20 relative z-10">
              {timelineEvents.map((item, i) => {
                const isLeft = i % 2 === 0;

                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className={`relative flex items-center justify-between w-full group ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
                  >
                    
                    {/* CENTER DOT */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold border-[4px] border-black shadow-[0_0_15px_rgba(212,175,55,0.4)] z-20" />

                    {/* MOBILE DATE (Visible only on mobile) */}
                    <div className="md:hidden w-full pl-12 mb-4 text-left">
                      <span className="text-gold uppercase tracking-[0.2em] text-[10px] font-bold drop-shadow-md">
                        {item.date}
                      </span>
                    </div>

                    {/* CARD CONTAINER */}
                    <div className={`w-full md:w-[45%] pl-12 md:pl-0 flex ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                      <div className="glass-card gold-border-gradient bg-[#0A0A0A] p-6 rounded-[1.25rem] border border-gold/20 hover:border-gold/40 transition-all duration-500 w-full max-w-lg shadow-2xl">
                        <div className={`flex flex-col-reverse ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 items-center`}>
                          
                          {/* TEXT SIDE */}
                          <div className="flex-1 text-left w-full">
                            <p className="text-gold uppercase tracking-[0.2em] text-[9px] md:text-[10px] font-bold mb-3 hidden md:block">
                              {item.date}
                            </p>
                            <h3 className="font-serif italic text-2xl md:text-[1.75rem] text-white mb-3 whitespace-pre-line leading-tight">
                              {item.title}
                            </h3>
                            <p className="font-sans text-gray-400 text-[13px] md:text-sm leading-relaxed">
                              {item.description}
                            </p>
                          </div>

                          {/* IMAGE SIDE */}
                          <div 
                            className="w-full md:w-[150px] aspect-[4/3] rounded-xl overflow-hidden flex-shrink-0 shadow-lg border border-white/10 cursor-pointer"
                            onClick={() => setSelectedImage(item.image)}
                          >
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" style={{ objectPosition: item.objectPosition || 'center' }} loading="lazy" />
                          </div>

                        </div>
                      </div>
                    </div>

                    {/* DESKTOP DATE STRING ON OPPOSITE SIDE (Hidden on mobile) */}
                    <div className={`hidden md:flex w-[45%] ${isLeft ? 'justify-start pl-12' : 'justify-end pr-12'} items-center`}>
                      <span className="text-gold uppercase tracking-[0.2em] text-[11px] font-bold drop-shadow-md opacity-80">
                        {item.date}
                      </span>
                    </div>

                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 3. COUNTDOWN SECTION */}
      <section className="py-16 relative overflow-hidden bg-[#050505] border-t border-white/5">
        <div className="absolute inset-0 bg-[url('/images/photo_9.webp')] bg-cover opacity-5 grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/80" />
        
        <div className="container-luxury relative z-10">
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto py-10 px-8 lg:px-16 glass-card gold-border-gradient bg-[#0A0A0A]/80 backdrop-blur-xl border border-gold/20 rounded-3xl shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10"
          >
            <div className="text-center lg:text-left flex-1">
              <p className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-4 block">July 25, 2026 • US EST</p>
              <h2 className="text-3xl md:text-4xl italic mb-4 text-white font-serif leading-tight">The Countdown <br className="hidden lg:block"/>to Arangetram</h2>
              <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed italic max-w-md mx-auto lg:mx-0">
                “Every rehearsal now carries a different weight — the quiet realization that years of preparation are slowly approaching the stage.”
              </p>
            </div>
            
            <div className="flex items-center gap-4 md:gap-6 justify-center">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Mins', value: timeLeft.minutes },
                { label: 'Secs', value: timeLeft.seconds }
              ].map((time, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-gold/30 bg-black/50 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.15)] relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gold/5 group-hover:bg-gold/10 transition-colors duration-500" />
                    <span className="text-2xl md:text-3xl font-serif text-gold z-10 drop-shadow-md">
                      {time.value.toString().padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-widest mt-3 font-bold">{time.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white z-[110] transition-colors p-2 bg-black/50 rounded-full border border-white/10"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-[0_0_50px_rgba(212,175,55,0.15)] border border-gold/10"
              alt="Full view"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default RoadToArangetram;

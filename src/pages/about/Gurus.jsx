import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, BookOpen, Star, Users, Calendar, Heart, Sparkles, Globe, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import DustParticles from '../../components/animations/DustParticles';

const Gurus = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  
  const memoryImages = [
    '/images/Sanjana Website/20220528_172006.jpg',
    '/images/Sanjana Website/IMG_5590.jpg',
    '/images/Sanjana Website/IMG_5578.jpg'
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowLeft') setLightboxIndex(p => p > 0 ? p - 1 : memoryImages.length - 1);
      else if (e.key === 'ArrowRight') setLightboxIndex(p => p < memoryImages.length - 1 ? p + 1 : 0);
      else if (e.key === 'Escape') setLightboxIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const stats = [
    { label: 'Arangetrams', value: '177+', icon: <Users size={20} /> },
    { label: 'Est. Since', value: '1994', icon: <Calendar size={20} /> },
    { label: 'Recognition', value: 'Global', icon: <Star size={20} /> }
  ];

  return (
    <div className="bg-black text-white overflow-hidden selection:bg-gold/30">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[100vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <DustParticles />
          <div className="absolute inset-0 bg-[url('/images/Sanjana%20Website/about-us-banner.jpg')] bg-cover bg-[center_25%] opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black to-black" />
          {/* Decorative Accents */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        </div>

        <div className="container-luxury relative z-10 text-center">
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-gold uppercase tracking-[0.5em] text-xs font-bold mb-6">Guiding Lights</p>
            <h1 className="text-6xl md:text-8xl font-serif mb-8 italic">About the Gurus</h1>
            <p className="text-xl md:text-2xl font-serif text-white/60 italic max-w-3xl mx-auto leading-relaxed">
              "To her students, she is more than a teacher—she is a mentor, a guide, a second mother."
            </p>
            <div className="mt-12 w-24 h-px bg-gold/50 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* 2. MRS. DINA SHETH SECTION */}
      <section className="section-padding relative">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-5 relative group">
              <motion.div 
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-10 aspect-[3/4] rounded-2xl overflow-hidden gold-border-gradient shadow-2xl transition-transform duration-500 group-hover:-translate-y-2"
              >
                <img 
                  src="/images/gurus/Dina Sheth.webp" 
                  alt="Guru Mrs. Dina Sheth" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                />
              </motion.div>
              {/* Decorative Frame */}
              <div className="absolute -top-6 -left-6 w-full h-full border border-gold/10 rounded-2xl -z-10 group-hover:top-0 group-hover:left-0 transition-all duration-700" />
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-10">
              <motion.div 
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 text-gold mb-6">
                  <div className="h-px w-12 bg-gold/30" />
                  <span className="uppercase tracking-widest text-[10px] font-bold">The Visionary Founder</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-serif mb-8 italic">Mrs. <span className="text-gold">Dina Sheth</span></h2>
                <div className="space-y-6 text-gray-300 font-serif text-lg leading-relaxed italic">
                  <p>
                    Mrs. Dina Sheth is the visionary Founder of Kruti Dance Academy—a nationally and globally acclaimed institution dedicated to the preservation and evolution of Indian classical arts. Since its inception in 1994, Kruti has flourished under her passionate guidance, becoming a sanctuary where tradition meets transformation.
                  </p>
                  <p>
                    A revered torchbearer of Bharatanatyam, Mrs. Sheth received her rigorous training under legendary Gurus: the late Shreemati Anjali Merh, the late Shree Kubernath Tanjorkar, Padma Bhushan C. V. Chandrashekhar, and the late Pradip Barua. Her artistry has been spotlighted by media outlets such as India Today, BBC UK Radio, and NBC Channel 11.
                  </p>
                  <p>
                    Through dance, she bestows not only grace and discipline, but also identity, self-worth, and a lifelong bond with the timeless spirit of India.
                  </p>
                </div>
              </motion.div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/5">
                {stats.map((stat, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="text-center p-6 glass-card border-white/5 bg-white/[0.02] hover:bg-gold/5 transition-all duration-500"
                  >
                    <div className="text-gold flex justify-center mb-4">{stat.icon}</div>
                    <div className="text-2xl font-serif text-white mb-1">{stat.value}</div>
                    <div className="text-[9px] uppercase tracking-widest text-white/40 font-bold">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ACHIEVEMENTS & MEDIA SECTION */}
      <section className="section-padding bg-[#050505]">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Award />, title: "State Citation", desc: "Honored by the Secretary of State for Georgia for arts contribution." },
              { icon: <Globe />, title: "Global Reach", desc: "Nurturing students of all ethnicities in the soulful legacy of Indian dance." },
              { icon: <Sparkles />, title: "Imaginative Art", desc: "Choreography that is both rooted in tradition and elevated by imagination." },
              { icon: <Heart />, title: "Nurturing Spirit", desc: "Revered as a mentor, a guide, and a second mother to her students." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 border border-white/5 rounded-xl hover:border-gold/20 transition-all bg-white/[0.01]"
              >
                <div className="text-gold mb-6">{item.icon}</div>
                <h4 className="text-white font-serif text-xl mb-4">{item.title}</h4>
                <p className="text-gray-400 text-sm italic font-serif leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MRS. SHEMONI PAREKH SECTION */}
      <section className="section-padding bg-black relative">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center flex-row-reverse">
            
            {/* Content Column */}
            <div className="lg:col-span-7 order-2 lg:order-1 space-y-10">
              <motion.div 
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 text-gold mb-6">
                  <div className="h-px w-12 bg-gold/30" />
                  <span className="uppercase tracking-widest text-[10px] font-bold">Artistic Director</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-serif mb-8 italic">Mrs. <span className="text-gold">Shemoni Parekh</span></h2>
                <div className="space-y-6 text-gray-300 font-serif text-lg leading-relaxed italic">
                  <p>
                    As the Artistic Director of Kruti Dance Academy, Shemoni Parekh is a luminous force for masterful and innovative choreography. She embodies the unique confluence of Indian classical heritage melded with the flair and heartbeat of global modern dance styles.
                  </p>
                  <p>
                    An Industrial Engineering honors graduate from Georgia Tech, Shemoni has integrated technology and virtual offerings into KDA, leading its transformation into a state-of-the-art facility.
                  </p>
                  <p>
                    She serves as a cultural ambassador, featured by Google, Turner Classic Movies, and PBS’s Secret Atlanta, sharing the beauty of Indian heritage across diverse communities.
                  </p>
                </div>
              </motion.div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'America\'s Got Talent Finalist',
                  'Macy\'s Thanksgiving Day Parade',
                  'So You Think You Can Dance Canada',
                  'Colors TV Chak Dhoom Dhoom Finalist'
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg group hover:border-gold/30 transition-all duration-300"
                  >
                    <BookOpen size={16} className="text-gold opacity-50 group-hover:opacity-100" />
                    <span className="text-xs uppercase tracking-widest text-white/80 group-hover:text-white">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Image Column */}
            <div className="lg:col-span-5 order-1 lg:order-2 relative group">
              <motion.div 
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-10 aspect-[3/4] rounded-2xl overflow-hidden gold-border-gradient shadow-2xl transition-transform duration-500 group-hover:-translate-y-2"
              >
                <img 
                  src="/images/gurus/Shemoni Parekh.webp" 
                  alt="Artistic Director Mrs. Shemoni Parekh" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                />
              </motion.div>
              <div className="absolute -top-6 -right-6 w-full h-full border border-gold/10 rounded-2xl -z-10 group-hover:top-0 group-hover:right-0 transition-all duration-700" />
            </div>

          </div>
        </div>
      </section>

      {/* 5. LEGACY SECTION */}
      <section className="py-32 relative text-center bg-[#050505]">
        <div className="container-luxury relative z-10">
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-10"
          >
            <Award className="text-gold mx-auto shadow-glow" size={48} />
            <h2 className="text-4xl md:text-6xl font-serif italic mb-8">A Legacy of <span className="text-gold">Inspiration</span></h2>
            <p className="text-xl md:text-2xl font-serif text-white/60 italic leading-relaxed">
              Together, Guru Dina Sheth and Shemoni Parekh continue to elevate Kruti Dance Academy as a notable event in Atlanta’s artistic calendar, bridging ancient wisdom with modern expression.
            </p>
            <div className="pt-10 flex flex-wrap justify-center gap-6">
              <div className="px-8 py-3 rounded-full border border-gold/20 text-gold text-[10px] uppercase tracking-widest bg-gold/5">
                Cultural Preservation
              </div>
              <div className="px-8 py-3 rounded-full border border-gold/20 text-gold text-[10px] uppercase tracking-widest bg-gold/5">
                Artistic Devotion
              </div>
              <div className="px-8 py-3 rounded-full border border-gold/20 text-gold text-[10px] uppercase tracking-widest bg-gold/5">
                Innovation in Dance
              </div>
            </div>
          </motion.div>

          <div className="mt-32 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {memoryImages.map((src, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUp} 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`relative aspect-[3/4] rounded-2xl overflow-hidden gold-border-gradient shadow-2xl group cursor-pointer ${idx === 1 ? 'md:-translate-y-12' : ''}`}
                onClick={() => setLightboxIndex(idx)}
              >
                <img src={src} alt="Memory with Guru" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-2 text-white/80 uppercase tracking-widest text-xs font-bold">
                    <Maximize2 size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setLightboxIndex(null)}
          >
            <div className="absolute top-0 left-0 right-0 p-8 flex justify-center z-[110]">
              <button 
                className="group flex flex-col items-center gap-2 text-white/60 hover:text-white transition-all duration-300"
                onClick={() => setLightboxIndex(null)}
              >
                <div className="w-12 h-12 rounded-full bg-white/5 group-hover:bg-white/10 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all">
                  <X size={24} />
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Close</span>
              </button>
            </div>

            <button 
              className="absolute left-4 md:left-12 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 z-[110]" 
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(p => p > 0 ? p - 1 : memoryImages.length - 1); }}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className="absolute right-4 md:right-12 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 z-[110]" 
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(p => p < memoryImages.length - 1 ? p + 1 : 0); }}
            >
              <ChevronRight size={24} />
            </button>
            
            <motion.div 
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={memoryImages[lightboxIndex]} 
                alt="Memory with Guru" 
                className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-sm"
              />
              <div className="mt-8 text-center">
                <p className="text-white/40 text-xs tracking-[0.2em] uppercase">{lightboxIndex + 1} / {memoryImages.length}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Gurus;

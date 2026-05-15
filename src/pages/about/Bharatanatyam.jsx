import React from 'react';
import { motion } from 'framer-motion';
import { Music, Activity, MessageSquare, Quote, Heart, Sparkles, BookOpen } from 'lucide-react';

const Bharatanatyam = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="bg-black text-white selection:bg-gold/30">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Texture & Particles */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/Sanjana-glimpse-05.webp')] bg-cover bg-center opacity-90 scale-110" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
          {/* Subtle Glow Accents */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-maroon/5 rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>

        <div className="container-luxury relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <p className="text-gold uppercase tracking-[0.6em] text-xs md:text-sm font-bold mb-6 drop-shadow-glow">
              The Sacred Language of Expression
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight">
              <span className="block text-white opacity-90 italic">Bharata</span>
              <span className="block text-gold/80 -mt-2 md:-mt-4">natyam</span>
            </h1>
            <div className="w-24 h-px bg-gold/50 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* 2. INTRODUCTION STORY SECTION */}
      <section className="section-padding bg-[#050505]">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 border border-gold/10 rounded-2xl group-hover:border-gold/20 transition-colors duration-500" />
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl gold-border-gradient">
                <img 
                  src="/images/Sanjana-glimpse-04.webp" 
                  alt="Bharatanatyam Grace" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-black border border-gold/10 p-4 rounded-xl hidden md:block">
                <div className="w-full h-full border border-gold/5 flex flex-col items-center justify-center text-center">
                  <p className="text-gold font-cursive text-4xl">Since</p>
                  <p className="text-2xl font-serif mt-2 tracking-widest">Ancient</p>
                  <p className="text-xs uppercase tracking-tighter opacity-50 mt-1">Times</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-block px-4 py-1 border border-gold/20 rounded-full text-gold text-[10px] uppercase tracking-widest bg-gold/5">
                Heritage & Origins
              </div>
              <h2 className="text-5xl md:text-6xl font-serif leading-tight">
                A Divine Tapestry <br/>
                <span className="text-gold italic">of Ancient Tradition</span>
              </h2>
              <div className="space-y-6 text-gray-400 font-serif text-lg leading-relaxed">
                <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-gold first-letter:mr-3 first-letter:float-left">
                  Bharatanatyam is one of the oldest and most revered classical dance traditions of India, originating in the temples of South India over 2,000 years ago. Rooted in devotion and spiritual storytelling, it was traditionally performed as an offering of worship before evolving into a celebrated performance art practiced around the world today.
                </p>
                <p>
                  According to ancient tradition, the art form was created by Lord Brahma and documented by sage Bharata in the Natya Shastra, one of the foundational texts on dramatic arts and artistic expression. Bharatanatyam was historically performed by Devadasis, dancers dedicated to temple service, who preserved and passed down the tradition through generations.
                </p>
                <p>
                  Over centuries, the dance became deeply woven into South Indian culture, reflected in the sculptures and carvings of many temple complexes dedicated to Lord Shiva. During British colonial rule, however, the tradition faced suppression. Through the efforts of visionary revivalists and dedicated gurus, Bharatanatyam was reintroduced to the stage, allowing the art form to flourish once again across India and internationally.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. BHAVA RAGA TALA SECTION */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-maroon/5 to-transparent" />
        
        <div className="container-luxury relative z-10 text-center">
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-8 italic">The Essence of Bharata</h2>
            <p className="text-gray-400 font-serif text-lg italic leading-relaxed">
              The name "Bharata" itself is an acronym reflecting the three essential elements that breathe life into every movement:
            </p>
            <div className="w-12 h-px bg-gold mx-auto mt-8" />
          </div>

          <motion.div 
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { 
                title: 'Bhava', 
                meaning: 'Expression & Emotion', 
                desc: 'The soul of the dance, conveying profound feelings and spiritual narratives through the eyes and face.',
                icon: <Heart className="text-gold" size={32} />
              },
              { 
                title: 'Raga', 
                meaning: 'Melody & Musicality', 
                desc: 'The harmonic framework that provides the emotional and melodic landscape for the performance.',
                icon: <Music className="text-gold" size={32} />
              },
              { 
                title: 'Tala', 
                meaning: 'Rhythm & Timing', 
                desc: 'The mathematical heartbeat of the dance, measured in precise rhythmic cycles and footwork.',
                icon: <Activity className="text-gold" size={32} />
              }
            ].map((pillar, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                className="glass-card gold-border-gradient p-12 text-center group hover:bg-gold/5 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-8 border border-gold/20 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-3xl font-serif text-white mb-2">{pillar.title}</h3>
                <p className="text-gold uppercase tracking-widest text-[10px] font-bold mb-6">{pillar.meaning}</p>
                <p className="text-gray-400 text-sm font-serif italic leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. THE ART FORM SECTION (Nritta, Nritya, Natya) */}
      <section className="section-padding bg-[#050505]">
        <div className="container-luxury">
          <div className="text-center mb-20">
            <p className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4">The Three Dimensions</p>
            <h2 className="text-5xl md:text-6xl font-serif italic">The Art Form</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'Nritta',
                subtitle: 'Pure Dance',
                desc: 'The technical and rhythmic aspect of the performance, emphasizing intricate footwork, geometry, speed, symmetry, and movement patterns without interpretive storytelling.',
                image: '/images/Sanjana-glimpse-01.webp'
              },
              {
                title: 'Nritya',
                subtitle: 'Expressive Dance',
                desc: 'The expressive component in which emotion, devotion, and storytelling are conveyed through facial expressions, gestures (mudras), and graceful body movements synchronized with music.',
                image: '/images/Sanjana-glimpse-02.webp'
              },
              {
                title: 'Natya',
                subtitle: 'Dramatic Interpretation',
                desc: 'The theatrical aspect of Bharatanatyam, where dancers embody characters and narratives through expressive interpretation and stylized movement.',
                image: '/images/Sanjana-glimpse-05.webp'
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative h-[600px] rounded-2xl overflow-hidden gold-border-gradient"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-10 transform group-hover:-translate-y-4 transition-transform duration-500">
                  <h3 className="text-4xl font-serif text-white mb-2">{item.title}</h3>
                  <p className="text-gold uppercase tracking-widest text-[10px] font-bold mb-4">{item.subtitle}</p>
                  <p className="text-gray-300 text-sm font-serif italic opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ARANGETRAM SECTION */}
      <section className="py-32 relative overflow-hidden bg-[#080808]">
        <div className="absolute inset-0 bg-[url('/images/photo_9.webp')] bg-cover bg-fixed opacity-10 grayscale" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent" />
        
        <div className="container-luxury relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-10">
              <motion.div 
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 text-gold mb-6">
                  <BookOpen size={20} className="opacity-50" />
                  <span className="uppercase tracking-widest text-[10px] font-bold">The Milestone</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-serif mb-12 italic leading-tight">
                  The Sacred <br/>
                  <span className="text-gold">Arangetram</span>
                </h2>
                <div className="space-y-8 text-gray-300 font-serif text-lg leading-relaxed italic">
                  <p>
                    Arangetram literally means <span className="text-gold font-bold">“ascending the stage.”</span> It marks a dancer’s debut solo performance after many years of rigorous training under the guidance of a guru. More than a recital, the Arangetram represents a milestone of discipline, perseverance, artistic growth, and devotion to the tradition.
                  </p>
                  <p>
                    Typically performed after years of dedicated practice, the Arangetram is both a celebration of the student’s journey and a tribute to the guru who nurtured that journey. During the performance, the dancer presents the traditional margam format, guiding the audience through the many dimensions of Bharatanatyam while showcasing technical mastery and spiritual understanding.
                  </p>
                  <div className="flex items-start gap-6 pt-6">
                    <Quote className="text-gold shrink-0 mt-2" size={32} />
                    <p className="text-white font-serif text-2xl border-l border-gold/30 pl-8">
                      This debut symbolizes the transformation of the student into a mature and polished artist, carrying forward a timeless tradition.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-5 hidden lg:block"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden gold-border-gradient shadow-2xl relative group">
                <img 
                  src="/images/photo_10.webp" 
                  alt="Stage Performance" 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gold/10 mix-blend-overlay" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. QUOTE SECTION */}
      <section className="section-padding bg-black border-t border-white/5">
        <div className="container-luxury text-center">
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto py-20 px-8 glass-card border-none bg-transparent relative"
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center border border-gold/20 shadow-glow">
              <Sparkles className="text-gold" size={24} />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-white italic leading-relaxed mb-8">
              “Through graceful movement and spiritual depth, Bharatanatyam beautifully <span className="text-gold">blends technique and artistry</span> to portray narrative and devotional themes.”
            </h2>
            <div className="w-16 h-px bg-gold/30 mx-auto" />
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Bharatanatyam;

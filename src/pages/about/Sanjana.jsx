import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Heart, Quote, Star, BookOpen } from 'lucide-react';
import DustParticles from '../../components/animations/DustParticles';

const SanjanaDiddige = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="bg-black text-white overflow-x-hidden selection:bg-gold/30">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <DustParticles />
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-maroon/5 rounded-full blur-[100px] animate-pulse delay-700" />
        </div>

        <div className="container-luxury grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="inline-block px-4 py-1 border border-gold/20 rounded-full text-gold text-[10px] uppercase tracking-widest bg-gold/5 mb-8">
              Fourteen Years of Devotion
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif leading-tight mb-6">
              <span className="block text-white opacity-90 italic">Sanjana</span>
              <span className="block text-gold/80 -mt-2 md:-mt-4">Diddige</span>
            </h1>
            <p className="text-xl md:text-2xl font-serif text-white/60 italic max-w-xl leading-relaxed mb-10">
              A journey shaped by discipline, perseverance, and a deep love for the classical arts.
            </p>
            <div className="w-20 h-px bg-gold/50" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative z-10 aspect-[3/4] rounded-sm overflow-hidden gold-border-gradient shadow-[0_0_50px_rgba(212,175,55,0.15)]">
              <img 
                src="/images/sanjana-about.webp" 
                alt="Sanjana Diddige" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-gold/10 rounded-full animate-spin-slow opacity-30" />
          </motion.div>

        </div>
      </section>

      {/* 2. JOURNEY STORY SECTION */}
      <section className="section-padding bg-[#050505]">
        <div className="container-luxury">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              <motion.div 
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-5"
              >
                <div className="sticky top-32">
                  <h2 className="text-4xl md:text-5xl font-serif italic mb-8">A Journey <br/> <span className="text-gold">of the Soul</span></h2>
                  <div className="w-12 h-px bg-gold mb-10" />
                  <div className="aspect-square rounded-2xl overflow-hidden gold-border-gradient">
                    <img 
                      src="/images/Sanjana-glimpse-02.webp" 
                      alt="The Journey" 
                      className="w-full h-full object-cover grayscale opacity-60"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-7 space-y-12"
              >
                <div className="space-y-8 text-gray-300 font-serif text-lg leading-relaxed italic">
                  <p className="first-letter:text-5xl first-letter:text-gold first-letter:font-serif first-letter:mr-3 first-letter:float-left">
                    For over fourteen years, Bharatanatyam has been an integral part of Sanjana Diddige’s life. Under the guidance of esteemed Guru Mrs. Dina Sheth and Mrs. Shemoni Parekh at Kruti Dance Academy, what began as childhood curiosity slowly grew into a journey shaped by discipline, perseverance, and devotion to the classical arts.
                  </p>
                  <p>
                    Through years of training, rehearsals, and performances, Bharatanatyam became more than dance. It became a source of confidence, expression, and personal growth — teaching patience through repetition, resilience through challenge, and the power of storytelling through movement and music.
                  </p>
                  <p>
                    Her Arangetram marks the culmination of this journey so far: a celebration of tradition, artistry, and the years of dedication that transformed a young student into a performer prepared to step onto the stage.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 border-t border-white/5">
                  <div className="p-8 glass-card border-none bg-white/[0.02]">
                    <Star className="text-gold mb-4" size={24} />
                    <h4 className="text-white font-serif text-xl mb-2 italic">14+ Years</h4>
                    <p className="text-gray-400 text-sm italic font-serif">A childhood curiosity matured into a lifelong passion.</p>
                  </div>
                  <div className="p-8 glass-card border-none bg-white/[0.02]">
                    <BookOpen className="text-gold mb-4" size={24} />
                    <h4 className="text-white font-serif text-xl mb-2 italic">Kruti Academy</h4>
                    <p className="text-gray-400 text-sm italic font-serif">Nurtured under the guidance of world-class Gurus.</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. VALUES / GROWTH SECTION */}
      <section className="section-padding">
        <div className="container-luxury text-center">
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif italic mb-8">What Dance Has <span className="text-gold">Taught Me</span></h2>
            <div className="w-12 h-px bg-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Resilience', 
                icon: <Shield className="text-gold" size={32} />,
                desc: 'Finding strength through every challenge and repetition in the dance studio.'
              },
              { 
                title: 'Expression', 
                icon: <Sparkles className="text-gold" size={32} />,
                desc: 'Unlocking the power of storytelling through the language of movement and music.'
              },
              { 
                title: 'Confidence', 
                icon: <Heart className="text-gold" size={32} />,
                desc: 'Building a source of inner strength that transcends the stage and shapes daily life.'
              }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-12 glass-card gold-border-gradient group hover:bg-gold/5 transition-all duration-500"
              >
                <div className="mb-8 flex justify-center group-hover:scale-110 transition-transform">{pillar.icon}</div>
                <h3 className="text-2xl font-serif text-white mb-4 italic">{pillar.title}</h3>
                <p className="text-gray-400 text-sm font-serif italic leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ARANGETRAM MILESTONE SECTION */}
      <section className="py-32 relative overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 bg-[url('/images/photo_9.webp')] bg-cover opacity-10 grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />
        
        <div className="container-luxury relative z-10 text-center">
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto py-20 px-10 glass-card gold-border-gradient bg-black/40 backdrop-blur-xl"
          >
            <h2 className="text-4xl md:text-7xl font-serif italic mb-10 leading-tight">
              A Celebration of <br/> <span className="text-gold">Tradition</span>
            </h2>
            <p className="text-xl md:text-2xl font-serif text-gray-300 italic mb-12 leading-relaxed">
              "This debut symbolizes the transformation of a student into an artist, carrying forward a timeless tradition through grace and dedication."
            </p>
            <div className="flex justify-center gap-2">
              {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-gold/50" />)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. CLOSING QUOTE */}
      <section className="py-40 relative">
        <div className="container-luxury text-center">
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <Quote className="text-gold/10 absolute -top-12 left-1/2 -translate-x-1/2 scale-[3]" />
            <h2 className="text-4xl md:text-6xl font-serif italic text-white/90 max-w-4xl mx-auto leading-relaxed z-10 relative">
              “Through dance, <span className="text-gold underline decoration-gold/20 underline-offset-8">tradition becomes timeless</span>.”
            </h2>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default SanjanaDiddige;

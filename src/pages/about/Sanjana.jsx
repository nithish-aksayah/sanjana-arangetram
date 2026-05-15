import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Sparkles, Heart, Quote, Star, BookOpen, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import DustParticles from '../../components/animations/DustParticles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, FreeMode } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

const highlights = [
  {
    image: '/images/awards_and_certifications/Picture11.webp',
    title: 'Junior Artist Award',
    desc: 'Recognized for outstanding performance at a young age.',
  },
  {
    image: '/images/awards_and_certifications/Picture13.webp',
    title: 'Certificate of Merit',
    desc: 'Awarded for academic and artistic excellence.',
  },
  {
    image: '/images/awards_and_certifications/Picture15.webp',
    title: 'Academy Honor',
    desc: 'Special recognition from Kruti Dance Academy.',
  },
  {
    image: '/images/awards_and_certifications/Picture16.webp',
    title: 'Cultural Ambassador',
    desc: 'Represented Indian classical arts at community events.',
  },
  {
    image: '/images/awards_and_certifications/Picture17.webp',
    title: 'Nrithyotsava Award',
    desc: 'Awarded for exceptional Nritta technique and grace.',
  },
  {
    image: '/images/awards_and_certifications/Picture18.webp',
    title: 'Artistic Excellence',
    desc: 'Honored for sustained dedication to classical dance.',
  },
];

const awardImages = [
  '/images/awards_and_certifications/Picture19.webp',
  '/images/awards_and_certifications/Picture20.webp',
  '/images/awards_and_certifications/Picture21.webp',
  '/images/awards_and_certifications/Picture22.webp',
  '/images/awards_and_certifications/Picture23.webp',
  '/images/awards_and_certifications/Picture25.webp',
  '/images/awards_and_certifications/Picture26.webp',
  '/images/awards_and_certifications/Picture27.webp',
  '/images/awards_and_certifications/Picture28.webp',
  '/images/awards_and_certifications/Picture29.webp',
  '/images/awards_and_certifications/Picture30.webp',
  '/images/awards_and_certifications/Picture31.webp',
  '/images/awards_and_certifications/Picture32.webp',
  '/images/awards_and_certifications/Picture33.webp',
  '/images/awards_and_certifications/Picture34.webp',
  '/images/awards_and_certifications/Picture35.webp',
  '/images/awards_and_certifications/Picture36.webp',
  '/images/awards_and_certifications/Picture37.webp',
  '/images/awards_and_certifications/Picture38.webp',
  '/images/awards_and_certifications/Picture39.webp',
  '/images/awards_and_certifications/Picture40.webp',
  '/images/awards_and_certifications/Picture41.webp',
  '/images/awards_and_certifications/Picture42.webp',
  '/images/awards_and_certifications/Picture43.webp',
  '/images/awards_and_certifications/Picture44.webp',
  '/images/awards_and_certifications/Picture45.webp',
  '/images/awards_and_certifications/Picture46.webp',
  '/images/awards_and_certifications/Picture47.webp',
  '/images/awards_and_certifications/Picture48.webp',
  '/images/awards_and_certifications/Picture49.webp',
];

const SanjanaDiddige = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImg = (e) => { 
    e.stopPropagation(); 
    setLightboxIndex((prev) => (prev < awardImages.length - 1 ? prev + 1 : 0)); 
  };
  const prevImg = (e) => { 
    e.stopPropagation(); 
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : awardImages.length - 1)); 
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
                      src="/images/photoshoot-glimpses/Sanjana-358-Edit.webp" 
                      alt="Sanjana Diddige - Journey of the Soul" 
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
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

      {/* 5. RECOGNITION & ACHIEVEMENTS */}
      <section className="section-padding bg-black relative z-10">
        <div className="container-luxury">
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[11px] uppercase tracking-[0.5em] text-[#D4AF37] font-bold mb-4">Recognition & Achievements</p>
            <h2 className="font-serif text-5xl md:text-6xl text-white mb-6 italic">Journey Highlights</h2>
            <div className="w-12 h-px bg-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card gold-border-gradient overflow-hidden group flex flex-col"
              >
                <div className="h-56 overflow-hidden flex-shrink-0">
                  <img
                    src={h.image}
                    alt={h.title}
                    className="w-full h-full object-cover object-[center_top] group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-serif text-xl text-white mb-2 italic">{h.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow italic font-serif">{h.desc}</p>
                  <div className="mt-4 w-8 h-px bg-[#D4AF37]/50" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 relative group"
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay, FreeMode]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                nextEl: '.awards-next',
                prevEl: '.awards-prev',
              }}
              pagination={{ clickable: true, dynamicBullets: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              className="w-full pb-16"
            >
              {awardImages.map((src, i) => (
                <SwiperSlide key={i}>
                  <div 
                    onClick={() => openLightbox(i)}
                    className="aspect-[4/3] md:aspect-video rounded-xl overflow-hidden border border-white/10 bg-white/5 group/slide cursor-pointer relative"
                  >
                    <img
                      src={src}
                      alt={`Award Detail ${i + 1}`}
                      className="w-full h-full object-contain p-2 group-hover/slide:scale-105 transition-transform duration-700"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/slide:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-gold/80 text-black flex items-center justify-center">
                        <Maximize2 size={20} />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button className="awards-prev absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-10 w-10 h-10 md:w-14 h-14 rounded-full bg-black/50 backdrop-blur-md border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0">
              <ChevronLeft size={24} />
            </button>
            <button className="awards-next absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-10 w-10 h-10 md:w-14 h-14 rounded-full bg-black/50 backdrop-blur-md border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0">
              <ChevronRight size={24} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* 6. CLOSING QUOTE */}
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

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>

            <button 
              className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors" 
              onClick={prevImg}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors" 
              onClick={nextImg}
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
                src={awardImages[lightboxIndex]} 
                alt={`Award Full View ${lightboxIndex + 1}`} 
                className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-lg"
              />
              <div className="mt-8 text-center">
                <p className="text-white/40 text-xs tracking-[0.2em] uppercase">Award Detail {lightboxIndex + 1} / {awardImages.length}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SanjanaDiddige;

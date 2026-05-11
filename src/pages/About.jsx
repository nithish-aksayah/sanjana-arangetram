import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, FreeMode } from 'swiper/modules';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

const fadeUp = {
  initial: { opacity: 0, y: 15 }, 
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-30px" }, 
  transition: { 
    duration: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.3 : 0.5,
    ease: "easeOut"
  },
};

const timeline = [
  {
    year: '2012',
    title: 'The Beginning',
    description: 'Sanjana’s journey at Kruti Dance Academy began with Bollywood dance classes, where movement first became a source of joy, rhythm, and confidence.',
    image: '/images/Sanjana Website - My journey so far/Navin_7509312.webp',
    side: 'left',
    objectPosition: 'center 20%'
  },
  {
    year: '2013',
    title: 'First Time on Stage',
    description: 'Performed in her very first recital at Kruti Dance Academy, experiencing the excitement of performing before an audience for the first time.',
    image: '/images/Sanjana Website - My journey so far/_GPJ4818 Copy.webp',
    side: 'right',
    objectPosition: 'top center'
  },
  {
    year: '2013',
    title: 'Discovering Bharatanatyam',
    description: 'Began formal training in Bharatanatyam under the guidance of Guru Mrs. Dina Sheth, beginning a journey rooted in discipline, tradition, and storytelling.',
    image: '/images/Sanjana Website - My journey so far/DSC_0417.webp',
    side: 'left',
    objectPosition: 'center 10%'
  },
  {
    year: '2013',
    title: 'Ghungroo Pooja',
    description: 'Participated in her Ghungroo Pooja, a special milestone symbolizing dedication to the classical art form and the beginning of a deeper commitment to dance.',
    image: '/images/Sanjana Website - My journey so far/IMG_9230.webp',
    side: 'right',
    objectPosition: 'center 10%'
  },
  {
    year: '2014',
    title: 'First Bharatanatyam Recital',
    description: 'Performed in her first Bharatanatyam recital in classical costume. Also served as her first experience as an MC, beginning a growing comfort with stage presence.',
    image: '/images/Sanjana Website - My journey so far/025-DSC_1306.webp',
    side: 'left',
    objectPosition: 'center 30%'
  },
  {
    year: '2017',
    title: 'Growing Through the Art',
    description: 'Years of training in foundational pieces such as Pushpanjali and Alarippu introduced Sanjana to the rhythm, posture, and discipline that form the core of Bharatanatyam.',
    image: '/images/Sanjana Website - My journey so far/0535_mb1040.webp',
    side: 'right',
    objectPosition: 'center 20%'
  },
  {
    year: '2022',
    title: 'Beyond Technique',
    description: 'As training advanced into more complex repertoire, dance evolved into a source of resilience, confidence, and personal growth through artistic refinement.',
    image: '/images/Sanjana Website - My journey so far/Copy of DSC_0283.webp',
    side: 'left',
    objectPosition: 'center 20%',
  },
  {
    year: '2023',
    title: 'The Arangetram Journey',
    description: 'After completing the curriculum in middle school, Sanjana officially began arangetram training — entering a rigorous phase of refinement and artistic maturity.',
    image: '/images/Sanjana Website - My journey so far/IMG_4032.webp',
    side: 'right',
    objectPosition: ''
  },
  {
    year: '2026',
    title: 'Arangetram — The Debut',
    description: 'After years of devotion, discipline, and guidance from her gurus, Sanjana presents her arangetram debut performance on July 25, 2026, at Gas South Theater.',
    image: '/images/photo_8.webp',
    side: 'left',
    objectPosition: 'center 10%',
  },
];

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

const About = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

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
    <div className="bg-black min-h-screen overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] flex items-end pb-16 pt-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/sanjana-about.webp"
            alt="Sanjana Diddige in classical pose"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center -170px' }}
            loading="eager"
            decoding="sync"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        </div>
        <div className="container-luxury relative z-10">
          <motion.p
            {...fadeUp}
            className="text-[11px] uppercase tracking-[0.5em] text-[#D4AF37] font-bold mb-4"
          >
            The Dancer Behind The Art
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl text-white leading-none mb-6"
          >
            About <span className="text-[#D4AF37]">Sanjana</span>
          </motion.h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        </div>
      </section>

      {/* ── INTRO BIO ── */}
      <section className="section-padding bg-[#0A0505]">
        <div className="container-luxury">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div {...fadeUp} className="lg:w-1/2">
              <p className="text-[11px] uppercase tracking-[0.5em] text-[#D4AF37] font-bold mb-5">About Me</p>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">
                Fourteen Years of Devotion to Classical Dance
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Sanjana Diddige has passionately pursued the classical art form of Bharatanatyam under the
                guidance of esteemed Guru Mrs. Dina Sheth and Mrs. Shemoni Parekh at Kruti Dance Academy. Her Arangetram marks a
                significant milestone in her artistic journey, reflecting years of dedication, discipline,
                and devotion to Indian classical dance.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                Through rigorous training, countless performances, and an unwavering love for the art, Sanjana
                has developed not just technical mastery but a deep spiritual connection to Bharatanatyam —
                the sacred language of movement, rhythm, and expression.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute top-6 left-6 -right-6 -bottom-6 bg-[#D4AF37]/15 rounded-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl max-w-md mx-auto">
                <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#D4AF37] z-10" />
                <img
                  src="/images/photo_10.webp"
                  alt="Sanjana Diddige performing Bharatanatyam"
                  className="w-full aspect-[4/5] object-cover object-top hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY / MISSION / PASSION ── */}
      <section className="section-padding bg-black">
        <div className="container-luxury">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.5em] text-[#D4AF37] font-bold mb-4">Her Story</p>
            <h2 className="font-serif text-5xl md:text-6xl text-white mb-6">Philosophy, Mission & Passion</h2>
            <div className="section-title-divider" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '✦',
                label: 'Life Philosophy',
                heading: 'Aut Inveniam Viam Aut Faciam',
                body: 'I didn\'t go searching for a life philosophy; I stumbled into one during arangetram practice — somewhere between exhausted calves, relentless adavus, and late-night desperation.\nA single Latin phrase stayed with me: Aut inveniam viam aut faciam — “I shall either find a way or make one.Over time, Bharatanatyam taught me that perseverance is not about perfection. It is about continuing through exhaustion, repetition, doubt, and discipline — returning each day to grow a little further through the art.”\n',
                image: '/images/Sanjana Website - Arageetram photoshoot glimpses/Sanjana-691-Edit.webp',
                objectPosition: "top 30%"
              },
              {
                icon: '❋',
                label: 'My Mission',
                heading: 'Preserving Tradition Through Practice',
                body: 'Through Bharatanatyam, I have remained deeply connected to my cultural roots while learning the value of discipline, devotion, and artistic expression. I believe traditions survive not simply because they are remembered, but because they are continuously practiced, shared, and carried forward through each generation.',
                image: '/images/Sanjana Website - Arageetram photoshoot glimpses/Sanjana-326-Edit_evotobak_(2).webp',
              },
              {
                icon: '◈',
                label: 'My Passion',
                heading: 'The Language of Movement',
                body: 'What draws me most to Bharatanatyam is its ability to tell stories through rhythm, expression, and movement. From portraying devotion and courage to joy and longing, dance becomes a language capable of expressing emotions words often cannot.Through abhinaya, I have come to love the power of storytelling woven through classical movement and music.',
                image: '/images/Sanjana Website - Arageetram photoshoot glimpses/Sanjana-51-Edit.webp',
              },
            ].map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="glass-card gold-border-gradient overflow-hidden group"
              >
                <div className="h-[320px] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.heading}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{ objectPosition: card.objectPosition || 'center 45%' }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-8">
                  <p className="text-[#D4AF37] text-lg mb-2">{card.icon}</p>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-bold mb-3">{card.label}</p>
                  <h3 className="font-serif text-2xl text-white mb-4">{card.heading}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                    {expandedIndex === i ? card.body : `${card.body.slice(0, 160)}...`}
                  </p>
                  {card.body.length > 160 && (
                    <button 
                      onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                      className="mt-4 text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] font-bold hover:text-white transition-colors"
                    >
                      {expandedIndex === i ? 'Read Less' : 'Read More'}
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="section-padding bg-[#0A0505]">
        <div className="container-luxury">
          <motion.div {...fadeUp} className="text-center mb-20">
            <p className="text-[11px] uppercase tracking-[0.5em] text-[#D4AF37] font-bold mb-4">A Dancer's Path</p>
            <h2 className="font-serif text-5xl md:text-6xl text-white mb-6">My Journey So Far</h2>
            <div className="section-title-divider" />
          </motion.div>

          <div className="relative" ref={timelineRef}>
            {/* Centre line background (faint) */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/5" />
            
            {/* Animated Centre line — grows on scroll */}
            <motion.div 
              style={{ scaleY }}
              className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[#D4AF37]/60 origin-top shadow-[0_0_15px_rgba(212,175,55,0.3)]" 
            />

            <div className="flex flex-col gap-16">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    item.side === 'right' ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Card */}
                  <div className="w-full md:w-[45%]">
                    <div className="glass-card gold-border-gradient overflow-hidden group">
                      <div className="h-[320px] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          style={{ objectPosition: item.objectPosition || 'top' }}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="p-7">
                        <p className="text-[11px] uppercase tracking-[0.4em] text-[#D4AF37] font-bold mb-2">{item.year}</p>
                        <h3 className="font-serif text-2xl text-white mb-3">{item.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Centre dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-black border-2 border-[#D4AF37] items-center justify-center z-10 gold-glow">
                    <span className="text-[#D4AF37] font-serif font-bold text-xs">{item.year.slice(2)}</span>
                  </div>

                  {/* Spacer opposite side */}
                  <div className="hidden md:block w-[45%]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── JOURNEY HIGHLIGHTS ── */}
      <section className="section-padding bg-black">
        <div className="container-luxury">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.5em] text-[#D4AF37] font-bold mb-4">Recognition & Achievements</p>
            <h2 className="font-serif text-5xl md:text-6xl text-white mb-6">Journey Highlights</h2>
            <div className="section-title-divider" />
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
                  <h3 className="font-serif text-xl text-white mb-2">{h.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">{h.desc}</p>
                  <div className="mt-4 w-8 h-px bg-[#D4AF37]/50" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Extra awards slider */}
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

            {/* Custom Navigation Buttons */}
            <button className="awards-prev absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-10 w-10 h-10 md:w-14 h-14 rounded-full bg-black/50 backdrop-blur-md border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0">
              <ChevronLeft size={24} />
            </button>
            <button className="awards-next absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-10 w-10 h-10 md:w-14 h-14 rounded-full bg-black/50 backdrop-blur-md border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0">
              <ChevronRight size={24} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── CLOSING QUOTE ── */}
      <section className="py-24 bg-[#0A0505] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 via-transparent to-[#D4AF37]/5" />
        <div className="container-luxury relative z-10 text-center max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            <p className="text-[#D4AF37] text-4xl mb-6 font-serif">"</p>
            <blockquote className="font-serif italic text-2xl md:text-3xl text-white/80 leading-relaxed mb-8">
              Dance is not just movement — it is the soul speaking in the language of eternity.
            </blockquote>
            <div className="section-title-divider mb-6" />
            <p className="text-gray-500 text-sm uppercase tracking-[0.4em]">— Sanjana Diddige</p>
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

export default About;

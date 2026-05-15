import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, FreeMode } from 'swiper/modules';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import DustParticles from '../components/animations/DustParticles';

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

  const prevImg = (e) => { 
    e.stopPropagation(); 
  };

  return (
    <div className="bg-black min-h-screen overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] flex items-end pb-16 pt-32 overflow-hidden">
        <div className="absolute inset-0">
          <DustParticles />
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
                image: '/images/photoshoot-glimpses/Sanjana-691-Edit.webp',
                objectPosition: "top"
              },
              {
                icon: '❋',
                label: 'My Mission',
                heading: 'Preserving Tradition Through Practice',
                body: 'Through Bharatanatyam, I have remained deeply connected to my cultural roots while learning the value of discipline, devotion, and artistic expression. I believe traditions survive not simply because they are remembered, but because they are continuously practiced, shared, and carried forward through each generation.',
                image: '/images/photoshoot-glimpses/Sanjana-326-Edit_evotobak_(2).webp',
                objectPosition: "top "
              },
              {
                icon: '◈',
                label: 'My Passion',
                heading: 'The Language of Movement',
                body: 'What draws me most to Bharatanatyam is its ability to tell stories through rhythm, expression, and movement. From portraying devotion and courage to joy and longing, dance becomes a language capable of expressing emotions words often cannot.Through abhinaya, I have come to love the power of storytelling woven through classical movement and music.',
                image: '/images/photoshoot-glimpses/Sanjana-51-Edit.webp',
                objectPosition: "top"
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

    </div>
  );
};

export default About;

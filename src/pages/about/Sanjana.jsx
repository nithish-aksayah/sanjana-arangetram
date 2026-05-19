import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Shield, Sparkles, Heart, Quote, Star, BookOpen, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import DustParticles from '../../components/animations/DustParticles';

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

const timeline = [
  {
    year: '2012',
    title: 'The Beginning',
    description: 'Sanjana’s journey at Kruti Dance Academy began with Bollywood dance classes, where movement first became a source of joy, rhythm, and confidence.',
    image: '/images/Sanjana Website - My journey so far/DSC_0215.webp',
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
    image: '/images/photo_9.webp',
    side: 'left',
    objectPosition: 'center 10%',
  },
];

const SanjanaDiddige = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center']
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);


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
      
      {/* 1. HERO BANNER — cinematic full-width, matches About page style */}
      <section className="relative min-h-[60vh] flex items-end pb-16 pt-32 overflow-hidden">
        <div className="absolute inset-0">
          <DustParticles />
          <img
            src="/images/sanjana-about.webp"
            alt="Sanjana Diddige in classical pose"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 20%' }}
            loading="eager"
            decoding="async"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        </div>
        
        <div className="container-luxury relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-[11px] uppercase tracking-[0.5em] text-[#D4AF37] font-bold mb-4"
          >
            Fourteen Years of Devotion
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl text-white leading-none mb-5"
          >
            Sanjana <span className="text-[#D4AF37]">Diddige</span>
          </motion.h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        </div>
      </section>

      {/* ── INTRO BIO ── */}
      <section className="section-padding bg-[#0A0505]">
        <div className="container-luxury">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
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

      {/* 2. JOURNEY STORY SECTION */}
      <section className="py-12 lg:py-16 bg-[#050505]">
        <div className="container-luxury">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              <motion.div 
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-5"
              >
                <div className="sticky top-32">
                  <h2 className="text-4xl md:text-5xl font-serif italic mb-4">A Journey <br/> <span className="text-gold">of the Soul</span></h2>
                  <div className="w-12 h-px bg-gold mb-6" />
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden gold-border-gradient">
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
                className="lg:col-span-7 space-y-4"
              >
                <div className="space-y-4">
                  <p className="text-gray-300 text-lg leading-relaxed mb-3">
                    For over fourteen years, Bharatanatyam has been an integral part of Sanjana Diddige's life. Under the guidance of esteemed Guru Mrs. Dina Sheth and Mrs. Shemoni Parekh at Kruti Dance Academy, what began as childhood curiosity slowly grew into a journey shaped by discipline, perseverance, and devotion to the classical arts.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-3">
                    Through years of training, rehearsals, and performances, Bharatanatyam became more than dance. It became a source of confidence, expression, and personal growth — teaching patience through repetition, resilience through challenge, and the power of storytelling through movement and music.
                  </p>
                  <p className="text-gray-400 text-base leading-relaxed">
                    Her Arangetram marks the culmination of this journey so far: a celebration of tradition, artistry, and the years of dedication that transformed a young student into a performer prepared to step onto the stage.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. VALUES / GROWTH SECTION */}
      <section className="py-12 lg:py-16">
        <div className="container-luxury">
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4 leading-tight">What Dance Has <span className="text-[#D4AF37]">Taught Me</span></h2>
            <div className="w-12 h-px bg-[#D4AF37]" />
          </motion.div>

          <div className="flex flex-col gap-6">
            {[
              { 
                title: 'Resilience', 
                icon: <Shield className="text-gold" size={20} />,
                desc: 'Finding strength through every challenge and repetition in the dance studio. Each practice session built not just technique, but an enduring mental fortitude that carries beyond the stage.',
                image: '/images/photoshoot-glimpses/Sanjana-691-Edit.webp',
                objectPosition: 'center 25%',
              },
              { 
                title: 'Expression', 
                icon: <Sparkles className="text-gold" size={20} />,
                desc: 'Unlocking the power of storytelling through the language of movement and music. Abhinaya taught the ability to communicate emotion, narrative, and devotion without a single word.',
                image: '/images/photoshoot-glimpses/Sanjana-326-Edit_evotobak_(2).webp',
                objectPosition: 'center 20%',
              },
              { 
                title: 'Confidence', 
                icon: <Heart className="text-gold" size={20} />,
                desc: 'Building a source of inner strength that transcends the stage and shapes daily life. Dance became the foundation for self-assurance, poise, and the courage to step forward.',
                image: '/images/photoshoot-glimpses/Sanjana-51-Edit.webp',
                objectPosition: 'center 20%',
              }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 glass-card gold-border-gradient p-6 group hover:bg-gold/5 transition-all duration-500"
              >
                {/* Image thumbnail — increased size & added crisp downscaling */}
                <div className="flex-shrink-0 w-28 h-28 md:w-36 md:h-36 rounded-xl overflow-hidden border border-white/10 shadow-lg bg-black/40">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{ 
                      objectPosition: pillar.objectPosition,
                      imageRendering: '-webkit-optimize-contrast' // Forces sharp bicubic downsampling in Chromium/WebKit
                    }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    {pillar.icon}
                    <p className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-bold">{pillar.title}</p>
                  </div>
                  <p className="text-gray-300 text-base leading-relaxed">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY / MISSION / PASSION ── */}
      <section className="section-padding bg-black">
        <div className="container-luxury">
          <div className="max-w-7xl mx-auto space-y-16">
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-[11px] uppercase tracking-[0.5em] text-[#D4AF37] font-bold mb-4">Her Story</p>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">Philosophy, Mission & <span className="text-[#D4AF37]">Passion</span></h2>
              <div className="w-12 h-px bg-[#D4AF37] mx-auto" />
            </motion.div>

            {[
              {
                icon: '✦',
                label: 'Life Philosophy',
                heading: 'Aut Inveniam Viam Aut Faciam',
                body: `I didn’t go searching for a life philosophy; I stumbled into one during arangetram practice — somewhere between exhausted calves, relentless adavus, and late-night desperation.

A single Latin phrase stayed with me:
Aut inveniam viam aut faciam — “I shall either find a way or make one.”

Over time, Bharatanatyam taught me that perseverance is not about perfection. It is about continuing through exhaustion, repetition, doubt, and discipline — returning each day to grow a little further through the art.`,
              },
              {
                icon: '❋',
                label: 'My Mission',
                heading: 'Preserving Tradition Through Practice',
                body: `Through Bharatanatyam, I have remained deeply connected to my cultural roots while learning the value of discipline, devotion, and artistic expression.

I believe traditions survive not simply because they are remembered, but because they are continuously practiced, shared, and carried forward through each generation.`,
              },
              {
                icon: '◈',
                label: 'My Passion',
                heading: 'The Language of Movement',
                body: `What draws me most to Bharatanatyam is its ability to tell stories through rhythm, expression, and movement. From portraying devotion and courage to joy and longing, dance becomes a language capable of expressing emotions words often cannot.

Through abhinaya, I have come to love the power of storytelling woven through classical movement and music.`,
              },
            ].map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="text-left space-y-4"
              >
                <div className="flex items-center gap-3 text-[#D4AF37]">
                  <span className="text-lg">{card.icon}</span>
                  <span className="text-[11px] uppercase tracking-[0.4em] font-bold">{card.label}</span>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-white font-medium">{card.heading}</h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed whitespace-pre-line pt-2">
                  {card.body}
                </p>
                {i < 2 && <div className="pt-10 border-b border-white/5" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ARANGETRAM MILESTONE SECTION */}
      {/* <section className="py-32 relative overflow-hidden bg-[#050505]">
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
      </section> */}


      {/* 5. RECOGNITION & ACHIEVEMENTS */}
      {/* <section className="section-padding bg-black relative z-10">
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
      </section> */}



        {/* ── TIMELINE ── */}
      <section className="section-padding bg-[#0A0505]">
        <div className="container-luxury">
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-[11px] uppercase tracking-[0.5em] text-[#D4AF37] font-bold mb-4">A Dancer's Path</p>
            <h2 className="font-serif text-5xl md:text-6xl text-white mb-6 leading-tight">My Journey <span className="text-[#D4AF37]">So Far</span></h2>
            <div className="w-12 h-px bg-[#D4AF37] mx-auto" />
          </motion.div>

          <div className="relative" ref={timelineRef}>
            {/* Desktop Centre line background */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/5" />
            
            {/* Desktop Animated Centre line */}
            <motion.div 
              style={{ scaleY }}
              className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[#D4AF37]/60 origin-top shadow-[0_0_15px_rgba(212,175,55,0.3)]" 
            />

            {/* Mobile Left line background */}
            <div className="md:hidden absolute left-8 top-0 bottom-0 w-px bg-white/5" />
            <motion.div 
              style={{ scaleY }}
              className="md:hidden absolute left-8 top-0 bottom-0 w-px bg-[#D4AF37]/60 origin-top shadow-[0_0_15px_rgba(212,175,55,0.3)]" 
            />

            <div className="flex flex-col gap-12 md:gap-16">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year + item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="relative flex items-center md:justify-between group"
                >
                  {/* Mobile layout: badge on left line, card on right */}
                  <div className="absolute left-8 -translate-x-1/2 md:hidden w-16 h-16 rounded-full border-2 border-[#D4AF37] overflow-hidden z-10 bg-black shadow-lg flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: item.objectPosition || 'top' }}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* Mobile Card Container */}
                  <div className="w-full pl-20 md:hidden">
                    <div className="glass-card gold-border-gradient p-6 bg-black/40 backdrop-blur-md shadow-xl hover:bg-gold/5 transition-all duration-500">
                      <p className="text-[11px] uppercase tracking-[0.4em] text-[#D4AF37] font-bold mb-2">{item.year}</p>
                      <h3 className="font-serif text-xl text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Desktop Layout: Left Box / Center Badge / Right Box */}
                  {/* Left Box */}
                  <div className="hidden md:flex w-[45%] pr-12 items-center justify-end">
                    {item.side === 'left' ? (
                      <div className="w-full glass-card gold-border-gradient p-7 bg-black/40 backdrop-blur-md shadow-xl hover:bg-gold/5 transition-all duration-500 text-left">
                        <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-[#D4AF37] transition-colors">{item.title}</h3>
                        <p className="text-gray-300 text-base leading-relaxed">{item.description}</p>
                      </div>
                    ) : (
                      <span className="font-serif text-3xl text-[#D4AF37] font-bold tracking-widest">{item.year}</span>
                    )}
                  </div>

                  {/* Center Badge */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border-2 border-[#D4AF37] overflow-hidden z-10 bg-black shadow-[0_0_20px_rgba(212,175,55,0.2)] group-hover:scale-110 group-hover:border-white transition-all duration-500 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: item.objectPosition || 'top' }}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* Right Box */}
                  <div className="hidden md:flex w-[45%] pl-12 items-center justify-start">
                    {item.side === 'right' ? (
                      <div className="w-full glass-card gold-border-gradient p-7 bg-black/40 backdrop-blur-md shadow-xl hover:bg-gold/5 transition-all duration-500 text-left">
                        <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-[#D4AF37] transition-colors">{item.title}</h3>
                        <p className="text-gray-300 text-base leading-relaxed">{item.description}</p>
                      </div>
                    ) : (
                      <span className="font-serif text-3xl text-[#D4AF37] font-bold tracking-widest">{item.year}</span>
                    )}
                  </div>

                </motion.div>
              ))}
            </div>
          </div>
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

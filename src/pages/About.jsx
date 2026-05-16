import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import DustParticles from '../components/animations/DustParticles';

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

const About = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

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

    </div>
  );
};

export default About;

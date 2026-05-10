import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { invitationData } from '../../data/content';

const Hero = () => {
  const navigate = useNavigate();
  const images = invitationData.hero.sliderImages || [
    '/images/Sanjana-glimpse-01.webp',
    '/images/Sanjana-glimpse-03.webp',
    '/images/Sanjana-glimpse-04.webp',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden pt-20 md:pt-0">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container-luxury relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1"
          >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-cursive text-2xl md:text-3xl lg:text-4xl text-gold mb-4"
            >
              {invitationData.event.title} of
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-6xl md:text-8xl lg:text-8xl font-serif font-bold text-white mb-6 tracking-tight leading-none"
            >
              {invitationData.event.dancerName}
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <div className="w-12 h-px bg-gold"></div>
              <p className="text-xl md:text-2xl text-gray-300 font-sans tracking-wide">
                {invitationData.event.date}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-5"
            >
              <button 
                onClick={() => navigate('/rsvp')}
                className="btn-premium w-full sm:w-auto"
              >
                RSVP Now
              </button>
              <button 
                onClick={() => navigate('/invitation')}
                className="btn-outline-premium w-full sm:w-auto"
              >
                View Invitation
              </button>
            </motion.div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative order-1 lg:order-2"
          >
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-h-[85vh] mx-auto overflow-hidden group">
              {/* Animated Frame */}
              <div className="absolute inset-0 border border-white/10 rounded-2xl z-20 pointer-events-none group-hover:border-gold/30 transition-colors duration-700"></div>
              
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt={invitationData.event.dancerName}
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-contain md:object-cover lg:object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                  loading={currentIndex === 0 ? "eager" : "lazy"}
                  decoding="sync"
                />
              </AnimatePresence>

              {/* Slider Controls */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <button 
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-black transition-all"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="flex gap-2">
                  {images.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`h-1 transition-all duration-500 rounded-full ${idx === currentIndex ? 'w-8 bg-gold' : 'w-2 bg-white/20'}`}
                    />
                  ))}
                </div>
                <button 
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-black transition-all"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Decorative Elements - Hidden on mobile for performance */}
            <div className="hidden md:block absolute -top-10 -right-10 w-32 h-32 border border-gold/20 rounded-full animate-spin-slow pointer-events-none"></div>
            <div className="hidden md:block absolute -bottom-10 -left-10 w-48 h-48 bg-gold/5 rounded-full blur-3xl pointer-events-none animate-float"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { invitationData } from '../../data/content';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import DustParticles from '../animations/DustParticles';

const GallerySection = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const currentGallery = invitationData.gallery.photoshoot || [];

  const handleKeyDown = useCallback((e) => {
    if (lightboxIndex === null) return;
    if (e.key === 'ArrowLeft') {
      setLightboxIndex((prev) => (prev > 0 ? prev - 1 : currentGallery.length - 1));
    } else if (e.key === 'ArrowRight') {
      setLightboxIndex((prev) => (prev < currentGallery.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'Escape') {
      setLightboxIndex(null);
    }
  }, [lightboxIndex, currentGallery.length]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImg = (e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev < currentGallery.length - 1 ? prev + 1 : 0)); };
  const prevImg = (e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev > 0 ? prev - 1 : currentGallery.length - 1)); };

  return (
    <section id="gallery" className="section-padding bg-[#050505] relative overflow-hidden">
      {/* Decorative Glow */}
      <DustParticles />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container-luxury relative z-10">
        
        <div className="section-title-premium">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-6xl text-white mb-4"
          >
            Arangetram <span className="text-gold">Photoshoot Glimpses</span>
          </motion.h2>
          <div className="section-title-divider mb-12"></div>
        </div>


        {/* Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          <AnimatePresence mode="popLayout">
            {currentGallery.map((item, index) => (
              <motion.div
                key={item.url}
                layout
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
                className="relative break-inside-avoid cursor-pointer group overflow-hidden rounded-xl bg-white/[0.03] border border-white/5 mb-8"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={item.url} 
                  alt={item.title} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover transition-transform duration-700 md:group-hover:scale-110"
                />
                
                {/* Overlay - Hidden on mobile for better performance */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 md:group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <div className="flex items-center gap-2 text-[10px] text-white/50 uppercase tracking-[0.2em]">
                    <Maximize2 size={12} /> View Image
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
              onClick={closeLightbox}
            >
            <div className="absolute top-0 left-0 right-0 p-8 flex justify-center z-[110]">
              <button 
                className="group flex flex-col items-center gap-2 text-white/60 hover:text-white transition-all duration-300"
                onClick={closeLightbox}
              >
                <div className="w-12 h-12 rounded-full bg-white/5 group-hover:bg-white/10 flex items-center justify-right border border-white/10 group-hover:border-white/20 transition-all">
                  <X size={24} />
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Close</span>
              </button>
            </div>

              <button className="absolute left-8 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10" onClick={prevImg}>
                <ChevronLeft size={24} />
              </button>
              <button className="absolute right-8 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10" onClick={nextImg}>
                <ChevronRight size={24} />
              </button>
              
              <motion.div 
                key={lightboxIndex}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={currentGallery[lightboxIndex]?.url} 
                  alt={currentGallery[lightboxIndex]?.title} 
                  className="max-w-full max-h-[80vh] object-contain shadow-2xl"
                  decoding="async"
                />
                <div className="mt-8 text-center">
                  <p className="text-white/40 text-xs tracking-[0.2em] uppercase">{lightboxIndex + 1} / {currentGallery.length}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;

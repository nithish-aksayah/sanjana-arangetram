import React from 'react';
import { motion } from 'framer-motion';
import { invitationData } from '../data/content';

const WatchLive = () => {
  const { watchLive } = invitationData;

  return (
    <div className="bg-black min-h-screen flex items-center justify-center pt-20 pb-12 px-4">
      <div className="container-luxury text-center w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card p-6 md:p-12 gold-border-gradient w-full"
        >
          <h1 className="font-cursive text-4xl md:text-6xl text-white mb-6">
            {watchLive.title}
          </h1>
          <div className="section-title-divider mb-8"></div>
          
          <div className="relative w-full aspect-video overflow-hidden rounded-xl border border-[#D4AF37]/30 shadow-2xl">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src={watchLive.videoUrl} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
            </iframe>
          </div>

          <p className="text-gray-400 mt-8 text-sm md:text-base tracking-wide leading-relaxed max-w-2xl mx-auto">
            {watchLive.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WatchLive;

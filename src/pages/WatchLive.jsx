import React from 'react';
import { motion } from 'framer-motion';
import { invitationData } from '../data/content';

const WatchLive = () => {
  const { watchLive } = invitationData;

  return (
    <div className="bg-black min-h-screen flex items-center justify-center pt-20">
      <div className="container-luxury text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="glass-card p-12 md:p-20 gold-border-gradient max-w-2xl mx-auto"
        >
          <h1 className="font-cursive text-5xl md:text-7xl text-white mb-6">
            {watchLive.title}
          </h1>
          <div className="section-title-divider mb-8"></div>
          <p className="text-gold font-serif italic text-2xl md:text-3xl tracking-widest uppercase opacity-80">
            {watchLive.subtitle}
          </p>
          <p className="text-gray-500 mt-6 text-sm uppercase tracking-[0.3em] leading-relaxed">
            {watchLive.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WatchLive;

import React from 'react';
import { motion } from 'framer-motion';

const TimelineConnector = ({ title, subtitle, fromDate, toDate }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex flex-col items-center justify-center py-2 relative"
    >
      {/* Top Vertical Spine */}
      <div className="w-px h-8 bg-gradient-to-b from-transparent via-gold/40 to-gold/80 mb-4" />
      
      {/* Central Marker */}
      <div className="text-center px-4 relative">
        {fromDate && toDate && (
          <div className="flex items-center justify-center gap-3 text-gold/60 uppercase tracking-[0.3em] text-[10px] md:text-xs mb-2 font-sans">
            <span>{fromDate}</span>
            <span className="text-gold">⟶</span>
            <span>{toDate}</span>
          </div>
        )}
        
        {title && (
          <h3 className="font-serif italic text-xl md:text-2xl text-white/90 drop-shadow-md mb-1">{title}</h3>
        )}
        
        {subtitle && (
          <p className="font-sans text-[10px] md:text-xs text-gray-500 uppercase tracking-[0.2em]">{subtitle}</p>
        )}
      </div>

      {/* Bottom Vertical Spine */}
      <div className="w-px h-8 bg-gradient-to-b from-gold/80 via-gold/40 to-transparent mt-4" />
    </motion.div>
  );
};

export default TimelineConnector;

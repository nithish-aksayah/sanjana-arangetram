import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const BottomNav = () => {
  return (
    <div className="bg-black py-16 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col items-center">
        {/* Decorative Down Arrow */}
        <motion.div 
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white mb-12"
        >
          <ChevronDown size={32} strokeWidth={1} />
        </motion.div>

        <div className="flex flex-col md:flex-row gap-16 md:gap-32 text-center">
          <a href="/gallery" className="group">
            <h3 className="font-cursive text-4xl md:text-5xl text-gold mb-2 transition-transform group-hover:scale-105">
              Gallery.
            </h3>
            <div className="w-full h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </a>
          
          <a href="/brochure" className="group">
            <h3 className="font-cursive text-4xl md:text-5xl text-gold mb-2 transition-transform group-hover:scale-105">
              Program Brochure
            </h3>
            <div className="w-full h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;

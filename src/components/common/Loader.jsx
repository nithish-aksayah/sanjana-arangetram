import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center">
      <motion.div 
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          rotate: { repeat: Infinity, duration: 2, ease: "linear" },
          scale: { repeat: Infinity, duration: 2 }
        }}
        className="w-20 h-20 border-4 border-secondary border-t-primary rounded-full mb-6"
      ></motion.div>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1.5, repeatType: 'reverse' }}
        className="text-primary font-serif font-bold text-xl tracking-widest"
      >
        ARANGETRAM 2026
      </motion.p>
    </div>
  );
};

export default Loader;

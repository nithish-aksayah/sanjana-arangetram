import React from 'react';
import { motion } from 'framer-motion';

const DustParticles = () => {
  // Only render if window is defined to avoid issues during potential SSR,
  // though Vite is mostly CSR.
  if (typeof window === 'undefined') return null;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gold rounded-full opacity-20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, Math.random() * -200 - 100],
            x: [null, Math.random() * 100 - 50],
            opacity: [0.2, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default DustParticles;

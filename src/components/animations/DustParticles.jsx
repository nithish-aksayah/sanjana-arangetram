import React, { memo } from 'react';
import { motion } from 'framer-motion';

// Generate random particle configs ONCE at module scope — never recalculated
// on re-renders. This prevents 20 Framer Motion elements from restarting
// their animations whenever the parent component re-renders.
const PARTICLE_COUNT = 20;
const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  id: i,
  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
  targetY: Math.random() * -200 - 100,
  targetX: Math.random() * 100 - 50,
  duration: Math.random() * 10 + 10,
}));

const DustParticles = memo(() => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-1 h-1 bg-gold rounded-full opacity-20"
          initial={{ x: p.x, y: p.y }}
          animate={{
            y: [null, p.targetY],
            x: [null, p.targetX],
            opacity: [0.2, 0.5, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
});

DustParticles.displayName = 'DustParticles';

export default DustParticles;

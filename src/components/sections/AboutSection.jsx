import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-[#0A0505] relative overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-secondary/5 to-transparent pointer-events-none"></div>

      <div className="container-luxury relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <p className="text-[10px] md:text-xs font-bold text-gold uppercase tracking-[0.4em] mb-6">
              The Dancer Behind The Art
            </p>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              About Sanjana
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl">
              Through my journey, I aim to blend my academic pursuits with hands-on 
              experiences to shape a brighter, more equitable future.
            </p>

            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-px bg-gold/50 mt-10"
            />
          </motion.div>

          {/* Right: Image with Offset Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 aspect-square md:aspect-[4/5] lg:aspect-square max-w-md mx-auto">
              {/* Offset Gold Frame */}
              <div className="absolute top-6 left-6 -right-6 -bottom-6 bg-gold/20 rounded-2xl z-0"></div>
              
              {/* Main Image Container */}
              <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="/images/sanjana-about.webp" 
                  alt="Sanjana Diddige" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-gold z-20"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

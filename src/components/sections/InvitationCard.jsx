import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Video, Calendar, Clock } from 'lucide-react';
import { invitationData } from '../../data/content';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const InvitationCard = () => {
  return (
    <section id="invitation" className="section-padding bg-[#050505] relative overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container-luxury relative z-10">
        <div className="section-title-premium">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-cursive"
          >
            You are Invited
          </motion.h2>
          <div className="section-title-divider"></div>
        </div>

        <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden glass-card gold-border-gradient">
          
          {/* Centered Invitation Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full aspect-auto flex items-center justify-center bg-black/40 relative group"
          >
            <img 
              src="/images/Invitation.webp" 
              alt="Invitation Details" 
              className="w-full h-auto object-contain"
              loading="lazy"
            />
            
            {/* Elegant Corner Accents */}
            <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-gold/40 pointer-events-none"></div>
            <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-gold/40 pointer-events-none"></div>
            <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-gold/40 pointer-events-none"></div>
            <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-gold/40 pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InvitationCard;

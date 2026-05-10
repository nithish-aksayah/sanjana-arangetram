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

        <div className="flex flex-col lg:flex-row items-stretch gap-0 rounded-2xl overflow-hidden glass-card gold-border-gradient">
          
          {/* Left: Invitation Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 aspect-[4/5] bg-black/40 flex items-center justify-center overflow-hidden"
          >
            <img 
              src="/images/Invitation.webp" 
              alt="Invitation Details" 
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </motion.div>

          {/* Right: Swiper Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 aspect-[4/5] relative group overflow-hidden"
          >
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              speed={2000}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              className="w-full h-full"
            >
              {invitationData.gallery?.performance?.map((img, idx) => (
                <SwiperSlide key={idx} className="h-full">
                  <div className="w-full h-full relative overflow-hidden">
                    <img 
                      src={img.url} 
                      alt={`Performance ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Corner Accents */}
            <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-gold/40 z-20"></div>
            <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-gold/40 z-20"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default InvitationCard;

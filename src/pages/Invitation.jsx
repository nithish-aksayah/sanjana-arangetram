import React, { useState } from 'react';
import InvitationCard from '../components/sections/InvitationCard';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';

const Invitation = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <div className="bg-black min-h-screen pt-20">
      <InvitationCard />

      {/* Invitation Poster Section */}
      <section className="">
        <div className="container-luxury">

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <a 
              href="/images/Invitation.webp" 
              download="Sanjana_Arangetram_Invitation.webp"
              className="btn-premium inline-block"
            >
              Download Invitation
            </a>
          </motion.div>
        </div>
      </section>

      {/* Lightbox for full sized view */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button 
              className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors z-[110]"
              onClick={() => setIsLightboxOpen(false)}
            >
              <X size={24} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl max-h-screen flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src="/images/Invitation.webp" 
                alt="Invitation Full Size" 
                className="max-w-full max-h-[95vh] object-contain shadow-2xl rounded-lg"
                decoding="async"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Invitation;

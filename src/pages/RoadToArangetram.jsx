import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, Heart, ChevronDown, Quote, Music, BookOpen } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const RoadToArangetram = () => {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const targetDate = new Date('2026-07-25T18:00:00');
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;
      const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
      setDaysLeft(days > 0 ? days : 0);
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 86400000);
    return () => clearInterval(interval);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="bg-black text-white selection:bg-gold/30 overflow-x-hidden font-serif">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/sanjana%20website%20-%20Road%20to%20arangetram/IMG_2759.jpg')] bg-cover bg-center opacity-40 scale-110" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>

        <div className="container-luxury relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="text-gold uppercase tracking-[0.6em] text-[10px] md:text-xs font-bold mb-6 drop-shadow-glow">
              A Dancer's Journal
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-none tracking-tight">
              The Road to <br/>
              <span className="text-gold italic">Arangetram</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 italic max-w-2xl mx-auto leading-relaxed">
              “A journey shaped through years of discipline, devotion, and quiet transformation.”
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <ChevronDown size={24} className="text-gold" />
        </div>
      </section>

      {/* SECTION WRAPPER TO CONTROL GAPS */}
      <div className="relative">
        
        {/* Vertical Journey Line removed as requested */}

        {/* 2. REHEARSALS SECTION */}
        <section className="py-20 relative">
          <div className="container-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <span className="text-gold uppercase tracking-widest text-[10px] font-bold">August 2025</span>
                <h2 className="text-4xl md:text-5xl italic leading-tight">Endless Repetition, <br/>Quiet Refinement</h2>
                <p className="text-gray-300 italic text-lg leading-relaxed">
                  With the beginning of private arangetram rehearsals, training entered a far more demanding rhythm. Long evenings of repetition, correction, and refinement slowly transformed movement into instinct — adavus practiced until tāla settled naturally into the body and every detail carried intention.
                </p>
                <div className="flex gap-4 pt-4">
                  <div className="w-12 h-px bg-gold/30 mt-3" />
                  <p className="text-gold/60 text-sm uppercase tracking-widest">Mirror Reflections & Ankle Bells</p>
                </div>
              </motion.div>
              <motion.div 
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="aspect-[4/3] glass-card gold-border-gradient overflow-hidden">
                  <Swiper
                    modules={[Autoplay, EffectFade, Pagination]}
                    effect="fade"
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    loop={true}
                    pagination={{ clickable: true }}
                    className="w-full h-full luxury-swiper"
                  >
                    {[
                      'IMG_2621.jpg',
                      'IMG_2759.jpg',
                      'IMG_2763.jpg',
                      'IMG_2782.jpg'
                    ].map((img, idx) => (
                      <SwiperSlide key={idx}>
                        <div className="relative w-full h-full overflow-hidden">
                          <img 
                            src={`/images/sanjana website - Road to arangetram/${img}`} 
                            alt={`Practice ${idx + 1}`} 
                            className="w-full h-full object-cover animate-ken-burns" 
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="absolute -top-4 -right-4 text-8xl font-serif text-gold/5 -z-10">01</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. DETAILS TAKING SHAPE */}
        <section className="py-20 relative bg-[#050505]/50">
          <div className="container-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="aspect-square glass-card gold-border-gradient overflow-hidden">
                  <Swiper
                    modules={[Autoplay, EffectFade, Pagination]}
                    effect="fade"
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                    pagination={{ clickable: true }}
                    className="w-full h-full luxury-swiper"
                  >
                    {[
                      '/images/Sanjana Website/IMG_1210.JPG',
                      '/images/Sanjana Website/DSC_0417.JPG',
                      '/images/Sanjana Website - My journey so far/0535_mb1040.webp',
                      '/images/Sanjana Website - My journey so far/Copy of DSC_0283.webp'
                    ].map((img, idx) => (
                      <SwiperSlide key={idx}>
                        <div className="relative w-full h-full overflow-hidden">
                          <img 
                            src={img} 
                            alt={`Detail ${idx + 1}`} 
                            className="w-full h-full object-cover animate-ken-burns" 
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </motion.div>
              <motion.div 
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="order-1 lg:order-2 space-y-6"
              >
                <span className="text-gold uppercase tracking-widest text-[10px] font-bold">December 2025</span>
                <h2 className="text-4xl md:text-5xl italic leading-tight">Details <br/>Taking Shape</h2>
                <p className="text-gray-300 italic text-lg leading-relaxed">
                  As the arangetram slowly moved closer to reality, costume fittings, temple jewelry, and stage design began coming together piece by piece. What once existed only in imagination gradually transformed into the visual world of the performance.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4. PHOTOSHOOT SECTION */}
        <section className="py-20 relative">
          <div className="container-luxury text-center">
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-2xl mx-auto mb-16"
            >
              <span className="text-gold uppercase tracking-widest text-[10px] font-bold mb-4 block">February 2026</span>
              <h2 className="text-4xl md:text-5xl italic mb-6">Capturing the Artist</h2>
              <p className="text-gray-400 italic text-lg">
                The photoshoot became more than preparation for an event; it became a way of preserving a moment suspended between student and performer.
              </p>
            </motion.div>
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative px-4 md:px-12"
            >
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                centeredSlides={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="luxury-swiper photoshoot-carousel !pb-16"
              >
                {[
                  { src: '/images/photoshoot-glimpses/Sanjana-110-Edit.webp', label: '' },
                  { src: '/images/photoshoot-glimpses/Sanjana-69-Edit-2_tz_dramatic.webp', label: '' },
                  { src: '/images/photoshoot-glimpses/Sanjana-187-Edit.webp', label: '' },
                  { src: '/images/photoshoot-glimpses/Sanjana-689-Edit.webp', label: '' },
                  { src: '/images/photoshoot-glimpses/Sanjana-318-Edit.webp', label: '' }
                ].map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="relative aspect-[3/4] gold-border-gradient overflow-hidden rounded-xl group bg-white/5">
                      <img 
                        src={item.src} 
                        alt={item.label} 
                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                        <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold">{item.label}</span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        </section>

        {/* 5. THE FIRST INVITATION */}
        <section className="py-20 relative bg-[#050505]/50">
          <div className="container-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <span className="text-gold uppercase tracking-widest text-[10px] font-bold">May 2026</span>
                <h2 className="text-4xl md:text-5xl italic leading-tight">The <span className="text-gold">First Invitation</span></h2>
                <p className="text-gray-300 italic text-lg leading-relaxed">
                  Before reaching family and friends, the first invitation was offered to my gurus during a pooja — a quiet moment of gratitude, blessing, and the beginning of the final chapter leading to arangetram.
                </p>
              </motion.div>
              <motion.div 
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass-card gold-border-gradient p-4"
              >
                <img src="/images/Invitation.webp" alt="Invitation" className="w-full h-full object-cover shadow-2xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 6. STAGE REHEARSAL */}
        <section className="py-20 relative">
          <div className="container-luxury text-center">
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <span className="text-gold uppercase tracking-widest text-[10px] font-bold mb-4 block">July 1, 2026</span>
              <h2 className="text-4xl md:text-5xl italic mb-6">First Steps onto the Stage</h2>
              <p className="text-gold/60 uppercase tracking-[0.3em] text-[10px] font-bold mb-8 italic">— Coming Up —</p>
              <p className="text-gray-400 italic text-xl leading-relaxed">
                The first stage rehearsal transformed the performance from imagination into reality. Beneath the theater lights, familiar movements suddenly carried a different weight — marking the moment the journey toward arangetram finally began to feel real.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 7. COUNTDOWN SECTION */}
        <section className="py-24 border-t border-white/5 relative overflow-hidden bg-black text-center">
          <div className="container-luxury relative z-10">
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-10 block">July 25, 2026</p>
              <h2 className="text-3xl md:text-4xl italic mb-12 text-white/80">Days Until Arangetram</h2>
              
              <div className="relative inline-block">
                <span className="text-8xl md:text-[10rem] font-serif text-gold drop-shadow-glow leading-none select-none">
                  {daysLeft}
                </span>
                <div className="absolute -inset-10 border border-gold/5 rounded-full animate-pulse -z-10" />
              </div>

              <p className="mt-16 text-gray-400 italic text-lg max-w-2xl mx-auto leading-relaxed">
                “Every rehearsal now carries a different weight — the quiet realization that years of preparation are slowly approaching the stage.”
              </p>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default RoadToArangetram;

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, Heart, ChevronDown, Quote, Music, BookOpen } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import DustParticles from '../components/animations/DustParticles';
import TimelineConnector from '../components/ui/TimelineConnector';
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
      
      {/* 1. HERO BANNER — cinematic full-width */}
      <section className="relative min-h-[60vh] flex items-end pb-16 pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <DustParticles />
          <img 
            src="/images/sanjana website - Road to arangetram/IMG_2621.jpg"
            alt="Road to Arangetram"
            className="w-full h-full object-cover opacity-90"
            style={{ objectPosition: 'center 30%' }}
            loading="eager"
            decoding="async"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
          {/* Decorative Accents */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        </div>

        <div className="container-luxury relative z-10 text-left">
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-gold uppercase tracking-[0.5em] text-xs font-bold mb-4 drop-shadow-glow">A Dancer's Journal</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 text-white leading-tight">The Road to <span className="text-[#D4AF37]">Arangetram</span></h1>
            <p className="text-lg md:text-xl font-sans text-gray-300 max-w-3xl leading-relaxed mb-6">
              “A journey shaped through years of discipline, devotion, and quiet transformation.”
            </p>
            <div className="w-24 h-px bg-[#D4AF37]" />
          </motion.div>
        </div>
      </section>

      {/* SECTION WRAPPER TO CONTROL GAPS */}
      <div className="relative">
        
        <TimelineConnector title="The Journey Begins" />

        {/* 2. REHEARSALS SECTION */}
        <section className="py-10 relative">
          <div className="container-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <motion.div 
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-7 space-y-4 text-left"
              >
                <span className="text-gold uppercase tracking-widest text-[10px] font-bold">August 2025</span>
                <h2 className="text-4xl md:text-5xl italic leading-tight text-white">Endless Repetition, <br/>Quiet Refinement</h2>
                <p className="text-gray-300 font-sans text-lg leading-relaxed">
                  With the beginning of private arangetram rehearsals, training entered a far more demanding rhythm. Long evenings of repetition, correction, and refinement slowly transformed movement into instinct — adavus practiced until tāla settled naturally into the body and every detail carried intention.
                </p>
                <div className="flex gap-4 pt-4">
                  <div className="w-12 h-px bg-gold/30 mt-3" />
                  <p className="text-gold/60 text-sm uppercase tracking-widest font-sans">Mirror Reflections & Ankle Bells</p>
                </div>
              </motion.div>
              <motion.div 
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-5 relative group max-w-[280px] mx-auto lg:max-w-none w-full"
              >
                <div className="aspect-[4/3] glass-card gold-border-gradient overflow-hidden bg-black/40 border border-gold/20">
                  <Swiper
                    modules={[Autoplay, EffectFade, Pagination]}
                    effect="fade"
                    autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                    loop={true}
                    pagination={{ clickable: true }}
                    observer={true}
                    observeParents={true}
                    watchSlidesProgress={true}
                    preloadImages={false}
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
                            loading="lazy"
                            decoding="async"
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

        <TimelineConnector 
          fromDate="August 2025" 
          toDate="December 2025" 
          title="A Journey Deepens" 
        />

        {/* 3. DETAILS TAKING SHAPE */}
        <section className="py-10 relative bg-[#050505]/50">
          <div className="container-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <motion.div 
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-5 order-2 lg:order-1 max-w-[280px] mx-auto lg:max-w-none w-full"
              >
                <div className="aspect-square glass-card gold-border-gradient overflow-hidden bg-black/40 border border-gold/20">
                  <Swiper
                    modules={[Autoplay, EffectFade, Pagination]}
                    effect="fade"
                    autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                    loop={true}
                    pagination={{ clickable: true }}
                    observer={true}
                    observeParents={true}
                    watchSlidesProgress={true}
                    preloadImages={false}
                    className="w-full h-full luxury-swiper"
                  >
                    {[
                      '/images/Sanjana Website/IMG_1210.JPG',
                      '/images/Sanjana Website - My journey so far/DSC_0417.webp',
                      '/images/Sanjana Website - My journey so far/0535_mb1040.webp',
                      '/images/Sanjana Website - My journey so far/Copy of DSC_0283.webp'
                    ].map((img, idx) => (
                      <SwiperSlide key={idx}>
                        <div className="relative w-full h-full overflow-hidden">
                          <img 
                            src={img} 
                            alt={`Detail ${idx + 1}`} 
                            className="w-full h-full object-cover animate-ken-burns"
                            loading="lazy"
                            decoding="async"
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
                className="lg:col-span-7 order-1 lg:order-2 space-y-4 text-left"
              >
                <span className="text-gold uppercase tracking-widest text-[10px] font-bold">December 2025</span>
                <h2 className="text-4xl md:text-5xl italic leading-tight text-white">Details <br/>Taking Shape</h2>
                <p className="text-gray-300 font-sans text-lg leading-relaxed">
                  As the arangetram slowly moved closer to reality, costume fittings, temple jewelry, and stage design began coming together piece by piece. What once existed only in imagination gradually transformed into the visual world of the performance.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <TimelineConnector 
          fromDate="December 2025" 
          toDate="February 2026" 
          title="Preserving the Moment" 
        />

        {/* 4. PHOTOSHOOT SECTION */}
        <section className="py-10 relative">
          <div className="container-luxury text-center">
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-2xl mx-auto mb-16"
            >
              <span className="text-gold uppercase tracking-widest text-[10px] font-bold mb-4 block">February 2026</span>
              <h2 className="text-4xl md:text-5xl italic mb-6 text-white">Capturing the Artist</h2>
              <p className="text-gray-300 font-sans text-lg leading-relaxed">
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
                autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                observer={true}
                observeParents={true}
                watchSlidesProgress={true}
                preloadImages={false}
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
                    <div className="relative aspect-[3/4] gold-border-gradient overflow-hidden rounded-xl group bg-white/5 border border-gold/20">
                      <img 
                        src={item.src} 
                        alt={item.label} 
                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
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

        <TimelineConnector 
          fromDate="February 2026" 
          toDate="May 2026" 
          title="Sharing the Blessing" 
        />

        {/* 5. THE FIRST INVITATION */}
        <section className="py-10 relative bg-[#050505]/50">
          <div className="container-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <motion.div 
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-7 space-y-4 text-left"
              >
                <span className="text-gold uppercase tracking-widest text-[10px] font-bold">May 2026</span>
                <h2 className="text-4xl md:text-5xl italic leading-tight text-white">The <span className="text-gold">First Invitation</span></h2>
                <p className="text-gray-300 font-sans text-lg leading-relaxed">
                  Before reaching family and friends, the first invitation was offered to my gurus during a pooja — a quiet moment of gratitude, blessing, and the beginning of the final chapter leading to arangetram.
                </p>
              </motion.div>
              <motion.div 
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-5 max-w-[280px] mx-auto lg:max-w-none w-full glass-card gold-border-gradient p-4 bg-black/40 border border-gold/20"
              >
                <img src="/images/Invitation.webp" alt="Invitation" className="w-full h-full object-cover shadow-2xl" loading="lazy" decoding="async" />
              </motion.div>
            </div>
          </div>
        </section>

        <TimelineConnector 
          fromDate="May 2026" 
          toDate="July 2026" 
          title="The Stage Draws Near" 
        />

        {/* 6. STAGE REHEARSAL */}
        <section className="py-10 relative">
          <div className="container-luxury text-center">
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <span className="text-gold uppercase tracking-widest text-[10px] font-bold mb-4 block">July 1, 2026</span>
              <h2 className="text-4xl md:text-5xl italic mb-6 text-white">First Steps onto the Stage</h2>
              <p className="text-gold/60 uppercase tracking-[0.3em] text-[10px] font-bold mb-8 italic">— Coming Up —</p>
              <p className="text-gray-300 font-sans text-xl leading-relaxed max-w-2xl mx-auto">
                The first stage rehearsal transformed the performance from imagination into reality. Beneath the theater lights, familiar movements suddenly carried a different weight — marking the moment the journey toward arangetram finally began to feel real.
              </p>
            </motion.div>
          </div>
        </section>

        <TimelineConnector 
          title="From Practice to Performance" 
        />

        {/* 7. COUNTDOWN SECTION */}
        <section className="py-12 border-t border-white/5 relative overflow-hidden bg-black text-center">
          <div className="container-luxury relative z-10">
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-10 block">July 25, 2026</p>
              <h2 className="text-3xl md:text-4xl italic mb-6 text-white/80 font-serif">Days Until Arangetram</h2>
              
              <div className="relative inline-block">
                <span className="text-8xl md:text-[10rem] font-serif text-gold drop-shadow-glow leading-none select-none">
                  {daysLeft}
                </span>
                <div className="absolute -inset-10 border border-gold/5 rounded-full animate-pulse -z-10" />
              </div>

              <p className="mt-8 text-gray-300 font-sans text-lg max-w-2xl mx-auto leading-relaxed">
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

import React from 'react';
import { motion } from 'framer-motion';
import DustParticles from '../../components/animations/DustParticles';

const fadeUp = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-30px" },
  transition: {
    duration: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.3 : 0.5,
    ease: "easeOut"
  },
};

const musicians = [
  {
    instrument: 'Vocal',
    name: 'Sidharth Kaushik',
    bio: 'Sidharth Kaushik is a rising senior at Georgia Tech pursuing Computer Engineering and has trained in Carnatic vocal music for over fifteen years. He has studied under Smt. Kasthuri Sivakumar, Shri P. V. Ajay Namboothiri, Cherthalai Dr. Renganatha Sharma, and currently trains under Vidwan Salem Shriram and Vidwan K. S. Vishnudev Namboothiri. Sidharth has performed in numerous concerts across the United States and India.'
  },
  {
    instrument: 'Flute',
    name: 'Sai Kishore Ravisankar',
    bio: 'Sai Kishore Ravisankar is a classically trained Carnatic flutist from Tiruchirappalli, Tamil Nadu. He began learning flute at a young age under Sri Trichy J. Venkatraman and is currently under the guidance of Smt. Geetha Jayagopal. Sai has performed on All India Radio, Indian television, and at numerous prestigious venues across India and the United States.'
  },
  {
    instrument: 'Violin',
    name: 'Anand Krishnan',
    bio: 'Born and raised in Atlanta, Anand Krishnan began studying the violin at the age of eight and currently trains under renowned violinist Sri Vittal Rangan. He has accompanied numerous vocalists and presented solo performances across the United States, including for CAMAGA and GCD. Anand is the recipient of several regional and national Saptami Instrumental Competition awards and is an engineer based in Atlanta.'
  },
  {
    instrument: 'Mridangam',
    name: 'Dr. Amit Surya Narayan',
    bio: 'Dr. Amit Surya Narayan began studying the mridangam in Atlanta in 2000 under his guru, Sri Suresh Kothandaraman. In addition to Carnatic percussion, he has developed a passion for drums and dhol. After completing his medical training and serving as an Assistant Professor at Mount Sinai Hospital in New York City, Dr. Amit returned to Atlanta, where he practices as a primary care physician while continuing his musical journey.'
  },
  {
    instrument: 'Tabla & Supporting Vocal',
    name: 'Amol Khanapurkar',
    bio: 'Amol Khanapurkar is an accomplished tabla artist and vocalist whose performances have taken him to leading concert stages across Europe, Asia, and Australia. He has collaborated with eminent musicians including Dr. L. Subramaniam, Kavita Krishnamurti, Pandit Hariprasad Chaurasia, and Ustad Halim Jaffer Khan. Trained under Pandit Sadashiv Pawar, Amol combines a distinguished musical career with leadership in the global communications industry while remaining deeply committed to promoting Indian classical arts.'
  }
];

const Orchestra = () => {
  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] flex items-end pb-16 pt-32 overflow-hidden">
        <div className="absolute inset-0">
          <DustParticles />
          <img
            src="/images/sanjana-about.webp"
            alt="Orchestra Hero"
            className="w-full h-full object-cover opacity-60"
            style={{ objectPosition: 'center -170px' }}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        </div>
        <div className="container-luxury relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#D4AF37] leading-tight mb-6"
          >
            The Orchestra
          </motion.h1>
          <motion.p
            {...fadeUp}
            className="text-white/80 text-base md:text-xl max-w-4xl mx-auto italic font-serif leading-relaxed px-2"
          >
            "Every Bharatanatyam performance comes alive through the dialogue between dance and music. I am deeply honored to be accompanied by an extraordinary ensemble of musicians whose artistry brings every composition to life."
          </motion.p>
        </div>
      </section>

      {/* ── MUSICIANS GRID ── */}
      <section className="section-padding bg-[#0A0505]">
        <div className="container-luxury max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {musicians.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col border border-white/5 rounded-2xl p-8 bg-black/40 hover:bg-[#D4AF37]/5 hover:border-[#D4AF37]/30 transition-all duration-500"
              >
                <div className="mb-6">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-bold block mb-2">
                    {item.instrument}
                  </span>
                  <h3 className="font-serif text-3xl text-white">
                    {item.name}
                  </h3>
                </div>
                
                <div className="w-12 h-px bg-[#D4AF37]/30 mb-6 group-hover:w-24 group-hover:bg-[#D4AF37] transition-all duration-500" />
                
                <p className="text-gray-300/80 leading-relaxed text-sm md:text-base text-justify">
                  {item.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Orchestra;

import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';

const ScheduleTimeline = () => {
  const events = [
    { time: '4:30 PM', title: 'Arrival & Welcome', desc: 'Guests arrive and are welcomed with traditional refreshments.' },
    { time: '5:00 PM', title: 'Lighting of the Lamp', desc: 'Inauguration of the event with divine blessings.' },
    { time: '5:15 PM', title: 'Pushpanjali & Alarippu', desc: 'The opening dance pieces of the Arangetram.' },
    { time: '6:30 PM', title: 'Intermission', desc: 'A short break with snacks served in the lobby.' },
    { time: '7:00 PM', title: 'Main Performance (Varnam)', desc: 'The most complex and highlight piece of the evening.' },
    { time: '8:30 PM', title: 'Mangalam & Felicitation', desc: 'Concluding piece followed by words from the Guru and family.' },
    { time: '9:00 PM', title: 'Dinner Service', desc: 'Traditional South Indian feast to conclude the celebrations.' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title="Event Schedule" subtitle="What to Expect" />

        <div className="max-w-4xl mx-auto mt-16">
          {events.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start mb-12 last:mb-0"
            >
              <div className="w-24 md:w-32 flex-shrink-0 text-right pr-6 md:pr-10">
                <span className="text-primary font-bold">{event.time}</span>
              </div>
              <div className="relative pl-6 md:pl-10 border-l-2 border-secondary/30 pb-4">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-secondary shadow-sm"></div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleTimeline;

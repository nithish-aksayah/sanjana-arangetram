import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import { Calendar, Clock, MapPin, Info } from 'lucide-react';

const EventDetails = () => {
  const details = [
    { icon: <Calendar className="text-secondary" size={32} />, title: 'Date', content: 'Saturday, August 15th, 2026' },
    { icon: <Clock className="text-secondary" size={32} />, title: 'Time', content: '5:00 PM to 9:00 PM' },
    { icon: <MapPin className="text-secondary" size={32} />, title: 'Venue', content: 'The Grand Auditorium, City Cultural Center' },
    { icon: <Info className="text-secondary" size={32} />, title: 'Parking', content: 'Valet parking available at the main entrance' },
  ];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <SectionTitle title="Event Information" subtitle="Plan Your Visit" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {details.map((detail, index) => (
            <div key={index} className="card p-8 text-center flex flex-col items-center">
              <div className="mb-4">{detail.icon}</div>
              <h3 className="text-xl font-bold mb-2">{detail.title}</h3>
              <p className="text-gray-600">{detail.content}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h3 className="text-3xl font-serif font-bold text-primary mb-6">Dress Code</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              As this is a traditional cultural event, we encourage our guests to wear traditional Indian attire or formal wear. 
            </p>
            <h3 className="text-3xl font-serif font-bold text-primary mb-6">About the Venue</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              The Grand Auditorium is located in the heart of the city's cultural district. It features world-class acoustics and seating designed specifically for classical performances.
            </p>
          </div>
          <div className="md:w-1/2 w-full h-[400px] bg-gray-200 rounded-2xl overflow-hidden relative shadow-lg">
             {/* Mock Map */}
             <div 
               className="absolute inset-0 bg-cover bg-center" 
               style={{ backgroundImage: `url(https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-122.4194,37.7749,12,0/800x400?access_token=${import.meta.env.VITE_MAPBOX_ACCESS_TOKEN})` }}
             ></div>
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg shadow-xl flex items-center gap-2">
                  <MapPin className="text-primary" />
                  <span className="font-bold">The Grand Auditorium</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;

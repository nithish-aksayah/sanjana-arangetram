import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import Button from '../components/common/Button';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 bg-accent/20 min-h-screen">
      <div className="container mx-auto px-6">
        <SectionTitle title="Get in Touch" subtitle="Contact Us" />
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mt-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-3xl font-serif font-bold text-primary">Need Assistance?</h3>
            <p className="text-gray-700 text-lg">
              If you have any questions regarding the event, venue, or RSVP, please feel free to reach out to us. We are happy to help!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-bold">Call Us</p>
                  <p className="text-lg font-medium">+1 (234) 567-8900</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-bold">Email Us</p>
                  <p className="text-lg font-medium">contact@arangetram.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-primary">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-bold">WhatsApp</p>
                  <p className="text-lg font-medium">+1 (234) 567-8900</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="text-xl font-bold mb-4">Follow Anjali's Journey</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-all">
                  <span className="font-bold">IG</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-accent-dark/20">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-primary" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-primary" placeholder="Your Email" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-primary" placeholder="How can we help?"></textarea>
              </div>
              <Button className="w-full">SEND MESSAGE</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

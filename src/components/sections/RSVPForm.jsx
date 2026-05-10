import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { invitationData } from '../../data/content';
import { Send, User, Users, MessageSquare, Phone, Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { db } from '../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    attendance: 'yes',
    guests: '1',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      // Basic validation
      if (!formData.name || !formData.phone) {
        throw new Error('Name and Phone Number are required.');
      }

      await addDoc(collection(db, 'rsvps'), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        guests: formData.attendance === 'no' ? 0 : (parseInt(formData.guests) || 1),
        attendingStatus: formData.attendance,
        message: formData.message,
        timestamp: serverTimestamp()
      });
      
      // Sync with Google Sheets
      try {
        await fetch('https://script.google.com/macros/s/AKfycbzVZecBYMdsjpvhEd6Bg6Ma8Fa-Nkd6CdJydhQf8V31tp4S460SnUZdGGPN42vjnw_i/exec', {
          method: 'POST',
          mode: 'no-cors', // Essential for Google Apps Script redirects
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: "rsvp",
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            guests: formData.attendance === 'no' ? 0 : (parseInt(formData.guests) || 1),
            attendingStatus: formData.attendance,
            message: formData.message
          })
        });
      } catch (sheetError) {
        console.error('Google Sheets Sync Error:', sheetError);
        // We don't throw here to ensure the user still sees the Firebase success
      }

      setStatus({ 
        type: 'success', 
        message: 'Thank you! Your RSVP has been submitted successfully.' 
      });
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        attendance: 'yes',
        guests: '1',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      setStatus({ 
        type: 'error', 
        message: error.message || 'Something went wrong. Please try again later.' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="rsvp" className="section-padding bg-black relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container-luxury relative z-10">
        <div className="section-title-premium">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-cursive"
          >
            RSVP
          </motion.h2>
          <div className="section-title-divider"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left: Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden glass-card gold-border-gradient group max-w-lg mx-auto">
              <img 
                src="/images/Sanjana-glimpse-03.webp" 
                alt="Sanjana RSVP" 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </motion.div>

          {/* Right: Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="glass-card p-8 md:p-12 gold-border-gradient shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] ml-1">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                      <input 
                        type="text" 
                        name="name"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-sm py-4 pl-12 pr-4 text-white focus:outline-none focus:border-gold/50 transition-colors"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] ml-1">Will you attend? *</label>
                    <select 
                      name="attendance"
                      className="w-full bg-white/5 border border-white/10 rounded-sm py-4 px-4 text-white focus:outline-none focus:border-gold/50 transition-colors appearance-none cursor-pointer"
                      value={formData.attendance}
                      onChange={handleChange}
                    >
                      <option value="yes" className="bg-[#111]">Yes, I'll be there</option>
                      <option value="no" className="bg-[#111]">No, unfortunately I can't</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] ml-1">Phone Number *</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-sm py-4 pl-12 pr-4 text-white focus:outline-none focus:border-gold/50 transition-colors"
                        placeholder="+1 (000) 000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] ml-1">Number of Guests</label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                      <input 
                        type="number" 
                        name="guests"
                        min="1"
                        max="10"
                        className="w-full bg-white/5 border border-white/10 rounded-sm py-4 pl-12 pr-4 text-white focus:outline-none focus:border-gold/50 transition-colors"
                        value={formData.guests}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] ml-1">Email Address (Optional)</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                    <input 
                      type="email" 
                      name="email"
                      className="w-full bg-white/5 border border-white/10 rounded-sm py-4 pl-12 pr-4 text-white focus:outline-none focus:border-gold/50 transition-colors"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] ml-1">Message (Optional)</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-6 text-white/20" size={18} />
                    <textarea 
                      name="message"
                      className="w-full bg-white/5 border border-white/10 rounded-sm py-4 pl-12 pr-4 text-white focus:outline-none focus:border-gold/50 transition-colors min-h-[120px] resize-none"
                      placeholder="Your wishes or special notes..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {status.message && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-sm flex items-center gap-3 ${
                      status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}
                  >
                    {status.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                    <p className="text-sm">{status.message}</p>
                  </motion.div>
                )}

                <button 
                  type="submit" 
                  disabled={loading}
                  className="btn-premium w-full flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Submit RSVP
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default RSVPForm;

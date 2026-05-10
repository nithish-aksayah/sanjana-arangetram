import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { invitationData } from '../../data/content';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { submitToGoogleSheets } from "../../services/googleSheets";
import { Send, User, Users, MessageSquare, Phone, Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const RSVPForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("");
  const [attendingStatus, setAttendingStatus] = useState("yes");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return; // Prevent duplicate submissions

    try {
      setLoading(true);
      setStatus({ type: '', message: '' });

      const payload = {
        name,
        email,
        phone,
        guests: attendingStatus === 'no' ? 0 : (parseInt(guests) || 1),
        attendingStatus,
        message,
        createdAt: new Date(),
      };

      // 1. FIREBASE SAVE
      await addDoc(collection(db, "rsvps"), payload);

      // 2. GOOGLE SHEET SAVE (via reusable service)
      await submitToGoogleSheets({
        ...payload,
        type: "rsvp",
        status: attendingStatus
      });

      setStatus({ 
        type: 'success', 
        message: 'RSVP Submitted Successfully!' 
      });

      // Clear form
      setName("");
      setEmail("");
      setPhone("");
      setGuests("");
      setAttendingStatus("yes");
      setMessage("");

    } catch (error) {
      console.error("Submission Error:", error);
      setStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again later.' 
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] ml-1">Will you attend? *</label>
                    <select 
                      name="attendance"
                      className="w-full bg-white/5 border border-white/10 rounded-sm py-4 px-4 text-white focus:outline-none focus:border-gold/50 transition-colors appearance-none cursor-pointer"
                      value={attendingStatus}
                      onChange={(e) => setAttendingStatus(e.target.value)}
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
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
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
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
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

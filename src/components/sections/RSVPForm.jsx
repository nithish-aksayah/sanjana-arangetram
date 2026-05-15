import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { submitToGoogleSheets } from "../../services/googleSheets";
import { Send, User, Users, MessageSquare, Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import PhoneField from '../ui/PhoneField';

const RSVPForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState('');
  const [attendingStatus, setAttendingStatus] = useState('yes');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [errors, setErrors] = useState({});

  const clearError = (field) =>
    setErrors((prev) => ({ ...prev, [field]: null }));

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim() || name.trim().length < 2) {
      newErrors.name = 'Please enter your full name (min 2 characters).';
    }

    // phone value contains countryDial + number e.g. "+1(404)555-1234"
    const digits = phone.replace(/\D/g, '');
    if (digits.length < 7 || digits.length > 15) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (attendingStatus === 'yes' && (!guests || Number(guests) < 1 || Number(guests) > 10)) {
      newErrors.guests = 'Please enter a guest count between 1 and 10.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (!validateForm()) {
      setStatus({ type: 'error', message: 'Please fix the errors below before submitting.' });
      return;
    }

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

      await addDoc(collection(db, 'rsvps'), payload);

      try {
        await submitToGoogleSheets({
          type: 'rsvp',
          name,
          email,
          phone,
          guests: payload.guests,
          attendingStatus,
          message,
        });
      } catch (sheetError) {
        console.error('Google Sheets Sync Error:', sheetError);
      }

      setStatus({ type: 'success', message: 'RSVP Submitted Successfully!' });
      setName('');
      setEmail('');
      setPhone('');
      setGuests('');
      setAttendingStatus('yes');
      setMessage('');
      setErrors({});
    } catch (error) {
      console.error('Submission Error:', error);
      setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="rsvp" className="section-padding bg-black relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

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
          <div className="section-title-divider" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden glass-card gold-border-gradient group max-w-lg mx-auto">
              <img
                src="/images/photoshoot-glimpses/Sanjana-691-Edit.webp"
                alt="Sanjana RSVP"
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="glass-card p-8 md:p-12 gold-border-gradient shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>

                {/* Name + Attendance */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] ml-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none"
                      />
                      <input
                        type="text"
                        className={`w-full bg-white/5 border ${
                          errors.name ? 'border-red-500' : 'border-white/10'
                        } rounded-sm py-4 pl-12 pr-4 text-white placeholder-white/20 focus:outline-none focus:border-gold/50 transition-colors`}
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => { setName(e.target.value); clearError('name'); }}
                      />
                    </div>
                    {errors.name && <p className="text-red-400 text-xs ml-1">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] ml-1">
                      Will you attend? *
                    </label>
                    <select
                      className="w-full bg-white/5 border border-white/10 rounded-sm py-4 px-4 text-white focus:outline-none focus:border-gold/50 transition-colors appearance-none cursor-pointer"
                      value={attendingStatus}
                      onChange={(e) => setAttendingStatus(e.target.value)}
                    >
                      <option value="yes" className="bg-[#111]">Yes, I'll be there</option>
                      <option value="no" className="bg-[#111]">No, unfortunately I can't</option>
                    </select>
                  </div>
                </div>

                {/* Phone + Guests */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] ml-1">
                      Phone Number *
                    </label>
                    <PhoneField
                      value={phone}
                      onChange={(val) => { setPhone(val); clearError('phone'); }}
                      error={errors.phone}
                    />
                    {errors.phone && <p className="text-red-400 text-xs ml-1">{errors.phone}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] ml-1">
                      Number of Guests {attendingStatus === 'yes' ? '*' : ''}
                    </label>
                    <div className="relative">
                      <Users
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none"
                      />
                      <input
                        type="number"
                        min="1"
                        max="10"
                        disabled={attendingStatus === 'no'}
                        className={`w-full bg-white/5 border ${
                          errors.guests ? 'border-red-500' : 'border-white/10'
                        } rounded-sm py-4 pl-12 pr-4 text-white placeholder-white/20 focus:outline-none focus:border-gold/50 transition-colors disabled:opacity-40`}
                        placeholder="1"
                        value={guests}
                        onChange={(e) => { setGuests(e.target.value); clearError('guests'); }}
                      />
                    </div>
                    {errors.guests && <p className="text-red-400 text-xs ml-1">{errors.guests}</p>}
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] ml-1">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none"
                    />
                    <input
                      type="email"
                      className={`w-full bg-white/5 border ${
                        errors.email ? 'border-red-500' : 'border-white/10'
                      } rounded-sm py-4 pl-12 pr-4 text-white placeholder-white/20 focus:outline-none focus:border-gold/50 transition-colors`}
                      placeholder="email@example.com"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); clearError('email'); }}
                    />
                  </div>
                  {errors.email && <p className="text-red-400 text-xs ml-1">{errors.email}</p>}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] ml-1">
                    Message (Optional)
                  </label>
                  <div className="relative">
                    <MessageSquare
                      size={18}
                      className="absolute left-4 top-6 text-white/20 pointer-events-none"
                    />
                    <textarea
                      className="w-full bg-white/5 border border-white/10 rounded-sm py-4 pl-12 pr-4 text-white placeholder-white/20 focus:outline-none focus:border-gold/50 transition-colors min-h-[120px] resize-none"
                      placeholder="Your wishes or special notes..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                </div>

                {/* Status banner */}
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-sm flex items-center gap-3 ${
                      status.type === 'success'
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}
                  >
                    {status.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                    <p className="text-sm">{status.message}</p>
                  </motion.div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-premium w-full flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <><Loader2 size={16} className="animate-spin" /> Submitting...</>
                  ) : (
                    <><Send size={16} /> Submit RSVP</>
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

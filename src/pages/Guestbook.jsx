import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, MessageCircle, ChevronRight, X, Send, Loader2 } from 'lucide-react';
import { invitationData } from '../data/content';
import { Link } from 'react-router-dom';
import { db } from '../firebase/config';
import { 
  collection, 
  addDoc, 
  query, 
  orderBy, 
  onSnapshot, 
  serverTimestamp 
} from 'firebase/firestore';
import { submitToGoogleSheets } from '../services/googleSheets';

const Guestbook = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    // Setup real-time listener for guestbook entries
    const q = query(collection(db, 'guestbook'), orderBy('createdAt', 'desc'));
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const guestbookEntries = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        guestbookEntries.push({
          id: doc.id,
          ...data,
          // Format date for display
          displayDate: data.createdAt?.toDate ? data.createdAt.toDate().toLocaleDateString('en-US', { 
            month: 'long', day: 'numeric', year: 'numeric' 
          }) : 'Just now'
        });
      });
      setEntries(guestbookEntries);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching guestbook:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // 1. Save to Firestore
      await addDoc(collection(db, 'guestbook'), {
        name: formData.name,
        city: formData.city,
        email: formData.email,
        message: formData.message,
        createdAt: serverTimestamp()
      });
      
      // 2. Sync with Google Sheets
      try {
        await submitToGoogleSheets({
          type: "guestbook",
          name: formData.name,
          message: formData.message
        });
      } catch (sheetError) {
        console.error('Google Sheets Sync Error:', sheetError);
      }
      
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsModalOpen(false);
        setIsSubmitted(false);
        setFormData({ name: '', city: '', email: '', message: '' });
      }, 2000);
    } catch (error) {
      console.error("Error adding entry:", error);
      alert("Failed to add entry. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-black min-h-screen pt-32 pb-20">
      <div className="container-luxury">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-cursive text-white mb-6"
          >
            Guestbook
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl font-serif italic text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Let's Congratulate {invitationData.event.dancerName} For Her Dance Arangetram With your Comments
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10"
          >
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-maroon hover:bg-maroon-light text-white px-8 py-3 rounded-md font-bold transition-all shadow-[0_0_20px_rgba(128,0,0,0.3)] border border-gold/30"
            >
              Write a new entry.
            </button>
            <p className="text-white/40 text-xs mt-4 uppercase tracking-[0.2em]">
              {loading ? 'Loading...' : `${entries.length} entries.`}
            </p>
          </motion.div>
        </div>

        {/* Entries List */}
        <div className="max-w-4xl mx-auto space-y-8">
          {loading ? (
            <div className="flex flex-col items-center py-20">
              <Loader2 className="text-gold animate-spin mb-4" size={40} />
              <p className="text-white/60 font-serif italic">Loading guestbook entries...</p>
            </div>
          ) : entries.length === 0 ? (
            <div className="text-center py-20 glass-card gold-border-gradient p-10">
              <p className="text-white/60 font-serif italic">No entries yet. Be the first to write one!</p>
            </div>
          ) : (
            entries.map((entry, index) => (
              <motion.div 
                key={entry.id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card gold-border-gradient p-8 md:p-10 relative overflow-hidden"
              >
                {/* Decorative Quote Mark */}
                <div className="absolute top-4 right-8 text-[#D4AF37]/10 font-serif text-8xl pointer-events-none">"</div>
                
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0 border border-[#D4AF37]/20">
                    <User className="text-[#D4AF37]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-serif text-xl md:text-2xl mb-1">
                      {entry.name}
                    </h3>
                    <p className="text-[#D4AF37]/60 text-xs uppercase tracking-[0.2em]">
                      {entry.city ? `from ${entry.city} • ` : ''}{entry.displayDate}
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <p className="text-gray-300 italic font-serif text-lg leading-relaxed md:text-xl">
                    {entry.message}
                  </p>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <div className="h-px w-12 bg-[#D4AF37]/30" />
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Footer Navigation */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-10">
          <Link to="/gallery" className="group flex items-center gap-4">
            <span className="text-3xl md:text-5xl font-cursive text-gold group-hover:text-white transition-colors">Gallery.</span>
            <ChevronRight className="text-white/20 group-hover:text-gold transition-colors" size={32} />
          </Link>
          <div className="h-px w-20 bg-white/10 hidden md:block"></div>
          <Link to="/brochure" className="group flex items-center gap-4">
            <span className="text-3xl md:text-5xl font-cursive text-gold group-hover:text-white transition-colors">Program Brochure.</span>
          </Link>
        </div>

      </div>

      {/* Guestbook Entry Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass-card gold-border-gradient w-full max-w-2xl p-8 md:p-12 relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              {isSubmitted ? (
                <div className="py-12 text-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-gold/40"
                  >
                    <Send className="text-gold" size={32} />
                  </motion.div>
                  <h2 className="text-3xl font-cursive text-white mb-2">Thank You!</h2>
                  <p className="text-gold font-serif italic text-lg">Your message has been added to the guestbook.</p>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-cursive text-white mb-2">Write a new entry</h2>
                  <p className="text-gold font-serif italic mb-8 border-b border-gold/20 pb-4">
                    For the Sanjana Diddige Guestbook
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-[0.2em] text-white/60 font-bold ml-1">Name *</label>
                        <input 
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors font-serif"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-[0.2em] text-white/60 font-bold ml-1">City</label>
                        <input 
                          type="text"
                          value={formData.city}
                          onChange={(e) => setFormData({...formData, city: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors font-serif"
                          placeholder="City, State"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-[0.2em] text-white/60 font-bold ml-1">Email *</label>
                      <input 
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors font-serif"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-[0.2em] text-white/60 font-bold ml-1">Guestbook entry *</label>
                      <textarea 
                        required
                        rows="4"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors font-serif resize-none"
                        placeholder="Write your heartfelt message here..."
                      ></textarea>
                    </div>

                    <div className="pt-4">
                      <button 
                        type="submit"
                        disabled={submitting}
                        className="w-full bg-maroon hover:bg-maroon-light text-white py-4 rounded-lg font-bold transition-all shadow-[0_0_20px_rgba(128,0,0,0.3)] border border-gold/30 flex items-center justify-center gap-2 group disabled:opacity-50"
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="animate-spin" size={20} />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Entry
                            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Guestbook;

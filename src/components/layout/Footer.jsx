import React from 'react';
import { Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { 
      name: 'Spotify', 
      url: 'https://open.spotify.com/show/4R1MPVZrdwkk1Sjd9lAWKG?si=fa9c76c54a1540d6&nd=1&dlsi=61c533c035654f18',
      icon: (
        <svg className="w-5 h-5 fill-[#1DB954]" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.494 17.306c-.215.352-.676.463-1.028.248-2.856-1.745-6.45-2.14-10.683-1.171-.403.092-.806-.162-.898-.565-.092-.403.162-.806.565-.898 4.636-1.06 8.604-.613 11.788 1.332.352.215.463.676.248 1.028zm1.467-3.255c-.27.441-.845.584-1.286.314-3.268-2.008-8.248-2.593-12.112-1.42-.495.15-.1.87-.245 1.14-.495-.15-.87.245-1.14.495 4.305-1.305 9.81-.66 13.56 1.635.441.27.584.845.314 1.286zm.127-3.39c-3.922-2.329-10.387-2.544-14.137-1.406-.6.182-1.23-.162-1.413-.762-.182-.6.162-1.23.762-1.413 4.29-1.303 11.432-1.037 15.94 1.64.54.32.716 1.02.396 1.56-.32.54-1.02.716-1.56.396z"/>
        </svg>
      )
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/sfhs_joi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D',
      icon: (
        <svg className="w-5 h-5 fill-[#E4405F]" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/sanjana-diddige/',
      icon: (
        <svg className="w-5 h-5 fill-[#0077B5]" viewBox="0 0 24 24">
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
        </svg>
      )
    },
    { 
      name: 'Email', 
      url: 'mailto:sdiddige@gmail.com',
      icon: <Mail className="text-gray-400 hover:text-white transition-colors" size={20} />
    }
  ];

  return (
    <footer className="bg-[#111111] border-t-2 border-gold/20 pt-16 pb-12 relative z-10">
      <div className="container-luxury text-center">
        
        {/* Social Links */}
        <div className="flex justify-center items-center gap-8 mb-10">
          {socialLinks.map((social) => (
            <a 
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="space-y-4">
          <p className="text-white/60 font-serif text-sm tracking-wide">
            © 2026 <span className="text-white font-bold">Sanjana Diddige</span>. All Rights Reserved.
          </p>
          <p className="text-white/20 text-[10px] uppercase tracking-[0.4em] font-sans">
            Arangetram - A Celebration of Dance
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

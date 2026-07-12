import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { invitationData } from '../../data/content';

const WhatsAppIcon = ({ size = 16 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = () => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  };

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'About', 
      path: '/about',
      submenu: [
        { name: 'About', path: '/about' },
        { name: 'Road to Arangetram', path: '/road-to-arangetram' },
        { name: 'Acknowledgements', path: '/about/acknowledgements' },
        { name: 'Orchestra', path: '/about/orchestra' },
      ]
    },
    { name: 'Invitation', path: '/invitation' },
    { name: 'Program Brochure', path: '/brochure' },
    { name: 'Gallery', path: '/gallery' },
   
    { name: 'Watch Live', path: '/watch-live' },
    { name: 'Guestbook', path: '/guestbook' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const whatsappNumber = invitationData.contact?.phone?.replace(/\D/g, '');

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
        <div className="container-luxury flex items-center justify-between">
          {/* Left Spacer/Logo Placeholder (Desktop) */}
          <div className="hidden lg:flex flex-1">
            {/* Future Logo can be added here */}
          </div>

          {/* Desktop Nav (Center) - Ensuring straight line */}
          <div className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group py-2"
                onMouseEnter={() => link.submenu && setActiveDropdown(link.name)}
                onMouseLeave={() => link.submenu && setActiveDropdown(null)}
              >
                {link.submenu ? (
                  <div className="flex items-center gap-1 cursor-pointer">
                    <Link 
                      to={link.path} 
                      onClick={handleNavLinkClick}
                      className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 whitespace-nowrap ${
                        isActive(link.path) ? 'text-gold' : 'text-white/70 hover:text-gold'
                      }`}
                    >
                      {link.name}
                    </Link>
                    <ChevronDown size={12} className={`text-white/40 group-hover:text-gold transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  </div>
                ) : (
                  <Link 
                    to={link.path} 
                    onClick={handleNavLinkClick}
                    className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 whitespace-nowrap ${
                      isActive(link.path) ? 'text-gold' : 'text-white/70 hover:text-gold'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Desktop Dropdown Menu */}
                {link.submenu && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 top-full mt-2 w-48 bg-black/95 backdrop-blur-xl border border-white/10 rounded-sm py-4 shadow-2xl z-[100]"
                      >
                        {link.submenu.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            onClick={handleNavLinkClick}
                            className="block px-6 py-2.5 text-[9px] uppercase tracking-[0.2em] text-white/60 hover:text-gold hover:bg-white/5 transition-all"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Contact (Right) */}
          <div className="hidden lg:flex flex-1 items-center justify-end">
            <div className="flex items-center space-x-6 border-l border-white/10 pl-8 ml-2">
              <a 
                href={`https://wa.me/${whatsappNumber}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                <WhatsAppIcon size={16} />
              </a>
              <a href={`mailto:${invitationData.contact?.email}`} className="text-white/60 hover:text-white transition-colors">
                <Mail size={16} />
              </a>
              
              <Link 
                to="/rsvp" 
                onClick={handleNavLinkClick}
                className="text-[10px] uppercase tracking-[0.2em] font-bold bg-gold text-black px-5 py-2.5 rounded-sm hover:bg-white transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                RSVP
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden w-full justify-end">
            <button 
              className="flex flex-col items-center justify-center text-white focus:outline-none p-1.5 transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-nav-menu"
            >
              {isOpen ? (
                <X size={24} className="text-white/95" aria-hidden="true" />
              ) : (
                <>
                  <Menu size={24} className="text-white/90 hover:text-white transition-colors mb-1" aria-hidden="true" />
                  <span className="text-[9px] font-sans tracking-[0.25em] font-medium text-[#C5A059] uppercase animate-gold-shimmer leading-none">
                    MENU
                  </span>
                </>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-black/98 backdrop-blur-2xl flex flex-col items-center justify-center space-y-10"
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation menu"
            >
              <X size={32} aria-hidden="true" />
            </button>

            <div className="flex flex-col items-center space-y-6 w-full px-8">
              {navLinks.map((link) => (
                <div key={link.name} className="w-full text-center">
                  {link.submenu ? (
                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-3">
                        <Link 
                          to={link.path}
                          onClick={handleNavLinkClick}
                          className={`text-2xl font-serif italic transition-colors ${
                            isActive(link.path) ? 'text-gold' : 'text-white hover:text-gold'
                          }`}
                        >
                          {link.name}
                        </Link>
                        <button 
                          onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === link.name ? null : link.name)}
                          className="p-2"
                          aria-label={`${mobileSubmenuOpen === link.name ? 'Collapse' : 'Expand'} ${link.name} submenu`}
                          aria-expanded={mobileSubmenuOpen === link.name}
                        >
                          <ChevronDown 
                            size={20} 
                            aria-hidden="true"
                            className={`text-gold/40 transition-transform duration-300 ${mobileSubmenuOpen === link.name ? 'rotate-180' : ''}`} 
                          />
                        </button>
                      </div>
                      
                      <AnimatePresence>
                        {mobileSubmenuOpen === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden flex flex-col items-center space-y-4 mt-6"
                          >
                            {link.submenu.map((subItem) => (
                              <Link
                                key={subItem.path}
                                to={subItem.path}
                                onClick={handleNavLinkClick}
                                className="text-white/50 text-lg font-serif italic hover:text-gold transition-colors"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link 
                      to={link.path} 
                      onClick={handleNavLinkClick}
                      className={`text-2xl font-serif italic transition-colors ${
                        isActive(link.path) ? 'text-gold' : 'text-white hover:text-gold'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="h-px w-20 bg-gold/30"></div>

            <div className="flex flex-col items-center space-y-8">
              <div className="flex space-x-8 mb-4">
                <a 
                  href={`https://wa.me/${whatsappNumber}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all"
                >
                  <WhatsAppIcon size={20} />
                </a>
                <a href={`mailto:${invitationData.contact?.email}`} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all">
                  <Mail size={20} />
                </a>
              </div>
              
              <Link 
                to="/rsvp" 
                onClick={handleNavLinkClick}
                className="btn-premium w-64 text-center"
              >
                RSVP Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

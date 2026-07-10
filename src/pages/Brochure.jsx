import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import * as PageFlipModule from 'page-flip';
import { ChevronLeft, ChevronRight, Maximize2, ZoomIn, ZoomOut, Download } from 'lucide-react';
import DustParticles from '../components/animations/DustParticles';

// Safely extract the PageFlip constructor regardless of how Vite resolves the CJS/ESM module
const PageFlip = PageFlipModule.PageFlip || (PageFlipModule.default && PageFlipModule.default.PageFlip) || PageFlipModule;

const images = Array.from({ length: 16 }, (_, i) => `/images/Program Brochures/Brochure Pg-${i + 1}.jpg`);

// Static Book Pages component to prevent React from re-rendering the manipulated DOM
const BookPages = React.memo(() => {
  return (
    <>
      {images.map((src, index) => (
        <div key={index} className="page bg-[#050505] overflow-hidden flex items-center justify-center shadow-[inset_0_0_30px_rgba(0,0,0,0.9)] border border-gold/10" data-density="hard">
          <img 
            src={src} 
            alt={`Brochure Page ${index + 1}`} 
            className="w-full h-full object-contain"
            draggable={false}
          />
          <div className={`absolute inset-y-0 ${index % 2 === 0 ? 'left-0 bg-gradient-to-r' : 'right-0 bg-gradient-to-l'} w-12 from-black/80 via-black/20 to-transparent pointer-events-none`}></div>
        </div>
      ))}
    </>
  );
});
BookPages.displayName = 'BookPages';

const Brochure = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const bookContainerRef = useRef(null);
  const pageFlipRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [flipbookError, setFlipbookError] = useState(null);
  
  // Responsive handling
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const isMobile = windowWidth < 768;

  // Initialize PageFlip safely
  useEffect(() => {
    let timeoutId;
    
    if (bookContainerRef.current) {
      if (pageFlipRef.current) {
        pageFlipRef.current.destroy();
        pageFlipRef.current = null;
      }

      // Small delay to ensure DOM is fully painted and settled before vanilla JS takes over
      timeoutId = setTimeout(() => {
        try {
          const flipBook = new PageFlip(bookContainerRef.current, {
            width: 900,
            height: 1272,
            size: "stretch",
            minWidth: 280,
            maxWidth: 1800,
            minHeight: 396,
            maxHeight: 2500,
            maxShadowOpacity: 0.6,
            showCover: true,
            mobileScrollSupport: true,
            useMouseEvents: true
          });

          const pages = bookContainerRef.current.querySelectorAll('.page');
          if (pages.length > 0) {
            flipBook.loadFromHTML(pages);
            
            flipBook.on('flip', (e) => {
              setCurrentPage(e.data);
            });

            pageFlipRef.current = flipBook;
            setFlipbookError(null);
          } else {
            console.error('PageFlip error: No pages found');
            setFlipbookError('No .page elements found inside container');
          }
        } catch (error) {
          console.error("PageFlip initialization error:", error);
          setFlipbookError(error.toString() + "\n" + error.stack);
        }
      }, 100);
    }

    return () => {
      clearTimeout(timeoutId);
      if (pageFlipRef.current) {
        pageFlipRef.current.destroy();
        pageFlipRef.current = null;
      }
    };
  }, [isMobile]);

  const nextButtonClick = () => {
    if (pageFlipRef.current) pageFlipRef.current.flipNext();
  };

  const prevButtonClick = () => {
    if (pageFlipRef.current) pageFlipRef.current.flipPrev();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextButtonClick();
      if (e.key === 'ArrowLeft') prevButtonClick();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.5, 1));

  return (
    <div className="bg-black min-h-screen pt-24 pb-8 md:pb-12 relative overflow-hidden flex flex-col items-center">
      <DustParticles />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-gold/5 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <div className="container-luxury w-full max-w-7xl mx-auto px-2 md:px-4 z-10 flex flex-col items-center h-full">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 md:mb-8 relative z-20"
        >
          <h1 className="font-cursive text-4xl md:text-6xl text-white mb-2 md:mb-4">Program Brochure</h1>
          <div className="section-title-divider mx-auto mb-4 md:mb-6 hidden md:block"></div>
          <p className="text-gray-400 text-xs md:text-sm tracking-widest max-w-2xl mx-auto leading-relaxed hidden md:block">
            Explore the complete sequence of performances, artists, acknowledgements and the artistic journey of the Arangetram.
          </p>
        </motion.div>

        {flipbookError ? (
          <div className="w-full h-[65vh] flex flex-col items-center justify-center text-white/50 border border-red-500/20 rounded-xl bg-red-500/5 p-4 text-center">
            <p className="font-bold text-white mb-2">An error occurred loading the interactive brochure.</p>
            <pre className="text-xs text-red-300 max-w-2xl overflow-auto whitespace-pre-wrap text-left p-4 bg-black/40 rounded">{flipbookError}</pre>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full flex justify-center relative perspective-1000 mb-6 md:mb-8"
            style={{ height: '90vh', minHeight: '520px' }}
          >
            <div 
              className="relative w-full h-full flex justify-center items-center"
              style={{ transform: `scale(${zoomLevel})`, transition: 'transform 0.3s ease', transformOrigin: 'center center' }}
            >
              
              {/* PageFlip Container */}
              <div 
                ref={bookContainerRef} 
                className="flipbook-wrapper drop-shadow-2xl mx-auto rounded-lg w-full h-full"
              >
                <BookPages />
              </div>

            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-card px-4 md:px-8 py-3 rounded-full flex items-center justify-between md:justify-center gap-4 md:gap-8 border border-gold/20 shadow-[0_0_30px_rgba(0,0,0,0.5)] z-20 w-[90%] md:w-auto mx-auto"
        >
          <div className="flex items-center gap-2 md:gap-4">
            <button onClick={prevButtonClick} className="w-10 h-10 rounded-full bg-white/5 hover:bg-gold/20 flex items-center justify-center text-white transition-all border border-transparent hover:border-gold/30">
              <ChevronLeft size={20} />
            </button>
            <span className="text-white/80 font-serif text-sm tracking-widest min-w-[70px] text-center">
              {currentPage + 1} / {images.length}
            </span>
            <button onClick={nextButtonClick} className="w-10 h-10 rounded-full bg-white/5 hover:bg-gold/20 flex items-center justify-center text-white transition-all border border-transparent hover:border-gold/30">
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="w-px h-8 bg-white/10 hidden md:block"></div>

          <div className="flex items-center gap-1 md:gap-3">
            <button onClick={handleZoomOut} className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all hidden md:flex" title="Zoom Out">
              <ZoomOut size={18} />
            </button>
            <button onClick={handleZoomIn} className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all hidden md:flex" title="Zoom In">
              <ZoomIn size={18} />
            </button>
            
            <div className="w-px h-8 bg-white/10 hidden md:block mx-2"></div>
            
             <button onClick={toggleFullscreen} className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all" title="Fullscreen">
              <Maximize2 size={18} />
            </button>
            
            <a href="/images/Program Brochures/Brochure Pg-1.jpg" download className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-all text-xs tracking-widest uppercase ml-2 border border-white/10 hover:border-white/30" title="Download Brochure">
              <Download size={14} /> Download
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Brochure;

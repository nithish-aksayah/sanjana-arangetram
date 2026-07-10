import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import * as PageFlipModule from 'page-flip';
import { ChevronLeft, ChevronRight, Maximize2, ZoomIn, ZoomOut, Download } from 'lucide-react';
import DustParticles from '../components/animations/DustParticles';
import JSZip from 'jszip';

// Safely extract the PageFlip constructor regardless of how Vite resolves the CJS/ESM module
const PageFlip = PageFlipModule.PageFlip || (PageFlipModule.default && PageFlipModule.default.PageFlip) || PageFlipModule;

const images = Array.from({ length: 16 }, (_, i) => `/images/Program Brochures/Brochure Pg-${i + 1}.webp`);

// Aspect ratio of each page (portrait, matching actual 2161x2905 resolution)
const PAGE_ASPECT = 2261 / 3005;

// Static Book Pages — never re-rendered once mounted
const BookPages = React.memo(() => {
  return (
    <>
      {images.map((src, index) => (
        <div
          key={index}
          className="page overflow-hidden flex items-center justify-center"
          style={{ background: '#0a0a0a' }}
          data-density="hard"
        >
          <img
            src={src}
            alt={`Brochure Page ${index + 1}`}
            className="w-full h-full object-fill"
            draggable={false}
          />
          {/* Subtle spine shadow overlay */}
          <div
            className={`absolute inset-y-0 ${index % 2 === 0 ? 'left-0 bg-gradient-to-r' : 'right-0 bg-gradient-to-l'} w-8 from-black/50 via-black/10 to-transparent pointer-events-none`}
          />
        </div>
      ))}
    </>
  );
});
BookPages.displayName = 'BookPages';

const Brochure = () => {
  // The stable outer wrapper we measure from
  const stageRef = useRef(null);
  const bookContainerRef = useRef(null);
  const pageFlipRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [flipbookError, setFlipbookError] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const floatControls = useAnimation();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadZip = async () => {
    setIsDownloading(true);
    try {
      const zip = new JSZip();
      
      const promises = images.map(async (src, index) => {
        const response = await fetch(src);
        const blob = await response.blob();
        const filename = `Brochure Pg-${index + 1}.webp`;
        zip.file(filename, blob);
      });

      await Promise.all(promises);

      const content = await zip.generateAsync({ type: 'blob' });

      const link = document.createElement('a');
      link.href = URL.createObjectURL(content);
      link.download = 'Program_Brochure.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Failed to download ZIP:', error);
      alert('Failed to download brochure. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Compute fixed pixel dimensions from the stage element
  // This is calculated ONCE and stored — not re-computed during flip
  const [bookDims, setBookDims] = useState({ width: 0, height: 0 });

  const computeDims = useCallback(() => {
    if (!stageRef.current) return;
    const stageH = stageRef.current.clientHeight;
    const stageW = stageRef.current.clientWidth;

    let bookW, bookH;
    if (isMobile) {
      // 1 page wide on mobile
      bookH = stageH;
      bookW = Math.min(bookH * PAGE_ASPECT, stageW);
      const finalH = bookW / PAGE_ASPECT;
      setBookDims({ width: Math.floor(bookW), height: Math.floor(finalH) });
    } else {
      // 2 pages wide on desktop
      bookH = stageH;
      bookW = Math.min(bookH * PAGE_ASPECT * 2, stageW);
      const finalH = bookW / (PAGE_ASPECT * 2);
      setBookDims({ width: Math.floor(bookW), height: Math.floor(finalH) });
    }
  }, [isMobile]);

  // Measure on mount and window resize only
  useEffect(() => {
    computeDims();
    const ro = new ResizeObserver(computeDims);
    if (stageRef.current) ro.observe(stageRef.current);
    return () => ro.disconnect();
  }, [computeDims]);

  // Initialize PageFlip once we have stable fixed dimensions
  useEffect(() => {
    if (!bookDims.width || !bookDims.height || !bookContainerRef.current) return;

    let timeoutId;

    // Destroy previous instance
    if (pageFlipRef.current) {
      pageFlipRef.current.destroy();
      pageFlipRef.current = null;
    }

    timeoutId = setTimeout(() => {
      try {
        // On mobile, page width is the full container width. On desktop, it is half.
        const pageW = isMobile ? bookDims.width : Math.floor(bookDims.width / 2);
        const pageH = bookDims.height;

        const flipBook = new PageFlip(bookContainerRef.current, {
          width: pageW,
          height: pageH,
          // Fixed mode: no stretch, no recalculation during flip
          size: 'fixed',
          maxShadowOpacity: 0.3,
          showCover: !isMobile,
          mobileScrollSupport: true,
          useMouseEvents: true,
          swipeDistance: 30,
          clickEventForward: false,
          orientation: isMobile ? 'portrait' : 'landscape',
        });

        const pages = bookContainerRef.current.querySelectorAll('.page');
        if (pages.length > 0) {
          flipBook.loadFromHTML(pages);

          flipBook.on('flip', (e) => {
            setCurrentPage(e.data);
          });

          // Pause float during flip — prevents y-offset from interfering
          flipBook.on('changeState', (e) => {
            if (e.data === 'flipping') {
              setIsFlipping(true);
              floatControls.stop();
              floatControls.set({ y: 0 });
            } else {
              setIsFlipping(false);
              floatControls.start({
                y: [0, -5, 0],
                transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
              });
            }
          });

          pageFlipRef.current = flipBook;
          setFlipbookError(null);
        } else {
          setFlipbookError('No .page elements found inside container');
        }
      } catch (error) {
        console.error('PageFlip initialization error:', error);
        setFlipbookError(error.toString() + '\n' + error.stack);
      }
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (pageFlipRef.current) {
        pageFlipRef.current.destroy();
        pageFlipRef.current = null;
      }
    };
  }, [bookDims, floatControls, isMobile]);

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

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.25, 2));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.25, 0.5));

  // Start float animation on mount
  useEffect(() => {
    floatControls.start({
      y: [0, -5, 0],
      transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
    });
  }, [floatControls]);

  return (
    <div className="bg-black min-h-screen pt-24 pb-4 relative overflow-hidden flex flex-col items-center">
      <DustParticles />

      {/* Cinematic vignette overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.75) 100%)' }}
      />

      {/* Multi-layered golden ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[65vh] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse, rgba(212,175,55,0.07) 0%, rgba(212,175,55,0.03) 40%, transparent 70%)', filter: 'blur(60px)' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vh] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse, rgba(212,175,55,0.05) 0%, transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="w-full max-w-7xl mx-auto px-2 md:px-6 z-10 flex flex-col items-center h-full">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-3 md:mb-4 relative z-20"
        >
          <h1 className="font-cursive text-4xl md:text-6xl text-white mb-2 md:mb-4">Program Brochure</h1>
          <div className="section-title-divider mx-auto mb-4 md:mb-6 hidden md:block" />
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
            initial={{ opacity: 0, y: 70, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full mb-4"
            style={{
              height: 'calc(100vh - 160px)',
              minHeight: '660px',
              maxHeight: '95vh',
              overflow: 'hidden',
            }}
          >
            {/* ── Stage: stable reference for size measurement ── */}
            <div
              ref={stageRef}
              className="relative w-full h-full"
              style={{ overflow: 'hidden' }}
            >
              {/* ── Float + hover wrapper — absolutely centered, fixed size ── */}
              {/*    position:absolute + left/top 50% + translate(-50%,-50%)
                    means this element NEVER participates in flex flow.
                    Its size comes from bookDims, which is computed once
                    and does NOT change during a flip.                         */}
              {bookDims.width > 0 && (
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: bookDims.width,
                    height: bookDims.height,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <motion.div
                    animate={floatControls}
                    style={{
                      width: '100%',
                      height: '100%',
                      willChange: 'transform',
                    }}
                  >
                    {/* Zoom ring — scales the visible book but NOT the layout */}
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        transform: isFlipping
                          ? 'scale(1)'
                          : `scale(${zoomLevel * (isHovered ? 1.015 : 1)})`,
                        transition: isFlipping
                          ? 'none'
                          : 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
                        transformOrigin: 'center center',
                      }}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      {/* Book shadow */}
                      <div
                        className="absolute inset-0 pointer-events-none rounded-lg transition-all duration-700"
                        style={{
                          boxShadow: isHovered
                            ? '0 60px 120px rgba(0,0,0,0.85), 0 0 80px rgba(212,175,55,0.10)'
                            : '0 40px 90px rgba(0,0,0,0.8), 0 0 60px rgba(212,175,55,0.06)',
                        }}
                      />

                      {/* Gold border ring */}
                      <div
                        className="absolute inset-0 pointer-events-none rounded-lg transition-all duration-700 z-10"
                        style={{
                          boxShadow: isHovered
                            ? 'inset 0 0 0 1px rgba(212,175,55,0.25)'
                            : 'inset 0 0 0 1px rgba(212,175,55,0.12)',
                        }}
                      />

                      {/* PageFlip container — exact fixed pixel size, no flex, no stretch */}
                      <div
                        key={`${bookDims.width}-${bookDims.height}-${isMobile}`}
                        ref={bookContainerRef}
                        style={{
                          width: bookDims.width,
                          height: bookDims.height,
                          overflow: 'hidden',
                          borderRadius: '4px',
                        }}
                      >
                        <BookPages />
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Premium Controls Bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="brochure-controls-bar z-20 w-[95%] md:w-auto mx-auto"
        >
          {/* Navigation */}
          <div className="flex items-center gap-2 md:gap-4">
            <button onClick={prevButtonClick} className="brochure-ctrl-btn" title="Previous Page">
              <ChevronLeft size={20} />
            </button>
            <span className="text-white/80 font-serif text-sm tracking-widest min-w-[70px] text-center select-none">
              {currentPage + 1} / {images.length}
            </span>
            <button onClick={nextButtonClick} className="brochure-ctrl-btn" title="Next Page">
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="w-px h-8 bg-white/10 hidden md:block" />

          {/* Zoom & Utility */}
          <div className="flex items-center gap-1 md:gap-3">
            <button onClick={handleZoomOut} className="brochure-ctrl-btn hidden md:flex" title="Zoom Out">
              <ZoomOut size={18} />
            </button>
            <button onClick={handleZoomIn} className="brochure-ctrl-btn hidden md:flex" title="Zoom In">
              <ZoomIn size={18} />
            </button>

            <div className="w-px h-8 bg-white/10 hidden md:block mx-1" />

            <button onClick={toggleFullscreen} className="brochure-ctrl-btn" title="Fullscreen">
              <Maximize2 size={18} />
            </button>

            <button
              onClick={handleDownloadZip}
              className="brochure-download-btn hidden md:flex disabled:opacity-50"
              title="Download Brochure"
              disabled={isDownloading}
            >
              <Download size={14} />
              <span>{isDownloading ? 'Zipping...' : 'Download'}</span>
            </button>
          </div>
        </motion.div>

        {/* Keyboard hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-white/20 text-xs tracking-widest mt-4 select-none hidden md:block"
        >
          ← → Arrow keys to navigate
        </motion.p>

      </div>
    </div>
  );
};

export default Brochure;

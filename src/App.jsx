import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import Loader from './components/common/Loader'; // Assuming a Loader component exists or we can use a simple div

import './styles/index.css';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const RSVP = lazy(() => import('./pages/RSVP'));
const Gallery = lazy(() => import('./pages/Gallery'));
const About = lazy(() => import('./pages/About'));
const Bharatanatyam = lazy(() => import('./pages/about/Bharatanatyam'));
const Gurus = lazy(() => import('./pages/about/Gurus'));
const SanjanaDiddige = lazy(() => import('./pages/about/Sanjana'));
const Invitation = lazy(() => import('./pages/Invitation'));
const Guestbook = lazy(() => import('./pages/Guestbook'));
const Brochure = lazy(() => import('./pages/Brochure'));
const WatchLive = lazy(() => import('./pages/WatchLive'));
const RoadToArangetram = lazy(() => import('./pages/RoadToArangetram'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-black">
        <Navbar />
        <main className="flex-grow pb-20">
          <Suspense fallback={
            <div className="min-h-[50vh] flex items-center justify-center">
              <div className="w-12 h-12 border-t-2 border-gold rounded-full animate-spin"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/about/bharatanatyam" element={<Bharatanatyam />} />
              <Route path="/about/gurus" element={<Gurus />} />
              <Route path="/about/sanjana-diddige" element={<SanjanaDiddige />} />
              <Route path="/invitation" element={<Invitation />} />
              <Route path="/brochure" element={<Brochure />} />
              <Route path="/rsvp" element={<RSVP />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/road-to-arangetram" element={<RoadToArangetram />} />
              <Route path="/watch-live" element={<WatchLive />} />
              <Route path="/guestbook" element={<Guestbook />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

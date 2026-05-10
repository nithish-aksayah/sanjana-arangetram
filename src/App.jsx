import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import RSVP from './pages/RSVP';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Bharatanatyam from './pages/about/Bharatanatyam';
import Gurus from './pages/about/Gurus';
import SanjanaDiddige from './pages/about/Sanjana';
import Invitation from './pages/Invitation';
import Guestbook from './pages/Guestbook';
import Brochure from './pages/Brochure';
import WatchLive from './pages/WatchLive';
import RoadToArangetram from './pages/RoadToArangetram';
import ScrollToTop from './components/common/ScrollToTop';

import './styles/index.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-black">
        <Navbar />
        <main className="flex-grow pb-20">
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
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

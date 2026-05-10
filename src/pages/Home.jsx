import Hero from '../components/sections/Hero';
import AboutSection from '../components/sections/AboutSection';
import InvitationCard from '../components/sections/InvitationCard';
import GalleryGrid from '../components/sections/GalleryGrid';
import RSVPForm from '../components/sections/RSVPForm';
import BottomNav from '../components/layout/BottomNav';

const Home = () => {
  return (
    <div className="bg-black">
      <Hero />
      {/* <AboutSection />
      <InvitationCard />
      <GalleryGrid />
      <RSVPForm />
      <BottomNav /> */}
    </div>
  );
};

export default Home;

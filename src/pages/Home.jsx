import HeroSlider from '../components/HeroSlider';
import About from '../components/About';
import UpcomingTours from '../components/UpcomingTours';
import SpecialEvents from '../components/SpecialEvents';
import Gallery from '../components/Gallery';
import BrandTicker from '../components/BrandTicker';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main style={{ paddingTop: 0 }}>
      <HeroSlider />
      <About />
      <UpcomingTours />
      <SpecialEvents />
      <Gallery />
      <BrandTicker />
      <Testimonials />
      <Contact />
    </main>
  );
}

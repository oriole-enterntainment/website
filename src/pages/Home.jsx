import Hero from '../sections/Hero/Hero';
import WhoWeAre from '../sections/WhoWeAre/WhoWeAre';
import WhatWeDo from '../sections/WhatWeDo/WhatWeDo';
import Gallery from '../components/Gallery';
import UpcomingTours from '../components/UpcomingTours';
import SpecialEvents from '../components/SpecialEvents';
import BrandTicker from '../components/BrandTicker';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <Gallery />
      <UpcomingTours />
      <SpecialEvents />
      <BrandTicker />
      <Contact />
    </main>
  );
}

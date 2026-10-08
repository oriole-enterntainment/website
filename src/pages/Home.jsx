import Hero from '../sections/Hero/Hero';
import WhoWeAre from '../sections/WhoWeAre/WhoWeAre';
import WhatWeDo from '../sections/WhatWeDo/WhatWeDo';
import Gallery from '../Components/Gallery';
import UpcomingTours from '../Components/UpcomingTours';
import SpecialEvents from '../Components/SpecialEvents';
import BrandTicker from '../Components/BrandTicker';
import Contact from '../Components/Contact';

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

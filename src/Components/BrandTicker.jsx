import { motion } from 'framer-motion';
import './BrandTicker.css';

const brands = [
  { name: 'Amazon',          src: '/images/brands/amazon.svg' },
  { name: 'Samsung',         src: '/images/brands/samsung.svg' },
  { name: 'Netflix',         src: '/images/brands/netflix.svg' },
  { name: 'Spotify',         src: '/images/brands/spotify.svg' },
  { name: 'BOSCH',           src: '/images/brands/bosch.svg' },
  { name: 'boAt',            src: '/images/brands/boat.png' },
  { name: 'Flipkart',        src: '/images/brands/flipkart.svg' },
  { name: 'Motorola',        src: '/images/brands/motorola.svg' },
  { name: 'LEGO',            src: '/images/brands/lego.svg' },
  { name: 'Garnier',         src: '/images/brands/garnier.svg' },
  { name: 'Crocs',           src: '/images/brands/crocs.svg' },
  { name: 'Lakmé',           src: '/images/brands/lakme.svg' },
  { name: 'Sprite',          src: '/images/brands/sprite.svg' },
  { name: 'CRED',            src: '/images/brands/cred.png' },
  { name: 'Unacademy',       src: '/images/brands/unacademy.png' },
  { name: 'Urban Company',   src: '/images/brands/urbancompany.svg' },
  { name: 'Lenskart',        src: '/images/brands/lenskart.png' },
  { name: 'Shaadi.com',      src: '/images/brands/shaadi.svg' },
  { name: 'JioHotstar',      src: '/images/brands/jiohotstar.png' },
  { name: 'Bewakoof',        src: '/images/brands/bewakoof.png' },
  { name: 'Red FM 93.5',     src: '/images/brands/redfm.jpg' },
  { name: 'Love Beauty & Planet', src: '/images/brands/lovebeautyplanet.png' },
  { name: 'Liquid I.V.',     src: '/images/brands/liquidiv.png' },
  { name: 'Rentomojo',       src: '/images/brands/rentomojo.svg' },
  { name: 'Siggnature',      src: '/images/brands/siggnature.webp' },
  { name: 'Central Park',    src: '/images/brands/centralpark.png' },
  { name: 'Almost Sane',     src: '/images/brands/almostsane.png', darkBg: true },
  { name: 'Kamasā',          src: '/images/brands/kamasa.png' },
  { name: 'Soulliqo',        src: '/images/brands/soulliqo.png' },
  { name: 'NoGrav',          src: '/images/brands/nograv.png', darkBg: true },
  { name: 'Crepdog Crew',    src: '/images/brands/crepdogcrew.png', darkBg: true },
  { name: 'Rivona',          src: '/images/brands/rivona.png' },
];

function BrandItem({ brand }) {
  return (
    <div className={`brand-item ${brand.darkBg ? 'brand-item--dark' : ''}`} title={brand.name}>
      <img
        src={brand.src}
        alt={brand.name}
        loading="lazy"
        onError={e => {
          e.target.style.display = 'none';
          if (e.target.nextSibling) e.target.nextSibling.style.display = 'block';
        }}
      />
      <span className="brand-fallback">{brand.name}</span>
    </div>
  );
}

export default function BrandTicker() {
  const doubled = [...brands, ...brands, ...brands];
  return (
    <section className="brand-ticker section-pad">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Brand <span>Clientele</span></h2>
          <div className="accent-line" />
          <p>Trusted by India's leading brands & partners</p>
        </motion.div>
      </div>

      {/* Single Large Brand Ticker Row */}
      <div className="ticker-wrapper">
        <div className="ticker-track">
          {doubled.map((b, i) => (
            <BrandItem key={`${b.name}-${i}`} brand={b} />
          ))}
        </div>
      </div>
    </section>
  );
}

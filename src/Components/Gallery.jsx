import { useRef } from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

// Curated portfolio images from main-repo
const images = [
  '/portfolio/1.png', '/portfolio/2.png', '/portfolio/3.png', '/portfolio/4.png',
  '/portfolio/5.png', '/portfolio/8.JPG', '/portfolio/9.png', '/portfolio/10.png',
  '/portfolio/11.png', '/portfolio/12.png', '/portfolio/13.png', '/portfolio/14.png',
  '/portfolio/17.JPG', '/portfolio/18.png', '/portfolio/19.jpg', '/portfolio/20.jpg',
  '/portfolio/21.JPG', '/portfolio/22.JPG', '/portfolio/23.JPG', '/portfolio/24.JPG',
  '/portfolio/25.JPG', '/portfolio/26.JPG', '/portfolio/27.JPG', '/portfolio/28.png',
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery section-pad">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our <span>Gallery</span></h2>
          <div className="accent-line" />
          <p>Moments from our live shows across India</p>
        </motion.div>

        <div className="gallery__grid">
          {images.map((src, i) => (
            <motion.div
              key={src}
              className="gallery__item"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
            >
              <img
                src={src}
                alt={`Show moment ${i + 1}`}
                loading="lazy"
                onError={e => { e.target.style.display = 'none'; }}
              />
              <div className="gallery__overlay">
                <span>🎭</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

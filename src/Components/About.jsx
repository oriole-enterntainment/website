import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './About.css';

const stats = [
  { end: 1500000, suffix: '+', label: 'Tickets Sold', icon: '🎟️' },
  { end: 10000,   suffix: '+', label: 'Shows Produced', icon: '🎭' },
  { end: 100,     suffix: '+', label: 'Artists Managed', icon: '🎤' },
  { end: 130,     suffix: '+', label: 'Cities Covered', icon: '📍' },
];

function AnimatedCounter({ end, suffix, label, icon, started }) {
  const [count, setCount] = useState(0);
  const ran = useRef(false);

  if (started && !ran.current) {
    ran.current = true;
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      setCount(Math.round(current));
    }, duration / steps);
  }

  const fmt = (n) =>
    n >= 1_000_000
      ? (n / 1_000_000).toFixed(1) + 'M'
      : n >= 1_000
      ? (n / 1_000).toFixed(0) + 'K'
      : n.toString();

  return (
    <div className="stat-card">
      <span className="stat-icon">{icon}</span>
      <h3 className="stat-number">{fmt(count)}{suffix}</h3>
      <p className="stat-label">{label}</p>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section id="about" className="about section-pad">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2><span>ABOUT</span> US</h2>
          <div className="accent-line" />
        </motion.div>

        <div className="about__grid">
          {/* Text */}
          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p>
              <strong>Oriole Entertainment Pvt Ltd</strong> has been a trailblazer in bringing
              comedy shows to Tier 2 and Tier 3 cities since 2017. As the home of renowned
              comedians like <strong>Anubhav Singh Bassi</strong> and <strong>Harsh Gujral</strong>,
              we have been dedicated to spreading laughter across cities such as{' '}
              <strong>Agra, Gurugram, Lucknow, Kanpur, Dehradun</strong>, and many more.
            </p>
            <p>
              Founded by <strong>Ankur Bhargava</strong>, our mission is to continue making
              people laugh for years to come — delivering world-class live entertainment
              experiences at every scale.
            </p>
            <p>
              From flagship touring shows and experimental solos to large-scale multi-act
              spectaculars like <em>The Big Lineup</em>, Oriole curates the full spectrum of
              live entertainment across India.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="about__stats" ref={ref}>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <AnimatedCounter {...s} started={inView} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Full-bleed Star Roster Photo */}
      <motion.div
        className="about__showcase"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        onClick={() => setLightboxOpen(true)}
      >
        <picture>
          <source media="(max-width: 768px)" srcSet="/images/oriole-banner-mobile.jpg" />
          <img
            src="/images/oriole-banner-desktop.png"
            alt="Oriole Entertainment Star Lineup"
            className="about__banner-img"
          />
        </picture>
      </motion.div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="about__lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
          >
            <div className="about__lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="about__lightbox-close"
                onClick={() => setLightboxOpen(false)}
                aria-label="Close modal"
              >
                <X size={26} />
              </button>
              <picture>
                <source media="(max-width: 768px)" srcSet="/images/oriole-banner-mobile.jpg" />
                <img
                  src="/images/oriole-banner-desktop.png"
                  alt="Oriole Entertainment Star Lineup Full View"
                  className="about__lightbox-img"
                />
              </picture>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './HeroSlider.css';

const BOOK_URL = 'https://in.bookmyshow.com/events/oriole-entertainment-live/ET00316295';
const BIG_LINEUP_IG = 'https://www.instagram.com/thebiglineup/';
const INTERVAL = 6000;

const slides = [
  {
    id: 'biglineup-2027',
    bg: '/slide/biglineup1.jpg',
    badge: '⭐ UPCOMING BIGGEST COMEDY FESTIVAL',
    title: "THE BIG LINEUP '2027",
    subtitle: "India's biggest multi-act live entertainment spectacle",
    cta: (
      <>
        <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Now</a>
        <a href={BIG_LINEUP_IG} target="_blank" rel="noopener noreferrer" className="btn-outline">Follow @thebiglineup</a>
      </>
    ),
    featured: true,
    priority: true,
  },
  {
    id: 'leading-producers',
    bg: '/slide/leading-producers.jpg',
    badge: '🔥 ORIOLE ENTERTAINMENT',
    title: "WE ARE INDIA'S LEADING LIVE-SHOW PRODUCERS",
    subtitle: "Managing and producing live experiences for India's most loved comedians, musicians, and performers.",
    hideTitleOverlay: true,
    cta: (
      <>
        <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Now</a>
        <Link to="/artists" className="btn-outline">View Artists</Link>
      </>
    ),
  },
];


export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const total = slides.length;
  const timerRef = useRef(null);

  const goTo = useCallback((idx) => {
    setCurrent(((idx % total) + total) % total);
    setProgressKey(k => k + 1);
  }, [total]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [paused, next]);

  // Keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prev, next]);

  const slide = slides[current];

  return (
    <div
      className="hero-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Backgrounds */}
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.id + '-bg'}
          className="hero-slider__bg"
          style={{ backgroundImage: `url(${slide.bg})` }}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className={`hero-slider__overlay ${slide.hideTitleOverlay ? 'hero-slider__overlay--subtle' : ''}`} />

      {/* Content */}
      <div className="hero-slider__content container">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            className={`hero-slider__text ${slide.hideTitleOverlay ? 'hero-slider__text--clean' : ''}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {slide.badge && (
              <span className="hero-slider__badge">{slide.badge}</span>
            )}
            {!slide.hideTitleOverlay && <h1>{slide.title}</h1>}
            {!slide.hideTitleOverlay && <p>{slide.subtitle}</p>}
            <div className="hero-slider__cta">{slide.cta}</div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Nav arrows */}
      <button className="hero-slider__arrow hero-slider__arrow--prev" onClick={prev} aria-label="Previous">
        <ChevronLeft size={28} />
      </button>
      <button className="hero-slider__arrow hero-slider__arrow--next" onClick={next} aria-label="Next">
        <ChevronRight size={28} />
      </button>

      {/* Progress bar */}
      <div className="hero-slider__progress">
        <div
          key={progressKey}
          className="hero-slider__progress-fill"
          style={{ animationDuration: `${INTERVAL}ms`, animationPlayState: paused ? 'paused' : 'running' }}
        />
      </div>

      {/* Dots */}
      <div className="hero-slider__dots">
        {slides.map((s, i) => (
          <button
            key={s.id}
            className={`hero-slider__dot ${i === current ? 'hero-slider__dot--active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

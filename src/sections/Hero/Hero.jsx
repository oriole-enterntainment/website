import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';

const BOOK_URL = 'https://in.bookmyshow.com/events/oriole-entertainment-live/ET00316295';
const BIG_LINEUP_IG = 'https://www.instagram.com/thebiglineup/';
const INTERVAL = 7000;

const slides = [
  {
    id: 'hero-main',
    bg: '/slide/biglineup1.jpg',
    eyebrow: "India's Biggest Live Show Producers",
    headline: "THE BIG\nLINEUP '27",
    sub: "India's largest multi-act live entertainment spectacle",
    ctas: [
      { label: 'Book Now', href: BOOK_URL, primary: true, external: true },
      { label: 'Follow @thebiglineup', href: BIG_LINEUP_IG, primary: false, external: true },
    ],
  },
  {
    id: 'hero-producers',
    bg: '/slide/leading-producers.jpg',
    eyebrow: 'Since 2017',
    headline: "MAKING\nINDIA\nLAUGH,\nLIVE.",
    sub: "Managing and producing live experiences for India's most loved comedians, musicians, and performers.",
    ctas: [
      { label: 'Book Now', href: BOOK_URL, primary: true, external: true },
      { label: 'Our Artists', href: '/artists', primary: false, external: false },
    ],
  },
];

export default function Hero() {
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

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [paused, next]);

  const slide = slides[current];

  return (
    <section
      className="hero"
      aria-label="Hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Backgrounds */}
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.id + '-bg'}
          className="hero__bg"
          style={{ backgroundImage: `url(${slide.bg})` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
          aria-hidden="true"
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="hero__overlay" aria-hidden="true" />

      {/* Content */}
      <div className="hero__content container">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            className="hero__text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              className="hero__eyebrow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              {slide.eyebrow}
            </motion.span>

            <motion.h1
              className="hero__headline"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              {slide.headline.split('\n').map((line, i) => (
                <span key={i} className="hero__headline-line">{line}</span>
              ))}
            </motion.h1>

            <motion.p
              className="hero__sub"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              {slide.sub}
            </motion.p>

            <motion.div
              className="hero__ctas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              {slide.ctas.map((cta) =>
                cta.external ? (
                  <a
                    key={cta.label}
                    href={cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cta.primary ? 'btn-primary' : 'btn-outline btn-outline--light'}
                  >
                    {cta.label}
                  </a>
                ) : (
                  <Link
                    key={cta.label}
                    to={cta.href}
                    className={cta.primary ? 'btn-primary' : 'btn-outline btn-outline--light'}
                  >
                    {cta.label}
                  </Link>
                )
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide dots */}
      <div className="hero__dots" role="tablist" aria-label="Slides">
        {slides.map((s, i) => (
          <button
            key={s.id}
            role="tab"
            aria-selected={i === current}
            aria-label={`Slide ${i + 1}`}
            className={`hero__dot ${i === current ? 'hero__dot--active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="hero__progress" aria-hidden="true">
        <div
          key={progressKey}
          className="hero__progress-fill"
          style={{
            animationDuration: `${INTERVAL}ms`,
            animationPlayState: paused ? 'paused' : 'running',
          }}
        />
      </div>

      {/* Scroll cue */}
      <div className="hero__scroll-cue" aria-hidden="true">
        <div className="hero__scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
}

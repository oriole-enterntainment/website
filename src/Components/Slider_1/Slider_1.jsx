import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Slider_1.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import banner1 from "../../Assets/slide/banner1.avif";
import img1 from "../../Assets/slide/img1.jpg";
import img3 from "../../Assets/slide/img3.png";
import bigLineupImg1 from "../../Assets/slide/biglineup2.jpg"; // <-- your 1920x1080 poster
import bigLineupImg2 from "../../Assets/slide/biglineup1.jpg"; // <-- your 1600x500 poster

const SLIDE_INTERVAL = 6000; // ms between auto-advances
const SWIPE_THRESHOLD = 60; // px drag distance needed to trigger a slide change
const BOOK_NOW_URL =
  "https://in.bookmyshow.com/events/brocode-the-big-line-up-2026/ET00502191";
const BIG_LINEUP_INSTAGRAM = "https://www.instagram.com/thebiglineup/?hl=en";

const slidesData = [
  // slidesData[0] is what shows by default when the site loads.
  {
    id: "myslidesBigLineup1",
    bg: bigLineupImg1,
    featured: true,
    badge: "🎤 India's Biggest Comedy Festival",
    title: (
      <>
        TheBigLineup
        <br />
        2026
      </>
    ),
    text: (
      <>
        50+ artists, one unmissable eve of stand-up. <br /> Aug 2 · 3 PM ·
        A DOT, Gurugram — presented by Oriole Entertainment. 
      </>
    ),
    cta: (
      <div className="cta-row">
        <Button variant="contained" className="slide-cta">
          <a
            href={BOOK_NOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="slide-cta-link"
          >
            Book Now
          </a>
        </Button>
        <Button variant="outlined" className="slide-cta-secondary">
          <a
            href={BIG_LINEUP_INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="slide-cta-link"
          >
            Follow @thebiglineup
          </a>
        </Button>
      </div>
    ),
  },
  {
    id: "myslidesBigLineup2",
    bg: bigLineupImg2,
    featured: true,
    badge: "🎤 Now Announced",
    title: (
      <>
        BroCode: The
        <br />
        Big Lineup 2026
      </>
    ),
    text: (
      <>
        India’s loudest and biggest stand-up comedy festival. Grab your seat before it's the one people talk about for missing out.
      </>
    ),
    cta: (
      <div className="cta-row">
        <Button variant="contained" className="slide-cta">
          <a
            href={BOOK_NOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="slide-cta-link"
          >
            Book Now
          </a>
        </Button>
        <Button variant="outlined" className="slide-cta-secondary">
          <a
            href={BIG_LINEUP_INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="slide-cta-link"
          >
            Follow @thebiglineup
          </a>
        </Button>
      </div>
    ),
  },
  {
    id: "myslides1",
    bg: banner1,
    title: (
      <>
        India's Biggest
        <br />
        Live Stand Up Comedy
        <br />
        Producers
      </>
    ),
    text: (
      <>
        From Tier-1 to Tier-3 cities, we organize & produce Stand-Up Comedy{" "}
        <br /> shows throughout the nation with various artists all through
        the year.
      </>
    ),
    cta: (
      <Button variant="contained" className="slide-cta">
        <a
          href={BOOK_NOW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="slide-cta-link"
        >
          Book Now
        </a>
      </Button>
    ),
  },
  {
    id: "myslides2",
    bg: img1,
    title: (
      <>
        India's Biggest
        <br />
        Live Stand Up Comedy
        <br />
        Producers
      </>
    ),
    text: (
      <>
        From Tier-1 to Tier-3 cities, we organize & produce Stand-Up Comedy{" "}
        <br /> shows throughout the nation with various artists all through
        the year.
      </>
    ),
    cta: null,
  },
  {
    id: "myslides3",
    bg: img3,
    title: (
      <>
        House of India's Top
        <br />
        Artists
      </>
    ),
    text: (
      <>
        From Tier-1 to Tier-3 cities, we organize & produce Stand-Up Comedy{" "}
        <br /> shows throughout the nation with various artists all through
        the year.
      </>
    ),
    cta: (
      <Button variant="contained" className="slide-cta">
        <Link to="/artists" className="slide-cta-link">
          View Artists
        </Link>
      </Button>
    ),
  },
];

const Slider_1 = () => {
  const total = slidesData.length;
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef(null);
  const dragStartX = useRef(null);
  const pointerId = useRef(null);

  const goTo = useCallback(
    (index) => {
      const next = (index + total) % total;
      setCurrent(next);
      setProgressKey((k) => k + 1);
    },
    [total]
  );

  const nextSlide = useCallback(() => goTo(current + 1), [current, goTo]);
  const prevSlide = useCallback(() => goTo(current - 1), [current, goTo]);

  // Autoplay
  useEffect(() => {
    if (isPaused || isDragging) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
      setProgressKey((k) => k + 1);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, isDragging, total]);

  // Pause autoplay when the tab isn't visible
  useEffect(() => {
    const handleVisibility = () => setIsPaused(document.hidden);
    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [prevSlide, nextSlide]);

  // Pointer-based swipe/drag (covers touch AND mouse in one code path)
  const handlePointerDown = (e) => {
    pointerId.current = e.pointerId;
    dragStartX.current = e.clientX;
    setIsDragging(true);
    setIsPaused(true);
  };

  const handlePointerMove = (e) => {
    if (dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    setDragOffset(delta);
  };

  const endDrag = () => {
    if (dragStartX.current === null) return;

    if (dragOffset > SWIPE_THRESHOLD) {
      prevSlide();
    } else if (dragOffset < -SWIPE_THRESHOLD) {
      nextSlide();
    }
    setDragOffset(0);
    dragStartX.current = null;
    pointerId.current = null;
    setIsDragging(false);
    setIsPaused(false);
  };

  const trackStyle = {
    width: `${total * 100}%`,
    transform: `translateX(calc(${-current * (100 / total)}% + ${dragOffset}px))`,
    transition: isDragging
      ? "none"
      : "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
  };

  return (
    <div
      className="slideshow-container"
      ref={containerRef}
      onMouseEnter={() => !isDragging && setIsPaused(true)}
      onMouseLeave={() => !isDragging && setIsPaused(false)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerLeave={() => isDragging && endDrag()}
      onPointerCancel={endDrag}
    >
      <div className="slides-track" style={trackStyle}>
        {slidesData.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={slide.id}
              id={slide.id}
              className={`mySlides ${slide.featured ? "mySlides-featured" : ""}`}
              style={{
                width: `${100 / total}%`,
                backgroundImage: `linear-gradient(180deg, rgba(35,33,28,0.55), rgba(35,33,28,0.25) 45%, rgba(255,193,7,0.22) 100%), url(${slide.bg})`,
              }}
              aria-hidden={!isActive}
            >
              {slide.featured && (
                <span className="featured-ribbon">Featuring</span>
              )}
              <div className={`mySlidesText ${isActive ? "slide-in" : ""}`}>
                {slide.badge && (
                  <span className="slide-badge">{slide.badge}</span>
                )}
                <h1>{slide.title}</h1>
                <p>{slide.text}</p>
                {slide.cta}
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress bar showing time until auto-advance */}
      <div className="slide-progress-track">
        <div
          key={progressKey}
          className="slide-progress-fill"
          style={{
            animationDuration: `${SLIDE_INTERVAL}ms`,
            animationPlayState: isPaused || isDragging ? "paused" : "running",
          }}
        />
      </div>

      <button className="prev" onClick={prevSlide} aria-label="Previous slide">
        ❮
      </button>
      <button className="next" onClick={nextSlide} aria-label="Next slide">
        ❯
      </button>

      <div className="dots-container">
        {slidesData.map((slide, index) => (
          <span
            key={slide.id}
            className={`dot ${index === current ? "active" : ""} ${
              slide.featured ? "dot-featured" : ""
            }`}
            onClick={() => goTo(index)}
            role="button"
            aria-label={`Go to slide ${index + 1}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider_1;
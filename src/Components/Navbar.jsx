import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const BOOK_URL = 'https://in.bookmyshow.com/events/oriole-entertainment-live/ET00316295';

const navLinks = [
  { label: 'Home', to: '/', scroll: null },
  { label: 'About', to: '/', scroll: 'about' },
  { label: 'Artists', to: '/artists', scroll: null },
  { label: 'Tours', to: '/', scroll: 'tours' },
  { label: 'Events', to: '/', scroll: 'events' },
  { label: 'Gallery', to: '/', scroll: 'gallery' },
  { label: 'Team', to: '/team', scroll: null },
  { label: 'Contact', to: '/', scroll: 'contact' },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeScroll, setActiveScroll] = useState(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 30);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const handleNavClick = (link) => {
    setOpen(false);
    if (link.scroll && isHome) {
      setActiveScroll(link.scroll);
      setTimeout(() => scrollToSection(link.scroll), 50);
    } else if (link.to === '/' && !link.scroll) {
      setActiveScroll(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={() => handleNavClick({ to: '/', scroll: null })}>
          <img src="/logo.png" alt="Oriole Entertainment" />
        </Link>

        {/* Center Nav Links */}
        <div className="navbar__links-wrapper">
          <ul className="navbar__links">
            {navLinks.map((link) => {
              const isActive = link.scroll
                ? isHome && activeScroll === link.scroll
                : location.pathname === link.to && (!isHome || !activeScroll);

              return (
                <li key={link.label}>
                  {link.scroll && isHome ? (
                    <button
                      className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                      onClick={() => handleNavClick(link)}
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      to={link.to}
                      className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                      onClick={() => handleNavClick(link)}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right CTA */}
        <div className="navbar__cta">
          <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary navbar__book">
            Book Now
          </a>
          <button
            className="navbar__hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="navbar__mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul>
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.scroll && isHome ? (
                    <button className="navbar__mobile-link" onClick={() => handleNavClick(link)}>
                      {link.label}
                    </button>
                  ) : (
                    <Link to={link.to} className="navbar__mobile-link" onClick={() => handleNavClick(link)}>
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              <li style={{ marginTop: '0.5rem' }}>
                <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Book Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

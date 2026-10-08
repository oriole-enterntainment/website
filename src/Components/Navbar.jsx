import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const BOOK_URL = 'https://in.bookmyshow.com/events/oriole-entertainment-live/ET00316295';

const navLinks = [
  { label: 'Home',       to: '/',        scroll: null },
  { label: 'About',      to: '/',        scroll: 'about' },
  { label: 'What We Do', to: '/',        scroll: 'what-we-do' },
  { label: 'Our Work',   to: '/',        scroll: 'work' },
  { label: 'Artists',    to: '/artists', scroll: null },
  { label: 'Shows',      to: '/',        scroll: 'tours' },
  { label: 'Team',       to: '/team',    scroll: null },
  { label: 'Contact',    to: '/',        scroll: 'contact' },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [open, setOpen]             = useState(false);
  const [activeId, setActiveId]     = useState(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => { setOpen(false); }, [location]);

  // Close mobile menu on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const handleNavClick = (link) => {
    setOpen(false);
    if (link.scroll && isHome) {
      setActiveId(link.scroll);
      setTimeout(() => scrollToId(link.scroll), 50);
    } else if (!link.scroll) {
      setActiveId(null);
      if (link.to === '/') window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isActive = (link) => {
    if (link.scroll) return isHome && activeId === link.scroll;
    return location.pathname === link.to && (!isHome || !activeId);
  };

  return (
    <>
      <nav
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${open ? 'navbar--open' : ''}`}
        aria-label="Main navigation"
      >
        <div className="navbar__inner container">
          {/* Logo */}
          <Link
            to="/"
            className="navbar__logo"
            onClick={() => handleNavClick({ to: '/', scroll: null })}
            aria-label="Oriole Entertainment home"
          >
            <img src="/logo.png" alt="Oriole Entertainment" width="120" height="40" />
          </Link>

          {/* Desktop Links */}
          <ul className="navbar__links" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.scroll && isHome ? (
                  <button
                    className={`navbar__link ${isActive(link) ? 'navbar__link--active' : ''}`}
                    onClick={() => handleNavClick(link)}
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    to={link.to}
                    className={`navbar__link ${isActive(link) ? 'navbar__link--active' : ''}`}
                    onClick={() => handleNavClick(link)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Right CTA */}
          <div className="navbar__right">
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary navbar__book"
            >
              Book Now
            </a>
            <button
              className="navbar__hamburger"
              onClick={() => setOpen(o => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="navbar__backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.nav
              id="mobile-menu"
              className="navbar__mobile"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 32 }}
              aria-label="Mobile navigation"
            >
              <div className="navbar__mobile-header">
                <img src="/logo.png" alt="Oriole Entertainment" width="100" />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="navbar__mobile-close"
                >
                  <X size={22} />
                </button>
              </div>

              <ul className="navbar__mobile-links" role="list">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    {link.scroll && isHome ? (
                      <button
                        className="navbar__mobile-link"
                        onClick={() => handleNavClick(link)}
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        to={link.to}
                        className="navbar__mobile-link"
                        onClick={() => handleNavClick(link)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              <div className="navbar__mobile-footer">
                <a
                  href={BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Book Now
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

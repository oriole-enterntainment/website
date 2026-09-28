import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, ChevronRight, Instagram, Facebook, Ticket } from 'lucide-react';
import './Footer.css';

const BOOK_URL = 'https://in.bookmyshow.com/events/oriole-entertainment-live/ET00316295';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__top container">
        {/* Column 1: Brand Info */}
        <div className="footer__col footer__brand">
          <img src="/logo.png" alt="Oriole Entertainment" className="footer__logo" />
          <p className="footer__tagline">
            <i>India's Biggest Live Stand Up Comedy Producers</i>
          </p>
          <p className="footer__desc">
            Plot No. 2732, 4th Floor, Golf Course Ext Road, Block-A, Sushant Lok 3, Sector 57, Gurugram, Haryana 122011
          </p>
          <div className="footer__social">
            <a href="https://www.instagram.com/orioleentertainment/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="BookMyShow">
              <Ticket size={18} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer__col">
          <h4>Useful Links</h4>
          <ul className="footer__links">
            <li><ChevronRight size={14} className="footer__chevron" /><Link to="/">Home</Link></li>
            <li><ChevronRight size={14} className="footer__chevron" /><a href="#about">About us</a></li>
            <li><ChevronRight size={14} className="footer__chevron" /><Link to="/artists">Artists</Link></li>
            <li><ChevronRight size={14} className="footer__chevron" /><Link to="/team">Team</Link></li>
            <li><ChevronRight size={14} className="footer__chevron" /><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer__col">
          <h4>Contact Us</h4>
          <ul className="footer__contact-list">
            <li>
              <MapPin size={16} className="footer__icon" />
              <span>Gurugram, Haryana 122011</span>
            </li>
            <li>
              <Phone size={16} className="footer__icon" />
              <span>+91 078301 00001, +91 7302208919</span>
            </li>
            <li>
              <Mail size={16} className="footer__icon" />
              <a href="mailto:info@orioleentertainment.com">info@orioleentertainment.com</a>
            </li>
            <li>
              <Mail size={16} className="footer__icon" />
              <a href="mailto:brands@orioleentertainment.com">brands@orioleentertainment.com</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Book a Show CTA */}
        <div className="footer__col footer__cta-col">
          <h4>Book a Show</h4>
          <p className="footer__cta-desc">
            Never miss an event from your favorite comedians! Book live tickets directly on BookMyShow.
          </p>
          <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary footer__book-btn">
            Book Now
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© Copyright <b>Oriole Entertainment</b>. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

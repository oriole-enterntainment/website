import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Instagram, Youtube } from 'lucide-react';
import './Footer.css';

const BOOK_URL = 'https://in.bookmyshow.com/events/oriole-entertainment-live/ET00316295';

const quickLinks = [
  { label: 'Home',          to: '/' },
  { label: 'About Us',      to: '/#about' },
  { label: 'What We Do',    to: '/#what-we-do' },
  { label: 'Our Work',      to: '/#work' },
  { label: 'Artists',       to: '/artists' },
  { label: 'Upcoming Shows',to: '/#tours' },
  { label: 'Contact',       to: '/#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__top container">
        {/* Brand */}
        <div className="footer__col footer__brand">
          <img src="/logo.png" alt="Oriole Entertainment" className="footer__logo" width="130" />
          <p className="footer__tagline">
            India's Biggest Live Stand Up Comedy Producers
          </p>
          <p className="footer__address">
            Plot No. 2732, 4th Floor, Golf Course Ext Road,<br />
            Sushant Lok 3, Sector 57,<br />
            Gurugram, Haryana 122011
          </p>
          <div className="footer__social">
            <a
              href="https://www.instagram.com/orioleentertainment/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Oriole Entertainment on Instagram"
              className="footer__social-link"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.youtube.com/@OrioleEntertainment"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Oriole Entertainment on YouTube"
              className="footer__social-link"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h4 className="footer__col-heading">Quick Links</h4>
          <ul className="footer__links" role="list">
            {quickLinks.map(l => (
              <li key={l.label}>
                <Link to={l.to} className="footer__link">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h4 className="footer__col-heading">Contact</h4>
          <ul className="footer__contact-list" role="list">
            <li>
              <Phone size={15} aria-hidden="true" />
              <a href="tel:+917830100001">+91 078301 00001</a>
            </li>
            <li>
              <Phone size={15} aria-hidden="true" />
              <a href="tel:+917302208919">+91 7302208919</a>
            </li>
            <li>
              <Mail size={15} aria-hidden="true" />
              <a href="mailto:team@orioleentertainment.com">team@orioleentertainment.com</a>
            </li>
            <li>
              <Mail size={15} aria-hidden="true" />
              <a href="mailto:brands@orioleentertainment.com">brands@orioleentertainment.com</a>
            </li>
            <li>
              <MapPin size={15} aria-hidden="true" />
              <span>Gurugram, Haryana 122011</span>
            </li>
          </ul>
        </div>

        {/* Book CTA */}
        <div className="footer__col footer__book-col">
          <h4 className="footer__col-heading">Book a Show</h4>
          <p className="footer__book-desc">
            Catch your favourite comedians live. Book tickets directly on BookMyShow.
          </p>
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary footer__book-btn"
          >
            Book Now
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>
            &copy; {year} <strong>Oriole Entertainment Pvt Ltd</strong>. All Rights Reserved.
          </p>
          <p className="footer__bottom-right">
            Made with ♥ in India
          </p>
        </div>
      </div>
    </footer>
  );
}

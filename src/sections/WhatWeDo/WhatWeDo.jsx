import { motion } from 'framer-motion';
import './WhatWeDo.css';

const verticals = [
  {
    id: 'artists',
    number: '01',
    title: 'Artists',
    desc: "Full-spectrum artist management for India's finest comedians and performers — from touring logistics and booking to brand collaborations and creative direction.",
    bg: '/images/bassi.jpg',
    cta: { label: 'Meet the Artists', href: '/artists' },
    external: false,
  },
  {
    id: 'live-shows',
    number: '02',
    title: 'Live Shows',
    desc: 'End-to-end production of live comedy and entertainment events — intimate gigs, city tours, and stadium-scale spectaculars like The Big Lineup.',
    bg: '/slide/biglineup1.jpg',
    cta: { label: 'Book a Show', href: 'https://in.bookmyshow.com/events/oriole-entertainment-live/ET00316295' },
    external: true,
  },
  {
    id: 'brand-partnerships',
    number: '03',
    title: 'Brand Partnerships',
    desc: 'Connect your brand with millions of live entertainment fans. We offer title sponsorships, co-branded IPs, and bespoke activations across our entire show slate.',
    bg: '/slide/leading-producers.jpg',
    cta: { label: 'Partner With Us', href: 'mailto:brands@orioleentertainment.com' },
    external: true,
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="wwd">
      <div className="wwd__header container">
        <span className="section-label">Our Verticals</span>
        <h2 className="wwd__title">What We Do</h2>
        <p className="wwd__subtitle">
          Three pillars powering India's live entertainment ecosystem.
        </p>
      </div>

      <div className="wwd__panels">
        {verticals.map((v, i) => (
          <motion.article
            key={v.id}
            className="wwd__panel"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Background image */}
            <div
              className="wwd__panel-bg"
              style={{ backgroundImage: `url(${v.bg})` }}
              aria-hidden="true"
            />
            <div className="wwd__panel-overlay" aria-hidden="true" />

            {/* Content */}
            <div className="wwd__panel-content">
              <span className="wwd__panel-number" aria-hidden="true">{v.number}</span>
              <h3 className="wwd__panel-title">{v.title}</h3>
              <p className="wwd__panel-desc">{v.desc}</p>
              {v.external ? (
                <a
                  href={v.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wwd__panel-cta"
                >
                  {v.cta.label}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              ) : (
                <a href={v.cta.href} className="wwd__panel-cta">
                  {v.cta.label}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

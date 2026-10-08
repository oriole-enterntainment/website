import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, ExternalLink } from 'lucide-react';
import { work } from '../../data/work';
import './WorkGrid.css';

export default function WorkGrid() {
  const [activeEmbed, setActiveEmbed] = useState(null);
  const [filter, setFilter] = useState('All');

  const tags = ['All', ...Array.from(new Set(work.flatMap(w => w.tags)))];
  const filtered = filter === 'All' ? work : work.filter(w => w.tags.includes(filter));

  return (
    <section id="work" className="work-grid section-pad">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Work</span>
          <h2>Showcase</h2>
          <div className="accent-rule" />
          <p>A selection of shows, events and partnerships we've produced.</p>
        </div>

        {/* Filter tabs */}
        <div className="work-grid__filters" role="tablist" aria-label="Filter work by category">
          {tags.map(t => (
            <button
              key={t}
              role="tab"
              aria-selected={filter === t}
              className={`work-grid__filter-btn ${filter === t ? 'work-grid__filter-btn--active' : ''}`}
              onClick={() => setFilter(t)}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div className="work-grid__grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.article
                key={item.id}
                className="work-tile"
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
              >
                <div className="work-tile__img-wrap">
                  <img
                    src={item.thumb}
                    alt={item.title}
                    className="work-tile__img"
                    loading="lazy"
                    onError={e => { e.target.style.opacity = '0'; }}
                  />
                  <div className="work-tile__overlay">
                    {item.embed ? (
                      <button
                        className="work-tile__play"
                        onClick={() => setActiveEmbed(item)}
                        aria-label={`Play ${item.title}`}
                      >
                        <Play size={28} />
                      </button>
                    ) : (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-tile__play"
                        aria-label={`View ${item.title}`}
                      >
                        <ExternalLink size={24} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="work-tile__meta">
                  <div className="work-tile__tags">
                    {item.tags.map(t => <span key={t} className="work-tile__tag">{t}</span>)}
                  </div>
                  <h3 className="work-tile__title">{item.title}</h3>
                  <p className="work-tile__sub">{item.subtitle}</p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeEmbed && (
          <motion.div
            className="video-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveEmbed(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Video: ${activeEmbed.title}`}
          >
            <motion.div
              className="video-modal__inner"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ type: 'spring', stiffness: 280, damping: 25 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="video-modal__close"
                onClick={() => setActiveEmbed(null)}
                aria-label="Close video"
              >
                <X size={22} />
              </button>
              <div className="video-modal__embed">
                <iframe
                  src={activeEmbed.embed}
                  title={activeEmbed.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

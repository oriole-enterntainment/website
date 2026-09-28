import { motion } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';
import './SpecialEvents.css';

const BIG_LINEUP_DECK = 'https://drive.google.com/file/d/1voZwL3hYgWRpLOCMM9o3DnZiROuhaNmt/view?usp=sharing';

const events = [
  {
    id: 'fy-plans',
    name: "Financial Year 2026-27 Plans",
    type: "Tour Plan",
    description: "Our comprehensive touring plans and strategy for the upcoming financial year.",
    pdf: "FY '26-27 Tours_compressed.pdf",
    icon: '📅',
  },
  {
    id: 'talkatora',
    name: "Talkatora Shows",
    type: "Venue Deck",
    description: "Details and sponsorship opportunities for our upcoming mega shows at Talkatora Indoor Stadium, Delhi.",
    pdf: "Talkatora Shows Deck_compressed.pdf",
    icon: '🏟️',
  },

];

const openPdf = (file) => window.open(`/pdfs/${encodeURIComponent(file)}`, '_blank');

export default function SpecialEvents() {
  return (
    <section id="events" className="special-events section-pad">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Special <span>Events & Tours</span></h2>
          <div className="accent-line" />
          <p>Flagship productions and sponsorship decks</p>
        </motion.div>

        {/* Big Lineup Showcase Header Card */}
        <motion.div
          className="big-lineup-feature"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="big-lineup-feature__left">
            <span className="big-lineup-feature__badge">⭐ FLAGSHIP SHOW</span>
            <h3>THE BIG LINEUP '2027</h3>
            <p>India's biggest multi-act live entertainment spectacle</p>
            <div className="big-lineup-feature__info">
              <span>📅 01 August 2027</span>
              <span>📍 KD Jadhav Stadium, Delhi</span>
            </div>
          </div>
          <button
            className="btn-primary big-lineup-feature__btn"
            onClick={() => window.open(BIG_LINEUP_DECK, '_blank')}
          >
            <ExternalLink size={16} /> View Deck
          </button>
        </motion.div>

        {/* Events Cards */}
        <div className="events-grid">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              className="event-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => openPdf(event.pdf)}
            >
              <div className="event-card__icon">{event.icon}</div>
              <span className="event-card__type">{event.type}</span>
              <h3>{event.name}</h3>
              <p>{event.description}</p>
              <button className="btn-ghost" style={{ marginTop: 'auto' }}>
                <FileText size={15} /> View Deck
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

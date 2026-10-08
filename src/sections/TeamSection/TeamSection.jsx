import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, ExternalLink, ArrowRight } from 'lucide-react';
import { leadership, teamMembers } from '../../data/team';
import './TeamSection.css';

/* Graceful avatar fallback — uses ui-avatars CDN, no PII sent (just initials) */
const avatarFallback = (name) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=e84118&color=fff&size=300`;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function TeamSection() {
  return (
    <section id="team" className="team-section section-pad">
      <div className="container">

        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">The People Behind the Magic</span>
          <h2>Our <span className="accent">Leadership</span> &amp; Team</h2>
          <div className="accent-rule" />
          <p>The visionaries and passionate team behind every live experience.</p>
        </motion.div>

        {/* ── Leadership ── */}
        <div className="team-section__block">
          <h3 className="team-section__sub-heading">Leadership</h3>
          <div className="leadership-grid">
            {leadership.map((person, i) => (
              <motion.article
                key={person.name}
                className="leader-card"
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
              >
                {/* Photo */}
                <div className="leader-card__photo-wrap">
                  <img
                    src={person.photo}
                    alt={`${person.name} — ${person.role} at Oriole Entertainment`}
                    className="leader-card__photo"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => { e.target.src = avatarFallback(person.name); }}
                  />
                  {person.instagram && (
                    <a
                      href={person.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="leader-card__ig-overlay"
                      aria-label={`${person.name} on Instagram`}
                    >
                      <Instagram size={26} aria-hidden="true" />
                      <span>View Profile</span>
                    </a>
                  )}
                </div>

                {/* Info */}
                <div className="leader-card__info">
                  <span className="leader-card__role">{person.role}</span>
                  <h3 className="leader-card__name">{person.name}</h3>
                  <p className="leader-card__bio">{person.bio}</p>
                  {person.instagram && (
                    <a
                      href={person.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="leader-card__ig-link"
                      aria-label={`Follow ${person.name} on Instagram`}
                    >
                      <Instagram size={14} aria-hidden="true" />
                      Instagram
                      <ExternalLink size={12} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* ── Team Members ── */}
        <div className="team-section__block">
          <h3 className="team-section__sub-heading">Team Members</h3>
          <motion.div
            className="team-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {teamMembers.map((member) => (
              <motion.article
                key={member.name}
                className="team-card"
                variants={cardVariants}
              >
                <div className="team-card__photo-wrap">
                  <img
                    src={member.photo}
                    alt={`${member.name} — ${member.role}`}
                    className="team-card__photo"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => { e.target.src = avatarFallback(member.name); }}
                  />
                </div>
                <div className="team-card__info">
                  <h4 className="team-card__name">{member.name}</h4>
                  <p className="team-card__role">{member.role}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        {/* CTA to full team page */}
        <motion.div
          className="team-section__cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/team" className="btn-outline team-section__cta-btn">
            Meet the Full Team
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

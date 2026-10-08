import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Phone, Building2 } from 'lucide-react';
import './BookArtist.css';

/* FormSubmit.co — free, no backend needed. Sends form data to the email below. */
const FORM_ACTION = 'https://formsubmit.co/krishna@orioleentertainment.com';

export default function BookArtist() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    /* FormSubmit handles the POST — we just show success UI */
    setSubmitted(true);
    /* Let the native form submit happen in background */
  };

  const close = () => {
    setOpen(false);
    /* Reset after animation completes */
    setTimeout(() => setSubmitted(false), 400);
  };

  return (
    <>
      {/* Floating trigger button */}
      <motion.button
        className="book-artist-fab"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-label="Book an Artist"
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.8, type: 'spring', stiffness: 260, damping: 22 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        <span>Book an Artist</span>
      </motion.button>

      {/* Modal overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="book-artist-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
              aria-hidden="true"
            />

            {/* Centered Scrollable Modal Overlay */}
            <div className="book-artist-modal-overlay" onClick={close}>
              <motion.div
                className="book-artist-panel"
                role="dialog"
                aria-modal="true"
                aria-label="Book an Artist"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="book-artist-panel__header">
                <div>
                  <span className="section-label" style={{ marginBottom: '0.3rem' }}>Oriole Entertainment</span>
                  <h2 className="book-artist-panel__title">Book an Artist</h2>
                </div>
                <button
                  className="book-artist-panel__close"
                  onClick={close}
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Body */}
              {submitted ? (
                <motion.div
                  className="book-artist-panel__success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="book-artist-panel__success-icon">✓</div>
                  <h3>Request Received!</h3>
                  <p>
                    Thank you! Our team will get back to you within 24 hours at the
                    email/contact you provided.
                  </p>
                  <button className="btn-primary" onClick={close}>
                    Close
                  </button>
                </motion.div>
              ) : (
                <form
                  className="book-artist-form"
                  action={FORM_ACTION}
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  {/* FormSubmit hidden fields */}
                  <input type="hidden" name="_subject" value="New Artist Booking Request — Oriole Website" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="text" name="_honey" style={{ display: 'none' }} aria-hidden="true" />

                  <div className="book-artist-form__grid">
                    {/* Name */}
                    <div className="book-artist-form__field">
                      <label htmlFor="ba-name">
                        <User size={13} aria-hidden="true" /> Your Name *
                      </label>
                      <input
                        id="ba-name"
                        name="name"
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        required
                        autoComplete="name"
                      />
                    </div>

                    {/* Email */}
                    <div className="book-artist-form__field">
                      <label htmlFor="ba-email">
                        <Send size={13} aria-hidden="true" /> Email Address *
                      </label>
                      <input
                        id="ba-email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        autoComplete="email"
                      />
                    </div>

                    {/* Phone */}
                    <div className="book-artist-form__field">
                      <label htmlFor="ba-phone">
                        <Phone size={13} aria-hidden="true" /> Phone Number *
                      </label>
                      <input
                        id="ba-phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        required
                        autoComplete="tel"
                      />
                    </div>

                    {/* Organisation */}
                    <div className="book-artist-form__field">
                      <label htmlFor="ba-org">
                        <Building2 size={13} aria-hidden="true" /> Organisation / Company
                      </label>
                      <input
                        id="ba-org"
                        name="organisation"
                        type="text"
                        placeholder="e.g. XYZ Pvt Ltd"
                      />
                    </div>

                    {/* Artist preference */}
                    <div className="book-artist-form__field book-artist-form__field--full">
                      <label htmlFor="ba-artist">
                        Artist / Act Preference *
                      </label>
                      <input
                        id="ba-artist"
                        name="artist_preference"
                        type="text"
                        placeholder="e.g. Anubhav Singh Bassi, or open to suggestions"
                        required
                      />
                    </div>

                    {/* Event type */}
                    <div className="book-artist-form__field">
                      <label htmlFor="ba-event-type">Event Type *</label>
                      <select id="ba-event-type" name="event_type" required>
                        <option value="">Select…</option>
                        <option>Corporate Event</option>
                        <option>College Fest</option>
                        <option>Private Party / Celebration</option>
                        <option>Public Show / Tour</option>
                        <option>Brand Activation</option>
                        <option>Other</option>
                      </select>
                    </div>

                    {/* Event date */}
                    <div className="book-artist-form__field">
                      <label htmlFor="ba-date">Preferred Event Date</label>
                      <input
                        id="ba-date"
                        name="event_date"
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>

                    {/* City */}
                    <div className="book-artist-form__field">
                      <label htmlFor="ba-city">City / Venue *</label>
                      <input
                        id="ba-city"
                        name="city"
                        type="text"
                        placeholder="e.g. New Delhi"
                        required
                      />
                    </div>

                    {/* Budget */}
                    <div className="book-artist-form__field">
                      <label htmlFor="ba-budget">Approximate Budget</label>
                      <select id="ba-budget" name="budget">
                        <option value="">Prefer not to say</option>
                        <option>Under ₹5 Lakhs</option>
                        <option>₹5 – 15 Lakhs</option>
                        <option>₹15 – 50 Lakhs</option>
                        <option>₹50 Lakhs+</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="book-artist-form__field book-artist-form__field--full">
                      <label htmlFor="ba-message">Additional Details</label>
                      <textarea
                        id="ba-message"
                        name="message"
                        rows={3}
                        placeholder="Tell us more about your event, expected audience size, any special requirements…"
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn-primary book-artist-form__submit">
                    <Send size={16} aria-hidden="true" />
                    Send Booking Request
                  </button>
                  <p className="book-artist-form__note">
                    We typically respond within 24 hours on business days.
                  </p>
                </form>
              )}
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

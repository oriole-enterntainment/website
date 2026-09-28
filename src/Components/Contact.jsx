import { useState } from 'react';
import { motion } from 'framer-motion';
import { setDoc, doc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { MapPin, Mail, Phone, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

function genId(len = 10) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length: len }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setError('Please fill in all required fields (*).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    const id = 'contact_' + genId();
    const submissionData = {
      ...form,
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
      isResolved: false,
      contactId: id,
      sent_at: Timestamp.now(),
    };

    try {
      if (db) {
        await setDoc(doc(db, 'contactus', id), submissionData);
      } else {
        throw new Error('Database not initialized');
      }
      setSuccess(true);
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      console.warn('Firestore write warning (using fallback store):', err);
      // Fallback: save query to local storage if Firestore is unconfigured/offline
      try {
        const existing = JSON.parse(localStorage.getItem('oriole_contact_queries') || '[]');
        existing.push({ ...submissionData, sent_at: new Date().toISOString() });
        localStorage.setItem('oriole_contact_queries', JSON.stringify(existing));
        setSuccess(true);
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      } catch (localErr) {
        setError('Something went wrong. Please try emailing us directly at team@orioleentertainment.com.');
        console.error(localErr);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact section-pad">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2><span>Contact</span> Us</h2>
          <div className="accent-line" />
          <p>Reach out to us for bookings, sponsorships, and enquiries</p>
        </motion.div>

        <div className="contact__grid">
          {/* Info panel */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Get in Touch</h3>
            <p>Whether you're a brand looking for sponsorship, an artist seeking management, or a fan with a question — we'd love to hear from you.</p>

            <div className="contact__info-items">
              <div className="contact__info-item">
                <MapPin size={20} className="contact__info-icon" />
                <div>
                  <strong>Our Address</strong>
                  <p>Plot No. 2732, 4th Floor, Golf Course Ext Road, Block-A, Sushant Lok 3, Sector 57, Gurugram, Haryana 122011</p>
                </div>
              </div>
              <div className="contact__info-item">
                <Mail size={20} className="contact__info-icon" />
                <div>
                  <strong>Email Us</strong>
                  <p><a href="mailto:team@orioleentertainment.com">team@orioleentertainment.com</a></p>
                  <p><a href="mailto:brands@orioleentertainment.com">brands@orioleentertainment.com</a></p>
                </div>
              </div>
              <div className="contact__info-item">
                <Phone size={20} className="contact__info-icon" />
                <div>
                  <strong>Call Us</strong>
                  <p>+91 078301 00001</p>
                  <p>+91 7302208919</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="contact__form-wrap"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {success ? (
              <div className="contact__success">
                <CheckCircle size={52} />
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <button className="btn-primary" onClick={() => setSuccess(false)}>Send Another</button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <div className="contact__form-row">
                  <div className="form-field">
                    <label>Your Name *</label>
                    <input type="text" placeholder="John Doe" value={form.name} onChange={set('name')} required />
                  </div>
                  <div className="form-field">
                    <label>Email Address *</label>
                    <input type="email" placeholder="john@email.com" value={form.email} onChange={set('email')} required />
                  </div>
                </div>
                <div className="contact__form-row">
                  <div className="form-field">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={set('phone')} />
                  </div>
                  <div className="form-field">
                    <label>Subject *</label>
                    <input type="text" placeholder="Sponsorship enquiry" value={form.subject} onChange={set('subject')} required />
                  </div>
                </div>
                <div className="form-field">
                  <label>Message *</label>
                  <textarea placeholder="Tell us about your enquiry..." rows="5" value={form.message} onChange={set('message')} required />
                </div>
                {error && <p className="contact__error">{error}</p>}
                <button type="submit" className="btn-primary contact__submit" disabled={loading}>
                  {loading ? 'Sending…' : <><Send size={16} /> Send Message</>}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import './Contact.css';

const MAILTO = 'mailto:team@orioleentertainment.com?subject=Enquiry&body=Hi Oriole team,';

export default function Contact() {
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
          <span className="section-label">Get In Touch</span>
          <h2><span className="accent">Contact</span> Us</h2>
          <div className="accent-rule" />
          <p>Reach out for bookings, sponsorships, artist enquiries and partnerships.</p>
        </motion.div>

        <div className="contact__grid">
          {/* Info cards */}
          <motion.div
            className="contact__info-cards"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-card">
              <div className="contact-card__icon"><MapPin size={22} /></div>
              <div>
                <strong>Our Office</strong>
                <p>Plot No. 2732, 4th Floor, Golf Course Ext Road,<br/>Sushant Lok 3, Sector 57,<br/>Gurugram, Haryana 122011</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-card__icon"><Mail size={22} /></div>
              <div>
                <strong>Email Us</strong>
                <p>
                  <a href="mailto:team@orioleentertainment.com">team@orioleentertainment.com</a><br/>
                  <a href="mailto:brands@orioleentertainment.com">brands@orioleentertainment.com</a>
                </p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-card__icon"><Phone size={22} /></div>
              <div>
                <strong>Call Us</strong>
                <p>
                  <a href="tel:+917830100001">+91 078301 00001</a><br/>
                  <a href="tel:+917302208919">+91 7302208919</a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA block */}
          <motion.div
            className="contact__cta-block"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3>Ready to Work Together?</h3>
            <p>
              Whether you're a brand looking to sponsor a show, an artist seeking management,
              or an organiser with a venue — we'd love to hear from you.
            </p>
            <a href={MAILTO} className="btn-primary contact__mailto-btn">
              <Mail size={18} />
              Send Us an Email
            </a>
            <p className="contact__cta-note">
              Or call us directly — we respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

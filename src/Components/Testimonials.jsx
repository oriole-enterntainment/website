import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const reviews = [
  {
    name: 'Satvik Gupta',
    role: 'Show Attendee',
    photo: '/testimonials/satvik.png',
    text: "Bassi is my favourite comedian and Oriole made my dream come true by meeting him one day. Thank you so much!",
    stars: 5,
  },
  {
    name: 'Riya Sharma',
    role: 'Show Attendee',
    photo: '/testimonials/riya.jpeg',
    text: "Amazing experience! Will definitely come back next time. The show was perfectly organized and super fun.",
    stars: 5,
  },
  {
    name: 'Vedic Jain',
    role: 'Corporate Client',
    photo: '/testimonials/vedic.JPG',
    text: "Oriole Entertainment delivered an exceptional corporate show. Professional, punctual, and absolutely entertaining. Highly recommend!",
    stars: 5,
  },
  {
    name: 'Ananya Deshmukh',
    role: 'Attendee',
    photo: '/testimonials/riya.jpeg',
    text: "Fantastic shows! Had a blast with my friends. The energy in the venue was unmatched!",
    stars: 5,
  },
  {
    name: 'Rohan Mehta',
    role: 'Brand Partner',
    photo: '/testimonials/satvik.png',
    text: "Sponsoring Oriole's comedy tours gave our brand huge visibility across Tier-2 cities. Great management team!",
    stars: 5,
  }
];

export default function Testimonials() {
  const doubledReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section id="testimonials" className="testimonials section-pad">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2><span>TESTIMONIALS</span></h2>
          <div className="accent-line" />
          <p>See what people think about us</p>
        </motion.div>
      </div>

      {/* Continuous Marquee Ticker showing testimonials one after another */}
      <div className="testimonials-ticker-wrapper">
        <div className="testimonials-ticker-track">
          {doubledReviews.map((review, i) => (
            <div key={`${review.name}-${i}`} className="testimonial-card">
              <Quote size={28} className="testimonial-card__quote-icon" />
              <p className="testimonial-card__text">"{review.text}"</p>
              <div className="testimonial-card__stars">
                {'★'.repeat(review.stars)}
              </div>
              <div className="testimonial-card__author">
                <img
                  src={review.photo}
                  alt={review.name}
                  onError={e => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(review.name)}&background=e84118&color=fff&size=80`;
                  }}
                />
                <div>
                  <p className="testimonial-card__name">{review.name}</p>
                  <p className="testimonial-card__role">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

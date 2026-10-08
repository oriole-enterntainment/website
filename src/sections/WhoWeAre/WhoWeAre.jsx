import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import './WhoWeAre.css';

const stats = [
  { value: 15, prefix: '', suffix: ' Lacs+', label: 'Tickets Sold & Counting' },
  { value: 100, prefix: '', suffix: '+',     label: 'Artists Managed' },
  { value: 130, prefix: '', suffix: '+',     label: 'Cities Reached' },
  { value: 10000, prefix: '', suffix: '+',   label: 'Shows Produced' },
  { value: 7, prefix: '', suffix: '+',       label: 'Years of Excellence' },
];

function Counter({ value, prefix = '', suffix, label, started }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    const duration = 1600;
    const steps = 60;
    const increment = value / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCount(Math.min(Math.round(increment * step), value));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, value]);

  const display = count >= 1000 ? count.toLocaleString('en-IN') : count;

  return (
    <div className="wwa-stat">
      <span className="wwa-stat__number">{prefix}{display}{suffix}</span>
      <span className="wwa-stat__label">{label}</span>
    </div>
  );
}

export default function WhoWeAre() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const textRef = useRef(null);
  const textInView = useInView(textRef, { once: true, margin: '-80px' });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };
  const lineVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="about" className="wwa section-pad">
      <div className="container">
        <div className="wwa__grid">
          {/* Editorial text block only */}
          <motion.div
            ref={textRef}
            className="wwa__text"
            variants={containerVariants}
            initial="hidden"
            animate={textInView ? 'visible' : 'hidden'}
          >
            <motion.span className="section-label" variants={lineVariants}>
              Who Are We
            </motion.span>
            <motion.h2 className="wwa__headline" variants={lineVariants}>
              A Bustling Hive of <em className="wwa__em">Creativity</em> &amp; Live Energy
            </motion.h2>
            <motion.p className="wwa__body" variants={lineVariants}>
              <strong>Oriole Entertainment Pvt Ltd</strong> has been a trailblazer in bringing
              live entertainment to every corner of India since 2017. As the home of renowned
              comedians like <strong>Anubhav Singh Bassi</strong> and <strong>Harsh Gujral</strong>,
              we've spread laughter across cities from Agra to Dehradun and beyond.
            </motion.p>
            <motion.p className="wwa__body" variants={lineVariants}>
              Founded by <strong>Ankur Bhargava</strong>, our mission is simple: deliver
              world-class live entertainment at every scale — from intimate solo sets
              to stadium-filling spectaculars like <em>The Big Lineup</em>.
            </motion.p>
            <motion.div variants={lineVariants}>
              <a
                href="https://in.bookmyshow.com/events/oriole-entertainment-live/ET00316295"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View Upcoming Shows
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats — full-width 5-col strip */}
        <div className="wwa__stats" ref={ref}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6 }}
            >
              <Counter {...s} started={inView} />
            </motion.div>
          ))}
        </div>


        {/* Star Roster Photo */}
        <motion.div
          className="wwa__banner-wrap"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <picture>
            <source media="(max-width: 768px)" srcSet="/images/oriole-banner-mobile.jpg" />
            <img
              src="/images/oriole-banner-desktop.png"
              alt="Oriole Entertainment artist roster — India's leading live entertainment company"
              className="wwa__banner-img"
              loading="lazy"
            />
          </picture>
          <div className="wwa__banner-caption">
            India's Biggest Live Stand Up Comedy Producers
          </div>
        </motion.div>
      </div>
    </section>
  );
}

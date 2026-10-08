import { motion } from 'framer-motion';
import './WhatsAppButton.css';

const WA_NUMBER = '917830100001';
const WA_MESSAGE = encodeURIComponent(
  'Hi Oriole Entertainment! I have a query I\'d like to discuss.'
);
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export default function WhatsAppButton() {
  return (
    <motion.a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-btn"
      aria-label="Chat with us on WhatsApp"
      title="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 300, damping: 20 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* WhatsApp SVG icon — no external dependency */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="28"
        height="28"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.472 2.027 7.774L0 32l8.476-2.002A15.933 15.933 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.287 13.287 0 0 1-6.784-1.856l-.486-.29-5.029 1.188 1.234-4.906-.317-.503A13.285 13.285 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667c7.364 0 13.333 5.969 13.333 13.333 0 7.364-5.969 13.333-13.333 13.333zm7.307-9.984c-.4-.2-2.365-1.167-2.731-1.3-.366-.133-.633-.2-.9.2-.267.4-1.033 1.3-1.267 1.567-.233.267-.467.3-.867.1-.4-.2-1.688-.622-3.215-1.983-1.188-1.06-1.99-2.369-2.223-2.769-.233-.4-.025-.616.175-.816.18-.18.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.233-2.967-.325-.78-.655-.675-.9-.687l-.767-.013c-.267 0-.7.1-1.067.5s-1.4 1.367-1.4 3.333 1.433 3.867 1.633 4.133c.2.267 2.82 4.307 6.833 6.033.955.412 1.7.658 2.281.843.958.305 1.831.262 2.52.159.769-.115 2.365-.967 2.698-1.9.333-.933.333-1.733.233-1.9-.1-.167-.367-.267-.767-.467z" />
      </svg>
      <span className="wa-btn__label">WhatsApp Us</span>
    </motion.a>
  );
}

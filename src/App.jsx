import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import WhatsAppButton from './Components/WhatsAppButton/WhatsAppButton';
import BookArtist from './Components/BookArtist/BookArtist';
import Home from './pages/Home';
import ArtistsPage from './pages/ArtistsPage';
import TeamPage from './pages/TeamPage';
import './App.css';


const pageVariants = {
  initial: { opacity: 0 },
  in:      { opacity: 1 },
  out:     { opacity: 0 },
};
const pageTransition = { duration: 0.3 };

function AnimatedPage({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
          <Route path="/artists" element={<AnimatedPage><ArtistsPage /></AnimatedPage>} />
          <Route path="/team" element={<AnimatedPage><TeamPage /></AnimatedPage>} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
      <BookArtist />
      <Analytics />
    </>
  );
}

export default App;

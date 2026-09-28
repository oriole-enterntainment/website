import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, FileText, Lock } from 'lucide-react';
import './UpcomingTours.css';

const rawArtistsData = [
  {
    id: "KANAN GILL- ORIOLE SPONSORSHIP DECK_compressed.pdf",
    name: "Kanan Gill",
    image: "kanan-gill.jpg",
    description: "Top standup comedian known for his witty humor and observational comedy.",
    shows: [
      "Feb 20, 2027 - Delhi",
      "Feb 21, 2027 - Delhi"
    ],
    instagram: "https://www.instagram.com/kanangill/"
  },
  {
    id: "shilpa-rao",
    name: "Shilpa Rao",
    image: "shilpa rao.jpg",
    description: "Renowned playback singer known for her soulful voice and chart-topping hits.",
    shows: [
      "To Be Announced"
    ],
    instagram: "https://www.instagram.com/shilparao/?hl=en"
  },
  {
    id: "hifaf",
    name: "HIFAF",
    image: "hifaf.jpg",
    description: "Himalayan Indie Film and Arts Festival.",
    shows: [
      "Dec 11, 2026 - TBA",
      "Dec 12, 2026 - TBA",
      "Dec 13, 2026 - TBA"
    ],
    instagram: "https://www.instagram.com/hifaf_/?hl=en",
    pdfs: [
      { name: "Mountain Sound", file: "1. MOUNTAIN SOUND LAB_compressed.pdf" },
      { name: "Reforge Himalayas", file: "2. REFORGE THE HIMALAYAS_compressed.pdf" },
      { name: "Colours of Hifaf", file: "3. COLOURS OF HIFAF_compressed.pdf" },
      { name: "Ride Shoot Edit", file: "4. RIDE SHOOT EDIT_compressed.pdf" }
    ]
  },
  {
    id: "Osho Jain  (1)_compressed.pdf",
    name: "Osho Jain",
    image: "osho-jain.jpg",
    description: "Indie singer-songwriter weaving magic with his acoustic tunes.",
    shows: [
      "Nov 28, 2026 - Bengaluru",
      "Nov 29, 2026 - Hyderabad",
      "Dec 4, 2026 - Mumbai",
      "Dec 5, 2026 - Pune",
      "Dec 6, 2026 - Goa",
      "Dec 12, 2026 - Manali",
      "Dec 13, 2026 - Chandigarh",
      "Dec 18, 2026 - Delhi",
      "Dec 19, 2026 - Meerut",
      "Dec 20, 2026 - Dehradun",
      "Dec 25, 2026 - Lucknow",
      "Dec 26, 2026 - Kanpur",
      "Dec 27, 2026 - Varanasi",
      "Jan 8, 2027 - Kochi",
      "Jan 9, 2027 - Coimbatore",
      "Jan 10, 2027 - Thane",
      "Jan 15, 2027 - Siliguri",
      "Jan 16, 2027 - Guwahati",
      "Jan 17, 2027 - Kolkata",
      "Jan 23, 2027 - Indore",
      "Jan 24, 2027 - Bhopal",
      "Jan 30, 2027 - Raipur",
      "Jan 31, 2027 - Nagpur",
      "Feb 5, 2027 - Hyderabad",
      "Feb 6, 2027 - Bangalore",
      "Feb 7, 2027 - Bhubaneshwar",
      "Feb 12, 2027 - Vadodara",
      "Feb 13, 2027 - Rajkot",
      "Feb 14, 2027 - Ahmedabad",
      "Feb 19, 2027 - Gurugram",
      "Feb 20, 2027 - Delhi",
      "Feb 21, 2027 - Jaipur",
      "Mar 13, 2027 - Pune",
      "Mar 14, 2027 - Mumbai"
    ],
    instagram: "https://www.instagram.com/oshojain_/"
  },
  {
    id: "Harsh Gujral sponsorship deck_compressed.pdf",
    name: "Harsh Gujral",
    image: "harsh-gujral.jpg",
    description: "High-energy standup comedian with great crowd work.",
    shows: [
      "Oct 2, 2026 - Nagpur",
      "Oct 3, 2026 - Kolkata",
      "Oct 4, 2026 - Patna",
      "Oct 9, 2026 - Delhi",
      "Oct 10, 2026 - Ghaziabad",
      "Oct 11, 2026 - Noida",
      "Oct 16, 2026 - Nasik",
      "Oct 17, 2026 - Pune",
      "Oct 18, 2026 - Mumbai",
      "Oct 23, 2026 - Bangalore",
      "Oct 24, 2026 - Chennai",
      "Oct 25, 2026 - Goa",
      "Oct 29, 2026 - Bahrain",
      "Oct 30, 2026 - Doha",
      "Oct 31, 2026 - Oman",
      "Nov 1, 2026 - Dubai",
      "Nov 5, 2026 - Bareilly",
      "Nov 6, 2026 - Rampur",
      "Nov 7, 2026 - Haldwani",
      "Nov 8, 2026 - Dehradun",
      "Nov 13, 2026 - Guwahati",
      "Nov 14, 2026 - Mumbai",
      "Nov 15, 2026 - Amravati",
      "Nov 16, 2026 - Akola",
      "Nov 19, 2026 - Durg",
      "Nov 20, 2026 - Raipur",
      "Nov 21, 2026 - Bilaspur",
      "Nov 22, 2026 - Sanghli",
      "Nov 27, 2026 - Surat",
      "Nov 28, 2026 - Vadodara",
      "Nov 29, 2026 - Ahmedabad",
      "Nov 30, 2026 - Rajkot",
      "Dec 4, 2026 - Bhubaneswar",
      "Dec 5, 2026 - Patna",
      "Dec 6, 2026 - Kolkata",
      "Dec 11, 2026 - Bengaluru",
      "Dec 12, 2026 - Bengaluru",
      "Dec 13, 2026 - Bengaluru",
      "Dec 17, 2026 - Agra",
      "Dec 18, 2026 - Kanpur",
      "Dec 19, 2026 - Lucknow",
      "Dec 20, 2026 - Varanasi",
      "Dec 24, 2026 - Bikaner",
      "Dec 25, 2026 - Jodhpur",
      "Dec 26, 2026 - Udaipur",
      "Dec 27, 2026 - Jaipur",
      "Dec 28, 2026 - Alwar",
      "Jan 1, 2027 - Nashik",
      "Jan 2, 2027 - Aurangabad",
      "Jan 3, 2027 - Mumbai",
      "Jan 8, 2027 - Goa",
      "Jan 9, 2027 - Mangalore",
      "Jan 10, 2027 - Bangalore",
      "Jan 15, 2027 - Kullu",
      "Jan 16, 2027 - Delhi",
      "Jan 17, 2027 - Chandigarh",
      "Jan 22, 2027 - Surat",
      "Jan 23, 2027 - Vadodara",
      "Jan 24, 2027 - Ahmedabad",
      "Jan 29, 2027 - Devgarh",
      "Jan 30, 2027 - Ranchi",
      "Jan 31, 2027 - Jamshedpur",
      "Feb 5, 2027 - Pune",
      "Feb 6, 2027 - Mumbai",
      "Feb 7, 2027 - Bangalore",
      "Feb 12, 2027 - Chennai",
      "Feb 13, 2027 - Kolkata",
      "Feb 14, 2027 - Asansol",
      "Feb 19, 2027 - Jabalpur",
      "Feb 20, 2027 - Bhopal",
      "Feb 21, 2027 - Indore",
      "Feb 26, 2027 - Durg",
      "Feb 27, 2027 - Raipur",
      "Feb 28, 2027 - Bilaspur",
      "Mar 5, 2027 - Delhi",
      "Mar 6, 2027 - Mumbai",
      "Mar 7, 2027 - Pune",
      "Mar 12, 2027 - Bangalore",
      "Mar 13, 2027 - Chennai",
      "Mar 14, 2027 - Hyderabad"
    ],
    instagram: "https://www.instagram.com/realharshgujral/"
  },
  {
    id: "Amit Tandon (2)_compressed.pdf",
    name: "Amit Tandon",
    image: "amit-tandon.png",
    description: "The married guy comedy, highly relatable for family audiences.",
    shows: [
      "To Be Announced"
    ],
    instagram: "https://www.instagram.com/amitandon17/",
    sponsorship: {
      titleSponsor: {
        status: 'sponsored',
        sponsorName: 'NAWGATI',
        logo: '/images/brands/nawgati_dark.svg'
      },
      coPoweredBy: { status: 'available', label: 'AVAILABLE' }
    }
  },
  {
    id: "Avinash Gupta_compressed.pdf",
    name: "Avinash Gupta",
    image: "avinash-gupta.jpg",
    description: "Rising star with a unique blend of storytelling.",
    shows: [
      "Sep 12, 2026 - Raipur",
      "Sep 13, 2026 - Nagpur",
      "Sep 26, 2026 - Vadodara",
      "Sep 27, 2026 - Surat",
      "Oct 9, 2026 - Mohali",
      "Oct 11, 2026 - Mumbai",
      "Oct 18, 2026 - Shanmukhanand, Mumbai",
      "Oct 25, 2026 - Bengaluru",
      "Nov 15, 2026 - Indore",
      "Dec 6, 2026 - Bengaluru",
      "Dec 18, 2026 - Ahmedabad",
      "Dec 19, 2026 - Vadodara",
      "Dec 20, 2026 - Rajkot",
      "Jan 22, 2027 - Kolkata",
      "Jan 23, 2027 - Bengaluru",
      "Jan 24, 2027 - Chennai / Guwahati",
      "Feb 7, 2027 - Delhi"
    ],
    instagram: "https://www.instagram.com/just.avinashgupta/"
  },
  {
    id: "Bassi Sponsorship.Deck (2)_compressed.pdf",
    name: "Anubhav Singh Bassi",
    image: "bassi.jpg",
    description: "Master of relatable anecdotes and storytelling.",
    shows: [
      "Sep 11, 2026 - Ahmedabad",
      "Sep 12, 2026 - Vadodara",
      "Sep 13, 2026 - Surat",
      "Sep 18, 2026 - TBA",
      "Sep 19, 2026 - Chennai",
      "Sep 20, 2026 - Hyderabad",
      "Sep 25, 2026 - Kurukshetra",
      "Sep 26, 2026 - Ludhiana",
      "Sep 27, 2026 - Chandigarh",
      "Oct 3, 2026 - Dehradun",
      "Oct 4, 2026 - Roorkee / Dehradun",
      "Oct 9, 2026 - TBA",
      "Oct 10, 2026 - Jammu",
      "Oct 11, 2026 - Srinagar",
      "Oct 16, 2026 - Mysore",
      "Oct 17, 2026 - Bangalore",
      "Oct 23, 2026 - Sagar",
      "Oct 24, 2026 - Bhopal",
      "Oct 25, 2026 - Indore",
      "Nov 13, 2026 - Mumbai",
      "Nov 14, 2026 - Mumbai",
      "Nov 15, 2026 - Mumbai",
      "Nov 22, 2026 - Guwahati",
      "Nov 27, 2026 - TBA",
      "Nov 28, 2026 - Mumbai",
      "Nov 29, 2026 - Mumbai",
      "Dec 4, 2026 - Pune",
      "Dec 5, 2026 - Bangalore",
      "Dec 6, 2026 - Bangalore",
      "Dec 11, 2026 - TBA",
      "Dec 12, 2026 - Delhi",
      "Dec 13, 2026 - Delhi",
      "Dec 18, 2026 - Lucknow",
      "Dec 19, 2026 - Prayagraj",
      "Dec 20, 2026 - Riwa"
    ],
    instagram: "https://www.instagram.com/be_a_bassi/",
    sponsorship: {
      titleSponsor: { status: 'available', label: 'AVAILABLE' },
      coPoweredBy: { status: 'available', label: 'AVAILABLE' }
    }
  },
  {
    id: "Khan Saab (3)_compressed.pdf",
    name: "Khan Saab",
    image: "khan-saab.png",
    description: "Soulful Punjabi and Sufi singer.",
    shows: [
      "Jan 9, 2027 - Delhi-NCR",
      "Jan 10, 2027 - Chandigarh / Ludhiana",
      "Jan 16, 2027 - Mumbai",
      "Jan 17, 2027 - Pune",
      "Jan 31, 2027 - Lucknow",
      "Feb 6, 2027 - Bengaluru",
      "Feb 7, 2027 - Hyderabad",
      "Feb 13, 2027 - Ahmedabad",
      "Feb 14, 2027 - Mumbai Central"
    ],
    instagram: "https://www.instagram.com/realkhansaab/"
  },
  {
    id: "Lakhwinder Wadali Deck (1)_compressed.pdf",
    name: "Lakhwinder Wadali",
    image: "lakhwinder-wadali.jpg",
    description: "Renowned classical and Sufi artist.",
    shows: [
      "Oct 24, 2026 - Jaipur",
      "Oct 31, 2026 - Hyderabad",
      "Nov 14, 2026 - Ahmedabad",
      "Nov 28, 2026 - Delhi",
      "Dec 25, 2026 - Bangalore",
      "Jan 9, 2027 - Chandigarh",
      "Jan 16, 2027 - Pune",
      "Jan 20, 2027 - Ludhiana",
      "Jan 23, 2027 - Kolkata",
      "Feb 14, 2027 - Mumbai",
      "Feb 27, 2027 - Gurgaon"
    ],
    instagram: "https://www.instagram.com/lakhwinderwadaliofficial/"
  },
  {
    id: "Rabbi Shergill  (1)_compressed.pdf",
    name: "Rabbi Shergill",
    image: "rabbi-shergill.jpg",
    description: "Sufi rock pioneer with thought-provoking lyrics.",
    shows: [
      "To Be Announced"
    ],
    instagram: "https://www.instagram.com/rabbishergill/",
    sponsorship: {
      titleSponsor: {
        status: 'sponsored',
        sponsorName: 'NAWGATI',
        logo: '/images/brands/nawgati_dark.svg'
      },
      coPoweredBy: { status: 'available', label: 'AVAILABLE' }
    }
  },
  {
    id: "Ravi Gupta Sponsorship Deck (2)_compressed.pdf",
    name: "Ravi Gupta",
    image: "ravi-gupta.jpg",
    description: "Observational comedy that hits right at home.",
    shows: [
      "Nov 12, 2026 - Mohali",
      "Nov 13, 2026 - Noida",
      "Nov 14, 2026 - Delhi",
      "Nov 15, 2026 - Kolkata",
      "Nov 19, 2026 - Mathura",
      "Nov 20, 2026 - Mumbai",
      "Nov 21, 2026 - Pune",
      "Nov 22, 2026 - Bangalore",
      "Nov 26, 2026 - Amritsar",
      "Nov 27, 2026 - Ludhiana",
      "Nov 28, 2026 - Bathinda",
      "Nov 29, 2026 - Chandigarh",
      "Dec 4, 2026 - Mumbai",
      "Dec 5, 2026 - Chennai",
      "Dec 6, 2026 - Hyderabad",
      "Dec 10, 2026 - Agra",
      "Dec 11, 2026 - Gwalior",
      "Dec 12, 2026 - Indore",
      "Dec 13, 2026 - Bhopal",
      "Dec 17, 2026 - Bareilly",
      "Dec 18, 2026 - Rampur",
      "Dec 19, 2026 - Haldwani",
      "Dec 20, 2026 - Dehradun",
      "Dec 25, 2026 - Guwahati",
      "Dec 26, 2026 - Mumbai",
      "Dec 27, 2026 - Amravati",
      "Dec 28, 2026 - Akola",
      "Dec 31, 2026 - Durg",
      "Jan 1, 2027 - Raipur",
      "Jan 2, 2027 - Bilaspur",
      "Jan 3, 2027 - Sanghli",
      "Jan 8, 2027 - Surat",
      "Jan 9, 2027 - Vadodara",
      "Jan 10, 2027 - Ahmedabad",
      "Jan 11, 2027 - Rajkot",
      "Jan 15, 2027 - Bhubaneswar",
      "Jan 16, 2027 - Patna",
      "Jan 17, 2027 - Kolkata",
      "Jan 22, 2027 - Bengaluru",
      "Jan 23, 2027 - Bengaluru",
      "Jan 24, 2027 - Bengaluru",
      "Jan 28, 2027 - Agra",
      "Jan 29, 2027 - Kanpur",
      "Jan 30, 2027 - Lucknow",
      "Jan 31, 2027 - Varanasi",
      "Feb 4, 2027 - Bikaner",
      "Feb 5, 2027 - Jodhpur",
      "Feb 6, 2027 - Udaipur",
      "Feb 7, 2027 - Jaipur",
      "Feb 8, 2027 - Alwar",
      "Feb 12, 2027 - Nashik",
      "Feb 13, 2027 - Aurangabad",
      "Feb 14, 2027 - Mumbai",
      "Feb 19, 2027 - Goa",
      "Feb 20, 2027 - Mangalore",
      "Feb 21, 2027 - Bangalore",
      "Feb 26, 2027 - Kullu",
      "Feb 27, 2027 - Delhi",
      "Feb 28, 2027 - Chandigarh",
      "Mar 5, 2027 - Surat",
      "Mar 6, 2027 - Vadodara",
      "Mar 7, 2027 - Ahmedabad",
      "Mar 12, 2027 - Devgarh",
      "Mar 13, 2027 - Ranchi",
      "Mar 14, 2027 - Jamshedpur",
      "Mar 19, 2027 - Chennai",
      "Mar 20, 2027 - Kolkata",
      "Mar 21, 2027 - Asansol",
      "Mar 26, 2027 - Bangalore",
      "Mar 27, 2027 - Mumbai",
      "Mar 28, 2027 - Pune"
    ],
    instagram: "https://www.instagram.com/shudhdesicomic/"
  },
  {
    id: "Ruchika Lohiya - Chikka Deck (1)_compressed.pdf",
    name: "Ruchika Lohiya (Chikka)",
    image: "ruchika-lohiya.jpg",
    description: "Hilarious and witty comic taking the internet by storm.",
    shows: [
      "Oct 24, 2026 - Kanpur",
      "Oct 25, 2026 - Lucknow",
      "Oct 31, 2026 - Indore",
      "Nov 1, 2026 - Bhopal",
      "Nov 21, 2026 - Chandigarh",
      "Nov 22, 2026 - Ludhiana",
      "Nov 27, 2026 - Vadodara",
      "Nov 28, 2026 - Ahmedabad",
      "Nov 29, 2026 - Surat",
      "Dec 5, 2026 - Hyderabad",
      "Dec 6, 2026 - Bangalore",
      "Dec 19, 2026 - Mumbai",
      "Dec 20, 2026 - Pune",
      "Dec 27, 2026 - Jaipur",
      "Jan 8, 2027 - Dehradun",
      "Jan 9, 2027 - Delhi",
      "Jan 15, 2027 - Kolkata",
      "Jan 16, 2027 - Guwahati",
      "Jan 17, 2027 - Siliguri"
    ],
    instagram: "https://www.instagram.com/__chikka/"
  },
  {
    id: "_Akanksha Grover Sponsership Deck_talkatora.pdf_compressed.pdf",
    name: "Akanksha Grover",
    image: "akanksha-grover.jpg",
    description: "Engaging and dynamic performer.",
    shows: [
      "Nov 20, 2026 - Kolkata",
      "Jan 20, 2027 - Delhi",
      "Feb 27, 2027 - Mumbai"

    ],
    instagram: "https://www.instagram.com/akankssha.groverr/"
  },
  {
    id: "Karma Live  October 2026_compressed.pdf",
    name: "Karma",
    image: "karma.jpg",
    description: "Dynamic rapper and hip-hop artist with hard-hitting lyrics.",
    shows: [
      "Oct 11, 2026 - New Delhi"
    ],
    instagram: "https://www.instagram.com/karmathelekhak/?hl=en"
  },
  {
    id: "Bharat Chauhan  (1)_compressed.pdf",
    name: "Bharat Chauhan",
    image: "bharat-chauhan.png",
    description: "Soulful voice exploring depths of human emotions through music.",
    shows: ["To Be Announced"],
    instagram: "https://www.instagram.com/bharatchauhan_/"
  },
  {
    id: "Hargun Kaur _compressed.pdf",
    name: "Hargun Kaur",
    image: "hargun-kaur.jpg",
    description: "Versatile singer and performer known for her captivating voice.",
    shows: ["Oct 4, 2026 - CP 67 Mohali"],
    instagram: "https://www.instagram.com/iamhargunkaur/?hl=en"
  },
  {
    id: "Vikas Kush Sharma _compressed.pdf",
    name: "Vikas Kush Sharma",
    image: "vikas-kush-sharma.png",
    description: "Standup comedian known for his hilarious and engaging performances.",
    shows: ["To Be Announced"],
    instagram: "https://www.instagram.com/vikaskushsharma/?hl=en"
  },
  {
    id: "Splash n Play 2027.pdf",
    name: "Splash n Play",
    image: "splash-n-play.png",
    description: "Splash N Play — A family-friendly kids entertainment experience featuring water slides, splash pools, foam parties, adventure activities, games, mascots and interactive experiences.",
    shows: ["To Be Announced"],
    instagram: "https://www.instagram.com/splash.n.play/"
  }
];

// Reorder so Bassi, Harsh Gujral, Ravi Gupta are top 3 (exact order as showcase repo)
const topArtistsNames = ["Anubhav Singh Bassi", "Harsh Gujral", "Ravi Gupta"];
const orderedArtists = [
  ...rawArtistsData.filter(a => a.name === "Anubhav Singh Bassi"),
  ...rawArtistsData.filter(a => a.name === "Harsh Gujral"),
  ...rawArtistsData.filter(a => a.name === "Ravi Gupta"),
  ...rawArtistsData.filter(a => !topArtistsNames.includes(a.name))
];

function groupShowsByMonth(shows) {
  const grouped = {};
  const tba = [];

  shows.forEach(show => {
    if (show === "To Be Announced" || show.toLowerCase().includes("tba")) {
      tba.push({ original: show });
      return;
    }

    const splitIndex = show.indexOf('-');
    if (splitIndex !== -1) {
      const datePart = show.substring(0, splitIndex).trim();
      const cityPart = show.substring(splitIndex + 1).trim();

      const dateWords = datePart.replace(',', '').split(' ');
      if (dateWords.length >= 3) {
        const monthYear = `${dateWords[0]} ${dateWords[2]}`;
        if (!grouped[monthYear]) {
          grouped[monthYear] = [];
        }
        grouped[monthYear].push({ date: datePart, city: cityPart, original: show });
      } else {
        tba.push({ original: show });
      }
    } else {
      tba.push({ original: show });
    }
  });

  return { grouped, tba };
}

export default function UpcomingTours() {
  const openPdf = (filename) => {
    window.open(`/pdfs/${encodeURIComponent(filename)}`, '_blank');
  };

  return (
    <section id="tours" className="tours section-pad">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Key <span>Upcoming Tours</span></h2>
          <div className="accent-line" />
          <p>Artist sponsorship decks & show schedules</p>
        </motion.div>

        <div className="tours__grid">
          {orderedArtists.map((artist, i) => {
            const fallbackAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(artist.name)}&background=e84118&color=fff&size=200`;
            const { grouped, tba } = groupShowsByMonth(artist.shows);

            return (
              <motion.div
                key={artist.name}
                className="tour-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              >
                {/* Header */}
                <div className="tour-card__header">
                  <div className="tour-card__img-wrap">
                    <img
                      src={`/images/${artist.image}`}
                      alt={artist.name}
                      onError={(e) => {
                        if (e.target.src !== fallbackAvatar) {
                          e.target.src = fallbackAvatar;
                        }
                      }}
                    />
                  </div>
                  <div className="tour-card__meta">
                    <h3>{artist.name}</h3>
                    <p className="tour-card__desc">{artist.description}</p>
                    <div className="tour-card__actions">
                      {artist.instagram && (
                        <a
                          href={artist.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-ghost"
                          style={{ fontSize: '.82rem' }}
                        >
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                          Instagram
                        </a>
                      )}
                      {artist.pdfs ? (
                        artist.pdfs.map((pdf, idx) => (
                          <button
                            key={idx}
                            className="btn-ghost"
                            onClick={() => openPdf(pdf.file)}
                            style={{ fontSize: '.82rem' }}
                          >
                            <FileText size={15} /> {pdf.name}
                          </button>
                        ))
                      ) : (
                        <button
                          className="btn-ghost"
                          onClick={() => openPdf(artist.id)}
                          style={{ fontSize: '.82rem' }}
                        >
                          <FileText size={15} /> Deck
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Sponsorship ONLY if defined for this artist */}
                {artist.sponsorship && (
                  <div className="tour-card__sponsorship">
                    <div className="sponsor-row">
                      <span className="sponsor-label">Title Sponsor:</span>
                      {artist.sponsorship.titleSponsor?.status === 'locked' && (
                        <span className="sponsor-badge badge-locked">
                          <Lock size={12} /> LOCKED
                        </span>
                      )}
                      {artist.sponsorship.titleSponsor?.status === 'sponsored' && (
                        <span className="sponsor-badge badge-sponsored">
                          <img
                            src={artist.sponsorship.titleSponsor.logo}
                            alt={artist.sponsorship.titleSponsor.sponsorName}
                            style={{ height: '16px' }}
                          />
                        </span>
                      )}
                      {artist.sponsorship.titleSponsor?.status === 'available' && (
                        <a
                          href="mailto:brands@orioleentertainment.com"
                          className="sponsor-badge badge-available"
                        >
                          <span className="pulse-dot" /> AVAILABLE
                        </a>
                      )}
                    </div>
                    <div className="sponsor-row">
                      <span className="sponsor-label">Co-Powered By:</span>
                      {artist.sponsorship.coPoweredBy?.status === 'available' && (
                        <a
                          href="mailto:brands@orioleentertainment.com"
                          className="sponsor-badge badge-available"
                        >
                          <span className="pulse-dot" /> AVAILABLE
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {/* Upcoming Shows */}
                <div className="tour-card__shows">
                  <h4><Calendar size={16} /> Upcoming Shows</h4>
                  <div className="shows-list">
                    {Object.entries(grouped).map(([monthYear, showsList]) => (
                      <div key={monthYear} className="shows-month">
                        <p className="shows-month-label">{monthYear}</p>
                        <table className="shows-table">
                          <tbody>
                            {showsList.map((show, idx) => (
                              <tr key={idx}>
                                <td>{show.date}</td>
                                <td>{show.city}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ))}
                    {tba.length > 0 && (
                      <div className="shows-month tba-month">
                        <p className="shows-month-label">To Be Announced</p>
                        <table className="shows-table">
                          <tbody>
                            {tba.map((show, idx) => (
                              <tr key={idx}>
                                <td colSpan="2">{show.original}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

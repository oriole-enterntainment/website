import { motion } from 'framer-motion';
import { Instagram, ExternalLink } from 'lucide-react';
import './ArtistsPage.css';

const artists = [
  { name: "Anubhav Singh Bassi", image: "/images/bassi.jpg", fallback: "/portfolio/1.png", link: 'https://www.instagram.com/be_a_bassi/' },
  { name: "Harsh Gujral", image: "/images/harsh-gujral.jpg", fallback: "/portfolio/2.png", link: 'https://www.instagram.com/realharshgujral/' },
  { name: "Ravi Gupta", image: "/images/ravi-gupta.jpg", fallback: "/portfolio/27.JPG", link: 'https://www.instagram.com/shudhdesicomic/' },
  { name: "Kanan Gill", image: "/images/kanan-gill.jpg", fallback: "/portfolio/4.png", link: 'https://www.instagram.com/kanangill/' },
  { name: "Osho Jain", image: "/images/osho-jain.jpg", fallback: "/portfolio/19.jpg", link: 'https://www.instagram.com/oshojain_/' },
  { name: "Pritish Narula", image: "/portfolio/34.png", fallback: "/portfolio/34.png", link: 'https://www.instagram.com/pritishnarula/' },
  { name: "Rakesh Addlakha", image: "/portfolio/32.png", fallback: "/portfolio/32.png", link: 'https://www.instagram.com/rakeshaddlakha/' },
  { name: "Onkar Yadav", image: "/portfolio/21.JPG", fallback: "/portfolio/21.JPG", link: 'https://www.instagram.com/onkaryadav/' },
  { name: "Pratyush Chaubey", image: "/portfolio/22.JPG", fallback: "/portfolio/22.JPG", link: 'https://www.instagram.com/chaubey.pratyush/' },
  { name: "Kaustub Agarwal", image: "/portfolio/31.png", fallback: "/portfolio/31.png", link: 'https://www.instagram.com/hilarious_big/' },
  { name: "Rahul Dua", image: "/portfolio/5.png", fallback: "/portfolio/5.png", link: 'https://www.instagram.com/therahuldua/' },
  { name: "Abhishek Upamanyu", image: "/portfolio/4.png", fallback: "/portfolio/4.png", link: 'https://www.instagram.com/aupmanyu/' },
  { name: "Gaurav Gupta", image: "/portfolio/7.png", fallback: "/portfolio/7.png", link: 'https://www.instagram.com/gaurav_comic/' },
  { name: "Appurv Gupta (Guptaji)", image: "/portfolio/8.JPG", fallback: "/portfolio/8.JPG", link: 'https://www.instagram.com/appurv20/' },
  { name: "Nishant Tanwar", image: "/portfolio/9.png", fallback: "/portfolio/9.png", link: 'https://www.instagram.com/nishanttanwar/' },
  { name: "Aakash Gupta", image: "/portfolio/10.png", fallback: "/portfolio/10.png", link: 'https://www.instagram.com/theskygupta/' },
  { name: "Rajat Chauhan", image: "/portfolio/11.png", fallback: "/portfolio/11.png", link: 'https://www.instagram.com/officialrajatchauhan/' },
  { name: "Atul Khatri", image: "/portfolio/12.png", fallback: "/portfolio/12.png", link: 'https://www.instagram.com/one_by_two/' },
  { name: "Vijay Yadav", image: "/portfolio/13.png", fallback: "/portfolio/13.png", link: 'https://www.instagram.com/aslivijayyadav/' },
  { name: "Abish Mathew", image: "/portfolio/14.png", fallback: "/portfolio/14.png", link: 'https://www.instagram.com/abishmathew/' },
  { name: "Prashasti Singh", image: "/portfolio/15.png", fallback: "/portfolio/15.png", link: 'https://www.instagram.com/prashastisingh/' },
  { name: "Zakir Khan", image: "/portfolio/3.png", fallback: "/portfolio/3.png", link: 'https://www.instagram.com/zakirkhan_208/' },
  { name: "Aaditya Kulshreshth (Kullu)", image: "/portfolio/19.jpg", fallback: "/portfolio/19.jpg", link: 'https://www.instagram.com/kullubaaazi/' },
  { name: "Rupali Tyagi", image: "/portfolio/20.jpg", fallback: "/portfolio/20.jpg", link: 'https://www.instagram.com/rustic_rupali/' },
  { name: "Daahab", image: "/portfolio/24.JPG", fallback: "/portfolio/24.JPG", link: 'https://www.instagram.com/daahab.chishti/' },
  { name: "Raghav Mandava", image: "/portfolio/25.JPG", fallback: "/portfolio/25.JPG", link: 'https://www.instagram.com/raghavmandava/' },
  { name: "Aashish Solanki", image: "/portfolio/26.JPG", fallback: "/portfolio/26.JPG", link: 'https://www.instagram.com/ashishsolanki_1/' },
  { name: "Shreya Priyam", image: "/portfolio/28.png", fallback: "/portfolio/28.png", link: 'https://www.instagram.com/shreya.priyam/' },
  { name: "Madhur Virli", image: "/portfolio/29.png", fallback: "/portfolio/29.png", link: 'https://www.instagram.com/madhurvirli/' },
  { name: "Neeti Palta", image: "/portfolio/30.png", fallback: "/portfolio/30.png", link: 'https://www.instagram.com/neetipalta/' },
  { name: "Rajat Sood", image: "/portfolio/35.png", fallback: "/portfolio/35.png", link: 'https://www.instagram.com/rajatsoodpomedy/' },
  { name: "Anshu Mor", image: "/portfolio/36.png", fallback: "/portfolio/36.png", link: 'https://www.instagram.com/anshu_mor/' },
  { name: "Gurleen Pannu", image: "/portfolio/38.png", fallback: "/portfolio/38.png", link: 'https://www.instagram.com/gurleen_pannu/' },
  { name: "Amit Tandon", image: "/images/amit-tandon.png", fallback: "/portfolio/5.png", link: 'https://www.instagram.com/amitandon17/' },
  { name: "Avinash Gupta", image: "/images/avinash-gupta.jpg", fallback: "/portfolio/13.png", link: 'https://www.instagram.com/just.avinashgupta/' },
  { name: "Khan Saab", image: "/images/khan-saab.png", fallback: "/portfolio/3.png", link: 'https://www.instagram.com/realkhansaab/' },
  { name: "Lakhwinder Wadali", image: "/images/lakhwinder-wadali.jpg", fallback: "/portfolio/1.png", link: 'https://www.instagram.com/lakhwinderwadaliofficial/' },
  { name: "Rabbi Shergill", image: "/images/rabbi-shergill.jpg", fallback: "/portfolio/2.png", link: 'https://www.instagram.com/rabbishergill/' },
  { name: "Ruchika Lohiya", image: "/images/ruchika-lohiya.jpg", fallback: "/portfolio/20.jpg", link: 'https://www.instagram.com/__chikka/' }
];

export default function ArtistsPage() {
  return (
    <main className="artists-page" style={{ paddingTop: 'var(--nav-h)' }}>
      <div className="container section-pad">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>ARTISTS <span>WE ARE WORKING WITH</span></h2>
          <div className="accent-line" />
          <p>India's finest comedians, musicians, and live performers</p>
        </motion.div>

        <div className="artists-grid">
          {artists.map((artist, i) => (
            <motion.div
              key={artist.name}
              className="artist-card"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: (i % 8) * 0.04 }}
            >
              <div className="artist-card__img-container">
                <img
                  src={artist.image}
                  alt={artist.name}
                  loading="lazy"
                  onError={(e) => {
                    if (e.target.src !== artist.fallback) {
                      e.target.src = artist.fallback;
                    } else {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(artist.name)}&background=e84118&color=fff&size=300`;
                    }
                  }}
                />
                {artist.link && artist.link !== '#' && (
                  <a
                    href={artist.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="artist-card__ig-overlay"
                    title={`View ${artist.name} on Instagram`}
                  >
                    <Instagram size={24} />
                    <span>View Profile</span>
                  </a>
                )}
              </div>
              <div className="artist-card__details">
                <h3>{artist.name}</h3>
                {artist.link && artist.link !== '#' && (
                  <a
                    href={artist.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="artist-card__ig-btn"
                  >
                    <Instagram size={14} /> Instagram <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

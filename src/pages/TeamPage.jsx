import { motion } from 'framer-motion';
import { Instagram, ExternalLink } from 'lucide-react';
import './TeamPage.css';

const leadership = [
  {
    name: 'Ankur Bhargava',
    role: 'Founder & Director',
    photo: '/team/ankur-bhargava.jpg',
    bio: 'Visionary founder leading Oriole Entertainment into India\'s premier live comedy & event production house since 2017.',
    instagram: 'https://www.instagram.com/bhargava_ankur/'
  },
  {
    name: 'Nupur Ankur Bhargava',
    role: 'Joint Director',
    photo: '/team/nupur-bhargava.png',
    bio: 'Steering strategic growth, artistic partnerships, and nationwide live show operations.',
    instagram: 'https://www.instagram.com/nupur.bhargava_/'
  },
];

const teamMembers = [
  { name: 'Naresh Kumar',      role: 'Manager',                          photo: '/team/naresh_new.jpg' },
  { name: 'Ajay Kumar',        role: 'Manager – Ground Operations',       photo: '/team/Ajay Kumar.jpg' },
  { name: 'Nitin Singh',       role: 'Sr. Artist Manager',               photo: '/team/nitinsingh22.JPG' },
  { name: 'Saksham Mishra',    role: 'Sr. A&R | Artist Manager',         photo: '/team/saksham-2.jpeg' },
  { name: 'Yash Tiwari',       role: 'Sr. Artist Manager',               photo: '/team/Yash Tiwari.jpg' },
  { name: 'Adnan Khan',        role: 'Sr. Event Programmer',             photo: '/team/Adnan Khan.jpg' },
  { name: 'Sarthak Garg',      role: 'Associate, Marketing & Partnership', photo: '/team/Sarthak Garg.jpg' },
  { name: 'Aman Swaroop',      role: 'Artist Manager',                   photo: '/team/amanswaroop.jpeg' },
  { name: 'Manas Dubey',       role: 'Artist Manager',                   photo: '/team/Manas Dubey.jpg' },
  { name: 'Anushka',           role: 'Graphic Designer',                 photo: '/team/anushkaa.jpeg' },
  { name: 'Sahil',             role: 'Brands & Partnerships',            photo: '/team/sahil.jpeg' },
  { name: 'Tushant',           role: 'Artist Manager',                   photo: '/team/tushant.jpeg' },
  { name: 'Animesh Singh',     role: 'Artist Manager',                   photo: '/team/animeshh.jpeg' },
  { name: 'Yamini Khanna',     role: 'Head of Creatives',                photo: '/team/yamini-khanna.png' },
  { name: 'Tushar Sharma',     role: 'Artist Manager',                   photo: '/team/tushar-sharma.jpg' },
  { name: 'Sumit Jha',         role: 'Accountant',                       photo: '/team/sumit.jpeg' },
  { name: 'Divya',             role: 'Marketing Associate',              photo: '/team/divya.jpeg' },
  { name: 'Shushant Yadav',    role: 'Brands & Partnerships',            photo: '/team/sushant.jpg' },
];

export default function TeamPage() {
  return (
    <main className="team-page" style={{ paddingTop: 'var(--nav-h)' }}>
      <div className="container section-pad">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>OUR <span>LEADERSHIP & TEAM</span></h2>
          <div className="accent-line" />
          <p>The visionaries and passionate team behind every live experience</p>
        </motion.div>

        {/* Leadership Section (Director & Joint Director) */}
        <div className="team-leadership">
          <h3 className="team-subheading">Leadership</h3>
          <div className="leadership-grid">
            {leadership.map((director, i) => (
              <motion.div
                key={director.name}
                className="director-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="director-card__img-container">
                  <img
                    src={director.photo}
                    alt={director.name}
                    loading="lazy"
                    onError={e => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(director.name)}&background=e84118&color=fff&size=400`;
                    }}
                  />
                  {director.instagram && (
                    <a
                      href={director.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="director-card__ig-overlay"
                      title={`Follow ${director.name} on Instagram`}
                    >
                      <Instagram size={28} />
                      <span>View Profile</span>
                    </a>
                  )}
                </div>
                <div className="director-card__info">
                  <div className="director-card__top-row">
                    <span className="director-card__badge">{director.role}</span>
                    {director.instagram && (
                      <a
                        href={director.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="director-card__ig-btn"
                        title="Instagram Profile"
                      >
                        <Instagram size={15} /> Instagram <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                  <h3>{director.name}</h3>
                  <p>{director.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Members Section */}
        <div className="team-members">
          <h3 className="team-subheading">Team Members</h3>
          <div className="team-grid">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                className="team-card"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: (i % 6) * 0.05 }}
              >
                <div className="team-card__img">
                  <img
                    src={member.photo}
                    alt={member.name}
                    loading="lazy"
                    onError={e => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=e84118&color=fff&size=300`;
                    }}
                  />
                </div>
                <div className="team-card__info">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

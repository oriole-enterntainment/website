/**
 * Showcase / Work grid data
 * ──────────────────────────────────────────────────────────
 * To add a new item: copy one object and fill in your values.
 * thumb : path relative to /public, e.g. '/portfolio/show.jpg'
 * embed : YouTube or Vimeo embed URL (null = link-only tile)
 * link  : fallback external URL if embed is null
 * tags  : array of strings, used for filtering
 */
export const work = [
  {
    id: 'big-lineup-2024',
    title: "The Big Lineup '24",
    subtitle: 'Multi-act live spectacle · KD Jadhav Stadium, Delhi',
    thumb: '/slide/biglineup1.jpg',
    embed: null, // TODO: add YouTube embed URL e.g. 'https://www.youtube.com/embed/XXXXXXX'
    link: 'https://in.bookmyshow.com/events/oriole-entertainment-live/ET00316295',
    tags: ['Events', 'Live Shows'],
  },
  {
    id: 'anubhav-bassi-tour',
    title: 'Anubhav Singh Bassi — Tour',
    subtitle: 'Stand-up comedy · Pan India',
    thumb: '/images/bassi.jpg',
    embed: null, // TODO: add YouTube embed URL
    link: 'https://in.bookmyshow.com/events/oriole-entertainment-live/ET00316295',
    tags: ['Artists', 'Live Shows'],
  },
  {
    id: 'harsh-gujral-tour',
    title: 'Harsh Gujral — Tour',
    subtitle: 'Stand-up comedy · Pan India',
    thumb: '/images/harsh-gujral.jpg',
    embed: null, // TODO: add YouTube embed URL
    link: 'https://in.bookmyshow.com/events/oriole-entertainment-live/ET00316295',
    tags: ['Artists', 'Live Shows'],
  },
  {
    id: 'kanan-gill',
    title: 'Kanan Gill — Live',
    subtitle: 'Stand-up comedy',
    thumb: '/images/kanan-gill.jpg',
    embed: null,
    link: '#',
    tags: ['Artists'],
  },
  {
    id: 'talkatora',
    title: 'Talkatora Stadium Shows',
    subtitle: 'Venue deck · Delhi',
    thumb: '/slide/leading-producers.jpg',
    embed: null,
    link: '/pdfs/Talkatora%20Shows%20Deck_compressed.pdf',
    tags: ['Events'],
  },
  {
    id: 'brand-partnership',
    title: "Brand Partnership — FY 26-27",
    subtitle: 'Sponsorship decks · All cities',
    thumb: '/slide/slide-1.jpg',
    embed: null,
    link: "/pdfs/FY%20'26-27%20Tours_compressed.pdf",
    tags: ['Brand Partnerships'],
  },
];

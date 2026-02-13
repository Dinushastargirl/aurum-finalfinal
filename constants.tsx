
import { TeamMember, GalleryImage, BlogPost } from './types';

export const COLORS = {
  primary: '#1E7A8A',
  dark: '#2E2E2E',
  gold: '#D4AF37',
  white: '#FFFFFF',
};

export const LOGO_URL = 'https://i.ibb.co/7Tz8WwT/aurum-logo.png';
export const HERO_BG = 'https://i.ibb.co/SwZsqDFb/hero-bg.jpg';
export const FRESHA_LINK = 'https://www.fresha.com/a/aurum-studio-colombo-rajagiriya-121-1-parliament-road-m9jym85t';
export const GOOGLE_REVIEWS_LINK = 'https://www.google.com/search?q=aurum+studio+rajagiriya+reviews';

export const CONTACT_INFO = {
  address: '121, 1 Parliament Rd, Rajagiriya',
  phone: '+94 77 751 2222',
  email: 'aurumstudioslk@gmail.com'
};

export const REVIEWS = [
  {
    name: "Sarah Perera",
    rating: 5,
    text: "The best hair color experience in Rajagiriya. The team is professional and the atmosphere is so relaxing!",
    date: "2 weeks ago"
  },
  {
    name: "Dinuka Silva",
    rating: 5,
    text: "Excellent service. Nilusha really knows what she's doing. Highly recommended for bridal styling.",
    date: "1 month ago"
  },
  {
    name: "Amanda Wickramasinghe",
    rating: 5,
    text: "Finally a salon that listens! My skin feels amazing after the treatment. Great value for high quality.",
    date: "3 days ago"
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'Nilusha',
    role: 'Hair Stylist',
    image: 'https://i.ibb.co/Md8p4kY/nilusha.jpg',
    bio: 'With over 15 years in luxury hair design, Nilusha is an expert in hair coloring and professional cutting.'
  },
  {
    name: 'Rohan',
    role: 'Beautician',
    image: 'https://i.ibb.co/0pRZvdWN/rohan.jpg',
    bio: 'A skin care expert, Rohan uses modern methods for great results and healthy skin.'
  }
];

export const GALLERY: GalleryImage[] = [
  { url: 'https://i.ibb.co/cXSM2FVb/g1.jpg', alt: 'Hair styling result', category: 'Hair' },
  { url: 'https://i.ibb.co/2002jqYm/g2.jpg', alt: 'Skin treatment', category: 'Skin' },
  { url: 'https://i.ibb.co/svH3bj1D/g3.jpg', alt: 'Bridal makeup', category: 'Makeup' },
  { url: 'https://i.ibb.co/C3CY6Mys/g4.jpg', alt: 'Hair coloring', category: 'Hair' },
  { url: 'https://i.ibb.co/WNc5nLFX/g5.jpg', alt: 'Aurum Studio inside', category: 'Studio' },
  { url: 'https://i.ibb.co/hRD5M5NN/g6.jpg', alt: 'Grooming services', category: 'Grooming' },
  { url: 'https://i.ibb.co/D2c1QYF/g7.jpg', alt: 'Spa area', category: 'Studio' },
  { url: 'https://i.ibb.co/s9h0R6ws/g8.jpg', alt: 'Nail art', category: 'Nails' },
  { url: 'https://i.ibb.co/3m5Hh6NZ/g9.jpg', alt: 'Beauty products', category: 'Retail' },
  { url: 'https://i.ibb.co/4cbc7Zp/g10.jpg', alt: 'Studio setup', category: 'Studio' },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Tips for Glowing Skin',
    excerpt: 'Find out why gold treatments are great for your skin and how to keep it glowing every day.',
    image: 'https://i.ibb.co/cXSM2FVb/g1.jpg',
    date: 'Oct 24, 2023',
    category: 'Trends'
  },
  {
    id: '2',
    title: 'Fixing Damaged Hair',
    excerpt: 'Easy tips on how to fix your hair after a long time in the sun or using too much heat.',
    image: 'https://i.ibb.co/2002jqYm/g2.jpg',
    date: 'Nov 12, 2023',
    category: 'Care'
  },
  {
    id: '3',
    title: 'Wedding Looks for 2024',
    excerpt: 'The best wedding hair and makeup styles for the coming year.',
    image: 'https://i.ibb.co/svH3bj1D/g3.jpg',
    date: 'Dec 05, 2023',
    category: 'Bridal'
  }
];

export const ABOUT_IMAGES = [
  'https://i.ibb.co/0pPpyNCB/about1.jpg',
  'https://i.ibb.co/nqnq3RFT/about2.jpg'
];

export interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
  image?: string
  alt?: string
  imageFit?: 'cover' | 'contain'
  imagePosition?: string
  imagePadding?: string
  isUpcoming: boolean
  category: 'talks' | 'workshops' | 'networking'
  speaker?: string
  speakerTitle?: string
}

export const events: Event[] = [
  // Talks (Founders)
  {
    id: '1',
    title: 'Building with Elite Athletes',
    date: '2024-12-15',
    time: '18:00',
    location: 'Bristol Business School',
    description: 'Ash Phillips on sports entrepreneurship: real stories, practical lessons, and candid Q&A.',
    image: '/events/ash.webp',
    alt: 'Ash Phillips sports entrepreneurship talk',
    imageFit: 'cover',
    imagePosition: 'top center',
    isUpcoming: true,
    category: 'talks',
    speaker: 'Ash Phillips',
    speakerTitle: 'Founder & Sports Tech Entrepreneur',
  },
  {
    id: '2',
    title: 'From Engineering to £5M+ Revenue',
    date: '2024-12-20',
    time: '19:00',
    location: 'Innovation Lab',
    description: 'Jan & Ali Yousef on scaling from code to company—tactics, growth, and lessons learned.',
    image: '/events/engineering.jpg',
    alt: 'Jan and Ali Yousef engineering to founders talk',
    isUpcoming: true,
    category: 'talks',
    speaker: 'Jan & Ali Yousef',
    speakerTitle: 'Co-founders & Former Engineers',
  },
  {
    id: '3',
    title: 'Consulting Mindset for Startups',
    date: '2024-12-18',
    time: '17:30',
    location: 'Bristol Business School',
    description: 'Apply consulting frameworks to real startup problems. Hands-on and highly actionable.',
    image: '/events/mckinsey.jpg',
    alt: 'McKinsey-style consulting workshop for startups',
    isUpcoming: true,
    category: 'talks',
    speaker: 'Mark Shields',
    speakerTitle: 'Ex-McKinsey, Tech Consultancy Leader',
  },
  {
    id: '4',
    title: 'Zero to One as a Founder',
    date: '2024-12-22',
    time: '18:30',
    location: 'Lecture Theatre 1',
    description: 'Paul Dodd on going from idea to launch—hard lessons and practical frameworks.',
    image: '/events/huboo_fulfilment_logo.jpg',
    alt: 'Paul Dodd zero to one founder talk',
    imageFit: 'contain',
    imagePosition: 'center',
    imagePadding: 'p-6',
    isUpcoming: true,
    category: 'talks',
    speaker: 'Paul Dodd',
    speakerTitle: 'Serial Entrepreneur & Founder',
  },

  // Workshops
  {
    id: '5',
    title: 'Pitch Like a Pro',
    date: '2024-12-12',
    time: '14:00',
    location: 'Innovation Lab',
    description: 'Hands-on pitch workshop with live teardowns and actionable feedback.',
    image: '/events/mckinsey.jpg',
    alt: 'Pitch like a pro workshop',
    isUpcoming: true,
    category: 'workshops',
    speaker: 'Mark Shields',
    speakerTitle: 'Ex-McKinsey, Pitch Expert',
  },
  {
    id: '6',
    title: 'How to Start a Business at Uni',
    date: '2024-12-14',
    time: '15:00',
    location: 'Bristol Business School',
    description: 'Idea validation, MVPs, and co-founders—how to start while at university.',
    image: '/events/how-to-start-a-business.jpg',
    alt: 'How to start a business at university workshop',
    isUpcoming: true,
    category: 'workshops',
  },
  {
    id: '7',
    title: 'How to Pitch to Investors',
    date: '2024-12-16',
    time: '16:00',
    location: 'Innovation Lab',
    description: 'What angels and VCs expect—craft a compelling investor pitch and avoid pitfalls.',
    image: '/events/pitch-to-investors.jpg',
    alt: 'How to pitch to investors workshop',
    imageFit: 'cover',
    imagePosition: 'center 20%',
    isUpcoming: true,
    category: 'workshops',
  },
  {
    id: '8',
    title: 'Run a Top-Tier Student Society',
    date: '2024-12-19',
    time: '17:00',
    location: 'Bristol SU',
    description: 'Operations, partnerships, and growth strategies for standout student societies.',
    image: '/events/student-society-start.png',
    alt: 'Run a top-tier student society workshop',
    isUpcoming: true,
    category: 'workshops',
  },
  {
    id: '9',
    title: 'Don\'t Get Bullied by Landlords',
    date: '2024-12-21',
    time: '13:00',
    location: 'Bristol SU',
    description: 'Know your housing rights and protect yourself from unfair landlord practices.',
    image: '/events/landlord.jpg',
    alt: 'Student housing rights and landlord workshop',
    isUpcoming: true,
    category: 'workshops',
  },

  // Networking
  {
    id: '10',
    title: 'Founder & Builder Mixer',
    date: '2024-12-25',
    time: '19:00',
    location: 'The Berkeley Square',
    description: 'Relaxed networking for founders and builders—meet peers and make connections.',
    image: '/events/networking.jpg',
    alt: 'Founder and builder networking mixer',
    isUpcoming: true,
    category: 'networking',
  },
  {
    id: '11',
    title: 'Tech & Product Night',
    date: '2024-12-28',
    time: '18:30',
    location: 'Innovation Hub',
    description: 'Meet engineers, PMs, and designers from Bristol\'s tech scene—great for builders.',
    image: '/events/networking.jpg',
    alt: 'Tech and product community night networking',
    isUpcoming: true,
    category: 'networking',
  },
]
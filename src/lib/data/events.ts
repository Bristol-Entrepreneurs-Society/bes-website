export interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
  image?: string
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
    description: 'Join Ash Phillips, founder working with professional footballers, for an inspiring talk about building businesses in the sports industry. Includes Q&A and networking.',
    image: '/events/ash.jpg',
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
    description: 'Jan & Ali Yousef share their incredible journey from software engineers to successful founders. Learn about growth strategies, hiring, and the mistakes that taught them the most.',
    image: '/events/yousef.jpg',
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
    description: 'Mark Shields, ex-McKinsey consultant and tech consultancy leader in the South West, reveals how to apply consulting frameworks to startup challenges.',
    image: '/events/mark.jpg',
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
    description: 'Paul Dodd shares the hard lessons and practical frameworks from his founder journey. Essential insights for anyone considering the entrepreneurial path.',
    image: '/events/paul.jpg',
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
    description: 'Mark Shields leads a hands-on workshop with live pitch teardowns. Bring your slides and ideas for real-time feedback on pitch structure and delivery.',
    image: '/events/pitch-workshop.jpg',
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
    description: 'Learn the fundamentals of idea validation, building an MVP, and finding the right co-founders while still at university. Perfect for first-time entrepreneurs.',
    image: '/events/startup-workshop.jpg',
    isUpcoming: true,
    category: 'workshops',
  },
  {
    id: '7',
    title: 'How to Pitch to Investors',
    date: '2024-12-16',
    time: '16:00',
    location: 'Innovation Lab',
    description: 'Understand what angels and VCs really expect from student teams. Learn the key elements of a compelling investor pitch and common mistakes to avoid.',
    image: '/events/investor-pitch.jpg',
    isUpcoming: true,
    category: 'workshops',
  },
  {
    id: '8',
    title: 'Run a Top-Tier Student Society',
    date: '2024-12-19',
    time: '17:00',
    location: 'Bristol SU',
    description: 'Master the operations, partnerships, and growth strategies that make student societies thrive. Learn from our committee\'s experience building BES.',
    image: '/events/society-workshop.jpg',
    isUpcoming: true,
    category: 'workshops',
  },
  {
    id: '9',
    title: 'Don\'t Get Bullied by Landlords',
    date: '2024-12-21',
    time: '13:00',
    location: 'Bristol SU',
    description: 'Practical housing and contract tips every student needs to know. Protect yourself from unfair practices and understand your rights as a tenant.',
    image: '/events/housing-workshop.jpg',
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
    description: 'Connect with fellow founders, builders, and entrepreneurs in a relaxed setting. Perfect for making meaningful connections and sharing experiences.',
    image: '/events/founder-mixer.jpg',
    isUpcoming: true,
    category: 'networking',
  },
  {
    id: '11',
    title: 'Tech & Product Night',
    date: '2024-12-28',
    time: '18:30',
    location: 'Innovation Hub',
    description: 'Meet engineers, product managers, and designers from Bristol\'s thriving tech scene. Great for technical founders and those interested in product development.',
    image: '/events/tech-night.jpg',
    isUpcoming: true,
    category: 'networking',
  },
]
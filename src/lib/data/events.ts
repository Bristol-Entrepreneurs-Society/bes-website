export interface Event {
  id: string
  title: string
  date: string
  location: string
  description: string
  image?: string
  isUpcoming: boolean
  category: 'workshop' | 'networking' | 'speaker' | 'competition' | 'social'
}

export const events: Event[] = [
  {
    id: '1',
    title: 'Startup Pitch Competition 2024',
    date: '2024-12-15T18:00:00',
    location: 'Bristol Business School, Room 1.11',
    description: 'Join us for our annual startup pitch competition where student entrepreneurs showcase their innovative ideas to a panel of industry experts and investors.',
    isUpcoming: true,
    category: 'competition',
  },
  {
    id: '2',
    title: 'Networking with Tech Entrepreneurs',
    date: '2024-12-20T19:00:00',
    location: 'The Berkeley Square Pub',
    description: 'An evening of networking with successful tech entrepreneurs from Bristol\'s thriving startup ecosystem.',
    isUpcoming: true,
    category: 'networking',
  },
  {
    id: '3',
    title: 'Business Model Canvas Workshop',
    date: '2024-12-10T14:00:00',
    location: 'Bristol Business School, Room 2.15',
    description: 'Learn how to create and validate your business model using the Business Model Canvas framework.',
    isUpcoming: true,
    category: 'workshop',
  },
  {
    id: '4',
    title: 'Guest Speaker: Sarah Chen from TechStart',
    date: '2024-11-28T17:00:00',
    location: 'Bristol Business School, Lecture Theatre 1',
    description: 'Sarah Chen, founder of TechStart, shares her journey from university student to successful entrepreneur.',
    isUpcoming: false,
    category: 'speaker',
  },
  {
    id: '5',
    title: 'Social Mixer & Pizza Night',
    date: '2024-11-22T18:30:00',
    location: 'Bristol SU, Richmond Building',
    description: 'A relaxed evening to meet fellow society members over pizza and drinks.',
    isUpcoming: false,
    category: 'social',
  },
  {
    id: '6',
    title: 'Financial Planning for Startups',
    date: '2024-11-15T16:00:00',
    location: 'Bristol Business School, Room 1.20',
    description: 'Essential financial planning and budgeting skills for early-stage startups.',
    isUpcoming: false,
    category: 'workshop',
  },
  {
    id: '7',
    title: 'Innovation Hackathon',
    date: '2024-11-08T10:00:00',
    location: 'Bristol Business School, Innovation Lab',
    description: 'A 24-hour hackathon focused on solving real-world problems through innovative solutions.',
    isUpcoming: false,
    category: 'competition',
  },
  {
    id: '8',
    title: 'Alumni Networking Event',
    date: '2024-10-25T19:00:00',
    location: 'The Watershed',
    description: 'Connect with BES alumni who have gone on to successful careers in entrepreneurship.',
    isUpcoming: false,
    category: 'networking',
  },
  {
    id: '9',
    title: 'Marketing Strategy Workshop',
    date: '2024-10-18T15:00:00',
    location: 'Bristol Business School, Room 2.10',
    description: 'Learn effective marketing strategies for startups and small businesses.',
    isUpcoming: false,
    category: 'workshop',
  },
] 
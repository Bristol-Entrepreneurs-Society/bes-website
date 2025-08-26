export interface CommitteeMember {
  id: string
  name: string
  role: string
  image?: string
  linkedin?: string
  bio: string
  year: string
  course: string
}

export const committee: CommitteeMember[] = [
  {
    id: '1',
    name: 'Alex Thompson',
    role: 'President',
    image: '/committee/alex-thompson.jpg',
    linkedin: 'https://linkedin.com/in/alexthompson',
    bio: 'Final year Economics student passionate about fostering innovation and connecting students with entrepreneurial opportunities.',
    year: '4th Year',
    course: 'BSc Economics',
  },
  {
    id: '2',
    name: 'Maya Patel',
    role: 'Vice President',
    image: '/committee/maya-patel.jpg',
    linkedin: 'https://linkedin.com/in/mayapatel',
    bio: 'Computer Science student with a keen interest in tech startups and helping students develop their technical and business skills.',
    year: '3rd Year',
    course: 'BSc Computer Science',
  },
  {
    id: '3',
    name: 'James Wilson',
    role: 'Treasurer',
    image: '/committee/james-wilson.jpg',
    linkedin: 'https://linkedin.com/in/jameswilson',
    bio: 'Accounting and Finance student focused on ensuring the society\'s financial sustainability and growth.',
    year: '3rd Year',
    course: 'BSc Accounting and Finance',
  },
  {
    id: '4',
    name: 'Emma Davis',
    role: 'Events Coordinator',
    image: '/committee/emma-davis.jpg',
    linkedin: 'https://linkedin.com/in/emmadavis',
    bio: 'Marketing student who loves creating engaging events that bring together students, entrepreneurs, and industry professionals.',
    year: '2nd Year',
    course: 'BSc Marketing',
  },
  {
    id: '5',
    name: 'Omar Hassan',
    role: 'Marketing & Communications',
    image: '/committee/omar-hassan.jpg',
    linkedin: 'https://linkedin.com/in/omarhassan',
    bio: 'Business Management student passionate about building the BES brand and expanding our reach across the university.',
    year: '2nd Year',
    course: 'BSc Business Management',
  },
  {
    id: '6',
    name: 'Sophie Chen',
    role: 'Partnerships Manager',
    image: '/committee/sophie-chen.jpg',
    linkedin: 'https://linkedin.com/in/sophiechen',
    bio: 'International Business student focused on building strong relationships with sponsors, partners, and the local business community.',
    year: '3rd Year',
    course: 'BSc International Business',
  },
  {
    id: '7',
    name: 'Ryan O\'Connor',
    role: 'Technology Officer',
    image: '/committee/ryan-oconnor.jpg',
    linkedin: 'https://linkedin.com/in/ryanoconnor',
    bio: 'Computer Science student responsible for managing our digital platforms and ensuring smooth technical operations.',
    year: '2nd Year',
    course: 'BSc Computer Science',
  },
  {
    id: '8',
    name: 'Isabella Rodriguez',
    role: 'Social Media Manager',
    image: '/committee/isabella-rodriguez.jpg',
    linkedin: 'https://linkedin.com/in/isabellarodriguez',
    bio: 'Digital Marketing student who creates engaging content and manages our social media presence across all platforms.',
    year: '2nd Year',
    course: 'BSc Digital Marketing',
  },
  {
    id: '9',
    name: 'David Kim',
    role: 'General Secretary',
    image: '/committee/david-kim.jpg',
    linkedin: 'https://linkedin.com/in/davidkim',
    bio: 'Business student who ensures smooth communication between committee members and maintains our administrative processes.',
    year: '3rd Year',
    course: 'BSc Business',
  },
] 
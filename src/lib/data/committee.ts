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
    name: 'Scott Sampson',
    role: 'President',
    image: '/committee/scott-sampson.jpg',
    linkedin: 'https://linkedin.com/in/scottsampson',
    bio: 'Leading BES with a vision to create the premier entrepreneurship community at Bristol.',
    year: '3rd Year',
    course: 'BSc Business Management',
  },
  {
    id: '2',
    name: 'Reece Forbes',
    role: 'President',
    image: '/committee/reece-forbes.jpg',
    linkedin: 'https://linkedin.com/in/reeceforbes',
    bio: 'Co-leading BES with a focus on building meaningful connections and opportunities for student entrepreneurs.',
    year: '3rd Year',
    course: 'BSc Economics',
  },
  {
    id: '3',
    name: 'Neel Bhatia',
    role: 'Vice President',
    image: '/committee/neel-bhatia.jpg',
    linkedin: 'https://linkedin.com/in/neelbhatia',
    bio: 'Supporting the presidents in driving BES forward and creating impactful experiences for members.',
    year: '3rd Year',
    course: 'BSc Computer Science',
  },
  {
    id: '4',
    name: 'Kelly Wu',
    role: 'Treasurer',
    image: '/committee/kelly-wu.jpg',
    linkedin: 'https://linkedin.com/in/kellywu',
    bio: 'Managing BES finances and ensuring sustainable growth for our expanding community.',
    year: '2nd Year',
    course: 'BSc Accounting and Finance',
  },
  {
    id: '5',
    name: 'Igor Janiga',
    role: 'Secretary',
    image: '/committee/igor-janiga.jpg',
    linkedin: 'https://linkedin.com/in/igorjaniga',
    bio: 'Keeping BES organized and ensuring smooth operations across all our activities.',
    year: '2nd Year',
    course: 'BSc Business Management',
  },
  {
    id: '6',
    name: 'Jiayi Cheng',
    role: 'DEI Officer',
    image: '/committee/jiayi-cheng.jpg',
    linkedin: 'https://linkedin.com/in/jiayicheng',
    bio: 'Championing diversity, equity, and inclusion to make BES welcoming for all students.',
    year: '3rd Year',
    course: 'BSc Psychology',
  },
  {
    id: '7',
    name: 'Maya Hoch',
    role: 'Outreach',
    image: '/committee/maya-hoch.jpg',
    linkedin: 'https://linkedin.com/in/mayahoch',
    bio: 'Building connections with the wider Bristol entrepreneurship ecosystem and beyond.',
    year: '2nd Year',
    course: 'BSc International Relations',
  },
  {
    id: '8',
    name: 'Harri Smith',
    role: 'Head of Events',
    image: '/committee/harri-smith.jpg',
    linkedin: 'https://linkedin.com/in/harrismith',
    bio: 'Creating unforgettable events that inspire, educate, and connect our entrepreneurial community.',
    year: '2nd Year',
    course: 'BSc Event Management',
  },
  {
    id: '9',
    name: 'Eldylea Izzaiddean',
    role: 'Marketing Officer',
    image: '/committee/eldylea-izzaiddean.jpg',
    linkedin: 'https://linkedin.com/in/eldyleaizzaiddean',
    bio: 'Spreading the word about BES and building our brand across the university and beyond.',
    year: '2nd Year',
    course: 'BSc Marketing',
  },
] 
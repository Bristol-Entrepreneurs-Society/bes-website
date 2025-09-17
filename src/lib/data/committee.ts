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
    linkedin: 'https://www.linkedin.com/in/scott-sampson-a0665b20a/',
    bio: 'Co-leading BES with a vision to create the premier entrepreneurship community at Bristol.',
    year: '4th Year',
    course: 'Economics & Management (Study Abroad)',
  },
  {
    id: '2',
    name: 'Reece Forbes',
    role: 'President',
    image: '/committee/reece-forbes.jpg',
    linkedin: 'https://www.linkedin.com/in/reeceforbes/',
    bio: 'Co-leading BES with a focus on building meaningful connections and opportunities for student entrepreneurs.',
    year: '3rd Year',
    course: 'Economics',
  },
  {
    id: '3',
    name: 'Neel Bhatia',
    role: 'Vice President',
    image: '/committee/neel-bhatia.jpg',
    linkedin: 'https://www.linkedin.com/in/neel-bhatia-3bb00828a/',
    bio: 'Supporting the presidents in driving BES forward and creating impactful experiences for members.',
    year: '3rd Year',
    course: 'Economics & Management',
  },
  {
    id: '4',
    name: 'Kelly Wu',
    role: 'Treasurer',
    image: '/committee/kelly-wu.jpg',
    linkedin: 'https://www.linkedin.com/in/zhengyangwu/',
    bio: 'Managing BES finances and ensuring sustainable growth for our expanding community.',
    year: '2nd Year',
    course: 'Accounting & Finance',
  },
  {
    id: '5',
    name: 'Igor Janiga',
    role: 'Secretary',
    image: '/committee/igor-janiga.jpg',
    linkedin: 'https://www.linkedin.com/in/igorjaniga/',
    bio: 'Keeping BES organized and ensuring smooth operations across all our activities.',
    year: '4th Year',
    course: 'LLB Law & French',
  },
  {
    id: '6',
    name: 'Jiayi Cheng',
    role: 'DEI Officer',
    image: '/committee/jiayi-cheng.jpg',
    bio: 'Championing diversity, equity, and inclusion to make BES welcoming for all students.',
    year: '3rd Year',
    course: 'Education Studies',
  },
  {
    id: '7',
    name: 'Maya Hoch',
    role: 'Outreach',
    image: '/committee/maya-hoch.jpg',
    linkedin: 'https://www.linkedin.com/in/maya-hoch/',
    bio: 'Building connections with the wider Bristol entrepreneurship ecosystem and beyond.',
    year: '1st Year',
    course: 'Politics & International Relations',
  },
  {
    id: '8',
    name: 'Harri Smith',
    role: 'Head of Events',
    image: '/committee/harri-smith.jpg',
    linkedin: 'https://www.linkedin.com/in/harri-ioan-smith/',
    bio: 'Creating unforgettable events that inspire, educate, and connect our entrepreneurial community.',
    year: 'Postgraduate',
    course: 'MSc Finance & Investment',
  },
  {
    id: '9',
    name: 'Eldylea Izzaiddean',
    role: 'Marketing Officer',
    image: '/committee/eldylea-izzaiddean.jpg',
    bio: 'Spreading the word about BES and building our brand across the university and beyond.',
    year: '3rd Year',
    course: 'Finance',
  },
] 
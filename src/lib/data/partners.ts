export interface Partner {
  id: string
  name: string
  logo: string
  tier: 'platinum' | 'gold' | 'silver' | 'bronze'
  website: string
  description: string
}

export const partners: Partner[] = [
  {
    id: '1',
    name: 'TechStart Bristol',
    logo: '/partners/techstart-bristol.png',
    tier: 'platinum',
    website: 'https://techstartbristol.com',
    description: 'Leading tech incubator supporting early-stage startups in the Bristol area.',
  },
  {
    id: '2',
    name: 'Bristol Innovation Hub',
    logo: '/partners/bristol-innovation-hub.png',
    tier: 'platinum',
    website: 'https://bristolinnovationhub.co.uk',
    description: 'Innovation center providing workspace, mentorship, and resources for entrepreneurs.',
  },
  {
    id: '3',
    name: 'Venture Capital Partners',
    logo: '/partners/vcp.png',
    tier: 'gold',
    website: 'https://vcp.com',
    description: 'Investment firm specializing in technology and innovation startups.',
  },
  {
    id: '4',
    name: 'Bristol Business Network',
    logo: '/partners/bbn.png',
    tier: 'gold',
    website: 'https://bristolbusinessnetwork.org',
    description: 'Professional network connecting business leaders and entrepreneurs.',
  },
  {
    id: '5',
    name: 'Innovation Works',
    logo: '/partners/innovation-works.png',
    tier: 'silver',
    website: 'https://innovationworks.co.uk',
    description: 'Co-working space and business support organization.',
  },
  {
    id: '6',
    name: 'Startup Bristol',
    logo: '/partners/startup-bristol.png',
    tier: 'silver',
    website: 'https://startupbristol.org',
    description: 'Community organization supporting the local startup ecosystem.',
  },
  {
    id: '7',
    name: 'Digital Marketing Solutions',
    logo: '/partners/dms.png',
    tier: 'bronze',
    website: 'https://dmsolutions.co.uk',
    description: 'Marketing agency specializing in digital strategies for startups.',
  },
  {
    id: '8',
    name: 'Legal Eagles',
    logo: '/partners/legal-eagles.png',
    tier: 'bronze',
    website: 'https://legaleagles.co.uk',
    description: 'Law firm providing legal services for entrepreneurs and startups.',
  },
] 
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Container, Section } from '@/components/ui/container'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { partners } from '@/lib/data/partners'
import { ArrowRight, ExternalLink, Star, Award, Users, Globe } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const partnerTiers = [
  {
    name: 'Platinum',
    color: 'from-slate-800 to-slate-600',
    icon: Star,
    benefits: [
      'Premium branding on all materials',
      'Exclusive speaking opportunities',
      'Direct access to student talent',
      'Custom event sponsorship',
      'Committee advisory role',
    ],
    minInvestment: '£5,000+',
  },
  {
    name: 'Gold',
    color: 'from-yellow-600 to-yellow-500',
    icon: Award,
    benefits: [
      'Featured branding on website',
      'Event sponsorship opportunities',
      'Student recruitment access',
      'Networking event invitations',
      'Quarterly partnership updates',
    ],
    minInvestment: '£2,500+',
  },
  {
    name: 'Silver',
    color: 'from-slate-400 to-slate-300',
    icon: Users,
    benefits: [
      'Logo placement on materials',
      'Event participation opportunities',
      'Student engagement access',
      'Annual partnership review',
      'Newsletter mentions',
    ],
    minInvestment: '£1,000+',
  },
  {
    name: 'Bronze',
    color: 'from-amber-700 to-amber-600',
    icon: Globe,
    benefits: [
      'Basic logo recognition',
      'Event attendance opportunities',
      'Student connection access',
      'Partnership acknowledgment',
      'Social media mentions',
    ],
    minInvestment: '£500+',
  },
]

export default function PartnersPage() {
  const platinumPartners = partners.filter(p => p.tier === 'platinum')
  const goldPartners = partners.filter(p => p.tier === 'gold')
  const silverPartners = partners.filter(p => p.tier === 'silver')
  const bronzePartners = partners.filter(p => p.tier === 'bronze')

  return (
    <>
      {/* Breadcrumbs */}
      <Section className="bg-background pt-8 pb-4">
        <Container>
          <nav className="flex items-center space-x-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Partners</span>
          </nav>
        </Container>
      </Section>

      {/* Header */}
      <Section className="bg-background">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-ink mb-6">
              Our Partners
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're proud to work with leading organizations that share our vision for fostering entrepreneurship and innovation at the University of Bristol.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Partnership Tiers */}
      <Section>
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold text-ink mb-12 text-center">
              Partnership Tiers
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnerTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  variants={itemVariants}
                  className="flex flex-col"
                >
                  <Card className="p-6 h-full flex flex-col">
                    {/* Tier Header */}
                    <div className={`bg-gradient-to-br ${tier.color} text-white rounded-2xl p-4 mb-6 text-center`}>
                      <tier.icon className="h-8 w-8 mx-auto mb-2" />
                      <h3 className="text-lg font-bold">{tier.name}</h3>
                      <p className="text-sm opacity-90">{tier.minInvestment}</p>
                    </div>

                    {/* Benefits */}
                    <div className="flex-grow">
                      <h4 className="font-semibold text-ink mb-3">Benefits include:</h4>
                      <ul className="space-y-2 mb-6">
                        {tier.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start gap-2 text-sm text-slate-600">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Button variant="outline" size="sm" asChild className="w-full mt-auto">
                      <Link href="/contact">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Current Partners */}
      <Section className="bg-background">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold text-ink mb-12 text-center">
              Current Partners
            </motion.h2>

            {/* Platinum Partners */}
            {platinumPartners.length > 0 && (
              <motion.div variants={itemVariants} className="mb-12">
                <h3 className="text-xl font-semibold text-ink mb-6 text-center">Platinum Partners</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {platinumPartners.map((partner) => (
                    <Card key={partner.id} className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-20 h-16 bg-gradient-to-br from-slate-800 to-slate-600 rounded-2xl flex items-center justify-center">
                          <span className="text-white text-sm font-medium text-center">{partner.name}</span>
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-semibold text-ink mb-2">{partner.name}</h4>
                          <p className="text-sm text-slate-600 mb-3">{partner.description}</p>
                          <a
                            href={partner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary-dark transition-colors"
                          >
                            Visit Website
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Gold Partners */}
            {goldPartners.length > 0 && (
              <motion.div variants={itemVariants} className="mb-12">
                <h3 className="text-xl font-semibold text-ink mb-6 text-center">Gold Partners</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {goldPartners.map((partner) => (
                    <Card key={partner.id} className="p-6">
                      <div className="text-center">
                        <div className="w-16 h-12 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-white text-xs font-medium text-center">{partner.name}</span>
                        </div>
                        <h4 className="font-semibold text-ink mb-2">{partner.name}</h4>
                        <p className="text-sm text-slate-600 mb-3">{partner.description}</p>
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary-dark transition-colors"
                        >
                          Visit Website
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </Card>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Silver & Bronze Partners */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[...silverPartners, ...bronzePartners].map((partner) => (
                <Card key={partner.id} className="p-4">
                  <div className="text-center">
                    <div className={`w-12 h-8 rounded-2xl flex items-center justify-center mx-auto mb-3 ${
                      partner.tier === 'silver' 
                        ? 'bg-gradient-to-br from-slate-400 to-slate-300' 
                        : 'bg-gradient-to-br from-amber-700 to-amber-600'
                    }`}>
                      <span className="text-white text-xs font-medium text-center">{partner.name}</span>
                    </div>
                    <h4 className="font-medium text-ink text-sm mb-2">{partner.name}</h4>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary-dark transition-colors"
                    >
                      Visit
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Become a Partner CTA */}
      <Section>
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
              <Card className="p-12 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <h2 className="text-3xl font-bold text-ink mb-4">
                  Become a Partner
                </h2>
                <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                  Join our network of partners and help shape the future of entrepreneurship at the University of Bristol. 
                  Whether you're looking to recruit talent, share expertise, or support innovation, we have a partnership tier for you.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link href="/contact">
                      Get in Touch
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild size="lg">
                    <a href="/partnership-proposal.pdf" target="_blank" rel="noopener noreferrer">
                      Download Partnership Guide
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  )
} 
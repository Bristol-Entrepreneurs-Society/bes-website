import { motion } from 'framer-motion'
import Link from 'next/link'
import { Container, Section } from '@/components/ui/container'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { committee } from '@/lib/data/committee'
import { ArrowRight, Linkedin, MapPin, GraduationCap } from 'lucide-react'

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

export default function CommitteePage() {
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
            <span className="text-slate-900 font-medium">Committee</span>
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
              Meet Our Committee
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our dedicated committee members work tirelessly to create opportunities, organize events, and build a thriving entrepreneurial community at the University of Bristol.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Committee Grid */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {committee.map((member, index) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <Card className="p-6 h-full flex flex-col">
                  {/* Member Image Placeholder */}
                  <div className="w-24 h-24 rounded-full bg-slate-200 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-slate-400">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>

                  {/* Member Info */}
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-ink mb-1">{member.name}</h3>
                    <p className="text-primary font-semibold mb-2">{member.role}</p>
                    
                    <div className="flex items-center justify-center gap-4 text-sm text-slate-600 mb-3">
                      <div className="flex items-center gap-1">
                        <GraduationCap className="h-4 w-4" />
                        <span>{member.course}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{member.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-slate-600 text-sm mb-6 flex-grow">
                    {member.bio}
                  </p>

                  {/* LinkedIn Link */}
                  {member.linkedin && (
                    <div className="mt-auto">
                      <Button variant="outline" size="sm" asChild className="w-full">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <Linkedin className="h-4 w-4" />
                          Connect on LinkedIn
                        </a>
                      </Button>
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Join Committee CTA */}
      <Section className="bg-background">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-ink mb-4">
                Want to Join Our Committee?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We're always looking for passionate students to join our committee and help shape the future of entrepreneurship at Bristol.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  )
} 
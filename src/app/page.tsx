import { motion } from 'framer-motion'
import Link from 'next/link'
import { Container, Section } from '@/components/ui/container'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ContactForm } from '@/components/contact-form'
import { events } from '@/lib/data/events'
import { partners } from '@/lib/data/partners'
import { Calendar, Users, Lightbulb, TrendingUp, ArrowRight, MapPin, Clock } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function HomePage() {
  const upcomingEvents = events.filter(event => event.isUpcoming).slice(0, 3)
  const featuredPartners = partners.filter(partner => partner.tier === 'platinum' || partner.tier === 'gold')

  return (
    <>
      {/* Hero Section */}
      <Section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-ink via-slate-800 to-ink text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <Container className="relative z-10 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary"></div>
              </div>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              Bristol Entrepreneurs
              <span className="block text-primary">Society</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto text-balance">
              Fostering entrepreneurship, innovation, and startup collaboration at the University of Bristol
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-4">
                <Link href="/events">
                  Join Events
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-ink">
                <Link href="/partners">
                  Partner with Us
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* What We Do Section */}
      <Section className="bg-background">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-ink mb-4">
              What We Do
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-3xl mx-auto">
              We provide students with the tools, connections, and opportunities to turn their entrepreneurial dreams into reality.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: 'Events & Workshops',
                description: 'Regular workshops, networking events, and speaker series to build your entrepreneurial skills.',
              },
              {
                icon: Users,
                title: 'Mentorship',
                description: 'Connect with successful entrepreneurs and industry professionals for guidance and advice.',
              },
              {
                icon: Lightbulb,
                title: 'Innovation Projects',
                description: 'Collaborate on real-world projects and bring your innovative ideas to life.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="p-8 text-center h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-4">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Upcoming Events Section */}
      <Section>
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-ink mb-4">
              Upcoming Events
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-3xl mx-auto">
              Don't miss out on our exciting upcoming events. Join us to learn, network, and grow your entrepreneurial skills.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full">
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                    <Clock className="h-4 w-4" />
                    <span>{new Date(event.date).toLocaleDateString('en-GB', { month: 'short', day: 'numeric' })}</span>
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-2">{event.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">{event.description}</p>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link href={`/events/${event.id}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <Button asChild size="lg">
              <Link href="/events">
                View All Events
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </Container>
      </Section>

      {/* Partners Section */}
      <Section className="bg-background">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-ink mb-4">
              Our Partners
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're proud to work with leading organizations that share our vision for fostering entrepreneurship.
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
          >
            {featuredPartners.map((partner) => (
              <div key={partner.id} className="flex items-center justify-center">
                <div className="w-32 h-20 bg-white rounded-2xl shadow-soft flex items-center justify-center">
                  <span className="text-slate-400 text-sm font-medium">{partner.name}</span>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <Button variant="outline" asChild size="lg">
              <Link href="/partners">
                Become a Partner
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </Container>
      </Section>

      {/* Contact CTA Section */}
      <Section>
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-ink mb-4">
              Get in Touch
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-3xl mx-auto">
              Have a question or want to get involved? We'd love to hear from you!
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <ContactForm />
          </motion.div>
        </Container>
      </Section>
    </>
  )
}

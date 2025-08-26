'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Container, Section } from '@/components/ui/container'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { events } from '@/lib/data/events'
import { ArrowRight, MapPin, Clock, Calendar, Filter } from 'lucide-react'

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

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const upcomingEvents = events.filter(event => event.isUpcoming)
  const pastEvents = events.filter(event => !event.isUpcoming)

  const categories = ['all', 'workshop', 'networking', 'speaker', 'competition', 'social']
  const categoryLabels = {
    all: 'All Events',
    workshop: 'Workshops',
    networking: 'Networking',
    speaker: 'Speaker Events',
    competition: 'Competitions',
    social: 'Social Events',
  }

  const filteredEvents = activeTab === 'upcoming' 
    ? upcomingEvents.filter(event => selectedCategory === 'all' || event.category === selectedCategory)
    : pastEvents.filter(event => selectedCategory === 'all' || event.category === selectedCategory)

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
            <span className="text-slate-900 font-medium">Events</span>
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
              Our Events
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-3xl mx-auto">
              Join us for exciting events, workshops, and networking opportunities designed to help you develop your entrepreneurial skills and connect with like-minded individuals.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Tabs and Filters */}
      <Section>
        <Container>
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-slate-100 rounded-2xl p-1">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === 'upcoming'
                    ? 'bg-white text-ink shadow-soft'
                    : 'text-slate-600 hover:text-ink'
                }`}
              >
                Upcoming Events ({upcomingEvents.length})
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === 'past'
                    ? 'bg-white text-ink shadow-soft'
                    : 'text-ink'
                }`}
              >
                Past Events ({pastEvents.length})
              </button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {categoryLabels[category as keyof typeof categoryLabels]}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${selectedCategory}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event) => (
                  <motion.div
                    key={event.id}
                    variants={itemVariants}
                    className="flex flex-col"
                  >
                    <Card className="p-6 h-full flex flex-col">
                      {/* Event Image Placeholder */}
                      <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl mb-4 flex items-center justify-center">
                        <Calendar className="h-12 w-12 text-primary" />
                      </div>

                      {/* Event Info */}
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                          <Clock className="h-4 w-4" />
                          <span>{new Date(event.date).toLocaleDateString('en-GB', { 
                            weekday: 'short',
                            month: 'short', 
                            day: 'numeric',
                            year: 'numeric'
                          })}</span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-ink mb-2">{event.title}</h3>
                        
                        <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>

                        <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                          {event.description}
                        </p>

                        {/* Category Badge */}
                        <div className="mb-4">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                            event.category === 'workshop' ? 'bg-blue-100 text-blue-800' :
                            event.category === 'networking' ? 'bg-green-100 text-green-800' :
                            event.category === 'speaker' ? 'bg-purple-100 text-purple-800' :
                            event.category === 'competition' ? 'bg-orange-100 text-orange-800' :
                            'bg-slate-100 text-slate-800'
                          }`}>
                            {categoryLabels[event.category as keyof typeof categoryLabels]}
                          </span>
                        </div>
                      </div>

                      {/* Action Button */}
                      <Button variant="outline" size="sm" asChild className="w-full mt-auto">
                        <Link href={`/events/${event.id}`}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </Card>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  variants={itemVariants}
                  className="col-span-full text-center py-16"
                >
                  <Filter className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-slate-600 mb-2">No events found</h3>
                  <p className="text-slate-500">
                    Try adjusting your filters or check back later for new events.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </Container>
      </Section>

      {/* CTA Section */}
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
                Want to Host an Event?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Have an idea for an event or workshop? We'd love to hear from you and help make it happen!
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
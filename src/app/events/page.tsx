'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Lightbulb, MessageSquare, TrendingUp, Instagram } from 'lucide-react'

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const features = [
  {
    icon: Users,
    title: 'Real Founders',
    description: 'Learn from successful entrepreneurs who\'ve built and scaled companies from the ground up.',
    color: 'from-primary to-red-600',
  },
  {
    icon: Lightbulb,
    title: 'Hands-on Workshops',
    description: 'Interactive sessions where you\'ll work on real problems and get actionable feedback.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: MessageSquare,
    title: 'Quality Networking',
    description: 'Connect with like-minded students, mentors, and industry professionals in meaningful ways.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Build skills, connections, and confidence that will accelerate your entrepreneurial journey.',
    color: 'from-green-500 to-emerald-500',
  },
]

export default function EventsPage() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumbs */}
      <section className="bg-neutral-50 pt-8 pb-4">
        <Container>
          <nav className="flex items-center space-x-2 text-sm text-neutral-600">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-neutral-900 font-medium">Events</span>
          </nav>
        </Container>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-red-600/20 blur-xl"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 blur-xl"
            animate={{
              y: [0, 30, 0],
              x: [0, -15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <Container className="relative z-10 py-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.div variants={itemVariants}>
              <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
                🚀 Premium Events for Ambitious Students
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Learn from{' '}
                <span className="bg-gradient-to-r from-primary via-red-500 to-orange-500 bg-clip-text text-transparent">
                  Real Founders
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join exclusive talks, hands-on workshops, and networking events with successful entrepreneurs 
                who've built companies from zero to millions.
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* What to Expect Section */}
      <section className="py-24 bg-white">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants}>
              <Badge variant="secondary" className="mb-4">What to Expect</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                Premium Learning{' '}
                <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
                  Experiences
                </span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                Every event is carefully curated to provide maximum value, actionable insights, 
                and meaningful connections for ambitious students.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={feature.title} variants={itemVariants}>
                <Card className="h-full p-6 text-center group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{feature.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Instagram CTA Section */}
      <section className="py-24 bg-gradient-to-br from-neutral-50 to-white">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 mb-6">
                <Instagram className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                View Upcoming Events
              </h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                For the latest event announcements, updates, and exclusive content, 
                follow us on Instagram to stay connected with our community.
              </p>
              <a
                href="https://www.instagram.com/bristolentrepreneursoc/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <Instagram className="h-5 w-5" />
                Follow @bristolentrepreneursoc
              </a>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </main>
  )
}
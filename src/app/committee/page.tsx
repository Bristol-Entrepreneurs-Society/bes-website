'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CommitteeCard } from '@/components/committee/CommitteeCard'
import { committee } from '@/lib/data/committee'
import { ArrowRight, Users, Calendar, Mail, Star, Heart, Target } from 'lucide-react'

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

const values = [
  {
    icon: Target,
    title: 'Vision-Driven',
    description: 'We\'re committed to building Bristol\'s premier entrepreneurship community.',
  },
  {
    icon: Heart,
    title: 'Student-Focused',
    description: 'Every decision we make prioritizes the student experience and learning outcomes.',
  },
  {
    icon: Users,
    title: 'Collaborative',
    description: 'We work together to create opportunities that benefit the entire community.',
  },
]

export default function CommitteePage() {
  // Group committee members by role hierarchy
  const presidents = committee.filter(member => member.role === 'President')
  const leadership = committee.filter(member => 
    ['Vice President', 'Treasurer', 'Secretary'].includes(member.role)
  )
  const officers = committee.filter(member => 
    !['President', 'Vice President', 'Treasurer', 'Secretary'].includes(member.role)
  )

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
            <span className="text-neutral-900 font-medium">Committee</span>
          </nav>
        </Container>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
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
                👥 Meet the Team Behind BES
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Meet the{' '}
                <span className="bg-gradient-to-r from-primary via-red-500 to-orange-500 bg-clip-text text-transparent">
                  Committee
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                We're committed to our mission: promoting our message that anyone can be an entrepreneur.
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Our Values Section */}
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
              <Badge variant="secondary" className="mb-4">Our Values</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                What Drives{' '}
                <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
                  Our Team
                </span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                Our committee is united by shared values and a common mission to create the best possible 
                experience for every BES member.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {values.map((value, index) => (
              <motion.div key={value.title} variants={itemVariants}>
                <div className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-red-600/10 mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{value.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Presidents Section */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">Leadership Team</h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Our co-presidents work together to set the vision and direction for BES.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
              {presidents.map((member, index) => (
                <CommitteeCard key={member.id} member={member} index={index} />
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Core Team Section */}
      <section className="py-16 bg-white">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">Core Team</h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                The backbone of our operations, ensuring everything runs smoothly.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {leadership.map((member, index) => (
                <CommitteeCard key={member.id} member={member} index={index + presidents.length} />
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Officers Section */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">Officers</h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Specialized roles focused on specific areas of our society's growth and impact.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {officers.map((member, index) => (
                <CommitteeCard 
                  key={member.id} 
                  member={member} 
                  index={index + presidents.length + leadership.length} 
                />
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Get Involved CTA */}
      <section className="py-24 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <Container className="relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-red-600/20 mb-8">
                <Star className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get{' '}
                <span className="bg-gradient-to-r from-primary to-red-500 bg-clip-text text-transparent">
                  Involved?
                </span>
              </h2>
              <p className="text-xl text-neutral-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                Join our community of ambitious entrepreneurs. Whether you want to attend events, 
                volunteer, or even join next year's committee, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="xl" variant="gradient">
                  <Link href="/events">
                    Join Our Events
                    <Calendar className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="xl" variant="glass">
                  <Link href="/contact">
                    Get in Touch
                    <Mail className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </main>
  )
}
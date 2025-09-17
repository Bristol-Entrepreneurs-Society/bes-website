'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Linkedin, Instagram, Mail, MessageSquare, Users, ArrowRight } from 'lucide-react'

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

const socialLinks = [
  {
    name: 'LinkedIn',
    handle: '@bristol-entrepreneurs-society',
    url: 'https://www.linkedin.com/company/bristol-entrepreneurs-society/',
    icon: Linkedin,
    description: 'Connect with us professionally and stay updated on career opportunities.',
    gradient: 'from-blue-600 to-blue-700',
    hoverGradient: 'hover:from-blue-700 hover:to-blue-800',
  },
  {
    name: 'Instagram',
    handle: '@bristolentrepreneursoc',
    url: 'https://www.instagram.com/bristolentrepreneursoc/',
    icon: Instagram,
    description: 'Follow our journey and get behind-the-scenes content from our events.',
    gradient: 'from-pink-500 to-purple-600',
    hoverGradient: 'hover:from-pink-600 hover:to-purple-700',
  },
]

const contactMethods = [
  {
    icon: MessageSquare,
    title: 'General Inquiries',
    description: 'Questions about events, membership, or partnerships',
    action: 'Send us a DM on Instagram or LinkedIn',
  },
  {
    icon: Users,
    title: 'Join the Committee',
    description: 'Interested in getting more involved with BES?',
    action: 'Reach out through our social channels',
  },
  {
    icon: Mail,
    title: 'Speaking Opportunities',
    description: 'Want to share your entrepreneurial story?',
    action: 'Connect with us on LinkedIn',
  },
]

export default function ContactPage() {
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
            <span className="text-neutral-900 font-medium">Contact</span>
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
                💬 Get in Touch
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Contact{' '}
                <span className="bg-gradient-to-r from-primary via-red-500 to-orange-500 bg-clip-text text-transparent">
                  Us
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                We'd love to hear from you. Reach out through our socials or connect with us directly.
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Social Media Links Section */}
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
              <Badge variant="secondary" className="mb-4">Connect With Us</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                Follow Our{' '}
                <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
                  Journey
                </span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                Stay connected with Bristol's most dynamic entrepreneurship community through our social channels.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {socialLinks.map((social, index) => (
              <motion.div key={social.name} variants={itemVariants}>
                <Card className="h-full p-8 text-center group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${social.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <social.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">{social.name}</h3>
                  <p className="text-lg text-neutral-600 mb-4">{social.handle}</p>
                  <p className="text-neutral-600 mb-6 leading-relaxed">{social.description}</p>
                  <Button 
                    asChild 
                    className={`w-full bg-gradient-to-r ${social.gradient} ${social.hoverGradient} text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300`}
                    size="lg"
                  >
                    <a 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center"
                    >
                      Follow Us
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Contact Methods Section */}
      <section className="py-24 bg-neutral-50">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants}>
              <Badge variant="secondary" className="mb-4">How Can We Help?</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                What Are You{' '}
                <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
                  Looking For?
                </span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                Whether you're interested in joining our events, getting involved with the committee, 
                or exploring partnership opportunities, we're here to help.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {contactMethods.map((method, index) => (
              <motion.div key={method.title} variants={itemVariants}>
                <Card className="h-full p-6 text-center group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-red-600/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <method.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{method.title}</h3>
                  <p className="text-neutral-600 mb-4 leading-relaxed">{method.description}</p>
                  <p className="text-sm font-medium text-primary">{method.action}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* CTA Section */}
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Join{' '}
                <span className="bg-gradient-to-r from-primary to-red-500 bg-clip-text text-transparent">
                  Our Community?
                </span>
              </h2>
              <p className="text-xl text-neutral-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                Don't miss out on exclusive events, networking opportunities, and the chance to connect 
                with Bristol's most ambitious student entrepreneurs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="xl" variant="gradient">
                  <Link href="/events">
                    View Our Events
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="xl" variant="glass">
                  <Link href="/committee">
                    Meet the Team
                    <Users className="ml-2 h-5 w-5" />
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
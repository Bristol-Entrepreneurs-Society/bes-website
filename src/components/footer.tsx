'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Linkedin, Instagram, Mail, MapPin, Phone, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Events', href: '/events' },
  { name: 'Committee', href: '/committee' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blog', href: '/blog' },
  { name: 'Partners', href: '/partners' },
  { name: 'Contact', href: '/contact' },
]

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/bristol-entrepreneurs-society',
    icon: Linkedin,
    color: 'hover:text-blue-600',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/besbristol',
    icon: Instagram,
    color: 'hover:text-pink-600',
  },
  {
    name: 'Email',
    href: 'mailto:hello@besbristol.com',
    icon: Mail,
    color: 'hover:text-primary',
  },
]

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

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative">
        {/* Newsletter Section */}
        <div className="border-b border-neutral-700/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-4">
                Stay Connected
              </motion.h3>
              <motion.p variants={itemVariants} className="text-neutral-300 mb-8 max-w-2xl mx-auto">
                Get the latest updates on events, opportunities, and entrepreneurial insights delivered to your inbox.
              </motion.p>
              <motion.div variants={itemVariants}>
                <Button asChild variant="gradient" size="lg">
                  <Link href="/contact">
                    Subscribe to Updates
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-red-600 shadow-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">B</span>
                  </div>
                  <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 animate-pulse"></div>
                </div>
                <div>
                  <span className="text-2xl font-bold">BES</span>
                  <div className="text-sm text-neutral-400">Bristol Entrepreneurs Society</div>
                </div>
              </div>
              <p className="text-neutral-300 mb-6 max-w-md leading-relaxed">
                Fostering entrepreneurship, innovation, and startup collaboration at the University of Bristol. 
                Join our community of ambitious students and future business leaders.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl bg-neutral-800 text-neutral-400 transition-all duration-300 ${social.color} hover:bg-neutral-700 hover:scale-110`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-neutral-300 hover:text-white transition-all duration-300 hover:translate-x-1 block group"
                    >
                      <span className="flex items-center">
                        {link.name}
                        <ExternalLink className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-6 text-white">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-neutral-300">
                    <p>University of Bristol</p>
                    <p>Bristol, BS8 1TH</p>
                    <p>United Kingdom</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <a
                    href="mailto:hello@besbristol.com"
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    hello@besbristol.com
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-700/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
            >
              <motion.div variants={itemVariants} className="text-neutral-400 text-sm text-center md:text-left">
                <p>&copy; {new Date().getFullYear()} Bristol Entrepreneurs Society. All rights reserved.</p>
                <p className="mt-1">Affiliated with Bristol SU • Registered Student Society</p>
              </motion.div>
              <motion.div variants={itemVariants} className="flex space-x-6 text-sm">
                <Link href="/privacy" className="text-neutral-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-neutral-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="/accessibility" className="text-neutral-400 hover:text-white transition-colors">
                  Accessibility
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
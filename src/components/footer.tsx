import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Instagram, Mail } from 'lucide-react'
import { Container } from '@/components/ui/container'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Committee', href: '/committee' },
  { name: 'Events', href: '/events' },
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
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/besbristol',
    icon: Instagram,
  },
  {
    name: 'Email',
    href: 'mailto:hello@besbristol.com',
    icon: Mail,
  },
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-neutral-50 to-white border-t border-neutral-200">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative h-12 w-12 transition-transform duration-300 hover:scale-110">
                <Image
                  src="/bes-logo.svg"
                  alt="BES Logo"
                  width={48}
                  height={48}
                  className="transition-all duration-300"
                />
              </div>
              <span className="text-2xl font-bold text-neutral-900">BES</span>
            </div>
            <p className="text-neutral-600 mb-6 max-w-md leading-relaxed">
              Bristol Entrepreneurs Society is a student-led society at the University of Bristol, 
              fostering entrepreneurship, innovation, and startup collaboration.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-primary transition-all duration-300 ease-in-out hover:scale-110 p-2 rounded-full hover:bg-primary/10"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-neutral-900">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-600 hover:text-primary transition-all duration-300 ease-in-out hover:translate-x-1 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-neutral-900">Get in Touch</h3>
            <div className="space-y-3 text-neutral-600">
              <p>University of Bristol</p>
              <p>Bristol, BS8 1TH</p>
              <p>United Kingdom</p>
              <p className="pt-2">
                <a
                  href="mailto:hello@besbristol.com"
                  className="text-primary hover:text-primary-dark transition-all duration-300 ease-in-out hover:underline"
                >
                  hello@besbristol.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-neutral-500 text-sm text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} Bristol Entrepreneurs Society. All rights reserved.</p>
              <p className="mt-1">Affiliated with Bristol SU</p>
            </div>
            <div className="text-neutral-500 text-sm flex space-x-6">
              <Link href="/privacy" className="hover:text-primary transition-all duration-300 ease-in-out hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-all duration-300 ease-in-out hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
} 
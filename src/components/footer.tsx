import Link from 'next/link'
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
    <footer className="bg-ink text-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-primary"></div>
              <span className="text-2xl font-bold">BES</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
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
                  className="text-slate-300 hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-2 text-slate-300">
              <p>University of Bristol</p>
              <p>Bristol, BS8 1TH</p>
              <p>United Kingdom</p>
              <p className="pt-2">
                <a
                  href="mailto:hello@besbristol.com"
                  className="text-primary hover:text-primary-dark transition-colors"
                >
                  hello@besbristol.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              <p>&copy; {new Date().getFullYear()} Bristol Entrepreneurs Society. All rights reserved.</p>
              <p className="mt-1">Affiliated with Bristol SU</p>
            </div>
            <div className="text-slate-400 text-sm">
              <Link href="/privacy" className="hover:text-primary transition-colors mr-4">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
} 
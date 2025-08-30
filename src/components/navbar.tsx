'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between bg-white shadow-sm">
      {/* Logo + name */}
      <Link href="/" className="flex items-center gap-2">
        <Image src="/bes-logo.png" alt="BES logo" width={40} height={40} priority />
        <span className="font-semibold text-lg">Bristol Entrepreneurs Society</span>
      </Link>

      {/* Links + CTA */}
      <div className="flex items-center gap-6">
        <Link href="/events" className="text-gray-700 hover:text-red-600">Events</Link>
        <Link href="/resources" className="text-gray-700 hover:text-red-600">Resources</Link>
        <Link href="/committee" className="text-gray-700 hover:text-red-600">Committee</Link>
        <Link href="/sponsors" className="text-gray-700 hover:text-red-600">Sponsors</Link>
        <Link href="/contact" className="text-gray-700 hover:text-red-600">Contact</Link>
        <Link href="/events">
          <Button variant="primary">Join Events</Button>
        </Link>
      </div>
    </nav>
  )
}


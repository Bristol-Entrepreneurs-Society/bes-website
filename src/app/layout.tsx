import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bristol Entrepreneurs Society | Fostering Innovation & Startup Collaboration',
  description: 'Bristol Entrepreneurs Society (BES) is a student-led society at the University of Bristol, fostering entrepreneurship, innovation, and startup collaboration. Join our events, workshops, and networking opportunities.',
  keywords: 'entrepreneurship, innovation, startups, university of bristol, student society, business, networking, workshops',
  authors: [{ name: 'Bristol Entrepreneurs Society' }],
  creator: 'Bristol Entrepreneurs Society',
  publisher: 'Bristol Entrepreneurs Society',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://besbristol.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Bristol Entrepreneurs Society | Fostering Innovation & Startup Collaboration',
    description: 'Bristol Entrepreneurs Society (BES) is a student-led society at the University of Bristol, fostering entrepreneurship, innovation, and startup collaboration.',
    url: 'https://besbristol.com',
    siteName: 'Bristol Entrepreneurs Society',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Bristol Entrepreneurs Society - Fostering Innovation & Startup Collaboration',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bristol Entrepreneurs Society | Fostering Innovation & Startup Collaboration',
    description: 'Bristol Entrepreneurs Society (BES) is a student-led society at the University of Bristol, fostering entrepreneurship, innovation, and startup collaboration.',
    images: ['/opengraph-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import { Footer } from '@/components/footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Bristol Entrepreneurs Society | Fostering Innovation & Startup Collaboration',
    template: '%s | Bristol Entrepreneurs Society'
  },
  description: 'Bristol Entrepreneurs Society (BES) is a student-led society at the University of Bristol, fostering entrepreneurship, innovation, and startup collaboration among students.',
  keywords: ['entrepreneurship', 'startups', 'bristol university', 'student society', 'innovation', 'business', 'networking'],
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
    type: 'website',
    locale: 'en_GB',
    url: 'https://besbristol.com',
    title: 'Bristol Entrepreneurs Society | Fostering Innovation & Startup Collaboration',
    description: 'Bristol Entrepreneurs Society (BES) is a student-led society at the University of Bristol, fostering entrepreneurship, innovation, and startup collaboration among students.',
    siteName: 'Bristol Entrepreneurs Society',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Bristol Entrepreneurs Society',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bristol Entrepreneurs Society | Fostering Innovation & Startup Collaboration',
    description: 'Bristol Entrepreneurs Society (BES) is a student-led society at the University of Bristol, fostering entrepreneurship, innovation, and startup collaboration among students.',
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
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} min-h-screen bg-white text-neutral-900 antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
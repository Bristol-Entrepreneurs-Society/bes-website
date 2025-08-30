import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/navbar'

export const metadata: Metadata = {
  title: 'Bristol Entrepreneurs Society',
  description: 'BES – Events, resources, and community for builders at Bristol.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}

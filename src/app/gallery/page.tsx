'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Container, Section } from '@/components/ui/container'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { X, ChevronLeft, ChevronRight, Download, Share2 } from 'lucide-react'

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

// Sample gallery images - in a real app, these would come from a CMS or API
const galleryImages = [
  {
    id: '1',
    src: '/gallery/event-1.jpg',
    alt: 'Startup Pitch Competition 2024',
    title: 'Startup Pitch Competition 2024',
    description: 'Students presenting their innovative business ideas to a panel of judges.',
    category: 'competition',
    date: '2024-11-15',
  },
  {
    id: '2',
    src: '/gallery/event-2.jpg',
    alt: 'Networking Event with Tech Entrepreneurs',
    title: 'Networking Event with Tech Entrepreneurs',
    description: 'Students connecting with successful entrepreneurs from Bristol\'s tech scene.',
    category: 'networking',
    date: '2024-11-10',
  },
  {
    id: '3',
    src: '/gallery/event-3.jpg',
    alt: 'Business Model Canvas Workshop',
    title: 'Business Model Canvas Workshop',
    description: 'Interactive workshop teaching students how to develop and validate business models.',
    category: 'workshop',
    date: '2024-11-05',
  },
  {
    id: '4',
    src: '/gallery/event-4.jpg',
    alt: 'Guest Speaker Series',
    title: 'Guest Speaker Series',
    description: 'Industry experts sharing insights and experiences with our members.',
    category: 'speaker',
    date: '2024-10-28',
  },
  {
    id: '5',
    src: '/gallery/event-5.jpg',
    alt: 'Social Mixer & Pizza Night',
    title: 'Social Mixer & Pizza Night',
    description: 'A relaxed evening for members to socialize and build connections.',
    category: 'social',
    date: '2024-10-20',
  },
  {
    id: '6',
    src: '/gallery/event-6.jpg',
    alt: 'Innovation Hackathon',
    title: 'Innovation Hackathon',
    description: '24-hour hackathon where teams solve real-world problems.',
    category: 'competition',
    date: '2024-10-15',
  },
  {
    id: '7',
    src: '/gallery/event-7.jpg',
    alt: 'Alumni Networking Event',
    title: 'Alumni Networking Event',
    description: 'Current students connecting with successful BES alumni.',
    category: 'networking',
    date: '2024-10-10',
  },
  {
    id: '8',
    src: '/gallery/event-8.jpg',
    alt: 'Marketing Strategy Workshop',
    title: 'Marketing Strategy Workshop',
    description: 'Learning effective marketing strategies for startups and small businesses.',
    category: 'workshop',
    date: '2024-10-05',
  },
  {
    id: '9',
    src: '/gallery/event-9.jpg',
    alt: 'Committee Planning Meeting',
    title: 'Committee Planning Meeting',
    description: 'Our dedicated committee working on upcoming events and initiatives.',
    category: 'committee',
    date: '2024-10-01',
  },
]

const categories = ['all', 'competition', 'networking', 'workshop', 'speaker', 'social', 'committee']
const categoryLabels = {
  all: 'All Photos',
  competition: 'Competitions',
  networking: 'Networking',
  workshop: 'Workshops',
  speaker: 'Speaker Events',
  social: 'Social Events',
  committee: 'Committee',
}

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  const openLightbox = (image: typeof galleryImages[0], index: number) => {
    setSelectedImage(image)
    setCurrentImageIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
    let newIndex: number
    
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1
    } else {
      newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1
    }
    
    setSelectedImage(filteredImages[newIndex])
    setCurrentImageIndex(newIndex)
  }

  return (
    <>
      {/* Breadcrumbs */}
      <Section className="bg-background pt-8 pb-4">
        <Container>
          <nav className="flex items-center space-x-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Gallery</span>
          </nav>
        </Container>
      </Section>

      {/* Header */}
      <Section className="bg-background">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-ink mb-6">
              Photo Gallery
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-3xl mx-auto">
              Take a look at some of our most memorable moments, events, and achievements from the past year.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Category Filters */}
      <Section>
        <Container>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {categoryLabels[category as keyof typeof categoryLabels]}
              </button>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Gallery Grid */}
      <Section>
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                className="group cursor-pointer"
                onClick={() => openLightbox(image, index)}
              >
                <Card className="p-4 overflow-hidden">
                  {/* Image Placeholder */}
                  <div className="w-full h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-2xl">📸</span>
                      </div>
                      <p className="text-sm text-slate-500">Photo Placeholder</p>
                    </div>
                  </div>

                  {/* Image Info */}
                  <div>
                    <h3 className="font-semibold text-ink mb-2">{image.title}</h3>
                    <p className="text-sm text-slate-600 mb-3 line-clamp-2">{image.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        image.category === 'workshop' ? 'bg-blue-100 text-blue-800' :
                        image.category === 'networking' ? 'bg-green-100 text-green-800' :
                        image.category === 'speaker' ? 'bg-purple-100 text-purple-800' :
                        image.category === 'competition' ? 'bg-orange-100 text-orange-800' :
                        image.category === 'social' ? 'bg-pink-100 text-pink-800' :
                        'bg-slate-100 text-slate-800'
                      }`}>
                        {categoryLabels[image.category as keyof typeof categoryLabels]}
                      </span>
                      <span className="text-xs text-slate-500">{image.date}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
              >
                <ChevronLeft className="h-12 w-12" />
              </button>
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
              >
                <ChevronRight className="h-12 w-12" />
              </button>

              {/* Image Content */}
              <div className="bg-white rounded-2xl overflow-hidden">
                {/* Image Placeholder */}
                <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl">📸</span>
                    </div>
                    <p className="text-lg text-slate-500">Photo Placeholder</p>
                  </div>
                </div>

                {/* Image Details */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-ink mb-2">{selectedImage.title}</h2>
                  <p className="text-slate-600 mb-4">{selectedImage.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        selectedImage.category === 'workshop' ? 'bg-blue-100 text-blue-800' :
                        selectedImage.category === 'networking' ? 'bg-green-100 text-green-800' :
                        selectedImage.category === 'speaker' ? 'bg-purple-100 text-purple-800' :
                        selectedImage.category === 'competition' ? 'bg-orange-100 text-orange-800' :
                        selectedImage.category === 'social' ? 'bg-pink-100 text-pink-800' :
                        'bg-slate-100 text-slate-800'
                      }`}>
                        {categoryLabels[selectedImage.category as keyof typeof categoryLabels]}
                      </span>
                      <span className="text-sm text-slate-500">{selectedImage.date}</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Counter */}
              <div className="text-center mt-4 text-white">
                {currentImageIndex + 1} of {filteredImages.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, MapPin, User, ArrowRight } from 'lucide-react'
import { Event } from '@/lib/data/events'
import { formatDate } from '@/lib/utils'

interface EventCardProps {
  event: Event
  index: number
}

const categoryColors = {
  talks: 'bg-gradient-to-r from-primary to-red-600 text-white',
  workshops: 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white',
  networking: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white',
}

const categoryLabels = {
  talks: 'Founder Talk',
  workshops: 'Workshop',
  networking: 'Networking',
}

export function EventCard({ event, index }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Card className="h-full overflow-hidden bg-white border border-neutral-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        {/* Event Image */}
        <div className={`relative w-full h-48 overflow-hidden rounded-t-lg ${event.imagePadding ?? ''}`}>
          <Image
            src={event.image || '/events/placeholder.jpg'}
            alt={(event as any).alt || event.title}
            width={400}
            height={250}
            className={`w-full h-full ${event.imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
            style={{ objectPosition: (event as any).imagePosition || 'center' }}
            priority={index < 3}
          />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <Badge className={categoryColors[event.category]}>
              {categoryLabels[event.category]}
            </Badge>
          </div>

          {/* Date Badge */}
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 text-center shadow-lg">
            {event.date === 'TBD' ? (
              <div className="text-xs font-medium text-neutral-600">
                TBD
              </div>
            ) : (
              <>
                <div className="text-xs font-medium text-neutral-600">
                  {new Date(event.date).toLocaleDateString('en-GB', { month: 'short' })}
                </div>
                <div className="text-lg font-bold text-neutral-900">
                  {new Date(event.date).getDate()}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Event Content */}
        <div className="p-6 flex flex-col h-full">
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary transition-colors">
              {event.title}
            </h3>

            {event.speaker && (
              <div className="flex items-center gap-2 mb-3">
                <User className="h-4 w-4 text-neutral-500" />
                <div>
                  <span className="font-medium text-neutral-900">{event.speaker}</span>
                  {event.speakerTitle && (
                    <span className="text-sm text-neutral-600 block">{event.speakerTitle}</span>
                  )}
                </div>
              </div>
            )}

            <p className="text-neutral-600 mb-4 leading-relaxed line-clamp-3">
              {event.description}
            </p>

            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <Calendar className="h-4 w-4" />
                <span>{event.date === 'TBD' ? 'TBD' : formatDate(event.date)}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <Clock className="h-4 w-4" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <MapPin className="h-4 w-4" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Button className="w-full group-hover:shadow-lg transition-all duration-300">
            Register Now
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </Card>
    </motion.div>
  )
}
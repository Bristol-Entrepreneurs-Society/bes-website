'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Linkedin, User } from 'lucide-react'
import { CommitteeMember } from '@/lib/data/committee'

interface CommitteeCardProps {
  member: CommitteeMember
  index: number
}

export function CommitteeCard({ member, index }: CommitteeCardProps) {
  const [imageError, setImageError] = useState(false)

  // Generate initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Card className="h-full overflow-hidden bg-white border border-neutral-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        {/* Profile Image or Initials */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200">
          {!imageError ? (
            <img
              src={member.image}
              alt={`${member.name} - ${member.role}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-red-600/10">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-red-600 flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">
                  {getInitials(member.name)}
                </span>
              </div>
            </div>
          )}
          
          {/* Role Badge */}
          <div className="absolute top-4 left-4">
            <Badge className="bg-white/95 text-neutral-900 hover:bg-white">
              {member.role}
            </Badge>
          </div>

          {/* LinkedIn Link */}
          {member.linkedin && (
            <div className="absolute top-4 right-4">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/95 text-neutral-700 hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label={`${member.name}'s LinkedIn profile`}
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          )}
        </div>

        {/* Member Info */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
            {member.name}
          </h3>
          
          <div className="flex items-center gap-2 text-sm text-neutral-600 mb-3">
            <span>{member.year}</span>
            <span>•</span>
            <span>{member.course}</span>
          </div>

          <p className="text-neutral-600 leading-relaxed text-sm">
            {member.bio}
          </p>
        </div>
      </Card>
    </motion.div>
  )
}
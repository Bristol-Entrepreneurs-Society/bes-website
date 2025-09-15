'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface FilterTabsProps {
  activeFilter: string
  onFilterChange: (filter: string) => void
}

const filters = [
  { id: 'all', label: 'All Events', count: 11 },
  { id: 'talks', label: 'Founder Talks', count: 4 },
  { id: 'workshops', label: 'Workshops', count: 5 },
  { id: 'networking', label: 'Networking', count: 2 },
]

export function FilterTabs({ activeFilter, onFilterChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {filters.map((filter) => (
        <motion.div
          key={filter.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant={activeFilter === filter.id ? 'default' : 'outline'}
            onClick={() => onFilterChange(filter.id)}
            className={`relative transition-all duration-300 ${
              activeFilter === filter.id
                ? 'bg-gradient-to-r from-primary to-red-600 text-white shadow-lg'
                : 'hover:border-primary hover:text-primary'
            }`}
          >
            {filter.label}
            <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
              activeFilter === filter.id
                ? 'bg-white/20 text-white'
                : 'bg-neutral-100 text-neutral-600'
            }`}>
              {filter.count}
            </span>
          </Button>
        </motion.div>
      ))}
    </div>
  )
}
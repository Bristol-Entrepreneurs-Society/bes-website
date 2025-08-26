import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
  href?: string
}

export function Card({ children, className, as: Component = 'div', href }: CardProps) {
  const baseClasses = cn(
    'group relative overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-200',
    'hover:shadow-medium hover:-translate-y-1',
    className
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.div
      className={baseClasses}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  )
} 
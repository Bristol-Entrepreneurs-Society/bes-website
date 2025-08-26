import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { forwardRef } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, ...props }, ref) => {
    const baseClasses = cn(
      'inline-flex items-center justify-center rounded-2xl font-medium transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      {
        'bg-primary text-white hover:bg-primary-dark': variant === 'primary',
        'bg-slate-100 text-slate-900 hover:bg-slate-200': variant === 'secondary',
        'border border-slate-300 bg-transparent text-slate-700 hover:bg-slate-50': variant === 'outline',
        'text-slate-700 hover:bg-slate-100': variant === 'ghost',
      },
      {
        'h-8 px-3 text-sm': size === 'sm',
        'h-10 px-4 py-2': size === 'md',
        'h-12 px-6 text-lg': size === 'lg',
      },
      className
    )

    return (
      <motion.button
        className={baseClasses}
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button } 
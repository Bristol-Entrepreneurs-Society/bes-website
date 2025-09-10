'use client'

import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export function Container({ children, className, as: Component = 'div' }: ContainerProps) {
  return (
    <Component className={cn('mx-auto max-w-7xl container-padding', className)}>
      {children}
    </Component>
  )
} 
export function Section({ children }: { children: React.ReactNode }) {
  return <section className="mx-auto max-w-7xl container-padding">{children}</section>
}

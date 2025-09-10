'use client'

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-primary text-white shadow-lg hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5",
        destructive: "bg-red-500 text-white shadow-lg hover:bg-red-500/90 hover:shadow-xl hover:-translate-y-0.5",
        outline: "border border-neutral-200 bg-white shadow-sm hover:bg-neutral-50 hover:shadow-md hover:-translate-y-0.5 text-neutral-900",
        secondary: "bg-neutral-100 text-neutral-900 shadow-sm hover:bg-neutral-200 hover:shadow-md hover:-translate-y-0.5",
        ghost: "hover:bg-neutral-100 hover:text-neutral-900 transition-colors",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-primary to-red-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:from-primary/90 hover:to-red-600/90",
        glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg hover:bg-white/20 hover:shadow-xl hover:-translate-y-0.5",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-lg px-3 text-xs",
        lg: "h-12 rounded-xl px-8 text-base font-semibold",
        xl: "h-14 rounded-xl px-10 text-lg font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
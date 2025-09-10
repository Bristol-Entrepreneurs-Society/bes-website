'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, ...props }, ref) => {
    const [focused, setFocused] = React.useState(false)
    const [hasValue, setHasValue] = React.useState(false)

    React.useEffect(() => {
      setHasValue(!!props.value || !!props.defaultValue)
    }, [props.value, props.defaultValue])

    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0 focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-red-300 focus-visible:ring-red-500",
            label && "pt-6",
            className
          )}
          ref={ref}
          onFocus={(e) => {
            setFocused(true)
            props.onFocus?.(e)
          }}
          onBlur={(e) => {
            setFocused(false)
            setHasValue(!!e.target.value)
            props.onBlur?.(e)
          }}
          onChange={(e) => {
            setHasValue(!!e.target.value)
            props.onChange?.(e)
          }}
          {...props}
        />
        {label && (
          <label
            className={cn(
              "absolute left-4 transition-all duration-300 pointer-events-none text-neutral-500",
              focused || hasValue
                ? "top-2 text-xs text-primary"
                : "top-1/2 -translate-y-1/2 text-sm"
            )}
          >
            {label}
          </label>
        )}
        {error && (
          <p className="mt-1 text-xs text-red-600">{error}</p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
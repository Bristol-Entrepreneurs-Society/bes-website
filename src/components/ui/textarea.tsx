'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, ...props }, ref) => {
    const [focused, setFocused] = React.useState(false)
    const [hasValue, setHasValue] = React.useState(false)

    React.useEffect(() => {
      setHasValue(!!props.value || !!props.defaultValue)
    }, [props.value, props.defaultValue])

    return (
      <div className="relative">
        <textarea
          className={cn(
            "flex min-h-[120px] w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm transition-all duration-300 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0 focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 resize-none",
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
                : "top-6 text-sm"
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
Textarea.displayName = "Textarea"

export { Textarea }
'use client'
import React, { createContext, useContext, useState } from 'react'

type UiCtx = { open: boolean; setOpen: (v: boolean) => void }
const UiContext = createContext<UiCtx | null>(null)

export default function UiProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return <UiContext.Provider value={{ open, setOpen }}>{children}</UiContext.Provider>
}

export function useUi() {
  const ctx = useContext(UiContext)
  if (!ctx) throw new Error('useUi must be used within UiProvider')
  return ctx
}



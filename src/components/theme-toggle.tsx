"use client"

import * as React from "react"
import { Palette } from "lucide-react"

export function ThemeToggle() {
  return (
    <button
      className="inline-flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-tertiary-light text-primary-dark hover:text-secondary-gray"
      aria-label="Theme indicator"
    >
      <Palette className="h-5 w-5" />
    </button>
  )
}

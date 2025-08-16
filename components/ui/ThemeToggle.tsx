'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Moon } from 'lucide-react'
import { useTheme } from '@/components/providers/ThemeProvider'

export default function ThemeToggle() {
  const { theme, resolvedTheme } = useTheme()

  return (
    <div className="flex items-center bg-gray-800 rounded-full p-2">
      <div className="flex items-center gap-1.5 px-3 py-1.5 text-white">
        <Moon className="w-4 h-4" />
        <span className="hidden sm:inline text-sm font-medium">Dark</span>
      </div>
    </div>
  )
} 
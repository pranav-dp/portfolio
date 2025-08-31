'use client'

import { ThemeProvider } from '../context/ThemeContext'
import Navbar from './Navbar'
import { GradientBackground } from './GradientBackground'

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <GradientBackground />
      <Navbar />
      {children}
    </ThemeProvider>
  )
}

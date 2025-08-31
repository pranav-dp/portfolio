"use client"

import { useEffect, useState } from "react"
import { GrainGradient } from "@paper-design/shaders-react"
import { useTheme } from "../context/ThemeContext"

export function GradientBackground() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          background: 'linear-gradient(135deg, rgba(60, 120, 255, 0.20) 0%, rgba(80, 140, 255, 0.14) 100%)'
        }}
      />
    )
  }

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1
      }}
    >
      <GrainGradient
        key={theme} // Force re-render when theme changes
        style={{ height: "100%", width: "100%" }}
        colorBack={theme === 'light' ? "hsl(212, 80%, 96%)" : "hsl(0, 0%, 2%)"}
        softness={0.76}
        intensity={0.45}
        noise={0}
        shape="corners"
        offsetX={0}
        offsetY={0}
        scale={1}
        rotation={0}
        speed={1}
        colors={theme === 'light' 
          ? [
              "hsl(215, 85%, 90%)",
              "hsl(212, 80%, 82%)",
              "hsl(210, 75%, 74%)"
            ]
          : ["hsl(193, 85%, 66%)", "hsl(196, 100%, 83%)", "hsl(195, 100%, 50%)"]}
      />
    </div>
  )
}

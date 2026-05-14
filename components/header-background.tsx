'use client'

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion"
import { useEffect, useRef } from "react"

export function HeaderBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth mouse movement
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      // Normalize to -0.5 to 0.5
      mouseX.set((clientX / innerWidth) - 0.5)
      mouseY.set((clientY / innerHeight) - 0.5)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  // Parallax shifts for different layers
  const layer1X = useTransform(springX, (v) => v * 100)
  const layer1Y = useTransform(springY, (v) => v * 100)
  
  const layer2X = useTransform(springX, (v) => v * -150)
  const layer2Y = useTransform(springY, (v) => v * -150)
  
  const layer3X = useTransform(springX, (v) => v * 50)
  const layer3Y = useTransform(springY, (v) => v * 50)

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-[-1]">
      {/* Base Grid - even more subtle */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} 
      />

      {/* Layer 1: Large Ambient Glow (Primary Color) */}
      <motion.div
        style={{ x: layer1X, y: layer1Y }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/20 blur-[120px]"
      />

      {/* Layer 2: Deep Contrast (Deep Blue/Teal) */}
      <motion.div
        style={{ x: layer2X, y: layer2Y }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-blue-600/10 blur-[150px]"
      />

      {/* Layer 3: Floating Accent Orbs */}
      <motion.div
        style={{ x: layer3X, y: layer3Y }}
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[20%] right-[15%] w-32 h-32 rounded-full bg-primary/30 blur-[60px]"
      />

      <motion.div
        animate={{
          y: [0, 50, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-[30%] left-[20%] w-48 h-48 rounded-full bg-primary/10 blur-[80px]"
      />

      {/* Vignette Overlay to focus attention on center */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)'
        }}
      />
    </div>
  )
}

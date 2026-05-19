"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState, useRef, useEffect } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

interface BookCallButtonProps {
  variant?: "default" | "outline" | "ghost" | "premium"
  size?: "default" | "sm" | "lg"
  className?: string
  text?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export function BookCallButton({ 
  variant = "default", 
  size = "default",
  className,
  text = "Book a call",
  onClick
}: BookCallButtonProps) {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "#"
  const buttonRef = useRef<HTMLButtonElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 15, stiffness: 150 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e: MouseEvent) => {
    if (!buttonRef.current) return
    
    const { clientX, clientY } = e
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect()
    
    const centerX = left + width / 2
    const centerY = top + height / 2
    
    const distanceX = clientX - centerX
    const distanceY = clientY - centerY
    
    // Magnetic pull radius
    const radius = 100
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)
    
    if (distance < radius) {
      // Pull intensity
      const force = 0.3
      x.set(distanceX * force)
      y.set(distanceY * force)
    } else {
      x.set(0)
      y.set(0)
    }
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e)
      return
    }
    if (calendlyUrl && calendlyUrl !== "#") {
      window.open(calendlyUrl, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <motion.button
      ref={buttonRef}
      style={{ x: springX, y: springY }}
      onClick={handleClick}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-300 rounded-md",
        size === "default" && "h-10 px-4 py-2",
        size === "sm" && "h-9 rounded-md px-3",
        size === "lg" && "h-11 rounded-md px-8",
        variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/90",
        variant === "premium" && "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_-5px_var(--color-primary)] animate-pulse hover:animate-none",
        variant === "outline" && "border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary",
        className
      )}
    >
      <Calendar className="h-4 w-4" />
      {text}
    </motion.button>
  )
}

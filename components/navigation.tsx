"use client"

import { useState, useEffect } from "react"
import { BookCallButton } from "@/components/book-call-button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)

      // Detect active section
      const sections = navLinks.map(link => link.href.substring(1))
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const offset = 80 // Offset for sticky header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "glass py-4 shadow-lg shadow-black/20" 
          : "bg-transparent py-6"
      )}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between max-w-6xl">
        <a 
          href="#" 
          className="font-serif text-xl font-semibold text-foreground hover:text-primary transition-colors"
        >
          Ralf Hillebrand
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mr-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Available for Q4</span>
          </div>
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1)
            const isActive = activeSection === sectionId
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "text-sm font-medium transition-all relative px-1 py-2",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
                {isActive && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/50 to-primary rounded-full" />
                )}
              </button>
            )
          })}
          <BookCallButton variant="premium" size="sm" text="Let's work together" />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-primary/30 w-full overflow-hidden">
        <div 
          className="h-full bg-primary transition-all duration-100 ease-out" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-xl p-6 shadow-2xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-muted-foreground hover:text-foreground transition-colors text-left py-2 font-medium"
              >
                {link.label}
              </button>
            ))}
            <BookCallButton variant="premium" size="default" className="mt-2 w-full" text="Let's work together" />
          </div>
        </div>
      )}
    </header>
  )
}

'use client'

import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, CheckCircle2, Zap, TrendingUp, BarChart3, Layout, MessageSquare } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

interface ProjectExpandedViewProps {
  project: {
    id: string
    title: string
    description: string
    image: string
    url?: string
    metric?: string
    category: string
    details?: {
      challenge: string
      solution: string
      results: string[]
    }
  } | null
  onClose: () => void
}

export function ProjectExpandedView({ project, onClose }: ProjectExpandedViewProps) {
  // Prevent scrolling when expanded
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [project])

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-xl"
          />

          {/* Expanded Content */}
          <motion.div
            layoutId={`card-${project.id}`}
            className="relative w-full max-w-5xl max-h-[90vh] bg-card border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row"
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            {/* Visual Side (Left/Top) */}
            <div className="md:w-1/2 relative bg-muted overflow-hidden">
              <motion.div 
                layoutId={`image-${project.id}`}
                className="h-full w-full"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </motion.div>
              
              {/* Floating Badge in Expanded View */}
              {project.metric && (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-8 left-8 bg-primary px-4 py-2 rounded-xl text-primary-foreground font-bold flex items-center gap-2 shadow-xl shadow-primary/20"
                >
                  <TrendingUp className="w-5 h-5" />
                  {project.metric}
                </motion.div>
              )}

              {/* Close Button Mobile */}
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 md:hidden p-2 rounded-full bg-black/50 backdrop-blur-md text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content Side (Right/Bottom) */}
            <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto custom-scrollbar bg-card/50 backdrop-blur-sm">
              {/* Close Button Desktop */}
              <button 
                onClick={onClose}
                className="hidden md:flex absolute top-8 right-8 p-2 rounded-full hover:bg-white/5 transition-colors text-muted-foreground hover:text-foreground"
              >
                <X className="w-6 h-6" />
              </button>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2 block">
                  {project.category}
                </span>
                <motion.h2 
                  layoutId={`title-${project.id}`}
                  className="font-serif text-4xl font-bold text-foreground mb-6"
                >
                  {project.title}
                </motion.h2>

                <div className="space-y-10">
                  {/* Stats Grid (Dummy Data) */}
                  <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/5">
                    <div className="text-center">
                      <BarChart3 className="w-5 h-5 text-primary mx-auto mb-2 opacity-60" />
                      <div className="text-xl font-bold text-foreground">2.4x</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">ROI Lift</div>
                    </div>
                    <div className="text-center border-x border-white/5">
                      <Layout className="w-5 h-5 text-primary mx-auto mb-2 opacity-60" />
                      <div className="text-xl font-bold text-foreground">12</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Assets</div>
                    </div>
                    <div className="text-center">
                      <MessageSquare className="w-5 h-5 text-primary mx-auto mb-2 opacity-60" />
                      <div className="text-xl font-bold text-foreground">4wk</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Duration</div>
                    </div>
                  </div>

                  <section>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" /> The Challenge
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.details?.challenge || "Solving complex engagement hurdles by implementing AI-driven personalization and high-performance content strategies."}
                    </p>
                  </section>

                  <section>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-3">Key Results</h3>
                    <div className="grid gap-3">
                      {(project.details?.results || [
                        "Optimized conversion rate by 24%",
                        "Automated 80% of repetitive workflows",
                        "Achieved consistent brand voice across all channels"
                      ]).map((result, idx) => (
                        <div key={idx} className="flex gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-sm text-foreground/90 font-medium">{result}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Dummy Asset Gallery Section */}
                  <section>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-4">Project Assets</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="aspect-square bg-muted rounded-xl border border-white/5 overflow-hidden relative group">
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="text-[10px] font-bold uppercase">View Email</span>
                        </div>
                      </div>
                      <div className="aspect-square bg-muted rounded-xl border border-white/5 overflow-hidden relative group">
                         <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="text-[10px] font-bold uppercase">View Flow</span>
                        </div>
                      </div>
                    </div>
                  </section>

                  {project.url && (
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold w-full hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
                    >
                      Visit Project
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

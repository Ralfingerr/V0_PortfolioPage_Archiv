'use client'

import { GlassCard } from "@/components/glass-card"
import { BookCallButton } from "@/components/book-call-button"
import { ArrowUpRight, Award, ExternalLink, Filter, TrendingUp, Search } from "lucide-react"
import Image from "next/image"
import { useState, useMemo, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

import { ProjectSidePanel } from "@/components/project-side-panel"

const CATEGORIES = ["All", "Websites & Content", "Emails & Ads", "Automation", "Certificates"]

const portfolioItems = [
  {
    id: "p1",
    type: "Websites & Content",
    category: "Websites & Content",
    title: "Biotheke",
    description: "Organic meat e-commerce store with email marketing automation and customer retention flows.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-bio-theke-de-2026-03-20-14_25_42.png-wXgmtroSThY1LVzO6WUDSOiFGnhELj.jpeg",
    url: "https://bio-theke.de",
    metric: "+45% Retention",
    highlight: true,
    details: {
      challenge: "High customer acquisition costs with low repeat purchase rates in the organic fresh food niche.",
      solution: "Building a post-purchase automation ecosystem that educates customers on quality while offering timely subscriptions.",
      results: [
        "Boosted customer retention rate by 45% within 6 months.",
        "Created 3 automated segment flows tailored to seasonal meat preferences.",
        "Email marketing now accounts for 28% of total monthly revenue."
      ]
    }
  },
  {
    id: "p2",
    type: "Websites & Content",
    category: "Websites & Content",
    title: "maleup",
    description: "Men's skincare brand with AI-powered content and email sequences driving repeat purchases.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-maleup-de-products-instant-repair-2026-03-11-21_15_11.png-pl05vIQdN6fBUvJ2shInM4YWTBCgI1.jpeg",
    url: "https://maleup.de",
    metric: "40%+ Repeat Orders",
    highlight: true,
    details: {
      challenge: "Men's skincare is highly transactional; the brand struggled to build a loyal 'routine-based' community.",
      solution: "AI-powered replenishment flows based on product usage time and personalized skincare quiz content.",
      results: [
        "40%+ Increase in repeat purchase orders over 4 months.",
        "Successfully implemented an AI quiz-to-upsell flow converting at 18%.",
        "Redesign of transactional emails improved brand sentiment (NPS lift)."
      ]
    }
  },
  {
    id: "p3",
    type: "Emails & Ads",
    category: "Emails & Ads",
    title: "Buffalo Jerky",
    description: "Sustainable protein snacks with automated marketing campaigns and Black Friday strategies.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-buffalo-jerky.de.png-Mnpqh5rMywzBNzr5RVJdXMuaArRaSD.jpeg",
    url: "https://buffalo-jerky.de",
    metric: "+774% YoY ROI",
    highlight: false,
    details: {
      challenge: "Scaling sales during peak holiday periods without relying solely on deep discounting.",
      solution: "A 'Value-First' Black Friday strategy combining education, scarcity, and automated VIP early access.",
      results: [
        "Generated €40k+ revenue during Black Friday weekend.",
        "Email channel ROI increased by 774% year-over-year.",
        "Highest engagement rate in brand history (52% open rate)."
      ]
    }
  },
  {
    id: "p4",
    type: "Automation",
    category: "Automation",
    title: "AI Workflow Integration",
    description: "Custom AI-driven automation for content creation and distribution workflows.",
    image: "/images/portfolio/automation-new.jpg",
    metric: "80% Time Saved",
    highlight: false,
    details: {
      challenge: "Manual content distribution across multiple channels was consuming 20+ hours per week.",
      solution: "Building an AI-powered automation that formats, schedules, and adapts content for each platform automatically.",
      results: [
        "Reduced weekly manual work by 80%.",
        "Increased posting frequency by 3x.",
        "Improved consistency across all digital touchpoints."
      ]
    }
  },
  {
    id: "p5",
    type: "Emails & Ads",
    category: "Emails & Ads",
    title: "Gmail Campaign Suite",
    description: "Highly optimized Gmail-native email designs for maximum deliverability and engagement.",
    image: "/images/portfolio/screencapture-mail-google-mail-u-3-2026-05-11-12_00_54.png",
    metric: "99% Deliverability",
    highlight: false,
    details: {
      challenge: "Low deliverability rates and poor rendering across different email clients.",
      solution: "Development of a lightweight, Gmail-optimized template system focused on text-to-image ratios.",
      results: [
        "Consistent 99%+ deliverability rates.",
        "Increased click-through rates by 15% through cleaner design.",
        "Zero reported rendering issues in Gmail mobile app."
      ]
    }
  },
  {
    id: "p6",
    type: "Emails & Ads",
    category: "Emails & Ads",
    title: "Black Friday Campaign",
    description: "Strategic Black Friday email campaign with high-converting layouts and urgency-driven design.",
    image: "/images/portfolio/BlackFriday_EmailKampagne.png",
    metric: "+120% Sales Lift",
    highlight: false,
    details: {
      challenge: "Cutting through the noise of the busiest shopping weekend of the year.",
      solution: "A multi-stage email sequence using dynamic countdown timers and personalized offer blocks.",
      results: [
        "120% lift in sales compared to previous year.",
        "Highest single-day revenue in brand history.",
        "Average open rate of 42% throughout the campaign."
      ]
    }
  },
  {
    id: "p7",
    type: "Emails & Ads",
    category: "Emails & Ads",
    title: "Meta Ads & Email Synergy",
    description: "Integrated paid social and retention marketing campaign driving record ROI for a D2C jewelry brand.",
    image: "/images/portfolio/google-analytics.png",
    metric: "+320% Combined ROAS",
    highlight: true,
    details: {
      challenge: "High cost-per-acquisition on Meta Ads and disconnected customer retention efforts.",
      solution: "Aligning creative assets between Facebook Ads and Email flows, using Meta data to trigger personalized email sequences.",
      results: [
        "320% increase in combined ROAS within 90 days.",
        "Halved customer acquisition costs through better retention loop.",
        "Email revenue share increased from 15% to 35%."
      ]
    }
  },
  {
    id: "c5",
    type: "Certificates",
    category: "Certificates",
    title: "Klaviyo Product Certificate",
    issuer: "Klaviyo Academy",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/klavyio_certificate-nAxf7lBBmUD5DAOhoA5EFfQI0SLsa3.png",
  },
  {
    id: "c1",
    type: "Certificates",
    category: "Certificates",
    title: "HubSpot E-Mail Marketing",
    issuer: "HubSpot Academy",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e-mail_marketing_certificate-cawMJhNNd2PzSYRhTLvSyVANtFlYBR.jpg",
  },
  {
    id: "c2",
    type: "Certificates",
    category: "Certificates",
    title: "Content Marketing",
    issuer: "HubSpot Academy",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hubspot_content_marketing_certificate-I4CVmxZ5QeFAVO1QWIHpPjg9VgmSLP.jpg",
  },
  {
    id: "c3",
    type: "Certificates",
    category: "Certificates",
    title: "Advanced Email Marketing",
    issuer: "Simplilearn SkillUp",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/advanced_email_marketing_certificate-mfK7DniRzo2HjsSTKKK1Edihqp4oG5.jpg",
  },
  {
    id: "c4",
    type: "Certificates",
    category: "Certificates",
    title: "Mailchimp Email Campaigns",
    issuer: "Coursera",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/advanced_email_marketing_certificate_mailchimp-XHI1eii9UG0mTTTpAilegep5lFmvfi.jpg",
  },
]

export function BentoGrid() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [showAll, setShowAll] = useState(false)
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<typeof portfolioItems[0] | null>(null)

  // Reset showAll when filter changes
  useEffect(() => {
    setShowAll(false)
  }, [activeFilter])

  const filteredItems = useMemo(() => {
    let items = portfolioItems
    if (activeFilter !== "All") {
      items = portfolioItems.filter(item => item.category === activeFilter)
    }
    
    // Apply "See More" logic only when "All" is selected
    if (activeFilter === "All" && !showAll) {
      return items.slice(0, 6)
    }
    
    return items
  }, [activeFilter, showAll])

  const hasMore = activeFilter === "All" && portfolioItems.length > 6 && !showAll

  return (
    <section id="work" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Portfolio
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground mb-12">
            Selected Work & Expertise
          </h2>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all border",
                  activeFilter === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                    : "bg-muted/50 text-muted-foreground border-transparent hover:border-primary/30 hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  item.highlight && activeFilter === "All" ? "md:col-span-2 lg:col-span-2" : ""
                )}
              >
                <GlassCard 
                  className="h-full overflow-hidden group flex flex-col cursor-pointer"
                  hover
                  onClick={() => {
                    if (item.category === "Certificates") {
                      setSelectedCertificate(item.id)
                    } else {
                      setSelectedProject(item)
                    }
                  }}
                >
                  <div className={cn(
                    "relative overflow-hidden bg-muted",
                    item.category === "Certificates" ? "aspect-[4/3] p-4 bg-white/5" : "aspect-video"
                  )}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className={cn(
                        "transition-transform duration-700 group-hover:scale-105",
                        item.category === "Certificates" ? "object-contain p-4" : "object-cover object-top"
                      )}
                    />
                    
                    {/* Metric Badge */}
                    {item.metric && (
                      <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2 shadow-xl">
                        <TrendingUp className="w-3 h-3 text-primary-foreground" />
                        <span className="text-xs font-bold text-primary-foreground">{item.metric}</span>
                      </div>
                    )}

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-white/80">{item.type}</span>
                    </div>

                    {/* Hover Overlay for Projects */}
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none group-hover:pointer-events-auto"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                          <span>Visit Site</span>
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </a>
                    )}

                    {/* Quick View for Certificates */}
                    {item.category === "Certificates" && (
                      <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <Search className="w-8 h-8 text-white/50" />
                      </div>
                    )}
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className={cn(
                        "font-serif font-semibold text-foreground leading-tight",
                        item.highlight && activeFilter === "All" ? "text-2xl" : "text-xl"
                      )}>
                        {item.title}
                      </h3>
                      {item.url && <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />}
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {item.description || (item.issuer && `Certified by ${item.issuer}`)}
                    </p>
                    
                    {item.issuer && (
                      <div className="mt-auto pt-4 border-t border-white/5 flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary/60" />
                        <span className="text-xs text-muted-foreground font-medium">{item.issuer}</span>
                      </div>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* See More Button */}
        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all font-medium flex items-center gap-2"
            >
              See More Projects
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Certificate Modal */}
        <AnimatePresence>
          {selectedCertificate && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-md p-4"
              onClick={() => setSelectedCertificate(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={portfolioItems.find(c => c.id === selectedCertificate)?.image || ''}
                    alt="Certificate"
                    fill
                    className="object-contain p-8"
                  />
                </div>
                <button 
                  className="absolute -top-12 right-0 md:-right-12 text-white hover:text-primary transition-colors text-4xl"
                  onClick={() => setSelectedCertificate(null)}
                >
                  &times;
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="text-center mt-20">
          <p className="text-muted-foreground mb-8 text-lg">
            Ready to scale your revenue?
          </p>
          <BookCallButton size="lg" className="px-10 h-14 text-lg" />
        </div>

        <ProjectSidePanel 
          isOpen={!!selectedProject} 
          onClose={() => setSelectedProject(null)} 
          project={selectedProject} 
        />
      </div>
    </section>
  )
}

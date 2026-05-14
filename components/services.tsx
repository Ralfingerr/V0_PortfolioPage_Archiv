'use client'

import { GlassCard } from "./glass-card"
import { Sparkles, ShoppingBag, Mail, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    title: "1. AI Content Systems",
    description: "Turn content creation from a bottleneck into a scalable system.",
    icon: <Sparkles className="w-6 h-6 text-primary" />,
    items: [
      "AI-assisted content pipelines",
      "SEO article generation",
      "Social media workflows",
      "Product description systems",
      "Multi-platform content distribution",
      "Content repurposing automations"
    ]
  },
  {
    title: "2. Shopify & E-Commerce Automation",
    description: "Reduce repetitive manual work and streamline operations.",
    icon: <ShoppingBag className="w-6 h-6 text-primary" />,
    items: [
      "Shopify workflow automation",
      "Inventory & order systems",
      "Customer communication flows",
      "Internal dashboards",
      "Reporting automations",
      "API integrations",
      "Custom operational workflows"
    ]
  },
  {
    title: "3. Email Marketing Automation",
    description: "Build automated email systems that increase retention, recover lost revenue, and reduce manual campaign work.",
    icon: <Mail className="w-6 h-6 text-primary" />,
    items: [
      "Welcome flows",
      "Abandoned cart automations",
      "Post-purchase sequences",
      "Customer win-back campaigns",
      "AI-assisted email copy generation",
      "Segmentation workflows",
      "Klaviyo automation systems",
      "Shopify email integrations"
    ]
  }
]

export function Services() {
  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Expertise
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Services
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col p-8 md:p-10 group hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-auto space-y-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary/80">
                    Includes:
                  </p>
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import Image from "next/image"
import { Trophy, Clock, ShieldCheck, Mail, Target, ArrowRight } from "lucide-react"

export function About() {
  const highlights = [
    { icon: <Trophy className="h-5 w-5" />, label: "20+ clients supported" },
    { icon: <Clock className="h-5 w-5" />, label: "5+ years experience" },
    { icon: <ShieldCheck className="h-5 w-5" />, label: "Certified Expert" },
  ]

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            About Me
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6 text-balance">
            Automation + Content for Online Businesses
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
        </div>

        {/* Experience Highlights - Horizontal */}
        <div className="flex flex-wrap gap-4 mb-16">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/30 transition-all group"
            >
              <div className="text-primary group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <span className="text-sm font-medium text-foreground/80 whitespace-nowrap">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Profile Photo Area */}
          <div className="md:col-span-4 flex flex-col gap-8">
            <div 
              className="rounded-2xl overflow-hidden w-full aspect-[4/5] flex-shrink-0 relative group shadow-2xl shadow-black/40"
              style={{
                background: 'rgba(30, 27, 26, 0.6)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '1px',
              }}
            >
              <Image
                src="/images/profile-new.jpg"
                alt="Ralf Hillebrand"
                width={400}
                height={500}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-8">
            <div className="space-y-8 max-w-2xl">
              <p className="text-foreground text-2xl font-medium leading-tight">
                I&apos;m Ralf Hillebrand – Building high-leverage systems for modern E-commerce.
              </p>
              
              <div className="space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I help Shopify and DTC brands solve the bottleneck of manual operations and slow content production. By building intelligent AI systems, I help you scale without adding more overhead or complexity.
                </p>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  From automated content pipelines to custom Shopify workflows, I ensure your business runs 24/7 on autopilot, allowing you to focus on strategy and growth.
                </p>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  My approach combines data-driven marketing with cutting-edge automation tools like n8n and AI models to create systems that are not only efficient but also highly effective at driving revenue.
                </p>
              </div>

              <div className="pt-8 border-t border-white/5">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Let&apos;s build your system
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

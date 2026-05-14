import { BookCallButton } from "@/components/book-call-button"
import { Typewriter } from "@/components/typewriter"
import { GradientSweep } from "@/components/gradient-sweep"
import { HeaderBackground } from "@/components/header-background"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      <HeaderBackground />
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <p className="text-primary font-medium tracking-wide uppercase text-sm mb-6 animate-fade-in">
          E-Mail Marketing, Automation and Content powered by AI
        </p>
        
        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-semibold text-foreground leading-tight mb-8 text-balance">
          <GradientSweep>
            <Typewriter 
              text="AI Automation + Content for E-Commerce businesses" 
              speed={40}
              delay={200}
            />
          </GradientSweep>
        </h1>
        
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed text-pretty">
          I help Shopify and DTC brands to eliminate manual tasks, scale content production, and increase revenue through AI and automation systems.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <BookCallButton variant="premium" size="lg" className="px-10 h-16 text-lg" text="Let's work together" />
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-xs text-muted-foreground mb-1 font-medium">Can&apos;t decide yet?</span>
            <a 
              href="#work" 
              className="group flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors font-medium border-b border-white/10 hover:border-primary/40 pb-1"
            >
              See my portfolio first
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* New "What this looks like" Section */}
        <div className="max-w-3xl mx-auto text-left bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
          <p className="text-xl md:text-2xl font-medium mb-8 text-foreground leading-relaxed">
            Instead of hiring more people to manage repetitive work, I build systems that handle it automatically.
          </p>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 mb-8">
            {[
              "AI-powered content workflows",
              "Shopify automations",
              "Email marketing automation",
              "SEO & article generation pipelines",
              "Conversion-focused landing pages",
              "AI customer support systems",
              "Internal dashboards & reporting",
              "Custom workflow automation with n8n"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span className="text-muted-foreground text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-white/5 text-center">
            <p className="text-primary font-semibold tracking-tight text-lg">
              Built for brands that want leverage, not more complexity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

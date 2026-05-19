import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { BentoGrid } from "@/components/bento-grid"
import { Testimonials } from "@/components/testimonials"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"

import { TrustSignals } from "@/components/trust-signals"
import { Atmosphere } from "@/components/atmosphere"
import { CertificatesOverview } from "@/components/certificates-overview"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Atmosphere />
      <FloatingElements />
      <Navigation />
      
      <section id="hero">
        <Hero />
      </section>

      <div className="section-divider" />
      <TrustSignals />

      <div className="section-divider" />

      <section id="about" className="bg-alternate">
        <About />
      </section>

      <div className="section-divider" />

      <section id="services">
        <Services />
      </section>

      <div className="section-divider" />

      <section id="work" className="bg-alternate">
        <BentoGrid />
      </section>

      <CertificatesOverview />

      <div className="section-divider" />

      <section id="testimonials">
        <Testimonials />
      </section>

      <div className="section-divider" />

      <section id="contact" className="bg-alternate">
        <ContactSection />
      </section>

      <Footer />
    </main>
  )
}

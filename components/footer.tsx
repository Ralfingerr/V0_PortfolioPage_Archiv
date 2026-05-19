import { Mail, MapPin, Phone, Linkedin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/40 border-t border-white/10 py-16 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
              Ralf Hillebrand
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              AI Automation + Content for Shopify and DTC brands. Scale operations, automate content, and increase revenue through intelligent systems.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Kontakt</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Email</p>
                  <a 
                    href="mailto:ralf@ralfhillebrand.de"
                    className="text-foreground hover:text-primary transition-colors text-sm"
                  >
                    ralf@ralfhillebrand.de
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Adresse</p>
                  <p className="text-foreground text-sm">
                    Zu den Neuen Wiesen 5, 35644 Hohenahr
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Legal & Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Legal</h4>
            <div className="space-y-3">
              <a 
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors text-sm block"
              >
                Impressum
              </a>
              <a 
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors text-sm block"
              >
                Datenschutz
              </a>
              <a 
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors text-sm block"
              >
                AGB
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          {/* Tax/Business Info */}
          <div className="mb-8 pb-8 border-b border-white/10">
            <h4 className="font-semibold text-foreground mb-4 text-sm">Geschäftsinformationen</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>
                <p className="text-xs text-foreground/60 uppercase tracking-wide mb-1">Steuernummer</p>
                <p>XX XXX XXXXXX</p>
              </div>
              <div>
                <p className="text-xs text-foreground/60 uppercase tracking-wide mb-1">USt-IdNr</p>
                <p>DE XXXXXXXXX</p>
              </div>
            </div>
          </div>

          {/* Copyright & Credits */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              &copy; {currentYear} Ralf Hillebrand. Alle Rechte vorbehalten.
            </p>
            <p className="text-muted-foreground text-xs">
              Designed &amp; Built with Purpose
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

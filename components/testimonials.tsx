import { GlassCard } from "@/components/glass-card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    quote: "Working with Ralf was a great experience. He quickly got up to speed on a new and complex topic, delivered high-quality writing, and communicated clearly throughout the project. I especially appreciated his fast replies, thoughtful questions, and reliability in meeting deadlines. Last but not least, he was open to feedback and adapted quickly, which made collaboration effortless. I'll happily work with him again and certainly recommend him!",
    name: "Sören",
    company: "Go Vocal",
    role: "CEO",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ralf_Profile-JqeusRMYfXP6HDW7xDDDh56iv8ody4.png", // Using Ralf's for now as fallback
    rating: 5,
  },
  {
    id: 2,
    quote: "Ich habe mit Ralf für ein HR-Content-Projekt zusammengearbeitet und kann ihn uneingeschränkt empfehlen. Er lieferte immer zuverlässig qualitativen Content, der überzeugte und über die Vorgaben hinaus performte.",
    name: "Dorothea",
    company: "Content Marketing Manager",
    role: "Content Marketing Manager",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ralf_Profile-JqeusRMYfXP6HDW7xDDDh56iv8ody4.png",
    rating: 5,
  },
  {
    id: 3,
    quote: "Working with Ralf was a game-changer for our Black Friday strategy. +774% YoY ROI from email marketing alone. Truly an automation architect.",
    name: "Founder",
    company: "Buffalo Jerky",
    role: "Operations Director",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ralf_Profile-JqeusRMYfXP6HDW7xDDDh56iv8ody4.png",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground mb-4">
            trusted by online businesses
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Helping brands scale through intelligent automation and personalized marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <GlassCard key={testimonial.id} className="p-8 flex flex-col relative group" hover>
              <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              {/* Star Rating */}
              <div className="flex gap-1 mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-primary fill-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-10 flex-1 text-lg italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="flex-grow">
                  <p className="font-bold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-primary text-sm font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}

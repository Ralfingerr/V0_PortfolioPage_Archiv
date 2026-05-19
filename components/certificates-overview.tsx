import Image from "next/image"

const certificates = [
  {
    id: "c5",
    title: "Klaviyo Product Certificate",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/klavyio_certificate-nAxf7lBBmUD5DAOhoA5EFfQI0SLsa3.png",
  },
  {
    id: "c1",
    title: "HubSpot E-Mail Marketing",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e-mail_marketing_certificate-cawMJhNNd2PzSYRhTLvSyVANtFlYBR.jpg",
  },
  {
    id: "c2",
    title: "Content Marketing",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hubspot_content_marketing_certificate-I4CVmxZ5QeFAVO1QWIHpPjg9VgmSLP.jpg",
  },
  {
    id: "c3",
    title: "Advanced Email Marketing",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/advanced_email_marketing_certificate-mfK7DniRzo2HjsSTKKK1Edihqp4oG5.jpg",
  },
  {
    id: "c4",
    title: "Mailchimp Email Campaigns",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/advanced_email_marketing_certificate_mailchimp-XHI1eii9UG0mTTTpAilegep5lFmvfi.jpg",
  },
]

export function CertificatesOverview() {
  return (
    <div className="w-full py-8">
      <div className="container mx-auto max-w-5xl px-6">
        <p className="text-center text-xs text-muted-foreground uppercase tracking-widest mb-6">
          Certifications
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {certificates.map((cert) => (
            <div key={cert.id} className="relative h-24 w-36 md:h-32 md:w-48 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 rounded-md overflow-hidden bg-white/5">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-contain p-2"
                title={cert.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

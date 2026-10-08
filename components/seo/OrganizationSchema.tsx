import { contact } from "@/lib/site"

/**
 * Organization y no LocalBusiness ni ProfessionalService: esos dos esperan una
 * dirección física, y Propus no tiene local abierto al público. Por eso aquí
 * no va `address` ni `geo` — solo el ámbito en el que trabaja.
 */
export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Propus",
    url: "https://propus.ink",
    logo: "https://propus.ink/favicons/android-chrome-512x512.png",
    description:
      "Desarrollo web, software a medida y automatización de procesos para empresas de Albacete y toda España.",
    areaServed: [
      { "@type": "City", name: "Albacete" },
      { "@type": "State", name: "Castilla-La Mancha" },
      { "@type": "Country", name: "España" },
    ],
    email: contact.email,
    telephone: contact.phone,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: contact.phone,
        email: contact.email,
        availableLanguage: ["es", "en"],
      },
    ],
    sameAs: [
      "https://www.instagram.com/propus_nation",
      "https://www.facebook.com/propusnation",
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

import { contact } from "@/lib/site"

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Propus",
    url: "https://propus.ink",
    logo: "https://propus.ink/favicons/android-chrome-512x512.png",
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

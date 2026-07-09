export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Propus",
    description:
      "Agencia de inteligencia artificial y automatización en Albacete",
    url: "https://propus.ink",
    email: "team@propus.ink",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Albacete",
      addressRegion: "Castilla-La Mancha",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.9942,
      longitude: -1.8585,
    },
    areaServed: [
      { "@type": "City", name: "Albacete" },
      { "@type": "State", name: "Castilla-La Mancha" },
      { "@type": "Country", name: "España" },
    ],
    serviceType: [
      "Inteligencia Artificial",
      "Automatización de procesos",
      "Desarrollo de aplicaciones con IA",
      "Agentes inteligentes",
    ],
    sameAs: [
      "https://www.instagram.com/propus_nation",
      "https://www.facebook.com/profile.php?id=61587772027579&locale=es_ES",
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface ServiceSchemaProps {
  name: string
  description: string
  serviceType: string
}

export default function ServiceSchema({ name, description, serviceType }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    provider: {
      "@type": "Organization",
      name: "Propus",
      url: "https://propus.ink",
    },
    areaServed: {
      "@type": "Country",
      name: "España",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

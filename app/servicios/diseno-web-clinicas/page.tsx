import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ServiceSchema from "@/components/seo/ServiceSchema"
import DisenoWebHero from "@/components/sections/servicios/DisenoWebHero"
import DisenoWebProblem from "@/components/sections/servicios/DisenoWebProblem"
import DisenoWebFeatures from "@/components/sections/servicios/DisenoWebFeatures"
import DisenoWebFAQ from "@/components/sections/servicios/DisenoWebFAQ"
import DisenoWebCTA from "@/components/sections/servicios/DisenoWebCTA"

export const metadata: Metadata = {
  title: "Diseño web para clínicas",
  description:
    "Diseñamos webs rápidas y optimizadas para SEO local que convierten visitas en primeras citas, con integración opcional del agente de WhatsApp para reservar directamente desde la página.",
  alternates: {
    canonical: "/servicios/diseno-web-clinicas",
  },
  openGraph: {
    title: "Diseño web para clínicas — Propus",
    description:
      "Webs para clínicas dentales, de estética y otros negocios de salud: rápidas, optimizadas para SEO local y listas para conectar con tu agente de WhatsApp.",
    type: "website",
    locale: "es_ES",
  },
}

export default function DisenoWebClinicasPage() {
  return (
    <>
      <ServiceSchema
        name="Diseño web para clínicas"
        description="Diseño de páginas web para clínicas dentales, de estética y otros negocios de salud, optimizadas para SEO local y con integración opcional del agente de WhatsApp para reservar citas."
        serviceType="Diseño y desarrollo web"
      />
      <Navbar />
      <main className="relative z-10">
        <DisenoWebHero />
        <DisenoWebProblem />
        <DisenoWebFeatures />
        <DisenoWebFAQ />
        <DisenoWebCTA />
      </main>
      <Footer />
    </>
  )
}

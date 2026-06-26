import type { Metadata } from "next"
import { MdDesignServices } from "react-icons/md"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ProjectsShowcase, { type ShowcaseProject } from "@/components/sections/ProjectsShowcase"

export const metadata: Metadata = {
  title: "Web Design — Propus | Landing pages a medida",
  description:
    "Selección de landing pages y diseños web creados por Propus: interfaces modernas, rápidas y orientadas a conversión para empresas de Albacete y toda España.",
  openGraph: {
    title: "Web Design — Propus | Landing pages a medida",
    description:
      "Selección de landing pages y diseños web creados por Propus.",
    type: "website",
    locale: "es_ES",
  },
}

const projects: ShowcaseProject[] = [
  {
    title: "El Rincón de Héctor",
    url: "https://elrincondehector.com",
    domain: "elrincondehector.com",
    description:
      "Sitio Web para restaurante local con carta dinámica, animación de producto estrella y branding personalizado. Estilo oscuro y cálido, responsive completo y SEO optimizado.",
    tags: ["Astro", "TailwindCSS", "Lucide Icons", "Estilos Custom"],
    image: "/img/landings/erdh-hero2.png",
  },
  {
    title: "El Casino",
    url: "https://casinoelbonillo.com",
    domain: "casinoelbonillo.com",
    description:
      "Web para restaurante tradicional con alma moderna en plena Plaza Mayor. Carta personalizada, secciones diversas (especialidades, novedades, reservas y ubicación) y una estética cálida y elegante con reserva de mesa integrada.",
    tags: ["Next.js", "TailwindCSS", "Carta dinámica", "Reservas"],
    image: "/img/landings/hero-casino.png",
  },
  {
    title: "Lío Music Pub",
    url: "https://liopub.com",
    domain: "liopub.com",
    description:
      "App/landing para local de ocio nocturno y copas. Incluye un concurso de fotos con feed social y sistema de likes para votar, pensado en mobile-first para enganchar a su público más joven.",
    tags: ["Astro", "Supabase", "Mobile First", "Feed social", "Concurso de fotos"],
    image: "/img/landings/hero-lio-mobile.png",
    orientation: "mobile",
    extraImages: ["/img/landings/nacion-section.png"],
  },
]

export default function WebDesignPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectsShowcase
          eyebrow="Web Design"
          icon={<MdDesignServices className="size-3.5" />}
          title="Landing pages que"
          highlight="impresionan"
          description="Diseñamos interfaces modernas, rápidas y a medida. Una selección de los sitios que hemos creado para nuestros clientes."
          projects={projects}
        />
      </main>
      <Footer />
    </>
  )
}

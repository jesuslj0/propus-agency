import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Component as GradientShader } from "@/components/ui/stripe-like-gradient-shader"
import ServiceSchema from "@/components/seo/ServiceSchema"
import ClinicasHero from "@/components/sections/soluciones/ClinicasHero"
import ClinicasProblem from "@/components/sections/soluciones/ClinicasProblem"
import ClinicasSectors from "@/components/sections/soluciones/ClinicasSectors"
import ClinicasFeatures from "@/components/sections/soluciones/ClinicasFeatures"
import ClinicasFAQ from "@/components/sections/soluciones/ClinicasFAQ"
import ClinicasCTA from "@/components/sections/soluciones/ClinicasCTA"

export const metadata: Metadata = {
  title: "Agente recepcionista y CRM para clínicas",
  description:
    "Agente de IA en WhatsApp y CRM para clínicas de podología y dentales: agenda por servicio, recordatorios, control de bonos y ficha de paciente. Operativo en 2-3 semanas.",
  alternates: {
    canonical: "/soluciones/clinicas",
  },
  openGraph: {
    title: "Agente recepcionista y CRM para clínicas — Propus",
    description:
      "Atiende, agenda y recuerda cada cita por WhatsApp, 24/7, con el CRM que centraliza agenda, pacientes y servicios de tu clínica.",
    type: "website",
    locale: "es_ES",
  },
}

export default function ClinicasPage() {
  return (
    <div className="relative">
      <ServiceSchema
        name="Agente recepcionista y CRM para clínicas"
        description="Agente de IA en WhatsApp y CRM de control interno para clínicas de podología y dentales: agenda por servicio, recordatorios automáticos, control de bonos y ficha de paciente centralizada."
        serviceType="Automatización de recepción para clínicas del sector salud"
      />
      <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
        <GradientShader />
        <div className="absolute inset-0 bg-wha-bg/65" />
      </div>

      <Navbar />
      <main className="relative">
        <ClinicasHero />
        <ClinicasProblem />
        <ClinicasSectors />
        <ClinicasFeatures />
        <ClinicasFAQ />
        <ClinicasCTA />
      </main>
      <Footer />
    </div>
  )
}

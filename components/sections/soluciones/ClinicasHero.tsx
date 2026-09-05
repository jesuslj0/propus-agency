import Link from "next/link"
import { ArrowRightIcon, MessageCircleIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TiltCtaButton } from "@/components/ui/tilt-cta-button"

export default function ClinicasHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-wha/30 bg-wha/10 px-4 py-1.5 text-xs font-semibold text-wha">
          <MessageCircleIcon className="size-3.5" />
          Agente de WhatsApp + CRM · Para clínicas
        </span>

        <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-wha-fg md:text-5xl lg:text-6xl">
          Agente recepcionista y CRM para{" "}
          <span className="bg-linear-to-r from-wha via-wha-alt to-wha-teal bg-clip-text text-transparent">
            tu clínica
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-wha-muted">
          Un agente de IA en WhatsApp que atiende, agenda y recuerda cada cita, respaldado por un
          CRM que centraliza tu agenda, tus pacientes y tus servicios. Diseñado para clínicas
          de podología y dentales, y adaptable a centros de estética o consultas de
          fisioterapia — 24/7 y sin que tu equipo mueva un dedo.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          {/* `flat` = modo seguro, como el resto de CTA con fondo en degradado. */}
          <TiltCtaButton
            tone="wha"
            flat
            size="lg"
            className="h-11 gap-2 bg-linear-to-r from-wha via-wha-alt to-wha-teal px-7 font-semibold text-white hover:opacity-90 [&_svg]:transition-transform hover:[&_svg]:translate-x-1"
            asChild
          >
            <Link href="https://calendar.app.google/CNBch8s1Q8iqoqdE9" target="_blank" rel="noopener noreferrer">
              Agendar llamada
              <ArrowRightIcon className="size-4" />
            </Link>
          </TiltCtaButton>
          <Button
            variant="outline"
            size="lg"
            className="h-11 border-wha-fg/20 px-7 text-wha-fg hover:bg-wha-card"
            asChild
          >
            <Link href="/proyectos/agente-whatsapp">Conoce AutoClinic</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

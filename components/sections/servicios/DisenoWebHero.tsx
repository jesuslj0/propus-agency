import Link from "next/link"
import { ArrowRightIcon, MonitorIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TiltCtaButton } from "@/components/ui/tilt-cta-button"
import { Badge } from "@/components/ui/badge"

export default function DisenoWebHero() {
  return (
    <section className="px-4 pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="mx-auto max-w-4xl text-center">
        <Badge
          variant="outline"
          className="mb-6 gap-1.5 border-brand-teal/40 text-brand-teal dark:border-brand-teal/40 dark:text-brand-teal py-1 px-3 h-auto rounded-full"
        >
          <MonitorIcon className="size-3.5" />
          Diseño web para el sector salud
        </Badge>

        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Diseño web para{" "}
          <span className="bg-linear-to-r from-brand-sky via-brand-teal to-brand-green bg-clip-text text-transparent">
            clínicas
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          La web suele ser el primer contacto de un paciente con tu clínica. Diseñamos sitios
          rápidos, claros y preparados para convertir esa visita en una primera cita — con la
          opción de conectar directamente tu agente de WhatsApp para que la reserva se haga sin salir de la página.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <TiltCtaButton
            size="lg"
            className="bg-brand-emerald hover:bg-brand-teal text-background font-semibold gap-2 h-11 px-6 [&_svg]:transition-transform hover:[&_svg]:translate-x-1"
            asChild
          >
            <Link href="https://calendar.app.google/CNBch8s1Q8iqoqdE9" target="_blank" rel="noopener noreferrer">
              Agendar llamada
              <ArrowRightIcon className="size-4" />
            </Link>
          </TiltCtaButton>
          <Button variant="outline" size="lg" className="h-11 px-6" asChild>
            <Link href="/proyectos/web-design">Ver portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

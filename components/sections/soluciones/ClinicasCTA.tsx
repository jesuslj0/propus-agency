import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { TiltCtaButton } from "@/components/ui/tilt-cta-button"

export default function ClinicasCTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-wha/20 bg-wha-card px-8 py-16 text-center md:px-16">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute left-1/2 top-0 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-wha/15 blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 size-72 rounded-full bg-wha-teal/15 blur-[100px]" />
          </div>

          <div className="relative">
            <h2 className="text-3xl font-semibold tracking-tight text-wha-fg md:text-4xl">
              Habla con nosotros sobre{" "}
              <span className="bg-linear-to-r from-wha via-wha-alt to-wha-teal bg-clip-text text-transparent">
                tu clínica
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-wha-muted">
              30 minutos para revisar tu caso concreto: servicios, profesionales y agenda actual. Sin compromiso.
            </p>

            <div className="mt-10 flex justify-center">
              {/* `flat`: mismo patrón que el CTA final del index — botón dentro
                  de una tarjeta con overlays difuminados. Sin perspective() no
                  se promueve a capa 3D y no hay riesgo de que deje de pintarse. */}
              <TiltCtaButton
                tone="wha"
                flat
                size="lg"
                className="h-11 gap-2 bg-linear-to-r from-wha via-wha-alt to-wha-teal px-8 text-base font-semibold text-white hover:opacity-90 [&_svg]:transition-transform hover:[&_svg]:translate-x-1"
                asChild
              >
                <Link href="https://calendar.app.google/CNBch8s1Q8iqoqdE9" target="_blank" rel="noopener noreferrer">
                  Agendar llamada
                  <ArrowRightIcon className="size-4" />
                </Link>
              </TiltCtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

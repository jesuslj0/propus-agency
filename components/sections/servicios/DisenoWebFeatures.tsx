import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { LayoutTemplateIcon, MessageCircleIcon, SearchCheckIcon, ArrowRightIcon } from "lucide-react"

const features = [
  {
    icon: LayoutTemplateIcon,
    title: "Ficha completa de servicios y profesionales",
    description:
      "Cada tratamiento con su descripción, duración y profesional a cargo, para que el paciente decida antes de reservar.",
  },
  {
    icon: MessageCircleIcon,
    title: "Reserva integrada con tu agente de WhatsApp",
    description:
      "Si ya tienes o quieres nuestro agente recepcionista, lo conectamos directamente a la web: un botón y el paciente empieza a agendar sin salir de la página.",
  },
  {
    icon: SearchCheckIcon,
    title: "SEO técnico y local desde el primer día",
    description:
      "Estructura, velocidad de carga y datos estructurados pensados para que tu clínica aparezca cuando alguien la busca en tu zona.",
  },
]

export default function DisenoWebFeatures() {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Qué incluye el{" "}
            <span className="bg-linear-to-r from-brand-sky to-brand-teal bg-clip-text text-transparent">
              diseño web de tu clínica
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Una web construida para generar confianza y facilitar la primera cita.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((item) => (
            <Card
              key={item.title}
              className="group border-border bg-card transition-[background-color,border-color,transform,box-shadow] duration-200 ease-out hover:-translate-y-px hover:border-brand-teal/25 hover:shadow-lg hover:shadow-brand-teal/10 motion-reduce:hover:translate-y-0"
            >
              <CardContent className="pt-6">
                <item.icon className="mb-4 size-8 text-brand-teal transition-colors duration-200 group-hover:text-brand-green" />
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/proyectos/web-design"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-teal transition-colors hover:text-brand-green"
          >
            Ver webs reales que hemos creado
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

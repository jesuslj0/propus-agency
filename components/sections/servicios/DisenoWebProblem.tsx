import { Card, CardContent } from "@/components/ui/card"
import { MapPinOffIcon, SmartphoneIcon, MousePointerClickIcon, HourglassIcon } from "lucide-react"

const problems = [
  {
    icon: MapPinOffIcon,
    title: "Invisible en las búsquedas locales",
    description:
      "Cuando alguien busca \"clínica dental cerca de mí\" o \"centro de estética en su ciudad\", una web sin SEO local no aparece — y esa búsqueda es justo la de mayor intención de reserva.",
  },
  {
    icon: SmartphoneIcon,
    title: "Webs pensadas para escritorio, no para móvil",
    description:
      "La mayoría de pacientes buscan clínica desde el móvil. Una web lenta o mal adaptada se abandona en segundos, antes de ver ni un solo tratamiento.",
  },
  {
    icon: MousePointerClickIcon,
    title: "Sin un camino claro hacia la cita",
    description:
      "Muchas webs de clínicas listan servicios pero no dejan claro cómo reservar. El paciente tiene que buscar un teléfono y llamar, y ahí se pierde gran parte de las conversiones.",
  },
  {
    icon: HourglassIcon,
    title: "Contenido desactualizado",
    description:
      "Horarios, profesionales o tratamientos que cambiaron hace meses y la web sigue mostrando información antigua, generando desconfianza en el paciente.",
  },
]

export default function DisenoWebProblem() {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            La mayoría de webs de clínicas{" "}
            <span className="bg-linear-to-r from-brand-teal to-brand-green bg-clip-text text-transparent">
              pierden pacientes sin saberlo
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            No es falta de pacientes buscando: es que la web no los convierte en cita.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {problems.map((item) => (
            <Card
              key={item.title}
              className="group border-border bg-card transition-[background-color,border-color,transform,box-shadow] duration-200 ease-out hover:-translate-y-px hover:border-brand-teal/25 hover:shadow-lg hover:shadow-brand-teal/10 motion-reduce:hover:translate-y-0"
            >
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-teal/10 transition-colors duration-200 group-hover:bg-brand-teal/20">
                  <item.icon className="size-5 text-brand-teal" />
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

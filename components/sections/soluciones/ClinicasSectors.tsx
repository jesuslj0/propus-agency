import type { LucideIcon } from "lucide-react"
import { FootprintsIcon, HeartPulseIcon, SparklesIcon, ActivityIcon, StarIcon } from "lucide-react"

import { cn } from "@/lib/utils"

interface Sector {
  icon: LucideIcon
  title: string
  description: string
  featured: boolean
  /** Etiqueta de la esquina. Sin ella no se pinta el distintivo. */
  badge?: string
}

// `featured` da el relieve visual; `badge` es la etiqueta de la esquina. Los
// dos nichos van destacados, pero solo la podología es el principal.
const sectors: Sector[] = [
  {
    icon: FootprintsIcon,
    title: "Clínicas de podología",
    description:
      "Nuestro caso de uso principal, ya en fase beta con una clínica real. Agenda por tipo de tratamiento (quiropodia, estudio biomecánico, revisión) con la disponibilidad de cada profesional y la ficha de cada paciente centralizada.",
    featured: true,
    badge: "Nicho principal",
  },
  {
    icon: HeartPulseIcon,
    title: "Clínicas dentales",
    description:
      "Nuestro segundo nicho. Agenda por tipo de tratamiento (limpieza, ortodoncia, endodoncia) con la disponibilidad real de cada profesional y la ficha de cada paciente centralizada.",
    featured: true,
    badge: "Segundo nicho",
  },
  {
    icon: SparklesIcon,
    title: "Centros de estética",
    description:
      "Control de bonos y sesiones consumidas, información de cada tratamiento y capacidad de absorber los picos de mensajes de una campaña. Ya en marcha en un centro real.",
    featured: false,
  },
  {
    icon: ActivityIcon,
    title: "Fisioterapia y rehabilitación",
    description:
      "Seguimiento de tratamientos con varias sesiones, recordatorios que aseguran la asistencia y gestión de agenda para una o varias salas en paralelo.",
    featured: false,
  },
]

export default function ClinicasSectors() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-wha/30 bg-wha/10 px-4 py-1.5 text-xs font-semibold text-wha">
            Para quién es
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-wha-fg md:text-4xl">
            Un mismo sistema, adaptado a{" "}
            <span className="bg-linear-to-r from-wha to-wha-teal bg-clip-text text-transparent">
              cada tipo de clínica
            </span>
          </h2>
          <p className="mt-4 text-wha-muted">
            Se configura con tus servicios, tus profesionales y tu agenda real — no con plantillas genéricas.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className={cn(
                  "group relative flex flex-col gap-3 rounded-2xl border p-6 backdrop-blur-sm",
                  "transition-[background-color,border-color,transform,box-shadow] duration-200 ease-out",
                  "hover:-translate-y-px motion-reduce:hover:translate-y-0",
                  s.featured
                    ? // Ya parte con relieve: en hover lo intensifica en vez de estrenarlo.
                      "border-wha/40 bg-linear-to-br from-wha/10 via-wha-card to-wha-teal/10 shadow-lg shadow-wha/10 hover:border-wha/60 hover:shadow-xl hover:shadow-wha/20"
                    : "border-white/8 bg-wha-card/60 hover:border-wha/25 hover:bg-wha-card hover:shadow-lg hover:shadow-wha/10"
                )}
              >
                {s.badge && (
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-wha/15 px-2.5 py-1 text-[10px] font-semibold text-wha">
                    <StarIcon className="size-2.5 fill-wha" />
                    {s.badge}
                  </span>
                )}
                <div className="flex size-11 items-center justify-center rounded-xl bg-linear-to-br from-wha to-wha-teal shadow-md shadow-wha/30 transition-shadow duration-200 group-hover:shadow-lg group-hover:shadow-wha/50">
                  <Icon className="size-5 text-white" />
                </div>
                <h3 className={`font-semibold text-wha-fg ${s.featured ? "text-lg" : ""}`}>{s.title}</h3>
                <p className="text-sm leading-relaxed text-wha-muted">{s.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

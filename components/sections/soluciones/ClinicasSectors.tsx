import { HeartPulseIcon, SparklesIcon, ActivityIcon, StarIcon } from "lucide-react"

const sectors = [
  {
    icon: HeartPulseIcon,
    title: "Clínicas dentales",
    description:
      "Nuestro caso de uso principal. Agenda por tipo de tratamiento (limpieza, ortodoncia, endodoncia) con la disponibilidad real de cada profesional y la ficha de cada paciente centralizada.",
    featured: true,
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
                className={`relative flex flex-col gap-3 rounded-2xl border p-6 backdrop-blur-sm transition-colors ${
                  s.featured
                    ? "border-wha/40 bg-linear-to-br from-wha/10 via-wha-card to-wha-teal/10 shadow-lg shadow-wha/10"
                    : "border-white/8 bg-wha-card/60 hover:border-wha/25"
                }`}
              >
                {s.featured && (
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-wha/15 px-2.5 py-1 text-[10px] font-semibold text-wha">
                    <StarIcon className="size-2.5 fill-wha" />
                    Nicho principal
                  </span>
                )}
                <div className="flex size-11 items-center justify-center rounded-xl bg-linear-to-br from-wha to-wha-teal shadow-md shadow-wha/30">
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

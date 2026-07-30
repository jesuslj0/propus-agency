import Link from "next/link"
import { CalendarPlusIcon, UsersIcon, BookOpenIcon, ArrowRightIcon } from "lucide-react"

const pillars = [
  {
    icon: CalendarPlusIcon,
    title: "Agenda por servicio y profesional",
    body: "El paciente elige el tratamiento y el agente le ofrece hueco según el profesional adecuado y la duración real de cada cita — con confirmación instantánea por WhatsApp.",
  },
  {
    icon: UsersIcon,
    title: "CRM con la ficha de cada paciente",
    body: "Historial, próximas citas, bonos y datos de contacto centralizados. Tu equipo consulta todo desde el mismo panel que usa el agente, sin información dispersa.",
  },
  {
    icon: BookOpenIcon,
    title: "Base de conocimiento de tu clínica",
    body: "Precios, políticas, ubicación y preguntas frecuentes propias — el agente responde siempre con tu información, nunca con datos genéricos.",
  },
]

export default function ClinicasFeatures() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-wha/30 bg-wha/10 px-4 py-1.5 text-xs font-semibold text-wha">
            Cómo funciona
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-wha-fg md:text-4xl">
            El agente y el CRM,{" "}
            <span className="bg-linear-to-r from-wha via-wha-alt to-wha-teal bg-clip-text text-transparent">
              trabajando juntos
            </span>
          </h2>
          <p className="mt-4 text-wha-muted">
            La atención por WhatsApp es la parte visible; el CRM es lo que la hace fiable.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="group flex flex-col gap-4 rounded-2xl border border-white/8 bg-wha-card/60 p-6 backdrop-blur-sm transition-[background-color,border-color,transform,box-shadow] duration-200 ease-out hover:-translate-y-px hover:border-wha/25 hover:bg-wha-card hover:shadow-lg hover:shadow-wha/10 motion-reduce:hover:translate-y-0"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-wha/12 transition-colors duration-200 group-hover:bg-wha/25">
                  <Icon className="size-5 text-wha" />
                </div>
                <h3 className="text-base font-semibold leading-tight text-wha-fg">{f.title}</h3>
                <p className="text-sm leading-relaxed text-wha-muted">{f.body}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/proyectos/agente-whatsapp"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-wha-teal transition-colors hover:text-wha"
          >
            Ver el detalle técnico completo del agente
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

import { PhoneMissedIcon, CalendarOffIcon, ClockAlertIcon, HelpCircleIcon } from "lucide-react"

const problems = [
  {
    icon: PhoneMissedIcon,
    title: "El teléfono suena mientras atiendes",
    body: "En plena consulta o tratamiento, nadie puede coger la llamada. Ese paciente potencial cuelga y prueba con el centro de al lado.",
  },
  {
    icon: ClockAlertIcon,
    title: "Los pacientes escriben fuera de horario",
    body: "Muchas peticiones de cita llegan por la noche o el fin de semana. Sin respuesta inmediata, la reserva se enfría antes de entrar en la agenda.",
  },
  {
    icon: CalendarOffIcon,
    title: "Huecos vacíos por ausencias de última hora",
    body: "Sin recordatorios, los pacientes olvidan o cancelan tarde. El hueco se queda sin cubrir y no hay forma de reasignarlo a tiempo.",
  },
  {
    icon: HelpCircleIcon,
    title: "Las mismas preguntas, una y otra vez",
    body: "Precios, duración de un tratamiento, ubicación, sesiones de un bono… Tu equipo dedica horas a resolver dudas básicas que deberían responderse solas.",
  },
]

export default function ClinicasProblem() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-wha-fg md:text-4xl">
            La recepción de una clínica{" "}
            <span className="bg-linear-to-r from-wha to-wha-teal bg-clip-text text-transparent">
              no puede estar en dos sitios a la vez
            </span>
          </h2>
          <p className="mt-4 text-wha-muted">
            Tu equipo está para tratar pacientes, no para pelearse con el teléfono y la agenda.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {problems.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.title}
                className="group flex items-start gap-4 rounded-2xl border border-white/8 bg-wha-card/60 px-6 py-6 backdrop-blur-sm transition-[background-color,border-color,transform,box-shadow] duration-200 ease-out hover:-translate-y-px hover:border-wha/25 hover:bg-wha-card hover:shadow-lg hover:shadow-wha/10 motion-reduce:hover:translate-y-0"
              >
                <div className="mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-xl bg-rose-500/15 transition-colors duration-200 group-hover:bg-rose-500/25">
                  <Icon className="size-5 text-rose-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-wha-fg">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-wha-muted">{p.body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

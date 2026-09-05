import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import FAQSchema from "@/components/seo/FAQSchema"

const faqs = [
  {
    question: "¿Sirve para mi tipo de clínica?",
    answer:
      "Si tu clínica trabaja por cita, sí. Está pensado sobre todo para clínicas de podología y dentales, pero se adapta a cualquier consulta que gestione agenda y profesionales, como centros de estética o consultas de fisioterapia.",
  },
  {
    question: "¿El agente distingue entre distintos tratamientos y sus duraciones?",
    answer:
      "Sí. Configuramos el agente con los servicios reales de tu clínica, cada uno con su duración y el profesional que lo realiza, para que ofrezca huecos coherentes con cada tipo de cita.",
  },
  {
    question: "¿Puede llevar el control de bonos de varias sesiones?",
    answer:
      "Sí. El CRM registra el bono contratado por cada paciente y las sesiones consumidas, algo especialmente útil en estética y fisioterapia, y el agente lo consulta antes de confirmar una nueva cita.",
  },
  {
    question: "¿Se integra con el sistema de agenda que ya uso?",
    answer:
      "En la mayoría de casos sí. El CRM de AutoClinic puede sustituir tu agenda actual o sincronizarse con ella — lo revisamos en el diagnóstico inicial para tu caso concreto.",
  },
  {
    question: "¿Cuánto tiempo se tarda en tenerlo funcionando?",
    answer:
      "Entre 2 y 3 semanas desde la primera reunión: configuración de servicios y profesionales, conexión con tu agenda y pruebas reales antes de que lo vean tus pacientes.",
  },
  {
    question: "¿Qué pasa si el agente no sabe responder algo?",
    answer:
      "Se configura con reglas claras de derivación: cuando la consulta se sale de lo previsto, avisa a tu equipo o deja el mensaje pendiente. Nunca deja a un paciente sin atención.",
  },
]

export default function ClinicasFAQ() {
  return (
    <section className="py-20 md:py-28">
      <FAQSchema faqs={faqs} />
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-wha-fg md:text-4xl">
            Preguntas{" "}
            <span className="bg-linear-to-r from-wha to-wha-teal bg-clip-text text-transparent">
              frecuentes
            </span>
          </h2>
          <p className="mt-4 text-wha-muted">
            Lo que más nos preguntan las clínicas antes de dar el paso.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-wha/20 bg-wha-card/60 px-5 overflow-hidden transition-[background-color,border-color] duration-200 ease-out hover:border-wha/40 hover:bg-wha-card"
              >
                <AccordionTrigger className="text-left text-base font-medium text-wha-fg py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-wha-muted leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center text-sm text-wha-muted">
          ¿Quieres entender el funcionamiento completo antes de hablar con nosotros?{" "}
          <Link
            href="/blog/recepcionista-virtual-clinica-dental"
            className="font-semibold text-wha-teal underline underline-offset-4 hover:text-wha"
          >
            Lee la guía completa
          </Link>
          .
        </p>
      </div>
    </section>
  )
}

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
    question: "¿Puedo integrar el agente de WhatsApp en la web de mi clínica?",
    answer:
      "Sí, es una de las combinaciones que más pedimos: un botón de reserva en la web que abre directamente la conversación con tu agente de AutoClinic.",
  },
  {
    question: "¿Cuánto tiempo tarda el diseño de la web de mi clínica?",
    answer:
      "Depende del alcance, pero la mayoría de proyectos están listos entre 3 y 5 semanas desde que definimos el contenido y la estructura contigo.",
  },
  {
    question: "¿Incluye dominio y alojamiento?",
    answer:
      "Te asesoramos en la contratación de dominio y alojamiento y dejamos todo desplegado y funcionando; la titularidad de ambos siempre es tuya.",
  },
  {
    question: "¿Podré actualizar los contenidos de la web yo mismo?",
    answer:
      "Sí, según el proyecto dejamos un panel sencillo para actualizar servicios, horarios o profesionales sin depender de un desarrollador.",
  },
  {
    question: "¿La web estará optimizada para aparecer en búsquedas locales?",
    answer:
      "Sí, aplicamos SEO técnico y local desde el diseño inicial: velocidad de carga, estructura semántica y datos que ayudan a posicionar tu clínica en tu zona.",
  },
]

export default function DisenoWebFAQ() {
  return (
    <section id="faq-diseno-web" className="px-4 py-20 md:py-28">
      <FAQSchema faqs={faqs} />
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Preguntas sobre{" "}
            <span className="bg-linear-to-r from-brand-green to-brand-teal bg-clip-text text-transparent">
              diseño web para clínicas
            </span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-brand-teal/20 bg-brand-teal/5 backdrop-blur-sm px-5 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-base font-medium py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center text-sm text-muted-foreground">
          ¿Quieres saber qué elementos concretos convierten una visita en primera cita?{" "}
          <Link
            href="/blog/diseno-web-clinica-dental"
            className="font-semibold text-brand-teal underline underline-offset-4 hover:text-brand-green"
          >
            Lee el artículo completo
          </Link>
          .
        </p>
      </div>
    </section>
  )
}

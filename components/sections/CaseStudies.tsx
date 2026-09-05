"use client"

import Link from "next/link"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion"
import { cn } from "@/lib/utils"

const cases = [
  {
    sector: "Restaurante · El Rincón de Héctor",
    url: "elrincondehector.com",
    href: "/proyectos/web-design#el-rincon-de-hector",
    problema:
      "Contaba con una web obsoleta construida en Wix que únicamente mostraba la carta, sin actualizar y con una imagen que no hacía justicia al nivel real del restaurante.",
    solucion:
      "Página web diseñada completamente a medida, con una estética elegante y diferenciadora, carta renovada y arquitectura preparada para escalar a una web app de pedidos.",
    resultado:
      "Los clientes perciben el restaurante como un local de alto standing. Gracias al SEO integrado, los visitantes extranjeros encuentran la web en las primeras posiciones del buscador.",
  },
  {
    sector: "Restaurante · Casino El Bonillo",
    url: "casinoelbonillo.com",
    href: "/proyectos/web-design#casino-el-bonillo",
    problema:
      "El bar-restaurante más céntrico del pueblo no tenía web propia, perdiendo visibilidad y reservas online.",
    solucion:
      "Web profesional con carta cuidada, SEO básico, formulario de reservas y un pop-up que dirige a Google Maps para captar reseñas.",
    resultado:
      "Reservas entrando desde el primer día y un flujo constante de nuevas valoraciones positivas que refuerzan su reputación.",
  },
  {
    sector: "Ocio nocturno · Lío El Bonillo",
    url: "liopub.com",
    href: "/proyectos/web-design#lio-el-bonillo",
    problema:
      "El disco pub referente de la zona no aparecía ni en Google Maps y carecía de canal para promocionar sus fiestas.",
    solucion:
      "Web vistosa para sus eventos + web app donde los asistentes suben fotos cada finde, votan y ganan premios semanales. Creamos también su ficha de Google.",
    resultado:
      "Tráfico creciendo de forma exponencial cada semana y una comunidad activa que llena las fiestas.",
  },
  {
    sector: "Turismo rural · Cabañas El Acuífero",
    url: "elacuifero.es",
    href: "/proyectos/web-design#cabanas-el-acuifero",
    problema:
      "José gestionaba las reservas de sus seis cabañas en la carretera de Ruidera únicamente por teléfono y boca a boca, sin web ni calendario: dependía de conocidos y anotaba las fechas a mano.",
    solucion:
      "Portal de reservas propio con panel de administración para autogestionar el blog y una app de calendario que le construimos dentro del panel, vinculada a la web para controlar disponibilidad y fechas. Todo con SEO y AEO trabajados.",
    resultado:
      "Pasa de la agenda telefónica a su propia pasarela de reservas abierta a cualquier viajero, y empieza a aparecer como recomendación de alojamiento en Ruidera cuando se pregunta a los asistentes de IA.",
  },
  {
    sector: "Golosinas y snacks · Golosea",
    url: "golosea.com",
    href: "/proyectos/web-design#golosea",
    problema:
      "Arrastraba una web del Kit Digital pobre, mal estructurada, con exceso de texto y reseñas falsas.",
    solucion:
      "La convertimos en una landing potente con agente de IA, formulario de reserva de cucuruchos para cumpleaños, sección de festivos y contador de visitas público.",
    resultado:
      "Capta clientes en los días clave del calendario y luce como la mejor web de golosinas de la comarca.",
  },
]

const spring = { stiffness: 150, damping: 18, mass: 0.6 }

export default function CaseStudies() {
  return (
    <section
      id="resultados"
      className="relative scroll-mt-24 overflow-hidden py-20 md:py-28"
    >
      {/* Glow decorativo de fondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-40 -z-0 h-[500px] w-[900px] max-w-full -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, hsl(168 80% 45% / 0.10), transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4">
        {/* Cabecera */}
        <div className="mb-14 flex flex-col items-center gap-5 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-teal/30 bg-brand-teal/10 px-4 py-1.5 text-xs font-medium text-brand-teal">
            Resultados
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Clientes que ya{" "}
            <span className="bg-linear-to-r from-brand-sky to-brand-teal bg-clip-text text-transparent">
              confían en nosotros
            </span>
          </h2>
          <p className="mx-auto max-w-xl text-slate-400">
            Empresas que ya trabajan con Propus y han transformado su presencia
            digital en semanas.
          </p>
        </div>

        {/* Galería de casos */}
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {cases.map((c, i) => (
            <CaseCard key={c.sector} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseCard({ c, index }: { c: (typeof cases)[number]; index: number }) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLAnchorElement>(null)

  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const rotateX = useSpring(
    useTransform(py, [-0.5, 0.5], reduce ? [0, 0] : [7, -7]),
    spring
  )
  const rotateY = useSpring(
    useTransform(px, [-0.5, 0.5], reduce ? [0, 0] : [-7, 7]),
    spring
  )

  function handleMove(e: React.PointerEvent<HTMLAnchorElement>) {
    const el = ref.current
    if (!el || reduce) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    px.set(x - 0.5)
    py.set(y - 0.5)
    el.style.setProperty("--mx", `${x * 100}%`)
    el.style.setProperty("--my", `${y * 100}%`)
  }

  function handleLeave() {
    px.set(0)
    py.set(0)
  }

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        className="h-full"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <Link
          ref={ref}
          href={c.href}
          onPointerMove={handleMove}
          onPointerLeave={handleLeave}
          style={{ "--mx": "50%", "--my": "50%" } as React.CSSProperties}
          className={cn(
            "group relative flex h-full flex-col overflow-hidden rounded-2xl p-7",
            "border border-white/10 bg-gradient-to-b from-slate-900/90 to-slate-950/95",
            "shadow-xl shadow-black/40 ring-1 ring-white/5 transition-colors duration-300",
            "hover:border-brand-teal/50 hover:shadow-brand-teal/10"
          )}
        >
          {/* Spotlight que sigue al cursor */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(420px circle at var(--mx) var(--my), hsl(168 85% 50% / 0.14), transparent 60%)",
            }}
          />
          {/* Línea de acento superior */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-teal/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Número de hazaña */}
          <span
            aria-hidden
            style={{ transform: "translateZ(20px)" }}
            className="pointer-events-none absolute right-5 top-3 font-heading text-6xl font-bold text-white/[0.04] transition-colors duration-300 group-hover:text-brand-teal/10"
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <div
            className="relative flex flex-1 flex-col gap-6"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Cabecera de la card */}
            <div
              style={{ transform: "translateZ(40px)" }}
              className="flex flex-col gap-2"
            >
              <span className="inline-flex w-fit items-center rounded-full border border-brand-teal/40 bg-brand-teal/10 px-3 py-1 text-xs font-medium text-brand-teal">
                {c.sector}
              </span>
              {c.url && (
                <span className="font-mono text-xs text-slate-500">{c.url}</span>
              )}
            </div>

            {/* Timeline Problema → Solución → Resultado */}
            <div
              style={{ transform: "translateZ(24px)" }}
              className="relative flex flex-col gap-4"
            >
              <span
                aria-hidden
                className="absolute bottom-3 left-[3.5px] top-3 w-px bg-gradient-to-b from-red-400/30 via-brand-sky/30 to-brand-teal/50"
              />
              <Step
                label="Problema"
                color="text-red-400"
                dot="bg-red-400"
                text={c.problema}
              />
              <Step
                label="Solución"
                color="text-brand-sky"
                dot="bg-brand-sky"
                text={c.solucion}
              />
              <Step
                label="Resultado"
                color="text-brand-teal"
                dot="bg-brand-teal"
                text={c.resultado}
                highlight
              />
            </div>

            {/* CTA */}
            <div
              style={{ transform: "translateZ(30px)" }}
              className="mt-auto flex items-center gap-2 pt-2 text-sm font-semibold text-brand-teal"
            >
              <span>Ver caso</span>
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  )
}

function Step({
  label,
  color,
  dot,
  text,
  highlight,
}: {
  label: string
  color: string
  dot: string
  text: string
  highlight?: boolean
}) {
  return (
    <div className="relative flex gap-3">
      <span
        className={cn(
          "relative z-10 mt-1.5 size-2 shrink-0 rounded-full ring-4 ring-slate-950/95",
          dot
        )}
      />
      <div className="flex flex-col gap-1">
        <span
          className={cn(
            "text-xs font-semibold uppercase tracking-wide",
            color
          )}
        >
          {label}
        </span>
        <p
          className={cn(
            "text-sm leading-relaxed",
            highlight ? "font-semibold text-white" : "text-slate-300"
          )}
        >
          {text}
        </p>
      </div>
    </div>
  )
}

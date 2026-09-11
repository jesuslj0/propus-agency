"use client"

import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import {
  SunIcon,
  MoonIcon,
  MaximizeIcon,
  XIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"

type Tema = "claro" | "oscuro"

interface Pantalla {
  /** Base del fichero en /img/autoclinic; se le añade -claro o -oscuro */
  id: string
  title: string
  description: string
}

/**
 * Las seis primeras van visibles: es el orden de lo más vendible a lo más
 * técnico. Las seis de configuración quedan tras un desplegable para no
 * convertir la página en una galería de doce capturas.
 */
const destacadas: Pantalla[] = [
  {
    id: "panel",
    title: "Panel de control",
    description:
      "Lo que pasa hoy y lo que se ha cobrado este mes: las citas del día con su estado, la actividad de la clínica y el bloque económico, que distingue lo facturado, lo cobrado y el trabajo hecho que aún no se ha facturado.",
  },
  {
    id: "chats",
    title: "Chats",
    description:
      "Al conectar tu número a la API de WhatsApp, deja de funcionar en la aplicación del móvil. Esta bandeja te lo devuelve, con el color distinguiendo qué contestó el agente y qué contestó una persona del equipo.",
  },
  {
    id: "agenda",
    title: "Agenda",
    description:
      "La semana completa sobre el horario real de cada profesional. Admite jornada partida y ausencias, y las citas que se solapan se reparten en columnas en vez de taparse entre ellas.",
  },
  {
    id: "pacientes",
    title: "Pacientes",
    description:
      "El directorio de la clínica, con búsqueda por nombre, correo o teléfono. Los números se normalizan al dar de alta, así que el mismo teléfono escrito de tres formas no genera tres fichas. Cada alta abre su historia clínica.",
  },
  {
    id: "facturacion",
    title: "Facturación",
    description:
      "Del tratamiento a la factura sin teclear dos veces. Los procedimientos quedan pendientes de facturar, se agrupan en un borrador y al emitirlo toma número de la serie y se cierra. Una factura emitida no se corrige: se anula y se emite otra.",
  },
  {
    id: "agente",
    title: "Agente de WhatsApp",
    description:
      "La configuración del número y, sobre todo, el chat de pruebas: hablas con el agente desde el propio panel, sin gastar mensajes ni molestar a nadie, para comprobar qué contesta antes de ponerlo delante de pacientes.",
  },
]

const configuracion: Pantalla[] = [
  {
    id: "citas",
    title: "Citas",
    description:
      "El listado completo, filtrable por fecha y estado. Cada cita guarda su recorrido —quién cambió qué y cuándo— y de dónde vino: del panel, del agente o de la reserva pública.",
  },
  {
    id: "servicios",
    title: "Servicios",
    description:
      "El catálogo que el agente consulta para responder precios y calcular cuánto hueco ocupa cada cita. La duración y el precio pueden ser fijos o variables; si la duración varía, la agenda reserva el máximo.",
  },
  {
    id: "profesionales",
    title: "Profesionales",
    description:
      "Quién trabaja, cuándo y en qué: horario semanal por tramos, ausencias y servicios que presta cada uno. Es lo que alimenta el calendario y los huecos que el agente puede ofrecer.",
  },
  {
    id: "clinica",
    title: "Clínica",
    description:
      "Los datos que el agente da cuando se los piden: dirección, contacto y zona horaria. Aquí se fija también cuánto se guarda el hueco de una cita que el agente ha reservado y el equipo aún no ha validado.",
  },
  {
    id: "base-conocimiento",
    title: "Base de conocimiento",
    description:
      "Lo que el agente sabe, escrito por la clínica: horarios, ubicación, precios, políticas y preguntas frecuentes. Se edita desde el panel, sin tocar el bot.",
  },
  {
    id: "mi-cuenta",
    title: "Mi cuenta",
    description:
      "Cada miembro del equipo gestiona lo suyo: sus datos de acceso, su ficha profesional y su propio horario y ausencias.",
  },
]

const todas = [...destacadas, ...configuracion]

function rutaCaptura(id: string, tema: Tema) {
  return `/img/autoclinic/${id}-${tema}.png`
}

export default function WhaGallery() {
  const [tema, setTema] = useState<Tema>("oscuro")
  const [verConfiguracion, setVerConfiguracion] = useState(false)
  const [ampliada, setAmpliada] = useState<number | null>(null)

  const cerrar = useCallback(() => setAmpliada(null), [])
  const mover = useCallback((paso: number) => {
    setAmpliada((actual) => {
      if (actual === null) return null
      return (actual + paso + todas.length) % todas.length
    })
  }, [])

  // Teclado del visor y bloqueo del scroll de fondo mientras está abierto.
  useEffect(() => {
    if (ampliada === null) return

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") cerrar()
      if (e.key === "ArrowRight") mover(1)
      if (e.key === "ArrowLeft") mover(-1)
    }

    const overflowPrevio = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)

    return () => {
      document.body.style.overflow = overflowPrevio
      window.removeEventListener("keydown", onKey)
    }
  }, [ampliada, cerrar, mover])

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-wha-alt/30 bg-wha-alt/10 px-4 py-1.5 text-xs font-semibold text-wha-alt">
            El agente en acción
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-wha-fg md:text-4xl">
            Tú controlas,{" "}
            <span className="bg-linear-to-r from-wha-alt to-wha-teal bg-clip-text text-transparent">
              el agente ejecuta
            </span>
          </h2>
          <p className="mt-4 text-wha-muted">
            Detrás del agente hay un programa de gestión completo: agenda,
            historia clínica y facturación. Estas son sus pantallas reales.
          </p>
        </div>

        <ConmutadorTema tema={tema} onChange={setTema} />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
          {destacadas.map((p, i) => (
            <TarjetaCaptura
              key={p.id}
              pantalla={p}
              tema={tema}
              prioridad={i === 0}
              onAmpliar={() => setAmpliada(i)}
            />
          ))}
        </div>

        {/* Las seis de configuración, plegadas por defecto */}
        <div className="mt-10">
          <button
            type="button"
            onClick={() => setVerConfiguracion((v) => !v)}
            aria-expanded={verConfiguracion}
            className="mx-auto flex items-center gap-2 rounded-full border border-white/10 bg-wha-card/60 px-5 py-2.5 text-sm font-medium text-wha-fg transition-colors hover:border-wha-teal/40 hover:bg-wha-card"
          >
            {verConfiguracion
              ? "Ocultar las pantallas de configuración"
              : "Ver las 6 pantallas de configuración"}
            <ChevronDownIcon
              className={cn(
                "size-4 transition-transform duration-300",
                verConfiguracion && "rotate-180"
              )}
            />
          </button>

          {verConfiguracion && (
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:gap-8">
              {configuracion.map((p, i) => (
                <TarjetaCaptura
                  key={p.id}
                  pantalla={p}
                  tema={tema}
                  onAmpliar={() => setAmpliada(destacadas.length + i)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {ampliada !== null && (
        <Visor
          pantalla={todas[ampliada]}
          tema={tema}
          onCerrar={cerrar}
          onAnterior={() => mover(-1)}
          onSiguiente={() => mover(1)}
        />
      )}
    </section>
  )
}

/* ---------------------------------------------------------------- */

function TarjetaCaptura({
  pantalla,
  tema,
  prioridad,
  onAmpliar,
}: {
  pantalla: Pantalla
  tema: Tema
  prioridad?: boolean
  onAmpliar: () => void
}) {
  return (
    <figure className="flex flex-col gap-4">
      <button
        type="button"
        onClick={onAmpliar}
        aria-label={`Ampliar la captura de ${pantalla.title}`}
        className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-wha-card/80 text-left shadow-2xl shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:border-wha-teal/40 hover:shadow-wha-teal/10"
      >
        {/* Barra tipo navegador */}
        <div className="flex items-center gap-2 border-b border-white/8 bg-white/5 px-4 py-2.5">
          <span className="size-2.5 rounded-full bg-rose-400/70" />
          <span className="size-2.5 rounded-full bg-amber-400/70" />
          <span className="size-2.5 rounded-full bg-emerald-400/70" />
          <div className="ml-2 flex-1 truncate rounded-md bg-black/20 px-3 py-1 text-center font-mono text-[11px] text-wha-muted">
            app.autoclinic.es
          </div>
        </div>

        <div className="relative overflow-hidden">
          <Image
            src={rutaCaptura(pantalla.id, tema)}
            alt={`AutoClinic — ${pantalla.title}`}
            width={1900}
            height={1078}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={prioridad}
            className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.04]"
          />

          {/* Aviso de ampliar, solo al pasar por encima */}
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/45 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
            <span className="inline-flex items-center gap-2 rounded-full bg-wha-card/90 px-4 py-2 text-sm font-medium text-wha-fg ring-1 ring-white/15">
              <MaximizeIcon className="size-4 text-wha-teal" />
              Ampliar
            </span>
          </span>
        </div>
      </button>

      <figcaption className="px-1">
        <h3 className="text-base font-semibold text-wha-fg">{pantalla.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-wha-muted">
          {pantalla.description}
        </p>
      </figcaption>
    </figure>
  )
}

/* ---------------------------------------------------------------- */

function ConmutadorTema({
  tema,
  onChange,
}: {
  tema: Tema
  onChange: (t: Tema) => void
}) {
  const esClaro = tema === "claro"

  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
      <button
        type="button"
        role="switch"
        aria-checked={esClaro}
        aria-label={
          esClaro
            ? "Ver las capturas en modo oscuro"
            : "Ver las capturas en modo claro"
        }
        onClick={() => onChange(esClaro ? "oscuro" : "claro")}
        className="group relative h-14 w-28 shrink-0 rounded-full p-1.5 transition-colors duration-500"
        style={{
          background: esClaro
            ? "linear-gradient(160deg, #7dd3fc 0%, #38bdf8 45%, #0ea5e9 100%)"
            : "linear-gradient(160deg, #1e293b 0%, #0f172a 45%, #020617 100%)",
          boxShadow: esClaro
            ? "inset 0 2px 5px rgba(255,255,255,.55), inset 0 -3px 7px rgba(2,44,74,.5), 0 10px 22px -8px rgba(14,165,233,.6)"
            : "inset 0 2px 5px rgba(148,163,184,.28), inset 0 -3px 7px rgba(0,0,0,.85), 0 10px 22px -8px rgba(0,0,0,.9)",
        }}
      >
        {/* Textura: trama diagonal muy fina sobre el fondo del carril */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full opacity-[0.18] mix-blend-overlay"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(255,255,255,.9) 0 1px, transparent 1px 3px)",
          }}
        />

        {/* Iconos de fondo, el inactivo apagado */}
        <span className="pointer-events-none absolute inset-0 flex items-center justify-between px-3.5">
          <SunIcon
            className={cn(
              "size-4 transition-all duration-500",
              esClaro ? "text-amber-100/50" : "text-slate-500"
            )}
          />
          <MoonIcon
            className={cn(
              "size-4 transition-all duration-500",
              esClaro ? "text-sky-100/50" : "text-slate-300"
            )}
          />
        </span>

        {/* Perilla con relieve */}
        <span
          className={cn(
            "relative z-10 flex size-11 items-center justify-center rounded-full transition-transform duration-500 ease-out",
            esClaro ? "translate-x-0" : "translate-x-14"
          )}
          style={{
            background: esClaro
              ? "radial-gradient(circle at 32% 28%, #fffbeb 0%, #fde68a 45%, #f59e0b 100%)"
              : "radial-gradient(circle at 32% 28%, #f8fafc 0%, #cbd5e1 42%, #64748b 100%)",
            boxShadow: esClaro
              ? "inset 0 -3px 6px rgba(180,83,9,.45), inset 0 2px 4px rgba(255,255,255,.9), 0 6px 14px -3px rgba(180,83,9,.55)"
              : "inset 0 -3px 6px rgba(15,23,42,.5), inset 0 2px 4px rgba(255,255,255,.95), 0 6px 14px -3px rgba(0,0,0,.7)",
          }}
        >
          {esClaro ? (
            <SunIcon className="size-5 text-amber-700" strokeWidth={2.4} />
          ) : (
            <MoonIcon className="size-5 text-slate-700" strokeWidth={2.4} />
          )}
        </span>
      </button>

      {/* Burbuja que explica qué hace el botón */}
      <span className="relative max-w-xs rounded-xl border border-white/10 bg-wha-card/80 px-4 py-2.5 text-center text-xs leading-relaxed text-wha-muted sm:text-left">
        {/* Pico de la burbuja: abajo en móvil, a la izquierda en escritorio */}
        <span
          aria-hidden
          className="absolute -top-1.5 left-1/2 size-3 -translate-x-1/2 rotate-45 border-l border-t border-white/10 bg-wha-card/80 sm:left-0 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:border-l sm:border-t"
        />
        <strong className="font-semibold text-wha-fg">
          El panel tiene modo claro y oscuro de verdad.
        </strong>{" "}
        Pulsa el sol o la luna para ver todas las capturas de abajo en ese modo.
      </span>
    </div>
  )
}

/* ---------------------------------------------------------------- */

function Visor({
  pantalla,
  tema,
  onCerrar,
  onAnterior,
  onSiguiente,
}: {
  pantalla: Pantalla
  tema: Tema
  onCerrar: () => void
  onAnterior: () => void
  onSiguiente: () => void
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Captura ampliada: ${pantalla.title}`}
      onClick={onCerrar}
      className="fixed inset-0 z-100 flex flex-col items-center justify-center gap-4 bg-black/85 p-4 backdrop-blur-sm md:p-8"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl overflow-hidden rounded-xl border border-white/10 shadow-2xl"
      >
        <Image
          src={rutaCaptura(pantalla.id, tema)}
          alt={`AutoClinic — ${pantalla.title}`}
          width={1900}
          height={1078}
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>

      <div
        onClick={(e) => e.stopPropagation()}
        className="flex w-full max-w-6xl items-center justify-between gap-4"
      >
        <button
          type="button"
          onClick={onAnterior}
          aria-label="Captura anterior"
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/15"
        >
          <ChevronLeftIcon className="size-5" />
        </button>

        <p className="truncate text-center text-sm font-medium text-white">
          {pantalla.title}
          <span className="ml-2 font-normal text-white/50">
            modo {tema}
          </span>
        </p>

        <button
          type="button"
          onClick={onSiguiente}
          aria-label="Captura siguiente"
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/15"
        >
          <ChevronRightIcon className="size-5" />
        </button>
      </div>

      <button
        type="button"
        onClick={onCerrar}
        aria-label="Cerrar la vista ampliada"
        className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/25 md:right-8 md:top-8"
      >
        <XIcon className="size-5" />
      </button>
    </div>
  )
}

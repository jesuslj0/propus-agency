"use client"

import dynamic from "next/dynamic"
import { preload } from "react-dom"
import { useRef, useEffect, useState } from "react"
import type { Application } from "@splinetool/runtime"

// Internos del runtime que necesitamos para pausar SOLO el bucle de render.
// La API pública `stop()`/`play()` es asimétrica: `stop()` desactiva además el
// EventManager, y al reactivarse este no restaura ni el controlsManager ni las
// animaciones del mixer (`deactivate()` llama a `onExitPlayMode()`, que hace
// `stopAllAction()`, y `activate()` no tiene contrapartida). Por eso al volver
// al hero el fondo quedaba congelado y la bola dejaba de girar, mientras que
// el hover —cuyos handlers sí se reconectan— seguía respondiendo.
type PausableApplication = Application & {
  render: (time: number) => void
  _renderer?: {
    setAnimationLoop: (callback: ((time: number) => void) | null) => void
  }
  _lastTime?: number
}

// Arranca la descarga del chunk del runtime (~2 MB) en cuanto el navegador
// evalúa el bundle de la página, sin esperar a que el componente se monte.
if (typeof window !== "undefined") {
  void import("@splinetool/react-spline")
}

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => null,
})

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [app, setApp] = useState<Application | null>(null)
  // Compartido entre los dos efectos: mientras el hero está fuera de pantalla
  // no renderizamos y tampoco tiene sentido reenviar el puntero al canvas.
  const pausedRef = useRef(false)

  // Accesibilidad + rendimiento: si el usuario pide menos movimiento, no
  // se instancia la escena 3D (queda el fondo estático de la página). Se
  // evalúa en el inicializador (no en un efecto) para evitar un render extra;
  // la guarda `typeof window` mantiene el valor a false durante el SSR.
  const [reducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )

  // Precarga la escena en paralelo con el runtime: React hoistea el <link
  // rel="preload"> al <head>, así el .splinecode ya está en caché cuando el
  // runtime lo pide (antes se descargaba en serie, después del runtime).
  preload(scene, { as: "fetch", crossOrigin: "anonymous" })

  // Reenvía el movimiento del ratón al canvas (que tiene pointer-events:
  // none). Solo en dispositivos con hover real y como máximo una vez por
  // frame: en pantallas de 120/144 Hz el pointermove dispara mucho más
  // rápido de lo que se renderiza y saturaba el hilo principal.
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return

    let frame = 0
    let lastEvent: PointerEvent | null = null

    const flush = () => {
      frame = 0
      const canvas = canvasRef.current
      const e = lastEvent
      lastEvent = null
      if (!canvas || !e) return
      canvas.dispatchEvent(
        new PointerEvent("pointermove", {
          clientX: e.clientX,
          clientY: e.clientY,
          pointerId: e.pointerId,
          pointerType: "mouse",
          bubbles: true,
          cancelable: true,
        })
      )
    }

    const forward = (e: PointerEvent) => {
      if (!e.isTrusted || pausedRef.current) return
      lastEvent = e
      if (!frame) frame = requestAnimationFrame(flush)
    }

    window.addEventListener("pointermove", forward, { passive: true })
    return () => {
      window.removeEventListener("pointermove", forward)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  // La escena usa físicas y renderiza de forma continua aunque no se vea.
  // Cuando el hero sale del viewport (scroll), desenganchamos el bucle de
  // render para liberar GPU/CPU y que el resto de la página vaya fluida —
  // clave en móvil. Todo el trabajo caro (controles, físicas, partículas,
  // draw calls) vive dentro de `render`, así que basta con no llamarlo: el
  // sistema de eventos y las animaciones siguen intactos y al volver se
  // reanudan solos, sin el desmontaje parcial que provoca `stop()`.
  useEffect(() => {
    if (!app) return
    const target = app.canvas
    const runtime = app as PausableApplication
    const renderer = runtime._renderer
    // Si una versión futura del runtime renombra estos internos, preferimos
    // dejar la escena corriendo (correcta aunque más costosa) antes que caer
    // en `stop()`, que no resucita las animaciones en bucle.
    if (!target || typeof renderer?.setAnimationLoop !== "function") return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!pausedRef.current) return
          pausedRef.current = false
          // El reloj del runtime sigue anclado al último frame pintado: sin
          // resetearlo, el primer frame tras reanudar recibe un dt de varios
          // segundos y descuadra partículas, físicas y damping. Es el mismo
          // reset que hace el propio `dispose()` del runtime.
          runtime._lastTime = undefined
          renderer.setAnimationLoop(runtime.render)
        } else if (!pausedRef.current) {
          pausedRef.current = true
          renderer.setAnimationLoop(null)
        }
      },
      { rootMargin: "100px" }
    )
    observer.observe(target)
    return () => observer.disconnect()
  }, [app])

  if (reducedMotion) return null

  return (
    <Spline
      scene={scene}
      className={className}
      onLoad={(spline) => {
        canvasRef.current = spline.canvas
        setApp(spline)
      }}
      style={{ pointerEvents: "none" }}
    />
  )
}

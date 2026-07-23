"use client"

import dynamic from "next/dynamic"
import { preload } from "react-dom"
import { useRef, useEffect, useState } from "react"
import type { Application } from "@splinetool/runtime"

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
      if (!e.isTrusted) return
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
  // Cuando el hero sale del viewport (scroll), pausamos el runtime para
  // liberar GPU/CPU y que el resto de la página vaya fluida — clave en móvil.
  useEffect(() => {
    if (!app) return
    const target = app.canvas
    if (!target) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (app.isStopped) app.play()
        } else if (!app.isStopped) {
          app.stop()
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

"use client"

import dynamic from "next/dynamic"
import { useCallback, useEffect, useMemo, useRef } from "react"
import type { Application, SPEObject } from "@splinetool/runtime"

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => null,
})

interface SplineSceneProps {
  scene: string
  className?: string
  /** Nombre EXACTO del objeto en el árbol de Spline (sensible a mayúsculas) */
  objectName?: string
  /** Radianes de giro por píxel arrastrado */
  sensitivity?: number
  /** Tope de inclinación vertical, en radianes */
  maxTilt?: number
  /** Suavizado del seguimiento (0-1): más bajo = más inercia */
  damping?: number
}

const EPSILON = 0.0005

// Se calcula una sola vez por carga de página, fuera del render para no
// introducir impureza en el memo de abajo.
const DEV_CACHE_BUSTER =
  process.env.NODE_ENV === "development" ? Date.now().toString(36) : ""

function isInteractive(target: EventTarget | null) {
  return (
    target instanceof Element &&
    target.closest("a, button, input, textarea, select, [role='button'], [contenteditable='true']") !== null
  )
}

export function SplineScene({
  scene,
  className,
  objectName = "Group",
  sensitivity = 0.005,
  maxTilt = Math.PI / 6,
  damping = 0.08,
}: SplineSceneProps) {
  const objectRef = useRef<SPEObject | null>(null)
  const baseRotation = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const frame = useRef<number | null>(null)

  // Las escenas remotas se piden en desarrollo con un parámetro único por carga:
  // al republicar en Spline la URL no cambia y prod.spline.design no manda
  // Cache-Control, así que el navegador puede servir una copia rancia. Las
  // escenas locales las revalida el propio servidor de Next.
  const sceneUrl = useMemo(() => {
    if (!DEV_CACHE_BUSTER || !/^https?:\/\//.test(scene)) return scene
    const url = new URL(scene)
    url.searchParams.set("_dev", DEV_CACHE_BUSTER)
    return url.toString()
  }, [scene])

  const dragging = useRef(false)
  const dragOrigin = useRef({ x: 0, y: 0 })
  const dragRotation = useRef({ x: 0, y: 0 })

  const onLoad = useCallback(
    (spline: Application) => {
      // React StrictMode monta el efecto interno de react-spline dos veces en
      // dev: la primera Application se destruye antes de resolver su load().
      // Escribir sobre sus objetos no repinta nada, así que la descartamos.
      if ((spline as Application & { disposed?: boolean }).disposed) return

      const object = spline.findObjectByName(objectName)
      if (!object) {
        console.warn(
          `[SplineScene] No hay ningún objeto llamado "${objectName}" en la escena.`,
          "Nombres disponibles:",
          spline.getAllObjects().map((o) => o.name)
        )
        return
      }

      objectRef.current = object
      baseRotation.current = { x: object.rotation.x, y: object.rotation.y }
    },
    [objectName]
  )

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) return

    const tick = () => {
      const object = objectRef.current
      if (!object) {
        frame.current = null
        return
      }

      const dx = target.current.x - current.current.x
      const dy = target.current.y - current.current.y

      if (Math.abs(dx) < EPSILON && Math.abs(dy) < EPSILON) {
        // Ya convergió: paramos el bucle para no forzar un repintado por frame
        // (el runtime de Spline usa renderOnDemand).
        frame.current = null
        return
      }

      current.current.x += dx * damping
      current.current.y += dy * damping

      object.rotation.x = baseRotation.current.x + current.current.x
      object.rotation.y = baseRotation.current.y + current.current.y

      frame.current = requestAnimationFrame(tick)
    }

    const requestFrame = () => {
      if (frame.current === null) frame.current = requestAnimationFrame(tick)
    }

    const stopDrag = () => {
      if (!dragging.current) return
      dragging.current = false
      document.body.style.removeProperty("cursor")
      document.body.style.removeProperty("user-select")
    }

    const onDown = (e: PointerEvent) => {
      if (e.button !== 0 || isInteractive(e.target)) return

      dragging.current = true
      dragOrigin.current = { x: e.clientX, y: e.clientY }
      // Agarramos la rotación visible, no la de destino: así el arrastre
      // continúa desde donde está el objeto y no da un salto.
      dragRotation.current = { ...current.current }
      target.current = { ...current.current }

      document.body.style.cursor = "grabbing"
      document.body.style.userSelect = "none"
    }

    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return

      const dx = e.clientX - dragOrigin.current.x
      const dy = e.clientY - dragOrigin.current.y

      target.current.y = dragRotation.current.y + dx * sensitivity
      target.current.x = Math.max(
        -maxTilt,
        Math.min(maxTilt, dragRotation.current.x + dy * sensitivity)
      )

      requestFrame()
    }

    window.addEventListener("pointerdown", onDown)
    window.addEventListener("pointermove", onMove, { passive: true })
    window.addEventListener("pointerup", stopDrag)
    window.addEventListener("pointercancel", stopDrag)

    return () => {
      window.removeEventListener("pointerdown", onDown)
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerup", stopDrag)
      window.removeEventListener("pointercancel", stopDrag)
      stopDrag()
      if (frame.current !== null) cancelAnimationFrame(frame.current)
      frame.current = null
    }
  }, [damping, maxTilt, sensitivity])

  // Al cambiar de escena/objeto se invalida la referencia cacheada.
  useEffect(() => {
    return () => {
      objectRef.current = null
      current.current = { x: 0, y: 0 }
      target.current = { x: 0, y: 0 }
    }
  }, [scene, objectName])

  return (
    <Spline
      scene={sceneUrl}
      className={className}
      onLoad={onLoad}
      style={{ pointerEvents: "none" }}
    />
  )
}

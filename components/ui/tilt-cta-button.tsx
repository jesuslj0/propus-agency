"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/**
 * El Button de siempre, con profundidad encima. No define fondo, color de
 * texto, tamaño ni padding: todo eso sigue viniendo del `className` de cada
 * CTA, así que el botón se ve exactamente igual en reposo y solo cambia al
 * interactuar. Tres capas que responden a una única causa, el cursor:
 *
 * 1. Tilt 3D: `perspective()` + rotateX/rotateY siguiendo al puntero.
 * 2. Extrusión: sombras duras apiladas que simulan el canto de una tecla;
 *    crece al elevarse (hover) y se aplasta al pulsar (active).
 * 3. Especular: brillo radial que rastrea el cursor, con `mix-blend-overlay`
 *    para que lea como luz reflejada y no como una mancha.
 *
 * Los cantos y el halo se derivan de `tone`, que debe coincidir con el color
 * de fondo que trae el CTA. Se animan solo transform y box-shadow, nunca
 * layout, y se degradan a un hover plano sin hover real o con
 * `prefers-reduced-motion`.
 */

const MAX_TILT_Y = 16 // grados sobre el eje vertical (cursor izquierda ↔ derecha)
const MAX_TILT_X = 12 // grados sobre el eje horizontal (cursor arriba ↕ abajo)

const TONES = {
  emerald: "var(--color-brand-emerald)",
  spring: "var(--color-brand-spring)",
  sky: "var(--color-brand-sky)",
  facturia: "var(--color-facturia)",
} as const

type Tone = keyof typeof TONES

function TiltCtaButton({
  className,
  tone = "emerald",
  onPointerMove,
  onPointerLeave,
  style,
  ...props
}: React.ComponentProps<typeof Button> & { tone?: Tone }) {
  const frameRef = React.useRef(0)
  // `null` = aún sin evaluar. Se resuelve en el primer puntero, ya en cliente.
  const tiltAllowedRef = React.useRef<boolean | null>(null)

  const isTiltAllowed = () => {
    if (tiltAllowedRef.current === null) {
      tiltAllowedRef.current =
        window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }
    return tiltAllowedRef.current
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLButtonElement>) => {
    onPointerMove?.(event)
    if (!isTiltAllowed()) return

    const element = event.currentTarget
    const { clientX, clientY } = event
    // Un pointermove se dispara varias veces por frame en pantallas de alta
    // frecuencia; escribir las variables una vez por frame es suficiente.
    if (frameRef.current) return
    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = 0
      const rect = element.getBoundingClientRect()
      const x = (clientX - rect.left) / rect.width
      const y = (clientY - rect.top) / rect.height
      element.style.setProperty("--mx", `${x * 100}%`)
      element.style.setProperty("--my", `${y * 100}%`)
      element.style.setProperty("--ry", `${(x - 0.5) * MAX_TILT_Y}deg`)
      element.style.setProperty("--rx", `${(0.5 - y) * MAX_TILT_X}deg`)
    })
  }

  const handlePointerLeave = (event: React.PointerEvent<HTMLButtonElement>) => {
    onPointerLeave?.(event)
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current)
      frameRef.current = 0
    }
    // La transición de 200ms hace el retorno a plano; no hay que animarlo a mano.
    event.currentTarget.style.setProperty("--rx", "0deg")
    event.currentTarget.style.setProperty("--ry", "0deg")
  }

  React.useEffect(
    () => () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    },
    []
  )

  return (
    <Button
      data-tone={tone}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={
        {
          "--cta-tint": TONES[tone],
          "--edge": "color-mix(in oklab, var(--cta-tint), black 45%)",
          "--edge-deep": "color-mix(in oklab, var(--cta-tint), black 72%)",
          "--bloom": "color-mix(in oklab, var(--cta-tint) 55%, transparent)",
          ...style,
        } as React.CSSProperties
      }
      className={cn(
        // `isolate` acota el mix-blend del especular al propio botón y hace
        // que el ::before con z negativo se pinte sobre el fondo del CTA
        // pero por debajo de su texto.
        "relative isolate cursor-pointer duration-200 ease-out",
        "transform-[perspective(600px)_rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))_translateY(var(--lift,0px))_scale(var(--press,1))]",
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.45),0_2px_0_0_var(--edge),0_4px_0_0_var(--edge-deep),0_8px_18px_-8px_var(--bloom)]",
        "hover:[--lift:-3px] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_3px_0_0_var(--edge),0_7px_0_0_var(--edge-deep),0_20px_32px_-10px_var(--bloom)]",
        "active:[--press:0.98] active:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35),0_1px_0_0_var(--edge),0_2px_0_0_var(--edge-deep),0_6px_12px_-8px_var(--bloom)]",
        'before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:content-[""]',
        "before:bg-[radial-gradient(circle_90px_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,0.75),transparent_70%)]",
        "before:opacity-0 before:mix-blend-overlay before:transition-opacity before:duration-200",
        "hover:before:opacity-100",
        "motion-reduce:hover:[--lift:0px] motion-reduce:active:[--press:1] motion-reduce:before:hidden",
        className
      )}
      {...props}
    />
  )
}

export { TiltCtaButton }

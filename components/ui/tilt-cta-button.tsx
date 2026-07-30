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
 *
 * Todas las variables van con prefijo `--tilt-` para que nada de fuera pueda
 * pisarlas: son propiedades personalizadas sin registrar, así que heredan, y
 * un `--press` suelto en cualquier ancestro colapsaría el botón.
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

// El tilt necesita `perspective()`, y eso promueve el botón a su propia capa
// de composición. Junto a un filtro SVG animado —el `EtheralShadow` del CTA
// final— Chrome deja de pintar la capa y el botón desaparece. `flat` conserva
// elevación, extrusión, halo y especular, y renuncia solo a la inclinación.
const TRANSFORM_3D =
  "transform-[perspective(600px)_rotateX(var(--tilt-rx,0deg))_rotateY(var(--tilt-ry,0deg))_translateY(var(--tilt-lift,0px))_scale(var(--tilt-press,1))]"
const TRANSFORM_FLAT =
  "transform-[translateY(var(--tilt-lift,0px))_scale(var(--tilt-press,1))]"

function TiltCtaButton({
  className,
  tone = "emerald",
  flat = false,
  onPointerMove,
  onPointerLeave,
  style,
  ...props
}: React.ComponentProps<typeof Button> & { tone?: Tone; flat?: boolean }) {
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
      element.style.setProperty("--tilt-mx", `${x * 100}%`)
      element.style.setProperty("--tilt-my", `${y * 100}%`)
      if (flat) return
      element.style.setProperty("--tilt-ry", `${(x - 0.5) * MAX_TILT_Y}deg`)
      element.style.setProperty("--tilt-rx", `${(0.5 - y) * MAX_TILT_X}deg`)
    })
  }

  const handlePointerLeave = (event: React.PointerEvent<HTMLButtonElement>) => {
    onPointerLeave?.(event)
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current)
      frameRef.current = 0
    }
    // La transición de 200ms hace el retorno a plano; no hay que animarlo a mano.
    event.currentTarget.style.setProperty("--tilt-rx", "0deg")
    event.currentTarget.style.setProperty("--tilt-ry", "0deg")
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
        // `relative` para anclar el ::before. El propio transform ya crea el
        // contexto de apilado que contiene el z negativo y aísla el blend, así
        // que no hace falta `isolate`.
        "relative cursor-pointer duration-200 ease-out",
        flat ? TRANSFORM_FLAT : TRANSFORM_3D,
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.45),0_2px_0_0_var(--edge),0_4px_0_0_var(--edge-deep),0_8px_18px_-8px_var(--bloom)]",
        "hover:[--tilt-lift:-3px] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_3px_0_0_var(--edge),0_7px_0_0_var(--edge-deep),0_20px_32px_-10px_var(--bloom)]",
        "active:[--tilt-press:0.98] active:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35),0_1px_0_0_var(--edge),0_2px_0_0_var(--edge-deep),0_6px_12px_-8px_var(--bloom)]",
        'before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:content-[""]',
        "before:bg-[radial-gradient(circle_90px_at_var(--tilt-mx,50%)_var(--tilt-my,50%),rgba(255,255,255,0.75),transparent_70%)]",
        "before:opacity-0 before:mix-blend-overlay before:transition-opacity before:duration-200",
        "hover:before:opacity-100",
        "motion-reduce:hover:[--tilt-lift:0px] motion-reduce:active:[--tilt-press:1] motion-reduce:before:hidden",
        className
      )}
      {...props}
    />
  )
}

export { TiltCtaButton }

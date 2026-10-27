"use client";
import React, { useEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

const beforeAfterStyles = `
  [data-glow]::before,
  [data-glow]::after {
    pointer-events: none;
    content: "";
    position: absolute;
    inset: calc(var(--border-size) * -1);
    border: var(--border-size) solid transparent;
    border-radius: calc(var(--radius) * 1px);
    background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
    background-repeat: no-repeat;
    background-position: 50% 50%;
    mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
    mask-clip: padding-box, border-box;
    mask-composite: intersect;
  }

  [data-glow]::before {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
      calc(var(--x, -1000) * 1px) calc(var(--y, -1000) * 1px),
      hsl(var(--hue, 165) 100% 55% / 1),
      hsl(var(--hue-secondary, 185) 100% 45% / 0.6),
      transparent 100%
    );
    filter: brightness(2.5) saturate(1.8);
  }

  [data-glow]::after {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
      calc(var(--x, -1000) * 1px) calc(var(--y, -1000) * 1px),
      hsl(var(--hue, 165) 100% 65% / 0.5),
      transparent 100%
    );
  }

  [data-glow] [data-glow] {
    position: absolute;
    inset: 0;
    will-change: filter;
    opacity: var(--outer, 1);
    border-radius: calc(var(--radius) * 1px);
    border-width: calc(var(--border-size) * 20);
    filter: blur(calc(var(--border-size) * 10));
    background: none;
    pointer-events: none;
    border: none;
  }

  [data-glow] > [data-glow]::before {
    inset: -10px;
    border-width: 10px;
  }
`;

export function GlowCard({ children, className }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // El foco usa background-attachment: scroll con coordenadas relativas a la
    // tarjeta. Con "fixed" (coordenadas de viewport) Chrome no puede componer
    // ese fondo en una tarjeta con borde redondeado y manda TODO el scroll de
    // la página al hilo principal. Para que el foco siga clavado al puntero
    // mientras se hace scroll, se recalcula también en "scroll", solo si la
    // tarjeta está en pantalla.
    const pointer = { x: 0, y: 0, active: false };
    let inView = false;
    let frame = 0;

    const paint = () => {
      frame = 0;
      const rect = card.getBoundingClientRect();
      // Espectro corporativo: cyan/azul (190) → verde (135) según posición del puntero
      const hue = 195 - (pointer.x / window.innerWidth) * 60;
      card.style.setProperty("--x", (pointer.x - rect.left).toFixed(2));
      card.style.setProperty("--y", (pointer.y - rect.top).toFixed(2));
      card.style.setProperty("--hue", hue.toFixed(1));
      card.style.setProperty("--hue-secondary", (hue + 20).toFixed(1));
    };
    const schedule = () => {
      if (inView && pointer.active && !frame) frame = requestAnimationFrame(paint);
    };

    const syncPointer = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
      schedule();
    };

    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      schedule();
    });
    observer.observe(card);

    document.addEventListener("pointermove", syncPointer);
    window.addEventListener("scroll", schedule, { passive: true });
    return () => {
      document.removeEventListener("pointermove", syncPointer);
      window.removeEventListener("scroll", schedule);
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: beforeAfterStyles }} />
      <div
        ref={cardRef}
        data-glow
        className={cn("relative backdrop-blur-[5px]", className)}
        style={
          {
            "--radius": "16",
            borderRadius: "calc(var(--radius) * 1px)",
            "--border": "2",
            "--outer": "1",
            "--border-size": "calc(var(--border, 2) * 1px)",
            "--spotlight-size": "380px",
            backgroundImage: `radial-gradient(
              380px 380px at
              calc(var(--x, -1000) * 1px) calc(var(--y, -1000) * 1px),
              hsl(var(--hue, 165) 90% 50% / 0.12),
              hsl(var(--hue-secondary, 185) 100% 55% / 0.06),
              transparent
            )`,
            backgroundColor: "hsl(0 0% 60% / 0.08)",
            backgroundSize: "calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))",
            backgroundPosition: "50% 50%",
            border: "var(--border-size) solid hsl(168 60% 45% / 0.25)",
          } as React.CSSProperties
        }
      >
        <div data-glow />
        <div className="relative rounded-[inherit] h-full">
          {children}
        </div>
      </div>
    </>
  );
}

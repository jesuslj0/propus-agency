"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRightIcon, SparklesIcon, BotIcon, MonitorIcon, TrendingUpIcon, SearchIcon, LightbulbIcon, RocketIcon } from "lucide-react"
import { SplineScene } from "@/components/ui/spline-scene"
import { TiltCtaButton } from "@/components/ui/tilt-cta-button"
// Producción sirve siempre la copia auto-hospedada: evita la conexión a un
// tercer dominio y permite precargarla en paralelo al runtime. En desarrollo,
// NEXT_PUBLIC_SPLINE_SCENE (.env.local) permite apuntar a la escena publicada
// en Spline para ir viendo los cambios; `pnpm run spline:pull` la congela aquí.
const splineSceneLogo =
  (process.env.NODE_ENV === "development" && process.env.NEXT_PUBLIC_SPLINE_SCENE) ||
  "/spline/logo.splinecode"

export default function Hero() {

  return (
    <section className="relative flex min-h-svh items-stretch pt-24 pb-16 md:block md:min-h-0 md:pt-44 md:pb-28 2xl:pt-56 2xl:pb-36 overflow-hidden bg-transparent">

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-stretch gap-x-10 px-4 md:grid-cols-2 md:items-center 2xl:max-w-7xl">

        {/* Escena Spline — la cámara ortográfica tiene zoom fijo, así que el
            canvas actúa de ventana: por debajo de ~32rem de lado recorta la
            figura. En móvil va centrada detrás del texto, desbordando el ancho
            si hace falta; desde md ocupa la columna derecha */}
        <div className="absolute left-1/2 top-1/2 z-0 aspect-square w-[115%] min-w-[32rem] max-w-[36rem] -translate-x-1/2 -translate-y-1/2 md:relative md:inset-auto md:order-2 md:z-10 md:w-full md:min-w-0 md:max-w-none md:max-h-[32rem] md:translate-x-0 md:translate-y-0 2xl:max-h-[38rem]">
          <SplineScene
            scene={splineSceneLogo}
            className="w-full h-full"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-between text-center md:order-1 md:items-start md:justify-center md:text-left">

          {/* Grupo superior: eyebrow + título */}
          <div className="flex flex-col items-center md:items-start mt-6">
            <Badge
              variant="outline"
              className="mb-6 gap-1.5 border-brand-teal/40 text-brand-teal dark:border-brand-teal/40 dark:text-brand-teal py-1 px-3 h-auto rounded-full"
            >
              <SparklesIcon className="size-3" />
              Más tiempo para lo que importa
            </Badge>

            <h1 className="max-w-4xl 2xl:max-w-5xl flex flex-col">
              <span className="block text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold tracking-tight text-foreground/75 leading-snug">
                Tu tiempo es demasiado valioso
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-semibold tracking-tight leading-[1.1] bg-linear-to-r from-brand-sky via-brand-teal to-brand-green bg-clip-text text-transparent">
                para gastarlo<br/> en esto.
              </span>
            </h1>
          </div>

          {/* Grupo inferior: párrafo + botones */}
          <div className="flex flex-col items-center md:items-start">
            <p className="mt-6 text-base text-muted-foreground max-w-xl md:text-lg 2xl:text-xl 2xl:max-w-2xl leading-loose">
              Automatizamos tus citas, tus documentos y mejoramos tu presencia online para que dejes de hacer en horas lo que puede hacerse solo.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center md:items-start gap-4">
              <TiltCtaButton
                size="lg"
                className="bg-brand-emerald hover:bg-brand-teal text-background font-semibold gap-2 h-11 px-6"
                asChild
              >
                <Link href="/#proceso">
                  Ver cómo funciona
                  <ArrowRightIcon className="size-4" />
                </Link>
              </TiltCtaButton>
              <Button variant="outline" size="lg" className="h-11 px-6" asChild>
                <Link href="/#contacto">Habla con nosotros</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DisenoWebCTA() {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-brand-teal/5 p-8 text-center md:p-12">
        <h2 className="mb-3 text-2xl font-semibold md:text-3xl">
          ¿Hablamos de la web de tu clínica?
        </h2>
        <p className="mx-auto mb-6 max-w-xl text-muted-foreground">
          Cuéntanos cómo es tu clínica hoy y qué quieres conseguir con la web. Sin compromiso.
        </p>
        <Button
          size="lg"
          className="bg-brand-emerald text-background font-semibold hover:bg-brand-teal gap-2"
          asChild
        >
          <Link href="https://calendar.app.google/CNBch8s1Q8iqoqdE9" target="_blank" rel="noopener noreferrer">
            Agendar llamada
            <ArrowRightIcon className="size-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

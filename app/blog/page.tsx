import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { getAllPosts } from "@/lib/blog"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: "Blog | IA y Automatización en Albacete",
  description:
    "Artículos sobre inteligencia artificial, automatización de procesos y transformación digital para empresas en Albacete y Castilla-La Mancha.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog — Propus | IA y Automatización en Albacete",
    description:
      "Artículos sobre inteligencia artificial, automatización de procesos y transformación digital para empresas en Albacete y Castilla-La Mancha.",
    type: "website",
    locale: "es_ES",
  },
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <Navbar />
      <main className="relative z-10">
        {/* Hero */}
        <section className="px-4 pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Blog de{" "}
              <span className="bg-gradient-to-r from-brand-teal to-brand-lime bg-clip-text text-transparent">
                Propus
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Ideas, guías y casos prácticos sobre inteligencia artificial,
              automatización y transformación digital para empresas en Albacete y
              Castilla-La Mancha.
            </p>
          </div>
        </section>

        {/* Posts grid */}
        <section className="px-4 pb-20 md:pb-28">
          <div className="mx-auto max-w-6xl">
            {posts.length === 0 ? (
              <p className="text-center text-muted-foreground py-20">
                Próximamente publicaremos contenido aquí.
              </p>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block h-full"
                  >
                    <Card className="relative h-full overflow-hidden border-border bg-card transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-brand-teal/50 group-hover:shadow-xl group-hover:shadow-brand-teal/10">
                      {/* Línea de acento superior */}
                      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-teal/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      {/* Glow radial sutil al hacer hover */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-brand-teal/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                      />
                      <CardContent className="relative flex h-full flex-col pt-6">
                        <div className="mb-3 flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <h2 className="mb-2 text-lg font-semibold leading-tight transition-colors duration-300 group-hover:text-brand-teal">
                          {post.title}
                        </h2>
                        <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                          {post.description}
                        </p>
                        <div className="mt-auto flex items-center justify-between text-xs text-muted-foreground">
                          <time dateTime={post.date}>
                            {formatDate(post.date)}
                          </time>
                          <span>{post.readingTime}</span>
                        </div>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-teal">
                          Leer más
                          <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

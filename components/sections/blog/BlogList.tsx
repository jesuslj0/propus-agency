import Link from "next/link"
import Image from "next/image"
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import type { BlogPost } from "@/lib/blog"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

/** La página 1 vive en /blog; el resto en /blog/pagina/N. */
export function pageHref(page: number): string {
  return page <= 1 ? "/blog" : `/blog/pagina/${page}`
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

interface BlogListProps {
  posts: BlogPost[]
  page: number
  totalPages: number
}

export default function BlogList({ posts, page, totalPages }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <p className="py-20 text-center text-muted-foreground">
        Próximamente publicaremos contenido aquí.
      </p>
    )
  }

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block h-full"
          >
            <Card className="relative h-full gap-0 overflow-hidden border-border bg-card pt-0 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-brand-teal/50 group-hover:shadow-xl group-hover:shadow-brand-teal/10">
              {/* Banda de imagen. Casi todas son capturas de producto, así que
                  se muestran nítidas y se funden con la card por abajo con un
                  degradado, en vez de lavarlas por detrás del texto. */}
              {post.image && (
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt=""
                    aria-hidden
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-card/35 to-transparent"
                  />
                </div>
              )}

              {/* Línea de acento superior */}
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-teal/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              {/* Glow radial sutil al hacer hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-brand-teal/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <CardContent className={cn("relative flex flex-col", post.image ? "flex-1 pt-5" : "h-full pt-6")}>
                <div className="mb-3 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
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
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
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

      {totalPages > 1 && (
        <Pagination page={page} totalPages={totalPages} />
      )}
    </>
  )
}

function Pagination({ page, totalPages }: { page: number; totalPages: number }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <nav
      aria-label="Paginación del blog"
      className="mt-14 flex items-center justify-center gap-2"
    >
      <PagerLink
        href={pageHref(page - 1)}
        disabled={page <= 1}
        label="Página anterior"
      >
        <ChevronLeftIcon className="size-4" />
        <span className="hidden sm:inline">Anterior</span>
      </PagerLink>

      {pages.map((n) => (
        <Link
          key={n}
          href={pageHref(n)}
          aria-label={`Página ${n}`}
          aria-current={n === page ? "page" : undefined}
          className={cn(
            "inline-flex size-9 items-center justify-center rounded-md border text-sm transition-colors",
            n === page
              ? "border-brand-teal/50 bg-brand-teal/10 font-semibold text-brand-teal"
              : "border-border text-muted-foreground hover:border-brand-teal/40 hover:text-foreground"
          )}
        >
          {n}
        </Link>
      ))}

      <PagerLink
        href={pageHref(page + 1)}
        disabled={page >= totalPages}
        label="Página siguiente"
      >
        <span className="hidden sm:inline">Siguiente</span>
        <ChevronRightIcon className="size-4" />
      </PagerLink>
    </nav>
  )
}

function PagerLink({
  href,
  disabled,
  label,
  children,
}: {
  href: string
  disabled: boolean
  label: string
  children: React.ReactNode
}) {
  const classes =
    "inline-flex h-9 items-center gap-1 rounded-md border border-border px-3 text-sm transition-colors"

  // Sin destino no se renderiza un enlace: un <a> deshabilitado no existe en
  // HTML y confundiría a lectores de pantalla y al rastreador.
  if (disabled) {
    return (
      <span
        aria-hidden
        className={cn(classes, "cursor-default text-muted-foreground/40")}
      >
        {children}
      </span>
    )
  }

  return (
    <Link
      href={href}
      aria-label={label}
      className={cn(classes, "text-muted-foreground hover:border-brand-teal/40 hover:text-foreground")}
    >
      {children}
    </Link>
  )
}

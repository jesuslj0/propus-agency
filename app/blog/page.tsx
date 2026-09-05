import type { Metadata } from "next"
import { getPostsByPage, getTotalPages } from "@/lib/blog"
import BlogList from "@/components/sections/blog/BlogList"
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

export default function BlogPage() {
  const posts = getPostsByPage(1)
  const totalPages = getTotalPages()

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
            <BlogList posts={posts} page={1} totalPages={totalPages} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

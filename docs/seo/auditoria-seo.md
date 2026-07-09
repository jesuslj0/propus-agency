# Auditoría SEO — Propus (propus.ink)

> Fecha: 2026-07-09 · Marca pública: **Propus** · Dominio canónico: **https://propus.ink**
> Posicionamiento: **nacional + base local (Albacete)**
> Target: clínicas dentales (principal) y de estética (secundario) — agentes recepcionistas autónomos en WhatsApp + CRM de control interno — y diseño web experto (4 clientes en producción).
>
> Auditoría realizada leyendo el repo archivo por archivo (todas las rutas de `app/`, layouts, navbar/footer, secciones, manifest, next.config y schemas existentes).
>
> El prompt de ejecución derivado de esta auditoría está en [prompt-ejecucion-seo.md](./prompt-ejecucion-seo.md).

---

## Resumen ejecutivo

| Prioridad | Hallazgo |
|---|---|
| 🔴 Alta | No existe `app/sitemap.ts` ni `app/robots.ts` — Google no tiene mapa del sitio ni directivas de rastreo |
| 🔴 Alta | Sin `metadataBase` ni canonicals en ninguna página → riesgo de URLs duplicadas indexadas y OG images rotas en absoluto |
| 🔴 Alta | **Cero contenido para el nicho objetivo**: ni una página ni post ataca "recepcionista virtual clínica dental", "software citas clínica", "diseño web para clínicas". El único post es genérico ("IA en Albacete") |
| 🔴 Alta | El H1 de la home no contiene ninguna keyword ("Tu tiempo es demasiado valioso para gastarlo en esto") y hay un **segundo `<h1>` decorativo** dentro del mockup de `components/sections/ServiceWeb.tsx:193` |
| 🟡 Media | JSON-LD incompleto: falta Organization global, Service en las landings de producto, FAQPage (la home tiene 6 FAQs server-rendered, ideal para rich results), BreadcrumbList |
| 🟡 Media | Sin OpenGraph images en ninguna página; sin Twitter card global; sin `title.template` en el layout raíz |
| 🟡 Media | Blog con 1 solo post: sin cluster temático no hay autoridad topical para el vertical salud |
| 🟢 Baja | `LocalBusiness` limita `areaServed` a Albacete/CLM (contradicción con alcance nacional); email público `salesteam@alt4ir.com` bajo marca Propus; `keywords` meta en sobre-nosotros (Google la ignora); Spline 3D en el Hero es riesgo de LCP; `/offline` y `/legal/*` sin `robots: noindex` (offline) ni canonical |

**Fortalezas ya existentes** (no tocar, ya funcionan): fuentes auto-hospedadas con `display: swap`, `next/image` en galerías, `lang="es"`, manifest completo, `generateStaticParams` en blog, BlogPosting schema básico, breadcrumb visual en posts, metadata por página en todas las rutas.

---

## Tabla de hallazgos

| Área | Problema | Impacto SEO | Acción |
|---|---|---|---|
| Indexación | Sin sitemap.xml | Google descubre rutas lento o nunca | Crear `app/sitemap.ts` |
| Indexación | Sin robots.txt | Sin control de rastreo ni referencia al sitemap | Crear `app/robots.ts` |
| Metadata | Sin `metadataBase`/canonicals | Duplicados, OG relativos rotos | `metadataBase: new URL("https://propus.ink")` + `alternates.canonical` por página |
| Metadata | Sin OG images ni `title.template` | CTR bajo en compartidos y SERP | OG image global + template `"%s — Propus"` |
| Contenido | Home sin keywords en H1/copy | No rankea para nada transaccional | Enriquecer (sin rediseñar) el copy de secciones existentes es opcional; la captación va en landings nuevas |
| Semántica | Doble H1 en `/` (mockup decorativo) | Confusión de tema de página | Cambiar el `<h1>` de `components/sections/ServiceWeb.tsx:193` por `<p>` con las mismas clases (cero cambio visual) — única edición semántica recomendada |
| Schema | Sin Organization/Service/FAQPage/Breadcrumb | Sin rich results | Componentes JSON-LD nuevos en `components/seo/` |
| Schema | `LocalBusiness` solo local + solo en sobre-nosotros | Limita alcance nacional | Ampliar `areaServed` con `{ "@type": "Country", name: "España" }` |
| Contenido | 1 post genérico, cero cluster salud | Sin autoridad topical | Cluster pillar + 5 posts (ver plan de contenidos) |
| Arquitectura | No hay landings por vertical (dental/estética/diseño web salud) | Se pierde toda la demanda transaccional del nicho | 3 landings nuevas bajo `/soluciones/*` y `/servicios/*` |
| Portfolio | `/proyectos/web-design` ya centraliza los 4 clientes pero su metadata no ataca keyword | Oportunidad desaprovechada | Enriquecer title/description; enlaces salientes con `rel` por defecto (dofollow está bien: son trabajos propios) |
| Local | Sin Google Business Profile | Pierde pack local | Recomendación operativa (fuera de código): crear GBP en Albacete |
| CWV | Spline 3D como fondo del Hero | LCP/INP en móvil | Solo monitorizar; no tocar (restricción de no modificar diseño) |

---

## Keyword mapping (sin canibalización)

| Ruta | Keyword primaria | Intención | Secundarias |
|---|---|---|---|
| `/` | automatización con IA para negocios | Marca/general | agencia automatización IA, agentes inteligentes |
| `/proyectos/agente-whatsapp` | agente de WhatsApp para clínicas (producto AutoClinic) | Producto | recepcionista IA WhatsApp, gestión citas WhatsApp |
| **NUEVA** `/soluciones/clinicas` | agente y CRM para clínicas | Transaccional | recepcionista virtual clínica dental, software citas clínica, CRM dental, automatización clínica estética/fisioterapia |
| **NUEVA** `/servicios/diseno-web-clinicas` | diseño web para clínicas | Transaccional | diseño web clínica dental, página web sector salud |
| `/proyectos/web-design` | diseño de páginas web a medida (portfolio) | Prueba social | ejemplos webs restaurantes/comercios, portfolio diseño web |
| `/proyectos/facturia` | gestión de facturas con IA (ya bien orientada) | Producto | OCR facturas, automatizar facturación |
| `/sobre-nosotros` | agencia de IA en Albacete | Local/marca | (mantener; es la única página local por diseño) |
| `/blog` | hub | Informacional | — |

---

## Plan de contenidos (cluster salud + diseño web)

**Pillar:** `recepcionista-virtual-clinica-dental` — "Recepcionista virtual para clínicas dentales: guía completa (WhatsApp + IA)" — enlaza a las 2 landings y a todos los posts.

| Slug | Keyword | Ángulo único |
|---|---|---|
| `chatbot-whatsapp-citas-clinica` | chatbot WhatsApp para citas médicas | Cómo funciona técnicamente: agenda, cancelaciones, huecos |
| `reducir-no-shows-clinica-recordatorios` | reducir ausencias citas clínica | ROI: coste de un no-show, recordatorios automáticos |
| `software-gestion-clinica-dental` | software de gestión para clínica dental | Qué debe tener un CRM clínico (agenda, pacientes, base de conocimiento) |
| `automatizar-recepcion-clinica-estetica` | automatización clínica de estética | Caso beta tester estética, diferencias vs dental |
| `diseno-web-clinica-dental` | diseño web para clínica dental | Qué convierte visitas en primeras citas; enlaza al portfolio |

Cada post con keyword primaria distinta, sin repetir bloques de copy, con CTA hacia su landing correspondiente.

---

## Archivos NUEVOS / metadata a enriquecer

**Crear:**
- `app/sitemap.ts`
- `app/robots.ts`
- `app/soluciones/clinicas/page.tsx` (landing unificada: dental + estética + fisioterapia)
- `app/servicios/diseno-web-clinicas/page.tsx`
- Secciones en `components/sections/soluciones/**` y `components/sections/servicios/**`
- `components/seo/OrganizationSchema.tsx`, `ServiceSchema.tsx`, `FAQSchema.tsx`, `BreadcrumbSchema.tsx`
- 6 posts nuevos en `lib/blog.ts` (añadir al array existente)

**Enriquecer (sin rediseñar):**
- `app/layout.tsx` — metadataBase, title template, OG/Twitter global, Organization schema
- Canonicals en las 8 páginas con metadata
- `components/seo/LocalBusinessSchema.tsx` — areaServed nacional
- Metadata de `/proyectos/web-design`
- `robots: { index: false }` en `/offline`
- `<h1>` → `<p>` en `components/sections/ServiceWeb.tsx:193` (mockup decorativo, mismas clases, cero cambio visual)

---

## Notas operativas (fuera de código)

- Crear perfil de **Google Business Profile** en Albacete: categoría "Consultora informática", dominio propus.ink, mismo NAP que el schema LocalBusiness — es lo que activa el pack local.
- Tras el deploy: dar de alta la propiedad en **Google Search Console** y enviar el sitemap.
- Validar los schemas con el [Rich Results Test](https://search.google.com/test/rich-results).
- ~~Inconsistencia de marca: email público `salesteam@alt4ir.com` bajo marca Propus~~ → **Resuelto**: correo de contacto unificado a `team@propus.ink` y perfil de Instagram actualizado a `propus_nation`.

# Prompt para Claude Code: propus.ink, posicionamiento y SEO técnico

> Abre Claude Code en `propus-agency` y dile: "Lee `prompt-propus-ink-seo.md` y ejecútalo".

---

## Contexto

Este repositorio es **propus.ink**, la web de la agencia Propus (Next.js 16, App Router). Lo que dice Search Console:

- **Solo hay 2 de 30 páginas indexadas.** Las otras 23 están en "Descubierta: actualmente sin indexar": Google sabe que existen pero no las ha visitado. No hay errores técnicos: las páginas se renderizan como HTML, no tienen `noindex` y la canonical es correcta. El problema es la poca autoridad del dominio. Ya se ha solicitado la indexación a mano, y se van a enlazar desde las webs de clientes.
- **Búsquedas:** "propus" aparece en la posición ~8, porque hay otras marcas con el mismo nombre. "agencia ia albacete" está en la posición ~53.
- **Posicionamiento decidido:** la agencia **no quiere presentarse como "agencia de IA"**, porque no todo lo que hace es IA. Se presenta como **desarrollo web, software a medida y automatización en Albacete**, y la IA es una de las herramientas. Las búsquedas de "diseño web / desarrollo web Albacete" tienen además más volumen que las de "agencia IA".
- Sigue `CLAUDE.md` y `AGENTS.md`. **No hagas commit ni push** salvo que se pida.

## Paso 0

`git status` y `git pull`. Revisa `app/layout.tsx` (metadata), `components/sections/Hero.tsx`, `app/sitemap.ts`, `app/robots.ts` y las páginas de `servicios`, `soluciones`, `proyectos` y `blog`. Enséñame un plan breve **antes de cambiar nada**.

## Tarea 1: el hero de la portada

- **Mantén el H1 actual**, "Tu tiempo es demasiado valioso para gastarlo en esto", con su diseño.
- Añade justo encima, como eyebrow, o debajo, como subtítulo, un texto visible con la palabra clave. Propuesta: **"Desarrollo web, software a medida y automatización en Albacete"**. Elige la posición que encaje mejor con el diseño y explícame por qué.
- Así Google entiende a qué se dedica la agencia sin que el H1 pierda gancho. Si te parece mejor para el SEO incluir ese texto **dentro** del H1, por ejemplo con un `<span>` de estilo distinto, propónmelo y justifícalo, pero no lo hagas sin consultarme.

## Tarea 2: metadatos

- **Title de la portada:** algo como **"Propus · Desarrollo web, software y automatización en Albacete"**, con menos de 60 caracteres si es posible. Revisa también `openGraph` y `twitter`, que ahora dicen "Automatización e IA para tu negocio".
- **Meta description:** unos 150 caracteres, con desarrollo web, software a medida, automatización (con IA como herramienta) y Albacete.
- **Revisa el title y la description de cada página** de servicios, soluciones, proyectos, sobre nosotros y blog. Cada una debe ser única y coherente con el nuevo posicionamiento, y no presentar la agencia como "agencia de IA".
- **JSON-LD:** si no existe, añade `Organization` (o `ProfessionalService`) en la portada con `name` "Propus", `url`, `logo`, `areaServed` (Albacete / Castilla-La Mancha / España) y `sameAs` con las redes que ya aparezcan en la web. **No pongas dirección física**: la agencia no tiene local abierto al público.

## Tarea 3: enlazar los proyectos con las webs de clientes

En `/proyectos/web-design` (y donde se muestren casos de webs), cada proyecto debe enlazar a la web real del cliente, **solo si está publicada y funcionando**:

- https://elacuifero.es/
- https://www.casinoelbonillo.com/
- https://golosea.com/
- https://www.liopub.com/

Las webs de clientes ya enlazan a propus.ink desde el footer, así que esto cierra el círculo y refuerza los casos reales. Usa el nombre del negocio como texto del enlace.

## Tarea 4: sitemap

- Excluye `/blog/pagina/[num]` del sitemap (`app/sitemap.ts`). Son páginas de listado y no aportan nada. Las páginas siguen existiendo; solo salen del sitemap.
- Comprueba que el sitemap incluye la portada, servicios, soluciones, proyectos, sobre nosotros, blog y todos los artículos, y que no incluye `/offline`.

## Tarea 5: rendimiento del hero

El hero usa Spline o Three.js. Pasa **Lighthouse móvil** a la portada. Si el rendimiento baja de 80, o si el LCP depende del canvas 3D, propón cómo mejorarlo **sin quitar el 3D**: carga diferida, póster estático mientras carga, no cargarlo en móvil, etc. **No implementes nada de esto sin consultarme.**

## Comprobación final

1. `pnpm build` sin errores.
2. Revisa el HTML generado de la portada, de un servicio y de un artículo: un solo H1, title, description, canonical y JSON-LD válidos.
3. Lighthouse móvil de la portada antes y después.
4. Dame un resumen con los archivos cambiados, los títulos y descripciones nuevos (para que los revise) y la URL del sitemap.

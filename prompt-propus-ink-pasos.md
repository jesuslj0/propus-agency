# propus.ink: SEO y rendimiento, paso a paso

> Abre Claude Code en `propus-agency`. Cada paso es **independiente y pequeño**, para gastar pocos créditos y poder parar en cualquiera. Pega un bloque, espera el resultado, y pasa al siguiente cuando puedas.
>
> Cada paso termina con un **commit local en una rama** (sin push), así, si te quedas sin créditos, no se pierde nada y retomas donde lo dejaste. Cuando estén todos, haces el push tú.
>
> **Orden por prioridad:** 0 → 1 → 2 → 3 → 4 → 5 → 6. Si solo puedes hacer unos pocos, los pasos 1, 2 y 3 son los que más afectan a Google y cuestan menos.

---

## Paso 0: preparación (muy barato)

```
Estamos en propus-agency (Next.js 16). Sigue CLAUDE.md y AGENTS.md. No hagas push en ningún paso salvo que yo lo pida expresamente.

1. Haz git status y git pull.
2. Crea y cámbiate a una rama nueva llamada seo-posicionamiento.
3. Saca del staging el archivo public/favicons/FaviconWhatsapp.jpeg con git restore --staged public/favicons/FaviconWhatsapp.jpeg. Dime cuánto pesa y si algún archivo del proyecto lo usa. Si no se usa en ningún sitio, no lo incluyas en ningún commit. No lo borres.
4. Dime el resultado en 3 líneas. No cambies nada más.
```

---

## Paso 1: eyebrow del hero y metadatos de la portada

```
Contexto: propus.ink no se presenta como "agencia de IA". Se presenta como desarrollo web, software a medida y automatización en Albacete, y la IA es una herramienta más. No añadas dirección física en ningún sitio: la agencia no tiene local abierto al público.

Haz solo esto:

1. Hero de la portada: sustituye el texto de la pastilla "Más tiempo para lo que importa" por "Desarrollo web, software a medida y automatización en Albacete". No toques el H1 "Tu tiempo es demasiado valioso para gastarlo en esto". En móvil la frase ocupará dos líneas: suaviza el redondeo de la pastilla en esa anchura para que no quede deformada. No debe aumentar la altura del hero de forma que los CTA salgan de la primera pantalla.

2. Metadatos de la portada (app/layout.tsx y/o app/page.tsx):
   - Title: "Propus · Desarrollo web, software y automatización en Albacete". El layout añade " — Propus" a los títulos; comprueba que en la portada no se duplique la marca. Si se duplica, usa title.absolute en la portada.
   - Description (máximo ~155 caracteres): "Desarrollo web, software a medida y automatización de procesos para empresas de Albacete y toda España. La IA, cuando aporta, como una herramienta más." Si pasa de 155 caracteres, recorta la última frase.
   - openGraph y twitter del layout: que reflejen el mismo title y description. Ahora dicen "Automatización e IA para tu negocio".

3. Comprueba con pnpm build que compila, y revisa el HTML generado de la portada: un solo H1, title, description y canonical correctos.

4. Haz un commit local: git add de los archivos cambiados (nunca public/favicons/FaviconWhatsapp.jpeg) y git commit -m "SEO: eyebrow del hero y metadatos de la portada". No hagas push.

Enséñame los archivos cambiados y el title y la description finales.
```

---

## Paso 2: metadatos del resto de páginas y datos estructurados

```
Seguimos con el nuevo posicionamiento (desarrollo web, software a medida y automatización en Albacete; la IA es una herramienta, no la etiqueta de la agencia). Sin dirección física en ningún sitio.

Haz solo esto:

1. Metadatos de estas páginas (el layout añade " — Propus" al title):
   - Sobre nosotros: title "Sobre nosotros · Desarrollo web en Albacete". Description: "Somos Propus, un equipo de Albacete que desarrolla webs, software a medida y automatizaciones para empresas de Castilla-La Mancha y toda España."
   - Blog (y todas sus páginas /blog/pagina/N): title "Blog · Desarrollo web, software y automatización". Description: "Guías y casos reales sobre desarrollo web, software a medida y automatización para negocios, con foco en clínicas y empresas de Albacete."
   - Portfolio web (/proyectos/web-design): title "Portfolio de diseño y desarrollo web a medida". Deja la description actual.
   - Página del agente de WhatsApp: corrige la frase "rellena huecos de última hora" en la description, en su og:description y en su ServiceSchema, porque ya la quitamos de las métricas por falsa. Reformúlala sin prometer eso.
   - Servicios, Soluciones, FacturIA, páginas legales y artículos del blog: no los toques. FacturIA y el agente son productos de IA, ahí sí procede mencionarla.

2. Datos estructurados (JSON-LD):
   - Mantén el Organization global (no lo cambies a ProfessionalService, porque ese tipo espera una dirección física). Añádele description ("Desarrollo web, software a medida y automatización de procesos para empresas") y areaServed con Albacete, Castilla-La Mancha y España. Los sameAs (Instagram y Facebook) ya están.
   - Elimina el LocalBusinessSchema de /sobre-nosotros: tiene dirección postal y coordenadas de Albacete que no corresponden a un local abierto, y la descripción "Agencia de inteligencia artificial". El Organization global ya cubre esa página.
   - Busca en todo el proyecto cualquier otro schema con dirección, coordenadas o "agencia de IA" y dime dónde está, sin tocarlo.

3. pnpm build sin errores. Revisa el HTML generado de /sobre-nosotros, de /blog y de un artículo: un solo H1, title, description, canonical y JSON-LD válidos.

4. Commit local: git commit -m "SEO: metadatos del resto de páginas y JSON-LD". Sin push.

Enséñame una tabla con página, title y description finales.
```

---

## Paso 3: sitemap (barato)

```
Haz solo esto:

1. En app/sitemap.ts, excluye las URLs /blog/pagina/[num]. Las páginas siguen existiendo; solo salen del sitemap.
2. Comprueba que el sitemap sigue incluyendo la portada, servicios, soluciones, proyectos, sobre nosotros, blog, todos los artículos y las páginas legales, y que no incluye /offline.
3. pnpm build, y enséñame la lista final de URLs del sitemap.
4. Commit local: git commit -m "SEO: sitemap sin paginación del blog". Sin push.
```

---

## Paso 4: arreglar la caída de la portada sin WebGL

```
Problema confirmado: en un navegador sin WebGL, Spline lanza una excepción que nadie captura, React desmonta la página y la sustituye por el error de Next ("This page couldn't load", sin title ni description). Con WebGL funciona perfecto. Search Console confirma que Googlebot sí renderiza la portada, así que no es urgente para la indexación, pero rompe la web para usuarios sin aceleración gráfica y hunde la puntuación de SEO de Lighthouse en su configuración por defecto (82 en vez de 100).

Haz solo esto, en spline-scene.tsx y lo mínimo imprescindible:

1. Añade una comprobación de WebGL antes de montar la escena 3D (crear un canvas y pedir webgl2 o webgl). Si no hay soporte, no montes Spline.
2. Envuelve la escena en un error boundary, para que cualquier fallo del 3D no se lleve la página entera.
3. Cuando no haya 3D, el resto de la portada debe verse normal. De momento no hace falta póster ni fallback visual: déjalo vacío y sin que se rompa el layout del hero.
4. No cambies nada del 3D cuando sí hay WebGL.
5. Pruébalo con Playwright o Chromium sin WebGL (por ejemplo con el flag --disable-gpu y --disable-webgl, o desactivando WebGL desde el contexto). Verifica que la portada muestra su title, su H1 y el resto de secciones, y que no aparece "This page couldn't load". Comprueba también que con WebGL sigue funcionando igual.
6. pnpm build sin errores.
7. Commit local: git commit -m "Fix: la portada ya no se cae sin WebGL". Sin push.

Cuéntame qué has comprobado y el resultado.
```

---

## Paso 5A: póster estático del 3D (el paso que más créditos gasta)

> Haz el 5A y el 5B en conversaciones distintas si te quedas corto de créditos.

```
Objetivo: mejorar el rendimiento móvil de la portada sin quitar el 3D. Datos de Lighthouse móvil sobre producción (mediana de 3 pasadas): con WebGL, rendimiento 54, LCP 4,46 s, TBT 2.330 ms. Sin WebGL, rendimiento 74, LCP 3,78 s. El LCP es el párrafo de texto del hero, pero el runtime 3D bloquea el hilo principal unos 2,3 s y retrasa todo lo demás. Ojo: el WebGL por software de Lighthouse exagera el coste respecto a un móvil real con GPU, así que mide también en pagespeed.web.dev si puedes.

Haz solo el paso A:

1. Saca una captura limpia del logo 3D en buena resolución, con fondo transparente o del mismo fondo del hero, desde el propio navegador (Playwright). Guárdala optimizada en public/ (WebP o AVIF, que no pese más de ~60 KB) y úsala con next/image.
2. Muéstrala como póster en el hueco del 3D desde el primer pintado. Cuando el 3D esté listo, sustituye el póster por la escena sin salto visual (mismo tamaño y posición).
3. Si no hay WebGL o el 3D falla, el póster se queda como respaldo, en lugar del hueco vacío que dejamos en el paso anterior.
4. Mide Lighthouse móvil de la portada antes y después (mediana de 3 pasadas, con y sin WebGL) y enséñame los números.
5. pnpm build sin errores.
6. Commit local: git commit -m "Rendimiento: póster estático del hero 3D". Sin push.

No hagas todavía lo de móvil y carga diferida: es el paso B.
```

---

## Paso 5B: 3D solo en escritorio y carga diferida

```
Continuamos con el rendimiento de la portada. Ya hay un póster estático del hero (paso A). Haz ahora el paso B:

1. En móvil (por ancho de pantalla y capacidad, por ejemplo con matchMedia y comprobando que no es un dispositivo de pocos recursos), muestra solo el póster: no se descarga ni se ejecuta el runtime de Spline. El 3D se queda en escritorio.
2. En escritorio, carga el runtime 3D en diferido: con next/dynamic y ssr:false, y montándolo cuando el navegador esté ocioso (requestIdleCallback con fallback a un setTimeout corto) en vez de nada más hidratar. El póster se ve mientras tanto.
3. Mide Lighthouse móvil y escritorio de la portada antes y después (mediana de 3 pasadas) y enséñame los números. Objetivo: rendimiento móvil por encima de 80 sin perder el 3D en escritorio.
4. Comprueba que en escritorio el 3D sigue funcionando y que el cambio póster → 3D no provoca saltos de layout (CLS).
5. pnpm build sin errores.
6. Commit local: git commit -m "Rendimiento: 3D solo en escritorio y carga diferida". Sin push.
```

---

## Paso 6: revisión final antes del push

```
Revisión final de la rama seo-posicionamiento, sin cambiar nada salvo que encuentres un fallo:

1. git log --oneline main..HEAD y git diff main --stat: dime qué se ha cambiado.
2. Confirma que public/favicons/FaviconWhatsapp.jpeg NO está incluido en ningún commit.
3. pnpm build y pnpm lint sin errores.
4. Revisa el HTML generado de la portada, de /sobre-nosotros, de /blog y de un artículo: un solo H1, title único, description, canonical, JSON-LD válido y sin dirección física en ningún sitio.
5. Busca en todo el proyecto textos públicos que presenten a Propus como "agencia de IA" (en la portada, el footer, Sobre nosotros, metadatos, JSON-LD) y dime dónde quedan. No los cambies: solo la lista.
6. Dame un resumen final con: archivos cambiados, titles y descripciones definitivos, y la URL del sitemap.

No hagas push. Lo haré yo.
```

---

## Cuando esté pusheado y desplegado (lo haces tú, sin Claude Code)

1. Abre `https://propus.ink/` y comprueba que sale la pastilla nueva y que el title de la pestaña es "Propus · Desarrollo web, software y automatización en Albacete".
2. Abre `https://propus.ink/sitemap.xml` y comprueba que no aparece `/blog/pagina/`.
3. En Search Console → Inspección de URLs, pega `https://propus.ink/` → **Solicitar indexación**. Es la primera, porque Google tiene guardada la versión con "Automatización e IA".
4. Sitemaps: comprueba que `https://propus.ink/sitemap.xml` está enviado.
5. Sigue con las solicitudes de indexación pendientes, si hay cuota: `/blog/automatizar-recepcion-clinica-estetica`, `/blog/software-gestion-clinica-dental`, `/blog/diseno-web-clinica-dental`, `/blog/autoclinic-agente-crm-clinicas`, `/blog/autoclinic-integracion-api-crm`, `/blog/portal-reservas-turismo-rural-astro`, y las legales `/legal/privacidad`, `/legal/terminos`, `/legal/cookies`, `/legal/eliminacion-de-datos`. Salta `/blog/pagina/2`.
6. Pasa `https://propus.ink/` por pagespeed.web.dev en móvil y apunta la nota.

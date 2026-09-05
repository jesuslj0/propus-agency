# Prompts para regenerar las portadas actuales

12 prompts para Nano Banana Pro, uno por artículo publicado. El orden es el
del blog: **del más reciente al más antiguo**, igual que se ven en el listado.

Antes de empezar, leer [`portadas-estilo.md`](./portadas-estilo.md) — el bloque
`STYLE` y `NEGATIVE` que aparece al final de cada prompt está explicado allí.

**Cómo usar cada ficha:** copiar el prompt entero (escena + bloque de estilo),
generar en 16:9, guardar con el nombre indicado en `public/img/blog/` y
sustituir la línea `image:` del artículo en `lib/blog.ts`.

---

## Bloque de estilo común

Pegar al final de **todos** los prompts de este documento:

```
STYLE: Dark, premium, minimal 3D render with a technical-editorial feel.
Background is a near-black desaturated teal (#101A18) with a very subtle
darker grid plane receding into fog. Neon accent palette, used sparingly and
only on the focal elements: teal #00FDCA, emerald #00FDA0, sky blue #00ACFD,
and lime #E9F700 as a rare highlight. Soft volumetric glow around emissive
surfaces, gentle bloom, shallow depth of field with the background falling out
of focus. Matte surfaces with soft studio lighting from the upper left, no
harsh speculars. Composition is uncluttered with generous negative space; the
main subject sits in the upper-middle third of the frame and the bottom
quarter fades into darkness. Cinematic, calm, confident. 16:9.

NEGATIVE: no text, no lettering, no numbers, no watermarks, no logos, no
brand marks, no WhatsApp or Meta iconography, no recognisable faces, no
stock-photo people, no medical gore, no clutter, no rainbow colours, no
purple or magenta, no bright white backgrounds, no flat vector clipart, no
heavy vignetting.
```

---

## 1 · Integrar AutoClinic con tu CRM actual

- **Slug:** `autoclinic-integracion-api-crm`
- **Fichero:** `public/img/blog/autoclinic-integracion-api-crm.jpg`
- **En `lib/blog.ts`:** `image: "/img/blog/autoclinic-integracion-api-crm.jpg",`
- **Concepto:** dos sistemas separados que se conectan por una pasarela, y la
  llave la tiene el cliente.

```
Two separate floating slabs of frosted dark glass hover apart from each other
in a dark void, each one a stylised abstract software system with faint
glowing internal circuitry. Between them, a luminous bridge of teal light
arcs across the gap, formed by a stream of small geometric data tokens
flowing from one slab to the other. At the midpoint of the bridge sits a
small hexagonal gateway module with an emerald keyhole shape carved into it,
subtly emitting light — the gate is open. One slab is slightly larger and
sharper in focus in the upper-left; the other recedes into soft haze on the
right. Thin sky-blue filaments trail beneath the bridge like a reflection.

[+ bloque STYLE / NEGATIVE]
```

---

## 2 · Qué es AutoClinic

- **Slug:** `autoclinic-agente-crm-clinicas`
- **Fichero:** `public/img/blog/autoclinic-agente-crm-clinicas.jpg`
- **En `lib/blog.ts`:** `image: "/img/blog/autoclinic-agente-crm-clinicas.jpg",`
- **Concepto:** las dos piezas del producto —el agente que conversa y el CRM
  que sostiene— unidas y funcionando como una sola.

```
A composition of two interlocking halves floating in a dark space. On the
left, a large rounded speech bubble rendered in glowing teal glass, hollow and
softly emissive, representing conversation. On the right, a compact stack of
translucent horizontal data planes layered like a card index, each plane
holding faint abstract rows of luminous dots and bars, representing a
database. The two forms interlock at the centre where the tail of the speech
bubble merges into the top plane of the stack, joined by a bright emerald
seam of light. Small particles drift upward from the seam. Both forms cast
soft coloured light onto the dark grid floor below.

[+ bloque STYLE / NEGATIVE]
```

---

## 3 · Portal de reservas para turismo rural

- **Slug:** `portal-reservas-turismo-rural-astro`
- **Fichero:** `public/img/blog/portal-reservas-turismo-rural-astro.jpg`
- **En `lib/blog.ts`:** `image: "/img/blog/portal-reservas-turismo-rural-astro.jpg",`
- **Concepto:** naturaleza y tecnología conviviendo. La única portada con
  paisaje real; mantiene la paleta para no desentonar en la rejilla.

```
A tranquil rural landscape at blue hour: a chain of still turquoise lagoons
nestled between low wooded hills, seen from an elevated viewpoint, rendered
dark and moody with deep teal shadows and a faint mist over the water. Hovering
in the air above the landscape, slightly left of centre, floats a single
translucent holographic panel showing an abstract month calendar grid — plain
glowing cells with no text or numbers, a few cells lit in emerald to suggest
booked nights. Thin light beams connect the panel down towards a small cluster
of cabin silhouettes at the water's edge. The sky is a dark gradient with a
faint band of teal on the horizon.

[+ bloque STYLE / NEGATIVE]
```

---

## 4 · Cómo automatizamos la agenda de un podólogo (caso Albacete)

- **Slug:** `automatizar-agenda-podologo-ia-albacete`
- **Fichero:** `public/img/blog/automatizar-agenda-podologo-ia-albacete.jpg`
- **En `lib/blog.ts`:** `image: "/img/blog/automatizar-agenda-podologo-ia-albacete.jpg",`
- **Concepto:** un caso real en marcha: la agenda semanal llenándose sola.

```
A large translucent weekly schedule plane tilted in three-quarter perspective,
floating in a dark void. It is divided into seven vertical columns of stacked
appointment blocks; most blocks glow in soft teal, a few in emerald, and two
empty gaps sit dark. Small luminous tokens stream in from the upper right and
settle precisely into the empty gaps, filling them. Behind the plane, a second
fainter schedule plane is visible out of focus, suggesting continuity. On the
dark grid floor beneath, a faint pattern of footprint-shaped impressions
glows dimly in lime, barely perceptible, hinting at podiatry without being
literal.

[+ bloque STYLE / NEGATIVE]
```

---

## 5 · AutoClinic para clínicas de podología

- **Slug:** `recepcionista-virtual-clinica-podologia`
- **Fichero:** `public/img/blog/recepcionista-virtual-clinica-podologia.jpg`
- **En `lib/blog.ts`:** `image: "/img/blog/recepcionista-virtual-clinica-podologia.jpg",`
- **Concepto:** el nicho principal. Recepción atendida por una presencia
  digital, con la señal de podología en el suelo.

```
An abstract reception counter rendered as a smooth matte dark slab curving
gently across the lower third of the frame. Rising above and behind it, a tall
softly glowing teal speech bubble floats where a receptionist would stand,
pulsing with light and casting a warm emerald reflection on the counter
surface. Two smaller speech bubbles orbit it at different depths, blurred.
The dark floor in front of the counter carries a subtle path of glowing
footprint impressions in low-intensity lime, leading towards the counter and
fading out. The whole scene reads as a clinic reception rendered as light and
geometry.

[+ bloque STYLE / NEGATIVE]
```

---

## 6 · Diseño web para clínica dental

- **Slug:** `diseno-web-clinica-dental`
- **Fichero:** `public/img/blog/diseno-web-clinica-dental.jpg`
- **En `lib/blog.ts`:** `image: "/img/blog/diseno-web-clinica-dental.jpg",`
- **Concepto:** una visita web que se convierte en primera cita.

```
A minimal browser window frame rendered as a floating pane of dark frosted
glass, tilted slightly in perspective, its interior showing only abstract
glowing blocks of layout — a wide hero bar, two content rectangles, and a
prominent emerald call-to-action pill. From the call-to-action pill, a single
bright teal light trail arcs downward and to the right, and where it lands it
resolves into a small solid calendar-slot token glowing brightly. Behind the
browser pane, two more panes recede into soft focus. A faint funnel of light
narrows from the top of the frame down towards the call-to-action, suggesting
conversion.

[+ bloque STYLE / NEGATIVE]
```

---

## 7 · Automatizar la recepción de un centro de estética

- **Slug:** `automatizar-recepcion-clinica-estetica`
- **Fichero:** `public/img/blog/automatizar-recepcion-clinica-estetica.jpg`
- **En `lib/blog.ts`:** `image: "/img/blog/automatizar-recepcion-clinica-estetica.jpg",`
- **Concepto:** bonos y sesiones consumidas. Acabado algo más suave y elegante
  que el resto, sin salirse de la paleta.

```
A set of five concentric luminous rings floating vertically in a dark space,
arranged like a progress dial seen at a slight three-quarter angle. Three of
the rings are fully lit in soft emerald, one is half lit in teal, and the last
remains dark — a session package partially consumed. Around them drift small
smooth capsule-shaped tokens in polished dark material with faint teal edge
lighting, some already absorbed into the rings. The lighting is softer and
more diffuse than in the other covers, with a gentle warm bloom, giving an
elegant spa-like calm while keeping the same dark teal palette.

[+ bloque STYLE / NEGATIVE]
```

---

## 8 · Qué debe tener un software de gestión para clínica dental

- **Slug:** `software-gestion-clinica-dental`
- **Fichero:** `public/img/blog/software-gestion-clinica-dental.jpg`
- **En `lib/blog.ts`:** `image: "/img/blog/software-gestion-clinica-dental.jpg",`
- **Concepto:** checklist de requisitos. Verificación, no interfaz literal.

```
Six translucent dark glass cards float in a loose vertical stack, each tilted
at a slightly different angle and staggered in depth, receding upward into
haze. On the left edge of each card sits a small glowing checkmark glyph:
the four nearest cards have bright emerald checkmarks, the fifth is teal and
mid-illumination, the sixth is still dark and unchecked. Each card carries
faint abstract rows of luminous dashes standing in for content, deliberately
unreadable. A soft column of light falls from above through the whole stack,
catching the edges of the glass.

[+ bloque STYLE / NEGATIVE]
```

---

## 9 · Reducir las ausencias con recordatorios automáticos

- **Slug:** `reducir-no-shows-clinica-recordatorios`
- **Fichero:** `public/img/blog/reducir-no-shows-clinica-recordatorios.jpg`
- **En `lib/blog.ts`:** `image: "/img/blog/reducir-no-shows-clinica-recordatorios.jpg",`
- **Concepto:** el hueco que se pierde y el recordatorio que lo evita.

```
A dark calendar grid plane fills the upper-middle of the frame, seen at a
gentle angle. One cell in the grid is a deep empty void, visibly hollow and
unlit — the missed appointment. Two pulses of teal light travel across the
grid towards that empty cell from the left, each pulse shaped like a small
rounded notification chime, leaving a soft light trail behind them. As the
second pulse reaches the cell, the void begins to fill with emerald light from
its edges inward. Concentric faint rings radiate outward from the cell like a
soft sound wave. The rest of the grid is calm and dimly lit.

[+ bloque STYLE / NEGATIVE]
```

---

## 10 · Chatbot de WhatsApp para citas médicas: cómo funciona

- **Slug:** `chatbot-whatsapp-citas-clinica`
- **Fichero:** `public/img/blog/chatbot-whatsapp-citas-clinica.jpg`
- **En `lib/blog.ts`:** `image: "/img/blog/chatbot-whatsapp-citas-clinica.jpg",`
- **Concepto:** el artículo es técnico, así que la portada es un despiece: un
  mensaje atravesando las capas de proceso.

```
An exploded technical diagram floating in dark space: four parallel
translucent horizontal planes stacked with wide gaps between them, seen in
three-quarter perspective, each plane representing a processing layer with
faint etched circuit patterns. A single bright teal message token, shaped like
a small rounded speech bubble, descends vertically through all four planes,
leaving a luminous vertical trail and causing a ripple of emerald light to
spread across each plane as it passes through. The topmost plane is sharpest;
the lower ones blur progressively into darkness. Thin sky-blue guide lines run
vertically at the edges like a schematic.

[+ bloque STYLE / NEGATIVE]
```

---

## 11 · Recepcionista virtual para clínicas dentales: guía completa

- **Slug:** `recepcionista-virtual-clinica-dental`
- **Fichero:** `public/img/blog/recepcionista-virtual-clinica-dental.jpg`
- **En `lib/blog.ts`:** `image: "/img/blog/recepcionista-virtual-clinica-dental.jpg",`
- **Concepto:** guía extensa y de referencia. Una conversación completa que
  desemboca en una cita.

```
A vertical cascade of five rounded speech bubbles rendered in dark frosted
glass with glowing teal edges, arranged in a gentle descending diagonal from
the upper left towards the centre, alternating sides as in a chat thread. Each
bubble is empty of text but carries faint luminous dashes suggesting content.
The bubbles increase slightly in brightness as they descend. The final and
lowest bubble is fully solid and lit in bright emerald, and from it emerges a
small floating calendar-slot token, crisp and clearly resolved. Soft particles
drift between the bubbles. The upper-left area of the frame stays dark and
empty for balance.

[+ bloque STYLE / NEGATIVE]
```

---

## 12 · Automatización con IA para empresas en Albacete

- **Slug:** `automatizacion-ia-empresas-albacete`
- **Fichero:** `public/img/blog/automatizacion-ia-empresas-albacete.jpg`
- **En `lib/blog.ts`:** `image: "/img/blog/automatizacion-ia-empresas-albacete.jpg",`
- **Concepto:** el artículo más genérico y antiguo. Procesos que se conectan
  solos y una métrica que sube.

```
An isometric constellation of six small floating platforms of dark matte
material, connected to one another by taut glowing teal filaments that pulse
with travelling points of light, forming an automated workflow network. The
platforms sit at different heights across the upper-middle of the frame. On
the largest and most prominent platform, slightly left of centre, a simple
abstract bar chart rises in emerald, each bar taller than the last, with a
thin lime trend line arcing above it. The furthest platforms dissolve into
teal fog. Below everything, a faint grid plane catches coloured reflections.

[+ bloque STYLE / NEGATIVE]
```

---

## Después de generarlas

1. Guardar las 12 en `public/img/blog/` con los nombres indicados.
2. Actualizar las 12 líneas `image:` en `lib/blog.ts`.
3. Comprobar visualmente las dos páginas del listado (`/blog` y
   `/blog/pagina/2`) — seis cards por página, deben leerse como un conjunto.
4. Las capturas de producto que quedan huérfanas
   (`/img/autoclinic/*`, `/img/facturia/*`) **no se borran**: se siguen usando
   en las páginas de proyecto y de soluciones.


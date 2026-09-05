# Portadas del blog — guía de estilo y flujo de trabajo

Documento de referencia para generar las imágenes de portada de los artículos
del blog con **Nano Banana Pro** (Gemini 3 Pro Image).

---

## 1. Flujo a partir de ahora

Cada vez que se pidan nuevas entradas del blog, junto al artículo se entrega:

1. El **prompt completo** para Nano Banana Pro, listo para pegar.
2. El **nombre exacto del fichero** que debe tener la imagen generada.
3. La **línea `image:`** que hay que poner en `lib/blog.ts`.

No hay que inventar el estilo cada vez: todos los prompts parten del bloque
común de la sección 4 y solo cambian en la escena concreta.

---

## 2. Dónde van los ficheros

```
public/img/blog/<slug-del-articulo>.jpg
```

El nombre del fichero es **siempre el slug del artículo**. Así, si un post se
llama `reducir-no-shows-clinica-recordatorios`, su portada es
`public/img/blog/reducir-no-shows-clinica-recordatorios.jpg` y en `lib/blog.ts`
se declara:

```ts
image: "/img/blog/reducir-no-shows-clinica-recordatorios.jpg",
```

Ventaja de esta convención: no hay que decidir nada ni comprobar duplicados.
Un post, una imagen, mismo nombre.

> **Nota sobre las imágenes actuales.** Hoy las portadas son capturas de
> producto (`/img/autoclinic/*`, `/img/facturia/*`, `/img/landings/*`) y algunas
> se repiten entre artículos porque solo hay 7 capturas de AutoClinic para 10
> posts de clínica. Al migrar a `/img/blog/` ese problema desaparece.

---

## 3. Formato técnico

| Parámetro | Valor | Por qué |
|---|---|---|
| Relación de aspecto | **16:9** | Es un ratio nativo del modelo y sirve también como imagen Open Graph si algún día se añaden. |
| Resolución en el repositorio | 1600 px de ancho | Suficiente para retina en una card de ~370 px. El máster del generador puede ser mayor. |
| Formato | JPEG | Son renders fotográficos: a igualdad de calidad pesan una fracción de lo que ocupan en PNG. |
| Peso objetivo | < 400 KB | En la práctica quedan entre 25 y 60 KB. |

### Optimización obligatoria antes de subir

Nano Banana Pro entrega a 2752 × 1536 y ~2 MB por imagen. **Eso no va al
repositorio**: doce portadas serían 22 MB. Hay que reescalar y recomprimir a
1600 px de ancho con calidad 82 (mozjpeg), lo que las deja en torno a 40 KB sin
pérdida visible en una card de 370 px.

Los másteres originales se conservan en local dentro de `docs/blog/`, que está
excluido en `.gitignore` precisamente para esto: siguen disponibles por si hace
falta reexportar a mayor tamaño, pero nunca entran en git.

### Zona segura de la composición

La card del blog muestra una **banda superior de 160 px de alto** con
`object-cover object-top`. Con una imagen 16:9 servida en una card de 370 px de
ancho, se ve aproximadamente el **77 % superior** de la imagen: el cuarto
inferior se recorta.

Además, sobre ese recorte cae un degradado hacia el color de la card, así que
la parte baja de lo que sí se ve queda oscurecida progresivamente.

**Consecuencia práctica:**

- El sujeto principal va en el **tercio central-superior**.
- El **cuarto inferior es sacrificable**: ahí solo debe haber fondo, sombra o
  degradado.
- Nada crítico pegado a los bordes laterales.

---

## 4. Bloque de estilo común

Este texto va **al final de todos los prompts**, sin cambios. Define la
identidad visual compartida para que las doce cards parezcan una colección y no
doce imágenes sueltas.

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

### Por qué estas restricciones

- **Sin texto.** La card ya muestra el título en HTML encima; texto dentro de
  la imagen lo duplicaría, y el español acentuado se renderiza mal con
  frecuencia.
- **Sin logos de marca.** Dibujar el logo de WhatsApp o Meta en material
  comercial propio es un riesgo de marca innecesario. Se usan burbujas de chat
  genéricas.
- **Sin morados ni magentas.** La paleta de Propus es teal → sky → lime; el
  morado rompe la coherencia con el resto del sitio.
- **Sin caras.** Evita el efecto banco de imágenes y los problemas de derechos
  de imagen.

---

## 5. Los prompts van en inglés

Los prompts están redactados en inglés aunque el sitio sea en español. No es
un descuido: los modelos de imagen siguen con más fidelidad los términos de
estilo, encuadre e iluminación en inglés, que es donde está la mayor parte de
su entrenamiento. El concepto de cada portada sí se describe en español encima
de cada prompt, para poder revisarlo de un vistazo.

---

## 6. Comprobación antes de dar una portada por buena

1. ¿Se entiende el tema del artículo **sin leer el título**?
2. Recortada al 77 % superior y con el degradado inferior, ¿sigue funcionando?
3. Puesta al lado de las otras cinco de su página, ¿parecen del mismo conjunto?
4. ¿Se ha colado texto, un logo o una cara? Regenerar.
5. ¿Pesa menos de 400 KB?

---

## 7. Documentos relacionados

- [`portadas-prompts-actuales.md`](./portadas-prompts-actuales.md) — los 12
  prompts para regenerar las portadas de los artículos ya publicados.
- [`ideas-blog.md`](./ideas-blog.md) — 40 ideas de próximos artículos.

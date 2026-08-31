/* Descarga la escena publicada en Spline al repositorio.
 *
 *   pnpm run spline:pull                 # usa NEXT_PUBLIC_SPLINE_SCENE de .env.local
 *   pnpm run spline:pull <url> [destino]
 *
 * En desarrollo el hero apunta a la escena remota (ver .env.example); este
 * script congela esa escena en public/spline/ para que producción la sirva
 * desde el propio dominio.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const defaultOut = path.join(root, 'public/spline/logo.splinecode')

function readEnvLocal(key) {
  const file = path.join(root, '.env.local')
  if (!fs.existsSync(file)) return undefined
  for (const line of fs.readFileSync(file, 'utf8').split('\n')) {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)\s*$/)
    if (match && match[1] === key) return match[2].replace(/^["']|["']$/g, '')
  }
  return undefined
}

const url = process.argv[2] || readEnvLocal('NEXT_PUBLIC_SPLINE_SCENE')
const out = process.argv[3] ? path.resolve(process.argv[3]) : defaultOut

if (!url) {
  console.error(
    'Falta la URL de la escena.\n' +
      '  pnpm run spline:pull https://prod.spline.design/<id>/scene.splinecode\n' +
      'o define NEXT_PUBLIC_SPLINE_SCENE en .env.local'
  )
  process.exit(1)
}

if (!/^https?:\/\//.test(url)) {
  console.error(`"${url}" no es una URL remota. Nada que descargar.`)
  process.exit(1)
}

const response = await fetch(url, { cache: 'no-store' })
if (!response.ok) {
  console.error(`La descarga falló: HTTP ${response.status} ${response.statusText}`)
  process.exit(1)
}

const buffer = Buffer.from(await response.arrayBuffer())

// Spline sirve msgpack; un HTML aquí significa 404 disfrazado o escena despublicada.
if (buffer.length < 1024 || buffer.slice(0, 64).toString('utf8').trimStart().startsWith('<')) {
  console.error(
    `La respuesta no parece una escena de Spline (${buffer.length} bytes).\n` +
      '¿Está la escena publicada y es correcta la URL?'
  )
  process.exit(1)
}

const previous = fs.existsSync(out) ? fs.readFileSync(out) : null
if (previous?.equals(buffer)) {
  console.log(`Sin cambios: ${path.relative(root, out)} ya es idéntico a la escena publicada.`)
  process.exit(0)
}

fs.mkdirSync(path.dirname(out), { recursive: true })
fs.writeFileSync(out, buffer)

const size = (buffer.length / 1024).toFixed(1)
console.log(`Escena guardada en ${path.relative(root, out)} (${size} kB)`)
if (previous) {
  console.log(
    'Aviso: el nombre del fichero no ha cambiado, así que el service worker y el\n' +
      'navegador pueden seguir sirviendo la copia anterior. Si en producción ves la\n' +
      'escena vieja, renombra el fichero (logo-v2.splinecode) o sube VERSION en public/sw.js.'
  )
}

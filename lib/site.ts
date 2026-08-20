/**
 * Datos de contacto públicos de Propus.
 * Fuente única para footer, páginas legales y schema.org — Meta y otras
 * plataformas verifican que el teléfono y el email coincidan en todo el sitio.
 */
export const contact = {
  email: "team@propus.ink",
  emailHref: "mailto:team@propus.ink",
  /** Formato E.164 para tel: y schema.org */
  phone: "+13203010131",
  phoneHref: "tel:+13203010131",
  /** Formato legible para la UI */
  phoneDisplay: "+1 (320) 301-0131",
} as const

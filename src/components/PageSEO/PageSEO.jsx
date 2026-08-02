/**
 * PageSEO — meta tags por página usando React 19 document metadata hoisting.
 * React 19 mueve automáticamente <title>, <meta> y <link> al <head> del documento.
 * No requiere react-helmet ni ninguna librería adicional.
 *
 * Uso:
 *   <PageSEO
 *     title="Ingeniería de Prompts Jurídicos · M2 U1"
 *     description="La base del sistema. Diseñá prompts controlados..."
 *     path="/prompt-engineering"
 *   />
 */

const SITE_NAME = 'Legal Intelligence System'
const BASE_URL = 'https://legal-intelligence-system-wine.vercel.app'

function PageSEO({ title, description, path }) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} — IA para Abogados Argentinos`
  const canonical = `${BASE_URL}${path}`

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
    </>
  )
}

export default PageSEO

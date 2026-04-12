import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function CommunicationM9U3() {
    return (
        <div className="page">
            <PageSEO
                title="Blog y SEO jurídico asistido por IA · M9 U3"
                description="Cómo generar contenido de blog que posiciona en Google y atrae clientes calificados, usando IA para investigar, estructurar y redactar artículos jurídicos de valor."
                path="/communication-u3"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 9 · Unidad 3</span>
                <h1 className="page__title">Blog y SEO jurídico asistido por IA</h1>
                <p className="page__description">
                    El blog bien hecho es el canal de captación más eficiente a largo plazo:
                    trabaja mientras dormís y atrae exactamente al cliente que tiene el problema
                    que vos sabés resolver.
                </p>
            </header>

            <div className="page__content">

                <section id="por-que" className="page__section">
                    <h2 className="page__section-title">1. Por qué el SEO jurídico local funciona</h2>
                    <article className="long-form-content">
                        <p>
                            Cuando alguien escribe en Google "abogado laboral La Plata despido sin
                            causa" o "cuánto tiempo tengo para reclamar accidente de tránsito
                            Buenos Aires", está buscando un abogado para contratar. No está
                            navegando — está con un problema activo.
                        </p>
                        <p>
                            Un artículo bien posicionado captura ese momento. A diferencia de
                            LinkedIn (donde vos buscás a la audiencia), el SEO hace que la audiencia
                            te encuentre a vos cuando ya está lista para tomar acción.
                        </p>
                        <blockquote className="concept-quote">
                            El SEO jurídico no compite con los grandes estudios en términos generales.
                            Compite en búsquedas específicas de tu ciudad y tu especialidad — donde
                            tenés ventaja por conocimiento local.
                        </blockquote>
                    </article>
                </section>

                <section id="temas" className="page__section">
                    <h2 className="page__section-title">2. Cómo elegir los temas con IA</h2>
                    <article className="long-form-content">
                        <p>
                            El error más común es escribir sobre lo que vos encontrás interesante.
                            El SEO requiere escribir sobre lo que la gente busca activamente.
                            Son cosas distintas.
                        </p>
                        <div className="full-prompt-example">
                            <p>
                                "Actuás como especialista en SEO para servicios jurídicos en Argentina.
                                Mi especialidad es [área de práctica]. Mi zona geográfica principal
                                es [ciudad/provincia].
                            </p>
                            <p>
                                Generá 15 ideas de artículos para mi blog jurídico que: (1) respondan
                                preguntas reales que hace la gente en Google cuando tiene un problema
                                en mi área, (2) estén orientadas a búsquedas locales cuando aplique,
                                (3) varíen entre preguntas básicas (alto volumen) y preguntas
                                específicas (menor volumen, mayor intención de contratar).
                            </p>
                            <p>
                                Para cada idea: título tentativo, pregunta principal que responde,
                                y tipo de cliente que lo buscaría."
                            </p>
                        </div>
                        <p>
                            Complementá esto con Google Search Console (si ya tenés sitio) o
                            buscá directamente en Google la primera letra de una pregunta común
                            en tu área — el autocompletado te muestra lo que la gente busca de verdad.
                        </p>
                    </article>
                </section>

                <section id="estructura" className="page__section">
                    <h2 className="page__section-title">3. Estructura de un artículo jurídico que posiciona</h2>
                    <article className="long-form-content">
                        <p>
                            Google premia los artículos que responden completamente la pregunta
                            del usuario. Para temas jurídicos, eso significa:
                        </p>
                        <div className="flow-steps">
                            <div className="flow-step">
                                <strong>Título con la búsqueda exacta:</strong> "¿Cuánto tiempo
                                tengo para reclamar un accidente de tránsito en Buenos Aires?"
                                No "Plazos de prescripción en responsabilidad extracontractual".
                            </div>
                            <div className="flow-step">
                                <strong>Párrafo de apertura con la respuesta directa:</strong>
                                En Argentina, el plazo para reclamar daños por accidente de tránsito
                                es de [X años]. Si ese plazo venció, aún podrías tener opciones.
                                A continuación te explicamos todo lo que necesitás saber.
                            </div>
                            <div className="flow-step">
                                <strong>Secciones con H2 que responden subpreguntas:</strong>
                                "¿Desde cuándo se cuenta el plazo?", "¿Qué pasa si el plazo venció?",
                                "¿Necesito abogado para reclamar?".
                            </div>
                            <div className="flow-step">
                                <strong>CTA al final:</strong> "Si tu caso tiene características
                                particulares que hacen que no estés seguro del plazo aplicable,
                                consultanos." Con link al formulario o WhatsApp.
                            </div>
                        </div>

                        <h3>Prompt para redactar el artículo completo</h3>
                        <div className="full-prompt-example">
                            <p>
                                "Actuás como abogado especialista en [área] escribiendo un artículo
                                de blog jurídico para Argentina. El artículo debe posicionar en Google
                                para la búsqueda: '[búsqueda objetivo]'.
                            </p>
                            <p>
                                Estructura: (1) párrafo de respuesta directa, (2) contexto legal
                                (artículos y normas aplicables, sin jerga innecesaria), (3) casos
                                frecuentes y cómo aplica la norma en cada uno, (4) errores comunes
                                que cometen las personas en esta situación, (5) cuándo es urgente
                                consultar a un abogado, (6) llamado a la acción.
                            </p>
                            <p>
                                Extensión: 800-1200 palabras. Lenguaje: técnicamente correcto pero
                                accesible. Incluí al menos 3 preguntas frecuentes al final en formato
                                pregunta-respuesta (favorece el posicionamiento en featured snippets).
                            </p>
                            <p>
                                IMPORTANTE: No inventés normas ni plazos. Si no estás seguro de
                                un dato específico, usá [VERIFICAR] para que yo lo revise antes
                                de publicar."
                            </p>
                        </div>
                    </article>
                </section>

                <section id="publicacion" className="page__section">
                    <h2 className="page__section-title">4. Publicación y actualización</h2>
                    <article className="long-form-content">
                        <p>
                            Dos artículos por mes publicados consistentemente superan a diez
                            publicados en enero y silencio el resto del año. Google toma de 3 a
                            6 meses en posicionar contenido nuevo — el resultado es acumulativo.
                        </p>
                        <div className="highlight-warning">
                            <strong>El artículo jurídico envejece:</strong> Las normas cambian,
                            la jurisprudencia evoluciona. Un artículo de 2022 que cita montos
                            de indemnización desactualizados daña tu credibilidad.
                            Poné la fecha de publicación y actualizala cuando revisás el contenido.
                        </div>
                        <p>
                            Para actualizar artículos existentes, usá este prompt:
                        </p>
                        <div className="full-prompt-example">
                            <p>
                                "Este artículo lo escribí en [fecha]: [pegar artículo]. Desde entonces
                                hubo estos cambios: [normas modificadas, fallos relevantes].
                                Identificá qué secciones están desactualizadas y redactá el texto
                                actualizado para cada una."
                            </p>
                        </div>
                    </article>
                </section>

                <section id="checklist" className="page__section">
                    <h2 className="page__section-title">5. Checklist de esta unidad</h2>
                    <article className="long-form-content">
                        <div className="checklist-box">
                            <ul className="checklist">
                                <li>☐ Generé una lista de 10 búsquedas reales que hace mi cliente tipo en Google</li>
                                <li>☐ Redacté al menos un artículo completo con IA + revisión propia</li>
                                <li>☐ Verifiqué que todas las normas y plazos citados son correctos y vigentes</li>
                                <li>☐ Publiqué el artículo con fecha visible y CTA al final</li>
                                <li>☐ Definí un calendario de 2 artículos por mes para los próximos 3 meses</li>
                            </ul>
                        </div>
                    </article>
                </section>

                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/communication-u2" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M9 U2: LinkedIn jurídico</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/communication-u4" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            U4 – Newsletter legal: automatización y segmentación →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommunicationM9U3

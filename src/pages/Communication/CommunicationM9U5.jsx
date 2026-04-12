import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function CommunicationM9U5() {
    return (
        <div className="page">
            <PageSEO
                title="Video y voz: herramientas IA para abogados en cámara · M9 U5"
                description="Cómo usar IA para producir video y podcast jurídico sin equipamiento costoso ni edición manual: guiones, transcripción, edición automática y repropósito de contenido."
                path="/communication-u5"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 9 · Unidad 5</span>
                <h1 className="page__title">Video y voz: IA para abogados en cámara</h1>
                <p className="page__description">
                    El video genera más confianza que cualquier otro formato. La IA eliminó
                    la barrera de producción. Lo que queda es aparecer.
                </p>
            </header>

            <div className="page__content">

                <section id="por-que" className="page__section">
                    <h2 className="page__section-title">1. Por qué el video importa para abogados</h2>
                    <article className="long-form-content">
                        <p>
                            Contratar a un abogado es una decisión de alta confianza. El cliente
                            está entregando su problema más serio — un divorcio, una deuda,
                            una acusación penal — a un desconocido. El video reduce esa brecha
                            de confianza antes del primer contacto.
                        </p>
                        <p>
                            Un cliente que vio tres videos tuyos antes de llamarte ya sabe cómo
                            hablás, cómo pensás y si tu estilo le genera confianza. La reunión
                            inicial empieza 30 puntos más adelante.
                        </p>
                        <blockquote className="concept-quote">
                            No necesitás ser youtuber. Necesitás aparecer en video lo suficiente
                            para que el cliente que te busca te encuentre y decida que querés
                            conocerte. Eso se logra con 4-6 videos bien hechos, no con un canal
                            con 200 episodios.
                        </blockquote>
                    </article>
                </section>

                <section id="herramientas" className="page__section">
                    <h2 className="page__section-title">2. Las herramientas IA que cambian la producción</h2>
                    <article className="long-form-content">

                        <h3>Para guiones y estructura</h3>
                        <p>
                            Claude o ChatGPT generan el guión completo de un video de 5-10 minutos
                            a partir de un brief simple. Qué decir, en qué orden, cómo abrir para
                            retener la atención, cómo cerrar con CTA.
                        </p>
                        <div className="full-prompt-example">
                            <p>
                                "Actuás como guionista de contenido jurídico educativo. Necesito
                                el guión de un video de YouTube de 7-8 minutos para abogados/público
                                general sobre [tema jurídico].
                            </p>
                            <p>
                                Audiencia: [perfil del espectador ideal]. Objetivo del video:
                                [informar / posicionarme como especialista / captar consultas].
                            </p>
                            <p>
                                El guión debe tener: (1) apertura de 30 segundos que presente el
                                problema o la promesa (sin introducción aburrida), (2) desarrollo
                                con 3-4 puntos clave, (3) cierre con resumen y CTA. Indicá los
                                momentos donde debo hacer pausas, agregar texto en pantalla o
                                mostrar un ejemplo. Tono: conversacional, no de conferencia."
                            </p>
                        </div>

                        <h3>Para edición y transcripción</h3>
                        <p>
                            Descript transforma el proceso de edición: importás el video, genera
                            la transcripción automática, y editás el video editando el texto —
                            borrás una frase en la transcripción y esa parte desaparece del video.
                            Sin timeline, sin software complejo.
                        </p>
                        <p>
                            También genera captions automáticos, identifica los "eh" y "um" para
                            eliminarlos, y puede clonar tu voz para grabar reemplazos sin volver
                            a filmar.
                        </p>

                        <h3>Para repropósito automático</h3>
                        <p>
                            Un video de 8 minutos puede convertirse en:
                        </p>
                        <ul className="application-list">
                            <li>3 clips cortos de 60 segundos para Instagram/LinkedIn</li>
                            <li>Un artículo de blog (transcripción editada)</li>
                            <li>Un hilo de LinkedIn (5 puntos clave)</li>
                            <li>Una entrada de newsletter</li>
                        </ul>
                        <div className="full-prompt-example">
                            <p>
                                "Esta es la transcripción de mi video sobre [tema]: [pegar transcripción].
                                Generá: (1) 3 fragmentos de 60 segundos para redes (elegí los momentos
                                más impactantes y reformateá para lectura rápida), (2) un artículo
                                de blog de 600 palabras basado en el contenido, (3) 5 puntos clave
                                para un hilo de LinkedIn."
                            </p>
                        </div>
                    </article>
                </section>

                <section id="formato" className="page__section">
                    <h2 className="page__section-title">3. Qué formato elegir según tu práctica</h2>
                    <article className="long-form-content">
                        <div className="table-container">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Formato</th>
                                        <th>Esfuerzo de producción</th>
                                        <th>Mejor para</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Video cara a cámara (YouTube/LinkedIn)</td>
                                        <td>Medio (guión + edición)</td>
                                        <td>Construir confianza, posicionamiento SEO</td>
                                    </tr>
                                    <tr>
                                        <td>Video en vivo (Instagram/LinkedIn Live)</td>
                                        <td>Bajo (sin edición)</td>
                                        <td>Comunidad, respuesta a preguntas frecuentes</td>
                                    </tr>
                                    <tr>
                                        <td>Podcast de audio</td>
                                        <td>Bajo (solo micrófono)</td>
                                        <td>Audiencia que escucha mientras trabaja/maneja</td>
                                    </tr>
                                    <tr>
                                        <td>Clips cortos (Reels/Shorts/TikTok)</td>
                                        <td>Bajo si repropósito de video largo</td>
                                        <td>Alcance orgánico, descubrimiento</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            Para empezar: un video mensual de cara a cámara de 5-8 minutos sobre
                            un tema de tu área, con guión de IA, editado en Descript. Eso es
                            todo lo que necesitás para construir presencia en video en 6 meses.
                        </p>
                    </article>
                </section>

                <section id="primer-video" className="page__section">
                    <h2 className="page__section-title">4. Tu primer video: el proceso completo</h2>
                    <article className="long-form-content">
                        <div className="flow-steps">
                            <div className="flow-step">
                                <strong>Elegís el tema</strong> — la pregunta más frecuente que
                                te hacen en consulta inicial. Ese tema ya probó que interesa.
                            </div>
                            <div className="flow-step">
                                <strong>Generás el guión con Claude</strong> usando el prompt de
                                esta unidad. Revisás, ajustás con tu voz y ejemplos propios
                                (15-20 minutos).
                            </div>
                            <div className="flow-step">
                                <strong>Grabás con el teléfono</strong> — luz natural de frente,
                                fondo limpio o librería, micrófono de solapa (~$20 en Mercado Libre).
                                No necesitás cámara profesional.
                            </div>
                            <div className="flow-step">
                                <strong>Editás en Descript</strong> — transcripción automática,
                                eliminás muletillas, agregás captions. 20-30 minutos para un video
                                de 8 minutos sin experiencia previa.
                            </div>
                            <div className="flow-step">
                                <strong>Publicás en YouTube</strong> con el título SEO que generaste
                                en la unidad anterior. Compartís en LinkedIn y newsletter.
                            </div>
                        </div>
                    </article>
                </section>

                <section id="checklist" className="page__section">
                    <h2 className="page__section-title">5. Checklist de esta unidad y del módulo</h2>
                    <article className="long-form-content">
                        <div className="checklist-box">
                            <ul className="checklist">
                                <li>☐ Elegí el tema de mi primer video (la pregunta más frecuente que recibo)</li>
                                <li>☐ Generé el guión con Claude y lo revisé con mi voz propia</li>
                                <li>☐ Grabé el primer video con lo que tengo disponible</li>
                                <li>☐ Edité en Descript o equivalente</li>
                                <li>☐ Publiqué en al menos un canal y compartí en mi red</li>
                                <li>☐ Repropusé el contenido en al menos un formato adicional</li>
                            </ul>
                        </div>
                        <div className="highlight-success">
                            <strong>Al terminar el Módulo 9</strong> tenés cuatro canales de
                            comunicación activos: clientes (email directo), LinkedIn, blog/SEO y
                            video. Cada uno trabaja de forma diferente y se refuerzan entre sí.
                            La IA hace posible mantener los cuatro sin un equipo de marketing.
                        </div>
                    </article>
                </section>

                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/communication-u4" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M9 U4: Newsletter legal</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próximo módulo:</span>
                        <Link to="/practice" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            M10 – Tu sistema propio: construí y escalá →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommunicationM9U5

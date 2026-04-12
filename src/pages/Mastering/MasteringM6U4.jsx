import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function MasteringM6U4() {
    return (
        <div className="page">
            <PageSEO
                title="Claude API: construir tu primer asistente jurídico sin programar · M5 U4"
                description="Cómo acceder a la API de Claude, construir un asistente jurídico básico usando herramientas no-code, y entender la diferencia entre claude.ai y la API directa."
                path="/mastering-u4"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 5 · Unidad 4</span>
                <h1 className="page__title">Claude API: tu primer asistente sin programar</h1>
                <p className="page__description">
                    La diferencia entre usar Claude en claude.ai y tener un Claude
                    configurado específicamente para vos, integrado en tu propio sitio
                    o herramienta.
                </p>
            </header>

            <div className="page__content">

                <section id="que-es" className="page__section">
                    <h2 className="page__section-title">1. API vs. claude.ai: la distinción importante</h2>
                    <article className="long-form-content">
                        <p>
                            Cuando usás claude.ai, estás usando la interfaz que Anthropic diseñó para vos.
                            Cuando accedés a la API de Claude, tenés el mismo modelo pero podés:
                        </p>
                        <ul className="application-list">
                            <li><strong>Definir el system prompt:</strong> Las instrucciones que el usuario nunca ve, que configuran el comportamiento del modelo para cada interacción</li>
                            <li><strong>Integrarlo en cualquier superficie:</strong> Tu sitio web, una herramienta interna, un bot de WhatsApp, un flujo de n8n</li>
                            <li><strong>Controlar la experiencia del usuario:</strong> Qué puede preguntar, cómo responde, con qué limitaciones</li>
                            <li><strong>Escalar sin límite de sesiones:</strong> La API no tiene restricciones de conversaciones simultáneas como claude.ai</li>
                        </ul>
                        <blockquote className="concept-quote">
                            Alcance Legal Penal — el asistente de este mismo sitio — está construido
                            sobre la API de Claude. Lo que aprendés en esta unidad es exactamente
                            cómo funciona ese sistema.
                        </blockquote>
                    </article>
                </section>

                <section id="como-funciona" className="page__section">
                    <h2 className="page__section-title">2. Cómo funciona la API</h2>
                    <article className="long-form-content">
                        <p>
                            Cada llamada a la API tiene esta estructura básica:
                        </p>
                        <div className="flow-steps">
                            <div className="flow-step">
                                <strong>System prompt</strong> — Las instrucciones permanentes: quién es el asistente, qué puede y no puede responder, qué tono usar, qué fuentes considerar. El usuario nunca lo ve.
                            </div>
                            <div className="flow-step">
                                <strong>Mensaje del usuario</strong> — Lo que escribe el usuario en cada turno de conversación.
                            </div>
                            <div className="flow-step">
                                <strong>Historial de conversación</strong> — Los turnos anteriores, que se envían junto con el mensaje nuevo para que el modelo mantenga contexto.
                            </div>
                            <div className="flow-step">
                                <strong>Respuesta de Claude</strong> — El texto generado, que tu aplicación muestra al usuario.
                            </div>
                        </div>
                        <p>
                            Eso es todo. La complejidad no está en la API — está en el diseño del
                            system prompt y en cómo conectás la API con la interfaz del usuario.
                        </p>
                    </article>
                </section>

                <section id="sin-codigo" className="page__section">
                    <h2 className="page__section-title">3. Construir un asistente sin código</h2>
                    <article className="long-form-content">
                        <p>
                            Hay tres caminos según tu nivel técnico:
                        </p>

                        <h3>Camino 1: n8n o Make (el más accesible)</h3>
                        <p>
                            Usás n8n o Make (M6 U2) como intermediario. El flujo:
                        </p>
                        <div className="flow-steps">
                            <div className="flow-step">
                                <strong>Interfaz:</strong> Un formulario de Google, un chat en tu sitio
                                (Tawk.to, Crisp), o un chat de WhatsApp Business.
                            </div>
                            <div className="flow-step">
                                <strong>n8n recibe el mensaje</strong> del usuario, agrega el system prompt
                                que vos configuraste, y llama a la API de Claude.
                            </div>
                            <div className="flow-step">
                                <strong>Claude responde</strong> y n8n envía esa respuesta de vuelta
                                al usuario en la misma interfaz.
                            </div>
                        </div>
                        <p>
                            Este camino funciona perfectamente para un asistente de consultas básicas
                            (estado de causa, documentos necesarios para un trámite, preguntas frecuentes
                            sobre honorarios). Sin escribir una línea de código.
                        </p>

                        <h3>Camino 2: Poe o similares</h3>
                        <p>
                            Plataformas como Poe (poe.com) te permiten crear bots con un system prompt
                            personalizado y compartirlos con un link. No requiere infraestructura propia.
                            Limitación: la interfaz es la de Poe, no la tuya.
                        </p>

                        <h3>Camino 3: Bolt.new o similar (con algo de asistencia)</h3>
                        <p>
                            Herramientas como Bolt.new generan código de aplicaciones completas a partir
                            de una descripción en lenguaje natural. Le describís el asistente jurídico
                            que querés, Bolt genera el código, y vos lo desplegás en Vercel o similar.
                            Requiere algo de criterio técnico pero no programación manual.
                        </p>
                    </article>
                </section>

                <section id="system-prompt" className="page__section">
                    <h2 className="page__section-title">4. El system prompt: el corazón del asistente</h2>
                    <article className="long-form-content">
                        <p>
                            El system prompt es lo que diferencia un asistente genérico de uno especializado.
                            Para un asistente jurídico, los elementos clave:
                        </p>

                        <h3>Ejemplo: Asistente de consultas para estudio laboral</h3>
                        <div className="full-prompt-example">
                            <p>Sos el asistente virtual del Estudio Jurídico [Nombre]. Tu función es responder consultas iniciales de personas que buscan asesoramiento en derecho laboral argentino.</p>
                            <p>PODÉS RESPONDER: preguntas generales sobre LCT, montos orientativos de indemnización (aclarando que son estimaciones), documentación necesaria para iniciar una consulta, cómo es el proceso de reclamo laboral, plazos de prescripción generales.</p>
                            <p>NO PODÉS: dar consejo legal específico sobre un caso concreto, prometer resultados, citar jurisprudencia específica como si fuera garantizada. Para eso invitás al usuario a coordinar una consulta con el estudio.</p>
                            <p>SIEMPRE: al final de tu respuesta, si la pregunta sugiere una situación concreta, invitá al usuario a coordinar una consulta gratuita de 20 minutos al [número].</p>
                            <p>TONO: profesional pero accesible. El usuario puede ser una persona sin formación jurídica.</p>
                        </div>

                        <div className="highlight-warning">
                            <strong>Límites del sistema:</strong> El system prompt define qué puede y no puede
                            responder el asistente. Esto es crucial para la responsabilidad profesional:
                            un asistente que promete resultados específicos o da consejo legal detallado
                            crea un riesgo. El system prompt es donde controlás ese límite.
                        </div>
                    </article>
                </section>

                <section id="costos" className="page__section">
                    <h2 className="page__section-title">5. Costos reales de la API</h2>
                    <article className="long-form-content">
                        <p>
                            A diferencia de claude.ai (suscripción fija), la API cobra por tokens usados.
                            Para un asistente de consultas de un estudio pequeño:
                        </p>
                        <div className="table-container">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Escenario</th>
                                        <th>Consultas/mes</th>
                                        <th>Costo estimado USD</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Estudio pequeño — consultas básicas</td>
                                        <td>~200</td>
                                        <td>~$3–8</td>
                                    </tr>
                                    <tr>
                                        <td>Estudio mediano — análisis de documentos</td>
                                        <td>~500</td>
                                        <td>~$15–30</td>
                                    </tr>
                                    <tr>
                                        <td>Uso intensivo con contexto largo</td>
                                        <td>~1000</td>
                                        <td>~$50–100</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            Para la mayoría de los estudios independientes, el costo de la API para
                            un asistente de consultas básicas es mínimo — menos que un café por semana.
                        </p>
                    </article>
                </section>

                <section id="checklist" className="page__section">
                    <h2 className="page__section-title">6. Checklist de esta unidad</h2>
                    <article className="long-form-content">
                        <div className="checklist-box">
                            <ul className="checklist">
                                <li>☐ Entiendo la diferencia entre claude.ai y la API de Claude</li>
                                <li>☐ Creé una cuenta en console.anthropic.com y obtuve una API key</li>
                                <li>☐ Entiendo qué va en un system prompt y qué lo diferencia de un prompt de usuario</li>
                                <li>☐ Escribí un system prompt para un asistente de mi área de práctica</li>
                                <li>☐ Probé llamar a la API al menos una vez (con n8n o Postman)</li>
                                <li>☐ Entiendo los límites éticos y de responsabilidad de un asistente jurídico automatizado</li>
                            </ul>
                        </div>
                    </article>
                </section>

                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/mastering-u3" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M5 U3: Artifacts</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/mastering-u5" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            U5 – MCP servers: Claude conectado a tus fuentes →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MasteringM6U4

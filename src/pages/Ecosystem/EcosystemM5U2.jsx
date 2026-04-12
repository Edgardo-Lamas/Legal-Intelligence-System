import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function EcosystemM5U2() {
    return (
        <div className="page">
            <PageSEO
                title="n8n y Make: automatización sin código para el estudio jurídico · M6 U2"
                description="Cómo construir flujos de trabajo automáticos sin programar usando n8n o Make. Automatización de seguimiento de causas, alertas procesales, generación de documentos y más."
                path="/ecosystem-u2"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 6 · Unidad 2</span>
                <h1 className="page__title">n8n y Make: automatización sin código</h1>
                <p className="page__description">
                    La diferencia entre ejecutar manualmente el mismo proceso cada semana
                    y que ese proceso se ejecute solo, sin que vos lo inicies.
                </p>
            </header>

            <div className="page__content">

                <section id="que-es" className="page__section">
                    <h2 className="page__section-title">1. Qué es la automatización sin código</h2>
                    <article className="long-form-content">
                        <p>
                            n8n y Make son plataformas de automatización visual: conectan aplicaciones
                            entre sí mediante flujos de trabajo llamados "workflows". Un workflow define
                            una cadena de pasos — disparado por un evento, ejecutado según una lógica,
                            terminado en una acción.
                        </p>
                        <p>
                            Para el abogado, el caso de uso más directo: conectar Google Sheets (donde
                            tenés el estado de tus causas) con la API de Claude (que analiza ese estado)
                            y Gmail o WhatsApp (donde recibís el resultado). Sin tocar una línea de código.
                            Sin abrir ninguna aplicación manualmente. Se ejecuta solo, cuando vos
                            programaste que se ejecute.
                        </p>
                        <blockquote className="concept-quote">
                            Automatizar no es programar. Es definir la lógica de un proceso una vez
                            y dejar que la máquina lo repita indefinidamente.
                        </blockquote>
                    </article>
                </section>

                <section id="comparacion" className="page__section">
                    <h2 className="page__section-title">2. n8n vs Make: ¿cuál elegir?</h2>
                    <article className="long-form-content">
                        <div className="comparison-grid">
                            <div className="comparison-box">
                                <h4>n8n</h4>
                                <ul>
                                    <li>Open source — podés self-hostear gratis</li>
                                    <li>Cloud: ~$20 USD/mes para uso básico</li>
                                    <li>Más flexible — permite nodos de código cuando es necesario</li>
                                    <li>Mejor para usuarios con algo más de criterio técnico</li>
                                    <li>Integración nativa con Claude API, OpenAI, Gemini</li>
                                    <li>Comunidad activa, plantillas disponibles</li>
                                </ul>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>Make (ex-Integromat)</h4>
                                <ul>
                                    <li>100% visual — interfaz de burbujas y conectores</li>
                                    <li>Gratis hasta 1.000 operaciones/mes</li>
                                    <li>Plan básico: ~$10–15 USD/mes</li>
                                    <li>Más fácil de empezar — menor curva de aprendizaje</li>
                                    <li>Gran biblioteca de integraciones pre-construidas</li>
                                    <li>Ideal para el primer workflow</li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            <strong>Recomendación:</strong> Si es tu primer contacto con automatización,
                            empezá con Make. Si querés más control y estás dispuesto a invertir una hora
                            más de configuración inicial, n8n es más potente a largo plazo.
                        </p>
                    </article>
                </section>

                <section id="workflow-causas" className="page__section">
                    <h2 className="page__section-title">3. Workflow 1: seguimiento semanal de causas</h2>
                    <article className="long-form-content">
                        <p>
                            El workflow más útil para abogados. Ya diseñaste el proceso en M7 U4 —
                            ahora lo automatizás:
                        </p>
                        <div className="flow-steps">
                            <div className="flow-step">
                                <strong>Trigger: Lunes 8:00 AM (Schedule)</strong><br />
                                n8n/Make se activa automáticamente cada lunes a las 8. Vos no hacés nada.
                            </div>
                            <div className="flow-step">
                                <strong>Paso 1: Leer Google Sheets (Google Sheets node)</strong><br />
                                Lee el registro de causas: una fila por causa, columnas para estado,
                                plazos, fecha de última actuación, prioridad.
                            </div>
                            <div className="flow-step">
                                <strong>Paso 2: Llamar a Claude API (HTTP Request node)</strong><br />
                                Envía el contenido de la hoja más el prompt de seguimiento.
                                Claude analiza vencimientos, detecta urgencias, genera el resumen semanal.
                            </div>
                            <div className="flow-step">
                                <strong>Paso 3: Enviar resultado (Gmail / WhatsApp node)</strong><br />
                                El resumen semanal llega a tu inbox o WhatsApp antes de que empieces
                                la semana. Formato limpio, prioridades claras, alertas destacadas.
                            </div>
                        </div>
                        <p>
                            Tiempo de configuración inicial: 2–3 horas la primera vez.
                            Tiempo que ahorra cada semana: 1–2 horas de seguimiento manual.
                            Break-even: primera semana de uso.
                        </p>
                    </article>
                </section>

                <section id="workflow-cliente" className="page__section">
                    <h2 className="page__section-title">4. Workflow 2: respuesta automática a consultas de clientes</h2>
                    <article className="long-form-content">
                        <p>
                            Para estudios que reciben volumen de consultas similares (estado de la causa,
                            documentos necesarios, próximos pasos):
                        </p>
                        <div className="flow-steps">
                            <div className="flow-step">
                                <strong>Trigger: Email entrante con asunto "[Consulta]"</strong><br />
                                Gmail detecta correos con ese tag. También puede ser formulario de
                                contacto en el sitio web, o mensaje de WhatsApp con palabra clave.
                            </div>
                            <div className="flow-step">
                                <strong>Paso 1: Clasificar la consulta (Claude API)</strong><br />
                                Claude lee el mensaje y lo clasifica: consulta de estado, solicitud de
                                turno, consulta legal general, urgencia procesal. Cada categoría
                                dispara un camino diferente.
                            </div>
                            <div className="flow-step">
                                <strong>Paso 2A: Consulta de estado → respuesta automática</strong><br />
                                Si el cliente pregunta por el estado de su causa, Claude busca en
                                la hoja de causas y genera una respuesta personalizada. Se envía
                                al cliente sin que vos intervengas.
                            </div>
                            <div className="flow-step">
                                <strong>Paso 2B: Consulta legal → alerta a vos</strong><br />
                                Si es una consulta que requiere criterio jurídico real, te manda
                                un resumen de la consulta con los datos del cliente para que respondas
                                cuando tengas tiempo. No la responde sola.
                            </div>
                        </div>
                        <div className="highlight-warning">
                            <strong>Límite importante:</strong> El workflow no reemplaza al abogado en
                            las consultas que requieren criterio jurídico. El criterio de clasificación
                            define explícitamente qué puede responder automáticamente y qué te escala.
                            Si tenés dudas sobre ese límite, errá siempre del lado de la escalada.
                        </div>
                    </article>
                </section>

                <section id="workflow-documentos" className="page__section">
                    <h2 className="page__section-title">5. Workflow 3: generación automática de documentos estándar</h2>
                    <article className="long-form-content">
                        <p>
                            Para documentos muy repetitivos con estructura fija (notas de pedido de informes,
                            poderes simples, cartas documento):
                        </p>
                        <div className="flow-steps">
                            <div className="flow-step">
                                <strong>Trigger: Formulario de Google (nuevo registro)</strong><br />
                                Completás un formulario simple: tipo de documento, datos de las partes,
                                datos del juzgado, detalles específicos.
                            </div>
                            <div className="flow-step">
                                <strong>Paso 1: Claude genera el borrador (Claude API)</strong><br />
                                Claude recibe los datos del formulario y el template del documento.
                                Genera el borrador completo con los datos completados correctamente.
                            </div>
                            <div className="flow-step">
                                <strong>Paso 2: Crear documento en Google Docs</strong><br />
                                El borrador se crea automáticamente en Google Docs, en la carpeta
                                de la causa correspondiente, con el nombre correcto.
                            </div>
                            <div className="flow-step">
                                <strong>Paso 3: Notificarte que está listo</strong><br />
                                Te manda el link al documento por email o Slack. Vos lo revisás,
                                ajustás si hace falta, y lo usás. Tiempo de generación: 2–3 minutos
                                vs. 30–45 minutos de redacción manual.
                            </div>
                        </div>
                    </article>
                </section>

                <section id="empezar" className="page__section">
                    <h2 className="page__section-title">6. Cómo empezar esta semana</h2>
                    <article className="long-form-content">
                        <div className="risk-list">
                            <div className="risk-item">
                                <span className="risk-icon">1</span>
                                <span>
                                    <strong>Crear cuenta gratuita en Make o n8n cloud.</strong> Make es más fácil para
                                    empezar. No necesitás tarjeta de crédito para el plan gratuito.
                                </span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">2</span>
                                <span>
                                    <strong>Obtener tu API key de Claude.</strong> En console.anthropic.com,
                                    creás un proyecto y generás una API key. El costo de la API para uso
                                    personal es muy bajo — menos de $5 USD/mes para el seguimiento de causas.
                                </span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">3</span>
                                <span>
                                    <strong>Construir el workflow de seguimiento de causas.</strong>
                                    Es el más directo: Sheets → Claude API → Gmail. 3 nodos, 2–3 horas
                                    de configuración, valor inmediato desde la primera ejecución.
                                </span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">4</span>
                                <span>
                                    <strong>Probarlo manualmente antes de activar el trigger automático.</strong>
                                    Ejecutá el workflow a mano 2–3 veces, verificá que el output de Claude
                                    es correcto, y recién entonces activá el schedule automático.
                                </span>
                            </div>
                        </div>
                    </article>
                </section>

                <section id="checklist" className="page__section">
                    <h2 className="page__section-title">7. Checklist de esta unidad</h2>
                    <article className="long-form-content">
                        <div className="checklist-box">
                            <ul className="checklist">
                                <li>☐ Entiendo la diferencia entre n8n y Make y elegí con cuál empezar</li>
                                <li>☐ Creé mi cuenta y exploré la interfaz de la plataforma elegida</li>
                                <li>☐ Tengo mi API key de Claude lista</li>
                                <li>☐ Construí y probé el workflow de seguimiento semanal</li>
                                <li>☐ El workflow corre automáticamente y llega el resumen a mi inbox</li>
                                <li>☐ Identifiqué qué otro proceso repetitivo de mi estudio puedo automatizar</li>
                            </ul>
                        </div>
                    </article>
                </section>

                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/ecosystem" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M6 U1: El ecosistema IA del abogado 2025</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/ecosystem-u3" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            U3 – NotebookLM: tu base de jurisprudencia con IA →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EcosystemM5U2

import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function AgentsM7U5() {
    return (
        <div className="page">
            <PageSEO
                title="Orquestación: múltiples agentes colaborando en un caso · M7 U5"
                description="Cómo coordinar un agente investigador, un procesador de expediente y un redactor para producir un escrito jurídico completo. El patrón orquestador-trabajador aplicado al derecho."
                path="/agents-u5"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 7 · Unidad 5</span>
                <h1 className="page__title">Orquestación: varios agentes, un caso</h1>
                <p className="page__description">
                    El salto cualitativo: en lugar de usar un agente para una tarea, coordinás varios
                    agentes especializados que trabajan en paralelo y se pasan resultados entre sí.
                </p>
            </header>

            <div className="page__content">

                <section id="que-es" className="page__section">
                    <h2 className="page__section-title">1. Qué es la orquestación multi-agente</h2>
                    <article className="long-form-content">
                        <p>
                            Cuando un caso complejo requiere investigación jurídica, análisis del expediente
                            y redacción de un escrito, estás hablando de tres tareas distintas con perfiles
                            distintos. Un solo agente generalista puede hacerlas todas — pero no tan bien
                            como tres agentes especializados coordinados.
                        </p>
                        <p>
                            La orquestación multi-agente es el patrón donde un <strong>orquestador</strong>
                            recibe el objetivo global, lo divide en tareas, las asigna a agentes trabajadores
                            especializados, recibe sus resultados, y los integra en un producto final coherente.
                        </p>
                        <blockquote className="concept-quote">
                            No es un agente más inteligente. Son agentes más especializados, mejor
                            coordinados. La especialización produce mejor calidad; la coordinación
                            produce coherencia.
                        </blockquote>
                    </article>
                </section>

                <section id="patron" className="page__section">
                    <h2 className="page__section-title">2. El patrón orquestador-trabajador</h2>
                    <article className="long-form-content">
                        <div className="flow-steps">
                            <div className="flow-step">
                                <strong>ORQUESTADOR (Claude Opus o Sonnet)</strong><br />
                                Recibe el objetivo del caso. Analiza qué información necesita y en qué orden.
                                Genera los prompts específicos para cada agente trabajador. Integra los
                                resultados. Detecta inconsistencias entre outputs. Produce el resultado final.
                            </div>
                            <div className="flow-step">
                                <strong>AGENTE 1 — Procesador de expediente</strong><br />
                                Especializado en extraer información estructurada del expediente: hechos,
                                partes, prueba ofrecida, estado procesal, timeline. No analiza — extrae y organiza.
                            </div>
                            <div className="flow-step">
                                <strong>AGENTE 2 — Investigador jurídico</strong><br />
                                Especializado en investigar el marco normativo y jurisprudencial aplicable.
                                Usa Gemini Deep Research. No redacta — investiga y sintetiza fuentes.
                            </div>
                            <div className="flow-step">
                                <strong>AGENTE 3 — Redactor</strong><br />
                                Especializado en transformar análisis + investigación en texto jurídico
                                estructurado. Recibe el output de los dos agentes anteriores ya integrado
                                por el orquestador. No investiga — redacta.
                            </div>
                        </div>
                    </article>
                </section>

                <section id="caso-practico" className="page__section">
                    <h2 className="page__section-title">3. Caso práctico: ingreso de causa nueva</h2>
                    <article className="long-form-content">
                        <p>
                            Un cliente llega con una causa nueva: despido sin causa de 10 años de antigüedad,
                            con posible mobbing previo. Tenés el expediente laboral y 3 días para presentar
                            la contestación de un traslado. El sistema multi-agente en acción:
                        </p>

                        <h3>Turno 1: Orquestador analiza el objetivo</h3>
                        <div className="full-prompt-example">
                            <p>
                                "Recibí una causa nueva: [descripción breve]. Necesito preparar [documento].
                                Para esto necesito: (1) extraer los hechos clave del expediente que te adjunto,
                                (2) investigar doctrina y jurisprudencia sobre despido + mobbing en PBA,
                                (3) redactar el escrito. Diseñá el plan de trabajo: qué información exacta
                                necesita cada agente, en qué orden los activamos, qué output necesito
                                de cada uno para poder integrar."
                            </p>
                        </div>

                        <h3>Turno 2: Agente procesador con el expediente</h3>
                        <div className="full-prompt-example">
                            <p>
                                "Sos el agente procesador de expedientes. Tu única tarea es extraer del
                                expediente adjunto: (1) timeline cronológico de hechos, (2) pretensiones
                                de la actora con sustento probatorio, (3) prueba ofrecida por cada parte,
                                (4) estado procesal actual. No analices ni opines — solo extraé y organizá
                                en el formato estructurado que usamos."
                            </p>
                        </div>

                        <h3>Turno 3: Agente investigador (Gemini Deep Research)</h3>
                        <div className="full-prompt-example">
                            <p>
                                "Investigá jurisprudencia y doctrina argentina sobre: (1) configuración
                                del mobbing laboral y sus requisitos probatorios, (2) criterios de las
                                Cámaras de Apelaciones de PBA para cuantificar daño moral por despido
                                + mobbing, (3) si el mobbing puede constituir injuria que habilita el
                                despido indirecto. Fuentes: CSJN, SCBA, Cámaras laborales PBA. Período:
                                últimos 10 años. Formato estructurado con citas verificables."
                            </p>
                        </div>

                        <h3>Turno 4: Orquestador integra (checkpoint tuyo)</h3>
                        <p>
                            Revisás ambos outputs antes de que el orquestador los integre:
                        </p>
                        <div className="full-prompt-example">
                            <p>
                                "Acá está el output del procesador [pegar] y el output del investigador [pegar].
                                Antes de pasarle al redactor, integrá los dos: ¿los hechos del caso son
                                compatibles con los criterios jurisprudenciales encontrados? ¿Hay algún
                                hecho del expediente que es especialmente relevante a la luz de la doctrina?
                                ¿Hay alguna inconsistencia entre lo que dice el expediente y lo que la
                                jurisprudencia requiere para la pretensión? Generá el brief integrado
                                para el agente redactor."
                            </p>
                        </div>

                        <h3>Turno 5: Agente redactor</h3>
                        <div className="full-prompt-example">
                            <p>
                                "Sos el agente redactor. Recibís el brief integrado [pegar]. Tu tarea es
                                redactar [documento] siguiendo el pipeline de 5 etapas: primero la estructura
                                para aprobación, después sección por sección. Usá [VERIFICAR] para todas
                                las citas que no tenés confirmadas. El escrito es para [juzgado], proceso
                                [tipo], estilo [indicación]."
                            </p>
                        </div>
                    </article>
                </section>

                <section id="sin-codigo" className="page__section">
                    <h2 className="page__section-title">4. Implementación sin código: Projects en paralelo</h2>
                    <article className="long-form-content">
                        <p>
                            Sin programación, la orquestación multi-agente se implementa con <strong>múltiples
                            Projects de Claude en paralelo</strong>:
                        </p>
                        <ul className="application-list">
                            <li><strong>Project "Orquestador":</strong> Con el plan de trabajo y el brief integrado</li>
                            <li><strong>Project "Procesador [nombre causa]":</strong> Con el expediente cargado</li>
                            <li><strong>Project "Investigador":</strong> Gemini para la investigación jurídica</li>
                            <li><strong>Project "Redactor [nombre causa]":</strong> Para producir el escrito final</li>
                        </ul>
                        <p>
                            Vos coordinás: pasás outputs de un Project al siguiente. No es completamente
                            autónomo — vos sos el orquestador humano que conecta los agentes. Pero el
                            tiempo de trabajo intelectual se concentra en lo que no puede delegar:
                            la revisión de cada output antes de pasarlo al siguiente agente.
                        </p>

                        <div className="highlight-success">
                            <strong>Resultado en un caso real:</strong> Causa nueva de complejidad media.
                            Sin sistema: 8-10 horas de trabajo. Con orquestación multi-agente: 2-3 horas,
                            concentradas en revisión, verificación y ajuste fino. La calidad del output
                            es igual o superior porque la investigación es más exhaustiva.
                        </div>
                    </article>
                </section>

                <section id="errores" className="page__section">
                    <h2 className="page__section-title">5. Errores frecuentes en orquestación</h2>
                    <article className="long-form-content">
                        <div className="risk-list">
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>
                                    <strong>Saltear el checkpoint de integración.</strong> Pasarle al redactor el output
                                    del procesador y el investigador sin que el orquestador los integre primero.
                                    El resultado es un escrito que yuxtapone información sin coherencia.
                                </span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>
                                    <strong>Darle demasiado contexto a cada agente.</strong> El procesador no necesita
                                    saber la estrategia jurídica. El redactor no necesita ver el expediente completo.
                                    Cada agente recibe solo lo que necesita para su tarea — no todo.
                                </span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>
                                    <strong>No verificar las fuentes del investigador antes de pasarlas al redactor.</strong>
                                    Si el investigador encontró citas dudosas, el redactor las va a usar con confianza.
                                    El checkpoint entre investigación y redacción es crítico.
                                </span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>
                                    <strong>Intentar construirlo todo desde el día uno.</strong> Empezá con dos agentes
                                    (procesador + redactor). Cuando eso funcione bien, agregás el investigador.
                                    Cuando funcione todo, considerás la automatización con n8n.
                                </span>
                            </div>
                        </div>
                    </article>
                </section>

                <section id="futuro" className="page__section">
                    <h2 className="page__section-title">6. El futuro inmediato: orquestación nativa en Claude</h2>
                    <article className="long-form-content">
                        <p>
                            Anthropic está desarrollando capacidades de orquestación multi-agente nativa
                            en Claude — donde el modelo puede llamar a subagentes de forma autónoma dentro
                            de una sola conversación, sin que vos muevas outputs manualmente entre Projects.
                        </p>
                        <p>
                            El patrón que aprendiste en este módulo — orquestador, trabajadores especializados,
                            checkpoints humanos — es exactamente la arquitectura que va a adoptar esa funcionalidad.
                            Lo que hoy hacés manualmente entre Projects, en el horizonte cercano lo va a hacer
                            el modelo dentro de una sola sesión.
                        </p>
                        <p>
                            Entender cómo funciona ahora te pone en posición de adoptarlo naturalmente
                            cuando esté disponible — en lugar de aprender desde cero cuando ya sea mainstream.
                        </p>
                    </article>
                </section>

                <section id="checklist" className="page__section">
                    <h2 className="page__section-title">7. Checklist de cierre del Módulo 7</h2>
                    <article className="long-form-content">
                        <div className="checklist-box">
                            <h3>Antes de pasar al módulo siguiente, confirmá:</h3>
                            <ul className="checklist">
                                <li>☐ Entiendo la diferencia entre un agente y un chat con IA</li>
                                <li>☐ Construí y probé el agente de investigación jurídica</li>
                                <li>☐ Apliqué el pipeline de redacción de 5 etapas con al menos un documento</li>
                                <li>☐ Tengo el registro de causas estructurado y probé el flujo semanal</li>
                                <li>☐ Entiendo el patrón orquestador-trabajador y sus checkpoints</li>
                                <li>☐ Identifiqué con qué causa real empezaría a implementar la orquestación</li>
                            </ul>
                        </div>
                    </article>
                </section>

                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/agents-u4" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M7 U4: Agente de seguimiento de causas</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--complete">✓ Módulo 7 completo</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próximo módulo:</span>
                        <Link to="/privacy" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Módulo 8 – Privacidad, ética y secreto profesional →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgentsM7U5

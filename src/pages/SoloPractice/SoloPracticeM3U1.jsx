import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'

function SoloPracticeM3U1() {
    return (
        <div className="page">
            <header className="page__header">
                <span className="page__module-tag">Módulo 3 · Unidad 1</span>
                <h1 className="page__title">Abogacía por Cuenta Propia</h1>
                <p className="page__description">
                    Organización, Automatización y Control del Estudio Jurídico
                </p>
            </header>

            <div className="page__content">
                {/* Sección 1: Objetivos */}
                <section id="objetivos" className="page__section">
                    <h2 className="page__section-title">1. ¿Qué vas a aprender?</h2>
                    <article className="long-form-content">
                        <p>Al finalizar esta unidad vas a poder:</p>
                        <ul className="learning-objectives">
                            <li>Entender cómo la IA se integra en la <strong>gestión diaria real</strong> de un abogado independiente.</li>
                            <li>Automatizar tareas administrativas sin perder control ni criterio profesional.</li>
                            <li>Separar claramente <strong>producción jurídica</strong> de <strong>operación del estudio</strong>.</li>
                            <li>Usar IA para reducir fricción operativa y liberar tiempo cognitivo.</li>
                            <li>Diseñar un <strong>sistema mínimo viable</strong> de despacho asistido por IA.</li>
                        </ul>
                    </article>
                </section>

                {/* Sección 2: Concepto central */}
                <section id="concepto" className="page__section">
                    <h2 className="page__section-title">2. Concepto central</h2>
                    <article className="long-form-content">
                        <blockquote className="concept-quote">
                            La IA no sirve primero para litigar mejor, sino para no desperdiciar tiempo fuera del litigio.
                        </blockquote>
                        <p>La mayoría de los abogados independientes no fracasan por falta de conocimiento jurídico, sino por:</p>
                        <div className="failure-causes">
                            <div className="failure-cause">
                                <span className="failure-icon">📋</span>
                                <span>Desorden operativo</span>
                            </div>
                            <div className="failure-cause">
                                <span className="failure-icon">⏱️</span>
                                <span>Carga administrativa excesiva</span>
                            </div>
                            <div className="failure-cause">
                                <span className="failure-icon">🔧</span>
                                <span>Falta de sistemas</span>
                            </div>
                        </div>
                        <p className="highlight-warning">
                            La IA aplicada a la abogacía por cuenta propia no es sofisticación: es <strong>supervivencia profesional</strong>.
                        </p>
                    </article>
                </section>

                {/* Sección 3: Producción vs Operación */}
                <section id="produccion-operacion" className="page__section">
                    <h2 className="page__section-title">3. Producción jurídica vs Operación del estudio</h2>
                    <article className="long-form-content">
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--good">
                                <h4>⚖️ Producción jurídica</h4>
                                <ul>
                                    <li>Análisis de casos</li>
                                    <li>Redacción de escritos</li>
                                    <li>Estrategia procesal</li>
                                </ul>
                            </div>
                            <div className="comparison-box comparison-box--neutral">
                                <h4>🏢 Operación del estudio</h4>
                                <ul>
                                    <li>Agenda</li>
                                    <li>Facturación</li>
                                    <li>Seguimiento de clientes</li>
                                    <li>Recordatorios y vencimientos</li>
                                </ul>
                            </div>
                        </div>
                        <p className="highlight-warning">
                            <strong>Error común:</strong> usar IA solo para escribir textos jurídicos y seguir gestionando todo lo demás de forma manual.
                        </p>
                    </article>
                </section>

                {/* Sección 4: Qué automatizar */}
                <section id="que-automatizar" className="page__section">
                    <h2 className="page__section-title">4. Qué tareas sí conviene automatizar</h2>
                    <article className="long-form-content">
                        <p>La IA es especialmente eficaz en tareas:</p>
                        <div className="task-criteria">
                            <span className="task-criterion">Repetitivas</span>
                            <span className="task-criterion">Basadas en reglas</span>
                            <span className="task-criterion">De bajo riesgo jurídico</span>
                        </div>
                        <p>Ejemplos:</p>
                        <ul className="application-list">
                            <li>Resúmenes de llamadas con clientes</li>
                            <li>Clasificación de correos</li>
                            <li>Preparación de borradores administrativos</li>
                            <li>Generación de checklists procesales</li>
                        </ul>
                    </article>
                </section>

                {/* Sección 5: Qué NO automatizar */}
                <section id="que-no-automatizar" className="page__section">
                    <h2 className="page__section-title">5. Qué tareas NO deben automatizarse</h2>
                    <article className="long-form-content">
                        <p>Nunca delegar en IA:</p>
                        <div className="risk-list">
                            <div className="risk-item">
                                <span className="risk-icon">🚫</span>
                                <span>Decisión jurídica final</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">🚫</span>
                                <span>Evaluación de riesgo procesal</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">🚫</span>
                                <span>Comunicación sensible con clientes sin revisión</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">🚫</span>
                                <span>Firma y presentación de escritos</span>
                            </div>
                        </div>
                        <p className="highlight-warning">
                            La automatización sin criterio es <strong>negligencia profesional</strong>.
                        </p>
                    </article>
                </section>

                {/* Sección 6: Sistema Mínimo Viable */}
                <section id="smv" className="page__section">
                    <h2 className="page__section-title">6. Sistema Mínimo Viable (SMV) para abogado independiente</h2>
                    <article className="long-form-content">
                        <p>Un despacho asistido por IA debería, como mínimo:</p>
                        <div className="layer-diagram">
                            <div className="layer-step">
                                <div className="layer-step__number">1</div>
                                <div className="layer-step__content">
                                    <h4>Centralizar información de clientes</h4>
                                </div>
                            </div>
                            <div className="layer-connector">↓</div>
                            <div className="layer-step">
                                <div className="layer-step__number">2</div>
                                <div className="layer-step__content">
                                    <h4>Registrar tareas y vencimientos</h4>
                                </div>
                            </div>
                            <div className="layer-connector">↓</div>
                            <div className="layer-step">
                                <div className="layer-step__number">3</div>
                                <div className="layer-step__content">
                                    <h4>Generar borradores administrativos</h4>
                                </div>
                            </div>
                            <div className="layer-connector">↓</div>
                            <div className="layer-step">
                                <div className="layer-step__number">4</div>
                                <div className="layer-step__content">
                                    <h4>Asistir en redacción preliminar</h4>
                                </div>
                            </div>
                            <div className="layer-connector">↓</div>
                            <div className="layer-step">
                                <div className="layer-step__number">5</div>
                                <div className="layer-step__content">
                                    <h4>Mantener trazabilidad de decisiones</h4>
                                </div>
                            </div>
                        </div>
                        <p className="highlight-success">
                            No hace falta un sistema complejo. Hace falta <strong>consistencia</strong>.
                        </p>
                    </article>
                </section>

                {/* Sección 7: Ejemplo de flujo */}
                <section id="ejemplo-flujo" className="page__section">
                    <h2 className="page__section-title">7. Ejemplo de flujo simple con IA</h2>
                    <article className="long-form-content">
                        <div className="flow-steps">
                            <div className="flow-step">📞 Reunión con cliente</div>
                            <div className="flow-step">🎙️ Transcripción automática</div>
                            <div className="flow-step">📋 Resumen estructurado con IA</div>
                            <div className="flow-step">✅ Lista de acciones sugeridas</div>
                            <div className="flow-step">👤 Revisión y decisión humana</div>
                        </div>
                        <p className="highlight-success">
                            La IA acelera. <strong>El abogado valida</strong>.
                        </p>
                    </article>
                </section>

                {/* Sección 8: Riesgos */}
                <section id="riesgos" className="page__section">
                    <h2 className="page__section-title">8. Riesgos comunes en abogacía independiente con IA</h2>
                    <article className="long-form-content">
                        <div className="risk-list">
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>Automatizar por moda</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>Perder control del contenido enviado</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>No auditar salidas de la IA</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>Mezclar datos sensibles sin criterio</span>
                            </div>
                        </div>
                        <blockquote className="concept-quote" style={{ fontSize: 'var(--font-size-xl)' }}>
                            La clave no es usar más IA, sino usarla mejor delimitada.
                        </blockquote>
                    </article>
                </section>

                {/* Sección 9: Ideas clave */}
                <section id="ideas-clave" className="page__section">
                    <h2 className="page__section-title">9. Ideas clave para memorizar</h2>
                    <article className="long-form-content">
                        <ul className="key-points">
                            <li>IA para <strong>operar</strong>, no solo para escribir.</li>
                            <li>Separar <strong>gestión</strong> de <strong>estrategia</strong>.</li>
                            <li>Automatizar lo repetitivo.</li>
                            <li>Revisar siempre lo sensible.</li>
                            <li><strong>Sistemas simples</strong> vencen a soluciones complejas.</li>
                        </ul>
                    </article>
                </section>

                {/* Sección 10: Conexión */}
                <section id="conexion" className="page__section">
                    <h2 className="page__section-title">10. Conexión con el sistema completo</h2>
                    <article className="long-form-content">
                        <p>Esta unidad inaugura el paso desde:</p>
                        <ul>
                            <li><strong>Uso táctico de IA</strong> (Módulo 2)</li>
                            <li>A <strong>integración estructural en la práctica profesional</strong></li>
                        </ul>
                        <p>Es la base para:</p>
                        <div className="strategic-uses">
                            <div className="strategic-use">
                                <span className="strategic-use__icon">💰</span>
                                <span>Gestión contable automatizada</span>
                            </div>
                            <div className="strategic-use">
                                <span className="strategic-use__icon">📢</span>
                                <span>Marketing legal</span>
                            </div>
                            <div className="strategic-use">
                                <span className="strategic-use__icon">📈</span>
                                <span>Escalabilidad del estudio</span>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Resultado esperado */}
                <section id="resultado" className="page__section">
                    <h2 className="page__section-title">Resultado esperado</h2>
                    <article className="long-form-content">
                        <div className="result-box">
                            <p>
                                El abogado que completa esta unidad deja de improvisar su estudio y comienza a <strong>operarlo como un sistema</strong>, usando IA como soporte, no como sustituto.
                            </p>
                        </div>
                    </article>
                </section>

                {/* Footer de navegación */}
                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/prompt-engineering-u3" className="unit-nav-link">
                            <span className="unit-nav-label">← Módulo anterior</span>
                            <span className="unit-nav-title">M2 U3: Preparación de Juicio</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--complete">✓ Unidad 1 Completa</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <span className="next-title">Unidad 2 – Gestión contable y fiscal automatizada</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SoloPracticeM3U1

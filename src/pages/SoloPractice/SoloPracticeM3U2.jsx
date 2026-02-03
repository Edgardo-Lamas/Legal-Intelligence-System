import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'

function SoloPracticeM3U2() {
    return (
        <div className="page">
            <header className="page__header">
                <span className="page__module-tag">Módulo 3 · Unidad 2</span>
                <h1 className="page__title">Gestión Contable y Fiscal Automatizada</h1>
                <p className="page__description">
                    Orden administrativo sin perder control profesional
                </p>
            </header>

            <div className="page__content">
                {/* Sección 1: Objetivos */}
                <section id="objetivos" className="page__section">
                    <h2 className="page__section-title">1. ¿Qué vas a aprender?</h2>
                    <article className="long-form-content">
                        <p>Al finalizar esta unidad vas a poder:</p>
                        <ul className="learning-objectives">
                            <li>Comprender qué partes de la gestión contable y fiscal <strong>sí pueden automatizarse</strong> con IA.</li>
                            <li>Diseñar flujos simples para registrar ingresos, gastos y comprobantes.</li>
                            <li>Reducir errores administrativos sin perder trazabilidad ni control.</li>
                            <li>Preparar información clara y ordenada para tu contador.</li>
                            <li>Evitar riesgos legales derivados de una automatización mal diseñada.</li>
                        </ul>
                    </article>
                </section>

                {/* Sección 2: Concepto central */}
                <section id="concepto" className="page__section">
                    <h2 className="page__section-title">2. Concepto central</h2>
                    <article className="long-form-content">
                        <blockquote className="concept-quote">
                            La IA no reemplaza al contador: ordena la información para que el contador trabaje mejor y más rápido.
                        </blockquote>
                        <p>
                            El objetivo no es hacer contabilidad "con IA", sino <strong>eliminar fricción administrativa</strong> entre el abogado, sus datos y el profesional contable.
                        </p>
                    </article>
                </section>

                {/* Sección 3: Problemas que resuelve */}
                <section id="problemas" className="page__section">
                    <h2 className="page__section-title">3. Qué problemas resuelve la automatización</h2>
                    <article className="long-form-content">
                        <p>En la práctica diaria del abogado independiente, los principales problemas son:</p>
                        <div className="failure-causes">
                            <div className="failure-cause">
                                <span className="failure-icon">📄</span>
                                <span>Comprobantes dispersos</span>
                            </div>
                            <div className="failure-cause">
                                <span className="failure-icon">💰</span>
                                <span>Ingresos mal registrados</span>
                            </div>
                            <div className="failure-cause">
                                <span className="failure-icon">📊</span>
                                <span>Gastos sin clasificar</span>
                            </div>
                            <div className="failure-cause">
                                <span className="failure-icon">📅</span>
                                <span>Información incompleta al cierre del mes</span>
                            </div>
                        </div>
                        <p className="highlight-warning">
                            La IA actúa como <strong>sistema de orden previo</strong>, no como autoridad fiscal.
                        </p>
                    </article>
                </section>

                {/* Sección 4: Qué automatizar */}
                <section id="que-automatizar" className="page__section">
                    <h2 className="page__section-title">4. Qué tareas contables son automatizables</h2>
                    <article className="long-form-content">
                        <p>Conviene automatizar tareas que sean:</p>
                        <div className="task-criteria">
                            <span className="task-criterion">Repetitivas</span>
                            <span className="task-criterion">Basadas en reglas</span>
                            <span className="task-criterion">Verificables</span>
                        </div>
                        <p>Ejemplos concretos:</p>
                        <ul className="application-list">
                            <li>Lectura y clasificación de facturas</li>
                            <li>Extracción de datos (fecha, monto, proveedor)</li>
                            <li>Etiquetado de gastos por categoría</li>
                            <li>Generación de reportes mensuales preliminares</li>
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
                                <span>Interpretación normativa</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">🚫</span>
                                <span>Declaraciones fiscales</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">🚫</span>
                                <span>Presentaciones ante organismos</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">🚫</span>
                                <span>Decisiones impositivas estratégicas</span>
                            </div>
                        </div>
                        <p className="highlight-warning">
                            Automatizar estas tareas <strong>no es eficiencia, es riesgo</strong>.
                        </p>
                    </article>
                </section>

                {/* Sección 6: Flujo básico */}
                <section id="flujo" className="page__section">
                    <h2 className="page__section-title">6. Flujo básico de gestión contable asistida</h2>
                    <article className="long-form-content">
                        <p>Ejemplo de flujo simple:</p>
                        <div className="layer-diagram">
                            <div className="layer-step">
                                <div className="layer-step__number">1</div>
                                <div className="layer-step__content">
                                    <h4>Recepción de comprobantes</h4>
                                    <p>Mail, PDF, foto</p>
                                </div>
                            </div>
                            <div className="layer-connector">↓</div>
                            <div className="layer-step">
                                <div className="layer-step__number">2</div>
                                <div className="layer-step__content">
                                    <h4>Extracción automática de datos</h4>
                                </div>
                            </div>
                            <div className="layer-connector">↓</div>
                            <div className="layer-step">
                                <div className="layer-step__number">3</div>
                                <div className="layer-step__content">
                                    <h4>Clasificación preliminar</h4>
                                </div>
                            </div>
                            <div className="layer-connector">↓</div>
                            <div className="layer-step">
                                <div className="layer-step__number">4</div>
                                <div className="layer-step__content">
                                    <h4>Revisión humana</h4>
                                </div>
                            </div>
                            <div className="layer-connector">↓</div>
                            <div className="layer-step">
                                <div className="layer-step__number">5</div>
                                <div className="layer-step__content">
                                    <h4>Entrega de reporte al contador</h4>
                                </div>
                            </div>
                        </div>
                        <p className="highlight-success">
                            Este flujo reduce errores y tiempo <strong>sin invadir incumbencias</strong>.
                        </p>
                    </article>
                </section>

                {/* Sección 7: Control y alertas */}
                <section id="alertas" className="page__section">
                    <h2 className="page__section-title">7. Uso de IA para control y alertas</h2>
                    <article className="long-form-content">
                        <p>La IA puede ayudar a:</p>
                        <div className="strategic-uses">
                            <div className="strategic-use">
                                <span className="strategic-use__icon">⚠️</span>
                                <span>Detectar gastos atípicos</span>
                            </div>
                            <div className="strategic-use">
                                <span className="strategic-use__icon">📉</span>
                                <span>Señalar períodos sin facturación</span>
                            </div>
                            <div className="strategic-use">
                                <span className="strategic-use__icon">📋</span>
                                <span>Alertar sobre documentación faltante</span>
                            </div>
                        </div>
                        <p className="highlight-success">
                            Siempre como <strong>sistema de alerta</strong>, no de decisión.
                        </p>
                    </article>
                </section>

                {/* Sección 8: Riesgos */}
                <section id="riesgos" className="page__section">
                    <h2 className="page__section-title">8. Riesgos comunes y malas prácticas</h2>
                    <article className="long-form-content">
                        <div className="risk-list">
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>Confiar ciegamente en clasificaciones automáticas</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>Mezclar datos personales y del estudio</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>No revisar reportes generados</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>Perder respaldo documental</span>
                            </div>
                        </div>
                        <blockquote className="concept-quote" style={{ fontSize: 'var(--font-size-xl)' }}>
                            La automatización sin auditoría es un error recurrente.
                        </blockquote>
                    </article>
                </section>

                {/* Sección 9: Ideas clave */}
                <section id="ideas-clave" className="page__section">
                    <h2 className="page__section-title">9. Ideas clave para memorizar</h2>
                    <article className="long-form-content">
                        <ul className="key-points">
                            <li>IA para <strong>ordenar</strong>, no para declarar.</li>
                            <li>El contador <strong>sigue siendo central</strong>.</li>
                            <li>Automatizar lo repetitivo <strong>reduce errores</strong>.</li>
                            <li><strong>Revisión humana</strong> obligatoria.</li>
                            <li><strong>Trazabilidad</strong> siempre.</li>
                        </ul>
                    </article>
                </section>

                {/* Sección 10: Conexión */}
                <section id="conexion" className="page__section">
                    <h2 className="page__section-title">10. Conexión con el sistema completo</h2>
                    <article className="long-form-content">
                        <p>Esta unidad continúa la organización operativa (Unidad 1) y prepara el terreno para:</p>
                        <div className="strategic-uses">
                            <div className="strategic-use">
                                <span className="strategic-use__icon">📢</span>
                                <span>Marketing legal</span>
                            </div>
                            <div className="strategic-use">
                                <span className="strategic-use__icon">📈</span>
                                <span>Escalabilidad del estudio</span>
                            </div>
                            <div className="strategic-use">
                                <span className="strategic-use__icon">📊</span>
                                <span>Reportes financieros claros</span>
                            </div>
                        </div>
                        <p className="highlight-warning">
                            Sin orden contable, <strong>no hay crecimiento sostenible</strong>.
                        </p>
                    </article>
                </section>

                {/* Resultado esperado */}
                <section id="resultado" className="page__section">
                    <h2 className="page__section-title">Resultado esperado</h2>
                    <article className="long-form-content">
                        <div className="result-box">
                            <p>
                                El abogado que completa esta unidad deja de improvisar su gestión fiscal y comienza a <strong>operar con información clara, ordenada y auditada</strong>, usando IA como soporte administrativo.
                            </p>
                        </div>
                    </article>
                </section>

                {/* Footer de navegación */}
                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/solo-practice" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M3 U1: Abogacía por Cuenta Propia</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--complete">✓ Unidad 2 Completa</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/solo-practice-u3" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Unidad 3 – Escritura Persuasiva Digital →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SoloPracticeM3U2

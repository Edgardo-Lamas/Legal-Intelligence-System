import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'

function PromptEngineeringM2U2() {
    return (
        <div className="page">
            <header className="page__header">
                <span className="page__module-tag">Módulo 2 · Unidad 2</span>
                <h1 className="page__title">Control de Contexto y Documentos Extensos</h1>
                <p className="page__description">
                    Manejo de documentos jurídicos extensos con IA
                </p>
            </header>

            <div className="page__content">
                {/* Sección 1: Objetivos de aprendizaje */}
                <section id="objetivos" className="page__section">
                    <h2 className="page__section-title">1. ¿Qué vas a aprender?</h2>
                    <article className="long-form-content">
                        <p>Al finalizar esta unidad vas a poder:</p>
                        <ul className="learning-objectives">
                            <li>Entender <strong>qué es la ventana de contexto</strong> y por qué es el límite real del trabajo con IA jurídica.</li>
                            <li>Evitar errores críticos derivados de <strong>contexto incompleto o mal curado</strong>.</li>
                            <li>Diseñar prompts y flujos de trabajo para <strong>documentos largos</strong> (expedientes, contratos extensos, pruebas documentales).</li>
                            <li>Diferenciar entre <strong>leer con IA</strong> y <strong>orquestar lectura con IA</strong>.</li>
                            <li>Preparar insumos jurídicos confiables para etapas posteriores (argumentación, redacción, estrategia).</li>
                        </ul>
                    </article>
                </section>

                {/* Sección 2: Concepto central */}
                <section id="concepto" className="page__section">
                    <h2 className="page__section-title">2. Concepto central</h2>
                    <article className="long-form-content">
                        <blockquote className="concept-quote">
                            La IA no "lee todo": procesa únicamente lo que entra en su ventana de contexto.
                            <span className="concept-quote__footer">El control del contexto es una responsabilidad profesional del abogado, no del modelo.</span>
                        </blockquote>
                        <p>
                            Un modelo de lenguaje no tiene acceso ilimitado a la información. Solo razona sobre el <strong>conjunto exacto de tokens</strong> que recibe. Todo lo que queda fuera <strong>no existe</strong> para el modelo.
                        </p>
                        <p className="highlight-warning">
                            En derecho, esta limitación no es técnica: es <strong>probatoria y estratégica</strong>.
                        </p>
                    </article>
                </section>

                {/* Sección 3: Ventana de contexto */}
                <section id="ventana" className="page__section">
                    <h2 className="page__section-title">3. Ventana de contexto: definición operativa</h2>
                    <article className="long-form-content">
                        <p>
                            La <strong>ventana de contexto</strong> es la cantidad máxima de información que un modelo puede procesar de manera coherente en una sola interacción.
                        </p>
                        <p>En términos prácticos:</p>
                        <div className="context-examples">
                            <div className="context-example context-example--ok">
                                <span className="context-example__icon">✅</span>
                                <span className="context-example__text">Un contrato de 5 páginas <strong>entra completo</strong>.</span>
                            </div>
                            <div className="context-example context-example--warning">
                                <span className="context-example__icon">⚠️</span>
                                <span className="context-example__text">Un expediente de 600 páginas <strong>no</strong>.</span>
                            </div>
                            <div className="context-example context-example--warning">
                                <span className="context-example__icon">⚠️</span>
                                <span className="context-example__text">Un conjunto de 200 correos <strong>no</strong>.</span>
                            </div>
                        </div>
                        <p>Cuando el contexto se desborda, el modelo:</p>
                        <ul>
                            <li><strong>Omite</strong> hechos relevantes.</li>
                            <li><strong>Prioriza</strong> información reciente.</li>
                            <li><strong>Completa vacíos</strong> con inferencias plausibles (alucinaciones).</li>
                        </ul>
                    </article>
                </section>

                {/* Sección 4: Error común */}
                <section id="error-comun" className="page__section">
                    <h2 className="page__section-title">4. Error común: "subir todo y preguntar"</h2>
                    <article className="long-form-content">
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Práctica incorrecta</h4>
                                <ul>
                                    <li>Copiar un expediente completo.</li>
                                    <li>Pedir: <em>"Analizá si corresponde la demanda"</em>.</li>
                                </ul>
                                <p><strong>Resultado:</strong></p>
                                <ul>
                                    <li>Análisis parcial.</li>
                                    <li>Hechos ignorados.</li>
                                    <li>Confianza injustificada en una respuesta fluida.</li>
                                </ul>
                            </div>
                            <div className="comparison-box comparison-box--neutral">
                                <h4>📋 Diagnóstico</h4>
                                <p>El modelo <strong>no falló</strong>.</p>
                                <p className="highlight-warning" style={{ margin: 0 }}>El profesional <strong>delegó sin control</strong>.</p>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Sección 5: Estrategia correcta */}
                <section id="estrategia" className="page__section">
                    <h2 className="page__section-title">5. Estrategia correcta: descomposición del contexto</h2>
                    <article className="long-form-content">
                        <p>El trabajo jurídico con IA debe dividirse en <strong>capas</strong>:</p>

                        <div className="layer-diagram">
                            <div className="layer-step">
                                <div className="layer-step__number">1</div>
                                <div className="layer-step__content">
                                    <h4>Ingesta</h4>
                                    <p>Lectura fragmentada del material.</p>
                                </div>
                            </div>
                            <div className="layer-connector">↓</div>
                            <div className="layer-step">
                                <div className="layer-step__number">2</div>
                                <div className="layer-step__content">
                                    <h4>Extracción</h4>
                                    <p>Identificación de hechos, fechas, partes, actos.</p>
                                </div>
                            </div>
                            <div className="layer-connector">↓</div>
                            <div className="layer-step">
                                <div className="layer-step__number">3</div>
                                <div className="layer-step__content">
                                    <h4>Estructuración</h4>
                                    <p>Organización cronológica o temática.</p>
                                </div>
                            </div>
                            <div className="layer-connector">↓</div>
                            <div className="layer-step">
                                <div className="layer-step__number">4</div>
                                <div className="layer-step__content">
                                    <h4>Análisis</h4>
                                    <p>Razonamiento jurídico sobre material ya curado.</p>
                                </div>
                            </div>
                        </div>

                        <p className="highlight-success">
                            Cada paso utiliza la IA con <strong>un contexto reducido y controlado</strong>.
                        </p>
                    </article>
                </section>

                {/* Sección 6: Técnicas clave */}
                <section id="tecnicas" className="page__section">
                    <h2 className="page__section-title">6. Técnicas clave de control de contexto</h2>
                    <article className="long-form-content">

                        <div className="technique-card">
                            <h3>1. Fragmentación consciente</h3>
                            <p>Dividir documentos largos en <strong>unidades lógicas</strong>:</p>
                            <ul>
                                <li>Por capítulos.</li>
                                <li>Por actos procesales.</li>
                                <li>Por períodos temporales.</li>
                            </ul>
                            <p className="highlight-warning">Nunca fragmentar al azar.</p>
                        </div>

                        <div className="technique-card">
                            <h3>2. Resúmenes acumulativos</h3>
                            <p>Flujo recomendado:</p>
                            <div className="flow-steps">
                                <div className="flow-step">Fragmento 1 → resumen estructurado</div>
                                <div className="flow-step">Fragmento 2 → resumen estructurado</div>
                                <div className="flow-step">Consolidación final solo con resúmenes</div>
                            </div>
                            <p className="highlight-success">
                                Esto crea un <strong>contexto artificial compacto</strong>.
                            </p>
                        </div>

                        <div className="technique-card">
                            <h3>3. Extracción estructurada</h3>
                            <p>Antes de analizar, pedir:</p>
                            <ul>
                                <li>Fechas clave.</li>
                                <li>Partes intervinientes.</li>
                                <li>Actos jurídicos.</li>
                                <li>Documentos citados.</li>
                            </ul>
                            <p>El análisis viene <strong>después</strong>.</p>
                        </div>
                    </article>
                </section>

                {/* Sección 7: Ejemplo de prompt */}
                <section id="ejemplo" className="page__section">
                    <h2 className="page__section-title">7. Ejemplo de prompt seguro (documento extenso)</h2>
                    <article className="long-form-content">
                        <blockquote className="full-prompt-example">
                            <p><strong>Rol:</strong> Actuás como asistente jurídico.</p>
                            <p><strong>Tarea:</strong> Extraer información fáctica.</p>
                            <p><strong>Objeto:</strong> Texto adjunto (fragmento del expediente, fojas 1-50).</p>
                            <p><strong>Criterios:</strong> No interpretar ni evaluar legalmente.</p>
                            <p><strong>Restricciones:</strong> Listar solo hechos explícitos. No inferir. Si falta información, indicarlo.</p>
                            <p><strong>Formato:</strong> Tabla con columnas: Fecha | Hecho | Fuente (foja).</p>
                        </blockquote>
                        <p className="highlight-success">
                            Este prompt <strong>no pide análisis</strong>. Primero extrae, después se analiza.
                        </p>
                    </article>
                </section>

                {/* Sección 8: Ideas clave */}
                <section id="ideas-clave" className="page__section">
                    <h2 className="page__section-title">8. Ideas clave para recordar</h2>
                    <article className="long-form-content">
                        <ul className="key-points">
                            <li>La <strong>ventana de contexto</strong> es el límite real, no la "inteligencia" del modelo.</li>
                            <li>Subir todo sin curar es <strong>delegación irresponsable</strong>.</li>
                            <li>Fragmentar → Extraer → Estructurar → Analizar.</li>
                            <li>Los resúmenes acumulativos crean <strong>contexto artificial útil</strong>.</li>
                            <li>Primero los hechos, después el derecho.</li>
                        </ul>
                    </article>
                </section>

                {/* Footer de navegación */}
                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/prompt-engineering" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">U1: Ingeniería de Prompts Jurídicos</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--complete">✓ Unidad 2 Completa</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/prompt-engineering-u3" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Unidad 3 – Preparación de Juicio e Interrogatorios →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PromptEngineeringM2U2

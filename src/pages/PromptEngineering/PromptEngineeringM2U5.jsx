import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function PromptEngineeringM2U5() {
    return (
        <div className="page">
            <PageSEO
                title="Preparación de Juicio e Interrogatorios · M2 U5"
                description="Razonamiento profundo y simulación estratégica con IA para preparar juicios, anticipar argumentos y diseñar interrogatorios."
                path="/prompt-engineering-u5"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 2 · Unidad 5</span>
                <h1 className="page__title">Preparación de Juicio e Interrogatorios</h1>
                <p className="page__description">
                    Razonamiento profundo y simulación estratégica con IA
                </p>
            </header>

            <div className="page__content">
                {/* Sección 1: Objetivos */}
                <section id="objetivos" className="page__section">
                    <h2 className="page__section-title">1. ¿Qué vas a aprender?</h2>
                    <article className="long-form-content">
                        <p>Al finalizar esta unidad vas a poder:</p>
                        <ul className="learning-objectives">
                            <li>Utilizar modelos de lenguaje como <strong>simuladores cognitivos</strong> para preparación de juicio.</li>
                            <li>Diseñar prompts para <strong>interrogatorios directos y contrainterrogatorios</strong>.</li>
                            <li>Explorar razonamiento profundo sin caer en alucinaciones ni delegación irresponsable.</li>
                            <li>Usar la IA para detectar <strong>lagunas, contradicciones y puntos débiles</strong> en una teoría del caso.</li>
                            <li>Diferenciar entre asistencia estratégica y sustitución del criterio profesional.</li>
                        </ul>
                    </article>
                </section>

                {/* Sección 2: Concepto central */}
                <section id="concepto" className="page__section">
                    <h2 className="page__section-title">2. Concepto central</h2>
                    <article className="long-form-content">
                        <blockquote className="concept-quote">
                            La IA no razona como un juez ni como un abogado: razona como un generador de hipótesis.
                            <span className="concept-quote__footer">Su valor está en expandir el espacio de posibilidades, no en decidir.</span>
                        </blockquote>
                        <p>
                            En etapa de juicio, el riesgo no es la falta de información, sino la <strong>ceguera cognitiva</strong>: asumir que la teoría del caso es sólida porque es coherente para quien la construyó.
                        </p>
                        <p className="highlight-warning">
                            La IA funciona como un <strong>oponente simulado</strong>, no como árbitro.
                        </p>
                    </article>
                </section>

                {/* Sección 3: Razonamiento profundo */}
                <section id="razonamiento" className="page__section">
                    <h2 className="page__section-title">3. Razonamiento profundo: qué es y qué no es</h2>
                    <article className="long-form-content">
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--good">
                                <h4>✅ Qué es</h4>
                                <ul>
                                    <li>Exploración sistemática de escenarios posibles.</li>
                                    <li>Evaluación de consistencia interna de argumentos.</li>
                                    <li>Generación de contraargumentos plausibles.</li>
                                </ul>
                            </div>
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Qué no es</h4>
                                <ul>
                                    <li>Verdad jurídica.</li>
                                    <li>Decisión probatoria.</li>
                                    <li>Sustitución del análisis humano.</li>
                                </ul>
                            </div>
                        </div>
                        <p className="highlight-warning">
                            El error es pedirle a la IA que "decida". El uso correcto es pedirle que <strong>tensione</strong>.
                        </p>
                    </article>
                </section>

                {/* Sección 4: Uso estratégico */}
                <section id="uso-estrategico" className="page__section">
                    <h2 className="page__section-title">4. Uso estratégico en preparación de juicio</h2>
                    <article className="long-form-content">
                        <p>La IA puede asistir en:</p>
                        <div className="strategic-uses">
                            <div className="strategic-use">
                                <span className="strategic-use__icon">🎯</span>
                                <span>Simulación de preguntas del tribunal</span>
                            </div>
                            <div className="strategic-use">
                                <span className="strategic-use__icon">🔍</span>
                                <span>Detección de puntos débiles en declaraciones</span>
                            </div>
                            <div className="strategic-use">
                                <span className="strategic-use__icon">📋</span>
                                <span>Evaluación de coherencia entre prueba documental y testimonial</span>
                            </div>
                            <div className="strategic-use">
                                <span className="strategic-use__icon">💬</span>
                                <span>Preparación de líneas de interrogatorio</span>
                            </div>
                        </div>
                        <p className="highlight-success">
                            Siempre como <strong>entorno de prueba</strong>, nunca como fuente final.
                        </p>
                    </article>
                </section>

                {/* Sección 5: Interrogatorio directo */}
                <section id="interrogatorio-directo" className="page__section">
                    <h2 className="page__section-title">5. Interrogatorio directo: diseño con IA</h2>
                    <article className="long-form-content">
                        <p><strong>Objetivo:</strong> Reforzar una narrativa clara, cronológica y consistente.</p>

                        <h4>Prompt orientativo</h4>
                        <blockquote className="full-prompt-example">
                            <p><strong>Rol:</strong> Actuás como preparador de interrogatorios judiciales.</p>
                            <p><strong>Tarea:</strong> Proponer preguntas claras y no sugestivas.</p>
                            <p><strong>Objeto:</strong> Resumen de hechos y perfil del testigo.</p>
                            <p><strong>Criterios:</strong> Preguntas abiertas, orden lógico.</p>
                            <p><strong>Restricciones:</strong> No inducir respuestas ni valorar prueba.</p>
                        </blockquote>
                    </article>
                </section>

                {/* Sección 6: Contrainterrogatorio */}
                <section id="contrainterrogatorio" className="page__section">
                    <h2 className="page__section-title">6. Contrainterrogatorio: detección de fisuras</h2>
                    <article className="long-form-content">
                        <p>La IA es especialmente útil para:</p>
                        <ul className="application-list">
                            <li>Identificar <strong>inconsistencias temporales</strong>.</li>
                            <li>Señalar <strong>ambigüedades del lenguaje</strong>.</li>
                            <li>Proponer <strong>preguntas de control</strong>.</li>
                        </ul>
                        <p className="highlight-warning">
                            ⚠️ <strong>Advertencia:</strong> Nunca usar preguntas generadas sin revisión. El valor está en la <strong>detección de oportunidades</strong>, no en la redacción automática.
                        </p>
                    </article>
                </section>

                {/* Sección 7: Simulación de escenarios */}
                <section id="simulacion" className="page__section">
                    <h2 className="page__section-title">7. Simulación de escenarios adversos</h2>
                    <article className="long-form-content">
                        <p>Uso avanzado:</p>
                        <div className="technique-card">
                            <h3>Técnica del "Abogado del Diablo"</h3>
                            <ul>
                                <li>Pedirle a la IA que <strong>asuma el rol de la contraparte</strong>.</li>
                                <li>Solicitar <strong>críticas severas</strong> a la teoría del caso.</li>
                                <li>Explorar <strong>qué hechos podrían ser atacados</strong>.</li>
                            </ul>
                            <p className="highlight-success">
                                Esto reduce el riesgo de <strong>sesgo de confirmación</strong>.
                            </p>
                        </div>
                    </article>
                </section>

                {/* Sección 8: Riesgos y límites */}
                <section id="riesgos" className="page__section">
                    <h2 className="page__section-title">8. Riesgos y límites</h2>
                    <article className="long-form-content">
                        <div className="risk-list">
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>La IA puede <strong>exagerar problemas inexistentes</strong>.</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>Puede <strong>omitir factores procesales reales</strong>.</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>No comprende <strong>contexto humano, gestual ni emocional</strong>.</span>
                            </div>
                        </div>
                        <blockquote className="concept-quote" style={{ fontSize: 'var(--font-size-xl)' }}>
                            La IA estresa el argumento; el abogado decide si resiste.
                        </blockquote>
                    </article>
                </section>

                {/* Sección 9: Ideas clave */}
                <section id="ideas-clave" className="page__section">
                    <h2 className="page__section-title">9. Ideas clave para memorizar</h2>
                    <article className="long-form-content">
                        <ul className="key-points">
                            <li>Usar IA para <strong>simular</strong>, no para resolver.</li>
                            <li>El mejor uso es como <strong>"abogado del diablo"</strong>.</li>
                            <li>El razonamiento profundo <strong>expande escenarios</strong>.</li>
                            <li>Nunca delegar <strong>decisión ni estrategia final</strong>.</li>
                            <li><strong>Revisión humana obligatoria</strong>.</li>
                        </ul>
                    </article>
                </section>

                {/* Sección 10: Conexión */}
                <section id="conexion" className="page__section">
                    <h2 className="page__section-title">10. Conexión con el sistema completo</h2>
                    <article className="long-form-content">
                        <p>Esta unidad conecta:</p>
                        <ul>
                            <li><strong>Control de contexto</strong> (Unidad 2).</li>
                            <li><strong>Uso avanzado de ChatGPT</strong> (Unidad 4).</li>
                            <li>Preparación para <strong>flujos agénticos</strong> y análisis multimodelo.</li>
                        </ul>
                        <p className="highlight-warning">
                            Sin esta etapa, la IA se usa de forma superficial.
                        </p>
                    </article>
                </section>

                {/* Resultado esperado */}
                <section id="resultado" className="page__section">
                    <h2 className="page__section-title">Resultado esperado</h2>
                    <article className="long-form-content">
                        <div className="result-box">
                            <p>
                                El abogado que completa esta unidad utiliza la IA como un <strong>entrenador cognitivo estratégico</strong>, capaz de revelar puntos ciegos antes de entrar a sala.
                            </p>
                        </div>
                    </article>
                </section>

                {/* Footer de navegación */}
                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/prompt-engineering-u4" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">U4: Redacción jurídica asistida</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--complete">✓ Unidad 5 Completa</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/prompt-engineering-u6" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Unidad 6 – GPTs personalizados y librerías de prompts →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PromptEngineeringM2U5

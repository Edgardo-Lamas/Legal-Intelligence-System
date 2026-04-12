import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function EcosystemM5U4() {
    return (
        <div className="page">
            <PageSEO
                title="Perplexity: búsqueda jurídica verificable con IA · M6 U4"
                description="Cómo usar Perplexity Pro para investigación jurídica con fuentes citadas y verificables. Qué lo diferencia de Google y de los LLMs puros, y cuándo es la herramienta correcta."
                path="/ecosystem-u4"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 6 · Unidad 4</span>
                <h1 className="page__title">Perplexity: búsqueda jurídica verificable</h1>
                <p className="page__description">
                    No es Google con IA. No es ChatGPT. Es el punto donde la búsqueda web
                    y los modelos de lenguaje se fusionan — con fuentes que podés verificar.
                </p>
            </header>

            <div className="page__content">

                <section id="que-es" className="page__section">
                    <h2 className="page__section-title">1. Qué es Perplexity y en qué se diferencia</h2>
                    <article className="long-form-content">
                        <p>
                            Perplexity es un motor de búsqueda potenciado por LLMs. La diferencia clave
                            con un chat de IA: <strong>todo lo que afirma viene con una cita verificable</strong>.
                            No inventa fuentes — las indexa, las lee, y te da la síntesis con el link
                            a la fuente original.
                        </p>
                        <p>
                            La diferencia con Google: Perplexity no te da una lista de links para que vos
                            leas y sintetices. Te da la síntesis directamente, con los links como respaldo.
                            Si la síntesis es incorrecta, podés verificar la fuente en dos clics.
                        </p>
                        <blockquote className="concept-quote">
                            Perplexity resuelve el problema más peligroso de los LLMs: la alucinación
                            de fuentes. Si la información no está en una fuente real indexable, no la inventa
                            — o si lo hace, la cita queda expuesta al verificar.
                        </blockquote>
                    </article>
                </section>

                <section id="cuando-usar" className="page__section">
                    <h2 className="page__section-title">2. Cuándo usar Perplexity (y cuándo no)</h2>
                    <article className="long-form-content">
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--good">
                                <h4>✅ Usá Perplexity para</h4>
                                <ul>
                                    <li>Investigación jurídica inicial con verificación de fuentes</li>
                                    <li>Encontrar qué dijo la CSJN o las Cámaras sobre un tema reciente</li>
                                    <li>Buscar doctrina con autor y publicación verificables</li>
                                    <li>Investigar legislación sancionada recientemente</li>
                                    <li>Cruzar información jurídica entre distintas fuentes</li>
                                    <li>Búsquedas que requieren información posterior a agosto 2023</li>
                                </ul>
                            </div>
                            <div className="comparison-box comparison-box--bad">
                                <h4>✗ No uses Perplexity para</h4>
                                <ul>
                                    <li>Redacción de escritos (usá Claude)</li>
                                    <li>Análisis estratégico del caso (usá Claude)</li>
                                    <li>Investigación documental masiva (usá Gemini Deep Research)</li>
                                    <li>Consultar documentos propios (usá NotebookLM)</li>
                                    <li>Jurisprudencia muy específica no publicada en la web</li>
                                </ul>
                            </div>
                        </div>
                    </article>
                </section>

                <section id="prompts" className="page__section">
                    <h2 className="page__section-title">3. Cómo construir buenos prompts en Perplexity</h2>
                    <article className="long-form-content">
                        <p>
                            Perplexity responde mejor cuando la pregunta es específica y acotada.
                            Compará estas dos formulaciones:
                        </p>

                        <h3>Formulación débil</h3>
                        <div className="full-prompt-example">
                            <p>"¿Qué dice la jurisprudencia sobre el despido sin causa?"</p>
                        </div>
                        <p>
                            El resultado va a ser genérico, mezcla de distintas jurisdicciones
                            y períodos. Difícil de verificar y aplicar al caso.
                        </p>

                        <h3>Formulación efectiva</h3>
                        <div className="full-prompt-example">
                            <p>
                                "¿Cuál es el criterio actual de las Cámaras del Trabajo de la Provincia
                                de Buenos Aires para el cálculo del daño moral en despidos con mobbing?
                                Necesito fallos del período 2020–2025 con monto de condena y tribunal."
                            </p>
                        </div>
                        <p>
                            El resultado va a ser acotado, con fallos específicos, tribunal identificado
                            y montos — todo con fuente verificable.
                        </p>

                        <h3>Para investigación legislativa</h3>
                        <div className="full-prompt-example">
                            <p>
                                "¿Hubo modificaciones a la Ley de Contrato de Trabajo en Argentina
                                durante 2024 o 2025 relacionadas con [tema]? Citá el número de la
                                norma modificatoria y la fecha de publicación en el Boletín Oficial."
                            </p>
                        </div>
                    </article>
                </section>

                <section id="planes" className="page__section">
                    <h2 className="page__section-title">4. Perplexity gratuito vs. Pro</h2>
                    <article className="long-form-content">
                        <div className="table-container">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Característica</th>
                                        <th>Gratuito</th>
                                        <th>Pro (~$20 USD/mes)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Búsquedas por día</td>
                                        <td>Limitadas (≈5 Pro)</td>
                                        <td>Ilimitadas</td>
                                    </tr>
                                    <tr>
                                        <td>Modelo subyacente</td>
                                        <td>Básico</td>
                                        <td>GPT-4o / Claude / Sonar Large</td>
                                    </tr>
                                    <tr>
                                        <td>Búsqueda académica</td>
                                        <td>No</td>
                                        <td>Sí (papers, publicaciones)</td>
                                    </tr>
                                    <tr>
                                        <td>Carga de archivos para analizar</td>
                                        <td>No</td>
                                        <td>Sí (PDF, documentos)</td>
                                    </tr>
                                    <tr>
                                        <td>Spaces (proyectos compartidos)</td>
                                        <td>No</td>
                                        <td>Sí</td>
                                    </tr>
                                    <tr>
                                        <td>Elección de motor de búsqueda</td>
                                        <td>No</td>
                                        <td>Sí (web / académico / noticias)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            Para uso jurídico serio, Pro es casi obligatorio: la búsqueda académica
                            y la posibilidad de cargar documentos cambian sustancialmente la utilidad.
                        </p>
                    </article>
                </section>

                <section id="flujo" className="page__section">
                    <h2 className="page__section-title">5. Perplexity en el flujo de investigación jurídica</h2>
                    <article className="long-form-content">
                        <p>
                            La secuencia óptima para una investigación jurídica completa:
                        </p>
                        <div className="flow-steps">
                            <div className="flow-step">
                                <strong>Perplexity</strong> — Primera exploración con verificación de fuentes.
                                Identifica fallos, autores, normas relevantes. Genera el mapa del tema.
                                Todas las afirmaciones tienen cita.
                            </div>
                            <div className="flow-step">
                                <strong>Verificación manual</strong> — Clickeás las fuentes más importantes.
                                Confirmás que el fallo existe, que la cita es exacta, que el ratio
                                decidendi es el que describe Perplexity.
                            </div>
                            <div className="flow-step">
                                <strong>Gemini Deep Research</strong> — Para el tema que identificó Perplexity,
                                pedís una investigación más exhaustiva con síntesis de múltiples fuentes.
                            </div>
                            <div className="flow-step">
                                <strong>NotebookLM</strong> — Cargás los documentos verificados.
                                Creás la base de conocimiento del caso con fuentes confiables.
                            </div>
                            <div className="flow-step">
                                <strong>Claude</strong> — Con el material verificado y organizado,
                                producís el análisis y el escrito.
                            </div>
                        </div>
                        <div className="highlight-success">
                            <strong>La clave:</strong> Perplexity está al principio del flujo, no al final.
                            Su valor es identificar y verificar fuentes rápidamente, no reemplazar
                            la investigación en profundidad que hace Gemini ni el análisis que hace Claude.
                        </div>
                    </article>
                </section>

                <section id="checklist" className="page__section">
                    <h2 className="page__section-title">6. Checklist de esta unidad</h2>
                    <article className="long-form-content">
                        <div className="checklist-box">
                            <ul className="checklist">
                                <li>☐ Entiendo en qué se diferencia Perplexity de Google y de ChatGPT</li>
                                <li>☐ Sé cuándo es la herramienta correcta y cuándo no</li>
                                <li>☐ Probé al menos una búsqueda jurídica específica y verifiqué las fuentes</li>
                                <li>☐ Entiendo la diferencia entre la versión gratuita y Pro</li>
                                <li>☐ Identifiqué en qué punto del flujo de investigación usar Perplexity</li>
                            </ul>
                        </div>
                    </article>
                </section>

                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/ecosystem-u3" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M6 U3: NotebookLM — tu base de jurisprudencia</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/ecosystem-u5" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            U5 – Harvey, CoCounsel y el mercado de IA jurídica →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EcosystemM5U4

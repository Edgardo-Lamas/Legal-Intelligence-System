import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function FoundationsM1U3() {
    return (
        <div className="page">
            <PageSEO
                title="RAG Aplicado al Derecho · M1 U3"
                description="Cómo usar Retrieval-Augmented Generation con jurisprudencia, doctrina y normativa. Ventajas frente a los prompts simples."
                path="/foundations-u3"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 1 · Unidad 3</span>
                <h1 className="page__title">RAG aplicado al derecho</h1>
                <p className="page__description">
                    Qué es Retrieval-Augmented Generation y cómo transforma el trabajo con jurisprudencia, doctrina y normativa.
                </p>
            </header>

            <div className="page__content">
                {/* Sección 1: Por qué RAG importa */}
                <section id="intro" className="page__section">
                    <h2 className="page__section-title">1. El problema que RAG resuelve</h2>
                    <article className="long-form-content">
                        <p>
                            Los modelos de lenguaje como ChatGPT y Gemini tienen un problema fundamental para el trabajo jurídico: <strong>no conocen tus documentos</strong>.
                        </p>

                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Sin RAG</h4>
                                <p>Le preguntás sobre un fallo específico de tu jurisdicción y:</p>
                                <ul>
                                    <li>Inventa el nombre del fallo</li>
                                    <li>Confunde la fecha</li>
                                    <li>Mezcla con fallos de otro país</li>
                                </ul>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>✅ Con RAG</h4>
                                <p>El sistema busca en TU base de documentos y responde con:</p>
                                <ul>
                                    <li>Citas textuales verificables</li>
                                    <li>Referencias a fojas o páginas exactas</li>
                                    <li>Información actualizada y específica</li>
                                </ul>
                            </div>
                        </div>

                        <blockquote className="concept-quote">
                            RAG = El modelo razona, tus documentos informan. Lo mejor de ambos mundos.
                        </blockquote>
                    </article>
                </section>

                {/* Sección 2: Qué es RAG */}
                <section id="que-es" className="page__section">
                    <h2 className="page__section-title">2. ¿Qué es RAG exactamente?</h2>
                    <article className="long-form-content">
                        <p>
                            <strong>RAG (Retrieval-Augmented Generation)</strong> es una arquitectura que combina dos sistemas:
                        </p>

                        <div className="component-card">
                            <div className="component-number">1</div>
                            <div className="component-content">
                                <h4>Retrieval (Recuperación)</h4>
                                <p>Un sistema de búsqueda que encuentra los fragmentos más relevantes de tu base de documentos según la pregunta.</p>
                            </div>
                        </div>

                        <div className="component-card">
                            <div className="component-number">2</div>
                            <div className="component-content">
                                <h4>Generation (Generación)</h4>
                                <p>El modelo de lenguaje (GPT, Gemini) que lee esos fragmentos y genera una respuesta coherente.</p>
                            </div>
                        </div>

                        <h3>El flujo simplificado</h3>
                        <div className="flow-steps">
                            <div className="flow-step">
                                <strong>1.</strong> Hacés una pregunta: "¿Qué dice la CSJN sobre prescripción en daños?"
                            </div>
                            <div className="flow-step">
                                <strong>2.</strong> El sistema busca en tu base de fallos los fragmentos relevantes
                            </div>
                            <div className="flow-step">
                                <strong>3.</strong> Inyecta esos fragmentos en el prompt junto con tu pregunta
                            </div>
                            <div className="flow-step">
                                <strong>4.</strong> El modelo responde basándose en los documentos reales
                            </div>
                        </div>
                    </article>
                </section>

                {/* Sección 3: RAG vs Prompts simples */}
                <section id="comparacion" className="page__section">
                    <h2 className="page__section-title">3. RAG vs Prompts simples: las diferencias clave</h2>
                    <article className="long-form-content">
                        <div className="table-container">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Aspecto</th>
                                        <th>Prompt simple</th>
                                        <th>Con RAG</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Fuente de información</td>
                                        <td>Datos de entrenamiento (genéricos)</td>
                                        <td>Tus documentos específicos</td>
                                    </tr>
                                    <tr>
                                        <td>Actualización</td>
                                        <td>Fecha de corte del modelo</td>
                                        <td>Tan actualizado como tu base</td>
                                    </tr>
                                    <tr>
                                        <td>Verificabilidad</td>
                                        <td>Difícil (puede inventar)</td>
                                        <td>Cita fuente exacta</td>
                                    </tr>
                                    <tr>
                                        <td>Jurisdicción</td>
                                        <td>Tiende a mezclar</td>
                                        <td>Solo lo que está en tu base</td>
                                    </tr>
                                    <tr>
                                        <td>Alucinaciones</td>
                                        <td>Frecuentes</td>
                                        <td>Muy reducidas</td>
                                    </tr>
                                    <tr>
                                        <td>Complejidad de setup</td>
                                        <td>Ninguna</td>
                                        <td>Requiere configuración</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="highlight-success">
                            <strong>Conclusión:</strong> RAG es imprescindible para trabajo jurídico serio que requiere precisión y verificabilidad.
                        </div>
                    </article>
                </section>

                {/* Sección 4: Aplicaciones jurídicas */}
                <section id="aplicaciones" className="page__section">
                    <h2 className="page__section-title">4. Aplicaciones jurídicas de RAG</h2>
                    <article className="long-form-content">
                        <h3>📚 Base de jurisprudencia propia</h3>
                        <ul className="application-list">
                            <li>Cargás los fallos que usás frecuentemente</li>
                            <li>Preguntás: "¿Qué fallos tengo sobre despido discriminatorio?"</li>
                            <li>El sistema responde con citas de TUS fallos, no genéricos</li>
                        </ul>

                        <h3>📖 Biblioteca de doctrina</h3>
                        <ul className="application-list">
                            <li>Subís artículos, tratados, comentarios de código</li>
                            <li>Consultás: "¿Qué dice Lorenzetti sobre daño moral?"</li>
                            <li>Respuesta con página y párrafo exacto</li>
                        </ul>

                        <h3>⚖️ Normativa actualizada</h3>
                        <ul className="application-list">
                            <li>Mantenés una base con leyes, decretos, resoluciones</li>
                            <li>Siempre consultás la versión vigente</li>
                            <li>No dependés de la fecha de corte del modelo</li>
                        </ul>

                        <h3>📁 Expedientes y causas</h3>
                        <ul className="application-list">
                            <li>Cargás todo un expediente digitalizado</li>
                            <li>Preguntás: "¿Cuándo se presentó la contestación?"</li>
                            <li>Respuesta con referencia a foja específica</li>
                        </ul>
                    </article>
                </section>

                {/* Sección 5: Herramientas disponibles */}
                <section id="herramientas" className="page__section">
                    <h2 className="page__section-title">5. Herramientas RAG disponibles para abogados</h2>
                    <article className="long-form-content">
                        <h3>Sin programación (listas para usar)</h3>
                        <div className="comparison-grid">
                            <div className="comparison-box">
                                <h4>Claude Projects</h4>
                                <ul>
                                    <li>Subís documentos al proyecto</li>
                                    <li>Claude los usa automáticamente</li>
                                    <li>Hasta 200K tokens de contexto</li>
                                </ul>
                            </div>
                            <div className="comparison-box">
                                <h4>ChatGPT con archivos</h4>
                                <ul>
                                    <li>Subís PDFs a la conversación</li>
                                    <li>Funciona bien para documentos cortos</li>
                                    <li>Limitado para bases grandes</li>
                                </ul>
                            </div>
                            <div className="comparison-box">
                                <h4>Gemini + Google Drive</h4>
                                <ul>
                                    <li>Conectás tu Drive</li>
                                    <li>Busca en tus documentos</li>
                                    <li>Integración con Workspace</li>
                                </ul>
                            </div>
                            <div className="comparison-box">
                                <h4>NotebookLM</h4>
                                <ul>
                                    <li>Diseñado para bases de conocimiento</li>
                                    <li>Citas con fuente exacta</li>
                                    <li>Gratis con cuenta Google</li>
                                </ul>
                            </div>
                        </div>

                        <h3>Con algo de configuración</h3>
                        <ul className="application-list">
                            <li><strong>Notion AI:</strong> Si ya usás Notion para gestión del estudio</li>
                            <li><strong>Coda AI:</strong> Similar, con integración de documentos</li>
                            <li><strong>AnythingLLM:</strong> Open source, control total de datos</li>
                        </ul>

                        <h3>Soluciones especializadas legal</h3>
                        <ul className="application-list">
                            <li><strong>Harvey:</strong> RAG jurídico empresarial (costoso)</li>
                            <li><strong>CoCounsel:</strong> De Thomson Reuters</li>
                            <li><strong>Casetext:</strong> Con base de jurisprudencia US</li>
                        </ul>
                    </article>
                </section>

                {/* Sección 6: Cómo funciona técnicamente */}
                <section id="tecnico" className="page__section">
                    <h2 className="page__section-title">6. Cómo funciona técnicamente (simplificado)</h2>
                    <article className="long-form-content">
                        <p>No necesitás programar, pero entender el proceso te ayuda a usarlo mejor:</p>

                        <div className="component-card">
                            <div className="component-number">1</div>
                            <div className="component-content">
                                <h4>Indexación</h4>
                                <p>Tus documentos se dividen en fragmentos (chunks) y se convierten en vectores numéricos que representan su significado semántico.</p>
                            </div>
                        </div>

                        <div className="component-card">
                            <div className="component-number">2</div>
                            <div className="component-content">
                                <h4>Búsqueda semántica</h4>
                                <p>Cuando preguntás algo, tu pregunta también se convierte en vector y se buscan los fragmentos más "cercanos" en significado.</p>
                            </div>
                        </div>

                        <div className="component-card">
                            <div className="component-number">3</div>
                            <div className="component-content">
                                <h4>Augmentación</h4>
                                <p>Los fragmentos encontrados se agregan al prompt antes de enviarlo al modelo. El modelo "ve" tu pregunta + contexto relevante.</p>
                            </div>
                        </div>

                        <div className="component-card">
                            <div className="component-number">4</div>
                            <div className="component-content">
                                <h4>Generación</h4>
                                <p>El modelo responde basándose en los fragmentos. Puede citar la fuente porque sabe de dónde vino cada parte.</p>
                            </div>
                        </div>

                        <div className="highlight-warning">
                            <strong>Implicancia práctica:</strong> La calidad del chunking (cómo se dividen los documentos) afecta directamente la calidad de las respuestas.
                        </div>
                    </article>
                </section>

                {/* Sección 7: Buenas prácticas */}
                <section id="buenas-practicas" className="page__section">
                    <h2 className="page__section-title">7. Buenas prácticas para RAG jurídico</h2>
                    <article className="long-form-content">
                        <div className="checklist-box">
                            <h3>📁 Organización de documentos</h3>
                            <ul className="checklist">
                                <li>☐ Usá nombres de archivo descriptivos, no "doc1.pdf"</li>
                                <li>☐ Incluí metadatos: tribunal, fecha, carátula</li>
                                <li>☐ Separá por tipo: jurisprudencia, doctrina, normativa</li>
                                <li>☐ Mantené actualizada la base (eliminá versiones viejas)</li>
                            </ul>

                            <h3>🔍 Calidad de consultas</h3>
                            <ul className="checklist">
                                <li>☐ Sé específico: "fallos de CSJN 2020-2024 sobre X"</li>
                                <li>☐ Usá términos que aparezcan en tus documentos</li>
                                <li>☐ Pedí que cite la fuente explícitamente</li>
                            </ul>

                            <h3>✅ Verificación</h3>
                            <ul className="checklist">
                                <li>☐ Siempre verificá las citas en el documento original</li>
                                <li>☐ Desconfiá si la respuesta es muy general</li>
                                <li>☐ Preguntá: "¿De qué documento sacaste esto?"</li>
                            </ul>
                        </div>
                    </article>
                </section>

                {/* Sección 8: Ejercicio práctico */}
                <section id="ejercicio" className="page__section">
                    <h2 className="page__section-title">8. Ejercicio: Tu primera base RAG</h2>
                    <article className="long-form-content">
                        <div className="exercise-box">
                            <h3>🎯 Objetivo</h3>
                            <p>Crear una mini-base de conocimiento jurídico y consultarla.</p>

                            <h3>📋 Pasos</h3>
                            <ol className="application-list">
                                <li>Elegí 5 fallos que uses frecuentemente en tu práctica</li>
                                <li>Renombralos con formato: <code>Tribunal_Año_Carátula.pdf</code></li>
                                <li>Subílos a una de estas herramientas:
                                    <ul>
                                        <li>NotebookLM (recomendado para empezar)</li>
                                        <li>Claude Projects</li>
                                        <li>ChatGPT (en una conversación)</li>
                                    </ul>
                                </li>
                                <li>Hacé estas consultas de prueba:
                                    <ul>
                                        <li>"¿Qué criterio se aplica en [tema]?"</li>
                                        <li>"¿Cuál es el fallo más reciente sobre X?"</li>
                                        <li>"Comparame los criterios de [fallo A] y [fallo B]"</li>
                                    </ul>
                                </li>
                                <li>Verificá que las citas sean correctas</li>
                            </ol>

                            <h3>✅ Criterio de éxito</h3>
                            <p>Podés hacer consultas sobre tus fallos y obtener respuestas con citas verificables a los documentos originales.</p>
                        </div>
                    </article>
                </section>

                {/* Footer de navegación */}
                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/foundations-u2" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M1 U2: ChatGPT vs Gemini</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/glossary" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Unidad 4 – Glosario esencial de IA →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoundationsM1U3

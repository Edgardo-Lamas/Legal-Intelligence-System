import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function PromptEngineeringM2U1() {
    return (
        <div className="page">
            <PageSEO
                title="Ingeniería de Prompts Jurídicos · M2 U1"
                description="La base del sistema. Diseñá prompts controlados, predecibles y reutilizables para tareas legales con IA. Nivel profesional."
                path="/prompt-engineering"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 2 · Unidad 1</span>
                <h1 className="page__title">Ingeniería de Prompts Jurídicos</h1>
                <p className="page__description">
                    Nivel Profesional — La base de todo el sistema
                </p>
            </header>

            <div className="page__content">
                {/* Sección 1: Objetivos de aprendizaje */}
                <section id="objetivos" className="page__section">
                    <h2 className="page__section-title">1. ¿Qué vas a aprender en esta unidad?</h2>
                    <article className="long-form-content">
                        <p>Al finalizar esta unidad vas a ser capaz de:</p>
                        <ul className="learning-objectives">
                            <li>Entender <strong>qué es realmente un prompt</strong> desde una lógica jurídica (no técnica).</li>
                            <li>Diseñar <strong>prompts controlados</strong>, predecibles y reutilizables.</li>
                            <li>Evitar respuestas genéricas, erróneas o "creativas" cuando trabajás con derecho.</li>
                            <li>Darle instrucciones a la IA como si fuera un <strong>asistente jurídico junior</strong>.</li>
                        </ul>
                        <p className="highlight-warning">
                            Esta unidad es la base de todo el sistema. Si esto falla, <strong>todo lo demás falla</strong>.
                        </p>
                    </article>
                </section>

                {/* Sección 2: Concepto central */}
                <section id="concepto" className="page__section">
                    <h2 className="page__section-title">2. Concepto central: qué es un prompt (bien entendido)</h2>
                    <article className="long-form-content">
                        <p>Un prompt <strong>no es una pregunta</strong>.</p>
                        <p>Un prompt es:</p>
                        <blockquote className="concept-quote">
                            Un acto de delegación cognitiva controlada
                        </blockquote>
                        <p>En términos jurídicos:</p>
                        <ul>
                            <li>Vos sos el <strong>abogado responsable</strong>.</li>
                            <li>La IA es un <strong>auxiliar que redacta, analiza o compara</strong>, pero no decide.</li>
                            <li>El prompt funciona como:
                                <ul>
                                    <li>un <strong>mandato</strong>,</li>
                                    <li>con <strong>límites</strong>,</li>
                                    <li>con <strong>objeto</strong>,</li>
                                    <li>y con <strong>criterios de validez</strong>.</li>
                                </ul>
                            </li>
                        </ul>
                        <p className="highlight-warning">Si el mandato es vago → la respuesta es riesgosa.</p>
                    </article>
                </section>

                {/* Sección 3: Comparación */}
                <section id="comparacion" className="page__section">
                    <h2 className="page__section-title">3. Diferencia clave: prompt común vs prompt jurídico</h2>
                    <article className="long-form-content">
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Prompt común (incorrecto en derecho)</h4>
                                <blockquote className="prompt-example">"Resumime este fallo."</blockquote>
                                <p><strong>Problemas:</strong></p>
                                <ul>
                                    <li>No define criterio de relevancia</li>
                                    <li>No define finalidad</li>
                                    <li>No define nivel técnico</li>
                                    <li>No define riesgo de error</li>
                                </ul>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>✅ Prompt jurídico (correcto)</h4>
                                <blockquote className="prompt-example">"Resumí este fallo identificando: hechos relevantes, cuestión jurídica central, ratio decidendi y obiter dicta, usando lenguaje técnico jurídico argentino y sin agregar interpretación propia."</blockquote>
                                <p>👉 Acá <strong>sí hay control</strong>.</p>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Sección 4: Los 5 componentes */}
                <section id="componentes" className="page__section">
                    <h2 className="page__section-title">4. Los 5 componentes obligatorios de un prompt jurídico</h2>
                    <article className="long-form-content">
                        <p>Todo prompt jurídico profesional debe contener <strong>estos cinco elementos</strong>:</p>

                        <div className="component-card">
                            <div className="component-number">1</div>
                            <div className="component-content">
                                <h4>Rol asignado a la IA</h4>
                                <blockquote className="prompt-example">"Actuás como abogado especializado en derecho penal argentino."</blockquote>
                                <p>Esto fija: vocabulario, profundidad, límites implícitos.</p>
                            </div>
                        </div>

                        <div className="component-card">
                            <div className="component-number">2</div>
                            <div className="component-content">
                                <h4>Tarea concreta</h4>
                                <blockquote className="prompt-example">"Analizar", "comparar", "extraer", "reformular", "detectar contradicciones".</blockquote>
                                <p>Nunca usar verbos ambiguos como "opinar" o "decir qué te parece".</p>
                            </div>
                        </div>

                        <div className="component-card">
                            <div className="component-number">3</div>
                            <div className="component-content">
                                <h4>Objeto delimitado</h4>
                                <blockquote className="prompt-example">"Sobre este fallo", "sobre este contrato", "sobre estos artículos del código".</blockquote>
                                <p>En derecho, <strong>el objeto importa más que la pregunta</strong>.</p>
                            </div>
                        </div>

                        <div className="component-card">
                            <div className="component-number">4</div>
                            <div className="component-content">
                                <h4>Criterios jurídicos de respuesta</h4>
                                <ul>
                                    <li>Conforme derecho argentino</li>
                                    <li>Sin crear jurisprudencia inexistente</li>
                                    <li>Citando artículos cuando corresponda</li>
                                    <li>Sin extrapolar a otros fueros</li>
                                </ul>
                            </div>
                        </div>

                        <div className="component-card">
                            <div className="component-number">5</div>
                            <div className="component-content">
                                <h4>Restricciones explícitas</h4>
                                <ul>
                                    <li>"No inventes datos"</li>
                                    <li>"Si no hay información suficiente, decilo"</li>
                                    <li>"No simplifiques el lenguaje técnico"</li>
                                </ul>
                                <p>Las restricciones <strong>reducen alucinaciones</strong>.</p>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Sección 5: Ejemplo completo */}
                <section id="ejemplo" className="page__section">
                    <h2 className="page__section-title">5. Ejemplo completo (modelo base)</h2>
                    <article className="long-form-content">
                        <blockquote className="full-prompt-example">
                            <p>Actuás como abogado especialista en derecho laboral argentino.</p>
                            <p>Analizá el siguiente fallo.</p>
                            <p>Identificá: hechos relevantes, cuestión jurídica, fundamento del tribunal y criterio aplicable.</p>
                            <p>Usá lenguaje técnico jurídico.</p>
                            <p>No agregues opiniones personales ni información que no surja del texto.</p>
                            <p>Si el fallo no permite extraer alguno de esos elementos, indicá expresamente esa limitación.</p>
                        </blockquote>
                        <p className="highlight-success">Este es un <strong>prompt jurídicamente seguro</strong>.</p>
                    </article>
                </section>

                {/* Sección 6: Aplicación práctica */}
                <section id="aplicacion" className="page__section">
                    <h2 className="page__section-title">6. Aplicación práctica inmediata</h2>
                    <article className="long-form-content">
                        <p>Con este tipo de prompt podés:</p>
                        <ul className="application-list">
                            <li>Analizar sentencias</li>
                            <li>Preparar dictámenes</li>
                            <li>Armar cuadros comparativos de jurisprudencia</li>
                            <li>Estudiar para exámenes</li>
                            <li>Preparar clases o capacitaciones</li>
                        </ul>
                        <p>Todo <strong>sin perder control profesional</strong>.</p>
                    </article>
                </section>

                {/* Sección 7: Ideas clave */}
                <section id="ideas-clave" className="page__section">
                    <h2 className="page__section-title">7. Ideas clave para estudiar</h2>
                    <article className="long-form-content">
                        <p className="text-muted"><em>Esto es lo que tenés que memorizar:</em></p>
                        <ul className="key-points">
                            <li>Un prompt no es una pregunta: es una <strong>instrucción jurídica</strong>.</li>
                            <li>La IA no piensa: <strong>ejecuta el mandato que le das</strong>.</li>
                            <li>En derecho, <strong>la ambigüedad es riesgo</strong>.</li>
                            <li>Más contexto ≠ mejor resultado si no hay control.</li>
                            <li>Las restricciones son <strong>tan importantes como la tarea</strong>.</li>
                        </ul>
                    </article>
                </section>

                {/* Sección 8: Conexión con el sistema */}
                <section id="conexion" className="page__section">
                    <h2 className="page__section-title">8. Conexión con el sitio y con Antigravity</h2>
                    <article className="long-form-content">
                        <p>Esta unidad:</p>
                        <ul>
                            <li>Se convierte directamente en una <strong>página de estudio</strong>.</li>
                            <li>Sirve como <strong>plantilla base</strong> para todas las demás unidades.</li>
                            <li>Alimenta los prompts que Antigravity usará para:
                                <ul>
                                    <li>generar contenido</li>
                                    <li>mantener coherencia</li>
                                    <li>evitar respuestas genéricas</li>
                                </ul>
                            </li>
                        </ul>
                    </article>
                </section>

                {/* Footer de navegación */}
                <div className="unit-navigation">
                    <div className="unit-status">
                        <span className="status-badge status-badge--complete">✓ Unidad 1 Completa</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/prompt-engineering-u2" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Unidad 2 – Control de contexto y documentos extensos →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PromptEngineeringM2U1

import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function FoundationsM1U2() {
    return (
        <div className="page">
            <PageSEO
                title="ChatGPT vs Gemini en el Derecho · M1 U2"
                description="Comparativa práctica de los modelos de lenguaje más usados en la práctica jurídica: cuándo usar ChatGPT y cuándo usar Gemini."
                path="/foundations-u2"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 1 · Unidad 2</span>
                <h1 className="page__title">ChatGPT vs Gemini en el ámbito legal</h1>
                <p className="page__description">
                    Cuándo usar cada modelo y cómo aprovechar sus fortalezas para trabajo jurídico profesional.
                </p>
            </header>

            <div className="page__content">
                {/* Sección 1: Introducción */}
                <section id="intro" className="page__section">
                    <h2 className="page__section-title">1. No son iguales: por qué importa elegir bien</h2>
                    <article className="long-form-content">
                        <p>
                            ChatGPT y Gemini son los dos modelos de lenguaje más usados para trabajo profesional. Pero <strong>no son intercambiables</strong>. Cada uno tiene fortalezas y debilidades que impactan directamente en tu trabajo jurídico.
                        </p>

                        <blockquote className="concept-quote">
                            Usar el modelo equivocado para una tarea es como usar un martillo cuando necesitás un destornillador. Funciona, pero el resultado es peor.
                        </blockquote>

                        <p>
                            Esta unidad te va a ayudar a tomar decisiones informadas sobre cuál usar según el tipo de trabajo.
                        </p>
                    </article>
                </section>

                {/* Sección 2: Comparación general */}
                <section id="comparacion" className="page__section">
                    <h2 className="page__section-title">2. Comparación general: ChatGPT vs Gemini</h2>
                    <article className="long-form-content">
                        <div className="comparison-grid">
                            <div className="comparison-box">
                                <h4>🤖 ChatGPT (OpenAI)</h4>
                                <ul>
                                    <li><strong>Modelos:</strong> GPT-4o, GPT-4 Turbo, o1</li>
                                    <li><strong>Fortaleza:</strong> Razonamiento estructurado, seguir instrucciones complejas</li>
                                    <li><strong>Contexto:</strong> Hasta 128K tokens</li>
                                    <li><strong>Integración:</strong> Custom GPTs, APIs robustas</li>
                                    <li><strong>Coste:</strong> Plus $20/mes, Team $25/usuario</li>
                                </ul>
                            </div>
                            <div className="comparison-box">
                                <h4>💎 Gemini (Google)</h4>
                                <ul>
                                    <li><strong>Modelos:</strong> Gemini 1.5 Pro, Ultra, Flash</li>
                                    <li><strong>Fortaleza:</strong> Contexto extremadamente largo, Deep Research</li>
                                    <li><strong>Contexto:</strong> Hasta 2M tokens (!)</li>
                                    <li><strong>Integración:</strong> Google Workspace, YouTube</li>
                                    <li><strong>Coste:</strong> Advanced $20/mes</li>
                                </ul>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Sección 3: Fortalezas por tarea */}
                <section id="fortalezas" className="page__section">
                    <h2 className="page__section-title">3. ¿Cuál usar para cada tarea jurídica?</h2>
                    <article className="long-form-content">
                        <h3>📄 Análisis de documentos cortos (contratos, escritos)</h3>
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--good">
                                <h4>✅ ChatGPT es mejor</h4>
                                <p>Sigue instrucciones complejas con precisión. Mejor para análisis estructurado con múltiples criterios.</p>
                            </div>
                            <div className="comparison-box">
                                <h4>Gemini también sirve</h4>
                                <p>Funciona bien, pero a veces omite detalles menores de las instrucciones.</p>
                            </div>
                        </div>

                        <h3>📚 Análisis de expedientes largos (+100 páginas)</h3>
                        <div className="comparison-grid">
                            <div className="comparison-box">
                                <h4>ChatGPT es limitado</h4>
                                <p>128K tokens se queda corto. Necesitás fragmentar y usar técnicas de contexto.</p>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>✅ Gemini es mejor</h4>
                                <p>2M tokens permite cargar expedientes completos de una vez.</p>
                            </div>
                        </div>

                        <h3>🔍 Investigación jurídica profunda</h3>
                        <div className="comparison-grid">
                            <div className="comparison-box">
                                <h4>ChatGPT necesita plugins</h4>
                                <p>Requiere Browse with Bing o herramientas externas.</p>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>✅ Gemini Deep Research</h4>
                                <p>Función nativa que investiga autónomamente y genera informes estructurados.</p>
                            </div>
                        </div>

                        <h3>✍️ Redacción de documentos</h3>
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--good">
                                <h4>✅ ChatGPT es mejor</h4>
                                <p>Más control sobre formato, estilo y estructura. Mejor para iteración.</p>
                            </div>
                            <div className="comparison-box">
                                <h4>Gemini es aceptable</h4>
                                <p>Tiende a respuestas más largas y menos controladas.</p>
                            </div>
                        </div>

                        <h3>🎯 Preparación de juicios / estrategia</h3>
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--good">
                                <h4>✅ ChatGPT (o1) es mejor</h4>
                                <p>El modelo o1 tiene capacidad de razonamiento extendido ideal para análisis estratégico.</p>
                            </div>
                            <div className="comparison-box">
                                <h4>Gemini sirve para contexto</h4>
                                <p>Útil para tener todo el expediente en mente, pero menos razonamiento.</p>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Sección 4: Tabla resumen */}
                <section id="tabla" className="page__section">
                    <h2 className="page__section-title">4. Tabla resumen: qué modelo para qué tarea</h2>
                    <article className="long-form-content">
                        <div className="table-container">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Tarea</th>
                                        <th>Mejor opción</th>
                                        <th>Por qué</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Análisis de contrato (&lt;30 págs)</td>
                                        <td><strong>ChatGPT</strong></td>
                                        <td>Mejor seguimiento de instrucciones</td>
                                    </tr>
                                    <tr>
                                        <td>Análisis de expediente (+100 págs)</td>
                                        <td><strong>Gemini</strong></td>
                                        <td>Ventana de contexto mucho mayor</td>
                                    </tr>
                                    <tr>
                                        <td>Redacción de demanda</td>
                                        <td><strong>ChatGPT</strong></td>
                                        <td>Más control sobre estructura y estilo</td>
                                    </tr>
                                    <tr>
                                        <td>Investigación doctrinal</td>
                                        <td><strong>Gemini</strong></td>
                                        <td>Deep Research es superior</td>
                                    </tr>
                                    <tr>
                                        <td>Preparación de interrogatorios</td>
                                        <td><strong>ChatGPT (o1)</strong></td>
                                        <td>Razonamiento estratégico profundo</td>
                                    </tr>
                                    <tr>
                                        <td>Búsqueda de jurisprudencia</td>
                                        <td><strong>Ambos + verificación</strong></td>
                                        <td>Ninguno es confiable sin chequear</td>
                                    </tr>
                                    <tr>
                                        <td>Crear asistente reutilizable</td>
                                        <td><strong>ChatGPT</strong></td>
                                        <td>Custom GPTs son más flexibles</td>
                                    </tr>
                                    <tr>
                                        <td>Trabajo con Google Workspace</td>
                                        <td><strong>Gemini</strong></td>
                                        <td>Integración nativa con Docs/Drive</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </article>
                </section>

                {/* Sección 5: Estrategia combinada */}
                <section id="combinado" className="page__section">
                    <h2 className="page__section-title">5. Estrategia combinada: lo mejor de ambos</h2>
                    <article className="long-form-content">
                        <p>
                            El abogado avanzado no elige uno u otro. Usa <strong>ambos según la etapa del trabajo</strong>:
                        </p>

                        <div className="flow-steps">
                            <div className="flow-step">
                                <strong>1. INGESTA:</strong> Gemini para cargar expediente completo y generar resumen ejecutivo
                            </div>
                            <div className="flow-step">
                                <strong>2. INVESTIGACIÓN:</strong> Gemini Deep Research para doctrina y jurisprudencia
                            </div>
                            <div className="flow-step">
                                <strong>3. ANÁLISIS:</strong> ChatGPT para análisis detallado con instrucciones específicas
                            </div>
                            <div className="flow-step">
                                <strong>4. REDACCIÓN:</strong> ChatGPT para generar borradores controlados
                            </div>
                            <div className="flow-step">
                                <strong>5. ESTRATEGIA:</strong> ChatGPT (o1) para preparación de juicio
                            </div>
                        </div>

                        <div className="highlight-success">
                            <strong>Resultado:</strong> Aprovechás la ventana de contexto de Gemini Y la precisión de ChatGPT.
                        </div>
                    </article>
                </section>

                {/* Sección 6: Limitaciones */}
                <section id="limitaciones" className="page__section">
                    <h2 className="page__section-title">6. Limitaciones comunes a ambos</h2>
                    <article className="long-form-content">
                        <div className="risk-list">
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span><strong>Alucinaciones:</strong> Ambos pueden inventar jurisprudencia, artículos o fechas.</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span><strong>Desactualización:</strong> Los datos de entrenamiento tienen fecha de corte.</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span><strong>Jurisdicción:</strong> Tienden a mezclar derecho de distintos países si no se especifica.</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span><strong>Confidencialidad:</strong> Revisá las políticas de uso de datos antes de subir info sensible.</span>
                            </div>
                        </div>

                        <blockquote className="concept-quote">
                            No importa qué modelo uses: la verificación humana es obligatoria en trabajo jurídico.
                        </blockquote>
                    </article>
                </section>

                {/* Sección 7: Configuración recomendada */}
                <section id="configuracion" className="page__section">
                    <h2 className="page__section-title">7. Configuración recomendada para abogados</h2>
                    <article className="long-form-content">
                        <h3>ChatGPT</h3>
                        <ul className="application-list">
                            <li><strong>Plan:</strong> Plus ($20/mes) mínimo, Team para estudios</li>
                            <li><strong>Modelo preferido:</strong> GPT-4o para mayoría de tareas, o1 para razonamiento</li>
                            <li><strong>Custom Instructions:</strong> "Actuás como abogado argentino. Derecho argentino salvo indicación contraria."</li>
                            <li><strong>Memoria:</strong> Activada para mantener contexto entre conversaciones</li>
                        </ul>

                        <h3>Gemini</h3>
                        <ul className="application-list">
                            <li><strong>Plan:</strong> Advanced ($20/mes) para Deep Research</li>
                            <li><strong>Modelo preferido:</strong> Gemini 1.5 Pro para análisis</li>
                            <li><strong>Extensiones:</strong> Google Drive, Docs, YouTube activadas</li>
                            <li><strong>Deep Research:</strong> Usarlo para investigaciones complejas, no consultas rápidas</li>
                        </ul>

                        <div className="highlight-success">
                            <strong>Inversión total:</strong> $40/mes por acceso a ambos. Menos que una hora de trabajo profesional.
                        </div>
                    </article>
                </section>

                {/* Sección 8: Checklist */}
                <section id="checklist" className="page__section">
                    <h2 className="page__section-title">8. Checklist: ¿Qué modelo uso hoy?</h2>
                    <article className="long-form-content">
                        <div className="checklist-box">
                            <h3>Antes de empezar una tarea, preguntate:</h3>
                            <ul className="checklist">
                                <li>☐ ¿El documento es corto (&lt;30 págs) o largo (+100 págs)?</li>
                                <li>☐ ¿Necesito investigación web actualizada?</li>
                                <li>☐ ¿Voy a redactar algo que requiere control de formato?</li>
                                <li>☐ ¿Es análisis estratégico que requiere razonamiento profundo?</li>
                                <li>☐ ¿Tengo un GPT personalizado que ya hace esta tarea?</li>
                            </ul>

                            <h3>Decisión rápida:</h3>
                            <ul className="application-list">
                                <li>Documento corto + redacción → <strong>ChatGPT</strong></li>
                                <li>Documento largo + contexto → <strong>Gemini</strong></li>
                                <li>Investigación profunda → <strong>Gemini Deep Research</strong></li>
                                <li>Estrategia/juicio → <strong>ChatGPT o1</strong></li>
                            </ul>
                        </div>
                    </article>
                </section>

                {/* Footer de navegación */}
                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/foundations" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M1 U1: IA generativa y agentes</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/foundations-u3" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Unidad 3 – RAG aplicado al derecho →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoundationsM1U2

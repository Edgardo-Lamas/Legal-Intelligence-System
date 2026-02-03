import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'

function GeminiM4U2() {
    return (
        <div className="page">
            <header className="page__header">
                <span className="page__module-tag">Módulo 4 · Unidad 2</span>
                <h1 className="page__title">Gemini Canvas: Visualización, estructura y productos legales inteligentes</h1>
                <p className="page__description">
                    Transformando información legal compleja en estructuras comprensibles y navegables
                </p>
            </header>

            <div className="page__content">
                {/* Sección 1: Objetivos */}
                <section id="objetivos" className="page__section">
                    <h2 className="page__section-title">1. ¿Qué vas a aprender?</h2>
                    <article className="long-form-content">
                        <p>
                            En esta unidad vas a aprender a utilizar <strong>Gemini Canvas</strong> como una extensión visual del razonamiento jurídico. El objetivo no es “hacer cosas lindas”, sino transformar información legal compleja en estructuras comprensibles, navegables y reutilizables, tanto para el propio abogado como para clientes, equipos de trabajo o decisores no técnicos.
                        </p>
                        <p>
                            Al finalizar esta unidad, comprenderás cómo pasar de documentos extensos y desordenados a representaciones visuales que facilitan el análisis, la explicación y la toma de decisiones jurídicas, sin perder rigor ni precisión conceptual.
                        </p>
                    </article>
                </section>

                {/* Sección 2: Concepto central */}
                <section id="concepto" className="page__section">
                    <h2 className="page__section-title">2. Concepto central</h2>
                    <article className="long-form-content">
                        <blockquote className="concept-quote">
                            Gemini Canvas no es una herramienta de diseño gráfico. Es un entorno de estructuración cognitiva.
                        </blockquote>
                        <p>
                            Permite externalizar el pensamiento jurídico en forma visual: mapas, esquemas, tablas, flujos y prototipos funcionales que representan relaciones legales complejas de manera clara.
                        </p>
                        <p>
                            Mientras el texto explica en secuencia, el Canvas muestra <strong>relaciones</strong>. Esto es clave en el derecho, donde muchas decisiones dependen de comprender cómo interactúan normas, hechos, plazos, actores y consecuencias jurídicas dentro de un mismo sistema.
                        </p>
                        <p className="highlight-success">
                            Visualizar no simplifica el derecho: reduce fricción cognitiva.
                        </p>
                    </article>
                </section>

                {/* Sección 3: Del expediente al mapa legal */}
                <section id="mapa-legal" className="page__section">
                    <h2 className="page__section-title">3. Del expediente al mapa legal</h2>
                    <article className="long-form-content">
                        <p>
                            Uno de los mayores problemas del trabajo jurídico es que la información relevante suele estar dispersa en múltiples documentos. El abogado “sabe” cosas, pero ese conocimiento vive en su cabeza o en archivos separados. Gemini Canvas permite convertir ese conocimiento implícito en estructuras visibles.
                        </p>
                        <ul className="application-list">
                            <li><strong>Expediente →</strong> Línea de tiempo interactiva.</li>
                            <li><strong>Contrato complejo →</strong> Mapa de obligaciones y contingencias.</li>
                            <li><strong>Causa con múltiples actores →</strong> Red de relaciones jurídicas.</li>
                        </ul>
                        <p>
                            Esto no reemplaza la lectura del documento original, pero cambia radicalmente la forma de comprenderlo.
                        </p>
                    </article>
                </section>

                {/* Sección 4: Análisis y explicación */}
                <section id="analisis" className="page__section">
                    <h2 className="page__section-title">4. Canvas como herramienta de análisis y explicación</h2>
                    <article className="long-form-content">
                        <p>
                            El valor de Canvas no se limita al análisis interno. También cumple una función clave en la comunicación profesional. Muchos conflictos legales se agravan porque el cliente no entiende el problema, el riesgo o el proceso.
                        </p>
                        <p>
                            Un abogado que puede explicar visualmente una situación jurídica demuestra dominio, claridad y control. Canvas permite construir esquemas que explican procesos judiciales, escenarios posibles, alternativas estratégicas y consecuencias legales de manera comprensible para personas sin formación jurídica.
                        </p>
                        <div className="highlight-box">
                            La claridad visual es una forma avanzada de persuasión racional.
                        </div>
                    </article>
                </section>

                {/* Sección 5: Casos de uso */}
                <section id="casos-uso" className="page__section">
                    <h2 className="page__section-title">5. Casos de uso reales en la práctica profesional</h2>
                    <article className="long-form-content">
                        <p>
                            Gemini Canvas puede utilizarse para crear mapas de riesgo legal, esquemas de cumplimiento normativo, flujos de procesos judiciales, comparativas de escenarios, calculadoras legales básicas y prototipos de herramientas internas.
                        </p>
                        <div className="examples-grid">
                            <div className="example-item">
                                <span className="example-icon">🧮</span>
                                <span>Calculadora de indemnización</span>
                            </div>
                            <div className="example-item">
                                <span className="example-icon">👣</span>
                                <span>Esquema de pasos procesales</span>
                            </div>
                            <div className="example-item">
                                <span className="example-icon">📜</span>
                                <span>Mapa de obligaciones contractuales</span>
                            </div>
                            <div className="example-item">
                                <span className="example-icon">⏳</span>
                                <span>Visualización de plazos críticos</span>
                            </div>
                        </div>
                        <p className="description-text">
                            Estos productos no solo ahorran tiempo: crean <strong>activos profesionales reutilizables</strong>.
                        </p>
                    </article>
                </section>

                {/* Sección 6: Documento vs Producto */}
                <section id="producto-legal" className="page__section">
                    <h2 className="page__section-title">6. Diferencia entre documento y producto legal</h2>
                    <article className="long-form-content">
                        <div className="comparison-grid">
                            <div className="comparison-box">
                                <h4>📄 Documento legal</h4>
                                <p>Estático. Se lee de principio a fin.</p>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>🛠️ Producto legal visual</h4>
                                <p>Dinámico. Se consulta, se recorre y se usa como herramienta.</p>
                            </div>
                        </div>
                        <p>
                            El abogado deja de entregar únicamente documentos y comienza a entregar sistemas de comprensión legal. Esto cambia la percepción de valor del servicio y fortalece el posicionamiento profesional.
                        </p>
                        <p className="highlight-success">
                            No es más trabajo: es trabajo mejor estructurado.
                        </p>
                    </article>
                </section>

                {/* Sección 7: Riesgos */}
                <section id="riesgos" className="page__section">
                    <h2 className="page__section-title">7. Riesgos y malas prácticas</h2>
                    <article className="long-form-content">
                        <div className="risk-list">
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span><strong>Simplificación irresponsable:</strong> Un esquema mal diseñado puede ocultar matices importantes o generar falsa certeza.</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span><strong>Delegación ciega:</strong> Canvas ayuda a estructurar, pero la decisión de qué mostrar y qué omitir es del abogado.</span>
                            </div>
                        </div>
                        <p className="highlight-warning">
                            La visualización debe ser una capa adicional de claridad, no un reemplazo del análisis jurídico profundo.
                        </p>
                    </article>
                </section>

                {/* Sección 8: Ideas clave */}
                <section id="ideas-clave" className="page__section">
                    <h2 className="page__section-title">8. Ideas clave para fijar</h2>
                    <article className="long-form-content">
                        <ul className="key-points">
                            <li>Gemini Canvas convierte información legal en estructuras visibles.</li>
                            <li>El valor no está en lo visual, sino en pensar jurídicamente en forma estructural.</li>
                            <li>Un abogado que domina esta herramienta hace entendibles los casos para otros.</li>
                            <li>Visualizar bien es una forma avanzada de control profesional.</li>
                        </ul>
                    </article>
                </section>

                {/* Sección 9: Conexión */}
                <section id="conexion" className="page__section">
                    <h2 className="page__section-title">9. Conexión con el sistema de estudio</h2>
                    <article className="long-form-content">
                        <p>
                            Esta unidad complementa la capacidad de lectura masiva trabajada en la Unidad 1. Primero se explora el universo documental; luego se estructura y visualiza.
                        </p>
                        <p>
                            En las unidades siguientes, estas capacidades se integrarán con automatización, generación de activos digitales y sistemas reutilizables que escalan el trabajo jurídico sin perder criterio ni calidad. <strong>Canvas es el puente entre información y sistema.</strong>
                        </p>
                    </article>
                </section>

                {/* Footer de navegación */}
                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/gemini" className="unit-nav-link">
                            <span className="unit-nav-label">← Módulo anterior</span>
                            <span className="unit-nav-title">M4 U1: Gemini y Deep Research</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/gemini-u3" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Unidad 3 – Tareas automáticas y memoria →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeminiM4U2

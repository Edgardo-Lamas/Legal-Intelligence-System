import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'

function SoloPracticeM3U3() {
    return (
        <div className="page">
            <header className="page__header">
                <span className="page__module-tag">Módulo 3 · Unidad 3</span>
                <h1 className="page__title">Escritura Persuasiva Digital</h1>
                <p className="page__description">
                    Comunicación jurídica estratégica en entornos digitales
                </p>
            </header>

            <div className="page__content">
                {/* Sección 1: Objetivos */}
                <section id="objetivos" className="page__section">
                    <h2 className="page__section-title">1. ¿Qué vas a aprender?</h2>
                    <article className="long-form-content">
                        <p>
                            Esta unidad aborda una de las competencias más subestimadas —y a la vez más decisivas— del abogado moderno: la capacidad de <strong>escribir de forma persuasiva en entornos digitales</strong>.
                        </p>
                        <p>
                            Al finalizar esta unidad, comprenderás por qué escribir bien ya no es solo una cuestión de estilo, sino una <strong>herramienta estratégica</strong> de posicionamiento profesional, captación de clientes y construcción de autoridad.
                        </p>
                        <p className="highlight-warning">
                            No se trata de "marketing vacío" ni de copiar fórmulas publicitarias. Se trata de entender cómo se toman decisiones en contextos digitales y cómo el lenguaje jurídico puede adaptarse a esos entornos <strong>sin perder rigor, ética ni precisión conceptual</strong>.
                        </p>
                    </article>
                </section>

                {/* Sección 2: Concepto central */}
                <section id="concepto" className="page__section">
                    <h2 className="page__section-title">2. Concepto central</h2>
                    <article className="long-form-content">
                        <p>
                            La escritura persuasiva jurídica no busca convencer a cualquiera de cualquier cosa. Busca <strong>generar confianza racional</strong> en contextos donde el lector no conoce personalmente al abogado y toma decisiones basadas en señales de claridad, solvencia y criterio profesional.
                        </p>
                        <blockquote className="concept-quote">
                            En entornos digitales, el texto reemplaza a la presencia física. No hay despacho, no hay tono de voz, no hay gestos. El texto es el abogado.
                        </blockquote>
                        <p>
                            Por eso, cada palabra cumple una función estratégica: orientar, tranquilizar, demostrar competencia y marcar diferencia frente a otros profesionales que dicen lo mismo, pero peor.
                        </p>
                        <p className="highlight-success">
                            La persuasión jurídica digital no consiste en exagerar beneficios, sino en <strong>reducir incertidumbre</strong>.
                        </p>
                    </article>
                </section>

                {/* Sección 3: Tradicional vs Digital */}
                <section id="tradicional-vs-digital" className="page__section">
                    <h2 className="page__section-title">3. Escritura jurídica tradicional vs. digital</h2>
                    <article className="long-form-content">
                        <p>
                            El abogado está entrenado para escribir para jueces, colegas y expedientes. Ese tipo de escritura prioriza la exhaustividad, la formalidad extrema y la acumulación de argumentos.
                        </p>
                        <p className="highlight-warning">
                            En el entorno digital, ese mismo enfoque suele generar el efecto contrario: <strong>confusión, distancia y abandono del lector</strong>.
                        </p>
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Escritura tradicional</h4>
                                <ul>
                                    <li>Exhaustividad y densidad</li>
                                    <li>Formalidad extrema</li>
                                    <li>Acumulación de argumentos</li>
                                    <li>Demostración de erudición</li>
                                </ul>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>✅ Escritura digital</h4>
                                <ul>
                                    <li>Claridad antes que densidad</li>
                                    <li>Estructura antes que retórica</li>
                                    <li>Orientación al lector</li>
                                    <li>Comprensión sin simplificar</li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            No se trata de "simplificar el derecho", sino de <strong>hacerlo inteligible sin deformarlo</strong>.
                        </p>
                        <blockquote className="concept-quote" style={{ fontSize: 'var(--font-size-xl)' }}>
                            Un buen texto digital jurídico no baja el nivel: sube el nivel de comprensión.
                        </blockquote>
                    </article>
                </section>

                {/* Sección 4: Arquitectura del texto */}
                <section id="arquitectura" className="page__section">
                    <h2 className="page__section-title">4. La persuasión como arquitectura del texto</h2>
                    <article className="long-form-content">
                        <p>
                            La persuasión no ocurre al final del texto. <strong>Ocurre desde la primera línea</strong>. Un texto jurídico persuasivo está diseñado como una secuencia lógica que acompaña al lector desde su problema hasta la decisión de confiar.
                        </p>
                        <p>Esto implica escribir con <strong>intención estructural</strong>:</p>
                        <div className="strategic-uses">
                            <div className="strategic-use">
                                <span className="strategic-use__icon">❓</span>
                                <span>Saber qué pregunta tiene el lector cuando llega al texto</span>
                            </div>
                            <div className="strategic-use">
                                <span className="strategic-use__icon">🤔</span>
                                <span>Qué objeciones mentales aparecen mientras lee</span>
                            </div>
                            <div className="strategic-use">
                                <span className="strategic-use__icon">✅</span>
                                <span>Qué sensación debería tener al terminar</span>
                            </div>
                        </div>
                        <p className="highlight-success">
                            La persuasión jurídica moderna no presiona: <strong>ordena el pensamiento del lector</strong>.
                        </p>
                        <blockquote className="concept-quote">
                            Un abogado que domina esta arquitectura no necesita prometer resultados. Le alcanza con mostrar criterio.
                        </blockquote>
                    </article>
                </section>

                {/* Sección 5: Casos de uso */}
                <section id="casos-uso" className="page__section">
                    <h2 className="page__section-title">5. Casos de uso en la práctica profesional</h2>
                    <article className="long-form-content">
                        <p>Esta forma de escritura se aplica directamente en:</p>
                        <ul className="application-list">
                            <li>Descripción de servicios profesionales</li>
                            <li>Artículos de opinión jurídica</li>
                            <li>Publicaciones en redes profesionales</li>
                            <li>Páginas "Sobre mí"</li>
                            <li>Respuestas escritas a consultas iniciales</li>
                            <li>Explicaciones de procesos legales para clientes no técnicos</li>
                        </ul>
                        <p className="highlight-success">
                            En todos los casos, el objetivo es el mismo: transformar <strong>complejidad jurídica en claridad confiable</strong>, sin banalizar el contenido ni perder autoridad técnica.
                        </p>
                    </article>
                </section>

                {/* Sección 6: Riesgos */}
                <section id="riesgos" className="page__section">
                    <h2 className="page__section-title">6. Riesgos y malas prácticas frecuentes</h2>
                    <article className="long-form-content">
                        <div className="risk-list">
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span><strong>Confundir persuasión con manipulación:</strong> fórmulas agresivas, promesas implícitas de éxito o lenguaje emocional exagerado</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span><strong>Escribir "para otros abogados"</strong> cuando el destinatario real es un cliente potencial</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">🚫</span>
                                <span><strong>Delegar completamente la escritura a la IA</strong> sin criterio humano</span>
                            </div>
                        </div>
                        <p className="highlight-warning">
                            La IA puede asistir, estructurar y mejorar claridad, pero <strong>no puede definir la intención profesional del abogado</strong>.
                        </p>
                    </article>
                </section>

                {/* Sección 7: Ideas clave */}
                <section id="ideas-clave" className="page__section">
                    <h2 className="page__section-title">7. Ideas clave para fijar</h2>
                    <article className="long-form-content">
                        <p>
                            La persuasión jurídica sigue siendo un <strong>acto profundamente humano</strong>. La IA no reemplaza el criterio, la ética ni la responsabilidad del abogado; los amplifica cuando están bien definidos.
                        </p>
                        <ul className="key-points">
                            <li>Un profesional que sabe escribir con intención <strong>no necesita competir por precio</strong></li>
                            <li>Construye ventaja competitiva a partir de <strong>claridad y coherencia</strong></li>
                            <li>No depende de visibilidad artificial</li>
                        </ul>
                        <blockquote className="concept-quote" style={{ fontSize: 'var(--font-size-xl)' }}>
                            En el entorno digital, escribir bien no es un talento opcional. Es una extensión directa del ejercicio profesional.
                        </blockquote>
                    </article>
                </section>

                {/* Sección 8: Conexión */}
                <section id="conexion" className="page__section">
                    <h2 className="page__section-title">8. Conexión con el sistema de estudio</h2>
                    <article className="long-form-content">
                        <p>
                            Esta unidad establece la base conceptual para comprender por qué la escritura es el núcleo del <strong>marketing legal moderno</strong>, del posicionamiento profesional y de toda comunicación estratégica del abogado.
                        </p>
                        <p>Las unidades siguientes profundizarán en cómo esta capacidad se integra con:</p>
                        <div className="strategic-uses">
                            <div className="strategic-use">
                                <span className="strategic-use__icon">⚙️</span>
                                <span>Automatización</span>
                            </div>
                            <div className="strategic-use">
                                <span className="strategic-use__icon">📝</span>
                                <span>Sistemas de contenido</span>
                            </div>
                            <div className="strategic-use">
                                <span className="strategic-use__icon">🤖</span>
                                <span>Herramientas de IA para escalar sin perder control</span>
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
                                <strong>La escritura persuasiva no es un módulo aislado: es la columna vertebral de todo el sistema.</strong>
                            </p>
                        </div>
                    </article>
                </section>

                {/* Footer de navegación */}
                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/solo-practice-u2" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M3 U2: Gestión Contable y Fiscal</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--complete">✓ Unidad 3 Completa</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <span className="next-title">Unidad 4 – Marketing legal y posicionamiento</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SoloPracticeM3U3

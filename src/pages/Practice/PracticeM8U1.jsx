import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'

function PracticeM8U1() {
    return (
        <div className="page">
            <header className="page__header">
                <span className="page__module-tag">Módulo 8 · Unidad 1</span>
                <h1 className="page__title">Del concepto al sistema</h1>
                <p className="page__description">
                    De usar herramientas aisladas a diseñar sistemas de trabajo coherentes.
                </p>
            </header>

            <div className="page__content">
                {/* Intro */}
                <section className="page__section">
                    <article className="long-form-content">
                        <p>
                            Hasta este punto del recorrido, el curso trabajó sobre herramientas, técnicas, criterios y marcos conceptuales vinculados al uso de IA en el ámbito jurídico y profesional.
                        </p>
                        <blockquote className="concept-quote">
                            Sin embargo, existe una diferencia fundamental entre conocer herramientas y operar con sistemas. Esta unidad marca precisamente ese punto de inflexión.
                        </blockquote>
                    </article>
                </section>

                {/* Sección 1: El error común */}
                <section id="error" className="page__section">
                    <h2 className="page__section-title">1. El error más común</h2>
                    <article className="long-form-content">
                        <p>
                            El error más común al incorporar inteligencia artificial en la práctica profesional consiste en utilizarla de manera <strong>fragmentada</strong>:
                        </p>
                        <ul className="application-list">
                            <li>Un prompt aislado</li>
                            <li>Una consulta ocasional</li>
                            <li>Una automatización suelta</li>
                        </ul>
                        <div className="highlight-warning">
                            Aunque estos usos pueden generar mejoras puntuales, no producen un cambio estructural en la forma de trabajar.
                        </div>
                        <p>
                            La verdadera transformación ocurre cuando la IA deja de ser una ayuda circunstancial y pasa a integrarse como parte de un <strong>sistema de trabajo coherente</strong>.
                        </p>
                    </article>
                </section>

                {/* Sección 2: Qué es un sistema */}
                <section id="sistema" className="page__section">
                    <h2 className="page__section-title">2. ¿Qué significa pensar en "sistema"?</h2>
                    <article className="long-form-content">
                        <p>
                            Hablar de "sistema" implica pensar la práctica profesional como un <strong>conjunto de procesos conectados entre sí</strong>. Cada proceso tiene:
                        </p>
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--good">
                                <h4>🎯 Objetivo claro</h4>
                                <p>Qué resultado se busca obtener.</p>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>📥 Entrada</h4>
                                <p>La información que ingresa al proceso.</p>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>⚙️ Procesamiento</h4>
                                <p>Cómo se transforma esa información.</p>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>📤 Resultado</h4>
                                <p>El producto final esperado.</p>
                            </div>
                        </div>
                        <div className="highlight-success">
                            En este contexto, la IA no reemplaza al profesional, sino que se integra como un componente más dentro de ese flujo, amplificando su capacidad de análisis, producción y decisión.
                        </div>
                    </article>
                </section>

                {/* Sección 3: Preguntas estratégicas */}
                <section id="preguntas" className="page__section">
                    <h2 className="page__section-title">3. Las preguntas estratégicas</h2>
                    <article className="long-form-content">
                        <p>
                            En el ámbito jurídico, esto significa dejar de preguntarse únicamente "qué puede hacer esta herramienta" y empezar a formular preguntas más estratégicas:
                        </p>
                        <ul className="application-list">
                            <li><strong>¿Qué problema recurrente quiero resolver?</strong></li>
                            <li><strong>¿Qué parte del proceso consume más tiempo o energía?</strong></li>
                            <li><strong>¿Dónde tiene sentido incorporar asistencia automatizada y dónde no?</strong></li>
                        </ul>
                    </article>
                </section>

                {/* Sección 4: De usuario a arquitecto */}
                <section id="arquitecto" className="page__section">
                    <h2 className="page__section-title">4. De usuario a arquitecto</h2>
                    <article className="long-form-content">
                        <p>
                            Esta unidad propone un cambio de enfoque: pasar del uso instrumental de la IA a una <strong>lógica de diseño</strong>.
                        </p>
                        <blockquote className="concept-quote">
                            El profesional deja de ser un usuario pasivo de herramientas para convertirse en un arquitecto de sistemas de trabajo.
                        </blockquote>
                        <p>Esto exige comprender que:</p>
                        <ul className="application-list">
                            <li>No todo debe automatizarse</li>
                            <li>Existen puntos críticos donde la intervención humana es irremplazable</li>
                            <li>La calidad del sistema depende más de su estructura que de la sofisticación tecnológica</li>
                        </ul>
                    </article>
                </section>

                {/* Sección 5: Contexto concreto */}
                <section id="contexto" className="page__section">
                    <h2 className="page__section-title">5. Sistemas para contextos concretos</h2>
                    <article className="long-form-content">
                        <p>
                            Los sistemas no se diseñan en abstracto. Siempre responden a un <strong>contexto concreto</strong>:
                        </p>
                        <ul className="application-list">
                            <li>El tipo de práctica profesional</li>
                            <li>El volumen de trabajo</li>
                            <li>El perfil del destinatario</li>
                            <li>Los riesgos legales y éticos involucrados</li>
                        </ul>
                        <div className="highlight-success">
                            Por eso, esta unidad no busca ofrecer modelos cerrados, sino criterios para que cada estudiante pueda pensar su propio sistema de implementación.
                        </div>
                    </article>
                </section>

                {/* Sección 6: Responsabilidad */}
                <section id="responsabilidad" className="page__section">
                    <h2 className="page__section-title">6. Mayor responsabilidad</h2>
                    <article className="long-form-content">
                        <p>
                            El paso del concepto al sistema también implica asumir una <strong>responsabilidad mayor</strong>. Cuando la IA se integra en flujos reales, sus resultados tienen consecuencias prácticas.
                        </p>
                        <div className="highlight-warning">
                            Esto obliga a establecer mecanismos de control, validación y revisión, reafirmando el rol del profesional como garante final del contenido, la decisión y la estrategia.
                        </div>
                    </article>
                </section>

                {/* Sección 7: Nueva etapa */}
                <section id="nueva-etapa" className="page__section">
                    <h2 className="page__section-title">7. Una nueva etapa del curso</h2>
                    <article className="long-form-content">
                        <p>
                            Esta unidad inaugura una nueva etapa del curso. A partir de aquí, el foco deja de estar en aprender <em>qué hace la IA</em> y se traslada a <strong>cómo diseñar sistemas de trabajo reales, sostenibles y alineados con los objetivos profesionales</strong>.
                        </p>
                        <blockquote className="concept-quote">
                            Lo aprendido hasta ahora encuentra sentido en la medida en que puede organizarse, integrarse y aplicarse de forma consciente en la práctica cotidiana.
                        </blockquote>
                        <p>
                            Esta base conceptual será indispensable para las unidades siguientes, donde se avanzará hacia el diseño de flujos de trabajo concretos y, finalmente, hacia la implementación práctica en escenarios reales.
                        </p>
                    </article>
                </section>

                {/* Footer de navegación */}
                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/communication" className="unit-nav-link">
                            <span className="unit-nav-label">← Módulo anterior</span>
                            <span className="unit-nav-title">M7: IA para comunicación legal</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/practice-u2" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Unidad 2 – Diseño de flujos de trabajo con IA →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PracticeM8U1

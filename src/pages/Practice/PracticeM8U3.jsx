import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'

function PracticeM8U3() {
    return (
        <div className="page">
            <header className="page__header">
                <span className="page__module-tag">Módulo 8 · Unidad 3</span>
                <h1 className="page__title">Implementación práctica y validación del sistema</h1>
                <p className="page__description">
                    Cómo llevar los diseños a la realidad y validarlos para que sean confiables, sostenibles y responsables.
                </p>
            </header>

            <div className="page__content">
                {/* Intro */}
                <section className="page__section">
                    <article className="long-form-content">
                        <p>
                            Luego de comprender la lógica de los sistemas y de aprender a diseñar flujos de trabajo con inteligencia artificial, el paso final es la <strong>implementación práctica</strong>.
                        </p>
                        <p>
                            Esta unidad se enfoca en cómo llevar esos diseños a la realidad cotidiana y, sobre todo, en cómo validarlos para que sean <strong>confiables, sostenibles y profesionalmente responsables</strong>.
                        </p>
                    </article>
                </section>

                {/* Sección 1: Enfoque progresivo */}
                <section id="progresivo" className="page__section">
                    <h2 className="page__section-title">1. Enfoque progresivo</h2>
                    <article className="long-form-content">
                        <p>
                            Implementar un sistema con IA no significa desplegar una estructura compleja desde el primer día.
                        </p>
                        <blockquote className="concept-quote">
                            El enfoque recomendado es progresivo: comenzar con un flujo simple, aplicarlo a una tarea concreta y observar su funcionamiento real.
                        </blockquote>
                        <div className="highlight-success">
                            La práctica revela rápidamente ajustes necesarios que no siempre son evidentes en la etapa de diseño.
                        </div>
                    </article>
                </section>

                {/* Sección 2: Validación permanente */}
                <section id="validacion" className="page__section">
                    <h2 className="page__section-title">2. Validación permanente</h2>
                    <article className="long-form-content">
                        <p>
                            Un principio central de esta etapa es la <strong>validación permanente</strong>. Todo resultado generado con asistencia de IA debe ser revisado con criterio humano, no como un trámite formal sino como una parte esencial del proceso.
                        </p>
                        <p>Validar implica verificar:</p>
                        <ul className="application-list">
                            <li>Exactitud de la información</li>
                            <li>Coherencia interna</li>
                            <li>Adecuación al contexto</li>
                            <li>Alineación con el objetivo profesional</li>
                        </ul>
                        <blockquote className="concept-quote">
                            La IA propone, pero el profesional dispone.
                        </blockquote>
                    </article>
                </section>

                {/* Sección 3: Responsabilidad */}
                <section id="responsabilidad" className="page__section">
                    <h2 className="page__section-title">3. Responsabilidad profesional</h2>
                    <article className="long-form-content">
                        <p>
                            En este punto se vuelve especialmente relevante la noción de <strong>responsabilidad</strong>. En contextos jurídicos, educativos o institucionales, el uso de IA no traslada la autoría ni la obligación ética.
                        </p>
                        <div className="highlight-warning">
                            El sistema puede acelerar el trabajo, pero la decisión final y sus consecuencias siguen recayendo en la persona que lo utiliza.
                        </div>
                        <p>
                            Comprender esto evita errores de fondo y usos inapropiados de la tecnología.
                        </p>
                    </article>
                </section>

                {/* Sección 4: Criterios de control */}
                <section id="control" className="page__section">
                    <h2 className="page__section-title">4. Criterios claros de control</h2>
                    <article className="long-form-content">
                        <p>
                            La implementación también requiere definir <strong>criterios claros de control</strong>. No todos los resultados necesitan el mismo nivel de revisión.
                        </p>
                        <p>Un esquema habitual distingue entre:</p>
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--good">
                                <h4>📝 Borradores iniciales</h4>
                                <p>Revisión ligera, foco en estructura.</p>
                            </div>
                            <div className="comparison-box">
                                <h4>📄 Textos internos</h4>
                                <p>Revisión moderada, verificación de coherencia.</p>
                            </div>
                            <div className="comparison-box comparison-box--bad">
                                <h4>📋 Documentos finales</h4>
                                <p>Revisión exhaustiva, validación completa.</p>
                            </div>
                        </div>
                        <div className="highlight-success">
                            A mayor impacto del resultado, mayor debe ser el nivel de validación. Este enfoque permite equilibrar eficiencia y seguridad.
                        </div>
                    </article>
                </section>

                {/* Sección 5: Documentación */}
                <section id="documentacion" className="page__section">
                    <h2 className="page__section-title">5. Documentación del sistema</h2>
                    <article className="long-form-content">
                        <p>
                            Otro aspecto clave es la <strong>documentación del sistema</strong>. Registrar cómo funciona un flujo facilita la mejora continua y la transferencia del conocimiento.
                        </p>
                        <p>Qué documentar:</p>
                        <ul className="application-list">
                            <li>Cómo funciona el flujo</li>
                            <li>Qué prompts se utilizan</li>
                            <li>Qué ajustes se realizan</li>
                            <li>Qué criterios se aplican para la validación</li>
                        </ul>
                        <div className="highlight-success">
                            Incluso en el trabajo individual, documentar el proceso evita depender exclusivamente de la memoria o de soluciones improvisadas.
                        </div>
                    </article>
                </section>

                {/* Sección 6: Sistema invisible */}
                <section id="invisible" className="page__section">
                    <h2 className="page__section-title">6. El sistema invisible: señal de éxito</h2>
                    <article className="long-form-content">
                        <p>
                            La implementación exitosa se reconoce cuando el sistema se vuelve <strong>invisible</strong>:
                        </p>
                        <ul className="application-list">
                            <li>No interrumpe el trabajo</li>
                            <li>No genera fricción innecesaria</li>
                            <li>Se integra de forma natural a la rutina profesional</li>
                        </ul>
                        <blockquote className="concept-quote">
                            En ese punto, la IA deja de ser una novedad y pasa a ser una herramienta estable, al servicio de objetivos claros.
                        </blockquote>
                    </article>
                </section>

                {/* Footer de navegación */}
                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/practice-u2" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M8 U2: Diseño de flujos de trabajo con IA</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próximo módulo:</span>
                        <span className="next-title" style={{ color: '#aaa' }}>
                            Próximamente
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PracticeM8U3

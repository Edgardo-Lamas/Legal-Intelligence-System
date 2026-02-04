import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'

function EcosystemM5U2() {
    return (
        <div className="page">
            <header className="page__header">
                <span className="page__module-tag">Módulo 5 · Unidad 2</span>
                <h1 className="page__title">Automatización jurídica: qué automatizar, qué no y por qué</h1>
                <p className="page__description">
                    Criterios para delegar tareas operativas sin perder el control estratégico.
                </p>
            </header>

            <div className="page__content">
                {/* Intro */}
                <section className="page__section">
                    <article className="long-form-content">
                        <p>
                            Una vez que el abogado comprende la IA como un ecosistema de trabajo y no como una herramienta aislada, surge una pregunta central: <strong>qué tareas conviene automatizar y cuáles deben permanecer estrictamente bajo control humano</strong>.
                        </p>
                        <p>
                            Esta distinción es clave, porque una automatización mal planteada no solo no ahorra tiempo, sino que puede degradar la calidad profesional y aumentar riesgos éticos y jurídicos.
                        </p>
                    </article>
                </section>

                {/* Sección 1: Ordenar procesos */}
                <section id="ordenar" className="page__section">
                    <h2 className="page__section-title">1. Ordenar procesos, no delegar decisiones</h2>
                    <article className="long-form-content">
                        <p>
                            La automatización jurídica no consiste en delegar decisiones, sino en ordenar procesos. En el ejercicio real del Derecho, muchas tareas se repiten con variaciones mínimas: estructuras de escritos, recopilación de información, adaptación de lenguaje, resúmenes o borradores iniciales. Estas actividades consumen tiempo cognitivo sin aportar valor estratégico.
                        </p>
                        <p>
                            Automatizar correctamente implica identificar tareas de <strong>bajo riesgo decisional y alta repetitividad</strong>, donde el error es fácilmente detectable. En estos casos, la IA actúa como acelerador, no como sustituto.
                        </p>
                    </article>
                </section>

                {/* Sección 2: Qué NO automatizar */}
                <section id="que-no" className="page__section">
                    <h2 className="page__section-title">2. Qué NO se debe automatizar</h2>
                    <article className="long-form-content">
                        <p>
                            Existen zonas del trabajo jurídico que no deben automatizarse de forma directa porque requieren un <strong>criterio jurídico situado</strong> que ningún sistema puede replicar hoy de forma confiable:
                        </p>
                        <ul className="application-list">
                            <li>El análisis estratégico y la teoría del caso.</li>
                            <li>La ponderación de riesgos y beneficios.</li>
                            <li>La interpretación normativa en contextos ambiguos.</li>
                            <li>La negociación y la toma de decisiones procesales.</li>
                        </ul>
                        <div className="highlight-warning">
                            Intentar automatizar estos núcleos suele llevar a errores graves o a una falsa sensación de seguridad.
                        </div>
                    </article>
                </section>

                {/* Sección 3: Criterio práctico */}
                <section id="criterio" className="page__section">
                    <h2 className="page__section-title">3. El criterio del "borrador imperfecto"</h2>
                    <article className="long-form-content">
                        <p>
                            Un criterio práctico para decidir qué automatizar es preguntarse si la tarea admite un <strong>borrador imperfecto</strong>.
                        </p>
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--good">
                                <h4>✅ Automatizable</h4>
                                <p>El resultado puede partir de un primer esquema que luego será revisado, corregido y ajustado por el abogado.</p>
                            </div>
                            <div className="comparison-box">
                                <h4>🛑 No automatizable</h4>
                                <p>La tarea exige precisión absoluta desde el primer momento, o implica consecuencias inmediatas e irreversibles.</p>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Sección 4: Automatizar sin programar */}
                <section id="sin-programar" className="page__section">
                    <h2 className="page__section-title">4. Automatizar no significa programar</h2>
                    <article className="long-form-content">
                        <p>
                            En muchos casos, la automatización se logra mediante <strong>estructuras de prompts bien diseñados</strong>, plantillas inteligentes o flujos conversacionales recurrentes.
                        </p>
                        <p>
                            El abogado que aprende a formular instrucciones claras y reutilizables está, en los hechos, creando sistemas de automatización livianos, adaptables y bajo su control directo. Automatizar es una decisión profesional, no técnica: se hace porque mejora la calidad del servicio y libera tiempo para tareas de mayor valor.
                        </p>
                    </article>
                </section>

                {/* Sección 5: Proceso gradual */}
                <section id="gradual" className="page__section">
                    <h2 className="page__section-title">5. Un proceso gradual</h2>
                    <article className="long-form-content">
                        <p>
                            El abogado no pasa de cero a un sistema complejo de un día para el otro. Se comienza por pequeñas automatizaciones controladas, se evalúan resultados y luego se avanza.
                        </p>
                        <p>
                            Esta unidad prepara el terreno para lo que sigue: la transición desde automatizaciones simples hacia flujos de trabajo más complejos, donde la IA se integra con documentos y rutinas profesionales.
                        </p>
                        <blockquote className="concept-quote">
                            Automatizar no es resignar control, sino diseñar mejor el trabajo jurídico.
                        </blockquote>
                    </article>
                </section>

                {/* Footer de navegación */}
                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/ecosystem" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M5 U1: Pensar la IA como ecosistema</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/ecosystem-u3" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Unidad 3 – Flujos de trabajo jurídicos →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EcosystemM5U2

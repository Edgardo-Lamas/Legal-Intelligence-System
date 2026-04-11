import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function EcosystemM5U5() {
    return (
        <div className="page">
            <PageSEO
                title="Práctica Jurídica Escalable con IA · M5 U5"
                description="Cómo transformar tu ecosistema de IA en un sistema de trabajo continuo, sostenible y escalable para tu estudio."
                path="/ecosystem-u5"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 5 · Unidad 5</span>
                <h1 className="page__title">Flujos automatizados y práctica jurídica escalable</h1>
                <p className="page__description">
                    Cómo transformar tu ecosistema de IA en un sistema de trabajo continuo y sostenible.
                </p>
            </header>

            <div className="page__content">
                {/* Intro */}
                <section className="page__section">
                    <article className="long-form-content">
                        <p>
                            Esta unidad cierra el módulo abordando el punto donde el ecosistema de IA deja de ser un conjunto de integraciones aisladas y se transforma en un <strong>sistema de trabajo continuo</strong>, capaz de sostener una práctica jurídica más ordenada, previsible y escalable.
                        </p>
                        <p>
                            Aquí aparece la noción de <strong>flujo</strong>: una secuencia de acciones donde cada paso alimenta al siguiente bajo reglas definidas por el abogado.
                        </p>
                    </article>
                </section>

                {/* Sección 1: Qué es un flujo automatizado */}
                <section id="flujo" className="page__section">
                    <h2 className="page__section-title">1. ¿Qué es un flujo automatizado?</h2>
                    <article className="long-form-content">
                        <p>
                            Un flujo automatizado <strong>no implica que la IA "actúe sola"</strong>. Implica que ciertas tareas se encadenan de forma lógica, reduciendo fricciones y repeticiones.
                        </p>
                        <p>
                            En el contexto jurídico, esto puede significar que:
                        </p>
                        <ul className="application-list">
                            <li>La recepción de información de un cliente active la generación de un resumen inicial.</li>
                            <li>Ese resumen alimente un borrador de documento.</li>
                            <li>Dicho borrador quede listo para revisión humana.</li>
                        </ul>
                        <blockquote className="concept-quote">
                            El valor del flujo está en la continuidad del proceso, no en la eliminación del control profesional.
                        </blockquote>
                    </article>
                </section>

                {/* Sección 2: De la fragmentación a la reutilización */}
                <section id="reutilizacion" className="page__section">
                    <h2 className="page__section-title">2. De la fragmentación a la reutilización</h2>
                    <article className="long-form-content">
                        <p>
                            La práctica jurídica tradicional suele operar de manera fragmentada. Cada tarea comienza casi desde cero, incluso cuando los casos son similares.
                        </p>
                        <p>
                            Los flujos automatizados permiten <strong>capitalizar la experiencia previa</strong>, reutilizando estructuras, criterios y formatos sin perder la especificidad de cada asunto.
                        </p>
                        <div className="highlight-success">
                            Esto no estandariza el pensamiento jurídico, sino los soportes operativos que lo acompañan.
                        </div>
                    </article>
                </section>

                {/* Sección 3: Qué significa escalar */}
                <section id="escalar" className="page__section">
                    <h2 className="page__section-title">3. ¿Qué significa realmente escalar?</h2>
                    <article className="long-form-content">
                        <p>
                            La escalabilidad no se refiere únicamente a "atender más casos". En muchos contextos, escalar significa:
                        </p>
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--good">
                                <h4>📈 Mejorar la calidad</h4>
                                <p>Sin aumentar proporcionalmente el esfuerzo invertido.</p>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>🛡️ Reducir errores</h4>
                                <p>Evitando fallos por saturación o agotamiento.</p>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>⚖️ Sostener el nivel</h4>
                                <p>Manteniendo calidad profesional constante en el tiempo.</p>
                            </div>
                        </div>
                        <p>
                            Los flujos bien diseñados ayudan a lograrlo porque descargan al abogado de tareas repetitivas y lo obligan a intervenir donde realmente agrega valor.
                        </p>
                    </article>
                </section>

                {/* Sección 4: Automatización rígida vs flexible */}
                <section id="tipos" className="page__section">
                    <h2 className="page__section-title">4. Automatización rígida vs. flexible</h2>
                    <article className="long-form-content">
                        <p>
                            Esta unidad introduce una distinción fundamental:
                        </p>
                        <div className="comparison-grid">
                            <div className="comparison-box">
                                <h4>🔒 Automatización rígida</h4>
                                <p>Replica siempre el mismo recorrido, sin adaptarse al contexto. No apta para el ámbito jurídico.</p>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>🔓 Automatización flexible</h4>
                                <p>Incorpora puntos de decisión humana, revisiones y ajustes. Compatible con práctica responsable.</p>
                            </div>
                        </div>
                        <div className="highlight-warning">
                            En el ámbito jurídico, solo la automatización flexible es compatible con una práctica responsable. Los flujos deben estar pensados como andamios, no como líneas de montaje cerradas.
                        </div>
                    </article>
                </section>

                {/* Sección 5: Trazabilidad */}
                <section id="trazabilidad" className="page__section">
                    <h2 className="page__section-title">5. Trazabilidad: el flujo como proceso auditable</h2>
                    <article className="long-form-content">
                        <p>
                            Un flujo automatizado bien construido permite saber:
                        </p>
                        <ul className="application-list">
                            <li><strong>Qué información</strong> se utilizó.</li>
                            <li><strong>En qué momento</strong> se procesó.</li>
                            <li><strong>Con qué criterio</strong> se tomaron las decisiones.</li>
                        </ul>
                        <p>
                            Esto no solo es útil para el control interno, sino también para justificar decisiones, revisar procesos y mejorar continuamente el sistema.
                        </p>
                        <div className="highlight-success">
                            La automatización deja de ser una "caja negra" y se convierte en un proceso auditable.
                        </div>
                    </article>
                </section>

                {/* Sección 6: Conclusión del módulo */}
                <section id="conclusion" className="page__section">
                    <h2 className="page__section-title">6. Cierre del módulo: orquestación inteligente</h2>
                    <article className="long-form-content">
                        <p>
                            Al cerrar este módulo, queda claro que el ecosistema avanzado de IA no se basa en la acumulación de herramientas, sino en la <strong>orquestación inteligente de procesos</strong>.
                        </p>
                        <blockquote className="concept-quote">
                            El abogado que comprende esto deja de usar la IA de forma reactiva y empieza a diseñar su práctica profesional con una lógica sistémica.
                        </blockquote>
                        <p>
                            Este cierre prepara el terreno para el siguiente bloque del curso, donde la automatización se profundiza mediante la creación de agentes y conexiones con el mundo real.
                        </p>
                        <div className="highlight-success">
                            Lo aprendido aquí funciona como base conceptual: sin criterios claros sobre flujos, control y escalabilidad, cualquier automatización avanzada pierde sentido jurídico.
                        </div>
                    </article>
                </section>

                {/* Footer de navegación */}
                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/ecosystem-u4" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M5 U4: Integración con documentos y sistemas</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próximo módulo:</span>
                        <Link to="/mastering" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Módulo 6 – Dominando el ecosistema de IA →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EcosystemM5U5

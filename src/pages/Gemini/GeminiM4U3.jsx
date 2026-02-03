import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'

function GeminiM4U3() {
    return (
        <div className="page">
            <header className="page__header">
                <span className="page__module-tag">Módulo 4 · Unidad 3</span>
                <h1 className="page__title">Gemini: Programación de tareas automáticas y gestión de memoria jurídica</h1>
                <p className="page__description">
                    Del uso reactivo al uso proactivo: seguimiento, alertas y continuidad en el trabajo legal
                </p>
            </header>

            <div className="page__content">
                {/* Sección 1: Objetivos */}
                <section id="objetivos" className="page__section">
                    <h2 className="page__section-title">1. ¿Qué vas a aprender?</h2>
                    <article className="long-form-content">
                        <p>
                            En esta unidad vas a comprender cómo Gemini puede utilizarse no solo para leer y visualizar información legal, sino para sostener procesos en el tiempo. El foco ya no está en una consulta puntual, sino en la <strong>continuidad del trabajo jurídico</strong>: seguimiento de casos, actualización de información, control de cambios y recordatorios inteligentes.
                        </p>
                        <p>
                            Al finalizar esta unidad, entenderás cómo pasar de un uso reactivo de la IA a un uso proactivo, donde ciertas tareas jurídicas dejan de depender exclusivamente de la memoria humana y se apoyan en sistemas que monitorean, recuerdan y alertan de forma estructurada.
                        </p>
                    </article>
                </section>

                {/* Sección 2: Concepto central */}
                <section id="concepto" className="page__section">
                    <h2 className="page__section-title">2. Concepto central</h2>
                    <article className="long-form-content">
                        <blockquote className="concept-quote">
                            La práctica legal no falla por falta de conocimiento, sino por fallas de seguimiento.
                        </blockquote>
                        <p>
                            Plazos que se acercan, cambios normativos que pasan inadvertidos, jurisprudencia nueva que altera un criterio previamente adoptado. La memoria humana es limitada; el sistema no.
                        </p>
                        <p>
                            Gemini permite introducir una capa de <strong>memoria operativa asistida</strong>, donde la IA no “recuerda” como una persona, sino que mantiene estados, revisa información periódicamente y ejecuta tareas definidas previamente. Esto transforma la IA en un componente activo del flujo de trabajo jurídico.
                        </p>
                        <p className="highlight-success">
                            Automatizar no es delegar criterio: es protegerlo del desgaste.
                        </p>
                    </article>
                </section>

                {/* Sección 3: Tareas automáticas */}
                <section id="tareas-automaticas" className="page__section">
                    <h2 className="page__section-title">3. Tareas automáticas como extensión del trabajo profesional</h2>
                    <article className="long-form-content">
                        <p>
                            La programación de tareas en Gemini permite definir acciones recurrentes vinculadas a información jurídica. El abogado deja de “acordarse de revisar” y pasa a diseñar un sistema que revisa por él.
                        </p>
                        <p>
                            La diferencia no es técnica, es estratégica: el profesional se libera de tareas repetitivas y reduce el riesgo de omisiones críticas.
                        </p>
                        <ul className="application-list">
                            <li>Revisión periódica de fuentes normativas.</li>
                            <li>Monitoreo de jurisprudencia relevante.</li>
                            <li>Actualización de bases documentales.</li>
                            <li>Generación de alertas ante cambios significativos.</li>
                        </ul>
                    </article>
                </section>

                {/* Sección 4: Memoria jurídica */}
                <section id="memoria-juridica" className="page__section">
                    <h2 className="page__section-title">4. Gestión de memoria jurídica</h2>
                    <article className="long-form-content">
                        <p>
                            La memoria en un sistema de IA no es acumulación indiscriminada de datos. Es <strong>curaduría estructurada</strong>. Gemini permite trabajar con memorias organizadas: conjuntos de documentos, criterios, resúmenes validados y referencias que se actualizan con el tiempo.
                        </p>
                        <p>
                            Esto resulta especialmente útil en áreas donde los casos se parecen entre sí, pero nunca son idénticos. El sistema no decide, pero recuerda qué se hizo antes, qué funcionó, qué argumentos se usaron y bajo qué contexto normativo.
                        </p>
                        <div className="highlight-box">
                            La memoria bien diseñada convierte la experiencia pasada en capital reutilizable.
                        </div>
                    </article>
                </section>

                {/* Sección 5: Casos de uso */}
                <section id="casos-uso" className="page__section">
                    <h2 className="page__section-title">5. Casos de uso reales en la práctica legal</h2>
                    <article className="long-form-content">
                        <p>
                            Gemini puede configurarse para múltiples funciones proactivas:
                        </p>
                        <div className="examples-grid">
                            <div className="example-item">
                                <span className="example-icon">📆</span>
                                <div>
                                    <strong>Seguimiento de causa</strong>
                                    <p>Alertar sobre movimientos relevantes y plazos.</p>
                                </div>
                            </div>
                            <div className="example-item">
                                <span className="example-icon">⚖️</span>
                                <div>
                                    <strong>Monitoreo regulatorio</strong>
                                    <p>Vigilar cambios en normas específicas.</p>
                                </div>
                            </div>
                            <div className="example-item">
                                <span className="example-icon">📚</span>
                                <div>
                                    <strong>Repositorio vivo</strong>
                                    <p>Mantener actualizada la jurisprudencia clave.</p>
                                </div>
                            </div>
                            <div className="example-item">
                                <span className="example-icon">🧠</span>
                                <div>
                                    <strong>Gestión del conocimiento</strong>
                                    <p>Respuestas tipo a consultas frecuentes y criterios del estudio.</p>
                                </div>
                            </div>
                        </div>
                        <p className="description-text">
                            Estos sistemas no reemplazan al abogado senior: multiplican su alcance.
                        </p>
                    </article>
                </section>

                {/* Sección 6: Automatizar vs Decidir */}
                <section id="automatizar-decidir" className="page__section">
                    <h2 className="page__section-title">6. Diferencia entre automatizar tareas y automatizar decisiones</h2>
                    <article className="long-form-content">
                        <p>
                            Una distinción fundamental es no confundir <strong>automatización</strong> con <strong>autonomía</strong>. Gemini puede ejecutar tareas, recopilar información y señalar cambios, pero no debe tomar decisiones jurídicas finales.
                        </p>
                        <p>
                            El valor está en que el sistema prepare el escenario para la decisión humana: entregue información relevante, organizada y oportuna. Cuando se cruza esa frontera y se delega la decisión sin control, el riesgo profesional se vuelve inaceptable.
                        </p>
                        <p className="highlight-success">
                            El buen diseño no elimina al abogado del proceso: lo coloca donde realmente aporta valor.
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
                                <span><strong>Ruido informativo:</strong> Sistemas de seguimiento sin criterios claros que generan alertas inútiles.</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span><strong>Obsolescencia:</strong> Acumular memoria sin validación, mezclando datos actuales con antiguos.</span>
                            </div>
                        </div>
                        <p className="highlight-warning">
                            Un sistema que no se audita se degrada. Toda memoria jurídica asistida debe tener reglas de actualización y control humano.
                        </p>
                    </article>
                </section>

                {/* Sección 8: Ideas clave */}
                <section id="ideas-clave" className="page__section">
                    <h2 className="page__section-title">8. Ideas clave para fijar</h2>
                    <article className="long-form-content">
                        <ul className="key-points">
                            <li>La automatización jurídica busca trabajar mejor y con menor riesgo, no solo trabajar menos.</li>
                            <li>La memoria asistida transforma experiencia en sistema.</li>
                            <li>Los sistemas bien diseñados protegen al abogado de errores evitables.</li>
                            <li>Gemini no piensa por el profesional, pero piensa con él a lo largo del tiempo.</li>
                        </ul>
                    </article>
                </section>

                {/* Sección 9: Conexión */}
                <section id="conexion" className="page__section">
                    <h2 className="page__section-title">9. Conexión con el sistema de estudio</h2>
                    <article className="long-form-content">
                        <p>
                            Esta unidad completa el <strong>Bloque 2</strong> mostrando cómo Gemini no solo explora y visualiza información, sino que la sostiene en el tiempo mediante seguimiento y memoria.
                        </p>
                        <p>
                            En el siguiente bloque, estas capacidades se integrarán con otras herramientas del ecosistema de IA para construir flujos completos, automatizados y escalables que exceden a una sola plataforma. Aquí se consolida el paso de herramienta a sistema.
                        </p>
                    </article>
                </section>

                {/* Footer de navegación */}
                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/gemini-u2" className="unit-nav-link">
                            <span className="unit-nav-label">← Módulo anterior</span>
                            <span className="unit-nav-title">M4 U2: Gemini Canvas</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <span className="next-title next-title--disabled">M4 Completo. Sigue al Módulo 5 →</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeminiM4U3

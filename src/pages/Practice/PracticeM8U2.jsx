import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'

function PracticeM8U2() {
    return (
        <div className="page">
            <header className="page__header">
                <span className="page__module-tag">Módulo 8 · Unidad 2</span>
                <h1 className="page__title">Diseño de flujos de trabajo con IA</h1>
                <p className="page__description">
                    Cómo pasar de una idea general de "uso de IA" a una estructura operativa sostenible.
                </p>
            </header>

            <div className="page__content">
                {/* Intro */}
                <section className="page__section">
                    <article className="long-form-content">
                        <p>
                            Una vez comprendida la diferencia entre usar herramientas aisladas y operar con sistemas, el siguiente paso lógico es aprender a <strong>diseñar flujos de trabajo</strong> que integren la inteligencia artificial de manera funcional y coherente.
                        </p>
                        <p>
                            Esta unidad se centra precisamente en ese punto: cómo pasar de una idea general de "uso de IA" a una <strong>estructura operativa</strong> que pueda sostenerse en el tiempo.
                        </p>
                    </article>
                </section>

                {/* Sección 1: Qué es un flujo */}
                <section id="flujo" className="page__section">
                    <h2 className="page__section-title">1. ¿Qué es un flujo de trabajo?</h2>
                    <article className="long-form-content">
                        <p>
                            Un flujo de trabajo puede entenderse como la <strong>secuencia ordenada de acciones</strong> que permiten transformar una necesidad profesional en un resultado concreto.
                        </p>
                        <p>En la práctica jurídica y profesional, estos flujos suelen repetirse:</p>
                        <ul className="application-list">
                            <li>Análisis de un caso</li>
                            <li>Producción de documentos</li>
                            <li>Comunicación con clientes</li>
                            <li>Investigación normativa</li>
                            <li>Generación de contenidos</li>
                            <li>Seguimiento de tareas</li>
                        </ul>
                        <div className="highlight-success">
                            El valor de la IA aparece cuando se la incorpora de forma consciente dentro de esas secuencias, y no como un agregado improvisado.
                        </div>
                    </article>
                </section>

                {/* Sección 2: No automatizar todo */}
                <section id="criterio" className="page__section">
                    <h2 className="page__section-title">2. No se trata de automatizar todo</h2>
                    <article className="long-form-content">
                        <p>
                            Diseñar un flujo con IA no consiste en automatizar todo. Por el contrario, exige identificar con claridad qué partes del proceso se benefician de la asistencia automatizada y cuáles requieren criterio humano.
                        </p>
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--good">
                                <h4>🤖 IA eficaz en:</h4>
                                <p>Exploración, síntesis, reformulación, estructuración inicial y apoyo creativo.</p>
                            </div>
                            <div className="comparison-box">
                                <h4>👤 Humano indelegable:</h4>
                                <p>Decisiones estratégicas, validación final y responsabilidad profesional.</p>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Sección 3: Partir del proceso */}
                <section id="proceso" className="page__section">
                    <h2 className="page__section-title">3. Partir del proceso, no de la herramienta</h2>
                    <article className="long-form-content">
                        <p>
                            Un error frecuente es comenzar el diseño desde la herramienta: "¿cómo uso tal modelo o tal aplicación?"
                        </p>
                        <blockquote className="concept-quote">
                            El enfoque correcto invierte esa lógica y parte del proceso.
                        </blockquote>
                        <p>Las preguntas correctas son:</p>
                        <ul className="application-list">
                            <li><strong>¿Qué necesito hacer?</strong></li>
                            <li><strong>¿Qué pasos lo componen?</strong></li>
                            <li><strong>¿Qué insumos entran y qué resultados espero en cada etapa?</strong></li>
                        </ul>
                        <div className="highlight-warning">
                            Recién después de responder esas preguntas tiene sentido decidir si la IA interviene y de qué manera.
                        </div>
                    </article>
                </section>

                {/* Sección 4: El prompt como pieza */}
                <section id="prompt" className="page__section">
                    <h2 className="page__section-title">4. El prompt como pieza del flujo</h2>
                    <article className="long-form-content">
                        <p>
                            En este contexto, el prompt deja de ser un texto aislado y pasa a funcionar como <strong>una pieza dentro de un flujo mayor</strong>.
                        </p>
                        <p>Cada prompt cumple una función específica:</p>
                        <ul className="application-list">
                            <li>Analizar información</li>
                            <li>Generar un borrador</li>
                            <li>Proponer alternativas</li>
                            <li>Verificar coherencia</li>
                            <li>Adaptar un texto a un destinatario concreto</li>
                        </ul>
                        <div className="highlight-success">
                            Pensar en términos de flujo permite diseñar prompts más precisos y reducir la improvisación.
                        </div>
                    </article>
                </section>

                {/* Sección 5: Modularidad */}
                <section id="modularidad" className="page__section">
                    <h2 className="page__section-title">5. Modularidad: la clave de la flexibilidad</h2>
                    <article className="long-form-content">
                        <p>
                            Un buen flujo de trabajo con IA se construye en <strong>módulos</strong> que pueden ajustarse, mejorarse o reemplazarse sin afectar todo el sistema.
                        </p>
                        <p>
                            Esto es especialmente importante en un entorno tecnológico cambiante, donde las herramientas evolucionan rápidamente.
                        </p>
                        <blockquote className="concept-quote">
                            El foco no está en la herramienta puntual, sino en la lógica del proceso.
                        </blockquote>
                    </article>
                </section>

                {/* Sección 6: Impacto organizacional */}
                <section id="impacto" className="page__section">
                    <h2 className="page__section-title">6. Impacto organizacional</h2>
                    <article className="long-form-content">
                        <p>
                            Desde una perspectiva profesional, diseñar flujos también implica considerar el <strong>impacto organizacional</strong>.
                        </p>
                        <p>Un flujo bien diseñado:</p>
                        <ul className="application-list">
                            <li>Reduce la carga cognitiva</li>
                            <li>Mejora la consistencia del trabajo</li>
                            <li>Libera tiempo para tareas de mayor valor estratégico</li>
                        </ul>
                        <div className="highlight-success">
                            En el caso del ejercicio independiente o de estudios pequeños, esto puede marcar una diferencia real en productividad y calidad del servicio.
                        </div>
                    </article>
                </section>

                {/* Sección 7: Colaborador estructurado */}
                <section id="colaborador" className="page__section">
                    <h2 className="page__section-title">7. IA como colaborador estructurado</h2>
                    <article className="long-form-content">
                        <p>
                            Esta unidad invita a pensar la IA como un <strong>colaborador estructurado</strong>, no como un asistente caótico.
                        </p>
                        <blockquote className="concept-quote">
                            El objetivo no es hacer más cosas, sino trabajar mejor, con mayor claridad sobre qué se delega, cómo se controla y dónde se interviene.
                        </blockquote>
                        <p>
                            Al finalizar esta unidad, el estudiante debería ser capaz de visualizar sus propias actividades profesionales como flujos, identificar puntos de mejora y comenzar a esbozar sistemas de trabajo donde la IA tenga un rol definido, controlado y alineado con sus objetivos.
                        </p>
                        <p>
                            En la próxima unidad, este diseño conceptual se traducirá en escenarios concretos de implementación, cerrando el pasaje definitivo de la teoría a la práctica real.
                        </p>
                    </article>
                </section>

                {/* Sección 7.5: Prompts para diseño de flujos */}
                <section id="prompts-flujos" className="page__section">
                    <h2 className="page__section-title">7.5. Prompts para diseño de flujos de trabajo</h2>
                    <article className="long-form-content">
                        <p>Estos prompts te ayudan a estructurar flujos específicos:</p>

                        <div className="component-card">
                            <div className="component-content">
                                <h4>📊 Mapeo de proceso actual</h4>
                                <blockquote className="prompt-example">
                                    Actuás como analista de procesos legales.<br /><br />

                                    Proceso a mapear: [ej: "atención de nueva consulta laboral"]<br /><br />

                                    Ayudame a documentar el flujo actual:<br />
                                    1. Listá todos los pasos desde el trigger inicial hasta el entregable final<br />
                                    2. Para cada paso, indicá: tiempo promedio, herramientas usadas, inputs y outputs<br />
                                    3. Identificá cuellos de botella y puntos de espera<br />
                                    4. Señalá decisiones que requieren criterio profesional<br />
                                    5. Destacá tareas repetitivas susceptibles de asistencia IA<br /><br />

                                    Formato: diagrama de flujo textual + tabla resumen.
                                </blockquote>
                            </div>
                        </div>

                        <div className="component-card">
                            <div className="component-content">
                                <h4>🔄 Diseño de flujo optimizado</h4>
                                <blockquote className="prompt-example">
                                    Actuás como diseñador de workflows legales asistidos por IA.<br /><br />

                                    Proceso actual mapeado: [pegar el análisis anterior]<br />
                                    Objetivo de mejora: [reducir tiempo / mejorar calidad / estandarizar]<br /><br />

                                    Diseñá un flujo optimizado que:<br />
                                    1. Integre IA en los puntos de mayor impacto<br />
                                    2. Mantenga control humano en las decisiones críticas<br />
                                    3. Sea implementable con herramientas accesibles (ChatGPT, Gemini, etc.)<br />
                                    4. Tenga puntos de validación claros<br />
                                    5. Pueda medirse con métricas simples<br /><br />

                                    Formato: flujo paso a paso + comparativa antes/después.
                                </blockquote>
                            </div>
                        </div>

                        <div className="component-card">
                            <div className="component-content">
                                <h4>⚡ Cadena de prompts para flujo completo</h4>
                                <blockquote className="prompt-example">
                                    Actuás como arquitecto de prompts jurídicos.<br /><br />

                                    Flujo a soportar: [describir el proceso optimizado]<br /><br />

                                    Creá una cadena de prompts donde cada uno:<br />
                                    1. Tenga un objetivo específico dentro del flujo<br />
                                    2. Reciba el output del paso anterior como input<br />
                                    3. Produzca un output claro para el siguiente paso<br />
                                    4. Incluya instrucciones de formato consistentes<br />
                                    5. Tenga checkpoints de validación humana donde corresponda<br /><br />

                                    Formato: secuencia numerada de prompts con descripción de conexión entre cada uno.
                                </blockquote>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Sección 7.6: Ejemplo de flujo completo */}
                <section id="ejemplo-flujo" className="page__section">
                    <h2 className="page__section-title">7.6. Ejemplo: Flujo de análisis de caso nuevo</h2>
                    <article className="long-form-content">
                        <h3>Flujo tradicional vs. Flujo con IA</h3>

                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Flujo tradicional</h4>
                                <ol>
                                    <li>Recibir documentación (email)</li>
                                    <li>Leer todos los documentos (2h)</li>
                                    <li>Tomar notas en papel</li>
                                    <li>Buscar jurisprudencia manual (1h)</li>
                                    <li>Redactar análisis (2h)</li>
                                    <li>Enviarlo al cliente (email)</li>
                                </ol>
                                <p><strong>Tiempo total: 5+ horas</strong></p>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>✅ Flujo optimizado con IA</h4>
                                <ol>
                                    <li>Recibir documentación</li>
                                    <li>Cargar en Gemini → resumen estructurado (15min)</li>
                                    <li>Prompt de análisis jurídico → borrador (10min)</li>
                                    <li>Búsqueda asistida de jurisprudencia (20min)</li>
                                    <li>Revisión y ajuste humano (30min)</li>
                                    <li>Prompt de comunicación a cliente (10min)</li>
                                </ol>
                                <p><strong>Tiempo total: ~1.5 horas</strong></p>
                            </div>
                        </div>

                        <h3>Cadena de prompts para este flujo</h3>
                        <div className="comparison-box comparison-box--good">
                            <div className="layer-diagram">
                                <div className="layer-step">
                                    <div className="layer-step__number">P1</div>
                                    <div className="layer-step__content">
                                        <h4>Prompt de síntesis documental</h4>
                                        <p>Input: documentos del caso → Output: resumen estructurado con hechos, actores, fechas</p>
                                    </div>
                                </div>
                                <div className="layer-connector">↓ Validación humana rápida</div>
                                <div className="layer-step">
                                    <div className="layer-step__number">P2</div>
                                    <div className="layer-step__content">
                                        <h4>Prompt de análisis jurídico</h4>
                                        <p>Input: resumen validado → Output: opciones legales, riesgos, recomendación</p>
                                    </div>
                                </div>
                                <div className="layer-connector">↓ Validación técnica</div>
                                <div className="layer-step">
                                    <div className="layer-step__number">P3</div>
                                    <div className="layer-step__content">
                                        <h4>Prompt de comunicación</h4>
                                        <p>Input: análisis validado → Output: texto para cliente en lenguaje claro</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="highlight-success">
                            <strong>Clave:</strong> Cada prompt tiene un propósito específico y el profesional valida entre pasos críticos.
                        </p>
                    </article>
                </section>

                {/* Sección 7.7: Templates de flujos */}
                <section id="templates-flujos" className="page__section">
                    <h2 className="page__section-title">7.7. Templates de flujos por tipo de tarea</h2>
                    <article className="long-form-content">
                        <div className="comparison-grid">
                            <div className="comparison-box">
                                <h4>📥 Flujo: Ingreso de caso nuevo</h4>
                                <ul>
                                    <li>Recepción → Análisis inicial → Viabilidad → Presupuesto → Apertura</li>
                                </ul>
                            </div>
                            <div className="comparison-box">
                                <h4>📝 Flujo: Producción de escritos</h4>
                                <ul>
                                    <li>Investigación → Estructura → Borrador → Revisión → Final</li>
                                </ul>
                            </div>
                        </div>

                        <div className="comparison-grid">
                            <div className="comparison-box">
                                <h4>⚖️ Flujo: Preparación de audiencia</h4>
                                <ul>
                                    <li>Análisis de expediente → Puntos clave → Preguntas → Simulación → Checklist</li>
                                </ul>
                            </div>
                            <div className="comparison-box">
                                <h4>📊 Flujo: Informe periódico a cliente</h4>
                                <ul>
                                    <li>Recopilación → Síntesis → Redacción → Revisión → Envío</li>
                                </ul>
                            </div>
                        </div>

                        <p className="highlight-warning">
                            <strong>Consejo:</strong> Empezá con el flujo que más repetís. Una vez dominado, aplicá la lógica a otros.
                        </p>
                    </article>
                </section>

                {/* Footer de navegación */}
                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/practice" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M8 U1: Del concepto al sistema</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/practice-u3" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Unidad 3 – Implementación práctica y validación →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PracticeM8U2

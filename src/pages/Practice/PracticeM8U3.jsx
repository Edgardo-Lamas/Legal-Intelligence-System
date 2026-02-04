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

                {/* Sección 6.5: Prompts de validación */}
                <section id="prompts-validacion" className="page__section">
                    <h2 className="page__section-title">6.5. Prompts para validación y control de calidad</h2>
                    <article className="long-form-content">
                        <p>Estos prompts te ayudan a validar los outputs de tu sistema:</p>

                        <div className="component-card">
                            <div className="component-content">
                                <h4>✅ Validación de análisis jurídico</h4>
                                <blockquote className="prompt-example">
                                    Actuás como revisor jurídico senior.<br /><br />

                                    Análisis a revisar: [pegar el análisis generado por IA]<br />
                                    Contexto del caso: [breve descripción]<br /><br />

                                    Revisá el análisis verificando:<br />
                                    1. ¿Las citas normativas son correctas y están vigentes?<br />
                                    2. ¿La jurisprudencia citada es real y aplicable?<br />
                                    3. ¿La argumentación es coherente y completa?<br />
                                    4. ¿Hay omisiones importantes o puntos ciegos?<br />
                                    5. ¿Las conclusiones derivan lógicamente de las premisas?<br /><br />

                                    Formato: lista de observaciones con [OK/REVISAR/CRÍTICO] para cada punto.
                                </blockquote>
                            </div>
                        </div>

                        <div className="component-card">
                            <div className="component-content">
                                <h4>📝 Validación de documento para cliente</h4>
                                <blockquote className="prompt-example">
                                    Actuás como editor de comunicaciones legales.<br /><br />

                                    Documento a revisar: [pegar el texto para cliente]<br />
                                    Perfil del destinatario: [cliente empresa / particular / técnico]<br /><br />

                                    Revisá el texto verificando:<br />
                                    1. ¿Es comprensible para el perfil del destinatario?<br />
                                    2. ¿Hay tecnicismos innecesarios que confunden?<br />
                                    3. ¿El tono es profesional pero accesible?<br />
                                    4. ¿Hay ambigüedades que puedan generar malentendidos?<br />
                                    5. ¿Las próximas acciones están claramente indicadas?<br /><br />

                                    Formato: versión corregida + lista de cambios realizados.
                                </blockquote>
                            </div>
                        </div>

                        <div className="component-card">
                            <div className="component-content">
                                <h4>🔍 Auditoría de sistema implementado</h4>
                                <blockquote className="prompt-example">
                                    Actuás como auditor de procesos legales asistidos por IA.<br /><br />

                                    Sistema implementado: [describir el flujo]<br />
                                    Período de uso: [X días/semanas]<br />
                                    Resultados observados: [listar outputs generados]<br /><br />

                                    Evaluá el sistema considerando:<br />
                                    1. ¿Los outputs cumplen con el estándar de calidad esperado?<br />
                                    2. ¿Los tiempos de proceso se redujeron según lo proyectado?<br />
                                    3. ¿Los puntos de control humano funcionan correctamente?<br />
                                    4. ¿Hay fallos recurrentes que requieran ajuste?<br />
                                    5. ¿El sistema es sostenible en el tiempo?<br /><br />

                                    Formato: informe con métricas + recomendaciones de mejora.
                                </blockquote>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Sección 6.6: Checklist de implementación */}
                <section id="checklist-implementacion" className="page__section">
                    <h2 className="page__section-title">6.6. Checklist de implementación progresiva</h2>
                    <article className="long-form-content">
                        <h3>Semana 1: Fundamentos</h3>
                        <div className="comparison-box comparison-box--good">
                            <ul>
                                <li>☐ Elegir UN proceso para sistematizar</li>
                                <li>☐ Mapear el flujo actual (tiempo, pasos, puntos críticos)</li>
                                <li>☐ Identificar dónde la IA puede agregar valor</li>
                                <li>☐ Definir puntos de control humano obligatorios</li>
                                <li>☐ Diseñar el flujo optimizado en papel</li>
                            </ul>
                        </div>

                        <h3>Semana 2: Implementación básica</h3>
                        <div className="comparison-box comparison-box--good">
                            <ul>
                                <li>☐ Crear los prompts necesarios para cada paso</li>
                                <li>☐ Probar el flujo con un caso real de bajo riesgo</li>
                                <li>☐ Documentar los ajustes necesarios</li>
                                <li>☐ Validar la calidad del output</li>
                                <li>☐ Medir tiempo real vs. tiempo proyectado</li>
                            </ul>
                        </div>

                        <h3>Semana 3: Refinamiento</h3>
                        <div className="comparison-box comparison-box--good">
                            <ul>
                                <li>☐ Aplicar el flujo a 3-5 casos reales</li>
                                <li>☐ Ajustar prompts según resultados</li>
                                <li>☐ Identificar casos límite que requieren manual</li>
                                <li>☐ Documentar el sistema final</li>
                                <li>☐ Definir métricas de seguimiento</li>
                            </ul>
                        </div>

                        <h3>Semana 4: Consolidación</h3>
                        <div className="comparison-box comparison-box--good">
                            <ul>
                                <li>☐ Evaluar resultados del mes</li>
                                <li>☐ Calcular ahorro real de tiempo</li>
                                <li>☐ Identificar próximo proceso a sistematizar</li>
                                <li>☐ Compartir aprendizajes (si trabajás en equipo)</li>
                                <li>☐ Planificar iteración del sistema</li>
                            </ul>
                        </div>
                    </article>
                </section>

                {/* Sección 6.7: Métricas de éxito */}
                <section id="metricas" className="page__section">
                    <h2 className="page__section-title">6.7. Cómo saber si tu sistema funciona</h2>
                    <article className="long-form-content">
                        <div className="comparison-grid">
                            <div className="comparison-box">
                                <h4>⏱️ Métricas de eficiencia</h4>
                                <ul>
                                    <li>Tiempo por proceso: antes vs. después</li>
                                    <li>Cantidad de pasos manuales eliminados</li>
                                    <li>Frecuencia de uso del sistema</li>
                                </ul>
                            </div>
                            <div className="comparison-box">
                                <h4>✅ Métricas de calidad</h4>
                                <ul>
                                    <li>Tasa de correcciones post-validación</li>
                                    <li>Consistencia de outputs</li>
                                    <li>Satisfacción del cliente (si aplica)</li>
                                </ul>
                            </div>
                        </div>

                        <div className="comparison-grid">
                            <div className="comparison-box">
                                <h4>🎯 Métricas de adopción</h4>
                                <ul>
                                    <li>% de casos donde se usa el sistema</li>
                                    <li>Tiempo hasta dominio del flujo</li>
                                    <li>Resistencia al cambio (si hay equipo)</li>
                                </ul>
                            </div>
                            <div className="comparison-box">
                                <h4>⚠️ Métricas de riesgo</h4>
                                <ul>
                                    <li>Errores que llegaron al cliente</li>
                                    <li>Fallos de validación detectados</li>
                                    <li>Casos donde el sistema no funcionó</li>
                                </ul>
                            </div>
                        </div>

                        <p className="highlight-success">
                            <strong>Regla de oro:</strong> Si el sistema te hace trabajar mejor (no solo más rápido), está funcionando.
                        </p>
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

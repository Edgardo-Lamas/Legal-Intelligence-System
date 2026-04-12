import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function PracticeM8U4() {
    return (
        <div className="page">
            <PageSEO
                title="Plan de 90 días: implementación paso a paso · M10 U4"
                description="El plan concreto para implementar tu sistema de IA jurídica en 90 días: qué hacer en las primeras semanas, cómo medir si funciona, y qué escalar primero."
                path="/practice-u4"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 10 · Unidad 4</span>
                <h1 className="page__title">Plan de 90 días: implementación paso a paso</h1>
                <p className="page__description">
                    El conocimiento sin implementación no transforma nada. Este es el plan
                    concreto para pasar de "sé cómo funciona" a "lo uso todos los días".
                </p>
            </header>

            <div className="page__content">

                <section id="principio" className="page__section">
                    <h2 className="page__section-title">1. El principio de los 90 días</h2>
                    <article className="long-form-content">
                        <p>
                            90 días es el tiempo mínimo para que un hábito nuevo se integre en
                            un flujo de trabajo profesional. No para aprenderlo — para que deje
                            de sentirse forzado y se vuelva natural. Para la IA en el estudio
                            jurídico, ese proceso tiene tres fases distintas:
                        </p>
                        <div className="comparison-grid">
                            <div className="comparison-box">
                                <h4>Días 1–30: Fundación</h4>
                                <p>Configurás las herramientas base. Empezás a usarlas en
                                tareas reales. El objetivo no es eficiencia — es familiaridad.</p>
                            </div>
                            <div className="comparison-box">
                                <h4>Días 31–60: Sistematización</h4>
                                <p>Lo que funcionó en el mes 1 lo convertís en proceso repetible.
                                Empezás a ver dónde agregar automatización.</p>
                            </div>
                            <div className="comparison-box">
                                <h4>Días 61–90: Escala</h4>
                                <p>Profundizás en lo que da resultado. Descartás lo que no.
                                Identificás el siguiente nivel de implementación.</p>
                            </div>
                        </div>
                    </article>
                </section>

                <section id="mes1" className="page__section">
                    <h2 className="page__section-title">2. Días 1–30: Fundación</h2>
                    <article className="long-form-content">

                        <h3>Semana 1: Configuración base</h3>
                        <div className="checklist-box">
                            <ul className="checklist">
                                <li>☐ Cuenta Claude Pro activa con primer Project creado para un caso real</li>
                                <li>☐ System prompt base para el asistente de comunicación con clientes</li>
                                <li>☐ Prompt guardado para el tipo de documento que más redactás</li>
                                <li>☐ NotebookLM con la normativa central de tu área de práctica</li>
                            </ul>
                        </div>

                        <h3>Semana 2: Primeros usos reales</h3>
                        <div className="checklist-box">
                            <ul className="checklist">
                                <li>☐ Usaste Claude Projects para analizar un expediente real</li>
                                <li>☐ Redactaste o revisaste un escrito con asistencia de IA</li>
                                <li>☐ Generaste al menos una comunicación a cliente con IA + revisión propia</li>
                                <li>☐ Usaste Perplexity para una búsqueda normativa o jurisprudencial</li>
                            </ul>
                        </div>

                        <h3>Semanas 3–4: Consolidar el hábito</h3>
                        <div className="checklist-box">
                            <ul className="checklist">
                                <li>☐ La IA es parte de tu flujo diario en al menos 2 tareas</li>
                                <li>☐ Identificaste las 3 tareas donde aporta más valor en tu práctica específica</li>
                                <li>☐ Publicaste en LinkedIn o enviaste primera comunicación de contenido</li>
                                <li>☐ Anotaste qué no funcionó para ajustar en el mes 2</li>
                            </ul>
                        </div>

                        <div className="highlight-warning">
                            <strong>El error más común del mes 1:</strong> querer implementar todo
                            a la vez. Elegí las dos herramientas más relevantes para tu tipo de
                            práctica y dominalas antes de agregar más. La profundidad en pocas
                            herramientas supera a la superficialidad en muchas.
                        </div>
                    </article>
                </section>

                <section id="mes2" className="page__section">
                    <h2 className="page__section-title">3. Días 31–60: Sistematización</h2>
                    <article className="long-form-content">

                        <h3>Semana 5–6: Convertir usos en procesos</h3>
                        <p>
                            Todo lo que hiciste en el mes 1 de forma ad hoc, ahora lo convertís
                            en proceso con nombre y pasos definidos:
                        </p>
                        <div className="flow-steps">
                            <div className="flow-step">
                                <strong>Proceso: Análisis de caso nuevo</strong> — cuando llega un
                                caso nuevo, los primeros pasos con IA son siempre estos: crear
                                Project, cargar documentos, ejecutar prompt de análisis inicial.
                            </div>
                            <div className="flow-step">
                                <strong>Proceso: Comunicación semanal con clientes activos</strong>
                                — los lunes, revisás novedades de la semana anterior y usás el
                                prompt de actualización para los clientes que tuvieron movimiento.
                            </div>
                            <div className="flow-step">
                                <strong>Proceso: Contenido mensual</strong> — primer viernes del
                                mes, generás el calendario de LinkedIn y el borrador de newsletter
                                con IA.
                            </div>
                        </div>

                        <h3>Semana 7–8: Primera automatización</h3>
                        <p>
                            Si identificaste una tarea repetitiva con estructura clara (siempre
                            los mismos pasos, siempre el mismo tipo de input), es momento de
                            automatizarla con n8n o Make. Candidatos frecuentes:
                        </p>
                        <ul className="application-list">
                            <li>Seguimiento semanal de causas: Sheets → Claude → email</li>
                            <li>Respuesta inicial a consultas web: formulario → Claude → email de clasificación</li>
                            <li>Generación de borrador de newsletter: trigger mensual → Claude → Google Doc</li>
                        </ul>
                    </article>
                </section>

                <section id="mes3" className="page__section">
                    <h2 className="page__section-title">4. Días 61–90: Escala</h2>
                    <article className="long-form-content">

                        <h3>Semana 9–10: Medir y descartar</h3>
                        <p>
                            ¿Qué herramientas y procesos te ahorran tiempo real? ¿Cuáles
                            prometían pero en la práctica no encajaron en tu flujo?
                            Descartá sin culpa — no todo funciona igual para todas las prácticas.
                        </p>
                        <div className="full-prompt-example">
                            <p>
                                "Llevás 60 días usando IA en tu práctica. Completá este diagnóstico:
                            </p>
                            <p>
                                (1) Las 3 tareas donde la IA me ahorró más tiempo o mejoró la calidad.
                                (2) Las 2 tareas donde probé y no funcionó bien (¿por qué?).
                                (3) Una tarea donde quiero profundizar en el próximo mes.
                                (4) Una herramienta que no exploré y creo que podría agregar valor.
                            </p>
                            <p>
                                Basado en este diagnóstico, generá recomendaciones específicas
                                para el mes 3."
                            </p>
                        </div>

                        <h3>Semana 11–12: El siguiente nivel</h3>
                        <p>
                            Según tu práctica y tu nivel de avance, el mes 3 puede llevar a:
                        </p>
                        <ul className="key-points">
                            <li>
                                <strong>MCP server propio:</strong> Si tenés un volumen alto de
                                consultas sobre normativa específica, vale considerar conectar
                                Claude a tu base de normas. (M5 U5)
                            </li>
                            <li>
                                <strong>Primer asistente público:</strong> Si identificaste una
                                pregunta frecuente de clientes, construir un asistente básico
                                con n8n + Claude API. (M5 U4)
                            </li>
                            <li>
                                <strong>Agente de investigación:</strong> Para trabajos intensivos
                                en investigación jurídica, configurar un agente multi-paso. (M7 U2)
                            </li>
                        </ul>
                    </article>
                </section>

                <section id="metricas" className="page__section">
                    <h2 className="page__section-title">5. Cómo saber si está funcionando</h2>
                    <article className="long-form-content">
                        <p>
                            Medí tres cosas simples al final de cada mes:
                        </p>
                        <div className="table-container">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Métrica</th>
                                        <th>Cómo medirla</th>
                                        <th>Señal de éxito</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Tiempo por tarea</td>
                                        <td>Estimación honesta de horas por semana en las tareas sistematizadas</td>
                                        <td>Reducción del 30-50% vs. mes 0</td>
                                    </tr>
                                    <tr>
                                        <td>Calidad percibida</td>
                                        <td>Feedback de clientes, tasa de revisiones en documentos</td>
                                        <td>Menos idas y vueltas, más aprobaciones en primera versión</td>
                                    </tr>
                                    <tr>
                                        <td>Contenido publicado</td>
                                        <td>Posts en LinkedIn, artículos de blog, emails enviados</td>
                                        <td>Al menos 4 publicaciones por mes sostenidas</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </article>
                </section>

                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/practice-u3" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M10 U3: Implementación y validación</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/practice-u5" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            U5 – Escalá: de usuario a arquitecto de IA jurídica →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PracticeM8U4

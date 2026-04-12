import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function EcosystemM5U1() {
    return (
        <div className="page">
            <PageSEO
                title="El ecosistema IA del abogado argentino 2025 · M6 U1"
                description="Mapa completo de herramientas de IA disponibles hoy para abogados en Argentina: modelos de lenguaje, automatización, investigación, herramientas jurídicas especializadas y cómo armar tu stack real."
                path="/ecosystem"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 6 · Unidad 1</span>
                <h1 className="page__title">El ecosistema IA del abogado argentino 2025</h1>
                <p className="page__description">
                    No existe una sola herramienta que haga todo bien. Existe un stack de herramientas
                    que, combinadas con criterio, transforma la práctica jurídica.
                </p>
            </header>

            <div className="page__content">

                <section id="landscape" className="page__section">
                    <h2 className="page__section-title">1. El paisaje actual</h2>
                    <article className="long-form-content">
                        <p>
                            En 2025, el abogado argentino tiene acceso a más herramientas de IA que nunca —
                            y eso crea el problema opuesto al de hace dos años: ya no es la escasez, sino
                            la sobreoferta lo que paraliza. ¿Cuál usar? ¿Para qué tarea? ¿Vale la pena
                            pagar por varias?
                        </p>
                        <p>
                            Este módulo da respuestas concretas. No una revisión exhaustiva de todo lo que
                            existe — eso cambia cada mes. Sino un mapa operativo de <strong>las categorías
                            de herramientas que importan</strong> y qué lugar ocupa cada una en el flujo
                            de trabajo jurídico real.
                        </p>
                        <blockquote className="concept-quote">
                            El error no es usar pocas herramientas. Es usar muchas sin saber qué hace
                            cada una mejor que las demás. Un stack de tres herramientas bien elegidas
                            supera a diez usadas indistintamente.
                        </blockquote>
                    </article>
                </section>

                <section id="categorias" className="page__section">
                    <h2 className="page__section-title">2. Las categorías del ecosistema</h2>
                    <article className="long-form-content">

                        <h3>Categoría 1: Modelos de lenguaje generales (LLMs)</h3>
                        <p>
                            Claude, ChatGPT y Gemini — la tríada del Módulo 1. Son el núcleo del
                            ecosistema. Todo lo demás se apoya en ellos o los complementa.
                        </p>
                        <ul className="application-list">
                            <li><strong>Claude Sonnet/Opus:</strong> Análisis, redacción, proyectos largos, Extended Thinking</li>
                            <li><strong>ChatGPT GPT-4o / o3:</strong> Razonamiento, búsqueda web, Custom GPTs</li>
                            <li><strong>Gemini 2.5 Pro:</strong> Deep Research, contexto 2M, integración Google Workspace</li>
                        </ul>

                        <h3>Categoría 2: Investigación aumentada</h3>
                        <p>
                            Herramientas que van más allá del chat para hacer investigación real con fuentes verificables.
                        </p>
                        <ul className="application-list">
                            <li><strong>Perplexity Pro:</strong> Búsqueda con citas verificables en tiempo real</li>
                            <li><strong>Gemini Deep Research:</strong> Investigación autónoma de múltiples fuentes</li>
                            <li><strong>NotebookLM:</strong> Base de conocimiento propia con IA — tus documentos, tu jurisprudencia</li>
                        </ul>

                        <h3>Categoría 3: Automatización sin código</h3>
                        <p>
                            Herramientas para conectar tus aplicaciones y crear flujos de trabajo automáticos
                            sin necesidad de programar.
                        </p>
                        <ul className="application-list">
                            <li><strong>n8n:</strong> Open source, self-hosted o cloud, más flexible y técnico</li>
                            <li><strong>Make (ex-Integromat):</strong> Visual, cloud, gran biblioteca de integraciones</li>
                            <li><strong>Zapier:</strong> El más simple, menor curva de aprendizaje, más limitado</li>
                        </ul>

                        <h3>Categoría 4: IA jurídica especializada</h3>
                        <p>
                            Herramientas entrenadas o configuradas específicamente para trabajo legal.
                        </p>
                        <ul className="application-list">
                            <li><strong>Harvey AI:</strong> LLM jurídico, integración con Westlaw y bases de datos legales</li>
                            <li><strong>CoCounsel (Thomson Reuters):</strong> Revisión documental, research, redacción</li>
                            <li><strong>Alcance Legal:</strong> Asistente especializado en CPP PBA — caso práctico de este ecosistema</li>
                        </ul>
                    </article>
                </section>

                <section id="stack" className="page__section">
                    <h2 className="page__section-title">3. Tu stack mínimo viable para 2025</h2>
                    <article className="long-form-content">
                        <p>
                            Para un abogado independiente o estudio pequeño en Argentina, el stack
                            que cubre el 90% de los casos de uso con el menor costo:
                        </p>
                        <div className="table-container">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Herramienta</th>
                                        <th>Para qué</th>
                                        <th>Costo mensual</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Claude Pro</strong></td>
                                        <td>Redacción, análisis, Projects, agentes</td>
                                        <td>~$20 USD</td>
                                    </tr>
                                    <tr>
                                        <td><strong>ChatGPT Plus</strong></td>
                                        <td>Deep Research, búsqueda web, o3 para razonamiento</td>
                                        <td>~$20 USD</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Gemini Advanced</strong></td>
                                        <td>Deep Research masivo, Google Workspace</td>
                                        <td>~$20 USD (incluido con Workspace)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Perplexity Pro</strong></td>
                                        <td>Búsqueda jurídica verificada con citas</td>
                                        <td>~$20 USD</td>
                                    </tr>
                                    <tr>
                                        <td><strong>NotebookLM</strong></td>
                                        <td>Base propia de jurisprudencia y doctrina</td>
                                        <td>Gratis (Plus: ~$20 USD)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>n8n (cloud starter)</strong></td>
                                        <td>Automatización de flujos semanales</td>
                                        <td>~$20 USD</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="highlight-success">
                            <strong>Costo total del stack completo: ~$80–100 USD/mes.</strong> Para el abogado
                            que lo usa bien, ese costo se recupera en las primeras 2-3 horas de trabajo
                            que el stack le ahorra cada semana.
                        </div>
                        <p>
                            Si recién empezás: Claude Pro + ChatGPT Plus + NotebookLM gratuito.
                            Eso cubre el 70% sin gastar en automatización todavía.
                        </p>
                    </article>
                </section>

                <section id="integracion" className="page__section">
                    <h2 className="page__section-title">4. Cómo piensar la integración</h2>
                    <article className="long-form-content">
                        <p>
                            Las herramientas del ecosistema no se usan de forma aislada — se conectan
                            en flujos de trabajo. Un caso típico complejo (causa nueva, análisis + redacción):
                        </p>
                        <div className="flow-steps">
                            <div className="flow-step">
                                <strong>Perplexity Pro</strong> — Investigación inicial con fuentes verificables.
                                "¿Cuál es el estado jurisprudencial actual sobre [tema] en PBA?"
                            </div>
                            <div className="flow-step">
                                <strong>Gemini Deep Research</strong> — Investigación en profundidad sobre
                                los puntos identificados por Perplexity. Síntesis de doctrina y fallos.
                            </div>
                            <div className="flow-step">
                                <strong>NotebookLM</strong> — Cargás el informe de Gemini + tus propios
                                documentos de la causa. Creás una base de conocimiento del caso.
                            </div>
                            <div className="flow-step">
                                <strong>Claude Projects</strong> — Con el brief del caso y el material
                                investigado, ejecutás el pipeline de redacción de 5 etapas (M7 U3).
                            </div>
                            <div className="flow-step">
                                <strong>n8n (opcional)</strong> — Si este tipo de causa es frecuente,
                                automatizás el trigger del proceso para que se ejecute semanalmente.
                            </div>
                        </div>
                        <p>
                            Cada herramienta hace una cosa bien. El abogado orquesta el flujo.
                            Este módulo cubre cada pieza de ese flujo en detalle.
                        </p>
                    </article>
                </section>

                <section id="checklist" className="page__section">
                    <h2 className="page__section-title">5. Checklist de esta unidad</h2>
                    <article className="long-form-content">
                        <div className="checklist-box">
                            <ul className="checklist">
                                <li>☐ Entiendo las 4 categorías del ecosistema IA jurídico</li>
                                <li>☐ Identifiqué qué herramientas ya uso y cuáles me faltan</li>
                                <li>☐ Definí mi stack mínimo viable para los próximos 3 meses</li>
                                <li>☐ Entiendo el flujo de integración entre herramientas</li>
                            </ul>
                        </div>
                    </article>
                </section>

                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/gemini-u3" className="unit-nav-link">
                            <span className="unit-nav-label">← Módulo anterior</span>
                            <span className="unit-nav-title">M4 U3: Automatización y memoria con Gemini</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/ecosystem-u2" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            U2 – n8n y Make: automatización sin código →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EcosystemM5U1

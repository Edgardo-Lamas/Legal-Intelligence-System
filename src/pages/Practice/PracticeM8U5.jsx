import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function PracticeM8U5() {
    return (
        <div className="page">
            <PageSEO
                title="Escalá: de usuario a arquitecto de IA jurídica · M10 U5"
                description="El cierre del curso: cómo pasar de usar herramientas de IA a diseñar sistemas y construir herramientas propias — y qué significa ser arquitecto de IA jurídica en 2025."
                path="/practice-u5"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 10 · Unidad 5</span>
                <h1 className="page__title">Escalá: de usuario a arquitecto de IA jurídica</h1>
                <p className="page__description">
                    El final del curso no es un punto de llegada. Es el punto desde donde
                    empieza algo diferente.
                </p>
            </header>

            <div className="page__content">

                <section id="progresion" className="page__section">
                    <h2 className="page__section-title">1. La progresión real del abogado con IA</h2>
                    <article className="long-form-content">
                        <p>
                            Hay cuatro niveles de relación con la IA en la práctica jurídica.
                            No son etapas que todo el mundo transita en orden ni que todo el
                            mundo necesita alcanzar todas:
                        </p>
                        <div className="flow-steps">
                            <div className="flow-step">
                                <strong>Nivel 1 — Usuario:</strong> Usás ChatGPT o Claude para
                                tareas puntuales. Cada vez que necesitás algo, lo pedís desde cero.
                                Ganás eficiencia en momentos específicos pero sin sistema.
                            </div>
                            <div className="flow-step">
                                <strong>Nivel 2 — Practicante sistemático:</strong> Tenés prompts
                                guardados, Projects configurados, flujos repetibles. La IA está
                                integrada en tu rutina. El tiempo ahorrado es constante y medible.
                            </div>
                            <div className="flow-step">
                                <strong>Nivel 3 — Diseñador de sistemas:</strong> Configurás
                                automatizaciones (n8n, Make), conectás herramientas entre sí,
                                diseñás flujos que no requieren tu intervención en cada paso.
                                Empezás a escalar sin escalar horas.
                            </div>
                            <div className="flow-step">
                                <strong>Nivel 4 — Arquitecto:</strong> Construís herramientas
                                propias — asistentes con API, sistemas con MCP, productos que
                                podés ofrecer a otros. La IA pasa de ser una herramienta a ser
                                parte de tu propuesta de valor diferenciada.
                            </div>
                        </div>
                        <blockquote className="concept-quote">
                            No hay nivel "correcto". Un abogado en nivel 2 que ahorró 10 horas
                            semanales y las invirtió en más clientes tiene más impacto real que
                            uno que llegó al nivel 4 y no lo usa cotidianamente.
                        </blockquote>
                    </article>
                </section>

                <section id="arquitecto" className="page__section">
                    <h2 className="page__section-title">2. Qué significa ser arquitecto de IA jurídica</h2>
                    <article className="long-form-content">
                        <p>
                            El arquitecto de IA jurídica no necesita saber programar.
                            Necesita saber hacer tres cosas que este curso enseñó:
                        </p>
                        <ul className="key-points">
                            <li>
                                <strong>Identificar el problema correcto.</strong> No "cómo uso la
                                IA" sino "qué problema específico de mi práctica resolvería si
                                tuviera [capacidad X]". El 80% del trabajo de diseño es esto.
                            </li>
                            <li>
                                <strong>Conectar herramientas disponibles.</strong> Claude API +
                                Supabase + n8n + una interfaz ya son suficientes para construir
                                la mayoría de los asistentes jurídicos que un estudio necesita.
                                Sin código propio.
                            </li>
                            <li>
                                <strong>Evaluar y validar resultados.</strong> Un sistema de IA
                                que da respuestas plausibles pero incorrectas es peor que no tener
                                sistema. La capacidad de revisión jurídica es lo que hace que
                                el resultado sea confiable.
                            </li>
                        </ul>
                    </article>
                </section>

                <section id="alcance-legal" className="page__section">
                    <h2 className="page__section-title">3. Alcance Legal como modelo de referencia</h2>
                    <article className="long-form-content">
                        <p>
                            Los asistentes Alcance Legal — el widget de consultas sobre el CPP PBA
                            y su gemelo en derecho civil — son ejemplos concretos del nivel 4.
                            Construidos sobre la arquitectura que aprendiste en este curso:
                        </p>
                        <ul className="application-list">
                            <li><strong>Claude API</strong> con system prompt especializado (M5 U4)</li>
                            <li><strong>MCP server en Supabase</strong> conectado al texto legal oficial (M5 U5)</li>
                            <li><strong>Interfaz React</strong> integrada en el sitio (sin programación manual — generada con herramientas como Bolt.new)</li>
                            <li><strong>Modelo de negocio:</strong> acceso gratuito limitado + suscripción premium para acceso completo</li>
                        </ul>
                        <p>
                            Ese modelo es replicable para cualquier área de práctica con normativa
                            específica: CPP federal, Código Civil y Comercial por materia, Código
                            Aduanero, normativa de BCRA para estudio bancario, LCT para estudio
                            laboral. El patrón es el mismo.
                        </p>
                        <div className="highlight-success">
                            <strong>El paso de usuario a arquitecto no requiere ser técnico.</strong>
                            Requiere tener claro qué herramienta construir, para qué problema,
                            y para quién — y saber briefear a quien lo construye técnicamente.
                            Eso sí lo aprendiste en este curso.
                        </div>
                    </article>
                </section>

                <section id="siguiente" className="page__section">
                    <h2 className="page__section-title">4. El siguiente paso es tuyo</h2>
                    <article className="long-form-content">
                        <p>
                            Al terminar este curso tenés:
                        </p>
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--good">
                                <h4>Herramientas dominadas</h4>
                                <ul>
                                    <li>Claude con Projects, Extended Thinking, Artifacts, API</li>
                                    <li>Gemini con Deep Research y Google Workspace</li>
                                    <li>ChatGPT para redacción y análisis</li>
                                    <li>NotebookLM para bases de conocimiento</li>
                                    <li>Perplexity para búsqueda verificable</li>
                                    <li>n8n para automatización</li>
                                </ul>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>Sistemas en operación</h4>
                                <ul>
                                    <li>Flujo de análisis de casos</li>
                                    <li>Proceso de redacción asistida</li>
                                    <li>Comunicación con clientes sistematizada</li>
                                    <li>Presencia de contenido (LinkedIn, blog, newsletter)</li>
                                    <li>Al menos una automatización funcionando</li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            Lo que viene depende de a dónde querés llevar tu práctica. Pero
                            la diferencia entre el abogado que terminó este curso y el que no
                            lo hizo no es de herramientas — es de perspectiva. Uno ve la IA
                            como algo externo que adoptar. El otro la ve como parte de cómo
                            ejerce el derecho.
                        </p>
                        <blockquote className="concept-quote">
                            La abogacía no va a ser reemplazada por la IA. Va a ser ejercida
                            de forma diferente por quienes sepan usarla — y de la misma forma
                            de siempre por quienes no.
                        </blockquote>
                    </article>
                </section>

                <section id="checklist-final" className="page__section">
                    <h2 className="page__section-title">5. Checklist de cierre del curso</h2>
                    <article className="long-form-content">
                        <div className="checklist-box">
                            <ul className="checklist">
                                <li>☐ Tengo al menos un sistema de IA funcionando en mi práctica cotidiana</li>
                                <li>☐ Ahorré tiempo real y medible en al menos 2 tipos de tarea</li>
                                <li>☐ Tengo presencia de contenido activa en al menos un canal</li>
                                <li>☐ Identifiqué el próximo nivel al que quiero llevar mi implementación</li>
                                <li>☐ Sé qué herramientas necesito para ese próximo nivel y qué me falta aprender</li>
                                <li>☐ Entiendo la diferencia entre usar IA y diseñar sistemas con IA</li>
                            </ul>
                        </div>
                        <div className="highlight-success">
                            <strong>Fin del curso Legal Intelligence System.</strong> Lo que
                            construiste en estos 10 módulos es la base. Lo que construís a partir
                            de acá es el edificio. Éxito.
                        </div>
                    </article>
                </section>

                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/practice-u4" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M10 U4: Plan de 90 días</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--done">✓ Curso completo</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Volvé al inicio:</span>
                        <Link to="/overview" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Inicio del curso →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PracticeM8U5

import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function FoundationsM1U5() {
    return (
        <div className="page">
            <PageSEO
                title="La tríada en práctica: tabla de decisión Claude, Gemini, ChatGPT · M1 U5"
                description="Guía de decisión práctica para elegir entre Claude, Gemini y ChatGPT según cada tarea jurídica. Flujos de trabajo combinados y configuración del ecosistema."
                path="/foundations-u5"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 1 · Unidad 5</span>
                <h1 className="page__title">La tríada en práctica</h1>
                <p className="page__description">
                    Tabla de decisión completa: cuándo usar Claude, cuándo Gemini, cuándo ChatGPT — y cómo combinarlos para cada tipo de trabajo jurídico.
                </p>
            </header>

            <div className="page__content">

                {/* Sección 1 */}
                <section id="filosofia" className="page__section">
                    <h2 className="page__section-title">1. El abogado avanzado no elige uno</h2>
                    <article className="long-form-content">
                        <p>
                            Después de estudiar los tres modelos por separado, la pregunta correcta no es cuál usar,
                            sino <strong>cuándo usar cuál</strong>. Los tres tienen fortalezas reales y ninguno
                            domina en todas las tareas. El profesional que entiende esto construye un flujo de trabajo
                            donde cada herramienta hace lo que mejor sabe hacer.
                        </p>
                        <blockquote className="concept-quote">
                            No se trata de lealtad a una plataforma. Se trata de resultados. Un caso bien trabajado
                            puede haber pasado por Gemini, Claude y ChatGPT en distintas etapas — y eso está bien.
                        </blockquote>
                    </article>
                </section>

                {/* Sección 2: Tabla maestra */}
                <section id="tabla" className="page__section">
                    <h2 className="page__section-title">2. Tabla de decisión por tarea jurídica</h2>
                    <article className="long-form-content">
                        <div className="table-container">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Tarea</th>
                                        <th>Mejor opción</th>
                                        <th>Segunda opción</th>
                                        <th>Por qué</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Análisis de expediente completo (+100 págs)</td>
                                        <td><strong>Gemini</strong></td>
                                        <td>Claude</td>
                                        <td>Ventana 2M tokens, carga el expediente entero</td>
                                    </tr>
                                    <tr>
                                        <td>Análisis jurídico profundo (argumentación)</td>
                                        <td><strong>Claude Sonnet/Opus</strong></td>
                                        <td>ChatGPT o1</td>
                                        <td>Razonamiento más cuidadoso, menor alucinación</td>
                                    </tr>
                                    <tr>
                                        <td>Redacción de demanda o escrito</td>
                                        <td><strong>Claude</strong></td>
                                        <td>ChatGPT</td>
                                        <td>Sigue instrucciones de estilo sin degradación</td>
                                    </tr>
                                    <tr>
                                        <td>Investigación doctrinal y jurisprudencial</td>
                                        <td><strong>Gemini Deep Research</strong></td>
                                        <td>Perplexity</td>
                                        <td>Búsqueda autónoma con fuentes verificables</td>
                                    </tr>
                                    <tr>
                                        <td>Estrategia de caso y teoría del hecho</td>
                                        <td><strong>Claude Opus</strong></td>
                                        <td>ChatGPT o1</td>
                                        <td>Extended thinking, razonamiento multi-paso</td>
                                    </tr>
                                    <tr>
                                        <td>Preparación de interrogatorios</td>
                                        <td><strong>Claude</strong></td>
                                        <td>ChatGPT</td>
                                        <td>Mejor para "abogado del diablo" y contra-análisis</td>
                                    </tr>
                                    <tr>
                                        <td>Gestión de múltiples causas activas</td>
                                        <td><strong>Claude Projects</strong></td>
                                        <td>ChatGPT Projects</td>
                                        <td>Memoria persistente por causa, instrucciones por proyecto</td>
                                    </tr>
                                    <tr>
                                        <td>Análisis de contratos y cláusulas</td>
                                        <td><strong>Claude</strong></td>
                                        <td>ChatGPT</td>
                                        <td>Compara cláusula, problema y alternativa en una respuesta</td>
                                    </tr>
                                    <tr>
                                        <td>Resumen rápido de actuación</td>
                                        <td><strong>ChatGPT / Claude Haiku</strong></td>
                                        <td>Gemini Flash</td>
                                        <td>Velocidad, no necesita razonamiento profundo</td>
                                    </tr>
                                    <tr>
                                        <td>Comunicación con clientes (cartas, emails)</td>
                                        <td><strong>Claude</strong></td>
                                        <td>ChatGPT</td>
                                        <td>Tono más cuidadoso, menos propenso a exagerar</td>
                                    </tr>
                                    <tr>
                                        <td>Trabajo integrado con Google Workspace</td>
                                        <td><strong>Gemini</strong></td>
                                        <td>—</td>
                                        <td>Integración nativa Docs/Drive/Gmail</td>
                                    </tr>
                                    <tr>
                                        <td>Asistente jurídico especializado (herramienta propia)</td>
                                        <td><strong>Claude API + MCP</strong></td>
                                        <td>ChatGPT Custom GPTs</td>
                                        <td>Sistema de prompt robusto, menor alucinación, MCP</td>
                                    </tr>
                                    <tr>
                                        <td>Verificar citas y fuentes</td>
                                        <td><strong>Ninguno solo</strong></td>
                                        <td>Perplexity</td>
                                        <td>Verificación humana obligatoria. Los tres alucinan.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </article>
                </section>

                {/* Sección 3: Flujo por tipo de trabajo */}
                <section id="flujos" className="page__section">
                    <h2 className="page__section-title">3. Flujos de trabajo combinados</h2>
                    <article className="long-form-content">

                        <h3>Flujo A: Causas civiles o laborales de mediana complejidad</h3>
                        <div className="flow-steps">
                            <div className="flow-step">
                                <strong>1. Ingesta del expediente → GEMINI</strong><br />
                                Subís el expediente completo. Pedís: cronología, hechos clave, pretensiones de cada parte.
                            </div>
                            <div className="flow-step">
                                <strong>2. Investigación de doctrina y jurisprudencia → GEMINI DEEP RESEARCH</strong><br />
                                Con el resumen del paso 1, Gemini investiga qué dice la doctrina y la jurisprudencia sobre el punto central del caso.
                            </div>
                            <div className="flow-step">
                                <strong>3. Análisis jurídico profundo → CLAUDE</strong><br />
                                Le cargás el resumen del expediente + la investigación. Claude analiza, identifica el argumento más sólido, y anticipa contra-argumentos.
                            </div>
                            <div className="flow-step">
                                <strong>4. Redacción del escrito → CLAUDE</strong><br />
                                Claude redacta sobre la base de su propio análisis, con tus instrucciones de estilo y formato.
                            </div>
                            <div className="flow-step">
                                <strong>5. Verificación de citas → VOS</strong><br />
                                Revisás todas las citas normativas y jurisprudenciales en las fuentes originales antes de presentar.
                            </div>
                        </div>

                        <h3>Flujo B: Análisis de contrato para cliente empresario</h3>
                        <div className="flow-steps">
                            <div className="flow-step">
                                <strong>1. Carga del contrato → CLAUDE PROJECT</strong><br />
                                Creás un Project específico para el cliente. Subís el contrato + instrucciones sobre el perfil del cliente y sus intereses.
                            </div>
                            <div className="flow-step">
                                <strong>2. Análisis de riesgos → CLAUDE</strong><br />
                                Pedís: identificá todas las cláusulas que generan riesgo para mi cliente, clasificalas por nivel de riesgo, y proponé redacción alternativa para cada una.
                            </div>
                            <div className="flow-step">
                                <strong>3. Investigación de estándares del mercado → GEMINI</strong><br />
                                Confirmás si las cláusulas problemáticas son estándar en el mercado o si son inusualmente perjudiciales.
                            </div>
                            <div className="flow-step">
                                <strong>4. Informe para el cliente → CLAUDE</strong><br />
                                Pedís a Claude que redacte un informe claro, en lenguaje no técnico, explicando los riesgos identificados y las opciones.
                            </div>
                        </div>

                        <h3>Flujo C: Preparación de juicio oral</h3>
                        <div className="flow-steps">
                            <div className="flow-step">
                                <strong>1. Síntesis del expediente → GEMINI</strong><br />
                                Todo el expediente en contexto. Cronología completa, declaraciones, pericias, documentos clave.
                            </div>
                            <div className="flow-step">
                                <strong>2. Teoría del caso y puntos débiles → CLAUDE OPUS</strong><br />
                                Le presentás tu teoría del caso. Le pedís que la ataque como abogado de la contraparte. Identificás los puntos débiles antes del juicio.
                            </div>
                            <div className="flow-step">
                                <strong>3. Interrogatorio directo y repregunta → CLAUDE</strong><br />
                                Diseñás las preguntas para tus testigos. Pedís a Claude que simule respuestas adversas y te ayude a reformular.
                            </div>
                            <div className="flow-step">
                                <strong>4. Alegato de cierre → CLAUDE</strong><br />
                                Sobre la base del análisis completo, Claude te ayuda a estructurar el alegato con los puntos de mayor impacto probatorio.
                            </div>
                        </div>
                    </article>
                </section>

                {/* Sección 4: Costos */}
                <section id="costos" className="page__section">
                    <h2 className="page__section-title">4. Inversión mensual: qué planes necesitás</h2>
                    <article className="long-form-content">
                        <div className="table-container">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Herramienta</th>
                                        <th>Plan mínimo</th>
                                        <th>Costo/mes</th>
                                        <th>Qué incluye</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Claude</td>
                                        <td>Pro</td>
                                        <td>USD 20</td>
                                        <td>Sonnet + Opus, Projects, 200K contexto</td>
                                    </tr>
                                    <tr>
                                        <td>Gemini</td>
                                        <td>Advanced</td>
                                        <td>USD 20</td>
                                        <td>Gemini 2.5 Pro, Deep Research, Google Workspace</td>
                                    </tr>
                                    <tr>
                                        <td>ChatGPT</td>
                                        <td>Plus</td>
                                        <td>USD 20</td>
                                        <td>GPT-4o, o1, Custom GPTs</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="highlight-success">
                            <strong>Total: USD 60/mes.</strong> Menos que una hora de trabajo profesional.
                            Si empezás con presupuesto ajustado, priorizá Claude Pro primero, después Gemini Advanced.
                            ChatGPT puede esperar si ya tenés los dos anteriores.
                        </div>

                        <h3>Configuración mínima viable (sólo Claude)</h3>
                        <p>
                            Si querés empezar con una sola suscripción, Claude Pro + acceso gratuito a Gemini
                            (sin Deep Research) cubre el 80% de los casos. Las limitaciones: no podés hacer
                            investigación doctrinal profunda con Deep Research y tenés límite en la ingesta de
                            expedientes muy largos. Aun así, es un punto de partida completamente funcional.
                        </p>
                    </article>
                </section>

                {/* Sección 5: Reglas de oro */}
                <section id="reglas" className="page__section">
                    <h2 className="page__section-title">5. Las 5 reglas de oro de la tríada</h2>
                    <article className="long-form-content">
                        <ul className="key-points">
                            <li>
                                <strong>Nunca subas al modelo equivocado.</strong> Expediente de 200 páginas a ChatGPT
                                = análisis incompleto porque no cabe. Tarea de razonamiento profundo a Gemini Flash
                                = respuesta superficial. El modelo correcto para el volumen correcto.
                            </li>
                            <li>
                                <strong>Verificá todas las citas, siempre.</strong> Los tres modelos alucinan jurisprudencia.
                                Claude es el más honesto al respecto, pero no es infalible. Toda cita que vayas a usar
                                en un escrito va a la fuente original.
                            </li>
                            <li>
                                <strong>El razonamiento es tuyo, la ejecución es de ellos.</strong> Usá los modelos para
                                ejecutar tus ideas con mayor velocidad y calidad. La estrategia del caso, la valoración
                                del riesgo y la decisión final son tuyas.
                            </li>
                            <li>
                                <strong>Documentos sin datos de identificación de clientes.</strong> Antes de subir
                                un expediente, anonimizá: reemplazá nombres por "el actor", "la demandada", fechas
                                exactas de nacimiento si no son relevantes, DNI, domicilios.
                            </li>
                            <li>
                                <strong>Un Project por causa en Claude.</strong> No mezcles causas en la misma conversación.
                                La contaminación de contexto es uno de los errores más frecuentes y costosos.
                            </li>
                        </ul>
                    </article>
                </section>

                {/* Checklist */}
                <section id="checklist" className="page__section">
                    <h2 className="page__section-title">6. Checklist de cierre del Módulo 1</h2>
                    <article className="long-form-content">
                        <div className="checklist-box">
                            <h3>Antes de pasar al Módulo 2, confirmá:</h3>
                            <ul className="checklist">
                                <li>☐ Entiendo qué es la IA generativa y cómo funciona en términos generales</li>
                                <li>☐ Sé cuándo usar ChatGPT, cuándo Gemini y cuándo Claude</li>
                                <li>☐ Entiendo las limitaciones de los tres modelos (alucinación, fecha de corte, jurisdicción)</li>
                                <li>☐ Tengo al menos Claude Pro activo</li>
                                <li>☐ Creé mi primer Project en Claude con instrucciones base</li>
                                <li>☐ Probé al menos un flujo de trabajo combinado con dos modelos</li>
                                <li>☐ Entiendo que la verificación de citas es mi responsabilidad, no del modelo</li>
                            </ul>
                        </div>
                    </article>
                </section>

                {/* Navegación */}
                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/foundations-u4" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M1 U4: Claude, el tercer modelo</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--complete">✓ Módulo 1 completo</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próximo módulo:</span>
                        <Link to="/prompt-engineering" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Módulo 2 – Prompt Engineering para abogados →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoundationsM1U5

import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function AgentsM7U1() {
    return (
        <div className="page">
            <PageSEO
                title="Qué es un agente IA y cómo piensa un flujo agéntico · M7 U1"
                description="Diferencia entre un chat con IA y un agente IA real. Componentes, tipos de agentes y cuándo tiene sentido usarlos en la práctica jurídica argentina."
                path="/agents"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 7 · Unidad 1</span>
                <h1 className="page__title">Qué es un agente IA</h1>
                <p className="page__description">
                    Un chat con IA responde. Un agente IA actúa. La diferencia no es semántica:
                    cambia completamente lo que podés automatizar en tu estudio.
                </p>
            </header>

            <div className="page__content">

                <section id="diferencia" className="page__section">
                    <h2 className="page__section-title">1. Chat vs. agente: la distinción que cambia todo</h2>
                    <article className="long-form-content">
                        <p>
                            Cuando le hacés una pregunta a Claude o ChatGPT y obtenés una respuesta,
                            estás usando un modelo de lenguaje en su forma más básica: entrada → salida.
                            Vos ponés el contexto, vos interpretás el resultado, vos decidís qué hacer con él.
                        </p>
                        <p>
                            Un <strong>agente IA</strong> es algo distinto. Toma una tarea de mayor alcance,
                            la descompone en pasos, ejecuta cada paso — usando herramientas cuando las necesita —,
                            evalúa el resultado, y continúa hasta completar la tarea. Sin que vos tengas que
                            intervenir en cada paso.
                        </p>
                        <blockquote className="concept-quote">
                            Un chat es una conversación. Un agente es un proceso. Le das un objetivo,
                            no una pregunta.
                        </blockquote>
                        <div className="comparison-grid">
                            <div className="comparison-box">
                                <h4>Chat con IA</h4>
                                <ul>
                                    <li>Vos formulás cada pregunta</li>
                                    <li>El modelo responde una vez</li>
                                    <li>Vos interpretás y decidís el siguiente paso</li>
                                    <li>Cada interacción es independiente (sin herramientas externas)</li>
                                    <li>Excelente para tareas discretas y bien definidas</li>
                                </ul>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>Agente IA</h4>
                                <ul>
                                    <li>Vos definís el objetivo final</li>
                                    <li>El agente planifica los pasos necesarios</li>
                                    <li>Ejecuta acciones: busca, lee, escribe, consulta APIs</li>
                                    <li>Evalúa sus propios resultados y ajusta</li>
                                    <li>Ideal para procesos multi-paso que se repiten</li>
                                </ul>
                            </div>
                        </div>
                    </article>
                </section>

                <section id="componentes" className="page__section">
                    <h2 className="page__section-title">2. Los cuatro componentes de un agente</h2>
                    <article className="long-form-content">
                        <ul className="key-points">
                            <li>
                                <strong>Percepción.</strong> Lo que el agente recibe como input: el objetivo
                                que le diste, documentos, resultados de búsquedas anteriores, el estado
                                actual de la tarea. Es la "vista" del agente sobre su situación.
                            </li>
                            <li>
                                <strong>Razonamiento.</strong> El modelo de lenguaje que decide qué hacer
                                a continuación. Analiza el estado actual, el objetivo, y elige la próxima
                                acción: buscar más información, redactar un fragmento, verificar un dato,
                                llamar a otra herramienta.
                            </li>
                            <li>
                                <strong>Acción.</strong> Las herramientas que el agente puede usar: búsqueda
                                web, lectura de archivos, escritura de documentos, llamadas a APIs externas,
                                ejecución de código. Las herramientas disponibles definen qué puede hacer el agente.
                            </li>
                            <li>
                                <strong>Memoria.</strong> Cómo el agente retiene lo que aprendió durante
                                la tarea: el contexto de la conversación, notas intermedias que se va haciendo,
                                resultados de pasos anteriores. Sin memoria, cada paso empieza desde cero.
                            </li>
                        </ul>
                    </article>
                </section>

                <section id="tipos" className="page__section">
                    <h2 className="page__section-title">3. Tipos de agentes relevantes para abogados</h2>
                    <article className="long-form-content">

                        <h3>Agente de investigación</h3>
                        <p>
                            Objetivo: "Investigá la doctrina y jurisprudencia sobre [tema] y generá un
                            informe con las posiciones principales y sus fuentes."
                        </p>
                        <p>
                            Proceso: busca → selecciona fuentes relevantes → lee y sintetiza cada una →
                            detecta contradicciones → organiza en informe estructurado.
                        </p>

                        <h3>Agente de redacción</h3>
                        <p>
                            Objetivo: "Con estos hechos y este análisis previo, redactá una demanda laboral
                            siguiendo este template y estilo."
                        </p>
                        <p>
                            Proceso: analiza los insumos → genera estructura → redacta sección por sección
                            → revisa coherencia → adapta al estilo indicado.
                        </p>

                        <h3>Agente de monitoreo</h3>
                        <p>
                            Objetivo: "Cada semana, revisá el estado de estas 30 causas y alertame sobre
                            vencimientos próximos o cambios relevantes."
                        </p>
                        <p>
                            Proceso: lee el estado actual de cada causa → compara con semana anterior →
                            calcula plazos → genera alerta priorizada.
                        </p>

                        <h3>Orquestador multi-agente</h3>
                        <p>
                            Coordina varios agentes especializados: uno investiga, otro procesa el expediente,
                            otro redacta. El orquestador integra los resultados en un producto final coherente.
                        </p>
                    </article>
                </section>

                <section id="cuando" className="page__section">
                    <h2 className="page__section-title">4. Cuándo usar un agente y cuándo no</h2>
                    <article className="long-form-content">
                        <p>
                            Los agentes no son siempre la mejor solución. Tienen un overhead de configuración
                            que solo se justifica en ciertos contextos.
                        </p>
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--good">
                                <h4>✅ Usá un agente cuando:</h4>
                                <ul>
                                    <li>La tarea tiene múltiples pasos que se repiten de forma similar</li>
                                    <li>El proceso tarda más de 30 minutos de forma manual</li>
                                    <li>Los pasos intermedios requieren decisiones pero según criterios fijos</li>
                                    <li>El volumen es alto: 10 causas, 50 documentos, seguimiento semanal</li>
                                    <li>La tarea es frecuente: algo que hacés todas las semanas o todos los meses</li>
                                </ul>
                            </div>
                            <div className="comparison-box comparison-box--bad">
                                <h4>✗ No uses un agente cuando:</h4>
                                <ul>
                                    <li>La tarea es puntual y no se va a repetir</li>
                                    <li>Requiere criterio estratégico que cambia en cada caso</li>
                                    <li>Un buen prompt resuelve el problema en un solo paso</li>
                                    <li>La configuración tardaría más que hacer la tarea manualmente</li>
                                    <li>Necesitás máxima supervisión en cada micro-decisión</li>
                                </ul>
                            </div>
                        </div>
                    </article>
                </section>

                <section id="sin-codigo" className="page__section">
                    <h2 className="page__section-title">5. Agentes sin programar: lo que ya tenés disponible</h2>
                    <article className="long-form-content">
                        <p>
                            La mayoría de los abogados asocia "agentes IA" con código y programación.
                            No es necesariamente así. Ya tenés acceso a capacidades agénticas con las
                            herramientas que conocés:
                        </p>
                        <ul className="application-list">
                            <li>
                                <strong>Claude Projects con instrucciones secuenciales:</strong> Un Project
                                configurado para ejecutar un proceso multi-paso de forma consistente.
                                No es un agente autónomo, pero sí un flujo controlado.
                            </li>
                            <li>
                                <strong>Gemini Deep Research:</strong> Es efectivamente un agente de investigación
                                que opera de forma autónoma: busca, sintetiza y reporta sin que vos guíes cada paso.
                            </li>
                            <li>
                                <strong>n8n o Make (Zapier):</strong> Herramientas de automatización sin código
                                que pueden orquestar múltiples llamadas a la API de Claude, encadenando pasos
                                con lógica condicional. El Módulo 6 U2 cubre esto en detalle.
                            </li>
                            <li>
                                <strong>API de Claude con MCP:</strong> El nivel más avanzado: conectar Claude
                                con herramientas propias, como ya funciona el widget Alcance Legal de este sitio.
                            </li>
                        </ul>
                        <div className="highlight-success">
                            <strong>Punto de partida:</strong> En este módulo vas a construir agentes reales
                            usando Claude Projects y prompts estructurados — sin una línea de código.
                            Cuando eso no alcance, vas a ver cómo n8n extiende las capacidades.
                        </div>
                    </article>
                </section>

                <section id="riesgo" className="page__section">
                    <h2 className="page__section-title">6. El riesgo que nunca hay que ignorar</h2>
                    <article className="long-form-content">
                        <div className="highlight-warning">
                            <strong>Autonomía ≠ confianza ciega.</strong> Un agente que opera sin supervisión
                            puede cometer errores en cadena. A diferencia de un chat donde vos controlás
                            cada paso, un agente puede tomar 10 decisiones equivocadas antes de que te
                            des cuenta. Los checkpoints humanos no son opcionales — son la arquitectura
                            de seguridad del sistema.
                        </div>
                        <p>
                            En las unidades siguientes, cada agente que diseñemos va a tener puntos de
                            control explícitos: momentos donde el proceso se pausa y vos revisás antes
                            de que continúe. Eso no es una limitación del agente — es cómo se hace bien.
                        </p>
                    </article>
                </section>

                <section id="checklist" className="page__section">
                    <h2 className="page__section-title">7. Checklist de esta unidad</h2>
                    <article className="long-form-content">
                        <div className="checklist-box">
                            <ul className="checklist">
                                <li>☐ Entiendo la diferencia entre un chat con IA y un agente IA</li>
                                <li>☐ Conozco los 4 componentes de un agente (percepción, razonamiento, acción, memoria)</li>
                                <li>☐ Sé identificar cuándo una tarea justifica un agente y cuándo no</li>
                                <li>☐ Conozco las herramientas agénticas que ya tengo disponibles sin programar</li>
                                <li>☐ Entiendo por qué los checkpoints humanos son parte esencial del diseño</li>
                            </ul>
                        </div>
                    </article>
                </section>

                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/privacy-u5" className="unit-nav-link">
                            <span className="unit-nav-label">← Módulo anterior</span>
                            <span className="unit-nav-title">M8 U5: Ética profesional y IA</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Módulo 7</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/agents-u2" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            U2 – Agente de investigación jurídica →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgentsM7U1

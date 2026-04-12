import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function AgentsM7U2() {
    return (
        <div className="page">
            <PageSEO
                title="Agente de investigación jurídica: de la consulta al informe · M7 U2"
                description="Cómo construir un agente de investigación jurídica sin programar. Flujo completo desde la pregunta legal hasta el informe con doctrina, jurisprudencia y fuentes verificadas."
                path="/agents-u2"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 7 · Unidad 2</span>
                <h1 className="page__title">Agente de investigación jurídica</h1>
                <p className="page__description">
                    De la pregunta al informe completo con doctrina, jurisprudencia y análisis crítico —
                    sin que vos tengas que guiar cada paso de la investigación.
                </p>
            </header>

            <div className="page__content">

                <section id="problema" className="page__section">
                    <h2 className="page__section-title">1. El problema que resuelve este agente</h2>
                    <article className="long-form-content">
                        <p>
                            Una investigación jurídica completa — doctrina, jurisprudencia, análisis crítico,
                            posiciones contrapuestas — puede llevar entre 4 y 8 horas de trabajo manual.
                            Y suele empezar igual: abrís un buscador, hacés varias búsquedas, abrís pestañas,
                            leés, tomás notas, intentás articular todo en algo coherente.
                        </p>
                        <p>
                            Un agente de investigación jurídica hace exactamente eso — pero de forma sistemática,
                            con criterio explícito, y entregando un informe estructurado listo para que vos
                            lo uses como base de trabajo.
                        </p>
                        <blockquote className="concept-quote">
                            No te da la estrategia. Te da el material para que vos definas la estrategia
                            con información completa.
                        </blockquote>
                    </article>
                </section>

                <section id="arquitectura" className="page__section">
                    <h2 className="page__section-title">2. La arquitectura del agente: 4 etapas</h2>
                    <article className="long-form-content">
                        <div className="flow-steps">
                            <div className="flow-step">
                                <strong>ETAPA 1 — Recepción y clarificación del objetivo</strong><br />
                                El agente recibe la pregunta jurídica y la reformula con precisión: identifica el área
                                del derecho, la jurisdicción, el marco temporal relevante, y las sub-preguntas que
                                necesita responder para cubrir el tema completo.
                            </div>
                            <div className="flow-step">
                                <strong>ETAPA 2 — Investigación primaria</strong><br />
                                Búsqueda de doctrina y jurisprudencia sobre cada sub-pregunta. Usa Gemini Deep Research
                                o Claude con búsqueda web activada. Recopila fuentes, selecciona las relevantes,
                                descarta las que no aplican a la jurisdicción o el período correcto.
                            </div>
                            <div className="flow-step">
                                <strong>ETAPA 3 — Análisis y síntesis</strong><br />
                                Procesa cada fuente: extrae la posición doctrinaria o el ratio decidendi,
                                identifica consensos y divergencias, detecta si hay evolución jurisprudencial
                                o si las posiciones son estables.
                            </div>
                            <div className="flow-step">
                                <strong>ETAPA 4 — Generación del informe</strong><br />
                                Integra todo en un documento estructurado: resumen ejecutivo, estado de la cuestión,
                                posiciones principales con fuentes, puntos de conflicto, y una sección de implicancias
                                prácticas para el caso en análisis.
                            </div>
                        </div>

                        <div className="highlight-warning">
                            <strong>Checkpoint humano obligatorio:</strong> Entre la Etapa 2 y la Etapa 3
                            revisás las fuentes que el agente identificó. Si hay fuentes que no conocés,
                            verificás que existan antes de que el análisis avance sobre ellas.
                        </div>
                    </article>
                </section>

                <section id="implementacion" className="page__section">
                    <h2 className="page__section-title">3. Implementación sin código: Claude + Gemini en secuencia</h2>
                    <article className="long-form-content">

                        <h3>Herramientas necesarias</h3>
                        <ul className="application-list">
                            <li>Claude Pro (para análisis y síntesis)</li>
                            <li>Gemini Advanced con Deep Research (para investigación web)</li>
                            <li>Un documento de texto para registrar el proceso (Google Docs o Notion)</li>
                        </ul>

                        <h3>Paso 1: Configurar el Project de investigación en Claude</h3>
                        <p>Creás un Project en Claude con estas instrucciones fijas:</p>
                        <div className="full-prompt-example">
                            <p>
                                "Actuás como asistente de investigación jurídica especializado en derecho argentino.
                                Tu tarea es ayudarme a construir informes de investigación estructurados. Para cada
                                investigación, voy a darte una pregunta jurídica y material de fuentes que yo recopilo.
                                Tu trabajo es: (1) reformular la pregunta con precisión técnica identificando
                                sub-preguntas, (2) analizar las fuentes que te proveo, (3) sintetizar posiciones
                                y detectar divergencias, (4) generar el informe final en el formato que te indico.
                                Nunca inventes jurisprudencia. Si una fuente que analizo tiene citas que no podés
                                verificar, indicámelo explícitamente."
                            </p>
                        </div>

                        <h3>Paso 2: Reformular la pregunta (Claude)</h3>
                        <div className="full-prompt-example">
                            <p>
                                "Necesito investigar: [tu pregunta jurídica]. Jurisdicción: [provincia/nacional].
                                Área: [derecho laboral / civil / penal / etc.]. Contexto: [brief del caso si es relevante].
                                Reformulá la pregunta con precisión técnica e identificá las 3-5 sub-preguntas que
                                cubren el tema completo."
                            </p>
                        </div>

                        <h3>Paso 3: Investigación web (Gemini Deep Research)</h3>
                        <p>Con las sub-preguntas que generó Claude, vas a Gemini Deep Research:</p>
                        <div className="full-prompt-example">
                            <p>
                                "Investigá en profundidad: [sub-pregunta 1] y [sub-pregunta 2] en el contexto
                                del derecho argentino. Necesito: posiciones doctrinarias principales con sus
                                autores, jurisprudencia relevante de CSJN y cámaras, si hay evolución en los
                                últimos 5 años, y posiciones minoritarias o críticas. Organizá el resultado
                                por sub-pregunta con las fuentes identificadas."
                            </p>
                        </div>

                        <h3>Paso 4: Análisis de fuentes (Claude)</h3>
                        <p>
                            Pegás el resultado de Gemini en el Project de Claude y pedís el análisis:
                        </p>
                        <div className="full-prompt-example">
                            <p>
                                "Acá está el material de investigación. Analizá cada fuente identificada:
                                (1) ¿La posición que se le atribuye es consistente con lo que típicamente
                                sostiene ese autor o tribunal? (2) ¿Hay contradicciones entre las fuentes?
                                (3) ¿Alguna fuente parece inventada o imprecisa? Marcá las que necesitás
                                que yo verifique antes de continuar."
                            </p>
                        </div>

                        <h3>Paso 5: Generación del informe (Claude)</h3>
                        <div className="full-prompt-example">
                            <p>
                                "Con el material verificado, generá el informe de investigación con esta estructura:
                                1. Resumen ejecutivo (5 líneas máximo).
                                2. Estado de la cuestión: posición mayoritaria y su fundamento.
                                3. Posiciones alternativas o críticas con sus fundamentos.
                                4. Evolución: ¿hay cambio jurisprudencial reciente?.
                                5. Implicancias para el caso: qué de todo esto es más relevante para [contexto específico].
                                6. Lista de fuentes verificadas.
                                Formato: párrafos cortos, subtítulos claros, sin jerga innecesaria."
                            </p>
                        </div>
                    </article>
                </section>

                <section id="ejemplo" className="page__section">
                    <h2 className="page__section-title">4. Ejemplo completo: responsabilidad civil por accidente de tránsito</h2>
                    <article className="long-form-content">
                        <h3>Input</h3>
                        <p>
                            "Necesito investigar la doctrina y jurisprudencia sobre responsabilidad civil
                            por accidente de tránsito en Argentina, específicamente sobre la carga de la prueba
                            en accidentes entre automotores y la concurrencia de culpas."
                        </p>

                        <h3>Sub-preguntas que Claude genera</h3>
                        <ul className="application-list">
                            <li>¿Cuál es el factor de atribución aplicable en colisiones entre automotores según el CCCN?</li>
                            <li>¿Cómo distribuye la jurisprudencia la carga de la prueba entre las partes?</li>
                            <li>¿Qué criterios usa la CSJN y las Cámaras Civiles para determinar concurrencia de culpas?</li>
                            <li>¿Hubo cambios desde la sanción del CCCN en 2015 respecto del código anterior?</li>
                        </ul>

                        <h3>Resultado del proceso completo</h3>
                        <p>
                            En lugar de un resumen genérico, obtenés un informe de 4-6 páginas con posiciones
                            identificadas, autores verificables, jurisprudencia con tribunal y año, y una sección
                            específica sobre qué aplica a tu caso. Tiempo total: 45-60 minutos, incluyendo
                            tu revisión de fuentes.
                        </p>

                        <div className="highlight-success">
                            <strong>Tiempo ahorrado:</strong> Una investigación similar de forma manual
                            toma entre 4 y 6 horas. Con el agente, el tiempo activo tuyo se reduce a la
                            verificación de fuentes y la lectura del informe final.
                        </div>
                    </article>
                </section>

                <section id="limites" className="page__section">
                    <h2 className="page__section-title">5. Limitaciones que hay que conocer</h2>
                    <article className="long-form-content">
                        <div className="risk-list">
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span><strong>Sin acceso a bases de datos jurídicas en tiempo real.</strong> El agente no puede acceder a SAIJ, Microjuris o Thomson Reuters directamente. La investigación web cubre fuentes públicas. Para jurisprudencia reciente o especializada, complementá con bases de datos jurídicas.</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span><strong>Riesgo de alucinación en fuentes.</strong> Especialmente en la etapa de Gemini, pueden aparecer citas plausibles pero inexistentes. El checkpoint de verificación de fuentes es por esto, no por protocolo.</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span><strong>No reemplaza leer la fuente primaria.</strong> El informe te dice qué dice la doctrina. Antes de citar en un escrito, leés la fuente original. El agente te dice dónde ir, no te exime de ir.</span>
                            </div>
                        </div>
                    </article>
                </section>

                <section id="checklist" className="page__section">
                    <h2 className="page__section-title">6. Checklist de esta unidad</h2>
                    <article className="long-form-content">
                        <div className="checklist-box">
                            <ul className="checklist">
                                <li>☐ Entiendo las 4 etapas del agente de investigación jurídica</li>
                                <li>☐ Configuré el Project de investigación en Claude con las instrucciones base</li>
                                <li>☐ Probé el flujo completo con al menos una investigación jurídica real</li>
                                <li>☐ Apliqué el checkpoint de verificación de fuentes antes de continuar al análisis</li>
                                <li>☐ Entiendo qué cubre este agente y qué requiere bases de datos complementarias</li>
                            </ul>
                        </div>
                    </article>
                </section>

                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/agents" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M7 U1: Qué es un agente IA</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/agents-u3" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            U3 – Agente de redacción jurídica →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgentsM7U2

import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function MasteringM6U2() {
    return (
        <div className="page">
            <PageSEO
                title="Extended Thinking: análisis jurídico complejo paso a paso · M5 U2"
                description="Cuándo y cómo usar el Extended Thinking de Claude para análisis jurídicos que requieren razonamiento en múltiples pasos. Diferencias con el modo estándar y casos de uso reales."
                path="/mastering-u2"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 5 · Unidad 2</span>
                <h1 className="page__title">Extended Thinking: análisis jurídico profundo</h1>
                <p className="page__description">
                    La diferencia entre pedirle una respuesta a Claude y pedirle que piense el problema
                    en profundidad antes de responder.
                </p>
            </header>

            <div className="page__content">

                <section id="que-es" className="page__section">
                    <h2 className="page__section-title">1. Qué es Extended Thinking</h2>
                    <article className="long-form-content">
                        <p>
                            Extended Thinking (también llamado "razonamiento extendido" o "modo de
                            pensamiento profundo") es una capacidad de Claude claude-sonnet-4-6 y Opus 4.6
                            donde el modelo dedica tiempo a <strong>razonar internamente antes de responder</strong>.
                            Ese razonamiento intermedio es visible: podés ver cómo el modelo descompone
                            el problema, considera alternativas, detecta posibles errores en su propio
                            análisis, y llega a una conclusión.
                        </p>
                        <p>
                            En la interfaz de claude.ai, se activa con el botón de "Extended thinking"
                            antes de enviar el mensaje. En la API, se configura con el parámetro
                            <code>thinking</code>.
                        </p>
                        <blockquote className="concept-quote">
                            En modo estándar, Claude responde. En Extended Thinking, Claude primero
                            piensa — y te muestra cómo piensa. La respuesta final es el resultado
                            de ese proceso, no de una sola pasada.
                        </blockquote>
                    </article>
                </section>

                <section id="cuando" className="page__section">
                    <h2 className="page__section-title">2. Cuándo usarlo y cuándo no</h2>
                    <article className="long-form-content">
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--good">
                                <h4>✅ Usá Extended Thinking para</h4>
                                <ul>
                                    <li>Análisis de viabilidad de pretensiones complejas</li>
                                    <li>Estrategia procesal con múltiples variables</li>
                                    <li>Detección de contradicciones en un expediente largo</li>
                                    <li>Evaluación de riesgos en decisiones de alto impacto</li>
                                    <li>Interpretación de cláusulas ambiguas con efectos encadenados</li>
                                    <li>Problemas donde la respuesta obvia puede ser incorrecta</li>
                                </ul>
                            </div>
                            <div className="comparison-box comparison-box--bad">
                                <h4>✗ No lo uses para</h4>
                                <ul>
                                    <li>Redacción de texto estándar — más lento sin beneficio claro</li>
                                    <li>Preguntas factuales directas</li>
                                    <li>Resúmenes de documentos</li>
                                    <li>Tareas donde la velocidad importa más que la profundidad</li>
                                    <li>Iteraciones rápidas de borrador</li>
                                </ul>
                            </div>
                        </div>
                        <div className="highlight-warning">
                            <strong>Costo:</strong> Extended Thinking consume más tokens y tarda más.
                            Para tareas simples, es sobreingeniería. Para problemas jurídicos realmente
                            complejos, la diferencia en calidad de análisis justifica el tiempo adicional.
                        </div>
                    </article>
                </section>

                <section id="casos-uso" className="page__section">
                    <h2 className="page__section-title">3. Casos de uso jurídico</h2>
                    <article className="long-form-content">

                        <h3>Caso 1: Análisis de viabilidad de una acción</h3>
                        <div className="full-prompt-example">
                            <p>
                                "Analizá con razonamiento extendido si la siguiente acción es viable:
                                [descripción del caso]. Considerá: (1) si los hechos encuadran en el
                                supuesto normativo, (2) qué debe probar el actor y qué dificultades
                                probatorias prevés, (3) qué defensas tiene disponibles la contraparte
                                y su fortaleza relativa, (4) cuál es el resultado más probable en primera
                                instancia y si hay perspectiva de revisión. Dame tu razonamiento paso
                                a paso antes de la conclusión."
                            </p>
                        </div>

                        <h3>Caso 2: Detección de contradicciones en expediente</h3>
                        <div className="full-prompt-example">
                            <p>
                                "Revisá los documentos del expediente [cargados en el Project] buscando
                                contradicciones internas: hechos que se narran de forma inconsistente
                                entre escritos, fechas que no cuadran, testimonios que se contradicen.
                                Para cada contradicción identificada, explicá: qué documentos la generan,
                                cuál es la inconsistencia exacta, y si puede ser aprovechada o si necesita
                                explicarse antes de que la contraparte la señale."
                            </p>
                        </div>

                        <h3>Caso 3: Estrategia ante una sentencia adversa</h3>
                        <div className="full-prompt-example">
                            <p>
                                "La sentencia de primera instancia rechazó nuestra pretensión por [razón].
                                Analizá las opciones de impugnación: (1) ¿el rechazo tiene fundamento
                                normativo sólido o hay agravios viables?, (2) si apelamos, ¿cuál es la
                                perspectiva ante la Cámara dado el criterio de la sala X sobre [tema]?,
                                (3) ¿qué pierde el cliente en el peor caso si no apela vs. qué gana si
                                apela con éxito?, (4) recomendación fundamentada."
                            </p>
                        </div>

                        <h3>Caso 4: Interpretación de cláusula contractual ambigua</h3>
                        <div className="full-prompt-example">
                            <p>
                                "La cláusula [X] del contrato dice: '[texto exacto]'. Las partes
                                la interpretan de forma radicalmente diferente. Analizá con razonamiento
                                extendido: qué interpretación es más compatible con (1) el texto literal,
                                (2) el contexto del contrato completo, (3) la voluntad común probable de
                                las partes al momento de celebrar, (4) los principios del CCCN sobre
                                interpretación contractual. ¿Hay una interpretación claramente superior
                                o el texto es genuinamente ambiguo?"
                            </p>
                        </div>
                    </article>
                </section>

                <section id="leer-thinking" className="page__section">
                    <h2 className="page__section-title">4. Cómo leer el proceso de razonamiento</h2>
                    <article className="long-form-content">
                        <p>
                            Cuando activás Extended Thinking, Claude muestra su "cadena de pensamiento"
                            antes de la respuesta final. Eso tiene valor propio:
                        </p>
                        <ul className="key-points">
                            <li>
                                <strong>Detectás dudas del modelo:</strong> Si en el razonamiento Claude
                                escribe "no estoy seguro de si...", esa incertidumbre es información
                                sobre el punto débil del análisis que vos también debés resolver.
                            </li>
                            <li>
                                <strong>Ves las alternativas descartadas:</strong> El proceso muestra qué
                                caminos consideró y por qué los rechazó. A veces un camino descartado
                                es en realidad válido — podés intervenir antes de que llegue a la conclusión.
                            </li>
                            <li>
                                <strong>Verificás la lógica:</strong> Si el razonamiento tiene un salto
                                lógico o una premisa incorrecta, lo detectás antes de que la conclusión
                                incorrecta llegue al escrito.
                            </li>
                        </ul>
                        <div className="highlight-success">
                            <strong>Uso avanzado:</strong> Interrumpí el proceso. Si ves en el razonamiento
                            que Claude está tomando una dirección incorrecta, podés decirle en el siguiente
                            mensaje: "En tu razonamiento asumiste que X, pero en realidad es Y. Con esa
                            corrección, ¿cambia tu conclusión?" Esta iteración sobre el pensamiento
                            — no solo sobre la respuesta — es el nivel avanzado de uso.
                        </div>
                    </article>
                </section>

                <section id="comparativa" className="page__section">
                    <h2 className="page__section-title">5. Extended Thinking vs. o3 de OpenAI</h2>
                    <article className="long-form-content">
                        <p>
                            El razonamiento extendido de Claude compite con o3/o4-mini de OpenAI.
                            Para trabajo jurídico argentino:
                        </p>
                        <div className="table-container">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Característica</th>
                                        <th>Claude Extended Thinking</th>
                                        <th>OpenAI o3/o4-mini</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Razonamiento visible</td>
                                        <td>Sí — podés ver el proceso</td>
                                        <td>Parcial en algunos planes</td>
                                    </tr>
                                    <tr>
                                        <td>Integración con Projects</td>
                                        <td>Nativa — usa el contexto del Project</td>
                                        <td>No (o3 es conversacional)</td>
                                    </tr>
                                    <tr>
                                        <td>Longitud de contexto</td>
                                        <td>200K tokens</td>
                                        <td>128K tokens (o3)</td>
                                    </tr>
                                    <tr>
                                        <td>Instrucción en español</td>
                                        <td>Excelente</td>
                                        <td>Buena</td>
                                    </tr>
                                    <tr>
                                        <td>Costo por consulta</td>
                                        <td>Incluido en Pro</td>
                                        <td>Costo adicional por API</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            Para el flujo de trabajo jurídico con Projects, Extended Thinking de Claude
                            tiene la ventaja de integrarse nativamente con el contexto del caso.
                        </p>
                    </article>
                </section>

                <section id="checklist" className="page__section">
                    <h2 className="page__section-title">6. Checklist de esta unidad</h2>
                    <article className="long-form-content">
                        <div className="checklist-box">
                            <ul className="checklist">
                                <li>☐ Entiendo cuándo Extended Thinking agrega valor y cuándo no</li>
                                <li>☐ Probé activar el modo en al menos un análisis jurídico complejo</li>
                                <li>☐ Leí el proceso de razonamiento y extraje información útil de él</li>
                                <li>☐ Identifiqué un caso real de mi práctica donde aplicaría esta herramienta</li>
                            </ul>
                        </div>
                    </article>
                </section>

                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/mastering" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M5 U1: Claude Projects</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/mastering-u3" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            U3 – Artifacts: visualizaciones y documentos interactivos →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MasteringM6U2

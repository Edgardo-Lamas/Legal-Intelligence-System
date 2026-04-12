import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function PromptEngineeringM2U7() {
    return (
        <div className="page">
            <PageSEO
                title="Razonamiento extendido jurídico: o1, o3 y Claude Extended Thinking · M2 U7"
                description="Cuándo y cómo usar modelos de razonamiento extendido (o1, o3, Claude Opus Extended Thinking) para análisis jurídico complejo que supera el prompt clásico."
                path="/prompt-engineering-u7"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 2 · Unidad 7</span>
                <h1 className="page__title">Razonamiento extendido: cuando el modelo piensa antes de responder</h1>
                <p className="page__description">
                    Los modelos de razonamiento extendido — o1, o3, Claude con Extended Thinking — son cualitativamente distintos al prompting clásico. Cuándo usarlos, cómo pedirles, y por qué cambian el análisis jurídico complejo.
                </p>
            </header>

            <div className="page__content">

                {/* Sección 1 */}
                <section id="que-es" className="page__section">
                    <h2 className="page__section-title">1. Qué es el razonamiento extendido</h2>
                    <article className="long-form-content">
                        <p>
                            Los modelos de lenguaje estándar generan texto de izquierda a derecha, token por token,
                            sin dar marcha atrás. Un prompt entra, una respuesta sale. Eso funciona para la gran mayoría
                            de las tareas jurídicas cotidianas.
                        </p>
                        <p>
                            Pero ciertos problemas requieren algo diferente: explorar varias hipótesis antes de
                            comprometerse con una, verificar internamente si el argumento es coherente, o evaluar
                            si la conclusión inicial resiste un contra-análisis. Para eso existen los <strong>modelos
                            de razonamiento extendido</strong>.
                        </p>
                        <blockquote className="concept-quote">
                            Un modelo estándar responde. Un modelo de razonamiento extendido <em>piensa</em> antes
                            de responder. La diferencia no es de velocidad sino de proceso interno.
                        </blockquote>
                        <p>
                            Técnicamente, estos modelos tienen una etapa de "chain of thought" interna donde
                            trabajan el problema paso a paso antes de generar la respuesta visible. Ese proceso
                            interno puede tomar varios segundos — o varios minutos en problemas complejos.
                        </p>
                    </article>
                </section>

                {/* Sección 2 */}
                <section id="modelos" className="page__section">
                    <h2 className="page__section-title">2. Los modelos disponibles hoy</h2>
                    <article className="long-form-content">
                        <div className="comparison-grid">
                            <div className="comparison-box">
                                <h4>OpenAI o1 y o3</h4>
                                <ul>
                                    <li><strong>o1:</strong> Primera generación, robusto para análisis profundo</li>
                                    <li><strong>o3:</strong> Segunda generación, más potente, acceso a herramientas</li>
                                    <li><strong>o3-mini:</strong> Balance costo-rendimiento</li>
                                    <li><strong>Acceso:</strong> ChatGPT Plus/Pro o API</li>
                                    <li><strong>Limitación:</strong> Más lento, más caro por consulta</li>
                                </ul>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>Claude Extended Thinking ✓</h4>
                                <ul>
                                    <li><strong>Modelos:</strong> Claude Sonnet y Opus con Extended Thinking activado</li>
                                    <li><strong>Activación:</strong> Disponible en Claude.ai Pro y API</li>
                                    <li><strong>Ventaja:</strong> Combina razonamiento extendido con 200K de contexto</li>
                                    <li><strong>Visible:</strong> Podés ver el "pensamiento interno" del modelo</li>
                                    <li><strong>Para jurídico:</strong> El más apropiado para análisis de causas complejas</li>
                                </ul>
                            </div>
                        </div>

                        <p>
                            En la práctica para trabajo jurídico: <strong>Claude con Extended Thinking es la opción
                            más equilibrada</strong>. La combinación de razonamiento extendido + contexto de 200K
                            tokens significa que podés subir el expediente completo Y pedirle que razone profundamente
                            sobre él. Los modelos de OpenAI tienen contexto más limitado, lo que los hace menos
                            prácticos para causas largas.
                        </p>
                    </article>
                </section>

                {/* Sección 3 */}
                <section id="cuando" className="page__section">
                    <h2 className="page__section-title">3. Cuándo usarlos y cuándo no</h2>
                    <article className="long-form-content">
                        <p>
                            El razonamiento extendido tiene un costo real: más tiempo de espera y mayor costo por
                            consulta. No es la herramienta para todo. Es la herramienta para los problemas que
                            lo justifican.
                        </p>

                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--good">
                                <h4>✅ USARLO cuando:</h4>
                                <ul>
                                    <li>El problema tiene múltiples soluciones posibles y necesitás evaluar cuál es más sólida</li>
                                    <li>La norma aplicable es ambigua o tiene interpretaciones doctrinales contrapuestas</li>
                                    <li>Estás construyendo la teoría del caso y necesitás que resista el cross-examination</li>
                                    <li>Necesitás anticipar los mejores argumentos de la contraparte</li>
                                    <li>El análisis requiere razonar simultáneamente sobre hechos, prueba y derecho</li>
                                    <li>Estás analizando si un recurso tiene chances reales (no un resumen, sino una evaluación)</li>
                                </ul>
                            </div>
                            <div className="comparison-box comparison-box--bad">
                                <h4>✗ NO usarlo para:</h4>
                                <ul>
                                    <li>Resúmenes o síntesis de documentos</li>
                                    <li>Redacción de escritos (una vez que el análisis ya está hecho)</li>
                                    <li>Extracción de datos estructurados (fechas, partes, montos)</li>
                                    <li>Respuestas a consultas rápidas</li>
                                    <li>Clasificación de actuaciones</li>
                                    <li>Cualquier tarea que un prompt estándar resuelve bien</li>
                                </ul>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Sección 4 */}
                <section id="como-pedir" className="page__section">
                    <h2 className="page__section-title">4. Cómo prompting para razonamiento extendido</h2>
                    <article className="long-form-content">
                        <p>
                            Prompting para modelos de razonamiento extendido es diferente al prompt estándar.
                            La regla más importante: <strong>no guíes el proceso, describí el resultado que necesitás</strong>.
                        </p>

                        <h3>Error frecuente: over-prompting</h3>
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--bad">
                                <h4>✗ Prompt que interfiere con el razonamiento</h4>
                                <p>"Primero analizá los hechos, luego la prueba, después el derecho aplicable, luego los argumentos posibles, y finalmente dime tu conclusión."</p>
                                <p><em>Problema: estás dictando el proceso interno del modelo. Lo limitás a tu propio razonamiento.</em></p>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>✅ Prompt que libera el razonamiento</h4>
                                <p>"Analizá si la teoría del caso que te presento es sólida para prosperar en juicio. Identificá sus puntos fuertes, sus puntos débiles, y qué necesitaría para ser más robusta."</p>
                                <p><em>Ventaja: el modelo decide cómo estructurar el análisis.</em></p>
                            </div>
                        </div>

                        <h3>Estructura recomendada para el prompt</h3>
                        <div className="full-prompt-example">
                            <p><strong>[CONTEXTO]</strong></p>
                            <p>
                                Soy abogado defensor en una causa penal bonaerense (CPP PBA, Ley 11.922).
                                Mi cliente está imputado por [delito]. Los hechos son: [descripción concisa].
                                La prueba disponible es: [lista]. La posición de la fiscalía es: [síntesis].
                            </p>
                            <p><strong>[TAREA DE RAZONAMIENTO]</strong></p>
                            <p>
                                Evaluá si una estrategia de [nulidad procesal / excepción de falta de acción /
                                planteo de inconstitucionalidad] tiene chances reales de prosperar. No quiero
                                un resumen del derecho aplicable: quiero tu evaluación honesta de la solidez
                                del planteo, con los argumentos a favor, los argumentos en contra que va a
                                esgrimir la fiscalía, y lo que podría fortalecer o debilitar la estrategia.
                            </p>
                            <p><strong>[RESTRICCIONES]</strong></p>
                            <p>
                                Derecho argentino, jurisdicción Provincia de Buenos Aires. No inventes
                                jurisprudencia: si no la conocés, indicálo.
                            </p>
                        </div>

                        <h3>Pedí que "se desafíe a sí mismo"</h3>
                        <p>
                            Una técnica particularmente útil con modelos de razonamiento extendido: pedirle
                            que evalúe su propia respuesta.
                        </p>
                        <div className="full-prompt-example">
                            <p>
                                "Después de darte tu análisis, quiero que lo revises con este criterio: ¿qué
                                parte de tu argumento sería más fácil de rebatir por la parte contraria?
                                ¿Qué asumiste que podría no ser cierto? ¿Cambia tu conclusión si esa
                                asunción fuera incorrecta?"
                            </p>
                        </div>
                    </article>
                </section>

                {/* Sección 5 */}
                <section id="ejemplos" className="page__section">
                    <h2 className="page__section-title">5. Casos de uso concretos en trabajo jurídico</h2>
                    <article className="long-form-content">

                        <h3>Caso 1: Evaluar viabilidad de un recurso de casación</h3>
                        <p>
                            Pedís al modelo que evalúe si la sentencia tiene un defecto de motivación que habilite
                            el recurso, considerando los estándares de admisibilidad del tribunal. El modelo de
                            razonamiento extendido analiza la sentencia, compara con los criterios del tribunal,
                            y te dice si el recurso tiene chances — no si es posible presentarlo, sino si va a
                            tener éxito.
                        </p>

                        <h3>Caso 2: Análisis de responsabilidad en accidente de tránsito</h3>
                        <p>
                            Le presentás los hechos, las pruebas (peritaje mecánico, testimonios, reconstrucción),
                            y las posibles teorías de responsabilidad. El modelo evalúa cuál teoría es más sólida,
                            cómo se distribuye la responsabilidad según los hechos, y qué elementos probatorios
                            la fortalecen o debilitan.
                        </p>

                        <h3>Caso 3: Estructura de una defensa en causa penal compleja</h3>
                        <p>
                            Le presentás el expediente completo (en Claude con Extended Thinking) y le pedís que
                            construya la mejor defensa posible considerando: (a) la calificación legal, (b) la
                            prueba existente, (c) las garantías procesales eventualmente vulneradas, y (d) el
                            contexto del imputado. El resultado es un análisis estratégico completo, no un
                            listado de argumentos.
                        </p>

                        <h3>Caso 4: Análisis de cláusula contractual ambigua</h3>
                        <p>
                            Una cláusula puede interpretarse a favor de tu cliente o en su contra dependiendo
                            del criterio hermenéutico que se aplique. Le pedís al modelo que analice todas las
                            interpretaciones posibles, cuál prevalece según la doctrina del CCCN, y cuál beneficia
                            más a tu cliente. El razonamiento extendido evalúa los criterios hermenéuticos del
                            Art. 1061 y ss. CCCN con mayor profundidad que un prompt estándar.
                        </p>
                    </article>
                </section>

                {/* Sección 6 */}
                <section id="limites" className="page__section">
                    <h2 className="page__section-title">6. Límites que no cambian</h2>
                    <article className="long-form-content">
                        <div className="risk-list">
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>
                                    <strong>El razonamiento extendido no elimina las alucinaciones.</strong> Reduce
                                    la probabilidad pero no la elimina. Toda cita debe verificarse igual.
                                </span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>
                                    <strong>No tiene acceso a jurisprudencia actualizada.</strong> Los modelos tienen
                                    fecha de corte de entrenamiento. Para causas con jurisprudencia reciente,
                                    necesitás subir los fallos relevantes al contexto.
                                </span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>
                                    <strong>El análisis es tuyo, la herramienta es suya.</strong> El modelo puede
                                    identificar un argumento muy sólido que en la práctica no procede por razones
                                    locales que desconoce (prácticas del fuero, criterio del juez, etc.).
                                    Tu conocimiento del contexto local es insustituible.
                                </span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>
                                    <strong>Mayor tiempo de respuesta.</strong> Un análisis de razonamiento extendido
                                    puede tardar entre 30 segundos y varios minutos. No lo uses para tareas urgentes
                                    donde necesitás una respuesta rápida.
                                </span>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Checklist */}
                <section id="checklist" className="page__section">
                    <h2 className="page__section-title">7. Checklist de esta unidad</h2>
                    <article className="long-form-content">
                        <div className="checklist-box">
                            <ul className="checklist">
                                <li>☐ Entiendo la diferencia entre un modelo estándar y uno de razonamiento extendido</li>
                                <li>☐ Sé cuándo vale la pena usar razonamiento extendido vs. prompt estándar</li>
                                <li>☐ Probé Claude Extended Thinking en al menos un análisis jurídico real</li>
                                <li>☐ Entiendo por qué no debo guiar el proceso interno del modelo con prompts paso a paso</li>
                                <li>☐ Usé la técnica de "desafiarse a sí mismo" para fortalecer un argumento</li>
                                <li>☐ Verifico las citas incluso cuando el análisis me parece muy convincente</li>
                            </ul>
                        </div>
                    </article>
                </section>

                {/* Navegación */}
                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/prompt-engineering-u6" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M2 U6: Custom GPTs y biblioteca de prompts</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--complete">✓ Módulo 2 completo</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próximo módulo:</span>
                        <Link to="/solo-practice" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Módulo 3 – Práctica individual y modelo de negocio →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PromptEngineeringM2U7

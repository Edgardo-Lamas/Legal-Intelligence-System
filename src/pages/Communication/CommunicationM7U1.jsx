import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function CommunicationM7U1() {
    return (
        <div className="page">
            <PageSEO
                title="IA para comunicación con clientes: claridad sin perder rigor · M9 U1"
                description="Cómo usar IA para comunicar situaciones procesales complejas en lenguaje accesible para clientes, sin perder rigor jurídico ni generar falsas expectativas."
                path="/communication"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 9 · Unidad 1</span>
                <h1 className="page__title">IA para comunicación con clientes</h1>
                <p className="page__description">
                    La brecha entre el lenguaje jurídico y lo que entiende el cliente es uno de los
                    mayores generadores de ansiedad en la relación profesional. La IA la cierra.
                </p>
            </header>

            <div className="page__content">

                <section id="problema" className="page__section">
                    <h2 className="page__section-title">1. El problema real de la comunicación con clientes</h2>
                    <article className="long-form-content">
                        <p>
                            El cliente que pregunta "¿ganamos o perdimos?" después de una sentencia
                            de 40 páginas no está siendo impaciente — está desorientado. No sabe
                            qué significa una condena parcial, qué son los recursos, ni cuánto tiempo
                            tiene para tomar decisiones.
                        </p>
                        <p>
                            El abogado sabe todo eso. Pero traducirlo a lenguaje accesible, con el
                            tono correcto, sin generar falsas expectativas ni alarma innecesaria,
                            consume tiempo y energía mental que muchas veces no sobra.
                        </p>
                        <blockquote className="concept-quote">
                            La IA no reemplaza tu criterio jurídico. Traduce ese criterio al lenguaje
                            que el cliente puede procesar. Eso también es trabajo profesional.
                        </blockquote>
                    </article>
                </section>

                <section id="tipos" className="page__section">
                    <h2 className="page__section-title">2. Tipos de comunicación donde la IA agrega valor</h2>
                    <article className="long-form-content">
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--good">
                                <h4>Actualizaciones procesales</h4>
                                <p>Explicar qué pasó en una audiencia, resolución o notificación.
                                El cliente necesita entender el hecho y su implicancia práctica.</p>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>Solicitudes de documentación</h4>
                                <p>Pedir documentos con claridad: qué documento exactamente,
                                para qué se usa, cuándo es urgente y cómo entregarlo.</p>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>Explicación de opciones</h4>
                                <p>Presentar alternativas (aceptar oferta / continuar / apelar) con
                                sus consecuencias en términos que el cliente pueda evaluar.</p>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>Recordatorios y vencimientos</h4>
                                <p>Alertar sobre plazos con el nivel justo de urgencia — sin alarmar
                                si no es urgente, sin minimizar si sí lo es.</p>
                            </div>
                        </div>
                    </article>
                </section>

                <section id="prompts" className="page__section">
                    <h2 className="page__section-title">3. Prompts para comunicación con clientes</h2>
                    <article className="long-form-content">

                        <h3>Actualización procesal después de una audiencia</h3>
                        <div className="full-prompt-example">
                            <p>
                                "Actuás como abogado comunicando a un cliente sin formación jurídica
                                lo que pasó en la audiencia de hoy. El cliente está ansioso y necesita
                                entender qué significa para su caso.
                            </p>
                            <p>
                                Lo que ocurrió: [describir brevemente — resolución, declaraciones,
                                próximos pasos, fechas].
                            </p>
                            <p>
                                Redactá un mensaje (para WhatsApp o email) que: (1) explique qué
                                pasó en términos simples, (2) indique si es una buena o mala noticia
                                y en qué medida, (3) describa qué viene ahora y qué necesitamos del
                                cliente, (4) cierre con el plazo más relevante.
                            </p>
                            <p>
                                Tono: profesional, claro, tranquilizador pero realista. Sin tecnicismos.
                                Sin prometer resultados. Máximo 200 palabras."
                            </p>
                        </div>

                        <h3>Explicar una sentencia compleja</h3>
                        <div className="full-prompt-example">
                            <p>
                                "Tengo una sentencia que condena parcialmente a la contraparte.
                                El cliente espera saber si 'ganamos o perdimos'. La realidad es matizada.
                            </p>
                            <p>
                                Resultado: [describir qué se concedió, qué se rechazó, montos si aplica].
                                Perspectiva: [si hay recursos posibles, cuál es tu recomendación].
                            </p>
                            <p>
                                Redactá una explicación que: (1) empiece con lo más positivo sin
                                distorsionar la realidad, (2) explique lo que no se obtuvo y por qué,
                                (3) describa las opciones disponibles y cuál recomendás, (4) indique
                                el plazo para tomar la decisión.
                            </p>
                            <p>
                                No uses términos jurídicos sin explicarlos. El cliente no sabe qué
                                es 'recurrir en apelación' — explicalo como si fuera la primera vez."
                            </p>
                        </div>

                        <h3>Solicitud de documentación urgente</h3>
                        <div className="full-prompt-example">
                            <p>
                                "Necesito pedirle al cliente que me mande [documentos específicos]
                                antes del [fecha]. Es importante porque [razón procesal].
                            </p>
                            <p>
                                Redactá el mensaje evitando: (1) sonar alarmante si no es urgente,
                                (2) minimizar si sí lo es, (3) dar por supuesto que sabe qué es el
                                documento. Incluí una descripción de exactamente qué documento necesito
                                (nombre, de qué organismo, de qué año si aplica) y cómo puede conseguirlo
                                si no lo tiene."
                            </p>
                        </div>

                        <h3>Presentación de opciones estratégicas</h3>
                        <div className="full-prompt-example">
                            <p>
                                "El cliente tiene que decidir entre tres opciones: [opción A], [opción B],
                                [opción C]. Mi recomendación es [opción X] por [razones].
                            </p>
                            <p>
                                Redactá una explicación de las opciones que: (1) describa cada una
                                en términos concretos (qué implica, cuánto dura, qué cuesta, qué
                                probabilidad de éxito tiene), (2) sea objetiva con las tres antes
                                de revelar mi recomendación, (3) explique por qué recomiendo la
                                que recomiendo sin presionar, (4) indique qué decide el cliente
                                y en qué plazo."
                            </p>
                        </div>
                    </article>
                </section>

                <section id="limites" className="page__section">
                    <h2 className="page__section-title">4. Lo que la IA no puede hacer por vos</h2>
                    <article className="long-form-content">
                        <div className="risk-list">
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>
                                    <strong>Conocer el historial del cliente.</strong> La IA genera
                                    texto genérico. Vos le das el contexto específico — la relación,
                                    el tono que usa ese cliente, si está tranquilo o al límite.
                                </span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>
                                    <strong>Evaluar el impacto emocional.</strong> Una mala noticia
                                    necesita tono distinto según el cliente. La IA hace el primer
                                    borrador, vos ajustás el tono final.
                                </span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>
                                    <strong>Asumir responsabilidad.</strong> Todo lo que sale con tu
                                    nombre es tuyo. La revisión final es obligatoria — no opcional.
                                </span>
                            </div>
                        </div>
                    </article>
                </section>

                <section id="flujo" className="page__section">
                    <h2 className="page__section-title">5. El flujo en la práctica</h2>
                    <article className="long-form-content">
                        <div className="flow-steps">
                            <div className="flow-step">
                                <strong>Tomás nota rápida</strong> después de la audiencia o resolución:
                                qué pasó, qué viene, qué necesitás del cliente. No necesita formato.
                            </div>
                            <div className="flow-step">
                                <strong>Le pasás el resumen a Claude</strong> con el prompt de
                                comunicación. Claude genera el borrador en segundos.
                            </div>
                            <div className="flow-step">
                                <strong>Revisás en 2 minutos:</strong> ajustás el tono si es necesario,
                                añadís algo personal, verificás que el plazo esté correcto.
                            </div>
                            <div className="flow-step">
                                <strong>Enviás.</strong> El cliente recibe actualización profesional
                                el mismo día — no al día siguiente cuando encontraste tiempo.
                            </div>
                        </div>
                        <div className="highlight-success">
                            <strong>El efecto compuesto:</strong> Un cliente que recibe actualizaciones
                            claras y oportunas no llama a preguntar. Eso libera horas por semana.
                        </div>
                    </article>
                </section>

                <section id="checklist" className="page__section">
                    <h2 className="page__section-title">6. Checklist de esta unidad</h2>
                    <article className="long-form-content">
                        <div className="checklist-box">
                            <ul className="checklist">
                                <li>☐ Identifiqué las 3 comunicaciones con clientes que más tiempo me consumen</li>
                                <li>☐ Probé el prompt de actualización procesal con un caso real</li>
                                <li>☐ Creé un template propio para el tipo de comunicación más frecuente</li>
                                <li>☐ Establecí el hábito de tomar nota rápida después de cada novedad procesal</li>
                            </ul>
                        </div>
                    </article>
                </section>

                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/privacy-u5" className="unit-nav-link">
                            <span className="unit-nav-label">← Módulo anterior</span>
                            <span className="unit-nav-title">M8 U5: Ética profesional en la era LLM</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/communication-u2" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            U2 – LinkedIn jurídico: estrategia de contenido con IA →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommunicationM7U1

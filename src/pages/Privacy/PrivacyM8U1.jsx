import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function PrivacyM8U1() {
    return (
        <div className="page">
            <PageSEO
                title="¿ChatGPT entrena con mis datos? La verdad sobre tus conversaciones · M8 U1"
                description="Qué pasa realmente con la información que subís a ChatGPT, Claude y Gemini. Políticas de entrenamiento, cómo desactivarlo y qué garantizan los planes de pago."
                path="/privacy"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 8 · Unidad 1</span>
                <h1 className="page__title">¿ChatGPT entrena con mis datos?</h1>
                <p className="page__description">
                    La respuesta no es sí ni no. Es "depende de cómo lo configurás" — y esa diferencia
                    puede ser crítica para tu práctica profesional.
                </p>
            </header>

            <div className="page__content">

                <section id="el-miedo" className="page__section">
                    <h2 className="page__section-title">1. La pregunta que todos tienen pero pocos responden bien</h2>
                    <article className="long-form-content">
                        <p>
                            Cuando un abogado escucha que ChatGPT "usa tus conversaciones para entrenar sus modelos",
                            la reacción inmediata es preocupación. Y es una reacción razonable. Pero la realidad
                            es más matizada — y más manejable — de lo que parece.
                        </p>
                        <p>
                            Hay tres cosas distintas que los modelos pueden hacer con tus datos, y la mayoría de
                            las personas las mezcla:
                        </p>
                        <ul className="key-points">
                            <li>
                                <strong>Almacenar</strong> la conversación en sus servidores (casi todos lo hacen, por un período variable)
                            </li>
                            <li>
                                <strong>Revisar</strong> conversaciones para detectar abusos o mejorar la seguridad (algunos lo hacen)
                            </li>
                            <li>
                                <strong>Entrenar</strong> futuros modelos con el contenido de tus conversaciones (esto es lo que más preocupa — y es configurable)
                            </li>
                        </ul>
                        <blockquote className="concept-quote">
                            Que una plataforma almacene tu conversación no significa que la use para entrenar
                            modelos. Son cosas distintas con implicancias distintas.
                        </blockquote>
                    </article>
                </section>

                <section id="chatgpt" className="page__section">
                    <h2 className="page__section-title">2. ChatGPT: la configuración que cambia todo</h2>
                    <article className="long-form-content">
                        <p>
                            OpenAI usa conversaciones de ChatGPT para mejorar sus modelos <strong>por defecto</strong>,
                            pero te da la opción de desactivarlo. Si nunca cambiaste esta configuración, tus
                            conversaciones probablemente estén siendo usadas.
                        </p>

                        <h3>Cómo desactivar el entrenamiento en ChatGPT</h3>
                        <div className="flow-steps">
                            <div className="flow-step">
                                <strong>Paso 1:</strong> Hacé clic en tu avatar o nombre de usuario (esquina inferior izquierda)
                            </div>
                            <div className="flow-step">
                                <strong>Paso 2:</strong> Entrá a <em>Settings</em> (Configuración)
                            </div>
                            <div className="flow-step">
                                <strong>Paso 3:</strong> Sección <em>Data Controls</em> (Control de datos)
                            </div>
                            <div className="flow-step">
                                <strong>Paso 4:</strong> Desactivá la opción <em>"Improve the model for everyone"</em>
                            </div>
                        </div>

                        <div className="highlight-success">
                            <strong>Con esta opción desactivada:</strong> OpenAI no usa tus conversaciones
                            para entrenar modelos. Sí conserva los datos por un período por razones de seguridad
                            y abuso, pero no los usa para entrenamiento.
                        </div>

                        <h3>¿Y el plan Plus lo garantiza?</h3>
                        <p>
                            <strong>No automáticamente.</strong> ChatGPT Plus sigue usando conversaciones para
                            entrenamiento a menos que lo desactivés manualmente. La diferencia real está en el
                            plan <strong>Team</strong> o <strong>Enterprise</strong>, donde OpenAI se compromete
                            contractualmente a no usar tus datos para entrenamiento.
                        </p>

                        <div className="table-container">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Plan ChatGPT</th>
                                        <th>¿Entrena por defecto?</th>
                                        <th>¿Se puede desactivar?</th>
                                        <th>¿Garantía contractual?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Free</td>
                                        <td>Sí</td>
                                        <td>Sí (configuración manual)</td>
                                        <td>No</td>
                                    </tr>
                                    <tr>
                                        <td>Plus ($20/mes)</td>
                                        <td>Sí</td>
                                        <td>Sí (configuración manual)</td>
                                        <td>No</td>
                                    </tr>
                                    <tr>
                                        <td>Team ($25/usuario)</td>
                                        <td>No</td>
                                        <td>N/A</td>
                                        <td>Sí</td>
                                    </tr>
                                    <tr>
                                        <td>Enterprise</td>
                                        <td>No</td>
                                        <td>N/A</td>
                                        <td>Sí, con DPA</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </article>
                </section>

                <section id="claude" className="page__section">
                    <h2 className="page__section-title">3. Claude: la política más conservadora por defecto</h2>
                    <article className="long-form-content">
                        <p>
                            Anthropic tiene la política más favorable para el usuario profesional entre los
                            tres grandes modelos.
                        </p>

                        <div className="table-container">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Plan Claude</th>
                                        <th>¿Entrena por defecto?</th>
                                        <th>¿Garantía contractual?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Free</td>
                                        <td>Puede usarse para mejorar el servicio</td>
                                        <td>No</td>
                                    </tr>
                                    <tr>
                                        <td>Pro ($20/mes)</td>
                                        <td><strong>No</strong> para entrenamiento de modelos</td>
                                        <td>No (política, no contrato)</td>
                                    </tr>
                                    <tr>
                                        <td>Team</td>
                                        <td>No</td>
                                        <td>Sí</td>
                                    </tr>
                                    <tr>
                                        <td>Enterprise</td>
                                        <td>No</td>
                                        <td>Sí, con DPA y cero retención de datos</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Claude Pro no entrena modelos con tus conversaciones. Es una política de Anthropic,
                            no solo una opción configurable. Para un abogado individual, Claude Pro ofrece
                            una protección razonable sin necesidad de plan Enterprise.
                        </p>
                    </article>
                </section>

                <section id="gemini" className="page__section">
                    <h2 className="page__section-title">4. Gemini: la complejidad de estar en el ecosistema Google</h2>
                    <article className="long-form-content">
                        <p>
                            Gemini tiene una política más compleja porque está profundamente integrado con el
                            ecosistema Google. Eso tiene implicancias que van más allá del modelo en sí.
                        </p>
                        <ul className="application-list">
                            <li><strong>Gemini.google.com (free):</strong> Google puede usar conversaciones para mejorar sus servicios. Podés revisar y controlar tus datos en myaccount.google.com</li>
                            <li><strong>Gemini Advanced ($20/mes):</strong> Mejor control, pero seguís dentro del ecosistema Google</li>
                            <li><strong>Google Workspace (plan empresarial):</strong> Los datos de la organización no se usan para entrenamiento. Garantía contractual</li>
                        </ul>
                        <div className="highlight-warning">
                            <strong>Punto crítico con Gemini:</strong> Si usás Gemini con tu cuenta personal de Google
                            y tenés el historial de actividad activado, tus conversaciones pueden estar guardadas en
                            tu cuenta de Google indefinidamente. Revisá la configuración en myaccount.google.com →
                            Datos y privacidad → Historial de aplicaciones de Google.
                        </div>
                    </article>
                </section>

                <section id="que-importa" className="page__section">
                    <h2 className="page__section-title">5. Para un abogado: qué es lo que realmente importa</h2>
                    <article className="long-form-content">
                        <p>
                            La pregunta sobre entrenamiento es importante, pero para un abogado hay preguntas
                            más inmediatas:
                        </p>

                        <h3>¿Pueden ver mis conversaciones empleados de la empresa?</h3>
                        <p>
                            En los planes básicos: posiblemente sí, para revisiones de seguridad. En los planes
                            Team/Enterprise: generalmente no, o con restricciones contractuales. Esta es una
                            distinción importante para el secreto profesional.
                        </p>

                        <h3>¿Mis conversaciones pueden aparecer en respuestas a otros usuarios?</h3>
                        <p>
                            <strong>No.</strong> Ninguno de los tres modelos incorpora conversaciones individuales
                            directamente en respuestas a otros usuarios. El entrenamiento es un proceso que extrae
                            patrones generales, no que reproduce conversaciones específicas. Esto es un mito que
                            genera pánico innecesario.
                        </p>

                        <h3>¿Qué pasa si hay una brecha de seguridad?</h3>
                        <p>
                            Tus conversaciones almacenadas en los servidores de la plataforma podrían estar
                            expuestas. Este es un riesgo real que existe con cualquier servicio en la nube —
                            no específico de la IA. La mitigación más efectiva es no subir información que,
                            si se filtrara, causaría un daño irreparable: no importa el proveedor.
                        </p>
                    </article>
                </section>

                <section id="resumen" className="page__section">
                    <h2 className="page__section-title">6. Resumen de configuración segura para abogados</h2>
                    <article className="long-form-content">
                        <div className="checklist-box">
                            <h3>Configuración mínima recomendada:</h3>
                            <ul className="checklist">
                                <li>☐ <strong>ChatGPT:</strong> Desactivar "Improve the model for everyone" en Data Controls</li>
                                <li>☐ <strong>ChatGPT:</strong> Considerar plan Team si manejás información corporativa o sensible</li>
                                <li>☐ <strong>Claude:</strong> Plan Pro es suficiente para abogados individuales (no entrena con tus datos)</li>
                                <li>☐ <strong>Gemini:</strong> Revisar configuración de historial en myaccount.google.com</li>
                                <li>☐ <strong>Todos:</strong> No subir información identificada de clientes (ver U3 de este módulo)</li>
                                <li>☐ <strong>Estudios:</strong> Evaluar planes Team/Enterprise para garantías contractuales</li>
                            </ul>
                        </div>
                    </article>
                </section>

                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/solo-practice-u5" className="unit-nav-link">
                            <span className="unit-nav-label">← Módulo anterior</span>
                            <span className="unit-nav-title">M3 U5: Modelo de negocio con IA</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Módulo 8</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/privacy-u2" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            U2 – Secreto profesional y IA: marco argentino →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyM8U1

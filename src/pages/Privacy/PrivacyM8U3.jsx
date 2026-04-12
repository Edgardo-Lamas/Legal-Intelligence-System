import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function PrivacyM8U3() {
    return (
        <div className="page">
            <PageSEO
                title="Cómo usar IA con información confidencial de clientes sin riesgo · M8 U3"
                description="Técnicas prácticas de anonimización, qué datos nunca deben ir a un prompt, y cómo construir un contexto útil para la IA sin comprometer la identidad de tu cliente."
                path="/privacy-u3"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 8 · Unidad 3</span>
                <h1 className="page__title">Cómo usar IA con información sensible — sin riesgo</h1>
                <p className="page__description">
                    No se trata de no usar IA con casos reales. Se trata de saber exactamente qué subís
                    y qué no. Esta unidad es el protocolo concreto.
                </p>
            </header>

            <div className="page__content">

                <section id="principio" className="page__section">
                    <h2 className="page__section-title">1. El principio de mínima exposición</h2>
                    <article className="long-form-content">
                        <p>
                            Para analizar una causa jurídicamente, la IA necesita entender <strong>los hechos,
                            el marco normativo y las relaciones jurídicas</strong>. Casi nunca necesita saber
                            el nombre real del cliente, su DNI, su dirección exacta o sus datos de cuenta bancaria.
                        </p>
                        <blockquote className="concept-quote">
                            Dale a la IA lo que necesita para razonar, no lo que necesitarías para identificar
                            a la persona. Son cosas distintas.
                        </blockquote>
                        <p>
                            Este principio — mínima exposición — es la guía práctica más útil. En la gran mayoría
                            de los casos, podés hacer un análisis jurídico excelente con información anonimizada.
                        </p>
                    </article>
                </section>

                <section id="que-no-subir" className="page__section">
                    <h2 className="page__section-title">2. Qué nunca debe aparecer en un prompt</h2>
                    <article className="long-form-content">
                        <div className="risk-list">
                            <div className="risk-item">
                                <span className="risk-icon">🚫</span>
                                <span><strong>DNI, CUIL, CUIT</strong> — identificadores únicos no necesarios para el análisis jurídico</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">🚫</span>
                                <span><strong>Datos bancarios</strong> — números de cuenta, CBU, tarjetas, saldos específicos</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">🚫</span>
                                <span><strong>Datos de salud identificados</strong> — diagnósticos vinculados a nombre real del paciente</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">🚫</span>
                                <span><strong>Menores de edad identificados</strong> — nombre, DNI, datos escolares o familiares</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">🚫</span>
                                <span><strong>Información que aún no es pública</strong> — estrategia de negociación, acuerdos confidenciales</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">🚫</span>
                                <span><strong>Credenciales y contraseñas</strong> — nunca, bajo ninguna circunstancia</span>
                            </div>
                        </div>
                    </article>
                </section>

                <section id="anonimizar" className="page__section">
                    <h2 className="page__section-title">3. Anonimización práctica: el método de 5 minutos</h2>
                    <article className="long-form-content">
                        <p>
                            Antes de copiar texto de un expediente a un prompt, aplicá estas sustituciones.
                            Podés hacerlo manualmente o con buscar y reemplazar en tu editor de texto.
                        </p>

                        <div className="table-container">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Dato original</th>
                                        <th>Reemplazarlo por</th>
                                        <th>Ejemplo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Nombre del cliente</td>
                                        <td>"el actor" / "el imputado" / "la empresa actora"</td>
                                        <td>"Juan García" → "el actor"</td>
                                    </tr>
                                    <tr>
                                        <td>Nombre de la contraparte</td>
                                        <td>"el demandado" / "la empresa demandada"</td>
                                        <td>"Empresa SA" → "la demandada"</td>
                                    </tr>
                                    <tr>
                                        <td>Nombres de testigos</td>
                                        <td>"Testigo A", "Testigo B"</td>
                                        <td>"María López" → "Testigo A"</td>
                                    </tr>
                                    <tr>
                                        <td>DNI / CUIL</td>
                                        <td>Eliminarlo directamente</td>
                                        <td>DNI 20.XXX.XXX → omitir</td>
                                    </tr>
                                    <tr>
                                        <td>Domicilios específicos</td>
                                        <td>"domicilio de la actora en [ciudad]"</td>
                                        <td>Calle 123 Piso 4 → "domicilio en La Plata"</td>
                                    </tr>
                                    <tr>
                                        <td>Montos exactos muy identificatorios</td>
                                        <td>Redondear o generalizar si el monto exacto no es relevante para el análisis</td>
                                        <td>$1.847.234 → "aproximadamente $1.8M"</td>
                                    </tr>
                                    <tr>
                                        <td>Nombre del juzgado / número de expediente</td>
                                        <td>"juzgado civil N°X de [distrito]" o eliminarlo</td>
                                        <td>Juzg. Civ. 15 Exp. 123/23 → omitir número</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="highlight-success">
                            <strong>Cuánto tiempo lleva:</strong> Para un expediente de 20 páginas, la
                            anonimización manual de los datos identificatorios toma entre 5 y 15 minutos.
                            Es una inversión pequeña frente al riesgo que mitiga.
                        </div>
                    </article>
                </section>

                <section id="prompt-seguro" className="page__section">
                    <h2 className="page__section-title">4. Construir el contexto sin identificar</h2>
                    <article className="long-form-content">
                        <p>
                            Una técnica muy eficiente: en lugar de pegar el documento completo, describís
                            el caso en abstracto con los elementos jurídicamente relevantes.
                        </p>

                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--bad">
                                <h4>✗ Contexto con datos identificatorios</h4>
                                <div className="full-prompt-example" style={{marginTop: '0.5rem'}}>
                                    <p>
                                        "Mi cliente Juan García (DNI 20.123.456, domiciliado en Calle
                                        Falsa 123, La Plata) fue despedido el 15/03/2024 de Empresa SA
                                        donde trabajó 8 años..."
                                    </p>
                                </div>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>✅ Mismo contexto, anonimizado</h4>
                                <div className="full-prompt-example" style={{marginTop: '0.5rem'}}>
                                    <p>
                                        "El actor fue despedido sin causa en marzo de 2024 de una empresa
                                        de servicios donde trabajó 8 años. Tenía antigüedad de 8 años,
                                        categoría técnico especializado, remuneración de $X..."
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h3>Prompt template seguro para análisis de expediente</h3>
                        <div className="full-prompt-example">
                            <p>
                                "Actuás como asistente jurídico especializado en [área]. Te presento los hechos
                                de una causa en forma anonimizada. [Aquí los hechos sin datos identificatorios].
                                Necesito que analices: [tarea específica]. Jurisdicción: Argentina, [provincia].
                                No vas a recibir datos personales identificables — si para el análisis fuera
                                relevante algún dato específico que omití, indicámelo y te digo si puedo
                                proporcionarlo de forma genérica."
                            </p>
                        </div>
                    </article>
                </section>

                <section id="documentos" className="page__section">
                    <h2 className="page__section-title">5. Cuando necesitás subir el documento completo</h2>
                    <article className="long-form-content">
                        <p>
                            Hay casos donde necesitás subir el documento tal cual — porque la anonimización
                            rompería el análisis (por ejemplo, una sentencia con números de artículo específicos
                            o un contrato donde las cláusulas están numeradas en el original). Para esos casos:
                        </p>
                        <ul className="key-points">
                            <li>
                                <strong>Usá una plataforma con la política correcta.</strong> Claude Pro o Team,
                                ChatGPT con entrenamiento desactivado, o Google Workspace si trabajás en ese ecosistema.
                            </li>
                            <li>
                                <strong>Considerá si el documento tiene datos de terceros.</strong> Una sentencia
                                publicada es pública. Un expediente con datos privados de tu cliente y testigos
                                no lo es.
                            </li>
                            <li>
                                <strong>Limitá el scope.</strong> En lugar de subir el expediente completo,
                                subí solo las partes relevantes para la consulta específica.
                            </li>
                            <li>
                                <strong>Usá Claude Projects con instrucciones claras.</strong> Un Project
                                dedicado a esa causa, con instrucciones que incluyan: "Este material es
                                confidencial. No referencies a nombres propios en tus respuestas."
                            </li>
                        </ul>
                    </article>
                </section>

                <section id="workflow" className="page__section">
                    <h2 className="page__section-title">6. El workflow seguro: antes de cada sesión</h2>
                    <article className="long-form-content">
                        <div className="flow-steps">
                            <div className="flow-step">
                                <strong>ANTES de copiar cualquier texto a un prompt:</strong><br />
                                Preguntate: "¿Hay datos que identifican a mi cliente o a terceros?" Si la respuesta
                                es sí, aplicá la anonimización.
                            </div>
                            <div className="flow-step">
                                <strong>AL ABRIR la sesión de trabajo:</strong><br />
                                Confirmá que estás usando el plan correcto. Si no recordás si desactivaste el
                                entrenamiento en ChatGPT, verificá antes de continuar.
                            </div>
                            <div className="flow-step">
                                <strong>AL CARGAR documentos:</strong><br />
                                Preferí siempre el Project de Claude o el hilo dedicado a esa causa.
                                No mezcles causas en la misma conversación.
                            </div>
                            <div className="flow-step">
                                <strong>AL TERMINAR la sesión:</strong><br />
                                Si trabajaste con información particularmente sensible en un plan básico,
                                considerá eliminar el historial de la conversación. Todos los modelos
                                permiten borrar conversaciones específicas.
                            </div>
                        </div>
                    </article>
                </section>

                <section id="checklist" className="page__section">
                    <h2 className="page__section-title">7. Checklist de esta unidad</h2>
                    <article className="long-form-content">
                        <div className="checklist-box">
                            <ul className="checklist">
                                <li>☐ Conozco los datos que nunca deben aparecer en un prompt</li>
                                <li>☐ Sé aplicar la anonimización básica en menos de 10 minutos</li>
                                <li>☐ Tengo un prompt template seguro para análisis de expedientes</li>
                                <li>☐ Sé qué hacer cuando necesito subir un documento completo</li>
                                <li>☐ Aplico el criterio de mínima exposición antes de cada sesión</li>
                            </ul>
                        </div>
                    </article>
                </section>

                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/privacy-u2" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M8 U2: Secreto profesional y IA</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/privacy-u4" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            U4 – Instancias privadas y planes Enterprise →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyM8U3

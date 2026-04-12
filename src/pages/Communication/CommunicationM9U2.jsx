import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function CommunicationM9U2() {
    return (
        <div className="page">
            <PageSEO
                title="LinkedIn jurídico: estrategia de contenido con IA · M9 U2"
                description="Cómo construir presencia profesional en LinkedIn usando IA para generar contenido jurídico de valor — sin autopromoción vacía y sin invertir horas en redacción."
                path="/communication-u2"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 9 · Unidad 2</span>
                <h1 className="page__title">LinkedIn jurídico: estrategia de contenido con IA</h1>
                <p className="page__description">
                    El abogado que publica con criterio construye autoridad pasiva — clientes
                    que llegan pre-convencidos de su capacidad antes de la primera reunión.
                </p>
            </header>

            <div className="page__content">

                <section id="por-que" className="page__section">
                    <h2 className="page__section-title">1. Por qué LinkedIn y no Instagram u otras redes</h2>
                    <article className="long-form-content">
                        <p>
                            LinkedIn concentra a las personas que toman decisiones en empresas,
                            contratan servicios profesionales y buscan abogados especializados.
                            Para el abogado que trabaja con empresas, personas de cierto nivel
                            patrimonial o en áreas complejas, LinkedIn tiene el mejor ratio
                            de audiencia relevante por esfuerzo.
                        </p>
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--good">
                                <h4>LinkedIn funciona para</h4>
                                <ul>
                                    <li>Derecho corporativo y comercial</li>
                                    <li>Derecho laboral (empleadores)</li>
                                    <li>Propiedad intelectual y startups</li>
                                    <li>Asesoramiento a PyMEs</li>
                                    <li>Consultoría y compliance</li>
                                </ul>
                            </div>
                            <div className="comparison-box comparison-box--bad">
                                <h4>LinkedIn es menos efectivo para</h4>
                                <ul>
                                    <li>Derecho de familia (audiencia en Instagram)</li>
                                    <li>Accidentes de tráfico (SEO local)</li>
                                    <li>Defensa penal de individuos</li>
                                    <li>Consultas de bajo valor económico</li>
                                </ul>
                            </div>
                        </div>
                        <blockquote className="concept-quote">
                            El contenido en LinkedIn no reemplaza el boca a boca — lo potencia.
                            El referido que viene a verte ya leyó lo que publicaste. Llega sabiendo
                            que sabés de lo que hablás.
                        </blockquote>
                    </article>
                </section>

                <section id="que-publicar" className="page__section">
                    <h2 className="page__section-title">2. Qué publicar: los 4 tipos de contenido que funcionan</h2>
                    <article className="long-form-content">

                        <h3>Tipo 1: Comentario de novedad normativa o jurisprudencial</h3>
                        <p>
                            Un fallo reciente, una modificación legal, una resolución de la AFIP.
                            Explicás qué pasó y qué implica para tus clientes tipo.
                            Posicionamiento: especialista que está al día.
                        </p>
                        <div className="full-prompt-example">
                            <p>
                                "Actuás como un abogado [especialidad] escribiendo en LinkedIn para
                                una audiencia de empresarios y profesionales. Salió [novedad normativa/fallo].
                            </p>
                            <p>
                                Redactá un post de LinkedIn que: (1) empiece con el impacto concreto
                                ('A partir de hoy, si tenés empleados en relación de dependencia, esto
                                te afecta directamente'), (2) explique qué cambió en 2-3 párrafos
                                simples, (3) cierre con una recomendación práctica o reflexión que
                                invite a comentar. 200-300 palabras. Sin emojis de colores. Tono
                                profesional pero conversacional."
                            </p>
                        </div>

                        <h3>Tipo 2: Mito jurídico desmontado</h3>
                        <p>
                            "El error que comete el 90% de los empleadores al despedir" /
                            "Por qué 'lo firmó así que no hay problema' es una trampa legal".
                            Alto engagement porque la gente comparte lo que la sorprende.
                        </p>
                        <div className="full-prompt-example">
                            <p>
                                "Generá 5 ideas de posts del tipo 'mito jurídico desmontado' para
                                un abogado especialista en [área]. Cada idea debe: (1) nombrar el
                                mito exacto que cree la gente, (2) cuál es la realidad legal,
                                (3) qué riesgo genera creer el mito. Prioridad: ideas contraintuitivas
                                que genuinamente sorprendan a alguien sin formación jurídica."
                            </p>
                        </div>

                        <h3>Tipo 3: Caso práctico anonimizado</h3>
                        <p>
                            "Un cliente llegó con esta situación. Esto es lo que encontramos y
                            esto es lo que hicimos." Sin identificar al cliente ni al expediente.
                            Posicionamiento: abogado que resuelve problemas reales.
                        </p>
                        <div className="full-prompt-example">
                            <p>
                                "Tengo este caso anonimizado: [describir situación, problema,
                                solución, resultado]. Redactá un post de LinkedIn en formato
                                narrativo que: (1) empiece con el problema del cliente de forma
                                que capture a quien pueda tener el mismo problema, (2) cuente
                                qué encontramos (el detalle jurídico relevante), (3) describa
                                el resultado sin exagerar, (4) cierre con la lección generalizable.
                                Que no suene a propaganda. Que suene a análisis honesto."
                            </p>
                        </div>

                        <h3>Tipo 4: Reflexión sobre la profesión</h3>
                        <p>
                            Tu visión sobre cómo cambia la abogacía, qué te enseñó un caso difícil,
                            por qué elegiste especializarte en lo que te especializaste.
                            Posicionamiento: abogado con criterio y perspectiva, no solo técnica.
                        </p>
                    </article>
                </section>

                <section id="frecuencia" className="page__section">
                    <h2 className="page__section-title">3. Frecuencia y calendario con IA</h2>
                    <article className="long-form-content">
                        <p>
                            La consistencia supera a la frecuencia. Un post semanal todos los
                            miércoles durante seis meses hace más que cinco posts en enero y
                            ninguno después.
                        </p>
                        <div className="flow-steps">
                            <div className="flow-step">
                                <strong>Una vez al mes (30 min):</strong> Pedile a Claude que genere
                                un calendario de contenido para las próximas 4 semanas: 4 ideas de
                                post, 1 por tipo, basadas en novedades del mes en tu área de práctica.
                            </div>
                            <div className="flow-step">
                                <strong>Una vez a la semana (15 min):</strong> Tomás la idea del
                                calendario, la convertís en brief para Claude, él redacta el borrador,
                                vos lo ajustás en 5 minutos.
                            </div>
                            <div className="flow-step">
                                <strong>Publicás</strong> el mismo día cada semana. LinkedIn premia
                                la consistencia con mayor alcance orgánico.
                            </div>
                        </div>
                        <div className="full-prompt-example">
                            <p>
                                "Actuás como estratega de contenido para un abogado especialista
                                en [área]. Generá un calendario de contenido para LinkedIn para
                                el mes de [mes]. Tengo tiempo para publicar 1 vez por semana.
                            </p>
                            <p>
                                Para cada semana: (1) tema/ángulo del post, (2) tipo de contenido
                                (novedad / mito / caso / reflexión), (3) gancho de apertura
                                (primera oración que haga parar el scroll), (4) por qué este
                                tema ahora (contexto de actualidad).
                            </p>
                            <p>
                                Novedades del mes en mi área: [listar fallos, normas, temas relevantes]."
                            </p>
                        </div>
                    </article>
                </section>

                <section id="lo-que-no" className="page__section">
                    <h2 className="page__section-title">4. Lo que no publicar</h2>
                    <article className="long-form-content">
                        <div className="risk-list">
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>
                                    <strong>Publicidad directa de servicios.</strong> "Consulte sin cargo"
                                    como post en sí mismo. Genera rechazo y no construye autoridad.
                                    Tu expertise habla por sí solo — el CTA va al final de contenido útil.
                                </span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>
                                    <strong>Contenido que podría identificar a un cliente</strong> sin
                                    consentimiento explícito, aunque sea anonimizado en parte.
                                    Si hay duda, no publicar.
                                </span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>
                                    <strong>Afirmaciones categóricas sobre casos específicos</strong>
                                    que el lector pueda interpretar como consejo legal. Siempre aclarar
                                    que el contenido es informativo y no reemplaza asesoramiento profesional.
                                </span>
                            </div>
                        </div>
                    </article>
                </section>

                <section id="checklist" className="page__section">
                    <h2 className="page__section-title">5. Checklist de esta unidad</h2>
                    <article className="long-form-content">
                        <div className="checklist-box">
                            <ul className="checklist">
                                <li>☐ Definí si LinkedIn es el canal correcto para mi tipo de práctica</li>
                                <li>☐ Generé un calendario de contenido para el próximo mes con IA</li>
                                <li>☐ Escribí y publiqué al menos un post usando el flujo IA + revisión propia</li>
                                <li>☐ Identifiqué 3 mitos jurídicos de mi área que vale la pena desmontar</li>
                                <li>☐ Establecí un día fijo a la semana para publicar</li>
                            </ul>
                        </div>
                    </article>
                </section>

                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/communication" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M9 U1: Comunicación con clientes</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/communication-u3" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            U3 – Blog y SEO jurídico asistido por IA →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommunicationM9U2

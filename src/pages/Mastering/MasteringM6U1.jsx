import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function MasteringM6U1() {
    return (
        <div className="page">
            <PageSEO
                title="Claude Projects: configuración avanzada para gestión de causas · M5 U1"
                description="Cómo configurar Claude Projects como asistente jurídico especializado con memoria persistente. Custom Instructions, estructura de documentos, prompts reales de trabajo jurídico."
                path="/mastering"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 5 · Unidad 1</span>
                <h1 className="page__title">Claude Projects: configuración avanzada</h1>
                <p className="page__description">
                    De las conversaciones que se olvidan al asistente jurídico con memoria persistente.
                    Cómo configurar un Project que conoce tu caso, tu estilo y tu estrategia.
                </p>
            </header>

            <div className="page__content">

                <section id="que-es" className="page__section">
                    <h2 className="page__section-title">1. Qué es un Project y por qué transforma la práctica</h2>
                    <article className="long-form-content">
                        <p>
                            Claude Projects es una funcionalidad de Claude Pro que permite crear
                            <strong> espacios de trabajo persistentes</strong>. A diferencia de las
                            conversaciones normales que se resetean al cerrar, un Project recuerda:
                        </p>
                        <ul className="application-list">
                            <li><strong>Documentos cargados:</strong> Expediente, escritos, normativa, jurisprudencia</li>
                            <li><strong>Instrucciones personalizadas:</strong> Tu rol, jurisdicción, estilo de trabajo</li>
                            <li><strong>Historial completo:</strong> Todo lo que trabajaste en el caso, sesión tras sesión</li>
                        </ul>
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--bad">
                                <h4>Sin Projects</h4>
                                <p>Cada vez que abrís Claude empezás de cero. Re-explicás el caso, volvés a cargar documentos, repetís instrucciones. El modelo no recuerda nada.</p>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>Con Projects</h4>
                                <p>Abrís "García c/ Empresa S.A." y Claude ya sabe todo: los hechos, tu estrategia, los documentos, las decisiones previas. Preguntás directamente.</p>
                            </div>
                        </div>
                        <blockquote className="concept-quote">
                            Un Project funciona como un legajo digital inteligente. No solo almacena
                            información — la comprende y puede operar sobre ella.
                        </blockquote>
                    </article>
                </section>

                <section id="configuracion" className="page__section">
                    <h2 className="page__section-title">2. Configuración paso a paso</h2>
                    <article className="long-form-content">

                        <h3>Paso 1: Crear el Project con nombre útil</h3>
                        <p>En claude.ai, panel izquierdo → "Projects" → "New Project". El nombre debe identificar el caso de un vistazo:</p>
                        <div className="full-prompt-example">
                            <p>[LABORAL] Pérez c/ Tech Corp — Despido incausado</p>
                            <p>[CIVIL] García c/ Constructora Sur — Daños y perjuicios</p>
                            <p>[PENAL] Defensa López — Robo calificado — JUZGADO 3</p>
                        </div>

                        <h3>Paso 2: Custom Instructions — el corazón del Project</h3>
                        <p>
                            Las instrucciones fijas le dicen a Claude cómo comportarse en TODO el proyecto.
                            Este es el modelo que funciona:
                        </p>
                        <div className="full-prompt-example">
                            <p>ROL: Sos mi asistente jurídico especializado en derecho laboral argentino. Conocés la LCT, la jurisprudencia de la CSJN, la SCBA y las Cámaras del Trabajo.</p>
                            <p>CASO: Despido sin causa de trabajador con 10 años de antigüedad. Posible mobbing previo documentado. Represento al actor.</p>
                            <p>JURISDICCIÓN: Cámara del Trabajo de La Plata, Provincia de Buenos Aires.</p>
                            <p>ETAPA ACTUAL: Contestación de traslado — vence en 5 días.</p>
                            <p>ESTILO: Técnico y preciso. Citá artículos específicos. Si no estás seguro de una cita, usá [VERIFICAR] en lugar de inventar. Pedime datos que te falten antes de avanzar.</p>
                        </div>
                        <div className="highlight-warning">
                            <strong>Actualizar las instrucciones cuando el caso avanza:</strong> Las instrucciones que decían "etapa de demanda" deben actualizarse a "etapa de alegatos" cuando llegue ese momento. Un Project con instrucciones desactualizadas genera respuestas desenfocadas.
                        </div>

                        <h3>Paso 3: Knowledge — qué documentos cargar</h3>
                        <p>
                            La sección Knowledge acepta hasta 50 archivos. Principio: cargá solo lo
                            necesario para la tarea actual. Más documentos no es mejor — diluye el foco.
                        </p>
                        <ul className="application-list">
                            <li><strong>Documentos del caso:</strong> Expediente (o páginas clave), escritos propios y de la contraparte</li>
                            <li><strong>Normativa específica:</strong> Los artículos exactos que aplican, no la ley completa</li>
                            <li><strong>Jurisprudencia verificada:</strong> Solo los fallos que realmente vas a citar</li>
                            <li><strong>Tus templates:</strong> Modelos de escritos del estudio para mantener el estilo</li>
                        </ul>
                    </article>
                </section>

                <section id="prompts" className="page__section">
                    <h2 className="page__section-title">3. Prompts de trabajo jurídico real</h2>
                    <article className="long-form-content">

                        <h3>Análisis inicial del caso</h3>
                        <div className="full-prompt-example">
                            <p>
                                "Analizá los documentos cargados y dame: (1) timeline cronológico de hechos
                                jurídicamente relevantes, (2) pretensiones con sustento normativo,
                                (3) puntos controvertidos entre las partes, (4) fortalezas y debilidades
                                de nuestra posición, (5) riesgos procesales a monitorear."
                            </p>
                        </div>

                        <h3>Contraargumentación</h3>
                        <div className="full-prompt-example">
                            <p>
                                "La contraparte argumenta que [X]. Buscá en los documentos del caso
                                y en tu conocimiento: (1) argumentos de hecho que refuten esa posición,
                                (2) fundamento normativo específico, (3) debilidades del argumento que
                                puedo explotar. Priorizá por fortaleza."
                            </p>
                        </div>

                        <h3>Redacción sección por sección</h3>
                        <div className="full-prompt-example">
                            <p>
                                "Redactá el capítulo [N] del escrito: [título]. Objetivo: demostrar [Y].
                                Incluí referencia a los hechos probados en el expediente. Usá [VERIFICAR]
                                para cualquier cita que no tengas confirmada. No avances al siguiente
                                capítulo hasta que yo apruebe este."
                            </p>
                        </div>

                        <h3>Revisión de coherencia</h3>
                        <div className="full-prompt-example">
                            <p>
                                "Revisá el escrito completo: (1) ¿hay contradicciones entre secciones?,
                                (2) ¿las referencias cruzadas son correctas?, (3) ¿el argumento central
                                es consistente de principio a fin?, (4) ¿hay alguna sección que debilite
                                en vez de fortalecer la posición? Reportá cada problema con sección y
                                sugerencia de corrección."
                            </p>
                        </div>
                    </article>
                </section>

                <section id="estructura" className="page__section">
                    <h2 className="page__section-title">4. Un Project por caso, sin excepciones</h2>
                    <article className="long-form-content">
                        <p>
                            No mezcles casos en un mismo Project. Cada expediente tiene su espacio,
                            por dos razones:
                        </p>
                        <ul className="key-points">
                            <li>
                                <strong>Confidencialidad conceptual:</strong> Si mezclás el caso García con
                                el caso López, Claude puede cruzar información involuntariamente en sus
                                respuestas. No es un riesgo técnico de filtración — es un riesgo de
                                razonamiento contaminado.
                            </li>
                            <li>
                                <strong>Contexto limpio:</strong> Cuando el Project tiene un solo caso,
                                cada respuesta de Claude está 100% orientada a ese expediente. La
                                precisión mejora sustancialmente.
                            </li>
                        </ul>
                        <div className="highlight-success">
                            <strong>Costo real de Projects:</strong> Claude Pro (~$20 USD/mes) sin límite
                            de Projects activos. El retorno de inversión se mide en horas de trabajo
                            ahorradas desde la primera semana de uso.
                        </div>
                    </article>
                </section>

                <section id="checklist" className="page__section">
                    <h2 className="page__section-title">5. Checklist de esta unidad</h2>
                    <article className="long-form-content">
                        <div className="checklist-box">
                            <ul className="checklist">
                                <li>☐ Tengo cuenta Claude Pro activa</li>
                                <li>☐ Creé al menos un Project para un caso real o de práctica</li>
                                <li>☐ Escribí Custom Instructions específicas para ese caso</li>
                                <li>☐ Cargué los documentos relevantes en Knowledge</li>
                                <li>☐ Hice el análisis inicial con el prompt correspondiente</li>
                                <li>☐ Entiendo por qué no debo mezclar casos en un mismo Project</li>
                            </ul>
                        </div>
                    </article>
                </section>

                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/gemini-u3" className="unit-nav-link">
                            <span className="unit-nav-label">← Módulo anterior</span>
                            <span className="unit-nav-title">M4 U3: Automatización y memoria con Gemini</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/mastering-u2" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            U2 – Extended Thinking: análisis jurídico profundo →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MasteringM6U1

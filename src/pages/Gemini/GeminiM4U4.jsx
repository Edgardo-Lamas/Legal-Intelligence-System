import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function GeminiM4U4() {
    return (
        <div className="page">
            <PageSEO
                title="Gemini + Google Workspace: integración en el flujo del estudio · M4 U4"
                description="Cómo usar Gemini integrado en Google Docs, Gmail, Meet y Drive para transformar las reuniones, documentos y comunicaciones del estudio jurídico."
                path="/gemini-u4"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 4 · Unidad 4</span>
                <h1 className="page__title">Gemini + Google Workspace: integración en el flujo del estudio</h1>
                <p className="page__description">
                    Si ya usás Google Docs, Gmail y Meet, Gemini ya está ahí. Esta unidad
                    es sobre cómo sacarlo de "característica ignorada" a parte central del flujo.
                </p>
            </header>

            <div className="page__content">

                <section id="contexto" className="page__section">
                    <h2 className="page__section-title">1. Gemini en Google Workspace: qué es y dónde está</h2>
                    <article className="long-form-content">
                        <p>
                            Google integró Gemini directamente en todas sus apps de productividad.
                            No es una herramienta separada — aparece como el ícono de estrella
                            en Google Docs, Gmail, Meet y Drive. Con un plan Google Workspace
                            (o Google One AI Premium), tenés acceso a Gemini 2.5 Pro desde dentro
                            de las apps que ya usás.
                        </p>
                        <p>
                            La ventaja sobre usar Gemini en gemini.google.com es el contexto:
                            Gemini en Docs puede leer el documento que tenés abierto. Gemini en
                            Gmail puede resumir el hilo de emails. Gemini en Meet puede transcribir
                            la reunión y generar el acta. No necesitás copiar y pegar nada.
                        </p>
                        <blockquote className="concept-quote">
                            La integración nativa elimina la fricción. Cada vez que copiar y pegar
                            es un paso extra, la mayoría de los usuarios no lo hacen. Gemini en
                            Workspace quita ese paso.
                        </blockquote>
                    </article>
                </section>

                <section id="docs" className="page__section">
                    <h2 className="page__section-title">2. Gemini en Google Docs: del borrador al documento</h2>
                    <article className="long-form-content">
                        <p>
                            El panel lateral de Gemini en Docs tiene acceso a todo el contenido
                            del documento abierto. Usos concretos para el abogado:
                        </p>

                        <h3>Revisión de coherencia de un escrito</h3>
                        <div className="full-prompt-example">
                            <p>
                                "Revisá este escrito y reportame: (1) si hay contradicciones entre
                                la sección de hechos y la de derecho, (2) si los argumentos están
                                ordenados de forma lógica, (3) si hay alguna afirmación que necesita
                                sustento que no aparece."
                            </p>
                        </div>

                        <h3>Expansión de una sección débil</h3>
                        <div className="full-prompt-example">
                            <p>
                                "La sección 3 del escrito es demasiado breve. El argumento central
                                es [X]. Redactá dos párrafos adicionales que desarrollen ese argumento
                                con mayor detalle, manteniendo el tono y estilo del resto del documento."
                            </p>
                        </div>

                        <h3>Adaptación de tono</h3>
                        <div className="full-prompt-example">
                            <p>
                                "Este documento está escrito para presentar ante el juzgado.
                                Necesito una versión del resumen inicial (primer párrafo) adaptada
                                para explicarle la situación al cliente sin formación jurídica."
                            </p>
                        </div>

                        <div className="highlight-warning">
                            <strong>Límite importante:</strong> Gemini en Docs no tiene acceso a
                            internet ni a otros documentos del Drive por defecto. Lee solo el
                            documento abierto. Para análisis que involucren múltiples documentos,
                            usá NotebookLM (M6 U3) o Gemini en gemini.google.com con los archivos
                            cargados manualmente.
                        </div>
                    </article>
                </section>

                <section id="meet" className="page__section">
                    <h2 className="page__section-title">3. Gemini en Google Meet: de la reunión al acta en minutos</h2>
                    <article className="long-form-content">
                        <p>
                            Esta es probablemente la función más valiosa para abogados: Gemini
                            puede transcribir una reunión de Meet en tiempo real y, al terminar,
                            generar un resumen con los puntos discutidos, decisiones tomadas y
                            próximos pasos.
                        </p>
                        <div className="flow-steps">
                            <div className="flow-step">
                                <strong>Activás "Tomar notas con Gemini"</strong> al iniciar la reunión.
                                Todos los participantes ven un aviso de que la reunión se está transcribiendo.
                            </div>
                            <div className="flow-step">
                                <strong>Gemini transcribe en tiempo real</strong> — no perfectamente,
                                pero lo suficientemente bien para capturar el contenido sustancial.
                                En español funciona bien con parlantes claros.
                            </div>
                            <div className="flow-step">
                                <strong>Al terminar, Gemini genera el resumen</strong> automáticamente:
                                temas discutidos, decisiones tomadas, elementos de acción con
                                responsables. Lo guarda en Google Docs vinculado al evento de Calendar.
                            </div>
                            <div className="flow-step">
                                <strong>Revisás el acta generada</strong> (5 minutos), corregís
                                lo que el modelo interpretó mal, y tenés la documentación de la
                                reunión lista.
                            </div>
                        </div>
                        <p>
                            Para reuniones con clientes donde tomar notas manualmente distrae:
                            actuar con el cliente en primer plano, y dejar que Gemini capture
                            el contenido. El acta revisada es más confiable que el apunte
                            apresurado de la reunión.
                        </p>
                    </article>
                </section>

                <section id="gmail" className="page__section">
                    <h2 className="page__section-title">4. Gemini en Gmail: gestión inteligente de correspondencia</h2>
                    <article className="long-form-content">
                        <p>
                            El panel lateral de Gemini en Gmail puede resumir hilos largos,
                            redactar respuestas y buscar información en el contexto del email.
                            Tres usos relevantes para el estudio:
                        </p>

                        <h3>Resumir un hilo de emails largo</h3>
                        <p>
                            Cuando recibís una cadena de 40 emails de un caso y necesitás entender
                            el estado actual sin leer todo:
                        </p>
                        <div className="full-prompt-example">
                            <p>
                                "Resumí este hilo de emails: (1) cuál fue el tema central de la
                                conversación, (2) qué se acordó o decidió, (3) cuál es el estado
                                actual de la situación, (4) si hay algo pendiente de respuesta
                                de mi parte."
                            </p>
                        </div>

                        <h3>Redactar respuesta con contexto del hilo</h3>
                        <div className="full-prompt-example">
                            <p>
                                "Basándote en este hilo, redactá una respuesta que: confirme la
                                recepción de los documentos del 15/4, informe que los analizaré
                                en 48 horas, y pida la documentación que todavía falta según
                                lo acordado en el email del 10/4."
                            </p>
                        </div>

                        <h3>Extraer acciones pendientes de un email complejo</h3>
                        <div className="full-prompt-example">
                            <p>
                                "Listá todas las acciones que requiere este email de mi parte,
                                en orden de urgencia. Para cada una indicá si tiene deadline
                                explícito."
                            </p>
                        </div>
                    </article>
                </section>

                <section id="drive" className="page__section">
                    <h2 className="page__section-title">5. Gemini en Drive y el flujo completo</h2>
                    <article className="long-form-content">
                        <p>
                            Gemini en Google Drive permite buscar contenido semánticamente —
                            no por nombre de archivo sino por lo que dice el documento.
                            "Encontrá el contrato donde acordamos el plazo de entrega de 30 días"
                            funciona aunque no recuerdes el nombre del archivo.
                        </p>
                        <p>
                            El flujo completo de una semana de trabajo con Workspace integrado:
                        </p>
                        <div className="table-container">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Momento</th>
                                        <th>Herramienta</th>
                                        <th>Qué hace Gemini</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Reunión con cliente (Meet)</td>
                                        <td>Gemini en Meet</td>
                                        <td>Transcribe y genera acta automática</td>
                                    </tr>
                                    <tr>
                                        <td>Revisión de emails del día</td>
                                        <td>Gemini en Gmail</td>
                                        <td>Resume hilos, extrae acciones pendientes</td>
                                    </tr>
                                    <tr>
                                        <td>Redacción de escrito</td>
                                        <td>Gemini en Docs</td>
                                        <td>Revisa coherencia, expande secciones, adapta tono</td>
                                    </tr>
                                    <tr>
                                        <td>Búsqueda de documentos</td>
                                        <td>Gemini en Drive</td>
                                        <td>Búsqueda semántica por contenido</td>
                                    </tr>
                                    <tr>
                                        <td>Investigación jurídica profunda</td>
                                        <td>Deep Research (gemini.google.com)</td>
                                        <td>Informe completo con fuentes verificadas</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </article>
                </section>

                <section id="checklist" className="page__section">
                    <h2 className="page__section-title">6. Checklist de esta unidad</h2>
                    <article className="long-form-content">
                        <div className="checklist-box">
                            <ul className="checklist">
                                <li>☐ Activé Gemini en Google Workspace (o verificé que esté activo en mi plan)</li>
                                <li>☐ Usé Gemini en Docs para revisar un documento real</li>
                                <li>☐ Activé la función de notas en al menos una reunión de Meet</li>
                                <li>☐ Usé Gemini en Gmail para resumir un hilo largo</li>
                                <li>☐ Probé la búsqueda semántica en Drive para encontrar un documento por contenido</li>
                            </ul>
                        </div>
                    </article>
                </section>

                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/gemini-u3" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M4 U3: Automatización y Memoria</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próximo módulo:</span>
                        <Link to="/mastering" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            M5 – Claude: de Projects a agentes →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeminiM4U4

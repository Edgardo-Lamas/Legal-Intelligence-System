import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function EcosystemM5U3() {
    return (
        <div className="page">
            <PageSEO
                title="NotebookLM: tu base de jurisprudencia con IA · M6 U3"
                description="Cómo usar NotebookLM de Google para construir una base de conocimiento jurídico propia, consultable con IA. Jurisprudencia local, doctrina del estudio, expedientes de referencia."
                path="/ecosystem-u3"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 6 · Unidad 3</span>
                <h1 className="page__title">NotebookLM: tu base de jurisprudencia con IA</h1>
                <p className="page__description">
                    La primera herramienta que te deja construir una IA que responde exclusivamente
                    con tus documentos — sin programar y sin pagar una fortuna.
                </p>
            </header>

            <div className="page__content">

                <section id="que-es" className="page__section">
                    <h2 className="page__section-title">1. Qué es NotebookLM y por qué importa</h2>
                    <article className="long-form-content">
                        <p>
                            NotebookLM es una herramienta de Google que te permite cargar tus propios
                            documentos y hacer preguntas sobre ellos con IA. A diferencia de ChatGPT
                            o Claude, que responden con su conocimiento general, NotebookLM responde
                            <strong> exclusivamente con lo que vos le cargaste</strong>.
                        </p>
                        <p>
                            Para el abogado, eso cambia todo. Podés cargar 50 fallos de las Cámaras
                            de Apelaciones de tu jurisdicción, un manual de procedimiento, tus propios
                            modelos de escritos, y la doctrina relevante de tu área. Y preguntarle
                            sobre ese corpus específico, con citas exactas de los documentos que cargaste.
                        </p>
                        <blockquote className="concept-quote">
                            NotebookLM no sabe nada de lo que no le diste. Y eso es exactamente
                            lo que lo hace útil para trabajo jurídico serio.
                        </blockquote>
                    </article>
                </section>

                <section id="casos-uso" className="page__section">
                    <h2 className="page__section-title">2. Casos de uso para abogados</h2>
                    <article className="long-form-content">

                        <h3>Base de jurisprudencia local</h3>
                        <p>
                            Cargás los fallos más relevantes de tu jurisdicción y área de práctica.
                            Cuando necesitás investigar si alguno de esos tribunales ya se pronunció
                            sobre un punto específico, se lo preguntás a NotebookLM y te da la cita
                            exacta del fallo, con extracto del texto.
                        </p>
                        <p>
                            Ideal para: Cámaras de Apelaciones de tu provincia, fallos de la SCBA
                            en tu área, CSJN en los temas que trabajás frecuentemente.
                        </p>

                        <h3>Doctrina de la casa</h3>
                        <p>
                            Cargás los modelos de escritos del estudio, las estrategias que funcionaron
                            en causas anteriores, los criterios propios que desarrollaron con el tiempo.
                            NotebookLM se convierte en la memoria del estudio: cualquier abogado del equipo
                            puede preguntarle "¿cómo plantea el estudio el agravio por falta de fundamentación?"
                            y obtener los precedentes propios con cita exacta.
                        </p>

                        <h3>Análisis de expediente complejo</h3>
                        <p>
                            Cargás el expediente (o los documentos clave de la causa) y hacés preguntas
                            sobre él: "¿Qué prueba documental ofreció la actora?", "¿En qué fecha se
                            notificó la resolución de fs. 45?", "¿Hay contradicción entre lo que declaró
                            el testigo A y el testigo B?". NotebookLM responde con cita de página.
                        </p>

                        <h3>Preparación de audiencias</h3>
                        <p>
                            Cargás el expediente, los fallos relevantes, y la doctrina que vas a citar.
                            Preguntás: "¿Cuál es el argumento más sólido para rebatir la prescripción
                            planteada por la contraria, basándote solo en los documentos que tenés?"
                        </p>
                    </article>
                </section>

                <section id="como-usar" className="page__section">
                    <h2 className="page__section-title">3. Cómo configurar tu NotebookLM jurídico</h2>
                    <article className="long-form-content">

                        <h3>Paso 1: Crear un notebook por área de práctica</h3>
                        <p>
                            No un solo notebook para todo — uno por área. Ejemplos:
                        </p>
                        <ul className="application-list">
                            <li>"Derecho laboral PBA" — fallos SCBA, Cámaras laborales de la provincia</li>
                            <li>"Derecho penal CPP PBA" — fallos, doctrina sobre la Ley 11.922</li>
                            <li>"Modelos de escritos del estudio" — templates propios verificados</li>
                            <li>"Causa García c/ Empresa S.A." — documentos de la causa en proceso</li>
                        </ul>

                        <h3>Paso 2: Qué cargar y en qué formato</h3>
                        <p>
                            NotebookLM acepta: PDF, Google Docs, Google Slides, texto plano, URLs
                            de páginas web, audios (transcribe automáticamente). Límite por notebook:
                            hasta 50 fuentes, hasta 25 MB por fuente.
                        </p>
                        <div className="highlight-warning">
                            <strong>Privacidad:</strong> Los documentos que cargás en NotebookLM
                            se procesan en los servidores de Google. Para expedientes con datos
                            identificados de clientes, aplicá la anonimización de M8 U3 antes de cargarlos,
                            o usá el plan Workspace Enterprise con las garantías correspondientes.
                        </div>

                        <h3>Paso 3: Las preguntas que funcionan y las que no</h3>
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--good">
                                <h4>✅ Funciona bien</h4>
                                <ul>
                                    <li>"¿Cuál es la posición de la Cámara X sobre [punto]?"</li>
                                    <li>"Buscá todos los fallos donde se menciona [concepto]"</li>
                                    <li>"¿Hay contradicción entre el fallo de 2020 y el de 2023?"</li>
                                    <li>"Resumí los hechos del expediente en el documento Y"</li>
                                    <li>"¿Qué prueba fue rechazada y por qué razón?"</li>
                                </ul>
                            </div>
                            <div className="comparison-box comparison-box--bad">
                                <h4>✗ No funciona bien</h4>
                                <ul>
                                    <li>Preguntas sobre jurisprudencia que no cargaste</li>
                                    <li>Opiniones sobre estrategia jurídica</li>
                                    <li>Predicciones sobre el resultado de un caso</li>
                                    <li>Preguntas sobre hechos que no están en los documentos</li>
                                </ul>
                            </div>
                        </div>
                    </article>
                </section>

                <section id="workflow" className="page__section">
                    <h2 className="page__section-title">4. NotebookLM en el flujo de trabajo</h2>
                    <article className="long-form-content">
                        <p>
                            NotebookLM no reemplaza a Claude ni a Gemini — los complementa. La integración
                            para una causa compleja:
                        </p>
                        <div className="flow-steps">
                            <div className="flow-step">
                                <strong>Gemini Deep Research</strong> investiga el marco jurídico general.
                                Genera un informe con doctrina y jurisprudencia relevante.
                            </div>
                            <div className="flow-step">
                                <strong>Vos verificás</strong> las fuentes del informe de Gemini.
                                Las que son válidas las descargás como PDF.
                            </div>
                            <div className="flow-step">
                                <strong>NotebookLM</strong> recibe esos PDFs verificados + los documentos
                                del expediente. Se convierte en la base de conocimiento específica del caso.
                            </div>
                            <div className="flow-step">
                                <strong>Claude</strong> recibe el resumen de NotebookLM + las preguntas
                                específicas del caso y produce el análisis estratégico y el borrador del escrito.
                            </div>
                        </div>
                        <div className="highlight-success">
                            <strong>El resultado:</strong> Un escrito redactado con Claude que cita
                            jurisprudencia verificada que vos cargaste en NotebookLM.
                            Cero alucinaciones en las fuentes porque las fuentes las elegiste y verificaste vos.
                        </div>
                    </article>
                </section>

                <section id="audio" className="page__section">
                    <h2 className="page__section-title">5. Audio Overview: el podcast del expediente</h2>
                    <article className="long-form-content">
                        <p>
                            NotebookLM tiene una función que parece un juguete pero tiene usos reales:
                            genera automáticamente un podcast de dos voces que debate los temas de tus
                            documentos. Para el abogado, algunos usos no obvios:
                        </p>
                        <ul className="application-list">
                            <li>
                                <strong>Preparación de audiencias mientras manejás:</strong> Cargás el
                                expediente y generás el Audio Overview. Escuchás el resumen del caso
                                en el auto, antes de la audiencia.
                            </li>
                            <li>
                                <strong>Briefing rápido para el cliente:</strong> Generás el audio sobre
                                el estado de la causa y se lo mandás como resumen accesible.
                            </li>
                            <li>
                                <strong>Revisión de doctrina sin leer:</strong> Cargás un artículo de
                                100 páginas y el audio te da los puntos clave en 10 minutos.
                            </li>
                        </ul>
                    </article>
                </section>

                <section id="checklist" className="page__section">
                    <h2 className="page__section-title">6. Checklist de esta unidad</h2>
                    <article className="long-form-content">
                        <div className="checklist-box">
                            <ul className="checklist">
                                <li>☐ Creé al menos un notebook con documentos jurídicos reales de mi área</li>
                                <li>☐ Probé hacer preguntas sobre los documentos cargados y verifiqué las citas</li>
                                <li>☐ Entiendo qué tipo de preguntas funcionan y cuáles no</li>
                                <li>☐ Apliqué la anonimización antes de cargar documentos con datos de clientes</li>
                                <li>☐ Entiendo cómo NotebookLM se integra en el flujo con Claude y Gemini</li>
                                <li>☐ Probé el Audio Overview con al menos un documento</li>
                            </ul>
                        </div>
                    </article>
                </section>

                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/ecosystem-u2" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M6 U2: n8n y Make — automatización sin código</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/ecosystem-u4" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            U4 – Perplexity: búsqueda jurídica verificable →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EcosystemM5U3

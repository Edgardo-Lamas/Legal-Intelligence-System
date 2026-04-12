import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function MasteringM6U3() {
    return (
        <div className="page">
            <PageSEO
                title="Artifacts: visualizaciones, tablas y documentos interactivos con Claude · M5 U3"
                description="Cómo usar la función Artifacts de Claude para crear tablas comparativas, timelines procesales, documentos descargables y visualizaciones interactivas para el trabajo jurídico."
                path="/mastering-u3"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 5 · Unidad 3</span>
                <h1 className="page__title">Artifacts: visualizaciones y documentos interactivos</h1>
                <p className="page__description">
                    Claude no solo genera texto. Con Artifacts, genera tablas, documentos
                    descargables, timelines visuales y hasta aplicaciones simples — directamente
                    en la conversación.
                </p>
            </header>

            <div className="page__content">

                <section id="que-es" className="page__section">
                    <h2 className="page__section-title">1. Qué son los Artifacts</h2>
                    <article className="long-form-content">
                        <p>
                            Artifacts es la funcionalidad de Claude que separa el contenido generado
                            del flujo de chat. En lugar de que el código, la tabla o el documento
                            aparezca mezclado en la respuesta, aparece en un panel independiente
                            a la derecha — editable, descargable y, en algunos casos, ejecutable.
                        </p>
                        <p>
                            Para activarlo: claude.ai → Settings → Feature Preview → habilitar Artifacts.
                            Una vez activo, Claude elige automáticamente cuándo usar un Artifact
                            vs. texto inline — o podés pedirlo explícitamente.
                        </p>
                        <blockquote className="concept-quote">
                            La diferencia entre "dame una tabla" y "dame un Artifact con esa tabla"
                            es la diferencia entre texto que tenés que formatear a mano y un componente
                            listo para usar o exportar.
                        </blockquote>
                    </article>
                </section>

                <section id="tipos" className="page__section">
                    <h2 className="page__section-title">2. Tipos de Artifacts útiles para abogados</h2>
                    <article className="long-form-content">

                        <h3>Documentos Markdown — el más usado en trabajo jurídico</h3>
                        <p>
                            Claude genera el documento en un panel separado con formato limpio.
                            Podés descargarlo, copiarlo o pedirle que lo edite sin tocar la conversación.
                        </p>
                        <div className="full-prompt-example">
                            <p>
                                "Generá un Artifact con el análisis del caso en formato de memo jurídico:
                                encabezado con datos del caso, secciones numeradas para hechos relevantes,
                                marco normativo, análisis y conclusión. Que quede listo para exportar."
                            </p>
                        </div>

                        <h3>Tablas HTML interactivas</h3>
                        <p>
                            Tablas que el usuario puede filtrar, ordenar o interactuar con ellas en el
                            navegador. Útil para comparaciones complejas.
                        </p>
                        <div className="full-prompt-example">
                            <p>
                                "Creá un Artifact con una tabla HTML interactiva que compare las opciones
                                disponibles para el cliente: (1) aceptar la oferta de conciliación,
                                (2) continuar el juicio, (3) mediación. Columnas: opción, probabilidad
                                de éxito estimada, tiempo estimado, costo aproximado, riesgo principal,
                                recomendación."
                            </p>
                        </div>

                        <h3>Timeline visual de un expediente</h3>
                        <div className="full-prompt-example">
                            <p>
                                "Con los hechos que te voy a listar, generá un Artifact con un timeline
                                visual en HTML/CSS: cada hito tiene fecha, descripción y un color según
                                si es un hecho favorable (verde), desfavorable (rojo) o neutro (gris)
                                para nuestra posición. [Listás los hechos]."
                            </p>
                        </div>

                        <h3>Calculadoras y formularios simples</h3>
                        <div className="full-prompt-example">
                            <p>
                                "Creá un Artifact con una calculadora de indemnización laboral básica:
                                campos para antigüedad en años, sueldo mensual, y tipo de desvinculación
                                (sin causa / con causa / retiro voluntario). Que calcule automáticamente
                                el monto estimado según LCT e informe los rubros incluidos."
                            </p>
                        </div>

                        <h3>Documentos Word-style exportables</h3>
                        <div className="full-prompt-example">
                            <p>
                                "Redactá la carta de intimación en un Artifact Markdown con formato
                                de documento formal: encabezado, fecha, datos del remitente y destinatario,
                                cuerpo con los 3 puntos de la intimación, plazo de respuesta y firma.
                                Que pueda copiarlo directamente al procesador de texto."
                            </p>
                        </div>
                    </article>
                </section>

                <section id="workflow" className="page__section">
                    <h2 className="page__section-title">3. Artifacts en el flujo de trabajo</h2>
                    <article className="long-form-content">
                        <p>
                            La ventaja clave de Artifacts sobre texto inline es que podés iterar
                            sobre el documento sin perder las versiones anteriores:
                        </p>
                        <div className="flow-steps">
                            <div className="flow-step">
                                <strong>Primera versión:</strong> "Generá el memo del caso como Artifact."
                                Claude produce el documento en el panel derecho.
                            </div>
                            <div className="flow-step">
                                <strong>Iteración 1:</strong> "Agregá una sección de recomendaciones
                                al final." Claude actualiza el Artifact, la conversación no se llena
                                de texto repetido.
                            </div>
                            <div className="flow-step">
                                <strong>Iteración 2:</strong> "Cambiá el tono de la sección de hechos
                                a más formal." La sección se actualiza en el panel, el resto queda igual.
                            </div>
                            <div className="flow-step">
                                <strong>Versión final:</strong> Descargás el Artifact o lo copiás
                                al procesador de texto. Sin formateo manual.
                            </div>
                        </div>
                    </article>
                </section>

                <section id="casos-avanzados" className="page__section">
                    <h2 className="page__section-title">4. Casos avanzados: Artifacts que corren en el navegador</h2>
                    <article className="long-form-content">
                        <p>
                            Claude puede generar Artifacts que son aplicaciones React simples o
                            páginas HTML completas que se ejecutan directamente en el panel.
                            Para el abogado, esto abre posibilidades concretas:
                        </p>
                        <ul className="key-points">
                            <li>
                                <strong>Dashboard de causas:</strong> Una página HTML que lista tus
                                causas con estado, próximos vencimientos coloreados por urgencia,
                                y filtros por tipo o prioridad. Le pasás el CSV y Claude genera
                                el dashboard interactivo.
                            </li>
                            <li>
                                <strong>Comparador de opciones contractuales:</strong> Formulario donde
                                el cliente ingresa sus prioridades (precio, plazo, garantías) y el
                                Artifact muestra qué opción de contrato es más favorable para su perfil.
                            </li>
                            <li>
                                <strong>Generador de documentos con campos:</strong> Formulario que
                                toma datos del usuario y genera automáticamente el texto del documento
                                con esos datos insertados.
                            </li>
                        </ul>
                        <div className="highlight-success">
                            <strong>Sin programar:</strong> Pedile a Claude que haga estas cosas
                            en lenguaje natural. "Creá un Artifact React que sea un dashboard de
                            mis causas. Los datos son estos [pegás tu tabla]. Columnas: causa,
                            estado, próximo vencimiento (que se muestre en rojo si es en menos
                            de 7 días)." Claude genera el código y lo ejecuta en el panel.
                        </div>
                    </article>
                </section>

                <section id="limites" className="page__section">
                    <h2 className="page__section-title">5. Límites a conocer</h2>
                    <article className="long-form-content">
                        <div className="risk-list">
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>
                                    <strong>Los Artifacts no se guardan automáticamente.</strong> Si cerrás
                                    la conversación sin copiar o descargar el Artifact, podés perder el
                                    trabajo. Siempre exportá antes de cerrar.
                                </span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>
                                    <strong>Los Artifacts React ejecutan en sandbox.</strong> No tienen
                                    acceso a internet ni a tus archivos locales. Lo que generan es
                                    autocontenido — los datos van en el mismo Artifact.
                                </span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>
                                    <strong>No reemplazan a un procesador de texto para documentos finales.</strong>
                                    Están bien para borradores y visualizaciones. El documento final
                                    que presentás al juzgado sigue pasando por Word o el sistema
                                    de presentación correspondiente.
                                </span>
                            </div>
                        </div>
                    </article>
                </section>

                <section id="checklist" className="page__section">
                    <h2 className="page__section-title">6. Checklist de esta unidad</h2>
                    <article className="long-form-content">
                        <div className="checklist-box">
                            <ul className="checklist">
                                <li>☐ Activé Artifacts en Feature Preview de claude.ai</li>
                                <li>☐ Generé al menos un Artifact de documento Markdown jurídico</li>
                                <li>☐ Probé iterar sobre un Artifact (editar sin reescribir todo)</li>
                                <li>☐ Creé una tabla comparativa o timeline de un caso real</li>
                                <li>☐ Intenté un Artifact interactivo (calculadora o dashboard simple)</li>
                                <li>☐ Entiendo los límites de Artifacts vs. documentos finales</li>
                            </ul>
                        </div>
                    </article>
                </section>

                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/mastering-u2" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M5 U2: Extended Thinking</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/mastering-u4" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            U4 – Claude API: tu primer asistente sin programar →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MasteringM6U3

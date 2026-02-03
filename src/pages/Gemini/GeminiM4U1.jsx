import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'

function GeminiM4U1() {
    return (
        <div className="page">
            <header className="page__header">
                <span className="page__module-tag">Módulo 4 · Unidad 1</span>
                <h1 className="page__title">Gemini: Otra inteligencia, nuevas funciones para la práctica legal</h1>
                <p className="page__description">
                    Entendiendo el rol de Gemini en el ecosistema jurídico moderno
                </p>
            </header>

            <div className="page__content">
                {/* Sección 1: Objetivos */}
                <section id="objetivos" className="page__section">
                    <h2 className="page__section-title">1. ¿Qué vas a aprender?</h2>
                    <article className="long-form-content">
                        <p>
                            En esta unidad vas a comprender por qué Gemini no es “otro ChatGPT”, sino un tipo de inteligencia distinta, diseñada para resolver problemas que los modelos de razonamiento tradicionales manejan con dificultad. El objetivo no es que el abogado elija herramientas por moda, sino que aprenda a seleccionar inteligencias según el tipo de tarea legal que enfrenta.
                        </p>
                        <p>Al finalizar esta unidad, vas a saber:</p>
                        <ul className="learning-objectives">
                            <li>Identificar cuándo Gemini resulta estratégicamente superior.</li>
                            <li>Entender qué tipo de problemas legales potencia mejor.</li>
                            <li>Integrarlo de forma consciente dentro de un sistema de trabajo profesional sin perder control ni criterio jurídico.</li>
                        </ul>
                    </article>
                </section>

                {/* Sección 2: Concepto central */}
                <section id="concepto" className="page__section">
                    <h2 className="page__section-title">2. Concepto central</h2>
                    <article className="long-form-content">
                        <blockquote className="concept-quote">
                            Mientras otros modelos “piensan bien sobre poco”, Gemini “lee mucho al mismo tiempo”.
                        </blockquote>
                        <p>
                            Gemini está orientado a la <strong>exploración masiva de información</strong>, no al razonamiento profundo línea por línea. Su arquitectura prioriza ventanas de contexto extremadamente grandes y una capacidad superior para leer, indexar y recorrer grandes volúmenes de documentos de manera simultánea.
                        </p>
                        <p>
                            Esta diferencia no es menor: redefine qué tipo de tareas pueden automatizarse y cuáles siguen requiriendo intervención humana directa. En el ámbito legal, Gemini no reemplaza el análisis jurídico; prepara el terreno para que ese análisis sea posible.
                        </p>
                    </article>
                </section>

                {/* Sección 3: Motor de lectura */}
                <section id="motor-lectura" className="page__section">
                    <h2 className="page__section-title">3. Gemini como motor de lectura jurídica a gran escala</h2>
                    <article className="long-form-content">
                        <p>
                            La práctica legal moderna está dominada por el exceso de información: expedientes extensos, pruebas documentales voluminosas, correos, contratos, anexos, jurisprudencia acumulada durante años. El límite ya no es el conocimiento del abogado, sino su capacidad de leer todo sin perder nada relevante.
                        </p>
                        <p>
                            Gemini aborda este problema desde otro ángulo: permite cargar <strong>grandes corpus documentales completos</strong> y operar sobre ellos como un todo. No selecciona previamente; lee todo. Esto habilita tareas imposibles para un modelo con contexto reducido, como:
                        </p>
                        <ul className="application-list">
                            <li>Detectar contradicciones internas.</li>
                            <li>Identificar repeticiones estratégicas.</li>
                            <li>Notar ausencias significativas.</li>
                            <li>Encontrar patrones distribuidos en cientos de páginas.</li>
                        </ul>
                    </article>
                </section>

                {/* Sección 4: Deep Research */}
                <section id="deep-research" className="page__section">
                    <h2 className="page__section-title">4. Deep Research aplicado al trabajo jurídico</h2>
                    <article className="long-form-content">
                        <p>
                            La función de investigación profunda (<strong>Deep Research</strong>) en Gemini transforma la preparación de casos complejos. En lugar de realizar búsquedas fragmentadas, el abogado puede trabajar sobre un universo documental completo, dejando que el sistema identifique relaciones, coincidencias y anomalías.
                        </p>
                        <p>
                            Esto no significa delegar el criterio jurídico, sino externalizar la lectura exhaustiva. El abogado deja de gastar tiempo en encontrar información y lo invierte en evaluarla, interpretarla y decidir.
                        </p>
                        <p className="highlight-success">
                            La ventaja competitiva no está en “saber más”, sino en ver antes lo que otros no vieron.
                        </p>
                    </article>
                </section>

                {/* Sección 5: Casos de uso */}
                <section id="casos-uso" className="page__section">
                    <h2 className="page__section-title">5. Casos de uso reales en la práctica profesional</h2>
                    <article className="long-form-content">
                        <p>
                            Gemini resulta especialmente eficaz en la preparación de litigios complejos, auditorías legales, due diligence, investigaciones internas, análisis de múltiples causas relacionadas y revisión de grandes volúmenes de jurisprudencia.
                        </p>
                        <div className="task-criteria">
                            <span className="task-criterion">Líneas de tiempo automáticas</span>
                            <span className="task-criterion">Inconsistencias en declaraciones</span>
                            <span className="task-criterion">Cláusulas repetidas</span>
                            <span className="task-criterion">Precedentes ocultos</span>
                        </div>
                        <p className="description-text">
                            Estas tareas, realizadas manualmente, consumen semanas. Automatizadas con criterio, se convierten en horas.
                        </p>
                    </article>
                </section>

                {/* Sección 6: Limitaciones y riesgos */}
                <section id="limitaciones" className="page__section">
                    <h2 className="page__section-title">6. Limitaciones y riesgos específicos</h2>
                    <article className="long-form-content">
                        <div className="risk-list">
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <div>
                                    <strong>Lectura vs Razonamiento</strong>
                                    <p>La principal limitación de Gemini no es la lectura, sino el razonamiento jurídico profundo. Puede encontrar información con precisión, pero no siempre construir argumentos jurídicos complejos sin guía humana.</p>
                                </div>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <div>
                                    <strong>Capacidad de decisión</strong>
                                    <p>El riesgo más común es confundir capacidad de lectura con capacidad de decisión. Gemini no “sabe derecho”; organiza información jurídica. Si se le delega la conclusión final sin validación, el resultado puede ser técnicamente correcto pero jurídicamente débil.</p>
                                </div>
                            </div>
                        </div>
                        <p className="highlight-warning">
                            El abogado sigue siendo responsable del juicio profesional. Gemini es un acelerador, no un sustituto.
                        </p>
                    </article>
                </section>

                {/* Sección 7: Ideas clave */}
                <section id="ideas-clave" className="page__section">
                    <h2 className="page__section-title">7. Ideas clave para fijar</h2>
                    <article className="long-form-content">
                        <ul className="key-points">
                            <li>Gemini no compite con otros modelos: los complementa.</li>
                            <li>Su valor no está en escribir mejor, sino en <strong>leer más y mejor</strong>.</li>
                            <li>Un abogado que entiende esta diferencia deja de usar una sola herramienta para todo y comienza a diseñar flujos de trabajo inteligentes.</li>
                            <li>Dominar Gemini es dominar la fase de exploración del razonamiento jurídico moderno.</li>
                        </ul>
                    </article>
                </section>

                {/* Sección 8: Conexión */}
                <section id="conexion" className="page__section">
                    <h2 className="page__section-title">8. Conexión con el sistema de estudio</h2>
                    <article className="long-form-content">
                        <p>
                            Esta unidad abre el <strong>Bloque 2</strong> del curso, enfocado en inteligencias orientadas a volumen, visualización y exploración. Las siguientes unidades profundizarán en funciones específicas como Canvas y en cómo traducir esta capacidad de lectura masiva en productos visuales, herramientas prácticas y activos profesionales reutilizables.
                        </p>
                        <p>
                            Aquí comienza el trabajo con la información como sistema, no como archivo suelto.
                        </p>
                    </article>
                </section>

                {/* Footer de navegación */}
                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/solo-practice" className="unit-nav-link">
                            <span className="unit-nav-label">← Módulo anterior</span>
                            <span className="unit-nav-title">M3: Abogacía por Cuenta Propia</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/gemini-u2" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Unidad 2 – Gemini Canvas →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeminiM4U1

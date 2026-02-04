import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'

function EcosystemM5U4() {
    return (
        <div className="page">
            <header className="page__header">
                <span className="page__module-tag">Módulo 5 · Unidad 4</span>
                <h1 className="page__title">Integración de IA con documentos, fuentes y sistemas externos</h1>
                <p className="page__description">
                    Cómo conectar la IA con tu información real para multiplicar su valor profesional.
                </p>
            </header>

            <div className="page__content">
                {/* Intro */}
                <section className="page__section">
                    <article className="long-form-content">
                        <p>
                            En esta etapa del módulo el foco deja de estar puesto únicamente en la interacción directa con modelos de lenguaje y pasa a una cuestión más estructural: <strong>cómo integrar la IA con los documentos, las fuentes de información y los sistemas que el abogado utiliza en su práctica diaria</strong>. Aquí es donde el ecosistema empieza a adquirir verdadero valor profesional.
                        </p>
                        <p>
                            En el trabajo jurídico real, el problema no suele ser la falta de capacidad de redacción o análisis, sino la <strong>dispersión de la información</strong>. Expedientes extensos, antecedentes jurisprudenciales, contratos previos, correos electrónicos, notas internas y normativa aplicable conviven sin un orden claro. La IA, utilizada de forma aislada, no resuelve este problema. Para que sea realmente útil, debe operar conectada a las fuentes relevantes, bajo criterios definidos por el abogado.
                        </p>
                    </article>
                </section>

                {/* Sección 1: Integración con documentos */}
                <section id="documentos" className="page__section">
                    <h2 className="page__section-title">1. Integración con documentos específicos</h2>
                    <article className="long-form-content">
                        <p>
                            La integración con documentos implica que la IA trabaje sobre <strong>material específico y controlado</strong>, no sobre conocimiento genérico. Esto permite que los análisis, resúmenes y redacciones se apoyen en información real del caso.
                        </p>
                        <div className="highlight-success">
                            Desde el punto de vista profesional, esta integración es clave para mantener coherencia argumental y evitar contradicciones internas.
                        </div>
                        <p>
                            Cuando la IA opera sobre los documentos del expediente —y no sobre generalidades— reduce errores y aumenta significativamente la precisión de sus resultados.
                        </p>
                    </article>
                </section>

                {/* Sección 2: Jerarquía de fuentes */}
                <section id="jerarquia" className="page__section">
                    <h2 className="page__section-title">2. Jerarquía de fuentes: el criterio jurídico primero</h2>
                    <article className="long-form-content">
                        <p>
                            Un aspecto central de esta unidad es comprender que <strong>no toda fuente debe tener el mismo peso</strong>. El abogado define jerarquías:
                        </p>
                        <ul className="application-list">
                            <li><strong>Documentos primarios:</strong> El expediente, la normativa aplicable, los contratos vigentes.</li>
                            <li><strong>Documentos auxiliares:</strong> Jurisprudencia, doctrina, antecedentes internos.</li>
                            <li><strong>Referencias contextuales:</strong> Materiales de apoyo, notas, comunicaciones.</li>
                        </ul>
                        <blockquote className="concept-quote">
                            La IA no decide esta jerarquía por sí sola; necesita una estructura previa que refleje el razonamiento jurídico humano.
                        </blockquote>
                        <p>
                            Cuando esta jerarquía está bien definida, la IA se convierte en una <strong>herramienta de amplificación del criterio profesional</strong>, no en un sustituto improvisado.
                        </p>
                    </article>
                </section>

                {/* Sección 3: Conexión con sistemas externos */}
                <section id="sistemas" className="page__section">
                    <h2 className="page__section-title">3. Conexión con sistemas externos</h2>
                    <article className="long-form-content">
                        <p>
                            La conexión con sistemas externos amplía todavía más el alcance del ecosistema. Pueden integrarse:
                        </p>
                        <ul className="application-list">
                            <li>Gestores de expedientes</li>
                            <li>Bases documentales</li>
                            <li>Plataformas de organización de casos</li>
                            <li>Entornos colaborativos</li>
                        </ul>
                        <p>
                            La IA actúa como <strong>interfaz inteligente</strong> entre el abogado y su información. Esto no significa automatizar decisiones, sino facilitar el acceso, la comprensión y la reutilización del conocimiento acumulado.
                        </p>
                    </article>
                </section>

                {/* Sección 4: Aplicaciones prácticas */}
                <section id="aplicaciones" className="page__section">
                    <h2 className="page__section-title">4. Aplicaciones prácticas de la integración</h2>
                    <article className="long-form-content">
                        <p>
                            Desde una perspectiva práctica, esta integración permite tareas como:
                        </p>
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--good">
                                <h4>📄 Lectura asistida</h4>
                                <p>Procesamiento de expedientes extensos con resúmenes focalizados.</p>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>🔍 Detección de patrones</h4>
                                <p>Identificación de elementos repetitivos en documentación masiva.</p>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>⚖️ Comparación de versiones</h4>
                                <p>Análisis de diferencias entre textos legales o contractuales.</p>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>✍️ Preparación de insumos</h4>
                                <p>Generación de materiales base para escritos complejos.</p>
                            </div>
                        </div>
                        <div className="highlight-success">
                            El valor no está en la novedad tecnológica, sino en la reducción del esfuerzo cognitivo innecesario, liberando tiempo para el análisis jurídico profundo.
                        </div>
                    </article>
                </section>

                {/* Sección 5: Control del riesgo */}
                <section id="riesgo" className="page__section">
                    <h2 className="page__section-title">5. Control del riesgo en sistemas integrados</h2>
                    <article className="long-form-content">
                        <p>
                            Cuanto más integrado está un sistema, mayor debe ser la atención a aspectos críticos:
                        </p>
                        <ul className="application-list">
                            <li><strong>Confidencialidad:</strong> Qué datos ingresan y cómo se protegen.</li>
                            <li><strong>Trazabilidad:</strong> De dónde proviene cada resultado.</li>
                            <li><strong>Límites de uso:</strong> Qué puede y qué no puede hacer el sistema.</li>
                        </ul>
                        <div className="highlight-warning">
                            El abogado debe saber qué datos entran en cada proceso, cómo se utilizan y qué resultados se generan. La integración responsable no es solo una cuestión técnica, sino también ética y profesional.
                        </div>
                    </article>
                </section>

                {/* Sección 6: Conclusión */}
                <section id="conclusion" className="page__section">
                    <h2 className="page__section-title">6. Un ecosistema de relaciones coherentes</h2>
                    <article className="long-form-content">
                        <p>
                            Esta unidad refuerza una idea transversal a todo el módulo: <strong>un ecosistema avanzado no se construye sumando herramientas, sino diseñando relaciones coherentes entre información, procesos y decisiones</strong>.
                        </p>
                        <blockquote className="concept-quote">
                            La IA ocupa un lugar central, pero siempre dentro de un sistema gobernado por el criterio jurídico humano.
                        </blockquote>
                        <p>
                            En la próxima unidad, este ecosistema se proyecta hacia la automatización más sofisticada, donde los flujos, las integraciones y las decisiones controladas comienzan a operar de manera coordinada, acercando al abogado a un modelo de práctica verdaderamente escalable y sostenible.
                        </p>
                    </article>
                </section>

                {/* Footer de navegación */}
                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/ecosystem-u3" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M5 U3: Flujos de trabajo jurídicos</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/ecosystem-u5" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Unidad 5 – Flujos automatizados y práctica escalable →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EcosystemM5U4

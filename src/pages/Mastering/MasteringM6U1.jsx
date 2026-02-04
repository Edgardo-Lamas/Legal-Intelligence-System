import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'

function MasteringM6U1() {
    return (
        <div className="page">
            <header className="page__header">
                <span className="page__module-tag">Módulo 6 · Unidad 1</span>
                <h1 className="page__title">Pensar la IA como ecosistema profesional</h1>
                <p className="page__description">
                    Del uso de herramientas aisladas al gobierno de un sistema integrado.
                </p>
            </header>

            <div className="page__content">
                {/* Intro */}
                <section className="page__section">
                    <article className="long-form-content">
                        <p>
                            Hasta este punto del curso, la IA ya dejó de presentarse como una novedad tecnológica. En esta unidad se produce un <strong>cambio de marco</strong>: el abogado deja de "usar herramientas" y comienza a operar dentro de un ecosistema de inteligencia artificial.
                        </p>
                        <blockquote className="concept-quote">
                            Esta diferencia no es semántica, es estratégica.
                        </blockquote>
                    </article>
                </section>

                {/* Sección 1: Componentes del ecosistema */}
                <section id="componentes" className="page__section">
                    <h2 className="page__section-title">1. Los componentes del ecosistema</h2>
                    <article className="long-form-content">
                        <p>
                            Un ecosistema de IA está compuesto por:
                        </p>
                        <ul className="application-list">
                            <li><strong>Modelos:</strong> Los diferentes sistemas de IA disponibles.</li>
                            <li><strong>Interfaces:</strong> Las formas de acceso e interacción.</li>
                            <li><strong>Fuentes de información:</strong> Documentos, bases de datos, expedientes.</li>
                            <li><strong>Flujos de trabajo:</strong> Las secuencias de tareas establecidas.</li>
                            <li><strong>Criterios de uso:</strong> Las reglas y límites definidos por el profesional.</li>
                        </ul>
                        <div className="highlight-success">
                            Ninguno de estos elementos tiene verdadero valor por sí solo. El impacto profesional aparece cuando el abogado entiende cómo se relacionan entre sí.
                        </div>
                    </article>
                </section>

                {/* Sección 2: Herramienta aislada vs ecosistema */}
                <section id="diferencia" className="page__section">
                    <h2 className="page__section-title">2. Herramienta aislada vs. ecosistema</h2>
                    <article className="long-form-content">
                        <div className="comparison-grid">
                            <div className="comparison-box">
                                <h4>🔧 Herramienta aislada</h4>
                                <p>Consultas puntuales, resultados inconsistentes, dependencia del contexto inmediato.</p>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>🌐 Ecosistema integrado</h4>
                                <p>Continuidad, coherencia y acumulación de valor. Cada interacción fortalece el sistema.</p>
                            </div>
                        </div>
                        <p>
                            Pensar la IA como ecosistema implica que cada interacción, cada documento trabajado y cada ajuste de criterio <strong>fortalecen el sistema en su conjunto</strong>.
                        </p>
                    </article>
                </section>

                {/* Sección 3: Identidad profesional */}
                <section id="identidad" className="page__section">
                    <h2 className="page__section-title">3. Adaptación a la identidad profesional</h2>
                    <article className="long-form-content">
                        <p>
                            En el ejercicio real del Derecho, el abogado no razona en vacío. Trabaja con:
                        </p>
                        <ul className="application-list">
                            <li>Antecedentes propios</li>
                            <li>Estilos de redacción</li>
                            <li>Criterios interpretativos</li>
                            <li>Marcos éticos personales</li>
                        </ul>
                        <blockquote className="concept-quote">
                            Un ecosistema de IA bien dominado es aquel que se adapta progresivamente a esa identidad profesional, en lugar de imponer respuestas genéricas.
                        </blockquote>
                    </article>
                </section>

                {/* Sección 4: Especialización funcional */}
                <section id="especializacion" className="page__section">
                    <h2 className="page__section-title">4. Especialización funcional</h2>
                    <article className="long-form-content">
                        <p>
                            No todas las IAs sirven para lo mismo, ni deben usarse indistintamente:
                        </p>
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--good">
                                <h4>📄 Análisis documental</h4>
                                <p>Modelos especializados en procesar y resumir grandes volúmenes de texto.</p>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>✍️ Redacción técnica</h4>
                                <p>Sistemas optimizados para precisión y control en escritos formales.</p>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>🔍 Exploración amplia</h4>
                                <p>Herramientas diseñadas para búsquedas extensas y síntesis de información.</p>
                            </div>
                        </div>
                        <div className="highlight-success">
                            El abogado que domina el ecosistema no busca "la mejor IA", sino la IA adecuada para cada tarea concreta.
                        </div>
                    </article>
                </section>

                {/* Sección 5: Costo cognitivo */}
                <section id="costo" className="page__section">
                    <h2 className="page__section-title">5. El costo cognitivo de la dispersión</h2>
                    <article className="long-form-content">
                        <p>
                            Cambiar constantemente de herramienta sin un criterio claro genera más desgaste que beneficio.
                        </p>
                        <div className="highlight-warning">
                            La eficiencia profesional no surge de sumar opciones, sino de elegir con inteligencia.
                        </div>
                        <p>
                            Dominar el ecosistema significa:
                        </p>
                        <ul className="application-list">
                            <li>Reducir fricción operativa</li>
                            <li>Saber cuándo usar cada recurso</li>
                            <li>Evitar la dispersión tecnológica</li>
                        </ul>
                    </article>
                </section>

                {/* Sección 6: Impacto en calidad */}
                <section id="calidad" className="page__section">
                    <h2 className="page__section-title">6. Impacto en la calidad del trabajo jurídico</h2>
                    <article className="long-form-content">
                        <p>
                            Un ecosistema bien utilizado permite:
                        </p>
                        <ul className="application-list">
                            <li>Detectar inconsistencias</li>
                            <li>Profundizar análisis</li>
                            <li>Mejorar la argumentación</li>
                            <li>Sostener una línea de razonamiento más sólida en el tiempo</li>
                        </ul>
                        <blockquote className="concept-quote">
                            La IA no reemplaza el criterio jurídico, pero sí amplifica su alcance y su profundidad cuando está bien integrada.
                        </blockquote>
                    </article>
                </section>

                {/* Sección 7: Conclusión */}
                <section id="conclusion" className="page__section">
                    <h2 className="page__section-title">7. Del uso al gobierno</h2>
                    <article className="long-form-content">
                        <p>
                            Esta unidad funciona como puerta de entrada al resto del módulo. A partir de aquí, cada herramienta que se incorpore no se presentará como un fin en sí mismo, sino como <strong>una pieza dentro de un sistema mayor</strong>.
                        </p>
                        <div className="highlight-success">
                            El objetivo ya no es aprender a usar IA, sino aprender a gobernarla dentro de la práctica profesional.
                        </div>
                        <p>
                            En la próxima unidad comenzamos a trabajar con herramientas concretas del ecosistema, empezando por aquellas orientadas a la gestión documental y al aprendizaje asistido, fundamentales para el abogado que maneja grandes volúmenes de información.
                        </p>
                    </article>
                </section>

                {/* Footer de navegación */}
                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/ecosystem-u5" className="unit-nav-link">
                            <span className="unit-nav-label">← Módulo anterior</span>
                            <span className="unit-nav-title">M5 U5: Flujos automatizados y práctica escalable</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <span className="next-title" style={{ color: '#aaa' }}>
                            Próximamente
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MasteringM6U1

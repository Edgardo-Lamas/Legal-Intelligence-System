import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'

function CommunicationM7U1() {
    return (
        <div className="page">
            <header className="page__header">
                <span className="page__module-tag">Módulo 7 · Unidad 1</span>
                <h1 className="page__title">IA para comunicación legal</h1>
                <p className="page__description">
                    Cómo integrar la IA en la comunicación profesional sin degradar tu rol, tu ética ni tu credibilidad.
                </p>
            </header>

            <div className="page__content">
                {/* Intro - Propósito */}
                <section className="page__section">
                    <article className="long-form-content">
                        <p>
                            Este módulo tiene como objetivo comprender cómo la inteligencia artificial puede integrarse en la <strong>comunicación profesional del abogado</strong> sin degradar su rol, su ética ni su credibilidad.
                        </p>
                        <p>
                            No se trata de aprender a "publicar más", sino de <strong>comunicar mejor</strong>, con intención estratégica, claridad conceptual y coherencia institucional.
                        </p>
                        <blockquote className="concept-quote">
                            La comunicación legal no es marketing genérico. Es una forma especializada de construir confianza, autoridad y reputación en un entorno donde el lenguaje tiene consecuencias jurídicas, éticas y sociales.
                        </blockquote>
                    </article>
                </section>

                {/* Sección 1: Activo estratégico */}
                <section id="activo" className="page__section">
                    <h2 className="page__section-title">1. La comunicación legal como activo estratégico</h2>
                    <article className="long-form-content">
                        <p>
                            En el ejercicio moderno de la abogacía, la comunicación dejó de ser un elemento accesorio. Hoy constituye un <strong>activo estratégico</strong> que atraviesa múltiples dimensiones:
                        </p>
                        <ul className="application-list">
                            <li>La relación con clientes</li>
                            <li>El posicionamiento profesional</li>
                            <li>La visibilidad pública</li>
                            <li>La docencia y producción académica</li>
                            <li>La interacción con instituciones</li>
                        </ul>
                        <div className="highlight-warning">
                            Un mismo contenido jurídico no se expresa igual ante un colega, un juez, un cliente o la sociedad en general. La IA solo puede respetar esas diferencias si el profesional sabe indicarlas con precisión.
                        </div>
                    </article>
                </section>

                {/* Sección 2: Redacción jurídica y divulgativa */}
                <section id="redaccion" className="page__section">
                    <h2 className="page__section-title">2. IA aplicada a la redacción jurídica y divulgativa</h2>
                    <article className="long-form-content">
                        <p>
                            Uno de los aportes más visibles de la IA es la asistencia en la redacción de:
                        </p>
                        <ul className="application-list">
                            <li>Textos de divulgación jurídica</li>
                            <li>Artículos de opinión</li>
                            <li>Publicaciones institucionales</li>
                            <li>Contenidos educativos</li>
                            <li>Materiales informativos</li>
                        </ul>
                        <p>La IA permite:</p>
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--good">
                                <h4>📝 Clarificar</h4>
                                <p>Textos complejos sin perder rigor técnico.</p>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>🔄 Reorganizar</h4>
                                <p>Argumentos para mejorar la estructura lógica.</p>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>🎯 Ajustar</h4>
                                <p>El nivel de tecnicismo según el público.</p>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>🔗 Mantener</h4>
                                <p>Coherencia estilística en comunicaciones recurrentes.</p>
                            </div>
                        </div>
                        <div className="highlight-success">
                            El criterio jurídico sigue siendo irremplazable. El abogado no delega la comunicación: la dirige.
                        </div>
                    </article>
                </section>

                {/* Sección 3: Posicionamiento y autoridad */}
                <section id="posicionamiento" className="page__section">
                    <h2 className="page__section-title">3. Posicionamiento profesional y construcción de autoridad</h2>
                    <article className="long-form-content">
                        <p>
                            La comunicación legal asistida por IA cumple un rol central en la <strong>construcción de autoridad profesional</strong>. No se trata de autopromoción vacía, sino de generar una presencia coherente que refleje especialización, solvencia conceptual y compromiso con la calidad.
                        </p>
                        <p>La IA puede colaborar en:</p>
                        <ul className="application-list">
                            <li>Planificación de contenidos</li>
                            <li>Consistencia del mensaje</li>
                            <li>Adaptación de una misma idea a distintos formatos</li>
                        </ul>
                        <blockquote className="concept-quote">
                            Un abogado bien posicionado no es el que más publica, sino el que comunica con sentido, continuidad y profundidad.
                        </blockquote>
                    </article>
                </section>

                {/* Sección 4: Ética y límites */}
                <section id="etica" className="page__section">
                    <h2 className="page__section-title">4. Ética, responsabilidad y límites</h2>
                    <article className="long-form-content">
                        <p>
                            El uso de IA en la comunicación legal plantea <strong>desafíos éticos específicos</strong>. La automatización no exime de responsabilidad profesional.
                        </p>
                        <p>Es indispensable preservar:</p>
                        <div className="comparison-grid">
                            <div className="comparison-box">
                                <h4>✅ Veracidad</h4>
                                <p>La información debe ser correcta y verificable.</p>
                            </div>
                            <div className="comparison-box">
                                <h4>🔒 Confidencialidad</h4>
                                <p>Proteger datos sensibles de clientes y casos.</p>
                            </div>
                            <div className="comparison-box">
                                <h4>⚖️ Claridad</h4>
                                <p>Distinguir contenido informativo de asesoramiento.</p>
                            </div>
                            <div className="comparison-box">
                                <h4>📜 Deontología</h4>
                                <p>Respetar las normas éticas de la profesión.</p>
                            </div>
                        </div>
                        <div className="highlight-warning">
                            La IA no debe inducir a confusión ni a simplificaciones peligrosas. Su uso responsable exige revisión humana, criterio jurídico y conciencia del impacto social de la palabra legal.
                        </div>
                    </article>
                </section>

                {/* Sección 5: Estrategia coherente */}
                <section id="estrategia" className="page__section">
                    <h2 className="page__section-title">5. Integración en una estrategia comunicacional coherente</h2>
                    <article className="long-form-content">
                        <p>
                            La verdadera ventaja competitiva no surge del uso aislado de herramientas, sino de su <strong>integración en una estrategia comunicacional coherente</strong>.
                        </p>
                        <p>
                            La IA puede formar parte de un sistema que articule:
                        </p>
                        <ul className="application-list">
                            <li>Identidad profesional</li>
                            <li>Objetivos institucionales</li>
                            <li>Canales de comunicación</li>
                        </ul>
                        <div className="highlight-success">
                            La comunicación legal moderna es un sistema, no una acción puntual, y la IA funciona como un componente más dentro de ese ecosistema.
                        </div>
                    </article>
                </section>

                {/* Sección 6: Cierre conceptual */}
                <section id="cierre" className="page__section">
                    <h2 className="page__section-title">6. Cierre conceptual: el dominio del lenguaje</h2>
                    <article className="long-form-content">
                        <p>
                            La comunicación jurídica sigue siendo, en esencia, un <strong>acto humano</strong>. La inteligencia artificial no reemplaza la intención, el criterio ni la responsabilidad del abogado, pero puede potenciar su capacidad de comunicar con claridad, alcance y consistencia.
                        </p>
                        <blockquote className="concept-quote">
                            En un entorno profesional cada vez más competitivo, quien sabe utilizar la IA para expresar ideas jurídicas con precisión y sentido estratégico obtiene una ventaja real, basada no en la automatización, sino en el dominio del lenguaje.
                        </blockquote>
                    </article>
                </section>

                {/* Footer de navegación */}
                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/mastering-u3" className="unit-nav-link">
                            <span className="unit-nav-label">← Módulo anterior</span>
                            <span className="unit-nav-title">M6 U3: Redacción técnica y análisis avanzado</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próximo módulo:</span>
                        <Link to="/practice" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Módulo 8 – De la teoría a la práctica →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommunicationM7U1

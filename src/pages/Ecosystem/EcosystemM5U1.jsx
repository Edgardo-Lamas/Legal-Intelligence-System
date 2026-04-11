import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function EcosystemM5U1() {
    return (
        <div className="page">
            <PageSEO
                title="IA como Ecosistema de Trabajo Jurídico · M5 U1"
                description="De la herramienta aislada a la arquitectura profesional. Cómo pensar la IA como un ecosistema integrado de trabajo jurídico."
                path="/ecosystem"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 5 · Unidad 1</span>
                <h1 className="page__title">Pensar la IA como ecosistema de trabajo jurídico</h1>
                <p className="page__description">
                    De la herramienta aislada a la arquitectura profesional de trabajo
                </p>
            </header>

            <div className="page__content">
                {/* Intro */}
                <section className="page__section">
                    <article className="long-form-content">
                        <p>
                            Hasta este punto del recorrido, ya comprendiste qué es la inteligencia artificial generativa, cómo interactuar con modelos de lenguaje y cómo escribir con intención persuasiva asistida por IA. El siguiente paso natural no es aprender más “trucos” ni sumar herramientas de manera aislada, sino aprender a pensar la IA como un <strong>ecosistema integrado de trabajo profesional</strong>.
                        </p>
                    </article>
                </section>

                {/* Sección 1: El Ecosistema */}
                <section id="ecosistema" className="page__section">
                    <h2 className="page__section-title">1. ¿Qué es un ecosistema de IA?</h2>
                    <article className="long-form-content">
                        <p>
                            Un ecosistema de IA no es una herramienta única ni una plataforma milagrosa. Es un conjunto articulado de decisiones: qué modelos usar, para qué tareas, en qué momento del flujo de trabajo jurídico y con qué nivel de control humano.
                        </p>
                        <blockquote className="concept-quote">
                            La diferencia entre un uso amateur de la IA y un uso profesional avanzado no está en la potencia del modelo, sino en la arquitectura mental con la que el abogado organiza su práctica.
                        </blockquote>
                        <p>
                            En el ejercicio jurídico moderno, la mayor parte del tiempo no se pierde en tareas estrictamente jurídicas, sino en actividades periféricas: búsqueda de antecedentes, redacción de borradores repetitivos, adaptación de textos para distintos públicos, seguimiento, orden de información y control de plazos. La IA, bien integrada, permite reordenar ese tiempo, desplazando el esfuerzo humano hacia el análisis, la estrategia y la toma de decisiones.
                        </p>
                    </article>
                </section>

                {/* Sección 2: Nuevos Roles */}
                <section id="roles" className="page__section">
                    <h2 className="page__section-title">2. Roles de la IA en el flujo de trabajo</h2>
                    <article className="long-form-content">
                        <p>
                            Pensar en términos de ecosistema implica abandonar la lógica de “pregunta–respuesta” típica del uso básico de ChatGPT. En su lugar, el abogado empieza a diseñar flujos de trabajo asistidos, donde la IA cumple roles específicos:
                        </p>
                        <ul className="application-list">
                            <li><strong>Asistente de investigación:</strong> Rastreo y sistematización de fuentes.</li>
                            <li><strong>Copiloto de redacción:</strong> Generación de borradores y estructuras.</li>
                            <li><strong>Revisor de estilo:</strong> Corrección y adaptación de tono.</li>
                            <li><strong>Generador de variantes:</strong> Exploración de argumentos alternativos.</li>
                            <li><strong>Apoyo en comunicación:</strong> Gestión de respuestas a clientes.</li>
                        </ul>
                        <p>
                            Cada rol tiene límites claros y siempre opera bajo supervisión profesional. No toda tarea debe resolverse con el mismo modelo ni con la misma configuración. Algunas tareas requieren creatividad, otras precisión técnica; algunas toleran exploración, otras exigen máximo control.
                        </p>
                    </article>
                </section>

                {/* Sección 3: Automatización y Ética */}
                <section id="automatizacion" className="page__section">
                    <h2 className="page__section-title">3. Automatización, criterio y ética</h2> 
                    <article className="long-form-content">
                        <p>
                            La automatización, en este contexto, no significa reemplazar al abogado ni “dejar que la IA trabaje sola”. Significa estandarizar procesos intelectuales repetitivos para liberar energía cognitiva en los puntos donde el criterio jurídico humano es irremplazable.
                        </p>
                        <div className="highlight-success">
                            Automatizar bien es, paradójicamente, una forma de proteger el núcleo artesanal del ejercicio del Derecho.
                        </div>
                        <p>
                            Además, pensar en ecosistema obliga a incorporar una dimensión ética y estratégica. Cada integración de IA supone decisiones sobre confidencialidad, trazabilidad, responsabilidad profesional y calidad del servicio. El abogado que domina este nivel no solo es más eficiente, sino más consciente de los riesgos y límites.
                        </p>
                    </article>
                </section>

                {/* Sección 4: Conclusión */}
                <section id="conclusion" className="page__section">
                    <h2 className="page__section-title">4. Hacia la construcción práctica</h2>
                    <article className="long-form-content">
                        <p>
                            Esta unidad sienta las bases conceptuales del módulo. La IA deja de ser una herramienta externa y pasa a ser un componente estructural del entorno profesional.
                        </p>
                        <p>
                            En las próximas unidades, este marco se volverá operativo, avanzando desde la idea de ecosistema hacia la construcción práctica de flujos de trabajo y la automatización de tareas jurídicas frecuentes.
                        </p>
                    </article>
                </section>

                {/* Footer de navegación */}
                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/gemini-u3" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M4 U3: Tareas automáticas y memoria</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/ecosystem-u2" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Unidad 2 – Automatización y criterio →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EcosystemM5U1

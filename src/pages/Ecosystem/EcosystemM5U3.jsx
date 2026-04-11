import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function EcosystemM5U3() {
    return (
        <div className="page">
            <PageSEO
                title="Flujos de Trabajo Jurídicos con IA · M5 U3"
                description="Cómo diseñar secuencias de trabajo asistido por IA para multiplicar resultados sin perder criterio en la práctica legal."
                path="/ecosystem-u3"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 5 · Unidad 3</span>
                <h1 className="page__title">Flujos de trabajo jurídicos con IA: diseño, control y escalabilidad</h1>
                <p className="page__description">
                    Cómo organizar secuencias de trabajo asistido para multiplicar resultados sin perder criterio profesional.
                </p>
            </header>

            <div className="page__content">
                {/* Intro */}
                <section className="page__section">
                    <article className="long-form-content">
                        <p>
                            Luego de comprender qué tareas conviene automatizar y cuáles deben permanecer bajo control humano, el siguiente paso natural es aprender a <strong>diseñar flujos de trabajo jurídicos asistidos por IA</strong>. Un flujo de trabajo no es una herramienta ni un prompt aislado, sino una secuencia organizada de acciones, donde cada etapa cumple una función clara dentro del proceso profesional.
                        </p>
                        <p>
                            En el ejercicio jurídico tradicional, muchos flujos existen de manera implícita. El abogado recibe información, la analiza, redacta un borrador, lo ajusta, lo revisa desde el punto de vista legal y finalmente lo presenta o comunica. El problema es que estos pasos suelen realizarse de forma desordenada, repetitiva y dependiente exclusivamente de la memoria o la experiencia individual. La IA permite hacer explícitos esos flujos, ordenarlos y volverlos más eficientes sin perder control profesional.
                        </p>
                    </article>
                </section>

                {/* Sección 1: Definición del objetivo */}
                <section id="objetivo" className="page__section">
                    <h2 className="page__section-title">1. Empezar por el objetivo</h2>
                    <article className="long-form-content">
                        <p>
                            Un flujo de trabajo jurídico con IA bien diseñado comienza siempre por la <strong>definición del objetivo</strong>. No se trata de "usar IA", sino de resolver un problema concreto:
                        </p>
                        <ul className="application-list">
                            <li>Redactar un escrito judicial.</li>
                            <li>Preparar una consulta para un cliente.</li>
                            <li>Analizar documentación extensa.</li>
                            <li>Adaptar un texto a distintos destinatarios.</li>
                            <li>Generar variantes argumentativas.</li>
                        </ul>
                        <blockquote className="concept-quote">
                            Cuando el objetivo es claro, la IA puede intervenir de forma precisa en cada etapa del proceso.
                        </blockquote>
                    </article>
                </section>

                {/* Sección 2: Separación de funciones */}
                <section id="funciones" className="page__section">
                    <h2 className="page__section-title">2. Separación de funciones</h2>
                    <article className="long-form-content">
                        <p>
                            En un flujo sano, la IA no cumple todos los roles al mismo tiempo. En una etapa puede actuar como <strong>asistente de análisis</strong>, en otra como <strong>generador de borradores</strong> y en otra como <strong>herramienta de revisión formal</strong>.
                        </p>
                        <div className="highlight-warning">
                            Esta separación evita errores comunes, como pedirle a un solo prompt que analice, decida y redacte simultáneamente, lo que suele producir textos confusos o jurídicamente débiles.
                        </div>
                        <p>
                            Diseñar un flujo implica asignar a cada etapa una función específica, controlando qué se le pide a la IA en cada momento.
                        </p>
                    </article>
                </section>

                {/* Sección 3: Control humano */}
                <section id="control" className="page__section">
                    <h2 className="page__section-title">3. El control humano como estructura</h2>
                    <article className="long-form-content">
                        <p>
                            El control humano es un <strong>elemento estructural del flujo</strong>, no un agregado final. El abogado debe intervenir en los puntos críticos:
                        </p>
                        <ul className="application-list">
                            <li>Definición del enfoque jurídico.</li>
                            <li>Validación de criterios normativos.</li>
                            <li>Evaluación de riesgos.</li>
                            <li>Decisión final.</li>
                        </ul>
                        <p>
                            La IA acompaña, propone y acelera, pero no cierra el proceso por sí sola.
                        </p>
                        <div className="highlight-success">
                            Un flujo bien diseñado siempre deja claro dónde termina la asistencia y dónde comienza la responsabilidad profesional.
                        </div>
                    </article>
                </section>

                {/* Sección 4: Escalabilidad */}
                <section id="escalabilidad" className="page__section">
                    <h2 className="page__section-title">4. Escalabilidad sin estandarización del razonamiento</h2>
                    <article className="long-form-content">
                        <p>
                            A medida que el abogado repite estos flujos, aparece un beneficio clave: la <strong>escalabilidad</strong>. Un mismo esquema puede reutilizarse con distintos casos, clientes o materias, ajustando solo ciertos parámetros.
                        </p>
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--good">
                                <h4>✅ Lo que se estandariza</h4>
                                <p>La estructura del trabajo: orden de etapas, roles de la IA, puntos de validación humana.</p>
                            </div>
                            <div className="comparison-box">
                                <h4>🎯 Lo que permanece contextual</h4>
                                <p>El contenido, el razonamiento jurídico y las decisiones estratégicas de cada caso.</p>
                            </div>
                        </div>
                        <p>
                            Esta distinción es fundamental: <strong>estandarizar la estructura no significa estandarizar el criterio</strong>. El proceso se vuelve más ordenado, previsible y eficiente, mientras el análisis sigue siendo único para cada situación.
                        </p>
                    </article>
                </section>

                {/* Sección 5: Gestión del contexto */}
                <section id="contexto" className="page__section">
                    <h2 className="page__section-title">5. Gestión consciente del contexto</h2>
                    <article className="long-form-content">
                        <p>
                            La IA no "recuerda" como una persona, sino que trabaja con la información que se le proporciona en cada interacción. Por eso, un flujo bien diseñado define:
                        </p>
                        <ul className="application-list">
                            <li>Qué información se introduce en cada etapa.</li>
                            <li>Cómo se resume lo anterior.</li>
                            <li>Cómo se evita la pérdida de elementos relevantes.</li>
                        </ul>
                        <blockquote className="concept-quote">
                            Esta gestión consciente del contexto marca la diferencia entre un uso superficial de la IA y un uso profesional.
                        </blockquote>
                    </article>
                </section>

                {/* Sección 6: Impacto estratégico */}
                <section id="estrategia" className="page__section">
                    <h2 className="page__section-title">6. Impacto estratégico: tiempo y calidad</h2>
                    <article className="long-form-content">
                        <p>
                            Desde una perspectiva estratégica, los flujos de trabajo permiten al abogado <strong>desacoplar tiempo y calidad</strong>. Tareas que antes requerían largas horas de concentración pueden resolverse en menos tiempo, manteniendo o incluso mejorando el nivel del resultado final.
                        </p>
                        <p>
                            Esto impacta directamente en:
                        </p>
                        <ul className="application-list">
                            <li>La organización del estudio.</li>
                            <li>La atención al cliente.</li>
                            <li>La posibilidad de asumir mayor volumen de trabajo sin sacrificar criterio jurídico.</li>
                        </ul>
                    </article>
                </section>

                {/* Sección 7: Conclusión */}
                <section id="conclusion" className="page__section">
                    <h2 className="page__section-title">7. Diseño consciente del ecosistema</h2>
                    <article className="long-form-content">
                        <p>
                            Esta unidad cierra una idea fundamental del módulo: la IA no se integra al Derecho como una herramienta aislada, sino como parte de un <strong>sistema de trabajo diseñado conscientemente</strong>.
                        </p>
                        <div className="highlight-success">
                            El abogado que entiende y diseña sus propios flujos no depende de modas tecnológicas ni de soluciones cerradas; construye un ecosistema flexible, adaptable y alineado con su forma de ejercer la profesión.
                        </div>
                        <p>
                            En la siguiente unidad, este enfoque se lleva un paso más allá, incorporando la integración entre IA, documentos y sistemas externos, para consolidar un ecosistema jurídico verdaderamente avanzado.
                        </p>
                    </article>
                </section>

                {/* Footer de navegación */}
                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/ecosystem-u2" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M5 U2: Automatización y criterio</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/ecosystem-u4" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Unidad 4 – Integración con documentos y sistemas →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EcosystemM5U3

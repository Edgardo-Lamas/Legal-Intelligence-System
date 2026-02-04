import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'

function PracticeM8U1() {
    return (
        <div className="page">
            <header className="page__header">
                <span className="page__module-tag">Módulo 8 · Unidad 1</span>
                <h1 className="page__title">Del concepto al sistema</h1>
                <p className="page__description">
                    De usar herramientas aisladas a diseñar sistemas de trabajo coherentes.
                </p>
            </header>

            <div className="page__content">
                {/* Intro */}
                <section className="page__section">
                    <article className="long-form-content">
                        <p>
                            Hasta este punto del recorrido, el curso trabajó sobre herramientas, técnicas, criterios y marcos conceptuales vinculados al uso de IA en el ámbito jurídico y profesional.
                        </p>
                        <blockquote className="concept-quote">
                            Sin embargo, existe una diferencia fundamental entre conocer herramientas y operar con sistemas. Esta unidad marca precisamente ese punto de inflexión.
                        </blockquote>
                    </article>
                </section>

                {/* Sección 1: El error común */}
                <section id="error" className="page__section">
                    <h2 className="page__section-title">1. El error más común</h2>
                    <article className="long-form-content">
                        <p>
                            El error más común al incorporar inteligencia artificial en la práctica profesional consiste en utilizarla de manera <strong>fragmentada</strong>:
                        </p>
                        <ul className="application-list">
                            <li>Un prompt aislado</li>
                            <li>Una consulta ocasional</li>
                            <li>Una automatización suelta</li>
                        </ul>
                        <div className="highlight-warning">
                            Aunque estos usos pueden generar mejoras puntuales, no producen un cambio estructural en la forma de trabajar.
                        </div>
                        <p>
                            La verdadera transformación ocurre cuando la IA deja de ser una ayuda circunstancial y pasa a integrarse como parte de un <strong>sistema de trabajo coherente</strong>.
                        </p>
                    </article>
                </section>

                {/* Sección 2: Qué es un sistema */}
                <section id="sistema" className="page__section">
                    <h2 className="page__section-title">2. ¿Qué significa pensar en "sistema"?</h2>
                    <article className="long-form-content">
                        <p>
                            Hablar de "sistema" implica pensar la práctica profesional como un <strong>conjunto de procesos conectados entre sí</strong>. Cada proceso tiene:
                        </p>
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--good">
                                <h4>🎯 Objetivo claro</h4>
                                <p>Qué resultado se busca obtener.</p>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>📥 Entrada</h4>
                                <p>La información que ingresa al proceso.</p>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>⚙️ Procesamiento</h4>
                                <p>Cómo se transforma esa información.</p>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>📤 Resultado</h4>
                                <p>El producto final esperado.</p>
                            </div>
                        </div>
                        <div className="highlight-success">
                            En este contexto, la IA no reemplaza al profesional, sino que se integra como un componente más dentro de ese flujo, amplificando su capacidad de análisis, producción y decisión.
                        </div>
                    </article>
                </section>

                {/* Sección 3: Preguntas estratégicas */}
                <section id="preguntas" className="page__section">
                    <h2 className="page__section-title">3. Las preguntas estratégicas</h2>
                    <article className="long-form-content">
                        <p>
                            En el ámbito jurídico, esto significa dejar de preguntarse únicamente "qué puede hacer esta herramienta" y empezar a formular preguntas más estratégicas:
                        </p>
                        <ul className="application-list">
                            <li><strong>¿Qué problema recurrente quiero resolver?</strong></li>
                            <li><strong>¿Qué parte del proceso consume más tiempo o energía?</strong></li>
                            <li><strong>¿Dónde tiene sentido incorporar asistencia automatizada y dónde no?</strong></li>
                        </ul>
                    </article>
                </section>

                {/* Sección 4: De usuario a arquitecto */}
                <section id="arquitecto" className="page__section">
                    <h2 className="page__section-title">4. De usuario a arquitecto</h2>
                    <article className="long-form-content">
                        <p>
                            Esta unidad propone un cambio de enfoque: pasar del uso instrumental de la IA a una <strong>lógica de diseño</strong>.
                        </p>
                        <blockquote className="concept-quote">
                            El profesional deja de ser un usuario pasivo de herramientas para convertirse en un arquitecto de sistemas de trabajo.
                        </blockquote>
                        <p>Esto exige comprender que:</p>
                        <ul className="application-list">
                            <li>No todo debe automatizarse</li>
                            <li>Existen puntos críticos donde la intervención humana es irremplazable</li>
                            <li>La calidad del sistema depende más de su estructura que de la sofisticación tecnológica</li>
                        </ul>
                    </article>
                </section>

                {/* Sección 5: Contexto concreto */}
                <section id="contexto" className="page__section">
                    <h2 className="page__section-title">5. Sistemas para contextos concretos</h2>
                    <article className="long-form-content">
                        <p>
                            Los sistemas no se diseñan en abstracto. Siempre responden a un <strong>contexto concreto</strong>:
                        </p>
                        <ul className="application-list">
                            <li>El tipo de práctica profesional</li>
                            <li>El volumen de trabajo</li>
                            <li>El perfil del destinatario</li>
                            <li>Los riesgos legales y éticos involucrados</li>
                        </ul>
                        <div className="highlight-success">
                            Por eso, esta unidad no busca ofrecer modelos cerrados, sino criterios para que cada estudiante pueda pensar su propio sistema de implementación.
                        </div>
                    </article>
                </section>

                {/* Sección 6: Responsabilidad */}
                <section id="responsabilidad" className="page__section">
                    <h2 className="page__section-title">6. Mayor responsabilidad</h2>
                    <article className="long-form-content">
                        <p>
                            El paso del concepto al sistema también implica asumir una <strong>responsabilidad mayor</strong>. Cuando la IA se integra en flujos reales, sus resultados tienen consecuencias prácticas.
                        </p>
                        <div className="highlight-warning">
                            Esto obliga a establecer mecanismos de control, validación y revisión, reafirmando el rol del profesional como garante final del contenido, la decisión y la estrategia.
                        </div>
                    </article>
                </section>

                {/* Sección 7: Nueva etapa */}
                <section id="nueva-etapa" className="page__section">
                    <h2 className="page__section-title">7. Una nueva etapa del curso</h2>
                    <article className="long-form-content">
                        <p>
                            Esta unidad inaugura una nueva etapa del curso. A partir de aquí, el foco deja de estar en aprender <em>qué hace la IA</em> y se traslada a <strong>cómo diseñar sistemas de trabajo reales, sostenibles y alineados con los objetivos profesionales</strong>.
                        </p>
                        <blockquote className="concept-quote">
                            Lo aprendido hasta ahora encuentra sentido en la medida en que puede organizarse, integrarse y aplicarse de forma consciente en la práctica cotidiana.
                        </blockquote>
                        <p>
                            Esta base conceptual será indispensable para las unidades siguientes, donde se avanzará hacia el diseño de flujos de trabajo concretos y, finalmente, hacia la implementación práctica en escenarios reales.
                        </p>
                    </article>
                </section>

                {/* Sección 7.5: Prompts de diseño de sistemas */}
                <section id="prompts-sistemas" className="page__section">
                    <h2 className="page__section-title">7.5. Prompts para diseñar tu sistema de trabajo</h2>
                    <article className="long-form-content">
                        <p>Estos prompts te ayudan a reflexionar y diseñar tu propio sistema:</p>

                        <div className="component-card">
                            <div className="component-content">
                                <h4>🔍 Diagnóstico de práctica actual</h4>
                                <blockquote className="prompt-example">
                                    Actuás como consultor de productividad legal.<br /><br />

                                    Mi práctica profesional es: [describir área, tipo de clientes, volumen]<br /><br />

                                    Ayudame a diagnosticar mi flujo de trabajo actual:<br />
                                    1. ¿Cuáles son las tareas más repetitivas que hago?<br />
                                    2. ¿Dónde pierdo más tiempo sin agregar valor?<br />
                                    3. ¿Qué tareas requieren criterio jurídico irremplazable?<br />
                                    4. ¿Qué información manejo repetidamente?<br />
                                    5. ¿Dónde hay mayor riesgo de error humano?<br /><br />

                                    Formato: tabla con [Tarea, Tiempo estimado, Valor agregado, Automatizable S/N, Prioridad].
                                </blockquote>
                            </div>
                        </div>

                        <div className="component-card">
                            <div className="component-content">
                                <h4>🏗️ Diseño de sistema mínimo viable</h4>
                                <blockquote className="prompt-example">
                                    Actuás como arquitecto de sistemas legales con enfoque práctico.<br /><br />

                                    Contexto de mi práctica: [describir]<br />
                                    Principal dolor identificado: [tarea/proceso problemático]<br />
                                    Herramientas que ya uso: [listar]<br /><br />

                                    Diseñá un sistema mínimo viable que:<br />
                                    1. Ataque el problema principal primero<br />
                                    2. Use herramientas que ya conozco o son fáciles de aprender<br />
                                    3. Pueda implementarse en menos de 1 semana<br />
                                    4. Tenga puntos claros de control humano<br />
                                    5. Sea escalable si funciona bien<br /><br />

                                    Formato: diagrama de flujo + lista de pasos de implementación.
                                </blockquote>
                            </div>
                        </div>

                        <div className="component-card">
                            <div className="component-content">
                                <h4>⚙️ Checklist de implementación</h4>
                                <blockquote className="prompt-example">
                                    Actuás como project manager de implementación tecnológica legal.<br /><br />

                                    Sistema a implementar: [describir el flujo diseñado]<br />
                                    Tiempo disponible: [X horas/días]<br /><br />

                                    Creá un checklist de implementación que incluya:<br />
                                    1. Prerequisitos técnicos (cuentas, accesos, configuraciones)<br />
                                    2. Pasos de configuración en orden<br />
                                    3. Pruebas de validación para cada etapa<br />
                                    4. Plan B si algo falla<br />
                                    5. Métricas para saber si funciona<br /><br />

                                    Formato: checklist con casillas, agrupado por día/etapa.
                                </blockquote>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Sección 7.6: Caso práctico diseño */}
                <section id="caso-practico-diseño" className="page__section">
                    <h2 className="page__section-title">7.6. Caso práctico: De herramientas sueltas a sistema integrado</h2>
                    <article className="long-form-content">
                        <h3>Situación inicial</h3>
                        <div className="comparison-box comparison-box--bad">
                            <p><strong>Problema:</strong> Abogado que usa IA de forma fragmentada</p>
                            <ul>
                                <li>ChatGPT para redactar emails</li>
                                <li>Gemini para leer documentos largos</li>
                                <li>Excel para control de causas</li>
                                <li>Ninguna conexión entre herramientas</li>
                                <li>Duplicación de trabajo manual</li>
                            </ul>
                        </div>

                        <h3>Diseño del sistema integrado</h3>
                        <div className="comparison-box comparison-box--good">
                            <div className="layer-diagram">
                                <div className="layer-step">
                                    <div className="layer-step__number">1</div>
                                    <div className="layer-step__content">
                                        <h4>Identificar proceso central</h4>
                                        <p>Gestión de nuevos casos: desde consulta inicial hasta apertura de expediente</p>
                                    </div>
                                </div>
                                <div className="layer-connector">↓</div>
                                <div className="layer-step">
                                    <div className="layer-step__number">2</div>
                                    <div className="layer-step__content">
                                        <h4>Mapear flujo actual</h4>
                                        <p>Cliente contacta → reunión → documentación → análisis → presupuesto → apertura</p>
                                    </div>
                                </div>
                                <div className="layer-connector">↓</div>
                                <div className="layer-step">
                                    <div className="layer-step__number">3</div>
                                    <div className="layer-step__content">
                                        <h4>Identificar puntos de IA</h4>
                                        <p>Análisis → Gemini | Presupuesto → ChatGPT | Seguimiento → automatización</p>
                                    </div>
                                </div>
                                <div className="layer-connector">↓</div>
                                <div className="layer-step">
                                    <div className="layer-step__number">4</div>
                                    <div className="layer-step__content">
                                        <h4>Definir puntos de control humano</h4>
                                        <p>Validación de análisis + aprobación de presupuesto + decisión de aceptar</p>
                                    </div>
                                </div>
                                <div className="layer-connector">↓</div>
                                <div className="layer-step">
                                    <div className="layer-step__number">5</div>
                                    <div className="layer-step__content">
                                        <h4>Implementar y testear</h4>
                                        <p>Probar con 5 casos antes de escalar</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="highlight-success">
                            <strong>Resultado:</strong> De 3 horas por caso nuevo a 1 hora, con mejor calidad y consistencia.
                        </p>
                    </article>
                </section>

                {/* Sección 7.7: Template de diseño */}
                <section id="template-sistema" className="page__section">
                    <h2 className="page__section-title">7.7. Template: Diseño de tu sistema de trabajo</h2>
                    <article className="long-form-content">
                        <div className="component-card">
                            <div className="component-content">
                                <p><strong>Usá esta estructura para diseñar tu primer sistema:</strong></p>
                                <blockquote className="prompt-example" style={{ textAlign: 'left' }}>
                                    <strong>FICHA DE DISEÑO DE SISTEMA</strong><br /><br />

                                    <strong>1. PROCESO A SISTEMATIZAR:</strong><br />
                                    [Nombre del proceso]<br /><br />

                                    <strong>2. SITUACIÓN ACTUAL:</strong><br />
                                    - Tiempo promedio: [X horas]<br />
                                    - Pasos manuales: [listar]<br />
                                    - Puntos de error frecuente: [listar]<br /><br />

                                    <strong>3. OBJETIVO DEL SISTEMA:</strong><br />
                                    [Qué resultado querés lograr]<br /><br />

                                    <strong>4. FLUJO PROPUESTO:</strong><br />
                                    Paso 1 → [Quién/Qué lo hace] → Resultado<br />
                                    Paso 2 → [Quién/Qué lo hace] → Resultado<br />
                                    ...<br /><br />

                                    <strong>5. PUNTOS DE IA:</strong><br />
                                    - [Paso X]: [Herramienta] para [tarea]<br /><br />

                                    <strong>6. PUNTOS DE CONTROL HUMANO:</strong><br />
                                    - [Paso Y]: Validación de [qué]<br /><br />

                                    <strong>7. MÉTRICAS DE ÉXITO:</strong><br />
                                    - Tiempo objetivo: [X horas]<br />
                                    - Calidad medida por: [criterio]<br /><br />

                                    <strong>8. PLAN DE IMPLEMENTACIÓN:</strong><br />
                                    Semana 1: [acciones]<br />
                                    Semana 2: [acciones]
                                </blockquote>
                            </div>
                        </div>

                        <p className="highlight-warning">
                            <strong>Consejo:</strong> Empezá con UN solo proceso. Una vez que funcione, escalá a otros.
                        </p>
                    </article>
                </section>

                {/* Footer de navegación */}
                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/communication" className="unit-nav-link">
                            <span className="unit-nav-label">← Módulo anterior</span>
                            <span className="unit-nav-title">M7: IA para comunicación legal</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/practice-u2" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Unidad 2 – Diseño de flujos de trabajo con IA →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PracticeM8U1

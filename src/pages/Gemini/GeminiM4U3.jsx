import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function GeminiM4U3() {
    return (
        <div className="page">
            <PageSEO
                title="Gemini: Automatización y Memoria Jurídica · M4 U3"
                description="Del uso reactivo al proactivo: cómo programar tareas automáticas y gestionar memoria jurídica con Gemini."
                path="/gemini-u3"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 4 · Unidad 3</span>
                <h1 className="page__title">Gemini: Programación de tareas automáticas y gestión de memoria jurídica</h1>
                <p className="page__description">
                    Del uso reactivo al uso proactivo: seguimiento, alertas y continuidad en el trabajo legal
                </p>
            </header>

            <div className="page__content">
                {/* Sección 1: Objetivos */}
                <section id="objetivos" className="page__section">
                    <h2 className="page__section-title">1. ¿Qué vas a aprender?</h2>
                    <article className="long-form-content">
                        <p>
                            En esta unidad vas a comprender cómo Gemini puede utilizarse no solo para leer y visualizar información legal, sino para sostener procesos en el tiempo. El foco ya no está en una consulta puntual, sino en la <strong>continuidad del trabajo jurídico</strong>: seguimiento de casos, actualización de información, control de cambios y recordatorios inteligentes.
                        </p>
                        <p>
                            Al finalizar esta unidad, entenderás cómo pasar de un uso reactivo de la IA a un uso proactivo, donde ciertas tareas jurídicas dejan de depender exclusivamente de la memoria humana y se apoyan en sistemas que monitorean, recuerdan y alertan de forma estructurada.
                        </p>
                    </article>
                </section>

                {/* Sección 2: Concepto central */}
                <section id="concepto" className="page__section">
                    <h2 className="page__section-title">2. Concepto central</h2>
                    <article className="long-form-content">
                        <blockquote className="concept-quote">
                            La práctica legal no falla por falta de conocimiento, sino por fallas de seguimiento.
                        </blockquote>
                        <p>
                            Plazos que se acercan, cambios normativos que pasan inadvertidos, jurisprudencia nueva que altera un criterio previamente adoptado. La memoria humana es limitada; el sistema no.
                        </p>
                        <p>
                            Gemini permite introducir una capa de <strong>memoria operativa asistida</strong>, donde la IA no “recuerda” como una persona, sino que mantiene estados, revisa información periódicamente y ejecuta tareas definidas previamente. Esto transforma la IA en un componente activo del flujo de trabajo jurídico.
                        </p>
                        <p className="highlight-success">
                            Automatizar no es delegar criterio: es protegerlo del desgaste.
                        </p>
                    </article>
                </section>

                {/* Sección 3: Tareas automáticas */}
                <section id="tareas-automaticas" className="page__section">
                    <h2 className="page__section-title">3. Tareas automáticas como extensión del trabajo profesional</h2>
                    <article className="long-form-content">
                        <p>
                            La programación de tareas en Gemini permite definir acciones recurrentes vinculadas a información jurídica. El abogado deja de “acordarse de revisar” y pasa a diseñar un sistema que revisa por él.
                        </p>
                        <p>
                            La diferencia no es técnica, es estratégica: el profesional se libera de tareas repetitivas y reduce el riesgo de omisiones críticas.
                        </p>
                        <ul className="application-list">
                            <li>Revisión periódica de fuentes normativas.</li>
                            <li>Monitoreo de jurisprudencia relevante.</li>
                            <li>Actualización de bases documentales.</li>
                            <li>Generación de alertas ante cambios significativos.</li>
                        </ul>
                    </article>
                </section>

                {/* Sección 4: Memoria jurídica */}
                <section id="memoria-juridica" className="page__section">
                    <h2 className="page__section-title">4. Gestión de memoria jurídica</h2>
                    <article className="long-form-content">
                        <p>
                            La memoria en un sistema de IA no es acumulación indiscriminada de datos. Es <strong>curaduría estructurada</strong>. Gemini permite trabajar con memorias organizadas: conjuntos de documentos, criterios, resúmenes validados y referencias que se actualizan con el tiempo.
                        </p>
                        <p>
                            Esto resulta especialmente útil en áreas donde los casos se parecen entre sí, pero nunca son idénticos. El sistema no decide, pero recuerda qué se hizo antes, qué funcionó, qué argumentos se usaron y bajo qué contexto normativo.
                        </p>
                        <div className="highlight-box">
                            La memoria bien diseñada convierte la experiencia pasada en capital reutilizable.
                        </div>
                    </article>
                </section>

                {/* Sección 5: Casos de uso */}
                <section id="casos-uso" className="page__section">
                    <h2 className="page__section-title">5. Casos de uso reales en la práctica legal</h2>
                    <article className="long-form-content">
                        <p>
                            Gemini puede configurarse para múltiples funciones proactivas:
                        </p>
                        <div className="examples-grid">
                            <div className="example-item">
                                <span className="example-icon">📆</span>
                                <div>
                                    <strong>Seguimiento de causa</strong>
                                    <p>Alertar sobre movimientos relevantes y plazos.</p>
                                </div>
                            </div>
                            <div className="example-item">
                                <span className="example-icon">⚖️</span>
                                <div>
                                    <strong>Monitoreo regulatorio</strong>
                                    <p>Vigilar cambios en normas específicas.</p>
                                </div>
                            </div>
                            <div className="example-item">
                                <span className="example-icon">📚</span>
                                <div>
                                    <strong>Repositorio vivo</strong>
                                    <p>Mantener actualizada la jurisprudencia clave.</p>
                                </div>
                            </div>
                            <div className="example-item">
                                <span className="example-icon">🧠</span>
                                <div>
                                    <strong>Gestión del conocimiento</strong>
                                    <p>Respuestas tipo a consultas frecuentes y criterios del estudio.</p>
                                </div>
                            </div>
                        </div>
                        <p className="description-text">
                            Estos sistemas no reemplazan al abogado senior: multiplican su alcance.
                        </p>
                    </article>
                </section>

                {/* Sección 5.5: Prompts para automatización */}
                <section id="prompts-automatizacion" className="page__section">
                    <h2 className="page__section-title">5.5. Prompts específicos para automatización jurídica</h2>
                    <article className="long-form-content">
                        <p>Estos prompts te ayudan a configurar sistemas de seguimiento y memoria:</p>

                        <div className="component-card">
                            <div className="component-content">
                                <h4>📅 Monitoreo de vencimientos procesales</h4>
                                <blockquote className="prompt-example">
                                    Actuás como sistema de control de plazos procesales.<br /><br />

                                    Para cada caso que te presente, necesito que:<br /><br />

                                    1. Identifiques todos los plazos mencionados o implícitos<br />
                                    2. Calcules fechas límite considerando días hábiles<br />
                                    3. Alertes 5 días antes de cada vencimiento<br />
                                    4. Priorices por consecuencia de incumplimiento<br />
                                    5. Sugieras margen de seguridad recomendado<br /><br />

                                    Formato: tabla con columnas [Acto, Plazo, Fecha límite, Días restantes, Prioridad].<br />
                                    Marcá en rojo los que venzan en menos de 7 días.
                                </blockquote>
                            </div>
                        </div>

                        <div className="component-card">
                            <div className="component-content">
                                <h4>⚖️ Seguimiento de cambios normativos</h4>
                                <blockquote className="prompt-example">
                                    Actuás como monitor de legislación y jurisprudencia.<br /><br />

                                    Áreas a monitorear:<br />
                                    - [Área 1: ej. Derecho laboral, específicamente despidos]<br />
                                    - [Área 2: ej. Contratos de locación, Ley 27.551]<br /><br />

                                    Tu tarea periódica:<br />
                                    1. Detectar nuevas normas publicadas<br />
                                    2. Identificar fallos relevantes recientes<br />
                                    3. Señalar cambios de criterio judicial<br />
                                    4. Alertar sobre derogaciones o modificaciones<br /><br />

                                    Formato de reporte:<br />
                                    - Resumen ejecutivo (3 líneas máximo)<br />
                                    - Tabla de novedades con fuente y fecha<br />
                                    - Impacto potencial en casos activos
                                </blockquote>
                            </div>
                        </div>

                        <div className="component-card">
                            <div className="component-content">
                                <h4>🧠 Base de conocimiento del estudio</h4>
                                <blockquote className="prompt-example">
                                    Actuás como gestor de conocimiento institucional.<br /><br />

                                    Necesito que mantengas registro de:<br /><br />

                                    1. Criterios adoptados por este estudio en casos similares<br />
                                    2. Argumentos que funcionaron y cuáles no<br />
                                    3. Jurisprudencia favorable que usamos frecuentemente<br />
                                    4. Plantillas y modelos reutilizables<br />
                                    5. Lecciones aprendidas de casos anteriores<br /><br />

                                    Cuando te consulte sobre un tema, primero verificá si tenemos antecedentes internos antes de responder desde conocimiento general.<br /><br />

                                    Formato de registro: ficha con [Tema, Criterio, Fuente interna, Fecha, Resultado].
                                </blockquote>
                            </div>
                        </div>

                        <div className="component-card">
                            <div className="component-content">
                                <h4>📧 Resumen diario de actividad</h4>
                                <blockquote className="prompt-example">
                                    Actuás como asistente de síntesis diaria.<br /><br />

                                    Al final de cada día, generá un resumen que incluya:<br /><br />

                                    1. Tareas completadas hoy<br />
                                    2. Tareas pendientes para mañana<br />
                                    3. Vencimientos en los próximos 3 días<br />
                                    4. Comunicaciones que requieren respuesta<br />
                                    5. Notas o ideas relevantes registradas<br /><br />

                                    Formato: briefing de 1 página, con bullets por sección.<br />
                                    Priorizá lo que requiere acción inmediata.
                                </blockquote>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Sección 5.6: Caso práctico automatización */}
                <section id="caso-practico-auto" className="page__section">
                    <h2 className="page__section-title">5.6. Caso práctico: Sistema de seguimiento de causas</h2>
                    <article className="long-form-content">
                        <h3>Situación inicial</h3>
                        <div className="comparison-box comparison-box--bad">
                            <p><strong>Problema:</strong> Abogado con 30 causas activas</p>
                            <ul>
                                <li>Usa una planilla Excel desactualizada</li>
                                <li>Revisa manualmente cada expediente semanal</li>
                                <li>Ya tuvo 2 vencimientos por olvido este año</li>
                                <li>Pierde 3 horas semanales solo en control</li>
                            </ul>
                        </div>

                        <h3>Solución con Gemini automatizado</h3>
                        <div className="comparison-box comparison-box--good">
                            <div className="layer-diagram">
                                <div className="layer-step">
                                    <div className="layer-step__number">1</div>
                                    <div className="layer-step__content">
                                        <h4>Configurar base de causas</h4>
                                        <p>Cargar info de cada causa: partes, juzgado, estado, última fecha</p>
                                    </div>
                                </div>
                                <div className="layer-connector">↓</div>
                                <div className="layer-step">
                                    <div className="layer-step__number">2</div>
                                    <div className="layer-step__content">
                                        <h4>Definir reglas de seguimiento</h4>
                                        <p>Alertar 5 días antes de cada vencimiento, resumen semanal</p>
                                    </div>
                                </div>
                                <div className="layer-connector">↓</div>
                                <div className="layer-step">
                                    <div className="layer-step__number">3</div>
                                    <div className="layer-step__content">
                                        <h4>Prompt de actualización</h4>
                                        <p>Cada vez que hay novedad, actualizar estado en conversación</p>
                                    </div>
                                </div>
                                <div className="layer-connector">↓</div>
                                <div className="layer-step">
                                    <div className="layer-step__number">4</div>
                                    <div className="layer-step__content">
                                        <h4>Revisar briefing semanal</h4>
                                        <p>Gemini genera resumen con próximas acciones por causa</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="highlight-success">
                            <strong>Resultado:</strong> Control de 30 causas en 30 minutos semanales. Cero vencimientos olvidados.
                        </p>
                    </article>
                </section>

                {/* Sección 5.7: Templates de memoria */}
                <section id="templates-memoria" className="page__section">
                    <h2 className="page__section-title">5.7. Template: Ficha de memoria institucional</h2>
                    <article className="long-form-content">
                        <div className="component-card">
                            <div className="component-content">
                                <p><strong>Usá esta estructura para cada entrada en tu base de conocimiento:</strong></p>
                                <blockquote className="prompt-example" style={{ textAlign: 'left' }}>
                                    <strong>FICHA DE CONOCIMIENTO INSTITUCIONAL</strong><br /><br />

                                    <strong>Tema:</strong> [Descripción breve]<br />
                                    <strong>Área:</strong> [Laboral / Civil / Comercial / Familia / etc.]<br />
                                    <strong>Fecha de registro:</strong> [DD/MM/AAAA]<br /><br />

                                    <strong>CRITERIO ADOPTADO:</strong><br />
                                    [Descripción del criterio o posición que adoptamos]<br /><br />

                                    <strong>FUNDAMENTO:</strong><br />
                                    - Normativa: [citar]<br />
                                    - Jurisprudencia: [citar fallos]<br />
                                    - Doctrina: [si aplica]<br /><br />

                                    <strong>RESULTADO OBTENIDO:</strong><br />
                                    [Favorable / Desfavorable / Parcial]<br />
                                    [Descripción del resultado]<br /><br />

                                    <strong>LECCIONES APRENDIDAS:</strong><br />
                                    - [Qué funcionó]<br />
                                    - [Qué mejorar]<br /><br />

                                    <strong>PLANTILLA ASOCIADA:</strong> [link a documento si existe]<br />
                                    <strong>CASO DE REFERENCIA:</strong> [expediente interno]
                                </blockquote>
                            </div>
                        </div>

                        <h3>Beneficios del sistema de memoria</h3>
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--good">
                                <h4>✅ Con sistema</h4>
                                <ul>
                                    <li>Consistencia en criterios</li>
                                    <li>No reinventar la rueda</li>
                                    <li>Onboarding de nuevos abogados</li>
                                    <li>Mejora continua documentada</li>
                                </ul>
                            </div>
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Sin sistema</h4>
                                <ul>
                                    <li>Criterios inconsistentes</li>
                                    <li>Repetir errores</li>
                                    <li>Conocimiento en cabezas</li>
                                    <li>Dependencia de la memoria</li>
                                </ul>
                            </div>
                        </div>

                        <p className="highlight-warning">
                            <strong>Importante:</strong> La memoria debe auditarse periódicamente. Información desactualizada es peor que no tener información.
                        </p>
                    </article>
                </section>

                {/* Sección 6: Automatizar vs Decidir */}
                <section id="automatizar-decidir" className="page__section">
                    <h2 className="page__section-title">6. Diferencia entre automatizar tareas y automatizar decisiones</h2>
                    <article className="long-form-content">
                        <p>
                            Una distinción fundamental es no confundir <strong>automatización</strong> con <strong>autonomía</strong>. Gemini puede ejecutar tareas, recopilar información y señalar cambios, pero no debe tomar decisiones jurídicas finales.
                        </p>
                        <p>
                            El valor está en que el sistema prepare el escenario para la decisión humana: entregue información relevante, organizada y oportuna. Cuando se cruza esa frontera y se delega la decisión sin control, el riesgo profesional se vuelve inaceptable.
                        </p>
                        <p className="highlight-success">
                            El buen diseño no elimina al abogado del proceso: lo coloca donde realmente aporta valor.
                        </p>
                    </article>
                </section>

                {/* Sección 7: Riesgos */}
                <section id="riesgos" className="page__section">
                    <h2 className="page__section-title">7. Riesgos y malas prácticas</h2>
                    <article className="long-form-content">
                        <div className="risk-list">
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span><strong>Ruido informativo:</strong> Sistemas de seguimiento sin criterios claros que generan alertas inútiles.</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span><strong>Obsolescencia:</strong> Acumular memoria sin validación, mezclando datos actuales con antiguos.</span>
                            </div>
                        </div>
                        <p className="highlight-warning">
                            Un sistema que no se audita se degrada. Toda memoria jurídica asistida debe tener reglas de actualización y control humano.
                        </p>
                    </article>
                </section>

                {/* Sección 8: Ideas clave */}
                <section id="ideas-clave" className="page__section">
                    <h2 className="page__section-title">8. Ideas clave para fijar</h2>
                    <article className="long-form-content">
                        <ul className="key-points">
                            <li>La automatización jurídica busca trabajar mejor y con menor riesgo, no solo trabajar menos.</li>
                            <li>La memoria asistida transforma experiencia en sistema.</li>
                            <li>Los sistemas bien diseñados protegen al abogado de errores evitables.</li>
                            <li>Gemini no piensa por el profesional, pero piensa con él a lo largo del tiempo.</li>
                        </ul>
                    </article>
                </section>

                {/* Sección 9: Conexión */}
                <section id="conexion" className="page__section">
                    <h2 className="page__section-title">9. Conexión con el sistema de estudio</h2>
                    <article className="long-form-content">
                        <p>
                            Esta unidad completa el <strong>Bloque 2</strong> mostrando cómo Gemini no solo explora y visualiza información, sino que la sostiene en el tiempo mediante seguimiento y memoria.
                        </p>
                        <p>
                            En el siguiente bloque, estas capacidades se integrarán con otras herramientas del ecosistema de IA para construir flujos completos, automatizados y escalables que exceden a una sola plataforma. Aquí se consolida el paso de herramienta a sistema.
                        </p>
                    </article>
                </section>

                {/* Footer de navegación */}
                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/gemini-u2" className="unit-nav-link">
                            <span className="unit-nav-label">← Módulo anterior</span>
                            <span className="unit-nav-title">M4 U2: Gemini Canvas</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/ecosystem" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Módulo 5: Ecosistema avanzado →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeminiM4U3

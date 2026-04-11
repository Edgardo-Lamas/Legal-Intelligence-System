import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function SoloPracticeM3U3() {
    return (
        <div className="page">
            <PageSEO
                title="Escritura Persuasiva Digital · M3 U3"
                description="Comunicación jurídica estratégica en entornos digitales. Cómo escribir con intención y claridad usando IA como colaborador."
                path="/solo-practice-u3"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 3 · Unidad 3</span>
                <h1 className="page__title">Escritura Persuasiva Digital</h1>
                <p className="page__description">
                    Comunicación jurídica estratégica en entornos digitales
                </p>
            </header>

            <div className="page__content">
                {/* Sección 1: Objetivos */}
                <section id="objetivos" className="page__section">
                    <h2 className="page__section-title">1. ¿Qué vas a aprender?</h2>
                    <article className="long-form-content">
                        <p>
                            Esta unidad aborda una de las competencias más subestimadas —y a la vez más decisivas— del abogado moderno: la capacidad de <strong>escribir de forma persuasiva en entornos digitales</strong>.
                        </p>
                        <p>
                            Al finalizar esta unidad, comprenderás por qué escribir bien ya no es solo una cuestión de estilo, sino una <strong>herramienta estratégica</strong> de posicionamiento profesional, captación de clientes y construcción de autoridad.
                        </p>
                        <p className="highlight-warning">
                            No se trata de "marketing vacío" ni de copiar fórmulas publicitarias. Se trata de entender cómo se toman decisiones en contextos digitales y cómo el lenguaje jurídico puede adaptarse a esos entornos <strong>sin perder rigor, ética ni precisión conceptual</strong>.
                        </p>
                    </article>
                </section>

                {/* Sección 2: Concepto central */}
                <section id="concepto" className="page__section">
                    <h2 className="page__section-title">2. Concepto central</h2>
                    <article className="long-form-content">
                        <p>
                            La escritura persuasiva jurídica no busca convencer a cualquiera de cualquier cosa. Busca <strong>generar confianza racional</strong> en contextos donde el lector no conoce personalmente al abogado y toma decisiones basadas en señales de claridad, solvencia y criterio profesional.
                        </p>
                        <blockquote className="concept-quote">
                            En entornos digitales, el texto reemplaza a la presencia física. No hay despacho, no hay tono de voz, no hay gestos. El texto es el abogado.
                        </blockquote>
                        <p>
                            Por eso, cada palabra cumple una función estratégica: orientar, tranquilizar, demostrar competencia y marcar diferencia frente a otros profesionales que dicen lo mismo, pero peor.
                        </p>
                        <p className="highlight-success">
                            La persuasión jurídica digital no consiste en exagerar beneficios, sino en <strong>reducir incertidumbre</strong>.
                        </p>
                    </article>
                </section>

                {/* Sección 3: Tradicional vs Digital */}
                <section id="tradicional-vs-digital" className="page__section">
                    <h2 className="page__section-title">3. Escritura jurídica tradicional vs. digital</h2>
                    <article className="long-form-content">
                        <p>
                            El abogado está entrenado para escribir para jueces, colegas y expedientes. Ese tipo de escritura prioriza la exhaustividad, la formalidad extrema y la acumulación de argumentos.
                        </p>
                        <p className="highlight-warning">
                            En el entorno digital, ese mismo enfoque suele generar el efecto contrario: <strong>confusión, distancia y abandono del lector</strong>.
                        </p>
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Escritura tradicional</h4>
                                <ul>
                                    <li>Exhaustividad y densidad</li>
                                    <li>Formalidad extrema</li>
                                    <li>Acumulación de argumentos</li>
                                    <li>Demostración de erudición</li>
                                </ul>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>✅ Escritura digital</h4>
                                <ul>
                                    <li>Claridad antes que densidad</li>
                                    <li>Estructura antes que retórica</li>
                                    <li>Orientación al lector</li>
                                    <li>Comprensión sin simplificar</li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            No se trata de "simplificar el derecho", sino de <strong>hacerlo inteligible sin deformarlo</strong>.
                        </p>
                        <blockquote className="concept-quote" style={{ fontSize: 'var(--font-size-xl)' }}>
                            Un buen texto digital jurídico no baja el nivel: sube el nivel de comprensión.
                        </blockquote>
                    </article>
                </section>

                {/* Sección 4: Arquitectura del texto */}
                <section id="arquitectura" className="page__section">
                    <h2 className="page__section-title">4. La persuasión como arquitectura del texto</h2>
                    <article className="long-form-content">
                        <p>
                            La persuasión no ocurre al final del texto. <strong>Ocurre desde la primera línea</strong>. Un texto jurídico persuasivo está diseñado como una secuencia lógica que acompaña al lector desde su problema hasta la decisión de confiar.
                        </p>
                        <p>Esto implica escribir con <strong>intención estructural</strong>:</p>
                        <div className="strategic-uses">
                            <div className="strategic-use">
                                <span className="strategic-use__icon">❓</span>
                                <span>Saber qué pregunta tiene el lector cuando llega al texto</span>
                            </div>
                            <div className="strategic-use">
                                <span className="strategic-use__icon">🤔</span>
                                <span>Qué objeciones mentales aparecen mientras lee</span>
                            </div>
                            <div className="strategic-use">
                                <span className="strategic-use__icon">✅</span>
                                <span>Qué sensación debería tener al terminar</span>
                            </div>
                        </div>
                        <p className="highlight-success">
                            La persuasión jurídica moderna no presiona: <strong>ordena el pensamiento del lector</strong>.
                        </p>
                        <blockquote className="concept-quote">
                            Un abogado que domina esta arquitectura no necesita prometer resultados. Le alcanza con mostrar criterio.
                        </blockquote>
                    </article>
                </section>

                {/* Sección 5: Casos de uso */}
                <section id="casos-uso" className="page__section">
                    <h2 className="page__section-title">5. Casos de uso en la práctica profesional</h2>
                    <article className="long-form-content">
                        <p>Esta forma de escritura se aplica directamente en:</p>
                        <ul className="application-list">
                            <li>Descripción de servicios profesionales</li>
                            <li>Artículos de opinión jurídica</li>
                            <li>Publicaciones en redes profesionales</li>
                            <li>Páginas "Sobre mí"</li>
                            <li>Respuestas escritas a consultas iniciales</li>
                            <li>Explicaciones de procesos legales para clientes no técnicos</li>
                        </ul>
                        <p className="highlight-success">
                            En todos los casos, el objetivo es el mismo: transformar <strong>complejidad jurídica en claridad confiable</strong>, sin banalizar el contenido ni perder autoridad técnica.
                        </p>
                    </article>
                </section>

                {/* Sección 6: Riesgos */}
                <section id="riesgos" className="page__section">
                    <h2 className="page__section-title">6. Riesgos y malas prácticas frecuentes</h2>
                    <article className="long-form-content">
                        <div className="risk-list">
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span><strong>Confundir persuasión con manipulación:</strong> fórmulas agresivas, promesas implícitas de éxito o lenguaje emocional exagerado</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span><strong>Escribir "para otros abogados"</strong> cuando el destinatario real es un cliente potencial</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">🚫</span>
                                <span><strong>Delegar completamente la escritura a la IA</strong> sin criterio humano</span>
                            </div>
                        </div>
                        <p className="highlight-warning">
                            La IA puede asistir, estructurar y mejorar claridad, pero <strong>no puede definir la intención profesional del abogado</strong>.
                        </p>
                    </article>
                </section>

                {/* Sección 6.5: Prompts para contenido persuasivo */}
                <section id="prompts-persuasivos" className="page__section">
                    <h2 className="page__section-title">6.5. Prompts específicos por tipo de contenido</h2>
                    <article className="long-form-content">
                        <p>Estos prompts te ayudan a transformar contenido técnico en comunicación persuasiva y clara:</p>

                        <div className="component-card">
                            <div className="component-content">
                                <h4>📝 Transformar texto técnico en lenguaje claro</h4>
                                <blockquote className="prompt-example">
                                    Actuás como editor de contenido legal para público general.<br /><br />

                                    Reescribí este texto jurídico en lenguaje claro y accesible:<br />
                                    [pegar texto técnico]<br /><br />

                                    Requisitos:<br />
                                    - Mantener precisión legal<br />
                                    - Eliminar jerga innecesaria<br />
                                    - Usar ejemplos concretos<br />
                                    - Máximo 150 palabras<br />
                                    - Tono: profesional pero cercano<br /><br />

                                    Objetivo: que un cliente sin formación legal lo entienda a la primera lectura.
                                </blockquote>
                            </div>
                        </div>

                        <div className="component-card">
                            <div className="component-content">
                                <h4>💼 Post de LinkedIn sobre tema legal</h4>
                                <blockquote className="prompt-example">
                                    Actuás como creador de contenido para abogados en LinkedIn.<br /><br />

                                    Escribí un post sobre [tema legal específico].<br /><br />

                                    Estructura:<br />
                                    1. Gancho inicial (pregunta o situación común)<br />
                                    2. Explicación clara del concepto<br />
                                    3. Ejemplo práctico<br />
                                    4. Llamado a la acción suave (ej: "¿Te pasó algo similar?")<br /><br />

                                    Requisitos:<br />
                                    - Máximo 200 palabras<br />
                                    - Sin promesas de resultados<br />
                                    - Tono: educativo, no vendedor<br />
                                    - Incluir 2-3 emojis relevantes<br /><br />

                                    Objetivo: generar engagement y posicionarme como experto.
                                </blockquote>
                            </div>
                        </div>

                        <div className="component-card">
                            <div className="component-content">
                                <h4>🌐 Página "Sobre mí" del sitio web</h4>
                                <blockquote className="prompt-example">
                                    Actuás como copywriter especializado en sitios web de abogados.<br /><br />

                                    Redactá la sección "Sobre mí" de mi sitio web.<br /><br />

                                    Mi perfil:<br />
                                    - Especialidad: [área legal]<br />
                                    - Años de experiencia: [número]<br />
                                    - Tipo de clientes: [perfil]<br />
                                    - Lo que me diferencia: [característica única]<br />
                                    - Valores profesionales: [ej: claridad, accesibilidad, resultados]<br /><br />

                                    Estructura:<br />
                                    1. Párrafo de conexión (por qué hago lo que hago)<br />
                                    2. Experiencia y enfoque<br />
                                    3. Cómo trabajo con mis clientes<br />
                                    4. Llamado a acción<br /><br />

                                    Tono: profesional, humano, confiable. Primera persona.
                                </blockquote>
                            </div>
                        </div>

                        <div className="component-card">
                            <div className="component-content">
                                <h4>💬 Responder consultas en redes sociales</h4>
                                <blockquote className="prompt-example">
                                    Actuás como abogado respondiendo consultas públicas en redes.<br /><br />

                                    Alguien comentó en mi post:<br />
                                    [copiar consulta]<br /><br />

                                    Redactá una respuesta que:<br />
                                    1. Sea útil pero NO resuelva todo el caso<br />
                                    2. Demuestre conocimiento técnico<br />
                                    3. Genere confianza<br />
                                    4. Invite a agendar consulta formal<br /><br />

                                    Máximo 100 palabras. Tono: profesional pero accesible.
                                </blockquote>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Sección 6.6: Ejemplos antes/después */}
                <section id="ejemplos-transformacion" className="page__section">
                    <h2 className="page__section-title">6.6. Ejemplos de transformación: Antes y Después</h2>
                    <article className="long-form-content">
                        <h3>Ejemplo 1: Descripción de servicios</h3>

                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Versión genérica</h4>
                                <blockquote style={{ fontSize: 'var(--font-size-base)', fontStyle: 'italic' }}>
                                    "Ofrezco servicios legales de alta calidad en derecho laboral. Cuento con amplia experiencia y trayectoria comprobada. Atiendo casos de despidos, acoso laboral y reclamos salariales."
                                </blockquote>
                                <p><strong>Problema:</strong> Aburrido, genérico, no diferencia, no conecta emocionalmente.</p>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>✅ Versión persuasiva</h4>
                                <blockquote style={{ fontSize: 'var(--font-size-base)', fontStyle: 'italic' }}>
                                    "Si te despidieron de forma injusta o no te pagan lo que te corresponde, te ayudo a recuperar tus derechos sin vueltas. Explico cada paso en lenguaje claro, sin sorpresas. Especializado en trabajadores que necesitan respuestas rápidas y concretas."
                                </blockquote>
                                <p><strong>Ventaja:</strong> Habla directamente al problema del cliente, promete claridad, define nicho específico.</p>
                            </div>
                        </div>

                        <h3>Ejemplo 2: Post de LinkedIn</h3>

                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Post aburrido</h4>
                                <blockquote style={{ fontSize: 'var(--font-size-base)', fontStyle: 'italic' }}>
                                    "Hoy quiero hablar sobre la importancia del contrato de trabajo. Es un documento fundamental que regula la relación laboral entre empleador y empleado. Todos deberían tener uno."
                                </blockquote>
                                <p><strong>Problema:</strong> No genera interés, no aporta valor específico, no invita a interactuar.</p>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>✅ Post con engagement</h4>
                                <blockquote style={{ fontSize: 'var(--font-size-base)', fontStyle: 'italic' }}>
                                    "¿Trabajás sin contrato firmado? 🚨<br /><br />

                                    Muchos creen que \"estar en blanco\" es suficiente. Pero si no tenés el contrato firmado, pueden faltarte cláusulas clave:<br /><br />

                                    ✅ Descripción exacta de tu puesto<br />
                                    ✅ Horario y lugar de trabajo<br />
                                    ✅ Condiciones de renovación<br /><br />

                                    Consejo: pedí una copia. Si te la niegan, es una señal de alerta.<br /><br />

                                    ¿Te pasó? Contame en los comentarios 👇"
                                </blockquote>
                                <p><strong>Ventaja:</strong> Gancho claro, información útil, formato escaneable, invita a comentar.</p>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Sección 6.7: Caso práctico LinkedIn */}
                <section id="caso-linkedin" className="page__section">
                    <h2 className="page__section-title">6.7. Caso práctico: Crear un artículo de LinkedIn paso a paso</h2>
                    <article className="long-form-content">
                        <h3>Objetivo</h3>
                        <p>Escribir un post de LinkedIn que genere engagement y posicione tu expertise en [tema legal].</p>

                        <div className="layer-diagram">
                            <div className="layer-step">
                                <div className="layer-step__number">1</div>
                                <div className="layer-step__content">
                                    <h4>Definir tema y ángulo (5 min)</h4>
                                    <p>Elegí un problema frecuente de tus clientes. Ejemplo: "Despido durante licencia médica"</p>
                                </div>
                            </div>
                            <div className="layer-connector">↓</div>
                            <div className="layer-step">
                                <div className="layer-step__number">2</div>
                                <div className="layer-step__content">
                                    <h4>Generar borrador con IA (3 min)</h4>
                                    <p>Usá el prompt "Post de LinkedIn sobre tema legal" con tu tema específico</p>
                                </div>
                            </div>
                            <div className="layer-connector">↓</div>
                            <div className="layer-step">
                                <div className="layer-step__number">3</div>
                                <div className="layer-step__content">
                                    <h4>Revisar y personalizar (5 min)</h4>
                                    <p>Ajustá el tono, agregá tu experiencia personal, verificá que no haya promesas de resultados</p>
                                </div>
                            </div>
                            <div className="layer-connector">↓</div>
                            <div className="layer-step">
                                <div className="layer-step__number">4</div>
                                <div className="layer-step__content">
                                    <h4>Optimizar formato (2 min)</h4>
                                    <p>Espaciado, emojis, saltos de línea para facilitar lectura en móvil</p>
                                </div>
                            </div>
                            <div className="layer-connector">↓</div>
                            <div className="layer-step">
                                <div className="layer-step__number">5</div>
                                <div className="layer-step__content">
                                    <h4>Publicar y responder (ongoing)</h4>
                                    <p>Respondé todos los comentarios en las primeras 2 horas para maximizar alcance</p>
                                </div>
                            </div>
                        </div>

                        <p className="highlight-success">
                            <strong>Tiempo total:</strong> ~15 minutos para un post profesional que antes te llevaba 45 minutos.
                        </p>
                    </article>
                </section>

                {/* Sección 6.8: Biblioteca de plantillas */}
                <section id="biblioteca-templates" className="page__section">
                    <h2 className="page__section-title">6.8. Biblioteca de plantillas reutilizables</h2>
                    <article className="long-form-content">
                        <h3>Template 1: Post educativo</h3>
                        <div className="component-card">
                            <div className="component-content">
                                <blockquote className="prompt-example" style={{ textAlign: 'left' }}>
                                    <strong>[GANCHO - Pregunta o situación común]</strong> 🎯<br /><br />

                                    [Explicación breve del problema]<br /><br />

                                    <strong>Lo que necesitás saber:</strong><br /><br />

                                    ✅ [Punto clave 1]<br />
                                    ✅ [Punto clave 2]<br />
                                    ✅ [Punto clave 3]<br /><br />

                                    <strong>Consejo práctico:</strong> [Acción concreta que pueden tomar]<br /><br />

                                    ¿Te pasó algo similar? Contame en los comentarios 👇
                                </blockquote>
                            </div>
                        </div>

                        <h3>Template 2: Caso de estudio (anonimizado)</h3>
                        <div className="component-card">
                            <div className="component-content">
                                <blockquote className="prompt-example" style={{ textAlign: 'left' }}>
                                    <strong>Caso real:</strong> [Descripción breve del problema del cliente] 📋<br /><br />

                                    <strong>Situación inicial:</strong><br />
                                    [Qué pasaba antes de tu intervención]<br /><br />

                                    <strong>Estrategia:</strong><br />
                                    [Qué enfoque usaste, sin revelar detalles confidenciales]<br /><br />

                                    <strong>Resultado:</strong><br />
                                    [Qué se logró, sin prometer que siempre pasa lo mismo]<br /><br />

                                    <strong>Lección:</strong> [Qué pueden aprender otros de este caso]
                                </blockquote>
                            </div>
                        </div>

                        <h3>Template 3: FAQ para sitio web</h3>
                        <div className="component-card">
                            <div className="component-content">
                                <blockquote className="prompt-example" style={{ textAlign: 'left' }}>
                                    <strong>Pregunta frecuente:</strong> [Pregunta textual del cliente]<br /><br />

                                    <strong>Respuesta corta:</strong><br />
                                    [Respuesta directa en 1-2 líneas]<br /><br />

                                    <strong>Explicación:</strong><br />
                                    [Contexto adicional, 2-3 párrafos]<br /><br />

                                    <strong>Próximos pasos:</strong><br />
                                    [Qué debería hacer el cliente si está en esta situación]<br /><br />

                                    <strong>¿Necesitás ayuda con esto?</strong> [Link a consulta]
                                </blockquote>
                            </div>
                        </div>

                        <h3>Template 4: Email de seguimiento a consulta</h3>
                        <div className="component-card">
                            <div className="component-content">
                                <p><strong>Usar este prompt para generar:</strong></p>
                                <blockquote className="prompt-example">
                                    Redactá un email de seguimiento para un cliente que consultó sobre [tema].<br /><br />

                                    Incluir:<br />
                                    - Agradecimiento por la consulta<br />
                                    - Resumen de lo conversado<br />
                                    - Próximos pasos sugeridos<br />
                                    - Disponibilidad para agendar reunión<br /><br />

                                    Tono: profesional, cálido, que genere confianza.
                                </blockquote>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Sección 7: Ideas clave */}
                <section id="ideas-clave" className="page__section">
                    <h2 className="page__section-title">7. Ideas clave para fijar</h2>
                    <article className="long-form-content">
                        <p>
                            La persuasión jurídica sigue siendo un <strong>acto profundamente humano</strong>. La IA no reemplaza el criterio, la ética ni la responsabilidad del abogado; los amplifica cuando están bien definidos.
                        </p>
                        <ul className="key-points">
                            <li>Un profesional que sabe escribir con intención <strong>no necesita competir por precio</strong></li>
                            <li>Construye ventaja competitiva a partir de <strong>claridad y coherencia</strong></li>
                            <li>No depende de visibilidad artificial</li>
                        </ul>
                        <blockquote className="concept-quote" style={{ fontSize: 'var(--font-size-xl)' }}>
                            En el entorno digital, escribir bien no es un talento opcional. Es una extensión directa del ejercicio profesional.
                        </blockquote>
                    </article>
                </section>

                {/* Sección 8: Conexión */}
                <section id="conexion" className="page__section">
                    <h2 className="page__section-title">8. Conexión con el sistema de estudio</h2>
                    <article className="long-form-content">
                        <p>
                            Esta unidad establece la base conceptual para comprender por qué la escritura es el núcleo del <strong>marketing legal moderno</strong>, del posicionamiento profesional y de toda comunicación estratégica del abogado.
                        </p>
                        <p>Las unidades siguientes profundizarán en cómo esta capacidad se integra con:</p>
                        <div className="strategic-uses">
                            <div className="strategic-use">
                                <span className="strategic-use__icon">⚙️</span>
                                <span>Automatización</span>
                            </div>
                            <div className="strategic-use">
                                <span className="strategic-use__icon">📝</span>
                                <span>Sistemas de contenido</span>
                            </div>
                            <div className="strategic-use">
                                <span className="strategic-use__icon">🤖</span>
                                <span>Herramientas de IA para escalar sin perder control</span>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Resultado esperado */}
                <section id="resultado" className="page__section">
                    <h2 className="page__section-title">Resultado esperado</h2>
                    <article className="long-form-content">
                        <div className="result-box">
                            <p>
                                <strong>La escritura persuasiva no es un módulo aislado: es la columna vertebral de todo el sistema.</strong>
                            </p>
                        </div>
                    </article>
                </section>

                {/* Footer de navegación */}
                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/solo-practice-u2" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M3 U2: Gestión Contable y Fiscal</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--complete">✓ Unidad 3 Completa</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/solo-practice-u4" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Unidad 4 – Marketing legal y posicionamiento →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SoloPracticeM3U3

import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function FoundationsM1U4() {
    return (
        <div className="page">
            <PageSEO
                title="Claude en el Derecho: razonamiento, proyectos y análisis jurídico · M1 U4"
                description="Por qué Claude de Anthropic lidera en análisis jurídico complejo: razonamiento extendido, contexto de 200K tokens, Projects persistentes y menor tasa de alucinación."
                path="/foundations-u4"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 1 · Unidad 4</span>
                <h1 className="page__title">Claude: el tercer modelo que cambia todo</h1>
                <p className="page__description">
                    Por qué Claude de Anthropic es hoy el modelo más adecuado para análisis jurídico complejo, y cómo integrarlo desde el primer día.
                </p>
            </header>

            <div className="page__content">

                {/* Sección 1 */}
                <section id="intro" className="page__section">
                    <h2 className="page__section-title">1. El modelo que los abogados subestiman</h2>
                    <article className="long-form-content">
                        <p>
                            Cuando un abogado argentino empieza a usar IA, el recorrido casi siempre es el mismo: primero ChatGPT,
                            después Gemini. Claude queda como "el tercero", el que se prueba por curiosidad. Es un error costoso.
                        </p>
                        <blockquote className="concept-quote">
                            Claude no es otro ChatGPT. Es un modelo diseñado con una filosofía distinta: razonar con cuidado,
                            admitir incertidumbre, y seguir instrucciones complejas sin atajos. Para trabajo jurídico, esas
                            diferencias son decisivas.
                        </blockquote>
                        <p>
                            Claude fue desarrollado por Anthropic, una empresa fundada por ex investigadores de OpenAI con foco
                            explícito en seguridad y confiabilidad de los modelos. Esa filosofía se traduce en comportamientos
                            concretos que importan en el trabajo legal.
                        </p>
                    </article>
                </section>

                {/* Sección 2 */}
                <section id="diferencias" className="page__section">
                    <h2 className="page__section-title">2. Qué hace diferente a Claude</h2>
                    <article className="long-form-content">
                        <h3>Razonamiento antes que respuesta</h3>
                        <p>
                            ChatGPT y Gemini tienden a generar texto con fluidez inmediata. Claude tiene una tendencia más
                            marcada a <strong>trabajar el problema antes de dar una respuesta</strong>. En análisis jurídico,
                            eso se nota: Claude articula mejor el razonamiento, muestra los pasos intermedios, y es más
                            propenso a señalar cuando una pregunta tiene múltiples respuestas válidas dependiendo de la
                            interpretación.
                        </p>

                        <h3>Honestidad sobre lo que no sabe</h3>
                        <p>
                            La tasa de alucinación de Claude es más baja que la de sus competidores en tareas jurídicas.
                            Más importante aún: cuando Claude no sabe algo, <strong>lo dice</strong>. ChatGPT y Gemini
                            tienden a "completar" respuestas con datos inventados. Claude prefiere admitir la limitación.
                            Para un abogado que necesita citar jurisprudencia real, esa diferencia es crítica.
                        </p>

                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--bad">
                                <h4>ChatGPT ante jurisprudencia que no conoce</h4>
                                <p>"El fallo <em>García c/ Municipalidad de La Plata</em> de 2019 estableció que..."
                                (puede ser inventado, citado con confianza)</p>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>Claude ante la misma situación</h4>
                                <p>"No tengo acceso a ese fallo específico. Te recomiendo verificar en el sistema de jurisprudencia
                                de la SCBA. Puedo ayudarte a analizar el documento si lo pegás aquí."</p>
                            </div>
                        </div>

                        <h3>Contexto de 200.000 tokens</h3>
                        <p>
                            Claude maneja una ventana de contexto de hasta <strong>200.000 tokens</strong> — aproximadamente
                            150.000 palabras o 500 páginas densas. Es menos que Gemini (2M), pero significativamente más que
                            ChatGPT (128K), y con una diferencia crucial: Claude <strong>procesa el contexto completo con mayor
                            profundidad</strong>. Gemini puede "leer" más, pero Claude tiende a "entender mejor" lo que leyó
                            dentro de su ventana.
                        </p>

                        <h3>Instrucciones complejas sin degradación</h3>
                        <p>
                            Cuando le das a Claude un prompt con 10 condiciones simultáneas — un análisis con criterios
                            específicos, restricciones de formato, referencias normativas, perspectiva definida — <strong>las
                            cumple todas</strong>. ChatGPT empieza a "olvidar" condiciones después de las primeras 5 o 6.
                            Gemini a veces las reformula según su propio criterio. Para prompts jurídicos complejos, Claude
                            es consistentemente más preciso.
                        </p>
                    </article>
                </section>

                {/* Sección 3 */}
                <section id="modelos" className="page__section">
                    <h2 className="page__section-title">3. Los modelos de Claude disponibles hoy</h2>
                    <article className="long-form-content">
                        <p>
                            La familia Claude tiene tres niveles, cada uno con un balance distinto entre velocidad,
                            capacidad y costo:
                        </p>

                        <div className="comparison-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                            <div className="comparison-box">
                                <h4>Claude Haiku</h4>
                                <ul>
                                    <li><strong>Para qué:</strong> Tareas rápidas, resúmenes, clasificación</li>
                                    <li><strong>Velocidad:</strong> Muy rápido</li>
                                    <li><strong>Costo:</strong> Más económico</li>
                                    <li><strong>Uso jurídico:</strong> Resúmenes de actuaciones, extracción de datos simples</li>
                                </ul>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>Claude Sonnet ✓ Recomendado</h4>
                                <ul>
                                    <li><strong>Para qué:</strong> Análisis, redacción, razonamiento</li>
                                    <li><strong>Velocidad:</strong> Equilibrado</li>
                                    <li><strong>Costo:</strong> Medio</li>
                                    <li><strong>Uso jurídico:</strong> 90% del trabajo jurídico diario</li>
                                </ul>
                            </div>
                            <div className="comparison-box">
                                <h4>Claude Opus</h4>
                                <ul>
                                    <li><strong>Para qué:</strong> Análisis profundo, razonamiento extendido</li>
                                    <li><strong>Velocidad:</strong> Más lento</li>
                                    <li><strong>Costo:</strong> Mayor</li>
                                    <li><strong>Uso jurídico:</strong> Estrategia, análisis complejo, causas de alto impacto</li>
                                </ul>
                            </div>
                        </div>

                        <div className="highlight-success">
                            <strong>Recomendación práctica:</strong> Usá Claude Sonnet para el día a día.
                            Reservá Opus para casos donde la profundidad del análisis justifica el costo adicional.
                        </div>
                    </article>
                </section>

                {/* Sección 4 */}
                <section id="legal" className="page__section">
                    <h2 className="page__section-title">4. Claude para trabajo jurídico: casos de uso concretos</h2>
                    <article className="long-form-content">

                        <h3>Análisis de expedientes complejos</h3>
                        <p>
                            Cargás el expediente completo (hasta 500 páginas), le pedís a Claude que extraiga la
                            cronología de hechos, identifique las inconsistencias del expediente, y mapee los
                            argumentos de ambas partes. El resultado es un análisis estructurado que respeta el
                            orden de los hechos y señala explícitamente cuándo algo no está claro en la fuente.
                        </p>

                        <div className="full-prompt-example">
                            <p>Prompt de ejemplo:</p>
                            <p>
                                "Sos un asistente jurídico especializado en derecho civil argentino. A continuación
                                vas a recibir un expediente completo. Necesito que: (1) construyas una cronología
                                de hechos en orden temporal, (2) identifiques las pretensiones de cada parte,
                                (3) detectes inconsistencias o contradicciones en los hechos relatados, (4) señales
                                qué elementos probatorios sustentan cada pretensión. Si algo no surge claramente
                                del expediente, indicálo explícitamente en lugar de inferirlo. Derecho argentino,
                                jurisdicción PBA."
                            </p>
                        </div>

                        <h3>Redacción de escritos con control de estilo</h3>
                        <p>
                            Claude respeta instrucciones de estilo con alta fidelidad. Podés indicarle: "estilo
                            formal sin floreos innecesarios, párrafos cortos, sin uso de gerundios como sujeto,
                            citas normativas en formato CSJN" — y lo va a mantener a lo largo de un documento largo
                            sin degradarse.
                        </p>

                        <h3>Análisis de contratos y cláusulas problemáticas</h3>
                        <p>
                            Le cargás un contrato y le pedís que identifique cláusulas que generen riesgo para
                            tu cliente, compare con el estándar del mercado, y sugiera redacciones alternativas.
                            Claude es particularmente bueno en este tipo de análisis comparativo porque <strong>cita
                            la cláusula original, identifica el problema, y propone la alternativa en una misma
                            respuesta estructurada</strong>.
                        </p>

                        <h3>Contra-análisis y "abogado del diablo"</h3>
                        <p>
                            Una de las funciones más valiosas: le presentás tu teoría del caso y le pedís a Claude
                            que ataque tus argumentos como si fuera la contraparte. Por la mayor tendencia al
                            razonamiento cuidadoso, Claude identifica los puntos débiles con más precisión que otros
                            modelos que tienden a validar lo que ya dijiste.
                        </p>
                    </article>
                </section>

                {/* Sección 5 */}
                <section id="projects" className="page__section">
                    <h2 className="page__section-title">5. Claude Projects: memoria persistente por causa</h2>
                    <article className="long-form-content">
                        <p>
                            Una de las funciones más importantes de Claude para abogados: los <strong>Projects</strong>.
                            A diferencia de los chats normales que empiezan desde cero, un Project mantiene:
                        </p>
                        <ul className="application-list">
                            <li><strong>Instrucciones persistentes:</strong> El perfil del caso, las partes, la jurisdicción, el estilo que querés</li>
                            <li><strong>Documentos cargados:</strong> El expediente, escritos anteriores, jurisprudencia relevante</li>
                            <li><strong>Historial de la conversación:</strong> Lo que ya analizaste no lo tenés que volver a explicar</li>
                        </ul>
                        <p>
                            En la práctica esto significa que podés abrir Claude una semana después, decir "necesito
                            seguir con el análisis del caso González" y Claude ya sabe de qué se trata, tiene los
                            documentos disponibles y puede retomar desde donde quedó.
                        </p>

                        <div className="highlight-success">
                            <strong>Caso real:</strong> Un estudio de una sola abogada gestiona 30 causas activas con
                            un Project de Claude por causa. Cada Project tiene las instrucciones del caso, las partes,
                            los documentos clave y los análisis previos. El tiempo de "puesta en contexto" al inicio
                            de cada sesión bajó de 20 minutos a menos de 2.
                        </div>

                        <p>
                            El Módulo 5 está dedicado completamente a Claude Projects avanzado, Extended Thinking y la
                            API de Claude para construir tus propias herramientas. Si este tema te parece relevante,
                            podés anticipar esa sección.
                        </p>
                    </article>
                </section>

                {/* Sección 6 */}
                <section id="ecosystem" className="page__section">
                    <h2 className="page__section-title">6. Claude en el ecosistema de este sitio</h2>
                    <article className="long-form-content">
                        <p>
                            El widget de consulta jurídica que encontrás en la esquina inferior derecha de este sitio —
                            <strong>Alcance Legal Penal</strong> — está construido sobre Claude. No es ChatGPT ni Gemini:
                            es un servidor MCP (Model Context Protocol) que conecta Claude con una base de conocimiento
                            específica sobre el Código Procesal Penal de la Provincia de Buenos Aires (Ley 11.922).
                        </p>
                        <p>
                            Eso significa que podés hacer ahora mismo una consulta sobre el CPP PBA — plazos, derechos del
                            imputado, recursos procesales, nulidades — y recibir una respuesta que cita artículos específicos,
                            señala plazos procesales y está orientada a la perspectiva de la defensa.
                        </p>
                        <p>
                            En el Módulo 5 vas a aprender exactamente cómo se construyó eso y cómo podés replicar la
                            arquitectura para tu propia área de especialización.
                        </p>

                        <div className="highlight-success">
                            <strong>Probá ahora:</strong> Hacé clic en el botón "CPP PBA" en la esquina inferior derecha
                            y consultá algo sobre el proceso penal bonaerense. Es Claude, con un system prompt especializado,
                            conectado a fuentes jurídicas verificadas.
                        </div>
                    </article>
                </section>

                {/* Sección 7 */}
                <section id="configuracion" className="page__section">
                    <h2 className="page__section-title">7. Cómo empezar con Claude hoy</h2>
                    <article className="long-form-content">
                        <h3>Acceso y planes</h3>
                        <ul className="application-list">
                            <li><strong>Gratis:</strong> Claude.ai — acceso a Haiku, límite de mensajes diarios</li>
                            <li><strong>Pro ($20/mes):</strong> Claude Sonnet y Opus, Projects, contexto extendido — lo mínimo recomendado</li>
                            <li><strong>Team ($25/usuario/mes):</strong> Para estudios con varios abogados, sin entrenamiento con tus datos</li>
                        </ul>

                        <h3>Configuración inicial</h3>
                        <p>
                            Antes de crear tu primer Project, configurá estas instrucciones base en cada Project que crees:
                        </p>
                        <div className="full-prompt-example">
                            <p>
                                "Actuás como asistente jurídico especializado en derecho argentino. Todas tus respuestas
                                asumen derecho argentino, salvo que yo indique expresamente otra jurisdicción. Cuando cites
                                normativa, usá el número de artículo y la ley (ej: Art. 1724 CCCN). Cuando no estés seguro
                                de una cita específica, indicálo antes de continuar. No inventes jurisprudencia: si no conocés
                                un fallo específico, decílo y ayudame a construir el argumento desde la norma. Nunca uses
                                expresiones como 'en el marco del derecho comparado' sin especificar el país."
                            </p>
                        </div>

                        <div className="risk-list">
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span><strong>Importante:</strong> Claude Pro no entrena sus modelos con tus conversaciones por defecto. Igual, no subas información identificada de clientes. Usá el plan Team si necesitás garantías contractuales adicionales.</span>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Checklist */}
                <section id="checklist" className="page__section">
                    <h2 className="page__section-title">8. Checklist de esta unidad</h2>
                    <article className="long-form-content">
                        <div className="checklist-box">
                            <ul className="checklist">
                                <li>☐ Creé una cuenta en Claude.ai (gratis o Pro)</li>
                                <li>☐ Entiendo la diferencia entre Haiku, Sonnet y Opus</li>
                                <li>☐ Sé cuándo Claude es mejor que ChatGPT o Gemini</li>
                                <li>☐ Creé mi primer Project con instrucciones base para trabajo jurídico</li>
                                <li>☐ Probé el widget Alcance Legal Penal del sitio</li>
                                <li>☐ Entiendo que Claude no inventa jurisprudencia — o avisa cuando no sabe</li>
                            </ul>
                        </div>
                    </article>
                </section>

                {/* Navegación */}
                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/foundations-u3" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M1 U3: RAG aplicado al derecho</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/foundations-u5" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Unidad 5 – La tríada en práctica: tabla de decisión →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoundationsM1U4

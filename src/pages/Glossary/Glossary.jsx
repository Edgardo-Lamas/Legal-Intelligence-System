import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import PageSEO from '../../components/PageSEO/PageSEO'

function Glossary() {
    return (
        <div className="page">
            <PageSEO
                title="Glosario de IA para Abogados"
                description="Definiciones de términos técnicos de inteligencia artificial traducidos al contexto jurídico. Conceptos esenciales para abogados argentinos."
                path="/glossary"
            />
            <header className="page__header">
                <span className="page__module-tag">Recurso de Referencia</span>
                <h1 className="page__title">Glosario de IA para Abogados</h1>
                <p className="page__description">
                    Definiciones esenciales de términos técnicos traducidos al contexto jurídico
                </p>
            </header>

            <div className="page__content">
                {/* Introducción */}
                <section id="introduccion" className="page__section">
                    <h2 className="page__section-title">Cómo usar este glosario</h2>
                    <article className="long-form-content">
                        <p>
                            Este glosario está organizado por categorías temáticas y pensado para abogados
                            que necesitan comprender conceptos técnicos de IA sin formación en informática.
                            Cada término incluye una <strong>definición técnica</strong> y una
                            <strong>traducción jurídica</strong> que explica su relevancia práctica.
                        </p>
                    </article>
                </section>

                {/* Categoría 1: Conceptos fundamentales de IA */}
                <section id="conceptos-fundamentales" className="page__section">
                    <h2 className="page__section-title">1. Conceptos Fundamentales de IA</h2>
                    <article className="long-form-content">
                        <div className="glossary-grid">
                            <div className="glossary-term">
                                <h4>Inteligencia Artificial (IA)</h4>
                                <p className="term-definition">
                                    Sistemas informáticos capaces de realizar tareas que normalmente requieren inteligencia humana.
                                </p>
                                <p className="term-legal">
                                    <strong>En derecho:</strong> Herramienta que puede asistir en análisis de documentos,
                                    redacción y búsqueda de información, pero que no tiene capacidad de juicio profesional.
                                </p>
                            </div>

                            <div className="glossary-term">
                                <h4>IA Generativa</h4>
                                <p className="term-definition">
                                    Sistemas de IA que pueden crear contenido nuevo (texto, imágenes, código)
                                    basándose en patrones aprendidos de datos de entrenamiento.
                                </p>
                                <p className="term-legal">
                                    <strong>En derecho:</strong> ChatGPT, Gemini, Claude. Útil para redactar borradores,
                                    resumir documentos y explorar argumentos. No sustituye la validación humana.
                                </p>
                            </div>

                            <div className="glossary-term">
                                <h4>LLM (Large Language Model)</h4>
                                <p className="term-definition">
                                    Modelo de lenguaje grande. Red neuronal entrenada con enormes cantidades de texto
                                    para predecir y generar lenguaje natural.
                                </p>
                                <p className="term-legal">
                                    <strong>En derecho:</strong> El "motor" detrás de ChatGPT, Gemini, etc.
                                    Procesa y genera texto, pero no "entiende" el derecho como un abogado.
                                </p>
                            </div>

                            <div className="glossary-term">
                                <h4>Machine Learning (Aprendizaje Automático)</h4>
                                <p className="term-definition">
                                    Subcampo de IA donde los sistemas aprenden patrones a partir de datos
                                    sin ser programados explícitamente para cada tarea.
                                </p>
                                <p className="term-legal">
                                    <strong>En derecho:</strong> La tecnología que permite a sistemas identificar
                                    patrones en jurisprudencia o clasificar documentos automáticamente.
                                </p>
                            </div>

                            <div className="glossary-term">
                                <h4>Deep Learning</h4>
                                <p className="term-definition">
                                    Técnica de machine learning que usa redes neuronales con múltiples capas
                                    para aprender representaciones complejas de datos.
                                </p>
                                <p className="term-legal">
                                    <strong>En derecho:</strong> Lo que permite a los LLMs procesar lenguaje
                                    natural con matices y contexto, no solo palabras clave.
                                </p>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Categoría 2: Modelos y capacidades */}
                <section id="modelos-capacidades" className="page__section">
                    <h2 className="page__section-title">2. Modelos y Capacidades</h2>
                    <article className="long-form-content">
                        <div className="glossary-grid">
                            <div className="glossary-term">
                                <h4>Modelo</h4>
                                <p className="term-definition">
                                    El sistema de IA entrenado específico (ej: GPT-4, Gemini Pro, Claude 3).
                                    Cada modelo tiene capacidades y limitaciones diferentes.
                                </p>
                                <p className="term-legal">
                                    <strong>En derecho:</strong> Elegir el modelo adecuado es como elegir la herramienta correcta.
                                    Gemini lee más, ChatGPT escribe mejor, Claude razona con más cuidado.
                                </p>
                            </div>

                            <div className="glossary-term">
                                <h4>Ventana de contexto (Context Window)</h4>
                                <p className="term-definition">
                                    Cantidad máxima de texto que el modelo puede procesar en una sola conversación.
                                    Se mide en "tokens" (aproximadamente 0.75 palabras por token).
                                </p>
                                <p className="term-legal">
                                    <strong>En derecho:</strong> Determina cuánto de un expediente podés cargar de una vez.
                                    Gemini tiene 2M tokens (~1500 páginas). ChatGPT tiene 128K (~100 páginas).
                                </p>
                            </div>

                            <div className="glossary-term">
                                <h4>Token</h4>
                                <p className="term-definition">
                                    Unidad mínima de texto que procesa el modelo. Puede ser una palabra,
                                    parte de palabra, o signo de puntuación.
                                </p>
                                <p className="term-legal">
                                    <strong>En derecho:</strong> Lo que determina el "costo" de una consulta y
                                    el límite de lo que podés procesar. 1000 tokens ≈ 750 palabras.
                                </p>
                            </div>

                            <div className="glossary-term">
                                <h4>Multimodal</h4>
                                <p className="term-definition">
                                    Modelo capaz de procesar múltiples tipos de entrada: texto, imágenes,
                                    audio, video.
                                </p>
                                <p className="term-legal">
                                    <strong>En derecho:</strong> Permite analizar contratos escaneados, fotos de documentos,
                                    o videos de audiencias directamente sin transcripción previa.
                                </p>
                            </div>

                            <div className="glossary-term">
                                <h4>Fine-tuning</h4>
                                <p className="term-definition">
                                    Proceso de re-entrenar un modelo general con datos específicos de un dominio
                                    para mejorar su rendimiento en tareas particulares.
                                </p>
                                <p className="term-legal">
                                    <strong>En derecho:</strong> Especializar un modelo en derecho argentino,
                                    procesal laboral, o el estilo de tu estudio. Requiere recursos técnicos.
                                </p>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Categoría 3: Interacción con IA */}
                <section id="interaccion" className="page__section">
                    <h2 className="page__section-title">3. Interacción con IA</h2>
                    <article className="long-form-content">
                        <div className="glossary-grid">
                            <div className="glossary-term">
                                <h4>Prompt</h4>
                                <p className="term-definition">
                                    Instrucción o pregunta que el usuario envía al modelo de IA
                                    para obtener una respuesta.
                                </p>
                                <p className="term-legal">
                                    <strong>En derecho:</strong> La calidad del prompt determina la calidad de la respuesta.
                                    Un prompt jurídico bien estructurado incluye contexto, objetivo y formato deseado.
                                </p>
                            </div>

                            <div className="glossary-term">
                                <h4>Prompt Engineering</h4>
                                <p className="term-definition">
                                    Arte y ciencia de diseñar prompts efectivos para obtener
                                    mejores respuestas de modelos de IA.
                                </p>
                                <p className="term-legal">
                                    <strong>En derecho:</strong> Habilidad clave del abogado moderno.
                                    Un buen prompt jurídico es como un buen interrogatorio: preciso y estratégico.
                                </p>
                            </div>

                            <div className="glossary-term">
                                <h4>System Prompt</h4>
                                <p className="term-definition">
                                    Instrucciones iniciales que definen el comportamiento, personalidad
                                    y restricciones del modelo para toda la conversación.
                                </p>
                                <p className="term-legal">
                                    <strong>En derecho:</strong> Donde configurás que el asistente actúe como
                                    "especialista en derecho laboral argentino" o "revisor de contratos conservador".
                                </p>
                            </div>

                            <div className="glossary-term">
                                <h4>Temperatura</h4>
                                <p className="term-definition">
                                    Parámetro que controla la creatividad/aleatoriedad de las respuestas.
                                    Baja (0-0.3): respuestas predecibles. Alta (0.7-1): respuestas creativas.
                                </p>
                                <p className="term-legal">
                                    <strong>En derecho:</strong> Para análisis jurídico usá temperatura baja (precisión).
                                    Para brainstorming de argumentos, temperatura más alta (creatividad).
                                </p>
                            </div>

                            <div className="glossary-term">
                                <h4>Chat/Conversación</h4>
                                <p className="term-definition">
                                    Interacción iterativa con el modelo donde cada mensaje
                                    considera el contexto de los anteriores.
                                </p>
                                <p className="term-legal">
                                    <strong>En derecho:</strong> Permite refinar análisis progresivamente.
                                    "Profundizá en el punto 3" o "Ahora aplicá eso al caso X".
                                </p>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Categoría 4: RAG y Conocimiento */}
                <section id="rag-conocimiento" className="page__section">
                    <h2 className="page__section-title">4. RAG y Gestión del Conocimiento</h2>
                    <article className="long-form-content">
                        <div className="glossary-grid">
                            <div className="glossary-term">
                                <h4>RAG (Retrieval-Augmented Generation)</h4>
                                <p className="term-definition">
                                    Técnica que combina búsqueda en bases de datos propias con generación de IA.
                                    El modelo "recupera" información relevante antes de generar respuestas.
                                </p>
                                <p className="term-legal">
                                    <strong>En derecho:</strong> Permite que la IA responda basándose en TU jurisprudencia,
                                    TUS contratos modelo, TU base de conocimiento, no solo su entrenamiento general.
                                </p>
                            </div>

                            <div className="glossary-term">
                                <h4>Embeddings</h4>
                                <p className="term-definition">
                                    Representación numérica de texto que captura su significado semántico.
                                    Textos similares tienen embeddings similares.
                                </p>
                                <p className="term-legal">
                                    <strong>En derecho:</strong> Lo que permite buscar "casos de despido discriminatorio"
                                    y encontrar fallos aunque no usen esas palabras exactas.
                                </p>
                            </div>

                            <div className="glossary-term">
                                <h4>Vector Database</h4>
                                <p className="term-definition">
                                    Base de datos optimizada para almacenar y buscar embeddings.
                                    Esencial para sistemas RAG.
                                </p>
                                <p className="term-legal">
                                    <strong>En derecho:</strong> Donde se almacena tu jurisprudencia indexada
                                    para que la IA pueda buscar por significado, no solo por palabras clave.
                                </p>
                            </div>

                            <div className="glossary-term">
                                <h4>Grounding / Fundamentación</h4>
                                <p className="term-definition">
                                    Proceso de anclar las respuestas de la IA a fuentes verificables
                                    en lugar de generarlas libremente.
                                </p>
                                <p className="term-legal">
                                    <strong>En derecho:</strong> Crítico. Asegura que las citas sean reales
                                    y que los argumentos tengan respaldo documental verificable.
                                </p>
                            </div>

                            <div className="glossary-term">
                                <h4>Knowledge Base</h4>
                                <p className="term-definition">
                                    Conjunto estructurado de documentos y datos que alimentan un sistema de IA
                                    para responder preguntas específicas.
                                </p>
                                <p className="term-legal">
                                    <strong>En derecho:</strong> Tu biblioteca digital: leyes, jurisprudencia,
                                    doctrina, contratos modelo, criterios del estudio.
                                </p>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Categoría 5: Agentes y Automatización */}
                <section id="agentes-automatizacion" className="page__section">
                    <h2 className="page__section-title">5. Agentes y Automatización</h2>
                    <article className="long-form-content">
                        <div className="glossary-grid">
                            <div className="glossary-term">
                                <h4>Agente de IA</h4>
                                <p className="term-definition">
                                    Sistema de IA que puede tomar decisiones autónomas, usar herramientas
                                    y ejecutar secuencias de acciones para lograr objetivos.
                                </p>
                                <p className="term-legal">
                                    <strong>En derecho:</strong> Sistema que puede revisar un contrato,
                                    identificar cláusulas problemáticas, buscar jurisprudencia y generar un informe.
                                    Todavía requiere supervisión humana.
                                </p>
                            </div>

                            <div className="glossary-term">
                                <h4>Tool Use / Function Calling</h4>
                                <p className="term-definition">
                                    Capacidad del modelo de invocar herramientas externas: calculadoras,
                                    bases de datos, APIs, navegadores web.
                                </p>
                                <p className="term-legal">
                                    <strong>En derecho:</strong> Permite que la IA calcule indemnizaciones con datos reales,
                                    consulte el Boletín Oficial, o verifique inscripciones en registros.
                                </p>
                            </div>

                            <div className="glossary-term">
                                <h4>Workflow / Flujo de trabajo</h4>
                                <p className="term-definition">
                                    Secuencia automatizada de pasos que combinan múltiples herramientas
                                    y acciones de IA para completar una tarea compleja.
                                </p>
                                <p className="term-legal">
                                    <strong>En derecho:</strong> Ejemplo: recibir email → extraer datos del caso →
                                    buscar jurisprudencia → generar memo → enviarlo al abogado.
                                </p>
                            </div>

                            <div className="glossary-term">
                                <h4>Trigger / Disparador</h4>
                                <p className="term-definition">
                                    Evento que inicia automáticamente un workflow:
                                    nuevo email, fecha específica, cambio en documento.
                                </p>
                                <p className="term-legal">
                                    <strong>En derecho:</strong> "Cuando falten 5 días para un vencimiento,
                                    enviar recordatorio" o "Cuando se publique ley en el BO, analizarla".
                                </p>
                            </div>

                            <div className="glossary-term">
                                <h4>API (Application Programming Interface)</h4>
                                <p className="term-definition">
                                    Interfaz que permite a programas comunicarse entre sí.
                                    Los modelos de IA exponen APIs para integrarlos en otros sistemas.
                                </p>
                                <p className="term-legal">
                                    <strong>En derecho:</strong> Lo que permite conectar ChatGPT con tu sistema
                                    de gestión de casos o automatizar procesos sin usar la interfaz web.
                                </p>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Categoría 6: Riesgos y Limitaciones */}
                <section id="riesgos-limitaciones" className="page__section">
                    <h2 className="page__section-title">6. Riesgos y Limitaciones</h2>
                    <article className="long-form-content">
                        <div className="glossary-grid">
                            <div className="glossary-term">
                                <h4>Alucinación</h4>
                                <p className="term-definition">
                                    Cuando la IA genera información falsa pero presentada con confianza,
                                    como citas inexistentes o datos inventados.
                                </p>
                                <p className="term-legal">
                                    <strong>En derecho:</strong> <span className="risk-tag">⚠️ CRÍTICO</span>
                                    Fallos inventados, artículos mal citados, doctrina ficticia.
                                    SIEMPRE verificar fuentes antes de usar en documentos.
                                </p>
                            </div>

                            <div className="glossary-term">
                                <h4>Sesgo (Bias)</h4>
                                <p className="term-definition">
                                    Tendencias sistemáticas en las respuestas derivadas de los datos
                                    de entrenamiento o el diseño del modelo.
                                </p>
                                <p className="term-legal">
                                    <strong>En derecho:</strong> El modelo puede favorecer interpretaciones
                                    de ciertas jurisdicciones o tradiciones jurídicas sobre otras.
                                </p>
                            </div>

                            <div className="glossary-term">
                                <h4>Cutoff Date / Fecha de corte</h4>
                                <p className="term-definition">
                                    Fecha hasta la cual el modelo tiene conocimiento.
                                    No sabe nada de eventos posteriores a esa fecha.
                                </p>
                                <p className="term-legal">
                                    <strong>En derecho:</strong> <span className="risk-tag">⚠️ IMPORTANTE</span>
                                    Cambios normativos recientes pueden no estar reflejados.
                                    Siempre verificar vigencia de leyes y jurisprudencia.
                                </p>
                            </div>

                            <div className="glossary-term">
                                <h4>Confidencialidad</h4>
                                <p className="term-definition">
                                    Riesgo de que información sensible enviada al modelo
                                    sea almacenada o usada para entrenamiento.
                                </p>
                                <p className="term-legal">
                                    <strong>En derecho:</strong> <span className="risk-tag">⚠️ ÉTICO</span>
                                    No subir datos de clientes a IA sin consentimiento o políticas claras.
                                    Usar versiones empresariales con garantías de privacidad.
                                </p>
                            </div>

                            <div className="glossary-term">
                                <h4>Overreliance / Dependencia excesiva</h4>
                                <p className="term-definition">
                                    Confiar demasiado en la IA sin verificación crítica,
                                    delegando juicio profesional a la máquina.
                                </p>
                                <p className="term-legal">
                                    <strong>En derecho:</strong> La responsabilidad profesional sigue siendo del abogado.
                                    La IA asiste, no sustituye el criterio jurídico.
                                </p>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Categoría 7: Herramientas del Ecosistema */}
                <section id="herramientas" className="page__section">
                    <h2 className="page__section-title">7. Herramientas del Ecosistema</h2>
                    <article className="long-form-content">
                        <div className="glossary-grid">
                            <div className="glossary-term">
                                <h4>ChatGPT (OpenAI)</h4>
                                <p className="term-definition">
                                    Interfaz conversacional de OpenAI basada en modelos GPT.
                                    Versiones: GPT-4o, GPT-4 Turbo.
                                </p>
                                <p className="term-legal">
                                    <strong>Fortaleza jurídica:</strong> Excelente para redacción,
                                    argumentación y textos creativos. Buena capacidad de razonamiento.
                                </p>
                            </div>

                            <div className="glossary-term">
                                <h4>Gemini (Google)</h4>
                                <p className="term-definition">
                                    Suite de modelos de Google con integración nativa a servicios Google.
                                    Destaca por ventana de contexto masiva (2M tokens).
                                </p>
                                <p className="term-legal">
                                    <strong>Fortaleza jurídica:</strong> Ideal para análisis de expedientes grandes,
                                    due diligence, y Deep Research sobre temas complejos.
                                </p>
                            </div>

                            <div className="glossary-term">
                                <h4>Claude (Anthropic)</h4>
                                <p className="term-definition">
                                    Modelo de Anthropic diseñado con énfasis en seguridad y razonamiento cuidadoso.
                                    Buena ventana de contexto (200K tokens).
                                </p>
                                <p className="term-legal">
                                    <strong>Fortaleza jurídica:</strong> Razonamiento matizado,
                                    análisis de riesgos, y respuestas que reconocen incertidumbre.
                                </p>
                            </div>

                            <div className="glossary-term">
                                <h4>Perplexity</h4>
                                <p className="term-definition">
                                    Motor de búsqueda conversacional que combina IA con búsqueda web en tiempo real.
                                    Cita fuentes automáticamente.
                                </p>
                                <p className="term-legal">
                                    <strong>Fortaleza jurídica:</strong> Investigación rápida con fuentes verificables.
                                    Útil para contexto normativo y noticias recientes.
                                </p>
                            </div>

                            <div className="glossary-term">
                                <h4>Make / Zapier</h4>
                                <p className="term-definition">
                                    Plataformas de automatización que conectan aplicaciones entre sí
                                    sin necesidad de programar.
                                </p>
                                <p className="term-legal">
                                    <strong>Fortaleza jurídica:</strong> Automatizar flujos de trabajo legal:
                                    recepción de casos, alertas de vencimientos, informes automáticos.
                                </p>
                            </div>

                            <div className="glossary-term">
                                <h4>NotebookLM (Google)</h4>
                                <p className="term-definition">
                                    Herramienta de Google para crear "notebooks" donde la IA solo responde
                                    basándose en documentos que vos subís.
                                </p>
                                <p className="term-legal">
                                    <strong>Fortaleza jurídica:</strong> Análisis de expedientes aislados,
                                    preparación de casos con fuentes controladas, sin alucinaciones externas.
                                </p>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Navegación */}
                <section id="navegacion" className="page__section">
                    <div className="highlight-box">
                        <p>
                            <strong>💡 Consejo:</strong> Guardá este glosario como referencia.
                            A medida que avances en el curso, estos términos aparecerán repetidamente
                            y comprenderlos te permitirá aprovechar mejor cada herramienta.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Glossary

import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/split-layout.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import MermaidDiagram from '../../components/Visualizations/MermaidDiagram'
import ModelComparisonChart from '../../components/Visualizations/ModelComparisonChart'

const modelFlowChart = `
graph TD
    Input((Prompt)) --> Box[Caja Negra]
    Box --> Output((Respuesta))
    
    style Input fill:#fff,stroke:#333,stroke-width:2px
    style Box fill:#f9f9fab0,stroke:#d4d4d4
    style Output fill:#fff,stroke:#333,stroke-width:2px
    linkStyle default stroke:#7a7a7a,stroke-width:2px
`

const agentFlowChart = `
graph TD
    Task((Tarea)) --> Think[Razonamiento]
    Think --> Tool[Uso de Herramienta]
    Tool --> Env[Entorno / Web / Docs]
    Env --> Obs[Observación de Datos]
    Obs --> Think
    Think --> Action[Acción Final]

    style Think fill:#e8c078,stroke:#e8c078,color:#1a2234,stroke-width:2px
    style Tool fill:#f9f9fab0,stroke:#d4d4d4
    style Env fill:#f9f9fab0,stroke:#d4d4d4
    style Obs fill:#f9f9fab0,stroke:#d4d4d4
    linkStyle default stroke:#7a7a7a,stroke-width:2px
`

const sections = [
    { id: 'core-concepts', title: 'Core Concepts' },
    { id: 'models-vs-agents', title: 'Modelos vs Agentes' },
    { id: 'chatgpt-vs-gemini', title: 'Comparativa: ChatGPT vs Gemini' },
    { id: 'system-architectures', title: 'System Architectures' },
    { id: 'validation-reasoning', title: 'Validation & Reasoning Criteria' },
    { id: 'risks-errors', title: 'Risks, Errors & Bad Practices' },
]

function Foundations() {
    return (
        <div className="page">
            <header className="page__header">
                <h1 className="page__title">Foundations</h1>
                <p className="page__description">
                    Core conceptual foundations of legal intelligence systems
                </p>
            </header>

            <div className="page__content">
                {/* Section 1: Core Concepts */}
                <section id="core-concepts" className="page__section">
                    <h2 className="page__section-title">Core Concepts</h2>
                    <article className="long-form-content">
                        <h3>¿Qué es un LLM (Large Language Model)?</h3>
                        <p>
                            Un LLM es un modelo de inteligencia artificial entrenado con cantidades masivas de texto para generar y comprender lenguaje natural. Funciona prediciendo la siguiente palabra más probable en una secuencia, lo que le permite generar texto coherente, responder preguntas, resumir documentos y más.
                        </p>
                        <p>
                            <strong>Analogía jurídica:</strong> Imaginá un pasante que leyó millones de documentos legales de todas las jurisdicciones del mundo. Puede redactar, resumir y analizar con fluidez, pero no "sabe" derecho en el sentido de un jurista. Reconoce patrones lingüísticos, no verdades jurídicas.
                        </p>

                        <h3>Tokens: La unidad básica de procesamiento</h3>
                        <p>
                            Los modelos no procesan palabras, sino <strong>tokens</strong>—fragmentos de texto que pueden ser palabras completas, partes de palabras o caracteres. En español, una palabra promedio equivale a 1.3-1.5 tokens. Un contrato de 10 páginas puede tener entre 8.000 y 12.000 tokens.
                        </p>
                        <p>
                            <strong>Por qué importa:</strong> Los modelos tienen límites de tokens por conversación (ventana de contexto). Si tu expediente excede ese límite, el modelo pierde información del principio—un problema crítico para análisis legal completo.
                        </p>

                        <h3>Prompts: El arte de la instrucción</h3>
                        <p>
                            Un <strong>prompt</strong> es la instrucción que le das al modelo. La calidad de la respuesta depende directamente de la calidad de tu prompt. Un prompt legal efectivo incluye:
                        </p>
                        <ul>
                            <li><strong>Rol:</strong> "Actuás como abogado especialista en derecho laboral argentino"</li>
                            <li><strong>Contexto:</strong> Los hechos relevantes del caso</li>
                            <li><strong>Tarea específica:</strong> "Analizá si hay despido discriminatorio"</li>
                            <li><strong>Formato de salida:</strong> "Respondé en formato de dictamen con citas"</li>
                        </ul>

                        <h3>Temperatura: Creatividad vs Precisión</h3>
                        <p>
                            La <strong>temperatura</strong> es un parámetro que controla cuán "creativo" o "determinista" es el modelo. Va de 0 a 1 (o más en algunos modelos):
                        </p>
                        <ul>
                            <li><strong>Temperatura baja (0-0.3):</strong> Respuestas más predecibles y conservadoras. Ideal para análisis legal donde necesitás precisión.</li>
                            <li><strong>Temperatura alta (0.7-1):</strong> Respuestas más variadas y creativas. Útil para brainstorming de estrategias.</li>
                        </ul>
                        <p>
                            <strong>Para trabajo jurídico:</strong> Usá temperatura baja para redacción de contratos y análisis. Subila solo cuando necesités explorar alternativas argumentales.
                        </p>

                        <h3>Ventana de Contexto: La memoria de trabajo</h3>
                        <p>
                            La <strong>ventana de contexto</strong> es la cantidad máxima de tokens que el modelo puede "recordar" en una conversación. Es como la capacidad de la mesa de trabajo de un abogado—solo cabe cierta cantidad de papeles.
                        </p>
                        <ul>
                            <li><strong>GPT-4:</strong> 128K tokens (~300 páginas)</li>
                            <li><strong>Gemini 1.5 Pro:</strong> 2M tokens (~5.000 páginas)</li>
                            <li><strong>Claude 3:</strong> 200K tokens (~500 páginas)</li>
                        </ul>
                        <p>
                            <strong>Implicancia práctica:</strong> Para expedientes grandes, Gemini puede procesar todo junto; con GPT-4 necesitás fragmentar y usar técnicas de resumen progresivo.
                        </p>
                    </article>
                </section>

                {/* Section 2: Models vs Agents (Visual: Mermaid) */}
                <section id="models-vs-agents" className="page__section section-grid">
                    <div className="section-grid__content">
                        <h2 className="page__section-title">Modelos vs Agentes</h2>
                        <article className="long-form-content">
                            <h3>Definición Técnica</h3>
                            <p>
                                Los modelos de IA generativa (LLMs) son motores probabilísticos entrenados en vastos conjuntos de datos para predecir el siguiente token en una secuencia. Funcionan como repositorios estáticos de conocimiento congelado, capaces de reconocimiento de patrones, síntesis y transformación de datos de entrada. Funcionalmente, un modelo es una función sin estado: recibe una entrada (prompt), la procesa a través de sus pesos y produce una salida. No tiene memoria de interacciones pasadas, ni agencia para actuar sobre el mundo, ni capacidad inherente para verificar sus propios resultados contra la realidad externa.
                            </p>
                            <p>
                                Los Agentes de IA, por el contrario, son sistemas dinámicos que encapsulan uno o más modelos dentro de un entorno de ejecución. Un agente no es simplemente un generador de texto; es una entidad computacional equipada con herramientas, memoria y un bucle lógico recursivo (a menudo un ciclo de observación-pensamiento-acción). Arquitectónicamente, un agente envuelve al modelo en una capa de control que le permite ejecutar código, navegar por la web, consultar bases de datos y mantener el estado a través de un flujo de trabajo de múltiples pasos. El modelo es el motor; el agente es el vehículo.
                            </p>

                            <h3>Marco Conceptual</h3>
                            <p>
                                En un Sistema de Inteligencia Legal, modelos y agentes ocupan capas jerárquicas distintas. El modelo sirve como el núcleo de razonamiento—el "cerebro" que procesa tareas lingüísticas específicas como la sumarización o la extracción de cláusulas. El agente sirve como el "trabajador" que crea el flujo de trabajo alrededor de ese razonamiento. Una interfaz de chat simple (ej. ChatGPT mismo) no es un sistema; es una línea directa y no gestionada hacia el modelo, efectivamente limitada por la ventana de contexto inmediata y la habilidad de prompting del usuario.
                            </p>
                            <p>
                                El verdadero diseño de sistemas requiere una capa de orquestación donde la decisión de actuar se separa del acto de generación. La orquestación implica definir cuándo se debe llamar a un modelo, qué contexto se le debe proporcionar y cómo se debe validar su salida antes de activar el siguiente paso. Este cambio de "chatear" a "orquestar" es efectivamente lo que transforma una herramienta casual en un activo profesional robusto.
                            </p>

                            <h3>Implicancias Legales Concretas</h3>
                            <p>
                                En la práctica legal, esta distinción es fundacional. Un modelo puede redactar una cláusula o resumir una deposición proporcionada. Sin embargo, un modelo no puede "investigar" un expediente porque la investigación es un proceso iterativo de hipótesis, búsqueda, lectura y refinamiento. Un sistema basado en agentes puede ser arquitectado para leer una carpeta de PDFs, extraer fechas, construir una línea de tiempo cronológica, identificar lagunas en esa línea de tiempo y marcar activamente discrepancias para revisión humana.
                            </p>
                            <p>
                                Para la investigación judicial, la dependencia de un modelo solo obliga al profesional a curar manualmente cada entrada y salida. Un flujo de trabajo agéntico automatiza la recuperación y referencia cruzada de jurisprudencia, asegurando que la cita no sea una alucinación, sino recuperada de una base de datos confiable y luego resumida por el modelo. El valor no reside en la generación de texto, sino en la confiabilidad del bucle recuperación-generación.
                            </p>

                            <h3>Nivel Profesional Requerido</h3>
                            <p>
                                Trabajar eficazmente con modelos crudos requiere "ingeniería de prompts"—la habilidad lingüística de coaccionar un motor probabilístico hacia un estado deseado. Esta es una habilidad de nivel usuario. Diseñar y operar agentes, sin embargo, requiere "pensamiento sistémico"—la habilidad ingenieril de descomponer una tarea legal compleja en pasos discretos y verificables.
                            </p>
                            <p>
                                Un profesional operando al nivel de agente no solo hace preguntas; diseña tuberías (pipelines). Debe entender estructuras de datos, latencia, límites de ventana de contexto y la lógica de condiciones booleanas (si se encuentra X, hacer Y). Este cambio operativo mueve al profesional legal de consumidor de software a arquitecto de sus propios medios de producción intelectual.
                            </p>

                            <h3>Riesgos, Errores y Malas Prácticas</h3>
                            <p>
                                El riesgo más significativo en la IA legal es la mentalidad de "seguidor del bot"—una sobredependencia de la interfaz de chat como fuente de verdad. Cuando un abogado trata a un modelo como un oráculo en lugar de un procesador de texto, invita a la alucinación y errores lógicos a su trabajo. La "falsa sensación de inteligencia" proporcionada por una respuesta fluida a menudo enmascara una falta total de base fáctica.
                            </p>
                            <p>
                                En el diseño de sistemas, una mala práctica común es la falta de pasos de validación. A un agente nunca se le debe permitir "decidir" el resultado final de un documento legal sin un paso de revisión intermedia o una verificación de validación programática. Automatizar sin supervisión es negligencia. El sistema debe estar diseñado para fallar con gracia y alertar al operador humano cuando la ambigüedad es alta, en lugar de inventar confiadamente una falsedad plausible.
                            </p>

                            <h3>Casos de Uso Judiciales y Legales Reales</h3>
                            <p>
                                Considere un caso masivo antimonopolio o una disputa de herencia compleja que involucra docenas de escrituras de propiedad y años de correspondencia. Un abogado humano usando una interfaz de chat está abrumado por el volumen; la ventana de contexto del modelo es insuficiente para toda la historia.
                            </p>
                            <p>
                                Un sistema agéntico maneja esto descomponiendo el problema: itera a través de cada documento, extrae entidades relevantes (nombres, fechas, montos) hacia una base de datos estructurada, y luego usa el modelo para detectar patrones <em>a través</em> de los datos estructurados. Esto permite la detección de contradicciones sutiles—ej., un testigo afirmando estar en la Ciudad A en una fecha cuando un recibo los ubica en la Ciudad B—que un humano podría perder en mil páginas de evidencia y un solo prompt de modelo nunca podría abarcar.
                            </p>

                            <h3>Monetización y Valor Profesional</h3>
                            <p>
                                Entender esta arquitectura permite a una firma pasar de facturar por horas (tiempo dedicado a leer) a facturar por conocimiento (valor de los patrones detectados). Los servicios construidos sobre agentes escalan; un flujo bien diseñado corre tan barato en un contrato como lo hace en mil.
                            </p>
                            <p>
                                La propuesta de valor cambia de "tengo un abogado inteligente" a "tengo un sistema propietario para el análisis de riesgos". Este es un diferenciador de mercado defendible. En un mercado saturado con usuarios genéricos de IA, el sistema a medida que integra conocimiento específico de la firma y protocolos estrictos de validación, se convierte en un activo de alto margen.
                            </p>

                            <h3>Tipo de Especialista que Esto Habilita</h3>
                            <p>
                                Este enfoque de sistemas primero define un nuevo perfil: el Ingeniero Legal o Arquitecto de Sistemas Legales. Este profesional no es meramente un abogado experto en tecnología; es un estratega híbrido que entiende la naturaleza de la lógica legal y puede traducirla en flujos de trabajo deterministas.
                            </p>
                            <p>
                                A diferencia del "entusiasta de legal tech" que persigue la última aplicación, este especialista construye infraestructura a largo plazo. Se enfocan en la soberanía de los datos, la auditabilidad y la "industrialización" del razonamiento legal. Su trayectoria profesional no está ligada a la hora facturable sino a la escalabilidad de los sistemas de inteligencia que despliegan.
                            </p>
                        </article>
                    </div>
                    {/* Visual Sidecar 1 */}
                    <div className="section-grid__visual">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
                            <MermaidDiagram chart={modelFlowChart} title="1. Flujo del Modelo (Estático)" />
                            <MermaidDiagram chart={agentFlowChart} title="2. Flujo del Agente (Dinámico)" />
                        </div>
                    </div>
                </section>


                {/* Section 3: ChatGPT vs Gemini (Visual: Radar) */}
                <section id="chatgpt-vs-gemini" className="page__section section-grid">
                    <div className="section-grid__content">
                        <h2 className="page__section-title">Comparativa: ChatGPT vs Gemini</h2>
                        <article className="long-form-content">
                            <h3>Propósito de la Comparación</h3>
                            <p>
                                En el diseño de sistemas de inteligencia legal, la elección del modelo subyacente no es una preferencia de marca, sino una decisión de arquitectura. No se trata de determinar cuál herramienta es "mejor" en abstracto, sino de entender sus topologías cognitivas. ChatGPT (OpenAI) y Gemini (Google) representan dos filosofías de procesamiento distintas: la primera orientada al razonamiento estructurado y la síntesis narrativa; la segunda, a la exploración masiva de corpus y ventanas de contexto extendidas.
                            </p>
                            <p>
                                Para el profesional legal, entender esta distinción es la diferencia entre obtener una respuesta alucinada pero convincente, o un análisis basado en datos concretos pero quizás menos elocuente.
                            </p>

                            <h3>ChatGPT: Fortalezas y Limitaciones</h3>
                            <p>
                                <strong>El Motor de Razonamiento.</strong> La arquitectura de OpenAI (modelos o1/GPT-4) destaca por su capacidad de seguir instrucciones complejas (instruction following) y mantener coherencia lógica en argumentos densos. Es ideal para tareas que requieren una estructura silogística fuerte: redactar una cláusula basada en tres condiciones previas, reformular un argumento defensivo o sintetizar un texto legal corto manteniendo un tono específico.
                            </p>
                            <p>
                                Su limitación principal en el ámbito legal es la "miopía de contexto". Aunque sus ventanas de contexto han crecido, su rendimiento se degrada cuando se le pide que analice cientos de documentos simultáneamente. Tiende a "olvidar" detalles del medio del contexto (lost-in-the-middle phenomenon) y priorizar la información más reciente, lo cual es fatal en una revisión de debida diligencia (due diligence) exhaustiva.
                            </p>

                            <h3>Gemini: Fortalezas y Limitaciones</h3>
                            <p>
                                <strong>El Motor de Exploración.</strong> Gemini (particularmente los modelos Pro y Flash 1.5) ha sido diseñado para ventanas de contexto masivas (1M+ tokens). Esto cambia el paradigma: permite cargar un expediente judicial completo (cientos de PDFs, correos, audios) en una sola llamada (prompt). Su fortaleza no es necesariamente la redacción poética, sino la "aguja en el pajar": encontrar esa contradicción específica entre una declaración de fojas 5 y un contrato de fojas 200.
                            </p>
                            <p>
                                Su limitación radica a veces en la profundidad del razonamiento abstracto "zero-shot". Puede recuperar la información perfectamente, pero a veces requiere más "mano guiada" (chain-of-thought prompting) para construir un argumento legal complejo a partir de esos datos sin caer en generalidades.
                            </p>

                            <h3>Diferencias Clave para Análisis Legal</h3>
                            <p>
                                <strong>Razonamiento vs. Exploración:</strong> ChatGPT funciona mejor "pensando" sobre un texto limitado y curado. Gemini funciona mejor "leyendo" una biblioteca entera desordenada.
                                <br />
                                <strong>Profundidad vs. Amplitud:</strong> Si necesitas analizar la jurisprudencia de un solo fallo de la Corte Suprema en profundidad, usa ChatGPT. Si necesitas encontrar patrones en 50 fallos de tribunales inferiores, usa Gemini.
                                <br />
                                <strong>Coherencia Narrativa vs. Escaneo de Corpus:</strong> Para redactar el alegato final, ChatGPT. Para la etapa probatoria y discovery, Gemini.
                            </p>

                            <h3>Estrategia Multimodelo en Sistemas de Inteligencia</h3>
                            <p>
                                El error del novato es casarse con un solo modelo. Un Sistema de Inteligencia Legal robusto utiliza una estrategia de enrutamiento (model routing).
                            </p>
                            <p>
                                <em>Ejemplo de Flujo de Trabajo:</em>
                                1. <strong>Fase de Ingesta (Gemini):</strong> Se carga todo el expediente desordenado. Se le pide a Gemini que extraiga cronológicamente todos los hechos y cree un índice estructurado.
                                2. <strong>Fase de Orquestación (Código/Agente):</strong> El sistema toma ese índice y separa los hechos relevantes de los irrelevantes.
                                3. <strong>Fase de Análisis (ChatGPT):</strong> El sistema envía solo los hechos relevantes y disputados a ChatGPT para que redacte un análisis de viabilidad de la demanda basado en la teoría del caso.
                            </p>

                            <h3>Riesgos y Errores Comunes</h3>
                            <p>
                                Usar ChatGPT para leer expedientes enteros lleva a alucinaciones por desbordamiento de contexto: inventará fechas para llenar vacíos de memoria. Usar Gemini para redacción creativa legal sin supervisión puede resultar en textos secos o robóticos. El mayor riesgo es la falsa confianza: creer que porque el modelo resumió bien las primeras 10 páginas, leyó correctamente las otras 900. Sin validación cruzada, esto es negligencia profesional tecnológica.
                            </p>

                            <h3>Casos de Uso Prácticos</h3>
                            <p>
                                <strong>Preparación de Caso:</strong> Subir toda la prueba documental a Gemini para generar una línea de tiempo interactiva.
                                <br />
                                <strong>Análisis de Jurisprudencia:</strong> Tomar los 3 fallos más citados por la contraparte, pasarlos por ChatGPT para deconstruir sus argumentos lógicos y encontrar falacias.
                                <br />
                                <strong>Investigación Multicausa:</strong> Usar Gemini para buscar si un mismo actor ha iniciado demandas similares en distintas jurisdicciones (detectando "forum shopping") analizando múltiples PDFs de demandas simultáneamente.
                            </p>

                            <h3>Implicancias Profesionales</h3>
                            <p>
                                La selección correcta del modelo impacta directamente en la credibilidad. Un abogado que usa la herramienta incorrecta entregará trabajo con errores fácticos (por usar un modelo de razonamiento para búsqueda) o con argumentos pobres (por usar un modelo de búsqueda para argumentar). El "Ingeniero Legal" no "usa IA"; diseña el flujo de información eligiendo el procesador cognitivo adecuado para cada etapa del litigio.
                            </p>

                            <h3>Verificación de Comprensión</h3>
                            <p><em>Responda para sus adentros o en sus notas personales:</em></p>
                            <ul>
                                <li><strong>Escenario 1:</strong> Tienes 400 correos electrónicos desordenados entre tu cliente y un proveedor, y necesitas saber si en alguno de ellos se mencionó explícitamente la palabra "renuncia" antes de mayo de 2023. ¿Qué modelo usarías y por qué?</li>
                                <li><strong>Escenario 2:</strong> Tienes un contrato de 5 páginas y necesitas redactar una cláusula adicional que sea coherente con el estilo de redacción very formal y arcaico del resto del documento. ¿Cuál eliges?</li>
                                <li><strong>Escenario 3:</strong> Necesitas comparar las declaraciones de 5 testigos distintos (cada una de 20 páginas) para encontrar contradicciones sutiles en los horarios que mencionan. ¿Estrategia?</li>
                                <li><strong>Escenario 4:</strong> Estás construyendo un bot para responder preguntas sobre el reglamento interno de la empresa (un solo PDF de 50 págs) para empleados. ¿Importa más la ventana de contexto o la capacidad de instrucción?</li>
                                <li><strong>Escenario 5:</strong> Quieres analizar si la sentencia que acabas de recibir (30 págs) aplica correctamente un precedente de la Corte que también tienes en PDF. ¿Cómo orquestarías esto?</li>
                            </ul>
                        </article>
                    </div>
                    {/* Visual Sidecar 2 */}
                    <div className="section-grid__visual">
                        <ModelComparisonChart />
                    </div>
                </section>

                <section id="system-architectures" className="page__section">
                    <h2 className="page__section-title">System Architectures</h2>
                    <article className="long-form-content">
                        <h3>Arquitecturas de Sistemas de IA Legal</h3>
                        <p>
                            Un sistema de inteligencia legal no es simplemente "usar ChatGPT". Es una arquitectura diseñada con capas específicas que separan responsabilidades y garantizan calidad.
                        </p>

                        <h3>Arquitectura de 3 Capas</h3>
                        <ul>
                            <li><strong>Capa de Ingesta:</strong> Donde entran los documentos. Incluye OCR para documentos escaneados, extracción de texto de PDFs, y normalización de formatos.</li>
                            <li><strong>Capa de Procesamiento:</strong> Donde trabaja el modelo. Incluye prompts especializados, validación de respuestas, y lógica de negocios legal.</li>
                            <li><strong>Capa de Presentación:</strong> Donde el profesional interactúa. Interfaces claras, citación de fuentes, y herramientas de edición.</li>
                        </ul>

                        <h3>Patrones Comunes en Legal Tech</h3>
                        <p><strong>1. Patrón de Pipeline Secuencial:</strong></p>
                        <p>Documento → Extracción → Análisis → Validación → Salida formateada. Cada paso depende del anterior. Ideal para tareas predecibles como análisis de contratos estándar.</p>

                        <p><strong>2. Patrón de Orquestador:</strong></p>
                        <p>Un "cerebro" central decide qué modelo usar para cada subtarea. Envía resúmenes a un modelo, análisis profundo a otro, y combina resultados. Ideal para casos complejos.</p>

                        <p><strong>3. Patrón de RAG (Retrieval-Augmented Generation):</strong></p>
                        <p>Búsqueda en base documental + Generación con contexto. El modelo no "sabe" tu jurisprudencia, pero la busca y la usa. Esencial para trabajo con precedentes.</p>

                        <h3>Consideraciones de Diseño</h3>
                        <ul>
                            <li><strong>Latencia:</strong> ¿Cuánto demora cada paso? En audiencias necesitás respuestas en segundos.</li>
                            <li><strong>Costo:</strong> Cada llamada al modelo tiene costo. Un sistema mal diseñado puede costar 10x más.</li>
                            <li><strong>Auditabilidad:</strong> ¿Podés rastrear de dónde vino cada conclusión? Crítico para responsabilidad profesional.</li>
                            <li><strong>Escalabilidad:</strong> ¿Funciona con 10 casos? ¿Con 1.000?</li>
                        </ul>
                    </article>
                </section>

                <section id="validation-reasoning" className="page__section">
                    <h2 className="page__section-title">Validation & Reasoning Criteria</h2>
                    <article className="long-form-content">
                        <h3>La Validación No Es Opcional</h3>
                        <p>
                            En derecho, un error no es solo inconveniente—puede ser mala praxis. La validación de salidas de IA debe ser <strong>sistemática, no anecdótica</strong>.
                        </p>

                        <h3>Criterios de Validación para Trabajo Legal</h3>
                        <ul>
                            <li><strong>Verificabilidad fáctica:</strong> ¿Las citas existen? ¿Las fechas son correctas? ¿Los artículos citados dicen lo que el modelo afirma?</li>
                            <li><strong>Coherencia lógica:</strong> ¿La conclusión se sigue de las premisas? ¿Hay saltos argumentales?</li>
                            <li><strong>Jurisdicción correcta:</strong> ¿El modelo mezcló derecho argentino con español o mexicano?</li>
                            <li><strong>Vigencia normativa:</strong> ¿La ley o jurisprudencia citada sigue vigente?</li>
                            <li><strong>Completitud:</strong> ¿El análisis cubre todos los aspectos relevantes o omitió algo crítico?</li>
                        </ul>

                        <h3>Protocolos de Verificación</h3>
                        <p><strong>Nivel 1 - Chequeo Rápido (5 minutos):</strong></p>
                        <ul>
                            <li>Verificar que las 3 primeras citas existan</li>
                            <li>Confirmar jurisdicción correcta</li>
                            <li>Leer conclusiones buscando contradicciones obvias</li>
                        </ul>

                        <p><strong>Nivel 2 - Revisión Estándar (30 minutos):</strong></p>
                        <ul>
                            <li>Verificar TODAS las citas legales</li>
                            <li>Contrastar con fuentes primarias</li>
                            <li>Evaluar la estructura argumentativa</li>
                        </ul>

                        <p><strong>Nivel 3 - Auditoría Completa (2+ horas):</strong></p>
                        <ul>
                            <li>Reconstrucción del razonamiento paso a paso</li>
                            <li>Búsqueda de jurisprudencia contradictoria</li>
                            <li>Revisión por segundo profesional</li>
                        </ul>

                        <h3>Cuándo Aplicar Cada Nivel</h3>
                        <ul>
                            <li><strong>Nivel 1:</strong> Borradores internos, notas de trabajo</li>
                            <li><strong>Nivel 2:</strong> Documentos para clientes, dictámenes</li>
                            <li><strong>Nivel 3:</strong> Presentaciones judiciales, documentos públicos</li>
                        </ul>
                    </article>
                </section>

                {/* Section with Sticky Insight */}
                <section id="risks-errors" className="page__section section-grid">
                    <div className="section-grid__content">
                        <h2 className="page__section-title">Risks, Errors & Bad Practices</h2>
                        <article className="long-form-content">
                            <h3>Riesgos Críticos en IA Legal</h3>

                            <h4>1. Alucinaciones Jurídicas</h4>
                            <p>
                                El modelo puede inventar fallos, artículos de ley, o doctrinas que suenan completamente plausibles pero no existen. Un fallo citado como "CSJN Fallos 340:1234" puede ser completamente ficticio.
                            </p>
                            <p><strong>Mitigación:</strong> SIEMPRE verificar citas en fuentes primarias. Nunca confiar en una cita sin chequearla.</p>

                            <h4>2. Mezcla de Jurisdicciones</h4>
                            <p>
                                Entrenados con datos globales, los modelos mezclan frecuentemente conceptos de common law con derecho continental, o legislación de distintos países hispanoparlantes.
                            </p>
                            <p><strong>Mitigación:</strong> Especificar jurisdicción en CADA prompt. "Derecho argentino vigente" debe ser parte obligatoria del contexto.</p>

                            <h4>3. Desactualización Normativa</h4>
                            <p>
                                Los modelos tienen fecha de corte de conocimiento. Una ley derogada o modificada puede seguir siendo citada como vigente.
                            </p>
                            <p><strong>Mitigación:</strong> Usar RAG con base normativa actualizada. No confiar en el conocimiento "interno" del modelo para vigencia.</p>

                            <h4>4. Falsa Confianza del Operador</h4>
                            <p>
                                El mayor riesgo no es técnico sino humano: la tendencia a confiar excesivamente en respuestas elocuentes. Cuanto mejor "suena" una respuesta, más peligrosa puede ser si está equivocada.
                            </p>
                            <p><strong>Mitigación:</strong> Cultura de escepticismo sano. Tratar a la IA como un pasante muy capaz pero propenso a errores graves.</p>

                            <h3>Malas Prácticas a Evitar</h3>
                            <ul>
                                <li><strong>Copy-paste sin revisión:</strong> Copiar directamente la salida del modelo a un documento judicial</li>
                                <li><strong>Un solo modelo para todo:</strong> Usar ChatGPT para expedientes de 500 páginas cuando Gemini es más apropiado</li>
                                <li><strong>Prompts vagos:</strong> "Analizá este contrato" sin especificar qué buscar</li>
                                <li><strong>Ignorar el contexto:</strong> No dar los hechos del caso antes de pedir análisis</li>
                                <li><strong>No documentar el proceso:</strong> Si algo sale mal, ¿podés demostrar que hiciste verificaciones razonables?</li>
                            </ul>

                            <h3>Responsabilidad Profesional</h3>
                            <p>
                                La IA no reemplaza la responsabilidad del abogado. El Código de Ética sigue aplicando: negligencia es negligencia, sea con libros o con algoritmos. El profesional firma, el profesional responde.
                            </p>
                        </article>
                    </div>
                    <div className="section-grid__visual">
                        <div className="visual-insight">
                            <h4>Insight Crítico</h4>
                            <p>La validación no es opcional. Un sistema sin bucles de verificación humana o algorítmica es simplemente un generador de alucinaciones a escala industrial.</p>
                            <br />
                            <h4>Regla de Oro</h4>
                            <p>Si no podés explicar cómo llegaste a una conclusión sin mencionar "la IA me dijo", no estás listo para usarla profesionalmente.</p>
                        </div>
                    </div>
                </section>

                {/* Footer de navegación */}
                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        {/* No hay unidad anterior */}
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/foundations-u2" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Unidad 2 – ChatGPT vs Gemini →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Foundations

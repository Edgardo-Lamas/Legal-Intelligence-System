import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/split-layout.css'
import MermaidDiagram from '../../components/Visualizations/MermaidDiagram'
import ModelComparisonChart from '../../components/Visualizations/ModelComparisonChart'

const modelsVsAgentsChart = `
graph TD
    subgraph Model [Flujo del Modelo]
        Input((Prompt)) --> Box[Caja Negra]
        Box --> Output((Respuesta))
    end

    subgraph Agent [Flujo del Agente]
        Task((Tarea)) --> Think[Razonamiento]
        Think --> Tool[Uso de Herramienta]
        Tool --> Env[Entorno / Web / Docs]
        Env --> Obs[Observación de Datos]
        Obs --> Think
        Think --> Action[Acción Final]
    end

    style Model fill:#f9f9fab0,stroke:#d4d4d4
    style Agent fill:#f9f9fab0,stroke:#d4d4d4
    style Think fill:#e8c078,stroke:#e8c078,color:#333
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

            <div className="split-layout">
                {/* Left Column: Long-form Text */}
                <div className="split-layout__content page__content">
                    <section id="core-concepts" className="page__section">
                        <h2 className="page__section-title">Core Concepts</h2>
                        <div className="page__section-content">
                            <span className="page__section-placeholder">Content to be added</span>
                        </div>
                    </section>

                    <section id="models-vs-agents" className="page__section">
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
                    </section>

                    <section id="chatgpt-vs-gemini" className="page__section">
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
                    </section>

                    <section id="system-architectures" className="page__section">
                        <h2 className="page__section-title">System Architectures</h2>
                        <div className="page__section-content">
                            <span className="page__section-placeholder">Content to be added</span>
                        </div>
                    </section>

                    <section id="validation-reasoning" className="page__section">
                        <h2 className="page__section-title">Validation & Reasoning Criteria</h2>
                        <div className="page__section-content">
                            <span className="page__section-placeholder">Content to be added</span>
                        </div>
                    </section>

                    <section id="risks-errors" className="page__section">
                        <h2 className="page__section-title">Risks, Errors & Bad Practices</h2>
                        <div className="page__section-content">
                            <span className="page__section-placeholder">Content to be added</span>
                        </div>
                    </section>
                </div>

                {/* Right Column: Visual Learning Tools */}
                <aside className="split-layout__visuals">
                    <MermaidDiagram chart={modelsVsAgentsChart} title="Arquitectura Agente vs Modelo" />
                    <ModelComparisonChart />
                </aside>
            </div>
        </div>
    )
}

export default Foundations

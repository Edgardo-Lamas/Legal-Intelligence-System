import '../../styles/pages.css'
import '../../styles/content.css'

const sections = [
    { id: 'core-concepts', title: 'Core Concepts' },
    { id: 'models-vs-agents', title: 'Modelos vs Agentes' },
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
        </div>
    )
}

export default Foundations

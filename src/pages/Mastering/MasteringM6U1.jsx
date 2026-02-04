import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'

function MasteringM6U1() {
    return (
        <div className="page">
            <header className="page__header">
                <span className="page__module-tag">Módulo 6 · Unidad 1</span>
                <h1 className="page__title">Claude Projects para gestión de casos</h1>
                <p className="page__description">
                    Cómo configurar y utilizar Claude Projects como tu asistente jurídico especializado para el manejo integral de expedientes.
                </p>
            </header>

            <div className="page__content">
                {/* Sección 1: Introducción */}
                <section id="intro" className="page__section">
                    <h2 className="page__section-title">1. ¿Qué es Claude Projects y por qué es ideal para abogados?</h2>
                    <article className="long-form-content">
                        <p>
                            Claude Projects es una funcionalidad de Claude (Anthropic) que permite crear <strong>espacios de trabajo persistentes</strong> donde la IA mantiene contexto a lo largo del tiempo. A diferencia de las conversaciones normales que "olvidan" todo al cerrar, un Project recuerda:
                        </p>
                        <ul className="application-list">
                            <li><strong>Documentos cargados:</strong> Contratos, escritos, normativa, jurisprudencia</li>
                            <li><strong>Instrucciones personalizadas:</strong> Tu estilo de redacción, jurisdicción, especialidad</li>
                            <li><strong>Historial de conversaciones:</strong> Análisis previos, decisiones tomadas</li>
                        </ul>

                        <h3>¿Por qué esto transforma la práctica jurídica?</h3>
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Sin Projects</h4>
                                <p>Cada vez que abres Claude, empezás de cero. Tenés que re-explicar el caso, volver a cargar documentos, repetir instrucciones.</p>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>✅ Con Projects</h4>
                                <p>Abrís el proyecto del caso "García c/ Empresa S.A." y Claude ya sabe todo: los documentos, los antecedentes, tu estrategia. Preguntás directamente.</p>
                            </div>
                        </div>

                        <blockquote className="concept-quote">
                            Un Project de Claude funciona como un legajo digital inteligente: no solo almacena información, sino que la comprende y puede operar sobre ella.
                        </blockquote>
                    </article>
                </section>

                {/* Sección 2: Configuración */}
                <section id="configuracion" className="page__section">
                    <h2 className="page__section-title">2. Configuración paso a paso</h2>
                    <article className="long-form-content">
                        <h3>Paso 1: Acceder a Projects</h3>
                        <p>
                            En <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">claude.ai</a>, en el panel izquierdo verás la opción "Projects". Hacé clic en <strong>"Create Project"</strong>.
                        </p>
                        <div className="highlight-success">
                            <strong>Requisito:</strong> Necesitás una cuenta Pro de Claude ($20/mes). La inversión se justifica por la capacidad de manejar documentos extensos y mantener contexto.
                        </div>

                        <h3>Paso 2: Nombrar el proyecto estratégicamente</h3>
                        <p>El nombre debe permitirte identificar rápidamente el caso. Recomiendo este formato:</p>
                        <pre className="code-block">
                            {`[TIPO] Cliente c/ Contraparte - Tema
Ejemplos:
- [CIVIL] García c/ Inmobiliaria Sur - Daños
- [LABORAL] Pérez c/ Tech Corp - Despido
- [COMERCIAL] Análisis Due Diligence - Empresa ABC`}
                        </pre>

                        <h3>Paso 3: Definir las instrucciones del proyecto</h3>
                        <p>
                            Esta es la parte más importante. Las <strong>Custom Instructions</strong> le dicen a Claude cómo debe comportarse en TODO el proyecto. Aquí va un modelo que podés adaptar:
                        </p>
                        <pre className="code-block">
                            {`INSTRUCCIONES DEL PROYECTO

ROL:
Sos mi asistente jurídico especializado en derecho civil 
patrimonial argentino. Conocés el Código Civil y Comercial,
la jurisprudencia de la CSJN y cámaras de apelación.

CASO:
[Breve descripción del caso - 2-3 oraciones]

CLIENTE:
Represento al actor/demandado [nombre].

JURISDICCIÓN:
Tribunales civiles de [ciudad/provincia].

ESTILO DE TRABAJO:
- Usá lenguaje técnico jurídico preciso
- Citá artículos específicos cuando corresponda
- Si no estás seguro de algo, indicalo claramente
- Proponé alternativas cuando veas riesgos

DOCUMENTOS CLAVE:
- Contrato de fecha [X] (cargado como "contrato.pdf")
- Demanda presentada (cargado como "demanda.pdf")
- Contestación (cargado como "contestacion.pdf")

OBJETIVO ACTUAL:
Preparar alegato para la etapa de [X].`}
                        </pre>

                        <h3>Paso 4: Cargar documentos</h3>
                        <p>En la sección "Knowledge" del proyecto, subí los archivos relevantes:</p>
                        <ul className="application-list">
                            <li><strong>Documentos del caso:</strong> Contratos, escritos, pruebas documentales</li>
                            <li><strong>Normativa aplicable:</strong> Leyes específicas, decretos, resoluciones</li>
                            <li><strong>Jurisprudencia:</strong> Fallos relevantes que querés que Claude considere</li>
                            <li><strong>Tus modelos:</strong> Plantillas de escritos que usás habitualmente</li>
                        </ul>
                        <div className="highlight-warning">
                            <strong>Límite:</strong> Cada proyecto puede tener hasta 200.000 tokens de contexto (aprox. 500 páginas). Seleccioná los documentos más relevantes.
                        </div>
                    </article>
                </section>

                {/* Sección 3: Estructura de proyecto */}
                <section id="estructura" className="page__section">
                    <h2 className="page__section-title">3. Estructura de proyecto para casos jurídicos</h2>
                    <article className="long-form-content">
                        <p>
                            Basado en mi experiencia, esta es la estructura óptima para un proyecto de caso jurídico:
                        </p>

                        <h3>Estructura recomendada</h3>
                        <pre className="code-block">
                            {`📁 Proyecto: [CIVIL] García c/ Inmobiliaria Sur

📄 Custom Instructions (ver modelo arriba)

📚 Knowledge (documentos):
   ├── 01_contratos/
   │   └── contrato_compraventa_2023.pdf
   ├── 02_escritos_propios/
   │   ├── demanda.pdf
   │   └── alegato_borrador.docx
   ├── 03_escritos_contraparte/
   │   └── contestacion.pdf
   ├── 04_prueba/
   │   ├── pericia_tecnica.pdf
   │   └── testimoniales_resumidas.txt
   └── 05_jurisprudencia/
       ├── fallo_csjn_2022.pdf
       └── camara_civil_2023.pdf

💬 Conversaciones:
   ├── "Análisis inicial del caso"
   ├── "Estrategia de prueba"
   ├── "Redacción de alegato"
   └── "Preparación de audiencia"`}
                        </pre>

                        <h3>Tip: Un proyecto por caso activo</h3>
                        <p>
                            No mezcles casos en un mismo proyecto. Cada expediente merece su propio espacio para evitar confusiones y mantener la confidencialidad conceptual clara.
                        </p>
                    </article>
                </section>

                {/* Sección 4: Prompts reales */}
                <section id="prompts" className="page__section">
                    <h2 className="page__section-title">4. Prompts reales de trabajo jurídico</h2>
                    <article className="long-form-content">
                        <p>
                            Estos son prompts que uso en mi práctica diaria. Cada uno incluye el prompt, el contexto y un ejemplo del tipo de respuesta que obtengo.
                        </p>

                        <h3>Prompt 1: Análisis inicial del caso</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">PROMPT</div>
                            <pre className="code-block">
                                {`Analizá los documentos cargados y dame:

1. HECHOS RELEVANTES: Lista cronológica de los hechos 
   jurídicamente significativos
   
2. PRETENSIONES: Qué pide cada parte y cuál es el 
   fundamento normativo
   
3. PUNTOS CONTROVERTIDOS: Qué hechos o interpretaciones 
   están en disputa
   
4. FORTALEZAS Y DEBILIDADES: De nuestra posición
   
5. RIESGOS: Qué podría salir mal y cómo mitigarlo`}
                            </pre>
                        </div>
                        <div className="highlight-success">
                            <strong>Cuándo usarlo:</strong> Al tomar un caso nuevo o al retomarlo después de tiempo. Te da un mapa completo en minutos.
                        </div>

                        <h3>Prompt 2: Búsqueda de argumentos</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">PROMPT</div>
                            <pre className="code-block">
                                {`La contraparte argumenta que [X].

Necesito contraargumentos sólidos. Buscá en los documentos 
del caso y en tu conocimiento:

1. Argumentos de hecho que refuten esa posición
2. Argumentos normativos (artículos, principios)
3. Argumentos jurisprudenciales si los conocés
4. Debilidades de su argumento que puedo explotar

Priorizá los argumentos por fortaleza (más fuerte primero).`}
                            </pre>
                        </div>

                        <h3>Prompt 3: Redacción de escrito</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">PROMPT</div>
                            <pre className="code-block">
                                {`Redactá el apartado [X] del alegato considerando:

OBJETIVO: Demostrar que [Y]

ELEMENTOS A INCLUIR:
- Referencia a los hechos probados en autos
- Cita de los artículos [enumerar]
- Mención del fallo [nombre] como precedente

EXTENSIÓN: Aproximadamente [N] párrafos

TONO: Formal pero contundente, sin adjetivos innecesarios

Dame el texto completo, no un esquema.`}
                            </pre>
                        </div>

                        <h3>Prompt 4: Preparación de interrogatorio</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">PROMPT</div>
                            <pre className="code-block">
                                {`Voy a interrogar al testigo [nombre/rol] en la audiencia.

Basándote en los documentos del caso, generá:

1. 5 preguntas para establecer hechos favorables
2. 3 preguntas de control/verificación
3. 2 preguntas de cierre estratégico

Para cada pregunta, explicame brevemente:
- Qué busco obtener
- Qué hacer si responde de forma desfavorable`}
                            </pre>
                        </div>

                        <h3>Prompt 5: Revisión de escrito</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">PROMPT</div>
                            <pre className="code-block">
                                {`Revisá el borrador de [escrito] que acabo de cargar.

Analizá:
1. COHERENCIA: ¿Los argumentos fluyen lógicamente?
2. PRECISIÓN: ¿Las citas normativas son correctas?
3. OMISIONES: ¿Falta algún argumento importante?
4. VULNERABILIDADES: ¿Qué podría objetar la contraparte?
5. REDACCIÓN: ¿Hay frases confusas o redundantes?

Sé específico: indicá párrafo y sugerencia concreta.`}
                            </pre>
                        </div>
                    </article>
                </section>

                {/* Sección 5: Caso práctico */}
                <section id="caso-practico" className="page__section">
                    <h2 className="page__section-title">5. Caso práctico: Análisis de responsabilidad civil</h2>
                    <article className="long-form-content">
                        <p>
                            Veamos cómo aplicar todo esto en un caso real (adaptado por confidencialidad).
                        </p>

                        <h3>El caso</h3>
                        <div className="case-study-box">
                            <p><strong>Cliente:</strong> María García</p>
                            <p><strong>Contraparte:</strong> Constructora del Sur S.A.</p>
                            <p><strong>Situación:</strong> Compró un departamento en pozo. La constructora entregó 18 meses tarde y con defectos graves de construcción. María reclama daños y perjuicios.</p>
                            <p><strong>Documentos:</strong> Boleto de compraventa, acta de entrega, pericias, intercambio epistolar.</p>
                        </div>

                        <h3>Paso 1: Configuración del proyecto</h3>
                        <pre className="code-block">
                            {`Nombre: [CIVIL] García c/ Constructora Sur - Daños

Custom Instructions:
"Sos mi asistente para un caso de responsabilidad civil 
por incumplimiento contractual en compraventa inmobiliaria.
Jurisdicción: Tribunales civiles de CABA.
Represento a la compradora (actora).
El caso está en etapa de alegatos."`}
                        </pre>

                        <h3>Paso 2: Primera consulta</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">MI PROMPT</div>
                            <pre className="code-block">
                                {`Analizá el boleto de compraventa y el acta de entrega.
Identificá todos los incumplimientos de la constructora
que puedan fundar el reclamo de daños.`}
                            </pre>
                        </div>
                        <div className="prompt-example">
                            <div className="prompt-label">RESPUESTA DE CLAUDE (extracto)</div>
                            <pre className="code-block">
                                {`Identifico los siguientes incumplimientos:

1. MORA EN LA ENTREGA (art. 886 CCCN)
   - Boleto: entrega pactada para 03/2022
   - Acta: entrega efectiva 09/2023 (18 meses de mora)
   - Cláusula 8va del boleto no prevé eximentes

2. VICIOS OCULTOS (arts. 1051-1058 CCCN)
   - Acta menciona "observaciones" firmadas
   - La pericia de parte detalla: filtraciones en baño 
     principal, desprendimiento de revestimientos...

[continúa con análisis detallado]`}
                            </pre>
                        </div>

                        <h3>Paso 3: Desarrollo del trabajo</h3>
                        <p>A partir de este análisis inicial, las conversaciones sucesivas profundizaron en:</p>
                        <ul className="application-list">
                            <li>Cuantificación del daño moral (con jurisprudencia comparable)</li>
                            <li>Estructura del alegato</li>
                            <li>Redacción de cada sección</li>
                            <li>Revisión final antes de presentar</li>
                        </ul>
                        <div className="highlight-success">
                            <strong>Resultado:</strong> El alegato de 25 páginas se preparó en 3 horas de trabajo distribuidas en una semana, en lugar de los 2-3 días que hubiera requerido sin asistencia.
                        </div>
                    </article>
                </section>

                {/* Sección 6: Errores comunes */}
                <section id="errores" className="page__section">
                    <h2 className="page__section-title">6. Errores comunes y cómo evitarlos</h2>
                    <article className="long-form-content">
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Error: Confiar ciegamente</h4>
                                <p>Aceptar citas de artículos o fallos sin verificar. Claude puede "inventar" referencias.</p>
                                <p><strong>Solución:</strong> Siempre verificá cada cita normativa y jurisprudencial en fuentes oficiales.</p>
                            </div>
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Error: Instrucciones vagas</h4>
                                <p>Decir "ayudame con el caso" sin contexto produce respuestas genéricas.</p>
                                <p><strong>Solución:</strong> Sé específico en cada prompt. Indicá qué querés, para qué, con qué límites.</p>
                            </div>
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Error: No actualizar las instrucciones</h4>
                                <p>El caso avanza pero las Custom Instructions siguen hablando de "etapa inicial".</p>
                                <p><strong>Solución:</strong> Actualizá las instrucciones cada vez que el caso cambie de etapa.</p>
                            </div>
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Error: Cargar documentos irrelevantes</h4>
                                <p>Subir 50 documentos "por las dudas" diluye la atención de Claude.</p>
                                <p><strong>Solución:</strong> Solo cargá lo necesario para la tarea actual. Podés agregar más después.</p>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Sección 7: Ejercicio */}
                <section id="ejercicio" className="page__section">
                    <h2 className="page__section-title">7. Ejercicio práctico: Creá tu primer proyecto</h2>
                    <article className="long-form-content">
                        <div className="exercise-box">
                            <h3>🎯 Objetivo</h3>
                            <p>Configurar un proyecto de Claude para un caso real o simulado de tu práctica.</p>

                            <h3>📋 Pasos</h3>
                            <ol className="application-list">
                                <li><strong>Elegí un caso:</strong> Puede ser uno real (sin datos sensibles) o inventado para practicar.</li>
                                <li><strong>Creá el proyecto:</strong> Usá el formato de nombre recomendado.</li>
                                <li><strong>Escribí las Custom Instructions:</strong> Usá el modelo de esta unidad como base, adaptándolo a tu caso.</li>
                                <li><strong>Cargá 2-3 documentos:</strong> Un contrato, un escrito, normativa relevante.</li>
                                <li><strong>Hacé tu primera consulta:</strong> Usá el Prompt 1 (análisis inicial).</li>
                                <li><strong>Evaluá la respuesta:</strong> ¿Fue útil? ¿Qué ajustarías en las instrucciones?</li>
                            </ol>

                            <h3>✅ Criterio de éxito</h3>
                            <p>Lograste el ejercicio si Claude te devuelve un análisis que:</p>
                            <ul className="application-list">
                                <li>Identifica correctamente los hechos relevantes del caso</li>
                                <li>Menciona artículos normativos pertinentes</li>
                                <li>Te ahorra tiempo respecto a hacerlo manualmente</li>
                            </ul>
                        </div>
                    </article>
                </section>

                {/* Sección 8: Checklist */}
                <section id="checklist" className="page__section">
                    <h2 className="page__section-title">8. Checklist de validación</h2>
                    <article className="long-form-content">
                        <p>Usá esta lista cada vez que trabajes con Claude Projects:</p>

                        <div className="checklist-box">
                            <h3>Antes de empezar</h3>
                            <ul className="checklist">
                                <li>☐ El proyecto tiene nombre identificable</li>
                                <li>☐ Las Custom Instructions están actualizadas</li>
                                <li>☐ Los documentos cargados son los relevantes para hoy</li>
                            </ul>

                            <h3>Durante el trabajo</h3>
                            <ul className="checklist">
                                <li>☐ Mis prompts son específicos y tienen contexto</li>
                                <li>☐ Estoy verificando las citas normativas</li>
                                <li>☐ Estoy verificando las referencias jurisprudenciales</li>
                            </ul>

                            <h3>Antes de usar el output</h3>
                            <ul className="checklist">
                                <li>☐ Leí completamente lo que generó Claude</li>
                                <li>☐ Verifiqué que los hechos coinciden con el expediente</li>
                                <li>☐ Adapté el lenguaje a mi estilo personal</li>
                                <li>☐ El resultado no contiene información confidencial expuesta</li>
                            </ul>
                        </div>

                        <blockquote className="concept-quote">
                            Claude es tu asistente, no tu reemplazante. Todo lo que produce debe pasar por tu criterio profesional antes de usarse.
                        </blockquote>
                    </article>
                </section>

                {/* Footer de navegación */}
                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/course-map" className="unit-nav-link">
                            <span className="unit-nav-label">← Volver</span>
                            <span className="unit-nav-title">Mapa del Curso</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/mastering-u2" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Unidad 2 – ChatGPT para análisis jurídico →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MasteringM6U1

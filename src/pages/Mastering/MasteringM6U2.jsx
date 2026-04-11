import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function MasteringM6U2() {
    return (
        <div className="page">
            <PageSEO
                title="ChatGPT para Análisis Jurídico · M6 U2"
                description="Configuración y uso de ChatGPT para analizar contratos, normativa y situaciones jurídicas complejas. ChatGPT vs Claude: cuándo usar cada uno."
                path="/mastering-u2"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 6 · Unidad 2</span>
                <h1 className="page__title">ChatGPT para análisis jurídico</h1>
                <p className="page__description">
                    Cómo configurar y utilizar ChatGPT para analizar contratos, normativa y situaciones jurídicas complejas.
                </p>
            </header>

            <div className="page__content">
                {/* Sección 1: Introducción */}
                <section id="intro" className="page__section">
                    <h2 className="page__section-title">1. ChatGPT vs Claude: ¿cuándo usar cada uno?</h2>
                    <article className="long-form-content">
                        <p>
                            Antes de empezar, es importante entender que ChatGPT y Claude son herramientas <strong>complementarias, no competidoras</strong>. Cada una tiene fortalezas distintas:
                        </p>

                        <div className="comparison-grid">
                            <div className="comparison-box">
                                <h4>🟢 Claude (visto en U1)</h4>
                                <ul>
                                    <li>Mejor para documentos largos y contexto extenso</li>
                                    <li>Projects mantiene memoria entre sesiones</li>
                                    <li>Ideal para gestión integral de casos</li>
                                    <li>Más cuidadoso con precisión</li>
                                </ul>
                            </div>
                            <div className="comparison-box">
                                <h4>🔵 ChatGPT (esta unidad)</h4>
                                <ul>
                                    <li>Custom GPTs personalizados para tareas específicas</li>
                                    <li>Mejor integración con plugins y herramientas</li>
                                    <li>Ideal para análisis rápidos y consultas puntuales</li>
                                    <li>Advanced Data Analysis para documentos</li>
                                </ul>
                            </div>
                        </div>

                        <blockquote className="concept-quote">
                            Un abogado que domina ambas herramientas puede elegir la más adecuada para cada tarea, multiplicando su eficiencia.
                        </blockquote>
                    </article>
                </section>

                {/* Sección 2: Custom GPTs */}
                <section id="custom-gpts" className="page__section">
                    <h2 className="page__section-title">2. Custom GPTs: tu asistente jurídico personalizado</h2>
                    <article className="long-form-content">
                        <h3>¿Qué es un Custom GPT?</h3>
                        <p>
                            Un Custom GPT es una versión personalizada de ChatGPT que <strong>siempre se comporta de la misma manera</strong>. Vos definís:
                        </p>
                        <ul className="application-list">
                            <li><strong>Nombre e identidad:</strong> "Analista de Contratos Comerciales"</li>
                            <li><strong>Instrucciones:</strong> Cómo debe responder, qué enfoque usar</li>
                            <li><strong>Conocimientos:</strong> Documentos que siempre debe tener presentes</li>
                            <li><strong>Capacidades:</strong> Navegación web, análisis de archivos, generación de imágenes</li>
                        </ul>

                        <h3>Paso a paso: Crear tu primer Custom GPT jurídico</h3>

                        <h4>Paso 1: Acceder al creador</h4>
                        <p>En <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer">chat.openai.com</a>, hacé clic en tu perfil → "My GPTs" → "Create a GPT".</p>
                        <div className="highlight-success">
                            <strong>Requisito:</strong> Cuenta ChatGPT Plus ($20/mes) o Team.
                        </div>

                        <h4>Paso 2: Configurar nombre y descripción</h4>
                        <pre className="code-block">
                            {`NOMBRE: Analista de Contratos Comerciales

DESCRIPCIÓN: 
Especialista en análisis de contratos comerciales bajo 
derecho argentino. Identifica cláusulas riesgosas, sugiere 
modificaciones y compara con estándares del mercado.`}
                        </pre>

                        <h4>Paso 3: Escribir las instrucciones</h4>
                        <p>Este es el corazón del Custom GPT. Aquí va un modelo probado:</p>
                        <pre className="code-block">
                            {`INSTRUCCIONES DEL GPT

IDENTIDAD:
Sos un abogado corporativo especializado en contratos 
comerciales argentinos. Tenés 15 años de experiencia 
revisando acuerdos comerciales.

TAREA PRINCIPAL:
Cuando te suban un contrato, debés:
1. Identificar el tipo de contrato y partes involucradas
2. Analizar cada cláusula relevante
3. Detectar riesgos o cláusulas desequilibradas
4. Sugerir modificaciones protectoras para el cliente
5. Comparar con prácticas estándar del mercado

FORMATO DE RESPUESTA:
Estructurá tu análisis así:
- RESUMEN EJECUTIVO (3-4 líneas)
- TABLA DE CLÁUSULAS CRÍTICAS
- ANÁLISIS DETALLADO POR SECCIÓN
- RECOMENDACIONES PRIORIZADAS
- PRÓXIMOS PASOS SUGERIDOS

ESTILO:
- Lenguaje técnico pero accesible
- Sé directo sobre los riesgos
- Proponé alternativas concretas, no solo problemas
- Si algo no está claro en el documento, preguntá

ADVERTENCIAS:
- Siempre aclarás que esto es un análisis preliminar
- Recomendás revisión final por el abogado responsable
- No inventés cláusulas que no existen en el documento`}
                        </pre>

                        <h4>Paso 4: Agregar conocimientos (Knowledge)</h4>
                        <p>Subí documentos que el GPT debe tener siempre presentes:</p>
                        <ul className="application-list">
                            <li>Tu checklist de puntos a revisar en contratos</li>
                            <li>Modelos de cláusulas que preferís</li>
                            <li>Legislación relevante (CCCN, normas específicas)</li>
                            <li>Jurisprudencia sobre interpretación contractual</li>
                        </ul>

                        <h4>Paso 5: Configurar capacidades</h4>
                        <ul className="application-list">
                            <li>✅ <strong>Code Interpreter:</strong> Activo (para analizar PDFs y docs)</li>
                            <li>⚠️ <strong>Web Browsing:</strong> Opcional (útil para verificar normativa vigente)</li>
                            <li>❌ <strong>DALL-E:</strong> No necesario para trabajo jurídico</li>
                        </ul>
                    </article>
                </section>

                {/* Sección 3: Análisis de contratos */}
                <section id="contratos" className="page__section">
                    <h2 className="page__section-title">3. Análisis de contratos: metodología práctica</h2>
                    <article className="long-form-content">
                        <p>
                            Veamos cómo usar ChatGPT para analizar un contrato de manera sistemática.
                        </p>

                        <h3>Prompt 1: Primera lectura estructurada</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">PROMPT INICIAL</div>
                            <pre className="code-block">
                                {`Analizá el contrato adjunto y dame:

1. IDENTIFICACIÓN
   - Tipo de contrato
   - Partes (con sus roles)
   - Objeto principal
   - Plazo y condiciones de vigencia

2. MAPA DE OBLIGACIONES
   - Qué debe hacer cada parte
   - Cuándo debe hacerlo
   - Consecuencias de incumplimiento

3. DISTRIBUCIÓN DE RIESGOS
   - Quién asume qué riesgos
   - Cláusulas de limitación de responsabilidad
   - Garantías y seguros

4. BANDERAS ROJAS (si las hay)
   - Cláusulas inusuales
   - Desequilibrios evidentes
   - Ambigüedades peligrosas`}
                            </pre>
                        </div>

                        <h3>Prompt 2: Análisis de cláusula específica</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">PROMPT</div>
                            <pre className="code-block">
                                {`La cláusula [X] del contrato dice:
"[copiar texto exacto]"

Analizá esta cláusula considerando:
1. ¿Es válida bajo derecho argentino?
2. ¿Beneficia más a una parte que a otra?
3. ¿Hay jurisprudencia relevante?
4. ¿Cómo se interpretaría en caso de conflicto?
5. Sugerí redacción alternativa más equilibrada.`}
                            </pre>
                        </div>

                        <h3>Prompt 3: Comparación con estándar del mercado</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">PROMPT</div>
                            <pre className="code-block">
                                {`En contratos de [tipo] en Argentina, ¿es habitual que:

1. El plazo sea de [X]? 
2. La cláusula penal sea del [X]%?
3. La garantía cubra [X]?
4. La jurisdicción sea [X]?

Comparalo con lo que viste en el contrato analizado
y decime si estamos dentro del estándar de mercado
o si hay desviaciones que debería negociar.`}
                            </pre>
                        </div>

                        <h3>Prompt 4: Generación de contrapropuesta</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">PROMPT</div>
                            <pre className="code-block">
                                {`Basándote en tu análisis, generá un documento de 
"Observaciones y Propuestas de Modificación" que incluya:

FORMATO:
| Cláusula | Texto actual | Observación | Texto propuesto |

Incluí solo las cláusulas que ameriten modificación.
Priorizá por nivel de riesgo (alto → medio → bajo).
Explicá brevemente por qué cada cambio es necesario.`}
                            </pre>
                        </div>
                    </article>
                </section>

                {/* Sección 4: Análisis normativo */}
                <section id="normativo" className="page__section">
                    <h2 className="page__section-title">4. Análisis normativo: descomponer leyes y regulaciones</h2>
                    <article className="long-form-content">
                        <p>
                            ChatGPT es particularmente útil para "desempacar" normativa compleja y entender sus implicancias.
                        </p>

                        <h3>Prompt 1: Explicación de artículo</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">PROMPT</div>
                            <pre className="code-block">
                                {`El artículo [X] de la ley [Y] dice:
"[texto del artículo]"

Explicame:
1. ¿Qué regula exactamente (supuesto de hecho)?
2. ¿Cuál es la consecuencia jurídica?
3. ¿A quién aplica y a quién no?
4. ¿Hay excepciones o casos especiales?
5. ¿Cómo se relaciona con otros artículos?

Usá ejemplos concretos para ilustrar.`}
                            </pre>
                        </div>

                        <h3>Prompt 2: Aplicación a caso concreto</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">PROMPT</div>
                            <pre className="code-block">
                                {`SITUACIÓN DE HECHO:
[Describir los hechos del caso]

NORMATIVA APLICABLE:
[Lista de artículos/leyes relevantes]

PREGUNTAS:
1. ¿La situación encuadra en el supuesto normativo?
2. ¿Qué consecuencias legales se derivan?
3. ¿Hay argumentos para una interpretación alternativa?
4. ¿Qué prueba sería necesaria para acreditar [X]?`}
                            </pre>
                        </div>

                        <h3>Prompt 3: Evolución normativa</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">PROMPT</div>
                            <pre className="code-block">
                                {`Necesito entender cómo evolucionó la regulación de [tema]:

1. ¿Cómo se regulaba antes del CCCN (2015)?
2. ¿Qué cambió con el nuevo código?
3. ¿Hay decretos reglamentarios o resoluciones?
4. ¿Hay proyectos de reforma en discusión?

Hacé una línea de tiempo con los hitos principales.`}
                            </pre>
                        </div>

                        <div className="highlight-warning">
                            <strong>Advertencia crítica:</strong> ChatGPT puede "alucinar" artículos o inventar normativa que no existe. SIEMPRE verificá las citas en fuentes oficiales (InfoLeg, SAIJ, boletín oficial).
                        </div>
                    </article>
                </section>

                {/* Sección 5: Caso práctico */}
                <section id="caso-practico" className="page__section">
                    <h2 className="page__section-title">5. Caso práctico: Análisis de contrato de franquicia</h2>
                    <article className="long-form-content">
                        <div className="case-study-box">
                            <p><strong>Situación:</strong> Un cliente quiere abrir una franquicia de una cadena gastronómica. Le enviaron el contrato de franquicia (45 páginas). Tenés 2 horas para dar una opinión preliminar.</p>
                        </div>

                        <h3>Paso 1: Custom GPT preparado</h3>
                        <p>
                            Antes de empezar, ya tengo un GPT llamado "Analista de Franquicias" con instrucciones específicas y la Ley de Franquicias (27.545) cargada en Knowledge.
                        </p>

                        <h3>Paso 2: Primera pasada</h3>
                        <pre className="code-block">
                            {`MI PROMPT:
"Analizo un contrato de franquicia gastronómica.
El cliente será franquiciado. 
Subí el PDF del contrato.
Dame un análisis inicial enfocado en:
- Cumplimiento de la ley 27.545
- Cláusulas que más favorecen al franquiciante
- Obligaciones económicas totales del franquiciado
- Plazos y condiciones de salida"

RESPUESTA DE CHATGPT (extracto):
"ANÁLISIS PRELIMINAR - CONTRATO DE FRANQUICIA

📋 CUMPLIMIENTO LEY 27.545:
✅ El contrato incluye la información precontractual 
   requerida por art. 4
⚠️ El plazo de reflexión de 30 días (art. 5) no está
   explícitamente garantizado
❌ No se indica antigüedad mínima del franquiciante
   (art. 4 inc. b)

💰 OBLIGACIONES ECONÓMICAS:
- Canon inicial: USD 35.000
- Regalía mensual: 5% de facturación bruta
- Fondo de publicidad: 2% adicional
- Inversión estimada: USD 180.000-220.000
- TOTAL PRIMER AÑO: ~USD 280.000

[continúa análisis detallado...]"`}
                        </pre>

                        <h3>Paso 3: Profundizar en riesgos</h3>
                        <pre className="code-block">
                            {`MI PROMPT:
"Identificaste que el plazo de reflexión no está 
garantizado. ¿Qué implicancias tiene?
¿Podría el cliente invocar nulidad si no se cumplió?
Dame argumentos a favor y en contra."

RESPUESTA:
"ANÁLISIS DE INCUMPLIMIENTO DEL PLAZO DE REFLEXIÓN

ARGUMENTO A FAVOR DE NULIDAD:
El art. 5 de la ley 27.545 establece que el 
potencial franquiciado debe tener 30 días desde
la entrega de la información precontractual...

ARGUMENTO EN CONTRA:
Sin embargo, la jurisprudencia ha considerado que
este plazo no es de orden público absoluto y que
si el franquiciado firmó voluntariamente...

RECOMENDACIÓN:
Antes de firmar, enviar carta documento solicitando
expresamente el cumplimiento del plazo legal..."`}
                        </pre>

                        <h3>Paso 4: Documento de negociación</h3>
                        <pre className="code-block">
                            {`MI PROMPT:
"Generame un documento 'Observaciones al Contrato de 
Franquicia' para enviar al franquiciante.

Tono: profesional pero firme.
Extensión: máximo 3 páginas.
Incluí las 5 modificaciones más importantes que 
debería negociar el cliente."

[ChatGPT genera documento listo para revisar y enviar]`}
                        </pre>

                        <div className="highlight-success">
                            <strong>Resultado:</strong> En 1.5 horas, tenía un análisis completo, identificación de riesgos, y un borrador de documento de negociación. El cliente recibió una opinión fundada antes de su reunión con el franquiciante.
                        </div>
                    </article>
                </section>

                {/* Sección 6: Errores comunes */}
                <section id="errores" className="page__section">
                    <h2 className="page__section-title">6. Errores comunes y cómo evitarlos</h2>
                    <article className="long-form-content">
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Error: Aceptar citas sin verificar</h4>
                                <p>ChatGPT inventa artículos, fechas de fallos y hasta nombres de jueces.</p>
                                <p><strong>Solución:</strong> Verificá TODA cita en InfoLeg o SAIJ antes de usarla.</p>
                            </div>
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Error: Subir contratos con datos reales</h4>
                                <p>Los datos van a los servidores de OpenAI.</p>
                                <p><strong>Solución:</strong> Anonimizá: "Empresa A", "Sr. X", "Ciudad Y".</p>
                            </div>
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Error: Esperar que conozca normativa reciente</h4>
                                <p>El conocimiento de ChatGPT tiene fecha de corte.</p>
                                <p><strong>Solución:</strong> Para normativa nueva, pegá el texto o usá Web Browsing.</p>
                            </div>
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Error: Prompts genéricos</h4>
                                <p>"Analizá este contrato" da resultados superficiales.</p>
                                <p><strong>Solución:</strong> Sé específico: qué querés, para qué, en qué formato.</p>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Sección 7: Ejercicio */}
                <section id="ejercicio" className="page__section">
                    <h2 className="page__section-title">7. Ejercicio: Creá tu Custom GPT jurídico</h2>
                    <article className="long-form-content">
                        <div className="exercise-box">
                            <h3>🎯 Objetivo</h3>
                            <p>Crear un Custom GPT especializado en tu área de práctica.</p>

                            <h3>📋 Pasos</h3>
                            <ol className="application-list">
                                <li><strong>Elegí tu especialidad:</strong> Contratos, laboral, familia, penal, etc.</li>
                                <li><strong>Definí la tarea principal:</strong> ¿Qué vas a pedirle frecuentemente?</li>
                                <li><strong>Escribí las instrucciones:</strong> Usá la estructura de esta unidad.</li>
                                <li><strong>Cargá normativa relevante:</strong> Leyes, decretos, resoluciones.</li>
                                <li><strong>Probalo con un caso real:</strong> (anonimizado).</li>
                                <li><strong>Iterá:</strong> Ajustá las instrucciones según los resultados.</li>
                            </ol>

                            <h3>💡 Ideas de Custom GPTs útiles</h3>
                            <ul className="application-list">
                                <li><strong>Revisor de Demandas:</strong> Verifica requisitos formales antes de presentar</li>
                                <li><strong>Calculador de Indemnizaciones:</strong> Estima montos según jurisprudencia</li>
                                <li><strong>Asistente de Due Diligence:</strong> Checklist para revisión societaria</li>
                                <li><strong>Redactor de Contratos:</strong> Genera borradores desde especificaciones</li>
                            </ul>

                            <h3>✅ Criterio de éxito</h3>
                            <p>Tu GPT te ahorra tiempo en una tarea que hacés habitualmente.</p>
                        </div>
                    </article>
                </section>

                {/* Sección 8: Checklist */}
                <section id="checklist" className="page__section">
                    <h2 className="page__section-title">8. Checklist de trabajo con ChatGPT</h2>
                    <article className="long-form-content">
                        <div className="checklist-box">
                            <h3>Antes de empezar</h3>
                            <ul className="checklist">
                                <li>☐ Anonimicé datos sensibles del documento</li>
                                <li>☐ Tengo claro qué quiero obtener</li>
                                <li>☐ Elegí el Custom GPT adecuado (o uso el base)</li>
                            </ul>

                            <h3>Durante el análisis</h3>
                            <ul className="checklist">
                                <li>☐ Mis prompts son específicos y contextualizados</li>
                                <li>☐ Pido que cite fuentes cuando corresponde</li>
                                <li>☐ Hago preguntas de seguimiento si algo no queda claro</li>
                            </ul>

                            <h3>Antes de usar el output</h3>
                            <ul className="checklist">
                                <li>☐ Verifiqué TODAS las citas normativas en fuentes oficiales</li>
                                <li>☐ Verifiqué referencias jurisprudenciales</li>
                                <li>☐ Confirmé que los hechos del análisis coinciden con el caso</li>
                                <li>☐ Adapté el texto a mi estilo y al del cliente</li>
                                <li>☐ Eliminé cualquier advertencia genérica de la IA</li>
                            </ul>
                        </div>

                        <blockquote className="concept-quote">
                            ChatGPT es un excelente primer analista, pero vos sos el abogado responsable. Todo lo que produce debe pasar por tu criterio antes de entregarse al cliente.
                        </blockquote>
                    </article>
                </section>

                {/* Footer de navegación */}
                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/mastering" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M6 U1: Claude Projects</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <span className="next-title" style={{ color: '#aaa' }}>
                            Unidad 3 – Perplexity/Manus para investigación
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MasteringM6U2

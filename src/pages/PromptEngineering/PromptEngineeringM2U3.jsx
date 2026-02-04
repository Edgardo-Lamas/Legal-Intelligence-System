import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'

function PromptEngineeringM2U3() {
    return (
        <div className="page">
            <header className="page__header">
                <span className="page__module-tag">Módulo 2 · Unidad 3</span>
                <h1 className="page__title">Filtrado de jurisprudencia y doctrina</h1>
                <p className="page__description">
                    Cómo usar ChatGPT para extraer criterios relevantes, comparar fallos y detectar líneas jurisprudenciales.
                </p>
            </header>

            <div className="page__content">
                {/* Sección 1: Introducción */}
                <section id="intro" className="page__section">
                    <h2 className="page__section-title">1. El problema: demasiada información, poco tiempo</h2>
                    <article className="long-form-content">
                        <p>
                            Como abogado te enfrentás constantemente a este escenario: tenés una causa y necesitás jurisprudencia que la respalde. Buscás en SAIJ, La Ley o El Derecho y encontrás <strong>50 fallos</strong>. ¿Cuáles son realmente útiles?
                        </p>

                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Sin IA</h4>
                                <p>Leés cada fallo, subrayás, tomás notas. Tardás 4-6 horas. Al final no estás seguro de haber encontrado el mejor.</p>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>✅ Con IA bien usada</h4>
                                <p>Filtrás, comparás y extraés criterios de 20 fallos en 1 hora. Identificás los 3 más relevantes para tu caso.</p>
                            </div>
                        </div>

                        <blockquote className="concept-quote">
                            La IA no reemplaza tu criterio jurídico. Te da más tiempo para ejercerlo sobre material ya filtrado.
                        </blockquote>
                    </article>
                </section>

                {/* Sección 2: Metodología */}
                <section id="metodologia" className="page__section">
                    <h2 className="page__section-title">2. Metodología de filtrado en 4 pasos</h2>
                    <article className="long-form-content">
                        <p>
                            Esta es la metodología probada para procesar grandes volúmenes de jurisprudencia:
                        </p>

                        <div className="component-card">
                            <div className="component-number">1</div>
                            <div className="component-content">
                                <h4>Paso 1: Extracción de datos básicos</h4>
                                <p>Para cada fallo, extraer: tribunal, fecha, carátula, objeto del litigio y palabras clave.</p>
                            </div>
                        </div>

                        <div className="component-card">
                            <div className="component-number">2</div>
                            <div className="component-content">
                                <h4>Paso 2: Identificación de la ratio decidendi</h4>
                                <p>El criterio jurídico central que sostiene la decisión. Esto es lo que vas a citar.</p>
                            </div>
                        </div>

                        <div className="component-card">
                            <div className="component-number">3</div>
                            <div className="component-content">
                                <h4>Paso 3: Clasificación por relevancia</h4>
                                <p>¿Qué tan aplicable es a tu caso? Directamente aplicable, análogo, o solo contextual.</p>
                            </div>
                        </div>

                        <div className="component-card">
                            <div className="component-number">4</div>
                            <div className="component-content">
                                <h4>Paso 4: Detección de líneas y contradicciones</h4>
                                <p>¿Hay una tendencia clara? ¿Hay fallos que contradigan tu posición?</p>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Sección 3: Prompts de extracción */}
                <section id="extraccion" className="page__section">
                    <h2 className="page__section-title">3. Prompts para extracción de criterios</h2>
                    <article className="long-form-content">
                        <h3>Prompt 1: Ficha técnica del fallo</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">PROMPT</div>
                            <pre className="code-block">
                                {`Actuás como abogado especializado en [materia].

Del siguiente fallo, extraé una ficha técnica con:

1. DATOS FORMALES
   - Tribunal
   - Fecha
   - Carátula/Autos
   - Tipo de proceso

2. CUESTIÓN JURÍDICA
   - Objeto del litigio
   - Pretensión de las partes
   - Cuestión central a resolver

3. RATIO DECIDENDI
   - El criterio jurídico central que sostiene la decisión
   - Citá textualmente el párrafo más relevante

4. OBITER DICTA
   - Consideraciones accesorias que podrían ser útiles

5. NORMATIVA APLICADA
   - Artículos citados y cómo los interpreta

[Pegar texto del fallo]`}
                            </pre>
                        </div>

                        <h3>Prompt 2: Detección de criterio aplicable</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">PROMPT</div>
                            <pre className="code-block">
                                {`Mi caso tiene estas características:
[Describir brevemente los hechos y pretensión]

Del fallo que te paso, identificá:

1. ¿El supuesto de hecho es similar al mío?
   - ¿En qué coincide?
   - ¿En qué difiere?

2. ¿El criterio jurídico es directamente aplicable?
   - Si es aplicable: ¿qué parte puedo citar?
   - Si no es aplicable: ¿por qué no?

3. Clasificación:
   - A: Directamente aplicable (mismos hechos, mismo criterio)
   - B: Análogo (hechos similares, principio trasladable)
   - C: Contextual (útil para entender la doctrina)
   - D: Contradictorio (la contraparte podría usarlo)

[Pegar texto del fallo]`}
                            </pre>
                        </div>

                        <h3>Prompt 3: Comparación de fallos</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">PROMPT</div>
                            <pre className="code-block">
                                {`Compará los siguientes fallos e identificá:

1. COINCIDENCIAS
   - ¿Aplican el mismo criterio jurídico?
   - ¿Interpretan la normativa de forma similar?

2. DIFERENCIAS
   - ¿Hay criterios contradictorios?
   - ¿Se distinguen por los hechos o por el derecho?

3. EVOLUCIÓN
   - ¿Hay un cambio de criterio en el tiempo?
   - ¿Alguno es más reciente y podría indicar tendencia?

4. SÍNTESIS
   - Resumí la línea jurisprudencial en 2-3 oraciones

FALLO 1:
[Pegar fallo 1]

FALLO 2:
[Pegar fallo 2]

FALLO 3 (opcional):
[Pegar fallo 3]`}
                            </pre>
                        </div>
                    </article>
                </section>

                {/* Sección 4: Filtrado masivo */}
                <section id="filtrado-masivo" className="page__section">
                    <h2 className="page__section-title">4. Filtrado masivo: procesar muchos fallos rápido</h2>
                    <article className="long-form-content">
                        <p>
                            Cuando tenés muchos fallos, no podés analizarlos uno por uno en profundidad. Necesitás un proceso de <strong>filtrado progresivo</strong>:
                        </p>

                        <h3>Fase 1: Filtro rápido (descarte)</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">PROMPT</div>
                            <pre className="code-block">
                                {`De estos fallos, haceme un listado rápido con:
- Carátula
- Tribunal y fecha
- Tema principal (1 línea)
- Relevancia estimada para [mi tema]: Alta/Media/Baja

Marcá cuáles debería leer completos.

[Pegar sumarios o extractos de varios fallos]`}
                            </pre>
                        </div>

                        <h3>Fase 2: Análisis detallado (solo los relevantes)</h3>
                        <p>Con los fallos marcados como "Alta relevancia", usás los prompts de la sección anterior.</p>

                        <h3>Fase 3: Matriz comparativa</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">PROMPT</div>
                            <pre className="code-block">
                                {`Con los fallos que analicé, armá una matriz comparativa:

| Fallo | Tribunal | Año | Criterio | Aplicabilidad |
|-------|----------|-----|----------|---------------|
|       |          |     |          |               |

Al final, indicá:
1. Cuál es el fallo más relevante para mi caso
2. Si hay una línea jurisprudencial consolidada
3. Si hay contradicciones que debo anticipar`}
                            </pre>
                        </div>

                        <div className="highlight-success">
                            <strong>Resultado típico:</strong> De 30 fallos, identificás 5 realmente relevantes, 2 directamente citables, y 1 posible contraargumento que debés anticipar.
                        </div>
                    </article>
                </section>

                {/* Sección 5: Doctrina */}
                <section id="doctrina" className="page__section">
                    <h2 className="page__section-title">5. Filtrado de doctrina: diferencias con jurisprudencia</h2>
                    <article className="long-form-content">
                        <p>
                            La doctrina requiere un enfoque diferente: no buscás una decisión, buscás <strong>argumentos y fundamentos</strong>.
                        </p>

                        <h3>Prompt para análisis de artículo doctrinal</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">PROMPT</div>
                            <pre className="code-block">
                                {`Analizá este artículo de doctrina jurídica:

1. TESIS PRINCIPAL
   - ¿Qué posición sostiene el autor?
   - ¿Es mayoritaria, minoritaria o innovadora?

2. ARGUMENTOS CLAVE
   - Listá los 3-5 argumentos principales
   - ¿Se basan en texto legal, principios o comparado?

3. CRÍTICAS O CONTRAARGUMENTOS
   - ¿El autor menciona posiciones contrarias?
   - ¿Cómo las refuta?

4. UTILIDAD PRÁCTICA
   - ¿Puedo citar esto en un escrito judicial?
   - ¿Qué párrafo es más citable?

5. DATOS BIBLIOGRÁFICOS
   - Autor, título, publicación, año

[Pegar texto del artículo]`}
                            </pre>
                        </div>

                        <h3>Mapa de posiciones doctrinales</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">PROMPT</div>
                            <pre className="code-block">
                                {`Sobre el tema [X], necesito mapear las posiciones:

1. POSICIÓN CLÁSICA/TRADICIONAL
   - ¿Qué sostiene?
   - ¿Quiénes son sus exponentes?

2. POSICIÓN MODERNA/ACTUALIZADA
   - ¿Qué cambió?
   - ¿Quiénes la sostienen?

3. POSICIONES MINORITARIAS
   - ¿Hay posturas innovadoras o críticas?

4. TENDENCIA ACTUAL
   - ¿Hacia dónde va la doctrina mayoritaria?

Basate en los artículos que te paso.
[Pegar varios artículos o extractos]`}
                            </pre>
                        </div>
                    </article>
                </section>

                {/* Sección 6: Caso práctico */}
                <section id="caso-practico" className="page__section">
                    <h2 className="page__section-title">6. Caso práctico: Preparar escrito con jurisprudencia</h2>
                    <article className="long-form-content">
                        <div className="case-study-box">
                            <p><strong>Situación:</strong> Representás al empleado en un despido discriminatorio por razones de salud. Necesitás jurisprudencia que respalde la nulidad del despido.</p>
                            <p><strong>Material inicial:</strong> 25 fallos de una búsqueda en bases de datos.</p>
                        </div>

                        <h3>Paso 1: Filtro rápido</h3>
                        <pre className="code-block">
                            {`MI PROMPT:
"De estos 25 sumarios sobre despido discriminatorio,
clasificalos por relevancia para un caso de discriminación
por enfermedad. Marcame los 5 más relevantes."

RESULTADO:
Alta relevancia (leer completos):
1. "Pellicori c/ Colegio" - CSJN 2011 - Carga probatoria
2. "Álvarez c/ Cencosud" - CSJN 2010 - Nulidad despido
3. [otros 3 fallos]

Media relevancia: [8 fallos]
Baja relevancia (descartar): [12 fallos]`}
                        </pre>

                        <h3>Paso 2: Análisis detallado</h3>
                        <pre className="code-block">
                            {`MI PROMPT (para cada fallo relevante):
"Analizá 'Pellicori' - CSJN 2011 y decime:
1. ¿Qué criterio sobre carga probatoria establece?
2. ¿Cómo aplica a un caso de enfermedad?
3. ¿Qué párrafo debo citar textualmente?

RESULTADO:
"En 'Pellicori', la CSJN estableció que cuando el 
trabajador acredita hechos que prima facie permiten
presumir discriminación, la carga de la prueba se
desplaza al empleador...

Párrafo citable: [cita textual del fallo]"`}
                        </pre>

                        <h3>Paso 3: Estructura para el escrito</h3>
                        <pre className="code-block">
                            {`MI PROMPT:
"Con los 5 fallos analizados, armame la estructura 
de un capítulo de 'Jurisprudencia aplicable' para
mi demanda. Organizalo lógicamente."

RESULTADO:
"1. Doctrina 'Pellicori': carga probatoria dinámica
2. Doctrina 'Álvarez': nulidad del despido discriminatorio
3. Aplicación a casos de enfermedad: [fallos específicos]
4. Jurisprudencia de Cámara que confirma la tendencia"`}
                        </pre>

                        <div className="highlight-success">
                            <strong>Tiempo total:</strong> 1.5 horas desde 25 fallos hasta estructura de escrito con citas verificadas.
                        </div>
                    </article>
                </section>

                {/* Sección 7: Errores comunes */}
                <section id="errores" className="page__section">
                    <h2 className="page__section-title">7. Errores comunes en filtrado jurisprudencial</h2>
                    <article className="long-form-content">
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Citar sin leer el fallo completo</h4>
                                <p>La IA puede malinterpretar o extraer de contexto.</p>
                                <p><strong>Solución:</strong> SIEMPRE leé el fallo original antes de citar.</p>
                            </div>
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Ignorar los fallos adversos</h4>
                                <p>La contraparte los va a encontrar.</p>
                                <p><strong>Solución:</strong> Pedí que identifique fallos que contradigan tu posición.</p>
                            </div>
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ No verificar vigencia del criterio</h4>
                                <p>Un fallo de 2005 puede haber sido superado.</p>
                                <p><strong>Solución:</strong> Verificá si hay jurisprudencia posterior.</p>
                            </div>
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Confiar en fallos inventados</h4>
                                <p>ChatGPT puede "alucinar" carátulas o fechas.</p>
                                <p><strong>Solución:</strong> Verificá cada fallo en SAIJ o la base original.</p>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Sección 8: Checklist */}
                <section id="checklist" className="page__section">
                    <h2 className="page__section-title">8. Checklist de filtrado jurisprudencial</h2>
                    <article className="long-form-content">
                        <div className="checklist-box">
                            <h3>Antes del filtrado</h3>
                            <ul className="checklist">
                                <li>☐ Definí claramente qué tipo de criterio buscás</li>
                                <li>☐ Tengo los fallos en texto (no solo sumarios)</li>
                                <li>☐ Sé cuál es mi tesis a sostener</li>
                            </ul>

                            <h3>Durante el filtrado</h3>
                            <ul className="checklist">
                                <li>☐ Usé prompts específicos, no genéricos</li>
                                <li>☐ Clasifiqué por relevancia (A/B/C/D)</li>
                                <li>☐ Identifiqué ratio decidendi de cada fallo relevante</li>
                                <li>☐ Busqué potenciales contraargumentos</li>
                            </ul>

                            <h3>Antes de citar</h3>
                            <ul className="checklist">
                                <li>☐ Leí el fallo completo en fuente original</li>
                                <li>☐ Verifiqué carátula, tribunal y fecha</li>
                                <li>☐ Confirmé que la cita textual es correcta</li>
                                <li>☐ Verifiqué que no hay jurisprudencia posterior que lo contradiga</li>
                            </ul>
                        </div>

                        <blockquote className="concept-quote">
                            La IA filtra y organiza. Vos validás y decidís qué usar. El criterio jurídico sigue siendo tuyo.
                        </blockquote>
                    </article>
                </section>

                {/* Footer de navegación */}
                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/prompt-engineering-u2" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M2 U2: Control de contexto</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/prompt-engineering-u4" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Unidad 4 – Redacción jurídica asistida →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PromptEngineeringM2U3

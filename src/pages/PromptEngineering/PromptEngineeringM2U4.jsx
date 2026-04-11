import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function PromptEngineeringM2U4() {
    return (
        <div className="page">
            <PageSEO
                title="Redacción Jurídica Asistida · M2 U4"
                description="Cómo usar ChatGPT para redactar demandas, contratos, dictámenes y escritos procesales manteniendo control profesional."
                path="/prompt-engineering-u4"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 2 · Unidad 4</span>
                <h1 className="page__title">Redacción jurídica asistida</h1>
                <p className="page__description">
                    Cómo usar ChatGPT para redactar demandas, contratos, dictámenes y escritos procesales manteniendo control profesional.
                </p>
            </header>

            <div className="page__content">
                {/* Sección 1: Introducción */}
                <section id="intro" className="page__section">
                    <h2 className="page__section-title">1. La paradoja de la redacción con IA</h2>
                    <article className="long-form-content">
                        <p>
                            La redacción es donde la IA puede ayudar más... y donde puede causar más daño. ¿Por qué?
                        </p>

                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--good">
                                <h4>✅ Lo que la IA hace bien</h4>
                                <ul>
                                    <li>Estructura documentos rápidamente</li>
                                    <li>Mantiene coherencia en textos largos</li>
                                    <li>Sugiere argumentos que no habías considerado</li>
                                    <li>Adapta el tono según el destinatario</li>
                                </ul>
                            </div>
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Lo que la IA hace mal</h4>
                                <ul>
                                    <li>Inventa artículos o jurisprudencia</li>
                                    <li>Usa fórmulas genéricas que no aplican</li>
                                    <li>Omite elementos formales obligatorios</li>
                                    <li>No conoce los usos de tu jurisdicción</li>
                                </ul>
                            </div>
                        </div>

                        <blockquote className="concept-quote">
                            La IA es un excelente primer borrador. Pero entre el borrador y el escrito final, está tu criterio profesional.
                        </blockquote>
                    </article>
                </section>

                {/* Sección 2: Metodología */}
                <section id="metodologia" className="page__section">
                    <h2 className="page__section-title">2. Metodología de redacción asistida</h2>
                    <article className="long-form-content">
                        <p>
                            La clave para usar IA en redacción jurídica es <strong>no pedirle el documento completo de una vez</strong>. Usá un proceso por etapas:
                        </p>

                        <div className="component-card">
                            <div className="component-number">1</div>
                            <div className="component-content">
                                <h4>Etapa 1: Definir la estructura</h4>
                                <p>Antes de redactar, pedí que proponga la estructura del documento.</p>
                            </div>
                        </div>

                        <div className="component-card">
                            <div className="component-number">2</div>
                            <div className="component-content">
                                <h4>Etapa 2: Desarrollar sección por sección</h4>
                                <p>Redactá cada sección por separado. Esto te da más control y permite ajustes.</p>
                            </div>
                        </div>

                        <div className="component-card">
                            <div className="component-number">3</div>
                            <div className="component-content">
                                <h4>Etapa 3: Verificar elementos formales</h4>
                                <p>Revisá que estén todos los requisitos legales y procesales.</p>
                            </div>
                        </div>

                        <div className="component-card">
                            <div className="component-number">4</div>
                            <div className="component-content">
                                <h4>Etapa 4: Validar citas y referencias</h4>
                                <p>Verificá TODA cita a normativa, doctrina o jurisprudencia.</p>
                            </div>
                        </div>

                        <div className="component-card">
                            <div className="component-number">5</div>
                            <div className="component-content">
                                <h4>Etapa 5: Adaptar al estilo propio</h4>
                                <p>Ajustá el texto a tu forma de escribir y al tono esperado.</p>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Sección 3: Demandas */}
                <section id="demandas" className="page__section">
                    <h2 className="page__section-title">3. Redacción de demandas</h2>
                    <article className="long-form-content">
                        <h3>Prompt 1: Estructura de demanda</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">PROMPT</div>
                            <pre className="code-block">
                                {`Actuás como abogado litigante en Argentina.

Tengo que redactar una demanda de [tipo] ante 
[tribunal/fuero] de [jurisdicción].

Antes de redactar, proponé la estructura completa
que debería tener, incluyendo:

1. Requisitos formales (art. 330 CPCCN o equivalente)
2. Capítulos del escrito
3. Orden lógico de los argumentos
4. Elementos de prueba a ofrecer

DATOS DEL CASO:
- Partes: [actor vs demandado]
- Objeto: [qué se reclama]
- Hechos resumidos: [breve descripción]
- Normativa aplicable: [leyes relevantes]`}
                            </pre>
                        </div>

                        <h3>Prompt 2: Redacción de hechos</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">PROMPT</div>
                            <pre className="code-block">
                                {`Redactá el capítulo de HECHOS para la demanda.

Estructura requerida:
1. Comenzá presentando las partes y la relación 
   jurídica que las vincula
2. Narrá los hechos en orden cronológico
3. Destacá los hechos jurídicamente relevantes
4. Terminá con el perjuicio o daño sufrido

Estilo: formal pero claro, sin adjetivos innecesarios.
Extensión: [aproximada]

HECHOS DEL CASO:
[Pegar la narrativa de lo que pasó]`}
                            </pre>
                        </div>

                        <h3>Prompt 3: Fundamentos de derecho</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">PROMPT</div>
                            <pre className="code-block">
                                {`Redactá el capítulo de DERECHO para esta demanda.

Incluí:
1. Marco normativo aplicable (leyes, artículos)
2. Subsunción de los hechos en las normas
3. Jurisprudencia que respalde la pretensión
4. Doctrina relevante (si corresponde)

IMPORTANTE:
- Solo citá normativa que esté vigente
- Si citás jurisprudencia, dame datos completos
- No inventes fallos: si no conocés, decilo

Basate en estos fundamentos:
[Explicar la teoría jurídica del caso]`}
                            </pre>
                        </div>

                        <div className="highlight-warning">
                            <strong>Advertencia:</strong> SIEMPRE verificá que los artículos citados existan, estén vigentes y digan lo que la IA afirma que dicen.
                        </div>
                    </article>
                </section>

                {/* Sección 4: Contratos */}
                <section id="contratos" className="page__section">
                    <h2 className="page__section-title">4. Redacción de contratos</h2>
                    <article className="long-form-content">
                        <h3>Prompt 1: Estructura inicial</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">PROMPT</div>
                            <pre className="code-block">
                                {`Necesito redactar un contrato de [tipo] bajo 
derecho argentino.

PARTES:
- [Parte A]: [descripción]
- [Parte B]: [descripción]

OBJETO: [qué se contrata]

Antes de redactar, listame:
1. Cláusulas esenciales que debe tener
2. Cláusulas recomendables para este tipo
3. Cláusulas opcionales según la negociación
4. Riesgos típicos a cubrir con cláusulas específicas

Indicá qué artículos del CCCN aplican.`}
                            </pre>
                        </div>

                        <h3>Prompt 2: Cláusula específica</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">PROMPT</div>
                            <pre className="code-block">
                                {`Redactá una cláusula de [tipo de cláusula] para 
este contrato de [tipo].

Considerá:
- Jurisdicción: Argentina
- Que proteja principalmente a [qué parte]
- Que sea equilibrada / agresiva / estándar
- Que cubra estos riesgos: [listar riesgos]

CONTEXTO DEL CONTRATO:
[Breve descripción de la relación contractual]

Dame 2-3 alternativas con distinto nivel de 
protección y explicá las diferencias.`}
                            </pre>
                        </div>

                        <h3>Prompt 3: Revisión de contrato existente</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">PROMPT</div>
                            <pre className="code-block">
                                {`Revisá este contrato que me envió la contraparte.

Soy [qué parte represento].

Identificá:
1. Cláusulas que me perjudican
2. Cláusulas faltantes que debería agregar
3. Cláusulas ambiguas que podrían interpretarse
   en mi contra
4. Propuestas de modificación concretas

Formato: tabla con columna de cláusula actual,
problema detectado, y texto sugerido.

[Pegar el contrato]`}
                            </pre>
                        </div>
                    </article>
                </section>

                {/* Sección 5: Dictámenes */}
                <section id="dictamenes" className="page__section">
                    <h2 className="page__section-title">5. Redacción de dictámenes e informes</h2>
                    <article className="long-form-content">
                        <h3>Estructura de dictamen jurídico</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">PROMPT</div>
                            <pre className="code-block">
                                {`Redactá un dictamen jurídico sobre:
[Pregunta o consulta planteada]

Estructura requerida:
1. OBJETO: Qué se consulta
2. ANTECEDENTES: Hechos relevantes
3. ANÁLISIS: Normativa y doctrina aplicable
4. CONCLUSIÓN: Respuesta fundada a la consulta
5. RECOMENDACIONES: Acciones sugeridas

Estilo: formal, objetivo, sin primera persona.
Extensión: [indicar]

INFORMACIÓN PROPORCIONADA:
[Pegar los datos del caso/consulta]`}
                            </pre>
                        </div>

                        <h3>Dictamen con posiciones alternativas</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">PROMPT</div>
                            <pre className="code-block">
                                {`Este tema tiene posiciones doctrinales divergentes.

Redactá un dictamen que:
1. Exponga claramente las distintas posiciones
2. Analice pros y contras de cada una
3. Indique cuál es la posición mayoritaria
4. Recomiende una posición fundamentando por qué

No omitas argumentos de la posición que no 
recomendés: el cliente debe conocer los riesgos.

TEMA: [describir la cuestión controvertida]`}
                            </pre>
                        </div>
                    </article>
                </section>

                {/* Sección 6: Escritos procesales */}
                <section id="escritos" className="page__section">
                    <h2 className="page__section-title">6. Otros escritos procesales</h2>
                    <article className="long-form-content">
                        <h3>Contestación de demanda</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">PROMPT</div>
                            <pre className="code-block">
                                {`Analizá esta demanda y proponé una estrategia
de contestación.

Identificá:
1. Hechos que puedo negar
2. Hechos que debo reconocer
3. Defensas procesales aplicables (excepciones)
4. Defensas de fondo
5. Prueba clave a ofrecer

Después, redactá el borrador de contestación.

DEMANDA:
[Pegar la demanda recibida]

MI VERSIÓN DE LOS HECHOS:
[Explicar qué pasó desde la perspectiva del demandado]`}
                            </pre>
                        </div>

                        <h3>Alegato</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">PROMPT</div>
                            <pre className="code-block">
                                {`Redactá un alegato para este caso.

Estructura:
1. Hechos probados (con referencia a pruebas)
2. Derecho aplicable
3. Valoración de la prueba de la contraparte
4. Petitorio

El alegato debe ser persuasivo pero riguroso.
Evitá adjetivos excesivos. Enfocate en los hechos
y las pruebas.

RESUMEN DEL CASO:
[Qué se discutió]

PRUEBAS PRODUCIDAS:
[Listar pruebas y qué acreditan]

PRETENSIÓN:
[Qué queremos que resuelva el juez]`}
                            </pre>
                        </div>
                    </article>
                </section>

                {/* Sección 7: Errores comunes */}
                <section id="errores" className="page__section">
                    <h2 className="page__section-title">7. Errores comunes en redacción asistida</h2>
                    <article className="long-form-content">
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Pedir el documento completo de una vez</h4>
                                <p>Perdés control y la calidad baja en secciones intermedias.</p>
                                <p><strong>Solución:</strong> Trabajá sección por sección.</p>
                            </div>
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ No dar contexto jurisdiccional</h4>
                                <p>La IA puede mezclar derecho de distintos países.</p>
                                <p><strong>Solución:</strong> Especificá siempre: "derecho argentino", "CABA", etc.</p>
                            </div>
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Copiar y pegar sin revisar</h4>
                                <p>Los errores de la IA se vuelven tus errores.</p>
                                <p><strong>Solución:</strong> Revisá TODO antes de firmar.</p>
                            </div>
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ No adaptar al estilo del tribunal</h4>
                                <p>Cada fuero tiene sus usos y preferencias.</p>
                                <p><strong>Solución:</strong> Ajustá el texto final a lo que conocés del tribunal.</p>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Sección 8: Checklist */}
                <section id="checklist" className="page__section">
                    <h2 className="page__section-title">8. Checklist de redacción asistida</h2>
                    <article className="long-form-content">
                        <div className="checklist-box">
                            <h3>Antes de empezar</h3>
                            <ul className="checklist">
                                <li>☐ Definí claramente qué tipo de documento necesitás</li>
                                <li>☐ Reuní toda la información fáctica necesaria</li>
                                <li>☐ Identificaste la normativa aplicable</li>
                            </ul>

                            <h3>Durante la redacción</h3>
                            <ul className="checklist">
                                <li>☐ Trabajé sección por sección</li>
                                <li>☐ Especifiqué jurisdicción y fuero</li>
                                <li>☐ Pedí que cite fuentes cuando corresponda</li>
                            </ul>

                            <h3>Antes de presentar</h3>
                            <ul className="checklist">
                                <li>☐ Verifiqué TODAS las citas a normativa</li>
                                <li>☐ Verifiqué jurisprudencia citada</li>
                                <li>☐ Revisé requisitos formales (art. 330 o equivalente)</li>
                                <li>☐ Adapté el estilo a mi forma de escribir</li>
                                <li>☐ Leí el documento completo en voz alta</li>
                                <li>☐ Confirmé que los datos del caso son correctos</li>
                            </ul>
                        </div>

                        <blockquote className="concept-quote">
                            La IA redacta el 70%. Vos aportás el 30% que marca la diferencia: el criterio, la verificación y la firma profesional.
                        </blockquote>
                    </article>
                </section>

                {/* Footer de navegación */}
                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/prompt-engineering-u3" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M2 U3: Filtrado de jurisprudencia</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/prompt-engineering-u5" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Unidad 5 – Preparación para juicios →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PromptEngineeringM2U4

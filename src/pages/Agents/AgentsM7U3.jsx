import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function AgentsM7U3() {
    return (
        <div className="page">
            <PageSEO
                title="Agente de redacción jurídica: del análisis al escrito final · M7 U3"
                description="Pipeline de redacción en 5 etapas: de los hechos y el análisis al escrito jurídico terminado. Prompts para cada etapa, control de estilo y puntos de revisión humana."
                path="/agents-u3"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 7 · Unidad 3</span>
                <h1 className="page__title">Agente de redacción jurídica</h1>
                <p className="page__description">
                    La diferencia entre pedirle "escribí una demanda" a la IA y construir un pipeline
                    de redacción que produce escritos consistentes, verificables y con tu estilo.
                </p>
            </header>

            <div className="page__content">

                <section id="problema" className="page__section">
                    <h2 className="page__section-title">1. Por qué el prompt único falla en redacción</h2>
                    <article className="long-form-content">
                        <p>
                            El error más frecuente con IA y redacción jurídica: pedirle en un solo prompt
                            que escriba el documento completo. "Redactá una demanda laboral por despido
                            injustificado con estos hechos." El resultado es genérico, usa fórmulas
                            estándar, pierde detalles del caso, y se aleja del estilo del estudio.
                        </p>
                        <p>
                            Un agente de redacción trabaja distinto: <strong>el proceso está separado del
                            resultado</strong>. Primero analiza, después estructura, después redacta sección
                            por sección, después revisa. Cada etapa alimenta a la siguiente.
                        </p>
                        <blockquote className="concept-quote">
                            Un escrito bien redactado no nace de un prompt — nace de un proceso.
                            El agente es el proceso.
                        </blockquote>
                    </article>
                </section>

                <section id="pipeline" className="page__section">
                    <h2 className="page__section-title">2. El pipeline de 5 etapas</h2>
                    <article className="long-form-content">
                        <div className="flow-steps">
                            <div className="flow-step">
                                <strong>ETAPA 1 — Intake: entender el encargo</strong><br />
                                El agente recibe los insumos: hechos del caso, tipo de documento, partes,
                                pretensión, jurisdicción, normas aplicables, estilo preferido y restricciones
                                formales (juzgado, tipo de proceso). Antes de escribir una línea, confirma
                                que entendió correctamente.
                            </div>
                            <div className="flow-step">
                                <strong>ETAPA 2 — Estructura: el esqueleto antes de la carne</strong><br />
                                Genera el índice del documento con todos los capítulos y secciones necesarias,
                                con una línea de qué va en cada uno. Vos aprobás la estructura antes de que
                                empiece a escribir. Es el checkpoint más importante.
                            </div>
                            <div className="flow-step">
                                <strong>ETAPA 3 — Redacción sección por sección</strong><br />
                                Redacta cada sección de forma independiente, con el contexto acumulado de
                                lo que ya escribió. No el documento de una vez: capítulo por capítulo,
                                con vos revisando y aprobando antes de avanzar.
                            </div>
                            <div className="flow-step">
                                <strong>ETAPA 4 — Revisión de coherencia</strong><br />
                                Una vez redactado, el agente hace un pase de revisión: verifica que las
                                secciones se articulen, que los argumentos no se contradigan, que las
                                referencias cruzadas sean correctas, que el tono sea uniforme.
                            </div>
                            <div className="flow-step">
                                <strong>ETAPA 5 — Adaptación de estilo</strong><br />
                                Ajusta el documento al estilo del estudio o del abogado: registro formal,
                                longitud de párrafos, uso de citas textuales vs. paráfrasis, nivel de
                                tecnicismo. Podés darle un escrito tuyo previo como muestra de estilo.
                            </div>
                        </div>
                    </article>
                </section>

                <section id="prompts" className="page__section">
                    <h2 className="page__section-title">3. Los prompts de cada etapa</h2>
                    <article className="long-form-content">

                        <h3>Project base en Claude</h3>
                        <div className="full-prompt-example">
                            <p>
                                "Actuás como asistente de redacción jurídica. Tu trabajo es ayudarme a producir
                                escritos jurídicos de alta calidad siguiendo un proceso estructurado. Nunca redactés
                                secciones completas sin que yo apruebe la estructura previa. Nunca inventés citas,
                                artículos o jurisprudencia: si necesitás una cita que no conocés, indicámelo con
                                [VERIFICAR: descripción de lo que necesitás]. Adoptá el estilo que te indique:
                                formal sin excesos, párrafos medios, argumentación directa. Cuando necesites datos
                                que no te di, preguntame antes de inventar."
                            </p>
                        </div>

                        <h3>Etapa 1: Intake</h3>
                        <div className="full-prompt-example">
                            <p>
                                "Voy a redactar [tipo de documento: demanda / contestación / recurso / etc.].
                                Te paso los datos: Partes: [actor y demandado]. Hechos relevantes: [síntesis].
                                Pretensión: [qué se pide]. Fundamento normativo que quiero desarrollar: [normas].
                                Juzgado / fuero / proceso: [detalle]. Estilo: [formal clásico / directo / técnico].
                                Antes de continuar, confirmame qué entendiste del encargo y preguntame si algo
                                no quedó claro."
                            </p>
                        </div>

                        <h3>Etapa 2: Estructura</h3>
                        <div className="full-prompt-example">
                            <p>
                                "Con los datos que tenés, generá el índice del [documento] con todos los capítulos
                                y secciones necesarias. Para cada sección: una línea de qué argumento o contenido
                                va ahí. No escribas nada del texto todavía — solo el esqueleto. Esperá mi aprobación
                                antes de continuar."
                            </p>
                        </div>

                        <h3>Etapa 3: Redacción por sección</h3>
                        <div className="full-prompt-example">
                            <p>
                                "Redactá la sección [N]: [título]. Usá la información que ya tenemos. Si necesitás
                                una cita jurisprudencial que no tenés verificada, marcala con [VERIFICAR]. Si
                                necesitás datos que no te di, indicámelo. No avances a la sección siguiente
                                hasta que yo apruebe esta."
                            </p>
                        </div>

                        <h3>Etapa 4: Revisión</h3>
                        <div className="full-prompt-example">
                            <p>
                                "Revisá el documento completo con estos criterios: (1) ¿Hay contradicciones
                                entre secciones? (2) ¿Las referencias cruzadas son correctas? (3) ¿El argumento
                                central es consistente de principio a fin? (4) ¿Hay alguna sección que debilite
                                en vez de fortalecer la posición? Reportá cada problema encontrado con la
                                sección donde está y cómo lo corregirías."
                            </p>
                        </div>

                        <h3>Etapa 5: Estilo</h3>
                        <div className="full-prompt-example">
                            <p>
                                "Acá está un escrito mío anterior como referencia de estilo: [texto muestra].
                                Ajustá el documento para que el registro, la longitud de párrafos y el nivel
                                de tecnicismo sean consistentes con esa muestra. No cambies el contenido ni
                                los argumentos — solo el estilo de escritura."
                            </p>
                        </div>
                    </article>
                </section>

                <section id="tipos" className="page__section">
                    <h2 className="page__section-title">4. Aplicación por tipo de documento</h2>
                    <article className="long-form-content">

                        <h3>Demanda (civil, laboral, contencioso)</h3>
                        <p>
                            El pipeline completo aplica perfectamente. La etapa de intake es crítica:
                            necesitás dejar bien establecidas la legitimación activa, la competencia,
                            la pretensión con monto y la vía procesal. Si alguno de esos datos no está
                            claro en el intake, el agente va a inventar — mejor que pregunte.
                        </p>

                        <h3>Contestación de demanda</h3>
                        <p>
                            La estructura varía: el agente debe primero <strong>analizar la demanda</strong>
                            (qué alega, qué prueba ofrece, qué pretende) y recién después generar la
                            estructura de la contestación. Agregás una etapa 0: "Analizá esta demanda
                            y listá todos los hechos que necesito negar, los que puedo reconocer,
                            y los argumentos que necesito rebatir."
                        </p>

                        <h3>Recurso de apelación</h3>
                        <p>
                            Etapa 1 incluye la sentencia recurrida completa. El agente la analiza,
                            identifica los agravios que vos le señalás, y estructura el recurso alrededor
                            de cada agravio con fundamento. La etapa de revisión es particularmente
                            importante: verifica que los agravios estén claramente diferenciados y
                            que ninguno esté reiterando otro.
                        </p>

                        <h3>Contrato</h3>
                        <p>
                            La etapa de estructura es más extensa: el agente debe entender qué cláusulas
                            son estándar, cuáles son específicas del acuerdo, y cuáles tienen mayor
                            riesgo para tu cliente. Podés agregarle: "En la estructura, marcá qué
                            cláusulas son negociables y cuáles son condición esencial."
                        </p>
                    </article>
                </section>

                <section id="marcadores" className="page__section">
                    <h2 className="page__section-title">5. El sistema de marcadores [VERIFICAR]</h2>
                    <article className="long-form-content">
                        <p>
                            Una práctica que hace toda la diferencia: enseñarle al agente a usar marcadores
                            en lugar de inventar. Cuando el agente no tiene una cita verificada, en lugar
                            de inventarla, escribe:
                        </p>
                        <div className="full-prompt-example">
                            <p>[VERIFICAR: fallo de la CSJN sobre [tema], aproximadamente [período]]</p>
                            <p>[VERIFICAR: Art. [N] de [ley] — confirmar texto exacto]</p>
                            <p>[VERIFICAR: doctrina de [autor] sobre [punto] — buscar referencia exacta]</p>
                        </div>
                        <p>
                            Cuando recibís el borrador, buscás todos los [VERIFICAR] y los completás
                            con las fuentes reales, o eliminás la referencia si no encontrás soporte.
                            El documento resultante tiene cero citas inventadas — porque el agente nunca
                            inventó una.
                        </p>
                        <div className="highlight-success">
                            <strong>Esto es lo que diferencia el agente del prompt único:</strong> el
                            proceso tiene mecanismos explícitos para gestionar la incertidumbre. No confía
                            ciegamente en el output — lo hace auditable.
                        </div>
                    </article>
                </section>

                <section id="checklist" className="page__section">
                    <h2 className="page__section-title">6. Checklist de esta unidad</h2>
                    <article className="long-form-content">
                        <div className="checklist-box">
                            <ul className="checklist">
                                <li>☐ Entiendo por qué el prompt único falla en redacción jurídica compleja</li>
                                <li>☐ Configuré el Project de redacción con las instrucciones base</li>
                                <li>☐ Probé el pipeline completo con al menos un tipo de documento</li>
                                <li>☐ Usé el sistema de marcadores [VERIFICAR] y confirmé que funciona</li>
                                <li>☐ Apliqué la etapa de revisión de coherencia y encontré algo para corregir</li>
                                <li>☐ Probé la etapa de adaptación de estilo con una muestra de escrito propio</li>
                            </ul>
                        </div>
                    </article>
                </section>

                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/agents-u2" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M7 U2: Agente de investigación jurídica</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/agents-u4" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            U4 – Agente de seguimiento de causas →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgentsM7U3

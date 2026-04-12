import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function EcosystemM5U5() {
    return (
        <div className="page">
            <PageSEO
                title="Harvey, CoCounsel y el mercado de IA jurídica · M6 U5"
                description="Panorama de las herramientas de IA diseñadas específicamente para el ejercicio del derecho. Harvey AI, CoCounsel, Westlaw AI, Casetext y el mercado emergente en Argentina."
                path="/ecosystem-u5"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 6 · Unidad 5</span>
                <h1 className="page__title">Harvey, CoCounsel y el mercado de IA jurídica</h1>
                <p className="page__description">
                    Herramientas construidas específicamente para abogados: qué hacen, qué cuestan,
                    cuáles llegan a Argentina y qué podés usar hoy.
                </p>
            </header>

            <div className="page__content">

                <section id="contexto" className="page__section">
                    <h2 className="page__section-title">1. El mercado de legaltech IA en 2025</h2>
                    <article className="long-form-content">
                        <p>
                            El mercado de IA jurídica especializada creció exponencialmente desde 2023.
                            Docenas de startups recibieron financiamiento masivo para construir herramientas
                            entrenadas o integradas específicamente para el derecho. La promesa: modelos
                            que no solo generan texto jurídico, sino que entienden el razonamiento legal,
                            acceden a bases de datos jurídicas en tiempo real y reducen el riesgo de error.
                        </p>
                        <p>
                            La realidad para el abogado argentino: la mayoría de estas herramientas
                            están optimizadas para el derecho anglosajón (common law) y conectadas a bases
                            de datos que no incluyen jurisprudencia argentina. <strong>Son útiles para entender
                            el horizonte — pero el stack operativo hoy sigue siendo Claude + Gemini + Perplexity
                            + NotebookLM</strong>, como vimos en este módulo.
                        </p>
                        <blockquote className="concept-quote">
                            Conocer el mercado global no significa adoptarlo todo. Significa saber qué
                            está llegando y cómo posicionarte antes de que llegue.
                        </blockquote>
                    </article>
                </section>

                <section id="harvey" className="page__section">
                    <h2 className="page__section-title">2. Harvey AI</h2>
                    <article className="long-form-content">
                        <p>
                            Harvey es el referente más conocido del mercado: un LLM jurídico
                            construido sobre GPT-4, entrenado con millones de documentos legales y
                            conectado a bases de datos como Westlaw y PwC Legal. Sus capacidades:
                        </p>
                        <ul className="key-points">
                            <li>
                                <strong>Due diligence automatizada:</strong> Analiza contratos y documentos
                                masivos identificando riesgos, cláusulas no estándar y puntos de negociación.
                                Lo que llevaría 40 horas de revisión manual lo hace en horas.
                            </li>
                            <li>
                                <strong>Research jurídico con fuentes:</strong> Integrado con Westlaw,
                                responde con jurisprudencia real de tribunales angloamericanos.
                                Para derecho argentino: no aplica directamente.
                            </li>
                            <li>
                                <strong>Redacción asistida:</strong> Genera contratos, memorandos y
                                comunicaciones con el estilo y formato del estudio.
                            </li>
                        </ul>
                        <div className="highlight-warning">
                            <strong>Acceso y costo:</strong> Harvey opera por contratos empresariales
                            con estudios de tamaño medio a grande. No tiene plan individual disponible
                            en Argentina al día de hoy. El precio no es público — es enterprise.
                            Para el abogado independiente argentino: no es una opción inmediata.
                        </div>
                    </article>
                </section>

                <section id="cocounsel" className="page__section">
                    <h2 className="page__section-title">3. CoCounsel (Thomson Reuters)</h2>
                    <article className="long-form-content">
                        <p>
                            CoCounsel es la respuesta de Thomson Reuters al mercado: una IA jurídica
                            integrada dentro del ecosistema Westlaw. Sus funciones principales:
                        </p>
                        <ul className="application-list">
                            <li>
                                <strong>Document review:</strong> Analiza contratos y documentos en segundos,
                                responde preguntas específicas con citas de texto exactas.
                            </li>
                            <li>
                                <strong>Legal research:</strong> Busca jurisprudencia en Westlaw y sintetiza
                                los resultados en formato utilizable. La clave: acceso a bases de datos
                                de calidad, no solo a la web.
                            </li>
                            <li>
                                <strong>Drafting asistido:</strong> Genera borradores con el conocimiento
                                integrado de la plataforma.
                            </li>
                        </ul>
                        <p>
                            <strong>Para Argentina:</strong> Westlaw tiene cobertura de jurisprudencia argentina,
                            aunque limitada. Si tu estudio ya tiene suscripción a Westlaw o La Ley,
                            vale preguntar por el acceso a las funcionalidades de CoCounsel.
                        </p>
                    </article>
                </section>

                <section id="otros" className="page__section">
                    <h2 className="page__section-title">4. Otros jugadores relevantes</h2>
                    <article className="long-form-content">
                        <div className="table-container">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Herramienta</th>
                                        <th>Especialidad</th>
                                        <th>Disponibilidad Argentina</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Casetext (adquirida por TR)</strong></td>
                                        <td>Research y redacción, integrada ahora en CoCounsel</td>
                                        <td>Limitada</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Lex Machina</strong></td>
                                        <td>Analytics de litigios: probabilidades, jueces, estrategias</td>
                                        <td>Solo EEUU</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Spellbook</strong></td>
                                        <td>Revisión de contratos dentro de Word</td>
                                        <td>Sí (derecho anglosajón)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Luminance</strong></td>
                                        <td>Due diligence y revisión documental masiva</td>
                                        <td>Enterprise, sí llega</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Noteable / Everlaw</strong></td>
                                        <td>E-discovery y litigation support</td>
                                        <td>Solo EEUU</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Alcance Legal</strong></td>
                                        <td>CPP PBA y derecho argentino, MCP nativo</td>
                                        <td>Argentina — disponible ahora</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </article>
                </section>

                <section id="argentina" className="page__section">
                    <h2 className="page__section-title">5. El mercado argentino: dónde estamos hoy</h2>
                    <article className="long-form-content">
                        <p>
                            En Argentina, el mercado de legaltech IA específica está en etapa muy temprana.
                            Las soluciones locales que existen son principalmente:
                        </p>
                        <ul className="application-list">
                            <li>
                                <strong>Bases de datos jurídicas con algo de IA:</strong> La Ley, Infojus,
                                Thomson Reuters Argentina están incorporando funciones de búsqueda semántica,
                                pero no LLMs generativos integrados todavía a nivel general.
                            </li>
                            <li>
                                <strong>Desarrollos custom sobre Claude/GPT:</strong> Estudios grandes
                                están construyendo sus propias herramientas usando la API de Claude
                                o GPT-4. El mismo modelo que usa Alcance Legal para el CPP PBA.
                            </li>
                            <li>
                                <strong>Asistentes especializados:</strong> Como Alcance Legal Penal
                                y Alcance Legal Civil-Familiar-Comercial — herramientas construidas
                                sobre la API de Claude con conocimiento específico del derecho argentino.
                            </li>
                        </ul>
                        <div className="highlight-success">
                            <strong>La oportunidad:</strong> El abogado argentino que hoy aprende a usar
                            Claude + Gemini + las herramientas de este módulo está dos años adelante
                            del mercado local. Cuando las herramientas especializadas lleguen con cobertura
                            argentina real, ya vas a tener el criterio para evaluarlas y adoptarlas.
                        </div>
                    </article>
                </section>

                <section id="decision" className="page__section">
                    <h2 className="page__section-title">6. Cuándo adoptar una herramienta especializada</h2>
                    <article className="long-form-content">
                        <p>
                            El criterio para evaluar cualquier herramienta legaltech nueva:
                        </p>
                        <div className="risk-list">
                            <div className="risk-item">
                                <span className="risk-icon">1</span>
                                <span>
                                    <strong>¿Tiene cobertura de jurisprudencia argentina?</strong> Si no,
                                    el research que genera no es directamente aplicable. Podés usarla para
                                    conceptos, pero no para citas de fallos.
                                </span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">2</span>
                                <span>
                                    <strong>¿Podés verificar cada afirmación?</strong> Si la herramienta
                                    no te muestra la fuente de cada cosa que dice, no es apropiada para
                                    trabajo jurídico profesional.
                                </span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">3</span>
                                <span>
                                    <strong>¿Qué hace mejor que tu stack actual?</strong> Si no resuelve
                                    algo específico mejor que Claude + Gemini + Perplexity, el costo de
                                    incorporar una herramienta nueva supera el beneficio.
                                </span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">4</span>
                                <span>
                                    <strong>¿Cuál es la política de privacidad de datos?</strong> Antes
                                    de cargar documentos del estudio en cualquier plataforma nueva,
                                    revisás los términos de servicio. Las garantías del M8 aplican a todas.
                                </span>
                            </div>
                        </div>
                    </article>
                </section>

                <section id="checklist" className="page__section">
                    <h2 className="page__section-title">7. Checklist de cierre del Módulo 6</h2>
                    <article className="long-form-content">
                        <div className="checklist-box">
                            <h3>Antes de pasar al módulo siguiente, confirmá:</h3>
                            <ul className="checklist">
                                <li>☐ Tengo mi stack mínimo viable definido y configurado</li>
                                <li>☐ Construí y probé al menos un workflow en n8n o Make</li>
                                <li>☐ Creé un notebook en NotebookLM con documentos reales de mi área</li>
                                <li>☐ Usé Perplexity para una investigación jurídica real y verifiqué las fuentes</li>
                                <li>☐ Entiendo qué son Harvey y CoCounsel y por qué hoy no son mi prioridad</li>
                                <li>☐ Tengo criterios claros para evaluar cualquier herramienta legaltech nueva</li>
                            </ul>
                        </div>
                    </article>
                </section>

                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/ecosystem-u4" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M6 U4: Perplexity — búsqueda jurídica verificable</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--complete">✓ Módulo 6 completo</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próximo módulo:</span>
                        <Link to="/agents" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Módulo 7 – Agentes IA para el Estudio Jurídico →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EcosystemM5U5

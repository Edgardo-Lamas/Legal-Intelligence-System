import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function SoloPracticeM3U5() {
    return (
        <div className="page">
            <PageSEO
                title="Modelo de negocio con IA: cobrar por resultado, no por hora · M3 U5"
                description="Cómo replantear el modelo de honorarios cuando la IA te hace 5 veces más eficiente. Pricing por valor, nuevos servicios premium y cómo comunicar el uso de IA a tus clientes."
                path="/solo-practice-u5"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 3 · Unidad 5</span>
                <h1 className="page__title">Modelo de negocio con IA: la paradoja de la eficiencia</h1>
                <p className="page__description">
                    Si usás IA y seguís cobrando igual, estás trabajando más barato. El abogado que entiende la paradoja de la eficiencia cobra más — no menos.
                </p>
            </header>

            <div className="page__content">

                {/* Sección 1 */}
                <section id="paradoja" className="page__section">
                    <h2 className="page__section-title">1. La paradoja que nadie te explicó</h2>
                    <article className="long-form-content">
                        <p>
                            Hay un error que comete casi todo abogado que empieza a usar IA correctamente.
                            Con IA, un análisis que antes le llevaba 4 horas ahora le lleva 45 minutos. Una
                            demanda que tardaba 2 días, ahora tarda medio día. La calidad es igual o mejor.
                        </p>
                        <p>
                            Si ese abogado sigue cobrando por hora, acaba de reducir sus ingresos a la mitad.
                        </p>
                        <blockquote className="concept-quote">
                            La eficiencia que genera la IA no debería traducirse en descuentos para tus clientes.
                            Debería traducirse en más valor entregado, más causas atendidas, o margen de ganancia mayor.
                            La elección es tuya — pero es una elección que hay que tomar conscientemente.
                        </blockquote>
                        <p>
                            Este no es un tema técnico. Es la decisión de negocio más importante que tomás cuando
                            integrás IA en tu práctica.
                        </p>
                    </article>
                </section>

                {/* Sección 2 */}
                <section id="hora-vs-valor" className="page__section">
                    <h2 className="page__section-title">2. El problema del cobro por hora</h2>
                    <article className="long-form-content">
                        <p>
                            El cobro por hora es el modelo más difundido en la práctica jurídica argentina y tiene
                            una falla estructural: <strong>penaliza la eficiencia</strong>. Cuanto mejor sos, menos
                            cobrás por el mismo resultado.
                        </p>

                        <div className="comparison-grid">
                            <div className="comparison-box">
                                <h4>Antes de IA — Análisis de contrato complejo</h4>
                                <ul>
                                    <li>Tiempo: 6 horas</li>
                                    <li>Honorario: $600 (a $100/hora)</li>
                                    <li>Resultado: análisis estándar</li>
                                </ul>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>Con IA — mismo trabajo</h4>
                                <ul>
                                    <li>Tiempo: 1.5 horas</li>
                                    <li>Si cobrás por hora: $150</li>
                                    <li>Resultado: análisis igual o mejor</li>
                                    <li><strong>Perdiste $450 por ser más eficiente</strong></li>
                                </ul>
                            </div>
                        </div>

                        <p>
                            La solución no es ocultar que usás IA ni inflar las horas. La solución es cambiar
                            qué estás vendiendo. En lugar de vender tiempo, vendés resultado y experiencia.
                        </p>
                    </article>
                </section>

                {/* Sección 3 */}
                <section id="pricing-valor" className="page__section">
                    <h2 className="page__section-title">3. Pricing por valor: qué vale lo que hacés</h2>
                    <article className="long-form-content">
                        <p>
                            El precio de un servicio jurídico no debería fijarse en función de cuánto tiempo
                            te lleva — sino en función de cuánto vale ese servicio para el cliente.
                        </p>

                        <h3>Los tres factores del valor percibido</h3>
                        <ul className="key-points">
                            <li>
                                <strong>El riesgo que mitigás.</strong> ¿Cuánto le cuesta al cliente equivocarse?
                                Un análisis de contrato antes de firmar vale mucho más que el análisis posterior
                                a un litigio.
                            </li>
                            <li>
                                <strong>La complejidad que manejás.</strong> No toda consulta es igual. Un
                                abogado especializado con 15 años en un fuero específico vale más que uno
                                generalista, independientemente del tiempo que tarde.
                            </li>
                            <li>
                                <strong>La certeza que brindás.</strong> Llegar al cliente con un análisis
                                completo, documentado y accionable — no con "hay que ver" — tiene valor.
                                La IA te permite hacer eso más rápido y con mayor cobertura.
                            </li>
                        </ul>

                        <h3>Ejemplo de repricing con IA</h3>
                        <div className="table-container">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Servicio</th>
                                        <th>Precio anterior (hora)</th>
                                        <th>Tiempo sin IA</th>
                                        <th>Tiempo con IA</th>
                                        <th>Precio nuevo (valor)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Análisis de contrato básico</td>
                                        <td>$300 (3hs × $100)</td>
                                        <td>3 horas</td>
                                        <td>45 min</td>
                                        <td>$350 — más rápido, más completo</td>
                                    </tr>
                                    <tr>
                                        <td>Informe jurídico de due diligence</td>
                                        <td>$1.200 (12hs × $100)</td>
                                        <td>12 horas</td>
                                        <td>3 horas</td>
                                        <td>$1.500 — mayor cobertura, entrega en 24hs</td>
                                    </tr>
                                    <tr>
                                        <td>Redacción de demanda</td>
                                        <td>$800 (8hs × $100)</td>
                                        <td>8 horas</td>
                                        <td>2 horas</td>
                                        <td>$900 — entrega más rápida, primer borrador en el día</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="highlight-success">
                            <strong>La clave:</strong> Aumentás el precio — ligeramente — y bajas el tiempo de
                            entrega radicalmente. El cliente recibe más valor (velocidad + calidad), vos generás
                            más margen. No hay un "perdedor".
                        </div>
                    </article>
                </section>

                {/* Sección 4 */}
                <section id="nuevos-servicios" className="page__section">
                    <h2 className="page__section-title">4. Nuevos servicios que antes eran imposibles</h2>
                    <article className="long-form-content">
                        <p>
                            La IA no solo hace más eficientes los servicios existentes — habilita servicios
                            que antes eran inviables por el tiempo que requerían.
                        </p>

                        <h3>Servicio 1: Auditoría jurídica express (24–48 horas)</h3>
                        <p>
                            Análisis completo de contratos, situación societaria o estado procesal en tiempo
                            mínimo. Antes requería días; con IA es factible en horas. El cliente paga una
                            prima por la velocidad. Ideal para empresas que necesitan tomar decisiones rápidas.
                        </p>

                        <h3>Servicio 2: Monitoreo jurídico continuo</h3>
                        <p>
                            Para clientes con múltiples contratos o causas activas: un seguimiento mensual
                            automatizado con alertas sobre vencimientos, cambios normativos relevantes y
                            actualizaciones procesales. La IA hace el monitoreo; vos revisás y alertás
                            cuando es necesario. Precio: suscripción mensual fija.
                        </p>

                        <h3>Servicio 3: Informe de riesgo jurídico</h3>
                        <p>
                            Para empresas antes de firmar un contrato, lanzar un producto o tomar una
                            decisión estratégica: un informe que mapea todos los riesgos jurídicos con
                            probabilidad e impacto estimado. Antes demandaba una semana de trabajo; con
                            IA y el flujo correcto, dos días.
                        </p>

                        <h3>Servicio 4: Asistente jurídico on-demand (retainer)</h3>
                        <p>
                            En lugar de cobrar por consulta, ofrecés un retainer mensual: X consultas,
                            Y revisiones de documentos, respuesta en menos de 24 horas. La IA te permite
                            atender el volumen del retainer sin aumentar proporcionalmente tu tiempo.
                        </p>

                        <h3>Servicio 5: Consulta inicial sistematizada</h3>
                        <p>
                            Antes de la reunión con el cliente, enviás un formulario estructurado. Un sistema
                            con IA pre-analiza la situación y generá el briefing del caso para vos. Llegás
                            a la reunión ya informado. El cliente percibe un nivel de preparación excepcional.
                        </p>
                    </article>
                </section>

                {/* Sección 5 */}
                <section id="comunicar-ia" className="page__section">
                    <h2 className="page__section-title">5. ¿Cómo comunico a mis clientes que uso IA?</h2>
                    <article className="long-form-content">
                        <p>
                            Esta es la pregunta que más incomoda a los abogados. La respuesta es más simple
                            de lo que parece: <strong>con transparencia, sin disculpas, como un activo profesional</strong>.
                        </p>

                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--bad">
                                <h4>✗ Cómo NO comunicarlo</h4>
                                <p>"Usamos herramientas de IA para algunos procesos internos..."</p>
                                <p><em>Suena a que lo estás escondiendo. El cliente sospecha.</em></p>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>✅ Cómo comunicarlo</h4>
                                <p>"Integro herramientas de IA en mi flujo de trabajo para analizar documentos más rápido y con mayor cobertura. Eso me permite darte un análisis completo en 48 horas en lugar de una semana, sin que el costo aumente. Toda conclusión la reviso y valido personalmente."</p>
                            </div>
                        </div>

                        <h3>Lo que el cliente quiere saber</h3>
                        <ul className="application-list">
                            <li><strong>¿Mis datos son seguros?</strong> Sí, y podés explicar cómo (anonimización, políticas de privacidad de las plataformas, planes enterprise si los usás)</li>
                            <li><strong>¿Me va a atender una máquina?</strong> No. La IA procesa información; vos pensás, decidís y respondés</li>
                            <li><strong>¿El análisis es confiable?</strong> Igual que antes, porque vos verificás. La diferencia es que ahora podés hacer un análisis más exhaustivo en menos tiempo</li>
                        </ul>

                        <div className="full-prompt-example">
                            <p>Prompt para generar tu propia comunicación al cliente:</p>
                            <p>
                                "Redactá un párrafo corto para incluir en mi carta de presentación de servicios.
                                Soy abogado/a especializado en [área]. Quiero comunicar que uso herramientas de IA
                                para aumentar la velocidad y cobertura de mis análisis, que toda conclusión la valido
                                personalmente, y que esto me permite ofrecer tiempos de entrega más cortos sin
                                comprometer la calidad. Tono profesional, sin tecnicismos, sin sonar defensivo."
                            </p>
                        </div>
                    </article>
                </section>

                {/* Sección 6 */}
                <section id="diferenciacion" className="page__section">
                    <h2 className="page__section-title">6. Diferenciación: el abogado que no puede ser reemplazado</h2>
                    <article className="long-form-content">
                        <p>
                            La pregunta que muchos abogados tienen pero pocos hacen en voz alta: ¿la IA me
                            va a reemplazar? La respuesta es matizada.
                        </p>
                        <p>
                            La IA reemplaza el trabajo mecánico: búsqueda de información, formateo de
                            documentos, primera redacción, clasificación de expedientes. No reemplaza
                            el juicio, la estrategia, la confianza del cliente, el conocimiento del
                            contexto local ni la responsabilidad profesional.
                        </p>
                        <p>
                            La ventaja competitiva del abogado en la era de la IA no es saber más que la IA
                            sobre el derecho. Es ser capaz de <strong>aplicar ese conocimiento a situaciones
                            concretas, con criterio profesional y responsabilidad personal</strong>. Eso no
                            lo hace ningún modelo.
                        </p>

                        <div className="highlight-success">
                            <strong>El posicionamiento correcto:</strong> No sos el abogado que usa IA.
                            Sos el abogado que entrega más, más rápido, con el mismo criterio profesional
                            de siempre — y la IA es la infraestructura que lo hace posible. Así como nadie
                            dice "soy el abogado que usa computadora", en poco tiempo nadie va a decir
                            "uso IA" como diferencial. Pero hoy todavía es diferencial, y conviene capitalizarlo.
                        </div>
                    </article>
                </section>

                {/* Sección 7 */}
                <section id="plan" className="page__section">
                    <h2 className="page__section-title">7. Plan de repricing en 3 pasos</h2>
                    <article className="long-form-content">
                        <div className="flow-steps">
                            <div className="flow-step">
                                <strong>PASO 1 — Mapeá tus servicios actuales y sus precios</strong><br />
                                Lista de todos los servicios que ofrecés, precio actual, tiempo promedio que te llevan.
                                Identifica cuáles se ven más afectados por la eficiencia de la IA.
                            </div>
                            <div className="flow-step">
                                <strong>PASO 2 — Calculá el valor de entrega, no el costo de producción</strong><br />
                                Para cada servicio: ¿qué le evita al cliente? ¿Cuánto perdería sin tu análisis?
                                ¿Cuánto vale la velocidad de entrega? Ese es el piso del precio, no tu hora trabajada.
                            </div>
                            <div className="flow-step">
                                <strong>PASO 3 — Actualizá tus precios para clientes nuevos primero</strong><br />
                                No cambies abruptamente con clientes existentes. Para nuevos clientes, aplicá la
                                nueva estructura de precios. Cuando veas que funciona, lo extendés gradualmente.
                            </div>
                        </div>
                    </article>
                </section>

                {/* Checklist */}
                <section id="checklist" className="page__section">
                    <h2 className="page__section-title">8. Checklist de esta unidad</h2>
                    <article className="long-form-content">
                        <div className="checklist-box">
                            <ul className="checklist">
                                <li>☐ Entiendo por qué cobrar por hora con IA me puede perjudicar</li>
                                <li>☐ Identifiqué al menos 2 servicios donde el repricing por valor tiene sentido</li>
                                <li>☐ Tengo claro cómo comunicar el uso de IA a mis clientes sin disculpas</li>
                                <li>☐ Diseñé al menos 1 servicio nuevo que la IA hace viable (que antes no podía ofrecer)</li>
                                <li>☐ Entiendo en qué soy insustituible como profesional vs. qué puede hacer la IA</li>
                            </ul>
                        </div>
                    </article>
                </section>

                {/* Navegación */}
                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/solo-practice-u4" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M3 U4: Marketing legal y posicionamiento</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--complete">✓ Módulo 3 completo</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próximo módulo:</span>
                        <Link to="/gemini" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Módulo 4 – Gemini 2025: investigación jurídica a escala →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SoloPracticeM3U5

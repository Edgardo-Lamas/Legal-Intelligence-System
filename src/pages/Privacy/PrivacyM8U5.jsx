import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function PrivacyM8U5() {
    return (
        <div className="page">
            <PageSEO
                title="Ética profesional y IA: deontología en la era de los LLM · M8 U5"
                description="Las obligaciones deontológicas del abogado frente al uso de IA: competencia, veracidad, independencia, responsabilidad por errores del modelo y deber de informar al cliente."
                path="/privacy-u5"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 8 · Unidad 5</span>
                <h1 className="page__title">Ética profesional en la era de los LLM</h1>
                <p className="page__description">
                    Las obligaciones que no cambian, las preguntas nuevas que la IA plantea, y cómo
                    ejercer la profesión con IA sin comprometer la integridad profesional.
                </p>
            </header>

            <div className="page__content">

                <section id="lo-que-no-cambia" className="page__section">
                    <h2 className="page__section-title">1. Lo que no cambia con la IA</h2>
                    <article className="long-form-content">
                        <p>
                            Antes de hablar de lo nuevo, conviene tener claro qué permanece igual. Las
                            obligaciones deontológicas fundamentales del abogado no se modifican porque
                            la herramienta cambie. Cambia el contexto de aplicación, no el principio.
                        </p>
                        <ul className="key-points">
                            <li>
                                <strong>Deber de veracidad.</strong> El abogado no puede presentar como propio
                                un análisis que sabe que es incorrecto, independientemente de quién lo generó.
                                Si la IA produjo un argumento que verificás como falso, no podés usarlo.
                            </li>
                            <li>
                                <strong>Secreto profesional.</strong> La obligación de confidencialidad no
                                tiene excepción tecnológica. Si compartís información de tu cliente con una
                                plataforma de IA sin las precauciones adecuadas, la obligación igual aplica.
                            </li>
                            <li>
                                <strong>Independencia profesional.</strong> El criterio jurídico es del abogado,
                                no del modelo. Presentar la opinión de una IA como si fuera tu propio análisis
                                independiente compromete esta obligación.
                            </li>
                            <li>
                                <strong>Responsabilidad por el trabajo.</strong> Todo escrito, informe o
                                consejo jurídico que firmás es tuyo. La IA que lo redactó no tiene responsabilidad
                                profesional. Vos sí.
                            </li>
                        </ul>
                    </article>
                </section>

                <section id="preguntas-nuevas" className="page__section">
                    <h2 className="page__section-title">2. Las preguntas nuevas que la IA plantea</h2>
                    <article className="long-form-content">

                        <h3>¿Tengo que revelarle a mi cliente que uso IA?</h3>
                        <p>
                            Esta es la pregunta más frecuente y la que más varía según la perspectiva.
                            La posición más sólida desde el punto de vista ético:
                        </p>
                        <p>
                            <strong>No existe hoy una obligación legal expresa en Argentina de revelar el uso
                            de IA al cliente</strong>, de la misma forma que no existe obligación de revelar
                            qué software de procesamiento de texto usás para redactar sus escritos o qué
                            base de datos consultás para investigar jurisprudencia.
                        </p>
                        <p>
                            Sin embargo, si el cliente pregunta directamente, la respuesta debe ser veraz.
                            Y si el uso de IA es central en la prestación del servicio (por ejemplo, un
                            asistente automatizado que responde consultas en tu nombre), la transparencia
                            es éticamente necesaria.
                        </p>

                        <div className="comparison-grid">
                            <div className="comparison-box">
                                <h4>No requiere revelación activa</h4>
                                <ul>
                                    <li>Usar IA para investigar jurisprudencia</li>
                                    <li>Usar IA para generar un primer borrador que vos revisás completamente</li>
                                    <li>Usar IA para organizar información del expediente</li>
                                    <li>Usar IA para preparar argumentos que analizás y decidís adoptar</li>
                                </ul>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>Requiere transparencia</h4>
                                <ul>
                                    <li>Un chatbot que responde consultas del cliente en tu nombre</li>
                                    <li>Informes generados por IA sin revisión sustancial humana</li>
                                    <li>Opiniones jurídicas donde la IA tomó la decisión central</li>
                                    <li>Si el cliente pregunta directamente</li>
                                </ul>
                            </div>
                        </div>

                        <h3>¿Quién es responsable cuando la IA se equivoca?</h3>
                        <p>
                            La respuesta jurídica actual es clara: <strong>el abogado</strong>. Los modelos
                            de IA no son sujetos de responsabilidad profesional. Si presentás una cita
                            inventada por un modelo de IA, la responsabilidad disciplinaria y civil es tuya,
                            no de OpenAI ni de Anthropic.
                        </p>
                        <p>
                            Esto no es injusto: es consistente con cómo funciona la responsabilidad profesional
                            con cualquier herramienta. Si firmás un escrito basado en una investigación
                            incompleta porque tu asistente no hizo bien el trabajo, la responsabilidad igual
                            es tuya. La IA es un asistente sofisticado, no un co-responsable.
                        </p>

                        <h3>¿Tengo el deber de aprender a usar IA?</h3>
                        <p>
                            Varios códigos de ética del mundo anglosajón ya incorporaron explícitamente que
                            el <strong>deber de competencia profesional</strong> incluye mantenerse actualizado
                            sobre tecnologías relevantes para la práctica jurídica. Argentina no tiene esta
                            norma expresa, pero el principio general de diligencia profesional apunta en
                            la misma dirección.
                        </p>
                        <p>
                            Más prácticamente: si un colega usa IA para hacer en 2 horas lo que a vos te
                            lleva 2 días, y eso se traduce en menor calidad de representación para tu cliente,
                            hay una cuestión de diligencia que vale la pena considerar.
                        </p>
                    </article>
                </section>

                <section id="riesgos-eticos" className="page__section">
                    <h2 className="page__section-title">3. Riesgos éticos específicos de la IA en la práctica jurídica</h2>
                    <article className="long-form-content">
                        <div className="risk-list">
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>
                                    <strong>Presentar citas inventadas.</strong> Varios abogados en el mundo
                                    ya fueron sancionados por presentar jurisprudencia ficticia generada por IA.
                                    Uno de los casos más resonantes fue en EE.UU. (Mata v. Avianca, 2023):
                                    multa y apercibimiento a los abogados que presentaron fallos inexistentes.
                                    En Argentina no hay precedente conocido aún, pero la conducta configuraría
                                    al menos falta disciplinaria.
                                </span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>
                                    <strong>Delegación excesiva del criterio jurídico.</strong> Usar la
                                    conclusión de la IA como si fuera tu propia opinión, sin análisis crítico,
                                    compromete la independencia profesional y puede llevar a aconsejar mal
                                    a tu cliente.
                                </span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>
                                    <strong>Sesgo no detectado.</strong> Los modelos de IA reproducen sesgos
                                    de sus datos de entrenamiento. En materia penal, por ejemplo, algunos
                                    modelos pueden mostrar tendencias en la evaluación de riesgo de reincidencia
                                    que reflejan sesgos históricos del sistema. El abogado debe ser crítico
                                    de los outputs, no solo del proceso.
                                </span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>
                                    <strong>Conflicto de intereses no detectado.</strong> Si usás un asistente
                                    de IA que tiene acceso a información de múltiples clientes (por ejemplo,
                                    en un Project mal organizado), existe riesgo de que el contexto de un
                                    cliente contamine el análisis de otro.
                                </span>
                            </div>
                        </div>
                    </article>
                </section>

                <section id="buenas-practicas" className="page__section">
                    <h2 className="page__section-title">4. Prácticas recomendadas para una práctica éticamente sólida con IA</h2>
                    <article className="long-form-content">
                        <div className="flow-steps">
                            <div className="flow-step">
                                <strong>Verificá siempre las citas.</strong> Sin excepción. El modelo puede
                                alucinar artículos, fallos o autores con mucha confianza. Tu firma va en el escrito.
                            </div>
                            <div className="flow-step">
                                <strong>Documentá tu proceso de revisión.</strong> Si alguna vez tu uso de IA
                                es cuestionado, demostrar que revisaste el output — con anotaciones, correcciones,
                                cambios — es tu mejor defensa.
                            </div>
                            <div className="flow-step">
                                <strong>Separás causas en Projects distintos.</strong> Nunca mezcles información
                                de clientes distintos en la misma sesión de trabajo. Un Project por causa,
                                sin excepciones.
                            </div>
                            <div className="flow-step">
                                <strong>Comunicás con claridad cuando usás asistentes automatizados.</strong>
                                Si tenés un chatbot de consultas, hacé visible que es un sistema asistido por IA,
                                no una comunicación directa con vos.
                            </div>
                            <div className="flow-step">
                                <strong>Seguís leyendo y formándote.</strong> La regulación sobre IA en
                                la práctica jurídica va a evolucionar. Mantenerse actualizado es parte del
                                deber de competencia.
                            </div>
                        </div>
                    </article>
                </section>

                <section id="conclusion" className="page__section">
                    <h2 className="page__section-title">5. El abogado sigue siendo el abogado</h2>
                    <article className="long-form-content">
                        <p>
                            Después de recorrer este módulo completo — políticas de privacidad, secreto
                            profesional, anonimización, instancias privadas, ética — queda una conclusión
                            central:
                        </p>
                        <blockquote className="concept-quote">
                            La IA no cambia qué sos como profesional. Cambia con qué herramientas ejercés
                            esa profesión. Las obligaciones éticas, la responsabilidad, el criterio y la
                            independencia son tuyas — como siempre lo fueron.
                        </blockquote>
                        <p>
                            El riesgo real no es usar IA. Es usarla sin entender cómo funciona, sin
                            configurarla correctamente, y sin aplicar el criterio profesional al resultado.
                            Ese riesgo lo mitigás con formación — exactamente lo que estás haciendo.
                        </p>
                        <div className="highlight-success">
                            <strong>Módulo 8 completo.</strong> Ahora tenés el marco completo para usar
                            IA con confianza: sabés qué pasa con tus datos, entendés el marco legal
                            argentino, tenés el protocolo de anonimización, conocés las opciones de
                            privacidad avanzada, y tenés claro el marco ético que aplica.
                        </div>
                    </article>
                </section>

                <section id="checklist" className="page__section">
                    <h2 className="page__section-title">6. Checklist de cierre del Módulo 8</h2>
                    <article className="long-form-content">
                        <div className="checklist-box">
                            <h3>Antes de pasar al Módulo 9, confirmá:</h3>
                            <ul className="checklist">
                                <li>☐ Configuré el entrenamiento correctamente en ChatGPT (desactivado)</li>
                                <li>☐ Entiendo por qué Claude Pro tiene una política favorable por defecto</li>
                                <li>☐ Conozco el Art. 156 CP y cuándo aplica al uso de IA</li>
                                <li>☐ Tengo y aplico el protocolo de anonimización antes de cada sesión</li>
                                <li>☐ Sé qué solución de privacidad corresponde a mi perfil profesional</li>
                                <li>☐ Entiendo que la responsabilidad por errores de la IA en mi trabajo es mía</li>
                                <li>☐ Verifico las citas antes de firmar cualquier escrito</li>
                            </ul>
                        </div>
                    </article>
                </section>

                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/privacy-u4" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M8 U4: Instancias privadas y Enterprise</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--complete">✓ Módulo 8 completo</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próximo módulo:</span>
                        <Link to="/communication" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Módulo 9 – Comunicación y posicionamiento →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyM8U5

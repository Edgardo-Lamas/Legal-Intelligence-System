import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function AgentsM7U4() {
    return (
        <div className="page">
            <PageSEO
                title="Agente de seguimiento de causas y alertas procesales · M7 U4"
                description="Sistema de monitoreo semanal para múltiples causas activas: estructura de datos, prompts de seguimiento, alertas de vencimientos y resumen ejecutivo automatizado."
                path="/agents-u4"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 7 · Unidad 4</span>
                <h1 className="page__title">Agente de seguimiento de causas</h1>
                <p className="page__description">
                    30 causas activas, cada una con su estado, plazos y próximos pasos.
                    El agente de seguimiento convierte ese caos en un resumen semanal accionable en 20 minutos.
                </p>
            </header>

            <div className="page__content">

                <section id="problema" className="page__section">
                    <h2 className="page__section-title">1. El problema del seguimiento en escala</h2>
                    <article className="long-form-content">
                        <p>
                            Para un abogado con 20 o 30 causas activas, el seguimiento manual consume
                            entre 2 y 4 horas semanales. Revisar cada expediente, recordar el estado
                            de la semana anterior, calcular si hay vencimientos próximos, decidir qué
                            mueve esta semana y qué puede esperar.
                        </p>
                        <p>
                            El problema no es la complejidad de cada causa — es el volumen. Un agente
                            de seguimiento no necesita razonamiento profundo: necesita <strong>consistencia,
                            velocidad y visibilidad sobre todo el portfolio de causas</strong> al mismo tiempo.
                        </p>
                        <blockquote className="concept-quote">
                            El abogado que pierde un plazo por olvido no falló en conocimiento jurídico.
                            Falló en gestión de información. Este agente resuelve exactamente eso.
                        </blockquote>
                    </article>
                </section>

                <section id="estructura-datos" className="page__section">
                    <h2 className="page__section-title">2. La base: cómo estructurar los datos de tus causas</h2>
                    <article className="long-form-content">
                        <p>
                            Un agente de seguimiento es tan bueno como la información que recibe.
                            El primer paso — y el más importante — es estructurar el estado de tus
                            causas en un formato que la IA pueda procesar consistentemente.
                        </p>

                        <h3>Estructura mínima por causa</h3>
                        <div className="full-prompt-example">
                            <p>CAUSA: [nombre o código]</p>
                            <p>Tipo: [laboral / civil / penal / etc.]</p>
                            <p>Partes: [actor] c/ [demandado]</p>
                            <p>Juzgado: [identificación]</p>
                            <p>Estado actual: [última actuación + fecha]</p>
                            <p>Próxima actuación esperada: [qué / cuándo]</p>
                            <p>Plazos activos: [listá cada plazo con fecha de vencimiento]</p>
                            <p>Notas: [cualquier cosa relevante que no entre arriba]</p>
                            <p>Prioridad: [alta / media / baja]</p>
                        </div>

                        <h3>Dónde mantener este registro</h3>
                        <p>
                            Tres opciones ordenadas de mayor a menor conveniencia para el agente:
                        </p>
                        <ul className="application-list">
                            <li>
                                <strong>Google Sheets o Notion:</strong> Una tabla con una fila por causa y columnas
                                por campo. Podés copiar y pegar el contenido directamente al agente.
                            </li>
                            <li>
                                <strong>Documento de texto estructurado:</strong> Un archivo con la ficha de cada
                                causa en el formato de arriba. Actualizable rápidamente.
                            </li>
                            <li>
                                <strong>Claude Project dedicado:</strong> Un Project con el archivo de causas cargado,
                                que actualizás semanalmente antes de cada sesión de seguimiento.
                            </li>
                        </ul>

                        <div className="highlight-warning">
                            <strong>Recordatorio de privacidad:</strong> Si las fichas de causas tienen datos
                            identificados de clientes, aplicá la anonimización de M8 U3 antes de subirlas
                            al agente. O usá un plan Team/Enterprise con las garantías adecuadas.
                        </div>
                    </article>
                </section>

                <section id="flujo-semanal" className="page__section">
                    <h2 className="page__section-title">3. El flujo de seguimiento semanal</h2>
                    <article className="long-form-content">

                        <h3>Paso 1: Actualizar el registro (vos, 10 minutos)</h3>
                        <p>
                            Antes de llamar al agente, actualizás las fichas de las causas con movimientos
                            de la semana: nuevas actuaciones, notificaciones recibidas, plazos que vencieron,
                            próximas fechas. Esta parte es manual — el agente no puede saber qué pasó
                            en el MEV si no se lo contás.
                        </p>

                        <h3>Paso 2: Análisis de vencimientos (agente)</h3>
                        <div className="full-prompt-example">
                            <p>
                                "Acá está el estado actualizado de mis causas: [pegás el registro].
                                Fecha de hoy: [fecha]. Analizá: (1) ¿Hay plazos que vencen en los próximos
                                7 días? Listálos con la causa y la fecha. (2) ¿Hay plazos que vencen en los
                                próximos 30 días que requieren preparación ahora? (3) ¿Hay alguna causa
                                donde el estado indica que debería haber habido una actuación y no aparece?
                                Presentá el resultado como lista de urgencias ordenada por fecha."
                            </p>
                        </div>

                        <h3>Paso 3: Resumen ejecutivo semanal (agente)</h3>
                        <div className="full-prompt-example">
                            <p>
                                "Con el mismo estado de causas, generá el resumen ejecutivo de la semana:
                                (1) Las 3-5 causas que requieren acción esta semana y qué acción concreta.
                                (2) Las causas en espera sin urgencias inmediatas.
                                (3) Alertas especiales: alguna causa donde el estado sugiere que hay un
                                problema de seguimiento (sin movimiento por más de X semanas en proceso activo,
                                plazos que no aparecen registrados pero deberían estar, etc.).
                                Formato: tabla corta + párrafo de síntesis. Sin tecnicismos innecesarios."
                            </p>
                        </div>

                        <h3>Paso 4: Preparación de la semana (agente)</h3>
                        <div className="full-prompt-example">
                            <p>
                                "Para las causas con acción esta semana, dame para cada una:
                                ¿Qué necesito tener listo antes de actuar? (documentos, plazos, información
                                del cliente). ¿Hay algo en el estado actual que sugiera algún riesgo que
                                deba considerar antes de avanzar? Sé breve — una o dos líneas por causa."
                            </p>
                        </div>
                    </article>
                </section>

                <section id="alertas" className="page__section">
                    <h2 className="page__section-title">4. Sistema de alertas por tipos de plazo</h2>
                    <article className="long-form-content">
                        <p>
                            No todos los plazos son iguales. El agente puede categorizarlos para que
                            la priorización sea más clara:
                        </p>
                        <div className="table-container">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Tipo de plazo</th>
                                        <th>Alerta con anticipación</th>
                                        <th>Por qué</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Plazo fatal (perentorio)</td>
                                        <td>14 días</td>
                                        <td>Sin posibilidad de prórroga — requiere preparación previa</td>
                                    </tr>
                                    <tr>
                                        <td>Audiencia / acto procesal</td>
                                        <td>7 días</td>
                                        <td>Requiere preparación de preguntas, documentos, testigos</td>
                                    </tr>
                                    <tr>
                                        <td>Vencimiento de respuesta</td>
                                        <td>5 días</td>
                                        <td>Tiempo para redactar y revisar el escrito</td>
                                    </tr>
                                    <tr>
                                        <td>Notificación para notificar a cliente</td>
                                        <td>3 días</td>
                                        <td>El cliente necesita tiempo para reaccionar</td>
                                    </tr>
                                    <tr>
                                        <td>Renovación de cautelar / medida</td>
                                        <td>20 días</td>
                                        <td>Requiere gestión y a veces fondos del cliente</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Agregás esta tabla a las instrucciones del Project de seguimiento. El agente
                            la usa como referencia para clasificar la urgencia de cada alerta.
                        </p>
                    </article>
                </section>

                <section id="n8n" className="page__section">
                    <h2 className="page__section-title">5. El siguiente nivel: automatización con n8n</h2>
                    <article className="long-form-content">
                        <p>
                            El flujo de las secciones anteriores es manual: vos copiás el estado de causas,
                            vos pegás en el prompt, vos lees el resultado. Funciona y es mucho mejor que nada.
                        </p>
                        <p>
                            El siguiente nivel — para quien quiera invertir 2-3 horas de configuración —
                            es automatizar el trigger del proceso con n8n:
                        </p>
                        <div className="flow-steps">
                            <div className="flow-step">
                                <strong>1. Google Sheets como base de causas:</strong> El registro de causas vive
                                en una hoja de cálculo. Vos la actualizás durante la semana cuando hay movimientos.
                            </div>
                            <div className="flow-step">
                                <strong>2. n8n ejecuta el análisis cada lunes a las 8am:</strong> Lee la hoja
                                de cálculo, llama a la API de Claude con el prompt de seguimiento, y envía
                                el resultado por email o WhatsApp.
                            </div>
                            <div className="flow-step">
                                <strong>3. Vos recibís el resumen semanal:</strong> Sin abrir nada, sin copiar
                                nada. El lunes a la mañana tenés en el inbox el estado de tus causas con
                                las alertas de la semana.
                            </div>
                        </div>
                        <p>
                            Esta arquitectura se cubre en detalle en el Módulo 6 U2 (n8n y Make para el estudio).
                            Si querés implementarla ahora, el flujo básico es: Google Sheets → n8n → API Claude → Email.
                        </p>
                    </article>
                </section>

                <section id="mev" className="page__section">
                    <h2 className="page__section-title">6. Integración con el MEV de la SCBA</h2>
                    <article className="long-form-content">
                        <p>
                            La Mesa de Entradas Virtual de la SCBA (MEV) no tiene API pública disponible
                            para integración directa. Eso significa que la actualización del estado de
                            causas provinciales es manual: entrás al MEV, revisás las novedades,
                            y actualizás tu registro.
                        </p>
                        <p>
                            Para agilizar esa parte hay un skill específico en este sistema:
                            el skill <strong>mev-navigator</strong>, que cuando estás logueado en el MEV
                            puede ayudarte a analizar y registrar las novedades de cada causa en formato
                            estructurado para el agente de seguimiento.
                        </p>
                        <p>
                            El flujo integrado sería: MEV (con mev-navigator para extracción) →
                            registro estructurado → agente de seguimiento → resumen semanal.
                        </p>
                    </article>
                </section>

                <section id="checklist" className="page__section">
                    <h2 className="page__section-title">7. Checklist de esta unidad</h2>
                    <article className="long-form-content">
                        <div className="checklist-box">
                            <ul className="checklist">
                                <li>☐ Estructuré el registro de mis causas activas en el formato estándar</li>
                                <li>☐ Configuré el Project de seguimiento con la tabla de tipos de plazo</li>
                                <li>☐ Hice el primer ciclo completo de seguimiento semanal con el agente</li>
                                <li>☐ El agente detectó correctamente los vencimientos próximos</li>
                                <li>☐ Sé cómo actualizar el registro después de las novedades del MEV</li>
                                <li>☐ Evalué si la automatización con n8n es relevante para mi volumen de causas</li>
                            </ul>
                        </div>
                    </article>
                </section>

                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/agents-u3" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M7 U3: Agente de redacción jurídica</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/agents-u5" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            U5 – Orquestación: múltiples agentes en un caso →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgentsM7U4

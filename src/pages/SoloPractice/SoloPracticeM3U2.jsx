import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'

function SoloPracticeM3U2() {
    return (
        <div className="page">
            <header className="page__header">
                <span className="page__module-tag">Módulo 3 · Unidad 2</span>
                <h1 className="page__title">Gestión Contable y Fiscal Automatizada</h1>
                <p className="page__description">
                    Orden administrativo sin perder control profesional
                </p>
            </header>

            <div className="page__content">
                {/* Sección 1: Objetivos */}
                <section id="objetivos" className="page__section">
                    <h2 className="page__section-title">1. ¿Qué vas a aprender?</h2>
                    <article className="long-form-content">
                        <p>Al finalizar esta unidad vas a poder:</p>
                        <ul className="learning-objectives">
                            <li>Comprender qué partes de la gestión contable y fiscal <strong>sí pueden automatizarse</strong> con IA.</li>
                            <li>Diseñar flujos simples para registrar ingresos, gastos y comprobantes.</li>
                            <li>Reducir errores administrativos sin perder trazabilidad ni control.</li>
                            <li>Preparar información clara y ordenada para tu contador.</li>
                            <li>Evitar riesgos legales derivados de una automatización mal diseñada.</li>
                        </ul>
                    </article>
                </section>

                {/* Sección 2: Concepto central */}
                <section id="concepto" className="page__section">
                    <h2 className="page__section-title">2. Concepto central</h2>
                    <article className="long-form-content">
                        <blockquote className="concept-quote">
                            La IA no reemplaza al contador: ordena la información para que el contador trabaje mejor y más rápido.
                        </blockquote>
                        <p>
                            El objetivo no es hacer contabilidad "con IA", sino <strong>eliminar fricción administrativa</strong> entre el abogado, sus datos y el profesional contable.
                        </p>
                    </article>
                </section>

                {/* Sección 3: Problemas que resuelve */}
                <section id="problemas" className="page__section">
                    <h2 className="page__section-title">3. Qué problemas resuelve la automatización</h2>
                    <article className="long-form-content">
                        <p>En la práctica diaria del abogado independiente, los principales problemas son:</p>
                        <div className="failure-causes">
                            <div className="failure-cause">
                                <span className="failure-icon">📄</span>
                                <span>Comprobantes dispersos</span>
                            </div>
                            <div className="failure-cause">
                                <span className="failure-icon">💰</span>
                                <span>Ingresos mal registrados</span>
                            </div>
                            <div className="failure-cause">
                                <span className="failure-icon">📊</span>
                                <span>Gastos sin clasificar</span>
                            </div>
                            <div className="failure-cause">
                                <span className="failure-icon">📅</span>
                                <span>Información incompleta al cierre del mes</span>
                            </div>
                        </div>
                        <p className="highlight-warning">
                            La IA actúa como <strong>sistema de orden previo</strong>, no como autoridad fiscal.
                        </p>
                    </article>
                </section>

                {/* Sección 4: Qué automatizar */}
                <section id="que-automatizar" className="page__section">
                    <h2 className="page__section-title">4. Qué tareas contables son automatizables</h2>
                    <article className="long-form-content">
                        <p>Conviene automatizar tareas que sean:</p>
                        <div className="task-criteria">
                            <span className="task-criterion">Repetitivas</span>
                            <span className="task-criterion">Basadas en reglas</span>
                            <span className="task-criterion">Verificables</span>
                        </div>
                        <p>Ejemplos concretos:</p>
                        <ul className="application-list">
                            <li>Lectura y clasificación de facturas</li>
                            <li>Extracción de datos (fecha, monto, proveedor)</li>
                            <li>Etiquetado de gastos por categoría</li>
                            <li>Generación de reportes mensuales preliminares</li>
                        </ul>
                    </article>
                </section>

                {/* Sección 5: Qué NO automatizar */}
                <section id="que-no-automatizar" className="page__section">
                    <h2 className="page__section-title">5. Qué tareas NO deben automatizarse</h2>
                    <article className="long-form-content">
                        <p>Nunca delegar en IA:</p>
                        <div className="risk-list">
                            <div className="risk-item">
                                <span className="risk-icon">🚫</span>
                                <span>Interpretación normativa</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">🚫</span>
                                <span>Declaraciones fiscales</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">🚫</span>
                                <span>Presentaciones ante organismos</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">🚫</span>
                                <span>Decisiones impositivas estratégicas</span>
                            </div>
                        </div>
                        <p className="highlight-warning">
                            Automatizar estas tareas <strong>no es eficiencia, es riesgo</strong>.
                        </p>
                    </article>
                </section>

                {/* Sección 6: Flujo básico */}
                <section id="flujo" className="page__section">
                    <h2 className="page__section-title">6. Flujo básico de gestión contable asistida</h2>
                    <article className="long-form-content">
                        <p>Ejemplo de flujo simple:</p>
                        <div className="layer-diagram">
                            <div className="layer-step">
                                <div className="layer-step__number">1</div>
                                <div className="layer-step__content">
                                    <h4>Recepción de comprobantes</h4>
                                    <p>Mail, PDF, foto</p>
                                </div>
                            </div>
                            <div className="layer-connector">↓</div>
                            <div className="layer-step">
                                <div className="layer-step__number">2</div>
                                <div className="layer-step__content">
                                    <h4>Extracción automática de datos</h4>
                                </div>
                            </div>
                            <div className="layer-connector">↓</div>
                            <div className="layer-step">
                                <div className="layer-step__number">3</div>
                                <div className="layer-step__content">
                                    <h4>Clasificación preliminar</h4>
                                </div>
                            </div>
                            <div className="layer-connector">↓</div>
                            <div className="layer-step">
                                <div className="layer-step__number">4</div>
                                <div className="layer-step__content">
                                    <h4>Revisión humana</h4>
                                </div>
                            </div>
                            <div className="layer-connector">↓</div>
                            <div className="layer-step">
                                <div className="layer-step__number">5</div>
                                <div className="layer-step__content">
                                    <h4>Entrega de reporte al contador</h4>
                                </div>
                            </div>
                        </div>
                        <p className="highlight-success">
                            Este flujo reduce errores y tiempo <strong>sin invadir incumbencias</strong>.
                        </p>
                    </article>
                </section>

                {/* Sección 7: Control y alertas */}
                <section id="alertas" className="page__section">
                    <h2 className="page__section-title">7. Uso de IA para control y alertas</h2>
                    <article className="long-form-content">
                        <p>La IA puede ayudar a:</p>
                        <div className="strategic-uses">
                            <div className="strategic-use">
                                <span className="strategic-use__icon">⚠️</span>
                                <span>Detectar gastos atípicos</span>
                            </div>
                            <div className="strategic-use">
                                <span className="strategic-use__icon">📉</span>
                                <span>Señalar períodos sin facturación</span>
                            </div>
                            <div className="strategic-use">
                                <span className="strategic-use__icon">📋</span>
                                <span>Alertar sobre documentación faltante</span>
                            </div>
                        </div>
                        <p className="highlight-success">
                            Siempre como <strong>sistema de alerta</strong>, no de decisión.
                        </p>
                    </article>
                </section>

                {/* Sección 7.5: Prompts para gestión contable */}
                <section id="prompts-contables" className="page__section">
                    <h2 className="page__section-title">7.5. Prompts específicos para gestión contable</h2>
                    <article className="long-form-content">
                        <p>Estos prompts te ayudan a automatizar tareas contables repetitivas manteniendo el control profesional:</p>

                        <div className="component-card">
                            <div className="component-content">
                                <h4>📸 Clasificar gastos desde foto de factura</h4>
                                <blockquote className="prompt-example">
                                    Actuás como asistente contable para abogados.<br /><br />

                                    Analizá esta factura [adjuntar imagen o pegar datos] y extraé:<br /><br />

                                    1. Proveedor/Emisor<br />
                                    2. Fecha de emisión<br />
                                    3. Monto total<br />
                                    4. Concepto/Descripción<br />
                                    5. Categoría sugerida (ej: servicios profesionales, insumos de oficina, tecnología, etc.)<br />
                                    6. Si es deducible o no (según normativa argentina para profesionales independientes)<br /><br />

                                    Formato: tabla con los datos extraídos.
                                </blockquote>
                            </div>
                        </div>

                        <div className="component-card">
                            <div className="component-content">
                                <h4>📊 Generar reporte mensual preliminar</h4>
                                <blockquote className="prompt-example">
                                    Actuás como asistente de reportes contables.<br /><br />

                                    Tengo estos datos del mes [mes/año]:<br />
                                    - Ingresos: [listar con fechas y montos]<br />
                                    - Gastos: [listar con fechas, montos y categorías]<br /><br />

                                    Generá un reporte preliminar que incluya:<br />
                                    1. Total de ingresos<br />
                                    2. Total de gastos por categoría<br />
                                    3. Resultado neto (ingresos - gastos)<br />
                                    4. Comparación con mes anterior (si tengo datos)<br />
                                    5. Alertas sobre gastos atípicos o faltantes<br /><br />

                                    Formato: profesional, listo para enviar a mi contador.
                                </blockquote>
                            </div>
                        </div>

                        <div className="component-card">
                            <div className="component-content">
                                <h4>🔍 Detectar inconsistencias en registros</h4>
                                <blockquote className="prompt-example">
                                    Actuás como auditor de datos contables.<br /><br />

                                    Revisá estos registros del mes:<br />
                                    [pegar tabla o lista de movimientos]<br /><br />

                                    Identificá:<br />
                                    1. Duplicados (mismo monto, fecha y concepto)<br />
                                    2. Montos inusuales (muy altos o muy bajos comparados con el promedio)<br />
                                    3. Fechas inconsistentes (fuera del período)<br />
                                    4. Categorías mal asignadas<br />
                                    5. Comprobantes faltantes<br /><br />

                                    Presentá un informe de inconsistencias con sugerencias de corrección.
                                </blockquote>
                            </div>
                        </div>

                        <div className="component-card">
                            <div className="component-content">
                                <h4>📧 Preparar información para el contador</h4>
                                <blockquote className="prompt-example">
                                    Actuás como asistente de preparación de documentación contable.<br /><br />

                                    Necesito preparar la información del mes [mes/año] para mi contador.<br /><br />

                                    Tengo:<br />
                                    - [X] facturas de ingresos<br />
                                    - [X] comprobantes de gastos<br />
                                    - [X] movimientos bancarios<br /><br />

                                    Generá:<br />
                                    1. Un resumen ejecutivo del mes<br />
                                    2. Lista de documentación adjunta<br />
                                    3. Notas sobre situaciones especiales (ej: gasto extraordinario, ingreso diferido)<br />
                                    4. Preguntas que debería hacerle a mi contador<br /><br />

                                    Formato: email profesional listo para enviar.
                                </blockquote>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Sección 7.6: Caso práctico paso a paso */}
                <section id="caso-practico-facturas" className="page__section">
                    <h2 className="page__section-title">7.6. Caso práctico: Procesar 10 facturas del mes con IA</h2>
                    <article className="long-form-content">
                        <h3>Escenario</h3>
                        <p>
                            Es fin de mes y tenés 10 facturas de gastos acumuladas en tu email y escritorio. Necesitás procesarlas para tu contador antes del día 5 del mes siguiente.
                        </p>

                        <h3>Método tradicional (Sin IA)</h3>
                        <div className="comparison-box comparison-box--bad">
                            <ul>
                                <li>⏱️ Abrir cada PDF manualmente</li>
                                <li>✍️ Copiar datos a Excel: proveedor, fecha, monto, concepto</li>
                                <li>🗂️ Clasificar cada gasto (¿servicios? ¿insumos? ¿tecnología?)</li>
                                <li>🧮 Sumar totales por categoría</li>
                                <li>📧 Redactar email para el contador</li>
                                <li><strong>Tiempo estimado: 45-60 minutos</strong></li>
                            </ul>
                        </div>

                        <h3>Método con IA (Paso a paso)</h3>
                        <div className="comparison-box comparison-box--good">
                            <div className="layer-diagram">
                                <div className="layer-step">
                                    <div className="layer-step__number">1</div>
                                    <div className="layer-step__content">
                                        <h4>Reunir facturas (2 min)</h4>
                                        <p>Descargá todos los PDFs a una carpeta. Si tenés fotos, también.</p>
                                    </div>
                                </div>
                                <div className="layer-connector">↓</div>
                                <div className="layer-step">
                                    <div className="layer-step__number">2</div>
                                    <div className="layer-step__content">
                                        <h4>Procesar con IA (10 min)</h4>
                                        <p>Usá el prompt "Clasificar gastos desde foto" para cada factura. La IA extrae: proveedor, fecha, monto, categoría.</p>
                                    </div>
                                </div>
                                <div className="layer-connector">↓</div>
                                <div className="layer-step">
                                    <div className="layer-step__number">3</div>
                                    <div className="layer-step__content">
                                        <h4>Revisar y corregir (5 min)</h4>
                                        <p>Verificás que las categorías sean correctas. Ajustás si es necesario.</p>
                                    </div>
                                </div>
                                <div className="layer-connector">↓</div>
                                <div className="layer-step">
                                    <div className="layer-step__number">4</div>
                                    <div className="layer-step__content">
                                        <h4>Generar reporte (3 min)</h4>
                                        <p>Usás el prompt "Generar reporte mensual" con los datos procesados.</p>
                                    </div>
                                </div>
                                <div className="layer-connector">↓</div>
                                <div className="layer-step">
                                    <div className="layer-step__number">5</div>
                                    <div className="layer-step__content">
                                        <h4>Enviar al contador (2 min)</h4>
                                        <p>Usás el prompt "Preparar información para contador" para generar el email.</p>
                                    </div>
                                </div>
                            </div>
                            <p className="highlight-success">
                                <strong>Tiempo total: ~22 minutos</strong> (ahorrás 60% del tiempo)
                            </p>
                        </div>

                        <h3>Resultado</h3>
                        <p>Tenés un reporte ordenado, clasificado y listo para tu contador, con menos errores y en menos de la mitad del tiempo.</p>
                    </article>
                </section>

                {/* Sección 7.7: Integración con herramientas */}
                <section id="integracion-herramientas" className="page__section">
                    <h2 className="page__section-title">7.7. Integración con herramientas cotidianas</h2>
                    <article className="long-form-content">
                        <h3>Usar IA con Google Sheets/Excel</h3>
                        <p>Podés usar IA para generar fórmulas y automatizar cálculos sin ser experto en hojas de cálculo:</p>

                        <div className="component-card">
                            <div className="component-content">
                                <h4>Ejemplo: Generar fórmula de Excel</h4>
                                <blockquote className="prompt-example">
                                    Necesito una fórmula de Excel que:<br /><br />

                                    - Sume todos los gastos de la columna C<br />
                                    - Pero solo los que en la columna D digan "Deducible"<br />
                                    - Y que la fecha en columna B sea del mes actual<br /><br />

                                    Explicame la fórmula paso a paso.
                                </blockquote>
                                <p className="highlight-success">
                                    La IA te genera la fórmula exacta y te explica cómo usarla.
                                </p>
                            </div>
                        </div>

                        <h3>Flujo con Gmail + IA para facturas</h3>
                        <div className="strategic-uses">
                            <div className="strategic-use">
                                <span className="strategic-use__icon">📧</span>
                                <span><strong>Paso 1:</strong> Creá una etiqueta "Facturas" en Gmail</span>
                            </div>
                            <div className="strategic-use">
                                <span className="strategic-use__icon">🔍</span>
                                <span><strong>Paso 2:</strong> Filtrá emails con PDFs adjuntos</span>
                            </div>
                            <div className="strategic-use">
                                <span className="strategic-use__icon">🤖</span>
                                <span><strong>Paso 3:</strong> Usá IA para extraer datos de cada PDF</span>
                            </div>
                            <div className="strategic-use">
                                <span className="strategic-use__icon">📊</span>
                                <span><strong>Paso 4:</strong> Consolidá en una planilla</span>
                            </div>
                        </div>

                        <h3>Prompt para generar categorías personalizadas</h3>
                        <div className="component-card">
                            <div className="component-content">
                                <blockquote className="prompt-example">
                                    Actuás como consultor contable para abogados independientes.<br /><br />

                                    Ayudame a crear un sistema de categorías de gastos que sea:<br />
                                    1. Simple (máximo 8-10 categorías)<br />
                                    2. Útil para control de costos<br />
                                    3. Alineado con deducciones fiscales en Argentina<br /><br />

                                    Mi práctica se enfoca en [área legal] y trabajo desde [casa/oficina].
                                </blockquote>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Sección 7.8: Template de control mensual */}
                <section id="template-control" className="page__section">
                    <h2 className="page__section-title">7.8. Template: Planilla de control mensual</h2>
                    <article className="long-form-content">
                        <p><strong>Copiar y adaptar para tu gestión:</strong></p>
                        <div className="component-card">
                            <div className="component-content">
                                <blockquote className="prompt-example" style={{ textAlign: 'left' }}>
                                    <strong>CONTROL CONTABLE MENSUAL</strong><br /><br />

                                    <strong>Mes/Año:</strong> [MM/AAAA]<br /><br />

                                    <strong>INGRESOS</strong><br />
                                    | Fecha | Cliente | Concepto | Monto | Facturado |<br />
                                    |-------|---------|----------|-------|-----------|<br />
                                    | | | | | ☐ |<br /><br />

                                    <strong>Total Ingresos:</strong> $______<br /><br />

                                    <strong>GASTOS POR CATEGORÍA</strong><br />
                                    - Servicios profesionales: $______<br />
                                    - Tecnología y software: $______<br />
                                    - Insumos de oficina: $______<br />
                                    - Servicios públicos: $______<br />
                                    - Capacitación: $______<br />
                                    - Otros: $______<br /><br />

                                    <strong>Total Gastos:</strong> $______<br /><br />

                                    <strong>RESULTADO NETO:</strong> $______ (Ingresos - Gastos)<br /><br />

                                    <strong>VERIFICACIONES</strong><br />
                                    ☐ Todas las facturas están archivadas<br />
                                    ☐ Comprobantes digitalizados<br />
                                    ☐ Movimientos bancarios conciliados<br />
                                    ☐ Información enviada al contador<br /><br />

                                    <strong>NOTAS ESPECIALES:</strong><br />
                                    [Espacio para observaciones]
                                </blockquote>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Sección 8: Riesgos */}
                <section id="riesgos" className="page__section">
                    <h2 className="page__section-title">8. Riesgos comunes y malas prácticas</h2>
                    <article className="long-form-content">
                        <div className="risk-list">
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>Confiar ciegamente en clasificaciones automáticas</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>Mezclar datos personales y del estudio</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>No revisar reportes generados</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>Perder respaldo documental</span>
                            </div>
                        </div>
                        <blockquote className="concept-quote" style={{ fontSize: 'var(--font-size-xl)' }}>
                            La automatización sin auditoría es un error recurrente.
                        </blockquote>
                    </article>
                </section>

                {/* Sección 9: Ideas clave */}
                <section id="ideas-clave" className="page__section">
                    <h2 className="page__section-title">9. Ideas clave para memorizar</h2>
                    <article className="long-form-content">
                        <ul className="key-points">
                            <li>IA para <strong>ordenar</strong>, no para declarar.</li>
                            <li>El contador <strong>sigue siendo central</strong>.</li>
                            <li>Automatizar lo repetitivo <strong>reduce errores</strong>.</li>
                            <li><strong>Revisión humana</strong> obligatoria.</li>
                            <li><strong>Trazabilidad</strong> siempre.</li>
                        </ul>
                    </article>
                </section>

                {/* Sección 10: Conexión */}
                <section id="conexion" className="page__section">
                    <h2 className="page__section-title">10. Conexión con el sistema completo</h2>
                    <article className="long-form-content">
                        <p>Esta unidad continúa la organización operativa (Unidad 1) y prepara el terreno para:</p>
                        <div className="strategic-uses">
                            <div className="strategic-use">
                                <span className="strategic-use__icon">📢</span>
                                <span>Marketing legal</span>
                            </div>
                            <div className="strategic-use">
                                <span className="strategic-use__icon">📈</span>
                                <span>Escalabilidad del estudio</span>
                            </div>
                            <div className="strategic-use">
                                <span className="strategic-use__icon">📊</span>
                                <span>Reportes financieros claros</span>
                            </div>
                        </div>
                        <p className="highlight-warning">
                            Sin orden contable, <strong>no hay crecimiento sostenible</strong>.
                        </p>
                    </article>
                </section>

                {/* Resultado esperado */}
                <section id="resultado" className="page__section">
                    <h2 className="page__section-title">Resultado esperado</h2>
                    <article className="long-form-content">
                        <div className="result-box">
                            <p>
                                El abogado que completa esta unidad deja de improvisar su gestión fiscal y comienza a <strong>operar con información clara, ordenada y auditada</strong>, usando IA como soporte administrativo.
                            </p>
                        </div>
                    </article>
                </section>

                {/* Footer de navegación */}
                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/solo-practice" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M3 U1: Abogacía por Cuenta Propia</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--complete">✓ Unidad 2 Completa</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/solo-practice-u3" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Unidad 3 – Escritura Persuasiva Digital →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SoloPracticeM3U2

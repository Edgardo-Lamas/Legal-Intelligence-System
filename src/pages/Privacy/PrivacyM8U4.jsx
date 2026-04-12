import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function PrivacyM8U4() {
    return (
        <div className="page">
            <PageSEO
                title="Instancias privadas, planes Enterprise y modelos locales para abogados · M8 U4"
                description="Cuándo escalar a planes Enterprise, cómo funcionan los modelos locales sin conexión (Ollama, LM Studio) y qué nivel de privacidad ofrece cada opción."
                path="/privacy-u4"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 8 · Unidad 4</span>
                <h1 className="page__title">Instancias privadas, Enterprise y modelos locales</h1>
                <p className="page__description">
                    Cuando las medidas básicas no son suficientes: opciones avanzadas de privacidad para
                    estudios con mayor exposición al riesgo o exigencias contractuales con clientes.
                </p>
            </header>

            <div className="page__content">

                <section id="cuando-escalar" className="page__section">
                    <h2 className="page__section-title">1. ¿Cuándo las medidas básicas no alcanzan?</h2>
                    <article className="long-form-content">
                        <p>
                            Para la gran mayoría de abogados individuales, la combinación de plan Pro de Claude,
                            anonimización y criterio en el uso es suficiente. Pero hay situaciones donde eso no alcanza:
                        </p>
                        <ul className="key-points">
                            <li>
                                <strong>Clientes corporativos con contratos NDA estrictos</strong> que requieren
                                que ninguna información del proyecto salga de la organización.
                            </li>
                            <li>
                                <strong>Causas con información clasificada o reservada</strong> donde la
                                regulación específica prohíbe procesar datos en sistemas de terceros.
                            </li>
                            <li>
                                <strong>Estudios grandes</strong> que necesitan que múltiples abogados compartan
                                documentos confidenciales sin que salgan del entorno controlado.
                            </li>
                            <li>
                                <strong>Clientes del sector financiero, salud o gobierno</strong> con
                                regulaciones sectoriales de privacidad de datos.
                            </li>
                        </ul>
                        <p>
                            Para esos casos existen tres escalones: planes Team/Enterprise de las plataformas,
                            instancias privadas en infraestructura propia, y modelos locales sin conexión.
                        </p>
                    </article>
                </section>

                <section id="enterprise" className="page__section">
                    <h2 className="page__section-title">2. Planes Team y Enterprise: qué garantizan realmente</h2>
                    <article className="long-form-content">

                        <h3>Claude Team y Enterprise (Anthropic)</h3>
                        <ul className="application-list">
                            <li><strong>Sin entrenamiento:</strong> Garantía contractual de que tus datos no se usan para mejorar modelos</li>
                            <li><strong>Cero retención en Enterprise:</strong> Los datos de la conversación no se guardan después de la sesión</li>
                            <li><strong>DPA disponible:</strong> Data Processing Agreement para cumplimiento regulatorio</li>
                            <li><strong>SSO y administración centralizada:</strong> Control de acceso para equipos</li>
                            <li><strong>Precio:</strong> Team ~$25/usuario/mes, Enterprise: precio a negociar</li>
                        </ul>

                        <h3>ChatGPT Enterprise (OpenAI)</h3>
                        <ul className="application-list">
                            <li><strong>Sin entrenamiento:</strong> Garantía contractual</li>
                            <li><strong>SOC 2 Type II:</strong> Certificación de seguridad empresarial</li>
                            <li><strong>Contexto extendido:</strong> 128K tokens</li>
                            <li><strong>Admin dashboard:</strong> Gestión de usuarios y uso</li>
                            <li><strong>Precio:</strong> Negociación directa con OpenAI, mínimo 150 usuarios</li>
                        </ul>

                        <h3>Google Workspace + Gemini</h3>
                        <ul className="application-list">
                            <li><strong>Datos de la organización:</strong> No se usan para entrenamiento de modelos públicos</li>
                            <li><strong>Residencia de datos:</strong> Podés configurar en qué región se almacenan</li>
                            <li><strong>eDiscovery y retención:</strong> Cumplimiento empresarial</li>
                            <li><strong>Precio:</strong> Incluido en planes Google Workspace Business/Enterprise</li>
                        </ul>

                        <div className="highlight-warning">
                            <strong>Advertencia importante:</strong> "Enterprise" en el nombre no significa
                            automáticamente máxima privacidad. Leé los términos específicos del plan que
                            contratás. Las garantías varían entre versiones y regiones.
                        </div>
                    </article>
                </section>

                <section id="api" className="page__section">
                    <h2 className="page__section-title">3. Usar la API directamente: control total sobre los datos</h2>
                    <article className="long-form-content">
                        <p>
                            Una opción que muy pocos abogados consideran pero que ofrece un nivel intermedio
                            de control: usar la API de Claude o de OpenAI directamente, sin pasar por la
                            interfaz de chat.
                        </p>
                        <p>
                            Cuando usás la API:
                        </p>
                        <ul className="application-list">
                            <li>Anthropic <strong>no entrena modelos</strong> con datos enviados por API (política estándar)</li>
                            <li>Podés configurar <strong>zero data retention</strong>: los datos no se guardan en logs</li>
                            <li>Los datos fluyen directamente entre tu aplicación y el modelo, sin interfaces intermedias</li>
                            <li>Podés implementarlo en tu propia infraestructura para mayor control</li>
                        </ul>
                        <p>
                            Esta es la arquitectura detrás del widget <strong>Alcance Legal Penal</strong> de
                            este sitio: una API que conecta Claude con una base de conocimiento específica,
                            sin que los datos pasen por interfaces de chat estándar. El Módulo 5 explica
                            cómo construir esto para tu propio uso.
                        </p>
                    </article>
                </section>

                <section id="local" className="page__section">
                    <h2 className="page__section-title">4. Modelos locales: la privacidad absoluta y sus costos</h2>
                    <article className="long-form-content">
                        <p>
                            Existe una clase de solución donde los datos nunca salen de tu computadora:
                            los <strong>modelos de lenguaje que corren localmente</strong>. La información
                            no viaja a ningún servidor externo.
                        </p>

                        <h3>Herramientas principales</h3>
                        <div className="comparison-grid">
                            <div className="comparison-box">
                                <h4>Ollama</h4>
                                <ul>
                                    <li><strong>Qué es:</strong> Gestor de modelos locales para Mac, Windows y Linux</li>
                                    <li><strong>Modelos disponibles:</strong> Llama 3, Mistral, Gemma, y decenas más</li>
                                    <li><strong>Instalación:</strong> Simple, interfaz de línea de comandos</li>
                                    <li><strong>Privacidad:</strong> Total — sin conexión requerida</li>
                                </ul>
                            </div>
                            <div className="comparison-box">
                                <h4>LM Studio</h4>
                                <ul>
                                    <li><strong>Qué es:</strong> Interfaz gráfica para correr modelos locales</li>
                                    <li><strong>Ventaja:</strong> Más amigable que Ollama, sin línea de comandos</li>
                                    <li><strong>Modelos:</strong> Compatible con modelos de Hugging Face</li>
                                    <li><strong>Privacidad:</strong> Total — sin conexión requerida</li>
                                </ul>
                            </div>
                        </div>

                        <h3>El trade-off que hay que conocer</h3>
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--good">
                                <h4>✅ Ventajas de modelos locales</h4>
                                <ul>
                                    <li>Privacidad absoluta: los datos nunca salen de tu equipo</li>
                                    <li>Sin costo por uso (después de la configuración)</li>
                                    <li>Sin límites de requests</li>
                                    <li>Funciona sin internet</li>
                                </ul>
                            </div>
                            <div className="comparison-box comparison-box--bad">
                                <h4>✗ Desventajas reales</h4>
                                <ul>
                                    <li>Capacidad muy inferior a Claude Sonnet o GPT-4o</li>
                                    <li>Requieren hardware potente (16GB RAM mínimo, GPU ideal)</li>
                                    <li>Configuración técnica más compleja</li>
                                    <li>Los mejores modelos locales equivalen a modelos comerciales de hace 2 años</li>
                                </ul>
                            </div>
                        </div>

                        <div className="highlight-warning">
                            <strong>Evaluación honesta:</strong> Para análisis jurídico complejo, los modelos
                            locales disponibles en 2025 aún no igualan la calidad de Claude Sonnet o GPT-4o.
                            Son útiles para tareas simples con máxima necesidad de privacidad, pero no para
                            el trabajo jurídico avanzado que cubre este curso. Esta situación evoluciona rápido
                            y puede cambiar en 12–18 meses.
                        </div>
                    </article>
                </section>

                <section id="decision" className="page__section">
                    <h2 className="page__section-title">5. Tabla de decisión: qué solución para qué perfil</h2>
                    <article className="long-form-content">
                        <div className="table-container">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Perfil</th>
                                        <th>Solución recomendada</th>
                                        <th>Costo aprox.</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Abogado individual, casos estándar</td>
                                        <td>Claude Pro + ChatGPT configurado + anonimización</td>
                                        <td>USD 40/mes</td>
                                    </tr>
                                    <tr>
                                        <td>Abogado individual, clientes corporativos NDA</td>
                                        <td>Claude Team o API directa con zero retention</td>
                                        <td>USD 25–50/mes</td>
                                    </tr>
                                    <tr>
                                        <td>Estudio pequeño (2–5 abogados)</td>
                                        <td>Claude Team + Google Workspace con Gemini</td>
                                        <td>USD 50–150/mes</td>
                                    </tr>
                                    <tr>
                                        <td>Estudio mediano con datos regulados</td>
                                        <td>Claude Enterprise o instancia privada via API</td>
                                        <td>Negociación directa</td>
                                    </tr>
                                    <tr>
                                        <td>Máxima privacidad, calidad no crítica</td>
                                        <td>Modelos locales (Ollama + Llama 3)</td>
                                        <td>Sin costo de uso</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </article>
                </section>

                <section id="checklist" className="page__section">
                    <h2 className="page__section-title">6. Checklist de esta unidad</h2>
                    <article className="long-form-content">
                        <div className="checklist-box">
                            <ul className="checklist">
                                <li>☐ Sé qué diferencia hay entre un plan Plus y un plan Team en términos de privacidad</li>
                                <li>☐ Entiendo cuándo tiene sentido escalar a Enterprise</li>
                                <li>☐ Conozco qué es un modelo local y qué trade-offs implica</li>
                                <li>☐ Identifiqué qué perfil me corresponde y qué solución es adecuada para mí</li>
                                <li>☐ Sé que usar la API directa ofrece mayor control sobre los datos que la interfaz de chat</li>
                            </ul>
                        </div>
                    </article>
                </section>

                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/privacy-u3" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M8 U3: Cómo usar IA con información sensible</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/privacy-u5" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            U5 – Ética profesional en la era de los LLM →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyM8U4

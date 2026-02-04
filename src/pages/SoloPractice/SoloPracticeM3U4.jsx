import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'

function SoloPracticeM3U4() {
    return (
        <div className="page">
            <header className="page__header">
                <span className="page__module-tag">Módulo 3 · Unidad 4</span>
                <h1 className="page__title">Marketing Legal y Posicionamiento</h1>
                <p className="page__description">
                    Estrategia digital para abogados independientes
                </p>
            </header>

            <div className="page__content">
                {/* Sección 1: Objetivos */}
                <section id="objetivos" className="page__section">
                    <h2 className="page__section-title">1. ¿Qué vas a aprender?</h2>
                    <article className="long-form-content">
                        <p>Al finalizar esta unidad vas a poder:</p>
                        <ul className="learning-objectives">
                            <li>Entender <strong>qué es realmente el marketing legal</strong> y en qué se diferencia del marketing tradicional.</li>
                            <li>Usar IA para <strong>analizar tu competencia</strong> y encontrar oportunidades de posicionamiento.</li>
                            <li>Construir una <strong>marca personal profesional</strong> sin caer en prácticas publicitarias prohibidas.</li>
                            <li>Diseñar una <strong>estrategia de contenido</strong> que genere autoridad y confianza.</li>
                            <li>Implementar un <strong>plan de posicionamiento de 90 días</strong> con IA como asistente.</li>
                        </ul>
                        <p className="highlight-warning">
                            Esta unidad no trata de "vender más". Trata de <strong>posicionarte mejor</strong> para que los clientes correctos te encuentren.
                        </p>
                    </article>
                </section>

                {/* Sección 2: Concepto central */}
                <section id="concepto" className="page__section">
                    <h2 className="page__section-title">2. Marketing legal vs. Marketing tradicional</h2>
                    <article className="long-form-content">
                        <p>
                            El marketing legal tiene restricciones éticas y regulatorias que no existen en otros sectores. Los colegios de abogados (en Argentina y la mayoría de países) prohíben:
                        </p>
                        <div className="risk-list">
                            <div className="risk-item">
                                <span className="risk-icon">🚫</span>
                                <span><strong>Promesas de resultados:</strong> "Ganamos el 95% de los casos"</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">🚫</span>
                                <span><strong>Comparaciones directas:</strong> "Somos mejores que..."</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">🚫</span>
                                <span><strong>Publicidad agresiva:</strong> Descuentos, ofertas, urgencia artificial</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">🚫</span>
                                <span><strong>Captación indebida:</strong> Contactar personas en situación de vulnerabilidad</span>
                            </div>
                        </div>
                        <blockquote className="concept-quote">
                            El marketing legal no se basa en vender, sino en <strong>demostrar competencia profesional</strong> de forma ética y sostenible.
                        </blockquote>
                        <p className="highlight-success">
                            La IA te permite hacer esto de forma escalable: generar contenido de valor, analizar tendencias y posicionarte sin violar ninguna norma deontológica.
                        </p>
                    </article>
                </section>

                {/* Sección 3: Análisis de competencia */}
                <section id="analisis-competencia" className="page__section">
                    <h2 className="page__section-title">3. Análisis de competencia con IA</h2>
                    <article className="long-form-content">
                        <p>
                            Antes de posicionarte, necesitás entender <strong>cómo se posicionan otros abogados</strong> en tu área geográfica y especialidad. La IA puede ayudarte a mapear el mercado rápidamente.
                        </p>

                        <h3>Paso 1: Mapeo del mercado local</h3>
                        <p>Usá este prompt para analizar la competencia:</p>
                        <blockquote className="prompt-example">
                            Actuás como consultor de marketing legal.<br /><br />

                            Analizá estos 5 perfiles de LinkedIn de abogados que trabajan en [tu ciudad] especializados en [tu área]:<br />
                            [Pegar URLs o descripciones]<br /><br />

                            Identificá:<br />
                            1. Qué tipo de contenido publican<br />
                            2. Qué tono de comunicación usan<br />
                            3. Qué servicios destacan<br />
                            4. Qué nichos específicos atienden<br />
                            5. Qué oportunidades de diferenciación detectás<br /><br />

                            Presentá el análisis en formato tabla comparativa.
                        </blockquote>

                        <h3>Paso 2: Identificación de nichos desatendidos</h3>
                        <p>Una vez que tenés el mapa, buscá los "huecos":</p>
                        <blockquote className="prompt-example">
                            Basándote en el análisis anterior, identificá:<br /><br />

                            1. Qué tipos de clientes NO están siendo atendidos específicamente<br />
                            2. Qué problemas legales comunes no tienen contenido educativo disponible<br />
                            3. Qué formatos de comunicación no están usando (video, artículos técnicos, casos de estudio, etc.)<br /><br />

                            Sugerí 3 nichos de posicionamiento viables para un abogado con mi perfil.
                        </blockquote>

                        <p className="highlight-success">
                            <strong>Ejemplo práctico:</strong> Si todos los abogados laboralistas de tu ciudad hablan de "despidos", pero nadie explica "acoso laboral" o "licencias por enfermedad", ahí hay una oportunidad de posicionamiento.
                        </p>
                    </article>
                </section>

                {/* Sección 4: Marca personal */}
                <section id="marca-personal" className="page__section">
                    <h2 className="page__section-title">4. Construcción de marca personal profesional</h2>
                    <article className="long-form-content">
                        <p>
                            Tu marca personal es <strong>la percepción que otros tienen de vos como profesional</strong>. No es un logo ni un slogan. Es la suma de:
                        </p>
                        <div className="strategic-uses">
                            <div className="strategic-use">
                                <span className="strategic-use__icon">🎯</span>
                                <span>Tu especialización (qué hacés mejor que otros)</span>
                            </div>
                            <div className="strategic-use">
                                <span className="strategic-use__icon">💬</span>
                                <span>Tu forma de comunicar (cómo explicás conceptos complejos)</span>
                            </div>
                            <div className="strategic-use">
                                <span className="strategic-use__icon">📊</span>
                                <span>Tu consistencia (qué tan predecible sos en calidad)</span>
                            </div>
                            <div className="strategic-use">
                                <span className="strategic-use__icon">🤝</span>
                                <span>Tu propuesta de valor (por qué elegirte a vos y no a otro)</span>
                            </div>
                        </div>

                        <h3>Definir tu propuesta de valor con IA</h3>
                        <p>Usá este prompt para clarificar tu diferenciación:</p>
                        <blockquote className="prompt-example">
                            Actuás como consultor de posicionamiento profesional.<br /><br />

                            Ayudame a definir mi propuesta de valor como abogado.<br /><br />

                            Mi perfil:<br />
                            - Especialidad: [ej: derecho laboral]<br />
                            - Experiencia: [ej: 5 años en estudios medianos]<br />
                            - Ubicación: [ej: Buenos Aires, zona norte]<br />
                            - Tipo de clientes que prefiero: [ej: pymes, emprendedores]<br />
                            - Lo que me diferencia: [ej: explico todo en lenguaje claro, respondo rápido]<br /><br />

                            Generá 3 propuestas de valor diferentes, cada una enfocada en un aspecto distinto de mi perfil.<br />
                            Que sean específicas, creíbles y diferenciadas.
                        </blockquote>

                        <p className="highlight-warning">
                            <strong>Importante:</strong> Tu propuesta de valor NO es "soy el mejor" ni "tengo experiencia". Es algo concreto que el cliente puede verificar o experimentar.
                        </p>
                    </article>
                </section>

                {/* Sección 5: Estrategia de contenido */}
                <section id="estrategia-contenido" className="page__section">
                    <h2 className="page__section-title">5. Estrategia de contenido para posicionamiento</h2>
                    <article className="long-form-content">
                        <p>
                            El contenido es el vehículo de tu posicionamiento. Pero no cualquier contenido: necesitás contenido que <strong>demuestre autoridad técnica</strong> sin aburrir ni confundir.
                        </p>

                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Contenido genérico</h4>
                                <ul>
                                    <li>"Los derechos del trabajador"</li>
                                    <li>"Cómo hacer un contrato"</li>
                                    <li>"La importancia de un abogado"</li>
                                </ul>
                                <p><strong>Problema:</strong> No aporta valor específico, no te diferencia.</p>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>✅ Contenido estratégico</h4>
                                <ul>
                                    <li>"Qué hacer si tu empleador te pide renunciar 'de común acuerdo'"</li>
                                    <li>"Cláusulas que NO pueden faltar en un contrato de alquiler comercial"</li>
                                    <li>"Cuándo un reclamo laboral se puede resolver sin juicio"</li>
                                </ul>
                                <p><strong>Ventaja:</strong> Resuelve dudas concretas, demuestra expertise.</p>
                            </div>
                        </div>

                        <h3>Generar ideas de contenido con IA</h3>
                        <blockquote className="prompt-example">
                            Actuás como estratega de contenido para abogados.<br /><br />

                            Necesito 10 ideas de contenido para LinkedIn/blog que:<br />
                            1. Resuelvan dudas frecuentes de [tipo de cliente]<br />
                            2. Demuestren conocimiento técnico sin ser inaccesibles<br />
                            3. Generen engagement (comentarios, consultas)<br />
                            4. Sean específicas de [tu especialidad] en [tu ubicación]<br /><br />

                            Formato: título + breve descripción del enfoque + tipo de contenido (artículo, video, carrusel, etc.)
                        </blockquote>

                        <h3>Pilares de contenido recomendados</h3>
                        <div className="strategic-uses">
                            <div className="strategic-use">
                                <span className="strategic-use__icon">📚</span>
                                <span><strong>Educativo:</strong> Explicar conceptos legales en lenguaje claro</span>
                            </div>
                            <div className="strategic-use">
                                <span className="strategic-use__icon">⚖️</span>
                                <span><strong>Casos de estudio:</strong> Situaciones reales (anonimizadas) y cómo se resolvieron</span>
                            </div>
                            <div className="strategic-use">
                                <span className="strategic-use__icon">🔍</span>
                                <span><strong>Análisis de actualidad:</strong> Nuevas leyes, fallos relevantes, cambios normativos</span>
                            </div>
                            <div className="strategic-use">
                                <span className="strategic-use__icon">💡</span>
                                <span><strong>Consejos prácticos:</strong> Qué hacer/no hacer en situaciones comunes</span>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Sección 6: LinkedIn como plataforma principal */}
                <section id="linkedin" className="page__section">
                    <h2 className="page__section-title">6. LinkedIn: tu plataforma de posicionamiento profesional</h2>
                    <article className="long-form-content">
                        <p>
                            Para abogados independientes, <strong>LinkedIn es la red social más efectiva</strong>. No es Instagram ni TikTok. Es una plataforma profesional donde:
                        </p>
                        <ul>
                            <li>Tus potenciales clientes (empresarios, emprendedores, profesionales) están activos</li>
                            <li>El contenido educativo tiene mejor alcance que el entretenimiento</li>
                            <li>Podés demostrar expertise sin parecer vendedor</li>
                            <li>La competencia todavía es baja (muchos abogados no la usan bien)</li>
                        </ul>

                        <h3>Optimización de perfil con IA</h3>
                        <blockquote className="prompt-example">
                            Actuás como especialista en LinkedIn para profesionales del derecho.<br /><br />

                            Ayudame a optimizar mi perfil de LinkedIn.<br /><br />

                            Mi titular actual: [ej: "Abogado"]<br />
                            Mi extracto actual: [copiar tu extracto o "no tengo"]<br /><br />

                            Generá:<br />
                            1. Un titular optimizado que incluya mi especialidad y propuesta de valor<br />
                            2. Un extracto de 3 párrafos que explique qué hago, para quién y por qué soy diferente<br />
                            3. 5 palabras clave que debería incluir en mi perfil para aparecer en búsquedas<br /><br />

                            Tono: profesional pero cercano, sin exageraciones.
                        </blockquote>

                        <h3>Calendario de contenido simple</h3>
                        <p>No necesitás publicar todos los días. Necesitás <strong>consistencia</strong>:</p>
                        <div className="layer-diagram">
                            <div className="layer-step">
                                <div className="layer-step__number">L</div>
                                <div className="layer-step__content">
                                    <h4>Lunes: Caso de estudio o análisis</h4>
                                </div>
                            </div>
                            <div className="layer-step">
                                <div className="layer-step__number">M</div>
                                <div className="layer-step__content">
                                    <h4>Miércoles: Consejo práctico</h4>
                                </div>
                            </div>
                            <div className="layer-step">
                                <div className="layer-step__number">V</div>
                                <div className="layer-step__content">
                                    <h4>Viernes: Actualidad legal o FAQ</h4>
                                </div>
                            </div>
                        </div>
                        <p className="highlight-success">
                            3 publicaciones por semana, bien hechas, vencen a 7 publicaciones genéricas.
                        </p>
                    </article>
                </section>

                {/* Sección 7: SEO local */}
                <section id="seo-local" className="page__section">
                    <h2 className="page__section-title">7. SEO local para abogados</h2>
                    <article className="long-form-content">
                        <p>
                            <strong>SEO (Search Engine Optimization)</strong> es el proceso de hacer que tu sitio web aparezca en Google cuando alguien busca servicios legales en tu zona.
                        </p>
                        <p>
                            Para un abogado independiente, el <strong>SEO local</strong> es más importante que el SEO general. No necesitás aparecer primero en "abogado Argentina", necesitás aparecer en "abogado laboral Palermo" o "abogado familia Rosario".
                        </p>

                        <h3>Elementos clave del SEO local</h3>
                        <div className="strategic-uses">
                            <div className="strategic-use">
                                <span className="strategic-use__icon">📍</span>
                                <span><strong>Google My Business:</strong> Perfil verificado con tu ubicación, horarios y reseñas</span>
                            </div>
                            <div className="strategic-use">
                                <span className="strategic-use__icon">🌐</span>
                                <span><strong>Sitio web optimizado:</strong> Con tu ciudad y especialidad en títulos y contenido</span>
                            </div>
                            <div className="strategic-use">
                                <span className="strategic-use__icon">⭐</span>
                                <span><strong>Reseñas de clientes:</strong> En Google, LinkedIn o tu web (con permiso)</span>
                            </div>
                            <div className="strategic-use">
                                <span className="strategic-use__icon">📝</span>
                                <span><strong>Contenido local:</strong> Artículos sobre leyes o casos de tu provincia/ciudad</span>
                            </div>
                        </div>

                        <h3>Generar contenido SEO con IA</h3>
                        <blockquote className="prompt-example">
                            Actuás como especialista en SEO legal.<br /><br />

                            Generá un artículo de blog optimizado para SEO sobre:<br />
                            "[tema legal específico] en [tu ciudad]"<br /><br />

                            Requisitos:<br />
                            - 800-1000 palabras<br />
                            - Incluir palabras clave: [especialidad] + [ciudad]<br />
                            - Estructura: introducción, 3-4 secciones, conclusión<br />
                            - Tono: profesional pero accesible<br />
                            - Incluir preguntas frecuentes al final<br />
                            - Sin promesas de resultados ni lenguaje publicitario<br /><br />

                            Objetivo: que aparezca en Google cuando alguien busque ese tema en mi zona.
                        </blockquote>
                    </article>
                </section>

                {/* Sección 8: Plan de 90 días */}
                <section id="plan-90-dias" className="page__section">
                    <h2 className="page__section-title">8. Plan de posicionamiento de 90 días</h2>
                    <article className="long-form-content">
                        <p>
                            El posicionamiento no es instantáneo. Necesitás un plan sostenible que puedas ejecutar sin agotarte.
                        </p>

                        <h3>Mes 1: Fundamentos</h3>
                        <ul className="application-list">
                            <li><strong>Semana 1:</strong> Análisis de competencia y definición de nicho</li>
                            <li><strong>Semana 2:</strong> Optimización de perfil LinkedIn y Google My Business</li>
                            <li><strong>Semana 3:</strong> Creación de 10 ideas de contenido con IA</li>
                            <li><strong>Semana 4:</strong> Publicación de primeros 3 contenidos</li>
                        </ul>

                        <h3>Mes 2: Consistencia</h3>
                        <ul className="application-list">
                            <li><strong>Semana 5-8:</strong> 3 publicaciones por semana en LinkedIn</li>
                            <li><strong>Objetivo:</strong> Generar primeras interacciones (comentarios, mensajes)</li>
                            <li><strong>Métrica:</strong> Al menos 5 comentarios o consultas en el mes</li>
                        </ul>

                        <h3>Mes 3: Escalabilidad</h3>
                        <ul className="application-list">
                            <li><strong>Semana 9-12:</strong> Mantener ritmo de publicación</li>
                            <li><strong>Agregar:</strong> 1 artículo de blog optimizado para SEO</li>
                            <li><strong>Objetivo:</strong> Primera consulta concreta generada por contenido digital</li>
                        </ul>

                        <p className="highlight-success">
                            <strong>Resultado esperado:</strong> En 90 días, tenés un sistema de posicionamiento funcionando que genera visibilidad predecible y consultas calificadas.
                        </p>
                    </article>
                </section>

                {/* Sección 9: Prompts reutilizables */}
                <section id="prompts" className="page__section">
                    <h2 className="page__section-title">9. Biblioteca de prompts para marketing legal</h2>
                    <article className="long-form-content">
                        <p>Guardá estos prompts para usar cuando los necesites:</p>

                        <div className="component-card">
                            <div className="component-content">
                                <h4>📊 Análisis de tendencias</h4>
                                <blockquote className="prompt-example">
                                    Analizá las últimas 10 publicaciones de [competidor] en LinkedIn.<br />
                                    Identificá qué temas generan más engagement y por qué.<br />
                                    Sugerí 3 temas similares adaptados a mi especialidad.
                                </blockquote>
                            </div>
                        </div>

                        <div className="component-card">
                            <div className="component-content">
                                <h4>✍️ Generación de post</h4>
                                <blockquote className="prompt-example">
                                    Escribí un post de LinkedIn sobre [tema legal].<br />
                                    Estructura: gancho inicial + explicación clara + llamado a la acción suave.<br />
                                    Máximo 150 palabras. Tono profesional pero cercano.<br />
                                    Sin promesas de resultados ni lenguaje publicitario.
                                </blockquote>
                            </div>
                        </div>

                        <div className="component-card">
                            <div className="component-content">
                                <h4>🎯 Respuesta a consultas</h4>
                                <blockquote className="prompt-example">
                                    Redactá una respuesta profesional a esta consulta de LinkedIn:<br />
                                    [copiar consulta]<br /><br />
                                    Que sea útil pero que NO resuelva todo el caso.<br />
                                    Debe demostrar conocimiento y generar confianza para agendar consulta formal.
                                </blockquote>
                            </div>
                        </div>

                        <div className="component-card">
                            <div className="component-content">
                                <h4>📈 Análisis de métricas</h4>
                                <blockquote className="prompt-example">
                                    Analizo mis métricas de LinkedIn del último mes:<br />
                                    - Impresiones: [número]<br />
                                    - Interacciones: [número]<br />
                                    - Consultas recibidas: [número]<br /><br />
                                    Sugerí 3 ajustes concretos para mejorar resultados el próximo mes.
                                </blockquote>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Sección 10: Riesgos éticos */}
                <section id="riesgos" className="page__section">
                    <h2 className="page__section-title">10. Riesgos y límites deontológicos</h2>
                    <article className="long-form-content">
                        <p>
                            El marketing legal tiene límites claros. Violarlos puede generar sanciones del colegio de abogados.
                        </p>
                        <div className="risk-list">
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span><strong>Nunca prometas resultados:</strong> "Ganamos tu caso" → Sanción</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span><strong>No uses testimonios sin permiso:</strong> Confidencialidad del cliente</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span><strong>No captes clientes en situación vulnerable:</strong> Ética profesional</span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span><strong>No uses IA para generar contenido falso:</strong> Responsabilidad profesional</span>
                            </div>
                        </div>
                        <blockquote className="concept-quote">
                            La IA acelera tu marketing, pero vos sos responsable de cada palabra publicada.
                        </blockquote>
                    </article>
                </section>

                {/* Sección 11: Ideas clave */}
                <section id="ideas-clave" className="page__section">
                    <h2 className="page__section-title">11. Ideas clave para memorizar</h2>
                    <article className="long-form-content">
                        <ul className="key-points">
                            <li>Marketing legal ≠ Marketing tradicional → <strong>Hay límites éticos claros</strong></li>
                            <li>Posicionamiento = <strong>Demostrar competencia</strong>, no vender</li>
                            <li>LinkedIn es tu plataforma principal → <strong>Consistencia sobre cantidad</strong></li>
                            <li>SEO local &gt; SEO general → <strong>Aparecer en tu zona</strong></li>
                            <li>La IA genera contenido → <strong>Vos validás y publicás</strong></li>
                            <li>90 días de trabajo sostenido = <strong>Sistema de posicionamiento funcionando</strong></li>
                        </ul>
                    </article>
                </section>

                {/* Resultado esperado */}
                <section id="resultado" className="page__section">
                    <h2 className="page__section-title">Resultado esperado</h2>
                    <article className="long-form-content">
                        <div className="result-box">
                            <p>
                                Al completar esta unidad, tenés las herramientas para <strong>construir un sistema de marketing legal ético, sostenible y asistido por IA</strong> que genera visibilidad, autoridad y consultas calificadas sin violar ninguna norma deontológica.
                            </p>
                        </div>
                    </article>
                </section>

                {/* Footer de navegación */}
                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/solo-practice-u3" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M3 U3: Escritura Persuasiva Digital</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--complete">✓ Unidad 4 Completa</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próximo módulo:</span>
                        <Link to="/gemini" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Módulo 4 – Gemini: otra inteligencia, nuevas funciones →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SoloPracticeM3U4

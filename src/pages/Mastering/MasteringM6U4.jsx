import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function MasteringM6U4() {
    return (
        <div className="page">
            <PageSEO
                title="Gemini Deep Research para Doctrina Jurídica · M6 U4"
                description="Cómo usar la investigación profunda de Gemini para analizar doctrina, sintetizar múltiples fuentes y producir informes fundamentados."
                path="/mastering-u4"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 6 · Unidad 4</span>
                <h1 className="page__title">Gemini Deep Research para investigación doctrinal</h1>
                <p className="page__description">
                    Cómo usar la investigación profunda de Gemini para analizar doctrina jurídica, sintetizar múltiples fuentes y producir informes fundamentados.
                </p>
            </header>

            <div className="page__content">
                {/* Sección 1: Introducción */}
                <section id="intro" className="page__section">
                    <h2 className="page__section-title">1. ¿Qué hace diferente a Gemini Deep Research?</h2>
                    <article className="long-form-content">
                        <p>
                            Google Gemini tiene una funcionalidad llamada <strong>Deep Research</strong> que se diferencia de otras herramientas de IA por su capacidad de hacer investigaciones autónomas y extensas.
                        </p>

                        <h3>¿Cómo funciona?</h3>
                        <p>Cuando le pedís una investigación profunda, Gemini:</p>
                        <ol className="application-list">
                            <li><strong>Planifica:</strong> Te muestra qué va a investigar y cómo</li>
                            <li><strong>Investiga:</strong> Navega decenas de sitios web durante varios minutos</li>
                            <li><strong>Sintetiza:</strong> Produce un informe estructurado con fuentes</li>
                            <li><strong>Itera:</strong> Podés pedirle que profundice o corrija</li>
                        </ol>

                        <div className="comparison-grid">
                            <div className="comparison-box">
                                <h4>🔍 Perplexity</h4>
                                <p>Respuestas rápidas con algunas fuentes. Ideal para consultas puntuales.</p>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>🔬 Gemini Deep Research</h4>
                                <p>Investigación exhaustiva de 5-15 minutos. Produce informes de múltiples páginas con síntesis doctrinal.</p>
                            </div>
                        </div>

                        <blockquote className="concept-quote">
                            Si Perplexity es el bibliotecario que te encuentra un libro rápido, Gemini Deep Research es el investigador que lee 50 artículos y te hace un estado del arte.
                        </blockquote>
                    </article>
                </section>

                {/* Sección 2: Configuración */}
                <section id="configuracion" className="page__section">
                    <h2 className="page__section-title">2. Cómo acceder y configurar Deep Research</h2>
                    <article className="long-form-content">
                        <h3>Paso 1: Acceder a Gemini</h3>
                        <p>Andá a <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer">gemini.google.com</a> e iniciá sesión con tu cuenta de Google.</p>
                        <div className="highlight-success">
                            <strong>Requisito:</strong> Deep Research requiere Gemini Advanced ($20/mes) incluido en Google One AI Premium.
                        </div>

                        <h3>Paso 2: Activar Deep Research</h3>
                        <p>En el chat de Gemini, cuando escribas tu consulta, vas a ver un botón o opción para activar "Deep Research". Hacé clic antes de enviar.</p>

                        <h3>Paso 3: Revisar el plan de investigación</h3>
                        <p>Gemini te mostrará qué piensa investigar. Ejemplo:</p>
                        <pre className="code-block">
                            {`PLAN DE INVESTIGACIÓN

Voy a investigar sobre "responsabilidad civil de 
plataformas digitales en Argentina":

1. Marco normativo aplicable
   - Código Civil y Comercial
   - Ley de Defensa del Consumidor
   - Normativa específica de comercio electrónico

2. Jurisprudencia reciente
   - Fallos de CSJN
   - Cámaras de Apelación nacionales

3. Doctrina
   - Autores especializados en derecho digital
   - Artículos académicos recientes

4. Derecho comparado
   - Tendencias en la UE y EEUU

¿Querés que modifique algo antes de empezar?`}
                        </pre>
                        <p>Podés pedirle que agregue o quite temas antes de que empiece.</p>

                        <h3>Paso 4: Esperar la investigación</h3>
                        <p>Deep Research puede tardar entre 5 y 15 minutos. Durante ese tiempo, Gemini:</p>
                        <ul className="application-list">
                            <li>Visita decenas de páginas web</li>
                            <li>Analiza el contenido encontrado</li>
                            <li>Identifica patrones y contradicciones</li>
                            <li>Organiza la información por temas</li>
                        </ul>
                        <div className="highlight-warning">
                            <strong>Tip:</strong> Podés abrir otra pestaña y trabajar mientras. Gemini te avisa cuando termina.
                        </div>
                    </article>
                </section>

                {/* Sección 3: Prompts efectivos */}
                <section id="prompts" className="page__section">
                    <h2 className="page__section-title">3. Prompts efectivos para investigación doctrinal</h2>
                    <article className="long-form-content">
                        <p>
                            La clave de Deep Research está en formular bien la pregunta inicial. Cuanto más específico seas, mejor resultado obtenés.
                        </p>

                        <h3>Prompt 1: Estado del arte sobre un tema</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">PROMPT</div>
                            <pre className="code-block">
                                {`Hacé una investigación profunda sobre el estado actual
de la doctrina jurídica argentina respecto a [TEMA].

Incluí:
1. EVOLUCIÓN HISTÓRICA: Cómo se trató el tema en los
   últimos 20 años
   
2. POSICIONES DOCTRINALES: Identificá las principales
   corrientes y sus exponentes
   
3. JURISPRUDENCIA CLAVE: Fallos que marcaron tendencia
   
4. DEBATES ACTUALES: Puntos donde no hay consenso
   
5. TENDENCIAS: Hacia dónde parece ir la doctrina

Citá autores con nombre completo y publicación.
Priorizá fuentes argentinas pero incluí derecho 
comparado relevante.`}
                            </pre>
                        </div>

                        <h3>Prompt 2: Comparación de posturas doctrinales</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">PROMPT</div>
                            <pre className="code-block">
                                {`Investigá las distintas posiciones doctrinales sobre
[cuestión jurídica específica].

Organizá tu análisis así:

| Postura | Exponentes | Argumentos | Críticas |
|---------|------------|------------|----------|
|         |            |            |          |

Al final, indicá cuál parece ser la posición 
mayoritaria y si hay jurisprudencia que haya 
adoptado alguna de estas posturas.`}
                            </pre>
                        </div>

                        <h3>Prompt 3: Fundamentación para escrito judicial</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">PROMPT</div>
                            <pre className="code-block">
                                {`Necesito fundamentación doctrinal para sostener que
[tu tesis jurídica].

Buscá:
1. Autores argentinos que sostengan esta posición
2. Artículos de doctrina que desarrollen este argumento
3. Fallos que hayan adoptado esta interpretación
4. Contraargumentos que podría usar la contraparte
   y cómo refutarlos

Formato: Dame citas textuales que pueda usar en un
escrito judicial, con referencia bibliográfica completa.`}
                            </pre>
                        </div>

                        <h3>Prompt 4: Análisis de instituto jurídico</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">PROMPT</div>
                            <pre className="code-block">
                                {`Analizá el instituto jurídico de [nombre del instituto]
en el derecho argentino actual.

Estructura:
1. CONCEPTO: Definición doctrinal
2. NATURALEZA JURÍDICA: Debate sobre su clasificación
3. ELEMENTOS: Requisitos para su configuración
4. EFECTOS: Consecuencias jurídicas
5. CASOS DE APLICACIÓN: Supuestos típicos
6. PROBLEMAS PRÁCTICOS: Dificultades en su aplicación

Usá doctrina actualizada post-CCCN cuando corresponda.`}
                            </pre>
                        </div>
                    </article>
                </section>

                {/* Sección 4: Síntesis de múltiples fuentes */}
                <section id="sintesis" className="page__section">
                    <h2 className="page__section-title">4. Síntesis de múltiples fuentes: el poder real de Deep Research</h2>
                    <article className="long-form-content">
                        <p>
                            Donde más brilla Gemini Deep Research es cuando tenés que integrar información de <strong>muchas fuentes distintas</strong>.
                        </p>

                        <h3>Ejemplo: Informe sobre nueva regulación</h3>
                        <pre className="code-block">
                            {`MI PROMPT:
"Necesito un informe completo sobre la nueva regulación
de teletrabajo en Argentina (Ley 27.555 y reglamentación).

Incluí:
- Análisis del texto legal
- Interpretaciones doctrinales publicadas
- Cómo la están aplicando los tribunales
- Problemas prácticos reportados por empresas y sindicatos
- Comparación con regulaciones de países vecinos"

RESULTADO DE GEMINI (estructura del informe):

1. MARCO NORMATIVO (3 páginas)
   - Ley 27.555: análisis artículo por artículo
   - Decreto reglamentario 27/2021
   - Resoluciones del Ministerio de Trabajo

2. DOCTRINA (4 páginas)
   - Posición de [Autor 1]: enfatiza flexibilidad...
   - Posición de [Autor 2]: critica ambigüedad...
   - Debate sobre reversibilidad...

3. JURISPRUDENCIA INICIAL (2 páginas)
   - Primeros fallos aplicando la ley
   - Tendencias emergentes

4. PROBLEMÁTICA PRÁCTICA (2 páginas)
   - Provisión de elementos de trabajo
   - Desconexión digital
   - Control y privacidad

5. DERECHO COMPARADO (2 páginas)
   - Chile, Uruguay, España, Portugal

6. CONCLUSIONES Y RECOMENDACIONES (1 página)

TOTAL: Informe de 14 páginas con 47 fuentes citadas`}
                        </pre>

                        <div className="highlight-success">
                            <strong>Tiempo empleado:</strong> 12 minutos de investigación automática + 20 minutos de revisión y edición. Un informe así normalmente llevaría 2-3 días de trabajo manual.
                        </div>
                    </article>
                </section>

                {/* Sección 5: Caso práctico */}
                <section id="caso-practico" className="page__section">
                    <h2 className="page__section-title">5. Caso práctico: Preparar alegato con fundamentación doctrinal</h2>
                    <article className="long-form-content">
                        <div className="case-study-box">
                            <p><strong>Situación:</strong> Representás al actor en un juicio por daños derivados de publicidad engañosa en redes sociales. Necesitás fundamentación doctrinal sólida para tu alegato.</p>
                            <p><strong>Tesis a defender:</strong> Las plataformas tienen responsabilidad objetiva por la publicidad que alojan.</p>
                        </div>

                        <h3>Paso 1: Investigación inicial</h3>
                        <pre className="code-block">
                            {`MI PROMPT A GEMINI DEEP RESEARCH:

"Investigá la responsabilidad civil de las plataformas
digitales por contenido publicitario en Argentina.

Enfocate específicamente en:
1. Si hay responsabilidad objetiva o subjetiva
2. Aplicación del art. 40 de la Ley de Defensa del 
   Consumidor a plataformas
3. Doctrina sobre el concepto de 'proveedor' en 
   economía digital
4. Jurisprudencia argentina sobre publicidad en redes
5. Casos de otros países que podrían ser citables

Necesito fundamentación para sostener responsabilidad
objetiva de la plataforma."`}
                        </pre>

                        <h3>Paso 2: Revisar el informe (20 minutos)</h3>
                        <p>Gemini entregó un informe de 18 páginas. Puntos clave:</p>
                        <ul className="application-list">
                            <li>Identificó 3 autores argentinos que sostienen responsabilidad objetiva</li>
                            <li>Encontró 2 fallos de Cámara favorables a mi tesis</li>
                            <li>Citó doctrina europea sobre el tema</li>
                            <li>Advirtió sobre contraargumentos basados en inmunidad de intermediarios</li>
                        </ul>

                        <h3>Paso 3: Profundizar en puntos específicos</h3>
                        <pre className="code-block">
                            {`MI PROMPT DE SEGUIMIENTO:

"De la doctrina de Lorenzetti sobre responsabilidad
de plataformas que mencionaste, necesito:

1. Cita textual que pueda usar en el alegato
2. En qué libro/artículo está publicado
3. Si hay otros autores que citen o adhieran a 
   esa posición
4. Si hay jurisprudencia que haya citado a Lorenzetti
   en este tema"`}
                        </pre>

                        <h3>Paso 4: Verificación y uso</h3>
                        <p>Con la información obtenida:</p>
                        <ol className="application-list">
                            <li>Verifiqué las citas en las fuentes originales ✅</li>
                            <li>Busqué los fallos citados en SAIJ para confirmar ✅</li>
                            <li>Incorporé 3 citas doctrinales al alegato</li>
                            <li>Incluí anticipación de contraargumentos</li>
                        </ol>

                        <div className="highlight-success">
                            <strong>Resultado:</strong> Un alegato con fundamentación doctrinal de nivel académico, preparado en una tarde en lugar de una semana.
                        </div>
                    </article>
                </section>

                {/* Sección 6: Errores comunes */}
                <section id="errores" className="page__section">
                    <h2 className="page__section-title">6. Errores comunes y cómo evitarlos</h2>
                    <article className="long-form-content">
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Error: Usar citas sin verificar el original</h4>
                                <p>Gemini puede parafrasear incorrectamente o atribuir ideas al autor equivocado.</p>
                                <p><strong>Solución:</strong> SIEMPRE buscá la fuente original antes de citar en un escrito.</p>
                            </div>
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Error: Prompts demasiado amplios</h4>
                                <p>"Investigá sobre contratos" genera informes genéricos e inútiles.</p>
                                <p><strong>Solución:</strong> Sé específico: qué tipo de contrato, qué aspecto, para qué jurisdicción.</p>
                            </div>
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Error: No revisar el plan de investigación</h4>
                                <p>Gemini puede enfocarse en aspectos que no te interesan.</p>
                                <p><strong>Solución:</strong> Antes de que arranque, ajustá el plan a tus necesidades.</p>
                            </div>
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Error: Esperar que encuentre todo</h4>
                                <p>Doctrina reciente o de editoriales cerradas puede no estar indexada.</p>
                                <p><strong>Solución:</strong> Complementá con búsquedas manuales en La Ley, El Derecho, etc.</p>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Sección 7: Flujo de trabajo integrado */}
                <section id="flujo" className="page__section">
                    <h2 className="page__section-title">7. Flujo de trabajo: integrando las 4 herramientas</h2>
                    <article className="long-form-content">
                        <p>
                            Ahora que dominás las 4 herramientas del módulo, veamos cómo combinarlas en un flujo de trabajo profesional:
                        </p>

                        <pre className="code-block">
                            {`FLUJO DE TRABAJO INTEGRADO

1️⃣ INVESTIGACIÓN INICIAL
   └── Gemini Deep Research: Estado del arte del tema
   
2️⃣ VERIFICACIÓN DE NORMATIVA
   └── Perplexity: Confirmar vigencia en InfoLeg
   
3️⃣ BÚSQUEDA DE JURISPRUDENCIA ESPECÍFICA
   └── Manus: Navegar SAIJ y extraer fallos
   
4️⃣ ANÁLISIS DEL CASO CONCRETO
   └── Claude Projects: Aplicar doctrina al caso
   
5️⃣ REDACCIÓN DE ESCRITOS
   └── ChatGPT Custom GPT: Generar borradores
   
6️⃣ REVISIÓN Y VERIFICACIÓN
   └── Claude: Revisar coherencia y citas`}
                        </pre>

                        <div className="highlight-success">
                            <strong>El profesional que domina este flujo</strong> puede producir trabajo de calidad en una fracción del tiempo tradicional, sin sacrificar rigor ni responsabilidad.
                        </div>
                    </article>
                </section>

                {/* Sección 8: Ejercicio */}
                <section id="ejercicio" className="page__section">
                    <h2 className="page__section-title">8. Ejercicio: Tu primera investigación profunda</h2>
                    <article className="long-form-content">
                        <div className="exercise-box">
                            <h3>🎯 Objetivo</h3>
                            <p>Realizar una investigación doctrinal completa con Gemini Deep Research sobre un tema de tu interés profesional.</p>

                            <h3>📋 Pasos</h3>
                            <ol className="application-list">
                                <li><strong>Elegí un tema:</strong> Algo que tengas que investigar pronto o que te interese profundizar.</li>
                                <li><strong>Formulá el prompt:</strong> Usá la estructura de esta unidad.</li>
                                <li><strong>Revisá el plan:</strong> Antes de que arranque, ajustalo si es necesario.</li>
                                <li><strong>Esperá el resultado:</strong> Si bien usando el tiempo para otras tareas.</li>
                                <li><strong>Analizá el informe:</strong> ¿Qué encontró? ¿Qué falta?</li>
                                <li><strong>Verificá 3 citas:</strong> Andá a las fuentes originales y confirmá.</li>
                                <li><strong>Documentá:</strong> Guardá el informe para uso futuro.</li>
                            </ol>

                            <h3>💡 Ideas de temas para practicar</h3>
                            <ul className="application-list">
                                <li>Responsabilidad del Estado por omisión</li>
                                <li>Daño moral en despido discriminatorio</li>
                                <li>Cláusulas abusivas en contratos de adhesión digitales</li>
                                <li>Validez de notificaciones electrónicas</li>
                                <li>Derecho de arrepentimiento en compras online</li>
                            </ul>

                            <h3>✅ Criterio de éxito</h3>
                            <p>Obtuviste un informe que:</p>
                            <ul className="application-list">
                                <li>Cita al menos 3 autores con referencias verificables</li>
                                <li>Identifica distintas posiciones sobre el tema</li>
                                <li>Te ahorra tiempo significativo respecto a investigación manual</li>
                            </ul>
                        </div>
                    </article>
                </section>

                {/* Cierre del módulo */}
                <section className="page__section">
                    <div className="highlight-success" style={{ padding: '2rem', textAlign: 'center' }}>
                        <h3>🎓 ¡Módulo 6 Completado!</h3>
                        <p>Ahora dominás las 4 herramientas clave de IA para la práctica jurídica:</p>
                        <ul style={{ textAlign: 'left', display: 'inline-block' }}>
                            <li><strong>Claude Projects:</strong> Gestión integral de casos</li>
                            <li><strong>ChatGPT:</strong> Análisis de contratos y documentos</li>
                            <li><strong>Perplexity/Manus:</strong> Investigación en tiempo real</li>
                            <li><strong>Gemini Deep Research:</strong> Investigación doctrinal profunda</li>
                        </ul>
                        <p style={{ marginTop: '1rem' }}>En el próximo módulo, aplicarás estas herramientas a la <strong>comunicación jurídica profesional</strong>.</p>
                    </div>
                </section>

                {/* Footer de navegación */}
                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/mastering-u3" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M6 U3: Perplexity/Manus</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">✅ Módulo Completado</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próximo módulo:</span>
                        <Link to="/communication" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Módulo 7 – Comunicación jurídica con IA →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MasteringM6U4

import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function PromptEngineeringM2U6() {
    return (
        <div className="page">
            <PageSEO
                title="GPTs Personalizados y Librerías de Prompts · M2 U6"
                description="Cómo crear asistentes jurídicos especializados y organizar tus prompts para reutilizarlos como sistema profesional."
                path="/prompt-engineering-u6"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 2 · Unidad 6</span>
                <h1 className="page__title">GPTs personalizados y librerías de prompts</h1>
                <p className="page__description">
                    Cómo crear asistentes jurídicos especializados y organizar tus prompts para reutilizarlos eficientemente.
                </p>
            </header>

            <div className="page__content">
                {/* Sección 1: Introducción */}
                <section id="intro" className="page__section">
                    <h2 className="page__section-title">1. De prompts sueltos a un sistema organizado</h2>
                    <article className="long-form-content">
                        <p>
                            Si venís siguiendo las unidades anteriores, ya tenés prompts para filtrar jurisprudencia, redactar demandas, analizar contratos... Pero cada vez que los usás, ¿los buscás en notas sueltas? ¿Los reescribís de memoria?
                        </p>

                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Sin sistema</h4>
                                <p>Prompts en notas del celular, documentos sueltos, mensajes guardados. Cada vez reinventás la rueda.</p>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>✅ Con sistema</h4>
                                <p>GPTs personalizados para tareas recurrentes y una librería organizada de prompts por tipo de trabajo.</p>
                            </div>
                        </div>

                        <blockquote className="concept-quote">
                            Un abogado que usa IA profesionalmente no solo sabe hacer buenos prompts. Tiene un sistema para no tener que pensar cada prompt desde cero.
                        </blockquote>
                    </article>
                </section>

                {/* Sección 2: GPTs personalizados */}
                <section id="gpts" className="page__section">
                    <h2 className="page__section-title">2. ¿Qué es un GPT personalizado?</h2>
                    <article className="long-form-content">
                        <p>
                            Un GPT personalizado (Custom GPT) es una versión de ChatGPT que <strong>siempre se comporta de la misma manera</strong> porque tiene instrucciones preconfiguradas.
                        </p>

                        <h3>Componentes de un GPT personalizado</h3>
                        <ul className="application-list">
                            <li><strong>Nombre e identidad:</strong> "Analista de Jurisprudencia Laboral"</li>
                            <li><strong>Instrucciones base:</strong> Cómo debe comportarse siempre</li>
                            <li><strong>Conocimientos (Knowledge):</strong> Documentos que tiene precargados</li>
                            <li><strong>Capacidades:</strong> Navegación web, análisis de archivos, etc.</li>
                            <li><strong>Ejemplos de conversación:</strong> Para entrenar el estilo</li>
                        </ul>

                        <h3>Ventajas para trabajo jurídico</h3>
                        <div className="comparison-grid">
                            <div className="comparison-box">
                                <h4>🔄 Consistencia</h4>
                                <p>Siempre responde con el mismo enfoque, vocabulario y criterios.</p>
                            </div>
                            <div className="comparison-box">
                                <h4>⚡ Velocidad</h4>
                                <p>No tenés que explicar el contexto cada vez. Ya lo sabe.</p>
                            </div>
                            <div className="comparison-box">
                                <h4>📚 Especialización</h4>
                                <p>Podés cargar normativa, modelos de escritos, jurisprudencia clave.</p>
                            </div>
                            <div className="comparison-box">
                                <h4>👥 Delegación</h4>
                                <p>Podés compartirlo con colaboradores para estandarizar trabajo.</p>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Sección 3: Crear GPT jurídico */}
                <section id="crear-gpt" className="page__section">
                    <h2 className="page__section-title">3. Paso a paso: Crear tu primer GPT jurídico</h2>
                    <article className="long-form-content">
                        <h3>Paso 1: Definir el propósito</h3>
                        <p>Antes de crear, respondé:</p>
                        <ul className="application-list">
                            <li>¿Qué tarea repetitiva quiero automatizar?</li>
                            <li>¿Con qué frecuencia la hago?</li>
                            <li>¿Puedo estandarizar el proceso?</li>
                        </ul>

                        <h3>Paso 2: Acceder al creador</h3>
                        <p>En ChatGPT Plus/Team: Perfil → My GPTs → Create a GPT</p>

                        <h3>Paso 3: Configurar identidad</h3>
                        <pre className="code-block">
                            {`NOMBRE: Revisor de Demandas Civiles

DESCRIPCIÓN:
Revisa demandas civiles verificando requisitos formales,
coherencia argumentativa y sugiriendo mejoras. 
Especializado en derecho procesal argentino (CPCCN).`}
                        </pre>

                        <h3>Paso 4: Escribir las instrucciones</h3>
                        <pre className="code-block">
                            {`INSTRUCCIONES

IDENTIDAD:
Sos un abogado procesalista argentino con 20 años de
experiencia revisando escritos judiciales.

TAREA PRINCIPAL:
Cuando te suban una demanda, debés:
1. Verificar cumplimiento del art. 330 CPCCN
2. Detectar inconsistencias entre hechos y derecho
3. Identificar debilidades argumentativas
4. Sugerir mejoras concretas

FORMATO DE RESPUESTA:
1. VERIFICACIÓN FORMAL (checklist)
2. ANÁLISIS DE COHERENCIA
3. PUNTOS DÉBILES DETECTADOS
4. SUGERENCIAS DE MEJORA
5. CALIFICACIÓN GENERAL (1-10)

ESTILO:
- Crítico pero constructivo
- Específico (citá secciones del escrito)
- Priorizá lo más importante

RESTRICCIONES:
- No redactes el escrito completo
- No inventes jurisprudencia
- Si algo no está claro, preguntá`}
                        </pre>

                        <h3>Paso 5: Cargar conocimientos</h3>
                        <p>Subí documentos útiles:</p>
                        <ul className="application-list">
                            <li>CPCCN o código procesal de tu jurisdicción</li>
                            <li>Tu checklist personal de puntos a revisar</li>
                            <li>Modelos de demandas bien hechas</li>
                            <li>Jurisprudencia sobre requisitos formales</li>
                        </ul>

                        <h3>Paso 6: Configurar capacidades</h3>
                        <ul className="application-list">
                            <li>✅ <strong>Code Interpreter:</strong> Activo (para analizar PDFs)</li>
                            <li>⚠️ <strong>Web Browsing:</strong> Opcional</li>
                            <li>❌ <strong>DALL-E:</strong> No necesario</li>
                        </ul>

                        <div className="highlight-success">
                            <strong>Tip:</strong> Probá tu GPT con casos reales antes de usarlo en producción. Iterá las instrucciones según los resultados.
                        </div>
                    </article>
                </section>

                {/* Sección 4: Ejemplos de GPTs */}
                <section id="ejemplos-gpts" className="page__section">
                    <h2 className="page__section-title">4. Ejemplos de GPTs jurídicos útiles</h2>
                    <article className="long-form-content">
                        <h3>GPT 1: Analista de Contratos</h3>
                        <pre className="code-block">
                            {`Cuando le subas un contrato:
1. Identifica tipo y partes
2. Detecta cláusulas riesgosas
3. Compara con estándares de mercado
4. Sugiere modificaciones

Tiene cargado: CCCN, modelos de cláusulas estándar,
checklist de puntos a revisar.`}
                        </pre>

                        <h3>GPT 2: Preparador de Interrogatorios</h3>
                        <pre className="code-block">
                            {`Le das los hechos del caso y te genera:
1. Preguntas para testigos propios
2. Preguntas para testigos de la contraparte
3. Posibles repreguntas
4. Advertencias sobre respuestas peligrosas

Tiene cargado: Jurisprudencia sobre valoración de
la prueba testimonial.`}
                        </pre>

                        <h3>GPT 3: Calculadora de Indemnizaciones Laborales</h3>
                        <pre className="code-block">
                            {`Ingresás datos del trabajador y calcula:
1. Preaviso
2. Antigüedad
3. SAC proporcional
4. Vacaciones no gozadas
5. Multas (arts. 8, 9, 10, 15 LNE, etc.)

Tiene cargado: LCT, jurisprudencia sobre cálculos,
topes indemnizatorios actualizados.`}
                        </pre>

                        <h3>GPT 4: Resumidor de Expedientes</h3>
                        <pre className="code-block">
                            {`Le subís un expediente (o partes) y genera:
1. Cronología de presentaciones
2. Estado procesal actual
3. Cuestiones pendientes
4. Próximos vencimientos

Tiene cargado: Estructura típica de expedientes,
plazos procesales.`}
                        </pre>
                    </article>
                </section>

                {/* Sección 5: Librería de prompts */}
                <section id="libreria" className="page__section">
                    <h2 className="page__section-title">5. Organizar una librería de prompts</h2>
                    <article className="long-form-content">
                        <p>
                            No todo amerita un GPT personalizado. Para tareas menos frecuentes, necesitás una <strong>librería de prompts organizada</strong>.
                        </p>

                        <h3>Estructura recomendada</h3>
                        <pre className="code-block">
                            {`📁 PROMPTS JURÍDICOS/
├── 📁 01_ANÁLISIS/
│   ├── Análisis de fallo.md
│   ├── Comparación de jurisprudencia.md
│   └── Extracto de ratio decidendi.md
├── 📁 02_REDACCIÓN/
│   ├── Demanda civil.md
│   ├── Contestación de demanda.md
│   ├── Alegato.md
│   └── Contrato tipo.md
├── 📁 03_CONTRATOS/
│   ├── Revisión de contrato.md
│   ├── Cláusula de confidencialidad.md
│   └── Due diligence.md
├── 📁 04_INVESTIGACIÓN/
│   ├── Búsqueda de jurisprudencia.md
│   ├── Verificación de normativa.md
│   └── Estado del arte doctrinal.md
└── 📁 05_ADMINISTRATIVO/
    ├── Carta documento.md
    ├── Intimación.md
    └── Respuesta a reclamo.md`}
                        </pre>

                        <h3>Formato de cada prompt</h3>
                        <pre className="code-block">
                            {`# Nombre del prompt
## Propósito
[Para qué sirve este prompt]

## Variables a completar
- [VARIABLE 1]: descripción
- [VARIABLE 2]: descripción

## Prompt
\`\`\`
[El prompt con las variables entre corchetes]
\`\`\`

## Ejemplo de uso
[Un ejemplo concreto de cómo usarlo]

## Notas
[Tips, advertencias, variantes]`}
                        </pre>

                        <h3>Dónde guardar la librería</h3>
                        <ul className="application-list">
                            <li><strong>Notion:</strong> Fácil de buscar y organizar</li>
                            <li><strong>Obsidian:</strong> Para los que prefieren Markdown local</li>
                            <li><strong>Google Docs:</strong> Si necesitás compartir con el equipo</li>
                            <li><strong>GitHub:</strong> Para versionado y colaboración avanzada</li>
                        </ul>
                    </article>
                </section>

                {/* Sección 6: Sistema híbrido */}
                <section id="sistema" className="page__section">
                    <h2 className="page__section-title">6. Sistema híbrido: cuándo usar qué</h2>
                    <article className="long-form-content">
                        <div className="comparison-grid">
                            <div className="comparison-box">
                                <h4>🤖 Usá un GPT personalizado cuando:</h4>
                                <ul>
                                    <li>La tarea es muy frecuente (diaria/semanal)</li>
                                    <li>Requiere contexto fijo (normativa, estilo)</li>
                                    <li>Querés delegar a colaboradores</li>
                                    <li>Necesitás consistencia absoluta</li>
                                </ul>
                            </div>
                            <div className="comparison-box">
                                <h4>📋 Usá un prompt de librería cuando:</h4>
                                <ul>
                                    <li>La tarea es ocasional</li>
                                    <li>Necesitás mucha flexibilidad</li>
                                    <li>El contexto cambia mucho entre usos</li>
                                    <li>Es una tarea muy específica</li>
                                </ul>
                            </div>
                        </div>

                        <h3>Flujo de trabajo recomendado</h3>
                        <pre className="code-block">
                            {`NUEVA TAREA
    ↓
¿Es recurrente y estandarizable?
    ↓
  SÍ → Crear GPT personalizado
  NO → Crear prompt en librería
    ↓
USAR Y REFINAR
    ↓
¿Funciona bien después de 5 usos?
    ↓
  SÍ → Mantener y documentar
  NO → Iterar o cambiar enfoque`}
                        </pre>
                    </article>
                </section>

                {/* Sección 7: Errores comunes */}
                <section id="errores" className="page__section">
                    <h2 className="page__section-title">7. Errores comunes</h2>
                    <article className="long-form-content">
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Crear GPTs para todo</h4>
                                <p>Terminás con 20 GPTs que no usás.</p>
                                <p><strong>Solución:</strong> Solo creá GPT si la tarea es muy frecuente.</p>
                            </div>
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Instrucciones vagas</h4>
                                <p>El GPT responde de forma inconsistente.</p>
                                <p><strong>Solución:</strong> Sé específico: formato, estilo, restricciones.</p>
                            </div>
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ No actualizar los conocimientos</h4>
                                <p>El GPT cita normativa derogada.</p>
                                <p><strong>Solución:</strong> Revisá y actualizá los documentos cargados.</p>
                            </div>
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Librería sin mantenimiento</h4>
                                <p>Prompts desactualizados o duplicados.</p>
                                <p><strong>Solución:</strong> Revisá la librería mensualmente.</p>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Sección 8: Ejercicio */}
                <section id="ejercicio" className="page__section">
                    <h2 className="page__section-title">8. Ejercicio: Armá tu sistema</h2>
                    <article className="long-form-content">
                        <div className="exercise-box">
                            <h3>🎯 Objetivo</h3>
                            <p>Crear un GPT personalizado y organizar una librería básica de prompts.</p>

                            <h3>📋 Parte 1: GPT personalizado</h3>
                            <ol className="application-list">
                                <li>Elegí tu tarea más repetitiva</li>
                                <li>Escribí las instrucciones usando el modelo de esta unidad</li>
                                <li>Cargá 1-2 documentos de conocimiento</li>
                                <li>Probá con 3 casos reales</li>
                                <li>Ajustá las instrucciones según los resultados</li>
                            </ol>

                            <h3>📋 Parte 2: Librería de prompts</h3>
                            <ol className="application-list">
                                <li>Creá la estructura de carpetas</li>
                                <li>Pasá a limpio 5 prompts que ya uses</li>
                                <li>Documentalos con el formato sugerido</li>
                                <li>Elegí dónde guardar (Notion, Obsidian, etc.)</li>
                            </ol>

                            <h3>✅ Criterio de éxito</h3>
                            <ul className="application-list">
                                <li>Tenés 1 GPT funcionando que te ahorra tiempo</li>
                                <li>Tenés una librería con al menos 5 prompts documentados</li>
                                <li>Sabés dónde buscar cada prompt cuando lo necesitás</li>
                            </ul>
                        </div>
                    </article>
                </section>

                {/* Cierre del módulo */}
                <section className="page__section">
                    <div className="highlight-success" style={{ padding: '2rem', textAlign: 'center' }}>
                        <h3>🎓 ¡Módulo 2 Completado!</h3>
                        <p>Ahora dominás las bases del trabajo jurídico con ChatGPT:</p>
                        <ul style={{ textAlign: 'left', display: 'inline-block' }}>
                            <li><strong>U1:</strong> Ingeniería de prompts jurídicos</li>
                            <li><strong>U2:</strong> Control de contexto</li>
                            <li><strong>U3:</strong> Filtrado de jurisprudencia</li>
                            <li><strong>U4:</strong> Redacción jurídica asistida</li>
                            <li><strong>U5:</strong> Preparación para juicios</li>
                            <li><strong>U6:</strong> GPTs y librerías de prompts</li>
                        </ul>
                        <p style={{ marginTop: '1rem' }}>En el próximo módulo aprenderás a aplicar esto a la <strong>gestión de tu práctica profesional</strong>.</p>
                    </div>
                </section>

                {/* Footer de navegación */}
                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/prompt-engineering-u5" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M2 U5: Preparación para juicios</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">✅ Módulo Completado</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próximo módulo:</span>
                        <Link to="/solo-practice" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Módulo 3 – Abogacía por cuenta propia →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PromptEngineeringM2U6

import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'

function MasteringM6U3() {
    return (
        <div className="page">
            <header className="page__header">
                <span className="page__module-tag">Módulo 6 · Unidad 3</span>
                <h1 className="page__title">Perplexity y Manus para investigación jurídica</h1>
                <p className="page__description">
                    Herramientas de IA con acceso a internet: cómo buscar jurisprudencia, normativa actualizada y verificar información en tiempo real.
                </p>
            </header>

            <div className="page__content">
                {/* Sección 1: Introducción */}
                <section id="intro" className="page__section">
                    <h2 className="page__section-title">1. ¿Por qué necesitamos herramientas de investigación con IA?</h2>
                    <article className="long-form-content">
                        <p>
                            Claude y ChatGPT son excelentes para analizar documentos y generar contenido, pero tienen una <strong>limitación crítica</strong>: su conocimiento tiene una fecha de corte. No saben qué pasó después de esa fecha.
                        </p>

                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ El problema</h4>
                                <p>Le preguntás a ChatGPT sobre un fallo de la CSJN de 2024 y te dice que no tiene información, o peor: inventa un fallo que no existe.</p>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>✅ La solución</h4>
                                <p>Herramientas como Perplexity y Manus buscan en internet en tiempo real y te dan respuestas con fuentes verificables.</p>
                            </div>
                        </div>

                        <h3>¿Qué son Perplexity y Manus?</h3>
                        <ul className="application-list">
                            <li><strong>Perplexity:</strong> Motor de respuestas con IA que busca en internet y cita fuentes. Gratis con límites, Pro a $20/mes.</li>
                            <li><strong>Manus:</strong> Agente de IA que puede navegar la web, interactuar con páginas y hacer investigaciones complejas autónomamente.</li>
                        </ul>

                        <blockquote className="concept-quote">
                            La combinación ideal: usá Claude/ChatGPT para analizar lo que ya tenés, y Perplexity/Manus para encontrar lo que te falta.
                        </blockquote>
                    </article>
                </section>

                {/* Sección 2: Perplexity básico */}
                <section id="perplexity-basico" className="page__section">
                    <h2 className="page__section-title">2. Perplexity: configuración y uso básico</h2>
                    <article className="long-form-content">
                        <h3>Paso 1: Crear cuenta</h3>
                        <p>Andá a <a href="https://perplexity.ai" target="_blank" rel="noopener noreferrer">perplexity.ai</a> y creá una cuenta. La versión gratuita permite varias consultas por día.</p>

                        <h3>Paso 2: Entender las opciones de búsqueda</h3>
                        <p>Perplexity tiene diferentes modos:</p>
                        <ul className="application-list">
                            <li><strong>Quick:</strong> Respuesta rápida, menos profunda</li>
                            <li><strong>Pro Search:</strong> Búsqueda más exhaustiva, hace preguntas de seguimiento (requiere Pro)</li>
                            <li><strong>Focus:</strong> Podés limitar a fuentes académicas, videos, Reddit, etc.</li>
                        </ul>

                        <h3>Paso 3: Configurar el foco en fuentes jurídicas</h3>
                        <p>Para investigación jurídica argentina, usá el modo "Academic" o escribí directamente en el prompt que querés fuentes oficiales:</p>
                        <pre className="code-block">
                            {`Buscá en sitios oficiales argentinos:
- infoleg.gob.ar
- saij.gob.ar  
- csjn.gov.ar
- pjn.gov.ar

[tu pregunta aquí]`}
                        </pre>

                        <div className="highlight-success">
                            <strong>Tip Pro:</strong> En la versión Pro, podés crear "Spaces" (colecciones) para organizar investigaciones por caso o por tema.
                        </div>
                    </article>
                </section>

                {/* Sección 3: Prompts Perplexity */}
                <section id="prompts-perplexity" className="page__section">
                    <h2 className="page__section-title">3. Prompts efectivos para investigación jurídica en Perplexity</h2>
                    <article className="long-form-content">



                        <h3>Prompt 1: Buscar jurisprudencia reciente</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">PROMPT</div>
                            <pre className="code-block">
                                {`Buscá fallos de la Corte Suprema de Justicia de la Nación 
Argentina (CSJN) del año 2024 sobre [tema].

Necesito:
1. Nombre del caso (carátula)
2. Fecha del fallo
3. Doctrina principal establecida
4. Link a la fuente oficial si está disponible

Priorizá fuentes: csjn.gov.ar, saij.gob.ar, cij.gov.ar`}
                            </pre>
                        </div>

                        <h3>Prompt 2: Verificar vigencia de normativa</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">PROMPT</div>
                            <pre className="code-block">
                                {`Verificá si la ley [número] de Argentina sigue vigente
a la fecha de hoy.

Necesito saber:
1. ¿Fue derogada, modificada o sigue vigente?
2. Si fue modificada, ¿qué leyes la modificaron?
3. ¿Hay decretos reglamentarios vigentes?
4. Link a InfoLeg con el texto actualizado

Buscá en infoleg.gob.ar como fuente principal.`}
                            </pre>
                        </div>

                        <h3>Prompt 3: Encontrar doctrina sobre un tema</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">PROMPT</div>
                            <pre className="code-block">
                                {`Buscá artículos de doctrina jurídica argentina sobre
[tema específico] publicados en los últimos 3 años.

Quiero:
1. Autor y título del artículo
2. Revista o publicación donde apareció
3. Tesis principal del autor
4. Si es posible, link de acceso

Buscá en: thomsonreuters.com.ar, elderecho.com.ar,
microjuris.com, revistas universitarias de derecho.`}
                            </pre>
                        </div>

                        <h3>Prompt 4: Comparar regulaciones</h3>
                        <div className="prompt-example">
                            <div className="prompt-label">PROMPT</div>
                            <pre className="code-block">
                                {`Compará cómo se regula [tema] en:
- Argentina
- Uruguay  
- Chile
- España

Para cada país indicá:
1. Normativa principal aplicable
2. Diferencias clave
3. Tendencia regulatoria reciente

Esto es para un análisis de derecho comparado.`}
                            </pre>
                        </div>
                    </article>
                </section>

                {/* Sección 4: Manus */}
                <section id="manus" className="page__section">
                    <h2 className="page__section-title">4. Manus: cuando necesitás más que una búsqueda</h2>
                    <article className="long-form-content">
                        <h3>¿Qué es Manus y cuándo usarlo?</h3>
                        <p>
                            <a href="https://manus.im" target="_blank" rel="noopener noreferrer">Manus</a> es un agente de IA que puede <strong>navegar la web por vos</strong>. No solo busca información, sino que puede:
                        </p>
                        <ul className="application-list">
                            <li>Entrar a sitios web y extraer información específica</li>
                            <li>Llenar formularios de búsqueda en bases de datos</li>
                            <li>Descargar documentos y analizarlos</li>
                            <li>Hacer investigaciones que requieren múltiples pasos</li>
                        </ul>

                        <h3>Ejemplo: Investigación compleja con Manus</h3>
                        <pre className="code-block">
                            {`TAREA PARA MANUS:

Necesito que investigues todos los fallos de Cámaras 
de Apelaciones de Argentina sobre "responsabilidad de 
plataformas digitales" del año 2023.

Pasos:
1. Andá a saij.gob.ar
2. Usá el buscador de jurisprudencia
3. Filtrá por: año 2023, jurisdicción nacional, 
   Cámaras de Apelación
4. Buscá términos: "plataforma digital", 
   "intermediario digital", "responsabilidad"
5. Para cada fallo encontrado, extraé:
   - Carátula
   - Tribunal
   - Fecha
   - Resumen de la decisión
6. Organizá los resultados en una tabla

Entregame el resultado como un documento organizado.`}
                        </pre>

                        <div className="highlight-warning">
                            <strong>Limitación:</strong> Manus puede tener dificultades con sitios que requieren login o tienen captchas. Para esos casos, combiná con búsqueda manual.
                        </div>

                        <h3>Cuándo usar Perplexity vs Manus</h3>
                        <div className="comparison-grid">
                            <div className="comparison-box">
                                <h4>🔍 Perplexity</h4>
                                <ul>
                                    <li>Preguntas directas con respuesta clara</li>
                                    <li>Verificación rápida de datos</li>
                                    <li>Búsqueda en múltiples fuentes simultáneas</li>
                                    <li>Cuando necesitás velocidad</li>
                                </ul>
                            </div>
                            <div className="comparison-box">
                                <h4>🤖 Manus</h4>
                                <ul>
                                    <li>Investigaciones con múltiples pasos</li>
                                    <li>Extracción de datos de sitios específicos</li>
                                    <li>Tareas que requieren navegación</li>
                                    <li>Cuando necesitás profundidad</li>
                                </ul>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Sección 5: Verificación de fuentes */}
                <section id="verificacion" className="page__section">
                    <h2 className="page__section-title">5. Verificación de fuentes: el paso que no podés saltear</h2>
                    <article className="long-form-content">
                        <p>
                            Tanto Perplexity como Manus pueden cometer errores. La diferencia con Claude/ChatGPT es que <strong>te dan las fuentes</strong>, lo que facilita la verificación. Pero verificar sigue siendo tu responsabilidad.
                        </p>

                        <h3>Protocolo de verificación para jurisprudencia</h3>
                        <div className="checklist-box">
                            <ul className="checklist">
                                <li>☐ ¿El fallo existe? Verificá en SAIJ o CIJ</li>
                                <li>☐ ¿La fecha es correcta?</li>
                                <li>☐ ¿El tribunal es el indicado?</li>
                                <li>☐ ¿La doctrina citada es lo que dice el fallo?</li>
                                <li>☐ ¿El fallo sigue vigente o fue revisado/revocado?</li>
                            </ul>
                        </div>

                        <h3>Protocolo de verificación para normativa</h3>
                        <div className="checklist-box">
                            <ul className="checklist">
                                <li>☐ ¿El número de ley/decreto es correcto?</li>
                                <li>☐ ¿El artículo citado dice exactamente eso?</li>
                                <li>☐ ¿La norma sigue vigente?</li>
                                <li>☐ ¿Hay modificaciones posteriores?</li>
                                <li>☐ Verificá el texto consolidado en InfoLeg</li>
                            </ul>
                        </div>

                        <h3>Herramientas oficiales para verificación</h3>
                        <ul className="application-list">
                            <li><strong>InfoLeg:</strong> <a href="http://www.infoleg.gob.ar" target="_blank" rel="noopener noreferrer">infoleg.gob.ar</a> - Normativa nacional</li>
                            <li><strong>SAIJ:</strong> <a href="http://www.saij.gob.ar" target="_blank" rel="noopener noreferrer">saij.gob.ar</a> - Jurisprudencia y doctrina</li>
                            <li><strong>CIJ:</strong> <a href="http://www.cij.gov.ar" target="_blank" rel="noopener noreferrer">cij.gov.ar</a> - Fallos de la CSJN</li>
                            <li><strong>PJN:</strong> <a href="http://www.pjn.gov.ar" target="_blank" rel="noopener noreferrer">pjn.gov.ar</a> - Consultas de expedientes</li>
                        </ul>

                        <blockquote className="concept-quote">
                            La IA te ayuda a encontrar la aguja en el pajar. Pero confirmar que es la aguja correcta sigue siendo trabajo tuyo.
                        </blockquote>
                    </article>
                </section>

                {/* Sección 6: Caso práctico */}
                <section id="caso-practico" className="page__section">
                    <h2 className="page__section-title">6. Caso práctico: Investigación sobre criptoactivos</h2>
                    <article className="long-form-content">
                        <div className="case-study-box">
                            <p><strong>Situación:</strong> Un cliente quiere saber si puede pagar sueldos parcialmente en criptomonedas en Argentina. Necesitás investigar el marco regulatorio actual.</p>
                            <p><strong>Desafío:</strong> El tema es nuevo, la regulación cambia constantemente, y necesitás información actualizada.</p>
                        </div>

                        <h3>Paso 1: Búsqueda inicial en Perplexity</h3>
                        <pre className="code-block">
                            {`MI PROMPT:
"¿Es legal pagar salarios en criptomonedas en Argentina?
Buscá la normativa vigente a febrero 2024.
Incluí: Ley de Contrato de Trabajo, resoluciones del
BCRA, opiniones del Ministerio de Trabajo."

RESPUESTA PERPLEXITY (extracto):
"Según la Ley de Contrato de Trabajo (20.744), art. 124,
el salario debe abonarse en moneda de curso legal...

El BCRA mediante Comunicación A 7506 estableció que...

Sin embargo, no hay prohibición expresa para 
beneficios adicionales no remunerativos...

Fuentes:
- infoleg.gob.ar/ley20744
- bcra.gob.ar/comunicacionA7506
- [otros links]"`}
                        </pre>

                        <h3>Paso 2: Profundización con Manus</h3>
                        <pre className="code-block">
                            {`MI PROMPT A MANUS:
"Investigá si hay fallos judiciales en Argentina donde
se haya discutido el pago de remuneraciones o beneficios
en criptomonedas o activos digitales.

Buscá en SAIJ y en buscadores de jurisprudencia.
Si encontrás casos, dame:
- Datos del fallo
- Qué se discutía exactamente  
- Cómo resolvió el tribunal"

RESPUESTA MANUS:
"Realicé la búsqueda en SAIJ con los términos 
'criptomoneda salario', 'bitcoin remuneración' y
'activo digital contrato trabajo'.

Resultados encontrados: 0 fallos específicos sobre
pago de salarios en crypto.

Sin embargo, encontré 3 fallos relacionados con
criptomonedas en contexto laboral:
1. [detalle de fallo sobre embargo de cryptos]
2. [detalle de fallo sobre valuación de activos]
..."`}
                        </pre>

                        <h3>Paso 3: Verificación manual</h3>
                        <p>Con la información obtenida, fui a las fuentes oficiales:</p>
                        <ul className="application-list">
                            <li>Verifiqué art. 124 LCT en InfoLeg ✅</li>
                            <li>Busqué la Comunicación A 7506 en BCRA ✅</li>
                            <li>Confirmé que no hay jurisprudencia específica ✅</li>
                        </ul>

                        <h3>Paso 4: Conclusión para el cliente</h3>
                        <pre className="code-block">
                            {`RESUMEN DE INVESTIGACIÓN:

CONCLUSIÓN: No es posible pagar el salario básico en
criptomonedas porque la LCT exige moneda de curso legal.

ALTERNATIVA VIABLE: 
- Salario base en pesos (obligatorio)
- Beneficio adicional no remunerativo en crypto 
  (requiere acuerdo escrito, análisis impositivo)

ADVERTENCIA: Área gris sin regulación específica ni
jurisprudencia. Recomendar consulta con especialista
tributario y enfoque conservador.

FUENTES VERIFICADAS: [lista de links oficiales]`}
                        </pre>

                        <div className="highlight-success">
                            <strong>Resultado:</strong> En 45 minutos, tenía un panorama completo de un tema sin regulación clara, con fuentes verificadas. El cliente pudo tomar una decisión informada.
                        </div>
                    </article>
                </section>

                {/* Sección 7: Errores comunes */}
                <section id="errores" className="page__section">
                    <h2 className="page__section-title">7. Errores comunes y cómo evitarlos</h2>
                    <article className="long-form-content">
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Error: Confiar en el resumen sin ver la fuente</h4>
                                <p>Perplexity resume, pero puede malinterpretar. El fallo no dice exactamente lo que el resumen indica.</p>
                                <p><strong>Solución:</strong> Siempre hacé clic en la fuente y verificá el texto original.</p>
                            </div>
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Error: Asumir que "no encontró" significa "no existe"</h4>
                                <p>Puede haber fallos que no están digitalizados o que usan otra terminología.</p>
                                <p><strong>Solución:</strong> Probá sinónimos, buscá en múltiples bases de datos.</p>
                            </div>
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Error: No verificar la fecha del contenido web</h4>
                                <p>Un artículo de 2019 puede citar normativa ya derogada.</p>
                                <p><strong>Solución:</strong> Verificá siempre la fecha de publicación y la vigencia actual.</p>
                            </div>
                            <div className="comparison-box comparison-box--bad">
                                <h4>❌ Error: Usar solo en español</h4>
                                <p>Para temas nuevos, a veces hay mejor doctrina en inglés.</p>
                                <p><strong>Solución:</strong> Buscá también en inglés para derecho comparado.</p>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Sección 8: Ejercicio */}
                <section id="ejercicio" className="page__section">
                    <h2 className="page__section-title">8. Ejercicio: Investigación jurídica completa</h2>
                    <article className="long-form-content">
                        <div className="exercise-box">
                            <h3>🎯 Objetivo</h3>
                            <p>Realizar una investigación jurídica usando Perplexity sobre un tema de tu práctica.</p>

                            <h3>📋 Pasos</h3>
                            <ol className="application-list">
                                <li><strong>Elegí un tema:</strong> Algo que te hayan consultado recientemente o que necesites investigar.</li>
                                <li><strong>Buscá normativa:</strong> Usá el prompt de verificación de vigencia.</li>
                                <li><strong>Buscá jurisprudencia:</strong> Usá el prompt de fallos recientes.</li>
                                <li><strong>Verificá cada fuente:</strong> Andá a los sitios oficiales y confirmá.</li>
                                <li><strong>Documentá:</strong> Armá un memo con las fuentes verificadas.</li>
                            </ol>

                            <h3>📝 Template de memo de investigación</h3>
                            <pre className="code-block">
                                {`MEMO DE INVESTIGACIÓN JURÍDICA
==============================
Tema: [describir]
Fecha: [hoy]
Investigador: [tu nombre]

1. NORMATIVA APLICABLE
   - [Ley X - link a InfoLeg]
   - [Decreto Y - link]

2. JURISPRUDENCIA RELEVANTE
   - [Fallo 1 - datos completos - link a SAIJ]
   - [Fallo 2 - datos completos - link]

3. DOCTRINA CONSULTADA
   - [Artículo - autor - publicación]

4. CONCLUSIONES PRELIMINARES
   [resumen de hallazgos]

5. ADVERTENCIAS
   [limitaciones, zonas grises, necesidad de 
   profundizar]`}
                            </pre>

                            <h3>✅ Criterio de éxito</h3>
                            <p>Tenés un memo con al menos 3 fuentes verificadas que podrías usar en un escrito judicial.</p>
                        </div>
                    </article>
                </section>

                {/* Footer de navegación */}
                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/mastering-u2" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M6 U2: ChatGPT para análisis jurídico</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/mastering-u4" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Unidad 4 – Gemini Deep Research para doctrina →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MasteringM6U3

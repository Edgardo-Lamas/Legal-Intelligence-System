import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function PrivacyM8U2() {
    return (
        <div className="page">
            <PageSEO
                title="Secreto profesional y IA: marco legal argentino · M8 U2"
                description="Análisis del secreto profesional del abogado frente al uso de herramientas de IA. Art. 156 CP, ética provincial y qué dice la doctrina argentina sobre la cuestión."
                path="/privacy-u2"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 8 · Unidad 2</span>
                <h1 className="page__title">Secreto profesional y IA: el marco legal argentino</h1>
                <p className="page__description">
                    ¿Subir un expediente a ChatGPT viola el secreto profesional? La respuesta depende de variables
                    concretas que todo abogado debería conocer antes de usar IA.
                </p>
            </header>

            <div className="page__content">

                <section id="marco" className="page__section">
                    <h2 className="page__section-title">1. El secreto profesional en el derecho argentino</h2>
                    <article className="long-form-content">
                        <p>
                            El secreto profesional del abogado es una obligación de raíz constitucional y legal.
                            Su violación tiene consecuencias civiles, penales y disciplinarias. Antes de analizar
                            la IA, conviene tener claro el marco.
                        </p>

                        <h3>Base normativa</h3>
                        <ul className="application-list">
                            <li>
                                <strong>Art. 156 del Código Penal:</strong> "Será reprimido con multa... el que
                                teniendo noticia por razón de su estado, oficio, empleo, profesión o arte, de
                                un secreto cuya divulgación pueda causar daño, lo revelare sin justa causa."
                            </li>
                            <li>
                                <strong>Leyes de ética provincial:</strong> Cada colegio de abogados tiene su
                                propio régimen disciplinario. En PBA: Decreto-Ley 8904/77 y su reglamentación.
                                En CABA: Ley 23.187.
                            </li>
                            <li>
                                <strong>CCCN, Art. 1720:</strong> El secreto profesional como limitación al deber
                                de información en el marco contractual.
                            </li>
                        </ul>

                        <h3>Qué protege el secreto profesional</h3>
                        <p>
                            El secreto cubre toda información que el cliente comunica al abogado en el contexto
                            de la relación profesional, con la expectativa de que no será revelada. Esto incluye
                            no solo lo que el cliente dice explícitamente, sino también lo que se desprende del
                            expediente, documentación y contexto de la causa.
                        </p>
                    </article>
                </section>

                <section id="divulgacion" className="page__section">
                    <h2 className="page__section-title">2. ¿Subir información a una IA es "divulgar" el secreto?</h2>
                    <article className="long-form-content">
                        <p>
                            Esta es la pregunta central. La respuesta requiere distinguir entre conceptos que
                            en el derecho tradicional son claros, pero que la tecnología vuelve más complejos.
                        </p>

                        <h3>La distinción que hace la diferencia</h3>
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--bad">
                                <h4>Divulgación — lo que prohíbe el Art. 156 CP</h4>
                                <p>
                                    Revelar el secreto a <strong>otra persona</strong> que no estaba autorizada
                                    a conocerlo. El tipo penal requiere que la información llegue a la esfera
                                    de conocimiento de un tercero.
                                </p>
                            </div>
                            <div className="comparison-box">
                                <h4>Procesamiento — lo que hace la IA</h4>
                                <p>
                                    Un modelo de IA procesa el texto matemáticamente para generar una respuesta.
                                    No hay un "receptor humano" en tiempo real. La cuestión es si este
                                    procesamiento equivale a divulgación.
                                </p>
                            </div>
                        </div>

                        <h3>Posición doctrinaria mayoritaria</h3>
                        <p>
                            La doctrina argentina que ha analizado el tema — aún escasa pero creciente —
                            distingue entre el uso de herramientas de IA como <strong>auxiliares del profesional</strong>
                            (comparable al uso de asistentes o software especializado) y la divulgación genuina
                            a terceros. La mayoría entiende que el uso de IA como herramienta interna de trabajo
                            no configura, por sí solo, la violación del Art. 156 CP.
                        </p>
                        <p>
                            Sin embargo, hay factores que pueden cambiar esa conclusión:
                        </p>
                        <ul className="key-points">
                            <li>
                                <strong>Si la plataforma usa los datos para entrenar modelos</strong>, existe un
                                argumento de que la información ingresa a la esfera de conocimiento de la empresa
                                desarrolladora y potencialmente de futuros usuarios del modelo.
                            </li>
                            <li>
                                <strong>Si la plataforma almacena conversaciones que pueden ser revisadas por empleados</strong>,
                                el dato confidencial sale del control exclusivo del profesional.
                            </li>
                            <li>
                                <strong>Si hay una brecha de seguridad</strong>, la información queda expuesta
                                a terceros no autorizados. El profesional que usó la herramienta puede ser
                                responsable si no tomó las precauciones razonables.
                            </li>
                        </ul>
                    </article>
                </section>

                <section id="colegios" className="page__section">
                    <h2 className="page__section-title">3. Qué dicen los colegios de abogados</h2>
                    <article className="long-form-content">
                        <p>
                            Los colegios de abogados argentinos no han emitido pronunciamientos vinculantes
                            y uniformes sobre el uso de IA a la fecha de redacción de este material. Esto
                            es esperable: la tecnología avanzó más rápido que la regulación.
                        </p>
                        <p>
                            Los documentos y comunicados que existen — del CPACF, colegios provinciales y
                            organizaciones de abogados — tienden a coincidir en tres puntos:
                        </p>
                        <ul className="application-list">
                            <li><strong>El secreto profesional aplica plenamente</strong> en el contexto del uso de IA</li>
                            <li><strong>El abogado es responsable</strong> de las medidas de seguridad que adopta para proteger la información de sus clientes</li>
                            <li><strong>Se recomienda precaución</strong>, en especial con herramientas que no ofrecen garantías de privacidad</li>
                        </ul>

                        <div className="highlight-warning">
                            <strong>Estado actual:</strong> No existe todavía una norma de ética profesional
                            argentina que regule específicamente el uso de IA por abogados. Eso significa que
                            los estándares se derivan de principios generales (secreto, diligencia, competencia
                            profesional). A medida que la práctica se consolide, es probable que los colegios
                            emitan guías más específicas. Es importante estar atentos.
                        </div>
                    </article>
                </section>

                <section id="criterio" className="page__section">
                    <h2 className="page__section-title">4. El criterio de diligencia razonable</h2>
                    <article className="long-form-content">
                        <p>
                            En ausencia de normas específicas, el criterio que rige es el de la <strong>diligencia
                            profesional razonable</strong>: el abogado debe adoptar las medidas que un profesional
                            cuidadoso, informado sobre las herramientas que usa, adoptaría para proteger la
                            información de sus clientes.
                        </p>
                        <p>
                            Esto implica, concretamente:
                        </p>

                        <div className="flow-steps">
                            <div className="flow-step">
                                <strong>Conocer la política de privacidad</strong> de cada plataforma que usás
                                para trabajo profesional. No alcanza con "asumir" que es segura.
                            </div>
                            <div className="flow-step">
                                <strong>Usar planes que ofrezcan las garantías adecuadas</strong> al tipo de
                                información que manejás. Para información altamente sensible, los planes
                                gratuitos no son suficientes.
                            </div>
                            <div className="flow-step">
                                <strong>Anonimizar cuando sea posible</strong>. Si podés hacer el análisis
                                sin revelar la identidad del cliente, hacélo. (Ver U3 de este módulo)
                            </div>
                            <div className="flow-step">
                                <strong>Documentar las medidas adoptadas</strong>. Si en algún momento se
                                cuestionara tu conducta, la documentación de las precauciones que tomaste
                                es tu defensa.
                            </div>
                        </div>
                    </article>
                </section>

                <section id="analogia" className="page__section">
                    <h2 className="page__section-title">5. La analogía que aclara todo</h2>
                    <article className="long-form-content">
                        <p>
                            Pensemos en cómo usamos tecnología en la práctica jurídica cotidiana:
                        </p>
                        <ul className="application-list">
                            <li>Enviamos documentos por <strong>email</strong> — que pasan por servidores de terceros</li>
                            <li>Guardamos expedientes en <strong>Google Drive o Dropbox</strong> — servidores externos</li>
                            <li>Usamos <strong>software de gestión de estudios</strong> — que almacena datos en la nube</li>
                            <li>Dictamos notas en <strong>aplicaciones de transcripción</strong> — que procesan audio</li>
                        </ul>
                        <p>
                            Ninguna de estas prácticas, adoptadas masivamente por abogados argentinos, ha generado
                            condenas penales o sanciones disciplinarias sistemáticas por violación del secreto
                            profesional. El criterio que aplica es el mismo: <strong>medidas razonables de seguridad,
                            proporcionales al nivel de sensibilidad de la información</strong>.
                        </p>
                        <p>
                            La IA no es diferente en principio. La diferencia está en que muchos abogados la
                            usan sin haber tomado las decisiones de configuración básicas — algo que con el email
                            o el almacenamiento en la nube sí suelen hacer.
                        </p>

                        <div className="highlight-success">
                            <strong>Conclusión práctica:</strong> Usar IA para trabajo jurídico no viola
                            el secreto profesional si adoptás medidas razonables: plataforma con política
                            adecuada, anonimización de datos identificatorios, y criterio en qué subís.
                            La unidad siguiente explica exactamente cómo hacerlo.
                        </div>
                    </article>
                </section>

                <section id="checklist" className="page__section">
                    <h2 className="page__section-title">6. Checklist de esta unidad</h2>
                    <article className="long-form-content">
                        <div className="checklist-box">
                            <ul className="checklist">
                                <li>☐ Conozco el Art. 156 CP y entiendo qué configura "divulgación"</li>
                                <li>☐ Entiendo la distinción entre procesamiento por IA y divulgación a terceros</li>
                                <li>☐ Sé que los colegios argentinos aún no tienen normas específicas sobre IA</li>
                                <li>☐ Aplico el criterio de diligencia razonable al elegir herramientas</li>
                                <li>☐ Leí (o voy a leer) la política de privacidad de al menos una de las plataformas que uso</li>
                            </ul>
                        </div>
                    </article>
                </section>

                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/privacy" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M8 U1: ¿ChatGPT entrena con mis datos?</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/privacy-u3" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            U3 – Cómo usar IA con información sensible →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyM8U2

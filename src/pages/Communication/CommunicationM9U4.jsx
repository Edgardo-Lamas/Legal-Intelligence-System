import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function CommunicationM9U4() {
    return (
        <div className="page">
            <PageSEO
                title="Newsletter legal: automatización y segmentación · M9 U4"
                description="Cómo crear y automatizar una newsletter jurídica que retiene clientes, genera referidos y posiciona tu especialidad — con IA para el contenido y n8n para el envío."
                path="/communication-u4"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 9 · Unidad 4</span>
                <h1 className="page__title">Newsletter legal: automatización y segmentación</h1>
                <p className="page__description">
                    La newsletter es el canal de comunicación que más convierte en servicios
                    profesionales — y el que más se descuida. Porque publicarla de forma
                    consistente requería tiempo que no sobraba. Hasta ahora.
                </p>
            </header>

            <div className="page__content">

                <section id="por-que" className="page__section">
                    <h2 className="page__section-title">1. Por qué la newsletter supera a las redes para retención</h2>
                    <article className="long-form-content">
                        <p>
                            LinkedIn te presta su audiencia. La newsletter es tuya. Si LinkedIn
                            cambia su algoritmo o cierra tu cuenta, perdés el canal. Si tenés
                            una lista de emails de clientes y referidos, ese activo es permanente.
                        </p>
                        <ul className="key-points">
                            <li>
                                <strong>Tasa de apertura:</strong> Una newsletter jurídica bien
                                segmentada tiene 30-45% de apertura. El alcance orgánico de LinkedIn
                                es 3-8% de tus seguidores.
                            </li>
                            <li>
                                <strong>Intención de lectura:</strong> Quien se suscribe quiere
                                recibir tu contenido. No compite con fotos de vacaciones y noticias
                                del día.
                            </li>
                            <li>
                                <strong>Efecto de recordación:</strong> Un cliente que recibe tu
                                newsletter mensual te tiene presente cuando surge un problema legal.
                                El que no la recibe te llama al competidor que aparece en Google.
                            </li>
                        </ul>
                    </article>
                </section>

                <section id="que-enviar" className="page__section">
                    <h2 className="page__section-title">2. Qué enviar en cada edición</h2>
                    <article className="long-form-content">
                        <p>
                            La newsletter jurídica no es un boletín de noticias genérico.
                            Es una publicación de especialista que le dice al lector:
                            "Estoy al tanto de lo que puede afectarte y te aviso antes de que
                            te genere un problema."
                        </p>
                        <div className="flow-steps">
                            <div className="flow-step">
                                <strong>Una novedad del mes en tu área:</strong> Un fallo relevante,
                                una modificación normativa, un cambio de criterio del organismo de
                                aplicación. Explicás qué implica para el tipo de cliente al que
                                le escribís.
                            </div>
                            <div className="flow-step">
                                <strong>Un error frecuente que evitar:</strong> Algo que viste en
                                casos reales que los clientes hacen mal (contratos que firman sin
                                leer, documentación que no guardan, plazos que dejan vencer).
                            </div>
                            <div className="flow-step">
                                <strong>Una recomendación práctica:</strong> Algo que el lector
                                puede hacer esta semana sin contratar a nadie. Genera confianza.
                            </div>
                            <div className="flow-step">
                                <strong>Un CTA suave al final:</strong> "Si tu empresa tiene
                                contratos con esta cláusula, revisalos. Si necesitás ayuda con
                                eso, avisanos." No más de dos líneas.
                            </div>
                        </div>

                        <h3>Prompt para generar el borrador de cada edición</h3>
                        <div className="full-prompt-example">
                            <p>
                                "Actuás como editor de una newsletter jurídica mensual para un
                                abogado especialista en [área]. La audiencia son [clientes tipo:
                                PyMEs / empresarios / individuos con patrimonio / etc.].
                            </p>
                            <p>
                                Novedades del mes que quiero incluir: [listar 1-2 novedades
                                normativas o jurisprudenciales].
                                Error frecuente que quiero destacar este mes: [describir].
                            </p>
                            <p>
                                Redactá la edición completa: (1) asunto del email (que genere
                                apertura, no spam), (2) párrafo de bienvenida breve, (3) sección
                                de novedad del mes (200 palabras), (4) sección de error frecuente
                                (150 palabras), (5) recomendación práctica (100 palabras),
                                (6) cierre con CTA suave.
                            </p>
                            <p>
                                Tono: experto amigable. El lector no es abogado. Sin tecnicismos
                                sin explicación. Extensión total: máximo 600 palabras."
                            </p>
                        </div>
                    </article>
                </section>

                <section id="segmentacion" className="page__section">
                    <h2 className="page__section-title">3. Segmentación: no todos los clientes leen lo mismo</h2>
                    <article className="long-form-content">
                        <p>
                            Si tenés clientes en diferentes áreas (laboral + comercial, por ejemplo),
                            el mismo contenido no les sirve a todos. La segmentación básica para
                            un estudio pequeño:
                        </p>
                        <div className="comparison-grid">
                            <div className="comparison-box">
                                <h4>Lista A: Clientes activos</h4>
                                <p>Clientes con causa o proceso en curso. Newsletter mensual
                                más específica sobre el área de su caso. Puede incluir recordatorio
                                de vencimientos genéricos del mes.</p>
                            </div>
                            <div className="comparison-box">
                                <h4>Lista B: Ex-clientes y referidos</h4>
                                <p>Clientes que cerraron su caso y personas que te conocen pero
                                no tienen causa activa. Newsletter trimestral con novedades generales
                                de tu área de práctica. Objetivo: seguir en su radar.</p>
                            </div>
                        </div>
                        <p>
                            Con herramientas como Mailchimp, Brevo o Substack podés manejar
                            estas listas de forma separada y programar los envíos con anticipación.
                        </p>
                    </article>
                </section>

                <section id="automatizacion" className="page__section">
                    <h2 className="page__section-title">4. Automatización con n8n</h2>
                    <article className="long-form-content">
                        <p>
                            Para el abogado que ya conoce n8n (M6 U2), la newsletter se puede
                            semi-automatizar:
                        </p>
                        <div className="flow-steps">
                            <div className="flow-step">
                                <strong>Trigger mensual automático:</strong> El primer lunes de cada
                                mes, n8n genera una solicitud a la API de Claude con el prompt de
                                newsletter, con las novedades del mes que vos cargaste en un Google
                                Sheet durante el mes.
                            </div>
                            <div className="flow-step">
                                <strong>Claude genera el borrador</strong> y n8n lo guarda en un
                                Google Doc o te lo envía por email para revisión.
                            </div>
                            <div className="flow-step">
                                <strong>Vos revisás y aprobás</strong> (15 minutos), hacés los
                                ajustes que querés.
                            </div>
                            <div className="flow-step">
                                <strong>Aprobás el envío</strong> en Mailchimp/Brevo con un click.
                                La lista ya está segmentada y configurada.
                            </div>
                        </div>
                        <div className="highlight-success">
                            <strong>Resultado:</strong> Una newsletter mensual profesional con
                            20 minutos de trabajo al mes — el tiempo de cargar novedades en el
                            Sheet durante el mes + 15 minutos de revisión.
                        </div>
                    </article>
                </section>

                <section id="checklist" className="page__section">
                    <h2 className="page__section-title">5. Checklist de esta unidad</h2>
                    <article className="long-form-content">
                        <div className="checklist-box">
                            <ul className="checklist">
                                <li>☐ Elegí la herramienta de envío (Mailchimp, Brevo, o Substack)</li>
                                <li>☐ Cargué mis contactos segmentados en al menos dos listas</li>
                                <li>☐ Generé el borrador de la primera edición con el prompt de esta unidad</li>
                                <li>☐ Revisé y envié la primera edición</li>
                                <li>☐ Establecí un sistema para acumular novedades del mes (Google Sheet o nota)</li>
                            </ul>
                        </div>
                    </article>
                </section>

                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/communication-u3" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M9 U3: Blog y SEO jurídico</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próxima unidad:</span>
                        <Link to="/communication-u5" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            U5 – Video y voz: herramientas IA para abogados en cámara →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommunicationM9U4

import '../../styles/pages.css'
import '../../styles/content.css'
import '../../styles/study-page.css'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'

function MasteringM6U5() {
    return (
        <div className="page">
            <PageSEO
                title="MCP servers: Claude conectado a tus propias fuentes jurídicas · M5 U5"
                description="Qué es el Model Context Protocol, cómo conecta Claude con fuentes externas, y cómo los asistentes Alcance Legal usan MCP para acceder a normativa y jurisprudencia en tiempo real."
                path="/mastering-u5"
            />
            <header className="page__header">
                <span className="page__module-tag">Módulo 5 · Unidad 5</span>
                <h1 className="page__title">MCP servers: Claude conectado a tus fuentes</h1>
                <p className="page__description">
                    El Model Context Protocol transforma a Claude de un modelo que
                    "sabe cosas" a un agente que puede consultar tus propias bases de datos,
                    normativa actualizada y sistemas en tiempo real.
                </p>
            </header>

            <div className="page__content">

                <section id="que-es" className="page__section">
                    <h2 className="page__section-title">1. Qué es el Model Context Protocol</h2>
                    <article className="long-form-content">
                        <p>
                            El Model Context Protocol (MCP) es un estándar abierto creado por Anthropic
                            que define cómo Claude puede comunicarse con herramientas y fuentes de datos
                            externas durante una conversación. En términos simples:
                        </p>
                        <blockquote className="concept-quote">
                            Sin MCP, Claude responde con lo que aprendió durante su entrenamiento.
                            Con MCP, Claude puede consultar <em>en tiempo real</em> cualquier base de datos,
                            API o sistema que vos le conectes — y usar esa información en su respuesta.
                        </blockquote>
                        <p>
                            La diferencia no es menor. Un Claude sin MCP sobre derecho procesal penal
                            de Buenos Aires responde con conocimiento general, posiblemente desactualizado.
                            Un Claude con un MCP server conectado al texto oficial del CPP PBA (Ley 11.922)
                            cita el artículo exacto y su redacción vigente.
                        </p>
                        <p>
                            MCP es lo que permite construir asistentes jurídicos especializados que
                            son <strong>verificables</strong> — no solo plausibles.
                        </p>
                    </article>
                </section>

                <section id="arquitectura" className="page__section">
                    <h2 className="page__section-title">2. Cómo funciona la arquitectura</h2>
                    <article className="long-form-content">
                        <p>
                            El protocolo tiene tres componentes:
                        </p>
                        <div className="flow-steps">
                            <div className="flow-step">
                                <strong>MCP Client (Claude)</strong> — El modelo actúa como cliente.
                                Cuando necesita información externa, hace una solicitud estructurada
                                al servidor MCP correspondiente.
                            </div>
                            <div className="flow-step">
                                <strong>MCP Server</strong> — Un servidor que expone herramientas
                                o datos específicos. Puede ser una base de datos de jurisprudencia,
                                una API de seguimiento de causas, el texto de un código procesal,
                                o cualquier fuente que vos configures.
                            </div>
                            <div className="flow-step">
                                <strong>Fuente de datos</strong> — Lo que el servidor MCP consulta:
                                un archivo JSON, una base de datos Supabase, una API pública, un
                                PDF indexado, un Google Sheet. El formato es flexible.
                            </div>
                        </div>
                        <p>
                            El flujo de una consulta:
                        </p>
                        <div className="flow-steps">
                            <div className="flow-step">
                                Usuario pregunta: "¿Cuál es el plazo para deducir excepciones en el
                                CPP PBA?"
                            </div>
                            <div className="flow-step">
                                Claude detecta que necesita buscar en la fuente jurídica conectada
                                y hace una llamada al MCP server con los parámetros de búsqueda.
                            </div>
                            <div className="flow-step">
                                El MCP server busca en la base de datos del CPP PBA y devuelve
                                el texto del artículo relevante con su número y redacción exacta.
                            </div>
                            <div className="flow-step">
                                Claude integra esa información en su respuesta, citando la fuente
                                con precisión. Sin inventar artículos, sin conocimiento aproximado.
                            </div>
                        </div>
                    </article>
                </section>

                <section id="caso-practico" className="page__section">
                    <h2 className="page__section-title">3. Caso práctico: Alcance Legal Penal</h2>
                    <article className="long-form-content">
                        <p>
                            Los asistentes Alcance Legal — el widget que encontrás en este sitio —
                            están construidos exactamente sobre esta arquitectura. Podés verlo
                            en funcionamiento antes de entender cómo está hecho.
                        </p>
                        <p>
                            La estructura técnica de Alcance Legal Penal:
                        </p>
                        <ul className="application-list">
                            <li>
                                <strong>Frontend:</strong> Componente React integrado en el sitio.
                                El usuario escribe su consulta sobre el CPP PBA.
                            </li>
                            <li>
                                <strong>API de Claude:</strong> Recibe el mensaje del usuario con
                                un system prompt especializado en derecho procesal penal bonaerense.
                            </li>
                            <li>
                                <strong>MCP server (Supabase):</strong> Alojado en
                                Supabase Edge Functions. Contiene el texto indexado del CPP PBA
                                (Ley 11.922) y las herramientas que Claude puede invocar para
                                buscar artículos por número, por tema, o por término exacto.
                            </li>
                            <li>
                                <strong>Resultado:</strong> Claude responde citando artículos
                                específicos de la ley, con el texto exacto — no interpretaciones
                                generales de lo que "suele decir" la normativa procesal.
                            </li>
                        </ul>
                        <div className="highlight-success">
                            <strong>Por qué importa para la responsabilidad profesional:</strong>
                            Un asistente sin MCP que "sabe" de derecho procesal puede dar una respuesta
                            plausible pero incorrecta — y vos no tenés forma de verificarlo sin ir
                            a la fuente de todas formas. Un asistente con MCP vinculado a la norma
                            oficial es verificable: podés ir al artículo citado y confirmar.
                        </div>
                    </article>
                </section>

                <section id="herramientas" className="page__section">
                    <h2 className="page__section-title">4. Qué podés conectar vía MCP</h2>
                    <article className="long-form-content">
                        <p>
                            Para un estudio jurídico argentino, las fuentes más valiosas
                            para conectar via MCP:
                        </p>
                        <div className="comparison-grid">
                            <div className="comparison-box comparison-box--good">
                                <h4>Fuentes normativas</h4>
                                <ul>
                                    <li>Texto de códigos procesales (CPP PBA, CPPN, CPCCyC)</li>
                                    <li>Normas actualizadas de tu área de práctica</li>
                                    <li>Convenios colectivos aplicables</li>
                                    <li>Reglamentos internos del poder judicial local</li>
                                </ul>
                            </div>
                            <div className="comparison-box comparison-box--good">
                                <h4>Fuentes operativas del estudio</h4>
                                <ul>
                                    <li>Base de causas activas (con estados y vencimientos)</li>
                                    <li>Biblioteca de modelos y precedentes propios</li>
                                    <li>Historial de criterios del estudio por materia</li>
                                    <li>Directorio de clientes y datos de contacto</li>
                                </ul>
                            </div>
                        </div>
                        <div className="highlight-warning">
                            <strong>Qué no es MCP:</strong> MCP no es búsqueda en internet en
                            tiempo real (eso es Perplexity o la búsqueda web de Gemini). MCP
                            conecta Claude con <em>tus</em> fuentes — datos que vos controlás
                            y actualizás. La diferencia es control y verificabilidad.
                        </div>
                    </article>
                </section>

                <section id="como-empezar" className="page__section">
                    <h2 className="page__section-title">5. Cómo conectar tu primer MCP server</h2>
                    <article className="long-form-content">
                        <p>
                            Hay tres niveles de complejidad según tu perfil técnico:
                        </p>

                        <h3>Nivel 1: MCP servers preexistentes (sin código)</h3>
                        <p>
                            La comunidad de Claude publica MCP servers listos para usar.
                            En la documentación oficial (docs.anthropic.com/mcp) y en repositorios
                            como Smithery encontrás servidores para Google Drive, Notion, GitHub,
                            bases de datos SQL, y más. Si tus datos ya están en alguna de esas
                            plataformas, conectarlos requiere solo configuración.
                        </p>

                        <h3>Nivel 2: MCP server en Supabase (bajo código)</h3>
                        <p>
                            Supabase ofrece Edge Functions como hosting para MCP servers.
                            El flujo para un abogado con asistencia técnica:
                        </p>
                        <div className="flow-steps">
                            <div className="flow-step">
                                <strong>Preparar la base de datos:</strong> Cargás el texto de la
                                normativa o tus documentos en una tabla de Supabase. Esto puede
                                hacerse con una hoja de cálculo exportada como CSV.
                            </div>
                            <div className="flow-step">
                                <strong>Configurar las herramientas:</strong> Definís qué puede
                                "preguntar" Claude al servidor — por ejemplo: "buscar_articulo(numero)",
                                "buscar_por_tema(tema)", "listar_causas_activas()".
                            </div>
                            <div className="flow-step">
                                <strong>Conectar a la API de Claude:</strong> En el system prompt
                                de tu asistente, declarás las herramientas disponibles. Claude
                                las invoca automáticamente cuando las necesita.
                            </div>
                        </div>

                        <h3>Nivel 3: Claude Desktop con MCP local</h3>
                        <p>
                            Para uso personal (no asistentes públicos), Claude Desktop permite
                            conectar MCP servers que corren en tu propia computadora. Accede a
                            archivos locales, bases de datos SQLite, o cualquier herramienta
                            que corras en tu máquina. No requiere servidor externo.
                        </p>
                        <div className="full-prompt-example">
                            <p>
                                Ejemplo de configuración en Claude Desktop (claude_desktop_config.json):
                            </p>
                            <p>
                                {`{
  "mcpServers": {
    "mi-normativa": {
      "command": "node",
      "args": ["./mcp-server-normativa.js"],
      "description": "CPP PBA y normativa procesal penal bonaerense"
    }
  }
}`}
                            </p>
                        </div>
                    </article>
                </section>

                <section id="limitaciones" className="page__section">
                    <h2 className="page__section-title">6. Límites reales y cuándo no usarlo</h2>
                    <article className="long-form-content">
                        <div className="risk-list">
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>
                                    <strong>MCP no reemplaza el criterio jurídico.</strong> Si la base
                                    de datos que conectaste tiene errores o está desactualizada, Claude
                                    va a responder con esos errores con igual confianza. La calidad del
                                    MCP server determina la calidad del asistente.
                                </span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>
                                    <strong>Requiere mantenimiento.</strong> Si conectás el texto de
                                    una ley que después se modifica, el servidor va a responder con
                                    la versión desactualizada. Alguien tiene que mantener la fuente actualizada.
                                </span>
                            </div>
                            <div className="risk-item">
                                <span className="risk-icon">⚠️</span>
                                <span>
                                    <strong>Complejidad técnica real.</strong> Crear un MCP server
                                    funcional requiere desarrollo. Es más accesible que hace dos años,
                                    pero no es una tarea de "tarde libre". Contratá asistencia técnica
                                    o usá un servicio gestionado para el primer deploy.
                                </span>
                            </div>
                        </div>
                        <p>
                            MCP tiene sentido cuando el volumen de consultas justifica la inversión
                            en construirlo. Para consultas esporádicas, Projects con documentos cargados
                            en Knowledge da el mismo resultado con cero infraestructura.
                        </p>
                    </article>
                </section>

                <section id="checklist" className="page__section">
                    <h2 className="page__section-title">7. Checklist de esta unidad</h2>
                    <article className="long-form-content">
                        <div className="checklist-box">
                            <ul className="checklist">
                                <li>☐ Entiendo qué diferencia a un asistente con MCP de uno sin MCP</li>
                                <li>☐ Identifiqué al menos una fuente de datos de mi práctica que valdría conectar</li>
                                <li>☐ Probé Alcance Legal Penal y entendí cómo funciona su arquitectura</li>
                                <li>☐ Sé cuándo usar Projects (documentos) vs. MCP (base de datos propia)</li>
                                <li>☐ Evalué si el volumen de mi práctica justifica invertir en un MCP server</li>
                            </ul>
                        </div>
                    </article>
                </section>

                <div className="unit-navigation">
                    <div className="unit-nav-prev">
                        <Link to="/mastering-u4" className="unit-nav-link">
                            <span className="unit-nav-label">← Unidad anterior</span>
                            <span className="unit-nav-title">M5 U4: Claude API</span>
                        </Link>
                    </div>
                    <div className="unit-status">
                        <span className="status-badge status-badge--current">📖 Unidad Actual</span>
                    </div>
                    <div className="next-unit">
                        <span className="next-label">Próximo módulo:</span>
                        <Link to="/ecosystem" className="next-title" style={{ color: 'inherit', textDecoration: 'none' }}>
                            M6 – Ecosistema y Automatización Real →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MasteringM6U5

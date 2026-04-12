import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/pages.css'
import '../../styles/course-map.css'
import PageSEO from '../../components/PageSEO/PageSEO'

const courseData = [
  {
    num: '01',
    path: '/foundations',
    label: 'Fundamentos de IA',
    color: '#4a7c94',
    units: [
      { title: 'IA generativa y agentes', path: '/foundations', topics: ['Qué es IA generativa y qué no', 'Diferencia entre LLM y agente', 'Por qué cambia el ejercicio del derecho'] },
      { title: 'ChatGPT vs Gemini en el ámbito legal', path: '/foundations-u2', topics: ['Fortalezas y debilidades de cada modelo', 'Casos de uso recomendados para cada uno', 'Cuándo usar uno u otro'] },
      { title: 'RAG aplicado al derecho', path: '/foundations-u3', topics: ['Qué es RAG y cómo funciona', 'Uso con jurisprudencia, doctrina y normativa', 'Ventajas frente a prompts simples'] },
      { title: 'Claude: el tercer modelo', path: '/foundations-u4', topics: ['Qué distingue a Claude de los otros modelos', 'Fortalezas en análisis jurídico', 'Alcance Legal como ejemplo real'] },
      { title: 'La tríada en práctica', path: '/foundations-u5', topics: ['Tabla de decisión por tipo de tarea', 'Cuándo usar Claude, Gemini o ChatGPT', 'Sistema de complementación'] },
    ],
  },
  {
    num: '02',
    path: '/prompt-engineering',
    label: 'Prompt Jurídico',
    color: '#5a8a5a',
    units: [
      { title: 'El prompt como mandato jurídico', path: '/prompt-engineering', topics: ['Estructura del prompt efectivo', 'Componentes obligatorios de un prompt seguro', 'Prompt común vs. prompt jurídico'] },
      { title: 'Control de contexto y documentos largos', path: '/prompt-engineering-u2', topics: ['Ventanas de contexto', 'Trabajo con expedientes extensos', 'Segmentación y continuidad'] },
      { title: 'Filtrado de jurisprudencia y doctrina', path: '/prompt-engineering-u3', topics: ['Extracción de criterios relevantes', 'Comparación de fallos', 'Detección de líneas jurisprudenciales'] },
      { title: 'Redacción jurídica asistida', path: '/prompt-engineering-u4', topics: ['Demandas y escritos procesales', 'Contratos y dictámenes', 'Metodología de revisión'] },
      { title: 'Preparación de juicio e interrogatorios', path: '/prompt-engineering-u5', topics: ['Estrategia procesal con IA', 'Generación de preguntas de interrogatorio', 'Análisis de contrapartes'] },
      { title: 'GPTs personalizados y librerías de prompts', path: '/prompt-engineering-u6', topics: ['Qué son los Custom GPTs', 'Cómo organizar prompts reutilizables', 'Biblioteca de prompts por área de práctica'] },
      { title: 'Razonamiento extendido', path: '/prompt-engineering-u7', topics: ['Cuándo usar o1, o3 o Extended Thinking', 'Diferencias entre modos de razonamiento', 'Casos jurídicos donde aplica'] },
    ],
  },
  {
    num: '03',
    path: '/solo-practice',
    label: 'Abogacía por Cuenta Propia',
    color: '#8a6a3a',
    units: [
      { title: 'Gestión del estudio con IA', path: '/solo-practice', topics: ['Sistema mínimo viable de organización', 'Automatización de tareas administrativas', 'Control de vencimientos y agenda'] },
      { title: 'Contabilidad y gestión fiscal asistida', path: '/solo-practice-u2', topics: ['Flujos contables automatizados', 'Seguimiento de honorarios', 'Documentación fiscal'] },
      { title: 'Escritura persuasiva digital', path: '/solo-practice-u3', topics: ['Contenido jurídico para web', 'Lenguaje claro sin perder rigor', 'Adaptación de tono por audiencia'] },
      { title: 'Marketing legal y posicionamiento', path: '/solo-practice-u4', topics: ['Marca personal del abogado', 'Propuesta de valor diferenciada', 'Análisis de competencia con IA'] },
      { title: 'Modelo de negocio con IA', path: '/solo-practice-u5', topics: ['Cobrar por resultado, no por hora', 'Servicios basados en sistemas IA', 'Escalabilidad sin más horas'] },
    ],
  },
  {
    num: '04',
    path: '/gemini',
    label: 'Gemini & Deep Research',
    color: '#5a5a94',
    units: [
      { title: 'Gemini 2.5 Pro en la práctica legal', path: '/gemini', topics: ['Contexto de 2 millones de tokens', 'Deep Research aplicado a casos', 'Cuándo usar Gemini vs. Claude'] },
      { title: 'Canvas: visualización de estructuras jurídicas', path: '/gemini-u2', topics: ['Mapas conceptuales de causas', 'Visualización de argumentos', 'Artefactos interactivos'] },
      { title: 'Automatización y memoria jurídica', path: '/gemini-u3', topics: ['Tareas programadas con Gemini', 'Gestión de conocimiento persistente', 'Alertas y seguimiento proactivo'] },
      { title: 'Gemini + Google Workspace', path: '/gemini-u4', topics: ['Gemini en Docs para revisar escritos', 'Actas automáticas en Meet', 'Resumen de hilos en Gmail'] },
    ],
  },
  {
    num: '05',
    path: '/mastering',
    label: 'Claude: de Projects a agentes',
    color: '#8a4a3a',
    units: [
      { title: 'Claude Projects: configuración avanzada', path: '/mastering', topics: ['Custom Instructions por caso', 'Gestión de Knowledge (hasta 50 archivos)', 'Un Project por caso, sin excepciones'] },
      { title: 'Extended Thinking: análisis jurídico profundo', path: '/mastering-u2', topics: ['Cuándo activar el razonamiento extendido', '4 casos de uso jurídico con prompts', 'Cómo leer el proceso de razonamiento'] },
      { title: 'Artifacts: visualizaciones y documentos interactivos', path: '/mastering-u3', topics: ['Documentos Markdown, tablas HTML, timelines', 'Calculadoras y dashboards React', 'Flujo de iteración sobre documentos'] },
      { title: 'Claude API: tu primer asistente sin programar', path: '/mastering-u4', topics: ['API vs. claude.ai: la distinción clave', '3 caminos sin código (n8n, Poe, Bolt.new)', 'System prompt para asistente jurídico'] },
      { title: 'MCP servers: Claude conectado a tus fuentes', path: '/mastering-u5', topics: ['Qué es el Model Context Protocol', 'Alcance Legal Penal como caso de estudio', 'Qué fuentes vale conectar vía MCP'] },
    ],
  },
  {
    num: '06',
    path: '/ecosystem',
    label: 'Ecosistema y Automatización Real',
    color: '#7a4a8a',
    units: [
      { title: 'El ecosistema IA del abogado argentino 2025', path: '/ecosystem', topics: ['4 categorías de herramientas', 'Stack de ~$80-100 USD/mes', 'Cómo integrar el ecosistema en 5 pasos'] },
      { title: 'n8n y Make: automatización sin código', path: '/ecosystem-u2', topics: ['n8n vs. Make: cuándo usar cada uno', '3 flujos reales para el estudio jurídico', 'Primer flujo en menos de 1 semana'] },
      { title: 'NotebookLM: base de jurisprudencia con IA', path: '/ecosystem-u3', topics: ['Carga de fallos y normativa como fuentes', 'Preguntas que funcionan y que no', 'Audio Overview para escuchar el caso'] },
      { title: 'Perplexity: búsqueda jurídica verificable', path: '/ecosystem-u4', topics: ['Diferencia con Google y con ChatGPT', 'Prompts efectivos para búsqueda jurídica', 'Posición en el flujo de investigación'] },
      { title: 'Harvey, CoCounsel y el mercado de IA jurídica', path: '/ecosystem-u5', topics: ['Panorama legaltech 2025', 'Estado de adopción en Argentina', '4 criterios para evaluar herramientas'] },
    ],
  },
  {
    num: '07',
    path: '/agents',
    label: 'Agentes IA para el Estudio Jurídico',
    color: '#2a6a5a',
    units: [
      { title: 'Qué es un agente IA', path: '/agents', topics: ['Diferencia entre chat y agente', 'Ciclo percepción-razonamiento-acción', 'Cuándo tiene sentido un agente'] },
      { title: 'Agente de investigación jurídica', path: '/agents-u2', topics: ['De la consulta al informe completo', 'Fuentes verificables vs. conocimiento del modelo', 'Prompt de orquestación'] },
      { title: 'Agente de redacción', path: '/agents-u3', topics: ['Del brief al primer borrador', 'Iteración guiada por el abogado', 'Control de calidad en cada paso'] },
      { title: 'Agente de seguimiento de causas', path: '/agents-u4', topics: ['Monitoreo de vencimientos procesales', 'Alertas automáticas configurables', 'Integración con Google Sheets'] },
      { title: 'Orquestación multi-agente', path: '/agents-u5', topics: ['Patrón supervisor + sub-agentes', 'Caso práctico: análisis completo de expediente', 'Cuándo NO usar multi-agente'] },
    ],
  },
  {
    num: '08',
    path: '/privacy',
    label: 'Privacidad, Ética y Secreto Profesional',
    color: '#6a3a6a',
    units: [
      { title: '¿ChatGPT entrena con mis datos?', path: '/privacy', topics: ['Cómo funcionan los datos en cada plataforma', 'Opt-out y configuraciones de privacidad', 'Qué pasa realmente con tu información'] },
      { title: 'Secreto profesional y IA: marco legal argentino', path: '/privacy-u2', topics: ['Ley 23.187 y ética profesional', 'Qué constituye violación al secreto', 'Posición de los colegios de abogados'] },
      { title: 'Cómo usar IA con información sensible', path: '/privacy-u3', topics: ['Técnicas de anonimización', 'Qué nunca subir a un LLM público', 'Protocolo seguro por tipo de dato'] },
      { title: 'Enterprise tiers y modelos locales', path: '/privacy-u4', topics: ['Claude Enterprise vs. Pro', 'Instancias privadas sin entrenamiento', 'Modelos locales (Llama, Mistral)'] },
      { title: 'Ética profesional en la era LLM', path: '/privacy-u5', topics: ['Deontología aplicada al uso de IA', 'Supervisión obligatoria del profesional', 'Dónde trazar el límite de la delegación'] },
    ],
  },
  {
    num: '09',
    path: '/communication',
    label: 'Comunicación y Posicionamiento',
    color: '#6a5a2a',
    units: [
      { title: 'IA para comunicación con clientes', path: '/communication', topics: ['Prompts por tipo de situación procesal', 'Traducir lenguaje jurídico sin perder rigor', 'Flujo: nota rápida → borrador → envío'] },
      { title: 'LinkedIn jurídico: estrategia de contenido con IA', path: '/communication-u2', topics: ['4 tipos de contenido que funcionan', 'Calendario mensual generado con IA', 'Lo que no publicar nunca'] },
      { title: 'Blog y SEO jurídico asistido por IA', path: '/communication-u3', topics: ['Cómo elegir temas que la gente busca', 'Estructura de artículo que posiciona en Google', 'Actualización de contenido envejecido'] },
      { title: 'Newsletter legal: automatización y segmentación', path: '/communication-u4', topics: ['Segmentación por lista (activos / ex-clientes)', 'Borrador mensual con un prompt', 'Automatización con n8n + Mailchimp'] },
      { title: 'Video y voz: herramientas IA para abogados', path: '/communication-u5', topics: ['Guión con Claude, edición con Descript', 'Repropósito: 1 video → 4 formatos', 'El primer video paso a paso'] },
    ],
  },
  {
    num: '10',
    path: '/practice',
    label: 'Tu sistema propio: construí y escalá',
    color: '#4a7a4a',
    units: [
      { title: 'Del concepto al sistema', path: '/practice', topics: ['Diferencia entre herramienta y sistema', 'Preguntas estratégicas de diseño', 'De usuario pasivo a arquitecto'] },
      { title: 'Diseño de flujos de trabajo con IA', path: '/practice-u2', topics: ['Mapeo del proceso actual', 'Dónde insertar IA y dónde no', 'Puntos de control humano obligatorios'] },
      { title: 'Implementación práctica y validación', path: '/practice-u3', topics: ['Criterios de validación por tipo de tarea', 'Documentación del sistema', 'Escalado progresivo'] },
      { title: 'Plan de 90 días', path: '/practice-u4', topics: ['Días 1–30: fundación y primeros hábitos', 'Días 31–60: sistematización y primera automatización', 'Días 61–90: escala y métricas'] },
      { title: 'Escalá: de usuario a arquitecto de IA jurídica', path: '/practice-u5', topics: ['Los 4 niveles de relación con la IA', 'Alcance Legal como modelo de nivel 4', 'El siguiente paso es tuyo'] },
    ],
  },
]

function CourseMap() {
  const [expanded, setExpanded] = useState(['01', '02'])

  const toggle = (num) => {
    setExpanded(prev =>
      prev.includes(num) ? prev.filter(n => n !== num) : [...prev, num]
    )
  }

  const totalUnits = courseData.reduce((acc, m) => acc + m.units.length, 0)

  return (
    <div className="page">
      <PageSEO
        title="Mapa del Curso — Legal Intelligence System"
        description="Recorrido completo del programa: 10 módulos y 51 unidades de IA aplicada al derecho para abogados argentinos."
        path="/course-map"
      />
      <header className="page__header">
        <span className="page__module-tag">📍 Guía de Navegación</span>
        <h1 className="page__title">Mapa del Curso</h1>
        <p className="page__description">
          Recorrido completo del programa — {courseData.length} módulos, {totalUnits} unidades
        </p>
      </header>

      <div className="page__content">
        <div className="course-stats">
          <div className="course-stat">
            <span className="course-stat__number">{courseData.length}</span>
            <span className="course-stat__label">Módulos</span>
          </div>
          <div className="course-stat">
            <span className="course-stat__number">{totalUnits}</span>
            <span className="course-stat__label">Unidades</span>
          </div>
          <div className="course-stat">
            <span className="course-stat__number">100%</span>
            <span className="course-stat__label">Disponible</span>
          </div>
        </div>

        <div className="roadmap">
          {courseData.map((mod) => {
            const isOpen = expanded.includes(mod.num)
            return (
              <div key={mod.num} className="roadmap-block" style={{ '--block-color': mod.color }}>
                <button
                  className={`roadmap-block__header ${isOpen ? 'is-expanded' : ''}`}
                  onClick={() => toggle(mod.num)}
                >
                  <span className="roadmap-block__number" style={{ color: mod.color }}>
                    {mod.num}
                  </span>
                  <span className="roadmap-block__title">{mod.label}</span>
                  <span className="roadmap-block__meta">{mod.units.length} unidades</span>
                  <span className="roadmap-block__toggle">{isOpen ? '−' : '+'}</span>
                </button>

                {isOpen && (
                  <ul className="roadmap-units">
                    {mod.units.map((unit, i) => (
                      <li key={i} className="roadmap-unit roadmap-unit--available">
                        <Link to={unit.path} className="roadmap-unit__link">
                          <div className="roadmap-unit__main">
                            <span className="roadmap-unit__id">
                              U{String(i + 1).padStart(2, '0')}
                            </span>
                            <span className="roadmap-unit__title">{unit.title}</span>
                          </div>
                          <ul className="roadmap-unit__topics">
                            {unit.topics.map((topic, j) => (
                              <li key={j}>{topic}</li>
                            ))}
                          </ul>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CourseMap

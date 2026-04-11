import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/pages.css'
import '../../styles/course-map.css'
import PageSEO from '../../components/PageSEO/PageSEO'

const courseData = [
    {
        id: 1,
        emoji: '🧱',
        title: 'Fundamentos y Estrategia con Modelos de Lenguaje',
        color: '#4a7c94',
        modules: [
            {
                id: 'm1',
                title: 'Módulo 1 – La Importancia de la IA para Abogados',
                units: [
                    { id: 'u1.1', title: 'IA generativa y agentes de IA', path: '/foundations', status: 'completed', topics: ['Qué es IA generativa y qué no', 'Qué son agentes de IA', 'Diferencias prácticas para el ejercicio profesional'] },
                    { id: 'u1.2', title: 'ChatGPT vs Gemini en el ámbito legal', path: '/foundations-u2', status: 'completed', topics: ['Fortalezas y debilidades de cada modelo', 'Casos de uso recomendados', 'Cuándo usar uno u otro'] },
                    { id: 'u1.3', title: 'RAG aplicado al derecho', path: '/foundations-u3', status: 'completed', topics: ['Qué es RAG (Retrieval-Augmented Generation)', 'Uso con jurisprudencia, doctrina y normativa', 'Ventajas frente a prompts simples'] },
                    { id: 'u1.4', title: 'Glosario esencial de IA para abogados', path: '/glossary', status: 'completed', topics: ['Términos clave explicados en lenguaje jurídico', 'Conceptos mínimos para no quedar afuera'] },
                ]
            }
        ]
    },
    {
        id: 2,
        emoji: '🧱',
        title: 'ChatGPT como colaborador jurídico',
        color: '#e8c078',
        modules: [
            {
                id: 'm2',
                title: 'Módulo 2 – ChatGPT: El mejor colaborador que vas a tener',
                units: [
                    { id: 'u2.1', title: 'Ingeniería de Prompts Jurídicos', path: '/prompt-engineering', status: 'completed', topics: ['El prompt como acto de delegación cognitiva', 'Prompt común vs prompt jurídico', 'Componentes obligatorios de un prompt seguro', 'Ejemplos profesionales'] },
                    { id: 'u2.2', title: 'Control de contexto y documentos extensos', path: '/prompt-engineering-u2', status: 'completed', topics: ['Ventanas de contexto', 'Trabajo con expedientes largos', 'Segmentación y continuidad', 'Riesgos de pérdida de información'] },
                    { id: 'u2.3', title: 'Filtrado de jurisprudencia y doctrina', path: '/prompt-engineering-u3', status: 'completed', topics: ['Extracción de criterios relevantes', 'Comparación de fallos', 'Detección de líneas jurisprudenciales'] },
                    { id: 'u2.4', title: 'Redacción jurídica asistida', path: '/prompt-engineering-u4', status: 'completed', topics: ['Demandas', 'Contratos', 'Dictámenes', 'Escritos procesales'] },
                    { id: 'u2.5', title: 'Preparación para juicios y razonamiento profundo', path: '/prompt-engineering-u5', status: 'completed', topics: ['Interrogatorios', 'Estrategias procesales', 'Uso de razonamiento estructurado (DeepThink)'] },
                    { id: 'u2.6', title: 'GPTs personalizados y librerías de prompts', path: '/prompt-engineering-u6', status: 'completed', topics: ['Qué son los GPTs personalizados', 'Casos de uso legales', 'Organización de prompts reutilizables'] },
                ]
            }
        ]
    },
    {
        id: 3,
        emoji: '🧱',
        title: 'Abogacía por cuenta propia',
        color: '#94644a',
        modules: [
            {
                id: 'm3',
                title: 'Módulo 3 – Gestión, marca y práctica profesional',
                units: [
                    { id: 'u3.1', title: 'Abogacía por cuenta propia', path: '/solo-practice', status: 'completed', topics: ['Organización operativa', 'Automatización básica', 'Sistema mínimo viable'] },
                    { id: 'u3.2', title: 'Gestión contable y fiscal automatizada', path: '/solo-practice-u2', status: 'completed', topics: ['Flujos contables', 'Control y alertas', 'Trazabilidad'] },
                    { id: 'u3.3', title: 'Escritura persuasiva digital', path: '/solo-practice-u3', status: 'current', topics: ['Contenido jurídico para web y redes', 'Lenguaje claro sin perder rigor'] },
                    { id: 'u3.4', title: 'Marketing legal y posicionamiento', path: '/solo-practice-u4', status: 'completed', topics: ['Análisis de competencia', 'Marca personal', 'Propuesta de valor'] },
                ]
            }
        ]
    },
    {
        id: 4,
        emoji: '🧱',
        title: 'Gemini y herramientas visuales',
        color: '#4a9478',
        modules: [
            {
                id: 'm4',
                title: 'Módulo 4 – Gemini: otra inteligencia, nuevas funciones',
                units: [
                    { id: 'u4.1', title: 'Deep Research aplicado a casos legales', path: '/gemini', status: 'completed', topics: ['Investigación jurídica asistida', 'Preparación estratégica de casos'] },
                    { id: 'u4.2', title: 'Gemini Canvas: Visualización y estructura', path: '/gemini-u2', status: 'completed', topics: ['Mapas conceptuales', 'Estructuración cognitiva', 'Productos legales inteligentes'] },
                    { id: 'u4.3', title: 'Tareas automáticas y memoria jurídica', path: '/gemini-u3', status: 'current', topics: ['Uso proactivo de IA', 'Programación de alertas', 'Gestión de conocimiento'] },
                ]
            },

        ]
    },
    {
        id: 5,
        emoji: '🧱',
        title: 'Ecosistema avanzado y automatización',
        color: '#7c4a94',
        modules: [
            {
                id: 'm5',
                title: 'Módulo 5 – Ecosistema avanzado y automatización',
                units: [
                    { id: 'u5.1', title: 'Pensar la IA como ecosistema de trabajo jurídico', path: '/ecosystem', status: 'completed', topics: ['Arquitectura mental del abogado', 'Roles de la IA (investigación, redacción, revisión)', 'Automatización vs. Criterio humano'] },
                    { id: 'u5.2', title: 'Automatización jurídica: qué y por qué', path: '/ecosystem-u2', status: 'completed', topics: ['Riesgo decisional vs Repetitividad', 'Criterio del borrador imperfecto', 'Automatizar sin programar'] },
                    { id: 'u5.3', title: 'Flujos de trabajo jurídicos con IA', path: '/ecosystem-u3', status: 'completed', topics: ['Diseño de flujos de trabajo', 'Control humano como estructura', 'Escalabilidad y gestión del contexto'] },
                    { id: 'u5.4', title: 'Integración con documentos y sistemas externos', path: '/ecosystem-u4', status: 'completed', topics: ['Jerarquía de fuentes', 'Conexión con sistemas externos', 'Control del riesgo'] },
                    { id: 'u5.5', title: 'Flujos automatizados y práctica escalable', path: '/ecosystem-u5', status: 'completed', topics: ['Automatización flexible vs rígida', 'Escalabilidad profesional', 'Trazabilidad y auditoría'] },
                ]
            },
            {
                id: 'm6',
                title: 'Módulo 6 – Dominio de herramientas específicas',
                units: [
                    { id: 'u6.1', title: 'Claude Projects para gestión de casos', path: '/mastering', status: 'completed', topics: ['Configuración', 'Prompts reales', 'Caso práctico', 'Checklist'] },
                    { id: 'u6.2', title: 'ChatGPT para análisis jurídico', path: '/mastering-u2', status: 'completed', topics: ['Custom GPTs', 'Análisis de contratos', 'Prompts normativos'] },
                    { id: 'u6.3', title: 'Perplexity/Manus para investigación', path: '/mastering-u3', status: 'completed', topics: ['Búsqueda jurisprudencial', 'Verificación de fuentes'] },
                    { id: 'u6.4', title: 'Gemini Deep Research para doctrina', path: '/mastering-u4', status: 'current', topics: ['Investigación doctrinal', 'Síntesis de fuentes'] },
                ]
            }
        ]
    },
    {
        id: 6,
        emoji: '📢',
        title: 'Comunicación Legal',
        color: '#944a6e',
        modules: [
            {
                id: 'm7',
                title: 'Módulo 7 – IA para comunicación legal',
                units: [
                    { id: 'u7.1', title: 'IA para comunicación legal', path: '/communication', status: 'completed', topics: ['Comunicación estratégica', 'Posicionamiento profesional', 'Ética comunicacional'] },
                ]
            }
        ]
    },
    {
        id: 7,
        emoji: '🔧',
        title: 'De la Teoría a la Práctica',
        color: '#4a5c94',
        modules: [
            {
                id: 'm8',
                title: 'Módulo 8 – De la teoría a la práctica',
                units: [
                    { id: 'u8.1', title: 'Del concepto al sistema', path: '/practice', status: 'completed', topics: ['Pensamiento sistémico', 'Preguntas estratégicas', 'Arquitecto de sistemas'] },
                    { id: 'u8.2', title: 'Diseño de flujos de trabajo con IA', path: '/practice-u2', status: 'completed', topics: ['Secuencias ordenadas', 'Modularidad', 'Impacto organizacional'] },
                    { id: 'u8.3', title: 'Implementación práctica y validación', path: '/practice-u3', status: 'current', topics: ['Enfoque progresivo', 'Criterios de control', 'Documentación'] },
                ]
            },
            {
                id: 'm9',
                title: 'Módulo 9 – Creación de agentes de IA',
                units: [
                    { id: 'u9.1', title: 'Automatización con Make / n8n', path: null, topics: ['Correos', 'Transcripciones'] },
                ]
            },
            {
                id: 'm10',
                title: 'Módulo 10 – MCPs y conexiones externas',
                units: [
                    { id: 'u10.1', title: 'Integraciones prácticas', path: null, topics: ['WhatsApp', 'Trello', 'WordPress'] },
                ]
            }
        ]
    }
]

function CourseMap() {
    const [expandedBlocks, setExpandedBlocks] = useState([1, 2])
    const [expandedModules, setExpandedModules] = useState(['m2'])

    const toggleBlock = (blockId) => {
        setExpandedBlocks(prev =>
            prev.includes(blockId)
                ? prev.filter(id => id !== blockId)
                : [...prev, blockId]
        )
    }

    const toggleModule = (moduleId) => {
        setExpandedModules(prev =>
            prev.includes(moduleId)
                ? prev.filter(id => id !== moduleId)
                : [...prev, moduleId]
        )
    }

    const getUnitStatus = (unit) => {
        if (unit.status === 'current') return 'current'
        if (unit.path) return 'available'
        return 'pending'
    }

    return (
        <div className="page">
            <PageSEO
                title="Mapa del Curso"
                description="Recorrido completo del programa de formación: 8 módulos y sus unidades de IA aplicada al derecho para abogados argentinos."
                path="/course-map"
            />
            <header className="page__header">
                <span className="page__module-tag">📍 Guía de Navegación</span>
                <h1 className="page__title">Mapa del Curso</h1>
                <p className="page__description">
                    IA para Abogados — Tu recorrido formativo completo
                </p>
            </header>

            <div className="page__content">
                <div className="course-stats">
                    <div className="course-stat">
                        <span className="course-stat__number">7</span>
                        <span className="course-stat__label">Bloques</span>
                    </div>
                    <div className="course-stat">
                        <span className="course-stat__number">10</span>
                        <span className="course-stat__label">Módulos</span>
                    </div>
                    <div className="course-stat">
                        <span className="course-stat__number">24</span>
                        <span className="course-stat__label">Unidades</span>
                    </div>
                </div>

                <div className="roadmap">
                    {courseData.map((block) => (
                        <div key={block.id} className="roadmap-block" style={{ '--block-color': block.color }}>
                            <button
                                className={`roadmap-block__header ${expandedBlocks.includes(block.id) ? 'is-expanded' : ''}`}
                                onClick={() => toggleBlock(block.id)}
                            >
                                <span className="roadmap-block__emoji">{block.emoji}</span>
                                <span className="roadmap-block__number">Bloque {block.id}</span>
                                <span className="roadmap-block__title">{block.title}</span>
                                <span className="roadmap-block__toggle">{expandedBlocks.includes(block.id) ? '−' : '+'}</span>
                            </button>

                            {expandedBlocks.includes(block.id) && (
                                <div className="roadmap-block__content">
                                    {block.modules.map((module) => (
                                        <div key={module.id} className="roadmap-module">
                                            <button
                                                className={`roadmap-module__header ${expandedModules.includes(module.id) ? 'is-expanded' : ''}`}
                                                onClick={() => toggleModule(module.id)}
                                            >
                                                <span className="roadmap-module__title">{module.title}</span>
                                                <span className="roadmap-module__count">{module.units.length} unidades</span>
                                                <span className="roadmap-module__toggle">{expandedModules.includes(module.id) ? '−' : '+'}</span>
                                            </button>

                                            {expandedModules.includes(module.id) && (
                                                <ul className="roadmap-units">
                                                    {module.units.map((unit) => (
                                                        <li key={unit.id} className={`roadmap-unit roadmap-unit--${getUnitStatus(unit)}`}>
                                                            {unit.path ? (
                                                                <Link to={unit.path} className="roadmap-unit__link">
                                                                    <span className="roadmap-unit__id">{unit.id}</span>
                                                                    <span className="roadmap-unit__title">{unit.title}</span>
                                                                    {unit.status === 'current' && <span className="roadmap-unit__badge">Actual</span>}
                                                                </Link>
                                                            ) : (
                                                                <span className="roadmap-unit__link roadmap-unit__link--disabled">
                                                                    <span className="roadmap-unit__id">{unit.id}</span>
                                                                    <span className="roadmap-unit__title">{unit.title}</span>
                                                                    <span className="roadmap-unit__badge roadmap-unit__badge--pending">Próximamente</span>
                                                                </span>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="course-legend">
                    <h4>Leyenda</h4>
                    <div className="course-legend__items">
                        <div className="course-legend__item">
                            <span className="course-legend__dot course-legend__dot--current"></span>
                            <span>En curso</span>
                        </div>
                        <div className="course-legend__item">
                            <span className="course-legend__dot course-legend__dot--available"></span>
                            <span>Disponible</span>
                        </div>
                        <div className="course-legend__item">
                            <span className="course-legend__dot course-legend__dot--pending"></span>
                            <span>Próximamente</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseMap

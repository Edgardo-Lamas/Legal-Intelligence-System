/**
 * Script que agrega PageSEO a todas las páginas del sitio.
 * Se ejecuta una sola vez y luego puede borrarse.
 */

import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const src = resolve(__dirname, '../src/pages')

// Metadata por ruta: [archivo relativo a src/pages, title, description, path]
const pages = [
  [
    'Overview/Overview.jsx',
    'Inicio — IA para Abogados Argentinos',
    'Sistema de formación en inteligencia artificial aplicada al derecho. 8 módulos para abogados argentinos: desde los fundamentos de la IA hasta la implementación real de sistemas automatizados en tu estudio.',
    '/overview',
    'CourseMapCard',  // último import existente (para insertar después)
  ],
  [
    'Foundations/Foundations.jsx',
    'IA Generativa y Agentes de IA · M1 U1',
    'Qué es la IA generativa, cómo funcionan los agentes de IA y cuál es la diferencia práctica para el ejercicio profesional del derecho.',
    '/foundations',
    'ModelComparisonChart',
  ],
  [
    'Foundations/FoundationsM1U2.jsx',
    'ChatGPT vs Gemini en el Derecho · M1 U2',
    'Comparativa práctica de los modelos de lenguaje más usados en la práctica jurídica: cuándo usar ChatGPT y cuándo usar Gemini.',
    '/foundations-u2',
    null,
  ],
  [
    'Foundations/FoundationsM1U3.jsx',
    'RAG Aplicado al Derecho · M1 U3',
    'Cómo usar Retrieval-Augmented Generation con jurisprudencia, doctrina y normativa. Ventajas frente a los prompts simples.',
    '/foundations-u3',
    null,
  ],
  [
    'Systems/Systems.jsx',
    'Sistemas de Inteligencia Jurídica',
    'Arquitecturas de sistemas inteligentes para el análisis jurídico profesional.',
    '/systems',
    null,
  ],
  [
    'AnalysisPatterns/AnalysisPatterns.jsx',
    'Patrones de Análisis Jurídico',
    'Detección de patrones, metodologías de validación y marcos analíticos para la práctica legal asistida por IA.',
    '/analysis-patterns',
    null,
  ],
  [
    'AutomationAgents/AutomationAgents.jsx',
    'Automatización y Agentes de IA',
    'Agentes de IA, automatización de flujos de trabajo y sistemas de orquestación para estudios jurídicos.',
    '/automation-agents',
    null,
  ],
  [
    'PromptEngineering/PromptEngineeringM2U1.jsx',
    'Ingeniería de Prompts Jurídicos · M2 U1',
    'La base del sistema. Diseñá prompts controlados, predecibles y reutilizables para tareas legales con IA. Nivel profesional.',
    '/prompt-engineering',
    null,
  ],
  [
    'PromptEngineering/PromptEngineeringM2U2.jsx',
    'Control de Contexto y Documentos Extensos · M2 U2',
    'Cómo manejar documentos jurídicos extensos con IA: contratos, expedientes y normativa compleja sin perder coherencia.',
    '/prompt-engineering-u2',
    null,
  ],
  [
    'PromptEngineering/PromptEngineeringM2U3.jsx',
    'Filtrado de Jurisprudencia y Doctrina · M2 U3',
    'Usá ChatGPT para extraer criterios relevantes, comparar fallos y detectar líneas jurisprudenciales de forma eficiente.',
    '/prompt-engineering-u3',
    null,
  ],
  [
    'PromptEngineering/PromptEngineeringM2U4.jsx',
    'Redacción Jurídica Asistida · M2 U4',
    'Cómo usar ChatGPT para redactar demandas, contratos, dictámenes y escritos procesales manteniendo control profesional.',
    '/prompt-engineering-u4',
    null,
  ],
  [
    'PromptEngineering/PromptEngineeringM2U5.jsx',
    'Preparación de Juicio e Interrogatorios · M2 U5',
    'Razonamiento profundo y simulación estratégica con IA para preparar juicios, anticipar argumentos y diseñar interrogatorios.',
    '/prompt-engineering-u5',
    null,
  ],
  [
    'PromptEngineering/PromptEngineeringM2U6.jsx',
    'GPTs Personalizados y Librerías de Prompts · M2 U6',
    'Cómo crear asistentes jurídicos especializados y organizar tus prompts para reutilizarlos como sistema profesional.',
    '/prompt-engineering-u6',
    null,
  ],
  [
    'SoloPractice/SoloPracticeM3U1.jsx',
    'Abogacía por Cuenta Propia · M3 U1',
    'Cómo integrar la IA en la gestión diaria de un estudio jurídico unipersonal: organización, automatización y control sin perder criterio profesional.',
    '/solo-practice',
    null,
  ],
  [
    'SoloPractice/SoloPracticeM3U2.jsx',
    'Gestión Contable y Fiscal Automatizada · M3 U2',
    'Automatizá el orden administrativo de tu estudio jurídico sin perder control. Herramientas de IA para gestión contable y fiscal.',
    '/solo-practice-u2',
    null,
  ],
  [
    'SoloPractice/SoloPracticeM3U3.jsx',
    'Escritura Persuasiva Digital · M3 U3',
    'Comunicación jurídica estratégica en entornos digitales. Cómo escribir con intención y claridad usando IA como colaborador.',
    '/solo-practice-u3',
    null,
  ],
  [
    'SoloPractice/SoloPracticeM3U4.jsx',
    'Marketing Legal y Posicionamiento Digital · M3 U4',
    'Estrategia digital para abogados independientes: cómo construir autoridad y visibilidad profesional asistida por IA.',
    '/solo-practice-u4',
    null,
  ],
  [
    'Gemini/GeminiM4U1.jsx',
    'Gemini en la Práctica Legal · M4 U1',
    'Por qué Gemini no es otro ChatGPT: cuándo es estratégicamente superior en tareas jurídicas y cómo integrarlo en tu sistema de trabajo.',
    '/gemini',
    null,
  ],
  [
    'Gemini/GeminiM4U2.jsx',
    'Gemini Canvas: Visualización Legal · M4 U2',
    'Transformá información legal compleja en estructuras comprensibles y navegables con Gemini Canvas.',
    '/gemini-u2',
    null,
  ],
  [
    'Gemini/GeminiM4U3.jsx',
    'Gemini: Automatización y Memoria Jurídica · M4 U3',
    'Del uso reactivo al proactivo: cómo programar tareas automáticas y gestionar memoria jurídica con Gemini.',
    '/gemini-u3',
    null,
  ],
  [
    'Ecosystem/EcosystemM5U1.jsx',
    'IA como Ecosistema de Trabajo Jurídico · M5 U1',
    'De la herramienta aislada a la arquitectura profesional. Cómo pensar la IA como un ecosistema integrado de trabajo jurídico.',
    '/ecosystem',
    null,
  ],
  [
    'Ecosystem/EcosystemM5U2.jsx',
    'Automatización Jurídica: Qué y Cómo Delegar · M5 U2',
    'Criterios para delegar tareas operativas del estudio jurídico sin perder el control estratégico ni el criterio profesional.',
    '/ecosystem-u2',
    null,
  ],
  [
    'Ecosystem/EcosystemM5U3.jsx',
    'Flujos de Trabajo Jurídicos con IA · M5 U3',
    'Cómo diseñar secuencias de trabajo asistido por IA para multiplicar resultados sin perder criterio en la práctica legal.',
    '/ecosystem-u3',
    null,
  ],
  [
    'Ecosystem/EcosystemM5U4.jsx',
    'IA Integrada con Documentos y Sistemas Externos · M5 U4',
    'Cómo conectar la IA con tu información real: documentos, fuentes y sistemas externos para multiplicar el valor profesional.',
    '/ecosystem-u4',
    null,
  ],
  [
    'Ecosystem/EcosystemM5U5.jsx',
    'Práctica Jurídica Escalable con IA · M5 U5',
    'Cómo transformar tu ecosistema de IA en un sistema de trabajo continuo, sostenible y escalable para tu estudio.',
    '/ecosystem-u5',
    null,
  ],
  [
    'Mastering/MasteringM6U1.jsx',
    'Claude Projects para Gestión de Casos · M6 U1',
    'Configurá y usá Claude Projects como asistente jurídico especializado con memoria persistente para el manejo integral de expedientes.',
    '/mastering',
    null,
  ],
  [
    'Mastering/MasteringM6U2.jsx',
    'ChatGPT para Análisis Jurídico · M6 U2',
    'Configuración y uso de ChatGPT para analizar contratos, normativa y situaciones jurídicas complejas. ChatGPT vs Claude: cuándo usar cada uno.',
    '/mastering-u2',
    null,
  ],
  [
    'Mastering/MasteringM6U3.jsx',
    'Perplexity y Manus para Investigación Legal · M6 U3',
    'Herramientas de IA con acceso a internet para buscar jurisprudencia, normativa actualizada y verificar información en tiempo real.',
    '/mastering-u3',
    null,
  ],
  [
    'Mastering/MasteringM6U4.jsx',
    'Gemini Deep Research para Doctrina Jurídica · M6 U4',
    'Cómo usar la investigación profunda de Gemini para analizar doctrina, sintetizar múltiples fuentes y producir informes fundamentados.',
    '/mastering-u4',
    null,
  ],
  [
    'Communication/CommunicationM7U1.jsx',
    'IA para Comunicación Legal · M7 U1',
    'Cómo integrar la IA en la comunicación profesional del abogado sin degradar su rol, su ética ni su credibilidad institucional.',
    '/communication',
    null,
  ],
  [
    'Practice/PracticeM8U1.jsx',
    'Del Concepto al Sistema · M8 U1',
    'El punto de inflexión del programa: cómo pasar de usar herramientas de IA aisladas a diseñar sistemas de trabajo coherentes para la práctica jurídica.',
    '/practice',
    null,
  ],
  [
    'Practice/PracticeM8U2.jsx',
    'Diseño de Flujos de Trabajo con IA · M8 U2',
    'Cómo pasar de una idea general de uso de IA a una estructura operativa sostenible en tu estudio jurídico.',
    '/practice-u2',
    null,
  ],
  [
    'Practice/PracticeM8U3.jsx',
    'Implementación y Validación del Sistema · M8 U3',
    'Cómo llevar los diseños de flujos a la realidad y validarlos para que sean confiables, sostenibles y responsables.',
    '/practice-u3',
    null,
  ],
  [
    'CourseMap/CourseMap.jsx',
    'Mapa del Curso',
    'Recorrido completo del programa de formación: 8 módulos y sus unidades de IA aplicada al derecho para abogados argentinos.',
    '/course-map',
    null,
  ],
  [
    'Glossary/Glossary.jsx',
    'Glosario de IA para Abogados',
    'Definiciones de términos técnicos de inteligencia artificial traducidos al contexto jurídico. Conceptos esenciales para abogados argentinos.',
    '/glossary',
    null,
  ],
  [
    'Notes/Notes.jsx',
    'Notas Personales',
    'Notas, hipótesis y reflexiones sobre el uso de inteligencia artificial en la práctica jurídica profesional.',
    '/notes',
    null,
  ],
]

const IMPORT_LINE = "import PageSEO from '../../components/PageSEO/PageSEO'"
// Para CourseMap que está un nivel más arriba en anidamiento... mismo path relativo
const IMPORT_LINE_COURSEMAP = "import PageSEO from '../../components/PageSEO/PageSEO'"

let modified = 0
let skipped = 0

for (const [relPath, title, description, path] of pages) {
  const filePath = resolve(src, relPath)
  let content = readFileSync(filePath, 'utf-8')

  // Saltar si ya tiene PageSEO
  if (content.includes('PageSEO')) {
    console.log(`  ⏭  ${relPath} (ya tiene PageSEO)`)
    skipped++
    continue
  }

  // 1. Agregar import antes de la función (después del último import)
  const lastImportMatch = [...content.matchAll(/^import .+$/gm)].pop()
  if (!lastImportMatch) {
    console.log(`  ⚠  ${relPath} — no se encontraron imports, saltando`)
    continue
  }
  const insertAfter = lastImportMatch.index + lastImportMatch[0].length
  content = content.slice(0, insertAfter) + '\n' + IMPORT_LINE + content.slice(insertAfter)

  // 2. Insertar <PageSEO> como primer hijo de <div className="page">
  const divPageMatch = content.match(/<div className="page">(\s*)/)
  if (!divPageMatch) {
    console.log(`  ⚠  ${relPath} — no se encontró <div className="page">, saltando`)
    continue
  }
  const divPageEnd = content.indexOf('<div className="page">') + '<div className="page">'.length
  const seoBlock = `\n            <PageSEO\n                title="${title}"\n                description="${description}"\n                path="${path}"\n            />`
  content = content.slice(0, divPageEnd) + seoBlock + content.slice(divPageEnd)

  writeFileSync(filePath, content, 'utf-8')
  console.log(`  ✓ ${relPath}`)
  modified++
}

console.log(`\n✅ PageSEO agregado a ${modified} páginas. ${skipped} ya tenían SEO.\n`)

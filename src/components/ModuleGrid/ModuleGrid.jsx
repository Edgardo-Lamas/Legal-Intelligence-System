import { Link } from 'react-router-dom'
import './ModuleGrid.css'

/* ── SVG illustrations — unique per module ── */

const IllustrationM1 = () => (
  <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="60" r="8" fill="#4a7c94" opacity="0.9"/>
    <circle cx="80" cy="30" r="6" fill="#4a7c94" opacity="0.7"/>
    <circle cx="80" cy="60" r="6" fill="#6a9cb4" opacity="0.7"/>
    <circle cx="80" cy="90" r="6" fill="#4a7c94" opacity="0.7"/>
    <circle cx="140" cy="45" r="7" fill="#5a8ca4" opacity="0.8"/>
    <circle cx="140" cy="75" r="7" fill="#4a7c94" opacity="0.8"/>
    <circle cx="185" cy="60" r="9" fill="#c9a84c" opacity="0.9"/>
    <line x1="38" y1="55" x2="74" y2="34" stroke="#4a7c94" strokeWidth="1" opacity="0.4"/>
    <line x1="38" y1="60" x2="74" y2="60" stroke="#4a7c94" strokeWidth="1.5" opacity="0.5"/>
    <line x1="38" y1="65" x2="74" y2="86" stroke="#4a7c94" strokeWidth="1" opacity="0.4"/>
    <line x1="86" y1="33" x2="133" y2="47" stroke="#5a8ca4" strokeWidth="1" opacity="0.35"/>
    <line x1="86" y1="60" x2="133" y2="48" stroke="#5a8ca4" strokeWidth="1" opacity="0.35"/>
    <line x1="86" y1="87" x2="133" y2="73" stroke="#5a8ca4" strokeWidth="1" opacity="0.35"/>
    <line x1="86" y1="60" x2="133" y2="73" stroke="#5a8ca4" strokeWidth="1" opacity="0.35"/>
    <line x1="147" y1="47" x2="176" y2="56" stroke="#c9a84c" strokeWidth="1.5" opacity="0.5"/>
    <line x1="147" y1="73" x2="176" y2="63" stroke="#c9a84c" strokeWidth="1.5" opacity="0.5"/>
    <circle cx="185" cy="60" r="15" stroke="#c9a84c" strokeWidth="0.75" opacity="0.3"/>
    <circle cx="185" cy="60" r="22" stroke="#c9a84c" strokeWidth="0.5" opacity="0.15"/>
  </svg>
)

const IllustrationM2 = () => (
  <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="15" width="180" height="90" rx="8" fill="#0d1e10" opacity="0.8"/>
    <rect x="10" y="15" width="180" height="22" rx="8" fill="#1a2e1a" opacity="0.9"/>
    <circle cx="26" cy="26" r="4" fill="#ff5f57" opacity="0.8"/>
    <circle cx="40" cy="26" r="4" fill="#febc2e" opacity="0.8"/>
    <circle cx="54" cy="26" r="4" fill="#28c840" opacity="0.8"/>
    <text x="20" y="58" fontFamily="monospace" fontSize="9" fill="#5a8a5a" opacity="0.9">$ ROL: Abogado de familia</text>
    <text x="20" y="72" fontFamily="monospace" fontSize="9" fill="#5a8a5a" opacity="0.7">$ TAREA: Analizar contrato</text>
    <text x="20" y="86" fontFamily="monospace" fontSize="9" fill="#c9a84c" opacity="0.9">$ FORMATO: JSON estructurado</text>
    <rect x="20" y="96" width="2" height="8" fill="#5a8a5a" opacity="0.9"/>
  </svg>
)

const IllustrationM3 = () => (
  <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="100" y1="20" x2="100" y2="80" stroke="#8a6a3a" strokeWidth="2" opacity="0.7"/>
    <rect x="88" y="18" width="24" height="4" rx="2" fill="#c9a84c" opacity="0.8"/>
    <line x1="40" y1="40" x2="160" y2="40" stroke="#8a6a3a" strokeWidth="1.5" opacity="0.6"/>
    <line x1="40" y1="40" x2="35" y2="70" stroke="#8a6a3a" strokeWidth="1" opacity="0.5"/>
    <line x1="40" y1="40" x2="55" y2="70" stroke="#8a6a3a" strokeWidth="1" opacity="0.5"/>
    <ellipse cx="45" cy="72" rx="18" ry="6" fill="#8a6a3a" opacity="0.25" stroke="#8a6a3a" strokeWidth="1" />
    <line x1="160" y1="40" x2="148" y2="65" stroke="#8a6a3a" strokeWidth="1" opacity="0.5"/>
    <line x1="160" y1="40" x2="168" y2="65" stroke="#8a6a3a" strokeWidth="1" opacity="0.5"/>
    <ellipse cx="158" cy="67" rx="18" ry="6" fill="#c9a84c" opacity="0.25" stroke="#c9a84c" strokeWidth="1"/>
    <polygon points="90,80 110,80 105,100 95,100" fill="#8a6a3a" opacity="0.5"/>
    <rect x="80" y="100" width="40" height="4" rx="2" fill="#8a6a3a" opacity="0.4"/>
    <rect x="15" y="90" width="22" height="16" rx="3" fill="none" stroke="#c9a84c" strokeWidth="1" opacity="0.5"/>
    <path d="M20 90 V87 a4 4 0 0 1 4-4h4 a4 4 0 0 1 4 4V90" stroke="#c9a84c" strokeWidth="1" fill="none" opacity="0.5"/>
  </svg>
)

const IllustrationM4 = () => (
  <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="100,15 115,45 150,45 122,65 132,95 100,75 68,95 78,65 50,45 85,45"
      fill="none" stroke="#5a5a94" strokeWidth="1.5" opacity="0.7"/>
    <polygon points="100,25 111,48 136,48 115,63 123,87 100,72 77,87 85,63 64,48 89,48"
      fill="#5a5a94" opacity="0.12"/>
    <line x1="100" y1="25" x2="100" y2="72" stroke="#8a8ac4" strokeWidth="0.75" opacity="0.4"/>
    <line x1="64" y1="48" x2="136" y2="48" stroke="#8a8ac4" strokeWidth="0.75" opacity="0.4"/>
    <line x1="115" y1="63" x2="85" y2="63" stroke="#8a8ac4" strokeWidth="0.75" opacity="0.3"/>
    <ellipse cx="100" cy="57" rx="35" ry="35" fill="#5a5a94" opacity="0.06"/>
    <circle cx="68" cy="57" r="5" fill="#c9a84c" opacity="0.8"/>
    <circle cx="132" cy="57" r="5" fill="#c9a84c" opacity="0.8"/>
    <ellipse cx="100" cy="57" rx="35" ry="12" stroke="#5a5a94" strokeWidth="1" strokeDasharray="4 3" opacity="0.35"/>
  </svg>
)

const IllustrationM5 = () => (
  <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Claude — ascending mastery steps */}
    <rect x="20" y="90" width="32" height="20" rx="2" fill="#8a4a3a" opacity="0.35"/>
    <rect x="52" y="75" width="32" height="35" rx="2" fill="#8a4a3a" opacity="0.45"/>
    <rect x="84" y="58" width="32" height="52" rx="2" fill="#8a4a3a" opacity="0.55"/>
    <rect x="116" y="40" width="32" height="70" rx="2" fill="#8a4a3a" opacity="0.65"/>
    <rect x="148" y="20" width="32" height="90" rx="2" fill="#c9a84c" opacity="0.75"/>
    <polygon points="164,8 166.5,15 174,15 168,19.5 170.5,27 164,22.5 157.5,27 160,19.5 154,15 161.5,15"
      fill="#c9a84c" opacity="0.9"/>
    <polyline points="25,85 55,70 85,53 117,35 152,15"
      stroke="#c9a84c" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.4" fill="none"/>
  </svg>
)

const IllustrationM6 = () => (
  <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Ecosystem — hexagonal network */}
    <polygon points="100,50 114,58 114,74 100,82 86,74 86,58" fill="#7a4a8a" opacity="0.25" stroke="#7a4a8a" strokeWidth="1.5"/>
    <polygon points="100,12 114,20 114,36 100,44 86,36 86,20" fill="#7a4a8a" opacity="0.12" stroke="#9a6aaa" strokeWidth="1"/>
    <polygon points="128,28 142,36 142,52 128,60 114,52 114,36" fill="#7a4a8a" opacity="0.12" stroke="#9a6aaa" strokeWidth="1"/>
    <polygon points="128,68 142,76 142,92 128,100 114,92 114,76" fill="#7a4a8a" opacity="0.12" stroke="#9a6aaa" strokeWidth="1"/>
    <polygon points="72,28 86,20 86,36 72,44 58,36 58,20" fill="#7a4a8a" opacity="0.12" stroke="#9a6aaa" strokeWidth="1"/>
    <polygon points="72,68 86,76 86,92 72,100 58,92 58,76" fill="#7a4a8a" opacity="0.12" stroke="#9a6aaa" strokeWidth="1"/>
    <line x1="100" y1="44" x2="100" y2="50" stroke="#c9a84c" strokeWidth="1.5" opacity="0.5"/>
    <line x1="86" y1="36" x2="86" y2="58" stroke="#9a6aaa" strokeWidth="1" opacity="0.3"/>
    <circle cx="100" cy="66" r="5" fill="#c9a84c" opacity="0.9"/>
  </svg>
)

const IllustrationM7 = () => (
  <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Agents — orchestrator + agent nodes with flow arrows */}
    {/* Orchestrator (top center) */}
    <rect x="80" y="10" width="40" height="24" rx="5" fill="#2a6a5a" opacity="0.8" stroke="#4a9a8a" strokeWidth="1"/>
    <text x="100" y="26" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#c9a84c" opacity="0.9">ORQUESTADOR</text>
    {/* Agent nodes */}
    <rect x="20" y="60" width="36" height="20" rx="4" fill="#2a6a5a" opacity="0.5" stroke="#4a9a8a" strokeWidth="1"/>
    <text x="38" y="73" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#a0d0c0" opacity="0.9">INVESTIGAR</text>
    <rect x="82" y="60" width="36" height="20" rx="4" fill="#2a6a5a" opacity="0.5" stroke="#4a9a8a" strokeWidth="1"/>
    <text x="100" y="73" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#a0d0c0" opacity="0.9">REDACTAR</text>
    <rect x="144" y="60" width="36" height="20" rx="4" fill="#2a6a5a" opacity="0.5" stroke="#4a9a8a" strokeWidth="1"/>
    <text x="162" y="73" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#a0d0c0" opacity="0.9">REVISAR</text>
    {/* Arrows from orchestrator */}
    <line x1="90" y1="34" x2="44" y2="60" stroke="#c9a84c" strokeWidth="1.2" opacity="0.6"/>
    <line x1="100" y1="34" x2="100" y2="60" stroke="#c9a84c" strokeWidth="1.2" opacity="0.6"/>
    <line x1="110" y1="34" x2="156" y2="60" stroke="#c9a84c" strokeWidth="1.2" opacity="0.6"/>
    {/* Result arrows down */}
    <line x1="38" y1="80" x2="38" y2="100" stroke="#4a9a8a" strokeWidth="1" opacity="0.4" strokeDasharray="3 2"/>
    <line x1="100" y1="80" x2="100" y2="100" stroke="#4a9a8a" strokeWidth="1" opacity="0.4" strokeDasharray="3 2"/>
    <line x1="162" y1="80" x2="162" y2="100" stroke="#4a9a8a" strokeWidth="1" opacity="0.4" strokeDasharray="3 2"/>
    <rect x="60" y="100" width="80" height="14" rx="3" fill="#c9a84c" opacity="0.25" stroke="#c9a84c" strokeWidth="1"/>
    <text x="100" y="110" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#c9a84c" opacity="0.8">RESULTADO INTEGRADO</text>
  </svg>
)

const IllustrationM8 = () => (
  <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Privacy — shield with circuit pattern */}
    <path d="M100 10 L160 35 L160 75 Q160 105 100 118 Q40 105 40 75 L40 35 Z"
      fill="#6a3a6a" opacity="0.2" stroke="#9a5a9a" strokeWidth="1.5"/>
    {/* Lock body */}
    <rect x="84" y="62" width="32" height="26" rx="4" fill="#6a3a6a" opacity="0.7" stroke="#9a5a9a" strokeWidth="1"/>
    {/* Lock shackle */}
    <path d="M90 62 L90 52 Q90 42 100 42 Q110 42 110 52 L110 62"
      stroke="#9a5a9a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    {/* Keyhole */}
    <circle cx="100" cy="72" r="4" fill="#c9a84c" opacity="0.8"/>
    <rect x="98" y="72" width="4" height="8" rx="1" fill="#c9a84c" opacity="0.6"/>
    {/* Circuit lines on shield */}
    <line x1="55" y1="50" x2="75" y2="50" stroke="#9a5a9a" strokeWidth="0.75" opacity="0.4"/>
    <line x1="75" y1="50" x2="75" y2="40" stroke="#9a5a9a" strokeWidth="0.75" opacity="0.4"/>
    <circle cx="75" cy="40" r="2" fill="#6a3a6a" opacity="0.6"/>
    <line x1="125" y1="50" x2="145" y2="50" stroke="#9a5a9a" strokeWidth="0.75" opacity="0.4"/>
    <line x1="125" y1="50" x2="125" y2="40" stroke="#9a5a9a" strokeWidth="0.75" opacity="0.4"/>
    <circle cx="125" cy="40" r="2" fill="#6a3a6a" opacity="0.6"/>
    <line x1="60" y1="85" x2="76" y2="85" stroke="#9a5a9a" strokeWidth="0.75" opacity="0.3"/>
    <line x1="124" y1="85" x2="140" y2="85" stroke="#9a5a9a" strokeWidth="0.75" opacity="0.3"/>
  </svg>
)

const IllustrationM9 = () => (
  <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Communication — overlapping channels */}
    {/* Central person/broadcaster */}
    <circle cx="60" cy="60" r="10" fill="#6a5a2a" opacity="0.8" stroke="#c9a84c" strokeWidth="1"/>
    {/* Signal waves */}
    <path d="M74 45 Q90 60 74 75" stroke="#c9a84c" strokeWidth="1.5" fill="none" opacity="0.6"/>
    <path d="M80 38 Q104 60 80 82" stroke="#c9a84c" strokeWidth="1.2" fill="none" opacity="0.4"/>
    <path d="M87 31 Q118 60 87 89" stroke="#c9a84c" strokeWidth="1" fill="none" opacity="0.25"/>
    {/* Channel icons */}
    {/* LinkedIn box */}
    <rect x="118" y="18" width="28" height="24" rx="4" fill="#6a5a2a" opacity="0.5" stroke="#c9a84c" strokeWidth="1"/>
    <text x="132" y="34" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#c9a84c" opacity="0.9">in</text>
    {/* Blog/doc */}
    <rect x="152" y="48" width="28" height="24" rx="4" fill="#6a5a2a" opacity="0.5" stroke="#c9a84c" strokeWidth="1"/>
    <line x1="158" y1="57" x2="174" y2="57" stroke="#c9a84c" strokeWidth="1" opacity="0.7"/>
    <line x1="158" y1="63" x2="174" y2="63" stroke="#c9a84c" strokeWidth="1" opacity="0.5"/>
    <line x1="158" y1="69" x2="168" y2="69" stroke="#c9a84c" strokeWidth="1" opacity="0.4"/>
    {/* Video camera */}
    <rect x="118" y="80" width="24" height="18" rx="3" fill="#6a5a2a" opacity="0.5" stroke="#c9a84c" strokeWidth="1"/>
    <polygon points="142,84 152,89 142,94" fill="#c9a84c" opacity="0.7"/>
    {/* Arrow lines to channels */}
    <line x1="98" y1="48" x2="118" y2="34" stroke="#6a5a2a" strokeWidth="1" opacity="0.5" strokeDasharray="3 2"/>
    <line x1="100" y1="60" x2="152" y2="60" stroke="#6a5a2a" strokeWidth="1" opacity="0.5" strokeDasharray="3 2"/>
    <line x1="98" y1="72" x2="118" y2="86" stroke="#6a5a2a" strokeWidth="1" opacity="0.5" strokeDasharray="3 2"/>
  </svg>
)

const IllustrationM10 = () => (
  <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Tu sistema propio — blueprint / architecture */}
    {/* Grid background */}
    <line x1="10" y1="30" x2="190" y2="30" stroke="#4a7a4a" strokeWidth="0.5" opacity="0.2"/>
    <line x1="10" y1="60" x2="190" y2="60" stroke="#4a7a4a" strokeWidth="0.5" opacity="0.2"/>
    <line x1="10" y1="90" x2="190" y2="90" stroke="#4a7a4a" strokeWidth="0.5" opacity="0.2"/>
    <line x1="50" y1="10" x2="50" y2="110" stroke="#4a7a4a" strokeWidth="0.5" opacity="0.2"/>
    <line x1="100" y1="10" x2="100" y2="110" stroke="#4a7a4a" strokeWidth="0.5" opacity="0.2"/>
    <line x1="150" y1="10" x2="150" y2="110" stroke="#4a7a4a" strokeWidth="0.5" opacity="0.2"/>
    {/* Blocks — system being built */}
    <rect x="15" y="40" width="30" height="20" rx="3" fill="#4a7a4a" opacity="0.6" stroke="#6aaa6a" strokeWidth="1"/>
    <rect x="55" y="25" width="30" height="20" rx="3" fill="#4a7a4a" opacity="0.6" stroke="#6aaa6a" strokeWidth="1"/>
    <rect x="55" y="55" width="30" height="20" rx="3" fill="#4a7a4a" opacity="0.5" stroke="#6aaa6a" strokeWidth="1"/>
    <rect x="105" y="40" width="30" height="20" rx="3" fill="#4a7a4a" opacity="0.7" stroke="#6aaa6a" strokeWidth="1"/>
    <rect x="155" y="35" width="30" height="30" rx="3" fill="#c9a84c" opacity="0.7" stroke="#c9a84c" strokeWidth="1.5"/>
    {/* Connection lines */}
    <line x1="45" y1="50" x2="55" y2="38" stroke="#6aaa6a" strokeWidth="1" opacity="0.6"/>
    <line x1="45" y1="50" x2="55" y2="62" stroke="#6aaa6a" strokeWidth="1" opacity="0.5"/>
    <line x1="85" y1="35" x2="105" y2="48" stroke="#6aaa6a" strokeWidth="1" opacity="0.5"/>
    <line x1="85" y1="63" x2="105" y2="52" stroke="#6aaa6a" strokeWidth="1" opacity="0.5"/>
    <line x1="135" y1="50" x2="155" y2="50" stroke="#c9a84c" strokeWidth="1.5" opacity="0.7"/>
    {/* Check on final block */}
    <polyline points="163,48 168,54 178,43" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.9"/>
    {/* Label */}
    <text x="170" y="78" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#c9a84c" opacity="0.7">SISTEMA</text>
    {/* Ruler marks */}
    <line x1="10" y1="108" x2="190" y2="108" stroke="#4a7a4a" strokeWidth="1" opacity="0.4"/>
    <line x1="10" y1="104" x2="10" y2="112" stroke="#4a7a4a" strokeWidth="1" opacity="0.4"/>
    <line x1="50" y1="105" x2="50" y2="111" stroke="#4a7a4a" strokeWidth="0.75" opacity="0.3"/>
    <line x1="100" y1="104" x2="100" y2="112" stroke="#4a7a4a" strokeWidth="1" opacity="0.4"/>
    <line x1="150" y1="105" x2="150" y2="111" stroke="#4a7a4a" strokeWidth="0.75" opacity="0.3"/>
    <line x1="190" y1="104" x2="190" y2="112" stroke="#4a7a4a" strokeWidth="1" opacity="0.4"/>
  </svg>
)

const illustrations = [
  IllustrationM1, IllustrationM2, IllustrationM3, IllustrationM4,
  IllustrationM5, IllustrationM6, IllustrationM7, IllustrationM8,
  IllustrationM9, IllustrationM10,
]

const moduleData = [
  {
    num: '01', path: '/foundations',
    label: 'Fundamentos de IA',
    desc: 'IA generativa, RAG y la tríada Claude-Gemini-ChatGPT aplicada al ejercicio jurídico.',
    units: 5, completed: 5,
    color: '#4a7c94',
    bg: 'linear-gradient(135deg, #0d1e2e 0%, #1a3a4a 100%)',
  },
  {
    num: '02', path: '/prompt-engineering',
    label: 'Prompt Jurídico',
    desc: 'Diseño de prompts controlados, redacción asistida y librerías de prompts reutilizables.',
    units: 7, completed: 7,
    color: '#5a8a5a',
    bg: 'linear-gradient(135deg, #0d1e0d 0%, #1a3a1a 100%)',
  },
  {
    num: '03', path: '/solo-practice',
    label: 'Abogacía por Cuenta Propia',
    desc: 'Gestión del estudio, contabilidad, escritura persuasiva y modelo de negocio con IA.',
    units: 5, completed: 5,
    color: '#8a6a3a',
    bg: 'linear-gradient(135deg, #1e150a 0%, #3a2a10 100%)',
  },
  {
    num: '04', path: '/gemini',
    label: 'Gemini & Deep Research',
    desc: 'Gemini 2.5 Pro, Canvas, automatización y Google Workspace para el estudio jurídico.',
    units: 4, completed: 4,
    color: '#5a5a94',
    bg: 'linear-gradient(135deg, #0d0d2e 0%, #1a1a4a 100%)',
  },
  {
    num: '05', path: '/mastering',
    label: 'Claude: de Projects a agentes',
    desc: 'Projects, Extended Thinking, Artifacts, Claude API y MCP servers para el estudio.',
    units: 5, completed: 5,
    color: '#8a4a3a',
    bg: 'linear-gradient(135deg, #2e0d0a 0%, #4a1a14 100%)',
  },
  {
    num: '06', path: '/ecosystem',
    label: 'Ecosistema y Automatización',
    desc: 'n8n, NotebookLM, Perplexity, Harvey y el ecosistema IA del abogado argentino 2025.',
    units: 5, completed: 5,
    color: '#7a4a8a',
    bg: 'linear-gradient(135deg, #180d2e 0%, #2a1a3a 100%)',
  },
  {
    num: '07', path: '/agents',
    label: 'Agentes IA para el Estudio',
    desc: 'Agentes de investigación, redacción, seguimiento de causas y orquestación multi-agente.',
    units: 5, completed: 5,
    color: '#2a6a5a',
    bg: 'linear-gradient(135deg, #0a1e18 0%, #0d2e20 100%)',
  },
  {
    num: '08', path: '/privacy',
    label: 'Privacidad, Ética y Secreto',
    desc: 'Marco legal argentino, uso seguro con datos sensibles, instancias privadas y deontología.',
    units: 5, completed: 5,
    color: '#6a3a6a',
    bg: 'linear-gradient(135deg, #1e0d1e 0%, #2e1a2e 100%)',
  },
  {
    num: '09', path: '/communication',
    label: 'Comunicación y Posicionamiento',
    desc: 'LinkedIn jurídico, blog SEO, newsletter y video con IA para construir autoridad profesional.',
    units: 5, completed: 5,
    color: '#6a5a2a',
    bg: 'linear-gradient(135deg, #1e180a 0%, #2e2a10 100%)',
  },
  {
    num: '10', path: '/practice',
    label: 'Tu sistema propio',
    desc: 'Del concepto al sistema. Plan de 90 días e implementación real en tu práctica.',
    units: 5, completed: 5,
    color: '#4a7a4a',
    bg: 'linear-gradient(135deg, #0a1e0a 0%, #143014 100%)',
  },
]

function ModuleCard({ mod, index }) {
  const Illustration = illustrations[index]
  const pct = Math.round((mod.completed / mod.units) * 100)

  return (
    <Link to={mod.path} className="module-card" style={{ '--mod-color': mod.color, '--mod-bg': mod.bg }}>
      <div className="module-card__image">
        <Illustration />
        <div className="module-card__num">{mod.num}</div>
        {pct === 100 && (
          <div className="module-card__complete-badge">✓</div>
        )}
      </div>

      <div className="module-card__body">
        <h3 className="module-card__title">{mod.label}</h3>
        <p className="module-card__desc">{mod.desc}</p>

        <div className="module-card__footer">
          <div className="module-card__progress">
            <div
              className="module-card__progress-fill"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="module-card__units">
            {mod.completed}/{mod.units} unidades
          </span>
        </div>
      </div>
    </Link>
  )
}

function ModuleGrid() {
  return (
    <div className="module-grid">
      {moduleData.map((mod, i) => (
        <ModuleCard key={mod.num} mod={mod} index={i} />
      ))}
    </div>
  )
}

export default ModuleGrid

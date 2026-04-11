import { Link } from 'react-router-dom'
import './ModuleGrid.css'

/* ── SVG illustrations — unique per module ── */

const IllustrationM1 = () => (
  <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Neural network — foundational nodes */}
    <circle cx="30" cy="60" r="8" fill="#4a7c94" opacity="0.9"/>
    <circle cx="80" cy="30" r="6" fill="#4a7c94" opacity="0.7"/>
    <circle cx="80" cy="60" r="6" fill="#6a9cb4" opacity="0.7"/>
    <circle cx="80" cy="90" r="6" fill="#4a7c94" opacity="0.7"/>
    <circle cx="140" cy="45" r="7" fill="#5a8ca4" opacity="0.8"/>
    <circle cx="140" cy="75" r="7" fill="#4a7c94" opacity="0.8"/>
    <circle cx="185" cy="60" r="9" fill="#c9a84c" opacity="0.9"/>
    {/* Connections */}
    <line x1="38" y1="55" x2="74" y2="34" stroke="#4a7c94" strokeWidth="1" opacity="0.4"/>
    <line x1="38" y1="60" x2="74" y2="60" stroke="#4a7c94" strokeWidth="1.5" opacity="0.5"/>
    <line x1="38" y1="65" x2="74" y2="86" stroke="#4a7c94" strokeWidth="1" opacity="0.4"/>
    <line x1="86" y1="33" x2="133" y2="47" stroke="#5a8ca4" strokeWidth="1" opacity="0.35"/>
    <line x1="86" y1="60" x2="133" y2="48" stroke="#5a8ca4" strokeWidth="1" opacity="0.35"/>
    <line x1="86" y1="87" x2="133" y2="73" stroke="#5a8ca4" strokeWidth="1" opacity="0.35"/>
    <line x1="86" y1="60" x2="133" y2="73" stroke="#5a8ca4" strokeWidth="1" opacity="0.35"/>
    <line x1="147" y1="47" x2="176" y2="56" stroke="#c9a84c" strokeWidth="1.5" opacity="0.5"/>
    <line x1="147" y1="73" x2="176" y2="63" stroke="#c9a84c" strokeWidth="1.5" opacity="0.5"/>
    {/* Pulse rings on output */}
    <circle cx="185" cy="60" r="15" stroke="#c9a84c" strokeWidth="0.75" opacity="0.3"/>
    <circle cx="185" cy="60" r="22" stroke="#c9a84c" strokeWidth="0.5" opacity="0.15"/>
  </svg>
)

const IllustrationM2 = () => (
  <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Terminal / prompt engineering */}
    <rect x="10" y="15" width="180" height="90" rx="8" fill="#0d1e10" opacity="0.8"/>
    <rect x="10" y="15" width="180" height="22" rx="8" fill="#1a2e1a" opacity="0.9"/>
    <circle cx="26" cy="26" r="4" fill="#ff5f57" opacity="0.8"/>
    <circle cx="40" cy="26" r="4" fill="#febc2e" opacity="0.8"/>
    <circle cx="54" cy="26" r="4" fill="#28c840" opacity="0.8"/>
    {/* Code lines */}
    <text x="20" y="58" fontFamily="monospace" fontSize="9" fill="#5a8a5a" opacity="0.9">$ ROL: Abogado de familia</text>
    <text x="20" y="72" fontFamily="monospace" fontSize="9" fill="#5a8a5a" opacity="0.7">$ TAREA: Analizar contrato</text>
    <text x="20" y="86" fontFamily="monospace" fontSize="9" fill="#c9a84c" opacity="0.9">$ FORMATO: JSON estructurado</text>
    <rect x="20" y="96" width="2" height="8" fill="#5a8a5a" opacity="0.9"/>
  </svg>
)

const IllustrationM3 = () => (
  <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Balance scale — solo practice */}
    <line x1="100" y1="20" x2="100" y2="80" stroke="#8a6a3a" strokeWidth="2" opacity="0.7"/>
    <rect x="88" y="18" width="24" height="4" rx="2" fill="#c9a84c" opacity="0.8"/>
    {/* Crossbar */}
    <line x1="40" y1="40" x2="160" y2="40" stroke="#8a6a3a" strokeWidth="1.5" opacity="0.6"/>
    {/* Left pan */}
    <line x1="40" y1="40" x2="35" y2="70" stroke="#8a6a3a" strokeWidth="1" opacity="0.5"/>
    <line x1="40" y1="40" x2="55" y2="70" stroke="#8a6a3a" strokeWidth="1" opacity="0.5"/>
    <ellipse cx="45" cy="72" rx="18" ry="6" fill="#8a6a3a" opacity="0.25" stroke="#8a6a3a" strokeWidth="1" />
    {/* Right pan — slightly higher (balanced) */}
    <line x1="160" y1="40" x2="148" y2="65" stroke="#8a6a3a" strokeWidth="1" opacity="0.5"/>
    <line x1="160" y1="40" x2="168" y2="65" stroke="#8a6a3a" strokeWidth="1" opacity="0.5"/>
    <ellipse cx="158" cy="67" rx="18" ry="6" fill="#c9a84c" opacity="0.25" stroke="#c9a84c" strokeWidth="1"/>
    {/* Base */}
    <polygon points="90,80 110,80 105,100 95,100" fill="#8a6a3a" opacity="0.5"/>
    <rect x="80" y="100" width="40" height="4" rx="2" fill="#8a6a3a" opacity="0.4"/>
    {/* Briefcase icon small */}
    <rect x="15" y="90" width="22" height="16" rx="3" fill="none" stroke="#c9a84c" strokeWidth="1" opacity="0.5"/>
    <path d="M20 90 V87 a4 4 0 0 1 4-4h4 a4 4 0 0 1 4 4V90" stroke="#c9a84c" strokeWidth="1" fill="none" opacity="0.5"/>
  </svg>
)

const IllustrationM4 = () => (
  <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Gemini — twin stars / gemstone */}
    <polygon points="100,15 115,45 150,45 122,65 132,95 100,75 68,95 78,65 50,45 85,45"
      fill="none" stroke="#5a5a94" strokeWidth="1.5" opacity="0.7"/>
    <polygon points="100,25 111,48 136,48 115,63 123,87 100,72 77,87 85,63 64,48 89,48"
      fill="#5a5a94" opacity="0.12"/>
    {/* Inner gem facets */}
    <line x1="100" y1="25" x2="100" y2="72" stroke="#8a8ac4" strokeWidth="0.75" opacity="0.4"/>
    <line x1="64" y1="48" x2="136" y2="48" stroke="#8a8ac4" strokeWidth="0.75" opacity="0.4"/>
    <line x1="115" y1="63" x2="85" y2="63" stroke="#8a8ac4" strokeWidth="0.75" opacity="0.3"/>
    {/* Glow */}
    <circle cx="100" cy="57" r="30" fill="radial-gradient" opacity="0"/>
    <ellipse cx="100" cy="57" rx="35" ry="35" fill="#5a5a94" opacity="0.06"/>
    {/* Two orbiting dots — Gemini twins */}
    <circle cx="68" cy="57" r="5" fill="#c9a84c" opacity="0.8"/>
    <circle cx="132" cy="57" r="5" fill="#c9a84c" opacity="0.8"/>
    <ellipse cx="100" cy="57" rx="35" ry="12" stroke="#5a5a94" strokeWidth="1" strokeDasharray="4 3" opacity="0.35"/>
  </svg>
)

const IllustrationM5 = () => (
  <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Ecosystem — hexagonal network */}
    {/* Center */}
    <polygon points="100,50 114,58 114,74 100,82 86,74 86,58" fill="#7a4a8a" opacity="0.25" stroke="#7a4a8a" strokeWidth="1.5"/>
    {/* Ring 1 */}
    <polygon points="100,12 114,20 114,36 100,44 86,36 86,20" fill="#7a4a8a" opacity="0.12" stroke="#9a6aaa" strokeWidth="1"/>
    <polygon points="128,28 142,36 142,52 128,60 114,52 114,36" fill="#7a4a8a" opacity="0.12" stroke="#9a6aaa" strokeWidth="1"/>
    <polygon points="128,68 142,76 142,92 128,100 114,92 114,76" fill="#7a4a8a" opacity="0.12" stroke="#9a6aaa" strokeWidth="1"/>
    <polygon points="72,28 86,20 86,36 72,44 58,36 58,20" fill="#7a4a8a" opacity="0.12" stroke="#9a6aaa" strokeWidth="1"/>
    <polygon points="72,68 86,76 86,92 72,100 58,92 58,76" fill="#7a4a8a" opacity="0.12" stroke="#9a6aaa" strokeWidth="1"/>
    {/* Connection lines */}
    <line x1="100" y1="44" x2="100" y2="50" stroke="#c9a84c" strokeWidth="1.5" opacity="0.5"/>
    <line x1="114" y1="52" x2="114" y2="52" stroke="#c9a84c" strokeWidth="1" opacity="0.4"/>
    <line x1="86" y1="36" x2="86" y2="58" stroke="#9a6aaa" strokeWidth="1" opacity="0.3"/>
    {/* Center dot */}
    <circle cx="100" cy="66" r="5" fill="#c9a84c" opacity="0.9"/>
  </svg>
)

const IllustrationM6 = () => (
  <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Mastering — ascending steps / mastery */}
    <rect x="20" y="90" width="32" height="20" rx="2" fill="#8a4a3a" opacity="0.35"/>
    <rect x="52" y="75" width="32" height="35" rx="2" fill="#8a4a3a" opacity="0.45"/>
    <rect x="84" y="58" width="32" height="52" rx="2" fill="#8a4a3a" opacity="0.55"/>
    <rect x="116" y="40" width="32" height="70" rx="2" fill="#8a4a3a" opacity="0.65"/>
    <rect x="148" y="20" width="32" height="90" rx="2" fill="#c9a84c" opacity="0.75"/>
    {/* Star / award on top */}
    <polygon points="164,8 166.5,15 174,15 168,19.5 170.5,27 164,22.5 157.5,27 160,19.5 154,15 161.5,15"
      fill="#c9a84c" opacity="0.9"/>
    {/* Arrow trend */}
    <polyline points="25,85 55,70 85,53 117,35 152,15"
      stroke="#c9a84c" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.4" fill="none"/>
  </svg>
)

const IllustrationM7 = () => (
  <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Communication — signal / broadcast waves */}
    <circle cx="80" cy="60" r="8" fill="#3a7a8a" opacity="0.9"/>
    {/* Outward waves */}
    <circle cx="80" cy="60" r="20" stroke="#3a7a8a" strokeWidth="1.5" opacity="0.5" fill="none"/>
    <circle cx="80" cy="60" r="34" stroke="#3a7a8a" strokeWidth="1.2" opacity="0.35" fill="none"/>
    <circle cx="80" cy="60" r="50" stroke="#3a7a8a" strokeWidth="1" opacity="0.2" fill="none"/>
    <circle cx="80" cy="60" r="68" stroke="#3a7a8a" strokeWidth="0.75" opacity="0.1" fill="none"/>
    {/* Message bubble right */}
    <rect x="130" y="35" width="55" height="35" rx="8" fill="#3a7a8a" opacity="0.2" stroke="#3a7a8a" strokeWidth="1"/>
    <polygon points="130,58 115,65 130,65" fill="#3a7a8a" opacity="0.2"/>
    {/* Dots in bubble */}
    <circle cx="145" cy="52" r="3" fill="#c9a84c" opacity="0.7"/>
    <circle cx="157" cy="52" r="3" fill="#c9a84c" opacity="0.7"/>
    <circle cx="169" cy="52" r="3" fill="#c9a84c" opacity="0.7"/>
  </svg>
)

const IllustrationM8 = () => (
  <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Practice — checklist + launch */}
    {/* Clipboard */}
    <rect x="15" y="20" width="90" height="90" rx="6" fill="none" stroke="#4a7a4a" strokeWidth="1.5" opacity="0.5"/>
    <rect x="40" y="14" width="40" height="14" rx="4" fill="#4a7a4a" opacity="0.5"/>
    {/* Checklist items */}
    <circle cx="30" cy="48" r="5" fill="#c9a84c" opacity="0.8"/>
    <polyline points="28,48 30,50 34,46" stroke="#0c1018" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <line x1="43" y1="48" x2="90" y2="48" stroke="#4a7a4a" strokeWidth="1.5" opacity="0.6"/>

    <circle cx="30" cy="66" r="5" fill="#c9a84c" opacity="0.8"/>
    <polyline points="28,66 30,68 34,64" stroke="#0c1018" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <line x1="43" y1="66" x2="90" y2="66" stroke="#4a7a4a" strokeWidth="1.5" opacity="0.6"/>

    <circle cx="30" cy="84" r="5" stroke="#4a7a4a" strokeWidth="1.5" opacity="0.5" fill="none"/>
    <line x1="43" y1="84" x2="76" y2="84" stroke="#4a7a4a" strokeWidth="1.5" opacity="0.35"/>

    {/* Rocket */}
    <path d="M160 95 C160 95 155 70 170 45 C185 70 180 95 180 95"
      fill="#4a7a4a" opacity="0.4" stroke="#4a7a4a" strokeWidth="1"/>
    <ellipse cx="170" cy="45" rx="6" ry="10" fill="#c9a84c" opacity="0.8"/>
    <path d="M155 85 L148 98 L162 92" fill="#8a4a3a" opacity="0.5"/>
    <path d="M185 85 L192 98 L178 92" fill="#8a4a3a" opacity="0.5"/>
    <circle cx="170" cy="72" r="4" fill="white" opacity="0.3"/>
    {/* Flame */}
    <ellipse cx="170" cy="100" rx="5" ry="8" fill="#c9a84c" opacity="0.6"/>
    <ellipse cx="170" cy="103" rx="3" ry="5" fill="#ff8a3a" opacity="0.5"/>
  </svg>
)

const illustrations = [
  IllustrationM1, IllustrationM2, IllustrationM3, IllustrationM4,
  IllustrationM5, IllustrationM6, IllustrationM7, IllustrationM8,
]

const moduleData = [
  {
    num: '01', path: '/foundations',
    label: 'Fundamentos de IA',
    desc: 'IA generativa, agentes, RAG y comparativa de modelos para el ejercicio jurídico.',
    units: 3, completed: 3,
    color: '#4a7c94',
    bg: 'linear-gradient(135deg, #0d1e2e 0%, #1a3a4a 100%)',
  },
  {
    num: '02', path: '/prompt-engineering',
    label: 'Prompt Jurídico',
    desc: 'Diseño de prompts controlados, redacción asistida y librerías de prompts reutilizables.',
    units: 6, completed: 6,
    color: '#5a8a5a',
    bg: 'linear-gradient(135deg, #0d1e0d 0%, #1a3a1a 100%)',
  },
  {
    num: '03', path: '/solo-practice',
    label: 'Abogacía por Cuenta Propia',
    desc: 'Gestión del estudio, contabilidad automatizada, escritura persuasiva y marketing legal.',
    units: 4, completed: 4,
    color: '#8a6a3a',
    bg: 'linear-gradient(135deg, #1e150a 0%, #3a2a10 100%)',
  },
  {
    num: '04', path: '/gemini',
    label: 'Gemini & Deep Research',
    desc: 'Cuándo usar Gemini, Canvas para visualización y automatización de tareas legales.',
    units: 3, completed: 3,
    color: '#7a7ab4',
    bg: 'linear-gradient(135deg, #0d0d2e 0%, #1a1a4a 100%)',
  },
  {
    num: '05', path: '/ecosystem',
    label: 'Ecosistema & Automatización',
    desc: 'De la herramienta aislada al sistema integrado. Flujos de trabajo escalables.',
    units: 5, completed: 5,
    color: '#8a5a9a',
    bg: 'linear-gradient(135deg, #180d2e 0%, #2a1a3a 100%)',
  },
  {
    num: '06', path: '/mastering',
    label: 'Dominando el Ecosistema',
    desc: 'Claude Projects, ChatGPT, Perplexity, Manus y Gemini Deep Research en profundidad.',
    units: 4, completed: 4,
    color: '#9a5a4a',
    bg: 'linear-gradient(135deg, #2e0d0a 0%, #4a1a14 100%)',
  },
  {
    num: '07', path: '/communication',
    label: 'Comunicación Legal',
    desc: 'IA para comunicación profesional sin degradar rol, ética ni credibilidad institucional.',
    units: 1, completed: 1,
    color: '#3a8a9a',
    bg: 'linear-gradient(135deg, #0a1e2e 0%, #0d3040 100%)',
  },
  {
    num: '08', path: '/practice',
    label: 'De la Teoría a la Práctica',
    desc: 'Del concepto al sistema. Diseño de flujos, implementación y validación profesional.',
    units: 3, completed: 3,
    color: '#4a8a4a',
    bg: 'linear-gradient(135deg, #0a1e0a 0%, #143014 100%)',
  },
]

function ModuleCard({ mod, index }) {
  const Illustration = illustrations[index]
  const pct = Math.round((mod.completed / mod.units) * 100)

  return (
    <Link to={mod.path} className="module-card" style={{ '--mod-color': mod.color, '--mod-bg': mod.bg }}>
      {/* Visual header */}
      <div className="module-card__image">
        <Illustration />
        <div className="module-card__num">{mod.num}</div>
        {pct === 100 && (
          <div className="module-card__complete-badge">✓</div>
        )}
      </div>

      {/* Content */}
      <div className="module-card__body">
        <h3 className="module-card__title">{mod.label}</h3>
        <p className="module-card__desc">{mod.desc}</p>

        {/* Progress */}
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

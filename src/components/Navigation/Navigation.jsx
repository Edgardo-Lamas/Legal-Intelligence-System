import { NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Navigation.css'

/* ── Module definitions with progress data ── */
const modules = [
  {
    num: '01',
    path: '/foundations',
    label: 'Fundamentos de IA',
    accentColor: '#4a7c94',
    units: [
      { path: '/foundations',    label: 'IA Generativa y Agentes' },
      { path: '/foundations-u2', label: 'ChatGPT vs Gemini' },
      { path: '/foundations-u3', label: 'RAG aplicado al derecho' },
      { path: '/foundations-u4', label: 'Claude: el tercer modelo' },
      { path: '/foundations-u5', label: 'La tríada en práctica' },
    ],
    completed: 5,
  },
  {
    num: '02',
    path: '/prompt-engineering',
    label: 'Prompt Jurídico',
    accentColor: '#5a8a5a',
    units: [
      { path: '/prompt-engineering',    label: 'Ingeniería de Prompts' },
      { path: '/prompt-engineering-u2', label: 'Contexto y Documentos' },
      { path: '/prompt-engineering-u3', label: 'Filtrado Jurisprudencial' },
      { path: '/prompt-engineering-u4', label: 'Redacción Asistida' },
      { path: '/prompt-engineering-u5', label: 'Juicio e Interrogatorios' },
      { path: '/prompt-engineering-u6', label: 'GPTs y Librerías' },
      { path: '/prompt-engineering-u7', label: 'Razonamiento Extendido' },
    ],
    completed: 7,
  },
  {
    num: '03',
    path: '/solo-practice',
    label: 'Abogacía por Cuenta Propia',
    accentColor: '#8a6a3a',
    units: [
      { path: '/solo-practice',    label: 'Gestión del Estudio' },
      { path: '/solo-practice-u2', label: 'Contabilidad y Fiscal' },
      { path: '/solo-practice-u3', label: 'Escritura Persuasiva' },
      { path: '/solo-practice-u4', label: 'Marketing Legal' },
      { path: '/solo-practice-u5', label: 'Modelo de Negocio con IA' },
    ],
    completed: 5,
  },
  {
    num: '04',
    path: '/gemini',
    label: 'Gemini & Deep Research',
    accentColor: '#5a5a94',
    units: [
      { path: '/gemini',    label: 'Gemini en la Práctica Legal' },
      { path: '/gemini-u2', label: 'Canvas: Visualización' },
      { path: '/gemini-u3', label: 'Automatización y Memoria' },
    ],
    completed: 3,
  },
  {
    num: '05',
    path: '/ecosystem',
    label: 'Ecosistema & Automatización',
    accentColor: '#7a4a8a',
    units: [
      { path: '/ecosystem',    label: 'IA como Ecosistema' },
      { path: '/ecosystem-u2', label: 'Qué y Cómo Automatizar' },
      { path: '/ecosystem-u3', label: 'Flujos de Trabajo' },
      { path: '/ecosystem-u4', label: 'Docs y Sistemas Externos' },
      { path: '/ecosystem-u5', label: 'Práctica Escalable' },
    ],
    completed: 5,
  },
  {
    num: '06',
    path: '/mastering',
    label: 'Dominando el Ecosistema',
    accentColor: '#8a4a3a',
    units: [
      { path: '/mastering',    label: 'Claude Projects' },
      { path: '/mastering-u2', label: 'ChatGPT para Análisis' },
      { path: '/mastering-u3', label: 'Perplexity y Manus' },
      { path: '/mastering-u4', label: 'Gemini Deep Research' },
    ],
    completed: 4,
  },
  {
    num: '07',
    path: '/agents',
    label: 'Agentes IA para el Estudio Jurídico',
    accentColor: '#2a6a5a',
    units: [
      { path: '/agents',    label: 'Qué es un agente IA' },
      { path: '/agents-u2', label: 'Agente de investigación jurídica' },
      { path: '/agents-u3', label: 'Agente de redacción' },
      { path: '/agents-u4', label: 'Agente de seguimiento de causas' },
      { path: '/agents-u5', label: 'Orquestación multi-agente' },
    ],
    completed: 5,
  },
  {
    num: '08',
    path: '/practice',
    label: 'De la Teoría a la Práctica',
    accentColor: '#4a7a4a',
    units: [
      { path: '/practice',    label: 'Del Concepto al Sistema' },
      { path: '/practice-u2', label: 'Diseño de Flujos' },
      { path: '/practice-u3', label: 'Implementación y Validación' },
    ],
    completed: 3,
  },
  {
    num: '09',
    path: '/privacy',
    label: 'Privacidad, Ética y Secreto Profesional',
    accentColor: '#6a3a6a',
    units: [
      { path: '/privacy',    label: '¿ChatGPT entrena con mis datos?' },
      { path: '/privacy-u2', label: 'Secreto profesional y IA' },
      { path: '/privacy-u3', label: 'Cómo usar IA con info sensible' },
      { path: '/privacy-u4', label: 'Enterprise y modelos locales' },
      { path: '/privacy-u5', label: 'Ética profesional en la era LLM' },
    ],
    completed: 5,
  },
]

/* ── Dark mode hook ── */
function useDarkMode() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('lis-theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    localStorage.setItem('lis-theme', dark ? 'dark' : 'light')
  }, [dark])

  return [dark, setDark]
}

/* ── SVG Icons ── */
const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
)

const MapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
    <line x1="9" y1="3" x2="9" y2="18"/>
    <line x1="15" y1="6" x2="15" y2="21"/>
  </svg>
)

const BookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
)

const EditIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
)

const ChevronDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
)

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
)

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
)

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
)

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)

/* ── Progress Segments ── */
function ProgressSegments({ total, completed, color }) {
  return (
    <div className="nav-progress" title={`${completed} de ${total} unidades`}>
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`nav-progress__seg ${i < completed ? 'nav-progress__seg--done' : ''}`}
          style={i < completed ? { backgroundColor: color } : {}}
        />
      ))}
    </div>
  )
}

/* ── Module Item (expandable) ── */
function ModuleItem({ mod, onLinkClick }) {
  const location = useLocation()
  const isAnyUnitActive = mod.units.some(u => location.pathname === u.path)
  const [open, setOpen] = useState(isAnyUnitActive)

  useEffect(() => {
    if (isAnyUnitActive) setOpen(true)
  }, [isAnyUnitActive])

  return (
    <li className={`nav-module ${open ? 'nav-module--open' : ''}`}>
      <button
        className={`nav-module__trigger ${isAnyUnitActive ? 'nav-module__trigger--active' : ''}`}
        onClick={() => setOpen(o => !o)}
        style={isAnyUnitActive ? { '--mod-color': mod.accentColor } : {}}
        aria-expanded={open}
      >
        <span
          className="nav-module__num"
          style={{ color: mod.accentColor, borderColor: mod.accentColor + '40' }}
        >
          {mod.num}
        </span>
        <span className="nav-module__label">{mod.label}</span>
        <span className={`nav-module__chevron ${open ? 'nav-module__chevron--open' : ''}`}>
          <ChevronDown />
        </span>
      </button>

      <div className="nav-module__meta">
        <ProgressSegments
          total={mod.units.length}
          completed={mod.completed}
          color={mod.accentColor}
        />
        <span className="nav-module__count">
          {mod.completed}/{mod.units.length}
        </span>
      </div>

      {open && (
        <ul className="nav-module__units">
          {mod.units.map(unit => (
            <li key={unit.path}>
              <NavLink
                to={unit.path}
                className={({ isActive }) =>
                  `nav-unit__link ${isActive ? 'nav-unit__link--active' : ''}`
                }
                onClick={onLinkClick}
                style={{ '--mod-color': mod.accentColor }}
              >
                <span className="nav-unit__dot" />
                {unit.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

/* ── Main Navigation ── */
function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [dark, setDark] = useDarkMode()

  const closeNav = () => setIsOpen(false)

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="nav-toggle"
        onClick={() => setIsOpen(o => !o)}
        aria-label="Abrir navegación"
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      <nav className={`nav ${isOpen ? 'nav--open' : ''}`} aria-label="Navegación principal">

        {/* Header */}
        <div className="nav-header">
          <div className="nav-brand">
            <span className="nav-brand__monogram">LIS</span>
            <div className="nav-brand__text">
              <span className="nav-brand__name">Legal Intelligence</span>
              <span className="nav-brand__tagline">Sistema de Formación</span>
            </div>
          </div>
          <button
            className="nav-theme-toggle"
            onClick={() => setDark(d => !d)}
            aria-label={dark ? 'Modo claro' : 'Modo oscuro'}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>

        {/* Main links */}
        <div className="nav-section">
          <ul className="nav-list">
            <li>
              <NavLink
                to="/overview"
                className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
                onClick={closeNav}
              >
                <span className="nav-link__icon"><HomeIcon /></span>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/course-map"
                className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
                onClick={closeNav}
              >
                <span className="nav-link__icon"><MapIcon /></span>
                Mapa del Curso
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Modules */}
        <div className="nav-section">
          <span className="nav-section__label">Módulos</span>
          <ul className="nav-list">
            {modules.map(mod => (
              <ModuleItem key={mod.num} mod={mod} onLinkClick={closeNav} />
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div className="nav-section">
          <span className="nav-section__label">Recursos</span>
          <ul className="nav-list">
            <li>
              <NavLink
                to="/glossary"
                className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
                onClick={closeNav}
              >
                <span className="nav-link__icon"><BookIcon /></span>
                Glosario
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/notes"
                className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
                onClick={closeNav}
              >
                <span className="nav-link__icon"><EditIcon /></span>
                Notas
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Footer */}
        <div className="nav-footer">
          <span className="nav-footer__total">8 módulos · 29 unidades</span>
        </div>
      </nav>

      {isOpen && (
        <div className="nav-overlay" onClick={closeNav} aria-hidden="true" />
      )}
    </>
  )
}

export default Navigation

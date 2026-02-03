import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import './Navigation.css'

const navItems = [
    { path: '/overview', label: 'Overview', icon: 'compass' },
    { path: '/course-map', label: '📍 Mapa del Curso', icon: 'compass' },
    { path: '/foundations', label: 'Foundations', icon: 'book' },
    { path: '/systems', label: 'Systems', icon: 'layers' },
    { path: '/analysis-patterns', label: 'Analysis & Patterns', icon: 'search' },
    { path: '/automation-agents', label: 'Automation & Agents', icon: 'cpu' },
    { path: '/prompt-engineering', label: 'M2 · Prompt Jurídico', icon: 'edit' },
    { path: '/solo-practice', label: 'M3 · Abogacía por Cuenta Propia', icon: 'briefcase' },
    { path: '/gemini', label: 'M4 · Gemini & Deep Research', icon: 'search' },
    { path: '/ecosystem', label: 'M5 · Ecosistema & Auto', icon: 'layers' },
    { path: '/glossary', label: 'Glossary', icon: 'list' },
    { path: '/notes', label: 'Notes', icon: 'edit' },
]

const icons = {
    briefcase: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        </svg>
    ),
    compass: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
    ),
    book: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
    ),
    layers: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
        </svg>
    ),
    search: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
    ),
    cpu: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
            <rect x="9" y="9" width="6" height="6" />
            <line x1="9" y1="1" x2="9" y2="4" />
            <line x1="15" y1="1" x2="15" y2="4" />
            <line x1="9" y1="20" x2="9" y2="23" />
            <line x1="15" y1="20" x2="15" y2="23" />
            <line x1="20" y1="9" x2="23" y2="9" />
            <line x1="20" y1="14" x2="23" y2="14" />
            <line x1="1" y1="9" x2="4" y2="9" />
            <line x1="1" y1="14" x2="4" y2="14" />
        </svg>
    ),
    list: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="8" y1="6" x2="21" y2="6" />
            <line x1="8" y1="12" x2="21" y2="12" />
            <line x1="8" y1="18" x2="21" y2="18" />
            <line x1="3" y1="6" x2="3.01" y2="6" />
            <line x1="3" y1="12" x2="3.01" y2="12" />
            <line x1="3" y1="18" x2="3.01" y2="18" />
        </svg>
    ),
    edit: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
    ),
    menu: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
    ),
    close: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    ),
}

function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNav = () => setIsOpen(!isOpen)
    const closeNav = () => setIsOpen(false)

    return (
        <>
            <button className="navigation__toggle" onClick={toggleNav} aria-label="Toggle navigation">
                {isOpen ? icons.close : icons.menu}
            </button>

            <nav className={`navigation ${isOpen ? 'navigation--open' : ''}`}>
                <div className="navigation__header">
                    <h1 className="navigation__title">Legal Intelligence System</h1>
                    <p className="navigation__subtitle">Personal Knowledge Workspace</p>
                </div>

                <ul className="navigation__menu">
                    {navItems.map((item) => (
                        <li key={item.path} className="navigation__item">
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `navigation__link ${isActive ? 'navigation__link--active' : ''}`
                                }
                                onClick={closeNav}
                            >
                                <span className="navigation__icon">{icons[item.icon]}</span>
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className="navigation__footer">
                    <span className="navigation__version">v0.1.0</span>
                </div>
            </nav>

            {isOpen && <div className="navigation__overlay" onClick={closeNav} />}
        </>
    )
}

export default Navigation

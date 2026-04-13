import { useState, useRef, useEffect, useCallback } from 'react'
import './LegalConsult.css'

/* ─── MCP Configuration ─────────────────────────────────── */
const MCP_ENDPOINT = 'https://bwwlgfgjxslbavhfuhia.supabase.co/functions/v1/mcp-server'

const SYSTEM_PROMPT = `Sos un asistente jurídico especializado en el Código Procesal Penal de la Provincia de Buenos Aires (Ley 11.922 y sus modificatorias). Tu rol es asistir a abogados defensores penalistas bonaerenses.

Reglas de respuesta:
1. Citá siempre los artículos específicos del CPP PBA con formato "Art. N CPP PBA"
2. Señalá plazos procesales relevantes (ej: "plazo de 10 días — Art. 161 CPP PBA")
3. Enfocá la perspectiva desde la defensa: derechos del imputado, garantías constitucionales, vías recursivas
4. Si hay diferencias relevantes con el CPPN (Ley 23.984) mencionálas brevemente
5. Citá jurisprudencia de la SCBA o Cámaras de Apelación y Garantías cuando sea pertinente
6. Estructurá con secciones claras: marco normativo, fundamento, estrategia de defensa
7. Usá lenguaje técnico-jurídico preciso pero sin ambigüedades
8. Si la consulta excede el CPP PBA, indicalo y derivá al cuerpo normativo correcto`

/* ─── MCP Client ─────────────────────────────────────────── */
let mcpToolName = null  // discovered dynamically on first init

async function mcpRequest(method, params = {}) {
    const res = await fetch(MCP_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json, text/event-stream',
        },
        body: JSON.stringify({ jsonrpc: '2.0', method, params, id: Date.now() }),
    })
    if (!res.ok) {
        const text = await res.text().catch(() => '')
        throw new Error(`HTTP ${res.status}${text ? ': ' + text.slice(0, 120) : ''}`)
    }
    // Handle SSE (text/event-stream) response format
    const contentType = res.headers.get('content-type') || ''
    if (contentType.includes('text/event-stream')) {
        const text = await res.text()
        const lines = text.split('\n').filter(l => l.startsWith('data:'))
        const combined = lines.map(l => l.replace(/^data:\s*/, '')).join('')
        try { return JSON.parse(combined) } catch { return { result: combined } }
    }
    const data = await res.json()
    if (data.error) throw new Error(data.error.message || `Error ${data.error.code}`)
    return data.result
}

async function initMCP() {
    try {
        await mcpRequest('initialize', {
            protocolVersion: '2024-11-05',
            capabilities: {},
            clientInfo: { name: 'LegalConsult', version: '1.0' },
        })
        const tools = await mcpRequest('tools/list')
        const toolList = tools?.tools ?? []
        mcpToolName = toolList[0]?.name ?? 'query'
        return toolList
    } catch {
        mcpToolName = 'query'
        return []
    }
}

async function queryMCP(userQuery) {
    if (!mcpToolName) await initMCP()
    const result = await mcpRequest('tools/call', {
        name: mcpToolName,
        arguments: {
            query: userQuery,
            system_prompt: SYSTEM_PROMPT,
            context: 'cpp_pba_defensa_penal',
        },
    })
    // Normalize various response shapes
    const content = result?.content ?? result?.text ?? result?.answer ?? result
    if (Array.isArray(content)) {
        return content.map(c => c?.text ?? c?.content ?? String(c)).join('\n')
    }
    if (typeof content === 'string') return content
    if (typeof content === 'object') return JSON.stringify(content, null, 2)
    return String(content)
}

/* ─── Response Formatter ─────────────────────────────────── */
function formatResponse(text) {
    // Highlight article references
    const articleRegex = /(Arts?\.\s*\d+(?:\s*(?:bis|ter|quáter)?)?(?:\s*(?:y|,)\s*\d+)*\s*(?:CPP\s*PBA|CPPN|CN|CCyC)?|artículos?\s+\d+(?:\s*y\s*\d+)*|inc(?:iso|\.)\s*\d+(?:°|º)?|ley\s+\d+[\.\d]*)/gi

    const parts = []
    let lastIndex = 0
    let match

    const re = new RegExp(articleRegex.source, 'gi')
    while ((match = re.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push({ type: 'text', value: text.slice(lastIndex, match.index) })
        }
        parts.push({ type: 'article', value: match[0] })
        lastIndex = re.lastIndex
    }
    if (lastIndex < text.length) {
        parts.push({ type: 'text', value: text.slice(lastIndex) })
    }

    return parts
}

function ResponseText({ text }) {
    const paragraphs = text.split(/\n\n+/)
    return (
        <div className="lc-response">
            {paragraphs.map((para, i) => {
                // Detect section headers (lines ending with : or all-caps)
                if (/^[#*]{1,3}\s/.test(para) || /^[A-ZÁÉÍÓÚÑ][A-ZÁÉÍÓÚÑ\s]{3,}:$/.test(para.trim())) {
                    const clean = para.replace(/^[#*\s]+/, '').replace(/:$/, '')
                    return <h4 key={i} className="lc-response__heading">{clean}</h4>
                }
                // Bullet points
                if (/^[-•*]\s/.test(para)) {
                    const items = para.split('\n').filter(Boolean)
                    return (
                        <ul key={i} className="lc-response__list">
                            {items.map((item, j) => {
                                const clean = item.replace(/^[-•*]\s*/, '')
                                return (
                                    <li key={j} className="lc-response__list-item">
                                        <InlineFormatted text={clean} />
                                    </li>
                                )
                            })}
                        </ul>
                    )
                }
                // Numbered list
                if (/^\d+\.\s/.test(para)) {
                    const items = para.split('\n').filter(Boolean)
                    return (
                        <ol key={i} className="lc-response__list lc-response__list--ordered">
                            {items.map((item, j) => {
                                const clean = item.replace(/^\d+\.\s*/, '')
                                return (
                                    <li key={j} className="lc-response__list-item">
                                        <InlineFormatted text={clean} />
                                    </li>
                                )
                            })}
                        </ol>
                    )
                }
                // Handle single newlines within a paragraph as line breaks
                const lines = para.split('\n')
                return (
                    <p key={i} className="lc-response__para">
                        {lines.map((line, j) => (
                            <span key={j}>
                                <InlineFormatted text={line} />
                                {j < lines.length - 1 && <br />}
                            </span>
                        ))}
                    </p>
                )
            })}
        </div>
    )
}

function InlineFormatted({ text }) {
    // Bold **text**
    const boldSplit = text.split(/(\*\*[^*]+\*\*)/g)
    return (
        <>
            {boldSplit.map((segment, i) => {
                if (segment.startsWith('**') && segment.endsWith('**')) {
                    const inner = segment.slice(2, -2)
                    return <strong key={i}><ArticleHighlighted text={inner} /></strong>
                }
                return <ArticleHighlighted key={i} text={segment} />
            })}
        </>
    )
}

function ArticleHighlighted({ text }) {
    const parts = formatResponse(text)
    return (
        <>
            {parts.map((part, i) =>
                part.type === 'article'
                    ? <span key={i} className="lc-article-ref">{part.value}</span>
                    : <span key={i}>{part.value}</span>
            )}
        </>
    )
}


function SendIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 2L11 13" />
            <path d="M22 2L15 22l-4-9-9-4 20-7z" />
        </svg>
    )
}

function CloseIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
        </svg>
    )
}

function TrashIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" />
        </svg>
    )
}

/* ─── Typing Indicator ───────────────────────────────────── */
function TypingDots() {
    return (
        <div className="lc-typing">
            <div className="lc-typing__dot" />
            <div className="lc-typing__dot" />
            <div className="lc-typing__dot" />
        </div>
    )
}

/* ─── Suggested Questions ────────────────────────────────── */
const SUGGESTIONS = [
    'Plazos para interponer apelación contra auto de procesamiento',
    'Derechos del imputado en declaración indagatoria',
    'Procedimiento de excarcelación bajo CPP PBA',
    'Nulidades procesales: cuándo plantearlas',
]

/* ─── Main Widget ────────────────────────────────────────── */
export default function LegalConsult() {
    const [isOpen, setIsOpen] = useState(false)
    const [query, setQuery] = useState('')
    const [messages, setMessages] = useState([])
    const [status, setStatus] = useState('idle') // idle | loading | error
    const [errorMsg, setErrorMsg] = useState('')
    const [initialized, setInitialized] = useState(false)
    const [showCallout, setShowCallout] = useState(() => {
        try { return localStorage.getItem('lc-callout-dismissed') !== 'true' } catch { return true }
    })

    const messagesEndRef = useRef(null)
    const inputRef = useRef(null)

    // Auto-scroll to bottom
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [messages, status])

    // Focus input when panel opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 300)
        }
    }, [isOpen])

    // Init MCP on first open
    useEffect(() => {
        if (isOpen && !initialized) {
            initMCP().then(() => setInitialized(true)).catch(() => setInitialized(true))
        }
    }, [isOpen, initialized])

    const handleSubmit = useCallback(async (queryText) => {
        const q = (queryText ?? query).trim()
        if (!q || status === 'loading') return

        setQuery('')
        setStatus('loading')
        setErrorMsg('')
        setMessages(prev => [...prev, { role: 'user', text: q }])

        try {
            const answer = await queryMCP(q)
            setMessages(prev => [...prev, { role: 'assistant', text: answer }])
            setStatus('idle')
        } catch (err) {
            setStatus('error')
            setErrorMsg(err.message || 'Error al conectar con el servidor')
            setMessages(prev => [...prev, {
                role: 'error',
                text: err.message || 'No se pudo obtener una respuesta. Verificá tu conexión e intentá nuevamente.',
            }])
        }
    }, [query, status])

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSubmit()
        }
    }

    const clearChat = () => {
        setMessages([])
        setStatus('idle')
        setErrorMsg('')
    }

    const dismissCallout = useCallback(() => {
        try { localStorage.setItem('lc-callout-dismissed', 'true') } catch {}
        setShowCallout(false)
    }, [])

    const openFromCallout = useCallback(() => {
        setIsOpen(true)
        dismissCallout()
    }, [dismissCallout])

    const isEmpty = messages.length === 0

    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div
                    className="lc-overlay"
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Panel */}
            <aside className={`lc-panel ${isOpen ? 'lc-panel--open' : ''}`} aria-label="Consulta Jurídica CPP PBA">
                {/* Panel Header */}
                <div className="lc-panel__header">
                    <div className="lc-panel__header-left">
                        <div className="lc-panel__icon">
                            <svg viewBox="0 0 20 20" fill="none">
                                <path d="M10 2v16M3 18h14" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M3 7l3.5-5L10 7" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M3 7h7" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M10 7l3.5-5L17 7" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10 7h7" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                        </div>
                        <div>
                            <span className="lc-panel__title">Alcance Legal Penal</span>
                            <span className="lc-panel__subtitle">CPP PBA — Ley 11.922</span>
                        </div>
                    </div>
                    <div className="lc-panel__header-actions">
                        {messages.length > 0 && (
                            <button
                                className="lc-icon-btn"
                                onClick={clearChat}
                                title="Limpiar conversación"
                                aria-label="Limpiar conversación"
                            >
                                <TrashIcon />
                            </button>
                        )}
                        <button
                            className="lc-icon-btn"
                            onClick={() => setIsOpen(false)}
                            title="Cerrar"
                            aria-label="Cerrar panel"
                        >
                            <CloseIcon />
                        </button>
                    </div>
                </div>

                {/* Messages */}
                <div className="lc-messages">
                    {isEmpty ? (
                        <div className="lc-empty">
                            <div className="lc-empty__icon">
                                <svg viewBox="0 0 48 48" fill="none">
                                    <path d="M24 6v36M8 42h32" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round"/>
                                    <path d="M8 18l8-12 8 12" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8 18h16" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round"/>
                                    <path d="M24 18l8-12 8 12" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M24 18h16" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <h3 className="lc-empty__title">Consulta Jurídica Inteligente</h3>
                            <p className="lc-empty__desc">
                                Asistente especializado en el Código Procesal Penal de la Provincia de Buenos Aires,
                                orientado a la defensa penal.
                            </p>
                            <div className="lc-suggestions">
                                <span className="lc-suggestions__label">Consultas frecuentes:</span>
                                {SUGGESTIONS.map((s, i) => (
                                    <button
                                        key={i}
                                        className="lc-suggestion"
                                        onClick={() => handleSubmit(s)}
                                        disabled={status === 'loading'}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <>
                            {messages.map((msg, i) => (
                                <div
                                    key={i}
                                    className={`lc-message lc-message--${msg.role}`}
                                >
                                    {msg.role === 'assistant' && (
                                        <div className="lc-message__avatar" aria-hidden="true">
                                            <svg viewBox="0 0 16 16" fill="none">
                                                <path d="M8 1v14M2 15h12" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
                                                <path d="M2 6l3-5 3 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M2 6h6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
                                                <path d="M8 6l3-5 3 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M8 6h6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
                                            </svg>
                                        </div>
                                    )}
                                    <div className="lc-message__bubble">
                                        {msg.role === 'assistant'
                                            ? <ResponseText text={msg.text} />
                                            : <p className="lc-message__text">{msg.text}</p>
                                        }
                                    </div>
                                </div>
                            ))}
                            {status === 'loading' && (
                                <div className="lc-message lc-message--assistant">
                                    <div className="lc-message__avatar" aria-hidden="true">
                                        <svg viewBox="0 0 16 16" fill="none">
                                            <path d="M8 1v14M2 15h12" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
                                            <path d="M2 6l3-5 3 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M2 6h6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
                                            <path d="M8 6l3-5 3 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M8 6h6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
                                        </svg>
                                    </div>
                                    <div className="lc-message__bubble">
                                        <TypingDots />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </>
                    )}
                </div>

                {/* Input */}
                <div className="lc-input-area">
                    {status === 'error' && (
                        <div className="lc-error-banner">
                            <span>⚠ {errorMsg}</span>
                            <button onClick={() => setStatus('idle')}>Reintentar</button>
                        </div>
                    )}
                    <div className="lc-input-wrap">
                        <textarea
                            ref={inputRef}
                            className="lc-input"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Consultá sobre el CPP PBA…"
                            rows={1}
                            disabled={status === 'loading'}
                            aria-label="Consulta jurídica"
                        />
                        <button
                            className={`lc-send-btn ${status === 'loading' ? 'lc-send-btn--loading' : ''}`}
                            onClick={() => handleSubmit()}
                            disabled={!query.trim() || status === 'loading'}
                            aria-label="Enviar consulta"
                        >
                            {status === 'loading' ? (
                                <span className="lc-spinner" aria-hidden="true" />
                            ) : (
                                <SendIcon />
                            )}
                        </button>
                    </div>
                    <p className="lc-disclaimer">
                        Orientativo. No reemplaza asesoramiento jurídico profesional.
                    </p>
                </div>
            </aside>

            {/* Contextual Callout */}
            {!isOpen && showCallout && (
                <div className="lc-callout" role="complementary" aria-label="Alcance Legal Penal — asistente jurídico">
                    <button
                        className="lc-callout__close"
                        onClick={dismissCallout}
                        aria-label="Cerrar aviso"
                    >
                        <CloseIcon />
                    </button>
                    <div className="lc-callout__icon">
                        <svg viewBox="0 0 20 20" fill="none">
                            <path d="M10 2v16M3 18h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            <path d="M3 7l3.5-5L10 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3 7h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            <path d="M10 7l3.5-5L17 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10 7h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                    </div>
                    <span className="lc-callout__eyebrow">Asistente jurídico</span>
                    <span className="lc-callout__title">Alcance Legal Penal</span>
                    <p className="lc-callout__desc">
                        Consultá el CPP PBA con IA. Artículos, plazos y estrategia de defensa en tiempo real.
                    </p>
                    <button className="lc-callout__cta" onClick={openFromCallout}>
                        <span>Hacer una consulta</span>
                        <svg viewBox="0 0 16 16" fill="none" width="12" height="12">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            )}

            {/* Floating Button */}
            <button
                className={`lc-fab ${isOpen ? 'lc-fab--active' : ''}`}
                onClick={() => setIsOpen(prev => !prev)}
                aria-label={isOpen ? 'Cerrar consulta jurídica' : 'Abrir consulta jurídica CPP PBA'}
                aria-expanded={isOpen}
            >
                <div className="lc-fab__icon">
                    {isOpen ? <CloseIcon /> : (
                        <svg viewBox="0 0 24 24" fill="none">
                            <path d="M12 3v18M4 21h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                            <path d="M4 10l4-7 4 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4 10h8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                            <path d="M12 10l4-7 4 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 10h8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                        </svg>
                    )}
                </div>
                {!isOpen && <span className="lc-fab__label">CPP PBA</span>}
            </button>
        </>
    )
}

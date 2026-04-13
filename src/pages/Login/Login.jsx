import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import './Login.css'

export default function Login() {
    const [mode, setMode] = useState('signin') // 'signin' | 'signup'
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [info, setInfo] = useState('')
    const [loading, setLoading] = useState(false)

    const { signIn, signUp } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setInfo('')
        setLoading(true)

        try {
            if (mode === 'signin') {
                const { error } = await signIn(email, password)
                if (error) throw error
                navigate('/overview')
            } else {
                const { error } = await signUp(email, password)
                if (error) throw error
                setInfo('Revisá tu casilla de correo para confirmar el registro.')
                setEmail('')
                setPassword('')
            }
        } catch (err) {
            const msg = err.message || 'Ocurrió un error. Intentá nuevamente.'
            if (msg.includes('Invalid login credentials')) {
                setError('Email o contraseña incorrectos.')
            } else if (msg.includes('User already registered')) {
                setError('Ya existe una cuenta con ese email. Ingresá con tu contraseña.')
            } else if (msg.includes('Password should be')) {
                setError('La contraseña debe tener al menos 6 caracteres.')
            } else {
                setError(msg)
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="login-page">
            {/* Background */}
            <div className="login-page__bg" aria-hidden="true">
                <div className="login-page__bg-grid" />
                <div className="login-page__bg-glow" />
            </div>

            {/* Card */}
            <div className="login-card">
                {/* Logo */}
                <div className="login-card__logo">
                    <svg viewBox="0 0 32 32" fill="none" className="login-card__logo-mark">
                        <path d="M16 3v26M5 29h22" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M5 12l5.5-8L16 12" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 12h11" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M16 12l5.5-8L27 12" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 12h11" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <div className="login-card__logo-text">
                        <span className="login-card__logo-name">Legal Intelligence</span>
                        <span className="login-card__logo-sub">Sistema de Formación Profesional</span>
                    </div>
                </div>

                {/* Tabs */}
                <div className="login-card__tabs">
                    <button
                        className={`login-card__tab ${mode === 'signin' ? 'login-card__tab--active' : ''}`}
                        onClick={() => { setMode('signin'); setError(''); setInfo('') }}
                    >
                        Ingresar
                    </button>
                    <button
                        className={`login-card__tab ${mode === 'signup' ? 'login-card__tab--active' : ''}`}
                        onClick={() => { setMode('signup'); setError(''); setInfo('') }}
                    >
                        Registrarse
                    </button>
                </div>

                {/* Heading */}
                <div className="login-card__heading">
                    <h1 className="login-card__title">
                        {mode === 'signin' ? 'Bienvenido' : 'Crear cuenta'}
                    </h1>
                    <p className="login-card__subtitle">
                        {mode === 'signin'
                            ? 'Ingresá para continuar tu formación'
                            : 'Accedé al programa completo de 10 módulos'
                        }
                    </p>
                </div>

                {/* Form */}
                <form className="login-card__form" onSubmit={handleSubmit} noValidate>
                    <div className="login-field">
                        <label className="login-field__label" htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            className="login-field__input"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="tu@email.com"
                            required
                            autoComplete="email"
                            disabled={loading}
                        />
                    </div>

                    <div className="login-field">
                        <label className="login-field__label" htmlFor="password">Contraseña</label>
                        <input
                            id="password"
                            type="password"
                            className="login-field__input"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder={mode === 'signup' ? 'Mínimo 6 caracteres' : '••••••••'}
                            required
                            autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
                            disabled={loading}
                        />
                    </div>

                    {error && (
                        <div className="login-alert login-alert--error">
                            <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                                <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.25"/>
                                <path d="M8 5v3.5M8 10.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                            {error}
                        </div>
                    )}

                    {info && (
                        <div className="login-alert login-alert--info">
                            <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                                <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.25"/>
                                <path d="M8 7v4M8 5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                            {info}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="login-card__submit"
                        disabled={loading || !email || !password}
                    >
                        {loading ? (
                            <span className="login-card__spinner" aria-hidden="true" />
                        ) : (
                            mode === 'signin' ? 'Ingresar' : 'Crear cuenta'
                        )}
                    </button>
                </form>

                {/* Footer */}
                <div className="login-card__footer">
                    <Link to="/pricing" className="login-card__pricing-link">
                        Ver planes y precios
                    </Link>
                </div>
            </div>
        </div>
    )
}

import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import './Pricing.css'

const plans = [
    {
        id: 'beta',
        badge: 'Fase Beta',
        name: 'Acceso Gratuito',
        price: '$0',
        period: 'durante la beta',
        description: 'Acceso completo al programa mientras dure la fase de prueba. Sin tarjeta de crédito.',
        highlight: false,
        cta: 'Registrarse gratis',
        ctaTo: '/login',
        features: [
            '10 módulos completos',
            '51 unidades de formación',
            'Mapa del curso interactivo',
            'Acceso de por vida al material',
            'Actualizaciones incluidas',
        ],
        note: 'El precio se activará al finalizar la beta.',
    },
    {
        id: 'curso',
        badge: 'Más popular',
        name: 'Curso Completo',
        price: '$197',
        period: 'pago único · USD',
        description: 'Acceso permanente a los 10 módulos. Formación integral en IA jurídica para abogados argentinos.',
        highlight: true,
        cta: 'Próximamente',
        ctaTo: null,
        features: [
            '10 módulos · 51 unidades',
            'Actualizaciones de por vida',
            'Biblioteca de prompts jurídicos',
            'Casos prácticos con Claude y Gemini',
            'Certificado de finalización',
        ],
        note: null,
    },
    {
        id: 'bundle',
        badge: 'Bundle Pro',
        name: 'Curso + Alcance Legal',
        price: '$297',
        period: 'pago único · USD',
        description: 'El curso completo más 3 meses de acceso al asistente IA especializado en el CPP PBA.',
        highlight: false,
        cta: 'Próximamente',
        ctaTo: null,
        features: [
            'Todo lo del Curso Completo',
            'Alcance Legal Penal — 3 meses',
            'Consultas ilimitadas al CPP PBA',
            'Artículos, plazos y estrategia',
            'Acceso prioritario a novedades',
        ],
        note: null,
    },
]

function CheckIcon() {
    return (
        <svg viewBox="0 0 14 14" fill="none" width="14" height="14" aria-hidden="true">
            <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default function Pricing() {
    const { user } = useAuth()

    return (
        <div className="pricing-page">
            <div className="pricing-page__bg" aria-hidden="true">
                <div className="pricing-page__bg-grid" />
                <div className="pricing-page__bg-glow" />
            </div>

            <div className="pricing-container">
                {/* Header */}
                <div className="pricing-header">
                    <Link to={user ? '/overview' : '/login'} className="pricing-back">
                        <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {user ? 'Volver al curso' : 'Ingresar'}
                    </Link>

                    <div className="pricing-header__eyebrow">Planes y precios</div>
                    <h1 className="pricing-header__title">
                        Formación en IA jurídica<br />
                        <em>sin vueltas</em>
                    </h1>
                    <p className="pricing-header__subtitle">
                        De abogado a arquitecto de IA. 10 módulos que transforman tu práctica profesional.
                    </p>

                    <div className="pricing-beta-notice">
                        <span className="pricing-beta-notice__dot" />
                        Estás en la <strong>fase beta</strong> — acceso gratuito y completo mientras dura.
                    </div>
                </div>

                {/* Plans grid */}
                <div className="pricing-plans">
                    {plans.map(plan => (
                        <div
                            key={plan.id}
                            className={`pricing-plan ${plan.highlight ? 'pricing-plan--highlight' : ''}`}
                        >
                            {plan.highlight && (
                                <div className="pricing-plan__glow" aria-hidden="true" />
                            )}

                            <div className="pricing-plan__badge">{plan.badge}</div>

                            <div className="pricing-plan__header">
                                <h2 className="pricing-plan__name">{plan.name}</h2>
                                <div className="pricing-plan__price">
                                    <span className="pricing-plan__amount">{plan.price}</span>
                                    <span className="pricing-plan__period">{plan.period}</span>
                                </div>
                                <p className="pricing-plan__desc">{plan.description}</p>
                            </div>

                            <ul className="pricing-plan__features">
                                {plan.features.map((f, i) => (
                                    <li key={i} className="pricing-plan__feature">
                                        <span className="pricing-plan__check"><CheckIcon /></span>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <div className="pricing-plan__footer">
                                {plan.ctaTo ? (
                                    <Link
                                        to={plan.ctaTo}
                                        className={`pricing-plan__cta ${plan.highlight ? 'pricing-plan__cta--primary' : ''}`}
                                    >
                                        {plan.cta}
                                    </Link>
                                ) : (
                                    <button className="pricing-plan__cta pricing-plan__cta--disabled" disabled>
                                        {plan.cta}
                                    </button>
                                )}
                                {plan.note && (
                                    <p className="pricing-plan__note">{plan.note}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* FAQ mínimo */}
                <div className="pricing-faq">
                    <h3 className="pricing-faq__title">Preguntas frecuentes</h3>
                    <div className="pricing-faq__grid">
                        {[
                            {
                                q: '¿Qué es Alcance Legal Penal?',
                                a: 'Un asistente IA especializado en el Código Procesal Penal de la Provincia de Buenos Aires. Responde consultas sobre artículos, plazos y estrategia de defensa en tiempo real.'
                            },
                            {
                                q: '¿Cuándo termina la beta gratuita?',
                                a: 'No hay fecha fija. Se notificará a todos los usuarios registrados con anticipación antes de activar el cobro.'
                            },
                            {
                                q: '¿El pago único incluye actualizaciones?',
                                a: 'Sí. Cualquier unidad nueva o actualización del material queda incluida sin costo adicional.'
                            },
                            {
                                q: '¿Aceptan MercadoPago?',
                                a: 'Sí. Se habilitará MercadoPago y tarjeta de crédito/débito al lanzar el acceso pago.'
                            },
                        ].map((item, i) => (
                            <div key={i} className="pricing-faq__item">
                                <h4 className="pricing-faq__q">{item.q}</h4>
                                <p className="pricing-faq__a">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

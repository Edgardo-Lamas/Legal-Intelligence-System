import { Link } from 'react-router-dom'
import PageSEO from '../../components/PageSEO/PageSEO'
import './NotFound.css'

export default function NotFound() {
    return (
        <div className="notfound-page">
            <PageSEO
                title="Página no encontrada"
                description="La página que buscás no existe o fue movida."
                path="/404"
            />
            <div className="notfound-card">
                <svg viewBox="0 0 32 32" fill="none" className="notfound-card__mark" aria-hidden="true">
                    <path d="M16 3v26M5 29h22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M5 12l5.5-8L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 12h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M16 12l5.5-8L27 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 12h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="notfound-card__code">404</span>
                <h1 className="notfound-card__title">Esta página no existe</h1>
                <p className="notfound-card__text">
                    La dirección que buscás no está en el programa, o fue movida.
                </p>
                <Link to="/overview" className="notfound-card__cta">
                    Ir al inicio del curso
                </Link>
            </div>
        </div>
    )
}

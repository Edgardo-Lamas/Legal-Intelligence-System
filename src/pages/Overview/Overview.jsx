import '../../styles/pages.css'
import PageSEO from '../../components/PageSEO/PageSEO'
import ModuleGrid from '../../components/ModuleGrid/ModuleGrid'

function Overview() {
    return (
        <div className="page">
            <PageSEO
                title="Inicio — IA para Abogados Argentinos"
                description="Sistema de formación en inteligencia artificial aplicada al derecho. 8 módulos para abogados argentinos: desde los fundamentos de la IA hasta la implementación real de sistemas automatizados en tu estudio."
                path="/overview"
            />

            {/* Hero */}
            <div className="hero-section">
                <span className="hero-eyebrow">Sistema de Formación Profesional</span>
                <h1 className="hero-title">
                    Legal<br />
                    <em>Intelligence</em>
                </h1>
                <p className="hero-subtitle">
                    Inteligencia artificial aplicada al ejercicio del derecho
                </p>
                <div className="hero-stats">
                    <div className="hero-stat">
                        <span className="hero-stat__num">8</span>
                        <span className="hero-stat__label">Módulos</span>
                    </div>
                    <div className="hero-stat">
                        <span className="hero-stat__num">29</span>
                        <span className="hero-stat__label">Unidades</span>
                    </div>
                    <div className="hero-stat">
                        <span className="hero-stat__num">100%</span>
                        <span className="hero-stat__label">Completado</span>
                    </div>
                </div>
            </div>

            <div className="page__content">
                {/* Intro */}
                <section className="page__section" style={{ marginTop: 0 }}>
                    <article className="long-form-content">
                        <p>
                            Este espacio es tu sistema de formación integral en <strong>inteligencia artificial
                            aplicada al derecho</strong>. Aprendés no solo a usar herramientas, sino a
                            <strong> pensar sistemáticamente</strong> sobre cómo integrar la IA en tu
                            práctica profesional con criterio y responsabilidad.
                        </p>
                    </article>
                </section>

                {/* Module grid */}
                <section className="page__section">
                    <h2 className="page__section-title">Programa de Formación</h2>
                    <ModuleGrid />
                </section>
            </div>
        </div>
    )
}

export default Overview

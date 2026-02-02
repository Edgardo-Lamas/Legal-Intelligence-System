import '../../styles/pages.css'
import CourseMapCard from '../../components/CourseMapCard/CourseMapCard'

function Overview() {
    return (
        <div className="page">
            <header className="page__header">
                <h1 className="page__title">IA para Abogados</h1>
                <p className="page__description">
                    Guía práctica para dominar la inteligencia artificial en el ejercicio profesional del derecho
                </p>
            </header>

            <div className="page__content">
                <section className="page__section">
                    <CourseMapCard />
                </section>

                <section className="page__section">
                    <h2 className="page__section-title">Bienvenido al Sistema</h2>
                    <article className="long-form-content" style={{ maxWidth: '65ch' }}>
                        <p>
                            Este sitio es tu espacio de formación integral en <strong>inteligencia artificial aplicada al derecho</strong>.
                            Aquí vas a aprender no solo a usar herramientas, sino a <strong>pensar sistemáticamente</strong> sobre cómo
                            integrar la IA en tu práctica profesional.
                        </p>
                        <p>
                            El recorrido está organizado en <strong>7 bloques temáticos</strong> que te llevarán desde los fundamentos
                            conceptuales hasta la implementación real de sistemas automatizados en tu despacho.
                        </p>
                        <p>
                            Usá el <strong>Mapa del Curso</strong> para orientarte y saber siempre dónde estás parado.
                        </p>
                    </article>
                </section>
            </div>
        </div>
    )
}

export default Overview

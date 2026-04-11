import '../../styles/pages.css'
import PageSEO from '../../components/PageSEO/PageSEO'

function Notes() {
    return (
        <div className="page">
            <PageSEO
                title="Notas Personales"
                description="Notas, hipótesis y reflexiones sobre el uso de inteligencia artificial en la práctica jurídica profesional."
                path="/notes"
            />
            <header className="page__header">
                <h1 className="page__title">Notes</h1>
                <p className="page__description">
                    Personal notes, hypotheses, reflections, and evolving ideas
                </p>
            </header>

            <div className="page__content">
                <div className="page__placeholder">
                    Content to be added
                </div>
            </div>
        </div>
    )
}

export default Notes

import '../../styles/pages.css'
import PageSEO from '../../components/PageSEO/PageSEO'

function Systems() {
    return (
        <div className="page">
            <PageSEO
                title="Sistemas de Inteligencia Jurídica"
                description="Arquitecturas de sistemas inteligentes para el análisis jurídico profesional."
                path="/systems"
            />
            <header className="page__header">
                <h1 className="page__title">Systems</h1>
                <p className="page__description">
                    Architectures of intelligence systems for legal analysis
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

export default Systems

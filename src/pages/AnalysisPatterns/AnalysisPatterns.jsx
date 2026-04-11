import '../../styles/pages.css'
import PageSEO from '../../components/PageSEO/PageSEO'

function AnalysisPatterns() {
    return (
        <div className="page">
            <PageSEO
                title="Patrones de Análisis Jurídico"
                description="Detección de patrones, metodologías de validación y marcos analíticos para la práctica legal asistida por IA."
                path="/analysis-patterns"
            />
            <header className="page__header">
                <h1 className="page__title">Analysis & Patterns</h1>
                <p className="page__description">
                    Pattern detection, validation methodologies, and analytical frameworks
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

export default AnalysisPatterns

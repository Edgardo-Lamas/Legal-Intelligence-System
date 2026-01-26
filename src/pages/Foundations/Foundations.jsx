import '../../styles/pages.css'

const sections = [
    { id: 'core-concepts', title: 'Core Concepts' },
    { id: 'models-vs-agents', title: 'Models vs Agents' },
    { id: 'system-architectures', title: 'System Architectures' },
    { id: 'validation-reasoning', title: 'Validation & Reasoning Criteria' },
    { id: 'risks-errors', title: 'Risks, Errors & Bad Practices' },
]

function Foundations() {
    return (
        <div className="page">
            <header className="page__header">
                <h1 className="page__title">Foundations</h1>
                <p className="page__description">
                    Core conceptual foundations of legal intelligence systems
                </p>
            </header>

            <div className="page__content">
                {sections.map((section) => (
                    <section key={section.id} id={section.id} className="page__section">
                        <h2 className="page__section-title">{section.title}</h2>
                        <div className="page__section-content">
                            <span className="page__section-placeholder">Content to be added</span>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    )
}

export default Foundations

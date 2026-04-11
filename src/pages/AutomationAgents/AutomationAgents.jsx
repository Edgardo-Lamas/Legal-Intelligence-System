import '../../styles/pages.css'
import PageSEO from '../../components/PageSEO/PageSEO'

function AutomationAgents() {
    return (
        <div className="page">
            <PageSEO
                title="Automatización y Agentes de IA"
                description="Agentes de IA, automatización de flujos de trabajo y sistemas de orquestación para estudios jurídicos."
                path="/automation-agents"
            />
            <header className="page__header">
                <h1 className="page__title">Automation & Agents</h1>
                <p className="page__description">
                    AI agents, workflow automation, and orchestration systems
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

export default AutomationAgents

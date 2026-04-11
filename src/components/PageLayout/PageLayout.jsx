import Navigation from '../Navigation/Navigation'
import LegalConsult from '../LegalConsult/LegalConsult'
import './PageLayout.css'

function PageLayout({ children }) {
    return (
        <div className="page-layout">
            <Navigation />
            <main className="page-layout__content">
                <div className="page-layout__inner">
                    {children}
                </div>
            </main>
            <LegalConsult />
        </div>
    )
}

export default PageLayout

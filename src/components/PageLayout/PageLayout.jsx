import { Outlet } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import LegalConsult from '../LegalConsult/LegalConsult'
import './PageLayout.css'

function PageLayout() {
    return (
        <div className="page-layout">
            <Navigation />
            <main className="page-layout__content">
                <div className="page-layout__inner">
                    <Outlet />
                </div>
            </main>
            <LegalConsult />
        </div>
    )
}

export default PageLayout

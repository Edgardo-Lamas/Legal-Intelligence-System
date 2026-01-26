import { Routes, Route, Navigate } from 'react-router-dom'
import PageLayout from './components/PageLayout/PageLayout'
import Overview from './pages/Overview/Overview'
import Foundations from './pages/Foundations/Foundations'
import Systems from './pages/Systems/Systems'
import AnalysisPatterns from './pages/AnalysisPatterns/AnalysisPatterns'
import AutomationAgents from './pages/AutomationAgents/AutomationAgents'
import Glossary from './pages/Glossary/Glossary'
import Notes from './pages/Notes/Notes'

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/overview" replace />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/foundations" element={<Foundations />} />
        <Route path="/systems" element={<Systems />} />
        <Route path="/analysis-patterns" element={<AnalysisPatterns />} />
        <Route path="/automation-agents" element={<AutomationAgents />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </PageLayout>
  )
}

export default App

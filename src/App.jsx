import { Routes, Route, Navigate } from 'react-router-dom'
import PageLayout from './components/PageLayout/PageLayout'
import Overview from './pages/Overview/Overview'
import Foundations from './pages/Foundations/Foundations'
import Systems from './pages/Systems/Systems'
import AnalysisPatterns from './pages/AnalysisPatterns/AnalysisPatterns'
import AutomationAgents from './pages/AutomationAgents/AutomationAgents'
import Glossary from './pages/Glossary/Glossary'
import Notes from './pages/Notes/Notes'
import PromptEngineeringM2U1 from './pages/PromptEngineering/PromptEngineeringM2U1'
import PromptEngineeringM2U2 from './pages/PromptEngineering/PromptEngineeringM2U2'
import CourseMap from './pages/CourseMap/CourseMap'

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
        <Route path="/prompt-engineering" element={<PromptEngineeringM2U1 />} />
        <Route path="/prompt-engineering-u2" element={<PromptEngineeringM2U2 />} />
        <Route path="/course-map" element={<CourseMap />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </PageLayout>
  )
}

export default App

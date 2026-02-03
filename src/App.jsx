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
import PromptEngineeringM2U3 from './pages/PromptEngineering/PromptEngineeringM2U3'
import SoloPracticeM3U1 from './pages/SoloPractice/SoloPracticeM3U1'
import SoloPracticeM3U2 from './pages/SoloPractice/SoloPracticeM3U2'
import SoloPracticeM3U3 from './pages/SoloPractice/SoloPracticeM3U3'
import GeminiM4U1 from './pages/Gemini/GeminiM4U1'
import GeminiM4U2 from './pages/Gemini/GeminiM4U2'
import GeminiM4U3 from './pages/Gemini/GeminiM4U3'
import EcosystemM5U1 from './pages/Ecosystem/EcosystemM5U1'
import EcosystemM5U2 from './pages/Ecosystem/EcosystemM5U2'
import CourseMap from './pages/CourseMap/CourseMap'

import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <PageLayout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/overview" replace />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/foundations" element={<Foundations />} />
        <Route path="/systems" element={<Systems />} />
        <Route path="/analysis-patterns" element={<AnalysisPatterns />} />
        <Route path="/automation-agents" element={<AutomationAgents />} />
        <Route path="/prompt-engineering" element={<PromptEngineeringM2U1 />} />
        <Route path="/prompt-engineering-u2" element={<PromptEngineeringM2U2 />} />
        <Route path="/prompt-engineering-u3" element={<PromptEngineeringM2U3 />} />
        <Route path="/solo-practice" element={<SoloPracticeM3U1 />} />
        <Route path="/solo-practice-u2" element={<SoloPracticeM3U2 />} />
        <Route path="/solo-practice-u3" element={<SoloPracticeM3U3 />} />
        <Route path="/gemini" element={<GeminiM4U1 />} />
        <Route path="/gemini-u2" element={<GeminiM4U2 />} />
        <Route path="/gemini-u3" element={<GeminiM4U3 />} />
        <Route path="/ecosystem" element={<EcosystemM5U1 />} />
        <Route path="/ecosystem-u2" element={<EcosystemM5U2 />} />
        <Route path="/course-map" element={<CourseMap />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </PageLayout>
  )
}

export default App

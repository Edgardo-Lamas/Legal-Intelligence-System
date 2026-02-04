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
import EcosystemM5U3 from './pages/Ecosystem/EcosystemM5U3'
import EcosystemM5U4 from './pages/Ecosystem/EcosystemM5U4'
import EcosystemM5U5 from './pages/Ecosystem/EcosystemM5U5'
import MasteringM6U1 from './pages/Mastering/MasteringM6U1'
import MasteringM6U2 from './pages/Mastering/MasteringM6U2'
import MasteringM6U3 from './pages/Mastering/MasteringM6U3'
import MasteringM6U4 from './pages/Mastering/MasteringM6U4'
import CommunicationM7U1 from './pages/Communication/CommunicationM7U1'
import PracticeM8U1 from './pages/Practice/PracticeM8U1'
import PracticeM8U2 from './pages/Practice/PracticeM8U2'
import PracticeM8U3 from './pages/Practice/PracticeM8U3'
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
        <Route path="/ecosystem-u3" element={<EcosystemM5U3 />} />
        <Route path="/ecosystem-u4" element={<EcosystemM5U4 />} />
        <Route path="/ecosystem-u5" element={<EcosystemM5U5 />} />
        <Route path="/mastering" element={<MasteringM6U1 />} />
        <Route path="/mastering-u2" element={<MasteringM6U2 />} />
        <Route path="/mastering-u3" element={<MasteringM6U3 />} />
        <Route path="/mastering-u4" element={<MasteringM6U4 />} />
        <Route path="/communication" element={<CommunicationM7U1 />} />
        <Route path="/practice" element={<PracticeM8U1 />} />
        <Route path="/practice-u2" element={<PracticeM8U2 />} />
        <Route path="/practice-u3" element={<PracticeM8U3 />} />
        <Route path="/course-map" element={<CourseMap />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </PageLayout>
  )
}

export default App

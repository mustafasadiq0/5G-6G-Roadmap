import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import LearningPaths from './components/LearningPaths.jsx'
import BeginnerSection from './components/BeginnerSection.jsx'
import StudentSection from './components/StudentSection.jsx'
import ResearcherSection from './components/ResearcherSection.jsx'
import BusinessSection from './components/BusinessSection.jsx'
import InteractiveQuiz from './components/InteractiveQuiz.jsx'
import FAQ from './components/FAQ.jsx'
import Glossary from './components/Glossary.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <LearningPaths />
      <BeginnerSection />
      <StudentSection />
      <ResearcherSection />
      <BusinessSection />
      <FAQ />
      <Glossary />
      <Contact />
      <Footer />
      
      <InteractiveQuiz 
        isOpen={isQuizOpen} 
        onClose={() => setIsQuizOpen(false)} 
      />
      
      {/* Floating Quiz Button */}
      <button
        onClick={() => setIsQuizOpen(true)}
        className="fixed bottom-6 left-6 bg-gradient-primary text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow z-40"
        aria-label="ابدأ الاختبار التفاعلي"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
    </div>
  )
}

export default App

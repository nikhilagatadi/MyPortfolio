import React, { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FeedbackModal from './components/FeedbackModal'

// 🔹 Lazy load heavy sections
const Education = lazy(() => import('./components/Education'))
const Projects = lazy(() => import('./components/Projects'))

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Suspense fallback={<div className="loading text-center">Loading Education...</div>}>
        <Education />
      </Suspense>

      <Suspense fallback={<div className="loading text-center">Loading Projects...</div>}>
        <Projects />
      </Suspense>

      <Skills />
      <Contact />
      <Footer />
      <FeedbackModal />
    </>
  )
}

export default App


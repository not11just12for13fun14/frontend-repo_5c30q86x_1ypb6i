import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <Contact />
      <footer className="border-t border-white/10 py-10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-slate-400 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Your Marketing Studio. All rights reserved.</p>
          <a href="/test" className="hover:text-white">System status</a>
        </div>
      </footer>
    </div>
  )
}

export default App

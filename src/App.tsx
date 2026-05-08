import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Services } from './sections/Services';
import { Contact } from './sections/Contact';
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-lg font-extrabold text-slate-900 tracking-tight">
            Camila <span className="text-blue-600">Domato</span>
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
            <a href="#sobre-mi"  className="hover:text-blue-600 transition-colors">Sobre mí</a>
            <a href="#proyectos" className="hover:text-blue-600 transition-colors">Proyectos</a>
            <a href="#servicios" className="hover:text-blue-600 transition-colors">Servicios</a>
            <a
              href="#contacto"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all font-semibold"
            >
              Contacto
            </a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>

      <footer className="py-10 text-center bg-slate-50 border-t border-slate-100">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Camila Domato · Desarrollada con React y Vite · Isidro Casanova
        </p>
      </footer>

    </div>
  )
}

export default App

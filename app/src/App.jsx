import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useAnimeReveal } from './hooks/useAnimeReveal';

function App() {
  useAnimeReveal();

  return (
    <div className="relative overflow-hidden pb-24 selection:bg-magenta selection:text-white">
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="bg-orb orb-1 absolute left-[20%] top-[10%] h-[40vw] w-[40vw] rounded-full bg-magenta/10 blur-[120px] mix-blend-screen" />
        <div className="bg-orb orb-2 absolute right-[10%] top-[40%] h-[35vw] w-[35vw] rounded-full bg-cyan/10 blur-[100px] mix-blend-screen" />
        <div className="bg-orb orb-3 absolute bottom-[10%] left-[30%] h-[50vw] w-[50vw] rounded-full bg-magenta/5 blur-[150px] mix-blend-screen" />
      </div>

      <nav className="glass-panel fixed left-1/2 top-4 z-50 w-[94%] max-w-4xl -translate-x-1/2 rounded-[2rem] border-border-glow px-4 py-3 sm:top-6 sm:px-6 md:w-auto md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.2em] text-text-muted sm:text-sm">
          <a href="#about" className="transition-all hover:text-white hover:text-glow-magenta">Sobre mí</a>
          <a href="#skills" className="transition-all hover:text-white hover:text-glow-cyan">Tecnologías</a>
          <a href="#experience" className="transition-all hover:text-white hover:text-glow-magenta">Experiencia</a>
          <a href="#projects" className="transition-all hover:text-white hover:text-glow-cyan">Proyectos</a>
          <a href="#contact" className="transition-all hover:text-white hover:text-glow-magenta">Contacto</a>
        </div>
      </nav>

      <main className="relative z-10 px-4 pt-24 md:px-8">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="relative z-10 mt-32 border-t border-border-glass py-12 text-center font-manrope text-text-muted">
        <div className="glass-panel mx-auto inline-block max-w-3xl p-6">
          <p className="text-sm">Diseñado y desarrollado por Luciano N. Piancatelli.</p>
          <p className="mt-2 text-xs opacity-50">© {new Date().getFullYear()} · Construido con React, Vite y Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

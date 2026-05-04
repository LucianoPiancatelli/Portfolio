import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useAnimeReveal } from './hooks/useAnimeReveal';
import { useTypewriter } from './hooks/useTypewriter';
import { useEffect, useMemo, useState } from 'react';

function App() {
  useAnimeReveal();
  useTypewriter();

  const navLinks = useMemo(
    () => [
      { id: 'about', label: 'Sobre mí', glow: 'hover:text-glow-magenta' },
      { id: 'skills', label: 'Tecnologías', glow: 'hover:text-glow-cyan' },
      { id: 'experience', label: 'Experiencia', glow: 'hover:text-glow-magenta' },
      { id: 'projects', label: 'Proyectos', glow: 'hover:text-glow-cyan' },
      { id: 'contact', label: 'Contacto', glow: 'hover:text-glow-magenta' },
    ],
    [],
  );

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      {
        threshold: [0.2, 0.35, 0.5],
        rootMargin: '-20% 0px -65% 0px',
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [navLinks]);

  return (
    <div className="relative overflow-hidden pb-24 selection:bg-magenta selection:text-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:border-2 focus:border-text-main focus:bg-obsidian focus:px-4 focus:py-2 focus:font-syne focus:text-base focus:font-bold focus:text-text-main"
      >
        Saltar al contenido
      </a>

      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-2 bg-[repeating-linear-gradient(90deg,#a8423a_0,#a8423a_4px,transparent_4px,transparent_10px)] opacity-40" />
        <div className="absolute inset-y-0 left-10 w-px bg-magenta/30 hidden md:block" />
        <div className="absolute inset-y-0 left-12 w-px bg-magenta/15 hidden md:block" />
        <div
          aria-hidden="true"
          className="absolute right-6 top-6 h-24 w-24 rotate-12 opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='none' stroke='%232c2c2c' stroke-width='2' stroke-dasharray='4 6'/><path d='M30 50 L70 50 M50 30 L50 70' stroke='%232c2c2c' stroke-width='2' fill='none' stroke-linecap='round'/></svg>\")",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
          }}
        />
      </div>

      <nav
        aria-label="Secciones del portfolio"
        className="sketch-nav fixed left-1/2 top-4 z-50 w-[94%] max-w-4xl -translate-x-1/2 px-5 py-3 sm:top-6 sm:px-7 md:w-auto md:px-9"
      >
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-syne text-base font-semibold tracking-wide text-text-main sm:text-lg">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={activeSection === link.id ? 'page' : undefined}
              className={[
                'relative transition-colors hover:text-magenta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magenta/40',
                activeSection === link.id ? 'text-magenta underline decoration-2 underline-offset-4' : '',
              ].join(' ')}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <main id="main-content" className="relative z-10 px-4 pt-24 md:px-8">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="relative z-10 mt-32 py-12 text-center font-manrope text-text-main">
        <div className="glass-panel tilt-r mx-auto inline-block max-w-3xl p-6">
          <p className="text-base">Diseñado y desarrollado por Luciano Piancatelli.</p>
          <p className="mt-2 text-sm opacity-70">© {new Date().getFullYear()} · Construido con React, Vite y Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

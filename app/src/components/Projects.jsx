import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'JOBLU',
      description: 'Plataforma para la búsqueda laboral: crea CVs optimizados para sistemas ATS con ayuda de IA, permite guardar vacantes y tiene un foro para compartir experiencias de entrevistas. Fue mi proyecto de tesis.',
      role: 'Mi rol: full stack, con el foco en la interfaz en React.',
      result: 'Incluye un modo demo con un clic para explorarla sin registrarse.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind', 'OpenAI'],
      github: 'https://github.com/LucianoPiancatelli/Tesis-Joblu',
      live: 'https://joblu.vercel.app/',
      image: '/projects/joblu.png',
    },
    {
      title: 'Multiverse Comics',
      description: 'Tienda online de cómics de DC y Marvel con catálogo, carrito, cuentas de usuario, blog de noticias y administración de productos.',
      role: 'Mi rol: full stack con Laravel, diseño de la interfaz y base de datos.',
      result: 'Diseño responsive con identidad visual propia.',
      tech: ['PHP', 'Laravel 11', 'MySQL', 'Tailwind', 'Vite', 'Blade'],
      github: 'https://github.com/LucianoPiancatelli/multiverse-comics',
      live: 'https://multiverse-comics-b5qp.onrender.com/',
      image: '/projects/multiverse.webp',
    },
  ];

  const tilts = ['tilt-l', 'tilt-r'];

  return (
    <section id="projects" className="relative z-10 w-full px-4 py-24 md:px-8">
      <div className="anime-reveal mb-20 text-center">
        <h2 className="typewriter hero-line block pb-4 text-5xl font-bold text-text-main md:text-6xl bg-gradient-to-r from-cyan to-blue-400 bg-clip-text text-transparent text-glow-cyan">
          Proyectos
        </h2>
        <div className="gothic-divider mx-auto mt-4" />
      </div>

      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`glass-panel glass-panel-hover anime-reveal ${tilts[index % tilts.length]} ${index % 2 === 0 ? '' : 'alt'} group relative flex h-full flex-col overflow-hidden transform-gpu`}
            style={{ '--reveal-delay': `${index * 120}ms` }}
          >
            <div className="relative w-full overflow-hidden border-b-2 border-text-main bg-obsidian-light aspect-[16/9]">
              <img
                src={project.image}
                alt={`Vista previa de ${project.title}`}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
                width="1280"
                height="720"
                style={{ filter: 'sepia(0.18) contrast(0.95) saturate(0.85)' }}
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 mix-blend-multiply opacity-40"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='160' height='160' filter='url(%23n)' opacity='0.35'/></svg>\")",
                }}
              />
            </div>

            <div className="project-content relative z-10 flex flex-grow flex-col p-6">
              <h3 className="mb-3 text-3xl font-bold text-text-main transition-colors group-hover:text-magenta">{project.title}</h3>
              <p className="mb-6 flex-grow text-base leading-relaxed text-text-main">{project.description}</p>

              <div className="mb-6 space-y-3">
                <div className="flex flex-col gap-1 text-base text-text-main/80">
                  <div className="text-base font-medium text-text-main">{project.role}</div>
                  <div className="text-base text-text-main/80">{project.result}</div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="sketch-chip text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex items-center justify-between gap-4 border-t-2 border-dashed border-text-main/40 pt-4">
                <a href={project.github} target="_blank" rel="noreferrer" className="group/link flex items-center gap-2 text-base font-semibold text-text-main transition-colors hover:text-magenta">
                  <span className="draw-on-view inline-flex">
                    <Github size={18} />
                  </span>
                  <span>Código</span>
                </a>

                {project.live ? (
                  <a href={project.live} target="_blank" rel="noreferrer" className="group/link flex items-center gap-2 text-base font-semibold text-text-main transition-colors hover:text-cyan">
                    <span>Ver sitio</span>
                    <span className="draw-on-view inline-flex">
                      <ExternalLink size={18} />
                    </span>
                  </a>
                ) : (
                  <span className="text-base font-semibold text-text-main/60">Sin demo pública</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

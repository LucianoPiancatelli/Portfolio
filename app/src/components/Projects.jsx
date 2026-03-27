import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'JOBLU',
      description: 'Plataforma full stack enfocada en mejorar la búsqueda laboral con IA, generación de CV optimizados para ATS y herramientas para vacantes y networking profesional.',
      tech: ['React', 'Node.js', 'Express', 'Tailwind', 'MongoDB', 'OpenAI'],
      github: 'https://github.com/LucianoPiancatelli/Tesis-Joblu',
      live: 'https://joblu.vercel.app/',
      image: '/projects/joblu.png',
      color: 'from-cyan to-blue-600',
    },
    {
      title: 'Multiverse Comics',
      description: 'E-commerce de cómics construido con Laravel, catálogo dinámico, gestión de productos y una experiencia pensada para una comunidad de lectores.',
      tech: ['PHP', 'Laravel 11', 'MySQL', 'Tailwind', 'Vite', 'Blade'],
      github: 'https://github.com/LucianoPiancatelli/multiverse-comics',
      live: '',
      image: '/projects/multiverse.png',
      color: 'from-magenta to-purple-600',
    },
    {
      title: 'Gusto Argento',
      description: 'Landing page para un restaurante de comida argentina con foco en identidad visual, presentación de marca y captación rápida.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      github: 'https://github.com/LucianoPiancatelli/Gusto-Argento',
      live: 'https://gustoargentodavinci.netlify.app/',
      image: '/projects/gusto-argento.png',
      color: 'from-cyan to-magenta',
    },
  ];

  return (
    <section id="projects" className="relative z-10 w-full px-4 py-24 md:px-8">
      <div className="anime-reveal mb-20 text-center">
        <h2 className="inline-block pb-4 text-5xl font-bold text-white">
          Proyectos <span className="bg-gradient-to-r from-cyan to-blue-400 bg-clip-text text-transparent text-glow-cyan">Destacados</span>
        </h2>
        <div className="mx-auto mt-4 h-px w-32 bg-gradient-to-r from-transparent via-cyan to-transparent" />
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="glass-panel glass-panel-hover anime-reveal group relative flex h-full cursor-pointer flex-col overflow-hidden transform-gpu transition-all duration-500 hover:-translate-y-2"
            style={{ '--reveal-delay': `${index * 120}ms` }}
          >
            <div className={`pointer-events-none absolute -inset-10 -z-10 rounded-full bg-gradient-to-br ${project.color} opacity-0 blur-[100px] transition-all duration-500 mix-blend-screen group-hover:scale-110 group-hover:opacity-100`} />

            <div className="relative h-48 w-full overflow-hidden border-b border-border-glass bg-obsidian-light">
              <img
                src={project.image}
                alt={`Vista previa de ${project.title}`}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjwvcmVjdD4KPHBhdGggZD0iTTAgMEw4IDhaTTggMEwwIDhaIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjE1IiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-light to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-40" />

              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                {project.tech.slice(0, 2).map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-black/50 px-2 py-1 font-syne text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                    {tech}
                  </span>
                ))}
                {project.tech.length > 2 ? (
                  <span className="rounded-full border border-white/10 bg-black/50 px-2 py-1 font-syne text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                    +{project.tech.length - 2}
                  </span>
                ) : null}
              </div>
            </div>

            <div className="project-content relative z-10 flex flex-grow flex-col p-6 transition-transform duration-500 group-hover:-translate-y-2">
              <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-cyan">{project.title}</h3>
              <p className="mb-6 flex-grow text-sm leading-relaxed text-text-muted">{project.description}</p>

              <div className="invisible mb-8 flex h-0 flex-wrap gap-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:h-auto group-hover:opacity-100">
                {project.tech.map((tech) => (
                  <span key={tech} className="border-b border-cyan/20 px-1 font-mono text-xs text-cyan/70">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between gap-4 border-t border-border-glass pt-4">
                <a href={project.github} target="_blank" rel="noreferrer" className="group/link flex items-center gap-2 text-sm font-semibold text-text-muted transition-colors hover:text-white">
                  <Github size={18} className="transition-colors group-hover/link:text-magenta" />
                  <span>Código</span>
                </a>

                {project.live ? (
                  <a href={project.live} target="_blank" rel="noreferrer" className="group/link flex items-center gap-2 text-sm font-semibold text-text-muted transition-colors hover:text-white">
                    <span>Ver sitio</span>
                    <ExternalLink size={18} className="transition-colors group-hover/link:text-cyan" />
                  </a>
                ) : (
                  <span className="text-sm font-semibold text-text-muted/60">Sin demo pública</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { Briefcase, Landmark } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Empleado de Logística',
      company: 'DFV S.R.L',
      date: 'May 2023 - Oct 2024',
      description: 'Coordinación y armado de hojas de ruta, control de stock, expedición y preparación de pedidos en entornos logísticos de alta rotación.',
      icon: <Briefcase className="h-3 w-3 text-white" />,
      color: 'from-cyan to-blue-500',
    },
    {
      title: 'Atención al Cliente',
      company: 'Burger King',
      date: 'Dic 2017 - May 2018',
      description: 'Gestión directa de atención al cliente en un entorno de comida rápida, resolución de conflictos y trabajo bajo presión constante.',
      icon: <Briefcase className="h-3 w-3 text-white" />,
      color: 'from-magenta to-pink-500',
    },
    {
      title: 'Cadete Administrativo',
      company: 'Ancamar S.A',
      date: 'Jun 2017 - Dic 2017',
      description: 'Trámites administrativos generales, control de depósito y organización física de expedientes y pedidos.',
      icon: <Landmark className="h-3 w-3 text-white" />,
      color: 'from-orange-400 to-red-500',
    },
  ];

  return (
    <section id="experience" className="relative z-10 w-full px-4 py-24 md:px-8">
      <div className="anime-reveal mb-20 text-center">
        <h2 className="inline-block pb-4 text-4xl font-bold text-white md:text-5xl">
          Trayectoria <span className="bg-gradient-to-r from-cyan to-blue-400 bg-clip-text text-transparent text-glow-cyan">Laboral</span>
        </h2>
        <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-cyan to-transparent" />
      </div>

      <div className="relative">
        <div className="timeline-line anime-reveal absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-cyan via-magenta to-transparent md:left-8" />

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div
              key={experience.title}
              className="timeline-item anime-reveal group relative pr-4 pl-16 transform-gpu md:pl-24"
              style={{ '--reveal-delay': `${index * 120}ms` }}
            >
              <div className={`timeline-dot absolute left-4 top-6 z-10 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border border-obsidian bg-gradient-to-br ${experience.color} shadow-[0_0_15px_currentColor] ring-4 ring-obsidian transition-transform duration-300 group-hover:scale-125 md:left-6`}>
                {experience.icon}
              </div>

              <div className="absolute left-6 top-[1.35rem] h-px w-8 bg-border-glass md:left-8 md:w-16" />

              <div className="glass-panel group relative p-6 transition-all duration-300 hover:translate-x-2 hover:border-white/20 md:p-8">
                <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="mb-1 text-2xl font-bold text-white transition-colors group-hover:text-cyan">{experience.title}</h3>
                    <h4 className="font-semibold text-text-muted">{experience.company}</h4>
                  </div>

                  <span className="whitespace-nowrap rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 font-syne text-sm text-cyan">
                    {experience.date}
                  </span>
                </div>

                <p className="text-sm font-light leading-relaxed text-text-muted md:text-base">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
